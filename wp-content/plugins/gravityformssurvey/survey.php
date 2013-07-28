<?php
/*
Plugin Name: Gravity Forms Survey Add-On
Plugin URI: http://www.gravityforms.com
Description: Survey Add-on for Gravity Forms
Version: 1.0.1
Author: Rocketgenius
Author URI: http://www.rocketgenius.com

------------------------------------------------------------------------
Copyright 2012-2013 Rocketgenius Inc.

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
*/


add_action('init', array('GFSurvey', 'init'));

add_filter('gform_export_field_value', array('GFSurvey', 'display_entries_field_value'), 10, 4);

//------------------------------------------
class GFSurvey {

    private static $path = "gravityformssurvey/survey.php";
    private static $url = "http://www.gravityforms.com";
    private static $slug = "gravityformssurvey";
    private static $version = "1.0.1";
    private static $min_gravityforms_version = "1.6.4.5.12";

    private static $_form_meta_by_id = array();

    //Plugin starting point. Will load appropriate files
    public static function init() {

        if (basename($_SERVER['PHP_SELF']) == "plugins.php") {
            // loading translations
            load_plugin_textdomain('gravityformssurvey', FALSE, '/gravityformssurvey/languages');
            add_action('after_plugin_row_' . self::$path, array('GFSurvey', 'plugin_row'));
        }

        if (!self::is_gravityforms_supported()) {
            return;
        }

        self::register_scripts();

        if (is_admin()) {
            // loading translations
            load_plugin_textdomain('gravityformssurvey', FALSE, '/gravityformssurvey/languages');

            // form editor
            add_filter('gform_add_field_buttons', array('GFSurvey', 'add_survey_field'));
            add_filter('gform_field_type_title', array('GFSurvey', 'assign_title'), 10, 2);
            add_action('gform_field_standard_settings', array('GFSurvey', 'survey_field_settings'), 10, 2);
            add_filter('gform_tooltips', array('GFSurvey', 'add_survey_tooltips'));

            // scripts
            add_action('admin_enqueue_scripts', array('GFSurvey', 'enqueue_admin_styles'));
            add_action('admin_enqueue_scripts', array('GFSurvey', 'enqueue_admin_scripts'));
            add_action('gform_enqueue_scripts', array('GFSurvey', 'enqueue_gsurvey_form_editor_js'), 10, 2);
            add_filter('gform_noconflict_scripts', array('GFSurvey', 'register_noconflict_scripts'));
            add_filter('gform_noconflict_styles', array('GFSurvey', 'register_noconflict_styles'));

            //display results on entry list
            add_filter('gform_entries_field_value', array('GFSurvey', 'display_entries_field_value'), 10, 4);

            //declare arrays on form import
            add_filter('gform_import_form_xml_options', array('GFSurvey', 'import_file_options'));

            //add top toolbar menu item
            add_filter("gform_toolbar_menu", array('GFSurvey', 'add_toolbar_menu_item'), 10, 2);
            //add custom form action
            add_filter("gform_form_actions", array('GFSurvey', 'add_form_action'), 10, 2);

            if (self::has_members_plugin())
                add_filter('members_get_capabilities', array("GFSurvey", "members_get_capabilities"));

            //Automatic upgrade functionality
            add_filter('transient_update_plugins', array('GFSurvey', 'check_update'));
            add_filter('site_transient_update_plugins', array('GFSurvey', 'check_update'));
            add_action('install_plugins_pre_plugin-information', array('GFSurvey', 'display_changelog'));

            //add the gf_quiz_results view
            add_action("gform_view", array('GFSurvey', 'add_view'), 10, 2);

            //results page ajax
            if (RG_CURRENT_PAGE == "admin-ajax.php") {
                if (rgpost("view") == "gf_survey_results") {
                    require_once(self::get_base_path() . "/results.php");
                    add_action('wp_ajax_gresults_get_results_gf_survey_results', array('GFResults', 'ajax_get_results'));
                    add_action('wp_ajax_gresults_get_more_results_gf_survey_results', array('GFResults', 'ajax_get_more_results'));
                }

            }

        } else {
            add_action('gform_enqueue_scripts', array('GFSurvey', 'enqueue_front_end_scripts'), 10, 2);

            add_filter('gform_validation', array('GFSurvey', 'validation'));

            // ManageWP premium update filters
            add_filter('mwp_premium_update_notification', array('GFSurvey', 'premium_update_push'));
            add_filter('mwp_premium_perform_update', array('GFSurvey', 'premium_update'));

            // merge tags
            add_filter('gform_merge_tag_filter', array('GFSurvey', 'merge_tag_filter'), 10, 5);

            //------------------- admin but outside admin context ------------------------

            // enqueue styles for the preview & print pages - admin but outside admin context
            add_filter("gform_preview_styles", array('GFSurvey', 'enqueue_preview_style'), 10, 2);
            add_filter("gform_print_styles", array('GFSurvey', 'enqueue_preview_style'), 10, 2);

        }


        //------------------- both outside and inside admin context ------------------------

        // render field
        add_filter('gform_field_input', array('GFSurvey', 'get_survey_field_content'), 10, 5);

        // add a special class to likert fields so we can identify them later
        add_action('gform_field_css_class', array('GFSurvey', 'add_custom_class'), 10, 3);

        // display survey results on entry detail
        add_filter('gform_entry_field_value', array('GFSurvey', 'display_survey_fields_on_entry_detail'), 10, 4);

    } // end function init


    //--------------  Front-end UI functions  ---------------------------------------------------

    public static function validation($validation_result){
        $form = $validation_result["form"];

        $survey_fields = GFCommon::get_fields_by_type($form, array('survey'));

        if (empty ($survey_fields))
            return $validation_result;

        foreach($form["fields"] as &$field){
            $input_type = GFFormsModel::get_input_type($field);
            if("likert" == $input_type && rgar($field, "gsurveyLikertEnableMultipleRows") && rgar($field, "isRequired")){
                $is_hidden = RGFormsModel::is_field_hidden($form, $field, array());
                $field_page = $field['pageNumber'];
                $current_page = rgpost('gform_source_page_number_' . $form['id']) ? rgpost('gform_source_page_number_' . $form['id']) : 1;
                if($field_page != $current_page || $is_hidden)
                    continue;

                // loop through responses to make sure all rows have values
                $incomplete = false;
                $rows = rgar($field, "gsurveyLikertRows");
                $i = 1;
                foreach($rows as $row){
                    if($i % 10 == 0) //hack to skip numbers ending in 0. so that 5.1 doesn't conflict with 5.10
                        $i++;
                    $field_id = $field['id'] . "_" . (string)((int)$i++);
                    $field_value = rgpost("input_{$field_id}");
                    if(empty($field_value)){
                        $incomplete = true;
                        break;
                    }
                }

                if($incomplete){
                    $field["failed_validation"] = true;
                    $field["validation_message"] = rgar($field,"errorMessage") ? rgar($field,"errorMessage") : __("This field is required");
                    $validation_result["is_valid"] = false;
                }


                continue;
            }
        }

        //Assign modified $form object back to the validation result
        $validation_result["form"] = $form;
        return $validation_result;

    }


    public function merge_tag_filter($value, $merge_tag, $options, $field, $raw_value) {
        if ($field["type"] != "survey")
            return $value;

        $input_type = GFFormsModel::get_input_type($field);
        if ($input_type == "likert" && rgar($field, "gsurveyLikertEnableMultipleRows")) {

            //replacing value with text
            if (empty($value)) {
                $new_value = "<ul class='gsurvey-likert-entry'>";
                $i = 0;
                foreach ($raw_value as $v) {
                    $row_text = self::get_likert_row_text($field,  $i++);
                    $col_text = self::get_likert_column_text($field, $v);
                    $new_value .= sprintf("<li>%s: %s</li>", $row_text, $col_text);
                }
                $new_value .= "</ul>";

            } else {
                $new_value = self::get_likert_column_text($field, $value);
            }


        } elseif ($input_type == "rank" && is_array($field["choices"])) {
            $ordered_values = explode(",", $value);
            $new_value      = "<ol class='gsurvey-rank-entry'>";
            foreach ($ordered_values as $ordered_value) {
                $ordered_label = GFCommon::selection_display($ordered_value, $field, $currency = "", $use_text = true);
                $new_value .= sprintf("<li>%s</li>", $ordered_label);
            }
            $new_value .= "</ol>";
        } else {
            $new_value = GFFormsModel::get_choice_text($field, $value);
        }

        return $new_value;
    }


    public function get_survey_field_content($content, $field, $value, $lead_id, $form_id, $lead = null) {
        if ($field["type"] != "survey")
            return $content;
        $sub_type = rgar($field, "inputType");
        switch ($sub_type) {
            case "likert" :
                $multiple_rows = rgar($field, "gsurveyLikertEnableMultipleRows");
                $field_id      = $field["id"];
                $num_rows      = $multiple_rows ? count($field["gsurveyLikertRows"]) : 1;
                $table_id      = "id='input_{$form_id}_{$field_id}'";

                $content = "<div class='ginput_container'>";
                $content .= "<table {$table_id} class='gsurvey-likert'>";
                $content .= "<tr>";
                if ($multiple_rows)
                    $content .= "<td class='gsurvey-likert-row-label'></td>";

                $disabled_text = ((IS_ADMIN && RG_CURRENT_VIEW != "entry") || (IS_ADMIN && RG_CURRENT_VIEW == "entry" && "edit" != rgpost("screen_mode"))) ? "disabled='disabled'" : "";
                foreach ($field["choices"] as $choice) {
                    $content .= "<td class='gsurvey-likert-choice-label'>";
                    $content .= $choice["text"];

                    $content .= "</td>";
                }
                $content .= "</tr>";
                $row_id = 1;
                for ($i = 1; $i <= $num_rows; $i++) {
                    if($row_id % 10 == 0) //hack to skip numbers ending in 0. so that 5.1 doesn't conflict with 5.10
                        $row_id++;

                    $row_text  = $field["gsurveyLikertRows"][$i - 1]["text"];
                    $row_value = $field["gsurveyLikertRows"][$i - 1]["value"];
                    $content .= "<tr>";
                    if ($multiple_rows)
                        $content .= "<td class='gsurvey-likert-row-label'>{$row_text}</td>";
                    $choice_id = 1;
                    foreach ($field["choices"] as $choice) {
                        if($choice_id % 10 == 0) //hack to skip numbers ending in 0. so that 5.1 doesn't conflict with 5.10
                            $choice_id++;
                        $id = $field["id"] . '_' . $row_id . "_" . $choice_id;

                        $field_value = $multiple_rows ? $row_value . ":" . $choice["value"] : $choice["value"];
                        $cell_class  = "gsurvey-likert-choice";
                        $checked     = "";
                        $selected    = false;
                        if (rgblank($value) && empty($lead)) {
                            $checked = "";
                        } else {

                            if ($multiple_rows) {
                                $input_name = $field["id"] . "." . $row_id;
                                if(is_array($value) && isset($value[$input_name])){
                                    $response_value = $value[$input_name];
                                    $selected       = $response_value == $field_value ? true : false;
                                } else {
                                    if ($lead == null)
                                        $lead = GFFormsModel::get_lead($lead_id);
                                    if(false === $lead) {
                                        $selected = false;
                                    } else {
                                        $response_col_val = self::get_likert_col_val_for_row_from_entry($row_value, $field_id, $lead);
                                        $selected       = $response_col_val == $choice["value"] ? true : false;
                                    }
                                }
                            } else {
                                $selected = $choice["value"] == $value ? true: false;
                            }

                        }
                        if ($selected) {
                            $checked    = "checked='checked'";
                            $cell_class = $cell_class . " gsurvey-likert-selected";
                        }
                        $logic_event = (empty($field["conditionalLogicFields"]) || IS_ADMIN) ? "" : "onclick='gf_apply_rules(" . $field["formId"] . "," . GFCommon::json_encode($field["conditionalLogicFields"]) . ");'";
                        $tabindex    = GFCommon::get_tabindex();
                        $content .= "<td class='$cell_class'>";

                        if ($multiple_rows) { //
                            $input_id = sprintf("input_%d.%d", $field_id, $row_id);
                        } else {
                            $input_id = sprintf("input_%d", $field_id);
                        }
                        $content .= sprintf("<input name='$input_id' type='radio' $logic_event value='%s' %s id='choice_%s' $tabindex %s />", esc_attr($field_value), $checked, $id, $disabled_text);
                        $content .= "</td>";
                        $choice_id++;
                    }
                    $row_id++;
                    $content .= "</tr>";
                }


                $content .= "</table>";
                $content .= '</div>';
                break;
            case "rank" :

                $field_id = $field["id"];
                $input_id = "gsurvey-rank-{$form_id}-{$field_id}";
                $content  = "<div class='ginput_container'>";
                $content .= "<ul id='{$input_id}' class='gsurvey-rank'>";

                $handle_image_url = self::get_base_url() . "/images/arrow-handle.png";
                $choice_id        = 0;
                $count            = 1;
                $choices          = array();
                //if ((RG_CURRENT_VIEW == "entry" || (is_admin() && rgget("page")) == "gf_results") && false === empty($value)) {
                if (false === empty($value)) {
                    $ordered_values = explode(",", $value);
                    foreach ($ordered_values as $ordered_value) {
                        $choices[] = array(
                            "value" => $ordered_value,
                            "text"  => RGFormsModel::get_choice_text($field, $ordered_value)
                        );
                    }
                } else {
                    $choices = $field["choices"];
                }

                foreach ($choices as $choice) {
                    $id          = $field["id"] . '_' . $choice_id++;
                    $field_value = !empty($choice["value"]) || rgar($field, "enableChoiceValue") ? $choice["value"] : $choice["text"];

                    $content .= sprintf("<li data-index='{$choice_id}' class='gsurvey-rank-choice choice_%s' id='{$field_value}' ><img src='{$handle_image_url}'  alt='' />%s</li>", $id, $choice["text"]);
                    if (IS_ADMIN && RG_CURRENT_VIEW != "entry" && $count >= 5)
                        break;
                    $count++;

                }
                $content .= "</ul>";
                $content .= sprintf("<input type='hidden' id='{$input_id}-hidden' name='input_%d' />", $field_id);
                $content .= '</div>';
                break;
            case "rating" :
                $field_id      = $field["id"];
                $div_id        = "input_{$form_id}_{$field_id}";
                $disabled_text = (IS_ADMIN && RG_CURRENT_VIEW != "entry") ? "disabled='disabled'" : "";
                $content       = "<div class='gsurvey-rating-wrapper'><div id='{$div_id}' class='gsurvey-rating'>";
                $choice_id     = 0;
                $count         = 1;
                foreach ($field["choices"] as $choice) {
                    $id = $field["id"] . '_' . $choice_id++;

                    $field_value = !empty($choice["value"]) || rgar($field, "enableChoiceValue") ? $choice["value"] : $choice["text"];

                    if (rgblank($value) && RG_CURRENT_VIEW != "entry") {
                        $checked = rgar($choice, "isSelected") ? "checked='checked'" : "";
                    } else {
                        $checked = RGFormsModel::choice_value_match($field, $choice, $value) ? "checked='checked'" : "";
                    }
                    $logic_event = (empty($field["conditionalLogicFields"]) || IS_ADMIN) ? "" : "onclick='gf_apply_rules(" . $field["formId"] . "," . GFCommon::json_encode($field["conditionalLogicFields"]) . ");'";
                    $tabindex    = GFCommon::get_tabindex();

                    $choice_label = $choice["text"];
                    $content .= sprintf("<input name='input_%d' type='radio' $logic_event value='%s' %s id='choice_%s' $tabindex %s /><label for='choice_%s' title='%s'>%s</label>", $field_id, esc_attr($field_value), $checked, $id, $disabled_text, $id, $choice_label, $choice_label);

                    if (IS_ADMIN && RG_CURRENT_VIEW != "entry" && $count >= 5)
                        break;
                    $count++;

                }
                $content .= "</div></div>";

        }

        return $content;

    }

    public static function get_likert_col_val_for_row_from_entry($row_value, $field_id, $entry){
        foreach($entry as $key=>$value){
            if(intval($key)!=$field_id)
                continue;
            if(false === strpos($value, ":"))
                continue;
            list($row_id, $col_id) = explode(":", $value, 2);
            if($row_value == $row_id)
                return $col_id;
        }
        return false;
    }


    //--------------  Scripts & Styles  ---------------------------------------------------

    function enqueue_front_end_scripts($form, $is_ajax) {
        $survey_fields = GFCommon::get_fields_by_type($form, array('survey'));


        if (empty ($survey_fields))
            return;
        wp_enqueue_script('jquery');

        wp_enqueue_script('jquery-ui-sortable');
        wp_enqueue_style('gsurvey_css');
        wp_enqueue_script('gsurvey_js');
    }

    public function register_noconflict_scripts($scripts) {

        //registering script with Gravity Forms so that it gets enqueued when running on no-conflict mode
        $scripts[] = "gsurvey_form_editor_js";
        $scripts[] = "gsurvey_js";
        $scripts[] = "gsurvey_results_js";
        $scripts[] = "jquery-ui-resizable";
        $scripts[] = "google_charts";
        $scripts[] = "jquery-ui-sortable";


        return $scripts;
    }

    public function register_noconflict_styles($styles) {

        //registering styles with Gravity Forms so that it gets enqueued when running on no-conflict mode
        $styles[] = "gsurvey_css";
        $styles[] = "gsurvey_form_editor_css";
        $styles[] = "gsurvey_results_css";

        return $styles;
    }

    public static function enqueue_preview_style($styles, $form) {
        $survey_fields = GFCommon::get_fields_by_type($form, array('survey'));
        if (false === empty ($survey_fields))
            $styles[] = "gsurvey_css";

        return $styles;
    }

    public function enqueue_admin_styles() {
        $id   = rgget("id");
        $view = rgget("view");
        if (rgget("page") == "gf_edit_forms" && rgget("view") == "gf_survey_results") {
            if (version_compare(GFCommon::$version, "1.6.999", '>')) {
                wp_enqueue_style('jquery-ui-styles', GFCommon::get_base_url() . '/css/datepicker.css');
            }
            wp_enqueue_style('gsurvey_css');
            wp_enqueue_style('gsurvey_results_css');
        } elseif ((rgget("page") == "gf_edit_forms" && !empty($id) && empty($view)) || rgget("page") == "gf_new_form") {
            wp_enqueue_style('gsurvey_form_editor_css');
            wp_enqueue_style('gsurvey_css');
        } elseif (rgget("page") == "gf_entries" && $view == "entry") {
            wp_enqueue_style('gsurvey_css');
        }

    }

    public function enqueue_admin_scripts() {
        $id   = rgget("id");
        $view = rgget("view");
        if (rgget("page") == "gf_edit_forms" && rgget("view") == "gf_survey_results") {
            wp_enqueue_script('jquery-ui-resizable', false, array('jquery'), false, false);
            if (version_compare(GFCommon::$version, "1.6.999", '>')) {
                wp_enqueue_script('jquery-ui-datepicker', false, array('jquery'), false, false);
            }
            wp_enqueue_script('google_charts');
            wp_enqueue_script('google_charts', 'https://www.google.com/jsapi');
            wp_enqueue_script('gsurvey_results_js');
            self::localize_results_scripts();
        } elseif ((rgget("page") == "gf_edit_forms" && !empty($id) && empty($view)) || rgget("page") == "gf_new_form") {
            wp_enqueue_script('gsurvey_form_editor_js');
            self::localize_scripts();
        } elseif (rgget("page") == "gf_entries" && $view == "entry") {
            wp_enqueue_script('gsurvey_js');
            self::localize_scripts();
        }
    }

    public function enqueue_gsurvey_form_editor_js($form, $is_ajax) {
        wp_enqueue_script('gsurvey_form_editor_js');
    }

    public function register_scripts() {
        wp_register_script('google_charts', 'https://www.google.com/jsapi');
        wp_register_script('gsurvey_form_editor_js', plugins_url('js/gsurvey_form_editor.js', __FILE__), array('jquery'), self::$version);
        wp_register_style('gsurvey_form_editor_css', plugins_url('css/gsurvey_form_editor.css', __FILE__), null, self::$version);
        wp_register_script('gsurvey_js', plugins_url('js/gsurvey.js', __FILE__), array('jquery','jquery-ui-sortable'), self::$version);
        wp_register_script('gsurvey_results_js', plugins_url('js/gsurvey_results.js', __FILE__), array('jquery'), self::$version);
        wp_register_style('gsurvey_css', plugins_url('css/gsurvey.css', __FILE__), null, self::$version);
        wp_register_style('gsurvey_results_css', plugins_url('css/gsurvey_results.css', __FILE__), null, self::$version);

    } // end function register_scripts


    public static function localize_scripts() {

        // Get current page protocol
        $protocol = isset($_SERVER["HTTPS"]) ? 'https://' : 'http://';
        // Output admin-ajax.php URL with same protocol as current page
        $params = array(
            'ajaxurl'   => admin_url('admin-ajax.php', $protocol),
            'imagesUrl' => self::get_base_url() . "/images"
        );
        wp_localize_script('gsurvey_form_editor_js', 'gsurveyVars', $params);

        //localize strings for the js file
        $strings = array(
            'firstChoice'      => __("First row", "gravityformssurvey"),
            'secondChoice'     => __("Second row", "gravityformssurvey"),
            'thirdChoice'      => __("Third row", "gravityformssurvey"),
            'fourthChoice'     => __("Fourth row", "gravityformssurvey"),
            'fifthChoice'      => __("Fifth row", "gravityformssurvey"),
            'dragToReOrder'    => __("Drag to re-order", "gravityformssurvey"),
            'addAnotherRow'    => __("Add another row", "gravityformssurvey"),
            'removeThisRow'    => __("Remove this row", "gravityformssurvey"),
            'addAnotherColumn' => __("Add another column", "gravityformssurvey"),
            'removeThisColumn' => __("Remove this column", "gravityformssurvey"),
            'columnLabel1'     => __("Strongly disagree", "gravityformssurvey"),
            'columnLabel2'     => __("Disagree", "gravityformssurvey"),
            'columnLabel3'     => __("Neutral", "gravityformssurvey"),
            'columnLabel4'     => __("Agree", "gravityformssurvey"),
            'columnLabel5'     => __("Strongly agree", "gravityformssurvey")

        );
        wp_localize_script('gsurvey_form_editor_js', 'gsurveyLikertStrings', $strings);

        //localize strings for the rank field
        $rank_strings = array(
            'firstChoice'  => __("First Choice", "gravityformssurvey"),
            'secondChoice' => __("Second Choice", "gravityformssurvey"),
            'thirdChoice'  => __("Third Choice", "gravityformssurvey"),
            'fourthChoice' => __("Fourth Choce", "gravityformssurvey"),
            'fifthChoice'  => __("Fifth Choice", "gravityformssurvey")
        );
        wp_localize_script('gsurvey_form_editor_js', 'gsurveyRankStrings', $rank_strings);

        //localize strings for the ratings field
        $rating_strings = array(
            'firstChoice'  => __("Excellent", "gravityformssurvey"),
            'secondChoice' => __("Pretty good", "gravityformssurvey"),
            'thirdChoice'  => __("Neutral", "gravityformssurvey"),
            'fourthChoice' => __("Not so great", "gravityformssurvey"),
            'fifthChoice'  => __("Terrible", "gravityformssurvey")
        );
        wp_localize_script('gsurvey_form_editor_js', 'gsurveyRatingStrings', $rating_strings);

    }

    public static function localize_results_scripts() {

        $filter_fields    = rgget("f");
        $filter_types     = rgget("t");
        $filter_operators = rgget("o");
        $filter_values    = rgget("v");

        // Get current page protocol
        $protocol = isset($_SERVER["HTTPS"]) ? 'https://' : 'http://';
        // Output admin-ajax.php URL with same protocol as current page

        $vars = array(
            'ajaxurl'         => admin_url('admin-ajax.php', $protocol),
            'imagesUrl'       => self::get_base_url() . "/images",
            'filterFields'    => $filter_fields,
            'filterTypes'     => $filter_types,
            'filterOperators' => $filter_operators,
            'filterValues'    => $filter_values
        );

        wp_localize_script('gsurvey_results_js', 'gresultsVars', $vars);

        $strings = array(
            'noFilters'         => __("No filters", "gravityformspolls"),
            'addFieldFilter'    => __("Add a field filter", "gravityformspolls"),
            'removeFieldFilter' => __("Remove a field filter", "gravityformspolls"),
            'ajaxError'         => __("Error retrieving results. Please contact support.", "gravityformspolls")
        );

        wp_localize_script('gsurvey_results_js', 'gresultsStrings', $strings);

    }


    //--------------  Admin functions  ---------------------------------------------------

    public static function import_file_options($options) {
        $options["gsurveyLikertRow"] = array("unserialize_as_array" => true);

        return $options;
    }

    public static function add_view($view, $form_id) {
        if ($view == "gf_survey_results") {

            require_once(self::get_base_path() . "/results.php");
            GFResults::results_page($form_id, array('survey'), __("Survey Results", "gravityformssurvey"), "gf_edit_forms", $view);
        }
    }

    public static function has_members_plugin() {
        return function_exists('members_get_capabilities');
    }

    public static function members_get_capabilities($caps) {
        return array_merge($caps, array("gravityforms_survey_results"));
    }

    public static function get_form_meta($form_id) {
        $form_metas = self::$_form_meta_by_id;

        if (empty($form_metas)) {
            $form_ids = array();
            $forms    = RGFormsModel::get_forms();
            foreach ($forms as $form) {
                $form_ids[] = $form->id;
            }
            //backwards compatiblity with <1.7
            if (method_exists('GFFormsModel', 'get_form_meta_by_id'))
                $form_metas = GFFormsModel::get_form_meta_by_id($form_ids);
            else
                $form_metas = GFFormsModel::get_forms_by_id($form_ids);

            self::$_form_meta_by_id = $form_metas;
        }
        foreach ($form_metas as $form_meta) {
            if ($form_meta["id"] == $form_id)
                return $form_meta;
        }

    }

    public static function add_form_action($actions, $form_id) {

        if (isset($actions["settings"]))
            return self::menu_items($actions, $form_id, true);

        $new_actions   = $actions;
        $form_meta     = self::get_form_meta($form_id);
        $survey_fields = GFCommon::get_fields_by_type($form_meta, array('survey'));
        if (false === empty($survey_fields)) {
            $results_link = '<a href="' . admin_url("admin.php?page=gf_edit_forms&view=gf_survey_results&id={$form_id}") . '">' . __("Results", "gravityformsquiz") . "</a>";

            $offset      = 3;
            $new_actions = array_slice($actions, 0, $offset, true) +
                array('results' => $results_link) +
                array_slice($actions, $offset, NULL, true);
        }

        return $new_actions;
    }

    public static function add_toolbar_menu_item($menu_items, $form_id) {
        return self::menu_items($menu_items, $form_id, false);
    }

    public static function menu_items($menu_items, $form_id, $compact) {
        $form_meta     = self::get_form_meta($form_id);
        $survey_fields = GFCommon::get_fields_by_type($form_meta, array('survey'));
        if (false === empty($survey_fields)) {
            $form_id    = $form_meta["id"];
            $link_class = "";
            if (rgget("page") == "gf_new_form")
                $link_class = "gf_toolbar_disabled";
            else if (rgget("page") == "gf_edit_forms" && rgget("view") == "gf_survey_results")
                $link_class = "gf_toolbar_active";

            $sub_menu_items   = array();
            $sub_menu_items[] = array(
                'label'        => __("Survey Results", "gravityformssurvey"),
                'title'        => __("View survey results generated by this form", "gravityformssurvey"),
                'link_class'   => $link_class,
                'url'          => admin_url("admin.php?page=gf_edit_forms&view=gf_survey_results&id={$form_id}"),
                'capabilities' => array("gravityforms_survey_results")
            );

            // test submenu item
            /*
            $sub_menu_items[] = array(
                'label' 		=> __("Test menu item", "gravityformsquiz"),
                'title' 		=> __("This is the title", "gravityformsquiz"),
                'url' 			=> "http://google.com",
                'capabilities' => array("gravityforms_quiz_results")
            );
            */

            if (isset($menu_items["results"])) {
                $existing_link_class = $menu_items["results"]["link_class"];
                $link_class == empty($existing_link_class) ? $link_class : $existing_link_class;
                $existing_capabilities                   = $menu_items["results"]["capabilities"];
                $merged_capabilities                     = array_merge($existing_capabilities, array("gravityforms_survey_results"));
                $existing_sub_menu_items                 = $menu_items["results"]["sub_menu_items"];
                $merged_sub_menu_items                   = array_merge($existing_sub_menu_items, $sub_menu_items);
                $menu_items["results"]["link_class"]     = $link_class;
                $menu_items["results"]["capabilities"]   = $merged_capabilities;
                $menu_items["results"]["sub_menu_items"] = $merged_sub_menu_items;

            } else {
                $menu_items["results"] = array(
                    'label'          => __("Results", "gravityformssurvey"),
                    'title'          => __("View results generated by this form", "gravityformssurvey"),
                    'url'            => "",
                    'onclick'        => "return false;",
                    'menu_class'     => 'gf_form_toolbar_results',
                    'link_class'     => $link_class,
                    'capabilities'   => array("gravityforms_quiz_results"),
                    'sub_menu_items' => $sub_menu_items,
                    'priority'       => 750
                );
            }


        }

        return $menu_items;
    }


    public static function display_entries_field_value($value, $form_id, $field_id, $lead) {


        $form_meta       = RGFormsModel::get_form_meta($form_id);
        $form_meta_field = RGFormsModel::get_field($form_meta, $field_id);

        if (rgar($form_meta_field, "type") != "survey")
            return $value;

        $new_value = $value;
        $sub_type  = rgar($form_meta_field, "inputType");
        switch ($sub_type) {
            case "likert" :
                if (is_array($value)) {

                    $new_values = array();
                    foreach ($value as $response) {
                        $new_values[] = self::get_likert_column_text($form_meta_field, $response);
                    }
                    $new_value = implode(', ', $new_values);

                } else {
                    if (strpos($field_id, ".") !== false) {
                        $value_id = $lead[$field_id];
                        if (false === empty($value_id))
                            $new_value = self::get_likert_column_text($form_meta_field, $value_id);
                    } else {
                        $values     = explode(", ", $value);
                        $new_values = array();
                        foreach ($values as $response) {
                            $new_values[] = self::get_likert_column_text($form_meta_field, $response);
                        }
                        $new_value = implode(', ', $new_values);
                    }

                }
                break;
            case "rank" :
                $new_value      = "";
                $ordered_values = explode(",", $value);

                if (false === empty($ordered_values)) {
                    $c = 1;
                    foreach ($ordered_values as $ordered_value) {
                        $new_value .= $c++ . ". " . RGFormsModel::get_choice_text($form_meta_field, $ordered_value) . " ";
                    }
                    $new_value = trim($new_value);
                }

                break;
            case "rating" :
                $new_value = GFCommon::selection_display($value, $form_meta_field, $currency = "", $use_text = true);
                break;
            case "radio" :
            case "checkbox" :
            case "select" :
                if (is_array($form_meta_field["inputs"])) {
                    foreach ($form_meta_field["choices"] as $choice) {
                        $val       = rgar($choice, "value");
                        $text      = RGFormsModel::get_choice_text($form_meta_field, $val);
                        $new_value = str_replace($val, $text, $new_value);
                    }
                } else {
                    $new_value = RGFormsModel::get_choice_text($form_meta_field, $value);
                }

                break;
        }

        return $new_value;
    }

    public static function get_likert_column_text($field, $value) {

        if (rgar($field, "gsurveyLikertEnableMultipleRows")) {
            if(false === strpos($value, ":"))
                return "";
            list($row_val, $col_val) = explode(":", $value, 2);

            foreach ($field["gsurveyLikertRows"] as $row) {
                if ($row["value"] == $row_val) {
                    foreach ($field["choices"] as $choice) {
                        if ($choice["value"] == $col_val)
                            return $choice["text"];
                    }
                }
            }
        } else {
            foreach ($field["choices"] as $choice) {
                if ($choice["value"] == $value)
                    return $choice["text"];
            }
        }


    }

    public static function get_likert_row_text($field, $index) {

        return rgar($field, "gsurveyLikertEnableMultipleRows") ? $field["gsurveyLikertRows"][$index]["text"] : "";
    }


    public function display_survey_fields_on_entry_detail($value, $field, $lead, $form) {

        if (rgar($field, "type") !== "survey")
            return $value;
        $new_value  = $value;
        $field_type = GFFormsModel::get_input_type($field);
        switch ($field_type) {
            case "likert" :
                $new_value = self::get_survey_field_content("", $field, $value, $lead["id"], $form["id"], $lead);

                // if original response is not in results display below
                // TODO - handle orphaned responses (original choice is deleted)
                break;
            case "rank" :
                $new_value = self::get_rank_entry_value_formatted($field, $value);
                break;
            case "rating" :
                $new_value = GFCommon::selection_display($value, $field, $currency = "", $use_text = true);
                break;
            case "radio" :
            case "checkbox" :
            case "select" :
                if (isset($field["inputs"]) && is_array($field["inputs"])) {
                    foreach ($field["choices"] as $choice) {
                        $val       = rgar($choice, "value");
                        $text      = RGFormsModel::get_choice_text($field, $val);
                        $new_value = str_replace($val, $text, $new_value);
                    }
                } else {
                    $new_value = RGFormsModel::get_choice_text($field, $value);
                }

                break;
        }


        return $new_value;
    }

    public static function get_rank_entry_value_formatted($field, $value) {

        $ordered_values = explode(",", $value);
        $new_value      = "<ol class='gsurvey-rank-entry'>";
        foreach ($ordered_values as $ordered_value) {
            $ordered_label = GFCommon::selection_display($ordered_value, $field, $currency = "", $use_text = true);
            $new_value .= sprintf("<li>%s</li>", $ordered_label);
        }
        $new_value .= "</ol>";

        return $new_value;
    }




    // adds gsurvey-field class to likert fields
    function add_custom_class($classes, $field, $form) {
        if ($field["type"] == "survey")
            $classes .= " gsurvey-survey-field ";

        return $classes;
    }

    function assign_title($title, $field_type) {
        if ($field_type == "survey")
            $title = __("Survey", "gravityformssurvey");

        return $title;
    }

    function add_survey_field($field_groups) {

        foreach ($field_groups as &$group) {
            if ($group["name"] == "advanced_fields") {
                $group["fields"][] = array("class" => "button", "value" => __("Survey", "gravityformssurvey"), "onclick" => "StartAddField('survey');");
            }
        }

        return $field_groups;
    }

    function add_survey_tooltips($tooltips) {
        $tooltips["gsurvey_question"] = "<h6>" . __("Survey Question", "gravityformssurvey") . "</h6>" . __("Enter the question you would like to ask the user.", "gravityformssurvey");
        $tooltips["gsurvey_field_type"] = "<h6>" . __("Survey Field Type", "gravityformssurvey") . "</h6>" . __("Select the type of field that will be used for the survey.", "gravityformssurvey");
        $tooltips["gsurvey_likert_columns"] = "<h6>" . __("Likert Columns", "gravityformssurvey") . "</h6>" . __("Edit the choices for this likert field.", "gravityformssurvey");
        $tooltips["gsurvey_likert_enable_multiple_rows"] = "<h6>" . __("Enable Multiple Rows", "gravityformssurvey") . "</h6>" . __("Select to add multiple rows to the likert field.", "gravityformssurvey");
        $tooltips["gsurvey_likert_rows"] = "<h6>" . __("Likert Rows", "gravityformssurvey") . "</h6>" . __("Edit the texts that will appear to the left of each row of choices.", "gravityformssurvey");

        return $tooltips;
    }


    public static function survey_field_settings($position, $form_id) {
        if ($position == 25) {
            ?>
            <li class="gsurvey-setting-question field_setting">
                <label for="gsurvey-question">
                    <?php _e("Survey Question", "gravityformssurvey"); ?>
                    <?php gform_tooltip("gsurvey_question"); ?>
                </label>
                <textarea id="gsurvey-question" class="fieldwidth-3 fieldheight-2" onkeyup="SetFieldLabel(this.value)"
                          size="35"></textarea>
            </li>
            <li class="gsurvey-setting-field-type field_setting">
                <label for="gsurvey-field-type">
                    <?php _e("Survey Field Type", "gravityformssurvey"); ?>
                    <?php gform_tooltip("gsurvey_field_type"); ?>
                </label>
                <select id="gsurvey-field-type"
                        onchange="if(jQuery(this).val() == '') return; jQuery('#field_settings').slideUp(function(){StartChangeSurveyType(jQuery('#gsurvey-field-type').val());});">
                    <option value="likert"><?php _e("Likert", "gravityformssurvey"); ?></option>
                    <option value="rank"><?php _e("Rank", "gravityformssurvey"); ?></option>
                    <option value="rating"><?php _e("Rating", "gravityformssurvey"); ?></option>
                    <option value="radio"><?php _e("Radio Buttons", "gravityformssurvey"); ?></option>
                    <option value="checkbox"><?php _e("Checkboxes", "gravityformssurvey"); ?></option>
                    <option value="text"><?php _e("Single Line Text", "gravityformssurvey"); ?></option>
                    <option value="textarea"><?php _e("Paragraph Text", "gravityformssurvey"); ?></option>
                    <option value="select"><?php _e("Drop Down", "gravityformssurvey"); ?></option>
                </select>
            </li>
        <?php
        } elseif ($position == 1362) {
            ?>
            <li class="gsurvey-likert-setting-columns field_setting">
                <label for="gsurvey-likert-columns">
                    <?php _e("Columns", "gravityformssurvey"); ?>
                    <?php gform_tooltip("gsurvey_likert_columns"); ?>
                </label>

                <div id="gsurvey-likert-columns-container">
                    <ul id="gsurvey-likert-columns"></ul>
                </div>
            </li>
            <li class="gsurvey-likert-setting-enable-multiple-rows field_setting">
                <input type="checkbox" id="gsurvey-likert-enable-multiple-rows"
                       onclick="field = GetSelectedField(); var value = jQuery(this).is(':checked'); SetFieldProperty('gsurveyLikertEnableMultipleRows', value); gsurveyLikertUpdateInputs(field); gsurveyLikertUpdatePreview(); jQuery('.gsurvey-likert-setting-rows').toggle('slow');"/>
                <label for="gsurvey-likert-enable-multiple-rows" class="inline">
                    <?php _e('Enable multiple rows', "gravityformssurvey"); ?>
                    <?php gform_tooltip("gsurvey_likert_enable_multiple_rows") ?>
                </label>

            </li>
            <li class="gsurvey-likert-setting-rows field_setting">
                <?php _e("Rows", "gravityformssurvey"); ?>
                <?php gform_tooltip("gsurvey_likert_rows") ?>
                <div id="gsurvey-likert-rows-container">
                    <ul id="gsurvey-likert-rows"></ul>
                </div>
            </li>
        <?php
        }
    }

    //--------------  Helper functions  ---------------------------------------------------

    //Returns the url of the plugin's root folder
    public static function get_base_url() {
        return plugins_url(null, __FILE__);
    }

    //Returns the physical path of the plugin's root folder
    public static function get_base_path() {
        $folder = basename(dirname(__FILE__));

        return WP_PLUGIN_DIR . "/" . $folder;
    }

    private static function is_gravityforms_installed() {
        return class_exists("RGForms");
    }

    private static function is_gravityforms_supported() {
        if (class_exists("GFCommon")) {
            $is_correct_version = version_compare(GFCommon::$version, self::$min_gravityforms_version, ">=");

            return $is_correct_version;
        } else {
            return false;
        }
    }


    //--------------   Automatic upgrade ---------------------------------------------------

    //Integration with ManageWP
    public static function premium_update_push($premium_update) {

        if (!function_exists('get_plugin_data'))
            include_once(ABSPATH . 'wp-admin/includes/plugin.php');

        $update = GFCommon::get_version_info();
        if ($update["is_valid_key"] == true && version_compare(self::$version, $update["version"], '<')) {
            $plugin_data                = get_plugin_data(__FILE__);
            $plugin_data['type']        = 'plugin';
            $plugin_data['slug']        = self::$path;
            $plugin_data['new_version'] = isset($update['version']) ? $update['version'] : false;
            $premium_update[]           = $plugin_data;
        }

        return $premium_update;
    }

    //Integration with ManageWP
    public static function premium_update($premium_update) {

        if (!function_exists('get_plugin_data'))
            include_once(ABSPATH . 'wp-admin/includes/plugin.php');

        $update = GFCommon::get_version_info();
        if ($update["is_valid_key"] == true && version_compare(self::$version, $update["version"], '<')) {
            $plugin_data         = get_plugin_data(__FILE__);
            $plugin_data['slug'] = self::$path;
            $plugin_data['type'] = 'plugin';
            $plugin_data['url']  = isset($update["url"]) ? $update["url"] : false; // OR provide your own callback function for managing the update

            array_push($premium_update, $plugin_data);
        }

        return $premium_update;
    }

    public static function flush_version_info() {
        require_once("plugin-upgrade.php");
        RGSurveyUpgrade::set_version_info(false);
    }

    public static function plugin_row() {
        require_once("plugin-upgrade.php");

        if (!self::is_gravityforms_supported()) {
            $message = sprintf(__("Gravity Forms " . self::$min_gravityforms_version . " is required. Activate it now or %spurchase it today!%s", "gravityformssurvey"), "<a href='http://www.gravityforms.com'>", "</a>");
            RGSurveyUpgrade::display_plugin_message($message, true);
        } else {
            $version_info = RGSurveyUpgrade::get_version_info(self::$slug, self::get_key(), self::$version);

            if (!$version_info["is_valid_key"]) {
                $new_version = version_compare(self::$version, $version_info["version"], '<') ? __('There is a new version of Gravity Forms Survey Add-On available.', 'gravityformssurvey') . ' <a class="thickbox" title="Gravity Forms Survey Add-On" href="plugin-install.php?tab=plugin-information&plugin=' . self::$slug . '&TB_iframe=true&width=640&height=808">' . sprintf(__('View version %s Details', 'gravityformssurvey'), $version_info["version"]) . '</a>. ' : '';
                $message     = $new_version . sprintf(__('%sRegister%s your copy of Gravity Forms to receive access to automatic upgrades and support. Need a license key? %sPurchase one now%s.', 'gravityformssurvey'), '<a href="admin.php?page=gf_settings">', '</a>', '<a href="http://www.gravityforms.com">', '</a>') . '</div></td>';
                RGSurveyUpgrade::display_plugin_message($message);
            }
        }
    }

    //Displays current version details on Plugin's page
    public static function display_changelog() {
        if ($_REQUEST["plugin"] != self::$slug)
            return;

        //loading upgrade lib
        require_once("plugin-upgrade.php");

        RGSurveyUpgrade::display_changelog(self::$slug, self::get_key(), self::$version);
    }

    public static function check_update($update_plugins_option) {
        require_once("plugin-upgrade.php");

        return RGSurveyUpgrade::check_update(self::$path, self::$slug, self::$url, self::$slug, self::get_key(), self::$version, $update_plugins_option);
    }

    private static function get_key() {
        if (self::is_gravityforms_supported())
            return GFCommon::get_key();
        else
            return "";
    }

    //---------------------------------------------------------------------------------------


} // end class



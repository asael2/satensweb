<?php
/*
 * Template Name: LeadReport
 * Description: Pagina custom para reportes.
 */
get_header(); ?>

<!--Load the Google AJAX API-->
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
	google.load('visualization', '1', {'packages':['corechart', 'table', 'gauge']});
	google.setOnLoadCallback(reporte); 
 </script>

<div id="primary" class="site-content">
<div id="content" role="main">

	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part( 'content', 'page' ); ?>
	<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>

<!-- find it in ESTUDIANTES Page


[printfriendly]
[directory form="33" lightboxsettings="images" titleshow="false" tfoot="false"]
<ul id="leadData">
</ul>
<div id="tabsInforme">
    <ul>
        <li><a href="#tabs-1">Reporte 1</a></li>
        <li><a href="#tabs-2">Reporte 2</a></li>
        <li><a href="#tabs-3">Reporte 3</a></li>
        <li><a href="#tabs-4">Reporte 4 </a></li>
        <li><a href="#tabs-5">Reporte 5 </a></li>
        <li><a href="#tabs-6">Reporte 6 </a></li>
        <li><a href="#tabs-7">Reporte 7 </a></li>
        <li><a href="#tabs-8">Reporte 8 </a></li>
        <li><a href="#tabs-9">Reporte 9 </a></li>
        <li><a href="#tabs-10">Reporte 1 0</a></li>
        <li><a href="#tabs-11">Reporte 1 1</a></li>
    </ul>
    <div id="tabs-1">
        <dl class="form1">
            <dd></dd>
        </dl>
    </div>
    <div id="tabs-2">
        <dl class="form2">
            <dd></dd>
        </dl>
    </div>
    <div id="tabs-3">
        <dl class="form3">
            <dd></dd>
        </dl>
    </div>
</div>




-->
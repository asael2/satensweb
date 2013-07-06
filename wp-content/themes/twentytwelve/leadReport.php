<?php
/*
 * Template Name: LeadReport
 * Description: Pagina custom para reportes.
 */
get_header(); ?>

<div id="primary" class="site-content">
LeadReport Template :)
<div id="content" role="main">
<?php while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'content', 'page' ); ?>
<?php comments_template( '', true ); ?>
<?php endwhile; // end of the loop. ?>

<!--Load the AJAX API--> 
<script type="text/javascript" src="https://www.google.com/jsapi"></script> 
<script type="text/javascript">
	google.load('visualization', '1', {'packages':['corechart','geochart','table', 'gauge']});
	google.setOnLoadCallback(reporte); 
 </script>
<div id="report" class="">
    <div id="leadInfo">
        <ul id="leadData">
        
        </ul>
    </div>
    
    <br>    <br>    <br>
    
    <div id="visualization"></div>
    <div id="visualizationb"></div>
    <div id="visualizationc"></div>
    <div id="visualizationd"></div>
</div>
<?php get_footer(); ?>

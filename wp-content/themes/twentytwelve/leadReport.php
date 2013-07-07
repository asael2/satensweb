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
	google.load('visualization', '1', {'packages':['corechart', 'table', 'gauge']});
	google.setOnLoadCallback(reporte); 
 </script> 
    <dl class="customReport">
    
		<dt class="tituloForm">Informacion del Estudiante</dt>
        <dd>
            <ul id="leadData"></ul>
        </dd>
        <dt class="tituloForm">Auto Perfil Educativo del Estudiante</dt>
        <dd>
            <div id="vSiNo-1"></div>
            <div id="vDT-DS1"></div>
            <div id="vGVel-DS2"></div>
            <div id="vDT-DS3"></div>
            <div id="vDT-DS4"></div>
        </dd>
		<dt class="tituloForm">Intereses y Actividades Generales</dt>
        <dd>
            <div id="vSiNo-2"></div>
            <div id="vSiNo-3"></div>
            <div id="vSiNo-4"></div>
        </dd>
        
        <dt class="tituloForm">Intereses y Metas de Estudios Generales</dt>
        <dd>
            <div id="vDT-DS5"></div>
            <div id="vDT-DS6"></div>
            <div id="vPC-DS7"></div>
        </dd>
        
    </dl>

<?php get_footer(); ?>

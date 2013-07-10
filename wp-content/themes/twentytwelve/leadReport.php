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

[directory form="33"]

<div id="tabs">
    <ul>
        <li><a href="#tabs-1">Reporte 1</a></li>
        <li><a href="#tabs-2">Reporte 2</a></li>
        <li><a href="#tabs-3">Reporte 3</a></li>
    </ul>
    <div id="tabs-1">
        <dl class="customReport">
            
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
                <div id="vPie-DS7"></div>
            </dd>
            
        </dl>
    </div>
    <div id="tabs-2">
        <dl class="customReport">
            
            <dt class="tituloForm">Cuestionario al Padre o Encargado</dt>
            <dd>
            	<div id="vDT-DS8"></div>
              	<div id="vDT-DS9"></div>
                
                <div id="vSiNo-10"></div>
              	<div id="vDT-DS11"></div>
                <div id="vSiNo-12"></div>
              	<div id="vDT-DS13"></div>
                <div id="vSiNo-14"></div>
                <div id="vPie-DS15"></div>
                <div id="vSiNo-16"></div>
            </dd>
        </dl> 
           
    </div>
    <div id="tabs-3">
        <p>Quiero portarme bien</p>
    </div>
</div>

-->
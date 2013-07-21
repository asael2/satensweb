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
	<div class="loading-curtain">Cargando Reporte del Estudiante</div>
	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part( 'content', 'page' ); ?>
        <?php get_template_part( 'satens', 'report' ); ?>
	<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>

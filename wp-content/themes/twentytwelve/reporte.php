<?php
/*
 * Template Name: Stns Report Page
 * Description: Pagina custom para reportes.
 */
get_header(); ?>

<div id="primary" class="site-content">
    <div id="content" role="main">
		<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part( 'content', 'page' ); ?>
		<?php comments_template( '', true ); ?>
		<?php endwhile; // end of the loop. ?>
        
	    <!--Load the AJAX API--> 
    	<script type="text/javascript" src="https://www.google.com/jsapi"></script> 
		<script type="text/javascript">
			//LOADS CHART PACKAGES
			google.load("visualization", "1", {packages:["corechart"]});
			google.load('visualization', '1', {packages: ['gauge']});
			google.load('visualization', '1', {packages:['table']});
		</script> 
    </div>
    <!-- #content --> 
</div>
<!-- #primary -->
<?php get_footer(); ?>
?>
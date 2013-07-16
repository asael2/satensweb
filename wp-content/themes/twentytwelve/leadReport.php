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
        <li><a href="#tabs-1">Reporte 1  </a></li>
        <li><a href="#tabs-2">Reporte 2  </a></li>
        <li><a href="#tabs-3">Reporte 3  </a></li>
        <li><a href="#tabs-4">Reporte 4  </a></li>
        <li><a href="#tabs-5">Reporte 5  </a></li>
        <li><a href="#tabs-6">Reporte 6  </a></li>
        <li><a href="#tabs-7">Reporte 7  </a></li>
        <li><a href="#tabs-8">Reporte 8  </a></li>
        <li><a href="#tabs-9">Reporte 9  </a></li>
        <li><a href="#tabs-10">Reporte 10</a></li>
    </ul>
    
    <div id="tabs-1">
        <ul class="form1">
        </ul>
    </div>
    
    <div id="tabs-2">
        <ul class="form2">
        </ul>
    </div>
    
    <div id="tabs-3">
        <ul class="form3">
        </ul>
    </div>
    
    <div id="tabs-4"> Tab 4
        <ul class="form4">
        </ul>
    </div>
    
    <div id="tabs-5"> Tab 5
        <ul class="form5">
        </ul>
    </div>
    
    <div id="tabs-6"> Tab 6
        <ul class="form6">
        </ul>
    </div>
    
    <div id="tabs-7"> Tab 7
        <ul class="form7">
        </ul>
    </div>
    
    <div id="tabs-8"> Tab 8
        <ul class="form8">
        </ul>
    </div>
    
    <div id="tabs-9"> Tab 9
        <ul class="form9">
        </ul>
    </div>
    
    <div id="tabs-10"> Tab 10
        <ul class="form10">
        </ul>
    </div>
    
</div>


-->
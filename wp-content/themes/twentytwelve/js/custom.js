$.urlParam = function(name){
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			return null;
		}else{
			return results[1] || 0;
		}
	}
///////////////////////////////////

function reporte(leadId){	
	console.log("Pidiendo a servicio");
	leadId =  $.urlParam('leadid');

	$.get('/servicio.php?leadid='+leadId, function(resp){

		console.log(resp);
	});
}
function preguntasReporte(formId){


	formId =  $.urlParam('form');

	$.get('/servicio.php?form='+formId, function(resp){
		console.log(resp.formetas);
	});
}

///////////////////////////////Peticion usando WPress admin-ajax

function leadRequest(leadId){
	console.log('haciendo leadRequest');
	jQuery.ajax({
		url: 'http://www.satenspr.com/wp-admin/admin-ajax.php',
		data:{
			'action':'do_ajax',
			'fn':'get_a_leads',
			'leadid':leadId
		},
		dataType: 'JSON',
		success:function(data){
			console.log(data)
		},
		error: function(errorThrown){
			alert('error');
			console.log(errorThrown);
		}
	});
}


$(function(){
	console.log('>:Available:<');

	var leadId, formId;
	//Automatic request	
	//reporte(leadId);
	leadRequest(leadId)

	$("#link1").on('click', function(){
		reporte(leadId);
	});


	$("#link2").on('click', function(){
		preguntasReporte(formId);
	});

//$('a').attr('href', '#l1').click();
//$('a').attr('href', '#l2').click(function(){preguntasReporte()});

	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC");
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");
	//TABS
	//$( "#tabs" ).tabs();
	$(".gform_previous_button").hide();

});


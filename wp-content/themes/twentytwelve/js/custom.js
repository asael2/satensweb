var respuestas, leadId;

var reporte = {	
	init : function(){
		//Fetch Parameter from URL
		$.urlParam = function(name){
			var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
			if (results==null){
				return null;
			}else{
				return results[1] || 0;
			}
		};
		
		leadId = $.urlParam('leadid');

		$.get('/servicio.php?leadid='+leadId).done(function(data) {
			respuestas = data.r;
			console.log(respuestas);
			console.log("Total registros :: "+respuestas.length);
			startDraw();
		});
	}	
}

var pregunta = function(DOMnumber){
	var label = $(".entry-view-field-name").eq(DOMnumber).text();
	//console.log(label);
	return label;
}

var respondido = function(fieldN){
	var fn, fvalue, fieldNumber, lares;
	fieldNumber = fieldN;
	$.each(respuestas, function(index){
		fn = this["field_number"];
		fvalue = this["value"];
		if (fieldNumber == fn){ 
           lares = fvalue;
           return false
		}
	});		
    return lares;
}

//Classes///////////////////////////////////
function studentBasicData(label, value){

	$("#leadData").append("<li>"+label+" : "+value+"</li>")
}

function siNoColumnChart(pregunta, respuesta, targetDom) {
	var data = google.visualization.arrayToDataTable([
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(respuesta)],
	]);

	var options = {
		title: pregunta,
		legend: {position: 'none'},
		vAxis:{minValue:0,maxValue:1,gridlines:{count:2}, 
		title:'< No - - Si >'},
		tooltip: {trigger: 'none'},
		bar: {groupWidth: 100}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById(targetDom));
	chart.draw(data, options);
};

function laDataTable(nRespuestas, targetDom) {
	var data = google.visualization.arrayToDataTable(nRespuestas);
	var table = new google.visualization.Table(document.getElementById(targetDom));
	table.draw(data, {showRowNumber: false}); 
}

function velocimetros(nRespuestas, targetDom) {
	var data = google.visualization.arrayToDataTable(nRespuestas);
	var options = {
		width: 600, 
		height: 200,
		min: 1, 
		max: 3,
		yellowFrom:1, yellowTo: 1.5,
		redFrom: 1.51, redTo: 2.5,
		greenFrom: 2.51, greenTo: 3,
		backgroundColor: {strokeWidth: 1, fill: 'white',},
	};
	var chart = new google.visualization.Gauge(document.getElementById(targetDom));
	chart.draw(data, options);
}

function pieChart(nRespuestas, pieTittle, targetDom) {
	var data = google.visualization.arrayToDataTable(nRespuestas);

	var options = {
		title: pieTittle,
		backgroundColor: {strokeWidth: 1, fill: 'white',},
		legend: {position: 'bottom', alignment: 'start'}
		};
	var charte = new google.visualization.PieChart(document.getElementById(targetDom));
	charte.draw(data, options);

}


//Global Scope eof///////////////////////////////////


function startDraw(){

	//SERAID, Field numbers 1
	studentBasicData(pregunta(0) , respondido(1));	
	//Info del estudiante,Field numbers 3-6
    studentBasicData(pregunta(1) , respondido(3));
    studentBasicData(pregunta(2) , respondido(4));
    studentBasicData(pregunta(3) , respondido(5));
    studentBasicData(pregunta(4) , respondido(6));
    studentBasicData(pregunta(5) , respondido(7));
    studentBasicData(pregunta(6) , respondido(8));
    studentBasicData(pregunta(7) , respondido(9));
	studentBasicData("Editar", 	(function(){
			var editLink = $(".useredit").html()
			console.log(editLink);
			return editLink;
		})());
   
 //Form Auto Perfil Educativo del Estudiante

 	//CHART
	siNoColumnChart(pregunta(17), respondido(22), 'vSiNo-1')

	//DATATABLE      
	var dataSet1 = [
			//Columnas
			['Servicios que recibe en la escuela', 'Recibe'],
			//Filas
			['Consejero Escolar', 		(respondido(23.1) == "true") ], 
			['Sicólogo', 				(respondido(23.2) == "true") ], 
			['Tutoría', 				(respondido(23.3) == "true") ],
			['Terapia de Habla',  		(respondido(23.4) == "true") ],
			['Terapia Ocupacional',  	(respondido(23.5) == "true") ],
			['Asistencia Tecnológica',	(respondido(23.6) == "true") ],
			['Acomodos', 				(respondido(23.7) == "true") ],
			['Otros',  					(respondido(23.8) == "true") ]
	];
	laDataTable(dataSet1, 'vDT-DS1');
	
	//VELOCIMETROS
	var dataSet2 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(respondido(24))],
		['Escritura',	parseInt(respondido(25))],
		['Matemáticas',	parseInt(respondido(26))]
	];
	velocimetros(dataSet2, 'vGVel-DS2');

	//DATATABLE
	
	var dataSet3 = [
		//Columnas
		['Autocalificación ', 'Lectura', 'Escritura', 'Matematicas'],
		
		//Filas
		['Desconozco',				(respondido(24) == 0), (respondido(25) == 0), (respondido(26) == 0)],
      	['Por debajo de los demás', (respondido(24) == 1), (respondido(25) == 1), (respondido(26) == 1)],
      	['Igual que los demás',  	(respondido(24) == 2), (respondido(25) == 2), (respondido(26) == 2)],
	  	['Por encima de los demás', (respondido(24) == 3), (respondido(25) == 3), (respondido(26) == 3)]
	];
	laDataTable(dataSet3, 'vDT-DS3');
	
	//DATATABLE
	
	var dataSet4 = [
		//Columnas
		['Manera de confrontar necesidades académicas', 'Seleccion'],
		//Filas
		['Pienso en varias soluciones', 										(respondido(27.1) == "true") ],
		['Busco consejo de otros', 												(respondido(27.2) == "true") ],
		['Comienzo a resolver el probelma sin tener un plan', 					(respondido(27.3) == "true") ],
		['Considero las cosas positivas y negativas del problema', 				(respondido(27.4) == "true") ],
		['Considero otra solución cuando la primera idea no parece funcionar',	(respondido(27.5) == "true") ]
	];
	laDataTable(dataSet4, 'vDT-DS4');

//Form Break<<<Intereses y Actividades Generales

	//CHART 
	siNoColumnChart(pregunta(23), respondido(29), 'vSiNo-2')
	//CHART 
	siNoColumnChart(pregunta(24), respondido(30), 'vSiNo-3')
	//CHART
	siNoColumnChart(pregunta(25), respondido(31), 'vSiNo-4')

//Form Break<<<Intereses y Metas de Estudios Generales

	//DATATABLE  

	var dataSet5 = [
		//Columnas
		['Estudios que toma al presente o interesa tomar en la escuela superior', 'Seleccion'],
		//Filas
			['No Aplica', null],
			['Programa de Preparación Universitaria', null],
			['Programa General', true],
			['Certificado Técnico / Vocaional',  null],
			['Programa de Estudio y Trabajo',  null],
			['Otro',  null],

		['Pienso en varias soluciones', 										(respondido(27.1) == "true") ],
		['Busco consejo de otros', 												(respondido(27.2) == "true") ],
		['Comienzo a resolver el probelma sin tener un plan', 					(respondido(27.3) == "true") ],
		['Considero las cosas positivas y negativas del problema', 				(respondido(27.4) == "true") ],
		['Considero otra solución cuando la primera idea no parece funcionar',	(respondido(27.5) == "true") ]

	];
	laDataTable(dataSet5, 'vDT-DS5');

	/*  
	var dataSet5 = [
			//Columnas
			['Estudios que toma al presente o interesa tomar en la escuela superior', 'Seleccion'],
			//Filas
			['No Aplica', 								(respondido(33) == "true")],
			['Programa de Preparación Universitaria', 	(respondido(33) == "true")],
	        ['Programa General', 						(respondido(33) == "true")],
	        ['Certificado Técnico / Vocaional',  		(respondido(33) == "true")],
			['Programa de Estudio y Trabajo',  			(respondido(33) == "true")],
			['Otro', 									(respondido(33) == "true")],
	];
	laDataTable(dataSet5, 'vDT-DS5');*/



//vPC-DS7



//end Draw 
}



		
//ready
$(function(){
	$(".entry-detail-view").hide(); 
	
/* 
	$.each(".entry-view-field-name", "body", function(){
		console.log(this.text())
	})

	$(".entry-view-field-name").each(function(indice, elemento) {
  		console.log($(elemento).text());
	}); 
*/

	reporte.init() 

	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC");
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");
	//TABS
	//$( "#tabs" ).tabs(); 
	//$(".gform_previous_button").hide();    
});
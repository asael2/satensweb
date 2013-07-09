var respuestas, leadId, pageType;

$.urlParam = function(name){
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null){
		return null;
	}else{
		return results[1] || 0;
	}
};

var preguntaDom = function(DOMnumber){
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

var editLink = function(){

	return  $(".useredit").html()
};

var sumOfFields = function(fNumber, optsNumber){
	//Establecer un metodo para obtener el correspondiente 	optsNumber segun
	var elvalue, i;
	var suma =0;
	
	for(i=1; i<=optsNumber; i++){
		elvalue = parseInt(respondido(fNumber+"."+i));
		if (!elvalue == 1){
			elvalue = 0;
		}else{
			suma = elvalue + suma;
		}
	}
	return suma;
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

function pieChart(nRespuestas, pieTitle, targetDom) {

	var data = google.visualization.arrayToDataTable(nRespuestas);

	var options = {
			title: pieTitle,
			backgroundColor: {strokeWidth: 1, fill: 'white',},
			legend: {position: 'bottom', alignment: 'start'}
		};

	var charte = new google.visualization.PieChart(document.getElementById(targetDom));
	charte.draw(data, options);
}


//Global Scope eof///////////////////////////////////

var reporte = {	
	init : function(){
		//Fetch Parameter from URL
		
		leadId = $.urlParam('leadid');

		$.get('/servicio.php?leadid='+leadId).done(function(data) {
			respuestas = data.r;
		//	console.log(respuestas);
			console.log("Total registros :: "+respuestas.length);
			startDraw();
		});
	}	 
}


function startDraw(){

	//SERAID, Field numbers 1
	studentBasicData(preguntaDom(0) , respondido(1));	
	//Info del estudiante,Field numbers 3-6
    studentBasicData(preguntaDom(1) , respondido(3));
    studentBasicData(preguntaDom(2) , respondido(4));
    studentBasicData(preguntaDom(3) , respondido(5));
    studentBasicData(preguntaDom(4) , respondido(6));
    studentBasicData(preguntaDom(5) , respondido(7));
    studentBasicData(preguntaDom(6) , respondido(8));
    studentBasicData(preguntaDom(7) , respondido(9));
	studentBasicData("Editar", editLink());
   
 	
 //Form Beak<<< Auto Perfil Educativo del Estudiante

 	//CHART
	siNoColumnChart("Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento", respondido(22), 'vSiNo-1')

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
	]; laDataTable(dataSet1, 'vDT-DS1');
	
	//VELOCIMETROS
	var dataSet2 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(respondido(24))],
		['Escritura',	parseInt(respondido(25))],
		['Matemáticas',	parseInt(respondido(26))]
	]; velocimetros(dataSet2, 'vGVel-DS2');

	//DATATABLE
	var dataSet3 = [
		//Columnas
		['Autocalificación ', 'Lectura', 'Escritura', 'Matematicas'],
		
		//Filas
		['Desconozco',				(respondido(24) == 0), (respondido(25) == 0), (respondido(26) == 0)],
      	['Por debajo de los demás', (respondido(24) == 1), (respondido(25) == 1), (respondido(26) == 1)],
      	['Igual que los demás',  	(respondido(24) == 2), (respondido(25) == 2), (respondido(26) == 2)],
	  	['Por encima de los demás', (respondido(24) == 3), (respondido(25) == 3), (respondido(26) == 3)]
	]; laDataTable(dataSet3, 'vDT-DS3');
	
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
	]; laDataTable(dataSet4, 'vDT-DS4');

//Form Break<<<Intereses y Actividades Generales

	//CHART 
	siNoColumnChart("Diversión en Tiempo Libre", respondido(29), 'vSiNo-2')
	//CHART 
	siNoColumnChart("Tareas y Responsabilidades en el Hogar", respondido(30), 'vSiNo-3')
	//CHART
	siNoColumnChart("Aspiración a una Carrera en el Futuro", respondido(31), 'vSiNo-4')

//Form Break<<<Intereses y Metas de Estudios Generales

	//DATATABLE  
	var dataSet5 = [
		//Columnas
		['Estudios que toma al presente o interesa tomar en la escuela superior', 'Seleccion'],
		//Filas
			['No Aplica', 								(respondido(41) == 0)],
			['Programa de Preparación Universitaria', 	(respondido(41) == 1)],
			['Programa General', 						(respondido(41) == 2)],
			['Certificado Técnico / Vocaional', 		(respondido(41) == 3)],
			['Programa de Estudio y Trabajo', 			(respondido(41) == 4)],
			['Otro', 									(respondido(41) == 5)]
	]; laDataTable(dataSet5, 'vDT-DS5');
	
	//DATATABLE  
	var dataSet6 = [
		//Columnas
		['Estudios que aspira seguir cuando termine la escuela superior', 'Seleccion'],
		//Filas
			['No Aplica',						(respondido(42) == 0 )],
			['Instituto Técnico Vocacional',	(respondido(42) == 1 )],
			['Grado Asociado', 					(respondido(42) == 2 )],
			['Bachillerato de Universidad',		(respondido(42) == 3 )],
			['Programa de Estudios Cortos',		(respondido(42) == 4 )],
			['Ninguna de las Anteriores',		(respondido(42) == 5 )]
	];
	
	laDataTable(dataSet6, 'vDT-DS6');

	//PIECHART
	var pieTitle7 = 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas (ver ejemplos de ocupaciones seleccionadas por el estudiante)';
	var dataSet7 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas					
		['Gente-Publico', 		sumOfFields(35, 11)], //sum of field for question ID 35
		['Cosas-Manual', 		sumOfFields(37, 11)],
		['Datos-Información',	sumOfFields(39, 11)]
	
	];

	pieChart(dataSet7, pieTitle7,  'vPie-DS7');
	
}//end Draw 


//ready
$(function(){
	
	//Hide native table
	$(".entry-detail-view").hide(); 
	
	// Execute report
	if($.urlParam('form')){
		console.log("Student Report");
		reporte.init();
	} else{
		$(".customReport").hide();
	}

	if( $.urlParam('edit') && $.urlParam('form') ){
		$(".customReport").hide();
	}
	
	

	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC"); 
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC", "color", "#FFF");

//ACCORDION
$(".customReport").accordion({heightStyle: "content" });
	//TABS  
	//$( "#tabs" ).tabs(); 
	//$(".gform_previous_button").hide();     
}); 
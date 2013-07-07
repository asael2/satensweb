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
			//console.log(respuestas);
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

function studentBasicData(label, value){

	$("#leadData").append("<li>"+label+" : "+value+"</li>")
}

function siNo(pregunta, respuesta) {
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

	var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));
	chart.draw(data, options);
};

function laDataTable(tableOptions) {

	var data = new google.visualization.DataTable(tableOptions);

	var table = new google.visualization.Table(document.getElementById('visualizationb'));
	table.draw(data);

}

function velocimetros(nRespuestas) {
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
	var chart = new google.visualization.Gauge(document.getElementById('visualizationc'));
	chart.draw(data, options);
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
   
 	//CHART 1 
	siNo(pregunta(17), respondido(22) )

	//DATATABLE 1   



	var dataSet1 = 
	{
		cols: [
			{"label": "Servicios que recibe en la escuela", "type": "string"}, 
			{"label": "Seleccion", "type": "boolean"}
		],

		rows:[
			{'Consejero Escolar' : 		(respondido(23.1) == "true")}, 
			{'Sicólogo': 				(respondido(23.2) == "true")}, 
			{'Tutoría': 				(respondido(23.3) == "true")},
			{'Terapia de Habla':  		(respondido(23.4) == "true")},
			{'Terapia Ocupacional':  	(respondido(23.5) == "true")},
			{'Asistencia Tecnológica':	(respondido(23.6) == "true")},
			{'Acomodos': 				(respondido(23.7) == "true")},
			{'Otros':  					(respondido(23.8) == "true")}
		]
	};



	laDataTable(dataSet1);	


	// VELOCIMETROS 1
	var dataSet2 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(respondido(24))], 
		['Escritura',	parseInt(respondido(25))],
		['Matemáticas',	parseInt(respondido(26))]
	];
	velocimetros(dataSet2);

	//DATATABLE 2
/*	var dataSet3 = [
      ['Desconozco',			 	null, null, null],
      ['Por debajo de los demás',	null, true, null],
      ['Igual que los demás',  		true, null, null],
	  ['Por encima de los demás',  	null, null, true]
	];
	laDataTable(dataSet3, 'Autocalificación');
*/

}

		
//ready
$(function(){
	$(".entry-detail-view").hide();  
	
	reporte.init()

	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC");
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");
	//TABS
	//$( "#tabs" ).tabs(); 
	//$(".gform_previous_button").hide();      
});  
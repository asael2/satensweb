var reporte; //respuestas, this.respondido, leadId, pageType, entryTitle, preguntaDom, editLink, sumOfFields;
$.urlParam = function (name) {
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null){
		return null;
	}else{
		return results[1] || 0;
	}
};

//Classes////////////////////////////////////////////////////

function studentBasicData (label, value) {

	$("#leadData").append("<li>"+label+" : "+value+"</li>")
};

function siNoColumnChart (pregunta, respuesta, targetDom) {
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

function laDataTable (nRespuestas, targetDom) {
	var data = google.visualization.arrayToDataTable(nRespuestas);
	var table = new google.visualization.Table(document.getElementById(targetDom));
	table.draw(data, {showRowNumber: false}); 
};

function velocimetros (nRespuestas, targetDom) {
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
};

function pieChart (nRespuestas, pieTitle, targetDom) {

	var data = google.visualization.arrayToDataTable(nRespuestas);

	var options = {
			title: pieTitle,
			backgroundColor: {strokeWidth: 1, fill: 'white',},
			legend: {position: 'bottom', alignment: 'start'},
			width:'100%'
		};

	var charte = new google.visualization.PieChart(document.getElementById(targetDom));
	charte.draw(data, options);
};

reporte = {
	
	init : function () {
		//Fetch Parameter from URL	
		leadId = $.urlParam('leadid');
		//Request leads json
		$.get('/servicio.php?leadid='+leadId).done(function(data) {
			respuestas = data.r;
			console.log("Total registros :: "+respuestas.length);
			//console.log(respuestas);
			reporte.startDraw();
		});
	},

	startDraw : function () {
		//Page Tittle
		$("h1.entry-title").html( "Reportes para "+this.respondido(3)+" "+this.respondido(5) );

		//SERAID, Field numbers 1
		studentBasicData("SERA ID" , this.respondido(1));	
		//Info del estudiante,Field numbers 3-6
	    studentBasicData("Nombre " , this.respondido(3));
	    studentBasicData("Segundo Nombre " , this.respondido(4));
	    studentBasicData("Apellido " , this.respondido(5));
	    studentBasicData("Segundo Apellido " , this.respondido(6));
	    studentBasicData("Genero " , this.respondido(7));
	    studentBasicData("Fecha de nacimiento " , this.respondido(8));
	    studentBasicData("Grado ", this.respondido(9));
		studentBasicData("Editar ", this.editLink());
	   
	 	//Form Beak<<< Auto Perfil Educativo del Estudiante

	 	//CHART
		siNoColumnChart("Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento", this.respondido(22), 'vSiNo-1')

		//DATATABLE      
		var dataSet1 = [
				//Columnas
				['Servicios que recibe en la escuela', 'Recibe'],
				//Filas
				['Consejero Escolar', 		(this.respondido(23.1) == "true") ], 
				['Sicólogo', 				(this.respondido(23.2) == "true") ], 
				['Tutoría', 				(this.respondido(23.3) == "true") ],
				['Terapia de Habla',  		(this.respondido(23.4) == "true") ],
				['Terapia Ocupacional',  	(this.respondido(23.5) == "true") ],
				['Asistencia Tecnológica',	(this.respondido(23.6) == "true") ],
				['Acomodos', 				(this.respondido(23.7) == "true") ],
				['Otros',  					(this.respondido(23.8) == "true") ]
		]; 
		laDataTable(dataSet1, 'vDT-DS1');
		
		//VELOCIMETROS
		var dataSet2 = [
			['Destreza',	'Valor'],
			['Lectura', 	parseInt(this.respondido(24))],
			['Escritura',	parseInt(this.respondido(25))],
			['Matemáticas',	parseInt(this.respondido(26))]
		]; 
		velocimetros(dataSet2, 'vGVel-DS2');

		//DATATABLE
		var dataSet3 = [
			//Columnas
			['Autocalificación ', 'Lectura', 'Escritura', 'Matematicas'],
			
			//Filas
			['Desconozco',				(this.respondido(24) == 0), (this.respondido(25) == 0), (this.respondido(26) == 0)],
	      	['Por debajo de los demás', (this.respondido(24) == 1), (this.respondido(25) == 1), (this.respondido(26) == 1)],
	      	['Igual que los demás',  	(this.respondido(24) == 2), (this.respondido(25) == 2), (this.respondido(26) == 2)],
		  	['Por encima de los demás', (this.respondido(24) == 3), (this.respondido(25) == 3), (this.respondido(26) == 3)]
		]; 
		laDataTable(dataSet3, 'vDT-DS3');
		
		//DATATABLE	
		var dataSet4 = [
			//Columnas
			['Manera de confrontar necesidades académicas', 'Seleccion'],
			//Filas
			['Pienso en varias soluciones', 										(this.respondido(27.1) == "true") ],
			['Busco consejo de otros', 												(this.respondido(27.2) == "true") ],
			['Comienzo a resolver el probelma sin tener un plan', 					(this.respondido(27.3) == "true") ],
			['Considero las cosas positivas y negativas del problema', 				(this.respondido(27.4) == "true") ],
			['Considero otra solución cuando la primera idea no parece funcionar',	(this.respondido(27.5) == "true") ]
		]; 
		laDataTable(dataSet4, 'vDT-DS4');

		//Form Break<<<Intereses y Actividades Generales

		//CHART 
		siNoColumnChart("Diversión en Tiempo Libre", this.respondido(29), 'vSiNo-2');
		//CHART 
		siNoColumnChart("Tareas y Responsabilidades en el Hogar", this.respondido(30), 'vSiNo-3');
		//CHART
		siNoColumnChart("Aspiración a una Carrera en el Futuro", this.respondido(31), 'vSiNo-4');

		//Form Break<<<Intereses y Metas de Estudios Generales

		//DATATABLE  
		var dataSet5 = [
			//Columnas
			['Estudios que toma al presente o interesa tomar en la escuela superior', 'Seleccion'],
			//Filas
			['No Aplica', 								(this.respondido(41) == 0)],
			['Programa de Preparación Universitaria', 	(this.respondido(41) == 1)],
			['Programa General', 						(this.respondido(41) == 2)],
			['Certificado Técnico / Vocaional', 		(this.respondido(41) == 3)],
			['Programa de Estudio y Trabajo', 			(this.respondido(41) == 4)],
			['Otro', 									(this.respondido(41) == 5)]
		]; 
		laDataTable(dataSet5, 'vDT-DS5');
		
		//DATATABLE  
		var dataSet6 = [
			//Columnas
			['Estudios que aspira seguir cuando termine la escuela superior', 'Seleccion'],
			//Filas
			['No Aplica',						(this.respondido(42) == 0 )],
			['Instituto Técnico Vocacional',	(this.respondido(42) == 1 )],
			['Grado Asociado', 					(this.respondido(42) == 2 )],
			['Bachillerato de Universidad',		(this.respondido(42) == 3 )],
			['Programa de Estudios Cortos',		(this.respondido(42) == 4 )],
			['Ninguna de las Anteriores',		(this.respondido(42) == 5 )]
		]; 
		laDataTable(dataSet6, 'vDT-DS6');

		//PIECHART
		var pieTitle7 = 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas';
		var dataSet7 = [
			//Columnas
			['Dimensión', 'Cantidad'],
			//Filas					
			['Gente-Publico', 		this.sumOfFields(35, 11)], //sum of field for question ID 35
			['Cosas-Manual', 		this.sumOfFields(37, 11)],
			['Datos-Información',	this.sumOfFields(39, 11)]
		]; 
		pieChart(dataSet7, pieTitle7,  'vPie-DS7');		
	}
};//end Reporte

reporte.editLink = function () {

	return  $("href", ".useredit a").html()
};

reporte.sumOfFields = function (fNumber, optsNumber) {
	//Establecer un metodo para obtener el correspondiente 	
	//optsNumber :  posibles respuestas
	var elvalue, i;
	var suma =0;
	
	for(i=1; i<=optsNumber; i++){
		elvalue = parseInt(this.respondido(fNumber+"."+i));
		if (!elvalue == 1){
			elvalue = 0;
		}else{
			suma = elvalue + suma;
		}
	}
	return suma;
};

reporte.respondido = function (fieldN) {
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
};
/*
reporte.preguntaDom = function (DOMnumber) {
	var label = $(".entry-view-field-name").eq(DOMnumber).text();
	//console.log(label);
	return label;
};
*/
//////onReady
$(function () {
	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC"); 
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC", "color", "#FFF");

	//En Pag. REPORTE
	if(!$.urlParam('form')){
		$(".customReport").hide();
	} else{
		$(".entry-detail-view").hide();
		reporte.init();

	}

	//En Pag. EDITAR
	if( $.urlParam('form') &&  $.urlParam('edit') ){
		$(".customReport").remove();
		console.log("Editing Student");
	}

	//En Pag. REGISTRAR
	if ( $.urlParam('page_id') == 96  ) {
		console.log("Lets ADD an Student");	
	};
	
	//TABS  
	$( "#tabs" ).tabs(); 
	//$(".gform_previous_button").hide();
	
	//ACCORDION
	//$(".customReport").accordion({heightStyle: "content" });

	/*var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });*/
});
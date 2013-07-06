var respuestas, leadId;

var reporte = {
     
    //selectedCountry: {},
	
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


function studentBasicData(label, value){

	$("#leadData").append("<li>"+label+" : "+value+"</li>")
}


function siNo(pregunta, respuesta) {
	var data = google.visualization.arrayToDataTable([
		['Sí | No = 0', 'Valor'],
		['Respuesta | Sí / No ',  parseInt(respuesta)],
	]);

	var options = {
		title: pregunta,
		legend: {position: 'none'},
		vAxis:{minValue:0,maxValue:1,gridlines:{count:2}, 
		title:'< No - Si >'},
		tooltip: {trigger: 'none'},
		bar: {groupWidth: 100}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));
	chart.draw(data, options);
};


function laDataTable() {

	var data = new google.visualization.DataTable();

	data.addColumn('string', 'Servicios que recibe en  la escuela');
	data.addColumn('boolean', 'Selección');

	data.addRows([
		['Consejero Escolar', respondido(11.1)],
		['Sicólogo', respondido(11.2)],
		['Tutoría', respondido(11.3)],
		['Terapia de Habla',  respondido(11.4)],
		['Terapia Ocupacional',  respondido(11.5)],
		['Asistencia Tecnológica',  respondido(11.6)],
		['Acomodos',  respondido(11.7)],
		['Otros',  respondido(11.8)]
	]);

	var table = new google.visualization.Table(document.getElementById('visualizationb'));
	table.draw(data, {showRowNumber: false});
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
	//laDataTable();

		

}



/*
function getCBValues(eNum){
	var b1 = eNum;
	var b2 = b1+1;
	var fnumber = this["field_number"];
	var eValue = this["value"];
	
	if (fnumber > b1 && fnumber < b2){
	      //console.log(eValue); 
	      //console.log(fnumber);
	      return eValue
	}
}

*/



		
//ready
$(function(){
	//$(".entry-detail-view").hide(); 
	
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
/*Data-Graphics reports for SATENSPR by artyficial.net */
var DS0, DS1, DS2, DS3;
//GET Param Helper
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

	function laDataTable (nRespuestas, targetDom) {
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var table = new google.visualization.Table(document.getElementById(targetDom));
		table.draw(data, {showRowNumber: false}); 
	};

	function laDataTableDos(nRespuestas, targetDom) {
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var table = new google.visualization.Table(document.getElementById(targetDom));
		var formatter = new google.visualization.BarFormat({width: 100, showValue: false, drawZeroLine: true, max: 1, min: -1, base: 0 });
		formatter.format(data, 1); // Apply formatter to second column
		table.draw(data, {allowHtml: true, showRowNumber: false});
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



var reporte = {
	
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
		//});
	},

	startDraw : function () {

		studentBasicData("Nombre " , this.respondido(3));
		studentBasicData("Segundo Nombre " , this.respondido(4));
		studentBasicData("Apellido " , this.respondido(5));
		studentBasicData("Segundo Apellido " , this.respondido(6));
		studentBasicData("Genero " , this.respondido(7));
		studentBasicData("Fecha de nacimiento " , this.respondido(8));
		studentBasicData("Grado ", this.respondido(9));
		//Draws
		$.getScript('/wp-content/themes/twentytwelve/js/datatables.js').done(function(){
			reporte.dataTables();
		});
		
//		siNoColumnChart("Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento", this.respondido(22), "vSiNo-0");

	}

}; //end Reporte


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
	if( $.urlParam('leadid') && $.urlParam('form') ){
		$(".entry-detail-view").hide();
		$("#tabs").show();
		reporte.init(); //INIT
	} else{
		$(".customReport").hide();
	}

	//En Pag. EDITAR
	if( $.urlParam('form') && $.urlParam('edit') ){
		$(".customReport").remove();
		console.log("Editing Student?");
	}

	//En Pag. REGISTRAR
	if ( $.urlParam('page_id') == 96  ) {
		console.log("Lets ADD an Student!");	
	};

	//En Pag. ESTUDIANTES
	if ( $.urlParam('page_id') == 94  ) {
		console.log("Here we have all our students!");
		//$("#tabs").hide();
	};
	
	//TABS  
	$( "#tabs" ).tabs(); 

	//ACCORDION
	//$(".customReport").accordion({heightStyle: "content" });
});
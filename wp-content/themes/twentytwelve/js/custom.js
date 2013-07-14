/*Data-Graphics reports for SATENSPR by artyficial.net */
var DS0, DS1, DS2, DS3, DS4, DS5, DS6, DS7, DS8, DS9, DS10, 
DS11, DS12, DS13, DS14, DS15, DS16, DS17, DS18, DS19, 
DS20, DS21, DS22, DS23, DS24, DS25, DS26, DS27, DS28, DS29, DS30, DS31/*, 
DS32, DS33, DS34, DS34, DS36, DS37, DS38, DS39, DS40, DS41, DS42, DS43*/;

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
	function formBreak(domReport, domTitle){

		$(domReport).append("<dt class='tituloForm'>"+domTitle+"</dt>");		
	};

	function studentBasicData (label, value) {

		$("#leadData").append("<li>"+label+" : "+value+"</li>")
	};

	function siNoColumnChart (pregunta, formNumb, targetDom, respuesta) {
		$("dd", formNumb).append("<div id=" +targetDom+ "></div>");
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

	function pieChart (nRespuestas, formNumb, targetDom, pieTitle ) {
		$("dd", formNumb).append("<div id=" +targetDom+ "></div>");
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

	function laDataTableDos(nRespuestas, formNumb, targetDom) {
		$("dd", formNumb).append("<div id=" +targetDom+ "></div>");
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var table = new google.visualization.Table(document.getElementById(targetDom));
		var formatter = new google.visualization.BarFormat({width: 100, showValue: false, drawZeroLine: true, max: 1, min: -1, base: 0 });
		formatter.format(data, 1); // Apply formatter to second column
		table.draw(data, {allowHtml: true, showRowNumber: false});
	};

	function laDataTable (nRespuestas, formNumb, targetDom) {
		$("dd", formNumb).append("<div id=" +targetDom+ "></div>");
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var table = new google.visualization.Table(document.getElementById(targetDom));
		table.draw(data, {showRowNumber: false}); 
	};

	function velocimetros (nRespuestas, formNumb, targetDom) {

		$("dd", formNumb).append("<div id=" +targetDom+ "></div>");

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
		//Request Lead's
		$.get('/servicio.php?leadid='+leadId).done(function(data) {
			respuestas = data.r;
			console.log("Reg : "+respuestas.length);
			//console.log(respuestas);
			reporte.startDraw();
		});
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

		$.get('/wp-content/themes/twentytwelve/js/datatables.js').done(function(data){
			reporte.dataTables();
			console.log("volvi");
		
		});

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

//////onReady
$(function () {
	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC"); 
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC", "color", "#FFF");

	//En Pag. REPORTE
	if( $.urlParam('leadid') && $.urlParam('form') )  {
		
		reporte.init();	
		$(".entry-detail-view").hide(); //Hide Directory's table.
		
		//TABS  
		$( "#tabsInforme" ).tabs();

	}else{
		$("#tabsInforme").hide();
	}

});


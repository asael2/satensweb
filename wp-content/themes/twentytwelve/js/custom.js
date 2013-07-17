/*Data-Graphics reports for SATENSPR by artyficial.net */
var DS_22, DS_23, DS_24_26, DS2_24_26, DS_27, DS_29, 
	DS_30, DS_31, DS_41, DS_42, DS_35_39, DS_45, DS_47, 
	DS_49, DS_50, DS_51, DS_52, DS_54, DS_55_59, DS_61, 
	DS_64, DS_65, DS_67, DS_68, DS_85, DS_70_75, DS_77, 
	DS_79, DS_81, DS_82, DS_83, DS_104_108;

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

	function formBreak(nRespuestas, formNumb){
		var domElemt = "<li> <h2 class='tituloForm'>"+nRespuestas+"</h2> </li>";
		$(formNumb).append(domElemt);
	};

	function studentBasicData (label, value) {

		$("#leadData").append("<li>"+label+" : "+value+"</li>")
	};

	function siNoColumnChart (nRespuestas, targetDom, formNumb, pregunta) {
		var domElemt = "<li> <div id="+targetDom+"></div></li>";
		$(formNumb).append(domElemt);		

		var data = google.visualization.arrayToDataTable(nRespuestas);

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

	function pieChart (nRespuestas, targetDom, formNumb, eTitle) {
		var domElemt = "<li> <div id="+targetDom+"></div></li>";
		$(formNumb).append(domElemt);
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var options = {
				title: eTitle,
				backgroundColor: {strokeWidth: 1, fill: 'white',},
				legend: {position: 'bottom', alignment: 'start'},
				width:'100%'
			};
		var charte = new google.visualization.PieChart(document.getElementById(targetDom));
		charte.draw(data, options);
	};

	function laDataTableDos(nRespuestas, targetDom, formNumb) {
		var domElemt = "<li> <div id="+targetDom+"></div></li>";
		$(formNumb).append(domElemt);
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var table = new google.visualization.Table(document.getElementById(targetDom));
		var formatter = new google.visualization.BarFormat({width: 100, showValue: false, drawZeroLine: true, max: 1, min: -1, base: 0 });
		formatter.format(data, 1); // Apply formatter to second column
		table.draw(data, {allowHtml: true, showRowNumber: false});
	};

	function laDataTable (nRespuestas, targetDom, formNumb) {
		var domElemt = "<li> <div id="+targetDom+"></div></li>";
		$(formNumb).append(domElemt);
		var data = google.visualization.arrayToDataTable(nRespuestas);
		var table = new google.visualization.Table(document.getElementById(targetDom));
		table.draw(data, {showRowNumber: false}); 
	};

	function velocimetros (nRespuestas, targetDom, formNumb) {
		var domElemt = "<li> <div id="+targetDom+"></div></li>";
		$(formNumb).append(domElemt);
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

	function linearGraph (nRespuestas, targetDom, formNumb, eTitle) {

		var domElemt = "<li> <div id="+targetDom+"></div></li>";
		$(formNumb).append(domElemt);
        
        var data = google.visualization.arrayToDataTable(nRespuestas);

		var options = {
			title: eTitle,
			titlePosition: 'out',
			legend: {position: 'bottom'},
			lineWidth: 5,
			vAxis: {maxValue: 4},
			hAxis: {title: "Preguntas"},
			vAxis: {title: "Opciones"},
			colors:['red','green'],
			pointSize: 10,
		};

        var chart = new google.visualization.LineChart(document.getElementById(targetDom));
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
			console.log(respuestas);
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
		studentBasicData("", "<a href="+this.editLink()+">EDITAR</a>");
		
		$.get('/wp-content/themes/twentytwelve/js/datatables.js').done(function(data){
			reporte.dataTables();
			console.log("reporte.dataTables callback");
		});
	}

};//Reporte end

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

	return  $(".useredit a").attr('href');
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
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");
	//REPORTE
	if( $.urlParam('leadid') && $.urlParam('form') )  {
		$(".entry-detail-view").hide(); //Hide Directory's table.		
		$( "#tabsInforme" ).tabs();
		reporte.init();	
	}else{
		$("#tabsInforme").hide();
	}
	//EDITAR Lead
	if( $.urlParam('leadid') && $.urlParam('form') && $.urlParam('edit') )  {
		$("#satensReport").hide();
	}
});


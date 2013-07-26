/*Data-Graphics reports for SATENSPR by artyficial.net */

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

	function formBreak(formNumb, nRespuestas){
		var domElemt = "<li><div class='tituloForm'> <h4>"+nRespuestas+"</h4> </div> </li>";
		$(formNumb).append(domElemt);
	};

	function printParagraph(formNumb, nRespuestas){
		if (nRespuestas){
			var domElemt = "<li> <p class='printParagraph'>"+nRespuestas+"</p> </li>";
			$(formNumb).append(domElemt);
		}
	};

	function photoPrint(nRespuestas){
		if (nRespuestas){
			var domElemt = "<img src="+nRespuestas+" />";
			$("#leadPic").append(domElemt);
		} 
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
      	google.visualization.events.addListener(table, 'sort', function(event) {
			$("td:contains('✗')").css("color", "white");       
      	});
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
		$(".loading-curtain").show();
		//Request Lead's
		$.get('/servicio.php?leadid='+leadId).done(function(data) {
			respuestas = data.r;
			console.log("Regs. : "+respuestas.length);
			//console.log(respuestas);
			reporte.startDraw();
		});
	},	

	startDraw : function () {
		
		reporte.titleReplace();

		studentBasicData("Nombre " , this.respondido(3));
		studentBasicData("Segundo Nombre " , this.respondido(4));
		studentBasicData("Apellido " , this.respondido(5));
		studentBasicData("Segundo Apellido " , this.respondido(6));
		studentBasicData("Genero " , this.respondido(7));
		studentBasicData("Fecha de nacimiento " , this.respondido(8));
		studentBasicData("Grado ", this.respondido(9));
		studentBasicData("", "<a href="+this.editLink()+">EDITAR</a>");
		photoPrint(this.respondido(510))

		$.get('/wp-content/themes/twentytwelve/js/datatables.js').done(function(data){
			reporte.dataTables();
			$("td:contains('✗')").css("color", "white"); 
			$("#tabsInforme").tabs();
			$(".loading-curtain").fadeOut("fast");
		});
	}

};//Reporte end

reporte.sumaCampos = function(firstField, lastField){
    var i, A = 0, B = 0, C = 0, D = 0, E = 0;
	for ( i = firstField; i <= lastField; i++ ){
		switch(this.respondido(i)){
			case "1":
				A++;
				break;
			case "2":
				B++;
				break;
			case "3":
				C++;
				break;
			case "4":
				D++;
				break;
			case "5":
				E++;
				break;
			default:
				//console.log("no value in: "+i);
		}//switch eof
	}
	return{ "A": A, "B":B, "C":C, "D":D, "E":E };
};

reporte.sumaMultiCampos = function(){
    var tempHolder, suma=0;
    for (var i=0; i<arguments.length; i++) {
    	valor = reporte.respondido(arguments[i]);
    	tempHolder = parseInt(valor) || 0;
    	suma = suma + tempHolder;
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

reporte.editLink = function () {

	return  $(".useredit a").attr('href');
};

reporte.titleReplace = function () {
	var alumni = "Estudiante: "+ this.respondido(3) +" "+ this.respondido(5);
	$(".entry-title").text(alumni);
};

reporte.sumOfFields = function (fNumber, optsNumber) {
	//Establecer un metodo para obtener el correspondiente 	
	//optsNumber :  posibles respuestas
	var elvalue, i, suma = 0;

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

reporte.totalSet = function(firstField, lastField){

    var firstField, lastField, i, pieA, pieB, pieC, pieD;

    for ( i == firstField; i <= lastField; i++){
   		console.log(i);
   	}

};

//////onReady
$(function () {
	//SERAiD
	$(".gform_wrapper .readonly input").attr('readonly', 'readonly').css("background","#CCC"); 
	$(".entry-details #input_1").attr('readonly', 'readonly').css("background","#CCC");
	
	//REPORTE Lead
	if( $.urlParam('leadid') && $.urlParam('form') )  {
		$(".loading-curtain").show();
		$("#site-navigation, .entry-detail-view, #studentinstructions").hide();
		//$(".entry-detail-view").hide(); //Hide Directory's table.		
		reporte.init();	
	}else{
		$("#tabsInforme").hide();
		$("#site-navigation").show();
		$(".loading-curtain").hide();
	}
	
	//EDITAR Lead
	if( $.urlParam('leadid') && $.urlParam('form') && $.urlParam('edit') )  {
		
		$("#satensReport").hide();
		
		//Add Forms titles class
		$(".detail_gsection_title:contains('Formulario')").each(function(i, v){
			var secFTitle = $(this).closest('tr')
			secFTitle.addClass("tabTituloForm");
		}); 
		//Add Forms contents class
		$(".tabTituloForm", "table.form-table").nextUntil(".tabTituloForm").addClass("contenidoForm");

		//Bind click togle
		$(".tabTituloForm", "table.form-table").click(function() {
			$(this).toggleClass('editActive');
			$(this).nextUntil(".tabTituloForm").toggle();
		});

		//Init toggles
		$(window).load(function() {
			$(".tabTituloForm", "table.form-table").nextUntil(".tabTituloForm").toggle();
			//Int with open accordion
			//$(".tabTituloForm:first", "table.form-table").addClass('editActive').nextUntil(".tabTituloForm").toggle();
		})
			
	}//Editar eof
});

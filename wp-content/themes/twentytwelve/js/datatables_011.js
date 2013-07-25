reporte.dataTables = function(){

//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	
	////////////////Form Beak<<< Auto Perfil Educativo del Estudiante
	//sino	
	DS0 = "Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento";
	addDom(".form1", "vSiNo-0"); 
	siNoColumnChart(DS0, this.respondido(22), "vSiNo-0");
	
	//DATATABLE      
	DS1 = [
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
	addDom(".form1", "vDT-DS1"); 
	laDataTable(DS1, 'vDT-DS1');
	
	//VELOCIMETROS
	DS2 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(this.respondido(24))],
		['Escritura',	parseInt(this.respondido(25))],
		['Matemáticas',	parseInt(this.respondido(26))]
	];
	addDom(".form1", "vGVel-DS2"); 
	velocimetros(DS2, 'vGVel-DS2');
	
	//DATATABLE
	DS3 = [
		//Columnas
		['Autocalificación ', 'Lectura', 'Escritura', 'Matematicas'],

		//Filas
		['Desconozco',				(this.respondido(24) == 0), (this.respondido(25) == 0), (this.respondido(26) == 0)],
		['Por debajo de los demás', (this.respondido(24) == 1), (this.respondido(25) == 1), (this.respondido(26) == 1)],
		['Igual que los demás',  	(this.respondido(24) == 2), (this.respondido(25) == 2), (this.respondido(26) == 2)],
		['Por encima de los demás', (this.respondido(24) == 3), (this.respondido(25) == 3), (this.respondido(26) == 3)]
	]; 
	addDom(".form1", 'vDT-DS3');
	laDataTable(DS3, 'vDT-DS3');

	//DATATABLE	
	DS4 = [
		//Columnas
		['Manera de confrontar necesidades académicas', 'Seleccion'],
		//Filas
		['Pienso en varias soluciones', 										(this.respondido(27.1) == "true
reporte.dataTables = function(){

//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	//Form Break<<<<<<<<<
	//formBreak(".form1", "Auto Perfil Educativo del Estudiante");

	//sino	
	DS0 = "Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento";
	addDomChart(".form1", "vSiNo-0"); 
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
	addDomChart(".form1", "vDT-DS1"); 
	laDataTable(DS1, 'vDT-DS1');
	
	//VELOCIMETROS
	DS2 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(this.respondido(24))],
		['Escritura',	parseInt(this.respondido(25))],
		['Matemáticas',	parseInt(this.respondido(26))]
	];
	addDomChart(".form1", "vGVel-DS2"); 
	velocimetros(DS2, 'vGVel-DS2');


}
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
		['Pienso en varias soluciones', 										(this.respondido(27.1) == "true") ],
		['Busco consejo de otros', 												(this.respondido(27.2) == "true") ],
		['Comienzo a resolver el probelma sin tener un plan', 					(this.respondido(27.3) == "true") ],
		['Considero las cosas positivas y negativas del problema', 				(this.respondido(27.4) == "true") ],
		['Considero otra solución cuando la primera idea no parece funcionar',	(this.respondido(27.5) == "true") ]
	]; 
	addDom(".form1", 'vDT-DS4');
	laDataTable(DS4, 'vDT-DS4');

	////////////////Form Break<<<Intereses y Actividades Generales
	//sino
	DS5 = "Diversión en Tiempo Libre";
	addDom(".form1", 'vSiNo-5');	
	siNoColumnChart(DS5, this.respondido(29), 'vSiNo-5');
	
	//sino 
	DS6 = "Tareas y Responsabilidades en el Hogar";
	addDom(".form1", 'vSiNo-6');
	siNoColumnChart(DS6, this.respondido(30), 'vSiNo-6');
	
	//sino
	DS7 = "Aspiración a una Carrera en el Futuro";
	addDom(".form1", 'vSiNo-7');
	siNoColumnChart(DS7, this.respondido(31), 'vSiNo-7');

	//Form Break<<<Intereses y Metas de Estudios Generales
	//DATATABLE 
	DS8 = [
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
	addDom(".form1", 'vDT-DS8'); 
	laDataTable(DS8, 'vDT-DS8');

	//DATATABLE 
	DS9 = [
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
	addDom(".form1", 'vDT-DS9'); 
	laDataTable(DS9, 'vDT-DS9');

	//PIECHART
	DS10 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas					
		['Gente-Publico', 		this.sumOfFields(35, 11)], //sum of field for question ID 35
		['Cosas-Manual', 		this.sumOfFields(37, 11)],
		['Datos-Información',	this.sumOfFields(39, 11)]
	]; 
	addDom(".form1", 'vPie-DS10');
	pieChart(DS10, 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas',  'vPie-DS10');	

}

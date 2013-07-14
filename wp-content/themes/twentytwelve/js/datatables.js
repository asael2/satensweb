reporte.dataTables = function(){

//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	//Form Break<<<<<<<<<
	formBreak(".form1", "Auto Perfil Educativo del Estudiante");
	
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
	addDomChart(".form1", 'vDT-DS3');
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
	addDomChart(".form1", 'vDT-DS4');
	laDataTable(DS4, 'vDT-DS4');

	//Form Break<<<<<<<<<
	formBreak(".form1", "Intereses y Actividades Generales");

	//sino
	DS5 = "Diversión en Tiempo Libre";
	addDomChart(".form1", 'vSiNo-5');	
	siNoColumnChart(DS5, this.respondido(29), 'vSiNo-5');
	
	//sino 
	DS6 = "Tareas y Responsabilidades en el Hogar";
	addDomChart(".form1", 'vSiNo-6');
	siNoColumnChart(DS6, this.respondido(30), 'vSiNo-6');
	
	//sino
	DS7 = "Aspiración a una Carrera en el Futuro";
	addDomChart(".form1", 'vSiNo-7');
	siNoColumnChart(DS7, this.respondido(31), 'vSiNo-7');

	//Form Break<<<<<<<<<
	formBreak(".form1", "Intereses y Metas de Estudios Generales");

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
	addDomChart(".form1", 'vDT-DS8'); 
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
	addDomChart(".form1", 'vDT-DS9'); 
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
	addDomChart(".form1", 'vPie-DS10');
	pieChart(DS10, 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas',  'vPie-DS10');	

//FORMULARIO 2 >>>>>>>>>>>>>>>>>>>>>>>>>

	//Form Break<<<<<<<<<
	formBreak(".form2", "Cuestionario al Padre o Encargado");

	//DATATABLE      
	DS11 = [
		//Columnas
		['Programa académico que le gustaría tomara su hijo/a en la escuela ', 'Seleccion'],
		//Filas
		['Programa de Preparación Universitaria', 	(this.respondido(23.1) == "true") ], 
		['Programa General', 						(this.respondido(23.2) == "true") ], 
		['Programa de Estudio y Trabajo', 			(this.respondido(23.3) == "true") ],
		['Programa Vocacional | Técnico', 			(this.respondido(23.3) == "true") ],
		['Otros',  									(this.respondido(23.8) == "true") ]
	]; 
	addDomChart(".form2", 'vDT-DS11');
	laDataTable(DS11, 'vDT-DS11');

	//DATATABLE      
	DS12 = [
		//Columnas
		['Grado académico o trabajo que espera su hijo/a continúe después de la escuela superior', 'Seleccion'],
		//Filas
		['No Aplica',   (this.respondido(47.1) == "true") ], 
		['Universidad',     (this.respondido(47.2) == "true") ], 
		['Grado Asociado',     (this.respondido(47.3) == "true") ],
		['Empleo Especializado',    (this.respondido(47.4) == "true") ],
		['Empleo Semi-especializado',   (this.respondido(47.5) == "true") ],
		['Fuerzas Armadas', (this.respondido(47.6) == "true") ],
		['Otro ',     (this.respondido(47.7) == "true") ]
	]; 
	addDomChart(".form2", 'vDT-DS12');
	laDataTable(DS12, 'vDT-DS12');

	//sino
	DS13 = "Conoce si su hijo/a tiene alguna experiencia de trabajo (part time)"; 
	addDomChart(".form2", 'vSiNo-13');
	siNoColumnChart(DS13, this.respondido(49), 'vSiNo-13');

	//DATATABLE 
	DS14 = [
		//Columnas
		['Calificación del conocimiento adquirido por su hijo/a en su experiencia de trabajo anterior', 'Seleccion'],
		//Filas
		['Ninguna',   (this.respondido(50.1) == "true") ], 
		['Poco',	(this.respondido(50.2) == "true") ], 
		['Mucho',     (this.respondido(50.3) == "true") ]
	]; 
	addDomChart(".form2", 'vDT-DS14');
	laDataTable(DS14, 'vDT-DS14');

	//sino
	DS15 ="Opinión sobre si su hijo/a necesita mejorar en sus destrezas sociales para aumentar sus oportunidades de empleo y estudios futuros";
	addDomChart(".form2", 'vSiNo-15');
	siNoColumnChart(DS15, this.respondido(51), 'vSiNo-15');

	//DATATABLE      
	DS16 = [
		//Columnas
		['Destrezas sociales que opina su hijo/a debe mejorar', 'Seleccion'],
		//Filas
		['Conducta',   (this.respondido(52.1) == "true") ], 
		['Cortesía',     (this.respondido(52.2) == "true") ], 
		['Iniiciativa',     (this.respondido(52.3) == "true") ],
		['Puntualidad y Asistencia',    (this.respondido(52.4) == "true") ],
		['Otro',   (this.respondido(52.5) == "true") ]
	];
	addDomChart(".form2", 'vDT-DS16');
	laDataTable(DS16, 'vDT-DS16');

	//sino
	DS17 = "Ocupaciones en o fuera de la escuela."; 
	addDomChart(".form2", 'vSiNo-17');
	siNoColumnChart(DS17, this.respondido(54), 'vSiNo-17');

	//vPie-DS15
	DS18 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas     
		['Gente-Publico',   this.sumOfFields(55, 11)], //sum of field for question ID 35
		['Cosas-Manual',   this.sumOfFields(57, 11)],
		['Datos-Información', this.sumOfFields(59, 11)]
	]; 
	addDomChart(".form2", 'vPie-DS18');
	pieChart(DS18, 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas',  'vPie-DS18');	

	//sino
	DS19 = "¿Tiene usted alguna preocupación en relación al desarrollo académico y ocupacional de su hijo/a?"
	addDomChart(".form2", 'vSiNo-19');
	siNoColumnChart(DS19, this.respondido(61), 'vSiNo-19');

//FORMULARIO 3 >>>>>>>>>>>>>>>>>>>>>>>>>

	//Form Break<<<<<<<<<
	formBreak(".form3", "Trabajo en la Escuela al Presente y Planes Futuros");
	
	//sino
	DS20 = "Tiene planes de continuar estudios o trabajo al terminar la escuela superior"; 
	addDomChart(".form3", 'vSiNo-20');
	siNoColumnChart(DS20, this.respondido(64), 'vSiNo-20');

	//sino
	DS21 = "Al presente necesita ayuda para hacer sus tareas en las clases";
	addDomChart(".form3", 'vSiNo-21');
	siNoColumnChart(DS21, this.respondido(65), 'vSiNo-21');

	//sino
	DS22 = "Tiene algún problema académico, impedimento o de salud"; 
	addDomChart(".form3", 'vSiNo-22');
	siNoColumnChart(DS22, this.respondido(66), 'vSiNo-22');

	//DATATABLE  
	DS23 = [
		//Columnas
		['Autocalificación ', 'Lectura'],
		//Filas
		['Algunas manera que identifica para estudiar en sus clases',    (this.respondido(67) == 0)],
		['Organizando su horario de estudio', (this.respondido(67) == 1)],
		['Repasando con frecuencia los contenidos que va aprendiendo',   (this.respondido(67) == 2)],
		['Estudiando antes de las clases', (this.respondido(67) == 3)],
		['Todas las anterior', (this.respondido(67) == 3)]
	]; 
	addDomChart(".form3", 'vDT-DS23');
	laDataTable(DS23, 'vDT-DS23');

	//sino
	DS24 = "Busca ayuda cuando tiene dificultades en las clases";
	addDomChart(".form3", 'vSiNo-24');
	siNoColumnChart(DS24, this.respondido(85), 'vSiNo-24');
	
	//sino
	DS25 = "Si está satisfecho/a con los cursos que toma al presente en la escuela"; 
	addDomChart(".form3", 'vSiNo-25');
	siNoColumnChart(DS25, this.respondido(68), 'vSiNo-25');

	//Form Break<<<<<<<<<
	formBreak(".form3", "Experiencias del Diario Vivir | Comunitarias");

	//DATATABLE  
	DS26 = [
		//Columnas
		['Interes General y/o Actividad', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Sabe ir al correo, banco, hospital, entre otros',  parseInt( this.respondido(70) ) ],
		['Participa en organizaciones o actividades en la escuela',  parseInt( this.respondido(71) ) ],
		['Participa de otras actividades en la comunidad',  parseInt( this.respondido(72) ) ],
		['Tiene licencia de conducir',  parseInt( this.respondido(73) ) ],
		['Necesita ayuda para aprobar el examen de conducir',  parseInt( this.respondido(74) ) ],
		['Tiene conocimiento que a los 18 años de edad se puedes registrar para votar en las elecciones',  parseInt( this.respondido(75) ) ],
	]; 
	addDomChart(".form3", 'vDT2-DS26');
	laDataTableDos(DS26, 'vDT2-DS26');

	//Form Break<<<<<<<<<
	formBreak(".form3", "Planes Después de Terminar la Escuela Superior");

	//DATATABLE  
	DS27 = [
		//Columnas
		['Algunas manera que identifica para estudiar en sus clases ', 'Seleccion'],
		//Filas
		['Organizando su horario de estudio', (this.respondido(67) == 1)],
		['Repasando con frecuencia los contenidos que va aprendiendo',   (this.respondido(67) == 2)],
		['Estudiando antes de las clases', (this.respondido(67) == 3)],
		['Todas las anterior', (this.respondido(67) == 3)]
	]; 
	addDomChart(".form3", 'vDT-DS27');
	laDataTable(DS27, 'vDT-DS27');

	//Form Beak<<< 
	formBreak(".form3", "Experiencias del Diario Vivir | Comunitarias");

	//DATATABLE  
	DS28 = [
		//Columnas
		['Interes General y/o Actividad', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Sabe ir al correo, banco, hospital, entre otros', parseInt( this.respondido(73) ) ],
		['Participa en organizaciones o actividades en la escuela', parseInt( this.respondido(73) ) ],
		['Participa de otras actividades en la comunidad', parseInt( this.respondido(73) ) ],
		['Tiene licencia de conducir', parseInt( this.respondido(73) ) ],
		['Necesita ayuda para aprobar el examen de conducir', -1],
		['Tiene conocimiento que a los 18 años de edad se puedes registrar para votar en las elecciones', parseInt( this.respondido(73) ) ],
	]; 
	addDomChart(".form2", 'vDT2-DS28');
	laDataTableDos(DS28, 'vDT2-DS28');

	//sino
	DS29 = "Busca ayuda cuando tiene dificultades en las clases";
	addDomChart(".form3", 'vSiNo-29');
	siNoColumnChart(DS29, this.respondido(85), 'vSiNo-29');

	//sino
	DS30 = "Si está satisfecho/a con los cursos que toma al presente en la escuela"; 
	addDomChart(".form3", 'vSiNo-30');
	siNoColumnChart(DS30, this.respondido(68), 'vSiNo-30');

	//Form Beak<<<
	formBreak(".form3", "Experiencias del Diario Vivir | Comunitarias");
	DS31 = [
		//Columnas
		['Interes General y/o Actividad', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Sabe ir al correo, banco, hospital, entre otros', 1],
		['Participa en organizaciones o actividades en la escuela', -1],
		['Participa de otras actividades en la comunidad', 1],
		['Tiene licencia de conducir', 1],
		['Necesita ayuda para aprobar el examen de conducir', -1],
		['Tiene conocimiento que a los 18 años de edad se puedes registrar para votar en las elecciones', 1],
	]; 
	addDomChart(".form3", 'vDT2-DS31');
	laDataTableDos(DS31, 'vDT2-DS31');

}
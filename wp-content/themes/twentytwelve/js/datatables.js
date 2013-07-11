reporte.dataTables = function(){


//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	//Form Beak<<< Auto Perfil Educativo del Estudiante

	//CHART
	//siNoColumnChart("Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento", this.respondido(22), "vSiNo-0")

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

//FORMULARIO 2 >>>>>>>>>>>>>>>>>>>>>>>>>
	//DATATABLE      
	var dataSet8 = [
		//Columnas
		['Programa académico que le gustaría tomara su hijo/a en la escuela ', 'Seleccion'],
		//Filas
		['Programa de Preparación Universitaria', 	(this.respondido(23.1) == "true") ], 
		['Programa General', 						(this.respondido(23.2) == "true") ], 
		['Programa de Estudio y Trabajo', 			(this.respondido(23.3) == "true") ],
		['Programa Vocacional | Técnico', 			(this.respondido(23.3) == "true") ],
		['Otros',  									(this.respondido(23.8) == "true") ]
	]; 
	laDataTable(dataSet8, 'vDT-DS8');

	//DATATABLE      
	var dataSet9 = [
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
	laDataTable(dataSet9, 'vDT-DS9');

	//CHART
	siNoColumnChart("Conoce si su hijo/a tiene alguna experiencia de trabajo (part time)", this.respondido(49), 'vSiNo-10');

	//DATATABLE 
	var dataSet11 = [
		//Columnas
		['Calificación del conocimiento adquirido por su hijo/a en su experiencia de trabajo anterior', 'Seleccion'],
		//Filas
		['Ninguna',   (this.respondido(50.1) == "true") ], 
		['Poco',	(this.respondido(50.2) == "true") ], 
		['Mucho',     (this.respondido(50.3) == "true") ]
	]; 
	laDataTable(dataSet11, 'vDT-DS11');


	siNoColumnChart("Opinión sobre si su hijo/a necesita mejorar en sus destrezas sociales para aumentar sus oportunidades de empleo y estudios futuros", this.respondido(51), 'vSiNo-12');

	//DATATABLE      
	var dataSet13 = [
		//Columnas
		['Destrezas sociales que opina su hijo/a debe mejorar', 'Seleccion'],
		//Filas
		['Conducta',   (this.respondido(52.1) == "true") ], 
		['Cortesía',     (this.respondido(52.2) == "true") ], 
		['Iniiciativa',     (this.respondido(52.3) == "true") ],
		['Puntualidad y Asistencia',    (this.respondido(52.4) == "true") ],
		['Otro',   (this.respondido(52.5) == "true") ]
	];
	laDataTable(dataSet13, 'vDT-DS13');

	//siNoColumnChart("Brindaría permiso a su hijo/a para que asista a talleres sobre carreras y
	siNoColumnChart("Ocupaciones en o fuera de la escuela.", this.respondido(54), 'vSiNo-14');

	//vPie-DS15
	var pieTitle15 = 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas';
	var dataSet15 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas     
		['Gente-Publico',   this.sumOfFields(55, 11)], //sum of field for question ID 35
		['Cosas-Manual',   this.sumOfFields(57, 11)],
		['Datos-Información', this.sumOfFields(59, 11)]
	]; 
	pieChart(dataSet15, pieTitle15,  'vPie-DS15');	

	//CHART
	siNoColumnChart("¿Tiene usted alguna preocupación en relación al desarrollo académico y ocupacional de su hijo/a?", this.respondido(61), 'vSiNo-16');

//FORMULARIO 3 >>>>>>>>>>>>>>>>>>>>>>>>>
	//CHART
	siNoColumnChart("Tiene planes de continuar estudios o trabajo al terminar la escuela superior", this.respondido(64), 'vSiNo-17');

	//CHART
	siNoColumnChart("Al presente necesita ayuda para hacer sus tareas en las clases", this.respondido(65), 'vSiNo-18');

	//CHART
	siNoColumnChart("Tiene algún problema académico, impedimento o de salud", this.respondido(66), 'vSiNo-19');

	var dataSet20 = [
		//Columnas
		['Autocalificación ', 'Lectura'],
		//Filas
		['Algunas manera que identifica para estudiar en sus clases',    (this.respondido(67) == 0)],
		['Organizando su horario de estudio', (this.respondido(67) == 1)],
		['Repasando con frecuencia los contenidos que va aprendiendo',   (this.respondido(67) == 2)],
		['Estudiando antes de las clases', (this.respondido(67) == 3)],
		['Todas las anterior', (this.respondido(67) == 3)]
	]; 
	laDataTable(dataSet20, 'vDT-DS20');

	//CHART
	siNoColumnChart("Busca ayuda cuando tiene dificultades en las clases", this.respondido(85), 'vSiNo-21');
	//CHART
	siNoColumnChart("Si está satisfecho/a con los cursos que toma al presente en la escuela", this.respondido(68), 'vSiNo-22');

	//Form Beak<<< Experiencias del Diario Vivir | Comunitarias
	

	var dataSet23 = [
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
	laDataTableDos(dataSet23, 'vDT2-DS23');

	//Form Beak<<< Planes Después de Terminar la Escuela Superior
	var dataSet24 = [
		//Columnas
		['Algunas manera que identifica para estudiar en sus clases ', 'Seleccion'],
		//Filas
		['Organizando su horario de estudio', (this.respondido(67) == 1)],
		['Repasando con frecuencia los contenidos que va aprendiendo',   (this.respondido(67) == 2)],
		['Estudiando antes de las clases', (this.respondido(67) == 3)],
		['Todas las anterior', (this.respondido(67) == 3)]
	]; 
	laDataTable(dataSet24, 'vDT-DS24');

	//Form Beak<<< Experiencias del Diario Vivir | Comunitarias

	var dataSet25 = [
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
	laDataTableDos(dataSet25, 'vDT2-DS25');

	//CHART
	siNoColumnChart("Busca ayuda cuando tiene dificultades en las clases", this.respondido(85), 'vSiNo-26');
	//CHART
	siNoColumnChart("Si está satisfecho/a con los cursos que toma al presente en la escuela", this.respondido(68), 'vSiNo-27');

	//Form Beak<<< Experiencias del Diario Vivir | Comunitarias

	var dataSet28 = [
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
	laDataTableDos(dataSet28, 'vDT2-DS28');


}
reporte.dataTables = function(){
alert("god");
//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	
	formBreak(".form1", "Auto Perfil Educativo del Estudiante");

	//sino	
	DS0 = "Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento";
	siNoColumnChart(DS0, ".form1", "vSiNo-0", this.respondido(22));
	
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
	laDataTable(DS1, ".form1", "dt-DS1");
	
	//VELOCIMETROS
	DS2 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(this.respondido(24))],
		['Escritura',	parseInt(this.respondido(25))],
		['Matemáticas',	parseInt(this.respondido(26))]
	];
	velocimetros(DS2, ".form1", "vel-DS2");

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
	laDataTable(DS3, ".form1", "vDT-DS3");

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
	laDataTable(DS4, ".form1", 'vDT-DS4');

	//Form Break<<<<<<<<<
	formBreak(".form1", "Intereses y Actividades Generales");

	//sino
	DS5 = "Diversión en Tiempo Libre";	
	siNoColumnChart(DS5, ".form1", "vSiNo-5", this.respondido(29));
	
	//sino 
	DS6 = "Tareas y Responsabilidades en el Hogar";
	siNoColumnChart(DS6, ".form1", "vSiNo-6", this.respondido(30));
	
	//sino
	DS7 = "Aspiración a una Carrera en el Futuro";
	siNoColumnChart(DS7, ".form1", "vSiNo-7", this.respondido(31));

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
	laDataTable(DS8, ".form1", 'vDT-DS8');

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
	laDataTable(DS9, ".form1", 'vDT-DS9');

	//PIECHART
	DS10 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas					
		['Gente-Publico', 		this.sumOfFields(35, 11)], //sum of field for question ID 35
		['Cosas-Manual', 		this.sumOfFields(37, 11)],
		['Datos-Información',	this.sumOfFields(39, 11)]
	]; 
	pieChart(DS10, ".form1", 'vPie-DS10', 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas');	

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
		['Programa Vocacional | Técnico', 			(this.respondido(23.4) == "true") ],
		['Otros',  									(this.respondido(23.5) == "true") ]]; 
	laDataTable(DS11, ".form2", 'vDT-DS11');

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
		['Otro ',     (this.respondido(47.7) == "true") ]]; 
	laDataTable(DS12, ".form2", 'vDT-DS12');

	//sino
	DS13 = "Conoce si su hijo/a tiene alguna experiencia de trabajo (part time)"; 
	siNoColumnChart(DS13, ".form2",  'vSiNo-13', this.respondido(49));

	//DATATABLE 
	DS14 = [
		//Columnas
		['Calificación del conocimiento adquirido por su hijo/a en su experiencia de trabajo anterior', 'Seleccion'],
		//Filas
		['Ninguna',   (this.respondido(50.1) == "true") ], 
		['Poco',	(this.respondido(50.2) == "true") ], 
		['Mucho',     (this.respondido(50.3) == "true") ]]; 
	laDataTable(DS14, ".form2", 'vDT-DS14');

	//sino
	DS15 ="Opinión sobre si su hijo/a necesita mejorar en sus destrezas sociales para aumentar sus oportunidades de empleo y estudios futuros";
	siNoColumnChart(DS15, ".form2", 'vSiNo-15', this.respondido(51));

	//DATATABLE      
	DS16 = [
		//Columnas
		['Destrezas sociales que opina su hijo/a debe mejorar', 'Seleccion'],
		//Filas
		['Conducta',   (this.respondido(52.1) == "true") ], 
		['Cortesía',     (this.respondido(52.2) == "true") ], 
		['Iniiciativa',     (this.respondido(52.3) == "true") ],
		['Puntualidad y Asistencia',    (this.respondido(52.4) == "true") ],
		['Otro',   (this.respondido(52.5) == "true") ]];
	laDataTable(DS16, ".form2", 'vDT-DS16');

	//sino
	DS17 = "Ocupaciones en o fuera de la escuela."; 
	siNoColumnChart(DS17, ".form2", 'vSiNo-17', this.respondido(54));

	//vPie
	DS18 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas     
		['Gente-Publico',   this.sumOfFields(55, 11)], //sum of field for question ID 35
		['Cosas-Manual',   this.sumOfFields(57, 11)],
		['Datos-Información', this.sumOfFields(59, 11)]]; 
	pieChart(DS18, ".form2", 'vPie-DS18', 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas');	

	//sino
	DS19 = "¿Tiene usted alguna preocupación en relación al desarrollo académico y ocupacional de su hijo/a?"
	siNoColumnChart(DS19, ".form2", 'vSiNo-19', this.respondido(61));


}
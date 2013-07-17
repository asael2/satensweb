reporte.dataTables = function(){
var DS_22, DS_23, DS_24_26, DS2_24_26, DS_27, DS_29, DS_30, DS_31, DS_41, DS_42, DS_35_39, 
	DS_45, DS_47, DS_49, DS_50, DS_51, DS_52, DS_54, DS_55_59, DS_61, 
	DS_64, DS_65, DS_67, DS_68, DS_85, DS_70_75, DS_77, DS_79, DS_81, DS_82, DS_83, 
	DS_88, DS_89, DS_90,
	DS_93, DS_94, DS_96, DS_98, DS_99, DS_100, 
	DS_104_108, DS_111_119, DS_122_126, DS_129_136, DS_138_143;
//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	
	//COLUMNCHART
	DS_22 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(22))]
	];
	
	//DATATABLE      
	DS_23 = [
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
	
	//GAUGE
	DS_24_26 = [
		['Destreza',	'Valor'],
		['Lectura', 	parseInt(this.respondido(24))],
		['Escritura',	parseInt(this.respondido(25))],
		['Matemáticas',	parseInt(this.respondido(26))]
	];

	//DATATABLE
	DS2_24_26 = [
		//Columnas
		['Autocalificación ', 'Lectura', 'Escritura', 'Matematicas'],

		//Filas
		['Desconozco',				(this.respondido(24) == 0), (this.respondido(25) == 0), (this.respondido(26) == 0)],
		['Por debajo de los demás', (this.respondido(24) == 1), (this.respondido(25) == 1), (this.respondido(26) == 1)],
		['Igual que los demás',  	(this.respondido(24) == 2), (this.respondido(25) == 2), (this.respondido(26) == 2)],
		['Por encima de los demás', (this.respondido(24) == 3), (this.respondido(25) == 3), (this.respondido(26) == 3)]
	]; 

	//DATATABLE	
	DS_27 = [
		//Columnas
		['Manera de confrontar necesidades académicas', 'Seleccion'],
		//Filas
		['Pienso en varias soluciones', 										(this.respondido(27.1) == "true") ],
		['Busco consejo de otros', 												(this.respondido(27.2) == "true") ],
		['Comienzo a resolver el probelma sin tener un plan', 					(this.respondido(27.3) == "true") ],
		['Considero las cosas positivas y negativas del problema', 				(this.respondido(27.4) == "true") ],
		['Considero otra solución cuando la primera idea no parece funcionar',	(this.respondido(27.5) == "true") ]
	]; 
	
	//COLUMNCHART
	DS_29 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(29))]
	];
	
	//COLUMNCHART 
	DS_30 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(30))]
	];
	
	//COLUMNCHART
	DS_31 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(31))]
	];

	//DATATABLE 
	DS_41 = [
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

	//DATATABLE 
	DS_42 = [
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

	//PIECHART
	DS_35_39 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas					
		['Gente-Publico', 		this.sumOfFields(35, 11)], //sum of field for question ID 35
		['Cosas-Manual', 		this.sumOfFields(37, 11)],
		['Datos-Información',	this.sumOfFields(39, 11)]
	]; 
	
//FORMULARIO 2 >>>>>>>>>>>>>>>>>>>>>>>>>

	//DATATABLE      
	DS_45 = [
		//Columnas
		['Programa académico que le gustaría tomara su hijo/a en la escuela ', 'Seleccion'],
		//Filas
		['Programa de Preparación Universitaria', 	(this.respondido(45.1) == "true") ], 
		['Programa General', 						(this.respondido(45.2) == "true") ], 
		['Programa de Estudio y Trabajo', 			(this.respondido(45.3) == "true") ],
		['Programa Vocacional | Técnico', 			(this.respondido(45.4) == "true") ],
		['Otros',  									(this.respondido(45.5) == "true") ]
	]; 

	//DATATABLE      
	DS_47 = [
		//Columnas
		['Grado académico o trabajo que espera su hijo/a continúe después de la escuela superior', 'Seleccion'],
		//Filas
		['No Aplica',   				(this.respondido(47) == "0") ], 
		['Grado Asociado',     			(this.respondido(47) == "1") ],
		['Universidad',     			(this.respondido(47) == "2") ], 
		['Empleo Especializado',    	(this.respondido(47) == "3") ],
		['Empleo Semi-especializado',	(this.respondido(47) == "4") ],
		['Fuerzas Armadas', 			(this.respondido(47) == "5") ],
		['Otro ',     					(this.respondido(47) == "6") ]
	]; 

	//COLUMNCHART
	DS_49 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(49))]
	];

	//DATATABLE 
	DS_50 = [
		//Columnas
		['Calificación del conocimiento adquirido por su hijo/a en su experiencia de trabajo anterior', 'Seleccion'],
		//Filas
		['Ninguna',	(this.respondido(50) == "0") ], 
		['Poco',	(this.respondido(50) == "1") ], 
		['Mucho',   (this.respondido(50) == "2") ]
	];

	//COLUMNCHART
	DS_51 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(51))]
	];
	
	//DATATABLE 
	DS_52 = [
		//Columnas
		['Indique el área que usted entiende necesita mejorar', 'Seleccion'],
		//Filas
		['Cortesía',     				( this.respondido(52.1) == "1" ) ], 
		['Iniciativa',     				( this.respondido(52.2) == "2" ) ], 
		['Puntualidad y Asistencia',	( this.respondido(52.3) == "3" ) ], 
		['Conducta',   					( this.respondido(52.4) == "4" ) ], 
		['Otro',   						( this.respondido(52.5) == "5" ) ], 
	];

	//COLUMNCHART
	DS_54 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(54))]
	];

	//vPie-DS15
	DS_55_59 = [
		//Columnas
		['Dimensión', 'Cantidad'],
		//Filas     
		['Gente-Publico',   	this.sumOfFields(55, 11)], //sum of field for question ID 35
		['Cosas-Manual',   		this.sumOfFields(57, 11)],
		['Datos-Información',	this.sumOfFields(59, 11)]
	]; 

	//COLUMNCHART
	DS_61 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(61))]
	];

//FORMULARIO 3 >>>>>>>>>>>>>>>>>>>>>>>>>

	//COLUMNCHART
	DS_64 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(64))]
	];

	//COLUMNCHART
	DS_65 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(65))]
	];

	//DATATABLE  
	DS_67 = [
		//Columnas
		['¿Cuál es la mejor manera para estudiar en tus clases? ', 'Lectura'],
		//Filas
		['Organizando su horario de estudio', 							(this.respondido(67) == 1)],
		['Repasando con frecuencia los contenidos que va aprendiendo',	(this.respondido(67) == 2)],
		['Estudiando antes de las clases', 								(this.respondido(67) == 3)],
		['Todas las anteriores', 											(this.respondido(67) == 4)]
	]; 

	//COLUMNCHART
	DS_68 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(68))]
	];
	
	//COLUMNCHART
	DS_85 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(85))]
	];
	
	//DATATABLE  
	DS_70_75 = [
		//Columnas
		['Interes General y/o Actividad', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Sabe ir al correo, banco, hospital, entre otros',  		parseInt( this.respondido(70) ) ],
		['Participa en organizaciones o actividades en la escuela', parseInt( this.respondido(71) ) ],
		['Participa de otras actividades en la comunidad',  		parseInt( this.respondido(72) ) ],
		['Tiene licencia de conducir',  							parseInt( this.respondido(73) ) ],
		['Necesita ayuda para aprobar el examen de conducir',  		parseInt( this.respondido(74) ) ],
		['Tiene conocimiento que a los 18 años de edad se puede registrar para votar en las elecciones',  parseInt( this.respondido(75) ) ],
	]; 
	
	//DATATABLE  
	DS_77 = [
		//Columnas
		['Actividades de estudio y/o trabajo que planea llevar a cabo', 'Seleccion'],
		//Filas
		['No Aplica', 										(this.respondido(77) == 0)],
		['Trabajar a Tiempo Completo', 						(this.respondido(77) == 1)],
		['Trabajar a Medio Tiempo',   						(this.respondido(77) == 2)],
		['Trabajar a Medio Tiempo y Estudiar medio Tiempo', (this.respondido(77) == 3)],
		['Matricularte en un Instituto Técnico-Vocacional',	(this.respondido(77) == 4)],
		['Matricularte en la Universidad', 					(this.respondido(77) == 5)],
		['Otra', 											(this.respondido(77) == 101)]
	]; 

	//DATATABLE  
	DS_79 = [
		//Columnas
		['Areas que identifica necesita mayor orientación al presente', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Información sobre carreras y áreas profesionales', 				(this.respondido(79) == 1)],
		['Solicitudes de empleo',   										(this.respondido(79) == 1)],
		['Redacción del resume o perfil profesional', 						(this.respondido(79) == 1)],
		['Como conseguir un trabajo', 										(this.respondido(79) == 1)],
		['Informacion para hacer una entrevista exitosa', 					(this.respondido(79) == 1)],
		['Programas para adquirir experiencia de trabajo', 					(this.respondido(79) == 1)],
		['Cómo llenar solicitudes para la universidad/otra institución', 	(this.respondido(79) == 1)],
		['Orientación de otras universidades', 								(this.respondido(79) == 1)],
		['Asistencia Económica', 											(this.respondido(79) == 1)],
		['Rehabilitación Vocacional', 										(this.respondido(79) == 1)],
		['Otras', 															(this.respondido(79) == 101)],
	]; 
	
	//COLUMNCHART
	DS_81 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(81))]
	];
	
	//COLUMNCHART
	DS_82 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(82))]
	];

	//DATATABLE  
	DS_83 = [
		//Columnas
		['Destrezas personales y ocupacionales que piensa necesita mejora', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Mantener un calendario o agenda', 				parseInt( this.respondido(83) ) == 1],
		['Trabajar independientemente', 					parseInt( this.respondido(83) ) == 1],
		['Relacionarse con los demás', 						parseInt( this.respondido(83) ) == 1],
		['Organizar las tareas a realizar',					parseInt( this.respondido(83) ) == 1],
		['Compañerismo', 									parseInt( this.respondido(83) ) == 1],
		['Buen manejo del tiempo con los estudios', 		parseInt( this.respondido(83) ) == 1],
		['Realizar trabajo de forma ordenada y precisa', 	parseInt( this.respondido(83) ) == 1],
		['Puntualidad', 									parseInt( this.respondido(83) ) == 1],
		['Buena asistencia', 								parseInt( this.respondido(83) ) == 1],
		['Seguir instrucciones', 							parseInt( this.respondido(83) ) == 1],
		['Dar el máximo', 									parseInt( this.respondido(83) ) == 1],
		['Terminar una tarea a tiempo', 					parseInt( this.respondido(83) ) == 1],
		['Otras', 											parseInt( this.respondido(83) ) == 101],
	]; 

//FORMULARIO 4 >>>>>>>>>>>>>>>>>>>>>>>>>

	//COLUMNCHART
	DS_88 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(88))]
	];

	//COLUMNCHART
	DS_89 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(89))]
	];

	//COLUMNCHART
	DS_90 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(90))]
	];

//FORMULARIO 5 >>>>>>>>>>>>>>>>>>>>>>>>>

	//COLUMNCHART
	DS_93 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(93))]
	];

	//COLUMNCHART
	DS_94 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(94))]
	];

	//REVISAR (EDWIN): INSERTAR TEXT STRING AQUI DEL FIELD ID 95

	//COLUMNCHART
	DS_96 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(96))]
	];


	//REVISAR (EDWIN): INSERTAR TEXT STRING AQUI DEL FIELD ID 97

	//COLUMNCHART
	DS_98 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(98))]
	];

	//COLUMNCHART
	DS_99 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(99))]
	];

	//COLUMNCHART
	DS_100 = [
		['Sí | No = 0', 'Valor'],
		['Respuesta',  parseInt(this.respondido(100))]
	];

//FORMULARIO 6 >>>>>>>>>>>>>>>>>>>>>>>>>

	//LINEAR GRAPH
	DS_104_108 = [
		//Columnas
		['Parte 1: Información de Oferta de Empleo', 'Respuesta del Estudiante', 'Respuesta Correcta'],
		//Filas
		['Pregunta 1', parseInt(this.respondido(104)), 4],
		['Pregunta 2', parseInt(this.respondido(105)), 2],
		['Pregunta 3', parseInt(this.respondido(106)), 3],
		['Pregunta 4', parseInt(this.respondido(107)), 1],
		['Pregunta 5', parseInt(this.respondido(108)), 1]
	];

	//LINEAR GRAPH
	DS_111_119 = [
		['Parte 2: Manejo de Cuenta de Cheques / Manejo de Dinero', 'Respuesta del Estudiante', 'Respuesta Correcta'],
		['Pregunta 1', parseInt(this.respondido(111)), 4],
		['Pregunta 2', parseInt(this.respondido(112)), 4],
		['Pregunta 3', parseInt(this.respondido(113)), 4],
		['Pregunta 4', parseInt(this.respondido(114)), 2],
		['Pregunta 5', parseInt(this.respondido(115)), 4],
		['Pregunta 6', parseInt(this.respondido(116)), 4],
		['Pregunta 7', parseInt(this.respondido(117)), 4],
		['Pregunta 8', parseInt(this.respondido(118)), 3],
		['Pregunta 9', parseInt(this.respondido(119)), 1]
	];

	
	//LINEAR GRAPH
	DS_122_126 = [
		['Parte 3: Gráficas', 'Respuesta del Estudiante', 'Respuesta Correcta'],
		['Pregunta 1', parseInt(this.respondido(122)), 4],
		['Pregunta 2', parseInt(this.respondido(123)), 4],
		['Pregunta 3', parseInt(this.respondido(124)), 1],
		['Pregunta 4', parseInt(this.respondido(125)), 1],
		['Pregunta 5', parseInt(this.respondido(126)), 1]
	  ];

	//LINEAR GRAPH
	DS_129_136 = [
		['Parte 4: Estimado de Salario por Trabajo', 'Respuesta del Estudiante', 'Respuesta Correcta'],
		['Pregunta 1', parseInt(this.respondido(129)), 4],
		['Pregunta 2', parseInt(this.respondido(130)), 3],
		['Pregunta 3', parseInt(this.respondido(131)), 4],
		['Pregunta 4', parseInt(this.respondido(132)), 4],
		['Pregunta 5', parseInt(this.respondido(133)), 2],
		['Pregunta 6', parseInt(this.respondido(134)), 4],
		['Pregunta 7', parseInt(this.respondido(135)), 4],
		['Pregunta 8', parseInt(this.respondido(136)), 3]
	];

	//LINEAR GRAPH
	 DS_138_143 = [
		['Parte 5: Medidas', 'Respuesta del Estudiante', 'Respuesta Correcta'],
		['Pregunta 1', parseInt(this.respondido(138)), 4],
		['Pregunta 2', parseInt(this.respondido(139)), 4],
		['Pregunta 3', parseInt(this.respondido(140)), 4],
		['Pregunta 4', parseInt(this.respondido(141)), 4],
		['Pregunta 5', parseInt(this.respondido(142)), 4],
		['Pregunta 6', parseInt(this.respondido(143)), 4]
	];

//FORMULARIO 7 >>>>>>>>>>>>>>>>>>>>>>>>>

	//DATATABLE  
	DS_147 = [
		//Columnas
		['Áreas que el/la estudiante y su padre, madre o encargado consideran deben atenderse durante el año escolar (Destrezas Laborales).', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Seguir directrices/instrucciones', 				(this.respondido(147) == 1)],
		['Aceptar críticas',   								(this.respondido(147) == 1)],
		['Prestar atención a detalles', 					(this.respondido(147) == 1)],
		['Completar tareas', 								(this.respondido(147) == 1)],
		['Asistencia y puntualidad', 						(this.respondido(147) == 1)],
		['Destreza con el uso de computadoras', 			(this.respondido(147) == 1)],
		['Usar vestimenta apropiada para ir a un trabajo', 	(this.respondido(147) == 1)],
		['Trabajar a un paso/ritmo satisfactorio', 			(this.respondido(147) == 1)],
		['Producir trabajo de forma satisfactoria', 		(this.respondido(147) == 1)],
		['Respetar la autoridad', 							(this.respondido(147) == 1)],
		['Trabajar independientemente', 					(this.respondido(147) == 1)],
		['Organizar el tiempo y materiales efectivamente',  (this.respondido(147) == 1)],
		['Solicitar ayuda cuando la necesite', 				(this.respondido(147) == 1)],
		['Demostrar destrezas de Razonamiento Crítico', 	(this.respondido(147) == 1)],
		['Explorar Carreras Profesionales/Técnicas', 		(this.respondido(147) == 1)],
		['Adquisición de experiencia laboral', 				(this.respondido(147) == 1)],
		['Gestionar búsqueda de trabajo', 					(this.respondido(147) == 1)],
		['Completar solicitudes de empleo', 				(this.respondido(147) == 1)],
		['Concluir en un empleo apropiadamente', 			(this.respondido(147) == 1)],
		['Otras sugerencias', 								(this.respondido(147) == 101)],
	]; 

	//DATATABLE  
	DS_150 = [
		//Columnas
		['Áreas que el/la estudiante y su padre, madre o encargado consideran deben atenderse durante el año escolar (Destrezas Personales).', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Conocer sus derechos y responsabilidades', 					(this.respondido(150) == 1)],
		['Identifica sus emociones y como desembocarlas adecuadamente', (this.respondido(150) == 1)],
		['Establece sus metas', 										(this.respondido(150) == 1)],
		['Resolver problemas efectivamente', 							(this.respondido(150) == 1)],
		['Manejar el estrés', 											(this.respondido(150) == 1)],
		['Organizar su tiempo personal', 								(this.respondido(150) == 1)],
		['Otras sugerencias', 											(this.respondido(150) == 101)],
	];


	//DATATABLE  
	DS_153 = [
		//Columnas
		['Áreas que el/la estudiante y su padre, madre o encargado consideran deben atenderse durante el año escolar (Destrezas V.I. y del Diario Vivir).', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Rendir o completar la planilla de contribución sobre impuestos (Si aplica)', 	(this.respondido(153) == 1)],
		['Mantener espacios de la casa limpios',   										(this.respondido(153) == 1)],
		['Reconocer roles cívicos y las responsabilidades', 							(this.respondido(153) == 1)],
		['Reconocer las figuras de autoridad, reglas y leyes', 							(this.respondido(153) == 1)],
		['Comprender el proceso de las elecciones y como votar', 						(this.respondido(153) == 1)],
		['Saber los eventos que pasan en la comunidad', 								(this.respondido(153) == 1)],
		['Conocer las opciones de adquirir una vivienda', 								(this.respondido(153) == 1)],
		['Comprar vestimenta/ropa', 													(this.respondido(153) == 1)],
		['Conocer las opciones de transportación disponibles', 							(this.respondido(153) == 1)],
		['Tomar clases de guiar y obtener licencia de conducir', 						(this.respondido(153) == 1)],
		['Saber tomar direcciones para ir a los sitios', 								(this.respondido(153) == 1)],
		['Conocer los primeros auxilios básicos',  										(this.respondido(153) == 1)],
		['Tener buenas destrezas de aseo personal', 									(this.respondido(153) == 1)],
		['Lavar y planchar la ropa', 													(this.respondido(153) == 1)],
		['Hacer compras', 																(this.respondido(153) == 1)],
		['Manejar dinero', 																(this.respondido(153) == 1)],
		['Presupuestar dinero', 														(this.respondido(153) == 1)],
		['Calcular un salario', 														(this.respondido(153) == 1)],
		['Conocimiento de información del banco', 										(this.respondido(153) == 1)],
		['Identificar actividades para recrearse', 										(this.respondido(153) == 1)],
		['Asistir a eventos', 															(this.respondido(153) == 1)],
		['Identificar organizaciones de la comunidad', 									(this.respondido(153) == 1)],
		['Pagar cuentas', 																(this.respondido(153) == 1)],
		['Cocinar', 																	(this.respondido(153) == 1)],
		['Seguir una receta', 															(this.respondido(153) == 1)],
		['Ordenar de un menú', 															(this.respondido(153) == 1)],
		['Llevar una dieta saludable', 													(this.respondido(153) == 1)],
		['Otras sugerencias', 															(this.respondido(153) == 101)],

	]; 

//FORMULARIO 8 >>>>>>>>>>>>>>>>>>>>>>>>>


// >>>>>>>>>>>>>>>>>>>> Drawing Modules (order matters) >>>>>>>>>>>>>>>>>>>>

//F1
	formBreak(".form1", "Auto Perfil Educativo del Estudiante");
	
	siNoColumnChart(DS_22,	"DS_22", ".form1", "Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento");	
	laDataTable(DS_23,		"DS_23", ".form1");
	velocimetros(DS_24_26,	"DS_24_26", ".form1");
	laDataTable(DS2_24_26,	"DS2_24_26", ".form1");
	laDataTable(DS_27,		"DS_27", ".form1");

	formBreak(".form1", "Intereses y Actividades Generales");

	siNoColumnChart(DS_29,	"DS_29", ".form1", "Diversión en Tiempo Libre");
	siNoColumnChart(DS_30,	"DS_30", ".form1", "Tareas y Responsabilidades en el Hogar");
	siNoColumnChart(DS_31,	"DS_31", ".form1", "Aspiración a una Carrera en el Futuro");

	formBreak(".form1", "Intereses y Metas de Estudios Generales");

	laDataTable(DS_41,	"DS_41", ".form1");
	laDataTable(DS_42,	"DS_42", ".form1");
	pieChart(DS_35_39,	"DS_35_39", ".form1", 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas');	

//F2
	formBreak(".form2", "Cuestionario al Padre o Encargado");

	laDataTable(DS_45, 		"DS_45",	".form2");
	laDataTable(DS_47, 		"DS_47", ".form2");
	siNoColumnChart(DS_49,	"DS_49", ".form2", "Conoce si su hijo/a tiene alguna experiencia de trabajo (part time)");
	laDataTable(DS_50, 		"DS_50", ".form2");
	siNoColumnChart(DS_51, 	"DS_51", ".form2", "Opinión sobre si su hijo/a necesita mejorar en sus destrezas sociales para aumentar sus oportunidades de empleo y estudios futuros");
	laDataTable(DS_52, 		"DS_52", ".form2");
	siNoColumnChart(DS_54, 	"DS_54", ".form2", "Ocupaciones en o fuera de la escuela.");
	pieChart(DS_55_59, 		"DS_55_59", ".form2", 'Porciento de Ocupaciones Seleccionadas por el Estudiante Relacionadas a Datos, Gente y Cosas');	
	siNoColumnChart(DS_61, 	"DS_61", ".form2", "¿Tiene usted alguna preocupación en relación al desarrollo académico y ocupacional de su hijo/a?");

//F3
	formBreak(".form3", "Trabajo en la Escuela al Presente y Planes Futuros");
	
	siNoColumnChart(DS_64,	"DS_64", ".form3", "Conoce si su hijo/a tiene alguna experiencia de trabajo (part time)");
	siNoColumnChart(DS_65, 	"DS_65", ".form3", "Al presente necesita ayuda para hacer sus tareas en las clases");
	laDataTable(DS_67, 		"DS_67", ".form3");
	siNoColumnChart(DS_68,  "DS_68", ".form3", "Busca ayuda cuando tiene dificultades en las clases");
	siNoColumnChart(DS_85,  "DS_85", ".form3", "Si está satisfecho/a con los cursos que toma al presente en la escuela");

	formBreak(".form3", "Experiencias del Diario Vivir - Comunitarias");
	
	laDataTableDos(DS_70_75, "DS_70_75", ".form3");
	
	formBreak(".form3", "Planes Después de Terminar la Escuela Superior");
	
	laDataTable(DS_77,		"DS_77", ".form3");
	laDataTable(DS_79,		"DS_79", ".form3");
	siNoColumnChart(DS_81,	"DS_81", ".form3");
	siNoColumnChart(DS_82,	"DS_82", ".form3");
	laDataTable(DS_83,		"DS_83", ".form3");

//F4	
	formBreak(".form4", "Perspectiva | Visión del Padre sobre el Diario Vivir y Actividades Comunitarias del Estudiante");
	
	siNoColumnChart(DS_88,	"DS_88", ".form4", "Opinión si su hijo/a tiene la capacidad para desempeñarse independientemente a través de la vida cuando sea adulto");
	siNoColumnChart(DS_89,	"DS_89", ".form4", "Opinión si su hijo/a participa en actividades, deportes o pasatiempos en su tiempo libre");
	siNoColumnChart(DS_90,	"DS_90", ".form4", "Opinión si su hijo/a tiene la capacidad para contribuir a la sociedad a través de la vida cuando sea adulto");
//F5
	formBreak(".form5", "Informacion");

	siNoColumnChart(DS_93,	"DS_93", ".form5", "Conoce lo que es una discapacidad/impedimento");
	siNoColumnChart(DS_94,	"DS_94", ".form5", "Identifica su discapacidad / impedimento");
	siNoColumnChart(DS_96,	"DS_96", ".form5", "¿Conoce sobre el Plan Educativo Individualizado (PEI) y como le ayuda al presente y para el futuro con sus planes de estudio?");
	siNoColumnChart(DS_98,	"DS_98", ".form5", "Ha asistido a reuniones en la escuela para hablar sobre su PEI con un grupo de maestro/a, trabajador/a social, consejero/a, madre/padre y otros.");
	siNoColumnChart(DS_99,	"DS_99", ".form5", "¿Conoce el significado de auto-abogacía?");
	siNoColumnChart(DS_100,	"DS_100", ".form5", "Conocimiento sobre organizaciones o personas pueden ayudar para aprender sobre defensa de derechos");

//F6
	linearGraph(DS_104_108,	"DS_104_108", ".form6", "Información de Oferta de Empleo");
	linearGraph(DS_111_119,	"DS_111_119", ".form6", "Manejo de Cuenta de Cheques / Manejo de Dinero");
	linearGraph(DS_122_126,	"DS_122_126", ".form6", "Gráficas");
	linearGraph(DS_129_136,	"DS_129_136", ".form6", "Estimado de Salario por Trabajo");
	linearGraph(DS_138_143,	"DS_138_143", ".form6", "Medidas");




}/////////////////////////////////////////////////////////////////////////


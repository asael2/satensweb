reporte.dataTables = function(){
	var DS_22, DS_23, DS_24_26, DS2_24_26, DS_27, DS_29, 
	DS_30, DS_31, DS_41, DS_42, DS_35_39, DS_45, DS_47, 
	DS_49, DS_50, DS_51, DS_52, DS_54, DS_55_59, DS_61, 
	DS_64, DS_65, DS_67, DS_68, DS_85, DS_70_75, DS_77, 
	DS_79, DS_81, DS_82, DS_83, DS_104_108, DS_111_119, 
	DS_122_126, DS_129_136, DS_138_143, DS_147, DS_150, 
	DS_153, DS_158_188, DS_191_219, DS_221_228, DS_230_237, 
	DS_239_245, DS_247_253, DS_255_259 , DS_261_265, DS_267_272, 
	DS_274_279, DS_281_284, DS_286_290, DS_292_297, DS_299_304, 
	DS_306_317, DS_319_331, DS_333_342, DS_344_353, DS_355_365, 
	DS_367_377, DS_379_383, DS_385_389, DS_391_398, DS_400_407,
	DS_411_418, DS_420_423, DS_429_433, DS_429_433, DS_435_440, DS_442_446, 
	DS_451_A, DS_451_B, DS_451_C,
	DS_455,	DS_458_466, DS_468, DS_471_479, DS_481, DS_484_497, DS_499, DS_502_509;


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
		['Considero otra solución cuando la primera idea no parece funcionar',	(this.respondido(27.5) == "true") ],
		['Otros',																(this.respondido(27.6) == "true") ]
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
		['Pregunta 1', parseInt(this.respondido(138)), 1],
		['Pregunta 2', parseInt(this.respondido(139)), 1],
		['Pregunta 3', parseInt(this.respondido(140)), 2],
		['Pregunta 4', parseInt(this.respondido(141)), 2],
		['Pregunta 5', parseInt(this.respondido(142)), 4],
		['Pregunta 6', parseInt(this.respondido(143)), 4]
	];

//FORMULARIO 7 >>>>>>>>>>>>>>>>>>>>>>>>>

	//DATATABLE  
	DS_147 = [
		//Columnas
		['Áreas que el/la estudiante y su padre, madre o encargado consideran deben atenderse durante el año escolar (Destrezas Laborales).', 'Seleccion'],
		//Filas
		['Seguir directrices/instrucciones', 				parseInt( this.respondido(147.1) ) == 1],
		['Aceptar críticas',   								parseInt( this.respondido(147.2) ) == 1],
		['Prestar atención a detalles', 					parseInt( this.respondido(147.3) ) == 1],
		['Completar tareas', 								parseInt( this.respondido(147.4) ) == 1],
		['Asistencia y puntualidad', 						parseInt( this.respondido(147.5) ) == 1],
		['Destreza con el uso de computadoras', 			parseInt( this.respondido(147.6) ) == 1],
		['Usar vestimenta apropiada para ir a un trabajo', 	parseInt( this.respondido(147.7) ) == 1],
		['Trabajar a un paso/ritmo satisfactorio', 			parseInt( this.respondido(147.8) ) == 1],
		['Producir trabajo de forma satisfactoria', 		parseInt( this.respondido(147.9) ) == 1],
		['Respetar la autoridad', 							parseInt( this.respondido(147.10) ) == 1],
		['Trabajar independientemente', 					parseInt( this.respondido(147.11) ) == 1],
		['Organizar el tiempo y materiales efectivamente',  parseInt( this.respondido(147.12) ) == 1],
		['Solicitar ayuda cuando la necesite', 				parseInt( this.respondido(147.13) ) == 1],
		['Demostrar destrezas de Razonamiento Crítico', 	parseInt( this.respondido(147.14) ) == 1],
		['Explorar Carreras Profesionales/Técnicas', 		parseInt( this.respondido(147.15) ) == 1],
		['Adquisición de experiencia laboral', 				parseInt( this.respondido(147.16) ) == 1],
		['Gestionar búsqueda de trabajo', 					parseInt( this.respondido(147.17) ) == 1],
		['Completar solicitudes de empleo', 				parseInt( this.respondido(147.18) ) == 1],
		['Buscar y asistir a entrevistas de empleo', 		parseInt( this.respondido(147.19) ) == 1],
		['Concluir en un empleo apropiadamente', 			parseInt( this.respondido(147.20) ) == 1],
		['Otras sugerencias', 								parseInt( this.respondido(147.21) ) == 101],
	]; 

	//DATATABLE  
	DS_150 = [
		//Columnas
		['Áreas que el/la estudiante y su padre, madre o encargado consideran deben atenderse durante el año escolar (Destrezas Personales).', 'Seleccion'],
		//Filas
		['Conocer sus derechos y responsabilidades', 					parseInt(this.respondido(150) ) == 1],
		['Identifica sus emociones y como desembocarlas adecuadamente', parseInt(this.respondido(150) ) == 1],
		['Establece sus metas', 										parseInt(this.respondido(150) ) == 1],
		['Resolver problemas efectivamente', 							parseInt(this.respondido(150) ) == 1],
		['Manejar el estrés', 											parseInt(this.respondido(150) ) == 1],
		['Organizar su tiempo personal', 								parseInt(this.respondido(150) ) == 1],
		['Otras sugerencias', 											parseInt(this.respondido(150) ) == 101],
	];

	//DATATABLE  
	DS_153 = [
		//Columnas
		['Áreas que el/la estudiante y su padre, madre o encargado consideran deben atenderse durante el año escolar (Destrezas V.I. y del Diario Vivir).', 'Seleccion'],
		//Filas
		['Rendir o completar la planilla de contribución sobre impuestos (Si aplica)', 	parseInt(this.respondido(153) ) == 1],
		['Mantener espacios de la casa limpios',   										parseInt(this.respondido(153) ) == 1],
		['Reconocer roles cívicos y las responsabilidades', 							parseInt(this.respondido(153) ) == 1],
		['Reconocer las figuras de autoridad, reglas y leyes', 							parseInt(this.respondido(153) ) == 1],
		['Comprender el proceso de las elecciones y como votar', 						parseInt(this.respondido(153) ) == 1],
		['Saber los eventos que pasan en la comunidad', 								parseInt(this.respondido(153) ) == 1],
		['Conocer las opciones de adquirir una vivienda', 								parseInt(this.respondido(153) ) == 1],
		['Comprar vestimenta/ropa', 													parseInt(this.respondido(153) ) == 1],
		['Conocer las opciones de transportación disponibles', 							parseInt(this.respondido(153) ) == 1],
		['Tomar clases de guiar y obtener licencia de conducir', 						parseInt(this.respondido(153) ) == 1],
		['Saber tomar direcciones para ir a los sitios', 								parseInt(this.respondido(153) ) == 1],
		['Conocer los primeros auxilios básicos',  										parseInt(this.respondido(153) ) == 1],
		['Tener buenas destrezas de aseo personal', 									parseInt(this.respondido(153) ) == 1],
		['Lavar y planchar la ropa', 													parseInt(this.respondido(153) ) == 1],
		['Hacer compras', 																parseInt(this.respondido(153) ) == 1],
		['Manejar dinero', 																parseInt(this.respondido(153) ) == 1],
		['Presupuestar dinero', 														parseInt(this.respondido(153) ) == 1],
		['Calcular un salario', 														parseInt(this.respondido(153) ) == 1],
		['Conocimiento de información del banco', 										parseInt(this.respondido(153) ) == 1],
		['Identificar actividades para recrearse', 										parseInt(this.respondido(153) ) == 1],
		['Asistir a eventos', 															parseInt(this.respondido(153) ) == 1],
		['Identificar organizaciones de la comunidad', 									parseInt(this.respondido(153) ) == 1],
		['Pagar cuentas', 																parseInt(this.respondido(153) ) == 1],
		['Cocinar', 																	parseInt(this.respondido(153) ) == 1],
		['Seguir una receta', 															parseInt(this.respondido(153) ) == 1],
		['Ordenar de un menú', 															parseInt(this.respondido(153) ) == 1],
		['Llevar una dieta saludable', 													parseInt(this.respondido(153) ) == 1],
		['Otras sugerencias', 															parseInt(this.respondido(153) ) == 101],

	]; 

//FORMULARIO 8 >>>>>>>>>>>>>>>>>>>>>>>>>

	//SECCION 1: DESTREZAS PARA LA VIDA

	

	//DATATABLE  
	DS_158_188 = [
		//Columnas
		['Destrezas para la Vida', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Obtener permiso/licencia para conducir', 				parseInt( this.respondido(158) ) == 1, parseInt( this.respondido(158) ) == 2, parseInt( this.respondido(158) ) == 3, parseInt( this.respondido(158) ) == 4],
		['Tomar clases para conducir',   						parseInt( this.respondido(159) ) == 1, parseInt( this.respondido(159) ) == 2, parseInt( this.respondido(159) ) == 3, parseInt( this.respondido(159) ) == 4],
		['Conocer diferentes opciones para transportarse', 		parseInt( this.respondido(160) ) == 1, parseInt( this.respondido(160) ) == 2, parseInt( this.respondido(160) ) == 3, parseInt( this.respondido(160) ) == 4],
		['Asistir a eventos/actividades', 						parseInt( this.respondido(161) ) == 1, parseInt( this.respondido(161) ) == 2, parseInt( this.respondido(161) ) == 3, parseInt( this.respondido(161) ) == 4],
		['Identificar recursos en la comunidad',				parseInt( this.respondido(162) ) == 1, parseInt( this.respondido(162) ) == 2, parseInt( this.respondido(162) ) == 3, parseInt( this.respondido(162) ) == 4],
		['Identificar actividades de tiempo libre', 			parseInt( this.respondido(163) ) == 1, parseInt( this.respondido(163) ) == 2, parseInt( this.respondido(163) ) == 3, parseInt( this.respondido(163) ) == 4],
		['Mantener el hogar limpio', 							parseInt( this.respondido(164) ) == 1, parseInt( this.respondido(164) ) == 2, parseInt( this.respondido(164) ) == 3, parseInt( this.respondido(164) ) == 4],
		['Conocer opciones de vivienda', 						parseInt( this.respondido(165) ) == 1, parseInt( this.respondido(165) ) == 2, parseInt( this.respondido(165) ) == 3, parseInt( this.respondido(165) ) == 4],
		['Pagar cuentas', 										parseInt( this.respondido(166) ) == 1, parseInt( this.respondido(166) ) == 2, parseInt( this.respondido(166) ) == 3, parseInt( this.respondido(166) ) == 4],
		['Radicar Planillas sobre impuestos', 					parseInt( this.respondido(167) ) == 1, parseInt( this.respondido(167) ) == 2, parseInt( this.respondido(167) ) == 3, parseInt( this.respondido(167) ) == 4],
		['Conocer servicios bancarios', 						parseInt( this.respondido(168) ) == 1, parseInt( this.respondido(168) ) == 2, parseInt( this.respondido(168) ) == 3, parseInt( this.respondido(168) ) == 4],
		['Dar cambio correcto', 								parseInt( this.respondido(169) ) == 1, parseInt( this.respondido(169) ) == 2, parseInt( this.respondido(169) ) == 3, parseInt( this.respondido(169) ) == 4],
		['Manejar dinero en general', 							parseInt( this.respondido(170) ) == 1, parseInt( this.respondido(170) ) == 2, parseInt( this.respondido(170) ) == 3, parseInt( this.respondido(170) ) == 4],
		['Realizar compras por si mismo', 						parseInt( this.respondido(171) ) == 1, parseInt( this.respondido(171) ) == 2, parseInt( this.respondido(171) ) == 3, parseInt( this.respondido(171) ) == 4],
		['Entender las elecciones y como votar (si aplica)', 	parseInt( this.respondido(173) ) == 1, parseInt( this.respondido(173) ) == 2, parseInt( this.respondido(173) ) == 3, parseInt( this.respondido(173) ) == 4],
		['Respetar figuras de autoridad, reglas y leyes', 		parseInt( this.respondido(175) ) == 1, parseInt( this.respondido(175) ) == 2, parseInt( this.respondido(175) ) == 3, parseInt( this.respondido(175) ) == 4],
		['Calcular salario', 									parseInt( this.respondido(176) ) == 1, parseInt( this.respondido(176) ) == 2, parseInt( this.respondido(176) ) == 3, parseInt( this.respondido(176) ) == 4],
		['Reconocer roles y responsabilidades cívicas', 		parseInt( this.respondido(177) ) == 1, parseInt( this.respondido(177) ) == 2, parseInt( this.respondido(177) ) == 3, parseInt( this.respondido(177) ) == 4],
		['Ordenar un menú en un restaurante', 					parseInt( this.respondido(178) ) == 1, parseInt( this.respondido(178) ) == 2, parseInt( this.respondido(178) ) == 3, parseInt( this.respondido(178) ) == 4],
		['Seguir una receta', 									parseInt( this.respondido(179) ) == 1, parseInt( this.respondido(179) ) == 2, parseInt( this.respondido(179) ) == 3, parseInt( this.respondido(179) ) == 4],
		['Cocinar y preparar comida/alimentos', 				parseInt( this.respondido(180) ) == 1, parseInt( this.respondido(180) ) == 2, parseInt( this.respondido(180) ) == 3, parseInt( this.respondido(180) ) == 4],
		['Reconocer y llevar una dieta saludable', 				parseInt( this.respondido(181) ) == 1, parseInt( this.respondido(181) ) == 2, parseInt( this.respondido(181) ) == 3, parseInt( this.respondido(181) ) == 4],
		['Comprar comida/alimentos', 							parseInt( this.respondido(182) ) == 1, parseInt( this.respondido(182) ) == 2, parseInt( this.respondido(182) ) == 3, parseInt( this.respondido(182) ) == 4],
		['Lavar y planchar su propia ropa', 					parseInt( this.respondido(183) ) == 1, parseInt( this.respondido(183) ) == 2, parseInt( this.respondido(183) ) == 3, parseInt( this.respondido(183) ) == 4],
		['Comprar ropa apropiada', 								parseInt( this.respondido(184) ) == 1, parseInt( this.respondido(184) ) == 2, parseInt( this.respondido(184) ) == 3, parseInt( this.respondido(184) ) == 4],
		['Tener conocimiento básico de primeros auxilios', 		parseInt( this.respondido(185) ) == 1, parseInt( this.respondido(185) ) == 2, parseInt( this.respondido(185) ) == 3, parseInt( this.respondido(185) ) == 4],
		['Buenas destrezas de aseo personal', 					parseInt( this.respondido(186) ) == 1, parseInt( this.respondido(186) ) == 2, parseInt( this.respondido(186) ) == 3, parseInt( this.respondido(186) ) == 4],
		['Comprar un carro', 									parseInt( this.respondido(187) ) == 1, parseInt( this.respondido(187) ) == 2, parseInt( this.respondido(187) ) == 3, parseInt( this.respondido(187) ) == 4],
		['Leer e interpretar mapas', 							parseInt( this.respondido(188) ) == 1, parseInt( this.respondido(188) ) == 2, parseInt( this.respondido(188) ) == 3, parseInt( this.respondido(188) ) == 4] 

	]; 

	//DATATABLE  
	DS_191_219 = [
		//Columnas
		['Destrezas para la Vida (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Obtener permiso/licencia para conducir',  			parseInt( this.respondido(191) ) ],
		['Tomar clases para conducir', 							parseInt( this.respondido(192) ) ],
		['Conocer diferentes opciones para transportarse',  	parseInt( this.respondido(193) ) ],
		['Asistir a eventos/actividades',  						parseInt( this.respondido(194) ) ],
		['Identificar recursos en la comunidad',  				parseInt( this.respondido(195) ) ],
		['Identificar actividades de tiempo libre',  			parseInt( this.respondido(196) ) ],
		['Mantener el hogar limpio',  							parseInt( this.respondido(197) ) ],
		['Conocer opciones de vivienda', 						parseInt( this.respondido(198) ) ],
		['Pagar cuentas',  										parseInt( this.respondido(199) ) ],
		['Radicar Planillas sobre impuestos',  					parseInt( this.respondido(200) ) ],
		['Conocer servicios bancarios',  						parseInt( this.respondido(201) ) ],
		['Dar cambio correcto',  								parseInt( this.respondido(202) ) ],
		['Manejar dinero en general',  							parseInt( this.respondido(203) ) ],
		['Realizar compras por si mismo', 						parseInt( this.respondido(204) ) ],
		['Entender las elecciones y como votar (si aplica)',  	parseInt( this.respondido(205) ) ],
		['Calcular salario',  									parseInt( this.respondido(206) ) ],
		['Respetar figuras de autoridad, reglas y leyes',  		parseInt( this.respondido(207) ) ],
		['Reconocer roles y responsabilidades cívicas',  		parseInt( this.respondido(208) ) ],
		['Ordenar un menú en un restaurante',  					parseInt( this.respondido(209) ) ],
		['Seguir una receta',  									parseInt( this.respondido(210) ) ],
		['Cocinar y preparar comida/alimentos',  				parseInt( this.respondido(211) ) ],
		['Comprar comida/alimentos', 							parseInt( this.respondido(212) ) ],
		['Reconocer y llevar una dieta saludable', 				parseInt( this.respondido(213) ) ],
		['Lavar y planchar su propia ropa',  					parseInt( this.respondido(214) ) ],
		['Comprar ropa apropiada',  							parseInt( this.respondido(215) ) ],
		['Tener conocimiento básico de primeros auxilios',  	parseInt( this.respondido(216) ) ],
		['Buenas destrezas de aseo personal',  					parseInt( this.respondido(217) ) ],
		['Comprar un carro',  									parseInt( this.respondido(218) ) ],
		['Leer e interpretar mapas', 							parseInt( this.respondido(219) ) ]
	]; 

	//SECCION 2: DESTREZAS DE COCINA

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_221_228 = [
		//Columnas
		['Destrezas de Cocina', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Operar enseres eléctricos', 											(this.respondido(221) == 1), (this.respondido(221) == 2), (this.respondido(221) == 3), (this.respondido(221) == 4)],
		['Utilizar utensilios comunes de la cocina',   							(this.respondido(222) == 1), (this.respondido(222) == 2), (this.respondido(222) == 3), (this.respondido(222) == 4)],						
		['Ayudar en la planificación y durante la preparación de alimentos', 	(this.respondido(223) == 1), (this.respondido(223) == 2), (this.respondido(223) == 3), (this.respondido(223) == 4)],						
		['Seguir una receta', 													(this.respondido(224) == 1), (this.respondido(224) == 2), (this.respondido(224) == 3), (this.respondido(225) == 4)],						
		['Recoger los sobrantes de la comida',									(this.respondido(225) == 1), (this.respondido(225) == 2), (this.respondido(225) == 3), (this.respondido(225) == 4)],						
		['Poner la mesa', 														(this.respondido(226) == 1), (this.respondido(226) == 2), (this.respondido(226) == 3), (this.respondido(226) == 4)],						
		['Fregar platos', 														(this.respondido(227) == 1), (this.respondido(227) == 2), (this.respondido(227) == 3), (this.respondido(227) == 4)],
		['Familiarizado con productos enlatados', 								(this.respondido(228) == 1), (this.respondido(228) == 2), (this.respondido(228) == 3), (this.respondido(228) == 4)]	
	]; 

	//DATATABLE  
	DS_230_237 = [
		//Columnas
		['Destrezas de Cocina (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Operar enseres eléctricos',  											parseInt( this.respondido(230) ) ],
		['Utilizar utensilios comunes de la cocina', 							parseInt( this.respondido(231) ) ],
		['Ayudar en la planificación y durante la preparación de alimentos',  	parseInt( this.respondido(232) ) ],
		['Seguir una receta',  													parseInt( this.respondido(233) ) ],
		['Recoger los sobrantes de la comida',  								parseInt( this.respondido(234) ) ],
		['Poner la mesa',  														parseInt( this.respondido(235) ) ],
		['Fregar platos',  														parseInt( this.respondido(236) ) ],
		['Familiarizado con productos enlatados', 								parseInt( this.respondido(237) ) ]
	]; 


	//SECCION 3: DESTREZAS DE LAVANDERIA/LAUNDRY PERSONAL

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_239_245 = [
		//Columnas
		['Destrezas de Lavandería (Laundry) Personal', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Colocar ropa sucia en el canasto/ hamper', 	(this.respondido(239) == 1), (this.respondido(239) == 2), (this.respondido(239) == 3), (this.respondido(239) == 4)],
		['Clasificar la ropa para lavarla',   			(this.respondido(240) == 1), (this.respondido(240) == 2), (this.respondido(240) == 3), (this.respondido(240) == 4)],						
		['Usar lavadora y secadora apropiadamente', 	(this.respondido(241) == 1), (this.respondido(241) == 2), (this.respondido(241) == 3), (this.respondido(241) == 4)],						
		['Planchar', 									(this.respondido(242) == 1), (this.respondido(242) == 2), (this.respondido(242) == 3), (this.respondido(242) == 4)],						
		['Lavar a mano',								(this.respondido(243) == 1), (this.respondido(243) == 2), (this.respondido(243) == 3), (this.respondido(243) == 4)],						
		['Doblar ropa limpia', 							(this.respondido(244) == 1), (this.respondido(244) == 2), (this.respondido(244) == 3), (this.respondido(244) == 4)],						
		['Guardar/organizar la ropa', 					(this.respondido(245) == 1), (this.respondido(245) == 2), (this.respondido(245) == 3), (this.respondido(245) == 4)]	
	]; 

	//DATATABLE  
	DS_247_253 = [
		//Columnas
		['Destrezas de Lavandería (Laundry) Personal (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Colocar ropa sucia en el canasto/ hamper',  					parseInt( this.respondido(247) ) ],
		['Clasificar la ropa para lavarla', 							parseInt( this.respondido(248) ) ],
		['Usar lavadora y secadora apropiadamente',  					parseInt( this.respondido(249) ) ],
		['Planchar',  													parseInt( this.respondido(250) ) ],
		['Lavar a mano',  												parseInt( this.respondido(251) ) ],
		['Doblar ropa limpia',  										parseInt( this.respondido(252) ) ],
		['Guardar/organizar la ropa',  								 	parseInt( this.respondido(253) ) ]
	]; 

	//SECCION 4: DESTREZAS DE CONVEVENCIA FAMILIAR

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_255_259 = [
		//Columnas
		['Destrezas de Convidencia Familiar', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Leer el periódico y discutir las noticias con otros', 	(this.respondido(255) == 1), (this.respondido(255) == 2), (this.respondido(255) == 3), (this.respondido(255) == 4)],
		['Ayudar a cuidar hermanos/familiares',   					(this.respondido(256) == 1), (this.respondido(256) == 2), (this.respondido(256) == 3), (this.respondido(256) == 4)],						
		['Participar en decisiones familiares', 					(this.respondido(257) == 1), (this.respondido(257) == 2), (this.respondido(257) == 3), (this.respondido(257) == 4)],						
		['Planificar actividades para la familia', 					(this.respondido(258) == 1), (this.respondido(258) == 2), (this.respondido(258) == 3), (this.respondido(258) == 4)],						
		['Ayudar a cuidar las mascotas',							(this.respondido(259) == 1), (this.respondido(259) == 2), (this.respondido(259) == 3), (this.respondido(259) == 4)]
		
	]; 

	//DATATABLE  
	DS_261_265 = [
		//Columnas
		['Destrezas de Convivencia Familiar (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Leer el periódico y discutir las noticias con otros',  	parseInt( this.respondido(261) ) ],
		['Ayudar a cuidar hermanos/familiares', 					parseInt( this.respondido(262) ) ],
		['Participar en decisiones familiares',  					parseInt( this.respondido(263) ) ],
		['Planificar actividades para la familia',  				parseInt( this.respondido(264) ) ],
		['Ayudar a cuidar las mascotas',  							parseInt( this.respondido(265) ) ]
	]; 

	//SECCION 5: DESTREZAS DE LIMPIEZA EN EL HOGAR

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_267_272 = [
		//Columnas
		['Destrezas de Limpieza en el Hogar', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Limpiar y recoger el cuarto', 								(this.respondido(267) == 1), (this.respondido(267) == 2), (this.respondido(267) == 3), (this.respondido(267) == 4)],
		['Hacer la cama y cambiarla',   								(this.respondido(268) == 1), (this.respondido(268) == 2), (this.respondido(268) == 3), (this.respondido(268) == 4)],						
		['Escoger decoraciones apropiadas para el cuarto o la casa', 	(this.respondido(269) == 1), (this.respondido(269) == 2), (this.respondido(269) == 3), (this.respondido(269) == 4)],						
		['Arreglos alrededor de la casa ', 								(this.respondido(270) == 1), (this.respondido(270) == 2), (this.respondido(270) == 3), (this.respondido(270) == 4)],						
		['Sacar la basura/desperdicios',								(this.respondido(271) == 1), (this.respondido(271) == 2), (this.respondido(271) == 3), (this.respondido(271) == 4)],						
		['Coser o arreglar ropa', 										(this.respondido(272) == 1), (this.respondido(272) == 2), (this.respondido(272) == 3), (this.respondido(272) == 4)]
	]; 

	//DATATABLE  
	DS_274_279 = [
		//Columnas
		['Destrezas de Limpieza en el Hogar (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Limpiar y recoger el cuarto',  								parseInt( this.respondido(274) ) ],
		['Hacer la cama y cambiarla', 									parseInt( this.respondido(275) ) ],
		['Escoger decoraciones apropiadas para el cuarto o la casa',  	parseInt( this.respondido(276) ) ],
		['Arreglos alrededor de la casa ',  							parseInt( this.respondido(277) ) ],
		['Sacar la basura/desperdicios',  								parseInt( this.respondido(278) ) ],
		['Coser o arreglar ropa',  										parseInt( this.respondido(279) ) ]
	]; 

	//SECCION 6: DESTREZAS DE JARDINERIA/AREA VERDES

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_281_284= [
		//Columnas
		['Destrezas de Jardineria/Áreas verdes', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Sembrar plantas', 										(this.respondido(281) == 1), (this.respondido(281) == 2), (this.respondido(281) == 3), (this.respondido(281) == 4)],
		['Podar y mantener plantas',   								(this.respondido(282) == 1), (this.respondido(282) == 2), (this.respondido(282) == 3), (this.respondido(282) == 4)],						
		['Desyerbar el jardín/patio', 								(this.respondido(283) == 1), (this.respondido(283) == 2), (this.respondido(283) == 3), (this.respondido(283) == 4)],						
		['Usar las herramientas de jardinería apropiadamente', 		(this.respondido(284) == 1), (this.respondido(284) == 2), (this.respondido(284) == 3), (this.respondido(284) == 4)]	
	]; 

	//DATATABLE  
	DS_286_290 = [
		//Columnas
		['Destrezas de Jardineria/Áreas verdes (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Sembrar plantas',  									parseInt( this.respondido(286) ) ],
		['Podar y mantener plantas', 							parseInt( this.respondido(287) ) ],
		['Desyerbar el jardín/patio',  							parseInt( this.respondido(289) ) ],
		['Usar las herramientas de jardinería apropiadamente',  parseInt( this.respondido(290) ) ]
	]; 


	//SECCION 7: DESTREZAS PERSONALES

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_292_297 = [
		//Columnas
		['Destrezas Personales', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Usar teléfono/celular', 				(this.respondido(292) == 1), (this.respondido(292) == 2), (this.respondido(292) == 3), (this.respondido(292) == 4)],
		['Poseer una llave de la casa',   		(this.respondido(293) == 1), (this.respondido(293) == 2), (this.respondido(293) == 3), (this.respondido(293) == 4)],						
		['Presupuestar mesada', 				(this.respondido(294) == 1), (this.respondido(294) == 2), (this.respondido(294) == 3), (this.respondido(294) == 4)],						
		['Ir de compras', 						(this.respondido(295) == 1), (this.respondido(295) == 2), (this.respondido(295) == 3), (this.respondido(295) == 4)],						
		['Buenas destrezas de aseo personal',	(this.respondido(296) == 1), (this.respondido(296) == 2), (this.respondido(296) == 3), (this.respondido(296) == 4)],						
		['Eligir vestimenta apropiada', 		(this.respondido(297) == 1), (this.respondido(297) == 2), (this.respondido(297) == 3), (this.respondido(297) == 4)]
	]; 

	//DATATABLE  
	DS_299_304 = [
		//Columnas
		['Destrezas Personales (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Usar teléfono/celular',  				parseInt( this.respondido(299) ) ],
		['Poseer una llave de la casa', 		parseInt( this.respondido(300) ) ],
		['Presupuestar mesada',  				parseInt( this.respondido(301) ) ],
		['Ir de compras',  						parseInt( this.respondido(302) ) ],
		['Buenas destrezas de aseo personal',  	parseInt( this.respondido(303) ) ],
		['Eligir vestimenta apropiada',  		parseInt( this.respondido(304) ) ]
	]; 

	//SECCION 8: DESTREZAS DE SALUD

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_306_317 = [
		//Columnas
		['Destrezas de Salud', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Comprender los cuidados médicos sencillos', 													(this.respondido(306) == 1), (this.respondido(306) == 2), (this.respondido(306) == 3), (this.respondido(306) == 4)],
		['Estar consciente de su informacion sobre su expediente médico y la informacion de pruebas',   (this.respondido(307) == 1), (this.respondido(307) == 2), (this.respondido(307) == 3), (this.respondido(307) == 4)],						
		['Preparar de antemano preguntas a médicos, enfermera o terapistas', 							(this.respondido(308) == 1), (this.respondido(308) == 2), (this.respondido(308) == 3), (this.respondido(308) == 4)],						
		['Conocer los nombres y usos de medicamentos', 													(this.respondido(309) == 1), (this.respondido(309) == 2), (this.respondido(309) == 3), (this.respondido(309) == 4)],						
		['Llevar y recoger una receta en la farmacia',													(this.respondido(310) == 1), (this.respondido(310) == 2), (this.respondido(310) == 3), (this.respondido(310) == 4)],						
		['Mantener un calendario con citas médicas', 													(this.respondido(311) == 1), (this.respondido(311) == 2), (this.respondido(311) == 3), (this.respondido(311) == 4)],						
		['Conocer su fecha de nacimiento, altura y peso', 												(this.respondido(312) == 1), (this.respondido(312) == 2), (this.respondido(312) == 3), (this.respondido(312) == 4)],
		['Interpretar la lectura de un termómetro', 													(this.respondido(313) == 1), (this.respondido(313) == 2), (this.respondido(313) == 3), (this.respondido(313) == 4)],
		['Conocer números de emergencias médicas', 														(this.respondido(314) == 1), (this.respondido(314) == 2), (this.respondido(314) == 3), (this.respondido(314) == 4)],
		['Conocer sobre sexualidad y métodos anticonceptivos', 											(this.respondido(315) == 1), (this.respondido(315) == 2), (this.respondido(315) == 3), (this.respondido(315) == 4)],
		['Conversar sobre el abuso de drogas y alcohol con la familia', 								(this.respondido(316) == 1), (this.respondido(316) == 2), (this.respondido(316) == 3), (this.respondido(316) == 4)],
		['Establecer contacto con organizaciones de apoyo en la comunidad', 							(this.respondido(317) == 1), (this.respondido(317) == 2), (this.respondido(317) == 3), (this.respondido(317) == 4)]
	]; 

	//DATATABLE  
	DS_319_331 = [
		//Columnas
		['Destrezas de Salud (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Comprender los cuidados médicos sencillos',  													parseInt( this.respondido(319) ) ],
		['Estar consciente de su informacion sobre su expediente médico y la informacion de pruebas', 	parseInt( this.respondido(320) ) ],
		['Preparar de antemano preguntas a médicos, enfermera o terapistas',  							parseInt( this.respondido(321) ) ],
		['Conocer los nombres y usos de medicamentos',  												parseInt( this.respondido(322) ) ],
		['Llevar y recoger una receta en la farmacia',  												parseInt( this.respondido(323) ) ],
		['Mantener un calendario con citas médicas',  													parseInt( this.respondido(324) ) ],
		['Conocer su fecha de nacimiento, altura y peso',  												parseInt( this.respondido(325) ) ],
		['Interpretar la lectura de un termómetro', 													parseInt( this.respondido(326) ) ],
		['Conocer números de emergencias médicas',  													parseInt( this.respondido(327) ) ],
		['Conocer sobre sexualidad y métodos anticonceptivos',  										parseInt( this.respondido(329) ) ],
		['Conversar sobre el abuso de drogas y alcohol con la familia',  								parseInt( this.respondido(330) ) ],
		['Establecer contacto con organizaciones de apoyo en la comunidad',  							parseInt( this.respondido(331) ) ]
	]; 


	//SECCION 9: DESTREZAS DE COMUNIDAD

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_333_342 = [
		//Columnas
		['Destrezas de Comunidad', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Transportarse alrededor del pueblo', 											(this.respondido(333) == 1), (this.respondido(333) == 2), (this.respondido(333) == 3), (this.respondido(333) == 4)],
		['Conocer el sistema de transportación pública',   								(this.respondido(334) == 1), (this.respondido(334) == 2), (this.respondido(334) == 3), (this.respondido(334) == 4)],						
		['Localizar servicios sanitarios en lugares no familiares', 					(this.respondido(335) == 1), (this.respondido(335) == 2), (this.respondido(335) == 3), (this.respondido(335) == 4)],						
		['Conocer sobre los servicios y tiendas disponibles en la comunidad/pueblo',	(this.respondido(336) == 1), (this.respondido(336) == 2), (this.respondido(336) == 3), (this.respondido(336) == 4)],						
		['Utilizar teléfonos públicos',													(this.respondido(337) == 1), (this.respondido(337) == 2), (this.respondido(337) == 3), (this.respondido(337) == 4)],						
		['Abrir y manejar una cuenta de banco', 										(this.respondido(338) == 1), (this.respondido(338) == 2), (this.respondido(338) == 3), (this.respondido(338) == 4)],						
		['Conseguir una identificación con foto', 										(this.respondido(339) == 1), (this.respondido(339) == 2), (this.respondido(339) == 3), (this.respondido(339) == 4)],
		['Conocer y utilizar el sistema de correo', 									(this.respondido(340) == 1), (this.respondido(340) == 2), (this.respondido(340) == 3), (this.respondido(340) == 4)],
		['Ofrecer servicios voluntarios a la comunidad', 								(this.respondido(341) == 1), (this.respondido(341) == 2), (this.respondido(341) == 3), (this.respondido(341) == 4)],
		['Solicitar la tarjeta de seguro social', 										(this.respondido(342) == 1), (this.respondido(342) == 2), (this.respondido(342) == 3), (this.respondido(342) == 4)]
	]; 

	//DATATABLE  
	DS_344_353 = [
		//Columnas
		['Destrezas de Comunidad (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Transportarse alrededor del pueblo',  										parseInt( this.respondido(344) ) ],
		['Conocer el sistema de transportación pública', 								parseInt( this.respondido(345) ) ],
		['Localizar servicios sanitarios en lugares no familiares',  					parseInt( this.respondido(346) ) ],
		['Conocer sobre los servicios y tiendas disponibles en la comunidad/pueblo',	parseInt( this.respondido(347) ) ],
		['Utilizar teléfonos públicos',  												parseInt( this.respondido(348) ) ],
		['Abrir y manejar una cuenta de banco',  										parseInt( this.respondido(349) ) ],
		['Conseguir una identificación con foto',  										parseInt( this.respondido(350) ) ],
		['Conocer y utilizar el sistema de correo', 									parseInt( this.respondido(351) ) ],
		['Ofrecer servicios voluntarios a la comunidad',  								parseInt( this.respondido(352) ) ],
		['Solicitar la tarjeta de seguro social',  										parseInt( this.respondido(353) ) ]
	]; 

	//SECCION 10: DESTREZAS DE TIEMPO LIBRE

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_355_365 = [
		//Columnas
		['Destrezas de Tiempo Libre', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Ayudar a planificar una fiesta', 								(this.respondido(355) == 1), (this.respondido(355) == 2), (this.respondido(355) == 3), (this.respondido(355) == 4)],
		['Invitar familiares/amigos al hogar',   						(this.respondido(356) == 1), (this.respondido(356) == 2), (this.respondido(356) == 3), (this.respondido(356) == 4)],						
		['Subscribirse a revistas de interés', 							(this.respondido(357) == 1), (this.respondido(357) == 2), (this.respondido(357) == 3), (this.respondido(357) == 4)],						
		['Leer un libro', 												(this.respondido(358) == 1), (this.respondido(358) == 2), (this.respondido(358) == 3), (this.respondido(358) == 4)],						
		['Planificar un itinerario para ver programas de televisión',	(this.respondido(359) == 1), (this.respondido(359) == 2), (this.respondido(359) == 3), (this.respondido(359) == 4)],						
		['Salir a pasear', 												(this.respondido(360) == 1), (this.respondido(360) == 2), (this.respondido(360) == 3), (this.respondido(360) == 4)],						
		['Pertenece a un club u organización', 							(this.respondido(361) == 1), (this.respondido(361) == 2), (this.respondido(361) == 3), (this.respondido(361) == 4)],
		['Asistir a campamento de verano', 								(this.respondido(362) == 1), (this.respondido(362) == 2), (this.respondido(362) == 3), (this.respondido(362) == 4)],
		['Participar de actividades escolares o estudiantiles', 		(this.respondido(363) == 1), (this.respondido(363) == 2), (this.respondido(363) == 3), (this.respondido(363) == 4)],
		['Asistir a la Iglesia', 										(this.respondido(364) == 1), (this.respondido(364) == 2), (this.respondido(364) == 3), (this.respondido(364) == 4)],
		['Participar o practicar un deporte', 							(this.respondido(365) == 1), (this.respondido(365) == 2), (this.respondido(365) == 3), (this.respondido(365) == 4)]
	]; 

	//DATATABLE  
	DS_367_377 = [
		//Columnas
		['Destrezas de Tiempo Libre (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Ayudar a planificar una fiesta',  							parseInt( this.respondido(367) ) ],
		['Invitar familiares/amigos al hogar', 							parseInt( this.respondido(368) ) ],
		['Subscribirse a revistas de interés',  						parseInt( this.respondido(369) ) ],
		['Leer un libro',  												parseInt( this.respondido(370) ) ],
		['Planificar un itinerario para ver programas de televisión',	parseInt( this.respondido(371) ) ],
		['Salir a pasear',  											parseInt( this.respondido(372) ) ],
		['Pertenece a un club u organización',  						parseInt( this.respondido(373) ) ],
		['Asistir a campamento de verano', 								parseInt( this.respondido(374) ) ],
		['Participar de actividades escolares o estudiantiles',  		parseInt( this.respondido(375) ) ],
		['Asistir a la Iglesia',  										parseInt( this.respondido(376) ) ],
		['Participar o practicar un deporte',  							parseInt( this.respondido(377) ) ]
	]; 


	//SECCION 11: DESTREZAS DE BUSCAR OPCIONES DE PLANES OCUPACIONALES FUTUROS

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_379_383= [
		//Columnas
		['Destrezas para Buscar Opciones de Planes Ocupacionales Futuros', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Reunirse con el Consejero Escolar, Consejero en Rehabilitación Vocacional, otro.',	(this.respondido(379) == 1), (this.respondido(379) == 2), (this.respondido(379) == 3), (this.respondido(379) == 4)],
		['Considerar y auscultar opciones de programas de estudios',   							(this.respondido(380) == 1), (this.respondido(380) == 2), (this.respondido(380) == 3), (this.respondido(380) == 4)],						
		['Buscar talleres de capacitación y oportunidades de empleo', 							(this.respondido(381) == 1), (this.respondido(381) == 2), (this.respondido(381) == 3), (this.respondido(381) == 4)],						
		['Obtener información de instituciones de educación postsecundaria', 					(this.respondido(382) == 1), (this.respondido(382) == 2), (this.respondido(382) == 3), (this.respondido(382) == 4)],
		['Aprender a solicitar para un trabajo', 												(this.respondido(383) == 1), (this.respondido(383) == 2), (this.respondido(383) == 3), (this.respondido(383) == 4)]	
	]; 

	//DATATABLE  
	DS_385_389 = [
		//Columnas
		['Destrezas para Buscar Opciones de Planes Ocupacionales Futuros (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Reunirse con el Consejero Escolar, Consejero en Rehabilitación Vocacional, otro.',  	parseInt( this.respondido(385) ) ],
		['Considerar y auscultar opciones de programas de estudios', 							parseInt( this.respondido(386) ) ],
		['Buscar talleres de capacitación y oportunidades de empleo',  							parseInt( this.respondido(387) ) ],
		['Obtener información de instituciones de educación postsecundaria',					parseInt( this.respondido(388) ) ],
		['Aprender a solicitar para un trabajo',  												parseInt( this.respondido(389) ) ]
	]; 


	//SECCION 12: DESTREZAS DE CONOCER Y VER OPCIONES DE VIVIENDA

	//PIECHART
	//OJO: CONSULTAR COMO CONSTRUIMOS ESTO (EDWIN)
		
	//DATATABLE  
	DS_391_398 = [
		//Columnas
		['Destrezas de Conocer y Ver Opciones de Vivienda', 'No Aplica', 'No Domina', 'En Proceso', 'Domina'],
		//Filas
		['Estar consciente de las leyes de vivienda para personas con impedimentos',	(this.respondido(391) == 1), (this.respondido(391) == 2), (this.respondido(391) == 3), (this.respondido(391) == 4)],
		['Explorar complejos de vivienda asistida u hogares',   						(this.respondido(392) == 1), (this.respondido(392) == 2), (this.respondido(392) == 3), (this.respondido(392) == 4)],						
		['Orientarse sobre programas de ayuda financiera para vivienda', 				(this.respondido(393) == 1), (this.respondido(393) == 2), (this.respondido(393) == 3), (this.respondido(393) == 4)],						
		['Aprender a manejar dinero y presupuesto para gastos de vivienda', 			(this.respondido(394) == 1), (this.respondido(394) == 2), (this.respondido(394) == 3), (this.respondido(394) == 4)],						
		['Conocer las responsabilidades de un inquilino y del arrendador',				(this.respondido(395) == 1), (this.respondido(395) == 2), (this.respondido(395) == 3), (this.respondido(395) == 4)],						
		['Verificar los accesos para sillas de rueda de ser necesario', 				(this.respondido(396) == 1), (this.respondido(396) == 2), (this.respondido(396) == 3), (this.respondido(396) == 4)],						
		['Verificar los métodos de transportación disponibles', 						(this.respondido(397) == 1), (this.respondido(397) == 2), (this.respondido(397) == 3), (this.respondido(397) == 4)],
		['Conocer sobre los servicios de; electricidad, agua y teléfono', 				(this.respondido(398) == 1), (this.respondido(398) == 2), (this.respondido(398) == 3), (this.respondido(398) == 4)]
	]; 

	//DATATABLE  
	DS_400_407 = [
		//Columnas
		['Destrezas de Conocer y Ver Opciones de Vivienda (Se Evidencia)', 'Respuestas | S&iacute; = Azul No = Rojo'],
		//Filas
		['Estar consciente de las leyes de vivienda para personas con impedimentos',	parseInt( this.respondido(400) ) ],
		['Explorar complejos de vivienda asistida u hogares', 							parseInt( this.respondido(401) ) ],
		['Orientarse sobre programas de ayuda financiera para vivienda',  				parseInt( this.respondido(402) ) ],
		['Aprender a manejar dinero y presupuesto para gastos de vivienda',  			parseInt( this.respondido(403) ) ],
		['Conocer las responsabilidades de un inquilino y del arrendador',				parseInt( this.respondido(404) ) ],
		['Verificar los accesos para sillas de rueda de ser necesario',  				parseInt( this.respondido(405) ) ],
		['Verificar los métodos de transportación disponibles',  						parseInt( this.respondido(406) ) ],
		['Conocer sobre los servicios de; electricidad, agua y teléfono', 				parseInt( this.respondido(407) ) ]	
	]; 

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
	printParagraph(".form5", this.respondido(95));
	siNoColumnChart(DS_96,	"DS_96", ".form5", "¿Conoce sobre el Plan Educativo Individualizado (PEI) y como le ayuda al presente y para el futuro con sus planes de estudio?");
	printParagraph(".form5", this.respondido(97));
	siNoColumnChart(DS_98,	"DS_98", ".form5", "Ha asistido a reuniones en la escuela para hablar sobre su PEI con un grupo de maestro/a, trabajador/a social, consejero/a, madre/padre y otros.");
	siNoColumnChart(DS_99,	"DS_99", ".form5", "¿Conoce el significado de auto-abogacía?");
	siNoColumnChart(DS_100,	"DS_100", ".form5", "Conocimiento sobre organizaciones o personas pueden ayudar para aprender sobre defensa de derechos");

//F6
	formBreak(".form6", "Parte I: Información de Oferta de Empleo");
	linearGraph(DS_104_108,	"DS_104_108", ".form6", "Información de Oferta de Empleo");
	
	formBreak(".form6", "Parte II: Manejo de Cuenta de Cheques / Manejo de Dinero");
	linearGraph(DS_111_119,	"DS_111_119", ".form6", "Manejo de Cuenta de Cheques / Manejo de Dinero");
	
	formBreak(".form6", "Parte III: Gráficas");
	linearGraph(DS_122_126,	"DS_122_126", ".form6", "Gráficas");
	
	formBreak(".form6", "Parte IV: Estimado de Salario por Trabajo");
	linearGraph(DS_129_136,	"DS_129_136", ".form6", "Estimado de Salario por Trabajo");
	
	formBreak(".form6", "Parte V: Medidas");
	linearGraph(DS_138_143,	"DS_138_143", ".form6", "Medidas");

//F7
	formBreak(".form7", "Destrezas Laborales Identificadas");
	laDataTable(DS_147, "DS_147", ".form7");

	formBreak(".form7", "Destrezas Personales Identificadas");
	laDataTable(DS_150, "DS_150", ".form7");

	formBreak(".form7", "Destrezas del Diario Vivir Identificadas");
	laDataTable(DS_153, "DS_153", ".form7");

//F8
	formBreak(".form8", "Destrezas para la Vida");
	//piechart
	laDataTable(DS_158_188, "DS_158_188", ".form8");
	laDataTableDos(DS_191_219, "DS_191_219", ".form8");

	formBreak(".form8", "Destrezas de cocina");
	//piechart
	laDataTable(DS_221_228, "DS_221_228", ".form8");
	laDataTableDos(DS_230_237, "DS_230_237", ".form8");

	formBreak(".form8", "Destrezas de lavandería/”laundry” personal");
	//piechart
	laDataTable(DS_239_245, "DS_239_245", ".form8");
	laDataTableDos(DS_247_253, "DS_247_253", ".form8");

	formBreak(".form8", "Destrezas de convivencia familiar");
	//piechart
	laDataTable(DS_255_259, "DS_255_259", ".form8");
	laDataTableDos(DS_261_265, "DS_261_265", ".form8");

	formBreak(".form8", "Destrezas de limpieza en el hogar");
	//piechart
	laDataTable(DS_267_272, "DS_267_272", ".form8");
	laDataTableDos(DS_274_279, "DS_274_279", ".form8");

	formBreak(".form8", "Destrezas de jardineria/limpieza áreas verdes");
	//piechart
	laDataTable(DS_281_284, "DS_281_284", ".form8");
	laDataTableDos(DS_286_290, "DS_286_290", ".form8");

	formBreak(".form8", "Destrezas Personales");
	//piechart
	laDataTable(DS_292_297, "DS_292_297", ".form8");
	laDataTableDos(DS_299_304, "DS_299_304", ".form8");

	formBreak(".form8", "Destrezas de salud");
	//piechart
	laDataTableD(DS_306_317, "DS_306_317", ".form8");
	laDataTableDos(DS_319_331, "DS_319_331", ".form8");
/*


	formBreak(".form8", "Destrezas de comunidad");
	//piechart
	laDataTable(DS_299_304, "DS_158_188", ".form8");

	formBreak(".form8", "Actividades o intereses en el tiempo libre");
	//piechart
	laDataTable(DS_306_317, "DS_158_188", ".form8");

	formBreak(".form8", "Destrezas para planes ocupacionales futuros");
	//piechart
	laDataTable(DS_333_342, "DS_158_188", ".form8");
	laDataTableDos(DS_344_353 "DS_221_228", ".form8");

	formBreak(".form8", "Destrezas de vivienda");
	//piechart
	laDataTable(DS_367_377, "DS_158_188", ".form8");
	laDataTableDos(DS_379_383, "DS_221_228", ".form8");

*/

}/////////////////////////////////////////////////////////////////////////


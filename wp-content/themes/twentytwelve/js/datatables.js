//reporte.dataTables = {
 var dataTables = [

//FORMULARIO 1 >>>>>>>>>>>>>>>>>>>>>>>>>
	//Form Beak<<< Auto Perfil Educativo del Estudiante

	//CHART
	//siNoColumnChart("Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento", this.respondido(22), "vSiNo-0")
	DSet0 : "Recibe servicios en la escuela por algunas dificultades académicas, problemas de salud o impedimento",

	//DATATABLE      
	DSet1 : [
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
	]
]
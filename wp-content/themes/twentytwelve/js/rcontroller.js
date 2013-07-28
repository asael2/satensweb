reporte.rController = function(){
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


}/////////////////////////////////////////////////////////////////////////


<?
$server = "mysql1127.ixwebhosting.com";
$user = "A891481_DBSATENS";
$password = "PawTiger1";
$db = "A891481_SATENSDB";



	/* require the user as the parameter */
	if(isset($_GET['leadid']) && intval($_GET['leadid'])) {

		/* soak in the passed variable or set our own */
		//$number_of_posts = isset($_GET['num']) ? intval($_GET['num']) : 10; //10 is the default
		$format = strtolower($_GET['format']) == 'json' ? 'json' : 'xml'; //xml is the default
		$user_id = intval($_GET['leadid']); //no default

		/* connect to the db */ 
		$link = mysql_connect($server,$user,$password) or die('Cannot connect to the DB');
		mysql_select_db($db,$link) or die('Cannot select the DB');

		/* grab the posts from the db */
		$segmenta = 10;
		$segmentb = 15;
		//$query = "SELECT * FROM A891481_SATENSDB.wp_rg_lead_detail WHERE lead_id=$user_id ORDER BY field_number ASC LIMIT 10000";
		$query = "SELECT field_number, value FROM A891481_SATENSDB.wp_rg_lead_detail WHERE lead_id = $user_id ORDER BY field_number ASC LIMIT 1000";
		$result = mysql_query($query,$link) or die('Errant query:  '.$query);
		
		/* create one master array of the records */
		$posts = array();
		if(mysql_num_rows($result)) {
			while($post = mysql_fetch_assoc($result)) { 
				//$posts[] = array('pregunta'=>$post);
				$posts[] = $post;
			}
		}
		/* output */
		header('Content-type: application/json');
		
		echo json_encode(array('r'=> $posts));
		//echo json_encode(array($posts));

		/* disconnect from the db */
		@mysql_close($link);
	}




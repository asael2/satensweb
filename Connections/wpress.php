<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_wpress = "localhost";
$database_wpress = "satens";
$username_wpress = "root";
$password_wpress = "";
$wpress = mysql_pconnect($hostname_wpress, $username_wpress, $password_wpress) or trigger_error(mysql_error(),E_USER_ERROR); 
?>
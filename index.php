<?if ($_POST['type'] = 'pochtaRezident1') {
	$msg = "name: ".$_POST['usernameRezident'].'. email:'.$_POST['emailRezident'];
	mail("kiril.chernysh@gmail.com","My subject",$msg);
}?>

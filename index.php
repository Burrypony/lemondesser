<?
if ($_POST['type'] = 'pochtaRezident1') {
	$to = "kiril.chernysh@gmail.com";
	$subject = "Registration";
	$msg = "name: ".$_POST['name'].'.\n email:'.$_POST['email'];
	$headers  = "From: testsite < mail@testsite.com >";   //не трогаем
	mail($to,$subject,$txt,$headers);//не трогаем
}
?>

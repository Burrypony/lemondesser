<?
if ($_POST['type'] == 'pochtaEmployer1') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Employer";
	$msg = "name: ".$_POST['nameEmployer']."\r\n email:".$_POST['emailEmployer']."\r\n number:".$_POST['telEmployer']."\r\n web-site:".$_POST['webSiteEmployer']."\r\n dopInfo:".$_POST['dopInfoEmployer'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaInvestor1') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Investor";
	$msg = "name: ".$_POST['nameInvestor']
	 ."\r\n email:".$_POST['emailInvestor']
	 ."\r\n number:".$_POST['telInvestor']
	 ."\r\n project:".$_POST['projectInvestor']
	 	 ."\r\n dopInfo:".$_POST['dopInfoinvestor'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaStartaper1') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Startaper";
	$msg = "name: ".$_POST['nameStartaper']
	 ."\r\n email:".$_POST['emailStartaper']
	 ."\r\n number:".$_POST['telStartaper']
	 ."\r\n project:".$_POST['projectStartaper']
	 ."\r\n dopInfo:".$_POST['dopIfnoStartaper'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaExpert1') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Expert";
	$msg = "name: ".$_POST['nameExpert']
	 ."\r\n email:".$_POST['emailExpert']
	 ."\r\n number:".$_POST['telExpert']
	 ."\r\n specailis:".$_POST['specailisExpert']
	 ."\r\n dopInfo:".$_POST['dopInfoExpert'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaExpert2') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Expert2";
	$msg = "name: ".$_POST['nameExpert2']
	 ."\r\n email:".$_POST['emailExpert2']
	 ."\r\n number:".$_POST['telExpert2']
	 ."\r\n specailis:".$_POST['specailisExpert2']
	 ."\r\n dopInfo:".$_POST['dopInfoExpert2'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaEd2') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Ed2";
	$msg = "name: ".$_POST['nameEd2']
	 ."\r\n email:".$_POST['emailEd2']
	 ."\r\n number:".$_POST['telEd2']
	 ."\r\n project:".$_POST['projectEd2']
 	 ."\r\n dopInfo:".$_POST['dopInfoEd2'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] =='pochtaEmployer2') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Employer2";
	$msg = "name: ".$_POST['nameEmployer2']
	 ."\r\n email:".$_POST['emailEmployer2']
	 ."\r\n number:".$_POST['telEmployer2']
	 ."\r\n web-site:".$_POST['websiteEmployer2']
	 ."\r\n dopInfo:".$_POST['dopInfoEmployer2'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaInvestor2') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Investor2";
	$msg = "name: ".$_POST['nameInvestor2']
	 ."\r\n email:".$_POST['emailInvestor2']
	 ."\r\n number:".$_POST['telInvestor2']
	 ."\r\n project:".$_POST['projectInvestor2']
	 ."\r\n dopInfo:".$_POST['dopInfoInvestor2'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaInvestorCall') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Investor2 Call";
	$msg = "name: ".$_POST['nameInvestorCall']
	 ."\r\n email:".$_POST['emailInvestorCall']
	 ."\r\n number:".$_POST['telInvestorCall'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaRez2') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Rez2";
	$msg = "name: ".$_POST['nameRez2']
	 ."\r\n email:".$_POST['emailRez2']
	 ."\r\n number:".$_POST['telRez2'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}elseif ($_POST['type'] == 'pochtaStartaper2') {
	$to = "form@24lit-consulting.com";
	$subject = "Registration Startaper2";
	$msg = "name: ".$_POST['nameStartaper2']
	 ."\r\n email:".$_POST['emailStartaper2']
	 ."\r\n number:".$_POST['telStartaper2']
	 ."\r\n project:".$_POST['projectStartaper2']
	 ."\r\n dopInfo:".$_POST['dopIfnoStartaper2'];
	$headers  = "From: 24lit-consulting.com";   //не трогаем
	mail($to,$subject,$msg,$headers);//не трогаем
}

?>

<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['phone']))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = 'info@rjgroup.com.ua';
$phone = $_POST['phone'];

// create email body and send it
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a call-back request from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\n;
mail($email_address,$email_subject,$email_body);
return true;
?>

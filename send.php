
<!-- if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = $_POST["name"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
    
        // Set up the email headers
        $headers = "From: your_email@example.com\r\n";
        $headers .= "Reply-To: your_email@example.com\r\n";
        $headers .= "Content-Type: text/html\r\n";
    
        // Send the email
        if (mail($name, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } -->
<?php
$name = $_POST['name'];
$subject= $_POST['subject'];
$email= $_POST['email'];
$message= $_POST['message'];


$to = "pravinsuwasiya45@gmail.com";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Subject= ".$subject. "\r\n Message =" . $message;s
$headers = "From: ". $email. "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>
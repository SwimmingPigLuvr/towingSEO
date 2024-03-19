<?php
if($_SERVER["REQUEST_METHOD"] == "POST" && empty($_POST['fax'])) {
    // The fax field is empty, so it's not a bot
    $to = 'info@sterlingtowing.com'; // Replace with your email address
    $subject = 'NEW CONTACT';
    $message = "You have a new contact from the website:\n\n";
    $message .= "First Name: " . $_POST['first-name'] . "\n";
    $message .= "Last Name: " . $_POST['last-name'] . "\n";
    $message .= "Business Name: " . $_POST['business'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Phone Number: " . $_POST['phone'] . "\n";
    $message .= "Message: " . $_POST['message'];

    // Headers are required to send the email
    $headers = "From: webmaster@example.com" . "\r\n"; // Replace with an appropriate from address
    $headers .= "Reply-To: " . $_POST['email'];

    mail($to, $subject, $message, $headers);
    // Redirect or display a success message...
} else {
    // The fax field is filled out, it's a bot
    die("Bot detected.");
}

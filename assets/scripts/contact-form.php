<?php
    // Fetching Values from URL.
    $name = $_POST['voornaam1'];
    $lastname = $_POST['achternaam1'];
    $email = $_POST['mail1'];
    $message = $_POST['message1'];
    $tel = $_POST['tel1'];
    
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.

    // After sanitization Validation is performed
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $subject = $name . ' ' . $lastname . ' via ellevate.nl';

        // To send HTML mail, the Content-type header must be set.
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From:' . $email. "\r\n"; // Sender's Email
        $headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
        $template = '<div style="padding:50px; color:white;">'
        . '<b>Voornaam:</b>' . $name . '<br/>'
        . '<b>Achternaam:</b>' . $lastname . '<br/>'
        . '<b>Telefoonnummer:</b>' . $tel . '<br/>'
        . '<b>Email:</b>' . $email . '<br/><br/>'
        . '<b>Message:</b>' . $message . '<br/><br/>'
        . 'Deze email is verzonden via ellevate.nl.'
        . '<br/>';
        $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";

        // Message lines should not exceed 70 characters (PHP rule), so wrap it.
        $sendmessage = wordwrap($sendmessage, 70);

        // Send mail by PHP Mail Function.
        mail("carlijnkuenen@gmail.com", $subject, $sendmessage, $headers);
        echo true;
    } else {
        echo "Onjuist email adres";
    }
?>
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim(htmlspecialchars($_POST["name"]));
    $email = trim(htmlspecialchars($_POST["email"]));
    $message = trim(htmlspecialchars($_POST["message"]));

    $to = "alex.martin@example.com"; // change par ton mail
    $subject = "📩 New message from your portfolio";
    $body = "From: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "<p>✅ Your message has been sent successfully. Thank you!</p>";
    } else {
        echo "<p>❌ Sorry, there was a problem sending your message. Please try again.</p>";
    }
}
?>

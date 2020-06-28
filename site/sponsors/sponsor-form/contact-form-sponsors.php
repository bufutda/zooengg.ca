<?php
  $postData = $uploadedFile = $statusMsg = '';

  if(isset($_POST['submit'])) {
    $emailTo = "ines.rosito@ucalgary.ca";  // Recipient's email (ZOO Execs)
    $emailFrom = $_POST['email'];         // Contactee's email

    // Additional POST data loaded from the HTML form
    $fname = $_POST['firstname']; // Contactee's first name
    $lname = $_POST['lastname'];  // Contactee's last name
    $company = $_POST['company']; // Contactee's company (optional)
    $subject = $_POST['subject']; // Email subject line
    $message = $_POST['message']; // Email content

    // Validation check to ensure fields are filled
    if (!empty($emailFrom) && !empty($fname) && !empty($lname) && !empty($subject) && !empty($message)) {
      // Validate email of applicant
        // Check to ensure the email is in fact a ucalgary email
      if (filter_var($emailFrom, FILTER_VALIDATE_EMAIL) === false) {
        $statusMsg = 'Please enter your valid email.';
        // TODO: Show that the form did not submit
      } else {
        // Header for sender info
        $headers = "From: ".$fname." ".$lname." <".$emailFrom.">";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        // Message
        $htmlContent = '<h2>Hey! Someone just used the form from the website:</h2>
            <p><b>Name:</b> '.$fname.' '.$lname.'</p>
            <p><b>Company:</b> '.$company.'</p>
            <p><b>Message:</b><br/>'.$message.'</p>';

        // Send email
        $mail = mail($emailTo, $subject, $message, $headers);

        header("Location: /sponsors/sponsor-form/index.php?sentemail");
      }
    } else {
      $statusMsg = 'Please fill out form.';
    }
  }
?>

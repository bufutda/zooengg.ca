<?php
  $postData = $uploadedFile = $statusMsg = '';

  if(isset($_POST['submit'])) {
    $emailTo = "ines.rosito@ucalgary.ca";  // Recipient's email (ZOO Execs)
    $emailFrom = $_POST['email'];         // Applicant's email

    // Additional POST data loaded from the HTML form
    $fname = $_POST['firstname']; // Applicant's first name
    $lname = $_POST['lastname'];  // Applicant's last name
    $ucid = $_POST['ucid']; // Applicant's UCID
    $degree = $_POST['degree']; // Applicant's degree path
    $year = $_POST['year']; // Applicant's year of study
    $comment = $_POST['comment'];

    // Validation check to ensure fields are filled
          // Check how to validate the selection of the dropdown menus
    if (!empty($emailFrom) && !empty($fname) && !empty($lname) && !empty($ucid)) {
      // Validate email of applicant
        // Check to ensure the email is in fact a ucalgary email
      if (filter_var($emailFrom, FILTER_VALIDATE_EMAIL) === false) {
        $statusMsg = 'Please enter your valid email.';
        // TODO: Show that the form did not submit
      } else {

          $uploadStatus = 1;

          // Upload attachment file
          if(!empty($_FILES["fileUpload"]["name"])) {
            // File path config
            $targetDir = "/tmp/";
            $fileName = basename($_FILES["fileUpload"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

            // Allow certain file formats
            $allowTypes = 'pdf';
            if( $fileType === $allowTypes ) {
              // Upload file to the server
              print realpath($targetFilePath);

              if (move_uploaded_file($_FILES["fileUpload"]["tmp_name"], $targetFilePath)) {
                  $uploadedFile = $targetFilePath;
              } else {
                  $uploadStatus = 0;
                  $statusMsg = "Sorry, there was an error uploading your file.";
                  // TODO: Show that the form did not submit
              }
            } else {
              $uploadStatus = 0;
              $statusMsg = 'Sorry, only PDF files are allowed to upload.';
              // TODO: Show that the form did not submit
            }
          }

        if($uploadStatus == 1) {

          // Subject
          $emailSubject = 'New Commissioner Application';

          // Message
          $htmlContent = '<h2>New Commissioner Application Submitted</h2>
              <p><b>Name:</b> '.$fname.' '.$lname.'</p>
              <p><b>UCID:</b> '.$ucid.'</p>
              <p><b>Degree and Year:</b> '.$degree.' '.$year.'</p>
              <p><b>Additional Comments:</b><br/>'.$comment.'</p>';

          // Header for sender info
          $headers = "From: ".$fname." ".$lname." <".$emailFrom.">";

          if(!empty($uploadedFile) && file_exists($uploadedFile)) {

            // Boundary
            $semi_rand = md5(time());
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

            // Headers for attachment
            $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";

            // Multipart boundary
            $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
            "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";

            // Preparing attachment
            if(is_file($uploadedFile)) {
              $message .= "--{$mime_boundary}\n";
              $fp =    @fopen($uploadedFile,"rb");
              $data =  @fread($fp,filesize($uploadedFile));
              @fclose($fp);
              $data = chunk_split(base64_encode($data));
              $message .= "Content-Type: application/octet-stream; name=\"".basename($uploadedFile)."\"\n" .
              "Content-Description: ".basename($uploadedFile)."\n" .
              "Content-Disposition: attachment;\n" . " filename=\"".basename($uploadedFile)."\"; size=".filesize($uploadedFile).";\n" .
              "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            }

            $message .= "--{$mime_boundary}--";
            $returnpath = "-f" . $emailFrom;

            // Send email
            $mail = mail($emailTo, $emailSubject, $message, $headers, $returnpath);

            // Delete attachment file from the server
            @unlink($uploadedFile);

            header("Location: /council/applications/index.php?sentemail");
          }
        }
      }
    }
  }
?>

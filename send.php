<?php 

// piotr.piwonski@vp.pl
use PHPMailer\PHPMailer\PHPMailer;


$msg = '';
if (isset($_POST['submit'])) {
  require './PHPMailer/vendor/autoload.php';

  $mail = new PHPMailer;
  $mail->setFrom($_POST['email'], $_POST['username']);
  $mail->addAddress('piotr.piwonski@vp.pl');
  $mail->Body = $_POST['body'];
  $mail->Subject = 'Formularz kontaktowy 4 LITERY';
  $mail->isHTML(false);
  $mail->CharSet = PHPMailer::CHARSET_UTF8;
  $mail->SMTPAuth = true;

  if (array_key_exists('userfile', $_FILES)) {

    for ($ct = 0, $ctMax = count($_FILES['userfile']['tmp_name']); $ct < $ctMax; $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['userfile']['name'][$ct]));
      $filename = $_FILES['userfile']['name'][$ct];
      if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
          if (!$mail->addAttachment($uploadfile, $filename)) {
              $msg .= 'Failed to attach file ' . $filename;
          }
      } else {
          $msg .= 'Failed to move file to ' . $uploadfile;
      }
  }
  if (!$mail->send()) {
      $msg .= 'Mailer Error: '. $mail->ErrorInfo;
  } else {
      $msg .= 'Message sent!';
  }
}
}
?>
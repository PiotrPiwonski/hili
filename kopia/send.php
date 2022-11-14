<?php 

if (isset($_POST['submit'])) {
  require 'phpmailer/PHPMailerAutoload.php';

  $mail = new PHPMailer();
  $mail->setFrom($_POST['email'], $_POST['username']);
  $mail->addAddress('piotr.piwonski@vp.pl');
  $mail->Body = $_POST['body'];
  $mail->Subject = 'Formularz kontaktowy 4 LITERY';
  $mail->isHTML(false);

  if($_FILES['attachment']['name']!='') {

    $totalFiles = count($_FILES['attachment']['tmp_name']);
    echo $totalFiles;
    for($ct=0; $ct < $totalFiles; $ct++) {

      // echo "<pre>";
      // print_r($_FILES);

      $file = "attachment/" . basename($_FILES['attachment']['name'][$ct]);
      move_uploaded_file($_FILES['attachment']['tmp_name'][$ct], $file);
      $mail->addAttachment($file, $_FILES['attachment']['name'][$ct]);
    }
  }
  if ($mail->send()) {
echo "Wysłane";
  }else {
    echo "Nie udało się " . $mail->ErrorInfo;
  }
}

?>
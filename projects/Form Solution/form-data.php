<?php
  $to = 'marvin.obig@gmail.com';
  $subject = 'Form - Solution Data';
  $message = 'Hi Jane, will you marry me?'; 
  $from = 'peterparker@email.com';
   
  // Sending email
  if(mail($to, $subject, $message)){
      echo 'Your mail has been sent successfully.';
  } else{
      echo 'Unable to send email. Please try again.';
  }
?>



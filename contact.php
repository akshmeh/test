<?PHP
######################################################
#                                                    #
#                Forms To Go 4.5.4                   #
#             http://www.bebosoft.com/               #
#                                                    #
######################################################




define('kOptional', true);
define('kMandatory', false);

define('kStringRangeFrom', 1);
define('kStringRangeTo', 2);
define('kStringRangeBetween', 3);
        
define('kYes', 'yes');
define('kNo', 'no');

define('kNumberRangeFrom', 1);
define('kNumberRangeTo', 2);
define('kNumberRangeBetween', 3);




error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('track_errors', true);

function DoStripSlashes($fieldValue)  { 
// temporary fix for PHP6 compatibility - magic quotes deprecated in PHP6
 if ( function_exists( 'get_magic_quotes_gpc' ) && get_magic_quotes_gpc() ) { 
  if (is_array($fieldValue) ) { 
   return array_map('DoStripSlashes', $fieldValue); 
  } else { 
   return trim(stripslashes($fieldValue)); 
  } 
 } else { 
  return $fieldValue; 
 } 
}

function FilterCChars($theString) {
 return preg_replace('/[\x00-\x1F]/', '', $theString);
}
function ProcessPHPFile($PHPFile) {
 
  ob_start();
  
  if (file_exists($PHPFile)) {
   require $PHPFile;
  } else {
   echo '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>Error</title></head><body>Forms To Go - Error: Unable to load HTML form: ' . $PHPFile . '</body></html>';
   exit;
  }
  
  return ob_get_clean();
 }
function CheckString($value, $low, $high, $mode, $limitAlpha, $limitNumbers, $limitEmptySpaces, $limitExtraChars, $optional) {

 $regExp = '';

 if ($limitAlpha == kYes) {
  $regExp = 'A-Za-z';
 }
 
 if ($limitNumbers == kYes) {
  $regExp .= '0-9'; 
 }
 
 if ($limitEmptySpaces == kYes) {
  $regExp .= ' '; 
 }

 if (strlen($limitExtraChars) > 0) {
 
  $search = array('\\', '[', ']', '-', '$', '.', '*', '(', ')', '?', '+', '^', '{', '}', '|', '/');
  $replace = array('\\\\', '\[', '\]', '\-', '\$', '\.', '\*', '\(', '\)', '\?', '\+', '\^', '\{', '\}', '\|', '\/');

  $regExp .= str_replace($search, $replace, $limitExtraChars);

 }

 if ( (strlen($regExp) > 0) && (strlen($value) > 0) ){
  if (preg_match('/[^' . $regExp . ']/', $value)) {
   return false;
  }
 }

 if ( (strlen($value) == 0) && ($optional === kOptional) ) {
  return true;
 } elseif ( (strlen($value) >= $low) && ($mode == kStringRangeFrom) ) {
  return true;
 } elseif ( (strlen($value) <= $high) && ($mode == kStringRangeTo) ) {
  return true;
 } elseif ( (strlen($value) >= $low) && (strlen($value) <= $high) && ($mode == kStringRangeBetween) ) {
  return true;
 } else {
  return false;
 }

}


function CheckNumeric($value, $low, $high, $mode, $optional) {
 if ( (strlen($value) == 0) && ($optional === kOptional) ) {
  return true;
 } elseif (!is_numeric($value)) {
  return false;
 } elseif ( ($value >= $low) && ($mode == kNumberRangeFrom) ) {
  return true;
 } elseif ( ($value <= $high) && ($mode == kNumberRangeTo) ) {
  return true;
 } elseif ( ($value >= $low) && ($value <= $high) && ($mode == kNumberRangeBetween) ) {
  return true;
 } else {
  return false;
 }
}


function CheckEmail($email, $optional) {
 if ( (strlen($email) == 0) && ($optional === kOptional) ) {
  return true;
  } elseif ( preg_match("/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i", $email) == 1 ) {
  return true;
 } else {
  return false;
 }
}




if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
 $clientIP = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
 $clientIP = $_SERVER['REMOTE_ADDR'];
}
// if(empty($_POST['iPhone'])){
//   $_POST['iPhone'] = "none";
// }
// if(empty($_POST['iPad'])){
//   $_POST['iPad'] = "none";
// }
// if(empty($_POST['Ipod'])){
//   $_POST['Ipod'] = "none";
// }
// if(empty($_POST['Macbook'])){
//   $_POST['Macbook'] = "none";
// }

$FTGName = DoStripSlashes( $_POST['Name'] );
$FTGEmail = DoStripSlashes( $_POST['Email'] );
$FTGMobile = DoStripSlashes( $_POST['Mobile'] );
// $FTGdevice = DoStripSlashes( $_POST['device'] );
// $FTGiPhone = DoStripSlashes( $_POST['iPhone'] );
// $FTGiPad = DoStripSlashes( $_POST['iPad'] );
// $FTGIpod = DoStripSlashes( $_POST['Ipod'] );
// $FTGMacbook = DoStripSlashes( $_POST['Macbook'] );
// $FTGIssue = DoStripSlashes( $_POST['Issue'] );
$FTGcomment = DoStripSlashes( $_POST['comment'] );



$validationFailed = false;

# Fields Validations



if(empty($FTGErrorMessage['Email'])){
  $FTGErrorMessage['Email'] = "";
}
if(empty($FTGErrorMessage['Mobile'])){
  $FTGErrorMessage['Mobile'] = "";
}
if (!CheckEmail($FTGEmail, kMandatory)) {
 $FTGErrorMessage['Email'] = 'Please enter valid email address';
 $validationFailed = true;
}

if (strlen($FTGMobile) !== 10) {
 $FTGErrorMessage['Mobile'] = 'Please enter your 10 digit phone number';
 $validationFailed = true;
}



# Include message in error page and dump it to the browser

if ($validationFailed === true) {

    $fileErrorPage = 'error.html';

    if (file_exists($fileErrorPage) === false) {
     echo '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>Error</title></head><body>The error page: <b>' . $fileErrorPage. '</b> cannot be found on the server.</body></html>';
     exit;
    }
    $errorPage = ProcessPHPFile($fileErrorPage);
    
 $errorList = @implode("<br />\n", $FTGErrorMessage);
 $errorPage = str_replace('<!--VALIDATIONERROR-->', $errorList, $errorPage);

 $errorPage = str_replace('<!--FIELDVALUE:Name-->', $FTGName, $errorPage);
 $errorPage = str_replace('<!--FIELDVALUE:Email-->', $FTGEmail, $errorPage);
 $errorPage = str_replace('<!--FIELDVALUE:Mobile-->', $FTGMobile, $errorPage);
//  $errorPage = str_replace('<!--FIELDVALUE:device-->', $FTGdevice, $errorPage);
//  $errorPage = str_replace('<!--FIELDVALUE:iPhone-->', $FTGiPhone, $errorPage);
//  $errorPage = str_replace('<!--FIELDVALUE:iPad-->', $FTGiPad, $errorPage);
//  $errorPage = str_replace('<!--FIELDVALUE:Ipod-->', $FTGIpod, $errorPage);
//  $errorPage = str_replace('<!--FIELDVALUE:Macbook-->', $FTGMacbook, $errorPage);
//  $errorPage = str_replace('<!--FIELDVALUE:Issue-->', $FTGIssue, $errorPage);
 $errorPage = str_replace('<!--FIELDVALUE:comment-->', $FTGcomment, $errorPage);
 $errorPage = str_replace('<!--ERRORMSG:Email-->', $FTGErrorMessage['Email'], $errorPage);
 $errorPage = str_replace('<!--ERRORMSG:Mobile-->', $FTGErrorMessage['Mobile'], $errorPage);





 echo $errorPage;

}

if ( $validationFailed === false ) {

 # Email to Form Owner
  
 $emailSubject = FilterCChars("Google Adwords Enquiry from iexpertindia.com for App");
  
 $emailBody = chunk_split( base64_encode( "<html>\n"
 . "<head>\n"
 . "<title></title>\n"
 . "</head>\n"
 . "<body>\n"
 . "Dear Sir/Madam,<br/><br/>\n"
 . "Congratulations! An enquiry has been submitted from your Google Adwords Campaign on <a href=\"www.iexpertindia.com\" target=\"_blank\">www.iexpertindia.com</a> with the following information:<br/><br/>\n"
 . "\n"
 . "<b>Name/Company Name</b> : $FTGName<br />\n"
 . "<b>Email</b> : $FTGEmail<br />\n"
 . "<b>Mobile</b> : $FTGMobile<br />\n"
//  . "<b>Device</b> : $FTGdevice<br />\n"
//  . "<b>iPhone</b> : $FTGiPhone<br />\n"
//  . "<b>iPad</b> : $FTGiPad<br />\n"
//  . "<b>Ipod</b> : $FTGIpod<br />\n"
//  . "<b>Macbook</b> : $FTGMacbook<br />\n"
//  . "<b>Issue</b> : $FTGIssue<br />\n"
 . "<b>Message</b> : $FTGcomment<br /><br />\n"
 . "\n"
 . "This form is powered by <a href=\"www.ithink.co\" target=\"_blank\">www.ithink.co</a>\n"
 . "\n"
 . "</body>\n"
 . "</html>\n"
 . "" ) )
 . "\n";
  $emailTo = 'Iexpert India <ixpert777@gmail.com>';
  // $emailTo = 'Iexpert India <devteam@ithink.co>';
   
  $emailFrom = FilterCChars("donotreply@iexpertindia.com");
   
  $emailHeader = "From: $emailFrom\n"
  . 'Bcc: Think Technology Services - Marketing <marketing@ithink.co>,Digital Marketing - Think Technology Services <dm@ithink.co>' . "\n"
  #. 'Cc: Think Technology Services - Marketing <siddhi@ithink.co>,Adhir Varma - Think Technology Services <adhir@ithink.co>' . "\n"
   . "MIME-Version: 1.0\n"
   . "Content-Type: text/html; charset=\"UTF-8\"\n"
   . "Content-Transfer-Encoding: base64\n"
   . "\n";
   
  mail($emailTo, $emailSubject, $emailBody, $emailHeader);
  
  
 # Confirmation Email to User
  
 $confEmailTo = FilterCChars($FTGEmail);
  
 $confEmailSubject = FilterCChars("Thank You for reaching out to us.");
  
 $confEmailBody =chunk_split( base64_encode( "<html>\n"
 . "<head>\n"
 . "<title></title>\n"
 . "</head>\n"
 . "<body>\n"
 . "Dear Sir/Madam,<br/><br/>\n"
 . "We are in receipt of your Enquiry submitted on <a href=\"www.iexpertindia.com\" target=\"_blank\">www.iexpertindia.com</a> and Thank You for the same.<br/><br/>\n"
 . "We will reply to you within the next 24 Hours. In case your Query is Urgent you can also call us on <a href=\"tel:+91 96868 06004\">+91 96868 06004</a><br/><br/>\n"
 . "Regards,<br/><br/>\n"
 . "Iexpert India<br/><br/>\n"
 . "<small><a href=\"www.iexpertindia.com\" target=\"_blank\">www.iexpertindia.com</a></small><br/><br/>\n"
 . "<small>Make the Web work for your Company - Web, Cloud, Digital, Social Media & more at <a href=\"https://www.ithink.co/\">Think Technology Services</a>.</small>\n"
   
 . "</body>\n"
 . "</html>\n"
 . "" ) )
 . "\n";
  
 $confEmailHeader = "From: donotreply@iexpertindia.com\n"
  . "MIME-Version: 1.0\n"
  . "Content-Type: text/html; charset=\"UTF-8\"\n"
  . "Content-Transfer-Encoding: base64\n"
  . "\n";
  
 mail($confEmailTo, $confEmailSubject, $confEmailBody, $confEmailHeader);
  


# Redirect user to success page

header("Location: success.html");

}

?>
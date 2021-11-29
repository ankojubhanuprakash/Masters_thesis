<?php 
  //echo 2;

  ini_set('display_errors',1);
  error_reporting(E_ALL);
  $method = $_GET['method'];//
  $directory = $_GET['dir'];
  $email_con =  $_GET['email'];//true or false to send email
  $fields_str= $_GET['flds'];//what field sto save in csv
  $csv_file= $_GET['csv_file'];//write data to this csv
  
  
  $file_name=preg_replace('/\s+/', '_', $_REQUEST["fname"]);//save user file withthis name
  $data =  $_REQUEST["data"];// save usaer data
  //echo$directory;
  $path="/wwwrw/ankojubhan20/".$directory."/";
  //echo $path;
  $temp_data =json_decode($data,true);
  //echo $temp_data,gettype($temp_data["name"]),gettype($temp_data["std_rvn_score"]),$temp_data["rvn_score"];
  // email true means send email from form data
  //technique - 1 save only csv file wth short data
  // technique- 2 save only in  file
  // technique-3 save csv fila and text files
  // all files will be saved in provided directory in msths file
  // Techniquq-1
  // read which fields must be save in csv from get data
  


  
  if ($method =='1'){
    $content = extract_csv();
    add_to_csv($csv_file,$content,$path);
  
  }
    
  if ($method=='2'){
    save_json($file_name,$data,$path);
  
  }
  
  
  if ($method=='3'){
     $content = extract_csv();
    add_to_csv($csv_file,$content,$path);
    save_json($file_name,$data,$path);
    
  } 
    
  if ($email_con == 'true'){
    //mail($to, $subject, $message, $headers)
   
    $subject = 'Your IQ Test result';
    $from = 'ankojubhan20@iitk.ac.in';
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n";
    'X-Mailer: PHP/' . phpversion();
    $message = '<html><body>';
    $message .= '<center><h3>IQ report</h3><h4>Cognitive Science department, IIT Kanpur</h4></center><hr/>'.
                '<table><tr><td>Name</td><td>'.$temp_data["name"].'</td></tr><tr><td>Age</td><td>'.$temp_data["age"].'</td></tr><tr><td>Questions answered correctly</td><td>'.$temp_data["rvn_score"].'</td></tr>'.
                '<tr><td>IQ percentile</td><td>'.$temp_data["std_rvn_score"].'</td></tr></table>';
    //$message .= '<p>Hi '.$temp_data["name"].',</p>';
    $message .= '<p >Thank you for participation!</p>';//<p>Here is your Iq Result.</p>';
   // $message .= '<p >Percetile Score - '.$temp_data["std_rvn_score"].'% .</p>';
    //$message .= '<p >Questions answered correctly - '.$temp_data["rvn_score"].'</p>';
    $message .= '</body></html>';
        
        
        
    mail($temp_data["email"], $subject, $message, $headers);
    mail("ankojubhanuprakash@gmail.com", $subject, $message, $headers);
  }
  
  
  
  function save_json($fname,$p_data,$path){
    global  $path;
    //echo 
    echo (file_put_contents($path.$fname, $p_data, FILE_APPEND | LOCK_EX));
    //echo "hi";
  }
  
  
  function mail1 ($from,$to,$content){
   echo 'hi';
  }
  
  function add_to_csv($csvfile,$csvdata,$path){
    echo (file_put_contents($path.$csvfile, $csvdata, FILE_APPEND | LOCK_EX));
    
  }
  
   function extract_csv(){
    global $fields_str, $temp_data,$file_name;
    $csv_str=$file_name;  
    $fields = explode(",",$fields_str);    
    foreach($fields as $field){
        //echo $field;
        //echo $temp_data;
        $csv_str=$csv_str.','.$temp_data[$field];
    }
    $csv_str = $csv_str."\r\n";
    echo $csv_str;
  return $csv_str;
  }
  
  
  
  // email true means send email from form data
  //technique - 1 save only csv file wth short data
  // technique- 2 save only in json file
  // technique-3 save csv fila and json files
  // all files will be saved in provided directory in msths file
  
  //if*/
  
  
   
?>
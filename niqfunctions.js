function enable_button(){
    popit = 'true'
    username = document.getElementById('name').value
    email =  document.getElementById('email').value
    age =  document.getElementById('age').value
    gender =  document.getElementById('gender').value
    email2 =  document.getElementById('email2').value
    consent=document.getElementById('consent').checked
    //institute =  document.getElementById('institute').value
    //if (name == '' || email == '' || email2 == '' || age == '' || gender == '' || institute == ''){
    if (username == '' || email == '' || email2 == '' || age == '' || gender == '' ){    
        document.getElementById("data_submit").disabled = true;
        document.getElementById("hide_hover").innerHTML = 'please enter all fields';
        }else{
            if(consent){
                document.getElementById("data_submit").disabled = false;
                document.getElementById("hide_hover").innerHTML = '';
            }else{
                document.getElementById("data_submit").disabled = true;
                document.getElementById("hide_hover").innerHTML = 'please provide your consent to take the IQ test.';}
        
        
        }
}
function validateForm(){    
    
    username = document.getElementById('name').value
    email =  document.getElementById('email').value
    age =  document.getElementById('age').value
    gender =  document.getElementById('gender').value
    email2 =  document.getElementById('email2').value
    if (email == email2) {
        document.getElementById('bio').style.visibility='hidden'
        master_json['name']=username;
        master_json['age']=age;
        master_json['gender']=gender;
        //master_json['institute']=institute;
        master_json['email']=email;
        master_json['user_rvn_choice']=[]// collect users options for iq test
        master_json['user_wais_choice']=[]
        welcome_experiment()

    }else{
        alert('Confirm email address is differet! please verify.')
    }
}
function  welcome_experiment(){
    var jsPsych = initJsPsych({
        on_finish:function(){
            document.body.innerHTML = prereq_html
            document.getElementById('insidebts').innerHTML=prereq_html_iq 
            //newentry
            document.getElementById('bts_options').innerHTML=prereq_html_iq_options
            //*/
            master_json['start_time'] = new Date().getTime();
            rvn_load_question()}
    });
    var hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<h1>Welcome</h1>'+'<br><p>Appreciation for your interest. You will be going through a series of IQ tests and a series of decison making tasks.</p>'+
                   '<p>Futher instructions will be provided at the moment, you perform the task. You may take short breaks between tasks.</p><br><p>Please press any key to continue.</p> ' ,
        
      }
    var rvn_intro = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<h1>Raven’s Progressive Matrices</h1>'+'<br><p align="justify"><ul id="instructions"><li>At the top of each of the following problems, you will see a picture that is missing a figure.</li>'+
                   '<li>Below the picture you will see five figures, one of which completes the picture.</li> <li>Please determine which one of the five possible answers should be inserted <br/>   to replace the question'+
                   'mark in the picture.</li><li>Please choose your option carefully.</li>'+
                   '<li>Please note the study is best viewed in Desktop/Laptop, if viewing in mobile please switch to landscape mode or "desktop site" view .</li></ul></p> ' ,
        css_classes: 'left-align'  ,  
        choices:  ['Continue']     
      }  
      //jsPsych.run([hello_trial,rvn_intro]); 
      jsPsych.run([rvn_intro]) 
}  

function rvn_load_question(){
        qimg="<h3>Please choose a approporiate option that suits missing part of the below image.</h3><img src='../images/"+folder[count]+'/'+folder_images[folder[count]][0] +"'>"
         
        options=''
        option_count=1
        //options = folder_images[folder[count]].forEach(element => {            
        folder_images[folder[count]].forEach(element => {            
        
            if (element != '_00.jpg') {
             options+="<button class='btn btn-default btn-lg btn-block' id='"+String(option_count) +"' onclick= check_rvn_answer(this.id) ><img src='../images/"+folder[count]+'/'+element +"' onclick:></button>"
             //options+="<img id='"+ String(option_count)+ "' src='images/"+folder[count]+'/'+element +"' onclick=check_rvn_answer(this.id)/>"//;logg.png" width="114" height="38" onclick="DoSomething();" />
             option_count++
             }
            
                 });
             
        document.getElementsByClassName('progress-bar')[0].style.width=String(((count+1)/60)*100)+'%'
        document.getElementById('tracker').innerHTML='<h4> Question -'+String(count+1)+"/60"+'</h4>'; 
        document.getElementById('question').innerHTML=qimg;
        document.getElementById('option').innerHTML=options;        
        if  (folder_images[folder[count]].length<=7){
            document.getElementById('option').style.gridTemplateColumns='auto auto auto'

        }else{
            document.getElementById('option').style.gridTemplateColumns='auto auto auto auto'

        } 
         //document.getElementsById('question').innerHTML="<img src='images/"+folder[0]+'/'+folder_images[folder[0]][0] +"'/>";
        } 
function check_rvn_answer (id){
        master_json['user_rvn_choice'].push(Number(id)) 
        if (Number(id)==raevan_answers[count]){score++}
        //console.log(id,score)
        if (count<=58){
            count=count+1
            //console.log(count)
            rvn_load_question()
        //console.log(count)
            }else{
            master_json['end_time'] = new Date().getTime();
            master_json['test_duration'] =  master_json['end_time']- master_json['start_time'] ;   
            master_json['rvn_score']=score;
            master_json['std_rvn_score']=calculate_raven_std_score(score,master_json['age']);
            //document.getElementById('insidebts').innerHTML='<p> Thank you for participation, Your IQ details are sent to your email address.<br> consider checking SPAM folder also.</p>'
            storedata()
            //console.log(master_json)
            //document.getElementById('question').style.display='None'
            //document.getElementById('option').style.display='None'          
            
            //welcome_WAIS()
            //psych_js()
            //naviagte to experiment page
            }
        }        
function storedata(){
            push_data=JSON.stringify(master_json)
            var formData = new FormData();
            a =master_json['name']+String(Math.floor((Math.random() * 1000) + 1))+".txt";
            
            formData.append("fname", a);
            formData.append("data", push_data);    
            //console.log(formData)

            const request = new XMLHttpRequest();
            url = 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/msths/master_write_data.php?csv_file=server.csv&dir=msths&email=true&method=3&flds='+'name,email,gender,rvn_score,std_rvn_score,test_duration'
            url2 = 'https://iitkiqtest.azurewebsites.net/az_master_write_data.php?csv_file=server.csv&dir=msths&email=false&method=3&flds='+'name,email,gender,rvn_score,std_rvn_score,test_duration'
            //console.log(url)
            request.open('POST', url, true);            
            request.send(formData);
            request2 = new XMLHttpRequest();
            request2.open('POST', url2, true);            
            request2.send(formData);

            document.getElementById('insidebts').innerHTML='<p> Thank you for participation, Your IQ details are sent to your email address.<br> consider checking SPAM folder . You may close the window. </p>'
            document.getElementById('option').innerHTML=''
            popit='false'
            
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  //document.getElementById("txtHint").innerHTML = this.responseText;
                  console.log(this.responseText)
                }
              };
        }

function validateForm(){
    let user_data = document.forms["myForm"]
    if (user_data["fname"].value=='' || user_data["fage"].value==''  || user_data["finst"].value== ''
       || user_data["femail"].value == ''|| user_data["fgender"].value == ''){         // || user_data["fcell"].value== '' || user_data["femp"].value == '' ){
           alert('PLease fill all fields to procedd ')

    }
    else{



    master_json['name']=user_data["fname"].value;
    master_json['age']=user_data["fage"].value;
    master_json['gender']=user_data["fgender"].value;
    //master_json['emp']=user_data["femp"].value;
    master_json['institute']=user_data["finst"].value;
    master_json['email']=user_data["femail"].value;
    //master_json['mobile']=user_data["fcell"].value;
    master_json['user_rvn_choice']=[]// collect users options for iq test
    master_json['user_wais_choice']=[]
    document.getElementById('user').style.display='None'
    //welcome_psych()
    welcome_experiment()
    //rvn_load_question()
 }
    }   
function rvn_load_question(){
        qimg="<h2>Please choose a approporiate option that suits missing part of the below image.</h2><img src='images/"+folder[count]+'/'+folder_images[folder[count]][0] +"'>"
         
        options=''
        option_count=1
        //options = folder_images[folder[count]].forEach(element => {            
        folder_images[folder[count]].forEach(element => {            
        
            if (element != '_00.jpg') {
             options+="<button class='btn btn-default btn-lg btn-block' id='"+String(option_count) +"' onclick= check_rvn_answer(this.id) ><img src='images/"+folder[count]+'/'+element +"' onclick:></button>"
             //options+="<img id='"+ String(option_count)+ "' src='images/"+folder[count]+'/'+element +"' onclick=check_rvn_answer(this.id)/>"//;logg.png" width="114" height="38" onclick="DoSomething();" />
             option_count++
             }
            
                 });
        document.getElementById('tracker').innerHTML='<h4> Question -'+String(count+1)+"/60"+'</h4>'; 
        document.getElementById('question').innerHTML=qimg;
        document.getElementById('option').innerHTML=options;        
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
                master_json['rvn_score']=score
                //console.log(master_json)
                //document.getElementById('question').style.display='None'
                //document.getElementById('option').style.display='None'          
                
                welcome_WAIS()
                //psych_js()
                //naviagte to experiment page
                }
            }
function wais_load_question(){
    document.getElementById('tracker').innerHTML='<h4> Question '+String(wais_count+1)+"/60"+'</h4>'; 
    var question_holder=wais_question[wais_count];
    checker=question_holder.search('/wp-content') //check if it has /wp-content
    if (checker != -1 ){
                ///console.log(element)
                question_holder = question_holder.slice(0,checker)+question_holder.slice(checker+1,) 
               // console.log(element)                
            }



    document.getElementById('question').innerHTML='<h2>'+question_holder+'</h2>';
    options=''
    option_count=1
    wais_choices[wais_count].forEach(element => {  
        if (element != ''){
            checker=element.search('/wp-content') //check if it has /wp-content

            if (checker != -1 ){
                //console.log(element)

                element = element.slice(0,checker)+element.slice(checker+1,) 
                //console.log(element)                
            }
            options +=  "<button type='button' class='btn btn-default btn-lg btn-block' id='"+String(option_count-1) +"' onclick=check_wais_answer(this.id)>"+element+"</button>" 
            option_count++
        }
        //    options+="<button id='"+String(option_count) +"' onclick= check_answer(this.id) ><img src='images/"+folder[count]+'/'+element +"' onclick:></button>"
            //options+="<img id='"+ String(option_count)+ "' src='images/"+folder[count]+'/'+element +"' onclick=check_rvn_answer(this.id)/>"//;logg.png" width="114" height="38" onclick="DoSomething();" />
            });                
        
    document.getElementById('option').innerHTML=options;            
        //document.getElementsById('question').innerHTML="<img src='images/"+folder[0]+'/'+folder_images[folder[0]][0] +"'/>";
    }   
function check_wais_answer(id){
    master_json['user_wais_choice'].push(Number(id)) 
    if (Number(id)==wais_answers[wais_count]){wais_score++}
    if (wais_count<59){
        wais_count=wais_count+1
        wais_load_question()
    //console.log(count)
        }else{
        master_json['wais_score']=wais_score
        master_json['CRT_response']=[]
        master_json['CRT_rt']=[]

        CRT()
        
        //console.log(master_json)
        //document.getElementById('question').style.display='None'
        //document.getElementById('option').style.display='None'          
        
        //wais_load_question()
        //psych_js()
        //naviagte to experiment page
        }
    



}                

function construct_trial(quadrant,gamble, safe){
    if (quadrant <= 2){ 
    return "<div class:'trl' ><p>Do you want to buy a lottery ticket that has a "+gamble[0]+" chance of winning ₹"+gamble[1]+"?<br> or you can opt for the safe amount of "+format.format(safe)+"</p></div>"  
    }
    else{
        return "<div class:'trl' ><p>"+gamble[0]+" chance of losing INR"+gamble[1]+" or pay Premium of "+String(safe)+"</p></div>"

    }
            }
function instruction_stimuli(quadrant){
    if (quadrant == 1 || quadrant == 2){ 
        return '<p>You are invited to a casino. The casino consists of multiple gambles, where in each gamble you will be provided two choices.<br> One of the choice is to buy the ticket, which involves luck, where you can'+ 
                ' win or lose the amount with a certain probability. <br>The other choice is not to buy the ticket, where you are guaranteed to take the away safe amount.<br> You are required to choose one of the two options, in each gamble.' +
                '<br>press any Key to conintue.</p>'
        }
        else{
            return "<p> You are were asked to choose to pay Insurance premium to face a probable huge loss.</p><br><p>press any key to continue</p>"

        }
}
function psych_js(){
        
        


    gamble_data = Questionnaire_quadrant_set[random_quadrant][local_q_identifer[local_q_count]]['gamble']
    certain_data = Questionnaire_quadrant_set[random_quadrant][local_q_identifer[local_q_count]]['certain']
    //console.log(certain_data)
    if (random_quadrant>2){
        certain_data.reverse()
    }
    //console.log(certain_data)
    //console.log(certain_data)
    const jsPsych = initJsPsych({
        on_trial_finish : function(data){
            if (data['task']=='Q'){ 

                master_json['questionnaire'][local_q_identifer[local_q_count]].push(data['response'])

            }
        //{console.log(data);
            if (data['response']==1){
                //console.log(timeline)
                if (random_quadrant<3){
                    var r = confirm("In a subsequent gamble, Do you prefer taking the safe amount greater than the currently chosen safe amount?");
                }else{
                    var r = confirm("If you are asked to pay a premium amount lesser than the premium you have currently chosen for the same insured loss, will you pay it?");

                }
                if (r== true){jsPsych.endExperiment(' ');
               }
                 //timeline.push(instructions)
                }
            },
            on_finish: function(){
                if (local_q_count>=4){
                    push_data=JSON.stringify(master_json)
                    var formData = new FormData();
                    formData.append("fname", master_json['name']+String(Math.floor((Math.random() * 1000) + 1))+".txt");
                    formData.append("data", push_data);                        
                    var request = new XMLHttpRequest();
                    request.open('POST', 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/writedata.php', true);            
                    request.send(formData);

                }else{     
                    local_q_count+=1
                    psych_js()                   
                
                }
            } 
               // console.log('hi')}    
        });
    //Experiment code
    var timeline = []
    var instructions = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: instruction_stimuli(random_quadrant)
        };    
    var test_stimuli=[]    
    certain_data.forEach(element => {
        test_stimuli.push({ 
            stimulus: construct_trial(random_quadrant,gamble_data,element)},
            )           
        });
    var test_master_trial = {
          type: jsPsychHtmlButtonResponse,
          stimulus: jsPsych.timelineVariable('stimulus'),
          choices: answer_choice,data:{'task':'Q'}
         
                    }    
    var test_procedure = {
                        timeline: [test_master_trial],
                        timeline_variables: test_stimuli,
                        //randomize_order: true   ,
                        //repetitions: 10
                            }    
    timeline.push(instructions)
    //trials
    timeline.push(test_procedure   )   

    //desription

    jsPsych.run(timeline);                        

    }
function  welcome_experiment(){
    var jsPsych1 = initJsPsych({
        on_finish:function(){
            document.body.innerHTML = prereq_html
            rvn_load_question()}
    });
    var hello_trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<h1>Welcome</h1>'+'<br><p>Appreciation for your interest. You will be going through a series of IQ tests and a series of decison making tasks.</p>'+
                   '<p>Futher instructions will be provided at the moment, you perform the task. You may take short breaks between tasks.</p><br><p>Please press any key to continue.</p> ' 
      }
    var rvn_intro = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<h1>Raven’s Progressive Matrices</h1>'+'<br><p>At the top of each of the following problems, you will see a picture that is missing a figure.</p>'+
                   '<p>Below the picture you will see five figures, one of which completes the picture. Please determine </p><p> which one of the five possible answers should be inserted to replace the question'+
                   'mark in the picture,</p><p>Please choose your option carefully. press any key to continue.</p> ' 
      }  
      jsPsych1.run([hello_trial,rvn_intro]);  
}                                    
function  welcome_WAIS(){
    var jsPsych1 = initJsPsych({
        on_finish:function(){
            document.body.innerHTML = prereq_html
            wais_load_question()}
    });
    var hello_trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  '<h1>Wechsler Adult Intelligence Scale</h1>'+'<br><p>This complete test consists of a series of 60 questions.'+ 
        ' The degree of difficulty will be increased and</p><p> the logic of the questions will be increasingly complex and difficult to distinguish. You must</p><p> select the most suitable answer to qquestion.'+
        ' Press any key to continue.</p>'
 
      }
      jsPsych1.run([hello_trial]);  
}   
function  CRT(){
    var jsPsych = initJsPsych({
        on_finish:function(data){
            data['trials'].forEach(element => {
                master_json['CRT_response'].push(element['response']['response'])
                master_json['CRT_rt'].push(element['rt'])
                    
                });
            psych_js()
        }
    });
    var crt_intro = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<h1>THE COGNITIVE REFLECTION TEST</h1>'+'<br><p>This complete test consists of a series of 3 questions.'+ 
        ' You must write the most suitable  answer to the question.'+
        ' Press any key to continue.</p>'
      } 
     // jsPsych1.run([hello_trial]);  
    var timeline = [crt_intro]
    var test_stimuli=[{stimulus :'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
                       html:'<p>please type you answer here <input type="text" id="test-resp-box" name="response" size="10" /> cents</p>'},
                    {stimulus:'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
                        html:'<p>please type you answer here <input type="text" id="test-resp-box" name="response" size="10" /> minutes</p>'},
                    {stimulus: 'In a lake, there is a patch of lily pads. Every day, the patch doubles in size. <br>If it takes 48 days for the patch to cover the entire lake,how long would it take for the patch to cover half of the lake?',
                        html:'<p>please type you answer here <input type="text" id="test-resp-box" name="response" size="10" /> days</p>'}]  
    var test_master_trial = {
        type: jsPsychSurveyHtmlForm,
        preamble: jsPsych.timelineVariable('stimulus'),
        html: jsPsych.timelineVariable('html') ,
        autofocus: 'test-resp-box'
        }
    var test_procedure = {
            timeline: [test_master_trial],
            timeline_variables: test_stimuli,
            //randomize_order: true   ,
            //repetitions: 10
                } 

    timeline.push(test_procedure   )   

    //desription

    jsPsych.run(timeline);

 
}   
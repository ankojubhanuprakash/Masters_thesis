function enable_button(){
    username = document.getElementById('name').value
    email =  document.getElementById('email').value
    age =  document.getElementById('age').value
    gender =  document.getElementById('gender').value
    email2 =  document.getElementById('email2').value
    //institute =  document.getElementById('institute').value
    //if (username == '' || email == '' || email2 == '' || age == '' || gender == '' || institute == ''){
    if (username == '' || email == '' || email2 == '' || age == '' || gender == '' ){
        document.getElementById("data_submit").disabled = true;
        }else{
        document.getElementById("data_submit").disabled = false;
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
        //master_json['user_rvn_choice']=[]// collect users options for iq test
        //master_json['user_wais_choice']=[]
        gamble_master_instructions()

    }else{
        alert('Confitm email address is differet! please verify.')
    }
}
function instruction_stimuli(quadrant){
    if (quadrant == 1 || quadrant == 2){ 
        return '<h1>You are invited to a casino</h1>.<ul id="instructions"> <li>You are requested to play 5 gambles</li><li>In each gamble , you need to make several choices.  </li></ul>'+
               '<img src = "images/gamble/image1.jpg">'+ 
                '<ul id="instructions"><li>The above image corresponds to one gamble, where you need to provide your preference for each row</li>'+
                '<li>So your preference could be buying the lottery ticket or acceptinh the safe option</li></ul>'+
                '  The casino consists of multiple gambles, where in each gamble you will be provided two choices.<br> One of the choice is to buy the ticket, which involves luck, where you can'+ 
                ' win or lose the amount with a certain probability. <br>The other choice is not to buy the ticket, where you are guaranteed to take the away safe amount.<br> You are required to choose one of the two options, in each gamble.' +
                '<br>press any Key to conintue.</p>'
        }
        else{
            return "<p> You are were asked to choose to pay Insurance premium to face a probable huge loss.</p><br><p>press any key to continue</p>"

        }
}
function gamble_master_instructions(){
    var jsPsych = initJsPsych({on_finish: function(){psych_js()}
    })
    //Experiment code
    
    
    var instructions1 = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<h1>You are invited to a Casino</h1>.<ul id="instructions"> <li>You are requested to play 5 gambles</li><li>In each gamble , you need to make several choices.  </li></ul>'+
        '<img src = "images/gamble/image1.jpg"style="width:75vw; height:70vh">'+'<ul id="instructions"><li>The above image corresponds to one gamble, where you need to provide your preference for each row</li>'+
         '<li>So your preference could be buying the lottery ticket or acceptinh the safe option</li><li>The safe amount value increases, as you progress down the table. </li></ul>',
         choices:['Continue'],
        css_classes: 'left-align' 
        };    
    var instructions2 = {
            type: jsPsychHtmlButtonResponse,
            stimulus: ''+
            '<img src = "images/gamble/image2.jpg" style="width:75vw">'+'<ul id="instructions"><li>As shown in above image, you need to provide your choice for each row seperately.</li>'+
             '<li>If you choose to buy the lottery ticket, you may win the amount with the given probability </li><li>If you choose not yo buy the ticket, you are guranteed to take away the safe amount.</li></ul>',
             choices:['Continue'],
            css_classes: 'left-align' 
            };        
    var instructions3 = {
                type: jsPsychHtmlButtonResponse,
                stimulus: ''+
                '<img src = "images/gamble/image3.jpg" style="width:75vw">'+'<ul id="instructions">'+
                 '<li>If you choose to buy the lottery ticket, you were also progressed to next choice in the table. </li></ul>',
                 choices:['Continue'],
                css_classes: 'left-align' 
                };  
    var instructions4 = {
        type: jsPsychHtmlButtonResponse,
        stimulus: ''+
        '<img src = "images/gamble/image4.jpg" style="width:75vw">'+'<ul id="instructions"><li>If you choose not yo buy the ticket, you have an option to accept all the safe amounts greater than current chosen safe amount and you will be moved to next Gamble.</li>'+
            '</ul>',
            choices:['Continue'],
        css_classes: 'left-align' 
        };  

   
    //desription

    jsPsych.run([instructions1,instructions2,instructions3,instructions4]);    
    
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



function storedata(){
    push_data=JSON.stringify(master_json)
    var formData = new FormData();
    a =master_json['name']+String(Math.floor((Math.random() * 1000) + 1))+".txt";
    
    formData.append("fname", a);
    formData.append("data", push_data);    
    //console.log(formData)

    const request = new XMLHttpRequest();
    url = 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/msths/master_write_data.php?csv_file=server.csv&dir=msths_exp&email=false&method=1&flds='+'name,email,rvn_score'
    //console.log(url)
    request.open('POST', url, true);            
    request.send(formData);
    
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("txtHint").innerHTML = this.responseText;
          console.log(this.responseText)
        }
      };
}
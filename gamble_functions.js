function enable_button(){
    username = document.getElementById('name').value
    email =  document.getElementById('email').value
    //age =  document.getElementById('age').value
    //gender =  document.getElementById('gender').value
    email2 =  document.getElementById('email2').value
    consent=document.getElementById('consent').checked
    //institute =  document.getElementById('institute').value
    //if (username == '' || email == '' || email2 == '' || age == '' || gender == '' || institute == ''){
    if (username == '' || email == ''  || email2 == ''  ){    
    //if (username == '' || email == '' || email2 == '' || age == '' || gender == '' ){    
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
    //age =  document.getElementById('age').value
    //gender =  document.getElementById('gender').value
    email2 =  document.getElementById('email2').value
    if (email == email2) {
        document.getElementById('bio').style.visibility='hidden'
        master_json['name']=username;
        //master_json['age']=age;
        //master_json['gender']=gender;
        //master_json['institute']=institute;
        master_json['email']=email;
        //master_json['user_rvn_choice']=[]// collect users options for iq test
        //master_json['user_wais_choice']=[]
        gamble_master_instructions()

    }else{
        alert('Confirm email address is differet! please verify.')
    }
}
function instruction_stimuli(quadrant){
    if (quadrant == 1 || quadrant == 2){ 
        return '<h3>Welcome</h3>'+
        '<ul id="instructions"><li>You will be playing a set of five gambles. </li><li>Each gamble will take the form of a table similar to the one displayed below.</li>'+
         '<li>In the table, the lottery amount remains same but the safe amount increases as you progress down the table. </li><li>You need to provide your choice for every row of the table!</li><ul><li>That is whether to buy the lottery ticket that may fetch you the lottery amount with some chance.</li><li>Or accept the safe amount instead of buying the lottery ticket.</li></ul>'+
         '<li>At the end, one row from one of the five choice tables would be randomly selected. And your reward <br>will be proportional to the choice you made in that selected row.</li><li>You will be given practice trial first and then actial experiment starts.</li></ul>'+'<img src = "../images/gamble/instructions0.jpg" style="width:90%">'
        }
        else{
            return '<h2>Welcome</h2>'+
            '<ul id="instructions"><li>You will go through a set of five Insurance Covers.</li><li>Each insurance cover will take the form of a table similar to the one displayed.</li>'+
             '<li>In the table, the uncertain loss remains same but the insurance premium decreases as you progress down the table. </li><li>You need to provide your choice for every row of the table!</li><ul><li>That is whether to bear the uncertain loss by "not paying the premium".</li><li>Or insure the uncertain loss by "paying the premium".</li></ul>'+
             '<li>At the end, one row from one of the five choice tables would be randomly selected. And an amount <br>proportional to the choice you made in that selected row will be deducted from the overall compensation.</li><li>You will given be practice trial first and then actial experiment starts.</li></ul>'+'<img src = "../images/gamble/instructions1.jpg" style="width:75%">'
        }
}
function gamble_master_instructions(){
    var jsPsych = initJsPsych({on_finish: function(){practice()}
    })
    //Experiment code
    var instructions0 = {
        type: jsPsychHtmlButtonResponse,
        //stimulus: '<h3>Instructions</h3>.<ul id="instructions"> <li>You are requested to play 5 gambles</li><li>In each gamble , you need to make several choices.  </li></ul>'+
        stimulus:instruction_stimuli(random_quadrant) ,
         choices:['Continue'],
        css_classes: 'left-align' 
        }; 
    /*
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

   */
    //desription

    //jsPsych.run([instructions0,instructions1,instructions2,instructions3,instructions4]);    
    jsPsych.run([instructions0]);//,instructions1,instructions2,instructions3,instructions4]);    
    
}

function practice(){
    var jsPsych = initJsPsych({on_trial_finish : function(data){
        if (data['response']==1){
            //console.log(timeline)
            if (random_quadrant<3){
                var r = confirm("Do you prefer taking the safe amount greater than the currently chosen safe amount?");
            }else{
//                var r = confirm("If you are asked to pay a premium amount lesser than the premium you have currently chosen for the same insured loss, will you pay it?");
                var r = confirm("Do you prefer all lower insurance premium than the current premium against the uncertain loss?");
    
            }
            if (r== true){experiment_start();
           }
             //timeline.push(instructions)
            }
        },on_finish: function(){experiment_start()}
    })

    if (random_quadrant<3){
        gamble_data = ['90%','16,000']
        certain_data = [2600, 3200, 3900, 4500, 5200, 5800, 6500, 7100, 7800, 8400,
                    9100, 9700, 10400, 11000, 11700, 12300, 13000, 13600, 14300, 15000, ]
    }else{
        gamble_data = ['3%','2,27,000'] 
        certain_data = [4300, 4500, 4700, 4900, 5100, 5300, 5500, 5700, 5900, 6100,
                        6300, 6500, 6700, 6900, 7000, 7200, 7400, 7600, 7800,  8000 ] 
        certain_data.reverse()                        
    }



    var start = {
        type: jsPsychHtmlButtonResponse,
        //stimulus: '<h3>Instructions</h3>.<ul id="instructions"> <li>You are requested to play 5 gambles</li><li>In each gamble , you need to make several choices.  </li></ul>'+
        stimulus: 'Practice Trial',
         choices:['Continue'],
        css_classes: 'left-align' 
        }; 
    
    var timeline = []
    var instructions = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'l'
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
    timeline.push(start)
    //trials
    timeline.push(test_procedure   )   

    //desription

    jsPsych.run(timeline);           
}


function construct_trial(quadrant,gamble, safe){
    if (quadrant <= 2){ 
    return "<div class:'trl' ><p>Do you want to buy a lottery ticket that has a "+gamble[0]+" chance of winning ₹"+gamble[1]+"?<br> or you can opt for the safe amount of "+format.format(safe)+"</p></div>"  
    }
    else{
        //Are you willing to insure an uncertain loss by paying an insurance premium?
        return "<div class:'trl' ><p>There is a "+gamble[0]+" chance that you may lose ₹"+gamble[1]+". <br>Are you willing to insure against the uncertain loss<br> by paying an insurance premium of "+format.format(safe)+"?</p></div>"

    }
            }
function experiment_start(){
    var jsPsych = initJsPsych({on_finish: function(){psych_js()}
    })
    var instructions0 = {
        type: jsPsychHtmlButtonResponse,
        //stimulus: '<h3>Instructions</h3>.<ul id="instructions"> <li>You are requested to play 5 gambles</li><li>In each gamble , you need to make several choices.  </li></ul>'+
        stimulus:'Actual Experiment start',
         choices:['Continue'],
        css_classes: 'left-align' 
        }; 
        jsPsych.run([instructions0])
  
}
function psych_js(){

    gamble_data = Questionnaire_quadrant_set[random_quadrant][local_q_identifer[local_q_count]]['gamble']
    certain_data = Questionnaire_quadrant_set[random_quadrant][local_q_identifer[local_q_count]]['certain']
    //console.log(certain_data)

    //below reverse array is not required since, data is designed at the begginning 
  /*  if (random_quadrant>2){
        certain_data.reverse()
    }*/
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
                    var r = confirm("Do you prefer taking the safe amount greater than the currently chosen safe amount?");
                }else{
                    var r = confirm("Do you prefer all lower insurance premium than the current premium against the uncertain loss?");

                }
                if (r== true){jsPsych.endExperiment(' ');
               }
                 //timeline.push(instructions)
                }
            },
            on_finish: function(){
                if (local_q_count>=4){
                    storedata()
                    document.body.innerHTML = prereq_html
                   // document.getElementById('insidebts').innerHTML=prereq_html_iq 
                    //newentry
                    //document.getElementById('bts_options').innerHTML=prereq_html_iq_options
                    document.getElementById('insidebts').innerHTML='<p> Thank you for participation, we shall get back to you soon with your compensation details. <br>'+
                    'if you dont recieve any info, please drop an email to ankojubhan20@iitk.ac.in . You may close the window. </p>'
                    document.getElementById('option').innerHTML=''
                    popit='false'



                    /*
                    push_data=JSON.stringify(master_json)
                    var formData = new FormData();
                    formData.append("fname", master_json['name']+String(Math.floor((Math.random() * 1000) + 1))+".txt");
                    formData.append("data", push_data);                        
                    var request = new XMLHttpRequest();
                    url
                    request.open('POST', 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/writedata.php', true);            
                    request.send(formData);*/

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
        type: jsPsychHtmlButtonResponse,
        stimulus: gam_or_ins()+String(local_q_count+1),
        choices:['Continue']
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
    //url = 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/msths/master_write_data.php?dir=msths_second&email=false&method=2'
    url = 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/msths/master_write_data.php?csv_file=server.csv&dir=msths_second&email=false&method=3&flds='+'name,email,Quadrant'
    //////////////changed below url2 ro srivalab -start
    //url2 = 'https://iitkiqtest.azurewebsites.net/az_master_write_data.php?csv_file=server.csv&dir=msths_second&email=false&method=3&flds='+'name,email,Quadrant'
    url2 = 'https://srivalab-compute.cse.iitk.ac.in/bhanu/write_data.php?csv_file=server.csv&dir=msths_second&email=false&method=3&flds='+'name,email,Quadrant'
    //////////////changed below url2 ro srivalab -end
    //url = 'https://cgs1.cgs.iitk.ac.in/user/ankojubhan20/msths/master_write_data.php?csv_file=server.csv&dir=msths_second&email=false&method=2&flds='+'name,email,rvn_score'
    //console.log(url)
    request.open('POST', url, true);            
    request.send(formData);
    request2 = new XMLHttpRequest();
    request2.open('POST', url2, true);            
    request2.send(formData);
    
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("txtHint").innerHTML = this.responseText;
          console.log(this.responseText)
        }
      };
}
function gam_or_ins(){
    if (random_quadrant<3){
        return 'Gamble - '
    }else{
        return 'Insurance Cover - '
    }

}
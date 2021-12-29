function step_value(par_scores,par_key){
        par_scores = par_scores.sort()
        if (par_key < par_scores[0])
        {
                return par_scores[0]
        }
        if (par_key > par_scores[par_scores.length-1]){
                return par_scores[par_scores.length-1]
        }
        for (i=1;i<par_scores.length;i++){
                if (par_scores[i]>par_key){
                        return par_scores[i-1]
                }
        }

}
function calculate_raven_std_score(rawscore,age){
        raven_matix = {20:{55:95,54:90,49:75,44:50,37:25,28:10,23:5},
                        25:{55:95,54:90,49:75,44:50,37:25,28:10,23:5},
                        30:{54:95,53:90,47:75,42:50,34:25,25:10,19:5},
                        35:{53:95,51:90,45:75,40:50,30:25},
                        40:{52:95,49:90,43:75,38:50,27:25},
                        45:{50:95,47:90,41:75,35:50,24:25},
                        50:{48:95,45:90,39:75,33:50,21:25},
                        55:{46:95,43:90,37:75,30:50,18:25},
                        60:{44:95,41:90,35:75,27:50,15:25},
                        65:{42:95,39:90,33:75,24:50,13:25},
                        }
        raven_ages = Object.keys(raven_matix)
        //console.log(raven_ages.includes(String(age)))
        if (raven_ages.includes(String(age))){
                adj_age=age
        }else{
                adj_age = raven_ages.reduce((a, b) => {
                        return Math.abs(b - age) < Math.abs(a - age) ? b : a;
                    });
        }
        raven_scores = Object.keys(raven_matix[adj_age])
        //console.log(raven_scores.includes(String(rawscore)))
        if (raven_scores.includes(String(rawscore))){
                adj_score=rawscore
        }else{
                adj_score=step_value(raven_scores,rawscore)
        }
        return raven_matix[adj_age][adj_score]



}
function get_raven_data(){
    folder = ['A-1', 'A-2', 'A-3', 'A-4', 'A-5', 'A-6', 'A-7', 'A-8', 'A-9', 'A-10', 'A-11', 'A-12',
    'B-1', 'B-2', 'B-3', 'B-4', 'B-5', 'B-6', 'B-7', 'B-8', 'B-9', 'B-10', 'B-11', 'B-12', 
    'C-1', 'C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-10', 'C-11', 'C-12', 
    'D-1', 'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-10', 'D-11', 'D-12',
     'E-1', 'E-2', 'E-3', 'E-4', 'E-5', 'E-6', 'E-7', 'E-8', 'E-9', 'E-10', 'E-11', 'E-12']
     folder_images = {'A-1': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'A-10': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'A-11': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'A-12': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'A-2': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'A-3': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'],
                       'A-4': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'A-5': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'A-6': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'A-7': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'A-8': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'A-9': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'B-1': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'B-10': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'],
                       'B-11': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'B-12': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'B-2': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'B-3': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'],
                       'B-4': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'B-5': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'B-6': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'B-7': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 
                       'B-8': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'B-9': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'],
                       'C-1': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg'], 'C-10': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'C-11': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'C-12': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'],
                       'C-2': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'C-3': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'C-4': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'C-5': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'C-6': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'C-7': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'C-8': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'C-9': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'D-1': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'D-10': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'D-11': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'D-12': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'D-2': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'D-3': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'D-4': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'D-5': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'D-6': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'D-7': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'D-8': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'D-9': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'E-1': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'E-10': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'E-11': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'E-12': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'E-2': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'E-3': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'E-4': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'E-5': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'E-6': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'E-7': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 
                       'E-8': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg'], 'E-9': ['_00.jpg', '_01.jpg', '_02.jpg', '_03.jpg', '_04.jpg', '_05.jpg', '_06.jpg', '_07.jpg', '_08.jpg']}
     
    raevan_answers= [4,5,1,2,6,3,6,2,1,3,4,2,
                     5,6,2,1,1,3,5,6,4,3,4,8,
                     5,3,2,7,8,4,5,7,1,1,6,2,
                     3,4,3,8,7,6,5,4,1,2,5,6,
                     7,6,8,2,1,5,1,3,6,2,4,5
               ]
    return [folder,folder_images,raevan_answers]
}
function get_risk_aversion_data(){
        master_data=1
    Questionnaire_quadrant_set ={1: [
                                        {'gamble':['75%','6,500'],'certain':[300, 600, 1000, 1300, 1600, 1900, 2300, 2600, 2900, 3200,
                                                                                3600, 3900, 4200, 4500, 4900, 5200, 5500, 5800, 6200, 6500 ] },
                                        {'gamble':['80%','4,900'],'certain':[1200, 1400, 1600, 1800, 1900, 2100, 2300, 2500, 2700, 2900, 
                                                                                3100, 3300, 3500, 3700, 3900, 4100, 4300, 4500, 4700, 4870]},
                                        {'gamble':['90%','16,200'],'certain':[ 10100, 10400, 10700, 11000, 11400, 11700, 12000, 12300, 12700, 13000,
                                                                                 13300, 13600, 14000, 14300, 14600, 14900, 15300, 15600, 15900, 16000]},
                                        {'gamble':['75%','1,30,000'],'certain':[6500, 13000, 19500, 26000, 32500, 39000, 45500, 52000, 58400, 64900,
                                                                                 71400, 77900, 84400, 90900, 97400, 103900, 110400, 116900, 123400, 129900]},
                                        {'gamble':['90%','1,62,000'],'certain':[101000, 104000, 107000, 110000, 114000, 117000, 120000, 123000, 127000, 130000, 
                                                                                133000, 136000, 140000, 143000, 146000, 149000, 153000, 156000, 159000, 161500]}
                                        ],

                                2:[     {'gamble':['24%','20,300'],'certain':[3200, 3400, 3500, 3600, 3800, 3900, 4000, 4200, 4300, 4400,
                                                                                 4500, 4700, 4800, 4900, 5100, 5200, 5300, 5500, 5600, 5700] },
                                        {'gamble':['10%','68,200'],'certain':[3200, 3500, 3800, 4000, 4300, 4500, 4800, 5100, 5300, 5600, 
                                                                                 5800, 6100, 6400, 6600, 6900, 7100, 7400, 7700, 7900, 8200] },
                                        {'gamble': ['3%','2,27,000'] ,'certain':[3200, 3500, 3800, 4000, 4300, 4500, 4800, 5100, 5300, 5600, 
                                                                                        5800, 6100, 6400, 6600, 6900, 7100, 7400, 7700, 7900, 8200  ] },
                                        {'gamble': ['20%','2,40,00,000'] ,'certain':[32500, 378300, 724100, 1069900, 1415700, 1761600, 2107400, 2453200, 2799000, 3144800,
                                                                                        3490600, 3836500, 4182300, 4528100, 4873900, 5219700, 5565500, 5911300, 6257200, 6603000] },
                                        {'gamble': ['15%', '3,25,00,000'] ,'certain':[16200, 363000, 709800, 1056600, 1403400, 1750200, 2097000, 2443800, 2790600, 3137400,
                                                                                        3484100, 3830900, 4177700, 4524500, 4871300, 5218100, 5564900, 5911700, 6258500, 6605300] },
                                                        ],
                                3: [    {'gamble': ['10%','26,000'] ,'certain':[9000, 8500, 8100, 7600, 7100, 6700, 6200, 5800, 5300, 4900,
                                                                                 4400, 4000, 3500, 3100, 2600, 2100, 1700, 1200, 800, 300] },
                                        {'gamble': ['1%','1,62,400'] ,'certain':[6200, 5800, 5500, 5200, 4900, 4500, 4200, 3900, 3600, 3200,
                                                                                 2900, 2600, 2300, 1900, 1600, 1300, 1000, 600, 300, 20 ] },
                                        {'gamble': ['24%','20,300'] ,'certain':[14000, 13300, 12700, 12000, 11400, 10700, 10100, 9400, 8800, 8100,
                                                                                 7500, 6800, 6200, 5500, 4900, 4200, 3600, 2900, 2300, 1600 ] },
                                        {'gamble':['10%','68,200'],'certain' : [25000, 23700, 22400, 21100, 19800, 18500, 17200, 15900, 14600, 13300,
                                                                                 12000, 10700, 9400, 8100, 6800, 5500, 4200, 2900, 1600, 300] },
                                        {'gamble': ['3%','2,27,000'] ,'certain':[ 25000, 23700, 22400, 21100, 19800, 18500, 17200, 15900, 14600, 13300,
                                                                                12000, 10700, 9400, 8100, 6800, 5500, 4200, 2900, 1600, 300] }                                                                                                                                                                        
                                        ],                        
                                4:[     {'gamble':['80%','4,900'],'certain':[4830, 4770, 4700, 4630, 4560, 4490, 4430, 4360, 4290, 4220,
                                                                                4150, 4080, 4020, 3950, 3880, 3810, 3740, 3680, 3610, 3540]},
                                        {'gamble':['75%','6,500'],'certain':[6460, 6340, 6220, 6110, 5990, 5880, 5760, 5640, 5530, 5410,
                                                                                 5300, 5180, 5060, 4950, 4830, 4720, 4600, 4480, 4160, 3830]},
                                        {'gamble':['90%','16,200'],'certain':[16170, 16100, 15900, 15800, 15700, 15600, 15500, 15400, 15200, 15100,
                                                                                 15000, 14900, 14800, 14700, 14500, 14400, 14300, 14200, 14100, 14000]},
                                        {'gamble':['75%','1,30,000'], 'certain':[129000, 127000, 125000, 122000, 120000, 118000, 116000, 113000, 111000, 109000, 
                                                                                        107000, 104000, 102000, 100000, 97000, 95000, 93000, 91000, 88000, 86000]},                                                                        
                                        {'gamble':['90%','1,62,000'], 'certain':[161500, 161200, 160000, 158800, 157700, 156500, 155400, 154200, 153000, 151900,
                                                                                 150700, 149600, 148400, 147300, 146100, 144900, 143800, 142600, 141500, 140300]},
                                       
                                        ]

                                    }
    return Questionnaire_quadrant_set;                                    

} 
function WAIS_Questiona(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        }
        mquestion_array=[];
        mchoice_array=[];mmaster_aray = [];
        function get_wais_data(){
            var master_aray=[ new WAIS_Questiona("Which one of the five is least like the other four?", ["Bear", "Snake", "Cow", "Dog", "Tiger"], "Snake"),
                            new WAIS_Questiona("If you rearrange the letters 'BARBIT', you would have the name of a:", ["Ocean", "Country", "State", "City", "Animal"], "Animal"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w3.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w3a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w3b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w3c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w3d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w3e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w3d.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Potato", "Corn", "Apple", "Carrot", "Bean"], "Apple"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w5.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w5a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w5b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w5c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w5d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w5e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w5b.jpg'></img>"),
                            new WAIS_Questiona("John, twelve years old, is three times as old as his brother. How old will John be when he is twice as old as his brother?", ["15", "16", "18", "20", "21"], "16"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>BROTHER is to SISTER as NIECE is to:", ["Mother", "Daughter", "Aunt", "Uncle", "Nephew"], "Nephew"),
                            new WAIS_Questiona("Which one of the five designs is least like the other four?", ["A", "Z", "F", "N", "E"], "E"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>MILK is to GLASS as LETTER is to:", ["Stamp", "Pen", "Envelope", "Book", "Mail"], "Envelope"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w10a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w10b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w10c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w10d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w10e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w10e.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five choices makes the best comparison? <br>LIVE is to EVIL as 5232 is to:", ["2523", "3252", "2325", "3225", "5223"], "2325"),
                            new WAIS_Questiona("'If some Smaugs are Thors and some Thors are Thrains, then some Smaugs are definitely Thrains.' This statement is:", ["True", "False", "Neither", "", ""], "False"),
                            new WAIS_Questiona("Which one of the five designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w13a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w13b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w13c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w13d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w13e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w13d.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>TREE is to GROUND as CHIMNEY is to:", ["Smoke", "Brick", "Sky", "Garage", "House"], "House"),
                            new WAIS_Questiona("Which one of the numbers does not belong in the following series?", ["1", "3", "5", "6", "7"], "6"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Touch", "Taste", "Hear", "Smile", "See"], "Smile"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w17.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w17a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w17b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w17c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w17d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w17e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w17b.jpg'></img>"),
                            new WAIS_Questiona("Jack is taller than Peter, and Bill is shorter than Jack. Which of the following statements would be most accurate?", ["Bill is taller than Peter.", "Bill is shorter than Peter.", "Bill is as tall as Peter.", "It is impossible to tell.", ""], "It is impossible to tell."),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Stocking", "Dress", "Shoe", "Purse", "Hat"], "Purse"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>CAACCAC is to 3113313 as CACAACAC is to:", ["13133131", "13133313", "31311131", "31311313", "31313113"], "31311313"),
                            new WAIS_Questiona("If you rearrange the letters 'RAPIS', you would have the name of a:", ["Ocean", "Country", "State", "City", "Animal"], "City"),
                            new WAIS_Questiona("Which one of the designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w22a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w22b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w22c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w22d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w22e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w22b.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>BULLET is to GUN as BALL is to:", ["Bat", "Slingshot", "Cannon", "Pitcher", "Catapult"], "Cannon"),
                            new WAIS_Questiona("'If some Bifurs are Bofurs and all Gloins are Bofurs, then some Bifurs are definitely Gloins.' This statement is:", ["True", "False", "Neither", "", ""], "False"),
                            new WAIS_Questiona("Which one of the designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w25a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w25b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w25c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w25d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w25e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w25b.jpg'></img>"),
                            new WAIS_Questiona("Which one of the letters does not belong is the following series?", ["A", "D", "G", "I", "J"], "I"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w27.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w27a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w27b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w27c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w27d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w27e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w27d.jpg'></img>"),
                            new WAIS_Questiona("The price of an article was cut 20% for a sale. By what percent must the item be increased to again sell the article at the original price?", ["15%", "20%", "25%", "30%", "40%"], "25%"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Copper", "Iron", "Brass", "Tin", "Lead"], "Brass"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w30.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w30a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w30b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w30c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w30d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w30e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w30e.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Bottle", "Cup", "Tub", "Funnel", "Bowl"], "Funnel"),
                            new WAIS_Questiona("Mary had a number of cookies. After eating one, she gave half the remainer to her sister. After eating another cookie, she gave half of what was left to her brother. Mary now had only five cookies left. How many cookies did she start with?", ["11", "22", "23", "45", "46"], "23"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Wheat", "Hay", "Barley", "Oats", "Rice"], "Hay"),
                            new WAIS_Questiona("Which one of the numbers does not belong is the following series?", ["4", "9", "16", "25", "32"], "32"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w35.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w35a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w35b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w35c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w35d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w35e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w35b.jpg'></img>"),
                            new WAIS_Questiona("'A spaceship received three messages in a strange language from a distant planet. The astronauts studied these messages and found that 'Elros Aldarion Elendil' means 'Danger Rocket Explosion' and 'Edain Mnyatur Elros' means 'Danger spaceship Fire' and 'Aldarion Gimilzor Gondor' means 'Bad Gas Explosion'. What does 'Elendil' mean?", ["Danger", "Explosion", "Nothing", "Rocket", "Gas"], "Rocket"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w37a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w37b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w37c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w37d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w37e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w37c.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>BELT is to BUCKLE as SHOE is to:", ["Sock", "Toe", "Foot", "Lace", "Sole"], "Lace"),
                            new WAIS_Questiona("Which one of the five designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w39a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w39b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w39c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w39d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w39e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w39d.jpg'></img>"),
                            new WAIS_Questiona("John received $.41 change from a purchase in the drugstore. If he received six coins, three of the coins had to be:", ["Pennies", "Nickels", "Dimes", "Quarters", "Half-Dollars"], "Dimes"),
                            new WAIS_Questiona("Which one of the five designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w41a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w41b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w41c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w41d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w41e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w41d.jpg'></img>"),
                            new WAIS_Questiona("If you rearrange the letters 'MANGERY', you would have the name of a:", ["Ocean", "Country", "State", "City", "Animal"], "Country"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w43.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w43a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w43b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w43c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w43d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w43e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w43e.jpg'></img>"),
                            new WAIS_Questiona("'If all Wargs are Twerps and no Twerps are Gollums, then no Gollums are definitely Wargs.' This statement is:", ["True", "False", "Neither", "", ""], "True"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Horse", "Kangaroo", "Zebra", "Deer", "Donkey"], "Kangaroo"),
                            new WAIS_Questiona("Which one of the designs does not belong in the following series?", ["<img src='/wp-content/uploads/2020/04/w46a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w46b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w46c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w46d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w46e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w46d.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>FINGER is to HAND as LEAF is to:", ["Tree", "Branch", "Blossom", "Twig", "Bark"], "Twig"),
                            new WAIS_Questiona("John's mother sent him to the store to get 9 large cans of peaches. John could only carry 2 cans at a time. How many trips to the store did John have to make?", ["4", "4 1/2", "5", "1/2", "6"], "5"),
                            new WAIS_Questiona("Which one of the five designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w49a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w49b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w49c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w49d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w49e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w49e.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>FOOT is to KNEE as HAND is to:", ["Finger", "Elbow", "Toe", "Leg", "Arm"], "Elbow"),
                            new WAIS_Questiona("Which one of the five designs is least like the other four?", ["<img src='/wp-content/uploads/2020/04/w51a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w51b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w51c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w51d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w51e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w51d.jpg'></img>"),
                            new WAIS_Questiona("Mary was both 13th highest and 13th lowest in a spelling contest. How many people were in the contest?", ["13", "25", "26", "27", "28"], "25"),
                            new WAIS_Questiona("Which one of the five makes the best comparison? <br>WATER is to ICE as MILK is to:", ["Honey", "Cheese", "Cereal", "Coffee", "Cookie"], "Cheese"),
                            new WAIS_Questiona("1, 2, 5, 10, 13, 26, 29, ? <br>What number should logically replace the question mark in the sequence above?", ["39", "48", "54", "58", "68"], "58"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Ham", "Liver", "Salmon", "Pork", "Beef"], "Salmon"),
                            new WAIS_Questiona("'If all Fleeps are Sloops and all Sloops are Loopies, then all Fleeps are definitely Loopies.' This statement is:", ["True", "False", "Neither", "", ""], "True"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w57.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w57a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w57b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w57c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w57d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w57e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w57e.jpg'></img>"),
                            new WAIS_Questiona("Which one of the five is least like the other four?", ["Inch", "Mile", "Acre", "Yard", "Foot"], "Acre"),
                            new WAIS_Questiona("Which one of the five designs makes the best comparison? <br><img src='/wp-content/uploads/2020/04/w59.jpg'></img>", ["<img src='/wp-content/uploads/2020/04/w59a.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w59b.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w59c.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w59d.jpg'></img>", "<img src='/wp-content/uploads/2020/04/w59e.jpg'></img>"], "<img src='/wp-content/uploads/2020/04/w59c.jpg'></img>"),
                            new WAIS_Questiona("'A fish has a head 9 inches long. The tail is equal to the size of the head plus one-half the size of the body. The body is the size of the head plus the tail.' How long is the fish?", ["27 inches", "54 inches", "63 inches", "72 inches", "81 inches"], "72 inches")]
    
    question_array=[]
    choice_array=[] 
    answer_array=[]
    master_aray.forEach(element => {
        question_array.push(element.text);
        choice_array.push(element.choices)
        answer_array.push(element.choices.indexOf(element.answer))
    
        
    });
    return [question_array,choice_array,answer_array]
        }
    
    
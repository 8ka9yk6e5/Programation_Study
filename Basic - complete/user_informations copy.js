const readline = require('node:readline');

const {stdin: input, stdout: output} = require('node:process');

const userInfo = {};//object to storage the user informations

const infoNeededToGet = ["Name", "Age", "Username", "Email", 
    "Phone number", "Localization", "Gender", "Profession", 
    "Register number", "Nacionality", "Weight", "Height", "Complete school"
]//informations to get

const questions = ["What's your name?", "How old are you?", "What's your Username?", "What's your email?",
    "What's your phone number?", "What's your current city/town?", "What's your gender?", "What do you do for your living?",
    "What's your register number?", "Where are you from?", "What's your weight?", "what's your height?", "Do you complete the school?(Y/N)"
]//questions to make and get the informations

//just to make, and enter the user informations
function makingTheQuestions(informationsNeeded, questionsToMake){
    const rl = readline.createInterface({input, output});//create a interface to have the user enter

    nameToSave : for(let info of informationsNeeded){//to save the key
        for(let ask of questionsToMake){//to mark which question is time to make

            //if the question is for a yes or no response transform to true or false, transform that on a other new function
            if (ask == "Do you complete the school?(Y/N)"){
                rl.question(ask, function(infoSchool){
                    if(infoSchool[0].toUpperCase == "Y"){
                        userInfo.info = true
                    }
                    else userInfo.info = false;
                    rl.close();
                })
                continue;//pass to next iteration
            }
            //eles continues normally
            rl.question(ask, function(informationGet){
                userInfo.info = informationGet;
                rl.close();
            })
        }
    }
    show();
}

function show(){//function to show to user informations
    console.clear();

    for(let info in userInfo){
        console.log(`${info} : ${userInfo[info]}`);
    }

    console.log('');
    
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });//create a interface to have the user enter

    //to confirm the informations, create a function to it
    rl.question("Is informations corrects?", function(enter){
        if (enter[0].toUpperCase == "Y") console.log('\nRegistration complete\n');
        else {
            console.log('\nRegistration incomplete');
            console.log("\nclosing aplication...");
            process.exit(0);
        }
        rl.close();
    })
}

makingTheQuestions(infoNeededToGet, questions);
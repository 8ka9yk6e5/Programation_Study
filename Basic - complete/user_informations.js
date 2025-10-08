const readline = require("node:readline");

const userInfo = {};

const infoNeededToGet = ["Name", "Age", "Username", "Email", 
    "Phone number", "Localization", "Gender", "Profession", 
    "Register number", "Nacionality", "Weight", "Height", "Complete school"]

const questions = ["What's your name?", "How old are you?", "What's your Username?", "What's your email?",
    "What's your phone number?", "What's your current city/town?", "What's your gender?", "What do you do for your living?",
    "What's your register number?", "Where are you from?", "What's your weight?", "what's your height?", "Do you complete the school?"
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function makingTheQuestions(informationsNeeded, questionsToMake){
    nameToSave : for(let info in informationsNeeded){
        for(let ask in questionsToMake){

            if (ask == "Do you complete the school?"){
                rl.question(ask, function(infoSchool){
                    if(infoSchool[0].toUpperCase == "Y"){
                        userInfo.info = true
                    }
                    else userInfo.info = false;
                })
                continue;

            }
            rl.question(ask, function(informationGet){
                userInfo.info = informationGet;
            })
        }
    }
}

function show(){
    console.clear();

    for(let info in userInfo){
        console.log(`${info} : ${userInfo[info]}`);
    }

    console.log('');
    
    rl.question("Is informations corrects?", function(enter){
        if (enter[0].toUpperCase == "Y") console.log('\nRegistration complete\n');
        else {
            console.log('\nRegistration incomplete');
            console.log("\nclosing aplication...");
            process.exit(0);
        }
    })
}
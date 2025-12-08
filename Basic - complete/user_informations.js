const readline = require('node:readline');

const {stdin:input, stdout:output} = require('node:process');

const questions = [
    "What's your name?", 
    "How old are you?", 
    "What's your Username?", 
    "What's your email?",
    "What's your phone number?", 
    "What's your current city/town?",
    "Where are you from?",  
    "What's your gender?", 
    "What do you do for your living?",
    "What's your register number?", 
    "What's your weight?", 
    "what's your height?", 
    "Do you complete the school?\n(Y/N)"
];

const informations = {
    name : undefined,
    age : undefined,
    username : undefined,
    email : undefined,
    phoneNumber : undefined,
    localization : {
        cityTown : undefined,
        country : undefined
    },
    gender : undefined,
    work : undefined,
    registerNumber : undefined,
    size : {
        weight : undefined,
        height : undefined
    },
    completeSchool : undefined
};

const gettingInformations = {
    //verificator if a question is for true or false
    falseOrTrueVerification(question){
        const arrQuestion = question.split('\n');
        if (arrQuestion.includes('(Y/N)')) return true
        else return false
    },

    getResponseOfTrueFalse(question){//end this code part
        const rl = readline.emitKeypressEvents(input);//to get just a key
        process.stdin.setRawMode(true);//define a non necessary enter press
        console.log(question);
        input.on('keypress', (notUsed, key) =>{
            switch (key.name){
                case 'y':
                    informations.completeSchool = true;
                    // input.removeListener('keypress');
                    break;
                case 'n':
                    informations.completeSchool = false;
                    // input.removeListener('keypress');
                    break;
                default:
                    console.log("Invalid value enter");
                    this.getResponseOfTrueFalse(question);
                    // input.removeListener('keypress');
                    break;
            }
        });
    },

    gettingResponses(question,callbackVerificator, callbackResponse){
        question.forEach((value) => {

        });
    }
}

// gettingInformations.getResponseOfTrueFalse(questions.at(-1));
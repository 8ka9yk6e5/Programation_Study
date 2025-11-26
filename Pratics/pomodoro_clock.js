/*
    a form to pass the time
*/

const readline = require('node:readline');
const {stdin : input, stdout : output} = require('node:process');

const gettingInformations = {
    timeOfWork : 0,
    timeOfRest : 0,
    sets : 0,
    setsPassed : 0,
    next : 'work',
    getTimeOfWork(){
        const rl = readline.createInterface({input, output});

        rl.question('(in minutes)\nHow much time be each set?\n', (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                this.timeOfWork = Number(userEnter);
                rl.close();
            }
            else {
                console.log("ERROR - invalid value");
                rl.close();
                this.getTimeOfSet();
            }
            
        });
        
    },
    getTimeOfRest(){
        const rl = readline.createInterface({input, output});

        rl.question('(in minutes)\nHow much time be the interval?\n', (userEnter) =>{
            if(!isNaN(Number(userEnter)) && userEnter > 0){
                this.timeOfRest = Number(userEnter);
                rl.close();
            }
            else{
                console.log('ERROR - invalid value');
                rl.close();
                this.getTimeOfRest();
            }
        })
    },
    getQuantityOfSets(){
        const rl = readline.createInterface({input, output});

        rl.question('How much times repeat?\n', (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                this.sets = Number(userEnter);
                rl.close();
            }
            else { 
                console.log('ERROR - invalid value');
                rl.close();
                this.getQuantityOfSets();
            }
        })
    },
    callCounter(){
        if  (!(setsPassed == sets)){
            if(this.next == 'work'){
                this.next = 'rest';
                counter(this.timeOfWork);
            }
            else if (this.next == 'rest'){
                this.next = 'work';
                counter(this.timeOfRest);
                this.setsPassed++;
            }
        }
        else console.error("Complete cicle");
    }
}

function counter(timeToPass, callback){
    let passed = 0;
    setInterval(() => {
        if (passed == timeToPass){
            callback();
            clearInterval();
        }
        passed++;
    }, 6000);
}

{

}
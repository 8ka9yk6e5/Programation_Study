/*
    a form to pass the time
*/

const readline = require('node:readline');
const {stdin : input, stdout : output} = require('node:process');

const gettingInformations = {
    timeOfWork : 0,//time of focus
    timeOfRest : 0,//time to relax
    sets : 0,//how much times that repeat
    setsPassed : 0,
    working : true,
    getTimeOfWork(callback, context){
        const rl = readline.createInterface({input, output});

        rl.question('(in minutes)\nHow much time be each focus time?\n', (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                this.timeOfWork = Number(userEnter);
                rl.close();
                callback.call(context,this.getQuantityOfSets ,context);
            }
            else {
                console.log("ERROR - invalid value");
                rl.close();
                this.getTimeOfWork(callback,context);
            }
        });
        
    },
    getTimeOfRest(callback,context){
        const rl = readline.createInterface({input, output});

        rl.question('(in minutes)\nHow much time be the interval?\n', (userEnter) =>{
            if(!isNaN(Number(userEnter)) && userEnter > 0){
                this.timeOfRest = Number(userEnter);
                rl.close();
                callback.call(context, this.callCounter, context);
            }
            else{
                console.log('ERROR - invalid value');
                rl.close();
                this.getTimeOfRest(callback,context);
            }
        })
    },
    getQuantityOfSets(callback, context){
        const rl = readline.createInterface({input, output});

        rl.question('How much times repeat?\n', (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                this.sets = Number(userEnter);
                rl.close();
                callback.call(context);
            }
            else { 
                console.log('ERROR - invalid value');
                rl.close();
                this.getQuantityOfSets(callback, context);
            }
        })
    },
    callCounter(){
        console.clear();
        if  (!(this.setsPassed == this.sets)){
            if(this.working){
                console.warn("Time to work!");
                this.working = false;
                counter(this.timeOfWork,this.callCounter, gettingInformations);
            }
            else{
                console.warn("Time to rest!");
                this.working = true;
                counter(this.timeOfRest, this.callCounter, gettingInformations);
                this.setsPassed++;
            }
        }
        else console.error("Complete cicle");
    }
}

function counter(timeToPass, callback, context){
    let passed = 0;
    const id = setInterval(() => {
        if (passed == timeToPass){
            callback.call(context);
            clearInterval(id);
        }
        passed++;
    }, 6000);
}

gettingInformations.getTimeOfWork.call(gettingInformations, gettingInformations.getTimeOfRest, gettingInformations);
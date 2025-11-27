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
    working : true,
    getTimeOfWork(callback, context){
        const rl = readline.createInterface({input, output});

        rl.question('(in minutes)\nHow much time be each focus time?\n', (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                this.timeOfWork = Number(userEnter);
                rl.close();
                callback.call(context,this.getQuantityOfSets ,context)
            }
            else {
                console.log("ERROR - invalid value");
                rl.close();
                this.getTimeOfWork();
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
                this.getTimeOfRest();
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
                this.getQuantityOfSets();
            }
        })
    },
    callCounter(){
        if  (!(this.setsPassed == this.sets)){
            if(this.working){
                this.next = false;
                counter(this.timeOfWork,this.callCounter, gettingInformations);
            }
            else{
                this.next = true;
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
    }, 60000);
}

gettingInformations.getTimeOfWork.call(gettingInformations, this.getTimeOfRest, gettingInformations);
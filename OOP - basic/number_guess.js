const readline = require("readline");

const randomNumber = Math.round(Math.random()*100);//number to user descovery


function comparingNumber(userNum = 0,{win, greater, lower} , toRepeat, {losingLife, lifes, losedLifes}) {//to compare both numbers
    if(userNum > randomNumber) lower(losingLife, toRepeat);
    else if (userNum < randomNumber) greater(losingLife, toRepeat);
    else if (userNum == randomNumber) win(lifes, losedLifes);
}

const enterFromUser = {//to get the user entry
    enter(toCompare){
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        console.log(`Losed lifes - ${lifeSystem.losedLifes}`)
        rl.question("Enter the number to try to discovery it:\n", (userEnter => {
            rl.close();
            if (enterFromUser.verificationOfEnter(userEnter)) toCompare(Number(userEnter), results, enterFromUser.enter, lifeSystem);
            else {
                console.log("ERROR - invalid number or value entered")
                enterFromUser.enter(comparingNumber);
            };
        }))
    },

    verificationOfEnter(userNum) {
        userNum = Math.round(userNum);
        if (!isNaN(userNum) && userNum > 0 && userNum <= 100) return true;
        else return false;
    },
};

const lifeSystem = {//object referend to lose life system
   lifes : 10,
   losedLifes : 0,
    losingLife(){
        lifeSystem.losedLifes++;
        lifeSystem.isLose(results.lose)
    },
    isLose(playerLose){
        if (lifeSystem.losedLifes === lifeSystem.lifes) playerLose();
    }
};

const results = {//results at end or middle of the game
    lose(){
        console.warn("YOU LOSE!");
        console.log(`The number is : ${randomNumber}`);
        process.exit(0);
    },
    greater(losingLife, toRepeat){
        console.log('Number is greater than the number entered');
        losingLife();
        toRepeat(comparingNumber);
    },
    lower(losingLife, toRepeat){
        console.log('Number is lower than the number entered');
        losingLife();
        toRepeat(comparingNumber);
    },
    win(lifes, lifesLosed){
        console.warn(`YOU WIN\nlive remaining: ${lifes - lifesLosed}`);
        process.exit(0);
    }
};

enterFromUser.enter(comparingNumber);
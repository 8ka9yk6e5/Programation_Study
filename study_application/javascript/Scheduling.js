//to make a function run in a certain time of wait

//setTimeout

//syntax - setTimeout(function, delay(ms), arguments);

function say(message) {console.log(message);}

setTimeout(say, 6000, 'Hi!');//for 6 seconds

//or

const time = 5000;

setTimeout((t) => {console.log(`time passed: ${t}`);}, time, time);

//to cancel a time event

//the setTimeOut return an ID to acess the timer
const timeID = setTimeout(() => {console.log("don't run");}, 3000);

clearTimeout(timeID);//cancel the action

console.log(timeID);//the id continue existing

//setInterval - repeat regularly the action

//same syntax as setTimeout

let count = 0

const ID = setInterval(() => {console.log(`repeat: ${count++}`);}, 1000);
//also had an ID

clearInterval(ID);//to stop it

//nested setTimeout - other way to repeat regularly an action - helping to set a precisely delay between the execution

let nTimeID = setTimeout(function repeat(){
    console.log(count++);
    nTimeID = setTimeout(repeat, 2000);
}, 2000);

//setInterval - count the execution time - run -> rest of time to next run -> run
//nested setTimeout - doesn't count the execution time - run -> time of pause -> run

//zero delay setTimeout

//especial case, run as soon possible, but wait the current execution end

setTimeout(()=>console.log("especial case"));

console.log('first');
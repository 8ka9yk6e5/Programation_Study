'use strict'

const process = require('node:process');

//syntax which allow to "catch" an error and solve it

//SYNTAX:
// try{<code block>} catch (<variable with the error, normally "err">) {<error handling>}

//example function

function substraction(a, b){ console.log(a - b) };

//example without error

try{
    substraction(3,2);
    substraction('4', 2);
}
catch(err){
    console.log(`is't a number - ${err}`);
}

console.log('\n')
//example with an error

try{
    substraction(Symbol(), 2);//only form to get an error
}
catch(err){
    console.log(`is't a number - ${err}`);
}


console.log('\n');
//the catch get an error object

try{ forceError }
catch (err){
    console.log("name - " + err.name);//to get the name of error
    console.log("message - " + err.message);//to get the message with detailed informations about error
    console.log("stack - " + err.stack);//to get the complete message of error
    //the err.stack work equals as err
}

console.log('\n');
//omit err

try{ error }
catch { console.log('resolved error')}//just handle the error without error message/informations

console.log('\n');

//throw command
//generates an error
//SYNTAX:
// throw <error object>;

//the error object it's created like that;
// new <build-in error>(<message>);
//which <build-in error> it's the err.name, and <message> it's err.message

const formulaECar = {
    wheels : 4,
    motor : "combustion"
};

try{
    if(formulaECar.motor == "eletric"){
        console.log("it's a real formula e car");
    }
    else{
        throw new Error('invalid motor for a formula e car');
    }
}
catch (err){
    console.log(`value error - ${err.message}`);
}

console.log('\n');
//multiple erros chance, is used rethrowing
//to it, is used instaceof to compare/see the type of error

try{
    throw new TypeError();
}
catch (err){
    if (err instanceof ReferenceError){
        console.log('ReferenceError');
    }
    else if (err instanceof TypeError){
        console.log("TypeError");
    }
    else if (err instanceof Error){
        console.log("somethig get error");
    }
}

console.log('\n');
//rethrowing example:

function test(){
    try{
        unexistedFunc();
    }
    catch(err){
        if(err instanceof SyntaxError){
            console.log('SyntaxError');
        }
        else{
            throw err;
        }
    }
}

try {test()}
catch(err){
    console.log(`other error - ${err.name}`);
}

console.log('\n');
//try ... catch ... finally
//finally it's a function which run in all cases

try{
    console.log('try');
    throw new Error();
}
catch{
    console.log('catch');
}
finally{
    console.log('finally');
}

console.log('\n');

try{console.log('try');}
catch(err) {console.log('catch');}
finally{console.log("finally");}

console.log('\n');
//global error
//when and fatal error occours, this is the form to handle it

process.on('uncaughtException', (error, origin) =>{
    console.log(`error - ${error}`);
    console.log(`origin - ${origin}`);
});

{throw new Error('direct error')};
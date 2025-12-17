'use strict'
//kinds of object properties

//GET - action wich happens when an propertye is called
//SET - action wich happens when an propertye is assigned

const exempleObj = {
    name : 'John',
    surname : 'Cena',

    get fullName(){return `${this.name} ${this.surname}\n`},
    //if an propertye only has a get, it can't be changed, and give an error if tried

    set fullName(value){
        [this.name, this.surname] = value.split(' ');
    }
}

console.log(exempleObj.fullName);

exempleObj.fullName = 'anonymous test';

console.log(exempleObj.fullName);

const otherObj = {
    _number : 0,
    get number() {return `${this._number}\n`;},
    set number(value) {if(isFinite(value)) this._number = Number(value);}
}

console.log(otherObj.number);

otherObj.number = 35;

console.log(otherObj.number);

//ACCESSOR DESCRIPTORS
//is add the get and set as a propertye from object
//an acessor can't has a value, either is a accessor, or is a propertye

const ageObj = {
    _age : 0
}

Object.defineProperty(ageObj, 'age', {
    get() {return `Your age is : ${this._age}\n`;},
    set(value) {if(isFinite(value)&&value>0) this._age=value;}
})

console.log(ageObj.age);

ageObj.age = 15;

console.log(ageObj.age);

//hiden values - using wrapper

const stepsObj = {
    get steps(){ return `Steps walked today : ${this._steps}\n`;},
    set steps(value) {
        if(isFinite(value) && value>0) this._steps = value
    }
}

console.log(stepsObj.steps);

stepsObj.steps = 1000;

console.log(stepsObj.steps);
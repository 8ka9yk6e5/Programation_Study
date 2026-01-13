//basic creation of a class

class MyCar{
    constructor(brand){
        this.brand = brand;
    }
    
    getCar(){
        console.log(`Brand : ${this.brand}`);
    }

    gas(){
        console.log('vroom vroom');
    }
}

const ferrari = new MyCar('Ferrari');

ferrari.getCar();
ferrari.gas();

//or can be assing to a variable
//and have your own inside name as Named Function Expressions 

const person = class User {
    myself(){console.log(User);}
};

new person().myself();

//or make an on-demand class

function createGameClass(game){
    return class{
        sayName(){
            console.log(game);
        }
    };
}

const undertale = createGameClass('undertale');

new undertale().sayName();

//the creation of get/set is equals as objects

class Sport {
    constructor(sport){
        this.sport = sport;
    }

    get sport(){
        return this._sport;
    }

    set sport(value){
        if(value.trim().length <= 0){
            console.log('too short');
            return
        } 
        this._sport = value;
    }
}

const motorsport = new Sport('motorsport');

console.log(motorsport.sport);

const nothing = new Sport('');


//class field is a way to add properties inside the class

class formula1Team {
    _team = 'Red Bull racing';//class field

    myFavoriteTeam(){
        console.log(this._team);
    }
}

new formula1Team().myFavoriteTeam();

//the 'this' value can be also losed in classes
//do don't lose, a form to save is using arrow functions

class raceStart{
    _start = 'starting race';
    start = () =>{console.log(this._start);}
}

const startRace = new raceStart();

setTimeout(startRace.start, 3000);
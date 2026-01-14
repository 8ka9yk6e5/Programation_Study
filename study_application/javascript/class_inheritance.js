//way to a class extends other

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    showInformations(){
        console.log(`brand : ${this.brand}\nmodel : ${this.model}`);
    }

    gas(){
        console.log('vroom vroom');
    }
}

let AMValkyrie = new Car('Aston Martin', 'valkyrie');

//the keyword 'extends' allows the inheritance of classes
//SYNTAX:
//class <children class> extends <parent class>{}

class Formula1Car extends Car{
    maxSpeed(kmh){
        console.log(`${this.model} can get a ${kmh} max speed`);
    }
}

//it's possible to overwrite the methods in children classes

class FormulaECar extends Car{
    gas(){
        console.log('vvvvvvvvvvvv');
    }
}

new Car().gas();
new FormulaECar().gas();//use the formulaE method, not the Car method 

//and, is also possible to overwrite and use the original method at same time
//arrow functions also don't has "super"
//to it us use the keyword "super", which has two types of use:
//"super" : to use the constructor of parent class
//"super.<method>" : to use a specific method from original class

class turboCar extends Car{
    gas(){
        super.gas();
        console.log('sutututu');
    }
}

new turboCar().gas();

//when a extended class has no constructor, the children autocreate an contructor to call the father class constructor
//which looks like this:
// constructor(...args){super(...args);}

//but have a form to add a owm constructor and add values in constructor
//to it, us need to add the super, to don't give an error in this(otherwise, the "this" isn't created)
//like

class Motor extends Car{
    constructor(brand, model, cilinder){
        super(brand, model);
        this.cilinder = this.cilinder;
    }
}

new Motor('ford', 'abc123', 6);

//and, can also possible to overwrite class fields

class EuropePerson{
    nacionality = 'Europe';
    showNacionality(){
        console.log(this.nacionality);
    }
}

class AsianPerson extends EuropePerson{
    constructor(){
        super();
        this.nacionality = 'Asian';//this is a little trick to overwrite the fields
    }
}

new EuropePerson().showNacionality();
new AsianPerson().showNacionality();


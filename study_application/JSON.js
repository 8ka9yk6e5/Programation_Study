//Way to transform a object in a string

//JSON.stringify - convert objects into JSON

const student = {
    name : 'Cibeli',
    grade : 'High school',
    course : ['Administration', 'English'],
    friends : {
        friend1 : 'Kelvin',
        friend2 : 'Marcela' 
    },
    //is ignored
    sayHi(){console.log('Hi');},//functions
    [Symbol('id')] : 'MyId',//symbols key
    otherThing : undefined//undefined values
};
//can't have circular references in object, otherwise gets an error 

const json = JSON.stringify(student);

console.log(`object: ${student} (type: ${typeof student})\nJSON: ${json} (type: ${typeof json})\n`);

//full syntax

const jsonFull = JSON.stringify(student, ['name', 'course']);
//second value is de selector, which only appear on json the values inside it(if had)
//and has a third value which works with space, but it's doesn't used

console.log(`gets this the full syntax: ${jsonFull}\n`);

//toJSON - make the json act in a speciffic form when called

const room = {
    number : 89,
    toJSON(){
        return this.number;
    }
};

const meetup = {
    title : 'conference',
    room
}

console.log(`room : ${JSON.stringify(room)}\nmeetup : ${JSON.stringify(meetup)}\n`);

//JSON.parse - convert a JSON into an object

//Syntax - JSON.parse(string, function); - the function is a thing which each value from string pass to chance them to the new object

const numbersStr = '[1, 2, 3, 4, 5]';
const objStr = '{ "name" : "cibeli", "course" : ["Administration", "English"]}'

console.log(`number array : ${JSON.parse(numbersStr)}\nobject : ${JSON.parse(objStr)}`);

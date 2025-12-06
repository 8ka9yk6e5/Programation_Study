//way to use a function like an object

//name property - give the name of the function

function sayHi(){ console.log('Hi'); }

console.log(`function name(normal creation): ${sayHi.name}`);

//can also acess from diferent forms

const say = function() { console.log('Hi'); };

const obj = { sayHi() { console.log('Hi'); }};

console.log(`function name(variable assign): ${say.name}\nfunction name(object method): ${obj.sayHi.name}\n`);

//length property - to show how much parameters had a function

const methods = {
    f1() {},
    f2(a) {},
    f3(a,b) {},
    f4(a,b,c){},
    f5(...a){}//rest parameters don't count
}

console.log(`parameters:\n${methods.f1.length}\n${methods.f2.length}\n${methods.f3.length}\n${methods.f4.length}\n${methods.f5.length}\n`);

//custom properties

function nameShow(name){
    console.log(name);

    nameShow.counter++
}

nameShow.counter = 0;

nameShow('Cibeli');
nameShow('Kayke');

console.log(`counter: ${nameShow.counter}\n`);

//can be with a high scope

function makeCounter(){

    function counter(){
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log('\n');

//named function expressions - a function expression with a name

const comply = function func(){ console.log('Good morning'); };
//allows to add an own reference inside
//it isn't visible outside of the function

comply();
//func() - don't work, and give an error
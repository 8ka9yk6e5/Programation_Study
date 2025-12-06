//for to transform any object to an iterable for for..of loop

//Symbol.iterator
const interval = {
    from : 0,
    to : 3
};

interval[Symbol.iterator] = function() {
    return {
        current : this.from,
        last : this.to,

        next(){
            if (this.current <= this.last) return {done : false, value : this.current++};
            else return {done : true};
        }
    };
};

for (i of interval) console.log(i);
console.log('\n\n');

//or

const range = { 
    from : 3,
    to : 6,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;//return your own instance
    },

    next(){
        if ( this.current <= this.to) return {done : false, value : this.current++};
        else return {done : true};
    }
};

for (r of range) console.log(r);

console.log('\n\n');

//string iterable

for (char of 'Test Text ') console.log(char);

for (char of 'Ot3r T3❌t ψ(｀∇´)ψ') console.log(char);

console.log('\n\n')

//explicity string iteration

let str = 'explicit iteration';

let itr = str[Symbol.iterator]();

while (true){
    let result = itr.next();
    if (result.done) break;
    console.log(result.value);
}

console.log('\n\n');

//array-like iterate

const arrayLike = { 
    0 : 'v1',
    1 : 'v2',
    2 : 'v3',
    length : 3
};

const array = Array.from(arrayLike);//create a copy of array-like object and transform to an array
//the command "Array.from" had a map, which can run functions, like:
const arrayWMap = Array.from(arrayLike, value => value + '.0');

for(ele of array) console.log(ele);

console.log('\n');

for(ele of arrayWMap) console.log(ele);
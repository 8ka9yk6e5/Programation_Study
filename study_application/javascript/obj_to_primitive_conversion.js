//Symbol.toPrimitive - to create a law of conversion

const user = {
    name : 'Cibeli',
    age : 14,
    [Symbol.toPrimitive](hint){
        return hint == 'string' ? this.name : this.age;
    }
}

console.log(`${user}`);
console.log(+user);
console.log(2 + user);
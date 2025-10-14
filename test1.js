let objectTest = {
    name : "test", 
    using : true, 
    numberId : 10,

    [Symbol.toPrimitive](hint){
        return hint == "string" ? `name:${this.name}` : this.numberId;
    }
};

console.log(String(objectTest));
//constructor - to automatically create an object

function CreateUser(name, age){
    this.name = name;
    this.age = age;
}

const joshUser = new CreateUser('Josh', 30);
const annUser = new CreateUser('Ann', 18);

console.log(joshUser);
console.log(annUser);

console.log('\n\n');
//new target - work only when is with new

function targetCUser(name){
    if(new.target){
        this.name = name;
    }
}

console.log(`with: ${new targetCUser('Cibeli')}\nwithout: ${targetCUser('Cibeli')}`);


//is the use of ?.
//is a safer way to acess an object, to don't had a acess object error
//exist -> value; don't exist -> undefined

const user1 = {};
const user2 = {
    name : null,
    street : 'mary-34',
};

console.log(`user1:\nname: ${user1?.name}\nstreet: ${user1?.street}\n`);
console.log(`user2:\nname: ${user2?.name}\nstreet; ${user2?.street}`);

//variants

//?.()

const user = {
    name: 'Cibeli',
    sayHi(){console.log('\nHi\n')},
};

user.sayHi?.();//to call functions which that may not exist

//?.[]

const acess = 'name';//to acess normally, but with other syntax

console.log(user?.[acess]);
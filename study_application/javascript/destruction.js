//syntax to unpack objects

//array destruction - works with any iterable

const arr = ['John', 'Cena'];

const [name, surname] = arr

console.log(`array:\nname: ${arr[0]}\nsurname: ${arr[1]}\ndestruction:\nname: ${name}\nsurname: ${surname}\n`);

//can be with strings

const [name1, surname1] = 'Ash Ketchum'.split(' ');

console.log(`name: ${name1}\nsurname: ${surname1}\n`);

//can ignore the values using comma

const [firstName, , lastName] = 'Max Emilian Verstappen'.split(' ');

console.log(`name: ${firstName}\nlast name: ${lastName}\n`);

//the rest

const names = ['John', 'Michael', 'Cibeli','Mike', 'James', 'Luke'];

const [name01, name02, importantName, ...otherNames] = names;//otherNames have now an array with the rest of names

console.log(`names:\n${name01}\n${name02}\n${importantName}\n${otherNames}\n`);

//can have default values

const [Name = 'Guest', SurName = 'Anonymous'] = [];//default values also can be functions

console.log(`name:${Name}\nsurname: ${SurName}\n`);

//Object destruction

const options = {
    title : 'title one',
    fullscreen : false,
    running : true,
    FPS : 60
};

const {title, FPS} = options;//the order does matter, the important is has the same name as object

//we also can add a diferently name at variables

const {fullscreen : fs, running : R} = options;

//and can also add default values - or both

const {timePlayed : tp = 1} = options;

console.log(`title: ${title}\nFPS: ${FPS}\nfullscreen: ${fs}\nrunning: ${R}\n`);

//also has the rest

const {fullscreen, ...rest} = options;

console.log(`fullscreen: ${fullscreen}\nrest: ${rest}\n`);

//nested destruction - to make a deeper destruction

const configuration = {
    screen : {
        fullscreen : false,
        resolution : 1440
    },
    games : ['DOOM', 'Minecraft'],
    playing : true
};

const {screen : {
    fullscreen : FS,
    resolution : rP = 128
},
games : [game1, game2 = 'not playing'],
playing : p = false,
hardLevel : hL = false
} = configuration

console.log(`${FS}\n${rP}\n${game1}\n${game2}\n${p}\n${hL}\n`);

//smart function parameters

function doSomething({name = 'Guest', age = 18, id, email : e = 'something@some.com'}){
    console.log(`name : ${name}\nage : ${age}\nid : ${id}\nemail : ${e}`);
}

const obj = {
    name : 'Cibeli',
    age : 17,
    id : 1001,
    email : 'Cibs@some.com'
}

doSomething(obj);
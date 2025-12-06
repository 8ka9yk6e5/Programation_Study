//for decorator and forwarding
//call/apply

//decorator - a memory saver, don't work with objects

function callNumber(number){
    console.log(`${number} is called`);
    return number;
}


/*
    decorator: form to pass a function, which cust much hardware, to safe them, and use any time without needing replay the function
     |
     |
     |
    \ /
*/ 
function callNumberDecorator(functionCallback, hash){//adaptative for both, with one, and two arguments
    let cache = new Map();

    return function(){
        const key = hash(arguments)
        if(cache.has(key)){
            return cache.get(key);
        }

        let result = functionCallback(...arguments);

        cache.set(key,result);

        return result
    }
}


// const showNum1 = callNumberDecorator(callNumber, hash);

// console.log(`With 3: ${showNum1(3)}`);
// console.log(`Again with 3: ${showNum1(3)}`);

// console.log(`With 2: ${showNum1(2)}`);
// console.log(`Again With 2: ${showNum1(2)}`);

//with objects

const work = {
    hours(){
        return 2;
    },
    hourCalculator(wHours){
        console.log(`hours worked: ${wHours}`);
        return wHours * this.hours();
    }
};

function workDecorator(context,funcCallback){
    let cache = new Map();

    return function(hours){
        if (cache.has(hours)){
            return cache.get(hours);
        }

        let result = funcCallback.call(context,hours);//call a function which is in a object, and had an "this"
        //call -> (firstArgument => context, othersArguments=> arguments)
        
        cache.set(hours, result);

        return result
    };
}

// const workHour = workDecorator(work ,work.hourCalculator);

// console.log(`With 3: ${workHour(3)}`);


//with more arguments

function callNumberW2Args(...num){
    console.log(`${num[0]} is called first`);
    console.log(`${num[1]} is called after`);
    console.log("the rest be ignored")
    return num[0] + num[1];
}
/*
    hash: key creator, for map
*/
function hash(args){
    return args[0] + ',' + args[1];
}

// const showNum2 = callNumberDecorator(callNumberW2Args, hash);

// console.log(`With 1 and 2: ${showNum2(1,2)}`);
// console.log(`Again with 1 and 2: ${showNum2(1,2)}`);
// console.log(`With 3 and 2: ${showNum2(3,2)}`);



//Apply

const music = {
    favoriteMusics(...musics){
        console.log(`musics:\n1-${musics[0]}\n2-${musics[1]}\n3-${musics[2]}\nrest be ignored`);
        return [musics[0],musics[1], musics[2]];
    }
}

function hashM(args){
    return args[0] + ',' + args[1] + ',' + args[3];
}

function musicDecorator(callback, hash, context){
    const cache = new Map();

    return function(){
        const key = hash(arguments);

        if(cache.has(key)){
            return cache.get(key);
        }

        const result = callback.apply(context, arguments);//same as "call", but, the the arguments can be iterables
        //same as "call(context, ...arguments);", both is the same

        cache.set(key, result);

        return result;
    }
}

// const showFavMusic = musicDecorator(music.favoriteMusics, hashM, music);

// console.log(showFavMusic("mus1", "mus2", 'mus3', 'mus4'));
// console.log(showFavMusic("mus1", "mus2", 'mus3', 'mus4'));
// console.log(showFavMusic("mus5", "mus6", 'mus7', 'mus8'));
// console.log(showFavMusic("mus5", "mus6", 'mus7', 'mus8'));

//method borrowing: an infinite hash, to any quantity of arguments

function multiHash(...args){
    return args.join();
}

const favoriteGames = {
    topThree(games){
        return `Top games:\n1-${games[0]}\n2-${games[1]}\n3-${games[2]}`
    }
}

function decoFavGames(context, callback, hash){
    const cache = new Map();

    return function(...games){  
        const key = hash(games);

        if (cache.has(key)) return cache.get(key);

        const result = callback.call(context, games);

        cache.set(key,result);

        return result;
    }
}

const showFavGame = decoFavGames(favoriteGames, favoriteGames.topThree, multiHash);

console.log(showFavGame("Game1", "Game2", "Game3"));
console.log(showFavGame("Game1", "Game2", "Game3"));
console.log(showFavGame("Game4", "Game5", "Game6"));
console.log(showFavGame("Game4", "Game5", "Game6"));
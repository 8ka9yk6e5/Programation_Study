const readline = require("readline");

const importantInfoGet = {
    whichIs(callback) {//to control what user want to make
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });

        rl.question("What do you want to do?\n1-Encode text\n2-Decode text\n", (userEnter =>{
            rl.close();
            if(!isNaN(userEnter)){//to verify if it's a real number
                switch (Number(userEnter)){
                    case 1:
                        this.getTextCodeficate((userText) => codificatingText.codificating(userText));
                        break;
                    case 2:
                        this.getTextDecodeficate((userText) => decodificatingText.decodificating(userText));
                        break;
                    default:
                        console.log("ERROR - out of range");
                        break;
                }
            }
            else console.log("ERROR - not a allowed value (number)");
        }))
    },

    getTextDecodeficate(callback){//to user enter the code to decotificate it
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });

        rl.question("(only allowed code in app style - NN NN)\nEnter the code:\n", (userEnter) => {
            rl.close();
            const userEnterArray = userEnter.split(" ");
            callback(userEnterArray);
        });
    },

    getTextCodeficate(callback) {//to user enter the text to codificate it
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });

        rl.question("Enter the text to codificate them:\n", (userEnter) => {
            rl.close();
            callback(userEnter);
        });
    }
};


const codificatingText = {//object with the form to codificate
    codificate : [],//text codificate
    codeInStringForm : "",//codefication to show
    codificating(text){
        for(let i = 0; i < text.length; i++){//to pass all character and transform each in a codification
            let code = text.codePointAt(i).toString();//transform the specificy character in a code
            this.codificate.push(code * 0.5);//to get more codificate, get half of them
        }
        this.codeInStringForm = this.codificate.join(' ');//join to a string with all codes
        showText.showCodefication(this.codeInStringForm);
    }
};

const decodificatingText= {//make the decotification
    decodificate : "",
    normalCode : [],
    textFromCode : [],
    decodificating(code){//bug at this part
        this.normalCode = code.map(item => item * 2);//transform the half code to complete code
        this.textFromCode = this.normalCode.map(item => String.fromCodePoint(item));//transform the code in the array to a array with the lettera
        this.decodificate = this.textFromCode.join("");//transform the array with letters in a text
        showText.showDecodification(this.decodificate);
    }
};

const showText = {//to show the result
    showCodefication(textCode){//for codification
        console.log(`codificate text:\n${textCode}`);
    },
    showDecodification(text){//for decotification
        console.log(`decodificate text:\n${text}`);
    }
};

importantInfoGet.whichIs();//to start the code
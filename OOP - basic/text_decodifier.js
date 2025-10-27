const readline = require("readline");

const importantInfoGet = {
    whichIs(callback) {
        const rl = readline.createinterface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("What do you want to do?\n1-Encode text\n2-Decode text\n", (userEnter =>{
            rl.close();
            switch (userEnter){
                case 1:
                    this.getTextCodeficate((userText) => codificatingText.codificating(userText));
                    break;
                case 2:
                    this.getTextDecodeficate((userText) => decodificatingText.decodificating(userText));
                    break;
                default:
                    console.log("ERROR - out of range")
                    break;
            }
        }))
    },

    getTextDecodeficate(callback){

    },

    getTextCodeficate(callback) {//function to user enter the text
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("Enter the text to codificate them:\n", (userEnter) => {
            rl.close();
            callback(userEnter);
        })
    }
}


const codificatingText = {//object with the form to codificate
    codificate : [],//text codificate
    roundCodificate : [],
    codeInStringForm : "",//codefication to show
    codificating(text){
        for(let i = 0; i < text.length; i++){//to pass all character and transform each in a codification
            let code = text.codePointAt(i).toString();//transform the specificy character in a code
            this.codificate.push(code * 0.5);//to get more codificate, get half of them
        }
        this.roundCodificate = this.codificate.map(item => Math.round(item));//round codificate transform the float values into a normal number
        this.codeInStringForm = this.roundCodificate.join(' ');//join to a string with all codes
        showText.showCodefication(this.codeInStringForm);
    }
}

const decodificatingText= {
    decodificate : "",
    normalCode : [],
    decodificating(code){
        this.normalCode = code.map(item => item * 2);
        this.decodificate = this.normalCode.map(item => String.fromCodePoint(item)).toString();
    }
}

const showText = {
    showCodefication(textCode){
        console.log(`codificate text:\n${textCode}`)
    }
}

getText((userText) => codificatingText.codificating(userText));//test
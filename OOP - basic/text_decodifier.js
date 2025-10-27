const readline = require("readline");

function getText(callback) {//function to user enter the text
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })

    rl.question("Enter the text to codificate them:\n", (userEnter) => {
        rl.close();
        callback(userEnter);
    })
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
        decodificatingText.decodificating(this.codificate);
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
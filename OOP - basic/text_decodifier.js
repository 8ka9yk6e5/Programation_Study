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
    codeInStringForm : "",//codefication to show
    roundCodificate : [],
    codificating(text){
        for(let i = 0; i < text.length; i++){//to pass all character and transform each in a codification
            let code = text.codePointAt(i).toString();//transform the specificy character in a code
            this.codificate.push(code * 0.5);//to get more codificate, get half of them
        }
        this.roundCodificate = this.codificate.map(item => Math.round(item));//round codificate transform the float values into a normal number
        this.codeInStringForm = this.roundCodificate.join(' ');//join to a string with all codes
        showText.show(this.codeInStringForm);
    }
}

const showText = {
    show(textCode){
        console.log(`codificate text:\n${textCode}`)
    }
}

getText((userText) => codificatingText.codificating(userText));//test
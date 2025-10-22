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
    codificating(text){
        for(let i = 0; i < text.length; i++){//to pass all character and transform each in a codification
            let code = text.codePointAt(i).toString();//transform the specificy character in a code
            this.codificate.push(code * 0.5);//to get more codificate, get half of them
        }
        const roundCodificate = this.codificate.forEach(item => Math.round(item));//round each value to show
        this.codeInStringForm = roundCodificate.join(' ');//join to a string with all codes
    }
}

getText((userEnterText) => codificatingText.codificating(userEnterText));//test
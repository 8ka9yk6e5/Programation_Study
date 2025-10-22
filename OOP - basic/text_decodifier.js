const readline = require("readline");

function getText(callback) {
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })

    rl.question("Enter the text to codificate them:\n", (userEnter) => {
        rl.close();
        callback(userEnter);
    })
}

const codificatingText = {
    codificate : [],
    roundCodificate : [],
    codeInStringForm : "",
    codificating(text){
        for(let i = 0; i < text.length; i++){
            let code = text.codePointAt(i).toString();
            this.codificate.push(code * 0.5);
        }
        this.roundCodificate = this.codificate.forEach(item => Math.round(item));
        this.codeInStringForm = this.roundCodificate.join(' ');
        console.log(this.codeInStringForm);
    }
}

getText((userEnterText) => codificatingText.codificating(userEnterText));
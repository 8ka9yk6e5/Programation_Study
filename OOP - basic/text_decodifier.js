const readline = require("readline");

const gettingText = {
    text : null,
    getText() {
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("Enter the text to codificate them:\n", (userEnter) =>{
            this.text = userEnter;
            rl.close();
        })
    }
}
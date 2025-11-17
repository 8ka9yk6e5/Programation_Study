const question1 = 'What is the principal command to fluxe control in programming?', question2 = 'Which language is most fluent in world?', question3 = 'which is the name from the cube game, from mojang?', question4 = 'Which motorsport is more fluent in world?';
const answer1 = 'if', answer2 = 'english', answer3 = 'minecraft', answer4 = 'formula 1';
let points = 0, userResponse;

console.warn(question1);

userResponse = 'if';

if (userResponse == answer1){
    console.log("\nCorrect\n");
    console.log(++points, "\n");
}
else{
    console.error("\nIncorrect response\n");
}

console.warn(question2);
userResponse = 'english';

if (userResponse == answer2){
    console.log("\nCorrect\n");
    console.log(++points, "\n");
}
else{
    console.error("\nIncorrect response\n");
}

console.warn(question3);
userResponse = 'minecraft';

if (userResponse == answer3){
    console.log("\nCorrect\n");
    console.log(++points, "\n");
}
else{
    console.error("\nIncorrect response\n");
}

console.warn(question4);
userResponse = 'formula 1';

if (userResponse == answer4){
    console.log("\nCorrect\n");
    console.log(++points, "\n");
}
else{
    console.error("\nIncorrect response\n");
}

console.log(`points: ${points}`);
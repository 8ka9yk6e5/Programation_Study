let result;

groups : for(let leftFactor = 1; leftFactor <= 10; leftFactor++){
    console.group(`${leftFactor} multiples`);
    multiplesOf : for(let rightFactor = 1; rightFactor <= 10; rightFactor++){
        result = leftFactor * rightFactor;
        console.log(`${leftFactor} * ${rightFactor} = ${result}`);
    }
    console.groupEnd();
}
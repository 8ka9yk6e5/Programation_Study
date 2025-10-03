function sum(a, b){return a + b}
function subtraction(a,b){return a - b}
function multiplication(a,b){return a * b}
function division(a,b){return a / b}
function pow(a,b){return a ** b}
function remaining(a,b){return a % b}
function percent(a, b){return (a * b)}//b is the percentage
function root(a,b){return a ** (1/b)}//b defines which root is
function round(num){return Number(num.toFixed(2))}

function calculationTransfer(num1 = 0, num2 = 0, type){
    let result = type(num1, num2);
    result = needToRound(result);
    return result;
}

let needToRound = function(num){
    if (String(num).includes('.')) return round(num);
    return num;
}

let definedNum1, definedNum2;
let result, calculationType;

definedNum1 = 10;
definedNum2 = 2;
calculationType = sum;
calculationTypeString = "sum";



result = calculationTransfer(definedNum1, definedNum2, calculationType);

console.log(`Number 1 = ${definedNum1}\nNumber 2 = ${definedNum2}\nCalculation type = ${calculationTypeString}`);
let percentNecessary = (calculationTypeString === "percent") ? String(result)+"%" : null;
console.warn(`Result = ${(percentNecessary) ? percentNecessary : result}`);
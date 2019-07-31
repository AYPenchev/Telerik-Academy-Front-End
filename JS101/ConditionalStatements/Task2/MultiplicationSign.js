function MultiplicationSign() {
    let firstNum = window.prompt("Enter first number:", "Number"),
        secondNum = window.prompt("Enter second number:", "Number"),
        thirdNum = window.prompt("Enter third number:", "Number"),
        howManyPositive = 0;

    if (firstNum > 0) {
        howManyPositive++;
    }
    if (secondNum > 0) {
        howManyPositive++;
    }
    if (thirdNum > 0) {
        howManyPositive++;
    }

    if (firstNum == 0 || secondNum == 0 || thirdNum == 0) {
        console.log(0);
    } else if (howManyPositive == 2 || howManyPositive == 0) {
        console.log("-");
    } else {
        console.log("+");
    }
}

MultiplicationSign();
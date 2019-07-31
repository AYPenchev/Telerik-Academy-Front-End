function TheBiggestOfFive() {
    let firstNum = parseFloat(window.prompt("Enter first number:", "Number")),
        secondNum = parseFloat(window.prompt("Enter second number:", "Number")),
        thirdNum = parseFloat(window.prompt("Enter third number:", "Number")),
        fourthNum = parseFloat(window.prompt("Enter fourth number:", "Number")),
        fifthNum = parseFloat(window.prompt("Enter fifth number:", "Number")),
        maxNumber;

    if (firstNum > secondNum) {
        maxNumber = firstNum;
    } else {
        maxNumber = secondNum;
    }

    if (thirdNum > maxNumber) {
        maxNumber = thirdNum;
    }

    if (fourthNum > maxNumber) {
        maxNumber = fourthNum;
    }

    if (fifthNum > maxNumber) {
        maxNumber = fifthNum;
    }
    console.log(maxNumber);
}

TheBiggestOfFive();
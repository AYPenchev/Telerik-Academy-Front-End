function TheBiggestOfThree() {
    let firstNum = window.prompt("Enter first number:", "Number"),
        secondNum = window.prompt("Enter second number:", "Number"),
        thirdNum = window.prompt("Enter third number:", "Number");

    if (firstNum > secondNum) {
        if (firstNum > thirdNum) {
            console.log(firstNum);
        } else {
            console.log(thirdNum);
        }
    } else {
        if (secondNum > thirdNum) {
            console.log(secondNum);
        } else {
            console.log(thirdNum);
        }
    }
}

TheBiggestOfThree();
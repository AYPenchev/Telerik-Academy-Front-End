function SortThreeNumbers() {
    let firstNum = window.prompt("Enter first number:", "Number"),
        secondNum = window.prompt("Enter second number:", "Number"),
        thirdNum = window.prompt("Enter third number:", "Number");

    if (firstNum > secondNum) {
        if (firstNum > thirdNum) {
            if (secondNum > thirdNum) {
                console.log(firstNum + " " + secondNum + " " + thirdNum);
            } else {
                console.log(firstNum + " " + thirdNum + " " + secondNum);
            }
        } else {
            console.log(thirdNum + " " + firstNum + " " + secondNum);
        }
    } else {
        if (secondNum > thirdNum) {
            if (thirdNum > firstNum) {
                console.log(secondNum + " " + thirdNum + " " + firstNum);
            } else {
                console.log(secondNum + " " + firstNum + " " + thirdNum);
            }
        } else {
            console.log(thirdNum + " " + secondNum + " " + firstNum);
        }
    }
}

SortThreeNumbers();
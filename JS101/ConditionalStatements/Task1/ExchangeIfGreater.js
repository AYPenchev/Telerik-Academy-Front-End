function ExchangeIfGreater() {
    let firstNum = window.prompt("Enter first number:", "Number");
    let secondNum = window.prompt("Enter second number:", "Number");
    if (firstNum > secondNum) {
        console.log(secondNum + " " + firstNum);
    } else {
        console.log(firstNum + " " + secondNum);
    }
}

ExchangeIfGreater();
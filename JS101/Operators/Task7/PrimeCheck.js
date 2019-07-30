function IsPrime(number) {
    if (number <= 0) {
        return false;
    }

    if (number == 1) {
        return false;
    }
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

let firstNumber = 2;
console.log(IsPrime(firstNumber));

let secondNumber = 23;
console.log(IsPrime(secondNumber));

let thirdNumber = -3;
console.log(IsPrime(thirdNumber));
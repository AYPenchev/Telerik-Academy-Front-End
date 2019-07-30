function ThirdDigit(number) {
    let NumOnThirdPosition = number.toString()[2];
    if (+NumOnThirdPosition === 7) {
        console.log(`True`);
    } else {
        console.log(`false: ${NumOnThirdPosition}`)
    }
}

let num = 1274;
ThirdDigit(num);

let otherNum = 1234;
ThirdDigit(otherNum);
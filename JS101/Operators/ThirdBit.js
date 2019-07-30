function ThirdBit(number) {
    if ((number & 8).toString(2) === '1000'.toString(2)) {
        console.log(1)
    } else {
        console.log(0);
    }
}
let firstNum = 1650;
ThirdBit(firstNum);

let secondNum = 10;
ThirdBit(secondNum);

let thirdNum = 3720;
ThirdBit(thirdNum);
'use strict'

function getMax(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

function getLargestNumberOf3() {
    let numbers = window.prompt('Enter three numbers:', 'Three numbers with space between!').split(' '),
        x = parseInt(numbers[0]),
        y = parseInt(numbers[1]),
        z = parseInt(numbers[2]),
        currentMaxOfXandY = getMax(x, y);

    return getMax(currentMaxOfXandY, z);
}

console.log(getLargestNumberOf3());
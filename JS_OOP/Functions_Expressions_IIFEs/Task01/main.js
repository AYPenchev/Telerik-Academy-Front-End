'use strict'

function sum() {
    let sum = 0;

    if (arguments[0] === undefined) {
        throw 'Parameter is not passed (undefined)!';
    }

    if (arguments[0] && arguments[0].constructor === Array && arguments[0].length === 0) {
        return null;
    }

    for (let number of arguments[0]) {
        number = parseInt(number);
        if (isNaN(number)) {
            throw 'Element is not convertible to Number!';
        }

        sum += number;
    }
    return sum;
}

try {
    console.log(sum([1, '2', "3p", 4]));
} catch (e) {
    console.log(e);
}
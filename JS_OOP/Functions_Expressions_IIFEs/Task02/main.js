'use strict'

function primeNumbersInRange() {
    if (arguments[0] === undefined || arguments[1] === undefined) {
        throw 'The range params is missing!';
    }

    let startNumber = parseInt(arguments[0]);;
    let endNumber = parseInt(arguments[1]);
    if (isNaN(startNumber) || isNaN(endNumber)) {
        throw 'The range params is not convertible to Number!';
    }

    if (startNumber === 1) {
        startNumber = 2;
    }

    let prime = [];

    for (let i = startNumber; i < endNumber + 1; i++) {
        prime[i] = true;
    }

    for (let p = startNumber; p * p < endNumber; p++) {
        if (prime[p] === true) {
            for (let i = p * p; i <= endNumber; i += p) {
                prime[i] = false;
            }
        }
    }

    for (let i = startNumber; i <= endNumber; i++) {
        if (prime[i] === true) {
            console.log(i);
        }
    }
}

try {
    primeNumbersInRange(1, 100);
} catch (e) {
    console.log(e);
}
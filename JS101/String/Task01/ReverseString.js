'use strict'

function reverseString() {
    let stringToBeReversed = 'string',
        reversedString = '';
    for (let i = stringToBeReversed.length - 1; i >= 0; i--) {
        reversedString += stringToBeReversed[i];
    }

    console.log(reversedString);
}

reverseString();
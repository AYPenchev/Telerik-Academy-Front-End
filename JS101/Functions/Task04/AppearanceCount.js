'use strict'

function appearanceCount() {
    let appearanceArray = [],
        newNumber,
        counterOfSearchedNum = 0,
        appearanceArrayLen = parseInt(window.prompt("Enter array size: ")),
        searchedNum = parseInt(window.prompt('Enter searched number: '));

    for (let i = 0; i < appearanceArrayLen; i++) {
        newNumber = parseInt(window.prompt('Enter element', 'One number representing an element'));
        appearanceArray.push(newNumber);
    }

    for (const number of appearanceArray) {
        if (number === searchedNum) {
            counterOfSearchedNum++;
        }
    }

    console.log(counterOfSearchedNum);
}

appearanceCount();
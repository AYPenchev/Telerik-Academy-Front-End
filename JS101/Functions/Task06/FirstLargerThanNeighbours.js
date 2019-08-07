'use strict'

function firstLargerThanNeighbours() {
    let largerThanNeighbourArray = [],
        newNumber,
        largerThanNeighbourArrayLen = parseInt(window.prompt("Enter array size: "));

    for (let i = 0; i < largerThanNeighbourArrayLen; i++) {
        newNumber = parseInt(window.prompt('Enter element', 'One number representing an element'));
        largerThanNeighbourArray.push(newNumber);
    }

    for (let i = 0; i < largerThanNeighbourArrayLen; i++) {
        if (i != 0 && i != largerThanNeighbourArrayLen - 1) {
            if (largerThanNeighbourArray[i] > largerThanNeighbourArray[i - 1] && largerThanNeighbourArray[i] > largerThanNeighbourArray[i + 1]) {
                return i;
            }
        }
    }
    return -1;
}

console.log(firstLargerThanNeighbours());
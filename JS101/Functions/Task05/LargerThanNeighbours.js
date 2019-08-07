'use strict'

function largerThanNeighbours() {
    let countLargerThanNeighbours = 0,
        largerThanNeighbourArray = [],
        newNumber,
        largerThanNeighbourArrayLen = parseInt(window.prompt("Enter array size: "));

    for (let i = 0; i < largerThanNeighbourArrayLen; i++) {
        newNumber = parseInt(window.prompt('Enter element', 'One number representing an element'));
        largerThanNeighbourArray.push(newNumber);
    }

    for (let i = 0; i < largerThanNeighbourArrayLen; i++) {
        if (i != 0 && i != largerThanNeighbourArrayLen - 1) {
            if (largerThanNeighbourArray[i] > largerThanNeighbourArray[i - 1] && largerThanNeighbourArray[i] > largerThanNeighbourArray[i + 1]) {
                countLargerThanNeighbours++;
            }
        }
        // Check if first and last numbers are larger than their only neighbour
        else if (i == 0) {
            if (largerThanNeighbourArray[i] > largerThanNeighbourArray[i + 1]) {
                countLargerThanNeighbours++;
            }
        } else if (i == largerThanNeighbourArrayLen - 1) {
            if (largerThanNeighbourArray[i] > largerThanNeighbourArray[i - 1]) {
                countLargerThanNeighbours++;
            }
        }

    }
    return countLargerThanNeighbours;
}

console.log(largerThanNeighbours());
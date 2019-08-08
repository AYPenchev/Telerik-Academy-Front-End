'use strict'

function findSumInArray() {
    let arraySum = 0,
        startInx = null,
        endInx = null,
        givenSum = parseInt(window.prompt("Enter Sum: ")),
        findSumArrayLen = parseInt(window.prompt("Enter array size: ")),
        findSumArray = [],
        newNumber,
        sumElements = [];

    for (let i = 0; i < findSumArrayLen; i++) {
        newNumber = parseInt(window.prompt('Enter element', 'One number representing an element'));
        findSumArray.push(newNumber);
    }

    for (let i = 0; i < findSumArrayLen; i++) {
        arraySum = 0;

        for (let j = i; j < findSumArrayLen; j++) {
            arraySum += findSumArray[j];
            if (arraySum === givenSum) {
                startInx = i;
                endInx = j + 1;
                i = findSumArrayLen;
                break;
            }
        }
    }

    if (startInx !== null && endInx !== null) {
        for (let i = startInx; i < endInx; i++) {
            sumElements.push(findSumArray[i]);
        }

        console.log(`Elements - ${sumElements.join('+')} Sum = ${givenSum} YES`);
    } else {
        console.log("Sum not found!");
    }
}

findSumInArray();
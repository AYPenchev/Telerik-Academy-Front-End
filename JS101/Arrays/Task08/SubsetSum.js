'use strict'

function MainFunc() {
    let subsetArray = [],
        newNumber,
        subsetArrayLen = parseInt(window.prompt("Enter array size: ")),
        sum = parseInt(window.prompt('Enter sum: '));

    for (let i = 0; i < subsetArrayLen; i++) {
        newNumber = parseInt(window.prompt('Enter element', 'One number representing an element'));
        subsetArray.push(newNumber);
    }

    console.log(SubsetWithSumS(subsetArray, sum, subsetArray.length) ? "Yes" : "No");
}

function SubsetWithSumS(subsetArray, sum, counter) {
    if (sum === 0) {
        return true;
    }

    if (counter === 0 && sum !== 0) {
        return false;
    }

    if (subsetArray[counter - 1] > sum) {
        return SubsetWithSumS(subsetArray, sum, counter - 1);
    } else {
        return SubsetWithSumS(subsetArray, sum, counter - 1) ||
            SubsetWithSumS(subsetArray, sum - subsetArray[counter - 1], counter - 1);
    }
}

MainFunc();
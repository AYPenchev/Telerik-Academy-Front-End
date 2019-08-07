'use strict'

function sortingArray() {
    let arrayToBeSorted = [],
        newNumber,
        arrayToBeSortedLen = parseInt(window.prompt("Enter array size: "));

    for (let i = 0; i < arrayToBeSortedLen; i++) {
        newNumber = parseInt(window.prompt('Enter element', 'One number representing an element'));
        arrayToBeSorted.push(newNumber);
    }

    quickSort(arrayToBeSorted, 0, arrayToBeSortedLen - 1);

    printArray(arrayToBeSorted);
}

function maxElementFromArray(arrayToBeSorted, startingIndex /* = 0*/ , endIndex /* = arrayToBeSorted.Length*/ ) {
    //arrayToBeSorted.Max();
    let maximalElement = Number.MIN_SAFE_INTEGER;

    for (let i = startingIndex; i < endIndex; i++) {
        if (arrayToBeSorted[i] > maximalElement) {
            maximalElement = arrayToBeSorted[i];
        }
    }
    return maximalElement;
}

function getIndex(array, numIdxSeeked) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == numIdxSeeked) {
            return i;
        }
    }
    return -1;
}

function partition(arr, low, high) {
    let pivot = maxElementFromArray(arr, low, high + 1),
        pivotIdx = getIndex(arr, pivot);

    let i = (low - 1);
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;

            let swapElement = arr[i];
            arr[i] = arr[j];
            arr[j] = swapElement;
        }
    }

    let swapElement2 = arr[i + 1];
    arr[i + 1] = arr[pivotIdx];
    arr[pivotIdx] = swapElement2;

    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
    }
}

function printArray(array) {
    let arraySorted = [];
    for (let i = 0; i < array.length; i++) {
        arraySorted.push(array[i]);
    }

    console.log(arraySorted.join(', '));
}

sortingArray();
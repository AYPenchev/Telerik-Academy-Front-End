'use strict'

function BinarySearchMain() {
    let binarySearchArray = [],
        arrayLength = window.prompt('Enter number of elements in the array', 'One number representing the length of an array'),
        newNumber,
        searchedNumber,
        result;

    for (let i = 0; i < arrayLength; i++) {
        newNumber = window.prompt('Enter element', 'One number representing an element');
        binarySearchArray.push(newNumber);
    }

    searchedNumber = window.prompt('Enter number which index should be found');

    result = BinarySearch(binarySearchArray, 0, binarySearchArray.length - 1, searchedNumber);

    if (result === -1) {
        console.log("Element not present");
    } else {
        for (let i = result; i >= 1; i--) {
            if (binarySearchArray[i] === binarySearchArray[i - 1]) {
                result = i - 1;
            }
        }
        console.log("Element found at index " + result);
    }
}

function BinarySearch(arr, left, right, searchedNum) {
    if (right >= left) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === searchedNum) {
            return mid;
        }

        if (arr[mid] > searchedNum) {
            return BinarySearch(arr, left, mid - 1, searchedNum);
        }
        return BinarySearch(arr, mid + 1, right, searchedNum);
    }
    return -1;
}

BinarySearchMain();
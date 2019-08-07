'use strict'

function mainFunc() {
    let n = parseInt(window.prompt('Enter N number:')),
        permutationArray = [];
    for (let i = 0; i < n; i++) {
        permutationArray[i] = i + 1;
    }
    PermutationsOfSet(permutationArray, 0, n - 1);
}

function PermutationsOfSet(permutationArray, l, r) {
    let rowPermutation = [];

    if (l == r) {
        for (let i = 0; i < permutationArray.length; i++) {
            rowPermutation.push(permutationArray[i]);
        }
        console.log(rowPermutation.join(','));
    } else {
        for (let i = l; i <= r; i++) {
            permutationArray = SwapArr(permutationArray, l, i);
            PermutationsOfSet(permutationArray, l + 1, r);
            permutationArray = SwapArr(permutationArray, l, i);
        }
    }
}

function SwapArr(arrayElementSwap, i, j) {
    let swapInt = arrayElementSwap[i];
    arrayElementSwap[i] = arrayElementSwap[j];
    arrayElementSwap[j] = swapInt;

    return arrayElementSwap;
}

mainFunc();
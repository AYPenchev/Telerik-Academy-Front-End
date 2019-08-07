function selectionSort() {
    let arrayToBeSorted = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'],
        currentMinNumber = Number.MAX_SAFE_INTEGER,
        currentMinNumberIndex = -1,
        helperSwapArrayElements;

    for (let i = 0; i < arrayToBeSorted.length; i++) {
        for (let j = i; j < arrayToBeSorted.length; j++) {
            if (arrayToBeSorted[j] <= currentMinNumber) {
                currentMinNumber = arrayToBeSorted[j];
                currentMinNumberIndex = j;
            }
        }
        helperSwapArrayElements = arrayToBeSorted[i];
        arrayToBeSorted[i] = currentMinNumber;
        arrayToBeSorted[currentMinNumberIndex] = helperSwapArrayElements;
        currentMinNumber = Number.MAX_SAFE_INTEGER
    }

    for (let i = 0; i < arrayToBeSorted.length; i++) {
        console.log(arrayToBeSorted[i]);
    }
}

selectionSort();
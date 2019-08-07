function FrequentNumber() {
    let arrayToBeSorted = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'],
        currentCounter = 0,
        numberBeingCount,
        maxCount = 0,
        numberWithMaxCount;

    for (let i = 0; i < arrayToBeSorted.length; i++) {
        currentCounter = 0;
        numberBeingCount = arrayToBeSorted[i];
        for (let j = i; j < arrayToBeSorted.length; j++) {
            if (arrayToBeSorted[j] === numberBeingCount) {
                currentCounter++;
            }
        }
        if (maxCount <= currentCounter) {
            maxCount = currentCounter;
            numberWithMaxCount = numberBeingCount;
        }
    }
    console.log(`${numberWithMaxCount} (${maxCount} times)`)
}

FrequentNumber();
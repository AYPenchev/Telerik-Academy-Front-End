function MaxIncreasingSequence() {
    let sequence = ['8', '7', '3', '2', '3', '4', '2', '2', '4'],
        counterIncreasingMaxSequence = 1,
        maxIncreasingSequenceCount = 1;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i - 1] <= sequence[i]) {
            counterIncreasingMaxSequence++;
            if (maxIncreasingSequenceCount < counterIncreasingMaxSequence) {
                maxIncreasingSequenceCount = counterIncreasingMaxSequence;
            }
        } else {
            counterIncreasingMaxSequence = 1;
        }
    }
    return maxIncreasingSequenceCount;
}

console.log(MaxIncreasingSequence());
function MaxSequence() {
    let sequence = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'],
        counterMaxSequence = 1,
        maxSequenceCount = 1;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i - 1] === sequence[i]) {
            counterMaxSequence++;
            if (maxSequenceCount < counterMaxSequence) {
                maxSequenceCount = counterMaxSequence;
            }
        } else {
            counterMaxSequence = 1;
        }
    }
    return maxSequenceCount;
}

console.log(MaxSequence());
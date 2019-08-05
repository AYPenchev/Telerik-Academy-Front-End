function AllocateArray() {
    let n = window.prompt('Enter number of integers for the array', 'Number:');
    allocateArray = [];
    for (let i = 1; i < parseInt(n); i++) {
        allocateArray[i - 1] = i;
        console.log(allocateArray[i] * n);
    }
}
AllocateArray();
function AllocateArray() {
    let n = parseInt(window.prompt('Enter number of integers for the array', 'Number:'));
    allocateArray = new Array(n);
    for (let i = 0; i < n; i++) {
        allocateArray[i] = i;
        console.log(allocateArray[i] * n);
    }
}

AllocateArray();
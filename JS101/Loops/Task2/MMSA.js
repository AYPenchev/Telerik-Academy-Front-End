function MMSA() {
    let sum = 0,
        min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER,
        avg,
        n = window.prompt('Enter n:', 'Number:');

    for (let i = 0; i < n; i++) {
        let currentNum = parseFloat(window.prompt(`Enter number ${i+1}:`, 'Number:'));
        if (currentNum > max) {
            max = currentNum;
        }
        if (currentNum < min) {
            min = currentNum;
        }
        sum += currentNum;
    }
    avg = sum / n;

    console.log("min = " + min.toFixed(2));
    console.log("max = " + max.toFixed(2));
    console.log("sum = " + sum.toFixed(2));
    console.log("avg = " + avg.toFixed(2));
}

MMSA();
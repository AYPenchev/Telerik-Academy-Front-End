function MatrixOfNumbers() {
    let n = window.prompt('Enter n:'),
        k = n;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= k; j++) {
            console.error(`${j}` + ` `);
        }
        console.log();
        k++;
    }
}

MatrixOfNumbers();
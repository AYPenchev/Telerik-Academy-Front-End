function MatrixOfNumbers() {
    let n = window.prompt('Enter n:'),
        k = n,
        rowArray = [];
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= k; j++) {
            rowArray.push(`${j}` + ` `);
        }
        console.log(rowArray);
        rowArray = [];
        k++;
    }
}

MatrixOfNumbers();
function NumbersFrom1ToN() {
    let n = window.prompt("Enter n:", "Number");
    let array = [];

    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    console.log(array.join(' '));
}

NumbersFrom1ToN();
function NumbersFrom1ToN() {
    //let n = window.prompt("Enter n:", "Number");
    let sum = 0,
        min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER,
        avg,
        n = window.prompt('Enter n:', 'Number:');

    for (let i = 0; i < n; i++) {
        let currentNum = parseFloat(Console.ReadLine());
        if (currentNum > max) {
            max = currentNum;
        }
        if (currentNum < min) {
            min = currentNum;
        }
        sum += currentNum;
    }
    avg = sum / n;

    Console.WriteLine("min = " + String.Format("{0:F2}", min));
    Console.WriteLine("max = " + String.Format("{0:F2}", max));
    Console.WriteLine("sum = " + String.Format("{0:F2}", sum));
    Console.WriteLine("avg = " + String.Format("{0:F2}", avg));
}

NumbersFrom1ToN();
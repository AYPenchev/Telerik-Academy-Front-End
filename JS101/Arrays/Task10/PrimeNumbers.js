'use strict'

function PrimeNumber() {
    let n = parseInt(window.prompt('Enter n:')),
        prime = [];

    for (let i = 0; i < n + 1; i++) {
        prime[i] = true;
    }

    for (let p = 2; p * p < n; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    for (let i = n; i >= 2; i--) {
        if (prime[i] == true) {
            console.log(i);
            break;
        }
    }

}

PrimeNumber();
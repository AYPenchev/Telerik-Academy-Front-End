'use strict'

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

function correctBrackets(expression) {
    let allBrackets = new Queue(),
        countLeftBrackets = 0,
        countRightBrackets = 0;

    for (const symbol of expression) {
        if (symbol === '(') {
            allBrackets.enqueue(symbol);
            countLeftBrackets++;
        } else if (symbol === ')') {
            allBrackets.enqueue(symbol);
            countRightBrackets++;
        }
    }

    if (countLeftBrackets !== countRightBrackets) {
        return false;
    }

    let currentBracket;

    for (let i = 0; i < allBrackets.items.length; i++) {
        if (countRightBrackets < countLeftBrackets) {
            return false;
        }

        currentBracket = allBrackets.dequeue();

        if (currentBracket == '(') {
            countLeftBrackets--;
        } else {
            countRightBrackets--;
        }
    }
    return true;
}

function isCorrect() {
    let isCorrect = correctBrackets(`[ ')(a+b))' ]`);

    if (isCorrect) {
        console.log('Correct');
    } else {
        console.log('Inorrect');
    }
}

isCorrect();
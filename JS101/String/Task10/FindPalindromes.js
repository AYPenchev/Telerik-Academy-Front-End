'use strict'

function findPalindromes() {
    let words = ['ABBA', 'no', 'lamal', 'palindrome', 'exe'],
        reversedCurrentWord;
    for (const word of words) {
        reversedCurrentWord = reverseString(word);
        if (reversedCurrentWord === word) {
            console.log(word);
        }
    }
}

findPalindromes();

function reverseString(wordToBeReversed) {
    let reversedString = '';
    for (let i = wordToBeReversed.length - 1; i >= 0; i--) {
        reversedString += wordToBeReversed[i];
    }

    return reversedString;
}
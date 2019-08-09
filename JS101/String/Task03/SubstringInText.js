'use strict'

function subStringInText(pattern, textToBeSearched) {
    let countPattern = 0;

    while (textToBeSearched.indexOf(pattern) != -1) {
        countPattern++;
        textToBeSearched = textToBeSearched.slice(textToBeSearched.indexOf(pattern) + 1);
    }
    console.log(countPattern);
}

subStringInText('in', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.');
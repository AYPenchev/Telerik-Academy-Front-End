'use strict'

function nbsp(text) {
    let wordsArray = text.split(' ');
    text = wordsArray.join('&nbsp;')
    console.log(text);
}

nbsp('This text contains 4 spaces!!');
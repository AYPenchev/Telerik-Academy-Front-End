'use strict'

function domOperations(elementID, contentsArray) {
    let isString = typeof elementID === 'string' || elementID instanceof String;
    if (!(elementID instanceof HTMLCollection) && !(isString)) {
        throw 'Arguments are not valid!';
    }

    let wrapperElement;
    if (isString) {
        wrapperElement = document.getElementById(elementID);
    } else {
        wrapperElement = elementID;
    }

    if (wrapperElement === null || wrapperElement === typeof undefined) {
        throw 'There is no element that has such an id!';
    }

    if (!elementID || !contentsArray) {
        throw 'one or both function parameters are missing';
    }

    if (typeof [] !== typeof contentsArray) {
        throw 'Function params are not as described!'
    }

    for (const content of contentsArray) {
        if (!(typeof content === 'string' || elementID instanceof String) && isNaN(content)) {
            throw 'Contents is neither string nor number'
        }
    }

    wrapperElement.innerText = '';

    for (let i = 0; i < contentsArray.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerText = contentsArray[i];

        wrapperElement.appendChild(newDiv);
    }
}

let elementID = 'wrapper'; // document.getElementsByTagName('div');
let contentsArray = ['somthing', 2, 4.5, 'thing', 6];

domOperations(elementID, contentsArray);
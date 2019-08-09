'use strict'

function tagsParse(text) {
    let textArray = text.split(' ');
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i].includes("<upcase>")) {
            textArray[i] = textArray[i].slice(8);

            if (!textArray[i].includes("</upcase>")) {
                textArray[i] = textArray[i].toUpperCase();
            }
        }
        if (textArray[i].includes("</upcase>")) {
            let removeTagStartPosition = textArray[i].indexOf("</upcase>");
            textArray[i] = textArray[i].slice(0, removeTagStartPosition);
            textArray[i] = textArray[i].toUpperCase();
        }

        if (textArray[i].includes("<orgcase>")) {
            textArray[i] = textArray[i].slice(9);
        }
        if (textArray[i].includes("</orgcase>")) {
            let removeTagStartPosition = textArray[i].indexOf("</orgcase>");
            textArray[i] = textArray[i].slice(0, removeTagStartPosition);
        }

        if (textArray[i].includes("<lowcase>")) {
            textArray[i] = textArray[i].slice(9);

            if (!textArray[i].includes("</lowcase>")) {
                textArray[i] = textArray[i].toLowerCase();
            }
        }
        if (textArray[i].includes("</lowcase>")) {
            let removeTagStartPosition = textArray[i].indexOf("</lowcase>");
            textArray[i] = textArray[i].slice(0, removeTagStartPosition);
            textArray[i] = textArray[i].toLowerCase();
        }
    }
    console.log(textArray.join(" "));
}

tagsParse('We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine.</upcase> We <orgcase>doN\'t</orgcase> have <lowcase>ANYthing</lowcase> else.');
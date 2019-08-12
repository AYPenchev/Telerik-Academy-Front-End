'use strict'

function replaceTags() {
    let inputHTML = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>',
        replacedHTML = inputHTML;

    while (inputHTML.includes("<a href=\"")) {
        let siteKey = inputHTML.slice(inputHTML.indexOf("<a href=\"") + 9);
        siteKey = siteKey.slice(0, siteKey.indexOf('"'));
        siteKey = "(" + siteKey + ")";

        let textValue = inputHTML.slice(inputHTML.indexOf("\">") + 2);
        textValue = textValue.slice(0, textValue.indexOf("</a>"));
        textValue = "[" + textValue + "]";

        inputHTML = inputHTML.slice(inputHTML.indexOf("a>") + 2);

        let startIdx = replacedHTML.indexOf("<a"),
            lenOfSubstring = replacedHTML.indexOf("a>") + 2 - replacedHTML.indexOf("<a");
        replacedHTML = replacedHTML.replace(replacedHTML.slice(startIdx, startIdx + lenOfSubstring), textValue + siteKey);
    }
    console.log(replacedHTML);
}

replaceTags();
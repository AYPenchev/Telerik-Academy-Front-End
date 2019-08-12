'use strict'

function extractTextFromHTML() {
    let htmlCodeArray = [
            '<html>',
            '<head>',
            '<title>Sample site</title>',
            '</head>',
            '<body>',
            '<div>text',
            '<div>more text</div>',
            'and more...',
            '</div>',
            'in body',
            '</body>',
            '</html>'
        ],
        htmlCode = htmlCodeArray.join(' '),
        extractedText = '';

    for (let i = 0; i < htmlCode.length; i++) {
        if (htmlCode[i] === '<') {
            extractedText += ' ';

            while (htmlCode[i] !== '>') {
                i++;
            }

            continue;
        }

        extractedText += htmlCode[i];
    }
    extractedText = extractedText.trim();

    let clearExtractedText = '';

    for (let i = 0; i < extractedText.length; i++) {
        if (extractedText[i] !== ' ' || extractedText[i + 1] !== ' ') {
            clearExtractedText += extractedText[i];
        }
    }

    clearExtractedText = clearExtractedText.split(' ');

    console.log(`Title: ${clearExtractedText[0]}`);

    let text = '';
    for (let i = 1; i < clearExtractedText.length; i++) {
        if (i != clearExtractedText.length - 1) {
            text += clearExtractedText[i] + ' ';
        } else {
            text += clearExtractedText[i];
        }
    }

    console.log(`Text: ${text}`);
}

extractTextFromHTML();
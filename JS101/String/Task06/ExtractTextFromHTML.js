'use strict'

function extractTextFromHTML() {
    let htmlCodeArray = [
            '<html>',
            '  <head>',
            '    <title>Sample site</title>',
            '  </head>',
            '  <body>',
            '    <div>text',
            '      <div>more text</div>',
            '      and more...',
            '    </div>',
            '    in body',
            '  </body>',
            '</html>'
        ],
        htmlCode = htmlCodeArray.join(' '),
        extractedText;

    for (let i = 0; i < htmlCode.length; i++) {
        if (htmlCode[i] === '<') {
            extractedText.concat(' ');

            while (htmlCode[i] !== '>') {
                i++;
            }

            continue;
        }

        extractedText.concat(htmlCode[i]);
    }

    extractedText.split(' ');

    console.log(`Title: ${extractedText[0]}`);

    console.log('Text: ');
    for (let i = 1; i < extractedText.length; i++) {
        if (i != extractedText.length - 1) {
            console.log(extractedText[i] + ' ');
        } else {
            console.log(extractedText[i]);
        }
    }

    console.log();
}

extractTextFromHTML();
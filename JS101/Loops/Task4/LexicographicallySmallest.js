function LexWindow() {
    let propertyArr = [],
        lexWindowMin,
        lexWindowMax;

    for (var key in window) {
        propertyArr.push(key);
    }
    lexWindowMin = propertyArr[0];
    lexWindowMax = propertyArr[0];

    for (let i = 1; i < propertyArr.length; i++) {
        if (lexWindowMin.localeCompare(propertyArr[i]) === 1) {
            lexWindowMin = propertyArr[i];
        }
        if (lexWindowMax.localeCompare(propertyArr[i]) === -1) {
            lexWindowMax = propertyArr[i];
        }
    }
    console.log(lexWindowMin);
    console.log(lexWindowMax);
}

function LexDocument() {
    let propertyArr = [],
        lexDocumentMin,
        lexDocumentMax;

    for (var key in document) {
        propertyArr.push(key);
    }

    lexDocumentMin = propertyArr[0];
    lexDocumentMax = propertyArr[0];

    for (let i = 1; i < propertyArr.length; i++) {
        if (lexDocumentMin.localeCompare(propertyArr[i]) === 1) {
            lexDocumentMin = propertyArr[i];
        }
        if (lexDocumentMax.localeCompare(propertyArr[i]) === -1) {
            lexDocumentMax = propertyArr[i];
        }
    }
    console.log(lexDocumentMin);
    console.log(lexDocumentMax);
}

function LexNavigator() {
    let propertyArr = [],
        lexNavigatorMin,
        lexNavigatorMax;

    for (var key in navigator) {
        propertyArr.push(key);
    }

    lexNavigatorMin = propertyArr[0];
    lexNavigatorMax = propertyArr[0];

    for (let i = 1; i < propertyArr.length; i++) {
        if (lexNavigatorMin.localeCompare(propertyArr[i]) === 1) {
            lexNavigatorMin = propertyArr[i];
        }
        if (lexNavigatorMax.localeCompare(propertyArr[i]) === -1) {
            lexNavigatorMax = propertyArr[i];
        }
    }
    console.log(lexNavigatorMin);
    console.log(lexNavigatorMax);
}

LexWindow();
LexDocument();
LexNavigator();
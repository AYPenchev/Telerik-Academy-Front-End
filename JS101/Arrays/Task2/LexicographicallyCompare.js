function LexCompare() {
    let firstCharArray = [],
        secondCharArray = [];

    firstCharArray = window.prompt('Enter first char array:', 'Char array:');
    secondCharArray = window.prompt('Enter second char array:', 'Char array:');

    for (let i = 0; i < firstCharArray.length && i < secondCharArray.length; i++) {

        if (firstCharArray[i].localeCompare(secondCharArray[i]) === 1) {
            return '>';
        } else if (firstCharArray[i].localeCompare(secondCharArray[i]) === -1) {
            return '<';
        }
    }

    if (firstCharArray.length === secondCharArray.length) {
        return '=';
    } else if (firstCharArray.length < secondCharArray.length) {
        return '>';
    } else {
        return '<';
    }
}

console.log(LexCompare());
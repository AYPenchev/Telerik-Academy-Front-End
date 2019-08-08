'use strict'

Array.prototype.removeFirstElementFromWholeArray = function() {
    let thisArrayFirstElement = this[0];

    for (let i = 0; i < this.length; i++) {
        if (parseInt(thisArrayFirstElement) === parseInt(this[i])) {
            this.splice(i, 1);
        }
    }
    return this;
};

const inputArrayElement = ['1', '2', '3', '2', '1', '2', '3', '2'];

inputArrayElement.removeFirstElementFromWholeArray();

for (const element of inputArrayElement) {
    console.log(element);
}
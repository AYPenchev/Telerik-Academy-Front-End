'use strict'

function stringFormat(destination, args) {

    for (let i = 0; i < args.length; i += 1) {

        destination = destination.replace(new RegExp("\{[" + i + "]\}", "g"), args[i] + '');
    }

    return destination
}

let format = 'Hello {0}!';
let args = ['Peter'];
let result = stringFormat(format, args);
console.log(result);

format = '{0}, {1}, {0} text {2}';
args = [1, 'Pesho', 'Gosho'];
result = stringFormat(format, args);
console.log(result);
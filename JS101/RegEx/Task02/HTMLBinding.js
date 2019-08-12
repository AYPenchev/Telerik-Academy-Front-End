'use strict'

String.prototype.bind = function(data) {

    let person = JSON.parse(input[0]);
    let result = this;

    let regex = /data-bind-([^="]*)="([^"]*)/g;
    let match;

    while (match = regex.exec(result)) {

        if (match[1] === 'content') {
            result = result.replace('><', '>' + person[match[2]] + '<');
        } else {
            result = result.replace('>', ' ' + match[1] + '="' + person[match[2]] + '"' + '>')
        }
    }
    return result;
}

const input = [
    '{ "name": "Steven", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
];

let data = input[0];
let html = input[1];

let result = html.bind(data);
console.log(result);
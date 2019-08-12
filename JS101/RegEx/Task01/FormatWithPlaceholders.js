'use strict'

String.prototype.formatWitPlaceHolders = function(template) {
    let templateAsJSON = JSON.parse(template);
    let newTemplate = this;
    for (const key in templateAsJSON) {
        if (key === 'name') {
            newTemplate = newTemplate.replace(/\#\{[a-z]{4}\}/g, templateAsJSON["name"]);
        }
        if (key === 'age') {
            newTemplate = newTemplate.replace(/\#\{[a-z]{3}\}/g, templateAsJSON["age"]);
        }
    }
    return newTemplate;
}
console.log('My name is #{name} and I am #{age}-years-old'.formatWitPlaceHolders(`{ "name": "John", "age": 13 }`));
'use strict'

function hasProperty(car, property) {
    return car.hasOwnProperty(property);
}

let car = {
    color: 'blue'
}

let hasProp = hasProperty(car, 'color');

console.log(hasProp);
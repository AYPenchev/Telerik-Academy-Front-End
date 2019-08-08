'use strict'

const values = [
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]

let point1 = makeNewPoint(parseFloat(values[0]), parseFloat(values[1])),
    point2 = makeNewPoint(parseFloat(values[2]), parseFloat(values[3])),
    point3 = makeNewPoint(parseFloat(values[4]), parseFloat(values[5])),
    point4 = makeNewPoint(parseFloat(values[6]), parseFloat(values[7])),
    point5 = makeNewPoint(parseFloat(values[8]), parseFloat(values[9])),
    point6 = makeNewPoint(parseFloat(values[10]), parseFloat(values[11])),
    line1 = makeNewLine(point1, point2),
    line2 = makeNewLine(point3, point4),
    line3 = makeNewLine(point5, point6),
    a = line1.getLength(),
    b = line2.getLength(),
    c = line3.getLength();

function makeNewPoint(x, y) {

    return {
        x: x,
        y: y
    };
}

function makeNewLine(startPoint, endPoint) {

    return {
        start: startPoint,
        end: endPoint,

        getLength: function() {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y), 2));
        }
    };
}

if (a + b > c && a + c > b && b + c > a) {
    console.log(`Triangle can be formed`);
} else {
    console.log(`Triangle can't be formed`)
}
'use strict';

function makeDeepCopy() {
    let line = {
        name: 'A',
        points: ['B', 'C', 'D'],
        start: {
            x: 2,
            y: 2
        },
        end: {
            x: 6,
            y: 8
        },
        length: () => {
            let xDiff = Math.pow(line.end.x - line.start.x, 2);
            let yDiff = Math.pow(line.end.y - line.start.y, 2);
            let length = Math.sqrt(xDiff + yDiff);
            return length;
        }
    };

    console.log(line);
    console.log(line.length());
    let copy = JSON.parse(JSON.stringify(line));
    copy.name = 'Test';
    copy.points[0] = 'A';
    copy.start.x = 4;
    console.log(copy);
    console.log(JSON.stringify(line));
    console.log(JSON.stringify(copy));
}

makeDeepCopy();
function IsPointInCircle(coordinates) {
    let distance = Math.sqrt(Math.pow(coordinates[0], 2) + Math.pow(coordinates[1], 2));

    if (distance <= 2) {
        console.log(`yes ${distance.toFixed(2)}`)
    } else {
        console.log(`no ${distance.toFixed(2)}`)
    }
}
let coordinates = [-2, 0];
IsPointInCircle(coordinates);

let coordinates2 = [-1.5, -1.5];
IsPointInCircle(coordinates2);
function PointCircleRectangle() {
    let x = parseFloat(window.prompt("Set x: ", "Number:"));
    let y = parseFloat(window.prompt("Set y: ", "Number:"));

    let distance = Math.sqrt(Math.pow(x - 1, 2) + Math.pow(y - 1, 2));

    if (distance <= 1.5) {
        if (x >= -1 && x <= 5 && y <= 1 && y >= -1) {
            console.log("inside circle inside rectangle");
        } else {
            console.log("inside circle outside rectangle");
        }
    } else if (x >= -1 && x <= 5 && y <= 1 && y >= -1) {
        console.log("outside circle inside rectangle");
    } else {
        console.log("outside circle outside rectangle");
    }
}

PointCircleRectangle();
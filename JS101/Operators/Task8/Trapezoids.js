function Trapezoids() {
    let sideA = parseFloat(window.prompt("Get side a: ", "Number:"));
    let sideB = parseFloat(window.prompt("Get side b: ", "Number:"));
    let height = parseFloat(window.prompt("Get height: ", "Number:"));
    let area = ((sideA + sideB) * height) / 2;
    console.log(area.toFixed(7));
}

Trapezoids();
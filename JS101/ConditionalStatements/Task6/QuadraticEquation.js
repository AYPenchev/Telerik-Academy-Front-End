function TheBiggestOfThree() {
    let a = window.prompt("Enter first number:", "Number"),
        b = window.prompt("Enter second number:", "Number"),
        c = window.prompt("Enter third number:", "Number"),
        discriminant = Math.pow(b, 2) - 4 * a * c,
        x1,
        x2;

    if (discriminant < 0) {
        console.log("No real roots");
    } else if (discriminant == 0) {
        x1 = -b / (2 * a);
        console.log(x1.toFixed(2));
    } else {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(x1 < x2 ? x1.toFixed(2) + "\n" + x2.toFixed(2) : x2.toFixed(2) + "\n" + x1.toFixed(2));
    }
}

TheBiggestOfThree();
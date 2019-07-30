function solve() {
    let input = window.prompt("Check if number is even: ", "Number:");
    if (input % 2 === 0) {
        console.log(`Even number: ${input}`)
    } else {
        console.log(`Not even number: ${input}`)
    }
}

solve();

/*
function solve(value) {
    if (value % 2 === 0) {
        console.log(`Even number: ${value}`)
    } else {
        console.log(`Not even number: ${value}`)
    }
    solve(5);
}
*/
function divideBy7and5(arguments) {
    let input = arguments;

    if (input % 5 === 0 && input % 7 === 0) {
        console.log(`True: ${input}`)
    } else {
        console.log(`False: ${input}`)
    }
}

divideBy7and5(35);
divideBy7and5(7);
divideBy7and5(12);
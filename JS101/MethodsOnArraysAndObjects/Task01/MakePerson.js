'use strict'

function makePerson(firstName, lastName, age, gender) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    };
    return person;
}

let tenPeopleArray = [];

for (let i = 0; i < 10; i++) {
    tenPeopleArray.push(makePerson(`Ivan${i}`, `Ivanov${i}`, 25, false));
}

console.log(tenPeopleArray);
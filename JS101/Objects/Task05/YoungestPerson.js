'use strict'

function findYoungestPerson(people) {
    let youngestPersonAge = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < people.length; i++) {
        if (people[i].age < youngestPersonAge) {
            youngestPersonAge = people[i].age;
        }
    }

    return youngestPersonAge;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 }
];


console.log(findYoungestPerson(people));
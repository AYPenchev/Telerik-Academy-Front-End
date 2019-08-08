'use strict'

function group(people) {
    let group = {};

    for (let i = 0; i < people.length; i += 1) {

        if (group[people[i].age]) {
            group[people[i].age].push(people[i]);
        } else {
            group[people[i].age] = new Array(people[i]);
        }
    }
    return group;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

console.log(group(people));
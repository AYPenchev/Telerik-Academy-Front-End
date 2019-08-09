'use strict'

//Task1
function makePerson(firstName, lastName, age, gender) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    };
    return person;
}

let tenPeopleArray = [],
    firstLetterOfFirstNameArray = ['h', 'a', 'q', 'a', 'c', 'b', 'n', 'm', 'p', 'o'];

for (let i = 0; i < 10; i++) {
    tenPeopleArray.push(makePerson(`${firstLetterOfFirstNameArray[i]}van${i}`, `Ivanov${i}`, 13 + i, i % 2 === 0 ? 'female' : 'male'));
}

console.log(tenPeopleArray);

//Task2
function peopleOfAge() {
    return tenPeopleArray.every(person => person.age >= 18);
}

console.log(peopleOfAge());

//Task3
function underagePeople() {
    tenPeopleArray.filter(person => person.age < 18)
        .forEach(person => console.log(person));
}

underagePeople();

//Task4
function averageAgeOfFemales() {
    let sum = 0,
        avgAge;

    tenPeopleArray.filter(person => person.gender === 'female')
        .forEach(person => avgAge = (sum += person.age) / (tenPeopleArray.filter(person => person.gender === 'female').length));

    console.log(avgAge);
}

averageAgeOfFemales();

//Task5
function youngestMale() {
    let yongestMale = tenPeopleArray.filter(person => person.gender === 'male')
        .reduce((minAge, person) => person.age < minAge.age ? person : minAge);
    return yongestMale.age;
}

console.log(youngestMale());

//Task6 1st way

function group(tenPeopleArray) {
    let group = {};

    for (let i = 0; i < tenPeopleArray.length; i += 1) {

        if (group[tenPeopleArray[i].firstName[0]]) {
            group[tenPeopleArray[i].firstName[0]].push(tenPeopleArray[i]);
        } else {
            group[tenPeopleArray[i].firstName[0]] = new Array(tenPeopleArray[i]);
        }
    }

    console.log(group);
}

group(tenPeopleArray);

//Task6 2nd way

function groupPeople() {
    for (let i = 0; tenPeopleArray.length; i++) {
        let lexSmallestFirstLetterPerson = tenPeopleArray.reduce((firstLetterOfName, person) => person.firstName[0].localeCompare(firstLetterOfName.firstName[0]) === -1 ? person : firstLetterOfName),
            indexToPop = tenPeopleArray.indexOf(lexSmallestFirstLetterPerson);
        console.log(lexSmallestFirstLetterPerson);
        tenPeopleArray.splice(indexToPop, 1);
    }
}

groupPeople();
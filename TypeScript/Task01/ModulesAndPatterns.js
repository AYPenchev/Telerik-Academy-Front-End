'use strict';

let telerikAcademyCourseModule = (function() {
    let _courseTitle;
    let _presentations = [];
    let _setOfStudents = new Set();
    let _space = ' ';

    class Student {
        constructor(firstName, lastName) {
            if (firstName[0] === firstName[0].toLowerCase() || lastName[0] === lastName[0].toLowerCase()) {
                throw `Names should start with an upper case letter!`;
            }

            this._validateName(firstName);
            this._validateName(lastName);

            this.firstName = firstName;
            this.lastName = lastName;
            this.ID = _setOfStudents.size + 1
            this.submittedHomeworks = 0;
            this.score = 0;
        }

        _validateName(name) {
            if (name.length > 1) {
                for (let i = 1; i < name.length; i++) {
                    if (name[i] === name[i].toUpperCase()) {
                        throw `All symbols in the name except the first letter should be lowercase letters!`;
                    }
                }
            }
        }
    }

    function submitHomework(studentID, homeworkID) {
        if (homeworkID < 1 && homeworkID > _presentations.length) {
            throw `ID is invalid`;
        }

        for (const student of _setOfStudents) {
            if (student.ID === studentID) {
                student.submittedHomeworks++;
            }
        }
    }

    function getTopTenStudents() {
        let topTenStudentsScore = [];
        let arrayOfStudents = Array.from(_setOfStudents);
        let lenStudents = arrayOfStudents.length;
        for (let i = 0; i < 10 && lenStudents >= 10; i++) {
            let currentTopScoreStudent = arrayOfStudents.reduce((firstStudent, secondStudent) => firstStudent.score > secondStudent.score ? firstStudent : secondStudent);
            topTenStudentsScore.push(currentTopScoreStudent);
            arrayOfStudents = arrayOfStudents.filter(student => student.score !== currentTopScoreStudent.score);
        }
        return topTenStudentsScore;
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function pushExamResults() {
        let arrayOfStudents = Array.from(_setOfStudents);
        let arrayOfStudentsAsObject = [];
        let newSetOfStudents = new Set();
        for (let i = 0; i < arrayOfStudents.length; i++) {
            let currentScoreUpdate = randomIntFromInterval(1, 100 - _presentations.length) + arrayOfStudents[i].submittedHomeworks;
            let currentStudent;
            for (const studentFromSet of _setOfStudents) {
                studentFromSet.score = currentScoreUpdate;
                currentStudent = studentFromSet;
                newSetOfStudents.add(currentStudent);
                break;
            }

            _setOfStudents.delete(currentStudent);

            let student = {
                ID: arrayOfStudents[i].ID,
                submittedHomeworks: arrayOfStudents[i].submittedHomeworks,
                score: currentScoreUpdate
            };
            arrayOfStudentsAsObject.push(student);
        }

        _setOfStudents = newSetOfStudents;

        return arrayOfStudentsAsObject;
    }

    function getAllStudents() {
        let arrayOfStudents = Array.from(_setOfStudents); //[..._setOfStudents];
        let arrayOfStudentsAsObject = [];
        for (let i = 0; i < arrayOfStudents.length; i++) {
            let student = {
                firstName: arrayOfStudents[i].firstName,
                lastName: arrayOfStudents[i].lastName,
                ID: arrayOfStudents[i].ID,
                submittedHomeworks: arrayOfStudents[i].submittedHomeworks,
                score: arrayOfStudents[i].score
            };
            arrayOfStudentsAsObject.push(student);
        }
        return arrayOfStudentsAsObject;
    }

    function addStudent(firstName, lastName) {
        let newStudent = new Student(firstName, lastName);
        _setOfStudents.add(newStudent);
        return newStudent.ID;
    }

    function init(_courseTitle, ...presentationTitles) {
        if (_courseTitle.length < 1 && _courseTitle[0] === _space && _courseTitle[_courseTitle.length - 1] === _space && _courseTitle.match(/\s+/g).length > 0) {
            throw `Invalid title!`;
        }

        this._courseTitle = _courseTitle;
        if (presentationTitles.length === 0) {
            throw `There are nopresentations!`;
        }

        for (let i = 0; i < presentationTitles.length; i++) {
            _presentations.push({
                presetationTitle: `${presentationTitles[i]}`,
                homework: `${presentationTitles[i]} - homework`,
                homeworkID: _presentations.length + 1
            })
        }
    }
    return {
        _courseTitle,
        _presentations,
        init,
        addStudent,
        getAllStudents,
        pushExamResults,
        getTopTenStudents,
        submitHomework
    };
}());

telerikAcademyCourseModule.init('OOP', 'Classes', 'Inheritance', 'Mixins');
console.log(telerikAcademyCourseModule._courseTitle);
telerikAcademyCourseModule._presentations.forEach(presentation => console.log(`Presentation title - ${presentation.presetationTitle}, homework - ${presentation.homework}, ID - ${presentation.homeworkID}`));

let firstStudentID = telerikAcademyCourseModule.addStudent('Ivan', 'Petrov');
let secondStudentID = telerikAcademyCourseModule.addStudent('Gosho', 'Ivanov');
let thirdStudentID = telerikAcademyCourseModule.addStudent('Pesho', 'Georgiev');
let airstStudentID = telerikAcademyCourseModule.addStudent('Avan', 'Petrov');
let aecondStudentID = telerikAcademyCourseModule.addStudent('Aosho', 'Ivanov');
let ahirdStudentID = telerikAcademyCourseModule.addStudent('Aesho', 'Georgiev');
let birstStudentID = telerikAcademyCourseModule.addStudent('Bvan', 'Petrov');
let becondStudentID = telerikAcademyCourseModule.addStudent('Bosho', 'Ivanov');
let bhirdStudentID = telerikAcademyCourseModule.addStudent('Besho', 'Georgiev');
let cirstStudentID = telerikAcademyCourseModule.addStudent('Cvan', 'Petrov');
let cecondStudentID = telerikAcademyCourseModule.addStudent('Cosho', 'Ivanov');
let chirdStudentID = telerikAcademyCourseModule.addStudent('Cesho', 'Georgiev');

let allStudents = telerikAcademyCourseModule.getAllStudents();
allStudents.forEach(x => console.log(x.ID));

telerikAcademyCourseModule.submitHomework(4, 2);
telerikAcademyCourseModule.submitHomework(4, 3);
telerikAcademyCourseModule.submitHomework(4, 1);
telerikAcademyCourseModule.submitHomework(1, 2);
telerikAcademyCourseModule.submitHomework(2, 1);
telerikAcademyCourseModule.submitHomework(2, 2);

for (const student of allStudents) {
    console.log(student);
}

let allStudentsResult = telerikAcademyCourseModule.pushExamResults();
for (const student of allStudentsResult) {
    console.log(student);
}

let topTenStudents = telerikAcademyCourseModule.getTopTenStudents();
console.log(topTenStudents);
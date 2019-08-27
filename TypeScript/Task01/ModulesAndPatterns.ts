'use strict';

let telerikAcademyCourseModule = (function() {
    let _courseTitle: string;
    let _presentations = [];
    let _setOfStudents: Student[] = [];
    let _space: string = ' ';

    class Student {
        private _firstName: string;
        private _lastName: string;
        private _ID: number;
        private _submittedHomeworks: number;
        private _score: number;

        constructor(firstName: string, lastName: string) {
            if (firstName[0] === firstName[0].toLowerCase() || lastName[0] === lastName[0].toLowerCase()) {
                throw `Names should start with an upper case letter!`;
            }

            this._validateName(firstName);
            this._validateName(lastName);

            this._firstName = firstName;
            this._lastName = lastName;
            this._ID = _setOfStudents.length + 1;
            this._submittedHomeworks = 0;
            this._score = 0;
        }


        get firstName(): string {
            return this._firstName;
        }
    
        get lastName(): string {
            return this._lastName;
        }

        get id(): number {
            return this._ID;
        }

        get submittedHomeworks(): number {
            return this._submittedHomeworks;
        }

        setSubmittedHomeworks() {
            this._submittedHomeworks += 1;
        }

        get score(): number {
            return this._score;
        }

        set score(value: number) {
            this._score = value;
        }

        _validateName(name: string): void {
            if (name.length > 1) {
                for (let i = 1; i < name.length; i++) {
                    if (name[i] === name[i].toUpperCase()) {
                        throw `All symbols in the name except the first letter should be lowercase letters!`;
                    }
                }
            }
        }
    }

    function submitHomework(studentID: number, homeworkID: number): void {
        if (homeworkID < 1 && homeworkID > _presentations.length) {
            throw `ID is invalid`;
        }

        for (const student of _setOfStudents) {
            if (student.id === studentID) {
                student.setSubmittedHomeworks();
            }
        }
    }

    function getTopTenStudents(): Student[] {
        let topTenStudentsScore: Student[] = [];
        let lenStudents: number = _setOfStudents.length;

        for (let i = 0; i < 10 && lenStudents >= 10; i++) {
            let currentTopScoreStudent: Student = _setOfStudents.reduce((firstStudent, secondStudent) => firstStudent.score > secondStudent.score ? firstStudent : secondStudent);
            topTenStudentsScore.push(currentTopScoreStudent);
            _setOfStudents = _setOfStudents.filter(student => student.score !== currentTopScoreStudent.score);
        }
        return topTenStudentsScore;
    }

    function randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function pushExamResults(): Student[] {
        let arrayOfStudentsAsObject: Student[] = [];
        let currentScoreUpdate: number;
        let student;

        for (let i = 0; i < _setOfStudents.length; i++) {   
            currentScoreUpdate = randomIntFromInterval(1, 100 - _presentations.length) + _setOfStudents[i].submittedHomeworks;                    
            _setOfStudents[i].score = currentScoreUpdate;
        
            student = {
                id: _setOfStudents[i].id,
                submittedHomeworks: _setOfStudents[i].submittedHomeworks,
                score: currentScoreUpdate
            };
            arrayOfStudentsAsObject.push(student);
        }
        return arrayOfStudentsAsObject;
    }

    function getAllStudents(): Student[] {
        let arrayOfStudentsAsObject: Student[] = [];
        let student;
        for (let i = 0; i < _setOfStudents.length; i++) {
            student = {
                firstName: _setOfStudents[i].firstName,
                lastName: _setOfStudents[i].lastName,
                id: _setOfStudents[i].id,
                submittedHomeworks: _setOfStudents[i].submittedHomeworks,
                score: _setOfStudents[i].score
            };
            arrayOfStudentsAsObject.push(student);
        }
        return arrayOfStudentsAsObject;
    }

    function addStudent(firstName: string, lastName: string): number {
        let newStudent: Student = new Student(firstName, lastName);
        _setOfStudents.push(newStudent);
        return newStudent.id;
    }

    function init(_courseTitle: string, ...presentationTitles: string[]): void {
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

telerikAcademyCourseModule.addStudent('Ivan', 'Petrov');
telerikAcademyCourseModule.addStudent('Gosho', 'Ivanov');
telerikAcademyCourseModule.addStudent('Pesho', 'Georgiev');
telerikAcademyCourseModule.addStudent('Avan', 'Petrov');
telerikAcademyCourseModule.addStudent('Aosho', 'Ivanov');
telerikAcademyCourseModule.addStudent('Aesho', 'Georgiev');
telerikAcademyCourseModule.addStudent('Bvan', 'Petrov');
telerikAcademyCourseModule.addStudent('Bosho', 'Ivanov');
telerikAcademyCourseModule.addStudent('Besho', 'Georgiev');
telerikAcademyCourseModule.addStudent('Cvan', 'Petrov');
telerikAcademyCourseModule.addStudent('Cosho', 'Ivanov');
telerikAcademyCourseModule.addStudent('Cesho', 'Georgiev');

telerikAcademyCourseModule.submitHomework(4, 2);
telerikAcademyCourseModule.submitHomework(4, 3);
telerikAcademyCourseModule.submitHomework(4, 1);
telerikAcademyCourseModule.submitHomework(1, 2);
telerikAcademyCourseModule.submitHomework(2, 1);
telerikAcademyCourseModule.submitHomework(2, 2);

let allStudents = telerikAcademyCourseModule.getAllStudents();
allStudents.forEach(x => console.log(x.id));

for (const student of allStudents) {
    console.log(student);
}

let allStudentsResult = telerikAcademyCourseModule.pushExamResults();
for (const student of allStudentsResult) {
    console.log(student);
}

let topTenStudents = telerikAcademyCourseModule.getTopTenStudents();
console.log(topTenStudents);
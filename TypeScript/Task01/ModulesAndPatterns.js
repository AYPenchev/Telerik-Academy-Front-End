'use strict';
var telerikAcademyCourseModule = (function() {
    var _courseTitle;
    var _presentations = [];
    var _setOfStudents = [];
    var _space = ' ';
    var Student = /** @class */ (function() {
        function Student(firstName, lastName) {
            if (firstName[0] === firstName[0].toLowerCase() || lastName[0] === lastName[0].toLowerCase()) {
                throw "Names should start with an upper case letter!";
            }
            this._validateName(firstName);
            this._validateName(lastName);
            this._firstName = firstName;
            this._lastName = lastName;
            this._ID = _setOfStudents.length + 1;
            this._submittedHomeworks = 0;
            this._score = 0;
        }
        Object.defineProperty(Student.prototype, "firstName", {
            get: function() {
                return this._firstName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "lastName", {
            get: function() {
                return this._lastName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "id", {
            get: function() {
                return this._ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "submittedHomeworks", {
            get: function() {
                return this._submittedHomeworks;
            },
            enumerable: true,
            configurable: true
        });
        Student.prototype.setSubmittedHomeworks = function() {
            this._submittedHomeworks += 1;
        };
        Object.defineProperty(Student.prototype, "score", {
            get: function() {
                return this._score;
            },
            set: function(value) {
                this._score = value;
            },
            enumerable: true,
            configurable: true
        });
        Student.prototype._validateName = function(name) {
            if (name.length > 1) {
                for (var i = 1; i < name.length; i++) {
                    if (name[i] === name[i].toUpperCase()) {
                        throw "All symbols in the name except the first letter should be lowercase letters!";
                    }
                }
            }
        };
        return Student;
    }());

    function submitHomework(studentID, homeworkID) {
        if (homeworkID < 1 && homeworkID > _presentations.length) {
            throw "ID is invalid";
        }
        for (var _i = 0, _setOfStudents_1 = _setOfStudents; _i < _setOfStudents_1.length; _i++) {
            var student = _setOfStudents_1[_i];
            if (student.id === studentID) {
                student.setSubmittedHomeworks();
            }
        }
    }

    function getTopTenStudents() {
        var topTenStudentsScore = [];
        var lenStudents = _setOfStudents.length;
        var _loop_1 = function(i) {
            var currentTopScoreStudent = _setOfStudents.reduce(function(firstStudent, secondStudent) { return firstStudent.score > secondStudent.score ? firstStudent : secondStudent; });
            topTenStudentsScore.push(currentTopScoreStudent);
            _setOfStudents = _setOfStudents.filter(function(student) { return student.score !== currentTopScoreStudent.score; });
        };
        for (var i = 0; i < 10 && lenStudents >= 10; i++) {
            _loop_1(i);
        }
        return topTenStudentsScore;
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function pushExamResults() {
        var arrayOfStudentsAsObject = [];
        var currentScoreUpdate;
        var student;
        for (var i = 0; i < _setOfStudents.length; i++) {
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

    function getAllStudents() {
        var arrayOfStudentsAsObject = [];
        var student;
        for (var i = 0; i < _setOfStudents.length; i++) {
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

    function addStudent(firstName, lastName) {
        var newStudent = new Student(firstName, lastName);
        _setOfStudents.push(newStudent);
        return newStudent.id;
    }

    function init(_courseTitle) {
        var presentationTitles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            presentationTitles[_i - 1] = arguments[_i];
        }
        if (_courseTitle.length < 1 && _courseTitle[0] === _space && _courseTitle[_courseTitle.length - 1] === _space && _courseTitle.match(/\s+/g).length > 0) {
            throw "Invalid title!";
        }
        this._courseTitle = _courseTitle;
        if (presentationTitles.length === 0) {
            throw "There are nopresentations!";
        }
        for (var i = 0; i < presentationTitles.length; i++) {
            _presentations.push({
                presetationTitle: "" + presentationTitles[i],
                homework: presentationTitles[i] + " - homework",
                homeworkID: _presentations.length + 1
            });
        }
    }
    return {
        _courseTitle: _courseTitle,
        _presentations: _presentations,
        init: init,
        addStudent: addStudent,
        getAllStudents: getAllStudents,
        pushExamResults: pushExamResults,
        getTopTenStudents: getTopTenStudents,
        submitHomework: submitHomework
    };
}());
telerikAcademyCourseModule.init('OOP', 'Classes', 'Inheritance', 'Mixins');
console.log(telerikAcademyCourseModule._courseTitle);
telerikAcademyCourseModule._presentations.forEach(function(presentation) { return console.log("Presentation title - " + presentation.presetationTitle + ", homework - " + presentation.homework + ", ID - " + presentation.homeworkID); });
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
var allStudents = telerikAcademyCourseModule.getAllStudents();
allStudents.forEach(function(x) { return console.log(x.id); });
for (var _i = 0, allStudents_1 = allStudents; _i < allStudents_1.length; _i++) {
    var student = allStudents_1[_i];
    console.log(student);
}
var allStudentsResult = telerikAcademyCourseModule.pushExamResults();
for (var _a = 0, allStudentsResult_1 = allStudentsResult; _a < allStudentsResult_1.length; _a++) {
    var student = allStudentsResult_1[_a];
    console.log(student);
}
var topTenStudents = telerikAcademyCourseModule.getTopTenStudents();
console.log(topTenStudents);
//# sourceMappingURL=ModulesAndPatterns.js.map
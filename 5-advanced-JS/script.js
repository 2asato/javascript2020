// PRIMITIVES
// -   numbers
// -   strings
// -   booleans 
// -   undefined 
// -   null

// EVERYTHING ELSE...
// -   arrays
// -   functions
// -   objects
// -   dates
// -   wrappers for numbers, strings, booleans 

// ... IS AN OBJECT


// OBJECT-ORIENTED PROGRAMMING
// -   objects interacting with one another through methods and properties
// -   used to store DataCue, structure applications into modules and keeping code clean

// INHERITANCE
// -   when one object is based off another object
// -   gets access to another objects properties and methods

// -   every js object has a prototype property which makes inheritance possible in js
// -   the prototype property of an object is where we put methods and properites that we want other objects to inherit
// -   the Constructor's prototype is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it
// -   when a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves o to the objects prototype. this continues until the method if found: prototype chain


// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1989,
//     job: 'teacher'
// }

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2020 - this.yearOfBirth);
    
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('john', 1990, 'teacher');
// var jane = new Person('jane', 1969, 'designer');
// var mark = new Person('mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName, jane.lastName, mark.lastName);

// practice
// var Receiver = function(name, catches, yards) {
//     this.name = name;
//     this.catches = catches;
//     this.yards = yards;
// }

// Receiver.prototype.yardsPerCatch = function() {
//     let ypc = this.yards / this.catches;
//     console.log(ypc);
    
// }

// var mThomas = new Receiver('Michael Thomas', 100, 1500);
// var dAdams = new Receiver('Davante Adams', 94, 1450);
// var tHill = new Receiver('Tyreek Hill', 74, 1300);

// mThomas.yardsPerCatch();

// console.log(mThomas);


// Object.create

// prototype
// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
        
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, 
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1969 },
//         job: { value: 'designer' }
//     })


// Primitives vs Objects

// primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// // objects
// var obj1 = {
//     name: 'Jon',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 38;
// console.log(obj1.age);
// console.log(obj2.age);

// functions
// only passing the reference that points to the object
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


// FUNCTIONS
// -   also an object
// -   an instance of teh Object type
// -   behaves like any other Object
// -   can store functions in a variable
// -   can pass a function as an argument to another function
// -   can return a function from a function

// passing functions as arguments
// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2020 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     }
//     return -1;
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var fullAges = arrayCalc(ages, isFullAge)
// console.log(fullAges);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

// functions returning functions
// function interviewQs(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
            
//         } 

//     } else if(job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
            
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
            
//         }
//     }
// }

// var teacherQuestion = interviewQs('teacher');
// teacherQuestion('John');
// var designerQuestion = interviewQs('designer');
// designerQuestion('John');
// interviewQs('student')('Mark')


// IIFE
// immediately invoked function expression

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
    
// }
// game();

// // better way
// (function() {
//         var score = Math.random() * 10;
//         console.log(score >= 5);    
//     }
// )();


// CLOSURES

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
        
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// -   an inner function has always access to the variables and parameters 
//     of its outer function, even after the outer function has returned

// function interviewQs(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
            
//         } 

//     } else if(job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
            
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
            
//         }
//     }
// }

// function interviewQs(job) {
//     return function(name) {
//     if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
            


//     } else if(job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
            
        
//     } else {
//             console.log('Hello ' + name + ', what do you do?');
            
//         }
//     }
// }

// interviewQs('janitor')('Stan');


// BIND, CALL, AND APPLY

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ' Ladies and Gentleman! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
            
//         } else if (style === 'friendly') {
//             console.log('Hey whats up! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
            
//         }
//     }
    
// }

// var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer' 
// };

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon')

// // john.presentation.apply(emily, ['friendly', 'afternoon'])

// use funciton with preset arguemnt
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('night');


/*
--- Let's build a fun quiz game in the console! ---





5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)
var Question = function(questionAsked, answerChoices, correctAnswer) {
    this.questionAsked = questionAsked;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
}

// 2. Create a couple of questions using the constructor
var question1 = new Question(
    'Who is the Seahawks starting QB?', 
    [
        {
            choice: 'Lamar Jackson',
            choiceNum: 1
        },
        {
            choice: 'Russell Wilson',
            choiceNum: 2
        }
    ],
    2
)

var question2 = new Question(
    'Who is the Seahawks middle LB?',
    [
        {
            choice: 'Bobby Wagner',
            choiceNum: 1
        },
        {
            choice: 'Lofa Tatupu',
            choiceNum: 2
        }
    ],
    1
)

console.log(question1);
console.log(question2);

// 3. Store them all inside an array
var questionsArray = [];
questionsArray.push(question1);
questionsArray.push(question2);
console.log(questionsArray);

// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
// (Hint: write a method for the Question objects for this task).
function showQuestion(question) {
    var randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    // random question asked
    console.log(randomQuestion.questionAsked);
    // answer choices to random question
    console.log('1. ' + randomQuestion.answerChoices[0].choice);
    console.log('2. ' + randomQuestion.answerChoices[1].choice); 
}

showQuestion()



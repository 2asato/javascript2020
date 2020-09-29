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
// -   also object
// -   an instance of teh Object type
// -   behaves like any other Object
// -   can store functions in a variable
// -   can pass a function as an argument to another function
// -   can return a function from a function











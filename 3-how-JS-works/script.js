// HOISTING

// functions
// works
// calcAge(1981);

// function calcAge(year){
//     console.log(2020 - year);
    
// }

// doesn't work
// retirement(1981);

// var retirement = function(year) {
//     console.log(65 - (2020 - year));
    
// }

// // variables
// console.log(age);

// var age = 23;

// function foo() {
//     var age = 65;
//     console.log(age);
    
// }
// foo();
// console.log(age);



// 'THIS' keyword

// attached to global object
// default 'window' object
// console.log(this);

// calcAge(1985);

// function calcAge(year) {
//     console.log(2020 - year);
//     console.log(this);
    
// }


// method within an object 'this' refers to the object
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     // method
//     calcAge: function() {
//         console.log(this);
//         console.log(2020 - this.yearOfBirth);
//         // expression - refering to window
//         // function innerFunction() {
//         //     console.log(this + '!!!!!!!!!!!');
            
//         // }
//         // innerFunction();
//     }
// }

// john.calcAge();

// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1984
// };

// // can use function from john
// // no () - not calling it
// mike.calcAge = john.calcAge;
// mike.calcAge();

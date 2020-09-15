/*
VARIABLES AND DATA TYPES
*/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher'
// console.log(job);



// VARIABLE MUTATION AND TYPE COERCION

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);



// VARIABLE MUTATION

// age ='twenty eight';
// job = 'Driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);



// BASIC OPERATORS

// var now, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// // Logical Operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);



// OPERATOR PRECEDENCE

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = (3 + 5) * 4 - 6; 
// console.log(x);



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

// var markMass = 78, 
//     markHeight = 1.69,
//     johnMass = 92, 
//     johnHeight = 1.95;

// var markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);

// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// var isMarkBigger = (markBMI > johnBMI)
// console.log(isMarkBigger);

// console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBigger);
// if (markBMI > johnBMI) {
//     console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBigger);
    
// } else {
//     console.log('Is John\'s BMI higher than Mark\'s? ' + isMarkBigger);
    
// }



// IF / ELSE STATEMENTS

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
    
// } else {
//     console.log(firstName + ' is single and ready to mingle!');
// }

// var isMarried = true

// if (isMarried) {
//     console.log(firstName + ' is married!');
    
// } else {
//     console.log(firstName + ' is single and ready to mingle!');
// }



// BOOLEAN LOGIC

// var firstName = 'John';
// var age = 16;

// if ( age < 13 ) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
     
// } else {
//     console.log(firstName + ' is a man.');
    
// }



// TERNARY OPERATOR AND SWITCH STATEMENTS

// var firstName = 'John';
// var age = 16;

// Ternary Operator
// condition ? if condition is met : if condition is not met
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// Switch Statement
// var job = 'teacher';

// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default: 
//         console.log(firstName + ' does something else.');
        
    
        
// }



// TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height = 23;

// // Equality Operators
// if (height == '23') {
//     // converts string to number
//     console.log('The == operator does type coercion');
    
// }

// if (height === '23') {
//     // strict equality operator will not convert
//     console.log('The === operator does not do type coercion');
    
// }



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), 
and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnAvgScore = (89 + 120 + 103) / 3;
console.log(johnAvgScore);

var mikeAvgScore = (116 + 94 + 123) / 3;
console.log(mikeAvgScore);

var maryAvgScore = (117 + 134 + 105) / 3;
console.log(maryAvgScore);


if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log('John is the winner with an average high score of ' + johnAvgScore);
    
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
    console.log('Mike is the winner with an average high score of ' + mikeAvgScore);
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
    console.log('Mary is the winner with an average high score of ' + maryAvgScore);
      
} else {
    console.log('ITS A DRAW!!!!!!');
    
}



















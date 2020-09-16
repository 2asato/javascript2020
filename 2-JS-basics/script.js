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

// var johnAvgScore = (89 + 120 + 103) / 3;
// console.log(johnAvgScore);

// var mikeAvgScore = (116 + 94 + 123) / 3;
// console.log(mikeAvgScore);

// var maryAvgScore = (117 + 134 + 105) / 3;
// console.log(maryAvgScore);


// if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
//     console.log('John is the winner with an average high score of ' + johnAvgScore);
    
// } else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
//     console.log('Mike is the winner with an average high score of ' + mikeAvgScore);
// } else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
//     console.log('Mary is the winner with an average high score of ' + maryAvgScore);
      
// } else {
//     console.log('ITS A DRAW!!!!!!');
    
// }



// FUNCTIONS

// function calculateAge (birthyear) {
//     return 2020 - birthyear;
// }

// var ageJohn = calculateAge(1981);
// console.log(ageJohn);

// function yearsTillRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');


    
// } else {
//     console.log(firstName + ' is already retired.');
    
// }

// yearsTillRetirement(1981, 'Aaron')



// FUNCTION STATEMENTS AND EXPRESSIONS

// function declaration
// function whatDoYouDo(job, firstName) {

// }

// Function expression - produces an immediate result
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.'
//         case 'designer':
//             return firstName + ' designs beautiful websites.'
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));

// Function statements - performs actions no immediate value
    // if/else statements, while loops



// // ARRAYS

// // initialize new array
// var names = ['John', 'Mark', 'Jane']
// var years = new Array(1990, 1969, 1948);

// // mutate array data
// console.log(names[0]);
// console.log(names.length);

// // different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// // add element to end of array
// john.push('blue')
// console.log(john);

// // add to beginning of array
// john.unshift('Mr.');

// // remove from end of array
// john.pop();

// // remove from beginning
// john.shift()

// // gives index position of item in array
// // if -1  item isnt present
// john.indexOf(1990)

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200,
 and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

// var percentage;
// var tip = 0;
// var totalWithTip = 0;
// var tipsArr = [];
// var totalWithTipArr = [];

// function tipCalc(bill) {
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill <=200) {
//         percentage = .15;
//     } else {
//         percentage = .1
//     }
//     tip = bill * percentage;
//     tipsArr.push(tip);
//     totalWithTip = bill + tip;
//     totalWithTipArr.push(totalWithTip)
//     console.log(tipsArr);
//     console.log(totalWithTipArr);
    
// }
// tipCalc(124);
// tipCalc(48)
// tipCalc(268)



// OBJECTS AND PROPERTIES

// Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthyear: 1990,
//     family: [
//         'Jane',
//         'Mark',
//         'Bob',
//         'Emily'
//     ],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john);

// // New Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthyear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);



// OBJECTS AND METHODS

// methods - functions attached to objects

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: [
//         'Jane',
//         'Mark',
//         'Bob',
//         'Emily'
//     ],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         this.age = 2020 - this.birthYear;
//     }
// };
// john.calcAge();
// console.log(john);



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

// var mark = {
//     firstName: 'Mark',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(mass, height){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// console.log(mark);


// var john = {
//     firstName: 'John',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(mass, height){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// john.calcBMI();
// console.log(john);


// if (mark.bmi > john.bmi) {
//     console.log(mark.firstName + ' has the higher BMI, ' + mark.bmi);
    
// } else if (john.bmi > mark.bmi) {
//     console.log(john.firstName + ' has the higher BMI, ' + john.bmi);
    
// } else {
//     console.log('They have the same BMI, ' + mark.bmi);
    
// }



// LOOPS AND ITERATION

// // for loop
// for (var i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
    
// }

// // while loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false];

// continues to print if not a string
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
    
// }

// stops when not a string
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
    
// }

// loop through john array in reverse
// for (let i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
    
// }



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 
    1) a new array containing all tips, and 
    2) an array containing final paid amounts (bill + tip). 
        HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
    HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
    After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var tip;
var totalWithTip;

var john = {
    firstName: 'John',
    bills: [
        124,
        48,
        268,
        180,
        42
    ],
    calcTip: function() {
        for (let i = 0; i < this.bills.length; i++) {
            // console.log(this.bills[i]);
            var percentage;
            var billAmount = this.bills[i];
            if (billAmount < 50) {
                percentage = .2;
            } else if (billAmount >= 50 && billAmount < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            tip = billAmount * percentage;
            this.tipsArr.push(tip);
            totalWithTip = billAmount + tip;
            this.totalWithTipArr.push(totalWithTip);
        }
        console.log(this.tipsArr);
        console.log(this.totalWithTipArr);
        
    },
    tipsArr: [],
    totalWithTipArr: [],
}

john.calcTip();

var mark = {
    firstName: 'Mark',
    bills: [
        77,
        375,
        110,
        45
    ],
    calcTip: function() {
        for (let i = 0; i < this.bills.length; i++) {
            // console.log(this.bills[i]);
            var percentage;
            var billAmount = this.bills[i];
            if (billAmount < 100) {
                percentage = .2;
            } else if (billAmount >= 100 && billAmount < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            tip = billAmount * percentage;
            this.tipsArr.push(tip);
            totalWithTip = billAmount + tip;
            this.totalWithTipArr.push(totalWithTip);
        }
        console.log(this.tipsArr);
        console.log(this.totalWithTipArr);
        
    },
    tipsArr: [],
    totalWithTipArr: [],
}

mark.calcTip()

function avgTip(arr) {
    let sum = 0;
    let avgTip = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum);
    avgTip = sum / arr.length;
    console.log(avgTip);
    return avgTip
}

var johnAvgTip = avgTip(john.tipsArr);
var markAvgTip = avgTip(mark.tipsArr);


if (johnAvgTip > markAvgTip) {
    console.log(john.firstName + '\'s family paid the highest avg tip.');
} else if (markAvgTip > johnAvgTip) {
    console.log(mark.firstName + '\'s family paid the highest avg tip.');
} else {
    console.log('There avg was the same.');
    
}





















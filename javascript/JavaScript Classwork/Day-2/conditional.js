// Conrtol Statements 

//1. Decision Making 
// if else statement

let age = 27;
if(age > 18)
{
    console.log("You are eligible for voting");
}
else
{
    console.log("You are not eligible for voiting");
}









let x = 5;
let y = 45;

if (x > y)
{
    console.log("x is greater than y");
}
else
{
    console.log("x is less than y");
}











// if-else if ( when we have multiple conditions to validate)
let score = 45;

if(score >= 90)
{
    console.log("You scored Grade A");
}
else if(score >= 75)
{
    console.log("You scored Grade B");
}
else if(score >=  50)
{
    console.log("You scored Grade C");
}
else if (score >= 35)
{
    console.log("You scored Grade D");
}
else
{
    console.log("You are failed");
}
















// Switch statement
let day = 3;

switch(day)
{
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day")
}





// Age Catogory
let $age = 25;

if ($age < 18)
{
    console.log("You are a minor");
}
else if($age < 30)
{
    console.log("You are a young adult");
}
else if($age < 50)
{
    console.log("You are a an adult")
}
else if ($age < 65)
{
    console.log("You are a senior citizen");
}
else
{
    console.log("You are an elderly person");
}




//2. Loops: main purpose is  to perform a specific task according to condition as - print 1 to 100 numbers 

// 1----10 numbers 
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');


/*
For Loop: Best when the number of iterations is known.
While Loop:  Best when the number of interations is not known, and you want to continue until a condition is false
do..while loop: similar to the while loop but guarantees at least one execution.
For...of Loop: Best for iterating over iterable objects like arrays and string.
For.. in Loop: Best for iterating over the properties of an object. 
*/


// example 1:  for loop(print 1 to 10 numbers)
for (let i=1;i<=10;i++)
{
    console.log(i);
}

// example 2 : while loop ()
let j = 1;
while(j<=10)
{
    console.log(j);
    j++;
}


// Example -3 do while looop(print 1 to 10 numbers)
let k = 1;
do{
    console.log(k);
    k++;
}
while(k<=10);


// example-4 for of loop(iterate over an array)
let fruits = ['apple','banana','cherry','kiwi'];
for(let fruit of fruits)
{
    console.log(fruit);
}


// example - 5 for in loop (iterate over an object)
const Student =
{
    name : 'John',
    age : 25,
    city : 'New York'
};

for (let key in Student)
{
    console.log(`${key} : ${Student[key]}`);
}
// Print a message on console 
console.log("Hello to everyone");

// Print message on webpage
document.write("<br>Wellcome to day-2 Session<br>");

// Operations 
//1. Arithmetic operations
let x = 10;
let y = 20;

// doing arrithmatic operations
console.log("Additon result: " + (x + y));
console.log("Subtraciton result: " + (x - y));
console.log("Multiplication result: " + (x * y));
console.log("Division result: " + (x / y));
console.log("Modulas result : " + (x % y));
console.log("Exponential result: " + (x ** y));    // (10)^20

// Incrament and decrement (unary operator)
let x1 = 10;
let x2 = 20;
let x3 = 30;
let x4 = 40; 

// 1. Prefix (it increases or decreses value then assign it)
console.log("Prefix Increament: " + (++x1));   // x1 = 11 
console.log("Prefix decrement : "  + (--x2));  // x2 = 19

// 2. postfix (it assign value first and then increase or decrease value)
console.log("Prefix Increament: " + (x3++) + " New value: " + x3);   // x3 = 31 
console.log("Prefix decrement : "  + (x4--) + " New value: " + x4); // x4 = 39




// 2. Assignment Operator
let y1 = 2;

console.log("Addition and assign : " + (y1+=4));       //y1 = 6
console.log("Subtraction and assign : " + (y1-=4));    // y1= 2
console.log("Multiplication and assign : " + (y1*=5)); //y1=10
console.log("Division and assign : " + (y1/=4));       //y1= 2.5
console.log("Moudulas and assign : " + (y1%=4));       //y1=2.5
console.log("Exponentiation result: " + (y1**=30))     //y1=867361737988.4036






// 3. Comparison/Relational Operator
let a=5;
let b=10; 
let c='5';

console.log("Equal to : " + (a==b));
console.log("Not Equal to : " + (a!=b));
console.log("Greater than : " + (a<b));
console.log("Less than : " + (a>b));
console.log("Greater tahn or equl to: " + (a>+b));
console.log("Less than or equal to : " +(a<=b));


console.log("Equal to : " + (a==c));  // true (checks value)
console.log("Equal to : " + (a===c));  // false (checks value and type)

console.log("Check Falsy value: " + (null==undefined));


//4. Conditional Operator (Ternary operators)
// syntax ---- condition ? true statement : false statement

let isAdmin = true;
let message = isAdmin ? "You are an Admin" : "You are a User";  // if isadmin is true then message will
console.log(message); // Admin

let age = 20;
let message1 = age >= 18 ? "You are an Adult" : "You are a child";
console.log(message); // you are an Adult

let Natinality = true;
let message2 = Natinality ? "You are an Indian" : "You are not Indian";
console.log(message2); //You are an Indian

let number = -4;
let message3 = number >=0 ? "The number is Positive" : "The number is Negative";
console.log(message3);


// 5.  Logical Operator

// 1. AND (&&) : return true if both conditions are true

isAdmin = true;
let isUser = true;
console.log(isAdmin && isUser); //true


// 2. OR (||) : returns true if the condition is false and vice versa
isUser = true;
isUser = false
console.log(!isAdmin || isUser); // false


// 3. NOT (!) : returns true if the condition is false and vice versa
isAdmin = true;
console.log(!isAdmin) // false 

let hasPermission = isAdmin && isUser;
console.log(hasPermission);  // true




// 6. Bitwise Operator

//1. Bitwise AND (&) : performs binary AND operation on two numbers
a = 5;  //101
b = 3;  //011
console.log(a & b); // 1(001)

//2. Bitwise OR (|) : performs binary OR operation on two numbers
a = 5;  //101
b = 3;  //011
console.log(a | b);  // 7 (111)

//3. Bitwise XOR (^) : performs binay XOR operation on two numbers 
a = 5; //101
b = 3;  //011
console.log(a ^ b);  //6 (110)

//4. Bitwise NOT(~) : performs binary NOT operration on a number 
a = 5;
console.log(~a);  //6

/*
Explanation of Bitwise NOT (~)
Binary Representation: The number 5 in binary is represented as 0000 0101 (in an 8-bit representation).

Bitwise NOT Operation: The Bitwise NOT operator flips each bit:

0 becomes 1
1 becomes 0
So, for 5 (which is 0000 0101), the operation would look like this:
0000 0101  (5 in binary)
---------
1111 1010  (-6 in binary, in two's complement)

Two's Complement: In JavaScript (and most programming languages), 
negative numbers are represented using two's complement. The binary 1111 1010 represents -6 in decimal.
*/



//5. Left shift (<<) : shifts the bits ofthe number to the left by
a = 5;
console.log(a << 2); //20(10100)

// 6. Right shift (>>) : shifts the bits of the number to the right by 
a = 20;
console.l
og(a>> 2);   //5(101)




// 7. String Operator 

// 1. Concatenation (+) : concatenates two strings
let name = "Tejas";
age = 22;
console.log(name + " is " + age + " years old."); // Tejas is 22 years old.

// 2. Template Literals (``) : concatenates two strings using template literals
name = "Luffy";
age = 20;
console.log(`${name} is ${age} years old.`); // Palak is 20 years old.

// Additional examples with more Indian names
let name1 = "Amit";
let age1 = 28;
let name2 = "Sita";
let age2 = 26;

console.log(name1 + " is " + age1 + " years old."); // Amit is 28 years old.
console.log(`${name2} is ${age2} years old.`); // Sita is 26 years old.


//Implicit Conversion 

//Number to String
let num = 5;
console.log("The answer is " + num);    // "The answer is 5"

//String to Number
let str = "5";
console.log(str * 2); // 10

//Boolean to Number
let bool = true;
console.log(bool * 2); // 2

//Null and Undefined to Primitive
let nullValue = null;
console.log(nullValue + 2); // NaN
let undefinedValue = undefined;
console.log(undefinedValue + 2); // NaN



//explicit type conversion

//String()
let num1 = 5;
console.log(String(num1)); // "5"

//Number()
let str1 = "5";
console.log(Number(str1)); // 5

//Boolean()
let str2 = "true";
console.log(Boolean(str2)); // true


//parseInt() and parseFloat()
let str3 = "5.5";
console.log(parseInt(str3)); // 5
console.log(parseFloat(str3)); // 5.5


//toString()
let num2 = 5;
console.log(num2.toString()); // "5"


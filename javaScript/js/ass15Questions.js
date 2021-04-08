//1) Write a function that takes time in hours format and return seconds.
const x = Date();  //function
console.log(x);
const x1 = new Date();  //constructor
console.log(x1);

/* Q1 Write a function that takes time in hours format and return seconds.*/
function hours(a) {
return a *60*60;
}
var z = hours(20);
console.log(z);


/* Q2 Using arithmetic operators ( +, -, *, /, and %), write a function that takes three parameters, num1,
num2, and an operator. Perform the relevant operation on num1 and num2. Try with switch
statement.*/
var operate = (num1=10,num2=20,"-");
switch (operate) {
    case "-": console.log(num1-num2);
    break;
    default :
    console.log(`operation not done`);
}

var operate = (num1=6,num2=4,"+");
switch (operate) {
    case "+": console.log(num1+num2);
    break;
    case "-": console.log(num1-num2);
    break;
    default :
    console.log(`operation not done`);
}

/*Q3 Create a function which returns true if given number is fully divided by 3. Return false otherwise.*/
function check(a) {
    if (a%3 == 0){
        return true;
    }
    {return false};
}
var z1 = check(9);
console.log(z1);

/*Q4 Given an object containing counts of both brids and animals, return total count, using a function.*/
 let count = {
    birds:6,
    animals:0}
    let totalcount = count.birds + count.animals;
    console.log(totalcount);
     
    let count1 = {
        birds1:2,
        animals1:7}
        let totalcount1 = count1.birds1 + count1.animals1;
        console.log(totalcount1);

/*Q5 Create a function that takes a number x and returns the xth odd number.*/
var sum = 0
    // for var i=0, i%2==1 i++ 



//*Q6 a simple program to determine whether you are eligible for voting. Note, people who are 18 and older are only eligible.

function voterCriteria(y) {
    if (y>=18) {
        return "you are eligible for voting";}
        {
        return "Note, people who are 18 and older are only eligible.";
        }
    }
    var eliziblity = voterCriteria(12);
    console.log(eliziblity);

/*Q 7 Write a template string according to the following example:
const a = "Tim";
const b = "Tom";
const c = "Tony";
const d = "JS";
Tim knows JS which Tom doesn't that Tony knew
about"*/

const a = "Tim";
const b = "Tom";
const c = "Tony";
const d = "JS"
console.log(`${a} knows the ${d} which ${b} doesn't that ${c} knew about`);

/*Q 8 Given a string, return true if its length is even or false if the length is odd.*/
function string(text) {
var stringLength = text.length;
// console.log(stringLength);
    if (stringLength % 2 == 0) 
    {
        return("true");
    } 
    {
        return ("false");
    }
}
var stringreq = string("anilkumar");
console.log(stringreq);

/*Q9 Create a function that takes a word and returns the new word without including the first
character.*/

function strr(a) {
    return a.slice(1)
} 
console.log (strr("chandhini"));

/* Q10 Write a function that takes a number and prints if its even. If its even, check if less than 10. If its
odd, return false*/
function number(p) {
    if (p % 2 == 0 && p < 10) {
        console.log ("even and less than 10");
    }
    else if(p > 10) {
        return "even and greater than 10";
    }
    return "odd"
}
console.log(number(5));

/* Q11 Write a function taking two numbers, a,b. Return true if a is divided by b. Return false otherwise*/
function div(a,b) {
    if (a % b == 0) {
        return true;
    }
        return false;
}
console.log(div(21,3))

/* Q12 Write a function taking two numbers, a,b. Return if (a+b) wholesquare is odd or even*/
function sqare(m,n) {
    let tot = (m+n);
    let tot1 = Math.pow(tot,2);
    // console.log(tot1);
    if (tot1 % 2 == 0){
        return `the sum of squares of ${m} and ${n} is even`;
    }
    return "odd";
}
console.log(sqare(5,4));

/*Q 13 Write a palindrome function*/

/*Q 14 Write a function that returns opposite of the number given*/
function signChange(a) {
    if (a === a) {
        return Math.abs(a);
    }
    return a;
}
console.log(signChange(-20));

/*Program to find the biggest of three numbers*/
function maxnum(number1,number2,number3){
    return Math.max(number1,number2,number3);
}
console.log(maxnum(2,1,6));


    

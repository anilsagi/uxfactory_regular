//about variables scope
function add(){
 var a = 10;
 let b = 5;
 const c = 40;
    {
    var a = 30;
    let b = 20;
    const c = 100;
    console.log("a = ", a);
    console.log("b = ", b);
    console.log("c = ", c);
    }
    console.log("a = ", a);
    console.log("b = ", b);
    console.log("c = ", c);
}
add(); 

// var has functional scope, let and const are block scope.

//arrow functions -one
/*function add (p,q,r) {
    return p + q - r;
};*/
const sum = (p,q,r) => p+q-r;

//var result =  add(5,10,2);
//console.log(result);
var one =  sum(25,10,2);
console.log(one); 

function add (a,b){
    var c = 10, d = 20 ;
    return a + b + c + d;
}
const addition = (a,b) => {   // let addition = (a, b, c=10, d =20) => {return a+b+c+d};
    var c = 10, d = 20 ; 
    return a + b + c + d
}
let value = addition (30,40);
console.log(value);

// 1 par ;check value >10; return 10times and <10, return 2times

//arrow functions -one
function check(x) {
    if (x > 10) {
        return 10 * x;
    }
    else {
        return 2 * x;
    };
}
const neW = check(20);
console.log(neW);

//dafault function argument
let add1 = (a, b, c=10, d =20) => {
    return a+b+c+d;
};
let sum1 = add1(10,20);
console.log(sum1);   //c & d we haven't given any values so it will takees automatically from function parameters


//ARRAY HELPER METHODS

// for each
var colors = ['r', 'b', 'g'];
colors.forEach( val => {
    console.log(val);
});

//map function
let color = colors.map(newString => newString.toUpperCase());
console.log(color);

var numbers = [5, 10, 20, 30];
let multiplyNo = numbers.map(newArr => newArr * 6);
console.log(multiplyNo) ;

//filter method
let filterArr = numbers.filter(newFilterArr => newFilterArr < 15);
console.log(filterArr);

//find method
var bank = [
    {bankName: "SBI", minBalance:1000},
    {bankName: "HDFC", minBalance:1500},
    {bankName: "AXIS", minBalance:2000},
    {bankName: "BANK OF BARODA", minBalance:2500},
    {bankName: "KOTAK", minBalance:1200},
]
var leastCharge = bank.find(nominal => nominal.minBalance>1000 & nominal.minBalance<2500);
console.log("Avg minimum charge Bank is :", leastCharge.bankName);

//every : will gives boolean values true= all elements pass
var allbanksleastcharge = bank.every(nominal => nominal.minBalance>500 & nominal.minBalance<2000);
console.log(allbanksleastcharge);
//some
var allbanksleastCharge = bank.some(nominal => nominal.minBalance >= 1200 & nominal.minBalance<=2600);
console.log(allbanksleastCharge);


//reduce method
var arry = [6, 10, 20, 30];
function sumM (accu, value) {
    console.log(accu,value);
    return accu + value ;
}
var newsuM = arry.reduce(sumM,0); //accu, value
console.log (`sum of ${arry} is ${newsuM}`);
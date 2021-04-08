//Q01.Write a function to calculate Sum and Average an array element.
function arrays(accu,value) {
    return accu + value;
} 
var sum = ([9,99,99]).reduce(arrays,0);
console.log("Sum:"+sum);

/*Q:02 Create a function to multiply all of the values in an array by the amount of values in the
given array.*/
function mulitiplicationarray(input1){
    return input1.map(x => x * input1.length);
// console.log(mulArray);
// return mulArray;
}
console.log(mulitiplicationarray([1, 2, 3]));

//Q 3 Write a function to create multiplication table by using while loop
var  t=5;
var  i=1;
while(i<=10)
{
console.log(t+  "  X  "  +i+  "  =  "  +i*t);
i++;
}

/*Q4 Write a function to read a string, push individual letters into an array in revers order and join
them with ‘#’ keyword*/
function ReverseString(str) {
    return str.split('').reverse().join('#')
 }
console.log(ReverseString("HTML"))

/*Q5 Create a function to read multidimensional array and push the sum of its values in different
array*/
function arraysum(input2) {


}
console.log([[1,2,3],[2,1,4]]);


/*Create a function that takes an array of numbers. Return the largest number in the array.*/
var num = [10,98,7];
console.log(Math.max.apply(null, num));

function largetnumber(input3){
    return Math.max.apply(this,input3);
}
console.log(largestnumber([10,98,7]));
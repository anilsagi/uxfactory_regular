//.concat()     syntax:var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

var array1 = ['Red', 'blue', 'green'];
var array2 = ['yelloe', 'orange', 'violet'];
var arraya = [1,2,3];
var array3 = ['indigo', 'white', 'black'];
var array4 = array1.concat(array2, arraya, array3);
console.log(array4);

//filter
var names = ['anil', 'chandhini', 'Eswari', 'Jagadeesh', 'Rajesh'];
var namesFilt = names.filter(word => word.length >4);

console.log(namesFilt) 
//filter Example 2
function numbers (value){
    return value >=10;
} 
var filtered = [5, 50, 20, 15, -25].filter (numbers)
console.log(filtered)

/*reduceright

var array5= [[5,6], [3,4], [1,2]];
array5.reduceRight(accumulator,curretValue) = accumulator.concat(curretValue);

console.log(array5); */

//array method flat
let array5=[1, 2, [3, 4]];
let array6= array5.flat();

console.log(array6); //______1

let array7=['a', 'b', ['c', 'd']];
let array8= array7.flat();

console.log(array8); //_______2

let array9 = [1, 2, 3, [4, 5, [6, 7, 8]]];
let array10= array9.flat();
let array11= array9.flat(2);

console.log(array10);
console.log(array11) //_______3

const array12 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const array13=array12.flat(2);
const array14=array12.flat(3);
const array15=array12.flat(Infinity);

console.log(array13);
console.log(array14);
console.log(array15); //4

//map
const  nums = [1, 2, 3];
const strg  = ['a', 'b', 'c'];

const mapped = nums.flatMap((val, index) => [ val, strg[index]]);
console.log(mapped); //not worked*/

const arry1 = [1, 4, 9, 16];
const map1 = arry1.map(x => x * 2);

console.log(map1); 

//reduceRight
 

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);







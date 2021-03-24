var x = 5;
var y = 9;
var a =999;
var b = -999;
var txt ="Hello";
var r=true;
var z={
    sum:10,
    mul:60,
};
var arr=[10,2,1,4];
var zero=null;
var ud=undefined;


console.log(x+y);
console.log(x>y);
console.log(x<y);
console.log(a==b);
console.log(a/b);
console.log(x+4==y && a!=b);
console.log(x+(y/9)==x+1 || a!=-b);
console.log(x+(y/8)==x+1 || a==-b);
console.log(x+(y/8)==x+1 || a!=-b);
console.log(!(a==b));
console.log(txt +" "+"yesterday JS started, are you following ?");

function sum(m , n) {
    return m+n;
}
var val = sum (10, 20)
var val = sum (20, 30)
console.log(val);

var val1 = sum (200, -30)
console.log(val1);
console.log(val1+val);

function sub(k , l) {
    return k-l;
}
var val3 = sub (-10, 20)
console.log(val3);

// multiplication
function multipilication(p , q) {
    var product= p*q;
    return (product)
}
var value6=multipilication(4,2);
console.log(value6)

// division
function divison(h,i){
    var div=h/i;
    return (div)
}
var value7=divison(2,2)
console.log(value7)

// addition

function addition(u,v,w){
    var sum=u+v+w;
    return (sum);
}
var value8=addition(2,3,-9);
console.log(value8)

//combination
function example(f, g, h, m, n){
    var compound= f + g * h - m / n ;
    return (compound);
}
var value9=example(10,20,30,40,100);
console.log(value9) ; 


console.log(typeof(b)); //  numer type     to know the "data type" stored in varaible b
console.log(typeof(txt)); // string type
console.log(typeof(r)); //boolean type
console.log(typeof(z)); // line 7, object type
console.log(typeof(arr));//multiple no in same line i.e, array
console.log(typeof(ud)); // undefined shown as -object data type
console.log(typeof(zero)); //null is also shown as -object data type 

var t=2
console.log(t++); // first time prints same value
console.log(t++); // second time prints onetimes increases the value
console.log(t++); // third time prints 2times increases the value

var T=10
console.log(++T); // first time decreases the value one time
console.log(++T); // second time decreases the value one time

var z=100
console.log(--z); // first time decreases the value one time
console.log(z--); // second time decreases the value one time
console.log(z--); // second time decreases the value one time





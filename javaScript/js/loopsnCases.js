/*var expr = "Monday";

switch (expr) {
    case "Tuesday":
    console.log('working day');
    break;
    case "Monday":
    console.log('working day');
    break;
    case "Saturday":
    case "Sunday":
    console.log('Holiday');
    break;
    default:
        console.log("Doesn't match ${expr}");
}

//if condition
var age = 15;
if (age >=18 )
{
    console.log("Eligible for vote");
}
else{
    console.log("Not Eligible for vote");
}

//if condition
var studentName = "Anil";
if (studentName == 'Anil' ||studentName == 'chandhini' ||studentName == 'Eswari' ||studentName == 'Rajesh' ||studentName == 'Jagadeesh')
{
    console.log("This student belongs to UX Factory");
}
else{
    console.log("This student not belongs to UX factory");
}

//switch case
switch (studentName) {
    case "Anil":
    case "chandhini":
    case "Eswari":
    case "Rajesh":
    case "JAgadeeswari":
    console.log('This student belongs to UX Factory');
    break;
    default:
        console.log("This student not belongs to UX factory");
}*/

//for loop-1
var arr = [1, 2, 3, 4, 5];
var sum = 0;

for ( var i=0; i<arr.length; i+=1) {
    sum=sum + arr[i];
}
console.log(sum);

/*
//for loop-2 for(initialisation; condition; incre or decre){}
var n= prompt("Enter a number");
for (var i=1; i<=n; i++){
    document.write("Number is" +i + "</br>");
}

//while loop while(condition){code}
var n=6
var i=1;
while (i<=n){
    document.write('Number is' +i)
    i++
}
// do while loop
var p=prompt("Enter a number")
var q=1
do{
    q=q+p;
    p++;
    console.log(q)
} while ( p<q);*/

//for of loop
/*var names = ["you tube", "facebook", "Instagram","aha", "zeemovies"];
for (var n of names){
    console.log(n);
}*/

var symbols = {
    yt : "youtube",
    fb : "facebook",
    ig : "Instagram",
    tv : "television",
    UX : "UXfactory",
};
//for ( var n in symbols){
  //  console.log(n);
//}
//for ( var n in symbols) {
    //console.log(n);
    //console.log(symbols[n]);
    //console.log ("key is: ${n} and value is: ${symbols[n]}");
//}
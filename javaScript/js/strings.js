function display(){
  alert("Hi welcome to JS stringes objects");
}

display(); // invoking the function name
/*display();
display();
display();*/




var x = "We love design.We preach what we love." //length of characters
console.log (x.length);

var X = "12 34 56 78 09";
console.log (X.length);
console.log (typeof X);
console.log (X + " "+ " sentence has " + X.length + " code units long");

//iterator
var y = "We Love design.We preach what we love." // syntax:str[Symbol.iterator]
var yIter = y[Symbol.iterator]();

console.log(yIter.next().value);
console.log(yIter.next().value);
console.log(yIter.next().value);
console.log(yIter.next().value ); 


//.charAt()  synax:str.charAt(index)
var anyString = "Brendan Eich initially,key contributors to the ECMAScript specification";
var index = 6;
console.log (anyString.charAt(index));
var index = 56;
console.log (anyString.charAt(index));
console.log (anyString.length);
var index = 99;
console.log (anyString.charAt(index)); 

//.charCodeAt()
var charcod = "The quick brown fox jumps over the lazy dog.";
var index = 0;
console.log (charcod.charCodeAt(index)); 

var charcod1 = "A";
var index = 0;
console.log (charcod1.charCodeAt(index));

var charcod2 = "B.";
var index = 0;
console.log (charcod2.charCodeAt(index));

var charcod2 = "Anil Chandhini Eswari Jagadeesh Rajesh"; //no index provided

console.log (charcod2.charCodeAt(index));

//.codePointAt()
var codePT = "Anil Chandhini Eswari Jagadeesh Rajesh"; 
var index = 0;
console.log (codePT.codePointAt(index));

var codePT1 = "Ani\l Chandhini Eswari Jagadeesh Rajesh"; 
var index = 3;
console.log (codePT1.codePointAt(index)); 
console.log (codePT1.length);
var index = 55;
console.log (codePT1.codePointAt(index)); 

//concat()
var p= "Hai";
var q= "how are you ?";
console.log(p.concat(" ", q));

//endwith() syntax:str.endsWith(searchString[, length])________true/false
var a1="The ECMAScript standard does not include any input/output"
console.log(a1.endsWith("output"));

var a2=" for 2021-22, the government proposes to spend Cr 34,83,360"
console.log(a2.endsWith("360"));

//replace()____dont explain
//syntax: const newStr = str.replace(regexp|substr, newSubstr|function)
var b1 = "Anil Chandhini Eswari Jagadeesh Rajesh";
var b2 = b1.replace(/Chandhini/, "anil");
console.log(b2);
var b3 = b2.replace(/Eswari/, "anil");
console.log(b3);
var b4 = b3.replace(/Jagadeesh/, "anil");
console.log(b4);
var b5 = b4.replace(/Rajesh/, "anil");
console.log(b5);

//trim
//trimEnd
//trimStart
//toLowerCase
//toUpperCase
//startsWith
//toString
//toNumber


//split
var str1="Access the digital replica of the print newspaper on any device";
var words= str1.split(" "); //for words split_ space
console.log(words[3]);

var chars= str1.split(""); //for characters split_
console.log(chars[2]);    //calls and after split chars done

var strCopy=str1.split(); //to print as array_Empty string
console.log(strCopy);
console.log(strCopy[3]); //undefined

console.log(str1.split('')); //stringempty
var arr=str1.split('');
console.log(arr[2]);

//slice syntax: str.slice(beginIndex[, endIndex])
var str2="Access the digital replica of the print newspaper on any device";
str3= str2.slice(1,10);  //leave 10th character
console.log(str2.length); //63
str4= str2.slice(5,-2);   //63-2=61  
str5= str2.slice(8);   //prints all from 8th char
str6= str2.slice(70);   //out of range

console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);

//splice 


//substr







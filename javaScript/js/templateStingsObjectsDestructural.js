//template string
var x = 10;
var y = 20;
console.log(`the values of x is ${x} and value of y is ${y}`);

//class
class ArithematicOperators 
{
    constructor (a,b, name)
    {
        this.input1 = a;
        this.input2 = b;
        this.ioperation = name;
    }
        getsum()
    {
        return `The sum is ${this.input1 + this.input2}`;
    }
    getsub()
    {
        return `The sum is ${this.input1 - this.input2}`;
    }
}
var object = new ArithematicOperators(10,5,"sum");
console.log(object.getsub());

//object literals
function studentDetails(name, age)
{
    return{
        name,
        age
    }
}
let studentobj = new studentDetails("chandhini", 22);
console.log(studentobj.age);
let studentobj2 = new studentDetails("rama", 24);
console.log(studentobj2.name);

//method in objects
function getStudentDetails(name, age,job)
{
    return {
        getName()
        {
            return `student name: $(name)`;
        },
        getAge()
        {
            return `student age: $(age)`;
        },
        getJob()
        {
            return `student job: $(job)`;
        }
    }
}
let obj = getStudentDetails("Eswari", 23, "SoftwareDeveloper").getJob();
console.log(obj);

var names = 'student';
var i = 0;
let students = {
    [names + ++i]: 'anil',
    [names + ++i]: 'Eswari',
    [names + ++i]: 'jagadsh',
};
console.log(students);

//destructring
let personDetails = {
    personName: "Anil",
    initial: "sagi",
    id: 99
};
let {personName, initial,id } = personDetails;
console.log({personName, initial,id})

/*function add (a){
    let int1= parseInt(a);
    console.log(int1);
    let substrg = a.substr(4);
    let substrg1= parseInt(substrg);
    console.log(substrg);
    return int1 + substrg1;
    }
    var final = add ('102+17');
    console.log(final);*/


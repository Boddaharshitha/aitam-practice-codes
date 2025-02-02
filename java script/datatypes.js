/*//Datatypes in javascript
//1.primitive datatype ==>Number,undefined,String,boolean,null,symbol.
//2.non-primitive datatype ==>object,array,function;
*/

//1.Number ==>it is used to represnt the integer ,float.range of this number is 2^53 if your number is grater than that you can use bigint.
//2.string ==>it is used to represent a sequence of characrters.It is enclosed in single quotes(''),double quotes("") or backtips().
//3.boolean ==>it is used to represent a logical value.it can be true or false.
//4.undefined ==>it is used to represent undefined value.
//5.null ==>it is used to represent empty value.
//6.symbol ==>it is used to represent a unique value.

let studentname='harshi';
let studentage=20;
let studentisFemale=true;
let salary=1000000;
let studentMarks=null;
let studentaddress;
/*console.log(studentname);
console.log(studentage);
console.log(studentisFemale);
console.log(salary);
console.log(studentMarks);
console.log(studentaddress);*/
console.table((studentname,studentage,studentisFemale,salary,studentMarks,studentaddress));
//type of function() in js==>it is used to check the datatype of the variable.
let studentname='harshi';
let studentage=20;
let studentisFemale=true;
let salary=1000000;
let studentMarks=null;
let studentaddress;
console.log(typeof studentname);
console.log(typeof studentage);
console.log(typeof studentisFemale);
console.log(typeof salary);
console.log(typeof studentMarks);
console.log(typeof studentaddress);
console.table({studentname,studentage,studentisFemale,salary,studentMarks,studentaddress});


/*//varaible in javascript
//const accountId=1234;
let accountName="john doe";
var accountBalance=1000;
accountAddress="Hyderabad";
//accountId=45678;
//accountName="aitam";
//accountName="aitam college";
//var accountBalance=2000;
accountBalance=3000;
accountAddress="vizag";
//console.log(accountId);
//console.log(accountName);
console.log(accountBalance);
console.log(accountAddress);
//console.table({accountId,accountName,accountBalance,accountAddress});*/


//1.constant in javascript ==>constant is used to declare a variable that cant't be change throughtout the program.
//how to declare it?--> using const keyword.
const rollnumber=23;
console.log(rollnumber);
//const rollnumber=12;//error=redeclaration not allowed
//console.log(rollnumber);//reassigning not allowed
//rollnumber=10;

//2.let in javascript ==>let is used to declare a variable that can be changed throught out the progarm.
let studentname="harshi";//redeclaration not allowed
console.log(studentname)
studentname="gfg";
console.log(studentname)
studentname="gfg";//reassigning not allowed
console.log(studentname);

//3.var in js ==>var is used to declare a variable that can be changed throught out the progarm.
var studentage=20;
console.log(studentage);
var studentage=20;//redeclarartion allowed
console.log(studentage);
studentage=23;//reassigning allowed
console.log(studentage);
studentage=30;
 pratice------->console.log(studentage);
/*
var studentage=20;
console.log(studentage);
let studentname="harshi";
console.log(studentname);
const rollnumber=14;
console.log(rollnumber);*/

/*the process of moving variable and function declarations to the top of their scope during compilation, before code execution*/-tdz
/*a built-in behavior that moves the declarations of functions, variables, and classes to the top of their scope before the code is executed*/-hosting
console.log(studentname);//undefined
var studentname="harsha";
console.log(studentname);//refernce error
let studentname="harsha";//student name not defined
console.log(studentname);//refernce error
const studentname="harsha";//student name not defined



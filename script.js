// ************************    BASISCS      ************************
/*
let js = "amaizing";
if (js === "amaizing") alert("JavaScript is FUN!!!");

console.log(48 + 10 + 18);
*/

// ********************      VARIABLES & VALUES     ******************
/*
 let firstName = "faiz";
 let profession="Programmer"
 console.log(firstName , profession);

 let job1= 'Programmer';
 let job2='Senior Developer';
 console.log(` job1 is ${job1} and job2 is ${job2}`);
*/

// ************************   DATA TYPES  ************************
/*
let javaSriptIsFun = true;
console.log(javaSriptIsFun);

console.log(typeof true);
console.log(typeof "faiz");
console.log(typeof 23);
console.log(typeof " ");

javaSriptIsFun = "YESS!!";
console.log(typeof javaSriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null);
*/

// ************************   LET , CONST & VAR  **********************
/*
let age = 25;
age = 27;                   // (LET CAN BE MUTATED)
console.log(age);

const birthYear=1998;
// birthYear=2001;          (CONST CAN NOT B MUTATED)
console.log(birthYear);

var job='Programmer';
job='Senior Developer';      // (VAR CAN BE MUTATED)
console.log(job);
*/

// ************************  BASIC OPERATORS  **********************

// MATH OPERATORS
const now = 2037;
const ageFaiz = now - 1998;
const ageFaisal = now - 2018;
console.log(ageFaiz, ageFaisal);

console.log(ageFaiz * 2, ageFaisal / 10, 2 ** 3);

const firstName = "Faiz";
const lastName = "Khan";
console.log(firstName + " " + lastName + ".");

// ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//COMPARISION OPERATORS
console.log(ageFaiz > ageFaisal);
console.log(ageFaisal >= 18);

const isFullAge = ageFaisal >= 18;
console.log(now - ageFaiz > now - ageFaisal);

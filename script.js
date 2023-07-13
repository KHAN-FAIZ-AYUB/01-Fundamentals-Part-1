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
/*
//***MATH OPERATORS***
const now = 2037;
const ageFaiz = now - 1998;
const ageFaisal = now - 2018;
console.log(ageFaiz, ageFaisal);

console.log(ageFaiz * 2, ageFaisal / 10, 2 ** 3);

const firstName = "Faiz";
const lastName = "Khan";
console.log(firstName + " " + lastName + ".");

// ***ASSIGNMENT OPERATORS***
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//***COMPARISION OPERATORS***
console.log(ageFaiz > ageFaisal);
console.log(ageFaisal >= 18);

const isFullAge = ageFaisal >= 18;
console.log(now - ageFaiz > now - ageFaisal);
*/

// ************************  PREFRENCE  **********************
/*
const now = 2037;
const ageFaiz = now - 1998;
const ageFaisal = now - 2018;

console.log(now - ageFaiz > now - ageFaisal);

let x, y;
x=y=25-10-5;
console.log(x,y);

const average=(ageFaiz + ageFaisal)/2;
console.log(ageFaiz, ageFaisal, average);
*/

// ************************  CHALLENGE #01  **********************
/*
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// ************************  STRINGS & TEMPLATE LITERAL  **********************
/*
const firstName='Faiz';
const job='Programmer';
const birthYear = 1998;
const year=2037;
const age=year-birthYear;

const faizNew=`I'm ${firstName} a ${age} years old ${job}.`;
console.log(faizNew);
*/

// ************************  IF ELSE  **********************
/*
const age = 19;

if (age >= 18) {
  console.log(`Sarah is ${age} and she can start driving`);
} else {
  console.log(`Sarah is ${age} and she can not start driving`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// ************************ CHALLENGE #02  **********************
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
if(BMIMark>BMIJohn){
    console.log(`${BMIMark} Mark BMI is higher`);
    }
    else{
        console.log(`${BMIJohn} John BMI is higher`)
    }
*/

// ********************* TYPE CONVERSION & COERCION *********************

// ***type conversion***
/*
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Faiz"));
console.log(typeof NaN);

console.log(String(22), 22);

// ***type coercion***

console.log("i am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// *********************  *********************

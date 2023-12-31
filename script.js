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

// *********************TRUTHY & FALSY *********************
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("faiz"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log(`you have $${money} Dont spend it all`);
} else {
  console.log("get a job and earn money");
}

let height = 5.8;
if (height) {
  console.log("YAA Height is defined");
} else {
  console.log("Please enter your height");
}
*/

// *********************  EQUALITY OPERATOR  *********************
/*
const age = "18";
if (age === 18) console.log("You just became an adult (STRICT)");

if (age == 18) console.log("You just became an adult (LOOSE)");

const favourite = Number(prompt("Whats your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool 23 is amaizing number");
} else if (favourite === 7) {
  console.log("Cool 7 is an amazing number");
} else if (favourite === 9) {
  console.log("Cool 9 is an amazing number");
} else {
  console.log("You have entered a wrong number");
}

if (favourite !== 23) {
  console.log("you have entered a wrong number plz enter 23 or 7 or 9");
}
*/

// *********************  LOGICAL OPERTORS  *********************
/*
const hasDrivingLicensse = true;
const hasGoodVision = false;

console.log(hasDrivingLicensse && hasGoodVision);
console.log(hasDrivingLicensse || hasGoodVision);
console.log(!hasDrivingLicensse);

// if (hasDrivingLicensse && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired =true;
console.log(hasDrivingLicensse && hasGoodVision && isTired);

if (hasDrivingLicensse && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
  } else {
    console.log("Someone else should drive...");
  }
  */

// *********************  CHALLENGE #03  *********************
/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy🏆");
// } else if (scoreDolphins === scoreKoalas) {
//       console.log('Koalas and Dolphins both win the trophy🏆');
// }
//  else{
//     console.log('Koalas and Dolphins both loose the trophy🏆');
// }

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Koalas and Dolphins both win the trophy🏆");
} else {
  console.log("Koalas and Dolphins both loose the trophy🏆");
}
*/

// *********************  SWITCH STATEMENT  *********************
/*
const newDay = prompt("Pleas enter a day");

switch (newDay) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to cosing meetup");
    break;
  case "tuesday":
    console.log("Prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code example");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Solo ride");
    break;
  default:
    console.log("you have entered a wrong choice");
}

// #############################################################

let day = prompt("Pleas enter a day");

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to cosing meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Solo ride");
} else {
  console.log("you have entered a wrong choice");
}
*/

// *********************  TERNARY OPERATOR *********************
/*
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

// *********************  CHALLENGE #04  *********************
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

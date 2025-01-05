//math built  in objects
/*/
console.log(Math.E);
let x = 3;
let y = 2;
let z;
z = Math.sin(x);
console.log(z);
let max = Math.max(x,y,z);
let min = Math.min(x,y,z);
console.log(max);
/*/

//const min = 50;
//const max = 100;

//let randomNum = Math.floor(Math.random() * (max - min)) + min;
//
//console.log(randomNum);

/*/ this is random number generator
const myButton = document.getElementById("Mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;



myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) +  min;
    randomNum2 = Math.floor(Math.random() * max) +  min;
    randomNum3 = Math.floor(Math.random() * max) +  min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;


}

/*/


//if statements
/*/
let age = 13;


if(age >= 18){
    console.log("you are old enough to enter this site");
}
else{
    console.log("you must be 18+ to enter this site")
}


let time = 9;

if(time < 12){
    console.log("Good Morning");
}
else{
    console.log("Good Afternoon");
}
/*/


//boolean if statements:
/*/
let isStudent = true;

if(isStudent){
    console.log("you are a student");
}
else{
    console.log("you are not a student!");
}
/*/

//nested if statements
/*/

let age = 18;
let hasLicense = false;

if (age >= 16) {
    console.log("You are old enough to drive");

    if (hasLicense) {
        console.log("You have your license");
    } else {
        console.log("You do not have your license yet!");
    }
} else {
    console.log("You must be 16+ to have a license");
}
/*/

//else if statements:

/*/ 

const myText = document.getElementById("myText");
const Mysubmit = document.getElementById("Mysubmit");
const resultElement = document.getElementById("resultElement");

Mysubmit.onclick = function () {
    let age = Number(myText.value);

    if (age >= 100) {
        resultElement.textContent = 'You are too OLD to enter this site';
    } else if (age == 0) {
        resultElement.textContent = 'You can’t enter, you were just born';
    } else if (age > 18) {
        resultElement.textContent = 'You are old enough to enter this site';
    } else if (age < 0) {
        resultElement.textContent = "Your age can’t be below 0";
    } else {
        resultElement.textContent = "You must be eighteen plus to enter this site";
    }
};


/*/




//checked properties in js

/*/
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MastercardBtn = document.getElementById("MastercardBtn");
const paypalBTN = document.getElementById("paypalBTN");
const Mysubmit = document.getElementById("Mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

Mysubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = " You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with Visa";
    }
    else if(MastercardBtn.checked){
        paymentResult.textContent = " you are paying with mastercard";

    }
    else if(paypalBTN.checked){
        paymentResult.textContent = " you are paying with paypal";
    }
    else{
        paymentResult.textContent = " you must select a payment type";
    }

}

/*/

//ternary operators:

//let age = 12;
//let message = age >= 18 ? "Your an adult" : "Your a minor";
//console.log(message);

/*/
let time  = 9;
let greeting = time < 12 ? "good morning" : "Good afternoon";
console.log(greeting);


let isStudent = false;
let message = isStudent ? "you are a student " : "you are not a student";
console.log(message);

/*/


/*/
let purchaseamount = 99;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseamount - purchaseamount * (discount / 100)}`);
/*/


// switches

/*/
let day = "pizza";

switch(day){
    case 1: 
        console.log("It is Monday");
        break;
    case 2: 
        console.log("It is Tuesday");
        break;
    case 3: 
        console.log("It is Wednesday");
        break;
    case 4: 
        console.log("It is Thursday");
        break;
    case 5:
        console.log("it is friday");
        break;
    case 6:
        console.log("it is Saturday");
        break;
    case 7:
        console.log("it is Sunday");
        break;

    default:
        console.log(`${day} is not a day`);

    
}



let testScore =33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}


console.log(letterGrade);


/*/


//string methods
/*/
let phoneNumber = "703-609-0361"


phoneNumber = phoneNumber.padEnd(20,"0");
console.log(phoneNumber);
/*/

/*/
const email = "pbhattar@gmu.edu";

let username = email.slice(0,email.indexOf("@"));


let extension = email.slice(email.indexOf("@")+1)

console.log(username);
console.log(extension);
/*/



//method chaining in javascript
//let username = window.prompt("enter your username");
//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//console.log(username);



//logical operators
/*/
const temp = -250;

if(temp <= 0 || temp > 30){
    console.log("The weather is bad");
}
else{
    console.log("the weather is good ");
}
/*/


//using nots
//const isSunny = true;

//if(!isSunny){
 //   console.log("it is cloudy");
//}
//else{
 //   console.log("it is sunny");
//}


//strict equality operator
/*/
const PI = "3.14";


if(PI !== "3.14"){
    console.log("That is not PI");
}
else{
    console.log("That is pi");
}



//so for === this compares data types along with the values
/*/



//while loops
//let username;

//while(username === "" || username == null){
  //  username = window.prompt("Enter your username") ;  
//} 
//console.log(`Hello ${username}`);

/*/
let loggedIn = true;
let username;
let password;

do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your Password");

    if(username === "myUsername" && password === "Mypassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid Credentials Please Try Again");}
    }while(!loggedIn)


/*/


//for loops

//for(let i = 10; i > 0; i-=2){
//    console.log(i);
//}
//console.log("Happy new year");


//continued/break for loops:



//continue key words allow u to skip an iteration

//break is breaks out of loops completely
/*/

for(let i =1; i <= 20; i++){
    if(i == 13){
        break;
    }
    else{
        console.log(i);
    }
}

/*/




//functions
/*/
function happyBirthday(username, age){
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log(`happy birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}

happyBirthday("Bro Code", 25);
happyBirthday("spongebob",30);
happyBirthday("patrick",37);
*/


/*/

function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y ;
}


function multiply(x,y){
    return x * y ;
}


function divide(x,y){
    return x / y ;
}


function isEven(number){
    if(number % 2 === 0){
        return number % 2 === 0 ? true : false;
}

console.log(multiply(2,3));
console.log(divide(2,3));
console.log(sub(2,3));
console.log(add(2,3));


console.log(isEven(11));

/*/


/*/
function isValidEmail(email){
return (email.includes("@")) ? true : false;

}
console.log(isValidEmail("pbhattargmail.com"));
console.log(isValidEmail("elonmusk.com"));
console.log(isValidEmail("zukerbrong@meta.com"));


/*/



//variable scopes


/*/
let x = 3;  //global variable



// so local variables are prioritized
function2();


function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}



/*/


//arrays


//let fruits = ["apple", "orange" , "bananna", "coccunut"];


//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("Mango");
//fruits.shift();

/*/
let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");
console.log(index);


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

/*/



//using a for loop for arrays


/*/
for(i = fruits.length; i  >= 0 ; i--){
    console.log(fruits[i])
}

fruits.sort().reverse();
for(let fruit of fruits)
    console.log(fruit);



/*/



//spread operator



/*/
let numbers = [1,2,3,4,5];


let maximum = Math.max(...numbers);

let minimum = Math.min(...numbers);
console.log(minimum);

/*/

/*/
let username = "Raymond Quan";
let letters = [...username].join("-");

console.log(letters);
/*/


//arrays of fruits

//spread operator
//let fruits = ["apple", "orange","coconut"];

//let vegetables = ["carrots","celery","tomatoes"];


//let foods = [...fruits, ...vegetables, "eggs", "milk"] ;
//console.log(foods);


//rest parameters
/*/
function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;

}
const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";


//openFridge(food1,food2,food3,food4,food5);


const foods = getFood(food1,food2,food3,food4,food5);


console.log(foods);

/*/

/*/
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,3,4,5);

console.log(`Your total is $${total}`);

/*/


/*/
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}


const total = getAverage(75,100,85,90,50);


console.log(total);
/*/

/*/
function combineStrings(...strings){
    return strings.join(" ");
}


const fullname = combineStrings("Mr", "Spongebob","Squarepants", "III");
console.log(fullname);

/*


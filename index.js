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
const PI = "3.14";


if(PI !== "3.14"){
    console.log("That is not PI");
}
else{
    console.log("That is pi");
}



//so for === this compares data types along with the values
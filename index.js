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

/*/


//random password generator

/*/
function generatePassword(length, includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
    const Numberchars = "0123456789";
    const symbolChars = "!@#$%&*()+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChar : "";
    allowedChars += includeUppercase ? uppercaseChar : "";
    allowedChars += includeNumbers ? Numberchars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
     return  '(password length must be at least 1)';
    }

    if(allowedChars.length === 0){
        return '(at least 1 set of characters needs to be selected';
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];

        return password;
    }
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;



const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);



console.log(`Generated password : ${password}`);
/*/


//callbacks
/*/

hello(wait);



function hello(callback){
    console.log("hello");
    callback();
}


function leave(){
    console.log("Leave!");
}



function wait(){
    console.log("wait");
}


function goodbye(){
    console.log("goodbye");
}

/*/


/*/

sum(DisplayConsole, 1, 2);



function sum(callback, x, y){
    let result = x + y;
    callback(result);


function DisplayConsole(result){
    console.log(result);
}



function displayPage(result){
    document.getElementById("myH1").textContent = result;

}
}
/*/

/*/


let numbers = [1,2,3,4,5];




numbers.forEach(square);


numbers.forEach(display);



function double(element, index, array){
    array[index] = element * 2;

}



function triple(element, index, array){
    array[index] = element * 3;

}




function square(element,index, array){
    array[index] = Math.pow(element,2);
}






function cube(element,index, array){
    array[index] = Math.pow(element,2);
}







function display(element){
    console.log(element);

}

/*/


/*/
let fruits = ["apple","orange","bannana","coconut"];


fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(enulement,index,array){
    array[index] = element.toUpperCase();
}
function display(element){
    console.log(element);
}





function capitalize(element,index,array){
    array[index] = element.charAt[0].toUpperCase() + element.slice(1);
}


function lowercase(element,index,array){
    array[index] = element.toLowerCase();
}

/*/

/*/

const numbers = [1,2,3,4,5];


const squares = numbers.map(square);



const cubes = numbers.map(cube);
console.log(squares);



function square(element){
    return Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}
    /*/

/*/
const students = ["spongebob","patrick","squidward", "sandy"];

const studentsUpper = students.map(upperCase);

const StudentsLower = students.map(lowercase);

function upperCase(element){
    return element.toUpperCase();
}


function lowercase(element){
    return element.toLowerCase();
}

/*/


/*/
const dates = ["2024-1-10","2025-2-20","2026-2-23"];

function formatDates(element){

    const parts = element.split("-");
    return `${parts[1]}`/${parts[2]}/${parts[0]};



}

/*/




/*/
//filtering

let numbers = [1,2,3,4,5,6.7];


letevenNums = numbers.filter(isEven);

letODDNUMs = numbers.filter(isODD);



console.log(evenNums);


function isEven(element){
    return element % 2 === 0;
}


function isODD(element){
    return element % 2 != 0;
}



const age = [16,17,18,18,19,20,60];


function isAdult(element){
    return element >=
}


/*/


/*/
//class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}


const user1 = new User("Spongebob")
const user2 = new User("Patrick")
const user3 = new User("Sandy")



const user1 = new User("Spongebob");

/*/



//inheritaance
/*/
// helps with code reusability
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
}

class Fish extends Animal {
    name = 'fish';
}

class Hawk extends Animal{
    name = "Hawk";
}


const rabbit = newRabbit();
const fish = new Fish();
const hawk = new Hawk();


rabbit.alive = deadl
console.log(rabbit.alive);


rabbit.eat();
rabbit.sleep();

/*/



/*/
class Animal {
    constructor(name, age) {
    }
  }
  
  class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
      this.name = name;
      this.age
      this.runSpeed = this.runSpeed;
  


class Fish extends Animal{
    constructor(name, age, SwimSpeed) {
        this.name = name;
        this.age
        this.SwimSpeed = this.swimSpeed;
}


class Hawk extends Animal{
    constructor(name, age, FlySpeed) {
        this.name = name;
        this.age
        this.Flyspeed = this.Flyspeed;
}
 


const rabbit  = new Rabbit("rabbit", 1, 25);
const fish  = new Fish("fish", 1, 25);
const hawk = new Hawk("hawk",2,4);



console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flyspeed);

/*/



//destructuring 
/*/
let a = 1;
let b = 1;


[a,b] = [b,a];

console.log(a);
console.log(b);





const colors = ["red","green","blue,"black", "white"];

    consr [firstcolor, secondcolor, thirdcolor] = colors;


    console.log(foirstcolor);
    console.log(secondcolor);
    console.log(thirdcolor);





function displayPerson({firstName,lastName,age,job}){
console.log(name : ${firstname}, ${lastname});
}




displayPerson();


    const person1 = {
        firstName: "Spongebob",
        lastName: "SquarePants",
        age: 30,
        job: "Fry Cook",
    }
    
    const person2 = {
        firstName: "Patrick",
        lastName: "Star",
        age: 34,
    }

    const { firstName, lastName, age, job="Unemployyed" } = person1;

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
    
    




    //nested objects
    const person = {
        fullName: "Spongebob Squarepants",
        age: 30,
        isStudent: true,
        hobbies: ["karate", "jellyfishing", "cooking"],
        address: {
            street: "124 Conch St.",
            city: "Bikini Bottom",
            country: "Int. Water"
        }
    };
    
    console.log(person.fullName);
    console.log(person.age);
    console.log(person.isStudent);
    console.log(person.address.hobbies[2]);
    console.log(person.address.country);


    for ( const property in person.address){
        console.log(person.address[property]);
    }



    class Person {
        constructor(name, age, ...address) {
            this.name = name;
            this.age = age;
            this.address = new Address(...address);
        }
    }
    
    class Address {
        constructor(street, city, country) {
            this.street = street;
            this.city = city;
            this.country = country;
        }
    }
    
    const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Water");
    


    const person2 = new Person("Patrick", 37, "123 Conch St.", "Bikini Bottom", "Int. Water");

    
    const person3 = new Person("squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Water");


    console.log(person3.address.country);



//array of objects

const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }
];


console.log(fruits[0].calories);

fruits.push(name: "grapes")

fruits.splice(1,2);

fruits.forEach(fruit => console.log(fruit.calories))



const fruitNames = fruit.map(fruit => fruit.name);

const yellowfruits = fruits.filter(fruit => fruit.color === "yellow");

const lowcalfruits = fruits.filter(fruit => fruit.calories < 100);
console.log(yellowfruits);



const maxfruit = fruits.reduce(max , fruit) => fruits.calories > max.calories ? fruit : max);

console.log(maxFruit);




const minfruit = fruits.reduce(max , fruit) => 
    fruits.calories < max.calories ? fruit : min);

console.log(minfruit);

/*/

//sort methods
/*/
const people = [
    { name: "Spongebob", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 37, gpa: 1.5 },
    { name: "Squidward", age: 51, gpa: 2.5 },
    { name: "Sandy", age: 27, gpa: 4.0 }
];

people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);

/*/



//shuffling an array
// Fisher-Yates algorithm

/*/
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
/*/

//date objects
/*/

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(daysOFweek);

DataTransfer.setFullYear(2025);
date.setMonth(0);
date.setDate(1);


function celar timer()
/*/


//
/*/
function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);



//error handling 
try {
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
} catch (error) {
    console.error(error);
}
finally{
    //closefiles
    //closeconnections
    // release resources
    console.log("this always executes");
}

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
} catch (error) {
    console.error(error);
}

}
/*/
/*/

document.title = " my website";
document.body.style.backgroundColor = "hsl(0,0,15)"

console.dir(document);


const username = "Bro Code";
const welcomeMsg = document.getElementById("welcome-msg")


welcomeMsg.textcontent += username === "" ? 'Guest' : username;

console.dir(document);

//element selectors:
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAllign = "center";
console.log(myHeading);


const fruits = document.getElementsByClassName("fruits");


fruits[0].style.backgroundColor = "yellow";

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
console.log(fruits);


fruits.forEach(); //dotn work 

Array.from(fruits).forEach(fruit =>){
    fruit.style.backgroundColor="yellow";
}



consth4Elements = document.getElementsByTagName("h4");

const liElements = document.getElementsByTagName("li")
h4Elements[0].style.backgroundColor = "yellow";


for (let liElements of liElements){



Array.from(h4Elements).forEach(h4Element =>){

}

/*/



//Dom Navigation:
// ----------- EXAMPLE 3 <li> -----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
// document.body.prepend(newLink);
// document.getElementById("box1").append(newLink);
// document.getElementById("box4").prepend(newLink);

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newLink, box4);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newLink, boxes[4]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);

const button = document.getElementById("button");
const display = document.getElementById("display");
let number = 0;

button.onclick = function(){
    number = Math.floor(Math.random()*10 + 1)
    display.textContent = number;
}
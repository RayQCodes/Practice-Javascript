const IncreaseBTN = document.getElementById("IncreaseBTN");
const DecreaseBTN = document.getElementById("DecreaseBTN");
const ResetBTN = document.getElementById("ResetBTN");
const display = document.getElementById("display");

let count = 0;

IncreaseBTN.onclick = function(){
    count += 1;
    display.textContent = count;
}


DecreaseBTN.onclick = function(){
    count -= 1;
    display.textContent = count;
}



ResetBTN.onclick = function(){
    count = 0;
    display.textContent = count;
}



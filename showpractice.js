const increasebutton = document.getElementById("incbutton");
const decreasebutton = document.getElementById("decbutton");
const resetbutton = document.getElementById("resbutton");
const display = document.getElementById("display")
let count=0;
increasebutton.onclick = function(){
    count += 1;
    display.textContent = count;
}


decreasebutton.onclick = function(){
    count -= 1;
    display.textContent = count;
}



resetbutton.onclick = function(){
    count = 0;
    display.textContent = count;
}
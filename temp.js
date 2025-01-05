const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

function convert() {
    const tempValue = Number(textBox.value); 
    if (toFahrenheit.checked) {
        const fahrenheit = tempValue * 9 / 5 + 32;
        result.textContent = fahrenheit.toFixed(1) + "°F";
    } else if (toCelcius.checked) {
        const celsius = (tempValue - 32) * 5 / 9;
        result.textContent = celsius.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a unit.";
    }
}

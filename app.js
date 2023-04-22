function fahcelConversion(){
    let userInput = document.getElementById("userInput").value;
    let celcius = (userInput - 32) * 5/9;
    let fahrenheit = (userInput * 9/5) + 32;
    //toFixed() is amount of decimal
    document.getElementById("resultC").innerHTML = celcius.toFixed(2) + " °C";
    document.getElementById("resultF").innerHTML = fahrenheit.toFixed(2) + " °F";
}
function fahcelConversion(r){
    let rC = (r - 32) * 5/9;
    let rF = (r * 9/5) + 32;
    //toFixed() is amount of decimal
    return {rC: rC.toFixed(2), rF: rF.toFixed(2)}
}
function displayTemperature(){
    let temp = document.getElementById("userInput").value
    let result = fahcelConversion(temp)
    document.getElementById("resultC").innerHTML = result.rC + " °C"
    document.getElementById("resultF").innerHTML = result.rF + " °F"
}
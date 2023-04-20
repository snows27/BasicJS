function getScore(){
    let calScore = document.getElementById("score").value
if(calScore >= 80){
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด A</b>"
}
else if(calScore >= 60 && calScore < 80) {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด B</b>"
}
else if(calScore >= 40 && calScore < 60) {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด C</b>"
}
else if(calScore >= 20 && calScore < 40) {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด D</b>"
}
else {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด F</b>"
}
}

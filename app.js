let score = parseInt(prompt("กรุณากรอกคะแนนของคุณ"));
if(score >= 80){
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด A</b>"
}
else if(score >= 60 && score < 80) {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด B</b>"
}
else if(score >= 40 && score < 60) {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด C</b>"
}
else if(score >= 20 && score < 40) {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด D</b>"
}
else {
    document.getElementById("result").innerHTML = "<b>คุณได้เกรด F</b>"
}
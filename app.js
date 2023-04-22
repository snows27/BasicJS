let round = parseInt(prompt("How many rounds do you want to play?"));
let arrAns = ["HEAD", "TAIL"]
let score = 0;
for(i = 0; i < round; i++){
let answer = prompt("Guess it!! 'Head' or 'Tail'");
let randIndex = Math.floor(Math.random()*arrAns.length);
let randAns = arrAns[randIndex]
   let answerUP = answer.toUpperCase();
   console.log(answerUP);
   console.log(arrAns);
    if(answerUP == randAns){
        score++;
        document.getElementById("result").innerHTML += "round: "+(i+1) + " You won" +"<br />" + "Your answer is: "+answer + "<br />" + "The answer is: "+randAns+"<br />"+"<br />";
        alert("Correct")
    }
    else {
        document.getElementById("result").innerHTML += "round: "+(i+1) + " You lost"+ "<br />" + "Your answer is: "+answer + "<br />" + "The answer is: "+randAns+"<br />"+"<br />";
        alert("Miss")
    }
}
document.getElementById("score").innerHTML = "Your score is: " + score
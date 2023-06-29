let firstVocab = prompt("Enter your 'first' vocabulary")
let secondVocab = prompt("Enter your 'second' vocabulary")

function anaGram(){
if (firstVocab.length !== secondVocab.length){
    return false;
}
let countFirst = {}
let countSecond = {}

for(i=0; i<firstVocab.length; i++){
let charF = firstVocab[i]
let charS = secondVocab[i]
countFirst[charF] = (countFirst[charF] || 0) + 1;
countSecond[charS] = (countSecond[charS] || 0) + 1;
}
for (let char in countFirst){
    if(countFirst[char] !== countSecond[char]){
        return false;
    }
}
return true;
}
console.log(anaGram(firstVocab,secondVocab))
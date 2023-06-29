//Get 2 words to compare Anagram system.
let firstVocab = prompt("Enter your 'first' vocabulary")
let secondVocab = prompt("Enter your 'second' vocabulary")

//The logic of anagram is the frequency of each characters in the word should be the same.
function anaGramWords(){
    //split both words to the characters
    let checkFV = [...firstVocab]
    let checkSV = [...secondVocab]
    //check length of 2 words If it not the same it can't be anagram
    if (checkFV.length !== checkSV.length){
        console.log("NOT Anagram");
        return;
    }
    //but.. if it the same it will continue to check each characters are the same?

    const charCountFV = {}; // the object declare to store key and value {key: value}.
    const charCountSV = {}; // the object declare to store key and value {key: value}.
    //the loop will check by the key which is the character.
    for (let i=0; i<checkFV.length; i++){ // let's say the word is "iceman" and "cinema".
        const charFV = checkFV[i] // the result of charFV is: [i, c, e, m, a, n] in each iteration.
        const charSV = checkSV[i] // the result of charSV is: [c, i, n, e, m, a] in each iteration.
        charCountFV[charFV] = (charCountFV[charFV] || 0) + 1; // all of characters it is not the same so the key will not duplicate means all frequency of key will equal to 1.
        charCountSV[charSV] = (charCountSV[charSV] || 0) + 1; // this step the same as above just different word.
    }
    //declare "char" to get each Characters per iteration
    for (let char in charCountFV){
    if (charCountFV[char] !== charCountSV[char]){
        console.log("NOT Anagram");
        return;
    }
}
        console.log("IS Anagram");
    
}
anaGramWords();

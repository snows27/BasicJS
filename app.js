//find max value
var arr = [6, 1, -50, 200, 7, 9, -13, 20]
var maxNum = arr[0] //index

for (i=1; i<arr.length;i++){
    if(arr[i] > maxNum){
        maxNum = arr[i]
    }
}
console.log(`1. The Answer is The result is: ${maxNum}`);

//number 1-100 if the number divisible by 3 print 'FIZZ'
//             if the number divisible by 5 print 'Buzz'
//             if the number divisible by 3,5 print 'FizzBuzz'
var result = []
for(i=1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
       let String = "fizzBuzz"
       result.push(String)
    }
    else if(i % 5 === 0) {
        let String = "Buzz"
        result.push(String)
    //    console.log("Buzz");
    }
    else if(i % 3 === 0){
        let String = "Fizz"
        result.push(String)
    //    console.log("Fizz");
    }
    else {
        result.push(i)
        // console.log(i);
    }
}
console.log("2. "+result.join(" | "));


// Palindrome ? True: False
let text = prompt("Type to check Palindrome")
let textarr = text.split("").reverse().join("")
if (text === textarr){
    console.log(`3. the "${text}" is the Palindrome`);

} else {
    console.log(`3. the ${text} is not the Palindrome`);
}

//list the duplicate name
let Firstlist = ["alice", "job", "trudy", "jack"]
let Secondlist = ["janet", "alice", "james", "jack"]
let duplicate = []
for(i=0; i < Firstlist.length; i++){
    for(j=0; j < Secondlist.length; j++){
        if(Firstlist[i] === Secondlist[j]){
            duplicate.push(Firstlist[i])
        }
    }
}
console.log("4. "+duplicate.join(" "));

//the target number of fibonacci number 
function fibonacci(n){
    if(n <= 1) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(`5. The number sequence is: ${fibonacci(5)}`); 

//in arrayNumber of [1 5 13 2 7 6] by adding in array equal to targetSum?
const arrNum = [1, 5, 13, 2, 7, 6]
const sumPrompt = parseInt(prompt("The targetSum you want"))
for(i=0; i < arrNum.length; i++){
    for(j=0; j < arrNum.length; j++){
       if(arrNum[i] + arrNum[j] === sumPrompt){
        console.log(`6. The sum ${sumPrompt} can be achieved by adding ${arrNum[i]} and ${arrNum[j]}`);
        break;
       } 
       else {
        console.log(`6. ${sumPrompt} is not in list of [${arrNum.join(" ")}] by adding together`);
        break;
       }
    }
}

//Find the most frequently encountered words by given word
const word = "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous"
const wordCount = {}
const wordFilter = word.toLowerCase().replace(/[.,-]/g, '').split(' ')
console.log(wordFilter);
for(i=0; i<wordFilter.length;i++){
    if(wordCount[wordFilter[i]]){
        wordCount[wordFilter[i]]++
    } else {
        wordCount[wordFilter[i]] = 1;
    }
}
let maxCount = 0;
let mostFreqWord = '';
for(let word in wordCount){
    if(wordCount[word] > maxCount){
        maxCount = wordCount[word];
        mostFreqWord = word;
    }
}
console.log(`The most frequent word is "${mostFreqWord}" with a count of ${maxCount}`);
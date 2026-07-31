// let arr = [1,2,3]
// console.log(arr.reverse());

// let str = "programming";
// console.log(str[5]);

// console.log("string length", str.length);
// console.log("string length", str.length - 3);
// let reverseWord = "";

// // without function
// for(let i = str.length - 1; i >=0; i--){
//     let letter = str[i];
//     console.log("i->", i , letter);
//     reverseWord += letter;
// }
// console.log(reverseWord);


// with function
function reverseWord(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        console.log("i ->", i, letter);
        reversed = reversed + letter;
    }

    return reversed;
}

console.log(reverseWord("programimg"));
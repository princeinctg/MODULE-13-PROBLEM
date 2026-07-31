let str = "programme Hero";

// for(let i = 0; i < str.length; i++){
//     let letter = str[i];
//     console.log("i, -> letter ->>> ", i ,letter);
    
// }

// include
let vowels = "aeiou";
console.log(vowels.includes('e'));



// let str = "programme Hero";

// for(let i = 0; i < str.length; i++){
//     let letter = str[i];
//     console.log("i, -> letter ->>> ", i ,letter);
//     if(vowels.includes(letter)){
//         console.log("vowel");
        
//     }
    
// }

// let str = "programme Hero";
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     let letter = str[i];
//     console.log("i, -> letter ->>> ", i ,letter);
//     if(vowels.includes(letter)){
//         console.log("vowel");
//         count++;
//     }
    
// }
// console.log("count->>",count);


// with function
function countVowels(str){

    let count = 0;
for(let i = 0; i < str.length; i++){
    let letter = str[i];
    console.log("i, -> letter ->>> ", i ,letter);
    if(vowels.includes(letter)){
        console.log("vowel");
        count++;
    }
}
return count;
}
console.log(countVowels("programme hero"));

let phVowelCount = countVowels("programming Hero");
console.log("Programming Hero te vowel ache", phVowelCount);

let bdVowelCount = countVowels("Bangladesh");
console.log("Bangladesh Hero te vowel ache", bdVowelCount);


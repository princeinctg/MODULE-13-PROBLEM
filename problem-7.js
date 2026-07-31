let str = "madam";
let str2 = "madam";
// console.log(str === str2);

// without function
// let reverseStr = "";
// for(let i = str.length - 1; i>=0; i--){
//     let letter = str[i];
//     reverseStr = reverseStr + letter;
// }
// console.log(reverseStr);


// if(str === reverseStr){
//     console.log("palindrome");
    
// }else{
//         console.log("no palindrome");

// }

// with function
function isPalindrome(str){
    let reverseStr = "";
    for(let i = str.length - 1; i>=0; i--){
    let letter = str[i];
    reverseStr = reverseStr + letter;
}

console.log(reverseStr);
if(str === reverseStr){
    return true;
} 
else{
    return false;
  }
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('bangladesh'));
console.log(isPalindrome('deed'));

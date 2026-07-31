// factorial of number

let number = 3;
let result = 1;

// // witout function
// for(let i =1 ; i <= number ; i++){
//     console.log("i=>", i);
//     result = result * i;
// }
// console.log("result=>",result);

// with function
function getFactorial(number){
    let result = 1;
    for(let i =1 ; i <= number ; i++){
    console.log("i=>", i);
    result = result * i;
    }
    return result;
}
console.log(getFactorial(5));
let factorialOffour = getFactorial(4);
console.log(factorialOffour);

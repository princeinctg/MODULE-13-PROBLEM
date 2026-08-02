// let arr = [10,20,50,150,6,7,9,11,23];

// let evenNumbers = [];

// for(let i = 0; i < arr.length; i++){  

// if(arr[i] % 2 === 0){
//     evenNumbers.push(arr[i]);
// }
// }
// console.log("Even numbers:", evenNumbers);

// let sum = 0;
// for (let key in evenNumbers) {
//     console.log(key); // index: 0, 1, 2, 3, 4
//     sum += evenNumbers[key];
// }

// console.log("Sum of even numbers:", sum);






// with function
function getEvenNumbers(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    console.log("Even numbers:", evenNumbers);

    let sum = 0;
    for (let key in evenNumbers) {
        console.log( key);
        sum += evenNumbers;
    }

    console.log("Sum of even numbers:", sum);

    return evenNumbers;
}

// Define the array first
let arr = [1, 2, 3, 4, 5, 6, 8, 10];

let evenNumbers = getEvenNumbers(arr);

console.log("Returned even numbers:", evenNumbers);
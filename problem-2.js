// let number = 7;

// for(let i = 1; i <=number; i++){
//     // console.log('i=>>', i);
    
// }

// let number = 7;
// let sum = 0;

// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log(sum); 


function sumRange(number){
    let sum = 0 ;
    for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log('i=>>', i);
}
return sum;
}

console.log(sumRange(7));

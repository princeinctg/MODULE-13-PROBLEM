let number = 17;

// without function
// for(let i = 1; i <=number; i++){
//     console.log('i=>', i);
//     if(i %3 === 0){
//         console.log("fizzBuzz");
//     }
//     else if(i %5 === 0){
//         console.log('buzz');
//     }
//     else if(i %3 === 0 && i %5 === 0){
//        console.log('Buzz');
//     }
//     else{
//         console.log(i);
        
//     }
// }


// with function
function fizzBuzz(number){
    for(let i = 1; i <=number; i++){
    console.log('i=>', i);
    if(i %3 === 0){
        console.log("fizzBuzz");
    }
    else if(i %5 === 0){
        console.log('buzz');
    }
    else if(i %3 === 0 && i %5 === 0){
       console.log('Buzz');
    }
    else{
        console.log(i);
        
    }
}
}
fizzBuzz(50);
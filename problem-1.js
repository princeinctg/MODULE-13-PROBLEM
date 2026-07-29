let number = 7;



// without function
if(number %2 === 0){
    console.log("even number");
    
} else{
    console.log("odd number");
    
}

// with function
function cheakEvenorOdd(number){
    if(number % 2 ===0 ){
        return "even number";
    }
    else{
        return 'odd number';
    }
} 

console.log(cheakEvenorOdd(25));
console.log(cheakEvenorOdd(26));

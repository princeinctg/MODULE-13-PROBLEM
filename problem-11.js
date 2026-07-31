let arr = [1,2,5,10];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    sum += arr[i];
}

console.log(sum);
let avg = sum / arr.length;
console.log("Average", avg);


function generatrAvg(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
  
    sum += arr[i];
}
 let avg = sum / arr.length;
 return avg;
}

console.log(generatrAvg([5,10,15]));
console.log(generatrAvg([50,4,35]));

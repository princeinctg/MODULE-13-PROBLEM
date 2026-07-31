let arr = [10,20,30,40,50,60,70,80,90,100];
let value = 45;

let fillteredArray = [];

for(let i =0; i <arr.length; i++ ){
    console.log(arr[i]);
    if(arr[i] > value){
        fillteredArray.push(arr[i]);
    }
}
console.log(fillteredArray);

// with function
function getFilteredArray(arr , value){
    let fillteredArray = [];

for(let i =0; i <arr.length; i++ ){
    console.log(arr[i]);
    if(arr[i] > value){
        fillteredArray.push(arr[i]);
    }
    
}
return fillteredArray;
}

console.log(getFilteredArray([10,20,30,40,50,60,70,80,90,100],     65));

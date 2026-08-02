let monitor = {
    color: "black",
    brand: "LG",
    display: "something",
    size: "something",
}    

console.log(monitor["color"]);
console.log(monitor.brand);
 
for(let key in monitor){
    console.log(key , ":" , monitor[key]);
}

// using keys method

let objectKeys = Object.keys(monitor);
console.log(objectKeys);

for(let i = 0; i < objectKeys.length; i++){
    let key = objectKeys[i];
    console.log(key , ":" , monitor[key]);
}
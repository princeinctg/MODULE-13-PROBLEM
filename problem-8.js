let arr = ["code","bangladesh","dhaka"]
console.log(arr.length);

let str = "programme hero";
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split(" ").length);
console.log(str.split("r"));


// with function

function wordCount(str){
    let strSplitArr = str.split("");
    return strSplitArr.length;
}
console.log(wordCount("hello bangladesh"));

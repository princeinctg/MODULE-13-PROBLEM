const students = {
    name: "utsho",
    age: 25,
    university: "Dhaka University",
    department: "CSE",
};

function objectOperation(obj) {
    for (let key in obj) {
        console.log(key);
    }
    for (let key in obj) {
        console.log(obj[key]);
    }
    let objectCount = Object.keys(obj).length;
    console.log("Number of properties:", objectCount);

    let hasEmailProperty = obj.hasOwnProperty("email");
    let hasNameProperty = obj.hasOwnProperty("name");

    console.log("Has email property:", hasEmailProperty);
    console.log("Has name property:", hasNameProperty);
}

objectOperation(students);
console.log("Working with JSON")
//JavaScript Object Notation
// a lightweight format for storing and transporting data
//(over a network)

let jsonObj = {
    Name: "Shashank",
    Blog: "Medium",
    Hobby: "Reading Books",
    Age: 20
};

console.log(jsonObj);

//Converting a JSON obj into Strings
myJsonStr = JSON.stringify(jsonObj);
console.log(jsonObj);

//Now String Manipulation can be performed/transported etc

myJsonStr.replace('Shashank', 'Shash');
console.log(jsonObj);

//Converting JSON string back to obj
newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);




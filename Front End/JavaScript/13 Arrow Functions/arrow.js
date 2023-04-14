console.log("Arrow Functions");

//Normal greet function
function greet() {
    console.log("Good Morning");
}

//Arrow greet function

let greet = ()=> {
    console.log("Good Morning");
}
greet();


//ARROW FUNCTION
let sum = (a,b)=>{
    return a+b;
}
console.log(sum(34,5));


//SHORTCUTS TO ARROW FUNCTION
let sum2 = (a,b)=>a+b;

let half = a =>a/2;
//for single variable - no bracket required

let greet = ()=> console.log("Good Morning");
//for no argument - empty bracket

//Arrow functions can be used with set functions

setInterval(() => {
    console.log("We are inside Set");
}, 3000);


let obj1 = {
    greeting : "Good Morning",
    names : ["Harry", "DJK", "HeyPhil"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting + "Hey There " + student);
        });
    }
}

obj1.speak();

//this searches for first element within its scope
//if normal function would have used - output would be undefined as
//greeting isn't mentioned inside the function scope

//but by using arrow functions, this searches for first element outside
//of its scope (inside parent) and then outputs the result 

//LEXICAL this
//if arrow function used this is parent this
//for eg: when an arrow function is creted inside an object.
//if arrow function not used this is function this
//for eg: when a normal function is created inside of an object.

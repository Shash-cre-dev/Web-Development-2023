console.log('Lets Get Started with Functions');

let Name = 'Shashank';
console.log(Name + ' is a champion');

//FUNCTIONS OR SUB ROUTINES
//can be used to perform a set of repeated tasks

//function Body
function greet(Name){
    console.log(Name+ " is a champion");
}

let Name1 = Harry;
let Name2 = Tom;
let Name3 = Mav;

//Function Call
greet(Name);
greet(Name1);
greet(Name2);
greet(Name3);

//A function can have more than one value as parameter

let Name4 = "Rocky";
let greetText = "Good Morning"
 
function greet(Name, greetText){
    console.log(greetText + " " + Name);
    console.log(Name+ " is a champion");
}

greet(Name4, greetText)


//Any variables inside the function will
//have their scope limited with the function's body {}

//Variables outside functions - global scope

//Use let and const to avoid confusion with scopes

//DEFAULT ARGUMENT
function greet(Name, greetText = "Hi from JS"){
    console.log(greetText + " " + Name);
    console.log(Name+ " is a champion");
}

greet(Name4, greetText)

//Here "Hi from JS" is a default argument
//when any value of greetText is not passed, then
//default value will be applied

let name5 = "Bruce";
greet(Bruce);

//Here Output
//Hi from JS Bruce
//Bruce is  a Champion


//FUNCTIONS CAN ALSO RETURN VALUES AFTER
//PROCESSING

//when it doesn't return a value, undefined.

let returnval = greet(name5);
console.log(returnval);
// -- undefined

//WHEN FUNCTION RETURNS A VALUE
function sum(a, b, c){
    let d = a + b + c;
    return d;
    //After return nothing gets executed
    console.log("Function is Returned") // this line won't get executed
}

let returnval2 = sum(1, 2, 3);
console.log(returnval2);

//function return a value - 6
// return can be of any form number, string, object etc

//after return call in the function, any lines of code
//written below it won't get executed


//FUNCTION BEST PRACTISES

//1. Pass only that values which can be used by the function
//- beware of data type mismatch

//2. Use Only one function to perform one specific task

//3. Write Easy to read functions
//- No use of one liners if you can understand them




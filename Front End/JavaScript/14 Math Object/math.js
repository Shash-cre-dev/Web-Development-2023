console.log("Maths in JavaScript");

//Math object
let m = Math;
console.log(m);

//Math constants
console.log("The value of Math.PI is ", Math.PI);
console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.LN2 is ", Math.LN2);
console.log("The value of Math.LN10 is ", Math.LN10);
console.log("The value of Math.SQRT2 is ", Math.SQRT2);
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2);

//Math Functions
let a = 34.645;
let b = 89.5;
console.log("the value of a and b is ", a, b);

//round
console.log("the value of a and b rounded is ", Math.round(a), Math.round(b));

//power
console.log("3 raised to the power of 2 is ", Math.pow(3,2))

//square root
console.log("The square root of 50 is ", Math.sqrt(50));

//ceil and floor
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8));

//absolute
console.log("the absolute value of 5.6 is ", Math.abs(5.6));
console.log("the absolute value of -5.6 is ", Math.abs(-5.6));

//TRIGONOMETRIC FUNCTIONS
//values of angle taken in JS are in radian

console.log("the value of sin(pi) is ", Math.sin(Math.pi));
console.log("the value of cos(pi) is ", Math.cos(Math.pi));
console.log("the value of tan(pi) is ", Math.tan(Math.pi));

//MIN AND MAX
console.log("The minimum value of 4, 5 and 6 is ", Math.min(4,5,6));
console.log("The maximum value of 14, 5 and 86 is ", Math.max(14,5,86));

//GENERATING A RANDOM NUMBER
let r = Math.random();
console.log("The random number is ", r);
//generates random number between 0 and 1


//Random number between a and b
//a + (b-a)*Math.random();
let a1 = 1;
let b1 = 100;
let r1 = a1 + (b1-a1)*Math.random();
console.log("The random number is ", r1);
//generates random number between 0 and 1
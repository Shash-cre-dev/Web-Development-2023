console.log("DATE AND TIME IN JS");

//FOR DATE
//Date - is an object
let now = new Date();
console.log(now);
//outputs date

let pd = new Date(0);
console.log(pd);
// initial date as reference 1970 5:30 pm GMT

let pd1 = new Date(1000);
console.log(pd1);
//returns 1000 ms (1s) after initial reference time

let NewDate = new Date("2029-11-30");
console.log(NewDate);
// passing required date as argument and printing it on console


//Another Way
//let NewDate2 = new Date(year, month, date, hours, minutes, seconds, milliseconds)
let NewDate2 = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(NewDate2);

//FUNCTIONS ON DATE
let year = NewDate2.getFullYear();
console.log("The Year is ", year);


let dt = NewDate2.getDate();
console.log("The Date is ", dt);

let mon = NewDate2.getMonth();
console.log("The Month is ", mon);

let hr = NewDate2.getHours();
console.log("The Hours is ", hr);

//similarly getMinutes, getDay, getSeconds

//We can manipulate Date using setDate

NewDate2.setDate(5)
console.log(NewDate2);
//date changed

NewDate2.setDate(39)
//sets date = 39-31 = 8 //autocorrect
console.log(NewDate2);

console.log(Date.now);
//timestamp of how many seconds have passed from the initial set date (1970 5:30pm)


//similarly setMinutes(), setSeconds(), setMonth() etc
NewDate2.setDate(8);
NewDate2.setMinutes(29);
console.log(NewDate2);

function updateTime(){
    time.innerHTML = new Date();
}
setInterval(updateTime, 1000);



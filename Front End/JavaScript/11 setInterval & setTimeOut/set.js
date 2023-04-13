console.log("JavaScript setInterval and setTimerout")

//To run a function at a specific interval of time

//setTimeout - Allows us to run the function once after the interval of time
//clearTimeout - Allows us to run the function repeatedly once after the interval of time

//here function names are passed as arguments

function greet(){
    console.log("Hello, Good Morning :)");
}

setTimeout(greet, 5000); // 5000 ms - 5s

//only function name is passed in setTimeout

//setTimeout(greet(), 5000) - wrong use, only function name is passed in the ()

//For passing arguments

let Name;
function greet(Name){
    console.log("Hello, Good Morning :)" + Name);
}

setTimeout(greet, 5000, "Shashank");

//For passing multiple arguments

let text;
function greet(Name, text){
    console.log("Hello, Good Morning :)" + Name + "  " + text);
}

setTimeout(greet, 5000, "Shashank", "How are u doing?");


//clearTimeout
//To clear the schedules set by setTimer

timeOut = setTimeout(greet, 5000, "Shashank", "Take care");
console.log(timeOut);

//timeOut returns a timeout id which can be used by clearTimeout to clear the timeOut
//set by timeOut()

clearTimeout(timeOut);
//clears the timeOut


//SET INTERVAL
//runs the function repeadtedly at an interval of time
setId = setInterval(greet, 5000, "Shashank", "Take care");
//this function will run repeatedly after every 5 s


console.log(setId);
//this returns an interval id whichh can be used by clearInterval to clear the interval

clearInterval(setId);


//TO DISPLAY TIME

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000); //time repeats for every  s


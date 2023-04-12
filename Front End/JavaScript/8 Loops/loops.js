console.log('Get Started with Loops');

//FOR LOOP
let i = 0;
for(i=0; i<3; i++){
    console.log(i);
}

//i=0 - initialization
//i<3 - condition
//when condition is true, it run the for loop, then
//i++ - increment
//then repeats till condition becomes false

//for loops runs from initialization to condition-1 times
//here 0 to 3-1 = 0 1 2 = Total - 3 times (condition times)


//WE USE FOR LOOPS TO ITERATE ARRAYS 
let friends =["Joey", "Chandler", "Ross", "Monica", "Rachael", "Phoebe"];

for (let index = 0; index < friends.length; index++) {
     console.log("Hey " + friends[index]);
    
}

//FOR EACH IS USED TO ITERATE ARRAYS IN MORDERN ARRAYS
friends.forEach(function f(element){
    console.log("Hey "+ element + "modern JavaScript");
});


//FOR OF LOOP CAN BE USED ALSO TO ITERATE ARRAYS
for(element of friends){
    console.log("Hey "+ element + " welcome to modern JavaScript");
};

//ITERATING ARRAYS
//for
//forEach
//for of

//ITERATING OBJECTS
//for in 

let employee = {
    name:"Shashank",
    salary: "20 B $",
    age : 25,
    channel : "DS"
};

for(key in employee){
    console.log(`The ${key} of employee is' ${employee[key]}`);
}

//WHILE LOOP
let a = 0
while(a<4){
    console.log(`${a} is less than 4`);
    i++;
}

//while runs till condition becomes false;
//without i++ / i-- (increment/decrement conditon) - infinite while loop

//DO WHILE
let j = 34;
do{
    console.log(`${b} is less than 4`);
    j++;
}while(j<4);

//DO WHILE runs runs once when condition is false or true
//after one - if condition is still true it runs, until the condition becomes false. 

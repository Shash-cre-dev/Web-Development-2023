//ALERT IN IN-BROWSER JAVASCRIPT

//alert is a function that triggers a message that pops up in your page
//(in modal window - a small window near the top of the page)
//a window when not closed will stop interaction of user with the page

alert("This is a message");

//alert() takes string as argument

//alert() - does not return anything

let a = alert("Hi Shashank");
console.log(a); //undefined

//PROMPT
//prompt() allows the user to add any info to a prompt when it apears

let Name = prompt("What is your name?", "Guest");
console.log(Name);

//prompt(mssg , default)
//prompt() - returns a value to the console


//CONFIRM
//asks the user for final confirmation with a message

//confirm(mssg)

let deletePost= confirm("Do you Really want to Delete this post");
console.log(deletePost);

if(deletePost){
    //Code to delete the Post
    //when user clicks on okay - o to the console
    //deletePost = true
    console.log("Your Post has been Sucessfully Deleted");
}
else{
    //Code to not delete the Post
    //when user clicks on cancel - o to the console
    //deletePost = false
    console.log("Your post has not been deleted")
}


//PRACTICE
let age = prompt("What is your age", " ");

if(age>18){
     alert("Welcome to the Website");
}
else{
     alert("Age Restricted");
}
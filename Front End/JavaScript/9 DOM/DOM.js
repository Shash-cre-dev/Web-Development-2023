//DOM - Document Object Model
//Anything written inside the body tag can be accessed in a form of tree structure
//with the help of JS

//FOR IDS

//acceses the element with id name main
let main = document.getElementById('main');
console.log(main);

//acceses the element with id name nav
let nav = document.getElementById('nav');
console.log(nav);

//id names are unique and only apply one per element
//therefore it will return only one element always
//othwerwise error


//displays all the HTML inside the Element named by nav (Here id)
console.log(nav.innerHTML);

//Changing inner HTML 
nav.innerHTML = "<li> Dynamic Element </li>";

//Inner HTML of nav replaced with <li> Dynamic Element </li>


//FOR CLASSES

let containers = document.getElementsByClassName('container');
console.log(containers);

//for accessing all the elements with class name container
//since same class names can be applied to multiple elements

//it will give either 1 or more than 1 elements

console.log(containers[0]); //- first element with class named container
console.log(containers[1]); //-second element with class named container


//WITH USING CSS SELECTOR

let sel = document.querySelector('.container');
console.log("Selector returns ", sel);

//returns first element with class name container
//. is used for class name

let sel1 = document.querySelector('#nav');
console.log("Selector returns ", sel1);

//returns the element with id name nav
//# is used for id name


//PSUEDO SELECTORS
let sel2 = document.querySelector('#nav>li');
console.log("Selector returns ", sel2);

//returns the first li present in the id named nav

let sel3 = document.querySelectorAll('#nav>li');
console.log("Selector returns ", sel3);

//returns all the li's present in the id named nav


//AFTER ACCESSING THE ELEMENTS ONE CAN EASILY MANIPULATE/MODIFY ELEMENTS


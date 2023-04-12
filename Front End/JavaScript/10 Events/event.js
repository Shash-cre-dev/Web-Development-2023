console.log("JavaScript Events");
//Event is a signal that is triggered whenever something happens

//eg: like clikcking a button , hitting the search bar, minimizing a window etc

//Event Listner tracks the event and perform tasks
//Eg: Hitting the youtube subscribe button - event
//Eg: You are Subscribed to the channel - done by event listener

//Event Fired - means events has triggered/occurred

//DOM EVENTS

//BROWSER EVENTS
//1. click - when clicking
//2. contextmenu - during mouse right click
//3. mouseover/mousehout
//4. mousedown/mouseup
//5. mousemove

//FORM EVENTS
//1.submit
//2.focus

//SOME OTHER EVENTS 
//DOMcontentLoaded

//these events can be accesSed with on(event_name) in the HTML Tags

function toggleHide(){
    btn = document.getElementById('btn');
    para = document.getElementById('para');

    if(para.style.display != 'none'){
    para.style.display = 'none'; // hides the para tag with id para
    }
    else{
        para.style.display = 'block';
    }
}

//another way is use event listeners with addEventListener()

//WITH EVENT LISTENERS

let para = document.getElementById('para');
para.addEventListener('mouseover', function run(){
        console.log(alert('Mouse Inside'));
});

para.addEventListener('mouseout', function run(){
        console.log(alert('Mouse Outside'));
});

//IN MODERN BROWERS WE DONT EVEN HAVE TO ACCESS ELEMENTS WITH DOM (FOR ID's ) WHEN WRITING AN EVENT
if(para.style.display != 'none'){
        para.style.display = 'none'; // hides the para tag with id para
}
else{
        para.style.display = 'block';
}

//DOES THE SAME TASK AS toggleHide()
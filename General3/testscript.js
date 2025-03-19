myitem = document.getElementById("firsttest");
//This line selects the HTML element with the "firsttest" id and assigns it to the "myitem" variable

myitem.addEventListener("click", onClick);
//This line adds and event listener which tells the variable to pay attention for a click, which it will react to

function onClick() {  
    myitem.style.color = "blue"; 
    myitem.style.fontFamily = "Arial"
}
//This line tells the "myitem" variable to complete the action of changing the color of the element to green once clicked

myitem.addEventListener("mouseout", onmouseout);

function onmouseout() {  
    myitem.style.color = ""; 
    myitem.style.fontFamily = ""
}

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick1);

function onButtonClick1() {  
    otheritem.style.color = "red";  
}

thebuttontwo = document.getElementById("thebutton2");  
otherotheritem = document.getElementById("buttontest2");

thebuttontwo.addEventListener("click", onButtonClick2);

function onButtonClick2() {  
    otherotheritem.style.color = "green";  
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otherotherotheritem.innerHTML = newtext;  
}

myitemtwo = document.getElementById("secondtest");

myitemtwo.addEventListener("click", onClick2);

function onClick2() {   
    myitemtwo.style.fontFamily = "Arial";
}

myitemtwo.addEventListener("mouseout", onmouseout2);

function onmouseout2() {  
    myitemtwo.style.color = ""; 
    myitemtwo.style.fontFamily = "";
}

const image = document.getElementById("eel");
    image.addEventListener("click", onClick3() {
        if (image.style.transform === "scale(2)") {
                image.style.transform = "scale(1)";
            } else {
                image.style.transform = "scale(2)";
            }
        });
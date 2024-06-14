let character;
character = document.getElementById("character");
let verticalNumber = 0;
let horizontalNumber = 0;

let wPressed = false;
let aPressed = false;
let sPressed = false;
let dPressed = false;



//movement code starts here.
//movement code starts here.
//movement code starts here.


//Key down and up for pressing W
document.addEventListener("keydown", function (ev) {
    if (ev.key == "w") {
        wPressed = true;
        console.log("wPressed = true");
    } 

});

document.addEventListener("keyup", function (ev) {
    if (ev.key == "w") {
        wPressed = false;
        console.log("wPressed = false");
    } 

});

//Key down and up for pressing S
document.addEventListener("keydown", function (ev) {
    if (ev.key == "s") {
        sPressed = true;
        console.log("sPressed = true");
    } 

});

document.addEventListener("keyup", function (ev) {
    if (ev.key == "s") {
        sPressed = false;
        console.log("sPressed = false");
    } 

});

//Key down and up for pressing A
document.addEventListener("keydown", function (ev) {
    if (ev.key == "a") {
        aPressed = true;
        console.log("aPressed = true");
    } 

});

document.addEventListener("keyup", function (ev) {
    if (ev.key == "a") {
        aPressed = false;
        console.log("aPressed = false");
    } 

});

//Key down and up for pressing D
document.addEventListener("keydown", function (ev) {
    if (ev.key == "d") {
        dPressed = true;
        console.log("dPressed = true");
    } 

});

document.addEventListener("keyup", function (ev) {
    if (ev.key == "d") {
        dPressed = false;
        console.log("dPressed = false");
    } 

});







function upCharacter() {
    if (wPressed) {
        //red shows that W is being pressed and character is hypothetically moving
        character.style.backgroundColor = "red";
        character.style.top = verticalNumber + "px";
        verticalNumber -= 1;
        

    } else if (!wPressed) {
        character.style.backgroundColor = "white";

    } 
}

function downCharacter() {
    if (sPressed) {
        //red shows that S is being pressed and character is hypothetically moving
        character.style.backgroundColor = "red";
        character.style.top = verticalNumber + "px";
        verticalNumber += 1;
        

    } else if (!sPressed) {
        character.style.backgroundColor = "white";

    } 
}

function leftCharacter() {
    if (aPressed) {
        //red shows that A is being pressed and character is hypothetically moving
        character.style.backgroundColor = "red";
        character.style.left = horizontalNumber + "px";
        horizontalNumber -= 1;
        

    } else if (!aPressed) {
        character.style.backgroundColor = "white";

    } 
}

function rightCharacter() {
    if (dPressed) {
        //red shows that D is being pressed and character is hypothetically moving
        character.style.backgroundColor = "red";
        character.style.left = horizontalNumber + "px";
        horizontalNumber += 1;
        

    } else if (!dPressed) {
        character.style.backgroundColor = "white";

    } 
}

// movement code ends here
// movement code ends here
// movement code ends here


//dialogue items
let dialogueText = document.querySelector(".dialogueText");
const delay = ms => new Promise(res => setTimeout(res, ms));

//dialogue function
async function dialogue() {
    dialogueText.innerHTML = "Press WASD to move"
    await delay(2000);
  dialogueText.innerHTML = "Pick and enter the doors to embark on your medieval journey"  
    
    
}






function firstCollision() {
    if (horizontalNumber > 100) {
        console.log("you have hit 100px");
        clearInterval(startFirstCollision);
        window.location.replace("room2.html");

    }
}

///all the movement shi
startUpCharacter = setInterval(upCharacter, 1)
startDownCharacter = setInterval(downCharacter, 1)
startLeftCharacter = setInterval(leftCharacter, 1)
startRightCharacter = setInterval(rightCharacter, 1)
startFirstCollision = setInterval(firstCollision, 1)
//dialogue starts
// startDialogue = setInterval(dialogue, 1000);
dialogue();

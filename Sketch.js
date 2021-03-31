// This variable is to get the game space div so that
// I can add 256 little squares to it.
let gameSpace = document.getElementById("gameSpace")
let sizeSquare = 20
// This loops over the squares to add onto them until
// there are 256
for (let i = 0; i < 256; i++) {
    // This creates the new divs, or little squares
    let newdiv = document.createElement("div");
    newdiv.classList.add("littleSquare");
    // and adds them to the larger div, gameSpace
    gameSpace.appendChild(newdiv);
    // This listens for a click on a newdiv and adds 
    // pretty to it (turns it pink)
    newdiv.addEventListener('mouseover', () => {
        newdiv.classList.add('pretty');
    });
}

// takes the button from html and stores in a variable 
// to use in javascript
let clearBtn = document.querySelector(".clearAll");
// listens for a click event on the above mentioned button
clearBtn.addEventListener('click', () => {
    // stores the divs in a thing called oldDiv so we can
    // do stuff with the changed divs (like clear them) 
    let oldDiv = document.getElementsByClassName("littleSquare");
    // while there are any number of squares, remove every square
    while (oldDiv.length > 0) {
        oldDiv[0].classList.remove('littleSquare')
    }
    let userInput = prompt("How many rows would you like your Etch to be?");
    let rows = parseInt(userInput);
    userInput = prompt("How many columns would you like it to be?")
    let columns = parseInt(userInput)
    for (let i = 0; i < rows * columns; i++) {
        // This creates the new divs, or little squares
        let newdiv = document.createElement("div");
        newdiv.classList.add("littleSquare");
        // and adds them to the larger div, gameSpace
        gameSpace.appendChild(newdiv);
        // This listens for a click on a newdiv and adds 
        // pretty to it (turns it pink)
        newdiv.addEventListener('mouseover', () => {
            newdiv.classList.add('pretty');
        });
    }

    gameSpace.style.width = (sizeSquare * columns) + 'px';
    gameSpace.style.height = (sizeSquare * rows) + 'px';
});
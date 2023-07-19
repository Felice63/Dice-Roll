document.addEventListener("click", craps);

// event listener for the second function that fires after 'craps'
// animationend is an event
// SEE: https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event

document.addEventListener("animationend", removeSpin);

// This function fires after the button click and removes the CSS animation class 'spin' on animation end 
function removeSpin() {

    // get the dice image containers
    let dOne = document.getElementById("diceOne");
    let dTwo = document.getElementById("diceTwo");

    // Remove the spin animation class from the  dice
    dOne.classList.remove("spin");
    dTwo.classList.remove("spin");
}

function craps() {

    let randNumOne = (Math.random()*5)+1;
    let randNumTwo = (Math.random()*5)+1;

    let diceOne = Math.round(randNumOne);
    let diceTwo = Math.round(randNumTwo);

    let outPut;

    console.log(diceOne, diceTwo);

    if (diceOne + diceTwo == 2) {
        console.log(`Snake Eyes`);
        outPut = `Snake Eyes`;
    } 
    else if (diceOne + diceTwo == 3) {
        console.log(`Acey Deucey`);
        outPut = `Acey Deucey`;
    }
    else if (diceOne + diceTwo == 4) {
        if (diceOne == diceTwo && diceOne + diceTwo == 4) {
            console.log(`Hard Four`);
            outPut = `Hard Four`;
        } else {
            console.log(`Easy Four`);
            outPut = `Easy Four`;
        }
    }
    else if (diceOne + diceTwo == 5) {
        console.log(`Fever Five`);
        outPut = `Fever Five`;
    }
    else if (diceOne + diceTwo == 6) {
        if (diceOne == diceTwo && diceOne + diceTwo == 6) {
            console.log(`Hard Six`);
            outPut = `Hard Six`;
        } else {
            console.log(`Easy Six`);
            outPut = `Easy Six`;
        }
    }
    else if (diceOne + diceTwo == 7) {
        console.log(`Natural`);
        outPut = `Natural`;
    }
    else if (diceOne + diceTwo == 8) {
        if (diceOne == diceTwo && diceOne + diceTwo == 8) {
            console.log(`Hard Eight`);
            outPut = `Hard Eight`;
        } else {
            console.log(`Easy Eight`);
            outPut = `Easy Eight`;
        }
    }
    else if (diceOne + diceTwo == 9) {
        console.log(`Nina Nine`);
        outPut = `Nina Nine`;
    }
    else if (diceOne + diceTwo == 10) {
        if (diceOne == diceTwo && diceOne + diceTwo == 10) {
            console.log(`Hard Ten`);
            outPut = `Hard Ten`;
        } else {
            console.log(`Easy Ten`);
            outPut = `Easy Ten`;
        }
    }
    else if (diceOne + diceTwo == 11) {
        console.log(`Yo-leven`);
        outPut = `Yo-leven`;
    }
    else if (diceOne + diceTwo == 12) {
        if (diceOne == diceTwo && diceOne + diceTwo == 12) {
            console.log(`Hard Boxcars`);
            outPut = `Hard Boxcars`;
        } else {
            console.log(`Easy Boxcars`);
            outPut = `Easy Boxcars`;
        }
    }
    else {
        console.log(diceOne + diceTwo);
        outPut = `Yowzzzah!`;
    }

    // Create an array to store how five images
    const diceImg = new Array("./img/dice1.svg", "./img/dice2.svg", "./img/dice3.svg", "./img/dice4.svg", "./img/dice5.svg", "./img/dice6.svg");

    // Get the image containers 
    let dOne = document.getElementById("diceOne");
    let dTwo = document.getElementById("diceTwo");

    // get the corresponding image generated randomly 
    dOne.src = diceImg[diceOne-1];
    dTwo.src = diceImg[diceTwo-1];

    // Spin the dice images by adding and removing the CSS animation
    dOne.classList.toggle("spin");
    dTwo.classList.toggle("spin");

    // Print the dice values
    document.getElementById("DiceOneValue").innerHTML = `You rolled: ${diceOne}`;
    document.getElementById("DiceTwoValue").innerHTML = `You rolled: ${diceTwo}`;
    document.querySelector(".diceSum").innerHTML = outPut;

    return
}

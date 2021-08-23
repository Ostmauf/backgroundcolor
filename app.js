const usrInput1 = document.getElementById("usr-input-1");
const usrInput2 = document.getElementById("usr-input-2");
const usrInput3 = document.getElementById("usr-input-3");

const button = document.getElementById("button");

const containerElement = document.getElementById("container");

button.addEventListener("click", () => {

    let userInput1 = parseInt(usrInput1.value);
    let userInput2 = parseInt(usrInput2.value);
    let userInput3 = parseInt(usrInput3.value);

    if (isNaN(userInput1)) {
        usrInput1.value = 0;
    } else if (userInput1 < 0) {
        usrInput1.value = 0;
    } else if (userInput1 > 255) {
        usrInput1.value = 0;
    }
        
    if (isNaN(userInput2)) {
        usrInput2.value = 0;
    } else if (userInput2 < 0) {
        usrInput2.value = 0;
    } else if (userInput2 > 255) {
        usrInput2.value = 0;
    }
    
    if (isNaN(userInput3)) {
        usrInput3.value = 0;
    } else if (userInput3 < 0) {
        usrInput3.value = 0;
    } else if (userInput3 > 255) {
        usrInput3.value = 0;
    }
        
    containerElement.style.backgroundColor = "rgb(" + userInput1 + ", " + userInput2 + ", " + userInput3 + ")";
    });







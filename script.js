const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');

const newNumber = Math.floor(Math.random()*100);

numberBox.addEventListener("change", checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if (guess < newNumber) {
        feedbackBox.innerText = "Too Low!";
    }
    else if (guess > newNumber) {
        feedbackBox.innerText = "Too high!";
    }
    else {
        feedbackBox.innerText = "just right!";
    }
}

const digitBox = document.getElementById('digit');
const multiplyBox = document.getElementById('multiply');



digitBox.addEventListener("change", checkDigit);

function checkDigit() {
    const guess = digitBox.value;
    const newDigit = guess*guess;
    multiplyBox.innerText=newDigit
    }
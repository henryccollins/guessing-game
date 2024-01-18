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

    const number = document.getElementById("numberIn");
    const outputDiv = document.getElementById("output");
    const functionSelector = document.getElementById("functionSelector");
    
    number.addEventListener("change", computeOutput);
    functionSelector.addEventListener("change", computeOutput);
    
    
    function computeOutput() {
      var N = number.value;
      var output = number.value
      if (functionSelector.value === "double") {
        output = double(N);    
      }
      else if (functionSelector.value === "square") {
        output = square(N);
      }
      else if (functionSelector.value === "2x+7") {
        output = linear(N)
      }
      else if (functionSelector.value === "cube") {
        output = cube(N)
      }
      outputDiv.innerText = output;  
    }  
    
    function double(N) {
      return 2*N;
    }
    
    function square(N) {
      return N*N;
    }
    
    function linear(N) {
      return 2*N+7
    }
    
    function cube(N) {
      return N**3
    }
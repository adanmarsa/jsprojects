let currentInput = "";
let previousInput = "";
let operator = "";

const displayArea = document.querySelector(".input-area h1");

// DIGIT BUTTONS
const digitButtons = document.querySelectorAll(".digits button");
digitButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    currentInput += btn.innerText; // Add the clicked digit to the current number
    displayArea.innerText = currentInput; // Show it on the display
  });
});

// OPERATOR BUTTONS (+, -, ×, ÷, =)
const operatorBtns = document.querySelectorAll(".operators button");

operatorBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const op = btn.innerText;

    if (op === "=") {
      // STEP 1: Make sure we have something to calculate
      if (previousInput === "" || currentInput === "") return;

      // STEP 2: Convert strings to numbers
      const prev = Number(previousInput);
      const curr = Number(currentInput);
      let result = 0;

      // STEP 3: Perform operation based on the stored operator
      if (operator === "+") {
        result = prev + curr;
      } else if (operator === "-") {
        result = prev - curr;
      } else if (operator === "x") {
        result = prev * curr;
      } else if (operator === "÷") {
        if (curr === 0) {
          displayArea.innerText = "Error";
          return;
        }
        result = prev / curr;
      }

      // STEP 4: Display result and reset values
      displayArea.innerText = result;
      currentInput = String(result); // allow chaining (like result + new number)
      previousInput = "";
      operator = "";
    } else {
      // STEP 5: Handle when a math operator (+, -, ×, ÷) is clicked
      operator = op;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});
const resetBtn = document.querySelector(".extras button");
resetBtn.addEventListener("click", function () {
  currentInput = "";
  previousInput = "";
  operator = "";
  displayArea.innerText = "0";
});

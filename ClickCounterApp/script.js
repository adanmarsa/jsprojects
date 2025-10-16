const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;
countEl.textContent = count;
function updateDisplay() {
  countEl.textContent = count;
  if (count > 0) countEl.style.color = "green";
  else if (count < 0) countEl.style.color = "red";
  else countEl.style.color = "black";
}

// increase button
increaseBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});
// decrease button
decreaseBtn.addEventListener("click", function () {
  count--;
  updateDisplay();
});
// reset button
resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});

const input = document.getElementById("item-input");
const addBtn = document.getElementById("addBtn");
const displayUl = document.getElementById("displayUl");
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function () {
  displayUl.innerHTML = "";
});

addBtn.addEventListener("click", function () {
  if (input.value === "") return alert("Field can't be empty");
  const li = document.createElement("li");
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  li.innerText = input.value;
  li.classList.add("list-item");
  displayUl.appendChild(li);
  input.value = "";
  input.focus();
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delBtn");
  li.appendChild(delBtn);
  delBtn.addEventListener("click", function () {
    li.remove();
  });
});

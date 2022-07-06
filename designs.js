let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let form = document.getElementById("sizePicker");

let rows = document.getElementById("inputRows").value;
let columns = document.getElementById("inputColumns").value;
let submitButton = document.querySelector('input[type="submit"]');

let draw = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let rows = document.getElementById("inputRows").value;
  let columns = document.getElementById("inputColumns").value;
  table.firstElementChild.remove();

  makeGrid(rows, columns);
});

function makeGrid(rows, columns) {
  table.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < columns; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = color.value;
      });
      cell.addEventListener("mouseover", () => {
        if (!draw) {
          return;
        }
        cell.style.backgroundColor = color.value;
      });
    }
  }
}

submitButton.addEventListener("click", () => {
  makeGrid(rows, columns);
});

window.addEventListener("mousedown", () => {
  draw = true;
});

window.addEventListener("mouseup", () => {
  draw = false;
});

window.addEventListener("load", (event) => {
  makeGrid(rows, columns);
});

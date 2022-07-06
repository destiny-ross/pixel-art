let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let form = document.getElementById("sizePicker");
let submitButton = document.getElementById("submit");

let draw = false;

// draws the grid
function makeGrid() {
  let rows = document.getElementById("inputRows").value;
  let columns = document.getElementById("inputColumns").value;

  // clear old grid
  table.innerHTML = "";

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    // insert table row via built in table.insertRow function,
    // then iterate through number of desired columns to generate cells
    // https://www.w3schools.com/jsref/met_table_insertrow.asp
    let row = table.insertRow(rowIndex);
    for (let cellIndex = 0; cellIndex < columns; cellIndex++) {
      let cell = row.insertCell(cellIndex);

      // adds a listener on mousedown event to color cells when mouse is depressed
      cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = color.value;
      });
      // adds a listener on mouseover event to color cells on
      // mouse over if draw state is true
      cell.addEventListener("mouseover", () => {
        if (!draw) {
          return;
        }
        cell.style.backgroundColor = color.value;
      });
    }
  }
}

// adds the click event to the submit button
submitButton.addEventListener("click", (event) => {
  // prevent default to prevent browser from sending http request to the server
  event.preventDefault();
  makeGrid();
});

// on mouse down, draw state should be true
window.addEventListener("mousedown", () => {
  draw = true;
});

// on mouse up, revert draw state to false
window.addEventListener("mouseup", () => {
  draw = false;
});

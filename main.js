function generateGrid() {
    let difficolta = document.getElementById("difficoltà").value;
    let numCells, numCols;
    switch (difficolta) {
      case "1":
        numCells = 100;
        numCols = 10;
        break;
      case "2":
        numCells = 81;
        numCols = 9;
        break;
      case "3":
        numCells = 49;
        numCols = 7;
        break;
    }
    document.documentElement.style.setProperty('--num-cells', numCells);
    document.documentElement.style.setProperty('--num-cols', numCols);
  
    let gridHtml = "";
    for (let i = 1; i <= numCells; i++) {
      gridHtml += "<div class='cell' id='cell-" + i + "'>" + i + "</div>";
    }
    document.getElementById("grid").innerHTML = gridHtml;
  
    let cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function() {
        this.classList.toggle("active");
        console.log(this.innerHTML);
      });
    }
  }
  
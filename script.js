const container = document.querySelector("#container");
const selectGridSizeButton = document.querySelector("#selectGridSizeButton");

function colorCell(event) {
    event.target.style.backgroundColor = "pink";
}

function generateGrid(gridSize=16) {
    for(let i=0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j=0; j < gridSize; j++){
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.addEventListener('mouseenter', colorCell);
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}

selectGridSizeButton.addEventListener('click', (e)=>{
    let gridSize = parseInt(prompt("Enter grid size (number of squares per side):", "16"));
    if (gridSize > 100) {
        alert("Max grid size is 100! setting grid size as 100.");
        gridSize = 100;
    }
    container.replaceChildren();
    generateGrid(gridSize);
})

generateGrid();
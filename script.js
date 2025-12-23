const container = document.querySelector("#container");
const selectGridSizeButton = document.querySelector("#selectGridSizeButton");

function colorCell(event) {
    if (parseInt(event.target.dataset.colored)) {
        let color = event.target.style.backgroundColor;
        if (color.startsWith("rgba")) {
            let currentOpacity = color.split(",")[3].slice(0,-1);
            let opacity = parseFloat(currentOpacity) + 0.1;
            color = color.replace(currentOpacity, String(opacity));
            event.target.style.backgroundColor = color;
        }        
    }
    else {

        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);

        event.target.dataset.colored = 1;
        event.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.1)`;
    }
}

function generateGrid(gridSize=16) {
    for(let i=0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j=0; j < gridSize; j++){

            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.dataset.colored = 0;
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
const mainContainer = document.querySelector('#main-container');
let nCol = 16; // Hard start,but latter can be change by user input

// Main container function to change background color
function createRndRGBNum (){
    return Math.floor(Math.random() * 255);
}
mainContainer.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = `rgb(${createRndRGBNum()}, ${createRndRGBNum()}, ${createRndRGBNum()})`;
})

const flexContainer = document.createElement('div'); // work as a row
flexContainer.className = 'flex-container';

const col = document.createElement('div');
col.className = 'col'

// Functions to create the Grid it self
function createRow (nCol){
    for (let i = 0; i < nCol; i++){
        let clone = col.cloneNode(true);
        flexContainer.appendChild(clone);
    }
}

function createGrid (nCol){
    createRow(nCol)
    for(let i = 0; i < nCol; i++){
        let flexContainerClone = flexContainer.cloneNode(true);
        mainContainer.appendChild(flexContainerClone);
    }
}

// REMEMBER TO CALL THE FUNCTION TO CREATE THE FIRST TIME
createGrid(nCol);

// BUTTONS EVENTS
const changeGrid = document.querySelector('#changeGrid');
changeGrid.addEventListener('click', () => {
    let newNCol = prompt('what is the size is this Grid? Max of 100');
    newNCol = Number(newNCol);
    if (Number.isInteger(newNCol) && newNCol > 1 && newNCol < 100){
        while(mainContainer.firstChild){
            mainContainer.removeChild(mainContainer.firstChild);
        }
        createGrid(newNCol);
    }
    else{
        alert('bug');
    }
})
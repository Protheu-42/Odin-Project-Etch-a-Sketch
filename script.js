const mainContainer = document.querySelector('#main-container');
let nCol = 16; // Hard start,but latter can be change by user input

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













// cloning shenanigans
// let clone = col.cloneNode();
// flexContainer.appendChild(clone);
// clone = col.cloneNode();
// flexContainer.appendChild(clone);
// clone = col.cloneNode();
// flexContainer.appendChild(clone);
// clone = col.cloneNode();
// flexContainer.appendChild(clone);

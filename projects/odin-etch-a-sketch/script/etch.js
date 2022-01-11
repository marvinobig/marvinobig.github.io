document.getElementById("generate").addEventListener("click", gridGen);

function gridGen() {
    let gridSize = document.getElementById("gridInput").value; //Initialise a variable that gets grid size data from from text input.
    let gridNum = Number(gridSize); //Turn variable data from string to number data type.
        

    if (gridNum >= 10 && gridNum <= 100) {
        //Use variable data to create columns & rows of the same number.
        let gridContainer = document.getElementById("gridDisplay"); 
            
        if (gridContainer.firstChild) {
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.lastChild);
            };

            for (i = 0; i < gridNum; i++) {
                let gridParent = document.createElement("div");
                gridParent.classList.add("gridParent");
                gridContainer.appendChild(gridParent);
            
                for (c = 0; c < gridNum; c++) {
                    let gridChild = document.createElement("div");
                    gridChild.classList.add("gridChild");
                    gridParent.appendChild(gridChild);
                };
            };
        }else {
            for (i = 0; i < gridNum; i++) {
                let gridParent = document.createElement("div");
                gridParent.classList.add("gridParent");
                gridContainer.appendChild(gridParent);
            
                for (c = 0; c < gridNum; c++) {
                    let gridChild = document.createElement("div");
                    gridChild.classList.add("gridChild");
                    gridParent.appendChild(gridChild);
                };
            };
        }
    }else {
        alert("Enter a number between 10 and 100");
    }
};




document.getElementById("gridDisplay").addEventListener("mouseover", function colorChoice(e){
    const target = e.target; //Initialise a variable that gets color choice from menu.
    //Use variable data to set background color of generated grid by using class name (gridChild) for the generated grid to target them. 
    let colorHex = document.getElementById("colorHex").value;
    let gridContainer = document.getElementById("gridDisplay");

    if (target != gridContainer) {
      e.target.style.backgroundColor = colorHex;
    }; 
});




document.getElementById("reset").addEventListener("click", reset);

function reset() {
    //A reset  button can be clicked to erase grid & color choices.
    let gridContainer = document.getElementById("gridDisplay");
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };
};
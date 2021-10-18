// Ben Jordan
// 10/18/21

function change(e){
    e.stopPropagation();
    e.target.style.backgroundColor = 'lightblue';
    console.log("hovered!")
}

function reset(){
    let boxes = Array.from(document.querySelectorAll(".box"));
    for(box in boxes){
        boxes[box].style.backgroundColor = 'gray';
    }
}

function resize(val){
    canvas.removeChild(grid);
    generate(val);
}

// create responsive nxn grid
function generate(resolution){

    // create a new grid div
    grid = document.createElement("div");
    grid.classList.add("grid");
    canvas.appendChild(grid);

    // rows
    for(let i = 0; i < resolution; i++){
        let parent = document.createElement("div");
        parent.classList.add("row");
        grid.appendChild(parent);
        // split into boxes
        for(let j = 0; j < resolution; j++){
            let child = document.createElement("div");
            child.classList.add("box");
            parent.append(child);
            parent.addEventListener("mouseover", change);

        }
    }
}
let grid; // keep a reference to grid div
const clear = document.querySelector(".clear");
const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
//set default 16x16 grid
generate(slider.value);
slider.oninput = function (){
    resize(this.value);
}
clear.addEventListener("click", reset);
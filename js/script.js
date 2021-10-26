// Ben Jordan
// 10/18/21

const clear = document.querySelector(".clear");
const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const colors = Array.from(document.querySelectorAll(".option"));
const custom = document.querySelector("#custom");
const resolution = document.querySelector(".option-panel p");

let currentColor = 'red';
let grid; // keep reference to grid element

// assign events
colors.forEach(color => color.addEventListener("click", setColor));
custom.onchange = (e) => setCustomColor(e);

clear.onclick = () => reset();

slider.onchange = (e) => updateSlider(e);

// initialize
generate(16);

function change(e){
    e.target.style.backgroundColor = currentColor;
}

function setColor(e){
    currentColor = e.target.dataset.value;
}

function setCustomColor(e){
    currentColor = e.target.value;
}

function updateSlider(e){
    num = e.target.value;
    let message = `Canvas Resolution: ${num}x${num}`
    resize(num);
    e.target.title = message;
    resolution.innerHTML = message
    
}

function reset(){
    let boxes = Array.from(document.querySelectorAll(".box"));
    boxes.forEach(box => box.style.backgroundColor = 'gray');
}

function resize(size){
    canvas.removeChild(grid);
    generate(size);
}

function generate(resolution){
    // create responsive nxn grid

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
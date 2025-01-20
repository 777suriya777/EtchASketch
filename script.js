let container = document.querySelector(".container");

let selectedValue = document.getElementById("grids");

let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

let grids = 16;
createGrids(grids);

selectedValue.addEventListener('change',(event) => {
    grids = Number(event.target.value);
    createGrids(grids);
});

console.log(grids);

function createGrids(grids){
    container.innerHTML = '';
    for(let i=1;i<=grids*grids;i++){
        let grid = document.createElement("div");
        grid.setAttribute("class",`grid${i}`);
        grid.style.opacity = "1";
        let height = containerHeight / grids;
        let width = containerWidth / grids;
        grid.style.height = `${height}px`;
        grid.style.width = `${width}px`;
        grid.addEventListener('mousemove', (event) => {
            let element = event.target;
            let opacity = Number(element.style.opacity);
            element.style.backgroundColor = "blue";
            element.style.opacity = opacity;
            opacity*=0.9;
            element.style.opacity = opacity;
        });
        container.appendChild(grid);
    }
}

let darkness = 1;
function getRandomColor(){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    return `rgb(${r},${g},${b})`;
}

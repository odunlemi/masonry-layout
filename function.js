// Entry point
function load() {
    console.log("DOM Loaded");
}
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", load);
} else {
    load();
} 
//JS for adding images
const add = document.querySelector('[data-add]');
const remove = document.querySelector('[data-remove]');
const grids = document.querySelector('[data-grids]');
const container = document.querySelector('[data-container]');
let number = 7;

//data-add
addGrids();

function addGrids() {
    add.addEventListener('click', () => {
        const addgrids = grids.cloneNode(true);
        const image = `url('https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}')`;
        addgrids.style.backgroundImage = image;
        addgrids.innerHTML = number;
        container.appendChild(addgrids);
        number++;
    });
}

//data-remove
removeGrids();

function removeGrids() {
    remove.addEventListener('click', () => {
        if (container.childElementCount > 0) {
            container.removeChild(container.lastElementChild);
        }
        if (number > 1) {
            number--;
        }
    });
}




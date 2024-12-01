let currTile;
let otherTile;

let row = 5;
let col = 5;

const puzzle = document.getElementById('puzzle');

const imageUrl = Array.from({length: 24}, (_, i) => `./image/${i + 1}.jpg`);
imageUrl.push(null);

const shuffledImg = [...imageUrl].sort(() => Math.random() - 0.5);

const grid = [];
for(let i = 0; i < row; i++){
    grid.push(shuffledImg.slice(i * col, i * col + col))
}

function display(){
    puzzle.innerHTML = ''
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.draggable = true

            if(grid[r][c]){
                tile.style.backgroundImage = `url(${grid[r][c]})`
            } else{
                tile.classList.add('empty');
            }
            tile.dataset.row = r;
            tile.dataset.col = c;

            tile.addEventListener('dragstart', dragStart)
            tile.addEventListener('dragover', dragOver)
            tile.addEventListener('dragenter', dragEnter)
            tile.addEventListener('drop', DragDrop)
            tile.addEventListener('dragend', dragEnd)

            puzzle.appendChild(tile);
        }
    }
}

const dragStart = (e) =>{
    currTile = e.target;
}

const dragOver = (e) =>{
    e.preventDefault();
}

const dragEnter = (e) =>{
    e.preventDefault();
}


const DragDrop = (e) =>{
    otherTile = e.target;
}

const dragEnd = () =>{

    if(!otherTile.classList.contains('empty')) return;


    const currRow = parseInt(currTile.dataset.row);
    const currCol  = parseInt(currTile.dataset.col);
    
    const otherRow = parseInt(otherTile.dataset.row);
    const otherCol = parseInt(otherTile.dataset.col);
    


    const isAdjust = (Math.abs(currRow - otherRow) === 1 && currCol == otherCol) ||
    (Math.abs(currCol - otherCol) === 1 && currRow == otherRow);

    if(!isAdjust){
        grid[otherRow][otherCol] = grid[currRow][currCol];
        grid[currRow][currCol] = null;
        display();
    }
}

display()
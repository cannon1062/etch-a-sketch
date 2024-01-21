let squareSide = 100;
const gridContainer = document.querySelector('.grid-container');
generateGrid(squareSide);

function generateGrid(squareSide) {
    for (let i = 1; i <= squareSide * squareSide; i++) {
        const div = document.createElement('div');
        div.style.height = (960 / squareSide) + 'px';
        div.style.width = (960 / squareSide) + 'px';
        div.setAttribute('id', `pixel`);
        gridContainer.appendChild(div);
    }
}

const pixels = document.querySelectorAll('#pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.setAttribute('class', 'highlight');
    })
})

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        gridContainer.removeChild(pixel);
    })
    squareSide = prompt('Generating an x by x grid. Enter desired x');
    generateGrid(squareSide);
})
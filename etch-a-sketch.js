let squareSide = 16;
let gridContainer = document.querySelector('.grid-container');
let resetButton = document.querySelector('#reset-button');

for (let i = 1; i <= squareSide * squareSide; i++) {
    const div = document.createElement('div');
    div.style.height = (960 / squareSide) + 'px';
    div.style.width = (960 / squareSide) + 'px';
    div.style.borderColor = 'gray';
    div.style.borderWidth = '1px';
    div.style.borderStyle = 'solid';
    div.style.boxSizing = 'border-box';
    div.setAttribute('id', `pixel${i}`);
    gridContainer.appendChild(div);
}
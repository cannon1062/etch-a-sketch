etch(16);
    function etch(squareSide) {
    
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
    bold = 10;
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            value = +pixel.getAttribute('value');
            value += bold;
            pixel.setAttribute('value', value);
            console.log(value);
            pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${value}%`;
        })
    })

    const generateButton = document.querySelector('#generate-button');
    generateButton.addEventListener('click', () => {
        pixels.forEach((pixel) => {
            gridContainer.removeChild(pixel);
        })
        etch(Math.min(prompt('Generating an x by x grid. Please enter desired x') || 16, 100));
    })
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', () => {
        pixels.forEach((pixel) => {
            pixel.style.backgroundColor = 'white';
        })
    })
}
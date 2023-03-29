let gridValue = prompt ("Type a number not any bigger than 100");

const container2 = document.querySelector('#container2');

function createGrid (gridValue) {
    let square;

    if (gridValue > 100) {
        prompt ("Number must be below 100")};

    container2.setAttribute(`style`, `display: grid; grid-template-columns: repeat(${gridValue},1fr); grid-template-rows: repeat(${gridValue}, 1fr`);

    for (let i = 0; i < gridValue*gridValue; i++){

    };
};
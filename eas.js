let gridValue = prompt ("Type a number not any bigger than 100");

const container2 = document.querySelector('#container2');

function createGrid (gridValue) {
    let square;

    if (gridValue > 100) {
        prompt ("Number must be below 100")};

    container2.setAttribute(`style`, `display: grid; grid-template-columns: repeat(${gridValue},1fr); grid-template-rows: repeat(${gridValue}, 1fr`);

    for (let i = 0; i < gridValue*gridValue; i++){
        const square = document.createElement('div');
        square.classList.add('squareStyle');

        square.onmousemove = function(){
            square.style.backgroundColor = 'blue';
        };
        container2.appendChild(square);
    };
};

createGrid(gridValue);

const startOver = document.querySelectorAll('startAgain');
startAgain.addEventListener('click', function(){
  window.location.reload();
  return false;
});
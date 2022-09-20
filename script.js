const display = document.getElementById("number");

const buttonStart = document.getElementById("start");
const buttonTarget = document.getElementById("target");
const spinnerContainer = document.getElementById("spinner-container");

const scoreDisplay = document.getElementById("score-display");

const config = {
    min: 2,
    max: 5,
};

/**
 * @type {Date}
 */
let startTime;

/**
 * @type {number}
 */
let timer;

function randomTrigger(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener("keydown", handleKeyDown);

/**
 *
 * @param {KeyboardEvent} e
 */
function handleKeyDown(e) {
    console.log(e);
    switch (e.key) {
        case "Enter":
        case " ":
            end();
            break;
        default:
            break;
    }
}

function start() {
    buttonTarget.style.display = "none";
    spinnerContainer.style.display = "flex";
    scoreDisplay.textContent = "--";
    const delay = randomTrigger(config.min, config.max);
    console.log(`${delay} seconds`);

    scoreDisplay.focus();

    clearTimeout(timer);
    timer = setTimeout(() => {
        startTime = new Date();
        buttonTarget.style.display = "block";
        spinnerContainer.style.display = "none";
    }, delay * 1000);
}

function end() {
    const endTime = new Date();
    const diff = endTime - startTime;
    console.log(startTime, endTime, diff);
    scoreDisplay.textContent = `${(diff / 1000).toFixed(4)} seconds`;
}

buttonStart.addEventListener("click", start);

buttonTarget.addEventListener("click", end);

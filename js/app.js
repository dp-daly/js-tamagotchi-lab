/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer 
let gameOver = false

/*------------------------ Cached Element References ------------------------*/

//stat display
const boredomStatEl = document.querySelector("#boredom-stat")
const hungerStatEl = document.querySelector("#hunger-stat")
const sleepinessStatEl = document.querySelector("#sleepiness-stat")

//control buttons
const playBtnEl = document.querySelector("#play")
const feedBtnEl = document.querySelector("#feed")
const sleepBtnEl = document.querySelector("#sleep")

//status message
const gameMessageEl = document.querySelector("#message")

//reset button
const resetBtnEl = document.querySelector("#restart")

/*-------------------------------- Functions --------------------------------*/

function init() {
    gameOver = false
    resetBtnEl.classList.add("hidden")
    gameMessageEl.classList.add("hidden")
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timer = setInterval(runGame, 2000)
}

init(); 

function runGame() {
    updateStates();
    checkGameOver();
    render();
}

render();

function render() {
    if (gameOver === true) {
        clearInterval(timer)
        resetBtnEl.classList.remove("hidden")
        gameMessageEl.classList.remove("hidden")
    }
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness
}

function generateRandomNum() {
    return Math.floor(Math.random() * 3)
}

//! Lesson: you can't use array iterator methods on objects. A for ... in loop was needed here.
//! This is also an instance of square brackets being used for a dynamically-created value in an object.
function updateStates() {
    for (let value in state) {
        state[value] += generateRandomNum();
    }
    }

function handleClick(e) {
    if (e.target.id === "play") {
        state.boredom = 0
        render();
    }
    if (e.target.id === "feed") {
        state.hunger = 0
        render();
    }
    if (e.target.id === "sleep") {
        state.sleepiness = 0
        render();
    }
}

function checkGameOver() {
    for (let value in state) {
    if (state[value] >= 10) {
        gameOver = true;
    }}
}

/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener("click", handleClick)
feedBtnEl.addEventListener("click", handleClick)
sleepBtnEl.addEventListener("click", handleClick)

resetBtnEl.addEventListener("click", init)
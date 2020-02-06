window.addEventListener("DOMContentLoaded", init);

function init() {
    //console.log(init);

    setupButtons();
}

function setupButtons() {
    // ADD EVENTLISTENERS ON BTNS
    document.querySelector("#buttons > button.rock").addEventListener("click", playerChoice);
    document.querySelector("#buttons > button.paper").addEventListener("click", playerChoice);
    document.querySelector("#buttons > button.scissors").addEventListener("click", playerChoice);
}

let playerChose;
let computerChose;

function playerChoice() {
    // STORE PLAYER CHOICE
    // console.log(this.className)
    playerChose = this.className;

    computerChoice();
}

function computerChoice() {
    // MAKING RANDOM CHOICE
    const rand = Math.floor(Math.random() * 3)
    const choices = ["rock", "paper", "scissors"];

    computerChose = choices[rand];


    /*  if (rand == 0) {
        computerChose = "rock";
    } else if (rand == 1) {
        computerChose = "paper";
    } else {
        computerChose = "scissors";
    } */

    // FAKE: always chose "rock";
    // computerChose = "rock";

    resultOfRound();
}

function resultOfRound() {
    // STORE COMPUTER CHOICE
    console.log(`Player chose: ${playerChose}`);
    console.log(`Computer chose: ${computerChose}`)

    // MAKING DECISIONS
    // display "it's a draw" text
    if (playerChose == computerChose) {
        tie();
    }

    // display "you lose"/"you win" text
    if (playerChose == "rock") {
        if (computerChose == "scissors") {
            win();
        } else if (playerChose == "scissors" && computerChose == "rock") {
            lose();
        }
    }

    if (playerChose == "scissors") {
        if (computerChose == "rock") {
            lose();
        } else if (playerChose == "rock" && computerChose == "scissors") {
            win();
        }
    }

    if (playerChose == "paper") {
        if (computerChose == "scissors") {
            lose();
        } else if (playerChose == "scissors" && computerChose == "paper") {
            win();
        }
    }

    if (playerChose == "rock") {
        if (computerChose == "paper") {
            lose();
        } else if (playerChose == "paper" && computerChose == "rock") {
            win();
        }
    }
}

function tie() {
    //when it's a tie, make the text appear
    document.querySelector("#draw").classList.remove("hidden");
}

function win() {
    //when it's a win, make the text appear
    document.querySelector("#win").classList.remove("hidden");
}

function lose() {
    //when it's a loss, make the text appear
    document.querySelector("#lose").classList.remove("hidden");
}
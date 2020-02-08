window.addEventListener("DOMContentLoaded", init);

// with let, you can use the variable again, "const" can only be called once.
// calling it outside all functions because we need it in different ones
let playerChose;
let computerChose;

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

function playerChoice() {
    //show hands animations
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    //when animation is ended, it has to show computer's choice
    document.querySelector("#player1").addEventListener("animationend", computerChoice);

    //store player's choice
    //console.log(this.className)
    playerChose = this.className;

    //restart game afer showing the result
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
}

function computerChoice() {
    //make random choice
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
    //store computer choice
    console.log(`Player chose: ${playerChose}`);
    console.log(`Computer chose: ${computerChose}`)

    //make decisions
    if (playerChose == computerChose) {
        console.log("it's a draw");
        tie();
    }
    if (playerChose == "rock" && computerChose == "scissors") {
        document.querySelector("#player1").style.backgroundImage = "url('hand_rock.png')";
        document.querySelector("#player2").style.backgroundImage = "url('hand_paper.png')";
        win();
    } else if (playerChose == "scissors" && computerChose == "rock") {
        document.querySelector("#player1").style.backgroundImage =
            "url('hand_scissors.png')";
        document.querySelector("#player2").style.backgroundImage =
            "url('hand_rock.png')";
        lose();
    } else if (playerChose == "rock" && computerChose == "paper") {
        document.querySelector("#player1").style.backgroundImage =
            "url('hand_rock.png')";
        document.querySelector("#player2").style.backgroundImage =
            "url('hand_paper.png')";
        lose();
    } else if (playerChose == "scissors" && computerChose == "paper") {
        document.querySelector("#player1").style.backgroundImage =
            "url('hand_scissors.png')";
        document.querySelector("#player2").style.backgroundImage =
            "url('hand_paper.png')";
        win();
    } else if (playerChose == "paper" && computerChose == "scissors") {
        document.querySelector("#player1").style.backgroundImage =
            "url('hand_paper.png')";
        document.querySelector("#player2").style.backgroundImage =
            "url('hand_scissors.png')";
        lose();
    } else if (playerChose == "paper" && computerChose == "rock") {
        document.querySelector("#player1").style.backgroundImage =
            "url('hand_paper.png')";
        document.querySelector("#player2").style.backgroundImage =
            "url('hand_rock.png')";
        win();
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
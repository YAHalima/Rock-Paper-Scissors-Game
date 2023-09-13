"use strict";
const scoreBoard = document.querySelector('.scoreboard');
const scoreText = document.querySelector('.score-text');
const scoreValue = document.querySelector('.score-value');
const gameBoard = document.querySelector('.gameboard');
const marks = document.querySelectorAll('.choices');
const displayStatus = document.querySelector('.display-status');
const winText = document.querySelector('.won');
const lostText = document.querySelector('.lost');
const drawText = document.querySelector('.draw');
const nextRoundBtn = document.querySelector('.next-round');
const rulesBtn = document.querySelector('.rule-text');
const ruleLogo = document.querySelector('.rules');
const closeMark = document.querySelector('#close');
const userIcon = document.querySelector('.user-icon');
const houseIcon = document.querySelector('.house-icon');
const startPage = document.getElementById('start-page');
let score = 0;
if (nextRoundBtn) {
    nextRoundBtn.addEventListener('click', () => {
        if (startPage) {
            startPage.style.display = "block";
        }
        if (gameBoard) {
            gameBoard.style.display = "none";
        }
    });
}
if (rulesBtn && ruleLogo) {
    rulesBtn.addEventListener('click', () => {
        if (ruleLogo) {
            ruleLogo.style.display = 'block';
        }
    });
}
if (closeMark) {
    closeMark.addEventListener('click', () => {
        if (ruleLogo) {
            ruleLogo.style.display = 'none';
        }
    });
}
function getUserChoice(button) {
    const classNames = button.className.split(' ');
    return classNames[0];
}
function handleClick(event) {
    if (nextRoundBtn) {
        nextRoundBtn.style.display = 'none';
    }
    if (userIcon) {
        userIcon.classList.remove('rock', 'paper', 'scissors');
    }
    if (houseIcon) {
        houseIcon.classList.remove('rock', 'paper', 'scissors');
    }
    if (lostText) {
        lostText.style.display = 'none';
    }
    if (winText) {
        winText.style.display = 'none';
    }
    if (drawText) {
        drawText.style.display = 'none';
    }
    const button = event.target;
    const userChoice = getUserChoice(button);
    const allChoices = ['rock', 'paper', 'scissors'];
    const housePlayerIndex = Math.floor(Math.random() * 3);
    const computerChoice = allChoices[housePlayerIndex];
    if (startPage) {
        startPage.style.display = "none";
    }
    if (gameBoard) {
        gameBoard.style.display = "block";
    }
    if (userIcon) {
        userIcon.classList.add(userChoice);
    }
    setTimeout(() => {
        if (houseIcon) {
            houseIcon.classList.add(computerChoice);
        }
    }, 1000);
    playRound(userChoice, computerChoice);
}
;
marks.forEach((mark) => {
    if (mark instanceof HTMLElement) {
        mark.addEventListener('click', handleClick);
    }
});
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        setTimeout(() => {
            if (drawText) {
                drawText.style.display = "block";
            }
            if (nextRoundBtn)
                nextRoundBtn.style.display = "block";
        }, 1300);
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        setTimeout(() => {
            if (winText) {
                winText.style.display = "block";
            }
            if (nextRoundBtn)
                nextRoundBtn.style.display = "block";
            if (scoreValue) {
                scoreValue.innerHTML = '' + ++score;
            }
        }, 1300);
    }
    else {
        setTimeout(() => {
            if (lostText) {
                lostText.style.display = "block";
            }
            if (nextRoundBtn) {
                nextRoundBtn.style.display = "block";
            }
            if (scoreValue) {
                score--;
                scoreValue.innerHTML = '' + score;
            }
        }, 1300);
    }
}
;

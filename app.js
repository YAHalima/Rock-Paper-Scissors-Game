var scoreBoard = document.querySelector('.scoreboard');
var scoreText = document.querySelector('.score-text');
var scoreValue = document.querySelector('.score-value');
var gameBoard = document.querySelector('.gameboard');
var marks = document.querySelectorAll('.choices');
var displayStatus = document.querySelector('.display-status');
var winText = document.querySelector('.won');
var lostText = document.querySelector('.lost');
var drawText = document.querySelector('.draw');
var nextRoundBtn = document.querySelector('.next-round');
var rulesBtn = document.querySelector('.rule-text');
var ruleLogo = document.querySelector('.rules');
var closeMark = document.querySelector('#close');
var userIcon = document.querySelector('.user-icon');
var houseIcon = document.querySelector('.house-icon');
var startPage = document.getElementById('start-page');
var score = 0;
if (nextRoundBtn) {
    nextRoundBtn.addEventListener('click', function () {
        if (startPage) {
            startPage.style.display = "block";
        }
        if (gameBoard) {
            gameBoard.style.display = "none";
        }
    });
}
if (rulesBtn && ruleLogo) {
    rulesBtn.addEventListener('click', function () {
        if (ruleLogo) {
            ruleLogo.style.display = 'block';
        }
    });
}
if (closeMark) {
    closeMark.addEventListener('click', function () {
        if (ruleLogo) {
            ruleLogo.style.display = 'none';
        }
    });
}
function getUserChoice(button) {
    var classNames = button.className.split(' ');
    return classNames[0];
}
function handleClick(event) {
    if (nextRoundBtn) {
        nextRoundBtn.style.display = 'none';
    }
    if (userIcon) {
        userIcon.classList.remove('rock', 'paper', 'scissors', 'spock', 'lizard');
    }
    if (houseIcon) {
        houseIcon.classList.remove('rock', 'paper', 'scissors', 'spock', 'lizard');
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
    var button = event.target;
    var userChoice = getUserChoice(button);
    var allChoices = ['rock', 'paper', 'scissors'];
    var housePlayerIndex = Math.floor(Math.random() * 3);
    var computerChoice = allChoices[housePlayerIndex];
    if (startPage) {
        startPage.style.display = "none";
    }
    if (gameBoard) {
        gameBoard.style.display = "block";
    }
    if (userIcon) {
        userIcon.classList.toggle(userChoice);
    }
    setTimeout(function () {
        if (houseIcon) {
            houseIcon.classList.toggle(computerChoice);
        }
    }, 1000);
    playRound(userChoice, computerChoice);
}
;
marks.forEach(function (mark) {
    if (mark instanceof HTMLElement) {
        mark.addEventListener('click', handleClick);
    }
});
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        setTimeout(function () {
            if (drawText) {
                drawText.style.display = "block";
            }
            if (nextRoundBtn)
                nextRoundBtn.style.display = "block";
        }, 1300);
    }
    else if ((userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
        (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))) {
        setTimeout(function () {
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
        setTimeout(function () {
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

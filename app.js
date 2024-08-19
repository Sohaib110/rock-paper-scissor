let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll('.choice');
const msg= document.querySelector('#msg');
const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');

const getCompChoice = () => {
    const compChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return compChoices[randomIndex];
};
    const drawGame = () => {
        const result = document.querySelector('.result');
        console.log("It's a tie!");
        msg.innerText = "Draw!";
        msg.style.backgroundColor = "black";
    };

    const showWinner = (userWin) => {
        if(userWin){
            userScore++;
            userScorepara.innerText = userScore;
            console.log("You Wins");
            msg.innerText = "You Win!";
            msg.style.backgroundColor = "green";
        }
        else{
            compScore++;
            compScorepara.innerText = compScore;
            console.log("You Lose");
            msg.innerText = "You Lose!";
            msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    const compChoice = getCompChoice();
    console.log("Computer Choice =", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice ==="rock"){
            userWin= compChoice ==="paper"? false:true;
        }
        else if(userChoice ==="paper"){
            userWin= compChoice ==="scissors"? false:true;
        }
        else{
            userWin= compChoice ==="rock"? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const imgElement = choice.querySelector('img');
        const userChoice = imgElement.getAttribute("id");
        playGame(userChoice);
    });
});
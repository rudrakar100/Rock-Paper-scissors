let userScore = 0;
let compScore = 0;

const updateScore = () => {
    const userScoreElement = document.getElementById('user-score');
    const compScoreElement = document.getElementById('comp-score');

    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
};

const updateMessage = (result) => {
    document.getElementById('result-message').textContent = result;
};

const playGame = (userChoice) => {
    const computerChoice = getComputerGenerate();
    const result = getMatchUp(userChoice, computerChoice);

    updateScores(result);
    updateMessage(result);

    if (result === 'You win!') {
        triggerFlyingBubbles();
    }
};

const updateScores = (result) => {
    if (result === 'You win!') {
        userScore++;
    } else if (result === 'Computer wins!') {
        compScore++;
    }

    updateScore();
};

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.dataset.choice;
        playGame(userChoice);
    });
});

const getComputerGenerate = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNumber];
};

const getMatchUp = (user, computer) => {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'rock' && computer === 'paper') ||
        (user === 'paper' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'rock')
    ) {
        return 'Computer wins!';
    } else {
        return 'You win!';
    }
};




 



const triggerFlyingBubbles = () => {
    const messageBox = document.querySelector('.message-box');
    
   
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'flying-bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${1 + Math.random()}s`;
        messageBox.appendChild(bubble);
    }

    
    setTimeout(() => {
        const bubbles = document.querySelectorAll('.flying-bubble');
        bubbles.forEach(bubble => bubble.remove());
    }, 1500);
};



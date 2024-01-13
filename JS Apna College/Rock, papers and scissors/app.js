let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");

const userScoreH = document.querySelector("#us")
const compScoreH = document.querySelector("#cs")

const choices = document.querySelectorAll(".choice");

showWinner = (userWin, userChoice, compChoice) => {
    if (userWin == true){
        userScore++;
        userScoreH.innerText = userScore
        msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`

    }
    else{
        compScore++;
        compScoreH.innerText = compScore

        msg.innerText = `You lose!, ${compChoice} beats ${userChoice}`

    }
}

gameDraw = () =>{
    msg.innerText = "Game Draw, Try Again"
}

genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
    
}

playGame = (userChoice) => {

    //generate comp choice
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice && compChoice === userChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        
        if(userChoice === 'rock'){
            userWin = compChoice ==='paper' ? false : true;
        }
        else if (userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            userWin = compChoice === 'rock' ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);

    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

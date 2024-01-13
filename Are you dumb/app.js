const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');
const confirmation = document.querySelector('.confirmation');

const yesAnswerMethod = () => {
    question.style.display = 'none';
    confirmation.style.display = 'block';
}

const noAnswerMethod = () => {
    noBtn.style.position = 'absolute';

    
    const xPosition = Math.floor(Math.random() * (wrapper.clientWidth - noBtn.clientWidth));
    const yPosition = Math.floor(Math.random() * (wrapper.clientHeight - noBtn.clientHeight));

    noBtn.style.left = `${xPosition}px`; // Corrected syntax
    noBtn.style.top = `${yPosition}px`;


}

yesBtn.addEventListener('click', yesAnswerMethod);
noBtn.addEventListener('click', noAnswerMethod);
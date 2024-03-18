const apiUrl = 'https://api.adviceslip.com/advice';
const diceButton = document.querySelector('.dice-container');
const adviceContainer = document.getElementById('advice');
const adviceNumberId = document.getElementById('advice-number');

document.addEventListener('DOMContentLoaded', refreshAdvice);

function refreshAdvice() {
    fetch(apiUrl) 
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not okay');
        }return response.json();
        
    })

    .then(data => {
        const adviceText = data.slip.advice;
        const adviceNumber = data.slip.id;

        adviceContainer.textContent = `"${adviceText}"`;
        adviceNumberId.textContent = `Advice #${adviceNumber}`;
        // console.log(data);
    })

    .catch(error => {
        console.error('Error:', error);
    })

}

diceButton.addEventListener('click', refreshAdvice);
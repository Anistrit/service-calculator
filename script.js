const hoursInput = document.getElementById('hours');
const rateInput = document.getElementById('rate');
const difficultyInput = document.getElementById('difficulty');
const nameInput = document.getElementById('clientName');
const resultDisplay = document.getElementById('result');

function calculate() {
    let hours = parseFloat(hoursInput.value) || 0;
    let rate = parseFloat(rateInput.value);
    let difficulty = parseFloat(difficultyInput.value);
    let name = nameInput.value || "Client";

    let total = hours * rate * difficulty;
    
    if (hours > 20) {
        total = total * 0.9;
    }

    resultDisplay.innerText = `Hello, ${name}! Total estimate: $${total.toFixed(2)}`;
}

hoursInput.addEventListener('input', calculate);
rateInput.addEventListener('change', calculate);
difficultyInput.addEventListener('change', calculate);
nameInput.addEventListener('input', calculate);

const domainCheckbox = document.getElementById('domain');

function calculate() {
    let hours = parseFloat(hoursInput.value) || 0;
    let rate = parseFloat(rateInput.value);
    let difficulty = parseFloat(difficultyInput.value);
    let name = nameInput.value || "Client";
    
    let domainFee = domainCheckbox.checked ? 15 : 0;

    let total = (hours * rate * difficulty) + domainFee;
    
    if (hours > 20) {
        total = (hours * rate * difficulty) * 0.9 + domainFee;
    }

    resultDisplay.innerText = `Hello, ${name}! Total estimate: $${total.toFixed(2)}`;
}
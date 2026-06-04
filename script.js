<<<<<<< HEAD
const hoursInput = document.getElementById('hours');
const rateInput = document.getElementById('rate');
const difficultyInput = document.getElementById('difficulty'); // Не забудь добавить этот ID в HTML
const nameInput = document.getElementById('clientName');
const resultDisplay = document.getElementById('result');

function calculate() {
    let hours = parseFloat(hoursInput.value) || 0;
    let rate = parseFloat(rateInput.value);
    let difficulty = parseFloat(difficultyInput.value); // Берем коэффициент сложности
    let name = nameInput.value || "Client";

    // Считаем: Часы * Ставка * Коэффициент сложности
    let total = hours * rate * difficulty;
    
    // Оставляем скидку за объем
    if (hours > 20) {
        total = total * 0.9;
    }

    resultDisplay.innerText = `Hello, ${name}! Total estimate: $${total.toFixed(2)}`;
}

// Добавляем новый "слушатель" для нового поля
hoursInput.addEventListener('input', calculate);
rateInput.addEventListener('change', calculate);
difficultyInput.addEventListener('change', calculate);
nameInput.addEventListener('input', calculate);

// ... в самом верху добавь выбор элемента
const domainCheckbox = document.getElementById('domain');

function calculate() {
    let hours = parseFloat(hoursInput.value) || 0;
    let rate = parseFloat(rateInput.value);
    let difficulty = parseFloat(difficultyInput.value);
    let name = nameInput.value || "Client";
    
    // Новая логика для чекбокса
    let domainFee = domainCheckbox.checked ? 15 : 0;

    // Считаем: (Часы * Ставка * Сложность) + Доп. услуги
    let total = (hours * rate * difficulty) + domainFee;
    
    // Скидка за объем (только на работу, без учета домена)
    if (hours > 20) {
        total = (hours * rate * difficulty) * 0.9 + domainFee;
    }

    resultDisplay.innerText = `Hello, ${name}! Total estimate: $${total.toFixed(2)}`;
}
=======
// Находим все элементы один раз
const hoursInput = document.getElementById('hours');
const rateInput = document.getElementById('rate');
const nameInput = document.getElementById('clientName');
const resultDisplay = document.getElementById('result');

// Функция расчета
function calculate() {
    let hours = parseFloat(hoursInput.value) || 0;
    let rate = parseFloat(rateInput.value);
    let name = nameInput.value || "Client";

    // Логика: если больше 20 часов, даем скидку 10%
    let total = hours * rate;
    if (hours > 20) {
        total = total * 0.9; // 10% discount
    }

    resultDisplay.innerText = `Hello, ${name}! Total estimate: $${total.toFixed(2)}`;
}

// Добавляем "слушателей": как только что-то меняется, сразу считаем
hoursInput.addEventListener('input', calculate);
rateInput.addEventListener('change', calculate);
nameInput.addEventListener('input', calculate);
>>>>>>> c936a29b32526a7a2bc2e7716a175dae7dc27f37

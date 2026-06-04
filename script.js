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
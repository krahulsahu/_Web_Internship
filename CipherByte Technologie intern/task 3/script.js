let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateDisplay();
}

function clearResult() {
    currentExpression = '';
    updateDisplay();
}

function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('result').value = currentExpression;
}

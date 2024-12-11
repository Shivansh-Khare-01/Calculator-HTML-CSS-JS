let displayValue = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue[displayValue.length - 1];
    if ("+-*/".includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length === 1) {
        displayValue = "0";
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    updateDisplay();
}

function resetDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace("x", "*")).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

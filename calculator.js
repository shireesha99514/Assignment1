let currentInput = '';
let currentOperation = '';
let result = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperation(operation) {
    if (currentInput !== '') {
        if (result === null) {
            result = parseFloat(currentInput);
        } else {
            result = performOperation(result, currentInput, currentOperation);
        }

        currentInput = '';
        currentOperation = operation;
        document.getElementById('result').value = result;
    }
}

function clearResult() {
    currentInput = '';
    currentOperation = '';
    result = null;
    document.getElementById('result').value = '';
}

function calculateResult() {
    if (currentInput !== '') {
        result = performOperation(result, currentInput, currentOperation);
        document.getElementById('result').value = result;
        currentInput = '';
        currentOperation = '';
    }
}

function performOperation(num1, num2, operation) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                alert("Error: Division by zero.");
                clearResult();
                return null;
            }
        default:
            return num2;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let resultDisplay = document.querySelector('.screen-input');
    let btnElements = document.querySelectorAll('.btn');
    let expression = '';

    btnElements.forEach(function (btn) {
        btn.addEventListener('click', function () {
            handleBtnClick(btn.innerText);
        });
    });

    window.addEventListener('keydown', function (event) {
        const key = event.key;
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', 'c', 'C'];

        if (allowedKeys.includes(key)) {
            handleBtnClick(key);
        }
    });

    function handleBtnClick(btnValue) {
        if (btnValue === 'C') {
            clearDisplay();
        } else if (btnValue === 'DEL' || btnValue === 'Backspace') {
            removeLastChar();
        } else if (btnValue === '=' || btnValue === 'Enter') {
            evaluateExpression();
        } else {
            appendToDisplay(btnValue);
        }
    }

    function clearDisplay() {
        resultDisplay.textContent = "";
        expression = '';
    }

    function removeLastChar() {
        expression = expression.slice(0, -1);
        resultDisplay.textContent = expression;
    }

    function appendToDisplay(value) {
        expression += value;
        resultDisplay.textContent = expression;
    }

    function evaluateExpression() {
        try {
            let result = eval(expression);
            result = parseFloat(result.toFixed(5));
            resultDisplay.textContent = result;
            expression = result.toString();
        } catch (error) {
            resultDisplay.textContent = 'Enter value';
            expression = '';
        }
    }
});

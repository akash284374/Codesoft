const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let expression = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === 'C') {
            expression = '';
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
        } else if (value === '⌫') {
            expression = expression.slice(0, -1);
        } else if (value === '()') {
            if (expression.includes('(') && !expression.includes(')')) {
                expression += ')';
            } else {
                expression += '(';
            }
        } else {
            expression += value;
        }

        display.value = expression;
    });
});

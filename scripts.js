const displayResult = document.getElementById('display-result');
const themesCalculator = [...document.getElementsByClassName('themes-calculator')];
const keysCalculator = [...document.getElementsByClassName('btn')];

let keys = [];
let operators = [];

keysCalculator.forEach(key => {
    if (key.getAttribute('data-numbers')) {
        keys.push(key);
    }
    if (key.getAttribute('data-operation')) {
        operators.push(key);  
    } 
})

keys.forEach(number => {
    number.addEventListener('click', (e) => {
        const targetElement = e.target;
        const catchNumber = targetElement.getAttribute('data-numbers');
        if (displayResult.innerText === '0') displayResult.innerText = '';
        let updateDisplay = displayResult.innerText + catchNumber;
        Number(updateDisplay = updateDisplay.replace(/(\d{3})(?=\d)/g, '$1 '));
        displayResult.innerText = updateDisplay;
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        const targetElement = e.target;
        const catchOperator = targetElement.getAttribute('data-operation');
        if (catchOperator === 'delete') {
            if (displayResult.innerText === '0') return;
            return displayResult.innerText = displayResult.textContent.slice(0, -1) || '0';
        }
        if (catchOperator === 'reset') {
            return displayResult.innerText = '0';
        }
        if (catchOperator === 'equal') return;
        const lastChar = displayResult.textContent[displayResult.textContent.length - 1];
        if (['.','+', '-', '*', '/'].includes(lastChar) && ['.', '+', '-', '*', '/'].includes(catchOperator)) return;
        /* Ne pas permettre à l'utilisateur de mettre plus de 1 point entre 2 opérateur, au début ou à la fin de opération */
        displayResult.innerText += catchOperator;
        let operateurs = displayResult.textContent.match(/\+\-\*\//g)
        let operands = displayResult.textContent.match(/\d+(\.\d+)?/g);
        if (operands[operands.length - 1].match(/\.{2,}/g)) return;
        Number(operands[operands.length - 1]);
    })
})
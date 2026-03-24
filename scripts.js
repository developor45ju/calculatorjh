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
        if (displayResult.innerText === '0') displayResult.innerHTML = '';
        displayResult.innerHTML += catchNumber;
    })
})
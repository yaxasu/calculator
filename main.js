let num1 = [];
let num2 = [];
let currentNum = num1;
let operator = '';
let result = 0;

function addToNum(number){
    currentNum.push(number);
    updateDisplay();
}

function updateDisplay(){
    let display = document.getElementById('working');
    display.textContent = num1.join('') + ' ' + operator + ' ' + num2.join('');
}

function performOperation(op) {
    let n1 = parseFloat(num1.join(''));
    let n2 = parseFloat(num2.join(''));
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case 'x':
            result = n1 * n2;
            break;
        case '/':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                alert("Division by zero is not allowed");
                clearAll();
                return;
            }
            break;
        default:
            return;
    }
    document.getElementById('result').textContent = result;
    clearAll();
}

function clearAll() {
    num1 = [];
    num2 = [];
    currentNum = num1;
    operator = '';
    updateDisplay();
}

function deleteLast() {
    currentNum.pop();
    updateDisplay();
}

// Event listeners for numbers
document.querySelectorAll('.numOp button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (['+', '-', 'x', '/', '='].includes(e.target.innerText)) {
            if (operator && currentNum === num2) {
                performOperation(operator);
            }
            if (e.target.innerText !== '=') {
                operator = e.target.innerText;
                currentNum = num2;
            }
        } else {
            addToNum(e.target.innerText);
        }
    });
});

// Event listener for clear
document.getElementById('clear').addEventListener('click', clearAll);

// Event listener for delete
document.getElementById('delete').addEventListener('click', deleteLast);

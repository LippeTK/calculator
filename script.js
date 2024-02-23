let add = (num1, num2) => {
    n1 = Number(num1);
    n2 = Number(num2);
    return n1 + n2;
}

let subtract = (num1, num2) => {
    n1 = Number(num1);
    n2 = Number(num2);
    return n1 - n2;
}

let multiply = (num1, num2) => {
    n1 = Number(num1);
    n2 = Number(num2);
    return n1 * n2;
}

let divide = (num1, num2) => {
    n1 = Number(num1);
    n2 = Number(num2);
    return n1 / n2;
}

let operate = (n1, op, n2) => {
    switch (op){
        case '+':
            return add(n1,n2);
        case '-':
            return subtract(n1,n2);
        case 'x':
            return multiply(n1,n2);
        case '/':
            return divide(n1,n2);
    }
}
let value = document.createElement('div');
let panel = document.querySelector('#panel');
let isOperatorSelected = false;
let num1 = '';
let operator = '';
let num2 = '';
let buttonsList = document.querySelectorAll('.button')
let removeAfterOperation = [];

buttonsList.forEach(button => {
    button.addEventListener('click', ()=>{
        let value = document.createElement('div');
        value.textContent = button.textContent;
        panel.appendChild(value);
        removeAfterOperation.push(value);

        if(!isOperatorSelected){
            if(!isNaN(value.textContent)){
                num1+= value.textContent;
            } else if(isNaN(value.textContent) && value.textContent!= "=" && value.textContent!= ".") { 
                operator = value.textContent;
                isOperatorSelected = true;
            }
        } else if(isOperatorSelected && value.textContent!= "=" && value.textContent!= "+" && value.textContent!= "-" && value.textContent!= "x" && value.textContent!= "/"){ 
            num2+= value.textContent;
        }
    })
});
document.querySelector('#equal').addEventListener('click', () => {
    let result = operate(num1, operator, num2);
    removeAfterOperation.forEach(element => {
        panel.removeChild(element);
    });
    removeAfterOperation = [];
    value.textContent = result;
    panel.appendChild(value);
    num1 = result;
    operator= '';
    num2 = '';
    isOperatorSelected = false;
    removeAfterOperation.push(value);
});


document.querySelector('#clearDiv').addEventListener('click', () => {
    removeAfterOperation.forEach(element => {
        panel.removeChild(element);
    });
    removeAfterOperation = [];
    num1 = '';
    operator= '';
    num2 = '';
    isOperatorSelected = false;
});
// variables
let firstNumber;
let operator;
let secondNumber;
let displayValue = "";

// basic functions 
const add = (num1, num2) =>  num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, operator, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 == "" || num2 == "" || operator == "") {
        return 0;
    }
    if (operator == "+") {
       return add(num1, num2);
    }
    if (operator == "-") {
        return subtract(num1, num2);
    }
    if (operator == "*") {
       return multiply(num1, num2);
    }
    if (operator == "/") {
        return divide(num1, num2);
    }
};
// display number function
function addNumber(num) {
    display.textContent = displayValue + num;
    displayValue = display.textContent;
}
function clearDisplay() {
    displayValue = "";
    firstNumber = "";
    secondNumber = "";
    display.textContent = "0";
}
function operatorFunction(displayOperator) {
    // save display value
    firstNumber = display.textContent;
    // save opeartor value
    operator = displayOperator;
    // display the display value
    displayValue = "";
}

// variables for html elements
const display = document.querySelector(".display");


// event listeners for number buttons
document.querySelector("#zero").addEventListener("click", () => addNumber("0"));
document.querySelector("#one").addEventListener("click", () => addNumber("1"));
document.querySelector("#two").addEventListener("click", () => addNumber("2"));
document.querySelector("#three").addEventListener("click", () => addNumber("3"));
document.querySelector("#four").addEventListener("click", () => addNumber("4"));
document.querySelector("#five").addEventListener("click", () => addNumber("5"));
document.querySelector("#six").addEventListener("click", () => addNumber("6"));
document.querySelector("#seven").addEventListener("click", () => addNumber("7"));
document.querySelector("#eight").addEventListener("click", () => addNumber("8"));
document.querySelector("#nine").addEventListener("click", () => addNumber("9"));

// event listeners for operator buttons
document.querySelector("#clear").addEventListener("click", () => clearDisplay());
document.querySelector("#equal").addEventListener("click", () => {
    let solution;
    // save display value
    secondNumber = display.textContent;
    // add numbers
    solution = operate(firstNumber, operator, secondNumber);
    clearDisplay();
    // display solution
    display.textContent = solution;


});
document.querySelector("#add").addEventListener("click", () => operatorFunction("+"));
document.querySelector("#subtract").addEventListener("click", () => operatorFunction("-"));
document.querySelector("#multiply").addEventListener("click", () => operatorFunction("*"));
document.querySelector("#divide").addEventListener("click", () => operatorFunction("/"));


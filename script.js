let currentOperand = "";
let previousOperand = "";
let operation = undefined;


// DISPLAY
const currentOperandElement = document.querySelector(".current-operand");
const previousOperandElement = document.querySelector(".previous-operand");


// BUTTONS
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const percentButton = document.querySelector(".percent");


// UPDATE DISPLAY
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;

    if (operation != null) {
        previousOperandElement.textContent =
            `${previousOperand} ${operation}`;
    } else {
        previousOperandElement.textContent = "";
    }
}


// NUMBERS
numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentOperand += button.textContent;

        updateDisplay();

    });

});


// DECIMAL
decimalButton.addEventListener("click", () => {

    if (!currentOperand.includes(".")) {

        currentOperand += ".";

        updateDisplay();

    }

});


// OPERATORS
operatorButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (currentOperand === "") return;

        previousOperand = currentOperand;

        operation = button.dataset.operation;

        currentOperand = "";

        updateDisplay();

    });

});


// CALCULATE
function calculate() {

    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    let result;

    switch (operation) {

        case "+":
            result = previous + current;
            break;

        case "-":
            result = previous - current;
            break;

        case "*":
            result = previous * current;
            break;

        case "/":
            if (current === 0) {
                currentOperand = "Error";
                previousOperand = "";
                operation = undefined;
                return;
            }

            result = previous / current;
            break;

        default:
            return;
    }

    currentOperand = result;
    previousOperand = "";
    operation = undefined;
}


// EQUALS
equalsButton.addEventListener("click", () => {

    calculate();

    updateDisplay();

});


// CLEAR
clearButton.addEventListener("click", () => {

    currentOperand = "";
    previousOperand = "";
    operation = undefined;

    updateDisplay();

});


// DELETE
deleteButton.addEventListener("click", () => {

    currentOperand = currentOperand.slice(0, -1);

    updateDisplay();

});


// PERCENT
percentButton.addEventListener("click", () => {

    if (currentOperand !== "") {

        currentOperand = parseFloat(currentOperand) / 100;

        updateDisplay();

    }

});
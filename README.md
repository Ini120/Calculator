# Calculator

A simple and responsive calculator built with HTML, CSS, and JavaScript.

This project was created as part of my JavaScript learning journey to practice DOM manipulation, event listeners, functions, conditional statements, and basic JavaScript logic.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Percentage calculation
- Decimal numbers
- Clear button
- Delete button
- Equal button
- Division by zero error handling
- Responsive calculator interface

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome

## How It Works

The calculator uses JavaScript to handle button clicks and perform calculations.

The application keeps track of three main pieces of information:

- `currentOperand` - stores the number currently being entered.
- `previousOperand` - stores the number entered before selecting an operation.
- `operation` - stores the selected mathematical operation.

When a number button is clicked, its value is added to the current operand and displayed on the calculator.

When an operator is selected, the current operand is moved to the previous operand, the selected operation is stored, and the calculator waits for the next number.

When the equals button is clicked, JavaScript performs the selected calculation and displays the result.

## JavaScript Concepts Practiced

This project helped me practice:

- Variables
- Strings and numbers
- `const` and `let`
- Functions
- Arrow functions
- `if` statements
- `switch` statements
- `forEach()`
- `addEventListener()`
- `querySelector()`
- `querySelectorAll()`
- `textContent`
- `dataset`
- `parseFloat()`
- `isNaN()`
- String methods such as `includes()` and `slice()`
- DOM manipulation
- Event handling

How to Run
1. Clone the repository:
2. git clone https://github.com/Ini120/Calculator.git
3. Open the project folder.
4. Open index.html in your browser.

No additional installation or setup is required.

Future Improvements

Some improvements I may add in the future include:
- Keyboard support
- Calculation history
- More advanced mathematical operations
- Improved percentage behavior
- Better error handling
- Dark and light themes

Author:
Inioluwa Aiyenuyo

This project is part of my journey learning JavaScript and improving my frontend development skills.

## Project Structure

```text
calculator/
│
├── index.html
├── styles.css
├── script.js
└── README.md


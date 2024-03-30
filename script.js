let expression = ''; // Variable to hold the expression
const display = document.getElementById('display');

function appendToDisplay(value) {
    // Append the value to the expression
    expression += value;
    // Update the display with the expression
    display.textContent = expression;
}

function clearDisplay() {
    // Reset the expression and display content
    expression = '';
    display.textContent = '0';
}

function calculate() {
    let result;
    try {
        // Evaluate the expression using the eval function
        result = eval(expression);
        // Update the display with the result
        display.textContent = result;
        // Reset the expression to the result for further calculations
        expression = result.toString();
    } catch (error) {
        // Handle errors such as division by zero
        display.textContent = 'Error';
        // Reset the expression
        expression = '';
    }
}

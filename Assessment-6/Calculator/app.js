// Simple Arithmetic Calculator

// Getting input 
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Checking valid inputs
if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers!");
} else {
  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2; 

  const results = `
    Calculation Results:
    ${num1} + ${num2} = ${addition}
    ${num1} - ${num2} = ${subtraction}
    ${num1} * ${num2} = ${multiplication}
    ${num1} / ${num2} = ${division}
  `;

  alert(results);
  console.log(results);
}
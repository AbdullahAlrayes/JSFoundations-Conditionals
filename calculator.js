const prompt = require('prompt-sync')(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const validateNumber = (value) => {
  if (!isNaN(value) && typeof value === 'number') return true;
  else {
    console.log('Invalid input, please add a number');
    return false;
  }
};
const validateOperator = (value) => {
  if (
    typeof value === 'string' &&
    value !== '+' &&
    value !== '-' &&
    value !== '/' &&
    value !== '*'
  ) {
    console.log('Invalid inputs, please add a valid operator');
    return false;
  }
  return true;
};
const getResult = (first, second, operator) => {
  if (operator === '+') {
    return first + second;
  } else if (operator === '-') {
    return first - second;
  } else if (operator === '/') {
    return first / second;
  } else if (operator === '*') {
    return first * second;
  } else {
    return 'Error!';
  }
};

let first_number = prompt('Please enter the first number: ');
first_number = parseInt(first_number);
const isFirstValid = validateNumber(first_number);
if (isFirstValid) {
  let second_number = prompt('Please enter the second number: ');
  second_number = parseInt(second_number);
  const isSecondValid = validateNumber(second_number);
  if (isSecondValid) {
    const operator = prompt('Please choose the operation (+, -, /, *): ');
    const isValidOperator = validateOperator(operator);
    if (isValidOperator) {
      const result = getResult(first_number, second_number, operator);
      console.log('result is: ' + result);
    }
  }
}

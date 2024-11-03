let previousValue = 0;
let currentValue = 0;
let result = 0;
let sign = '';

// create a separate function to calculate the results
function getCalculations() {
  // addition
  if (sign === '+') {
    return previousValue + currentValue;
  }
  return result;
}

export default function getResult(value) {
  const resultField = document.getElementById('result_field');
  const buttonAC = document.getElementById('btn_AC');

  // checking the 'AC' button press, clearing the calculator
  if (buttonAC.value === value) {
    resultField.textContent = '0';
    result = 0;
    previousValue = 0;
    currentValue = 0;
    sign = '';
    return;
  }

  // checking the number button press
  if (typeof value === 'number') {
    // remove the initial value of the calculator - 0
    if (resultField.textContent === '0') resultField.textContent = '';
    // displaying the entered number
    resultField.textContent += value;
    currentValue = +resultField.textContent;
  }

  // check for pressing a button with a sign or a comma
  if (typeof value !== 'number' && value !== buttonAC.value) {
    // processing of pressing "+"
    if (value === '+') {
      if (sign === '+') {
        previousValue += currentValue;
      } else {
        previousValue = currentValue;
      }
      sign = '+';
      resultField.textContent = '0';
      currentValue = 0;
    }
    // getting the result and processing of pressing "="
    if (value === '=') {
      result = getCalculations();
      resultField.textContent = result;
      currentValue = result;
      previousValue = 0;
    }
    console.log(`Prev: ${previousValue}`);
    console.log(`Cur: ${currentValue}`);
    console.log(`Res: ${result}`);
    console.log(`Sign: ${sign}`);
  }
}

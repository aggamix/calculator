import getCalculations from './calculations.js';

let previousValue = 0;
let currentValue = 0;
let result = 0;
let sign = '';

export default function getResult(value) {
  const resultField = document.getElementById('result_field');
  const buttonAC = document.getElementById('btn_AC');
  const updateResultField = (newValue) => {
    resultField.textContent = newValue;
    currentValue = +newValue;
  };

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
      updateResultField('0');
    }
    // processing of pressing "-"
    if (value === '–') {
      if (sign === '–') {
        previousValue -= currentValue;
      } else {
        previousValue = currentValue;
      }
      sign = '–';
      updateResultField('0');
    }
    // processing of pressing "x"
    if (value === '×') {
      if (sign === 'x' && previousValue !== 0) {
        previousValue *= currentValue;
      } else {
        previousValue = currentValue;
      }
      sign = 'x';
      updateResultField('0');
    }
    // processing of pressing "÷"
    if (value === '÷') {
      if (sign === '/' && previousValue !== 0) {
        previousValue /= currentValue;
      } else {
        previousValue = currentValue;
      }
      sign = '/';
      updateResultField('0');
    }
    // processing of pressing "%"
    if (value === '%') {
      result = currentValue / 100;
      updateResultField(result);
    }
    // processing of pressing "+/-"
    if (value === '+/-') {
      resultField.textContent *= -1;
      currentValue = +resultField.textContent;
    }
    // getting the result and processing of pressing "="
    if (value === '=') {
      result = getCalculations(sign, previousValue, currentValue, result);
      updateResultField(result);
      previousValue = 0;
      sign = '';
    }
  }
}

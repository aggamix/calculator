const previousValue = 0;
const currentValue = 0;
let result = [];
let sign = '';

export default function getResult(value) {
  const resultField = document.getElementById('result_field');
  const buttonAC = document.getElementById('btn_AC');
  // checking the 'AC' button press, clearing the calculator
  if (buttonAC.value === value) {
    resultField.textContent = '0';
    result = [];
    sign = '';
    return;
  }
  // checking the number button press
  if (typeof value === 'number') {
    // remove the initial value of the calculator - 0
    if (resultField.textContent === '0') resultField.textContent = '';
    // displaying the entered number
    resultField.textContent += value;
  }
}

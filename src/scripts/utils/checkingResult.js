// create separate function to check the long result
export default function checkResult(number, sign) {
  // return number if it's less or equals 9 numbers
  if (number.toString().length <= 9) return number;
  // return exponential notation if number is more then 9 numbers
  // and was received through multiplication or addition
  if (sign === 'x' || sign === '+') {
    const newString = number.toString();
    const exponent = `e${newString.length - 1}`;
    const mandatoryNumbers = 9 - exponent.length;
    const partOfNumber = newString.substr(0, mandatoryNumbers);
    const newNumber = `${partOfNumber.substr(0, 1)},${partOfNumber.substr(1)}${exponent}`;
    return newNumber;
  }
  return number;
}

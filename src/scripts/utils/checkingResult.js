// create separate function to check the long result
export default function checkResult(number, sign) {
  // return number if it's less or equals 9 numbers
  if (number.toString().length <= 9) return number;
  const newString = number.toString();
  // return exponential notation if number is more then 9 numbers
  if (sign !== '/' && number > 0 && !newString.includes('.')) {
    const exponent = `e${newString.length - 1}`;
    const mandatoryNumbers = 9 - exponent.length;
    const partOfNumber = newString.substring(0, mandatoryNumbers);
    return `${partOfNumber.substring(0, 1)},${partOfNumber.substr(1)}${exponent}`;
  }
  // return the rounded number
  const partOfNumber = newString.substring(0, 9);
  let lastNumber = +newString.substring(9, 10);
  if (newString[10] >= 5) lastNumber += 1;
  return `${partOfNumber}${lastNumber}`;
}

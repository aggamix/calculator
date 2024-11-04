// create a separate function to calculate the results
export default function getCalculations(
  sign,
  previousValue,
  currentValue,
  result
) {
  // addition
  if (sign === '+') return previousValue + currentValue;
  // subtraction
  if (sign === '–') return previousValue - currentValue;
  // multiplication
  if (sign === 'x') return previousValue * currentValue;
  // division
  if (sign === '/') return previousValue / currentValue;
  return result;
}

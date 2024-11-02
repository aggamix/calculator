import './calculator.css';
import createElement from '../createElement.js';
import createKeyboard from '../keyboard/keyboard.js';
import createResultBlock from '../resultBlock/createResultBlock.js';

const calculatorProps = {
  tag: 'section',
  className: ['calculator', 'calculator__light'],
  id: 'calculator',
  children: [createResultBlock(), createKeyboard()],
};

export default function createCalculator() {
  const calculator = createElement(calculatorProps);

  return calculator;
}

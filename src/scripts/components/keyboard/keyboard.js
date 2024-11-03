import './keyboard.css';
import createElement from '../createElement.js';
import buttonsConfigs from './buttonsConfig.js';
import getResult from './result.js';

function getKeyboardChildren() {
  return buttonsConfigs.map((child) => {
    const element = createElement(child);
    element.addEventListener('click', () => getResult(child.value));
    return element;
  });
}

const keyboardProps = {
  tag: 'div',
  className: ['keyboard'],
  id: 'keyboard',
  children: getKeyboardChildren(),
};

export default function createKeyboard() {
  const resultField = createElement(keyboardProps);

  return resultField;
}

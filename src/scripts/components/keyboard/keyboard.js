import './keyboard.css';
import createElement from '../createElement.js';
import buttonsConfigs from './buttonsConfig.js';

function getKeyboardChildren() {
  return buttonsConfigs.map((child) => createElement(child));
}

const keyboardProps = {
  tag: 'div',
  className: ['keyboard'],
  children: getKeyboardChildren(),
};

export default function createKeyboard() {
  const resultField = createElement(keyboardProps);

  return resultField;
}

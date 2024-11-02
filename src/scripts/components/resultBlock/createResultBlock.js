import './resultBlock.css';
import createElement from '../createElement.js';
import createThemeSwitcher from './themeSwitcher.js';
import createResultField from './createResultField.js';

const resultFieldProps = {
  tag: 'div',
  className: ['result_block'],
  children: [createThemeSwitcher(), createResultField()],
};

export default function createResultBlock() {
  const resultField = createElement(resultFieldProps);

  return resultField;
}

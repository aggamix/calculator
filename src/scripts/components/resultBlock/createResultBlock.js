import './resultBlock.css';
import createElement from '../createElement.js';
import createThemeSwitcher from './themeSwitcher.js';
import createResultField from './createResultField.js';

const resultBlockProps = {
  tag: 'div',
  className: ['result_block'],
  id: 'result_block',
  children: [createThemeSwitcher(), createResultField()],
};

export default function createResultBlock() {
  const resultField = createElement(resultBlockProps);

  return resultField;
}

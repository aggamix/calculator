import createElement from '../createElement.js';

const resultFieldProps = {
  tag: 'p',
  className: ['result_field'],
  text: '0',
  value: '0',
};

export default function createResultField() {
  const result = createElement(resultFieldProps);

  return result;
}

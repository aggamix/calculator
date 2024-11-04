import createElement from '../../utils/createElement.js';

const resultFieldProps = {
  tag: 'p',
  className: ['result_field'],
  id: 'result_field',
  text: '0',
};

export default function createResultField() {
  const result = createElement(resultFieldProps);

  return result;
}

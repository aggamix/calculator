import createElement from '../createElement.js';

const switcherProps = {
  tag: 'button',
  className: ['theme_switcher'],
  value: '',
  text: '',
};

export default function createThemeSwitcher() {
  const switcher = createElement(switcherProps);

  return switcher;
}

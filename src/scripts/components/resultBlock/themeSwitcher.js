import createElement from '../createElement.js';
import changeTheme from './changeTheme.js';

const switcherProps = {
  tag: 'button',
  className: ['theme_switcher'],
  value: 'light',
};

export default function createThemeSwitcher() {
  const switcher = createElement(switcherProps);
  switcher.addEventListener('click', (event) => changeTheme(event));

  return switcher;
}

import sunImage from '../../../img/sun.svg';
import moonImage from '../../../img/moon.svg';

export default function changeTheme(event) {
  const switcher = event.target;
  const body = document.getElementById('body');
  const calculator = document.getElementById('calculator');

  calculator.classList.toggle('calculator__light');
  calculator.classList.toggle('calculator__dark');

  if (switcher.value === 'light') {
    body.style.backgroundColor = '#000000';
    switcher.style.backgroundImage = `url(${moonImage})`;
    switcher.style.backgroundColor = '#a5a5a5';
    switcher.value = 'dark';
  } else {
    body.style.backgroundColor = '#ffffff';
    switcher.style.backgroundImage = `url(${sunImage})`;
    switcher.style.backgroundColor = '#f1a33b';
    switcher.value = 'light';
  }
}

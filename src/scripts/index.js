import '../styles/style.css';
import createCalculator from './components/calculator/calculator.js';

const body = document.getElementById('body');
body.appendChild(createCalculator());

// Import stylesheets
import './style.css';
import { User } from './general.interfaces';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const person: User = {
  name: 'Sergio',
  lastName: 'Brito',
  age: 37,
  power: 'Super Velocidad'
}

console.log(person);


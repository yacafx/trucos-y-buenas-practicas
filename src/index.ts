import { Roles } from "models/general.enums";
import { Contact, User } from "models/general.interfaces";

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Typescript: Trucos y buenas practicas</h1>`;

const person: Readonly<User> = {
  name: 'Sergio',
  lastName: 'Brito',
  age: 37,
  power: 'Super Velocidad'
};

// person.power = 'Volar';

console.log(person);

const contact: Omit<Contact, 'phone'> = {
  age: 37,
  lastName: 'Brito',
  mail: 'sergiobritor@gmail.com',
  name: 'Sergio',
  power: 'Super Velocidad',
  socialHandle: 'yacafx'
};

const alternateContact: Partial<Contact> = {
  name: 'Sergio',
  lastName: 'Brito',
  power: 'Super Velocidad',
  socialHandle: 'yacafx'
};

const heroe: Pick<Contact, 'power' | 'socialHandle'> = {
  power: 'Super Velocidad',
  socialHandle: 'yacafx'
};


let num = 5;

console.log(num === 5);
console.log(typeof num);

// num = new Number(5);
// console.log(num === 5);
// console.log(typeof num);


console.log(':::::::');
let status = true;
console.log(status === true);
console.log(typeof status);

let newStatus = new Boolean(true);
console.log(newStatus === true);
console.log(typeof newStatus);



const user = {
  name: 'Sergio',
  role: Roles.User
};



function greet(): string{
  console.log('Wazaaaaa');
  return 'Wazaaaaa';
}
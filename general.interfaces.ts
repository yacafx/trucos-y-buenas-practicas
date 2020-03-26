export type SuperPower = 'Volar' | 'Super Velocidad' | 'Invisibilidad' | 'Leer mentes';

export interface User {
  name: string;
  lastName: string;
  age: number;
  power: SuperPower;
}

export interface Contact extends User {
  mail: string;
  phone: string;
  socialHandle: string;
}
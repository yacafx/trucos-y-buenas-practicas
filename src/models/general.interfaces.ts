import { SuperPower } from "./general.types";

export interface User {
  age: number;
  lastName: string;
  name: string;
  power: SuperPower
}

export interface Contact extends User {
  mail: string;
  phone: string;
  socialHandle: string;
}
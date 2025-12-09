import { Direccion } from './direccion';
import { Contacto } from './contacto';

export class Alumno {
    id!: number;
    nombre!: string;
    apellidos!: string;
    direccion!: Direccion;
    contacto!: Contacto;
  }

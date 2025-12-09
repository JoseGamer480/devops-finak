import { Direccion } from './direccion';
import { Contacto } from './contacto';

export class Alumno {
    id!: number;
    nombre!: string;
    apellidos!: string;
    direccion!: Direccion;
    contacto!: Contacto;
  }
  /*Prueba de integración con Jenkins desde el alumno type*/

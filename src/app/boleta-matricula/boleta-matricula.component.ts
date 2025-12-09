import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Apoderado } from '../models/apoderado';
import { CursoMatriculado } from '../models/curso-matriculado';

@Component({
  selector: 'app-boleta-matricula',
  templateUrl: './boleta-matricula.component.html',
  styleUrls: ['./boleta-matricula.component.css']
})
export class BoletaMatriculaComponent {

  matricula = {
    id: null,
    alumno: {
      nombre: '',
      apellidos: '',
      direccion: {
        distrito: '',
        calle: '',
        nro: ''
      },
      contacto: {
        correo: '',
        celular: ''
      }
    },
    apoderado: {
      dni: '',
      nombre: '',
      apellido: '',
      parentesco: ''
    },
    cursosMatriculados: {
      id: null,
      nombreCurso: '',
      creditos: null
    }
  };

}

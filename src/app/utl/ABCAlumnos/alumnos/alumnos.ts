import { AlumnosUtl } from '../alumnosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService, ApiResponse } from '../alumnosapi.service';
import { CommonModule } from '@angular/common';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';

@Component({
  imports: [FormsModule, RouterLink, AlumnoFilterPipe, CommonModule],
  selector: 'app-alumnos',
  templateUrl: './alumnos.html',
})
export class Alumnos implements OnInit {

  listFilter: string = '';
  alumnoTitle: string = '';
  alumnos: AlumnosUtl[] = [];

  constructor(public alumnosutl: ProyectoapiService) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.alumnosutl.getAlumnos().subscribe({
      next: (response: ApiResponse) => {
        console.log('Datos recibidos del API:', response);
        this.alumnos = response.alumnos;
      },
      error: (error) => {
        console.error("Error al consultar el API:", error);
      },
      complete: () => {
        console.log('Carga de alumnos finalizada.');
      }
    });
  }
}
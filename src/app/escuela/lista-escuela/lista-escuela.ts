import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-lista-escuela',
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela implements OnInit {
  formulario!: FormGroup
  alumnos: Alumno[]=[]
  indiceEdition=-1

  nuevoAlumno: Alumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: '',
  }

  ngOnInit(): void {
    this.cargarAlumno()
    this.formulario = new FormGroup({
      matricula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      materia: new FormControl('', Validators.required),
    })
  }

  agregarAlumno():void{
    if(
      this.nuevoAlumno.matricula === '' ||
      this.nuevoAlumno.nombre === '' ||
      this.nuevoAlumno.correo === '' ||
      this.nuevoAlumno.materia === ''
    ){
      alert('Todos los campos son obligatorios');
      return;
    } 
    if(this.indiceEdition !== -1){
      this.alumnos[this.indiceEdition]={
        ...this.nuevoAlumno
      }
    }else{
      this.alumnos.push({...this.nuevoAlumno})
    }

    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumnos)
    )

  }

  muestraAlumno(): void {
    this.nuevoAlumno.matricula = this.formulario.value.matricula;
    this.nuevoAlumno.nombre = this.formulario.value.nombre;
    this.nuevoAlumno.correo = this.formulario.value.correo;
    this.nuevoAlumno.materia = this.formulario.value.materia;
    this.agregarAlumno();
  }

  cargarAlumno(): void {
    const datos = localStorage.getItem('alumnos');

    if (datos) {
      this.alumnos = JSON.parse(datos);
    }
  }
  
    editarAlumno(index: number): void {
    this.indiceEdition = index;
    this.nuevoAlumno = { ...this.alumnos[index] };
    this.formulario.patchValue({
      matricula: this.nuevoAlumno.matricula,
      nombre: this.nuevoAlumno.nombre,
      correo: this.nuevoAlumno.correo,
      materia: this.nuevoAlumno.materia
    });
  }

  eliminarAlumnos(index:number):void{
    this.alumnos.splice(index,1)
    localStorage.setItem(
      'alumnos', JSON.stringify(this.alumnos)
    )
  }

  limpiarCampos():void{
    this.nuevoAlumno = {
      matricula:'',
      nombre:'',
      correo:'',
      materia:''
    }
    this.formulario.patchValue({
      matricula: this.nuevoAlumno.matricula,
      nombre: this.nuevoAlumno.nombre,
      correo: this.nuevoAlumno.correo,
      materia: this.nuevoAlumno.materia
    })
    this.indiceEdition=-1
  }


}
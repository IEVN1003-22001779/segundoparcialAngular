import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ventas.html',
})
export class Ventas implements OnInit {
  ventas: any[] = [];
  mostrarModal: boolean = false;
  indiceEdicion: number = -1;
  formularioEditar!: FormGroup;

  ngOnInit(): void {
    const datosGuardados = localStorage.getItem('ventasCine');
    if (datosGuardados) {
      this.ventas = JSON.parse(datosGuardados);
    }

    this.formularioEditar = new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl('', [Validators.required, Validators.min(1)]),
      cineco: new FormControl('No', Validators.required),
      boletos: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  eliminarVenta(index: number): void {
    this.ventas.splice(index, 1);
    localStorage.setItem('ventasCine', JSON.stringify(this.ventas));
  }

  editarVenta(index: number): void {
    this.indiceEdicion = index;
    const ventaSeleccionada = this.ventas[index];
    
    this.formularioEditar.patchValue({
      nombre: ventaSeleccionada.nombre,
      compradores: ventaSeleccionada.compradores,
      cineco: ventaSeleccionada.cineco,
      boletos: ventaSeleccionada.boletos
    });
    
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.indiceEdicion = -1;
  }

  guardarEdicion(): void {
    const compradores = this.formularioEditar.value.compradores;
    const boletos = this.formularioEditar.value.boletos;
    const cineco = this.formularioEditar.value.cineco;
    const maxBoletos = compradores * 7;
    if (boletos > maxBoletos) {
      alert(`No puedes comprar más de 7 boletos por persona. El máximo para ${compradores} compradores es de ${maxBoletos} boletos.`);
      return; 
    }

    const precio = 12;
    let total = boletos * precio;
    let descuento = 0;

    if (boletos > 5) {
      descuento = 0.15; 
    } else if (boletos >= 3 && boletos <= 5) {
      descuento = 0.10; 
    }
    total = total - (total * descuento);

    if (cineco === 'Si') {
      total = total - (total * 0.10);
    }

    this.ventas[this.indiceEdicion] = {
      nombre: this.formularioEditar.value.nombre,
      compradores: compradores,
      cineco: cineco,
      boletos: boletos,
      costo: total
    };

    localStorage.setItem('ventasCine', JSON.stringify(this.ventas));
    this.cerrarModal();
  }
}
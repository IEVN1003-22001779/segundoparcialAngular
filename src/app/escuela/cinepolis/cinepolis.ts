import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cinepolis.html',
  styleUrls: ['./cinepolis.css'] 
})
export class Cinepolis implements OnInit {
  cine!: FormGroup; 
  totalPagar: number = 0;
  mensaje: string = '';
  resultado: boolean = false;

  ngOnInit(): void {
    this.cine = new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl('', [Validators.required, Validators.min(1)]),
      cineco: new FormControl('No', Validators.required),
      boletos: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  procesarCompra(): void {
    this.mensaje = '';
    this.resultado = false;

    const compradores = this.cine.value.compradores;
    const boletos = this.cine.value.boletos;
    const cineco = this.cine.value.cineco;

    const maxBoletos = compradores * 7;
    
    if (boletos > maxBoletos) {
      this.mensaje = `No puedes comprar más de 7 boletos por persona. El máximo para ${compradores} compradores es de ${maxBoletos} boletos.`;
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

    this.totalPagar = total;
    this.resultado = true;
  }

  salir(): void {
    this.cine.reset({ cineco: 'No' });
    this.resultado = false;
    this.mensaje = '';
  }
}
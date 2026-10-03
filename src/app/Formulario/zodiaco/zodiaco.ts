import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zodiaco.html',
  styleUrls: ['./zodiaco.css']
})
export class ZodiacoComponent {
  nombresUsuario: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  edad: number = 0;
  signo: string = '';
  imagen: string = '';
  resultado: boolean = false; // es booleano para que se muestre el resultado cuando se de click en el boton

  imprimir(): void {
    // para que agreguen si o si la fecha
    if (!this.anio || !this.mes || !this.dia) return;

    // para calcular la fecha
    const fechaHoy = new Date();
    this.edad = fechaHoy.getFullYear() - this.anio;
    
    // Si aún no ha pasado su mes de cumpleaños, le restamos 1 año para calcular la edad correctamente
    if (fechaHoy.getMonth() + 1 < this.mes || (fechaHoy.getMonth() + 1 === this.mes && fechaHoy.getDate() < this.dia)) {
      this.edad--;
    } // el === es para que si es el mismo mes, pero no ha llegado al dia, le reste 1 año y los || es para que si es el mismo mes y el mismo dia, no le reste 1 año

    //para calcular que animal del zodiaco es el usuario
    const animal = this.anio % 12;

    switch (animal) {
      case 0:
        this.signo = 'Mono';
        this.imagen = 'https://tse4.mm.bing.net/th/id/OIP.pOrBwfHVxNE4rCvxvm0sRwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 1:
        this.signo = 'Gallo';
        this.imagen = 'https://tse3.mm.bing.net/th/id/OIP.jgpM4Ofz1akVcpJF2rF3AgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 2:
        this.signo = 'Perro';
        this.imagen = 'https://tse2.mm.bing.net/th/id/OIP.hSsUyd1aIS9A0LYJk5_WkgHaHa?r=0&w=1100&h=1100&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 3:
        this.signo = 'Cerdo';
        this.imagen = 'https://tse1.mm.bing.net/th/id/OIP.6p3rBlvcYL0ZtNL4dnCiPwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 4:
        this.signo = 'Rata';
        this.imagen = 'https://tse2.mm.bing.net/th/id/OIP.NXBLN41m6S9J3aiK5oKDMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 5:
        this.signo = 'Buey';
        this.imagen = 'https://tse4.mm.bing.net/th/id/OIP.zM7OYkpv1UFNd9lPosg6JQHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 6:
        this.signo = 'Tigre';
        this.imagen = 'https://tse2.mm.bing.net/th/id/OIP.XqCLA7JhRI7BeFhmboMIWQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 7:
        this.signo = 'Conejo';
        this.imagen = 'https://tse3.mm.bing.net/th/id/OIP.4g0k1J6X8Q5W7Z2nY9j0xAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 8:
        this.signo = 'Dragón';
        this.imagen = 'https://tse4.mm.bing.net/th/id/OIP.BttBsW3cHfYsvvkLTrsrZAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 9:
        this.signo = 'Serpiente';
        this.imagen = 'https://tse1.mm.bing.net/th/id/OIP.muMEicRyQXgUkvG-JyBIHAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 10:
        this.signo = 'Caballo';
        this.imagen = 'https://tse2.mm.bing.net/th/id/OIP.ZTXM6_sCsRTAww_rONOylgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      case 11:
        this.signo = 'Cabra';
        this.imagen = 'https://tse1.mm.bing.net/th/id/OIP.nNH_GZ7OwGQ8lvuXMcvEnwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
        break;
      default:
        this.signo = 'No se conoce su signo.';
        this.imagen = '';
        break;
    }

    this.resultado = true;
  }
}
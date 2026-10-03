import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
// Importamos tu componente con la ruta exacta que te generó
import { ZodiacoComponent } from './Formulario/zodiaco/zodiaco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZodiacoComponent], // Lo agregamos a los imports
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'segundoparcialAngular';

  ngOnInit(): void {
    initFlowbite();
  }
}
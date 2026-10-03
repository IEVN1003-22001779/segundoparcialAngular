import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ZodiacoComponent } from './Formulario/zodiaco/zodiaco';
import { Navbar } from './navbar/navbar';
import { Distancia } from './Formulario/distancia/distancia';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZodiacoComponent, Navbar, Distancia],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'segundoparcialAngular';

  ngOnInit(): void {
    initFlowbite();
  }
}
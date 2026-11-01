import { MaestrosUtl } from '../maestrosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaestrosapiService, ApiMaestrosResponse } from '../maestrosapi.service';
import { CommonModule } from '@angular/common';
import { MaestrosFilterPipe } from '../maestros-filter.pipe';

@Component({
  imports: [FormsModule, RouterLink, MaestrosFilterPipe, CommonModule],
  selector: 'app-maestros',
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {

  listFilter: string = '';
  maestros: MaestrosUtl[] = [];

  constructor(public maestrosService: MaestrosapiService) {}

  ngOnInit(): void {
    this.cargarMaestros();
  }

  cargarMaestros(): void {
    this.maestrosService.getMaestros().subscribe({
      next: (response: ApiMaestrosResponse) => {
        this.maestros = response.maestros || [];
      },
      error: (error) => {
        console.error("Error al consultar el API de maestros:", error);
      }
    });
  }
}
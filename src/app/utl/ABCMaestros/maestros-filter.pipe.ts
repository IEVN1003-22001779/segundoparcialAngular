import { Pipe, PipeTransform } from '@angular/core';
import { MaestrosUtl } from './maestrosUTL';

@Pipe({
  name: 'maestrosFilter',
  standalone: true
})
export class MaestrosFilterPipe implements PipeTransform {
  transform(maestros: MaestrosUtl[], search: string): MaestrosUtl[] {
    if (!maestros || !search) {
      return maestros;
    }
    return maestros.filter(maestro =>
      maestro.nombre.toLowerCase().includes(search.toLowerCase()) ||
      String(maestro.idmaestro).includes(search)
    );
  }
}
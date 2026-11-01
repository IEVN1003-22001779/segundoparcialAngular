import { Pipe, PipeTransform } from '@angular/core';
import {AlumnosUtl} from './alumnosUTL';

@Pipe({
  name: 'alumnosFilter',
  standalone: true
})
export class AlumnoFilterPipe implements PipeTransform {
  transform(value:AlumnosUtl[], args:string): AlumnosUtl[] {
    let filter:string=args?args.toLocaleLowerCase():'';
    return filter?value.filter((hero:AlumnosUtl)=>
    hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }
}
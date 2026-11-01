import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnosUtl } from './alumnosUTL';

export interface ApiResponse {
  alumnos: AlumnosUtl[];
  mensaje: string;
  exito: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ProyectoapiService {
    constructor(private http: HttpClient) { }
    
    public getAlumnos(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>('http://127.0.0.1:5000/api/alumnos/');
    }

    public getAlumnoByMatricula(matricula: number | string): Observable<any> {
        return this.http.get(`http://127.0.0.1:5000/api/alumnos/${matricula}`);
    }

    public agregarNuevoAlumno(datos: AlumnosUtl): Observable<any> {
        return this.http.post('http://127.0.0.1:5000/api/alumnos/', datos);
    }

    public actualizarAlumno(matricula: number | string, datos: AlumnosUtl): Observable<any> {
        return this.http.put(`http://127.0.0.1:5000/api/alumnos/${matricula}`, datos);
    }

    public eliminarAlumno(matricula: number | string): Observable<any> {
        return this.http.delete(`http://127.0.0.1:5000/api/alumnos/${matricula}`);
    }
}
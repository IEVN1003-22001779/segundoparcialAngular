import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaestrosUtl } from './maestrosUTL';

export interface ApiMaestrosResponse {
  maestros: MaestrosUtl[];
  mensaje: string;
  exito: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class MaestrosapiService {
    constructor(private http: HttpClient) { }
    
    public getMaestros(): Observable<ApiMaestrosResponse> {
        return this.http.get<ApiMaestrosResponse>('http://127.0.0.1:5000/api/maestros/');
    }

    public getMaestroById(id: number | string): Observable<any> {
        return this.http.get(`http://127.0.0.1:5000/api/maestros/${id}`);
    }

    public agregarNuevoMaestro(datos: MaestrosUtl): Observable<any> {
        return this.http.post('http://127.0.0.1:5000/api/maestros/', datos);
    }

    public actualizarMaestro(id: number | string, datos: MaestrosUtl): Observable<any> {
        return this.http.put(`http://127.0.0.1:5000/api/maestros/${id}`, datos);
    }

    public eliminarMaestro(id: number | string): Observable<any> {
        return this.http.delete(`http://127.0.0.1:5000/api/maestros/${id}`);
    }
}
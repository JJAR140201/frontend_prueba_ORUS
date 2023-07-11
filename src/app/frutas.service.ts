import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frutas } from './frutas';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  //Listado de frutas para el backend
  private baseURL = "localhost:8080/api/v1/frutas";
  constructor(private httpClient: HttpClient) { }
  
  //Metodo para obtener el listado de frutas
  obtenerListaDeFrutas(): Observable<Frutas[]>{
    return this.httpClient.get<Frutas[]>(`${this.baseURL}`);
  }
}

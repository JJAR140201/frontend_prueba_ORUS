import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from './pedidos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
//Listado de frutas para el backend
private baseURL2 = "localhost:8080/api/v1/pedidos";
constructor(private httpClient: HttpClient) { }

//Metodo para obtener el listado de frutas
obtenerListaDePedidos(): Observable<Pedidos[]>{
  return this.httpClient.get<Pedidos[]>(`${this.baseURL2}`);
}
}

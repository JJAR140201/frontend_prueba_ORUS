import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos: Pedidos[];
  constructor (private pedidosServicio: PedidosService) {}
  ngOnInit(): void {
    this.obtenerPedido();
  }
  private obtenerPedido(){
    this.pedidosServicio.obtenerListaDePedidos().subscribe(dato2 => {
      this.pedidos = dato2;
    });
  }
}

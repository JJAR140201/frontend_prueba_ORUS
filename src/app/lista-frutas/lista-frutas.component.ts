import { Component, OnInit } from '@angular/core';
import { Frutas } from '../frutas';
import { FrutasService } from '../frutas.service';

@Component({
  selector: 'app-lista-frutas',
  templateUrl: './lista-frutas.component.html',
  styleUrls: ['./lista-frutas.component.css']
})
export class ListaFrutasComponent implements OnInit {
  frutas: Frutas[];

  constructor ( private frutasServicio: FrutasService) { }

  ngOnInit(): void {
    this.obtenerFrutas();
  }

  private obtenerFrutas(){
    this.frutasServicio.obtenerListaDeFrutas().subscribe(dato => {
      this.frutas = dato;
    });
  }
}

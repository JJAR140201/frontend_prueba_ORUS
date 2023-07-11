import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFrutasComponent } from './lista-frutas/lista-frutas.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFrutasComponent,
    ListaPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { CargarTiempoComponent } from './cargar-tiempo/cargar-tiempo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosMenuComponent } from './datos-menu/datos-menu.component';

@NgModule({
  declarations: [
    ListaPedidosComponent,
    DatosPedidoComponent,
    DatosMenuComponent,
    CargarTiempoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaPedidosComponent,
    DatosPedidoComponent,
    DatosMenuComponent,
    CargarTiempoComponent
  ]
})
export class PedidosComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadoPedidoPage } from './estado-pedido.page';
import { PedidosComponentsModule } from '../components/pedidos-components.module';

const routes: Routes = [
  {
    path: '',
    component: EstadoPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PedidosComponentsModule
  ],
  declarations: [EstadoPedidoPage]
})
export class EstadoPedidoPageModule {}

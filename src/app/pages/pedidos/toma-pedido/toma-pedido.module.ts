import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TomaPedidoPage } from './toma-pedido.page';
import { PedidosComponentsModule } from '../components/pedidos-components.module';

const routes: Routes = [
  {
    path: '',
    component: TomaPedidoPage
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
  declarations: [TomaPedidoPage]
})
export class TomaPedidoPageModule {}

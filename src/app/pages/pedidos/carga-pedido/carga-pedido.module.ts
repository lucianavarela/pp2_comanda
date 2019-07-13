import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargaPedidoPage } from './carga-pedido.page';
import { DatosMenuComponent } from '../components/datos-menu/datos-menu.component';

const routes: Routes = [
  {
    path: '',
    component: CargaPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DatosMenuComponent
  ],
  declarations: [CargaPedidoPage]
})
export class CargaPedidoPageModule {}

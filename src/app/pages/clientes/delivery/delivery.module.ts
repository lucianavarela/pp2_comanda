import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveryPage } from './delivery.page';
import { PedidosComponentsModule } from '../../pedidos/components/pedidos-components.module';
import { DatosMenuComponent } from '../../pedidos/components/datos-menu/datos-menu.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PedidosComponentsModule,
    DatosMenuComponent
  ],
  declarations: [DeliveryPage]
})
export class DeliveryPageModule {}

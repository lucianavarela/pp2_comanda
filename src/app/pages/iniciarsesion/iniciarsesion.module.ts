import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IniciarsesionPage } from './iniciarsesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [IniciarsesionPage]
})
export class IniciarsesionPageModule {}

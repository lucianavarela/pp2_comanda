import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LlenarEncuestaPage } from './llenar-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: LlenarEncuestaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LlenarEncuestaPage]
})
export class LlenarEncuestaPageModule {}

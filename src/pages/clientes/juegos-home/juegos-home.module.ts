import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegosHomePage } from './juegos-home';

@NgModule({
  declarations: [
    JuegosHomePage,
  ],
  imports: [
    IonicPageModule.forChild(JuegosHomePage),
  ],
})
export class JuegosHomePageModule {}

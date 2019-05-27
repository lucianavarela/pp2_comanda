import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegoPostrePage } from './juego-postre';

@NgModule({
  declarations: [
    JuegoPostrePage,
  ],
  imports: [
    IonicPageModule.forChild(JuegoPostrePage),
  ],
})
export class JuegoPostrePageModule {}

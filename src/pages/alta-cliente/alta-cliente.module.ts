import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AltaClientePage } from './alta-cliente';

@NgModule({
  declarations: [
    AltaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AltaClientePage),
  ],
})
export class AltaClientePageModule {}

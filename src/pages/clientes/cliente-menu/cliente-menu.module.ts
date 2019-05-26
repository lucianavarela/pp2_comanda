import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteMenuPage } from './cliente-menu';

@NgModule({
  declarations: [
    ClienteMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteMenuPage),
  ],
})
export class ClienteMenuPageModule {}

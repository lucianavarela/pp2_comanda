import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IniciarsesionPage;
  splash: boolean = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();   
      splashScreen.hide();
      setTimeout(() => {
        this.splash = false;
      }, 4000);
    });
  }
}

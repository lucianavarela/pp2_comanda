import { Component } from '@angular/core';
<<<<<<< HEAD
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
=======
>>>>>>> development

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { SmartAudioService } from './services/smart-audio/smart-audio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
<<<<<<< HEAD
export class MyApp {
  rootPage:any = IniciarsesionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
=======
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService,
    private audioService: SmartAudioService
  ) {
    this.initializeApp();
    this.audioService.preload('inicio', 'assets/sonidos/bubbly.wav');
  }
  splash: boolean = true;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => {
        this.splash = false;
        this.audioService.play('inicio');
        if (!this.authService.isLogged()) {
          this.router.navigate(['login']);
        }
      }, 4000);
>>>>>>> development
    });
  }
}

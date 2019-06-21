import { Component } from '@angular/core';

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
          this.router.navigate(['bienvenido']);
        }
      }, 4000);
    });
  }
}

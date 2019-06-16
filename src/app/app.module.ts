import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';

//Paginas
import { HomePage } from '../pages/home/home';
import {  IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import {  RegistrarsePage } from '../pages/iniciarsesion/registrarse';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Servicios
import { ErrorsHandlerProvider } from '../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from '../providers/spinner-handler/spinner-handler';
import { HttpBase } from '../providers/http-base/http-base.service';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerInterceptor } from '../providers/Interceptors/SpinnerInterceptor';
import { ErrorInterceptor } from '../providers/Interceptors/ErrorInterceptor';
import { JwtInterceptor } from '../providers/Interceptors/JWTInterceptor';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

//configuraciones generales
import { configs } from './../globalConfig';

//sonido
import { NativeAudio } from '@ionic-native/native-audio';

//Camara
import { Camera } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthService } from '../providers/authentication-service/auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function getAccessToken() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    RegistrarsePage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(configs.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    [JwtModule.forRoot({
      config: {
        tokenGetter: (getAccessToken),
        whitelistedDomains: ['https://mauriciocerizza.github.io', 'localhost:4200', 'localhost:8100']
      }
    })]
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    RegistrarsePage    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ErrorsHandlerProvider,
    SpinnerHandlerProvider,
    NativeAudio,
    Camera,
    HTTP,
    AuthService, 
    HttpBase, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    JwtHelperService
  ]
})
export class AppModule {}

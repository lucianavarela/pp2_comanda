import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Paginas
import { HomePage } from '../pages/home/home';
import {  IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import {  RegistrarsePage } from '../pages/iniciarsesion/registrarse';
import { AltaClientePage } from '../pages/clientes/alta-cliente/alta-cliente';
import { PopoverPage } from '../pages/popover/popover';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Servicios
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { ErrorsHandlerProvider } from '../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from '../providers/spinner-handler/spinner-handler';
import { HttpBaseProvider } from '../providers/http-base/http-base';
import { HttpClientModule } from '@angular/common/http';

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
import { MenuServiceProvider } from '../providers/menu-service/menu-service';
import { EmpleadoServiceProvider } from '../providers/empleado-service/empleado-service';
import { MesaServiceProvider } from '../providers/mesa-service/mesa-service';
import { ClienteServiceProvider } from '../providers/cliente-service/cliente-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    RegistrarsePage,
    PopoverPage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(configs.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule 
   
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    RegistrarsePage,
    PopoverPage   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationServiceProvider,
    ErrorsHandlerProvider,
    SpinnerHandlerProvider,
    NativeAudio,
    Camera,
    HttpBaseProvider,
    HTTP,
    MenuServiceProvider,
    EmpleadoServiceProvider,
    MesaServiceProvider,
    ClienteServiceProvider
   
  ]
})
export class AppModule {}

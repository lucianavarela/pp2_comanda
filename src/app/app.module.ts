import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//Paginas
import { HomePage } from './pages/home/home.page';
import { IniciarsesionPage } from './pages/iniciarsesion/iniciarsesion.page';
import { RegistrarsePage } from './pages/registrarse/registrarse.page';
import { AppComponent } from './app.component';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';
import { CargaPedidoPage } from './pages/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
import { MesasPage } from './pages/mesas/mesas.page';
import { TatetiPage } from './pages/tateti/tateti.page';

//Servicios
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { HttpService } from './services/http/http.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { SpinnerHandlerService } from './services/spinner-handler/spinner-handler.service';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//configuraciones generales
import { configs } from './../globalConfig';

//Camara
import { Camera } from '@ionic-native/camera/ngx';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

//Audio
import { SmartAudioService } from './services/smart-audio/smart-audio.service';

//Interceptors
import { JwtInterceptor } from './services/interceptors/JWTInterceptor';
import { ErrorInterceptor } from './services/interceptors/ErrorInterceptor';
import { SpinnerInterceptor } from './services/interceptors/SpinnerInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';


export function getAccessToken() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    IniciarsesionPage,
    RegistrarsePage,
    AbmEmpleadoPage,
    CargaPedidoPage,
    EmpleadosPage,
    MesasPage,
    TatetiPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(configs.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    [JwtModule.forRoot({
      config: {
        tokenGetter: (getAccessToken),
        whitelistedDomains: ['https://mauriciocerizza.github.io', 'localhost:4200', 'localhost:8100']
      }
    })]

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    HomePage,
    IniciarsesionPage,
    RegistrarsePage

  ],
  providers: [
    ErrorHandlerService,
    ErrorHandler,
    SpinnerHandlerService,
    SmartAudioService,
    HttpService,
    AuthService,
    HttpService,
    StatusBar,
    SplashScreen,
    Camera,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
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
export class AppModule { }

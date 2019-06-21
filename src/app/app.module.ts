//Paginas
import { HomePage } from './pages/home/home.page';
import { IniciarsesionPage } from './pages/iniciarsesion/iniciarsesion.page';
import { RegistrarsePage } from './pages/registrarse/registrarse.page';
import { AltaClientePage } from './pages/clientes/alta-cliente/alta-cliente.page';
import { ReservasPage }  from './pages/reservas/reservas.page';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';
import { CargaPedidoPage } from './pages/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
import { MesasPage } from './pages/mesas/mesas.page';
import { TatetiPage } from './pages/tateti/tateti.page';
import { InicioClientePage } from './pages/inicio-cliente/inicio-cliente.page';
import { BienvenidoPage } from './pages/bienvenido/bienvenido.page';

//Servicios
import { AuthService } from './services/auth/auth.service';
import { HttpService } from './services/http/http.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { SpinnerHandlerService } from './services/spinner-handler/spinner-handler.service';

//Firebase

//configuraciones generales
import { configs } from './../globalConfig';

//Camara

//Audio
import { SmartAudioService } from './services/smart-audio/smart-audio.service';


//Interceptors
import { JwtInterceptor } from './services/interceptors/JWTInterceptor';
import { ErrorInterceptor } from './services/interceptors/ErrorInterceptor';
import { SpinnerInterceptor } from './services/interceptors/SpinnerInterceptor';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { ErrorHandler } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicErrorHandler } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Camera } from '@ionic-native/camera/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


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
    AltaClientePage,
    ReservasPage,
    MesasPage,
    TatetiPage,
    InicioClientePage,
    BienvenidoPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeAudio,
    Camera,
    HTTP
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

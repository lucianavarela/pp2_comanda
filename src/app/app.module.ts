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
import { AltaClientePage } from './pages/clientes/alta-cliente/alta-cliente.page';
import { ReservasPage }  from './pages/reservar/reservas/reservas.page';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';
import { CargaPedidoPage } from './pages/pedidos/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
import { MesasPage } from './pages/mesas/mesas.page';
import { TatetiPage } from './pages/clientes/tateti/tateti.page';
import { InicioClientePage } from './pages/inicio-cliente/inicio-cliente.page';
import { BienvenidoPage } from './pages/bienvenido/bienvenido.page';
import { JuegosHomePage } from './pages/clientes/juegos-home/juegos-home.page';
import { AhorcadoPage } from './pages/clientes/ahorcado/ahorcado.page';
import { ActivarClientesPage } from './pages/clientes/activar-clientes/activar-clientes.page';
import { ListaReservasPage } from './pages/reservar/lista-reservas/lista-reservas.page';
import { AltaSocioPage } from './pages/socio/alta-socio/alta-socio.page';
import { DeliveryPage } from './pages/clientes/delivery/delivery.page';
import { EncuestaPage } from './pages/clientes/encuesta/encuesta.page';
import { EncuestasPage } from './pages/encuesta/encuestas/encuestas.page';
import { ListaEsperaPage } from './pages/lista-espera/lista-espera.page';
import { HomeQrPage } from './pages/Qr/home-qr/home-qr.page';

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
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

//Audio
import { SmartAudioService } from './services/smart-audio/smart-audio.service';


//Interceptors
import { JwtInterceptor } from './services/interceptors/JWTInterceptor';
import { ErrorInterceptor } from './services/interceptors/ErrorInterceptor';
import { SpinnerInterceptor } from './services/interceptors/SpinnerInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PedidosMenuPage } from './pages/pedidos/pedidos-menu/pedidos-menu.page';
import { TomaPedidoPage } from './pages/pedidos/toma-pedido/toma-pedido.page';
import { PedidosComponentsModule } from './pages/pedidos/components/pedidos-components.module';
import { ToastService } from './services/toast/toast.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { EstadoPedidoPage } from './pages/pedidos/estado-pedido/estado-pedido.page';


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
    BienvenidoPage,
    JuegosHomePage,
    AhorcadoPage,
    ActivarClientesPage,
    PedidosMenuPage,
    TomaPedidoPage,
    ListaReservasPage,
    EstadoPedidoPage,
    AltaSocioPage,
    DeliveryPage,
    EncuestaPage,
    EncuestasPage,
    ListaEsperaPage,
    HomeQrPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PedidosComponentsModule,
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
    ToastService,
    Vibration,
    BarcodeScanner,
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
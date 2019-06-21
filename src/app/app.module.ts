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
    AuthenticationServiceProvider,
    ErrorsHandlerProvider,
    SpinnerHandlerProvider,
    NativeAudio,
    Camera,
    HttpBaseProvider,
    HTTP
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

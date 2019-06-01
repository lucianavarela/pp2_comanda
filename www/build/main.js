webpackJsonp([7],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(usuario, pass, tipo) {
        this.usuario = usuario;
        this.tipo = tipo;
        this.pass = pass;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alta-supervisor/alta-supervisor.module": [
		440,
		0
	],
	"../pages/clientes/alta-cliente/alta-cliente.module": [
		441,
		1
	],
	"../pages/clientes/cliente-menu/cliente-menu.module": [
		442,
		5
	],
	"../pages/clientes/juego-postre/juego-postre.module": [
		443,
		4
	],
	"../pages/clientes/juegos-home/juegos-home.module": [
		444,
		3
	],
	"../pages/iniciarsesion/iniciarsesion.module": [
		445,
		6
	],
	"../pages/reservas/reservas.module": [
		446,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http_ngx__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpBaseProvider = /** @class */ (function () {
    function HttpBaseProvider(http) {
        this.http = http;
        this.urlBase = 'https://restaurante-cerizza.herokuapp.com/';
        console.log('Hello HttpBaseProvider Provider');
    }
    HttpBaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http_ngx__["a" /* HTTP */]])
    ], HttpBaseProvider);
    return HttpBaseProvider;
}());

//# sourceMappingURL=http-base.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_errors_handler_errors_handler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__iniciarsesion__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrarsePage = /** @class */ (function () {
    function RegistrarsePage(navCtrl, autenticationService, errorHandler, spinnerHandler, alertCtrl) {
        this.navCtrl = navCtrl;
        this.autenticationService = autenticationService;
        this.errorHandler = errorHandler;
        this.spinnerHandler = spinnerHandler;
        this.alertCtrl = alertCtrl;
        this.user = { name: '', pass: '', secondPass: '' };
    }
    RegistrarsePage.prototype.registerUser = function () {
        var _this = this;
        if (this.validForm()) {
            var spiner_1 = this.spinnerHandler.presentLoadingCustom();
            spiner_1.present();
            this.autenticationService.registerUser(this.user.name, this.user.pass)
                .then(function (response) {
                spiner_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], { usuario: response });
            })
                .catch(function (error) {
                _this.errorHandler.mostrarMensajeConfimación("Se produjo un error al registrarse", 'Error');
            });
        }
    };
    RegistrarsePage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__iniciarsesion__["a" /* IniciarsesionPage */], { 'fromApp': true });
    };
    RegistrarsePage.prototype.validForm = function () {
        if (this.user.name && this.user.pass && this.user.secondPass) {
            if (this.user.pass == this.user.secondPass) {
                if (this.user.pass.length > 5) {
                    return true;
                }
                this.errorHandler.mostrarMensajeConfimación("La contraseña es muy corta", 'Error');
            }
            else {
                this.errorHandler.mostrarMensajeConfimación("Las contraseñas son diferentes", 'Error');
            }
        }
        else {
            this.errorHandler.mostrarMensajeConfimación("Debe completar todos los campos", 'Error');
        }
        return false;
    };
    RegistrarsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iniciarsesion',template:/*ion-inline-start:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/iniciarsesion/registrarse.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label floating style="color: rgba(26, 25, 25, 0.987);" >Correo Electrónico</ion-label>\n        <ion-input type="email" required name="email" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Contraseña</ion-label>\n        <ion-input type="password" required name="password" [(ngModel)]="user.pass"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label floating  style="color: black;" >Repetir contraseña</ion-label>\n        <ion-input type="password" required name="password" [(ngModel)]="user.secondPass"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col  class="botones-redondos">\n      <button ion-button  color="boton"  id="boton" (click)="registerUser()" round>Registrarse</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col  class="botones-redondos">\n      <button ion-button  small  color="light"  id="boton" (click)="cancel()" round>Cancel</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/iniciarsesion/registrarse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistrarsePage);
    return RegistrarsePage;
}());

//# sourceMappingURL=registrarse.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_authentication_service_authentication_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_errors_handler_errors_handler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_spinner_handler_spinner_handler__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_base_http_base__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__globalConfig__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_audio__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_http_ngx__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Paginas





//Servicios




//Firebase



//configuraciones generales

//sonido

//Camara


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__["a" /* RegistrarsePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alta-supervisor/alta-supervisor.module#AltaSupervisorPageModule', name: 'AltaSupervisorPage', segment: 'alta-supervisor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/alta-cliente/alta-cliente.module#AltaClientePageModule', name: 'AltaClientePage', segment: 'alta-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/cliente-menu/cliente-menu.module#ClienteMenuPageModule', name: 'ClienteMenuPage', segment: 'cliente-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/juego-postre/juego-postre.module#JuegoPostrePageModule', name: 'JuegoPostrePage', segment: 'juego-postre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/juegos-home/juegos-home.module#JuegosHomePageModule', name: 'JuegosHomePage', segment: 'juegos-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/iniciarsesion/iniciarsesion.module#IniciarsesionPageModule', name: 'IniciarsesionPage', segment: 'iniciarsesion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservas/reservas.module#ReservasPageModule', name: 'ReservasPage', segment: 'reservas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__["a" /* RegistrarsePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__providers_http_base_http_base__["a" /* HttpBaseProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_http_ngx__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    return Login;
}());

//# sourceMappingURL=Login.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_iniciarsesion_iniciarsesion__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/user/Escritorio/pp2_comanda-dev-leo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/user/Escritorio/pp2_comanda-dev-leo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configs; });
var configs = {
    firebaseConfig: {
        apiKey: "AIzaSyDJqRLzqxrBxh6v8ysAdGrbQL7bQQTBGyg",
        authDomain: "conversando-127d9.firebaseapp.com",
        databaseURL: "https://conversando-127d9.firebaseio.com"
    }
};
//# sourceMappingURL=globalConfig.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciarsesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrarse__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Model_Login__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_errors_handler_errors_handler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Model_User__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the IniciarsesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IniciarsesionPage = /** @class */ (function () {
    function IniciarsesionPage(platform, nativeAudio, navCtrl, navParams, autenticationService, errorHandler, alertCtrl, spinnerHandler) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autenticationService = autenticationService;
        this.errorHandler = errorHandler;
        this.alertCtrl = alertCtrl;
        this.spinnerHandler = spinnerHandler;
        this.splash = true;
        this.loading = false;
        this.userSelect = "";
        this.selectUserOptions = { title: '' };
        this.selectUserOptions.title = "Usuarios disponibles";
        this.nativeAudio.preloadComplex('inicio', 'assets/sonidos/inicio.mp3', 1, 1, 0);
        this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('', '');
    }
    IniciarsesionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get('fromApp')) {
            this.splash = false;
        }
        else {
            setTimeout(function () {
                _this.splash = false;
            }, 4000);
        }
    };
    IniciarsesionPage.prototype.singIn = function () {
        var _this = this;
        if (this.validForm()) {
            var spiner = this.spinnerHandler.presentLoadingCustom();
            spiner.present();
            this.autenticationService.singIn(this.dataLogin.user, this.dataLogin.pass)
                .then(function (rerponse) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: rerponse });
            })
                .catch(function (err) {
                _this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar", 'Error');
            });
            spiner.dismiss();
        }
    };
    IniciarsesionPage.prototype.registerUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__registrarse__["a" /* RegistrarsePage */]);
    };
    IniciarsesionPage.prototype.validForm = function () {
        if (this.dataLogin.user != '' && this.dataLogin.pass != '') {
            return true;
        }
        else {
            this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos", 'Error');
            return false;
        }
    };
    IniciarsesionPage.prototype.play = function () {
        this.nativeAudio.play('inicio');
    };
    ////nuevo
    IniciarsesionPage.prototype.validarF = function () {
        if (this.dataLogin.user != '' && this.dataLogin.pass != '') {
            return true;
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Debe llenar todos los campos",
                buttons: ['Aceptar'],
                cssClass: 'present-alert'
            });
            alert_1.present();
            return false;
        }
    };
    IniciarsesionPage.prototype.CargarDefault = function (tipo) {
        switch (tipo) {
            case 'S':
                /* this.dataLogin.user = 'admin';
                 this.dataLogin.pass = 'admin';    */
                this.dataLogin.user = "admin@admin.com";
                this.dataLogin.pass = "123456";
                // this.singIn(); 
                this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]('admin', 'admin', 'socio');
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: this.usuario });
                break;
            case 'B':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('Matias', '1234');
                this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]('Matias', '1234', 'bartender');
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: this.usuario });
                break;
            case 'CE':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('cervecero', 'cervecero');
                this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]('cervecero', 'cervecero', 'cervecero');
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: this.usuario });
                break;
            case 'CO':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('cocinero', 'cocinero');
                this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]('cocinero', 'cocinero', 'cocinero');
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: this.usuario });
                break;
            case 'M':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('mozo', 'mozo');
                this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]('mozo', 'mozo', 'mozo');
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: this.usuario });
                break;
            case 'CL':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('cliente', 'cliente');
                this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]('cliente', 'cliente', 'cliente');
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: this.usuario });
                break;
        }
    };
    IniciarsesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iniciarsesion',template:/*ion-inline-start:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/iniciarsesion/iniciarsesion.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top">\n    </div>\n    <img src="assets/imgs/logo.png">\n    <div class="Aligner-item Aligner-item--bottom">\n    </div>\n  </div>\n</div>\n<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n  <!--Logo-->\n    <ion-row class="logo-row">\n      <ion-col></ion-col>\n\n        <ion-col [style.align-items]= "center"  >\n          <img  class="logo" src="assets/imgs/logo.png" />\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n\n  <ion-row>\n    <ion-col col-12 col-md-6 col-xl-3  >\n      <ion-item>\n        <ion-label color="secondary" floating  style="color: black;" >Usuario</ion-label>\n        <ion-input type="text" required name="email" [(ngModel)]="dataLogin.user"></ion-input>\n      </ion-item>\n    </ion-col>\n   <ion-col>\n      <ion-item col-12 col-md-6 col-xl-3  >\n        <ion-label color="secondary" floating  style="color: black;"  >Contraseña</ion-label>\n        <ion-input type="password" required name="password" [(ngModel)]="dataLogin.pass"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n\n        <ion-col class="botones-redondos" col-6 col-md-3 col-xl-3 >\n      <button ion-button  color="boton" id="boton" (click)="singIn()" round>Iniciar Sesión</button>\n    </ion-col>\n  <ion-col class="botones-redondos" col-6 col-md-3 col-xl-3>\n      <button ion-button  color="light" id="boton"  (click)="registerUser()" round >Registrarse</button>\n    </ion-col>\n\n    <ion-col class="botones-redondos" col-12 col-md-1 col-xl-1 >\n     \n      <p>Acceso rapido:</p>\n    </ion-col>\n    <ion-col class="botones-redondos" col-12 col-md-5 col-xl-5 >\n      <button type="button"  style="background-color: rgb(47, 206, 255);"  class="btn-circle btn-lg"  title="Socio" (click)="CargarDefault(\'S\')"  >\n        <ion-thumbnail>\n          <img src="assets/imgs/inicio/socio.png">\n        </ion-thumbnail>\n      </button>\n      <button type="button"  style="background-color: rgb(49, 187, 68);"   class="btn-circle btn-lg" title="Bartender" (click)="CargarDefault(\'B\')" >\n        <ion-thumbnail>\n        <img src="assets/imgs/inicio/coctel.png">\n      </ion-thumbnail>\n      </button>\n      <button type="button" style="background-color: rgb(248, 244, 15);"  class="btn-circle btn-lg"  title="Cervecero" (click)="CargarDefault(\'CE\')" >\n       <ion-thumbnail>\n        <img src="assets/imgs/inicio/cerveza.png">\n      </ion-thumbnail>\n      </button>\n      <button type="button"  style="background-color: rgb(250, 12, 12);"   class="btn-circle btn-lg"  title="Cocinero" (click)="CargarDefault(\'CO\')" >\n        <ion-thumbnail>\n        <img src="assets/imgs/inicio/cubiertos.png">\n      </ion-thumbnail>\n      </button>\n      <button type="button" style="background-color: rgb(15, 58, 248);"  class="btn-circle btn-lg"  title="Mozo" (click)="CargarDefault(\'M\')" >\n      <ion-thumbnail>\n        <img src="assets/imgs/inicio/mozo.png">\n      </ion-thumbnail>\n      </button>\n\n      <button type="button" style="background-color: rgb(248, 139, 15);"  class="btn-circle btn-lg"  title="Cliente" (click)="CargarDefault(\'CL\')" >\n        <ion-thumbnail>\n          <img src="assets/imgs/inicio/cliente.png">\n        </ion-thumbnail>\n        </button>\n    \n    </ion-col>\n   \n   \n\n  </ion-row>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/iniciarsesion/iniciarsesion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */]])
    ], IniciarsesionPage);
    return IniciarsesionPage;
}());

//# sourceMappingURL=iniciarsesion.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_base_http_base__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http_ngx__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationServiceProvider = /** @class */ (function () {
    function AuthenticationServiceProvider(MiAuth, afDB, miHttp, http) {
        this.MiAuth = MiAuth;
        this.afDB = afDB;
        this.miHttp = miHttp;
        this.http = http;
    }
    AuthenticationServiceProvider.prototype.registerUser = function (email, pass) {
        return this.MiAuth.auth.createUserWithEmailAndPassword(email, pass);
    };
    AuthenticationServiceProvider.prototype.singIn = function (email, pass) {
        return this.MiAuth.auth.signInWithEmailAndPassword(email, pass);
    };
    AuthenticationServiceProvider.prototype.logOut = function () {
        this.MiAuth.auth.signOut();
        this.logoutFromDatabase();
    };
    AuthenticationServiceProvider.prototype.logoutFromDatabase = function () {
        this.afDB.database.goOffline();
    };
    AuthenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__http_base_http_base__["a" /* HttpBaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_http_ngx__["a" /* HTTP */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SpinnerHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpinnerHandlerProvider = /** @class */ (function () {
    function SpinnerHandlerProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    SpinnerHandlerProvider.prototype.getAllPageSpinner = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'small-spinner'
        });
        return loader;
    };
    SpinnerHandlerProvider.prototype.getBigSpinner = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'big-spinner'
        });
        return loader;
    };
    SpinnerHandlerProvider.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\">\n             <img src=\"assets/imgs/logoComanda.gif\" />\n          </div>\n        </div>",
            duration: 5000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        //loading.present();
        return loading;
    };
    SpinnerHandlerProvider.prototype.presentLoadingCustom1 = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\">\n             <img src=\"assets/imgs/logoComanda1.gif\" />\n          </div>\n        </div>",
            duration: 5000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        //loading.present();
        return loading;
    };
    SpinnerHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], SpinnerHandlerProvider);
    return SpinnerHandlerProvider;
}());

//# sourceMappingURL=spinner-handler.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iniciarsesion_iniciarsesion__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_handler_spinner_handler__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_User__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, MiAuth, 
        ////private error : ErrorsHandlerProvider,
        autenticationService, alertCtrl, spinnerHandler, navParams) {
        this.navCtrl = navCtrl;
        this.MiAuth = MiAuth;
        this.autenticationService = autenticationService;
        this.alertCtrl = alertCtrl;
        this.spinnerHandler = spinnerHandler;
        this.navParams = navParams;
        this.usuarioOnline = "usuario@usuario.com";
        this.listadoIconos = new Array;
        this.listados = [
            {
                nombre: "clientes",
                imagen: "assets/imgs/home/altacliente.png",
                accion: "AltaClientePage"
            },
            {
                nombre: "reservas",
                imagen: "assets/imgs/home/reserva.png",
                accion: "ReservasPage"
            },
            {
                nombre: "ahorcado",
                imagen: "assets/imgs/home/juegoPostre.png",
                accion: "JuegoPostrePage"
            },
            {
                nombre: "pedidos",
                imagen: "assets/imgs/home/pedidos.png",
                accion: "PedidosPage"
            },
            {
                nombre: "menu",
                imagen: "assets/imgs/home/menu.png",
                accion: "ClienteMenuPage"
            },
            {
                nombre: "juegos",
                imagen: "assets/imgs/home/juegos.png",
                accion: "JuegosHomePage"
            },
        ];
        this.usuario = new __WEBPACK_IMPORTED_MODULE_6__Model_User__["a" /* User */]("", "", "");
        this.usuario = this.navParams.get('usuario');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.filtrar();
        //this.usuarioOnline = this.MiAuth.auth.currentUser.email;
        this.esconderLogo();
        console.log(this.usuario);
    };
    HomePage.prototype.ngOnInit = function () {
        console.log("on init");
    };
    HomePage.prototype.esconderLogo = function () {
        if (this.listadoIconos.length > 4) {
            this.logo = true;
        }
        else {
            this.logo = false;
        }
    };
    HomePage.prototype.iconosClick = function (icono) {
        this.navCtrl.push(icono.accion, { usuario: this.usuario });
    };
    HomePage.prototype.cerrarSesionClick = function () {
        this.autenticationService.logOut();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */]);
    };
    HomePage.prototype.filtrar = function () {
        if (this.usuario.tipo == "cliente") {
            this.listadoIconos = this.listados
                .filter(function (listado) { return listado.nombre == "clientes" || listado.nombre == "menu" || listado.nombre == "juegos" || listado.nombre == "reservas"; });
        }
        else if (this.usuario.tipo == "cocinero" || this.usuario.tipo == "cervecero" || this.usuario.tipo == "bartender") {
            this.listadoIconos = this.listados
                .filter(function (listado) { return listado.nombre == "pedidos"; });
        }
        else if (this.usuario.tipo == "socio") {
            this.listadoIconos = this.listados;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="orange">\n    <ion-title>{{this.usuario.usuario}}</ion-title>\n\n  <ion-buttons end> \n      <button ion-button color="white" id="boton" (click)="cerrarSesionClick()" >   <ion-icon name="log-out"  ></ion-icon></button>  \n  </ion-buttons>   \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n   <ion-grid >\n      \n     <ion-row  [hidden]= "logo">\n \n         <ion-col col-12 col-md-2  col-sm-2  offset-md-5 offset-sm-5 >\n             <img  class="logo"  src="assets/imgs/logo.png" /> \n           </ion-col>\n \n         </ion-row >\n           <ion-row >\n       <ion-col class="botones" col-6 col-md-3 col-sm-3   [style.align-items]= "center"  *ngFor="let icono of listadoIconos"  >      \n        <img   [src]="icono.imagen" (click)="iconosClick(icono)" >\n       </ion-col>\n     </ion-row>\n    \n     \n   </ion-grid>\n \n  \n \n \n </ion-content>\n \n\n'/*ion-inline-end:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ErrorsHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ErrorsHandlerProvider = /** @class */ (function () {
    function ErrorsHandlerProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    ErrorsHandlerProvider_1 = ErrorsHandlerProvider;
    ErrorsHandlerProvider.prototype.mostrarError = function (error, title, message) {
        console.log("ocurrio un error", error);
        var errorMessage = this.getErrorMessage(error);
        var alert = this.alertCtrl.create({
            title: title ? title : "Error!",
            cssClass: 'error-alert',
            message: message ? message + errorMessage : errorMessage
        });
        alert.present();
    };
    ErrorsHandlerProvider.prototype.mostrarErrorLiteral = function (error, title) {
        var alert = this.alertCtrl.create({
            title: title ? title : "Error!",
            message: error,
            cssClass: 'error-alert'
        });
        alert.present();
    };
    ErrorsHandlerProvider.prototype.mostrarMensajeConfimación = function (mensaje, title) {
        var alert = this.alertCtrl.create({
            title: title ? title : "Error!",
            subTitle: mensaje,
            buttons: ['Aceptar'],
            cssClass: 'present-alert'
        });
        alert.present();
    };
    ErrorsHandlerProvider.prototype.getErrorMessage = function (error) {
        var mensaje = "Error desconocido";
        for (var i = 0; i < ErrorsHandlerProvider_1.knownErrors.length; i++) {
            if (error.code == ErrorsHandlerProvider_1.knownErrors[i].code) {
                mensaje = ErrorsHandlerProvider_1.knownErrors[i].message;
                break;
            }
        }
        return mensaje;
    };
    ErrorsHandlerProvider.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Tutorial',
            subTitle: 'Presione los botones para escuchar el sonido',
            buttons: ['Aceptar'],
            cssClass: 'present-alert'
        });
        alert.present();
    };
    ErrorsHandlerProvider.knownErrors = [
        {
            code: 'auth/email-already-in-use',
            message: "El correo ya existe"
        },
        {
            code: 'auth/user-not-found',
            message: "El correo no se encuentra registrado"
        },
        {
            code: 'auth/wrong-password',
            message: "Contraseña Incorrecta"
        },
        {
            code: "auth/network-request-failed",
            message: "No hay conexión a internet"
        },
        {
            code: "auth/invalid-email",
            message: "Correo inválido"
        },
        {
            code: "auth/weak-password",
            message: "La contraseña debe tener mínimo 6 caracteres"
        }
    ];
    ErrorsHandlerProvider = ErrorsHandlerProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], ErrorsHandlerProvider);
    return ErrorsHandlerProvider;
    var ErrorsHandlerProvider_1;
}());

//# sourceMappingURL=errors-handler.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map
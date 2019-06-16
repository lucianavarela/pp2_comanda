webpackJsonp([1],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iniciarsesion_iniciarsesion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_errors_handler_errors_handler__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_handler_spinner_handler__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, error, autenticationService, alertCtrl, spinnerHandler, authService) {
        this.navCtrl = navCtrl;
        this.error = error;
        this.autenticationService = autenticationService;
        this.alertCtrl = alertCtrl;
        this.spinnerHandler = spinnerHandler;
        this.authService = authService;
        this.usuarioOnline = "usuario@usuario.com";
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.usuarioOnline = this.authService.getUserInfo().usuario;
    };
    HomePage.prototype.ngOnInit = function () {
        console.log("on init");
    };
    HomePage.prototype.fotosLindasClick = function () {
        var spiner = this.spinnerHandler.presentLoadingCustom();
        spiner.present();
    };
    HomePage.prototype.fotosFeasClick = function () {
        var spiner = this.spinnerHandler.presentLoadingCustom1();
        spiner.present();
    };
    HomePage.prototype.cerrarSesionClick = function () {
        this.autenticationService.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Temporal\pp2_comanda\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="fondo">\n\n    <ion-title>{{this.usuarioOnline}}</ion-title>\n\n\n\n  <ion-buttons end> \n\n      <button ion-button color="white" id="boton" (click)="cerrarSesionClick()" >   <ion-icon name="log-out"  ></ion-icon></button>  \n\n  </ion-buttons>   \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid>\n\n        <ion-row wrap >\n\n           \n\n        <ion-col col-12 col-md-6 col-sm-6  >        \n\n      <img class="imgA" src="../assets/imgs/fotolinda.png" (click)="fotosLindasClick()"  >    \n\n      </ion-col>   \n\n      <ion-col col-12 col-md-6 col-sm-6   >    \n\n       <img class="imgB" src="../assets/imgs/fotofea.png" (click)="fotosFeasClick()"  >   \n\n    </ion-col  > \n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Temporal\pp2_comanda\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpBase = /** @class */ (function () {
    function HttpBase(http) {
        this.http = http;
        this.urlBase = 'https://restaurante-cerizza.herokuapp.com/';
    }
    HttpBase.prototype.httpGetP = function (url) {
        return this.http
            .get(this.urlBase + url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HttpBase.prototype.httpDeleteP = function (url) {
        return this.http
            .delete(this.urlBase + url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HttpBase.prototype.httpPostP = function (url, request) {
        return this.http.post(this.urlBase + url, request).toPromise();
    };
    // tslint:disable-next-line:no-shadowed-variable
    HttpBase.prototype.httpGetO = function (url) {
        return this.http.get(this.urlBase + url);
    };
    HttpBase.prototype.extractData = function (res) {
        return res.json() || {};
    };
    HttpBase.prototype.handleError = function (error) {
        return error;
    };
    HttpBase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HttpBase);
    return HttpBase;
}());

//# sourceMappingURL=http-base.service.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/iniciarsesion/iniciarsesion.module": [
		565,
		0
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
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_spinner_handler_spinner_handler__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_errors_handler_errors_handler__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__iniciarsesion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_service_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_empleado_service__ = __webpack_require__(369);
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
    function RegistrarsePage(navCtrl, authService, errorHandler, spinnerHandler, alertCtrl, empleadoService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.spinnerHandler = spinnerHandler;
        this.alertCtrl = alertCtrl;
        this.empleadoService = empleadoService;
        this.user = { name: '', pass: '', secondPass: '' };
    }
    RegistrarsePage.prototype.registerUser = function () {
        var _this = this;
        if (this.validForm()) {
            this.empleadoService.Registrar(this.user.name, this.user.pass, '', '')
                .then(function (response) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: response });
            })
                .catch(function (error) {
                _this.errorHandler.mostrarMensajeConfimación("Se produjo un error al registrarse", 'Error');
            });
        }
    };
    RegistrarsePage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__iniciarsesion__["a" /* IniciarsesionPage */], { 'fromApp': true });
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
<<<<<<< HEAD
            selector: 'page-iniciarsesion',template:/*ion-inline-start:"/Users/lucianavarela/Documents/UTN/pp2_comanda/src/pages/iniciarsesion/registrarse.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label floating style="color: rgba(26, 25, 25, 0.987);">Correo Electrónico</ion-label>\n        <ion-input type="email" required name="email" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label floating style="color: rgba(26, 25, 25, 0.987);">Contraseña</ion-label>\n        <ion-input type="password" required name="password" [(ngModel)]="user.pass"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label floating style="color: black;">Repetir contraseña</ion-label>\n        <ion-input type="password" required name="password" [(ngModel)]="user.secondPass"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="botones-redondos">\n      <button ion-button color="boton" id="boton" (click)="registerUser()" round>Registrarse</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="botones-redondos">\n      <button ion-button small color="light" id="boton" (click)="cancel()" round>Cancel</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/lucianavarela/Documents/UTN/pp2_comanda/src/pages/iniciarsesion/registrarse.html"*/,
=======
            selector: 'page-iniciarsesion',template:/*ion-inline-start:"F:\Temporal\pp2_comanda\src\pages\iniciarsesion\registrarse.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label floating style="color: rgba(26, 25, 25, 0.987);" >Correo Electrónico</ion-label>\n\n        <ion-input type="email" required name="email" [(ngModel)]="user.name"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Contraseña</ion-label>\n\n        <ion-input type="password" required name="password" [(ngModel)]="user.pass"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label floating  style="color: black;" >Repetir contraseña</ion-label>\n\n        <ion-input type="password" required name="password" [(ngModel)]="user.secondPass"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col  class="botones-redondos">\n\n      <button ion-button  color="boton"  id="boton" (click)="registerUser()" round>Registrarse</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col  class="botones-redondos">\n\n      <button ion-button  small  color="light"  id="boton" (click)="cancel()" round>Cancel</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"F:\Temporal\pp2_comanda\src\pages\iniciarsesion\registrarse.html"*/,
>>>>>>> dev-mauri
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_authentication_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_empleado_service__["a" /* EmpleadoService */]])
    ], RegistrarsePage);
    return RegistrarsePage;
}());

//# sourceMappingURL=registrarse.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_errors_handler_errors_handler__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_spinner_handler_spinner_handler__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_base_http_base_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_Interceptors_SpinnerInterceptor__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_Interceptors_ErrorInterceptor__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_Interceptors_JWTInterceptor__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database_deprecated__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__globalConfig__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_audio__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_http_ngx__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_authentication_service_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth0_angular_jwt__ = __webpack_require__(359);
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




function getAccessToken() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__["a" /* RegistrarsePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/iniciarsesion/iniciarsesion.module#IniciarsesionPageModule', name: 'IniciarsesionPage', segment: 'iniciarsesion', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database_deprecated__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                [__WEBPACK_IMPORTED_MODULE_24__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                        config: {
                            tokenGetter: (getAccessToken),
                            whitelistedDomains: ['https://mauriciocerizza.github.io', 'localhost:4200', 'localhost:8100']
                        }
                    })]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__["a" /* RegistrarsePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_http_ngx__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_23__providers_authentication_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_http_base_http_base_service__["a" /* HttpBase */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__providers_Interceptors_SpinnerInterceptor__["a" /* SpinnerInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__providers_Interceptors_ErrorInterceptor__["a" /* ErrorInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_15__providers_Interceptors_JWTInterceptor__["a" /* JwtInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_24__auth0_angular_jwt__["a" /* JwtHelperService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(usuario, tipo, id, nombre) {
        this.usuario = usuario;
        this.tipo = tipo;
        this.id = id;
        this.nombre = nombre;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_http_base_service__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmpleadoService = /** @class */ (function () {
    function EmpleadoService(miHttp) {
        this.miHttp = miHttp;
    }
    EmpleadoService.prototype.Listar = function () {
        return this.miHttp.httpGetO('empleados/listar/');
    };
    EmpleadoService.prototype.Registrar = function (usuario, password, nombre, tipo) {
        var request = {
            usuario: usuario,
            clave: password,
            nombre: nombre,
            tipo: tipo
        };
        return this.miHttp.httpPostP('empleados/registrarEmpleado/', request);
    };
    EmpleadoService.prototype.Modificar = function (usuario, id, nombre, tipo) {
        var request = {
            id: id,
            usuario: usuario,
            nombre: nombre,
            tipo: tipo
        };
        return this.miHttp.httpPostP('empleados/modificar/', request);
    };
    EmpleadoService.prototype.Baja = function (id) {
        return this.miHttp.httpDeleteP('empleados/' + id);
    };
    EmpleadoService.prototype.Activar = function (id) {
        return this.miHttp.httpGetP('empleados/activar/' + id);
    };
    EmpleadoService.prototype.Suspender = function (id) {
        return this.miHttp.httpDeleteP('empleados/suspender/' + id);
    };
    EmpleadoService.prototype.CambiarClave = function (newPassword) {
        var request = {
            clave: newPassword
        };
        return this.miHttp.httpPostP('empleados/cambiarClave/', request);
    };
    EmpleadoService.prototype.CantidadOperacionesPorSector = function () {
        return this.miHttp.httpGetO('empleados/cantidadOperacionesPorSector');
    };
    EmpleadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_base_http_base_service__["a" /* HttpBase */]])
    ], EmpleadoService);
    return EmpleadoService;
}());

//# sourceMappingURL=empleado.service.js.map

/***/ }),

/***/ 377:
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

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_iniciarsesion_iniciarsesion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(268);
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
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */];
        this.splash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            setTimeout(function () {
                _this.splash = false;
            }, 4000);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Temporal\pp2_comanda\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n    <div class="flb">\n\n        <div class="Aligner-item Aligner-item--top">\n\n        </div>\n\n        <img src="assets/imgs/logo.png">\n\n        <div class="Aligner-item Aligner-item--bottom">\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"F:\Temporal\pp2_comanda\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_handler_spinner_handler__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpinnerInterceptor = /** @class */ (function () {
    function SpinnerInterceptor(spinnerHandler) {
        this.spinnerHandler = spinnerHandler;
    }
    SpinnerInterceptor.prototype.intercept = function (request, next) {
        var spinner = this.spinnerHandler.presentLoadingCustom();
        spinner.present();
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["tap"])(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                spinner.dismiss();
            }
        }));
    };
    SpinnerInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */]])
    ], SpinnerInterceptor);
    return SpinnerInterceptor;
}());

//# sourceMappingURL=SpinnerInterceptor.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            return err;
        }));
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], ErrorInterceptor);
    return ErrorInterceptor;
    var _a;
}());

//# sourceMappingURL=ErrorInterceptor.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());

//# sourceMappingURL=JWTInterceptor.js.map

/***/ }),

/***/ 562:
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrarse__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_login__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_errors_handler_errors_handler__ = __webpack_require__(78);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_http_base_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_User__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__(359);
>>>>>>> dev-mauri
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(miHttp, jwt) {
        this.miHttp = miHttp;
        this.jwt = jwt;
    }
    AuthService.prototype.Loguear = function (dataLogin) {
        var request = JSON.parse(JSON.stringify(dataLogin));
        return this.miHttp.httpPostP('/empleados/login', request);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.getUserInfo = function () {
        var token = localStorage.getItem('token');
        var tokenInfo = this.jwt.decodeToken(token);
        return new __WEBPACK_IMPORTED_MODULE_2__Model_User__["a" /* User */](tokenInfo['usuario'], tokenInfo['tipo'], tokenInfo['id'], tokenInfo['nombre']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_base_http_base_service__["a" /* HttpBase */], __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciarsesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrarse__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Login__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_errors_handler_errors_handler__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authentication_service_auth_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IniciarsesionPage = /** @class */ (function () {
    function IniciarsesionPage(platform, nativeAudio, navCtrl, navParams, authService, errorHandler, alertCtrl) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.alertCtrl = alertCtrl;
        this.splash = true;
        this.loading = false;
        this.userSelect = "";
        this.selectUserOptions = { title: '' };
        this.selectUserOptions.title = "Usuarios disponibles";
        this.nativeAudio.preloadComplex('inicio', 'assets/sonidos/inicio.mp3', 1, 1, 0);
<<<<<<< HEAD
        this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__models_login__["a" /* Login */]('', '');
=======
        this.dataLogin = new __WEBPACK_IMPORTED_MODULE_5__Model_Login__["a" /* Login */]('', '');
>>>>>>> dev-mauri
    }
    IniciarsesionPage.prototype.ionViewDidLoad = function () {
    };
    IniciarsesionPage.prototype.singIn = function () {
        var _this = this;
        if (this.validForm()) {
<<<<<<< HEAD
            var spiner = this.spinnerHandler.presentLoadingCustom();
            spiner.present();
            this.autenticationService.singIn(this.dataLogin.user, this.dataLogin.pass)
                .then(function (response) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: response });
=======
            this.authService.Loguear(this.dataLogin)
                .then(function (response) {
                if (response['Estado'] === 'OK') {
                    localStorage.setItem('token', response['Token']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.errorHandler.mostrarMensajeConfimación(response['Mensaje'], 'Error');
                }
>>>>>>> dev-mauri
            })
                .catch(function (err) {
                _this.errorHandler.mostrarMensajeConfimación(err['Mensaje'], 'Error');
            });
        }
    };
    IniciarsesionPage.prototype.registerUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__registrarse__["a" /* RegistrarsePage */]);
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
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Debe llenar todos los campos",
                buttons: ['Aceptar'],
                cssClass: 'present-alert'
            });
            alert.present();
            return false;
        }
    };
    IniciarsesionPage.prototype.CargarDefault = function (tipo) {
        switch (tipo) {
            case 'S':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_5__Model_Login__["a" /* Login */]('admin', 'admin');
                break;
            case 'B':
<<<<<<< HEAD
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__models_login__["a" /* Login */]('Matias', '1234');
                break;
            case 'CE':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__models_login__["a" /* Login */]('cervecero', 'cervecero');
                break;
            case 'CO':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__models_login__["a" /* Login */]('cocinero', 'cocinero');
                break;
            case 'M':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__models_login__["a" /* Login */]('mozo', 'mozo');
=======
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_5__Model_Login__["a" /* Login */]('Matias', '1234');
                break;
            case 'CE':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_5__Model_Login__["a" /* Login */]('cervecero', 'cervecero');
                break;
            case 'CO':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_5__Model_Login__["a" /* Login */]('cocinero', 'cocinero');
                break;
            case 'M':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_5__Model_Login__["a" /* Login */]('mozo', 'mozo');
>>>>>>> dev-mauri
                break;
        }
    };
    IniciarsesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-iniciarsesion',template:/*ion-inline-start:"/Users/lucianavarela/Documents/UTN/pp2_comanda/src/pages/iniciarsesion/iniciarsesion.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top">\n    </div>\n    <img src="assets/imgs/logo.png">\n    <div class="Aligner-item Aligner-item--bottom">\n    </div>\n  </div>\n</div>\n<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n  <!--Logo-->\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n\n    <ion-col [style.align-items]="center">\n      <img class="logo" src="assets/imgs/logo.png" />\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 col-md-6 col-xl-3>\n      <ion-item>\n        <ion-label color="secondary" floating style="color: black;">Correo Electrónico</ion-label>\n        <ion-input type="text" required name="email" [(ngModel)]="dataLogin.user"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item col-12 col-md-6 col-xl-3>\n        <ion-label color="secondary" floating style="color: black;">Contraseña</ion-label>\n        <ion-input type="password" required name="password" [(ngModel)]="dataLogin.pass"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col class="botones-redondos" col-6 col-md-3 col-xl-3>\n      <button ion-button color="boton" id="boton" (click)="singIn()" round>Iniciar Sesión</button>\n    </ion-col>\n    <ion-col class="botones-redondos" col-6 col-md-3 col-xl-3>\n      <button ion-button color="light" id="boton" (click)="registerUser()" round>Registrarse</button>\n    </ion-col>\n\n    <ion-col class="botones-redondos" col-12 col-md-1 col-xl-1>\n\n      <p>Acceso rapido:</p>\n    </ion-col>\n    <ion-col class="botones-redondos" col-12 col-md-5 col-xl-5>\n      <button type="button" style="background-color: #ffb4aa;" class="btn-circle btn-lg" title="Socio"\n        (click)="CargarDefault(\'S\')">\n        <ion-thumbnail>\n          <img src="assets/imgs/socio.png">\n        </ion-thumbnail>\n      </button>\n      <button type="button" style="background-color: #fff4a7;" class="btn-circle btn-lg" title="Bartender"\n        (click)="CargarDefault(\'B\')">\n        <ion-thumbnail>\n          <img src="assets/imgs/coctel.png">\n        </ion-thumbnail>\n      </button>\n      <button type="button" style="background-color: #efbdff;" class="btn-circle btn-lg" title="Cervecero"\n        (click)="CargarDefault(\'CE\')">\n        <ion-thumbnail>\n          <img src="assets/imgs/cerveza.png">\n        </ion-thumbnail>\n      </button>\n      <button type="button" style="background-color: #fdd3b6;" class="btn-circle btn-lg" title="Cocinero"\n        (click)="CargarDefault(\'CO\')">\n        <ion-thumbnail>\n          <img src="assets/imgs/cubiertos.png">\n        </ion-thumbnail>\n      </button>\n      <button type="button" style="background-color: #bbf7b4;" class="btn-circle btn-lg" title="Mozo"\n        (click)="CargarDefault(\'M\')">\n        <ion-thumbnail>\n          <img src="assets/imgs/mozo.png">\n        </ion-thumbnail>\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/lucianavarela/Documents/UTN/pp2_comanda/src/pages/iniciarsesion/iniciarsesion.html"*/,
=======
            selector: 'page-iniciarsesion',template:/*ion-inline-start:"F:\Temporal\pp2_comanda\src\pages\iniciarsesion\iniciarsesion.html"*/'<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">\n\n\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!--Logo-->\n\n    <ion-row class="logo-row">\n\n      <ion-col></ion-col>\n\n\n\n        <ion-col style ="align-items: center"  >\n\n          <img  class="logo" src="assets/imgs/logo.png" />\n\n        </ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-md-6 col-xl-3  >\n\n      <ion-item>\n\n        <ion-label color="secondary" floating  style="color: black;" >Correo Electrónico</ion-label>\n\n        <ion-input type="text" required name="email" [(ngModel)]="dataLogin.user"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n   <ion-col>\n\n      <ion-item col-12 col-md-6 col-xl-3  >\n\n        <ion-label color="secondary" floating  style="color: black;"  >Contraseña</ion-label>\n\n        <ion-input type="password" required name="password" [(ngModel)]="dataLogin.pass"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n  \n\n  <ion-row>\n\n\n\n        <ion-col class="botones-redondos" col-6 col-md-3 col-xl-3 >\n\n      <button ion-button  color="boton" id="boton" (click)="singIn()" round>Iniciar Sesión</button>\n\n    </ion-col>\n\n  <ion-col class="botones-redondos" col-6 col-md-3 col-xl-3>\n\n      <button ion-button  color="light" id="boton"  (click)="registerUser()" round >Registrarse</button>\n\n    </ion-col>\n\n\n\n    <ion-col class="botones-redondos" col-12 col-md-1 col-xl-1 >\n\n     \n\n      <p>Acceso rapido:</p>\n\n    </ion-col>\n\n    <ion-col class="botones-redondos" col-12 col-md-5 col-xl-5 >\n\n      <button type="button"  style="background-color: rgb(47, 206, 255);"  class="btn-circle btn-lg"  title="Socio" (click)="CargarDefault(\'S\')"  >\n\n        <ion-thumbnail>\n\n          <img src="assets/imgs/socio.png">\n\n        </ion-thumbnail>\n\n      </button>\n\n      <button type="button"  style="background-color: rgb(49, 187, 68);"   class="btn-circle btn-lg" title="Bartender" (click)="CargarDefault(\'B\')" >\n\n        <ion-thumbnail>\n\n        <img src="assets/imgs/coctel.png">\n\n      </ion-thumbnail>\n\n      </button>\n\n      <button type="button" style="background-color: rgb(248, 244, 15);"  class="btn-circle btn-lg"  title="Cervecero" (click)="CargarDefault(\'CE\')" >\n\n       <ion-thumbnail>\n\n        <img src="assets/imgs/cerveza.png">\n\n      </ion-thumbnail>\n\n      </button>\n\n      <button type="button"  style="background-color: rgb(250, 12, 12);"   class="btn-circle btn-lg"  title="Cocinero" (click)="CargarDefault(\'CO\')" >\n\n        <ion-thumbnail>\n\n        <img src="assets/imgs/cubiertos.png">\n\n      </ion-thumbnail>\n\n      </button>\n\n      <button type="button" style="background-color: rgb(15, 58, 248);"  class="btn-circle btn-lg"  title="Mozo" (click)="CargarDefault(\'M\')" >\n\n      <ion-thumbnail>\n\n        <img src="assets/imgs/mozo.png">\n\n      </ion-thumbnail>\n\n      </button>\n\n    \n\n    </ion-col>\n\n   \n\n   \n\n\n\n  </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Temporal\pp2_comanda\src\pages\iniciarsesion\iniciarsesion.html"*/,
>>>>>>> dev-mauri
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_authentication_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_authentication_service_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], IniciarsesionPage);
    return IniciarsesionPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=iniciarsesion.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(41);
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

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(41);
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

/***/ })

},[327]);
//# sourceMappingURL=main.js.map
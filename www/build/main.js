webpackJsonp([8],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_User__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iniciarsesion_iniciarsesion__ = __webpack_require__(48);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.url = "http://kq000525.ferozo.com/API_Comanda/Fotos/Menu/sin_img.jpg";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__Model_User__["a" /* User */]();
        this.usuario = this.navParams.get('usuario');
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.cerrarSesionClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */]);
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/popover/popover.html"*/'<ion-content>\n<ion-list>\n    \n    <ion-item>\n        <ion-avatar item-end>\n          <img [src]="url"/>\n        </ion-avatar>\n        <h2>{{this.usuario.nombre}}</h2>\n        <p>{{this.usuario.tipo}}</p>\n    </ion-item> \n    <button ion-item   (click)="close()">Estilo\n        <ion-icon item-end name="color-palette"></ion-icon>\n    </button>\n    <button ion-item >Tomar Foto \n        <ion-icon item-end name="camera"></ion-icon>\n    </button>\n    <button ion-item  (click)="cerrarSesionClick()">Salir\n        <ion-icon item-end name="log-out"></ion-icon>\n    </button>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alta-supervisor/alta-supervisor.module": [
		450,
		0
	],
	"../pages/clientes/alta-cliente/alta-cliente.module": [
		451,
		1
	],
	"../pages/clientes/cliente-menu/cliente-menu.module": [
		452,
		5
	],
	"../pages/clientes/juego-postre/juego-postre.module": [
		453,
		4
	],
	"../pages/clientes/juegos-home/juegos-home.module": [
		454,
		3
	],
	"../pages/iniciarsesion/iniciarsesion.module": [
		455,
		7
	],
	"../pages/popover/popover.module": [
		456,
		6
	],
	"../pages/reservas/reservas.module": [
		457,
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
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_errors_handler_errors_handler__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__iniciarsesion__ = __webpack_require__(48);
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

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_http_base__ = __webpack_require__(47);
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
  Generated class for the EmpleadoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmpleadoServiceProvider = /** @class */ (function () {
    function EmpleadoServiceProvider(miHhttp) {
        this.miHhttp = miHhttp;
        console.log('Hello EmpleadoServiceProvider Provider');
    }
    EmpleadoServiceProvider.prototype.loguear = function (dataLogin) {
        // return this.miHhttp.httpPost("login",dataLogin);
        return this.miHhttp.httpPost("empleados/login", dataLogin);
    };
    EmpleadoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_base_http_base__["a" /* HttpBaseProvider */]])
    ], EmpleadoServiceProvider);
    return EmpleadoServiceProvider;
}());

//# sourceMappingURL=empleado-service.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_http_base__ = __webpack_require__(47);
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
  Generated class for the ClienteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClienteServiceProvider = /** @class */ (function () {
    function ClienteServiceProvider(miHttp) {
        this.miHttp = miHttp;
        console.log('Hello ClienteServiceProvider Provider');
    }
    ClienteServiceProvider.prototype.alta = function (dataCliente) {
        return this.miHttp.httpPosts("clientes/registrarCliente", dataCliente);
    };
    ClienteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_base_http_base__["a" /* HttpBaseProvider */]])
    ], ClienteServiceProvider);
    return ClienteServiceProvider;
}());

//# sourceMappingURL=cliente-service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_http_base__ = __webpack_require__(47);
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
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MenuServiceProvider = /** @class */ (function () {
    function MenuServiceProvider(menuHhttp) {
        this.menuHhttp = menuHhttp;
        console.log('Hello MenuServiceProvider Provider');
    }
    MenuServiceProvider.prototype.listar = function () {
        return this.menuHhttp.httpGetP('menu/listar');
    };
    MenuServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_base_http_base__["a" /* HttpBaseProvider */]])
    ], MenuServiceProvider);
    return MenuServiceProvider;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_base_http_base__ = __webpack_require__(47);
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
  Generated class for the MesaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MesaServiceProvider = /** @class */ (function () {
    function MesaServiceProvider(menuHhttp) {
        this.menuHhttp = menuHhttp;
        console.log('Hello MesaServiceProvider Provider');
    }
    MesaServiceProvider.prototype.listar = function () {
        return this.menuHhttp.httpGetP('mesas/listar');
    };
    MesaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_base_http_base__["a" /* HttpBaseProvider */]])
    ], MesaServiceProvider);
    return MesaServiceProvider;
}());

//# sourceMappingURL=mesa-service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_popover_popover__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_errors_handler_errors_handler__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_spinner_handler_spinner_handler__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_base_http_base__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database_deprecated__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__globalConfig__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_audio__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_http_ngx__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_menu_service_menu_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_empleado_service_empleado_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_mesa_service_mesa_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_cliente_service_cliente_service__ = __webpack_require__(288);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_popover_popover__["a" /* PopoverPage */]
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
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservas/reservas.module#ReservasPageModule', name: 'ReservasPage', segment: 'reservas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__globalConfig__["a" /* configs */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_iniciarsesion_iniciarsesion__["a" /* IniciarsesionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_iniciarsesion_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_popover_popover__["a" /* PopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__providers_http_base_http_base__["a" /* HttpBaseProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_http_ngx__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_22__providers_menu_service_menu_service__["a" /* MenuServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_empleado_service_empleado_service__["a" /* EmpleadoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_mesa_service_mesa_service__["a" /* MesaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_cliente_service_cliente_service__["a" /* ClienteServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 430:
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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_iniciarsesion_iniciarsesion__ = __webpack_require__(48);
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

/***/ 449:
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(241);
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


//import { HTTP } from '@ionic-native/http/ngx';
/*
  Generated class for the HttpBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpBaseProvider = /** @class */ (function () {
    function HttpBaseProvider(//public http: HTTP
        https) {
        this.https = https;
        //urlBase: String = 'https://restaurante-cerizza.herokuapp.com/';
        //urlBase: String = 'http://kq000525.ferozo.com/comanda/';
        this.urlBase = 'http://kq000525.ferozo.com/API_Comanda/';
        console.log('Hello HttpBaseProvider Provider');
    }
    HttpBaseProvider.prototype.httpGetP = function (url) {
        return this.https.get(this.urlBase + url);
    };
    HttpBaseProvider.prototype.httpPost = function (url, data) {
        return this.https.post(this.urlBase + url, data);
    };
    HttpBaseProvider.prototype.httpPosts = function (url, data) {
        return this.https.post(this.urlBase + url, data);
    };
    HttpBaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpBaseProvider);
    return HttpBaseProvider;
}());

//# sourceMappingURL=http-base.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciarsesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrarse__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Model_Login__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_errors_handler_errors_handler__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Model_User__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_empleado_service_empleado_service__ = __webpack_require__(245);
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
    function IniciarsesionPage(platform, nativeAudio, navCtrl, navParams, autenticationService, errorHandler, alertCtrl, spinnerHandler, loginService) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autenticationService = autenticationService;
        this.errorHandler = errorHandler;
        this.alertCtrl = alertCtrl;
        this.spinnerHandler = spinnerHandler;
        this.loginService = loginService;
        this.splash = true;
        this.loading = false;
        this.userSelect = "";
        this.selectUserOptions = { title: '' };
        this.selectUserOptions.title = "Usuarios disponibles";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_9__Model_User__["a" /* User */]();
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
            this.loginService.loguear(this.dataLogin)
                .subscribe(function (response) {
                console.log(response);
                if (response['Estado'] === 'OK') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { usuario: response });
                }
                else {
                    _this.errorHandler.mostrarMensajeConfimación(response['Mensaje'], 'Error');
                }
                // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
            }),
                function (error) {
                    _this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar", 'Error');
                };
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
                this.dataLogin.user = 'admin';
                this.dataLogin.pass = 'admin';
                this.singIn();
                break;
            case 'B':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('Matias', '1234');
                this.singIn();
                break;
            case 'CE':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('cervecero', 'cervecero');
                this.singIn();
                break;
            case 'CO':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('cocinero', 'cocinero');
                this.singIn();
                break;
            case 'M':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('mozo', 'mozo');
                this.singIn();
                break;
            case 'CL':
                this.dataLogin = new __WEBPACK_IMPORTED_MODULE_7__Model_Login__["a" /* Login */]('carlos', '1234');
                this.singIn();
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
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_empleado_service_empleado_service__["a" /* EmpleadoServiceProvider */]])
    ], IniciarsesionPage);
    return IniciarsesionPage;
}());

//# sourceMappingURL=iniciarsesion.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_base_http_base__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http_ngx__ = __webpack_require__(242);
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iniciarsesion_iniciarsesion__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_spinner_handler_spinner_handler__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_User__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_popover__ = __webpack_require__(147);
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
        autenticationService, alertCtrl, spinnerHandler, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.MiAuth = MiAuth;
        this.autenticationService = autenticationService;
        this.alertCtrl = alertCtrl;
        this.spinnerHandler = spinnerHandler;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
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
        this.usuario = new __WEBPACK_IMPORTED_MODULE_6__Model_User__["a" /* User */]();
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
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_popover__["a" /* PopoverPage */], { usuario: this.usuario });
        popover.present({
            ev: myEvent
        });
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
        if (this.usuario.tipo == "registrado") {
            this.listadoIconos = this.listados
                .filter(function (listado) { return listado.nombre == "clientes" || listado.nombre == "menu" || listado.nombre == "juegos" || listado.nombre == "reservas"; });
        }
        else if (this.usuario.tipo == "Cocinero" || this.usuario.tipo == "Cervecero" || this.usuario.tipo == "Bartender") {
            this.listadoIconos = this.listados
                .filter(function (listado) { return listado.nombre == "pedidos"; });
        }
        else if (this.usuario.tipo == "Socio") {
            this.listadoIconos = this.listados;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/home/home.html"*/'  <ion-header>\n    \n  <ion-navbar color={{this.usuario.estilo}}>\n    <ion-title>La Comanda</ion-title>\n   \n <ion-buttons end> \n   <!--  <button ion-button color="white" id="boton" (click)="cerrarSesionClick()" >   <ion-icon name="log-out"  ></ion-icon></button> \n   -->  <button ion-button icon-only color="white" (click)="presentPopover($event)">\n        <ion-icon name="people"></ion-icon>\n      </button>\n    \n    \n    \n    </ion-buttons>   \n  </ion-navbar>\n </ion-header> \n\n<ion-content>\n \n   <ion-grid >\n      \n     <ion-row  [hidden]= "logo">\n \n         <ion-col col-12 col-md-2  col-sm-2  offset-md-5 offset-sm-5 >\n             <img  class="logo"  src="assets/imgs/logo.png" /> \n           </ion-col>\n \n         </ion-row >\n           <ion-row >\n       <ion-col class="botones" col-6 col-md-2 col-sm-2   [style.align-items]= "center"  *ngFor="let icono of listadoIconos"  >      \n        <img   [src]="icono.imagen" (click)="iconosClick(icono)" >\n       </ion-col>\n     </ion-row>\n    \n     \n   </ion-grid>\n \n  \n \n \n </ion-content>\n \n\n'/*ion-inline-end:"/home/user/Escritorio/pp2_comanda-dev-leo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_spinner_handler_spinner_handler__["a" /* SpinnerHandlerProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
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

},[291]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientePageModule", function() { return AltaClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alta_cliente__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AltaClientePageModule = /** @class */ (function () {
    function AltaClientePageModule() {
    }
    AltaClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alta_cliente__["a" /* AltaClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alta_cliente__["a" /* AltaClientePage */]),
            ],
        })
    ], AltaClientePageModule);
    return AltaClientePageModule;
}());

//# sourceMappingURL=alta-cliente.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_Cliente__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_errors_handler_errors_handler__ = __webpack_require__(123);
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
 * Generated class for the AltaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AltaClientePage = /** @class */ (function () {
    function AltaClientePage(navCtrl, navParams, camera, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.errorHandler = errorHandler;
        this.ocultarR = true;
        this.ocultarA = true;
        this.image = null;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_2__Model_Cliente__["a" /* Cliente */]();
    }
    AltaClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaClientePage');
    };
    AltaClientePage.prototype.registradoClick = function () {
        this.ocultarR = false;
        this.ocultarA = false;
        this.cliente.tipo = "registrado";
    };
    AltaClientePage.prototype.anonimoClick = function () {
        this.ocultarR = true;
        this.ocultarA = false;
        this.cliente.tipo = "anonimo";
    };
    AltaClientePage.prototype.cancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    AltaClientePage.prototype.registrarCliente = function () {
        if (this.validar()) {
        }
    };
    AltaClientePage.prototype.validar = function () {
        if (this.cliente.tipo == "registrado") {
            if (this.cliente.nombre != '' && this.cliente.apellido != '' && this.cliente.dni != null) {
                return true;
            }
            else {
                this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos", 'Error');
                return false;
            }
        }
        else if (this.cliente.tipo == "anonimo") {
            if (this.cliente.nombre != '') {
                return true;
            }
            else {
                this.errorHandler.mostrarMensajeConfimación("Debe completar el campo Nombre", 'Error');
                return false;
            }
        }
    };
    //camara
    AltaClientePage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
        });
    };
    AltaClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alta-cliente',template:/*ion-inline-start:"/home/user/Escritorio/Pss/pp2_comanda/src/pages/alta-cliente/alta-cliente.html"*/'<!--\n  Generated template for the AltaClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="orange">\n    <ion-title>altaCliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-row>\n<ion-col col-6 col-md-6  col-sm-6  >  \n    <button class="botonR" ion-button round outline  (click)="registradoClick()">Registrado</button>\n   \n</ion-col>\n<ion-col  col-6 col-md-6  col-sm-6>  \n    <button   class="botonR" ion-button round outline  (click)="anonimoClick()" >Anonimo</button>\n   \n</ion-col>\n    <ion-col col-12 col-md-6  col-sm-6>\n      <ion-item [hidden]= "ocultarA">\n        <ion-label floating style="color: rgba(26, 25, 25, 0.987);" >Nombre</ion-label>\n        <ion-input type="text" required name="nombre" [(ngModel)]="cliente.nombre" ></ion-input>\n      </ion-item>\n    </ion-col>\n  \n    <ion-col col-12 col-md-6  col-sm-6 [hidden]= "ocultarR">\n      <ion-item>\n        <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Apellido</ion-label>\n        <ion-input type="text" required name="apellido" [(ngModel)]="cliente.apellido"></ion-input>\n      </ion-item>\n    </ion-col>\n \n  \n    <ion-col  col-12 col-md-6  col-sm-6 [hidden]= "ocultarR">\n        <ion-item>\n            <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Dni</ion-label>\n            <ion-input type="numeric" required name="dni" maxlength="8" [(ngModel)]="cliente.dni"></ion-input>\n          </ion-item>\n    </ion-col>\n\n    <ion-col  class="botones-redondos" [hidden]= "ocultarA">\n        <button ion-button  color="boton"  id="boton" (click)="getPicture()" round>[ Tomar Foto ]</button>\n      </ion-col>\n </ion-row>\n  <ion-row>\n    <ion-col  class="botones-redondos" [hidden]= "ocultarA">\n      <button ion-button  color="boton"  id="boton" (click)="registrarCliente()" round>Registrar</button>\n    </ion-col>\n  <ion-col  class="botones-redondos" [hidden]= "ocultarA">\n      <button ion-button  small  color="light"  id="boton" (click)="cancel()" round>Cancel</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/user/Escritorio/Pss/pp2_comanda/src/pages/alta-cliente/alta-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */]) === "function" && _d || Object])
    ], AltaClientePage);
    return AltaClientePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=alta-cliente.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());

//# sourceMappingURL=Cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
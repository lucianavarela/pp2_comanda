webpackJsonp([0],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaSupervisorPageModule", function() { return AltaSupervisorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alta_supervisor__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AltaSupervisorPageModule = /** @class */ (function () {
    function AltaSupervisorPageModule() {
    }
    AltaSupervisorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alta_supervisor__["a" /* AltaSupervisorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alta_supervisor__["a" /* AltaSupervisorPage */]),
            ],
        })
    ], AltaSupervisorPageModule);
    return AltaSupervisorPageModule;
}());

//# sourceMappingURL=alta-supervisor.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltaSupervisorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_Empleado_1__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_errors_handler_errors_handler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(82);
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
 * Generated class for the AltaSupervisorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AltaSupervisorPage = /** @class */ (function () {
    function AltaSupervisorPage(navCtrl, navParams, camera, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.errorHandler = errorHandler;
        this.supervisor = new __WEBPACK_IMPORTED_MODULE_2__Model_Empleado_1__["a" /* Empleado1 */]();
    }
    AltaSupervisorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AltaSupervisorPage');
    };
    AltaSupervisorPage.prototype.registrar = function () {
        if (this.validar()) {
        }
    };
    //camara
    AltaSupervisorPage.prototype.getPicture = function () {
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
    AltaSupervisorPage.prototype.cancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AltaSupervisorPage.prototype.validar = function () {
        if (this.supervisor.nombre != '' && this.supervisor.apellido != '' && this.supervisor.dni != null && this.supervisor.cuil != null) {
            return true;
        }
        else {
            this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos", 'Error');
            return false;
        }
    };
    AltaSupervisorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alta-supervisor',template:/*ion-inline-start:"/home/user/Escritorio/Pss/pp2_comanda/src/pages/alta-supervisor/alta-supervisor.html"*/'<!--\n  Generated template for the AltaSupervisorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="orange">\n    <ion-title>altaSupervisor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-row>\n\n\n    <ion-col col-12 col-md-6  col-sm-6>\n      <ion-item [hidden]= "ocultarA">\n        <ion-label floating style="color: rgba(26, 25, 25, 0.987);" >Nombre</ion-label>\n        <ion-input type="text" required name="nombre" [(ngModel)]="supervisor.nombre" ></ion-input>\n      </ion-item>\n    </ion-col>\n  \n    <ion-col col-12 col-md-6  col-sm-6 [hidden]= "ocultarR">\n      <ion-item>\n        <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Apellido</ion-label>\n        <ion-input type="text" required name="apellido" [(ngModel)]="supervisor.apellido"></ion-input>\n      </ion-item>\n    </ion-col>\n \n  \n    <ion-col  col-12 col-md-6  col-sm-6 >\n        <ion-item>\n            <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Dni</ion-label>\n            <ion-input type="numeric" required name="dni" maxlength="8" [(ngModel)]="supervisor.dni"></ion-input>\n          </ion-item>\n    </ion-col>\n\n    <ion-col  col-12 col-md-6  col-sm-6 >\n        <ion-item>\n            <ion-label floating  style="color: rgba(26, 25, 25, 0.987);">Cuil</ion-label>\n            <ion-input type="numberic" required name="cuil" maxlength="11"  [(ngModel)]="supervisor.cuil"></ion-input>\n          </ion-item>\n    </ion-col>\n\n    <ion-col  class="botones-redondos" >\n        <button ion-button  color="boton"  id="boton" (click)="getPicture()" round>[ Tomar Foto ]</button>\n      </ion-col>\n </ion-row>\n  <ion-row>\n    <ion-col  class="botones-redondos" >\n      <button ion-button  color="boton"  id="boton" (click)="registrar()" round>Registrar</button>\n    </ion-col>\n  <ion-col  class="botones-redondos" >\n      <button ion-button  small  color="light"  id="boton" (click)="cancel()" round>Cancel</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/user/Escritorio/Pss/pp2_comanda/src/pages/alta-supervisor/alta-supervisor.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_errors_handler_errors_handler__["a" /* ErrorsHandlerProvider */]) === "function" && _d || Object])
    ], AltaSupervisorPage);
    return AltaSupervisorPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=alta-supervisor.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Empleado1; });
var Empleado1 = /** @class */ (function () {
    function Empleado1() {
    }
    return Empleado1;
}());

//# sourceMappingURL=Empleado_1.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n\n</div>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_convert_steps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/convert-steps.component */ "./src/app/components/home/convert-steps.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/upload-picture/upload-picture.component */ "./src/app/components/upload-picture/upload-picture.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/how-it-works/how-it-works.component */ "./src/app/components/how-it-works/how-it-works.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', component: _components_home_convert_steps_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    {
        path: 'uploadPictures',
        component: _components_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_7__["UploadPictureComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]]
    },
    { path: 'about-us', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"] },
    { path: 'how-it-works', component: _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__["HowItWorksComponent"] },
    { path: 'Login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_home_convert_steps_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_7__["UploadPictureComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
                _components_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__["HowItWorksComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
                _services_validate_service__WEBPACK_IMPORTED_MODULE_19__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-us-header {\n  font-weight: lighter;\n}\n\np {\n  font-family: Arial;\n  font-weight: normal;\n}\n\nhr[horizontal-line] {\n  margin-top: 50px;\n  width: 0%;\n  display: block;\n  border: 0;\n  border-top: 3px solid gray;\n  padding: 0;\n}\n\nimg {\n  width: auto;\n  height: 200px;\n}\n\n.img-block {\n  width: 20%;\n  min-width: 150px;\n  float: left;\n  padding: 15px;\n}\n\n.img-responsive {\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr grey-line>\n  <div>\n    <h1 class=\"about-us-header\">ABOUT</h1>\n    <p class=\"p\">Our mission is to provide a novel artistic painting tool that allows everyone to create and share artistic pictures with\n      just a few clicks.\n      <br>All you need to do is upload a photo and choose your favorite style. Our servers will then render your artwork for\n      you.\n    </p>\n    <p class=\"p\">We apply the algorithm developed by\n      <a href=\"https://github.com/anishathalye/neural-style\" target=\"_blank\">Anish Athalye</a>. This web application is using Angular2 framework for front-end, Nodejs express framework for back-end\n      and Microsoft Azure for deployment.\n  </div>\n  <hr grey-line>\n  <div>\n    <h2 class=\"about-us-header\">MEET OUR TEAM</h2>\n    <p class=\"p\">This is our team, three passionate programmers who love trying new technologies.</p>\n    <div class=\"row photo-team\">\n      <div class=\"col-md-4\" align=\"center\">\n\n        <a href=\"http://www.carlos-bautista.com\" target=\"_blank\">\n          <img class=\"img-responsive\" src=\"assets/about-us/carlos.JPG\">\n          <br> Carlos Bautista\n        </a>\n      </div>\n      <div class=\"col-md-4\" align=\"center\">\n\n        <a href=\"https://haozhengio.com\" target=\"_blank\">\n          <img class=\"img-responsive\" src=\"assets/about-us/walker.jpg\">\n          <br> Hao Zheng\n        </a>\n      </div>\n      <div class=\"col-md-4\" align=\"center\">\n\n        <a href=\"https://www.linkedin.com/in/shatakshi-shradha-shay-98b894a2/\" target=\"_blank\">\n          <img class=\"img-responsive\" src=\"https://i.groupme.com/1024x1007.jpeg.41b629227ddf4fbfb0f33f494026f369\">\n          <br> Shatakshi Shradha\n        </a>\n      </div>\n    </div>\n  </div>\n  <hr grey-line>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () { };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n  margin-top: 200px;\n  left: 0;\n   bottom: 0;\n  bottom:0;\n  background-color: black;\n  overflow: hidden;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n\nh3{\n  color: white;\n  font: 20px Courier, monospace;\n\n}\n\nh3 a {\ncolor: white;\n}\n\np{\n  color: white;\n  font: 15px Courier, monospace;\n\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\n  <footer class=\"section section-primary\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12\" align=\"center\">\n                    <h3><a routerLink=\"/about-us\">About us</a></h3>\n                    <h3><a routerLink=\"/how-it-works\">How it works</a></h3>\n                  </div>\n              </div>\n          </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  width: 100%;\n  height: 350px;\n  background: url('modified_launch_image.jpg');\n  /* background-position: center top; */\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  text-align: center;\n}\n\n.about {\n  /* border: 1px solid white; */\n  display: inline-block;\n  /* width: 200px;\n  background: black;\n  color: white; */\n  padding-bottom: 5px;\n}\n\n.convertbtn {\n  background-color: black;\n  color: white;\n  width: 200px;\n  border-color: white;\n  padding: 12px;\n  font: 20px Courier, monospace;\n}\n\n@media only screen and (min-width: 480px) {\n  .about {\n    margin-top: 15px !important;\n  }\n}\n\n/* SMARTPHONES PORTRAIT */\n\n@media only screen and (min-width: 300px) {\n  .about {\n    margin-top: 10px !important;\n  }\n}\n\n/* TABLETS PORTRAIT */\n\n@media only screen and (min-width: 788px) {\n  .about {\n    margin-top: 135px !important;\n  }\n}\n\n/* TABLET LANDSCAPE / DESKTOP */\n\n@media only screen and (min-width: 1024px) {\n  .about {\n    margin-top: 150px !important;\n  }\n}\n\n.AIbrand {\n  font: 25px Courier, monospace;\n  font-family: \"Bodoni MT\", \"Times New Roman\", serif;\n}\n\n/* navbar */\n\n.navbar-default {\n  background-color: black;\n  opacity: 0.80;\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n/* Title */\n\n.navbar-default .navbar-brand {\n  color: white;\n}\n\n/* Link */\n\n.navbar-default .navbar-nav>li>a {\n  font: 20px Courier, monospace;\n  color: white;\n}\n\n.navbar-default .navbar-nav>.active>a,\n.navbar-default .navbar-nav>.active>a:hover,\n.navbar-default .navbar-nav>.active>a:focus {\n  color: gold;\n  background: none;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <!-- #1 -->\n\n        <a a routerLink=\"/\" class=\"navbar-brand AIbrand\" id=\"AIbrand\">AI Machina</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n        <div class=\"nav navbar-nav navbar-right\">\n          <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/uploadPictures\">Convert</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/about-us\">About</a>\n            </li>\n\n            <li routerLinkActive=\"active\">\n              <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/Login\">Login</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\">Register</a>\n            </li>\n            <li>\n              <a *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" href=\"#\"> Logout</a>\n            </li>\n\n\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <div class=\"about\">\n\n    <button *ngIf=\"enableButton\" type=\"button\" class=\"btn btn-dark convertbtn\" routerLink=\"/uploadPictures\"> Convert Image</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isIn = false; // store state
        this.enableButton = true;
    }
    HeaderComponent.prototype.toggleState = function () {
        // click handler
        var bool = this.isIn;
        var boole = this.enableButton;
        this.isIn = bool === false ? true : false;
        this.enableButton = boole === false ? true : false;
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/Login']);
        return false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__["FlashMessagesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/convert-steps.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/home/convert-steps.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".steps-image {\n  width: 252px;\n}\n\n.block {\n  padding-top: 10px;\n  border: 1px solid white;\n  display: inline-block;\n  width: 252px;\n  height: 45px;\n  background: black;\n  color: white;\n  padding-bottom: 5px;\n  margin-bottom: -2px;\n}\n\n.start {\n  background-color: transparent;\n  color: black;\n  border-color: black;\n  font: 20px Courier, monospace;\n}\n\n.start-one {\n  margin-top: 20px;\n}\n\nh2 {\n  text-align: center;\n  font: 20px Courier, monospace;\n}\n\nh1 {\n  text-align: center;\n  font: 35px Courier, monospace;\n}\n\nhr {\n  margin-top: 50px;\n  width: 90%;\n  display: block;\n  border: 0;\n  border-top: 3px solid gray;\n  padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/home/convert-steps.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/home/convert-steps.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" align=\"center\">\n      <h1>Convert your photo in three steps!</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\" align=\"center\">\n      <h2 class=\"block\">1. Upload photo</h2>\n      <img class=\"img-responsive steps-image\" src=\"assets/convert-steps/step1.jpg\" alt=\"\" />\n    </div>\n    <div class=\"col-md-4\" align=\"center\">\n      <h2 class=\"block\">2. Choose Style</h2>\n\n      <img class=\"img-responsive steps-image\" src=\"assets/convert-steps/step2.jpg\" alt=\"\" />\n\n    </div>\n    <div class=\"col-md-4\" align=\"center\">\n      <h2 class=\"block\">3. Merge result</h2>\n\n      <img class=\"img-responsive steps-image\" src=\"assets/convert-steps/step3.jpg\" alt=\"\" />\n\n    </div>\n  </div>\n  <div class=\"row start-one\">\n    <div class=\"col-md-12\">\n      <button type=\"button\" class=\"btn btn-primary center-block start\" routerLink=\"uploadPictures\">START</button>\n    </div>\n\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/components/home/convert-steps.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/convert-steps.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-convert-steps',
            template: __webpack_require__(/*! ./convert-steps.component.html */ "./src/app/components/home/convert-steps.component.html"),
            styles: [__webpack_require__(/*! ./convert-steps.component.css */ "./src/app/components/home/convert-steps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".how-it-works-header {\n  font-weight: lighter;\n }\n\n p {\n   font-family: Arial;\n   font-weight: normal;\n}\n\n hr[horizontal-line] {\n   margin-top: 50px;\n   width: 0%;\n   display: block;\n   border: 0;\n   border-top: 3px solid gray;\n   padding: 0;\n }\n"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr grey-line>\n  <div>\n    <h1 class=\"how-it-works-header\">HOW IT WORKS</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.ts ***!
  \*******************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/components/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/components/how-it-works/how-it-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 5%;\n  width: 25%;\n}\n\nh1 {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.register-link {\n  padding-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2 class=\"page-header\">Login</h2>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"\">Username</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n    <div class=\"register-link\">\n      <a routerLink=\"/register\">Not a member? Sign up</a>\n    </div>\n\n\n  </form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['uploadPictures']);
            }
            else {
                _this.flashMessage.show('alert', {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 5%;\n  width: 25%;\n}\n\nh1 {\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.cancel {\n  float: right;\n}\n\n.signin-link {\n  padding-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Register</h2>\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashmessage, authService, router) {
        this.validateService = validateService;
        this.flashmessage = flashmessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashmessage.show('please fill in all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashmessage.show('please use valid email', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.flashmessage.show('you are now registed', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashmessage.show('something went wrong', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_0__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-picture/upload-picture.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/upload-picture/upload-picture.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 100px;\n}\n\n.style {\n  font-weight: lighter;\n}\n\nhr[horizontal-line] {\n  margin-top: 50px;\n  width: 0%;\n  display: block;\n  border: 0;\n  border-top: 3px solid gray;\n  padding: 0;\n}\n\n.block {\n  padding-top: 10px;\n  border: 1px solid white;\n  display: inline-block;\n  width: 252px;\n  height: 45px;\n  background: black;\n  color: white;\n  padding-bottom: 5px;\n  margin-bottom: -2px;\n}\n\nh2 {\n  text-align: center;\n  font: 20px Courier, monospace;\n}\n\n.btninput {\n  display: block;\n  margin-top: 10px;\n  background-color: black;\n  color: white;\n  width: 125px;\n  border-color: white;\n  padding: 12px;\n  font: 20px Courier, monospace;\n}\n\ninput {\n  display: block;\n  padding-top: 15px;\n  width: 252px;\n}\n\n.img-merge {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  margin-top: 20px;\n}\n\nimg {\n  max-height: 300px;\n  max-width: 250px;\n}\n\n::-webkit-input-placeholder {\n  text-align: center;\n  font: 15px Courier, monospace;\n}\n\n:-ms-input-placeholder {\n  text-align: center;\n  font: 15px Courier, monospace;\n}\n\n::-ms-input-placeholder {\n  text-align: center;\n  font: 15px Courier, monospace;\n}\n\n::placeholder {\n  text-align: center;\n  font: 15px Courier, monospace;\n}\n\n.styleimagegrid {\n  margin-top: 20px;\n  background-color: #fafafa;\n  padding: 8px;\n  border: 1px solid #ddd;\n  max-height: 320px;\n  overflow: auto;\n  display: block;\n}\n\n.image-Style {\n  height: 100%;\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n\n.thumbnail {\n  height: 190px;\n  width: 175px;\n  margin-top: 20px;\n  margin-left: 10px;\n  background-color: #fff;\n  border-radius: 4px;\n  transition: 0.15s ease-in-out;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06);\n  flex: 50%;\n  padding: 10px;\n}\n\n.thumbnail:hover {\n  -webkit-transform: translateY(-10px) scale(1.02);\n          transform: translateY(-10px) scale(1.02);\n}\n\n.styles{\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.style{\n  text-align: center;\n  font: 37px Courier, monospace;\n\n}\n\n@media only screen and (min-width: 480px) {}\n\n/* SMARTPHONES PORTRAIT */\n\n@media only screen and (min-width: 300px) {}\n\n/* TABLETS PORTRAIT */\n\n@media only screen and (min-width: 788px) {}\n\n/* TABLET LANDSCAPE / DESKTOP */\n\n@media only screen and (min-width: 1024px) {}\n"

/***/ }),

/***/ "./src/app/components/upload-picture/upload-picture.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/upload-picture/upload-picture.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-4\" align=\"center\">\n\n      <h2 class=\"block\">1. Upload Picture</h2>\n      <img class=\"img-responsive \" [src]=\"image1\" onError=\"this.src='assets/upload-picture/default-step1.jpg';\">\n\n      <input style=\"display:none\" #myLocalInput class=\"block\" type='file' (change)=\"readUrl($event)\" required>\n      <button type=\"button\" class=\"btn btn-dark btninput\" (click)=\"myLocalInput.click()\">Local</button>\n\n      <h2 class=\"block\">URL:</h2>\n\n      <input type=\"URL\" name=\"myURL\" #myURLInput [(ngModel)]=\"myURL\" placeholder=\"Insert image URL here\" (change)=\"onURLinserted() \">\n\n\n      <button type=\"button\" class=\"btn btn-dark btninput\" [disabled]=\"toogleBool\" (click)=\"onUpload()\">Upload</button>\n      <h2>{{message}}</h2>\n\n\n\n\n\n    </div>\n\n    <div class=\"col-xs-12 col-md-4\" align=\"center\">\n      <img class=\"img-responsive img-merge\" [src]=\"image3\" onError=\"this.src='assets/upload-picture/default-step3.jpg';\">\n\n      <button type=\"button\" class=\"btn btn-dark btninput\">Merge</button>\n\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-4\" align=\"center\">\n      <h2 class=\"block\">2.Choose style</h2>\n\n      <img class=\"img-responsive \" [src]=\"image2\" onError=\"this.src='assets/upload-picture/default-step2.jpg';\">\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n\n\n</div>\n<div>\n  <h3 class=\"style\"> Choose Your Style </h3>\n</div>\n<div class=\"container styles \">\n<div class=\"row styleimagegrid\">\n  <div class=\"col-xs-4 col-md-4 thumbnail\">\n    <img class=\"img-responsive image-Style \" src=\"{{imageStyle1}}\" (click)=\"onURLinserted2(imageStyle1)\">\n  </div>\n  <div class=\"col-xs-4 col-md-4 thumbnail\">\n    <img class=\"img-responsive image-Style \" src=\"{{imageStyle2}}\" (click)=\"onURLinserted2(imageStyle2)\">\n\n  </div>\n  <div class=\"col-xs-4 col-md-4 thumbnail\">\n    <img class=\"img-responsive image-Style \" src=\"{{imageStyle3}}\" (click)=\"onURLinserted2(imageStyle3)\">\n\n  </div>\n\n</div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/upload-picture/upload-picture.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/upload-picture/upload-picture.component.ts ***!
  \***********************************************************************/
/*! exports provided: UploadPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPictureComponent", function() { return UploadPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadPictureComponent = /** @class */ (function () {
    function UploadPictureComponent(http) {
        this.http = http;
        this.imageStyle1 = 'assets/art1.jpg';
        this.imageStyle2 = 'assets/art2.jpg';
        this.imageStyle3 = 'assets/convert-steps/step2.jpg';
        this.isLoading = false;
        this.selectedFile = null;
        this.toogleBool = true;
        this.toogleBool2 = true;
    }
    UploadPictureComponent.prototype.reset = function () {
        console.log(this.myLocalInputVariable.nativeElement.files);
        this.myLocalInputVariable.nativeElement.value = '';
        console.log(this.myLocalInputVariable.nativeElement.files);
    };
    UploadPictureComponent.prototype.reset2 = function () {
        console.log(this.myLocalInputVariable2.nativeElement.files);
        this.myLocalInputVariable2.nativeElement.value = '';
        console.log(this.myLocalInputVariable2.nativeElement.files);
    };
    UploadPictureComponent.prototype.reset3 = function () {
        console.log(this.myLocalInputVariable3.nativeElement.files);
        this.myLocalInputVariable3.nativeElement.value = '';
        console.log(this.myLocalInputVariable3.nativeElement.files);
    };
    UploadPictureComponent.prototype.reset4 = function () {
        console.log(this.myLocalInputVariable4.nativeElement.files);
        this.myLocalInputVariable4.nativeElement.value = '';
        console.log(this.myLocalInputVariable4.nativeElement.files);
    };
    UploadPictureComponent.prototype.onURLinserted = function () {
        var _this = this;
        this.getImage(this.myURL).subscribe(function (data) {
            _this.createImageFromBlob(data);
        }, function (error) {
            console.log('Error occured', error);
        });
    };
    UploadPictureComponent.prototype.getImage = function (imageUrl) {
        return this.http.get(imageUrl, { responseType: 'blob' });
    };
    UploadPictureComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.image1 = reader.result; // here is the result you got from reader
        }, false);
        if (image) {
            this.selectedFile = image;
            reader.readAsDataURL(image);
            this.toogleBool = false;
            this.reset3();
            console.log(image);
        }
    };
    UploadPictureComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
    };
    UploadPictureComponent.prototype.readUrl = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        if (event.target.files && this.selectedFile) {
            var reader = new FileReader();
            reader.onload = function (event1) {
                _this.image1 = event1.target.result;
                _this.toogleBool = false;
            };
            reader.readAsDataURL(this.selectedFile);
            console.log(event);
            this.reset();
        }
    };
    UploadPictureComponent.prototype.readUrl2 = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        if (event.target.files && this.selectedFile) {
            var reader = new FileReader();
            reader.onload = function (event1) {
                _this.image2 = event1.target.result;
                _this.toogleBool2 = false;
            };
            reader.readAsDataURL(this.selectedFile);
            console.log(event);
            this.reset2();
        }
    };
    UploadPictureComponent.prototype.onUpload = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http
            .post('http://localhost:3000/uploadhandler', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            return (_this.message = 'Upload successful');
        });
    };
    UploadPictureComponent.prototype.onUpload2 = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http
            .post('http://localhost:3000/uploadhandler', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            return (_this.message2 = 'Upload successful');
        });
    };
    UploadPictureComponent.prototype.onURLinserted2 = function (image) {
        var _this = this;
        console.log(image);
        this.getImage2(image).subscribe(function (data) {
            _this.createImageFromBlob2(data);
        }, function (error) {
            console.log('Error occured', error);
        });
    };
    UploadPictureComponent.prototype.getImage2 = function (imageUrl) {
        return this.http.get(imageUrl, { responseType: 'blob' });
    };
    UploadPictureComponent.prototype.createImageFromBlob2 = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.image2 = reader.result; // here is the result you got from reader
        }, false);
        if (image) {
            this.selectedFile = image;
            reader.readAsDataURL(image);
            this.toogleBool = false;
            console.log(image);
            this.reset4();
        }
    };
    UploadPictureComponent.prototype.changeMainImg = function (image) {
        this.image2 = image;
        this.selectedFile = image;
        console.log(this.selectedFile);
        console.log(this.selectedFile.name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myURLInput'),
        __metadata("design:type", Object)
    ], UploadPictureComponent.prototype, "myLocalInputVariable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myURLInput2'),
        __metadata("design:type", Object)
    ], UploadPictureComponent.prototype, "myLocalInputVariable2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myLocalInput'),
        __metadata("design:type", Object)
    ], UploadPictureComponent.prototype, "myLocalInputVariable3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myInput2'),
        __metadata("design:type", Object)
    ], UploadPictureComponent.prototype, "myLocalInputVariable4", void 0);
    UploadPictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-picture',
            template: __webpack_require__(/*! ./upload-picture.component.html */ "./src/app/components/upload-picture/upload-picture.component.html"),
            styles: [__webpack_require__(/*! ./upload-picture.component.css */ "./src/app/components/upload-picture/upload-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadPictureComponent);
    return UploadPictureComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(autService, router) {
        this.autService = autService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.autService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/Login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
                // Authorization: 'my-auth-token'
            })
        };
        return this.http.post('users/register', user, httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
                // Authorization: 'my-auth-token'
            })
        };
        return this.http.post('users/authenticate', user, httpOptions);
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: this.authToken
            })
        };
        return this.http.get('users/profile', httpOptions);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token === undefined) {
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
            console.log(helper.isTokenExpired(localStorage.id_token));
            // tslint:disable-next-line:max-line-length
            return !helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined ||
            user.email === undefined ||
            user.username === undefined ||
            user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/charliebatista/Documents/Avanade/Avanade-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
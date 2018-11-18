(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-lazy"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/modules/lazy-load/order/order.module": [
		"./src/modules/lazy-load/order/order.module.ts",
		"src-modules-lazy-load-order-order-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    ApiUrl: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/modules/Init.ts":
/*!*****************************!*\
  !*** ./src/modules/Init.ts ***!
  \*****************************/
/*! exports provided: Init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Init", function() { return Init; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

function Init() {
    // enableProdMode();
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl.length == 0) {
        //debugger;
        _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl = window["apiUrl"];
        console.log("set environment variable api url" + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ApiUrl);
    }
}


/***/ }),

/***/ "./src/modules/lazy-load/customer/customer.component.html":
/*!****************************************************************!*\
  !*** ./src/modules/lazy-load/customer/customer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer works!\n</p>\n"

/***/ }),

/***/ "./src/modules/lazy-load/customer/customer.component.scss":
/*!****************************************************************!*\
  !*** ./src/modules/lazy-load/customer/customer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXp5LWxvYWQvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/lazy-load/customer/customer.component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/lazy-load/customer/customer.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
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

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/modules/lazy-load/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/modules/lazy-load/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/modules/lazy-load/lazy-load-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/lazy-load/lazy-load-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LazyLoadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadRoutingModule", function() { return LazyLoadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer/customer.component */ "./src/modules/lazy-load/customer/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer'
    },
    {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"]
    },
    {
        path: 'orders',
        loadChildren: 'src/modules/lazy-load/order/order.module#OrderModule'
    }
];
var LazyLoadRoutingModule = /** @class */ (function () {
    function LazyLoadRoutingModule() {
    }
    LazyLoadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LazyLoadRoutingModule);
    return LazyLoadRoutingModule;
}());



/***/ }),

/***/ "./src/modules/lazy-load/lazy-load.component.html":
/*!********************************************************!*\
  !*** ./src/modules/lazy-load/lazy-load.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Brand and toggle get grouped for better mobile display -->\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"#\">Lazy Loading</a>\r\n            </div>\r\n\r\n            <!-- Collect the nav links, forms, and other content for toggling -->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li class=\"active\" ><a href=\"#\" routerLink=\"customer\">Customer <span class=\"sr-only\">(current)</span></a></li>\r\n                    <li><a href=\"#\" routerLink=\"orders\">Orders</a></li>\r\n                  <!--  <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a href=\"#\">Action</a></li>\r\n                            <li><a href=\"#\">Another action</a></li>\r\n                            <li><a href=\"#\">Something else here</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\">One more separated link</a></li>\r\n                        </ul>\r\n                    </li>-->\r\n                </ul>\r\n              <!-- <form class=\"navbar-form navbar-left\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n                </form>\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li><a href=\"#\">Link</a></li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a href=\"#\">Action</a></li>\r\n                            <li><a href=\"#\">Another action</a></li>\r\n                            <li><a href=\"#\">Something else here</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>-->\r\n            </div><!-- /.navbar-collapse -->\r\n        </div><!-- /.container-fluid -->\r\n    </nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/modules/lazy-load/lazy-load.component.scss":
/*!********************************************************!*\
  !*** ./src/modules/lazy-load/lazy-load.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXp5LWxvYWQvbGF6eS1sb2FkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/modules/lazy-load/lazy-load.component.ts":
/*!******************************************************!*\
  !*** ./src/modules/lazy-load/lazy-load.component.ts ***!
  \******************************************************/
/*! exports provided: LazyLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadComponent", function() { return LazyLoadComponent; });
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

var LazyLoadComponent = /** @class */ (function () {
    function LazyLoadComponent() {
    }
    LazyLoadComponent.prototype.ngOnInit = function () {
    };
    LazyLoadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lazy-load',
            template: __webpack_require__(/*! ./lazy-load.component.html */ "./src/modules/lazy-load/lazy-load.component.html"),
            styles: [__webpack_require__(/*! ./lazy-load.component.scss */ "./src/modules/lazy-load/lazy-load.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LazyLoadComponent);
    return LazyLoadComponent;
}());



/***/ }),

/***/ "./src/modules/lazy-load/lazy-load.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/lazy-load/lazy-load.module.ts ***!
  \***************************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-load-routing.module */ "./src/modules/lazy-load/lazy-load-routing.module.ts");
/* harmony import */ var _lazy_load_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-load.component */ "./src/modules/lazy-load/lazy-load.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/customer.component */ "./src/modules/lazy-load/customer/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_lazy_load_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_3__["LazyLoadRoutingModule"]
            ],
            providers: [],
            bootstrap: [_lazy_load_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadComponent"]]
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/modules/lazy-load/main.ts":
/*!***************************************!*\
  !*** ./src/modules/lazy-load/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _lazy_load_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-load.module */ "./src/modules/lazy-load/lazy-load.module.ts");
/* harmony import */ var _Init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Init */ "./src/modules/Init.ts");



//set url from web configLazyLoadModule
Object(_Init__WEBPACK_IMPORTED_MODULE_2__["Init"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_lazy_load_module__WEBPACK_IMPORTED_MODULE_1__["LazyLoadModule"]);
// if (document.readyState === 'complete') {
//     platformBrowserDynamic().bootstrapModule(LazyLoadModule);
//} else {
//     document.addEventListener('DOMContentLoaded', function () {
//         return platformBrowserDynamic().bootstrapModule(LazyLoadModule);
//     });
//}


/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./src/modules/lazy-load/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src\modules\lazy-load\main.ts */"./src/modules/lazy-load/main.ts");


/***/ })

},[[4,"runtime","vendor"]]]);
//# sourceMappingURL=main-lazy.chunk.js.map
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

module.exports = "<p>\n  customer works!\n</p>\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Customer Ref</th>\r\n                    <th scope=\"col\">Customer Name</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let cus of Customers\">\r\n                    <th scope=\"row\">1</th>\r\n                    <td>{{cus.Ref}}</td>\r\n                    <td>{{cus.Name}}</td>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n\r\n    </div>\r\n</div>"

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
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer.service */ "./src/modules/services/customer.service.ts");
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
    function CustomerComponent(_cutomerService) {
        this._cutomerService = _cutomerService;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cutomerService.getCustomers().subscribe(function (c) { return _this.Customers = c; });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/modules/lazy-load/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/modules/lazy-load/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
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

module.exports = "<div>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\" href=\"#\">Lazy Loading</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"customer\">Customer <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"orders\">Orders</a>\r\n                </li>\r\n                <!--<li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Dropdown\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>-->\r\n            </ul>\r\n            <!--<form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>-->\r\n        </div>\r\n    </nav>\n  \n<router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-load-routing.module */ "./src/modules/lazy-load/lazy-load-routing.module.ts");
/* harmony import */ var _lazy_load_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazy-load.component */ "./src/modules/lazy-load/lazy-load.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer.component */ "./src/modules/lazy-load/customer/customer.component.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/customer.service */ "./src/modules/services/customer.service.ts");
/* harmony import */ var _services_api_request_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-request-handler */ "./src/modules/services/api-request-handler.ts");
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
            declarations: [_lazy_load_component__WEBPACK_IMPORTED_MODULE_5__["LazyLoadComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_4__["LazyLoadRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_api_request_handler__WEBPACK_IMPORTED_MODULE_8__["APIRequestHandler"],
                    multi: true
                }, _services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]],
            bootstrap: [_lazy_load_component__WEBPACK_IMPORTED_MODULE_5__["LazyLoadComponent"]]
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

/***/ "./src/modules/services/api-request-handler.ts":
/*!*****************************************************!*\
  !*** ./src/modules/services/api-request-handler.ts ***!
  \*****************************************************/
/*! exports provided: APIRequestHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIRequestHandler", function() { return APIRequestHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var APIRequestHandler = /** @class */ (function () {
    function APIRequestHandler() {
    }
    APIRequestHandler.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: 'Test 12345',
                Token: 'test'
            }
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            debugger;
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] && ~~(event.status / 100) > 3) {
                console.info('HttpResponse::event =', event, ';');
            }
            else {
                console.info('event =', event, ';');
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    if (event.status === 403) {
                        console.info('err.error =', event.error, ';');
                    }
                }
            }
            return event;
        }));
    };
    APIRequestHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], APIRequestHandler);
    return APIRequestHandler;
}());



/***/ }),

/***/ "./src/modules/services/customer.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/services/customer.service.ts ***!
  \**************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = /** @class */ (function () {
    function CustomerService(_http) {
        this._http = _http;
        console.log("****" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiUrl);
    }
    CustomerService.prototype.getCustomers = function () {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiUrl + "api/v1/customers").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var arr = [];
            response.forEach(function (c, i) { return arr.push({ Id: c.CustomerID, Name: c.Name, Ref: c.Reference }); });
            return arr;
        }));
        //.map(r => <Customer[]>r.json());
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-lazy-load-order-order-module"],{

/***/ "./src/modules/lazy-load/order/order-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/modules/lazy-load/order/order-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/modules/lazy-load/order/order.component.ts");
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
        component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]
    },
    {
        path: 'orders',
        component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]
    }
];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/modules/lazy-load/order/order.component.html":
/*!**********************************************************!*\
  !*** ./src/modules/lazy-load/order/order.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n   \r\n        order works!\r\n \r\n        <div>Service model value: {{_cartService.customer.Name}}</div>\r\n  \r\n        <div> Local model value: {{cusName}}</div>\r\n  \r\n      \r\n   \r\n</div>"

/***/ }),

/***/ "./src/modules/lazy-load/order/order.component.scss":
/*!**********************************************************!*\
  !*** ./src/modules/lazy-load/order/order.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYXp5LWxvYWQvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/lazy-load/order/order.component.ts":
/*!********************************************************!*\
  !*** ./src/modules/lazy-load/order/order.component.ts ***!
  \********************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/modules/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderComponent = /** @class */ (function () {
    function OrderComponent(_cartService) {
        this._cartService = _cartService;
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.cusName = this._cartService.customer.Name;
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/modules/lazy-load/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/modules/lazy-load/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/modules/lazy-load/order/order.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/lazy-load/order/order.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-routing.module */ "./src/modules/lazy-load/order/order-routing.module.ts");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/modules/lazy-load/order/order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"]
            ]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/modules/services/cart.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/services/cart.service.ts ***!
  \**********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
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

var CartService = /** @class */ (function () {
    function CartService() {
    }
    CartService.prototype.setCustomer = function (cus) {
        this.customer = cus;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ })

}]);
//# sourceMappingURL=src-modules-lazy-load-order-order-module.chunk.js.map
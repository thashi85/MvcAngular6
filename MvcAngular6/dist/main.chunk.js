(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/json-api-format/fesm5/json-api-format.js":
/*!*******************************************************!*\
  !*** ./dist/json-api-format/fesm5/json-api-format.js ***!
  \*******************************************************/
/*! exports provided: Serializer, Deserializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serializer", function() { return Serializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deserializer", function() { return Deserializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonAPIUtil = /** @class */ (function () {
    function JsonAPIUtil() {
    }
    /**
     * @protected
     * @param {?} attribute
     * @return {?}
     */
    JsonAPIUtil.prototype.keyForAttribute = /**
     * @protected
     * @param {?} attribute
     * @return {?}
     */
    function (attribute) {
        var _this = this;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(attribute)) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["transform"])(attribute, function (result, value, key) {
                if (_this.isComplexType(value)) {
                    result[_this.keyForAttribute(key)] = _this.keyForAttribute(value);
                }
                else {
                    result[_this.keyForAttribute(key)] = value;
                }
            });
        }
        else if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(attribute)) {
            return attribute.map(function (attr) {
                if (_this.isComplexType(attr)) {
                    return _this.keyForAttribute(attr);
                }
                else {
                    return attr;
                }
            });
        }
        else {
            return attribute;
            //if (_.isFunction(this.opts.keyForAttribute)) {
            //    return this.opts.keyForAttribute(attribute);
            //} else {
            //    //TL
            //    //return Inflector.caserizeFunc(attribute, this.opts.keyForAttribute);
            //    return attribute;
            //}
        }
    };
    /**
     * @protected
     * @param {?} obj
     * @return {?}
     */
    JsonAPIUtil.prototype.isComplexType = /**
     * @protected
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(obj) || Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(obj);
    };
    return JsonAPIUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonAPISerializerUtil = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JsonAPISerializerUtil, _super);
    function JsonAPISerializerUtil(collectionName, opts) {
        if (collectionName === void 0) { collectionName = ""; }
        if (opts === void 0) { opts = null; }
        var _this = _super.call(this) || this;
        _this.collectionName = collectionName;
        _this.opts = opts;
        _this.included = [];
        return _this;
    }
    //first method which is called for serialization
    //first method which is called for serialization
    /**
     * @param {?} record
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.perform = 
    //first method which is called for serialization
    /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        return this.serializeResource(record);
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.serializeResource = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        var _this = this;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNull"])(obj)) {
            return null;
        }
        // Top-level data.
        /** @type {?} */
        var data = {
            type: this.getType(obj),
            id: String(obj[this.getId(obj)])
        };
        /** @type {?} */
        var tid = this.getTid(obj);
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(tid) && tid != null) {
            data.tid = tid;
        }
        //Data attribute and relationship populate
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["transform"])(obj, function (result, value, key) {
            if (key.toString() != "id" && key.toString() != "type") {
                if (!data.attributes) {
                    data.attributes = {};
                }
                if (_this.isComplexType(value)) {
                    // data.attributes[this.keyForAttribute(key)] = this.keyForAttribute(value);                    
                    _this.serialize(data, value, key, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value), _this.opts);
                }
                else {
                    data.attributes[_this.keyForAttribute(key)] = value;
                }
            }
        });
        return data;
    };
    /**
     * @private
     * @param {?} dest
     * @param {?} current
     * @param {?} attribute
     * @param {?} isArray
     * @param {?} opts
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.serialize = /**
     * @private
     * @param {?} dest
     * @param {?} current
     * @param {?} attribute
     * @param {?} isArray
     * @param {?} opts
     * @return {?}
     */
    function (dest, current, attribute, isArray$$1, opts) {
        if (this.isRelationship(current)) {
            /** @type {?} */
            var id = current[this.getId(current)];
            //todo tid
            /** @type {?} */
            var type = this.getType(current);
            if (!(dest.relationships)) {
                dest.relationships = {};
            }
            if (!dest.relationships[attribute]) {
                dest.relationships[attribute] = {};
            }
            if (isArray$$1) {
                if (!dest.relationships[attribute].data)
                    dest.relationships[attribute].data = [];
                dest.relationships[attribute].data.push({ 'id': id, 'type': type });
            }
            else {
                if (!dest.relationships[attribute].data)
                    dest.relationships[attribute].data = { 'id': id, 'type': type };
            }
            //handle include
            /** @type {?} */
            var incAdded = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.included, function (inc) {
                return inc.id == id && inc.type.toLowerCase() == type.toLowerCase();
            });
            if (!incAdded) {
                this.included.push(this.serializeResource(current));
            }
        }
        else {
            dest.attributes[this.keyForAttribute(attribute)] = this.keyForAttribute(current);
        }
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.isRelationship = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(obj.id) || !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(obj.tid);
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.getId = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        // return this.opts.id || 'id';      
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(obj.id))
            return 'id';
        return 'id';
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.getTid = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        // return this.opts.id || 'id';
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(obj.tid))
            return 'tid';
        return null;
    };
    /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    JsonAPISerializerUtil.prototype.getType = /**
     * @private
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var type = obj.type;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(type)) {
            type = obj.constructor.name;
        }
        return type;
    };
    return JsonAPISerializerUtil;
}(JsonAPIUtil));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Serializer = /** @class */ (function () {
    function Serializer(collectionName, opts) {
        if (collectionName === void 0) { collectionName = ""; }
        if (opts === void 0) { opts = null; }
        this.collectionName = collectionName;
        this.opts = opts;
        this.payload = {};
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Serializer.prototype.serialize = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(data)) {
            return this.collection(data);
        }
        else {
            return this.resource(data);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Serializer.prototype.collection = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.payload.data = [];
        /** @type {?} */
        var serializerUtils = new JsonAPISerializerUtil(this.collectionName, this.opts);
        //data mapping
        data.forEach(function (record) {
            _this.payload.data.push(serializerUtils.perform(record));
        });
        //include mapping
        if (serializerUtils.included.length > 0) {
            this.payload.included = serializerUtils.included;
        }
        return this.payload;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    Serializer.prototype.resource = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var serializerUtils = new JsonAPISerializerUtil(this.collectionName, this.opts);
        //data mapping
        this.payload.data = serializerUtils.perform(data);
        //include mapping
        if (serializerUtils.included.length > 0) {
            this.payload.included = serializerUtils.included;
        }
        return this.payload;
    };
    return Serializer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonAPIDeserializerUtil = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JsonAPIDeserializerUtil, _super);
    function JsonAPIDeserializerUtil(jsonapi) {
        var _this = _super.call(this) || this;
        _this.jsonapi = jsonapi;
        _this.alreadyIncluded = [];
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    JsonAPIDeserializerUtil.prototype.perform = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.extractAttributes(data), this.extractRelationships(data));
    };
    /**
     * @private
     * @param {?} from
     * @return {?}
     */
    JsonAPIDeserializerUtil.prototype.extractAttributes = /**
     * @private
     * @param {?} from
     * @return {?}
     */
    function (from) {
        if (!from.attributes) {
            return;
        }
        /** @type {?} */
        var dest = this.keyForAttribute(from.attributes || {});
        if ('id' in from) {
            dest.id = from.id;
        }
        if ('type' in from) {
            dest.type = from.type;
        }
        return dest;
    };
    /**
     * @private
     * @param {?} from
     * @return {?}
     */
    JsonAPIDeserializerUtil.prototype.extractRelationships = /**
     * @private
     * @param {?} from
     * @return {?}
     */
    function (from) {
        var _this = this;
        debugger;
        if (!from.relationships) {
            return;
        }
        /** @type {?} */
        var dest = {};
        Object.keys(from.relationships)
            .map(function (key) {
            /** @type {?} */
            var relationship = from.relationships[key];
            if (relationship.data === null) {
                return dest[_this.keyForAttribute(key)] = null;
            }
            else if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(relationship.data)) {
                /** @type {?} */
                var includes = relationship.data
                    .map(function (relationshipData) {
                    return _this.extractIncludes(relationshipData, key, from);
                });
                if (includes) {
                    dest[_this.keyForAttribute(key)] = includes;
                }
            }
            else {
                /** @type {?} */
                var includes = _this.extractIncludes(relationship.data, key, from);
                if (includes) {
                    return dest[_this.keyForAttribute(key)] = includes;
                }
            }
        });
        return dest;
    };
    /**
     * @private
     * @param {?} relationshipData
     * @param {?} relationshipName
     * @param {?} from
     * @return {?}
     */
    JsonAPIDeserializerUtil.prototype.extractIncludes = /**
     * @private
     * @param {?} relationshipData
     * @param {?} relationshipName
     * @param {?} from
     * @return {?}
     */
    function (relationshipData, relationshipName, from) {
        /** @type {?} */
        var included = this.findIncluded(relationshipData, relationshipName, from);
        /** @type {?} */
        var valueForRelationship = this.getValueForRelationship(relationshipData, included);
        return valueForRelationship;
    };
    /**
     * @private
     * @param {?} relationshipData
     * @param {?} relationshipName
     * @param {?} from
     * @return {?}
     */
    JsonAPIDeserializerUtil.prototype.findIncluded = /**
     * @private
     * @param {?} relationshipData
     * @param {?} relationshipName
     * @param {?} from
     * @return {?}
     */
    function (relationshipData, relationshipName, from) {
        if (!this.jsonapi.included || !relationshipData) {
            return null;
        }
        /** @type {?} */
        var included = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.jsonapi.included, {
            id: relationshipData.id,
            type: relationshipData.type
        });
        /** @type {?} */
        var includedObject = {
            to: {
                id: from.id,
                type: from.type
            },
            from: Object.assign({}, relationshipData),
            relation: relationshipName
        };
        // Check if the include is already processed (prevent circular references).
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.alreadyIncluded, includedObject)) {
            return null;
        }
        else {
            this.alreadyIncluded.push(includedObject);
        }
        if (included) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.extractAttributes(included), this.extractRelationships(included));
        }
        else {
            return {
                id: relationshipData.id,
                type: relationshipData.type
            };
        }
    };
    /**
     * @private
     * @param {?} relationshipData
     * @param {?} included
     * @return {?}
     */
    JsonAPIDeserializerUtil.prototype.getValueForRelationship = /**
     * @private
     * @param {?} relationshipData
     * @param {?} included
     * @return {?}
     */
    function (relationshipData, included) {
        //if (this.opts && relationshipData && this.opts[relationshipData.type]) {
        //    let valueForRelationshipFct = this.opts[relationshipData.type]
        //        .valueForRelationship;
        //    return valueForRelationshipFct(relationshipData, included);
        //} else 
        {
            return included;
        }
    };
    return JsonAPIDeserializerUtil;
}(JsonAPIUtil));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Deserializer = /** @class */ (function () {
    function Deserializer(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = opts;
    }
    /**
     * @param {?} jsonapi
     * @return {?}
     */
    Deserializer.prototype.deserialize = /**
     * @param {?} jsonapi
     * @return {?}
     */
    function (jsonapi) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(jsonapi.data)) {
            return this.collection(jsonapi);
        }
        else {
            return this.resource(jsonapi);
        }
    };
    /**
     * @param {?} jsonapi
     * @return {?}
     */
    Deserializer.prototype.collection = /**
     * @param {?} jsonapi
     * @return {?}
     */
    function (jsonapi) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(jsonapi.data, function (d) {
            return new JsonAPIDeserializerUtil(jsonapi).perform(d);
        });
    };
    /**
     * @param {?} jsonapi
     * @return {?}
     */
    Deserializer.prototype.resource = /**
     * @param {?} jsonapi
     * @return {?}
     */
    function (jsonapi) {
        return new JsonAPIDeserializerUtil(jsonapi).perform(jsonapi.data);
    };
    return Deserializer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=json-api-format.js.map

/***/ }),

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

/***/ "./src/modules/layout/site-layout/site-footer/site-footer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-footer/site-footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <footer>\r\n        <p>&copy; Company 2017 , Test Site Footer</p>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./src/modules/layout/site-layout/site-footer/site-footer.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-footer/site-footer.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYXlvdXQvc2l0ZS1sYXlvdXQvc2l0ZS1mb290ZXIvc2l0ZS1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/layout/site-layout/site-footer/site-footer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-footer/site-footer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SiteFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFooterComponent", function() { return SiteFooterComponent; });
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

var SiteFooterComponent = /** @class */ (function () {
    function SiteFooterComponent() {
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
    };
    SiteFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-footer',
            template: __webpack_require__(/*! ./site-footer.component.html */ "./src/modules/layout/site-layout/site-footer/site-footer.component.html"),
            styles: [__webpack_require__(/*! ./site-footer.component.scss */ "./src/modules/layout/site-layout/site-footer/site-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "./src/modules/layout/site-layout/site-header/site-header.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-header/site-header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Features</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">About</a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/modules/layout/site-layout/site-header/site-header.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-header/site-header.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYXlvdXQvc2l0ZS1sYXlvdXQvc2l0ZS1oZWFkZXIvc2l0ZS1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/layout/site-layout/site-header/site-header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-header/site-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SiteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeaderComponent", function() { return SiteHeaderComponent; });
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

var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent() {
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-header',
            template: __webpack_require__(/*! ./site-header.component.html */ "./src/modules/layout/site-layout/site-header/site-header.component.html"),
            styles: [__webpack_require__(/*! ./site-header.component.scss */ "./src/modules/layout/site-layout/site-header/site-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "./src/modules/layout/site-layout/site-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<site-header></site-header>\r\n<router-outlet></router-outlet>\r\n<site-footer></site-footer>"

/***/ }),

/***/ "./src/modules/layout/site-layout/site-layout.component.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-layout.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYXlvdXQvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/layout/site-layout/site-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
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

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/modules/layout/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.scss */ "./src/modules/layout/site-layout/site-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/modules/layout/site-layout/site-layout.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/layout/site-layout/site-layout.module.ts ***!
  \**************************************************************/
/*! exports provided: SiteLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutModule", function() { return SiteLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-header/site-header.component */ "./src/modules/layout/site-layout/site-header/site-header.component.ts");
/* harmony import */ var _site_footer_site_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-footer/site-footer.component */ "./src/modules/layout/site-layout/site-footer/site-footer.component.ts");
/* harmony import */ var _site_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site-layout.component */ "./src/modules/layout/site-layout/site-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SiteLayoutModule = /** @class */ (function () {
    function SiteLayoutModule() {
    }
    SiteLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_site_header_site_header_component__WEBPACK_IMPORTED_MODULE_3__["SiteHeaderComponent"], _site_footer_site_footer_component__WEBPACK_IMPORTED_MODULE_4__["SiteFooterComponent"], _site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [],
            exports: [_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"]]
        })
    ], SiteLayoutModule);
    return SiteLayoutModule;
}());



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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYXp5LWxvYWQvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/modules/services/cart.service.ts");
/* harmony import */ var json_api_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-api-format */ "./dist/json-api-format/fesm5/json-api-format.js");
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
    function CustomerComponent(_cutomerService, _cartService) {
        this._cutomerService = _cutomerService;
        this._cartService = _cartService;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cutomerService.getCustomers().subscribe(function (c) {
            _this.Customers = c;
            _this._cartService.customer = _this.Customers[0];
        });
        this._cutomerService.getAssets().subscribe(function (s) {
            var json = new json_api_format__WEBPACK_IMPORTED_MODULE_3__["Deserializer"]().deserialize(s);
            console.log(json);
            //var arr = new Serializer("asset", { id: "", attributes: [], pluralizeType: false }).serialize(json);
            var arr = new json_api_format__WEBPACK_IMPORTED_MODULE_3__["Serializer"]().serialize(json);
            console.log('serilized object');
            console.log(arr);
        });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/modules/lazy-load/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/modules/lazy-load/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
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
/* harmony import */ var _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/site-layout/site-layout.component */ "./src/modules/layout/site-layout/site-layout.component.ts");
/* harmony import */ var _layout_site_layout_site_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/site-layout/site-layout.module */ "./src/modules/layout/site-layout/site-layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { AppLayoutComponent } from '../layout/app-layout/app-layout.component';


var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer'
    },
    {
        path: 'customer',
        component: _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutComponent"],
        children: [
            { path: '', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"], pathMatch: 'full' },
        ],
    },
    {
        path: 'orders',
        component: _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_3__["SiteLayoutComponent"],
        loadChildren: 'src/modules/lazy-load/order/order.module#OrderModule'
    }
];
var LazyLoadRoutingModule = /** @class */ (function () {
    function LazyLoadRoutingModule() {
    }
    LazyLoadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }), _layout_site_layout_site_layout_module__WEBPACK_IMPORTED_MODULE_4__["SiteLayoutModule"]],
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

module.exports = "<div>\n    <router-outlet></router-outlet>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\" href=\"#\">Lazy Loading</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"customer\">Customer <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"orders\">Orders</a>\r\n                </li>\r\n                <!--<li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Dropdown\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>-->\r\n            </ul>\r\n            <!--<form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>-->\r\n        </div>\r\n    </nav>\n  \n\n</div>"

/***/ }),

/***/ "./src/modules/lazy-load/lazy-load.component.scss":
/*!********************************************************!*\
  !*** ./src/modules/lazy-load/lazy-load.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYXp5LWxvYWQvbGF6eS1sb2FkLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _layout_site_layout_site_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/site-layout/site-layout.module */ "./src/modules/layout/site-layout/site-layout.module.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer.component */ "./src/modules/lazy-load/customer/customer.component.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/customer.service */ "./src/modules/services/customer.service.ts");
/* harmony import */ var _services_api_request_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api-request-handler */ "./src/modules/services/api-request-handler.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/cart.service */ "./src/modules/services/cart.service.ts");
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
            declarations: [_lazy_load_component__WEBPACK_IMPORTED_MODULE_5__["LazyLoadComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_4__["LazyLoadRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _layout_site_layout_site_layout_module__WEBPACK_IMPORTED_MODULE_6__["SiteLayoutModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_api_request_handler__WEBPACK_IMPORTED_MODULE_9__["APIRequestHandler"],
                    multi: true
                }, _services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"]],
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
    CustomerService.prototype.getAssets = function () {
        return this._http.get("http://apidocumentation.optimosoftware.co.uk/OptimoWebAPI/Test/api/V4.1/assets?page.number=1&page.size=5&include=venue");
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

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/modules/lazy-load/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Test App\Angular\Mvc And Angular 6\ClientApp\src\modules\lazy-load\main.ts */"./src/modules/lazy-load/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.chunk.js.map
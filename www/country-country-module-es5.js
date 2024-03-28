function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-country-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountryCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"mainarea\">\n    <img src=\"assets/images/icons/logo.svg\" />\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n          <p>{{'welcome' | translate}}<br>{{'select_your_location' | translate}}</p>\n          <ion-item mode=\"ios\">\n            <ion-label class=\"newlabel\" style=\"display:none;\" position=\"stacked\">\n              {{'home_country_your_country' | translate }}\n            </ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCountry($event)\"\n              [(ngModel)]=\"countryName\" placeholder=\"{{'home_search_your_country' | translate}}\" disabled=\"false\" debounce=\"500\"></ion-searchbar>\n            <div class=\"newserchlist\" *ngIf=\"isItemAvailable && showCountrylist\">\n              <ion-item (click)=\"selectedLocation(item)\" *ngFor=\"let item of countryList\">{{item.country_name}}</ion-item>\n            </div>\n          </ion-item>\n          <!-- <ion-item mode=\"ios\">\n            <ion-label class=\"newlabel\" style=\"display:none;\" position=\"stacked\">\n              {{'home_country_your_country' | translate }}\n            </ion-label>\n            <ion-select placeholder=\"{{'select_one' | translate}}\" mode=\"ios\" (ionChange)=\"getCountry($event)\">\n              <ion-select-option *ngFor=\"let item of countryList\" value=\"{{item.country_id}}\">{{item.country_name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item> -->\n          \n          <ion-item mode=\"ios\">\n            <ion-label class=\"newlabel\" position=\"stacked\">{{'select_city' | translate}}</ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCity($event)\"\n              [(ngModel)]=\"searchTerm\" placeholder=\"{{'search_city' | translate}}\" [disabled]=\"!countrySelectedFlag\" debounce=\"500\"></ion-searchbar>\n            <div class=\"newserchlist\" *ngIf=\"hide_city_search\">\n              <ion-item (click)=\"selectedcity(item)\" *ngFor=\"let item of cityList\">{{item.city_name}}</ion-item>\n            </div>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"bottom\">\n    <ion-row>\n      <ion-col col-12>\n        <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"goToNext()\" [disabled]=\"buttondisable\">\n          {{'procees' | translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/country/country-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/country/country-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CountryPageRoutingModule */

  /***/
  function srcAppCountryCountryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPageRoutingModule", function () {
      return CountryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./country.page */
    "./src/app/country/country.page.ts");

    var routes = [{
      path: '',
      component: _country_page__WEBPACK_IMPORTED_MODULE_3__["CountryPage"]
    }];

    var CountryPageRoutingModule = /*#__PURE__*/_createClass(function CountryPageRoutingModule() {
      _classCallCheck(this, CountryPageRoutingModule);
    });

    CountryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CountryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/country/country.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/country/country.module.ts ***!
    \*******************************************/

  /*! exports provided: CountryPageModule */

  /***/
  function srcAppCountryCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPageModule", function () {
      return CountryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _country_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./country-routing.module */
    "./src/app/country/country-routing.module.ts");
    /* harmony import */


    var _country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./country.page */
    "./src/app/country/country.page.ts");

    var CountryPageModule = /*#__PURE__*/_createClass(function CountryPageModule() {
      _classCallCheck(this, CountryPageModule);
    });

    CountryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _country_routing_module__WEBPACK_IMPORTED_MODULE_6__["CountryPageRoutingModule"]],
      declarations: [_country_page__WEBPACK_IMPORTED_MODULE_7__["CountryPage"]]
    })], CountryPageModule);
    /***/
  },

  /***/
  "./src/app/country/country.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/country/country.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountryCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 35% auto 0;\n}\n\n.alert-head.sc-ion-alert-ios {\n  display: none !important;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 16px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 11px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.newsidearea {\n  width: 100%;\n  height: auto;\n}\n\n.newsidearea ion-label {\n  width: 100%;\n  height: auto;\n  flex: 1 1 0%;\n}\n\n.newsidearea .in-item {\n  padding-right: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.newsidearea .in-item[slot=start] {\n  margin: 3px 15px 0px 4px;\n}\n\n.newsidearea ion-item {\n  width: 50%;\n  float: left;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 6px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  --min-height: 44px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 104px;\n}\n\n.newselect p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  line-height: 21px;\n  text-align: left;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n\n.newselect.newselect h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  font-family: \"Mangal\";\n  line-height: 24px;\n  font-family: \"Lato\";\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\n.newserchlist {\n  height: 200px;\n  width: 1px solid #ddd;\n  overflow: scroll;\n  width: 100%;\n  padding: 0 10px;\n  border-bottom: 2px solid #ddd;\n  border: 1px solid #ddd;\n}\n\n.newserchlist ion-item {\n  margin-bottom: 0;\n  --min-height: 38px;\n}\n\nion-searchbar .searchbar-input {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.mainarea ion-searchbar {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  --background:transparent;\n  padding: 0;\n}\n\n.mainarea .sc-ion-searchbar-ios-h {\n  --background:transparent;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: 1px solid #ddd;\n  height: 42px;\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n  padding: 0;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  height: auto;\n  display: inline-block;\n  margin: 70px auto 0;\n  text-align: center;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 20px auto 40px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0;\n  }\n\n  .newselect {\n    margin-top: 70px;\n  }\n\n  .newselect p {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 32% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 40% auto 0;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .newselect p {\n    margin-top: 90px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 0;\n  }\n\n  .newselect p {\n    margin-top: 66px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 213px;\n    margin: 18% auto 0;\n  }\n\n  .newselect {\n    margin-top: 0;\n  }\n\n  .newselect p {\n    margin-top: 35px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 0;\n  }\n\n  .newselect p {\n    margin-top: 66px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9jb3VudHJ5L2NvdW50cnkucGFnZS5zY3NzIiwic3JjL2FwcC9jb3VudHJ5L2NvdW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUE7O0FER0E7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBQTs7QURFQTtFQUVBLHdCQUFBO0FDQUE7O0FER0E7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0VBQ0osa0JBQUE7RUFDSSxvQkFBQTtBQ0FKOztBREVBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0FDQUE7O0FES0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ0hBOztBRE1BO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSkE7O0FET0E7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0MsZUFBQTtBQ0xMOztBRFFBO0VBRUEsd0JBQUE7QUNOQTs7QURRQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FDTkE7O0FEU0U7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDUEo7O0FEVUE7RUFDQyx5QkFBQTtBQ1BEOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtFQUVJLGtCQUFBO0FDUkw7O0FEV0M7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0ksa0JBQUE7QUNUTDs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1pBOztBRGVBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNiQTs7QURnQkE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FDZEE7O0FEZ0JFO0VBRUYsd0JBQUE7VUFBQSx1QkFBQTtBQ2RBOztBRGdCQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDSSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0gsd0JBQUE7RUFDQSxVQUFBO0FDZEQ7O0FEaUJBO0VBRUEsd0JBQUE7RUFDQSxjQUFBO0VBQ0ksaUJBQUE7RUFDSCxzQkFBQTtFQUNBLFlBQUE7RUFDSSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0gsVUFBQTtBQ2ZGOztBRGlCQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDZkE7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURtQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbEJBOztBRG9CQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURxQkE7RUFDQSxXQUFBO0FDbEJBOztBRHVCQTtFQUVDO0lBRUksa0JBQUE7RUN0Qkg7O0VEeUJEO0lBQ0EsZ0JBQUE7RUN0QkM7O0VEeUJEO0lBQ0EsZ0JBQUE7RUN0QkM7QUFDRjs7QUR5QkM7RUFJQTtJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUMzQkM7QUFDRjs7QURpQ0M7RUFJQztJQUdELGtCQUFBO0VDcENDO0FBQ0Y7O0FEd0NDO0VBSUE7SUFDSSxnQkFBQTtFQ3pDSDtBQUNGOztBRDZDQztFQUlBO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0VDL0NDOztFRGtERDtJQUNBLGFBQUE7RUMvQ0M7O0VEa0REO0lBQ0ksZ0JBQUE7RUMvQ0g7QUFDRjs7QURrREU7RUFJRDtJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQ3BEQzs7RUR1REQ7SUFDQSxhQUFBO0VDcERDOztFRHVERDtJQUNJLGdCQUFBO0VDcERIO0FBQ0Y7O0FEd0RBO0VBSUM7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUMxREM7O0VENkREO0lBQ0EsYUFBQTtFQzFEQzs7RUQ2REQ7SUFDSSxnQkFBQTtFQzFESDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY291bnRyeS9jb3VudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm1haW5hcmVhIGltZ3tcclxud2lkdGg6MjM1cHg7XHJcbm1hcmdpbjozNSUgYXV0byAgMCA7XHJcbn1cclxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcbmRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5uZXdzaWRlYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgaW9uLWxhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsZXg6MSAxIDAlO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1cclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblx0ICAgIHBhZGRpbmctbGVmdDowO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1bc2xvdD1cInN0YXJ0XCJdXHJcbntcclxubWFyZ2luOiAzcHggMTVweCAwcHggNHB4O1xyXG59XHJcbi5uZXdzaWRlYXJlYSAgaW9uLWl0ZW1cclxue1xyXG53aWR0aDo1MCU7XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuLnNlbGVjdC10ZXh0IGJ1dHRvblxyXG57cGFkZGluZzoxcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW4taXRlbSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDoxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6MTVweDtcclxuXHRcclxuXHQgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHQtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG5cdCAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcblx0fVxyXG5cdFxyXG4ubmV3c2VsZWN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5tYXJnaW4tdG9wOjEwNHB4O1xyXG59XHJcblxyXG4ubmV3c2VsZWN0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuY29sb3I6IzI5MjAyMDtcclxubGluZS1oZWlnaHQ6MjFweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjhweDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3c2VsZWN0Lm5ld3NlbGVjdCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5jb2xvcjojMjkyMDIwO1xyXG5mb250LWZhbWlseTogJ01hbmdhbCc7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbnRleHQtYWxpZ246bGVmdDtcclxubWFyZ2luLXRvcDowO1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbi5uZXdzZXJjaGxpc3Rcclxue1xyXG5oZWlnaHQ6MjAwcHg7XHJcbndpZHRoOjFweCBzb2xpZCAjZGRkO1xyXG5vdmVyZmxvdzpzY3JvbGw7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MCAxMHB4O1xyXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZGRkO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5uZXdzZXJjaGxpc3QgaW9uLWl0ZW0gXHJcbntcclxubWFyZ2luLWJvdHRvbTowO1xyXG4tLW1pbi1oZWlnaHQ6IDM4cHg7XHJcbn1cclxuICBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXRcclxue1xyXG5wYWRkaW5nLWlubGluZS1zdGFydDowO1xyXG59XHJcbi5tYWluYXJlYSBpb24tc2VhcmNoYmFyXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuXHQtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0cGFkZGluZzowO1xyXG59XHJcblxyXG4ubWFpbmFyZWEgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWhcclxue1xyXG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbnBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5cdGhlaWdodDo0MnB4O1xyXG5cdCAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xyXG5cdFx0cGFkZGluZzowO1xyXG59XHJcbmlvbi1sYWJlbFxyXG57XHJcbmZsZXg6MDtcclxud2lkdGg6MTAwJTtcclxufVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46NzBweCBhdXRvIDA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MjBweCBhdXRvIDQwcHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpIGFuZCgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDIpXHJcblx0e1xyXG5cdC5tYWluYXJlYSBpbWdcclxuXHR7XHJcblx0ICAgIG1hcmdpbjogMjklIGF1dG8gMDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld3NlbGVjdHtcclxuXHRtYXJnaW4tdG9wOjcwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3QgcHtcclxuXHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aCA6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodCA6IDczNnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMzVweCAhaW1wb3J0YW50O1xyXG4gbWFyZ2luOiAzMiUgYXV0byAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIFxyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdFx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG5cclxuIG1hcmdpbjogNDAlIGF1dG8gMDtcclxuIH1cclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0ICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcblx0XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweDtcclxuIG1hcmdpbjogMjAlIGF1dG8gMDtcclxuIH1cclxuIFxyXG4gLm5ld3NlbGVjdHtcclxuIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbiAubmV3c2VsZWN0IHB7XHJcbiAgICAgbWFyZ2luLXRvcDogNjZweDtcclxuIH1cclxuXHR9XHJcblx0XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweDtcclxuIG1hcmdpbjogMTglIGF1dG8gMDtcclxuIH1cclxuIFxyXG4gLm5ld3NlbGVjdHtcclxuIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbiAubmV3c2VsZWN0IHB7XHJcbiAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuIH1cclxuXHR9XHJcblx0XHJcblx0XHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4O1xyXG4gbWFyZ2luOiAyMCUgYXV0byAwO1xyXG4gfVxyXG4gXHJcbiAubmV3c2VsZWN0e1xyXG4gbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuIC5uZXdzZWxlY3QgcHtcclxuICAgICBtYXJnaW4tdG9wOiA2NnB4O1xyXG4gfVxyXG4gfVxyXG4gIFxyXG5cclxuIiwiLm1haW5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjM1cHg7XG4gIG1hcmdpbjogMzUlIGF1dG8gMDtcbn1cblxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5ld3NpZGVhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5ld3NpZGVhcmVhIGlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDEgMSAwJTtcbn1cblxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1bc2xvdD1zdGFydF0ge1xuICBtYXJnaW46IDNweCAxNXB4IDBweCA0cHg7XG59XG5cbi5uZXdzaWRlYXJlYSBpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLml0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5uZXdzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwNHB4O1xufVxuXG4ubmV3c2VsZWN0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3c2VsZWN0Lm5ld3NlbGVjdCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIk1hbmdhbFwiO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubmV3c2VyY2hsaXN0IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDFweCBzb2xpZCAjZGRkO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLm5ld3NlcmNobGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC0tbWluLWhlaWdodDogMzhweDtcbn1cblxuaW9uLXNlYXJjaGJhciAuc2VhcmNoYmFyLWlucHV0IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbi5tYWluYXJlYSBpb24tc2VhcmNoYmFyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbmFyZWEgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA3MHB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiAyOSUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDMyJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDQwJSBhdXRvIDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDE4JSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/country/country.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/country/country.page.ts ***!
    \*****************************************/

  /*! exports provided: CountryPage */

  /***/
  function srcAppCountryCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryPage", function () {
      return CountryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CountryPage = /*#__PURE__*/function () {
      function CountryPage(httpClient, route, sharedservice, translate, navController, toastctrl, router, platform) {
        var _this = this;

        _classCallCheck(this, CountryPage);

        this.httpClient = httpClient;
        this.route = route;
        this.sharedservice = sharedservice;
        this.translate = translate;
        this.navController = navController;
        this.toastctrl = toastctrl;
        this.router = router;
        this.platform = platform;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/common_controller/';
        this.apiUrl1 = 'http://101.53.143.7/~dataduck/safecity/api/user/';
        this.showCity = false;
        this.cityId = '';
        this.buttondisable = true;
        this.cityArray = [];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.hide_city = false;
        this.hide_city_search = false;
        this.hide_city_search_back = false;
        this.tempArr = [];
        this.route.queryParams.subscribe(function (params) {
          _this.langaugeId = params["id"];
          console.log("id", _this.langaugeId);
        }); //this.closeApp()
      }

      _createClass(CountryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getcountryList();
        }
      }, {
        key: "getCountry",
        value: function getCountry(ev) {
          var _this2 = this;

          if (localStorage.getItem('countryName') == ev.target.value.trim()) {} else {
            this.showCountrylist = true;
            var val = ev.target.value;
            this.countryList = this.tempArr;
            this.countrySelectedFlag = false;
            this.hide_city_search = false;
            this.hide_city_search_back = true;
            this.city = '';
            this.city_name = '';
            this.searchTerm = '';
            this.buttondisable = true;

            if (val && val.trim() !== '') {
              this.isItemAvailable = true;
              this.countryList = this.countryList.filter(function (item) {
                console.log(_this2.countryList);
                return item.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.isItemAvailable = false;
              this.countryList = this.tempArr;
            }
          }
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this3 = this;

          this.subscription = this.platform.backButton.subscribeWithPriority(10, function (processNextHandler) {
            if (new Date().getTime() - _this3.lastTimeBackPress < _this3.timePeriodToExit) {
              navigator['app'].exitApp();
            } else {
              _this3.searchTerm = '';
              _this3.countryName = '';
              _this3.cityList = [];
              var btn_msg = '';

              _this3.translate.get('press_back_again_to_exit').subscribe(function (res) {
                btn_msg = res;
              }); // var msg = "Press back again to exit."


              _this3.presentToast(btn_msg);

              _this3.lastTimeBackPress = new Date().getTime();
            }
          });
        }
      }, {
        key: "selectedLocation",
        value: function selectedLocation(item) {
          console.log(item);
          this.countryName = item.country_name;
          this.isItemAvailable = false;
          this.showCountrylist = false;
          this.countrySelectedFlag = true;
          localStorage.setItem('ngo_id', item.ngo_id); // this.hide_Country_search_back = true

          localStorage.setItem('countryName', this.countryName);
          this.countryId = item.country_id; // this.city_name = item.name
          // this.buttondisable = false;
          // localStorage.setItem('City_id', this.city)
          // localStorage.setItem('Country_id', this.countryId)
          // localStorage.setItem('City_name', this.city_name)
          // Reset items back to all of the items
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastctrl.create({
                      message: msg,
                      cssClass: 'tostclass',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCity",
        value: function getCity(e1) {
          var _this4 = this;

          if (this.searchTerm.length == 0) {
            this.hide_city_search = false;
            return false;
          }

          if (localStorage.getItem('City_name') == this.searchTerm) {
            this.hide_city_search = false;
          } else {
            this.buttondisable = true;

            if (this.searchTerm.length >= 2) {
              if (this.hide_city_search_back == true) {
                var data = new FormData();
                data.append('query', this.searchTerm);
                data.append('country_id', this.countryId);
                this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', data).subscribe(function (rdata) {
                  console.log(rdata);
                  _this4.hide_city_search = true;
                  _this4.hide_city_search_back = false;
                  _this4.cityList = rdata['data'];

                  if (_this4.cityList.length == 0) {
                    _this4.hide_city_search = false;
                  }
                }, function (error) {//  this.sharedservice.loaderDismiss()
                }, function () {// this.sharedservice.loaderDismiss()
                });
                console.log(this.searchTerm.length);
              } else if (this.searchTerm.length >= 2) {
                var _data = new FormData();

                _data.append('query', this.searchTerm);

                _data.append('country_id', this.countryId); //  this.sharedservice.presentLoadingDefault()


                this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', _data).subscribe(function (rdata) {
                  console.log(rdata);
                  _this4.hide_city_search = true;
                  _this4.hide_city_search_back = false;
                  _this4.cityList = rdata['data'];

                  if (_this4.cityList.length == 0) {
                    _this4.hide_city_search = false;
                  }
                }, function (error) {//  this.sharedservice.loaderDismiss()
                }, function () {// this.sharedservice.loaderDismiss()
                });
                console.log(this.searchTerm.length); // }
              } else {
                this.hide_city_search = false;
              }
            }
          }
        }
      }, {
        key: "selectedcity",
        value: function selectedcity(item) {
          console.log(item);
          this.searchTerm = item.name;
          this.hide_city_search = false;
          this.hide_city_search_back = true;
          this.city = item.id;
          this.city_name = item.name;
          this.buttondisable = false; // localStorage.setItem('ngo_id',item.ngo_id)

          localStorage.setItem('City_id', this.city);
          localStorage.setItem('Country_id', this.countryId);
          localStorage.setItem('City_name', this.city_name);
          localStorage.setItem('city_latitude', item.latitude);
          localStorage.setItem('city_longitude', item.longitude);
          localStorage.setItem('countryName', this.countryName);
        } // getCity(e)
        // {
        //     this.cityId = e.detail.value
        //     console.log(this.cityId)
        //     this.cityArray=this.cityId.split(',')
        //     console.log(this.cityArray)
        //     localStorage.setItem('City_id',this.cityArray[0])
        //     localStorage.setItem('City_name',this.cityArray[1])
        //     if(this.countryId != "" && this.cityArray[0] != "")
        //     {
        //       this.buttondisable = false;
        //     }
        //     else 
        //     {
        //       this.buttondisable = true;
        //     }
        // }

      }, {
        key: "getCityByCountry",
        value: function getCityByCountry() {
          var _this5 = this;

          var data = new FormData();
          data.append('security_key', 'b0e886281185cfc68a2c119f04c5b7b105f632dd');
          data.append('country_id', this.countryId);
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('user/getCities', data).subscribe(function (rdata) {
            console.log(rdata);
            _this5.cityList = rdata.data;
          }, function (error) {
            _this5.sharedservice.loaderDismiss();
          }, function () {
            _this5.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl1 + 'getCities', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.cityList = rdata.data;
          //   }, error => {
          //   });
        } //********************************Getting Country List for select Country**************************

      }, {
        key: "getcountryList",
        value: function getcountryList() {
          var _this6 = this;

          var data = new FormData();
          data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this6.countryList = rdata.data;
            _this6.tempArr = _this6.countryList;
          }, function (error) {
            _this6.sharedservice.loaderDismiss();
          }, function () {
            _this6.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl + 'countryList', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.countryList = rdata.data;
          //   }, error => {
          //   });
        }
      }, {
        key: "organizationList",
        value: function organizationList() {
          var _this7 = this;

          var data = new FormData();
          data.append('security_key', 'b571bb06f3e196ce95f08c70324b9dd5b2d334c5');
          data.append('country_id', this.countryId);
          data.append('city_id', localStorage.getItem('City_id'));
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('user/getOrganisations', data).subscribe(function (rdata) {
            console.log(rdata);
            _this7.orgzationList = rdata.data;
            _this7.status = rdata.status;

            if (_this7.status == false) {
              localStorage.setItem('Client_id', '1'); // if(localStorage.getItem('ngo_id') == '0')
              // {

              var navigationExtras = {
                queryParams: {
                  countryId: _this7.countryId,
                  cityId: localStorage.getItem('City_id')
                }
              };

              _this7.navController.navigateForward(["languageselection"], navigationExtras); // }
              // else
              // { 
              //   let navigationExtras: NavigationExtras = {
              //     queryParams: {
              //       countryId: this.countryId,
              //       cityId: localStorage.getItem('City_id'),
              //     }
              //   };
              //   this.navController.navigateForward([`ngopartner`], navigationExtras);
              // }

            } else {
              var _navigationExtras = {
                queryParams: {
                  countryId: _this7.countryId,
                  cityId: localStorage.getItem('City_id'),
                  orgdata: rdata
                }
              };

              _this7.navController.navigateForward(["organization"], _navigationExtras);
            }
          }, function (error) {
            _this7.sharedservice.loaderDismiss();
          }, function () {
            _this7.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl1 + 'getOrganisations', data)
          //   .subscribe((rdata: any) => {
          //     console.log(rdata);
          //     this.orgzationList = rdata.data;
          //     this.status = rdata.status
          //     if (this.status == false) {
          //       localStorage.setItem('Client_id','1')
          //       let navigationExtras: NavigationExtras = {
          //         queryParams: {
          //           countryId: this.countryId,
          //           cityId: this.cityArray[0],
          //         }
          //       };
          //       this.navController.navigateForward([`languageselection`], navigationExtras);
          //     }
          //     else {
          //       let navigationExtras: NavigationExtras = {
          //         queryParams: {
          //           countryId: this.countryId,
          //           cityId: this.cityArray[0],
          //           orgdata:rdata
          //         }
          //       };
          //       this.navController.navigateForward([`organization`], navigationExtras);
          //     }
          //   }, error => {
          //   });
        } //********************************Pass id of country and language to onboarding One Page**************************

      }, {
        key: "goToNext",
        value: function goToNext() {
          console.log("country id", this.countryId);
          console.log("cityid", localStorage.getItem('City_id'));
          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = localStorage.getItem('City_name') + ' , ' + localStorage.getItem('countryName');
          geocoder.geocode({
            'address': address
          }, function (results) {
            console.log(results);

            if (results[0].formatted_address) {
              console.log(results);
              var lat = JSON.stringify(results[0].geometry.location.lat());
              var longi = JSON.stringify(results[0].geometry.location.lng());
              localStorage.setItem('map_lat', lat);
              localStorage.setItem('map_longi', longi);
            }
          });
          this.organizationList();
        }
      }]);

      return CountryPage;
    }();

    CountryPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    CountryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-country',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/country/country.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./country.page.scss */
      "./src/app/country/country.page.scss"))["default"]]
    })], CountryPage);
    /***/
  }
}]);
//# sourceMappingURL=country-country-module-es5.js.map
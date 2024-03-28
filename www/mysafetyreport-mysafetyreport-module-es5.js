function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysafetyreport-mysafetyreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafetyreport/mysafetyreport.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mysafetyreport/mysafetyreport.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMysafetyreportMysafetyreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/viewsafety' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <div class=\"sidearea\" slot=\"end\">\n<h5 (click)=\"edit()\"> {{'map_edit_option' | translate }}</h5> \n<h5 (click)=\"presentAlertRadio()\"> {{'delete' | translate}}</h5> \n</div>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"mainsafety\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<ion-row >\n      <ion-col size=\"12\">\n<h4>{{title}}</h4>\n </ion-col>\n   \n   </ion-row>\n <ion-row >\n      <ion-col size=\"12\">\n <div class=\"newcalendarin\">\n<img src=\"assets/images/icons/calendar.svg\"/>\n <p>{{getDaysAgo}} {{time2}}</p></div>\n <div class=\"newcalendarin\">\n       <img src=\"assets/images/icons/location.svg\"/>\n       <p>{{location}}</p>\n\t   </div>\n<p>{{disc}}</p>\n</ion-col>\n   </ion-row>\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/mysafetyreport/mysafetyreport-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/mysafetyreport/mysafetyreport-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MysafetyreportPageRoutingModule */

  /***/
  function srcAppMysafetyreportMysafetyreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysafetyreportPageRoutingModule", function () {
      return MysafetyreportPageRoutingModule;
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


    var _mysafetyreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mysafetyreport.page */
    "./src/app/mysafetyreport/mysafetyreport.page.ts");

    var routes = [{
      path: '',
      component: _mysafetyreport_page__WEBPACK_IMPORTED_MODULE_3__["MysafetyreportPage"]
    }];

    var MysafetyreportPageRoutingModule = /*#__PURE__*/_createClass(function MysafetyreportPageRoutingModule() {
      _classCallCheck(this, MysafetyreportPageRoutingModule);
    });

    MysafetyreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MysafetyreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/mysafetyreport/mysafetyreport.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/mysafetyreport/mysafetyreport.module.ts ***!
    \*********************************************************/

  /*! exports provided: MysafetyreportPageModule */

  /***/
  function srcAppMysafetyreportMysafetyreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysafetyreportPageModule", function () {
      return MysafetyreportPageModule;
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


    var _mysafetyreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mysafetyreport-routing.module */
    "./src/app/mysafetyreport/mysafetyreport-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _mysafetyreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mysafetyreport.page */
    "./src/app/mysafetyreport/mysafetyreport.page.ts");

    var MysafetyreportPageModule = /*#__PURE__*/_createClass(function MysafetyreportPageModule() {
      _classCallCheck(this, MysafetyreportPageModule);
    });

    MysafetyreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mysafetyreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["MysafetyreportPageRoutingModule"]],
      declarations: [_mysafetyreport_page__WEBPACK_IMPORTED_MODULE_7__["MysafetyreportPage"]]
    })], MysafetyreportPageModule);
    /***/
  },

  /***/
  "./src/app/mysafetyreport/mysafetyreport.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/mysafetyreport/mysafetyreport.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMysafetyreportMysafetyreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-alert [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios {\n  border-color: #2ED35A;\n}\n\n.my-custom-class inputs {\n  border-bottom: 1px solid #ddd;\n}\n\n.alert-radio-group.sc-ion-alert-ios {\n  border-top: none;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainsafety {\n  width: 100%;\n  height: auto;\n  margin-top: 40px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 4px;\n  margin-top: 0;\n}\n\n.newcalendarin {\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 12px;\n}\n\n.newcalendarin p {\n  font-size: 14px;\n  margin-top: 0px;\n  margin-bottom: 0;\n}\n\n.newcalendarin img {\n  width: 17px;\n  margin-right: 6px;\n}\n\n.sidearea {\n  width: 100%;\n  height: auto;\n  float: right;\n  text-align: right;\n  margin-right: 12px;\n}\n\n.sidearea h5 {\n  width: auto;\n  height: auto;\n  color: #592D8D;\n  margin-top: 8px;\n  font-size: 15px;\n  font-weight: 400;\n  text-align: right;\n  padding-left: 20px;\n  display: inline-block;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9teXNhZmV0eXJlcG9ydC9teXNhZmV0eXJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL215c2FmZXR5cmVwb3J0L215c2FmZXR5cmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFFQSxxQkFBQTtBQ0hBOztBRE1BO0VBRUEsNkJBQUE7QUNKQTs7QURPQTtFQUdBLGdCQUFBO0FDTkE7O0FEU0E7RUFJQSw4Q0FBQTtBQ1BBOztBRFdBO0VBRUEsdUJBQUE7QUNUQTs7QURZQTtFQUVBLHFCQUFBO0FDVkE7O0FEWUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1ZKOztBRFlBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNWQTs7QURjQTtFQUNBLGNBQUE7QUNYQTs7QURjQTtFQUNBLGdCQUFBO0FDWEE7O0FEY0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDWko7O0FEY0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDWko7O0FEY0M7RUFFRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDWkE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDWkE7O0FEZUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2JBOztBRGdCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2RBOztBRGlCQTtFQUVDLFdBQUE7RUFDRCxvQkFBQTtFQUNBLG1CQUFBO0FDZkE7O0FEaUJDO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2REOztBRG1CQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ2pCRDs7QURxQkM7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbkJEOztBRHFCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNsQkQ7O0FEcUJDO0VBRUMsZUFBQTtFQUNFLGtCQUFBO0FDbkJKOztBRHdCQztFQUlBO0lBRUUsa0JBQUE7SUFDQyxtQkFBQTtFQ3pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXlzYWZldHlyZXBvcnQvbXlzYWZldHlyZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1hbGVydCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3Ncclxue1xyXG5ib3JkZXItY29sb3I6IzJFRDM1QTtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyBpbnB1dHNcclxue1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcblxyXG5ib3JkZXItdG9wOm5vbmU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubWFpbnNhZmV0eVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuLm5ld3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojMTgxNzE5O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjI1cHg7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbm1hcmdpbi1ib3R0b206IDRweDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3Y2FsZW5kYXJpblxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmlubGluZS1mbGV4O1xyXG5tYXJnaW4tYm90dG9tOjEycHg7XHJcblx0fVxyXG5cdC5uZXdjYWxlbmRhcmluIHB7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0bWFyZ2luLXRvcDowcHg7XHJcblx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHQubmV3Y2FsZW5kYXJpbiBpbWdcclxuXHR7XHJcblx0d2lkdGg6MTdweDtcclxuXHRtYXJnaW4tcmlnaHQ6NnB4O1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQuc2lkZWFyZWFcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6YXV0bztcclxuXHRmbG9hdDpyaWdodDtcclxuXHR0ZXh0LWFsaWduOnJpZ2h0O1xyXG5cdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHR9XHJcbi5zaWRlYXJlYSBoNXtcclxuXHR3aWR0aDphdXRvO1xyXG5cdGhlaWdodDphdXRvO1xyXG5cdGNvbG9yOiM1OTJEOEQ7XHJcblx0bWFyZ2luLXRvcDo4cHg7XHJcblx0Zm9udC1zaXplOjE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdHRleHQtYWxpZ246cmlnaHQ7XHJcblx0cGFkZGluZy1sZWZ0OjIwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdH1cclxuXHRcclxuXHRpb24tbGFiZWxcclxuXHR7XHJcblx0IG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuXHR9XHJcblx0XHJcblx0XHJcblx0QG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbiBpb24tdGl0bGVcclxue1xyXG4gICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG59IFxyXG59XHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1hbGVydCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItY29sb3I6ICMyRUQzNUE7XG59XG5cbi5teS1jdXN0b20tY2xhc3MgaW5wdXRzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5hbGVydC1yYWRpby1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5zYWZldHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzE4MTcxOTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ld3RleHQgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdjYWxlbmRhcmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubmV3Y2FsZW5kYXJpbiBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uZXdjYWxlbmRhcmluIGltZyB7XG4gIHdpZHRoOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnNpZGVhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uc2lkZWFyZWEgaDUge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mysafetyreport/mysafetyreport.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/mysafetyreport/mysafetyreport.page.ts ***!
    \*******************************************************/

  /*! exports provided: MysafetyreportPage */

  /***/
  function srcAppMysafetyreportMysafetyreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysafetyreportPage", function () {
      return MysafetyreportPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var MysafetyreportPage = /*#__PURE__*/function () {
      function MysafetyreportPage(route, translate, sharedservice, httpClient, navController, router, alertController) {
        var _this = this;

        _classCallCheck(this, MysafetyreportPage);

        this.route = route;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/safety-tip/';
        this.route.queryParams.subscribe(function (params) {
          _this.safety_tip_id = params['safety_tip_id'];
          _this.pagename = params['pagename'];
          console.log("safety_id", _this.safety_tip_id);
          console.log("pagename", _this.pagename);

          if (_this.pagename == 'safetyTip') {
            localStorage.setItem("editSafety_id", _this.safety_tip_id);
            console.log("safety_id", _this.safety_tip_id);
          }

          _this.safetyTipDisc();
        });
      }

      _createClass(MysafetyreportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "edit",
        value: function edit() {
          var navigationExtras = {
            queryParams: {
              location: this.safetyReport.data.exact_location,
              city: this.safetyReport.data.city,
              state: this.safetyReport.data.state,
              country: this.safetyReport.data.country,
              landmark: this.safetyReport.data.landmark,
              lat: this.safetyReport.data.latitude,
              "long": this.safetyReport.data.longitude,
              safety_title: this.safetyReport.data.safety_tip_title,
              safety_desc: this.safetyReport.data.safety_tip_desc,
              safety_tip_id: this.safety_tip_id
            }
          };
          this.navController.navigateForward(["/editsafetytip"], navigationExtras);
        }
      }, {
        key: "presentAlertRadio",
        value: function presentAlertRadio() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var message, cancel, button_done, del_From_Phone, del_from_safecity, alert;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.translate.get('del_From_Phone').subscribe(function (res) {
                      del_From_Phone = res;
                    });
                    this.translate.get('del_from_safecity').subscribe(function (res) {
                      del_from_safecity = res;
                    });
                    this.translate.get('select_one').subscribe(function (res) {
                      message = res;
                    });
                    this.translate.get('button_done').subscribe(function (res) {
                      button_done = res;
                    });
                    this.translate.get('cancel').subscribe(function (res) {
                      cancel = res;
                    });
                    _context.next = 7;
                    return this.alertController.create({
                      cssClass: 'newclass',
                      header: message,
                      mode: 'ios',
                      inputs: [{
                        name: del_From_Phone,
                        type: 'radio',
                        label: del_From_Phone,
                        value: 'value1'
                      }, {
                        name: del_from_safecity,
                        type: 'radio',
                        label: del_from_safecity,
                        value: 'value2'
                      }],
                      buttons: [{
                        text: cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: button_done,
                        handler: function handler(alertData) {
                          console.log('Confirm Ok', alertData);

                          if (alertData == 'value1') {
                            _this2.type = 'mobile';
                          } else {
                            _this2.type = 'web';
                          }

                          _this2.deleteSafetyTip();
                        }
                      }]
                    });

                  case 7:
                    alert = _context.sent;
                    _context.next = 10;
                    return alert.present();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteSafetyTip",
        value: function deleteSafetyTip() {
          var _this3 = this;

          //   user_id:0
          // safety_tip_id:3
          // delete_from:mobile (web/mobile)
          var userId = localStorage.getItem('userId');
          var data = new FormData();
          data.append('user_id', userId);
          data.append('safety_tip_id', this.safety_tip_id);
          data.append('delete_from', this.type);
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('safety-tip/delete', data).subscribe(function (rdata) {
            if (rdata.status == true) {
              _this3.navController.navigateRoot('/mysafety');
            }

            console.log(rdata);
          }, function (error) {
            _this3.sharedservice.loaderDismiss();
          }, function () {
            _this3.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl+'delete',data)
          //   .subscribe((rdata: any) => {
          //     if(rdata.message == 'Safety Tip deleted successfully')
          //     {
          //       this.navController.navigateRoot('/mysafety')
          //     }
          //     console.log(rdata);
          //     }, error => {
          //   });
        }
      }, {
        key: "safetyTipDisc",
        value: function safetyTipDisc() {
          var _this4 = this;

          var userId = localStorage.getItem('userId');
          var lanId = localStorage.getItem('Lang_id');
          this.safety_id = localStorage.getItem('editSafety_id');
          console.log(this.safety_id);
          var data = new FormData();
          data.append('lang_id', lanId);
          data.append('safety_tip_id', this.safety_id);
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('safety-tip/details', data).subscribe(function (rdata) {
            _this4.safetyReport = rdata;
            _this4.title = _this4.safetyReport.data.safety_tip_title;
            _this4.disc = _this4.safetyReport.data.safety_tip_desc;
            _this4.location = _this4.safetyReport.data.location;
            var safety_tip_added_date = _this4.safetyReport.data.added_date != null ? _this4.safetyReport.data.added_date : "";

            var dayBetween = _this4.days_between(safety_tip_added_date);

            var time1 = _this4.safetyReport.data.added_date.substr(11, 19); // console.log("time", time1)


            _this4.time2 = _this4.timeConvert(time1);
            _this4.getDaysAgo = dayBetween > 7 ? _this4.ChangeDateFormat(safety_tip_added_date, 1) : dayBetween == 0 ? 'Today' : dayBetween == 1 ? dayBetween + " day ago" : dayBetween + " days ago";
          }, function (error) {
            _this4.sharedservice.loaderDismiss();
          }, function () {
            _this4.sharedservice.loaderDismiss();
          }); // this.httpClient.post(this.apiUrl +'details',data)
          //   .subscribe((rdata: any) => {
          //     this.safetyReport = rdata
          //     this.title = this.safetyReport.data.safety_tip_title
          //     this.disc = this.safetyReport.data.safety_tip_desc
          //     this.location = this.safetyReport.data.location
          //     var safety_tip_added_date = this.safetyReport.data.added_date != null ? this.safetyReport.data.added_date : "";
          //     var dayBetween = this.days_between(safety_tip_added_date);
          //     var time1 = this.safetyReport.data.added_date.substr(11,19);
          //     // console.log("time", time1)
          //     this.time2 = this.timeConvert(time1)
          //     this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(safety_tip_added_date,1) : (dayBetween==0) ? 'Today' : (dayBetween==1) ? dayBetween+" day ago" : dayBetween+" days ago");
          //    }, error => {
          //   });
        }
      }, {
        key: "days_between",
        value: function days_between(date) {
          // The number of milliseconds in one day
          var date1;
          date1 = new Date(date.replace(/ /g, "T"));
          var todays_date;
          todays_date = new Date();
          var ONE_DAY = 1000 * 60 * 60 * 24;
          var differenceMs = Math.abs(todays_date - date1);
          var daydiff = Math.round(differenceMs / ONE_DAY);
          return daydiff;
        }
      }, {
        key: "timeConvert",
        value: function timeConvert(time) {
          // console.log("Time in convert ", time)
          // Check correct time format and split into components
          time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) {
            // If time format correct
            time = time.slice(1); // Remove full string match value

            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM

            time[0] = +time[0] % 12 || 12; // Adjust hours

            console.log("time1", time[0]);
            console.log("time", time);
            var time_array = [];
            time_array.push(time[0]);
            time_array.push(time[1]);
            time_array.push(time[2]);
            time_array.push(time[5]);
          }

          return time_array.join(''); // return adjusted time or original string
        }
      }, {
        key: "ChangeDateFormat",
        value: function ChangeDateFormat(date, val) {
          var dayDate = new Date(date);
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = monthNames[dayDate.getMonth()];
          var monthVal = val == 1 ? monthName.substr(0, 3) : monthName;
          var getDate = dayDate.getDate();
          var getYear = dayDate.getFullYear();
          var format_date = getDate + " " + monthVal + " " + getYear;
          return format_date;
        }
      }]);

      return MysafetyreportPage;
    }();

    MysafetyreportPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    MysafetyreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mysafetyreport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mysafetyreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafetyreport/mysafetyreport.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mysafetyreport.page.scss */
      "./src/app/mysafetyreport/mysafetyreport.page.scss"))["default"]]
    })], MysafetyreportPage);
    /***/
  }
}]);
//# sourceMappingURL=mysafetyreport-mysafetyreport-module-es5.js.map
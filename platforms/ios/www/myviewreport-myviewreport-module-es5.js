function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myviewreport-myviewreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myviewreport/myviewreport.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myviewreport/myviewreport.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyviewreportMyviewreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n     <ion-toolbar>\n          <ion-buttons slot=\"start\">\n               <ion-back-button  icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n          </ion-buttons>\n\n          <div class=\"sidearea\" slot=\"end\">\n               <h5 (click)=\"edit()\"> {{'map_edit_option' | translate}}</h5>\n               <h5 (click)=\"presentAlertRadio()\"> {{'delete' | translate}}</h5>\n          </div>\n     </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <div class=\"mainareaview\" *ngFor=\"let item of report_data\">\n\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newview\">\n                         <ion-row>\n                              <ion-col size=\"12\">\n                                   <h4>{{item.incidents_categories_show}}</h4>\n                              </ion-col>\n\n                         </ion-row>\n                         <ion-row>\n                              <ion-col size=\"12\">\n                                   <h3>{{item.person_age_show}} {{item.person_gender_show}} </h3>\n                                   <p>{{item.incident_desc_show}}</p><br>\n                                   <p *ngIf=\"item.perpetrator_info_show\">{{item.perpetrator_info_show}}</p><br *ngIf=\"item.perpetrator_info_show\">\n                                   <p *ngIf=\"item.additional_info_show\">{{item.additional_info_show}}</p>\n                                   <h5>{{item.attack_reason_show}}</h5>\n                                   <ion-item *ngIf=\"item.reported_to_police_show\">\n                                        <ion-thumbnail slot=\"start\">\n                                             <img src=\"assets/images/icons/policereport.svg\" />\n                                        </ion-thumbnail>\n                                        <ion-label>\n                                             {{item.reported_to_police_show}}\n                                        </ion-label>\n                                   </ion-item>\n                                   <ion-item *ngIf=\"item.medical_help_show\">\n                                        <ion-thumbnail slot=\"start\">\n                                             <img src=\"assets/images/icons/medical.svg\" />\n                                        </ion-thumbnail>\n                                        <ion-label>\n                                             {{item.medical_help_show}}\n                                        </ion-label>\n                                   </ion-item>\n                                   <ion-item *ngIf=\"item.incidents_area_show\">\n                                        <ion-thumbnail slot=\"start\">\n                                             <img src=\"assets/images/icons/location.svg\" />\n                                        </ion-thumbnail>\n                                        <ion-label>\n                                             {{item.incidents_area_show}}, {{item.incidents_city_show}}\n                                        </ion-label>\n                                   </ion-item>\n                                   <ion-item *ngIf=\"item.incidents_date_est_show\">\n                                        <ion-thumbnail slot=\"start\">\n                                             <img src=\"assets/images/icons/calendar.svg\" />\n                                        </ion-thumbnail>\n                                        <ion-label>\n                                             {{item.incidents_date_est_show}} {{item.converttolongdate_show}}\n                                        </ion-label>\n                                   </ion-item>\n                                   <ion-item *ngIf=\"item.incidents_time_est_show\">\n                                        <ion-thumbnail slot=\"start\">\n                                             <img src=\"assets/images/icons/time.svg\" />\n                                        </ion-thumbnail>\n                                        <ion-label>\n                                           {{item.incidents_time_est_show}}  {{item.timeconvert_show}}\n                                        </ion-label>\n                                   </ion-item>\n                              </ion-col>\n                         </ion-row>\n                    </div>\n               </ion-col>\n          </ion-row>\n\n     </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/myviewreport/myviewreport-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/myviewreport/myviewreport-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: MyviewreportPageRoutingModule */

  /***/
  function srcAppMyviewreportMyviewreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyviewreportPageRoutingModule", function () {
      return MyviewreportPageRoutingModule;
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


    var _myviewreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myviewreport.page */
    "./src/app/myviewreport/myviewreport.page.ts");

    var routes = [{
      path: '',
      component: _myviewreport_page__WEBPACK_IMPORTED_MODULE_3__["MyviewreportPage"]
    }];

    var MyviewreportPageRoutingModule = /*#__PURE__*/_createClass(function MyviewreportPageRoutingModule() {
      _classCallCheck(this, MyviewreportPageRoutingModule);
    });

    MyviewreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyviewreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myviewreport/myviewreport.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/myviewreport/myviewreport.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyviewreportPageModule */

  /***/
  function srcAppMyviewreportMyviewreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyviewreportPageModule", function () {
      return MyviewreportPageModule;
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


    var _myviewreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./myviewreport-routing.module */
    "./src/app/myviewreport/myviewreport-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _myviewreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./myviewreport.page */
    "./src/app/myviewreport/myviewreport.page.ts");

    var MyviewreportPageModule = /*#__PURE__*/_createClass(function MyviewreportPageModule() {
      _classCallCheck(this, MyviewreportPageModule);
    });

    MyviewreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _myviewreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyviewreportPageRoutingModule"]],
      declarations: [_myviewreport_page__WEBPACK_IMPORTED_MODULE_7__["MyviewreportPage"]]
    })], MyviewreportPageModule);
    /***/
  },

  /***/
  "./src/app/myviewreport/myviewreport.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/myviewreport/myviewreport.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyviewreportMyviewreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareaview {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 45px;\n  margin-bottom: 65px;\n}\n\n.newview {\n  width: 100%;\n  height: auto;\n  padding: 0 16px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newview p {\n  width: 100%;\n  height: auto;\n  float: left;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 3px;\n  margin-bottom: 11px;\n}\n\n.newview h3 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 16px;\n  margin-bottom: 15px;\n  margin-top: 0px;\n}\n\n.newview h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  margin-bottom: 3px;\n  margin-top: 0;\n  color: #592D8D;\n}\n\n.newview h5 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  display: inline-block;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\nion-card {\n  padding: 20px 0px 40px 0;\n  margin: 0 15px;\n}\n\n.mainareaview ion-item {\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --min-height: 41px;\n  font-size: 14px;\n  border: none;\n  margin-bottom: 5px;\n}\n\nion-thumbnail {\n  width: 20px;\n  height: 20px;\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.sidearea {\n  width: 100%;\n  height: auto;\n  float: right;\n  text-align: right;\n  margin-right: 12px;\n}\n\n.sidearea h5 {\n  width: auto;\n  height: auto;\n  color: #592D8D;\n  margin-top: 8px;\n  font-size: 15px;\n  font-weight: 400;\n  text-align: right;\n  padding-left: 20px;\n  display: inline-block;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.alert-button-inner.sc-ion-alert-ios {\n  border-bottom: 1px solid #ddd;\n}\n\n.alert-button-inner {\n  border-bottom: 1px solid #ddd;\n}\n\n.my-custom-class ion-radio {\n  border-bottom: 1px solid #ddd;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9teXZpZXdyZXBvcnQvbXl2aWV3cmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXl2aWV3cmVwb3J0L215dmlld3JlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBSUEsOENBQUE7QUNIQTs7QURPQTtFQUVBLHVCQUFBO0FDTEE7O0FEUUE7RUFFQSxxQkFBQTtBQ05BOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEVUE7RUFDQSxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1JBOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1JBOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNWQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ1ZBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDVkE7O0FEWUE7RUFFQyxXQUFBO0VBQ0Qsb0JBQUE7QUNWQTs7QURZQztFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNURDs7QURZQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ1ZEOztBRGFDO0VBRUEsd0JBQUE7RUFDQSxjQUFBO0FDWEQ7O0FEY0M7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDWkY7O0FEZUM7RUFFQSxXQUFBO0VBQ0csWUFBQTtFQUNILHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiRDs7QURnQkM7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZEQ7O0FEZ0JDO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ2JEOztBRGdCQztFQUVDLGVBQUE7RUFDRSxrQkFBQTtBQ2RKOztBRGtCQztFQUVBLDZCQUFBO0FDaEJEOztBRG1CQztFQUVBLDZCQUFBO0FDakJEOztBRG9CQztFQUVBLDZCQUFBO0FDbEJEOztBRHFCQztFQUlBO0lBRUUsa0JBQUE7SUFDQyxtQkFBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXl2aWV3cmVwb3J0L215dmlld3JlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5tYWluYXJlYXZpZXdcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLXRvcDo0NXB4O1xyXG5tYXJnaW4tYm90dG9tOjY1cHg7XHJcbn1cclxuLm5ld3ZpZXdcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDE2cHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dmlldyBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojMTgxNzE5O1xyXG5tYXJnaW4tdG9wOjNweDtcclxubWFyZ2luLWJvdHRvbToxMXB4O1xyXG59XHJcblxyXG4ubmV3dmlldyBoM1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5tYXJnaW4tdG9wOjBweDtcclxufVxyXG4ubmV3dmlldyBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToyNXB4O1xyXG5tYXJnaW4tYm90dG9tOjNweDtcclxubWFyZ2luLXRvcDowO1xyXG5jb2xvcjojNTkyRDhEO1xyXG59XHJcbi5uZXd2aWV3IGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjE0cHg7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5uZXdjYWxlbmRhclxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmlubGluZS1mbGV4O1xyXG5cdH1cclxuXHQubmV3Y2FsZW5kYXIgcHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRtYXJnaW4tYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYWxlbmRhciBpbWdcclxuXHR7XHJcblx0d2lkdGg6MTdweDtcclxuXHRtYXJnaW4tcmlnaHQ6MnB4O1xyXG5cdH1cclxuXHRcclxuXHRpb24tY2FyZFxyXG5cdHtcclxuXHRwYWRkaW5nOjIwcHggMHB4IDQwcHggMDtcclxuXHRtYXJnaW46MCAxNXB4O1xyXG5cdH1cclxuXHRcclxuXHQubWFpbmFyZWF2aWV3IGlvbi1pdGVtXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG5cdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0tbWluLWhlaWdodDogNDFweDtcclxuXHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHR9XHJcblx0XHJcblx0aW9uLXRodW1ibmFpbFxyXG5cdHtcclxuXHR3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuXHRtYXJnaW4taW5saW5lLWVuZDogOHB4O1xyXG5cdG1hcmdpbi10b3A6MnB4O1xyXG5cdG1hcmdpbi1ib3R0b206MnB4O1xyXG5cdH1cclxuXHRcclxuXHQuc2lkZWFyZWFcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6YXV0bztcclxuXHRmbG9hdDpyaWdodDtcclxuXHR0ZXh0LWFsaWduOnJpZ2h0O1xyXG5cdG1hcmdpbi1yaWdodDoxMnB4O1xyXG5cdH1cclxuXHQuc2lkZWFyZWEgaDV7XHJcblx0d2lkdGg6YXV0bztcclxuXHRoZWlnaHQ6YXV0bztcclxuXHRjb2xvcjojNTkyRDhEO1xyXG5cdG1hcmdpbi10b3A6OHB4O1xyXG5cdGZvbnQtc2l6ZToxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHR0ZXh0LWFsaWduOnJpZ2h0O1xyXG5cdHBhZGRpbmctbGVmdDoyMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR9XHJcblx0XHJcblx0aW9uLWxhYmVsXHJcblx0e1xyXG5cdCBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcblx0fVxyXG5cdFxyXG5cdC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc1xyXG5cdHtcclxuXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG5cdH1cclxuXHRcclxuXHQuYWxlcnQtYnV0dG9uLWlubmVyXHJcblx0e1xyXG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcblx0fVxyXG5cdFxyXG5cdC5teS1jdXN0b20tY2xhc3MgaW9uLXJhZGlvXHJcblx0e1xyXG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gaW9uLXRpdGxlXHJcbntcclxuICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxufSBcclxufVxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmFyZWF2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG5cbi5uZXd2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3ZpZXcgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzE4MTcxOTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG4ubmV3dmlldyBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubmV3dmlldyBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzU5MkQ4RDtcbn1cblxuLm5ld3ZpZXcgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2NhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3Y2FsZW5kYXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3Y2FsZW5kYXIgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDQwcHggMDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5tYWluYXJlYXZpZXcgaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLW1pbi1oZWlnaHQ6IDQxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLnNpZGVhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uc2lkZWFyZWEgaDUge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uYWxlcnQtYnV0dG9uLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5teS1jdXN0b20tY2xhc3MgaW9uLXJhZGlvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/myviewreport/myviewreport.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/myviewreport/myviewreport.page.ts ***!
    \***************************************************/

  /*! exports provided: MyviewreportPage */

  /***/
  function srcAppMyviewreportMyviewreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyviewreportPage", function () {
      return MyviewreportPage;
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

    var MyviewreportPage = /*#__PURE__*/function () {
      function MyviewreportPage(navController, translate, sharedservice, httpClient, route, router, alertController) {
        var _this = this;

        _classCallCheck(this, MyviewreportPage);

        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.report_data = [];
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            console.log(_this.router.getCurrentNavigation().extras.state);

            _this.report_data.push(_this.router.getCurrentNavigation().extras.state.data);

            _this.selected_inc_id = _this.report_data[0].id;
            console.log(_this.report_data);
          }
        });
      }

      _createClass(MyviewreportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
                        value: 'value1',
                        checked: true
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
                          if (alertData == 'value1') {
                            _this2.type = 'mobile';
                          } else {
                            _this2.type = 'web';
                          }

                          _this2.deleteIncident();
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
        key: "deleteIncident",
        value: function deleteIncident() {
          var _this3 = this;

          //   user_id:0
          // safety_tip_id:3
          // delete_from:mobile (web/mobile)
          var userId = localStorage.getItem('userId');
          var data = new FormData();
          data.append('user_id', localStorage.getItem('userId'));
          data.append('incident_id', this.selected_inc_id);
          data.append('delete_from', this.type);
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('reported-incident/delete', data).subscribe(function (rdata) {
            console.log(rdata);

            if (rdata.status == true) {
              _this3.navController.navigateForward('/myreport');
            }
          }, function (error) {
            _this3.sharedservice.loaderDismiss();
          }, function () {
            _this3.sharedservice.loaderDismiss();
          }); // this.httpClient.post('http://101.53.143.7/~dataduck/safecity_webapp/api/reported-incident/delete',data)
          //   .subscribe((rdata: any) => {
          //     if(rdata.status == true)
          //     {
          //       this.navController.navigateForward('/myreport')
          //     }
          //     console.log(rdata);
          //     }, error => {
          //   });
        }
      }, {
        key: "edit",
        value: function edit() {
          var navigationExtras = {
            state: {
              data: this.report_data
            }
          };
          this.router.navigate(['/editreport'], navigationExtras); //this.navController.navigateForward(`/editreport`);
        }
      }]);

      return MyviewreportPage;
    }();

    MyviewreportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    MyviewreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myviewreport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./myviewreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myviewreport/myviewreport.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./myviewreport.page.scss */
      "./src/app/myviewreport/myviewreport.page.scss"))["default"]]
    })], MyviewreportPage);
    /***/
  }
}]);
//# sourceMappingURL=myviewreport-myviewreport-module-es5.js.map
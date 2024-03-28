function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["primaryform-primaryform-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/primaryform/primaryform.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/primaryform/primaryform.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrimaryformPrimaryformPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf=\"hide_question\" class=\"ion-no-border newheader\">\n  <div class=\"header-background\"></div>\n  <ion-toolbar class=\"newtoolbar\">\n    <ion-buttons slot=\"start\" icon=\"undefined\" text=\"\" (click)=\"back()\" class=\"backbutton\" id=\"dynamicBack\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-header *ngIf=\"hide_thankyou\" class=\"ion-no-border thankuheadinnn\" >\n <ion-toolbar class=\"newtoolbar\">\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"newbg\">\n\n  <div class=\"mainform\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"formarea questionaire\">\n          <form>\n\n            <ul class=\"progress-form\">\n\n              <div class=\"Step1\">\n                <!-- <a id=\"dynamicBack\" href=\"javascript:void(0);\" class=\"pull-left animated fadeInUp show_one\"><img src=\"assets/images/icon-feather-arrow-left.svg\" class=\"img-fluid leftIcon\"></a> -->\n\n                <!-- Dynamic questions start -->\n                <li class=\"form-group animated fadeInUp activate selected singleColumn\" data-color=\"#7C6992\"\n                  data-percentage=\"100%\">\n                  <label class=\"newview\">\n                    <span class=\"newquestion\" id=\"question_span\">\n                      <!-- Placeholder for dynamic questions --></span><span class=\"error red\">*</span><br>\n                    <span class=\"themeColor newspan\" id=\"subtext_span\">\n                      <!-- Placeholder for dynamic sub text --></span>\n                  </label>\n\n                  <div id=\"options\">\n                    <!-- Placeholder for dynamic options -->\n                  </div>\n\n                  <span class=\"sharingForInfo\"></span>\n                </li>\n                <!-- Dynamic questions end -->\n\n              </div>\n\n            </ul>\n\n          </form>\n\n          <!-- <button  (click)=\"next()\" class=\"btn btn-primary nxt_btn animated nextPage fadeInUp pull-right mt-4\">Next <span class=\"glyphicon glyphicon-chevron-down\"></span></button>                 -->\n\n        </div> <!-- //questionaire -->   \n        \n        \n   <!-- thank you section start -->     \n  <div class=\"thankyou-section\" style=\"display:none\">\n\n    <div class=\"text mx-auto\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <h4 class=\"textColor dynamic-success-title\" id=\"dynamic-success-title\"></h4>\n          <div class=\"rightimg\">\n            <img src=\"assets/images/icons/thanku.png\" class=\"checkIcon\">\n          </div>\n\n          <div id=\"dynamic-success-content\" class=\"dynamic-success-content newcentertext\">\n          </div>\n\n          <div class=\"text-center mt-4 dynamic-success-link\">\n\n            <!-- YES, I\n              WANT TO HELP\n            NO, I WOULD LIKE TO EXIT</ion-button> -->\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n\n\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <div class=\"count float-right\" *ngIf=\"hide_question\">\n    <div class=\"progress\">\n      <ion-progress-bar class=\"progress-bar\" buffer=\"0\" style=\"width: 0%;\"></ion-progress-bar>\n    </div>\n    <h5 class=\"progress-text\"> </h5>\n\n  </div>\n\n\n\n  \n\n\n\n\n\n</ion-content>\n\n<div class=\"bottom\" *ngIf=\"hide_question\">\n  <ion-button id=\"dynamicNext\" expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"next()\" >\n    {{'next' | translate}}</ion-button>\n</div>\n<!-- \n<ion-content *ngIf=\"hide_thankyou\">\n\n\n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/primaryform/primaryform-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/primaryform/primaryform-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PrimaryformPageRoutingModule */

  /***/
  function srcAppPrimaryformPrimaryformRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimaryformPageRoutingModule", function () {
      return PrimaryformPageRoutingModule;
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


    var _primaryform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./primaryform.page */
    "./src/app/primaryform/primaryform.page.ts");

    var routes = [{
      path: '',
      component: _primaryform_page__WEBPACK_IMPORTED_MODULE_3__["PrimaryformPage"]
    }];

    var PrimaryformPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryformPageRoutingModule() {
      _classCallCheck(this, PrimaryformPageRoutingModule);
    });

    PrimaryformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrimaryformPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/primaryform/primaryform.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/primaryform/primaryform.module.ts ***!
    \***************************************************/

  /*! exports provided: PrimaryformPageModule */

  /***/
  function srcAppPrimaryformPrimaryformModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimaryformPageModule", function () {
      return PrimaryformPageModule;
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


    var _primaryform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./primaryform-routing.module */
    "./src/app/primaryform/primaryform-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _primaryform_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./primaryform.page */
    "./src/app/primaryform/primaryform.page.ts");

    var PrimaryformPageModule = /*#__PURE__*/_createClass(function PrimaryformPageModule() {
      _classCallCheck(this, PrimaryformPageModule);
    });

    PrimaryformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _primaryform_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrimaryformPageRoutingModule"]],
      declarations: [_primaryform_page__WEBPACK_IMPORTED_MODULE_7__["PrimaryformPage"]]
    })], PrimaryformPageModule);
    /***/
  },

  /***/
  "./src/app/primaryform/primaryform.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/primaryform/primaryform.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrimaryformPrimaryformPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.newheader {\n  box-shadow: none !important;\n}\n\n.secondthank {\n  text-align: center;\n}\n\n.newtoolbar {\n  --background: transparent !important;\n}\n\n.d-none {\n  display: none;\n}\n\n.topmargin {\n  margin-top: 0;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\n.thankuheadinnn {\n  box-shadow: none;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:62px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-md.thankuheadinnn::after {\n  background: transparent !important;\n}\n\n.form-group label {\n  box-shadow: none;\n  border-radius: 0;\n  font-size: 22px;\n  color: #292020;\n  font-weight: 400;\n  padding: 10px 0px;\n}\n\n.thankyou-section {\n  width: 100%;\n  padding: 20px;\n}\n\n.thankyou-section h4 {\n  margin: 0 auto 25px;\n  width: 100%;\n  font-size: 22px;\n  font-weight: 500;\n  font-weight: 500;\n  text-align: center;\n}\n\n.newcentertext {\n  width: 100%;\n  height: auto;\n  margin-bottom: 50px;\n  padding: 0 18px;\n}\n\n.rightimg img {\n  width: 70px;\n}\n\n.nobtn a {\n  color: #fff !important;\n  text-decoration: none;\n}\n\n.nobtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 95%;\n  font-weight: 500;\n  --box-shadow:none;\n  text-transform: uppercase;\n  margin: 0 auto 55px;\n  text-align: center;\n}\n\n.yesbtn a {\n  color: #592D8D !important;\n  text-decoration: none;\n}\n\n.yesbtn {\n  color: #592D8D !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 95%;\n  --box-shadow:none;\n  font-weight: 500;\n  text-transform: uppercase;\n  --border-width: 1px;\n  margin: 0 auto 20px;\n  text-align: center;\n}\n\n.newcentertext p {\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n.rightimg {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newrighticon {\n  width: 100%;\n  height: auto;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n\n.singleColumn .inputGroup {\n  width: 100%;\n}\n\n.inputGroup {\n  background-color: #fff;\n  display: block;\n  margin: 10px 0 0px;\n  position: relative;\n  border: 1px solid #E1D8EB;\n}\n\n.shareincidentform {\n  width: 100% !important;\n}\n\n.inputGroup label {\n  padding: 12px 30px;\n  width: 100%;\n  display: block;\n  text-align: left;\n  color: #3C454C;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  font-size: 16px !important;\n  transition: color 100ms ease-in;\n  overflow: hidden;\n  border-radius: 3px !important;\n}\n\n.label1 {\n  padding: 10px 12px 10px 20px !important;\n}\n\n.custom-control {\n  padding-left: 0px !important;\n}\n\n.progress-form .custom-radio-inside {\n  list-style: none;\n  -webkit-padding-start: 28px;\n          padding-inline-start: 28px;\n}\n\n.custom-control-input:checked ~ .label1::before {\n  color: #220E0E !important;\n  border-color: #E1D8EB;\n  background: #fff;\n}\n\n.inputGroup input:checked ~ label:after {\n  width: 25px;\n  height: 26px;\n  content: \"\";\n  background: url(/assets/images/icons/tick.svg);\n  background-repeat: no-repeat;\n  background-position: 5px 8px;\n  z-index: 2;\n  position: relative;\n  float: right;\n  margin-top: -5px;\n  background-size: 19px;\n}\n\n.inputGroup input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n\n.inputGroup input {\n  width: 32px;\n  height: 32px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  right: 30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n\n.mapouter {\n  min-height: 467px;\n  height: 60%;\n  position: relative;\n  width: 100%;\n  margin-bottom: 30px;\n  margin-top: 15px;\n}\n\n.md .mainform {\n  width: 100%;\n  height: auto;\n  margin-top: 50%;\n  margin-bottom: 210px;\n}\n\n.ios .mainform {\n  margin-top: 52%;\n  margin-bottom: 194px;\n}\n\n.progress-form {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.formarea {\n  width: 100%;\n  padding: 0 20px;\n}\n\n.newspan {\n  color: #5D5656;\n  font-size: 16px;\n  margin-top: 8px;\n  font-weight: 400;\n  float: left;\n}\n\n.newquestion {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 15px;\n}\n\n.newview {\n  width: 100%;\n  display: inline-block;\n}\n\n.form-group .inputBox, .input1 {\n  background-color: transparent !important;\n  border-bottom: 1px solid #623893 !important;\n  border-left: 0px !important;\n  border-right: 0px !important;\n  border-top: 0px !important;\n  height: auto !important;\n  padding: 15px 10px 10px !important;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  font-size: 16px !important;\n  color: #292020 !important;\n  outline: 0 !important;\n  width: 100%;\n}\n\n.newtime {\n  background-image: url(/assets/images/icons/time.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 8px;\n  background-position: 37%;\n}\n\n.form-group .inputBox {\n  padding: 15px 0 10px 0 !important;\n}\n\ninput:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.form-group input:focus {\n  outline: 0 !important;\n}\n\n.form-group input.inputBox:focus,\n.input1:focus,\n.input2:focus .form-group textarea:focus {\n  outline: 0 !important;\n  border-bottom: 2px solid #623893;\n  border-left: 0px;\n  border-right: 0px;\n  border-top: 0px;\n  box-shadow: none;\n}\n\ninput:active {\n  outline: 0 !important;\n}\n\n::focus {\n  outline: none !important;\n}\n\n.form-group .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.form-group .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.form-group ion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: none;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height: 41px;\n  --padding-start: 0;\n  --background:transparent;\n}\n\n.custom-checkbox {\n  display: block;\n  position: relative;\n  padding-left: 35px !important;\n  margin-bottom: 12px;\n  cursor: pointer;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  font-size: 16px !important;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  margin-top: 8px !important;\n}\n\n/* Hide the browser's default checkbox */\n\n.custom-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-size: 18px;\n}\n\n.newtextfour .sc-ion-label-ios-h {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.newtextfour .sc-ion-label-md-h {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.newtextfour h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.timenext {\n  width: 45%;\n  float: left;\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtextfour .newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-size: 18px;\n}\n\n.newtextfour ion-item {\n  --border-width: 0 0 0px 0 !important;\n  --inner-padding-end: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.newtextfourin ion-list-header ion-label {\n  margin-top: 0;\n  font-size: 16px;\n  color: #220E0E;\n  font-weight: 400;\n}\n\n/* On mouse-over, add a grey background color */\n\n.custom-checkbox:hover input ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.custom-checkbox input:checked ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.custom-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.custom-checkbox .checkmark:after {\n  left: 7px;\n  top: 2px;\n  width: 4px;\n  height: 9px;\n  border: solid #2ED35A;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.newtext ion-label {\n  margin-top: 10px;\n  margin-bottom: 11px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 40px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 55%;\n  margin-bottom: 150px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 0;\n  left: 0;\n  right: 0;\n  text-transform: uppercase;\n  margin: 0 auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.themeColorin {\n  color: #592D8D !important;\n}\n\n.sub-label {\n  font-size: 16px !important;\n  color: #5D5656 !important;\n}\n\n.loctioninput .form-group {\n  margin-bottom: 20px;\n}\n\n.loctioninput .estimate {\n  margin-left: 0;\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n.loctioninput .form-group label {\n  font-size: 16px;\n  margin-bottom: 0px !important;\n  padding-bottom: 2px !important;\n  display: inline-block;\n  padding: 0 !important;\n  margin-top: 0px;\n}\n\n.newchekdot label {\n  font-size: 16px;\n}\n\n.pinned-add {\n  font-size: 16px !important;\n  margin: 0;\n}\n\n.loctioninput .form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-top: 10px;\n}\n\n.form-text {\n  background: #fff !important;\n  color: #220E0E !important;\n}\n\nion-list {\n  background: transparent !important;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height:41px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 24px;\n  margin-top: 1px;\n}\n\n.radio-inner {\n  width: 33%;\n  height: 50%;\n}\n\n.newinput {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtexttwo {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.red {\n  color: #F71313;\n}\n\n.red1 {\n  color: #F71313;\n  font-size: 13px !important;\n  margin-bottom: 0 !important;\n}\n\n.newcal {\n  background-image: url(/assets/images/icons/calendar.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 15px;\n}\n\nion-item.newcheckbox {\n  border-bottom: none;\n}\n\nion-datetime {\n  padding-left: 10px;\n  --padding-end:0;\n  width: 100%;\n}\n\n.newcheckbox ion-checkbox {\n  --border-radius:0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --size: 19px;\n  --border-color-checked: #ddd;\n  --border-width: 1px;\n  --border-color: #ddd;\n  margin-right: 19px;\n  margin: 10px 19px 12px 4px;\n}\n\n.newcheckbox {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newbtnin {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  left: 0;\n  right: 0;\n  text-transform: uppercase;\n  margin: 20px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newtextfour ion-checkbox {\n  --border-radius:0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --size: 19px;\n  --border-color-checked: #ddd;\n  --border-width: 1px;\n  --border-color: #ddd;\n  margin-right: 19px;\n}\n\n.newtextthree .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.newtextthree .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.newtextthree h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 16px;\n}\n\nion-item.newtextthree {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.new {\n  border: 1px solid #E1D8EB;\n  background-color: #fff;\n  width: 100%;\n  display: inline-flex;\n}\n\n.newtextthree .label-stacked {\n  margin-bottom: 10px;\n  font-size: 16px;\n  color: #220E0E;\n  transform: inherit;\n}\n\n.newclear {\n  width: 100% !important;\n  float: right !important;\n  text-align: right !important;\n  color: #6A37A5 !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  margin-bottom: 0 !important;\n}\n\n.newtextfour.new {\n  border: 1px solid #E1D8EB;\n  background-color: #fff;\n  width: 100%;\n  display: inline-flex;\n  background-color: transparent;\n}\n\n.newtextfour .label-stacked {\n  margin-bottom: 10px;\n  font-size: 16px;\n  color: #220E0E;\n  transform: inherit;\n}\n\n.newarea {\n  width: 10%;\n  float: left;\n  --min-height:35px;\n  margin: 0;\n}\n\n.newarea .label-stacked {\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n}\n\nion-item.newtextfour {\n  --padding-start: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-color:transparent;\n}\n\nion-item.newtextfourin {\n  --padding-start: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-color:transparent;\n  --background: transparent ;\n}\n\n.newtextfour .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.newtextfour .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.newtextfour h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.timenext {\n  width: 45%;\n  float: left;\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtextfour .newadd {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #292020;\n  font-size: 18px;\n}\n\n.newtextfourin ion-list-header ion-label {\n  margin-top: 0;\n  font-size: 16px;\n  color: #220E0E;\n  font-weight: 400;\n}\n\n.newtime {\n  background-image: url(/assets/images/icons/time.svg);\n  width: 24px;\n  height: 24px;\n  margin-top: 9px;\n  margin-right: 8PX;\n  background-position: 37%;\n}\n\n.newtextfour ion-list {\n  background: transparent;\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.newtextfour .newclear {\n  width: 100% !important;\n  float: right !important;\n  text-align: right !important;\n  color: #6A37A5 !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  margin-bottom: 0 !important;\n  margin-top: 0;\n}\n\n.md .count.float-right {\n  position: absolute;\n  top: 92px;\n  right: 40px;\n  left: 25px;\n  right: 25px;\n}\n\n.ios .count.float-right {\n  position: absolute;\n  top: 117px;\n  right: 40px;\n  left: 25px;\n  right: 25px;\n}\n\nion-progress-bar {\n  --progress-background:#6CBF52;\n  height: 10px;\n}\n\n.progress-buffer-bar {\n  background: transparent;\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #6CBF52;\n  transition: width 0.6s ease;\n}\n\n.progress {\n  height: 10px;\n  border-radius: 0;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n.count.float-right {\n  z-index: 999999;\n}\n\n.progress-text {\n  font-size: 16px !important;\n  color: #46962C;\n}\n\n.progress-bar {\n  background-color: #6CBF52;\n  box-shadow: none;\n}\n\n.count {\n  font-size: 36px;\n}\n\nincident_location .form-group {\n  margin-bottom: 5px !important;\n}\n\n.incident_location .form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.incident_location .form-group label {\n  font-size: 14px;\n  margin-bottom: 8px !important;\n  padding-bottom: 2px !important;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.noteColor label {\n  font-size: 14px !important;\n  margin-top: 8px !important;\n  display: inline-block;\n}\n\n.arrow_position {\n  position: absolute;\n  left: -36px;\n  top: 4px;\n}\n\n.relativepo {\n  position: relative;\n}\n\n.arrow_position .leftIcon {\n  width: 17px;\n}\n\n.newclearitem {\n  margin-bottom: 0;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .ios .mainform {\n    width: 100%;\n    height: auto;\n    margin-top: 51%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .md .mainform {\n    width: 100%;\n    height: auto;\n    margin-top: 51%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9wcmltYXJ5Zm9ybS9wcmltYXJ5Zm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW1hcnlmb3JtL3ByaW1hcnlmb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGlKQUFBO0VBQ0EsNElBQUE7RUFDQSw2SUFBQTtFQUNBLHlJQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBQTs7QURHQTtFQUVBLDJCQUFBO0FDREE7O0FESUE7RUFFQSxrQkFBQTtBQ0ZBOztBRElBO0VBRUUsb0NBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7QUNGRjs7QURLQTtFQUVBLGFBQUE7QUNIQTs7QURNQTtFQUVBLHdCQUFBO0FDSkE7O0FET0E7RUFFQSxnQkFBQTtBQ0xBOztBRFFBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFDO0VBQ0csT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDRiwrQ0FBQTtFQUNFLDBDQUFBO0FDTEo7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUNBLGtDQUFBO0FDTkE7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFFQSxXQUFBO0VBQ0EsYUFBQTtBQ1BBOztBRFdBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtF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QTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDdEdKOztBRHVHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7QUNwR0Y7O0FEdUdBO0VBQ0UsZUFBQTtBQ3BHRjs7QURzR0E7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUNuR0Y7O0FEcUdBO0VBQ0UseUJBQUE7RUFFQSxnQkFBQTtBQ2xHRjs7QURvR0E7RUFDRSxlQUFBO0FDakdGOztBRG9HQztFQUNHLDZCQUFBO0FDakdKOztBRG9HQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUNqR0o7O0FEb0dBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDSCxxQkFBQTtFQUNBLGVBQUE7QUNqR0Q7O0FEb0dBO0VBRUEsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDbEdBOztBRG9HQTtFQUFpQixrQkFBQTtFQUF1QixXQUFBO0VBQ3BDLFFBQUE7QUMvRko7O0FEZ0dBO0VBQVksa0JBQUE7QUM1Rlo7O0FENkZBO0VBQ0ksV0FBQTtBQzFGSjs7QUQ0RkE7RUFFQSxnQkFBQTtBQzFGQTs7QUQ2RkE7RUFJQTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0QsZUFBQTtFQzdGRDtBQUNGOztBRG1HQztFQUlEO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDRCxlQUFBO0VDcEdEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmltYXJ5Zm9ybS9wcmltYXJ5Zm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3Ymdcclxue1xyXG4tLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcclxuaGVpZ2h0OjEwMCU7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5cclxufVxyXG4ubmV3aGVhZGVyXHJcbntcclxuYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWNvbmR0aGFua1xyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5uZXd0b29sYmFyXHJcbntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kLW5vbmV7XHJcbiAgZGlzcGxheSA6bm9uZTtcclxufVxyXG5cclxuLnRvcG1hcmdpblxyXG57XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aGFua3VoZWFkaW5ublxyXG57XHJcbmJveC1zaGFkb3c6bm9uZTtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo2MnB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG5cdCAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxufVxyXG5cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQudGhhbmt1aGVhZGlubm46OmFmdGVye1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMyOTIwMjA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuXHJcbi50aGFua3lvdS1zZWN0aW9uXHJcbntcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoyMHB4O1xyXG5cclxufVxyXG5cclxuLnRoYW5reW91LXNlY3Rpb24gaDR7XHJcbm1hcmdpbjowIGF1dG8gMjVweDtcclxud2lkdGg6MTAwJTtcclxuZm9udC1zaXplOjIycHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3Y2VudGVydGV4dFxyXG57d2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi1ib3R0b206NTBweDtcclxucGFkZGluZzowIDE4cHg7XHJcbn1cclxuXHJcbi5yaWdodGltZyBpbWdcclxue1xyXG53aWR0aDo3MHB4O1xyXG59XHJcblxyXG5cclxuLm5vYnRuIGF7XHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLm5vYnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjk1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuLS1ib3gtc2hhZG93Om5vbmU7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbm1hcmdpbjowIGF1dG8gNTVweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi55ZXNidG4gYVxyXG57XHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi55ZXNidG5cclxue1xyXG5cclxuY29sb3I6IzU5MkQ4RCAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6OTUlO1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLS1ib3JkZXItd2lkdGg6IDFweDtcclxubWFyZ2luOjAgYXV0byAyMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5uZXdjZW50ZXJ0ZXh0IHBcclxue3dpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MThweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG59XHJcblxyXG4ucmlnaHRpbWdcclxue1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld3JpZ2h0aWNvblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvIDMwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uc2luZ2xlQ29sdW1uIC5pbnB1dEdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW5wdXRHcm91cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHggMCAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XHJcbn1cclxuLnNoYXJlaW5jaWRlbnRmb3Jte1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRHcm91cCBsYWJlbCB7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMzQzQ1NEM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLWluO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxhYmVsMSB7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ucHJvZ3Jlc3MtZm9ybSAuY3VzdG9tLXJhZGlvLWluc2lkZVxyXG57XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDI4cHg7XHJcbn1cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmxhYmVsMTo6YmVmb3JlIHtcclxuICBjb2xvcjogIzIyMEUwRSAhaW1wb3J0YW50O1xyXG4gYm9yZGVyLWNvbG9yOiAjRTFEOEVCO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3RpY2suc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggOHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE5cHg7XHJcbn1cclxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCg1NiwgNTYsIDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmlucHV0R3JvdXAgaW5wdXQge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xyXG4gIG9yZGVyOiAxO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFwb3V0ZXJ7IG1pbi1oZWlnaHQ6NDY3cHg7IGhlaWdodDo2MCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6MTAwJTsgbWFyZ2luLWJvdHRvbTozMHB4OyBtYXJnaW4tdG9wOjE1cHg7IH1cclxuXHRcclxuXHRcclxuXHQubWQgLm1haW5mb3JtXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OmF1dG87XHJcblx0bWFyZ2luLXRvcDo1MCU7XHJcblx0bWFyZ2luLWJvdHRvbToyMTBweDtcclxuXHR9XHJcblxyXG5cdC5pb3MgLm1haW5mb3JtXHJcblx0e1xyXG5cdG1hcmdpbi10b3A6NTIlO1xyXG5cdG1hcmdpbi1ib3R0b206MTk0cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5wcm9ncmVzcy1mb3JtXHJcblx0e1xyXG5cdG1hcmdpbjowO1xyXG5cdHBhZGRpbmc6MDtcclxuXHRsaXN0LXN0eWxlOm5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5mb3JtYXJlYVxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdHBhZGRpbmc6MCAyMHB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3c3BhblxyXG5cdHtcclxuXHRjb2xvcjojNUQ1NjU2O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdG1hcmdpbi10b3A6OHB4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRmbG9hdDpsZWZ0O1xyXG5cdH1cclxuXHRcclxuXHQubmV3cXVlc3Rpb25cclxuXHR7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0Lm5ld3ZpZXdcclxuXHR7XHJcblx0ICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdH1cclxuXHRcclxuXHQuZm9ybS1ncm91cCAuaW5wdXRCb3gsIC5pbnB1dDEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MjM4OTMgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyOTIwMjAgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAubmV3dGltZVxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3RpbWUuc3ZnKTtcclxud2lkdGg6MjRweDtcclxuaGVpZ2h0OjI0cHg7XHJcbm1hcmdpbi10b3A6OXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNyU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5pbnB1dEJveFxyXG57XHJcbiAgcGFkZGluZzogMTVweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dC5pbnB1dEJveDpmb2N1cyxcclxuLmlucHV0MTpmb2N1cyxcclxuLmlucHV0Mjpmb2N1c1xyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjIzODkzO1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW5wdXQ6YWN0aXZlIHtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuOjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHRcclxuXHRcclxuXHQgLmZvcm0tZ3JvdXAgLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAuc2MtaW9uLWxhYmVsLW1kLWhcclxue1xyXG5mb250LXNpemU6MTZweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHRcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDQxcHg7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHRcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOjAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTowICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubmV3YWRkXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW46MHB4IGF1dG8gMDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtaW9zLWhcclxue1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5cclxufVxyXG5cclxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjI4cHg7XHJcbn1cclxuLnRpbWVuZXh0XHJcbiB7XHJcbiB3aWR0aDo0NSU7XHJcbiBmbG9hdDpsZWZ0O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDA7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlci10b3A6bm9uZTtcclxuYm9yZGVyLWxlZnQ6bm9uZTtcclxuYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbmJvcmRlci1ib3R0b206bm9uZTtcclxuLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuIH1cclxuIFxyXG4ubmV3dGV4dGZvdXIgLm5ld2FkZFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luOjBweCBhdXRvIDA7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXIgaW9uLWl0ZW1cclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDBweCAwICFpbXBvcnRhbnQ7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXJpbiBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsXHJcbntcclxubWFyZ2luLXRvcDowO1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzIyMEUwRTtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG59XHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDdweDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogOXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMkVEMzVBO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuXHRcclxuLm5ld3RleHQgaW9uLWxhYmVsXHJcbntcclxubWFyZ2luLXRvcDoxMHB4O1xyXG5tYXJnaW4tYm90dG9tOjExcHg7XHJcbn1cclxuICBpb24tcmFkaW9cclxuICB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XHJcbiAgfVxyXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6aW5oZXJpdDtcclxufVxyXG5cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo0MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5sZWZ0OjA7XHJcbnJpZ2h0OjA7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6NTUlO1xyXG5tYXJnaW4tYm90dG9tOjE1MHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG5tYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDowO1xyXG5cclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbm1hcmdpbjowIGF1dG8gMjVweDtcclxuLS1ib3gtc2hhZG93OjA7XHJcblxyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnRoZW1lQ29sb3JpblxyXG57XHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudFxyXG59XHJcblxyXG4uc3ViLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1RDU2NTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cFxyXG57XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5sb2N0aW9uaW5wdXQgLmVzdGltYXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbiAuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOjAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi10b3A6IDBweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NoZWtkb3QgbGFiZWxcclxuXHR7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5waW5uZWQtYWRkIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjowO1xyXG59XHJcblxyXG4ubG9jdGlvbmlucHV0IC5mb3JtLWNvbnRyb2x7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxuXHR9XHJcblxyXG4uZm9ybS10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0XHJcbntcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tbWluLWhlaWdodDo0MXB4O1xyXG5cclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG59XHJcbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxufVxyXG5cclxuaW9uLXJhZGlvLm1kXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuXHJcbn1cclxuXHJcbi5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5uZXdpbnB1dFxyXG57XHJcblxyXG4tLXBhZGRpbmctc3RhcnQ6IDA7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlci10b3A6bm9uZTtcclxuYm9yZGVyLWxlZnQ6bm9uZTtcclxuYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNFMUQ4RUI7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblxyXG59XHJcblxyXG4ubmV3dGV4dHR3b1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLnJlZFxyXG57XHJcbmNvbG9yOiNGNzEzMTM7XHJcbn1cclxuXHJcbi5yZWQxXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxuZm9udC1zaXplOjEzcHggIWltcG9ydGFudDtcclxubWFyZ2luLWJvdHRvbTowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdjYWxcclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9jYWxlbmRhci5zdmcpO1xyXG53aWR0aDoyNHB4O1xyXG5oZWlnaHQ6MjRweDtcclxubWFyZ2luLXRvcDo5cHg7XHJcbm1hcmdpbi1yaWdodDoxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbS5uZXdjaGVja2JveFxyXG4gIHtcclxuICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1kYXRldGltZVxyXG4gIHtcclxuICBcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHQtLXBhZGRpbmctZW5kOjA7XHJcblx0ICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5uZXdjaGVja2JveCBpb24tY2hlY2tib3hcclxuICB7XHJcbiAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG4gICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZjtcclxuIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xyXG4gLS1jaGVja21hcmstd2lkdGg6IDI7XHJcbiAgICAgLS1zaXplOiAxOXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcclxuXHQtLWJvcmRlci13aWR0aDogMXB4O1xyXG5cdCAtLWJvcmRlci1jb2xvcjogI2RkZDtcclxuXHQgICAgIG1hcmdpbi1yaWdodDogMTlweDtcclxuXHRcdCBtYXJnaW46IDEwcHggMTlweCAxMnB4IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLm5ld2NoZWNrYm94XHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyLXRvcDpub25lO1xyXG5ib3JkZXItbGVmdDpub25lO1xyXG5ib3JkZXItcmlnaHQ6bm9uZTtcclxuYm9yZGVyLWJvdHRvbTpub25lO1xyXG4tLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAubmV3YnRuaW5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG5tYXJnaW46MjBweCBhdXRvIDI1cHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG5cclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuICBcclxuICAubmV3dGV4dGZvdXIgaW9uLWNoZWNrYm94XHJcbiAge1xyXG4gICAtLWJvcmRlci1yYWRpdXM6MDtcclxuICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XHJcbiAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcclxuIC0tY2hlY2ttYXJrLXdpZHRoOiAyO1xyXG4gICAgIC0tc2l6ZTogMTlweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNkZGQ7XHJcblx0LS1ib3JkZXItd2lkdGg6IDFweDtcclxuXHQgLS1ib3JkZXItY29sb3I6ICNkZGQ7XHJcblx0ICAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5uZXd0ZXh0dGhyZWUgLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4ubmV3dGV4dHRocmVlIC5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4ubmV3dGV4dHRocmVlIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbm1hcmdpbi1ib3R0b206MjhweDtcclxufVxyXG4ubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MTZweDtcclxufVxyXG4gaW9uLWl0ZW0ubmV3dGV4dHRocmVlXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXItdG9wOm5vbmU7XHJcbmJvcmRlci1sZWZ0Om5vbmU7XHJcbmJvcmRlci1yaWdodDpub25lO1xyXG5ib3JkZXItYm90dG9tOm5vbmU7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiAubmV3XHJcbiAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0ZGlzcGxheTppbmxpbmUtZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLm5ld3RleHR0aHJlZSAubGFiZWwtc3RhY2tlZFxyXG4gIHtcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgY29sb3I6IzIyMEUwRTtcclxuICB0cmFuc2Zvcm06aW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLm5ld2NsZWFyXHJcbiAge1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICBmbG9hdDpyaWdodCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudDtcclxuICBjb2xvcjojNkEzN0E1ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDo1MDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAgXHJcbiAgIC5uZXd0ZXh0Zm91ci5uZXdcclxuICB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRkaXNwbGF5OmlubGluZS1mbGV4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnRcclxuICB9XHJcbiAgXHJcbiAgLm5ld3RleHRmb3VyIC5sYWJlbC1zdGFja2VkXHJcbiAge1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjojMjIwRTBFO1xyXG4gIHRyYW5zZm9ybTppbmhlcml0O1xyXG4gIH1cclxuICBcclxuLm5ld2FyZWFcclxue1xyXG53aWR0aDoxMCU7XHJcbmZsb2F0OmxlZnQ7XHJcbi0tbWluLWhlaWdodDozNXB4O1xyXG5tYXJnaW46MDtcclxufVxyXG5cclxuLm5ld2FyZWEgLmxhYmVsLXN0YWNrZWR7XHJcbm1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuaW9uLWl0ZW0ubmV3dGV4dGZvdXIgXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjA7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXItdG9wOm5vbmU7XHJcbmJvcmRlci1sZWZ0Om5vbmU7XHJcbmJvcmRlci1yaWdodDpub25lO1xyXG5ib3JkZXItYm90dG9tOm5vbmU7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24taXRlbS5uZXd0ZXh0Zm91cmluIFxyXG57XHJcbi0tcGFkZGluZy1zdGFydDogMDtcclxubWFyZ2luLWJvdHRvbTowO1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyLXRvcDpub25lO1xyXG5ib3JkZXItbGVmdDpub25lO1xyXG5ib3JkZXItcmlnaHQ6bm9uZTtcclxuYm9yZGVyLWJvdHRvbTpub25lO1xyXG4tLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG4tLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4ubmV3dGV4dGZvdXIgLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXIgLnNjLWlvbi1sYWJlbC1tZC1oXHJcbntcclxuZm9udC1zaXplOjE2cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0Zm91ciBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjI4cHg7XHJcbn1cclxuLnRpbWVuZXh0XHJcbiB7XHJcbiB3aWR0aDo0NSU7XHJcbiBmbG9hdDpsZWZ0O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDA7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlci10b3A6bm9uZTtcclxuYm9yZGVyLWxlZnQ6bm9uZTtcclxuYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbmJvcmRlci1ib3R0b206bm9uZTtcclxuLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuIH1cclxuIFxyXG4ubmV3dGV4dGZvdXIgLm5ld2FkZFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luOjBweCBhdXRvIDA7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dGZvdXJpbiBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsXHJcbntcclxubWFyZ2luLXRvcDowO1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzIyMEUwRTtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG59XHJcblxyXG4gLm5ld3RpbWVcclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy90aW1lLnN2Zyk7XHJcbndpZHRoOjI0cHg7XHJcbmhlaWdodDoyNHB4O1xyXG5tYXJnaW4tdG9wOjlweDtcclxubWFyZ2luLXJpZ2h0OiA4UFg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzclO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXd0ZXh0Zm91ciBpb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4gLm5ld3RleHRmb3VyIC5uZXdjbGVhclxyXG4gIHtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IzZBMzdBNSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6NTAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTowIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOjA7XHJcbiAgfVxyXG5cclxuLm1kIC5jb3VudC5mbG9hdC1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTJweDtcclxuICByaWdodDogNDBweDtcclxuICBsZWZ0OjI1cHg7XHJcbiAgcmlnaHQ6MjVweDtcclxufVxyXG5cclxuLmlvcyAuY291bnQuZmxvYXQtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDExN3B4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIGxlZnQ6MjVweDtcclxuICByaWdodDoyNXB4O1xyXG59XHJcbmlvbi1wcm9ncmVzcy1iYXJcclxue1xyXG4tLXByb2dyZXNzLWJhY2tncm91bmQ6IzZDQkY1MjtcclxuaGVpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1idWZmZXItYmFyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDQkY1MjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO31cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDEwcHg7ICAgXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIFxyXG59XHJcbi5jb3VudC5mbG9hdC1yaWdodCB7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG59XHJcbi5wcm9ncmVzcy10ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBjb2xvcjojNDY5NjJDO1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Q0JGNTI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmNvdW50IHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcblx0aW5jaWRlbnRfbG9jYXRpb24gLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmNpZGVudF9sb2NhdGlvbiAuZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5jaWRlbnRfbG9jYXRpb24gLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ubm90ZUNvbG9yIGxhYmVsXHJcbntcclxuZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcclxubWFyZ2luLXRvcDo4cHggIWltcG9ydGFudDtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuLmFycm93X3Bvc2l0aW9uIHtwb3NpdGlvbjogYWJzb2x1dGU7ICAgIGxlZnQ6IC0zNnB4O1xyXG4gICAgdG9wOiA0cHg7fVxyXG4ucmVsYXRpdmVwb3twb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4uYXJyb3dfcG9zaXRpb24gLmxlZnRJY29uIHtcclxuICAgIHdpZHRoOiAxN3B4O31cclxuXHJcbi5uZXdjbGVhcml0ZW1cclxue1xyXG5tYXJnaW4tYm90dG9tOjA7XHJcbn1cclxuXHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4uaW9zIC5tYWluZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgbWFyZ2luLXRvcDo1MSU7XHJcbn1cclxuXHJcblxyXG4gXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6NjQwcHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDM2MHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tZCAubWFpbmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgbWFyZ2luLXRvcDo1MSU7XHJcbn1cclxuXHJcbiBcclxuIH1cclxuXHJcbiIsIi5uZXdiZyB7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm5ld2hlYWRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlY29uZHRoYW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3dG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b3BtYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aGFua3VoZWFkaW5ubiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo2MnB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1tZC50aGFua3VoZWFkaW5ubjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4udGhhbmt5b3Utc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGhhbmt5b3Utc2VjdGlvbiBoNCB7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2NlbnRlcnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nOiAwIDE4cHg7XG59XG5cbi5yaWdodGltZyBpbWcge1xuICB3aWR0aDogNzBweDtcbn1cblxuLm5vYnRuIGEge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ub2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogOTUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG8gNTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ueWVzYnRuIGEge1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi55ZXNidG4ge1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDk1JTtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2NlbnRlcnRleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5yaWdodGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3cmlnaHRpY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2luZ2xlQ29sdW1uIC5pbnB1dEdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dEdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwIDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xufVxuXG4uc2hhcmVpbmNpZGVudGZvcm0ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRHcm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzNDNDU0QztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMG1zIGVhc2UtaW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwxIHtcbiAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMjBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3MtZm9ybSAuY3VzdG9tLXJhZGlvLWluc2lkZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyOHB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbDE6OmJlZm9yZSB7XG4gIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0UxRDhFQjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjZweDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3RpY2suc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDhweDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTlweDtcbn1cblxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCg1NiwgNTYsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5pbnB1dEdyb3VwIGlucHV0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcbiAgb3JkZXI6IDE7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm1hcG91dGVyIHtcbiAgbWluLWhlaWdodDogNDY3cHg7XG4gIGhlaWdodDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubWQgLm1haW5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMTBweDtcbn1cblxuLmlvcyAubWFpbmZvcm0ge1xuICBtYXJnaW4tdG9wOiA1MiU7XG4gIG1hcmdpbi1ib3R0b206IDE5NHB4O1xufVxuXG4ucHJvZ3Jlc3MtZm9ybSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmZvcm1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLm5ld3NwYW4ge1xuICBjb2xvcjogIzVENTY1NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubmV3cXVlc3Rpb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXd2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZvcm0tZ3JvdXAgLmlucHV0Qm94LCAuaW5wdXQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MjM4OTMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMyOTIwMjAgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld3RpbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGltZS5zdmcpO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNyU7XG59XG5cbi5mb3JtLWdyb3VwIC5pbnB1dEJveCB7XG4gIHBhZGRpbmc6IDE1cHggMCAxMHB4IDAgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LmlucHV0Qm94OmZvY3VzLFxuLmlucHV0MTpmb2N1cyxcbi5pbnB1dDI6Zm9jdXMgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjIzODkzO1xuICBib3JkZXItbGVmdDogMHB4O1xuICBib3JkZXItcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dDphY3RpdmUge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb3JtLWdyb3VwIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tZ3JvdXAgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLW1pbi1oZWlnaHQ6IDQxcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLmN1c3RvbS1jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxuLm5ld2FkZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0byAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3dGV4dGZvdXIgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld3RleHRmb3VyIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld3RleHRmb3VyIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4udGltZW5leHQge1xuICB3aWR0aDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0Zm91ciAubmV3YWRkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvIDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5uZXd0ZXh0Zm91ciBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmV3dGV4dGZvdXJpbiBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXI6IHNvbGlkICMyRUQzNUE7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbmhlcml0O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDU1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG8gMjVweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRoZW1lQ29sb3JpbiB7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItbGFiZWwge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM1RDU2NTYgIWltcG9ydGFudDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2N0aW9uaW5wdXQgLmVzdGltYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2N0aW9uaW5wdXQgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5uZXdjaGVrZG90IGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGlubmVkLWFkZCB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5cbi5sb2N0aW9uaW5wdXQgLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZm9ybS10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzIyMEUwRSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tbWluLWhlaWdodDo0MXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG59XG5cbmlvbi1yYWRpby5tZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG59XG5cbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5uZXdpbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld3RleHR0d28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGNzEzMTM7XG59XG5cbi5yZWQxIHtcbiAgY29sb3I6ICNGNzEzMTM7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdjYWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2FsZW5kYXIuc3ZnKTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1pdGVtLm5ld2NoZWNrYm94IHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOjA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3Y2hlY2tib3ggaW9uLWNoZWNrYm94IHtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcbiAgLS1jaGVja21hcmstd2lkdGg6IDI7XG4gIC0tc2l6ZTogMTlweDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XG4gIG1hcmdpbi1yaWdodDogMTlweDtcbiAgbWFyZ2luOiAxMHB4IDE5cHggMTJweCA0cHg7XG59XG5cbi5uZXdjaGVja2JveCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubmV3YnRuaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMjBweCBhdXRvIDI1cHg7XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXd0ZXh0Zm91ciBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6MDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjMkVEMzVBO1xuICAtLWNoZWNrbWFyay13aWR0aDogMjtcbiAgLS1zaXplOiAxOXB4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZGRkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogI2RkZDtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xufVxuXG4ubmV3dGV4dHRocmVlIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uZXd0ZXh0dGhyZWUgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3dGV4dHRocmVlIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1pdGVtLm5ld3RleHR0aHJlZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uZXcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXd0ZXh0dGhyZWUgLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5uZXdjbGVhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzZBMzdBNSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZXd0ZXh0Zm91ci5uZXcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmV3dGV4dGZvdXIgLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG59XG5cbi5uZXdhcmVhIHtcbiAgd2lkdGg6IDEwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC0tbWluLWhlaWdodDozNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5uZXdhcmVhIC5sYWJlbC1zdGFja2VkIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24taXRlbS5uZXd0ZXh0Zm91ciB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcbn1cblxuaW9uLWl0ZW0ubmV3dGV4dGZvdXJpbiB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCA7XG59XG5cbi5uZXd0ZXh0Zm91ciAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3dGV4dGZvdXIgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3dGV4dGZvdXIgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi50aW1lbmV4dCB7XG4gIHdpZHRoOiA0NSU7XG4gIGZsb2F0OiBsZWZ0O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld3RleHRmb3VyIC5uZXdhZGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG8gMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5ld3RleHRmb3VyaW4gaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZXd0aW1lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3RpbWUuc3ZnKTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhQWDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzclO1xufVxuXG4ubmV3dGV4dGZvdXIgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubmV3dGV4dGZvdXIgLm5ld2NsZWFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNkEzN0E1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1kIC5jb3VudC5mbG9hdC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5MnB4O1xuICByaWdodDogNDBweDtcbiAgbGVmdDogMjVweDtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5pb3MgLmNvdW50LmZsb2F0LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExN3B4O1xuICByaWdodDogNDBweDtcbiAgbGVmdDogMjVweDtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IzZDQkY1MjtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZ3Jlc3MtYnVmZmVyLWJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkNCRjUyO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XG59XG5cbi5wcm9ncmVzcyB7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbi5jb3VudC5mbG9hdC1yaWdodCB7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLnByb2dyZXNzLXRleHQge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0Njk2MkM7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkNCRjUyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuaW5jaWRlbnRfbG9jYXRpb24gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmluY2lkZW50X2xvY2F0aW9uIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLmluY2lkZW50X2xvY2F0aW9uIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLm5vdGVDb2xvciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYXJyb3dfcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zNnB4O1xuICB0b3A6IDRweDtcbn1cblxuLnJlbGF0aXZlcG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcnJvd19wb3NpdGlvbiAubGVmdEljb24ge1xuICB3aWR0aDogMTdweDtcbn1cblxuLm5ld2NsZWFyaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLmlvcyAubWFpbmZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MSU7XG4gIH1cbn1cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1kIC5tYWluZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUxJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/primaryform/primaryform.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/primaryform/primaryform.page.ts ***!
    \*************************************************/

  /*! exports provided: PrimaryformPage */

  /***/
  function srcAppPrimaryformPrimaryformPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimaryformPage", function () {
      return PrimaryformPage;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);

    var PrimaryformPage = /*#__PURE__*/function () {
      function PrimaryformPage(navController, translate, sharedservice, platform, alertController, el, sanitizer, router, route, httpClient) {
        _classCallCheck(this, PrimaryformPage);

        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.platform = platform;
        this.alertController = alertController;
        this.el = el;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.httpClient = httpClient;
        this.otherFieldData = false;
        this.RelationFieldData = false;
        this.oneFieldData = false;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/get-forms/';
        this.formdata = [];
        this.questiondata = [];
        this.value = {
          "option_id": '',
          "answer": ""
        }; // current_form
        // previous_form
        // next_form
        // question_ids_json

        this.incident_id = 0;
        this.currentQuestion = "";
        this.currentParentKey = 0;
        this.currentTreeOptions = [];
        this.selectedAnswers = [];
        this.dynamicQuestionJson = [];
        this.currentForm = 0;
        this.dependedQuestionsAnswers = {};
        this.dynamicQuestionOptionJson = [];
        this.p_bar = 0;
        this.hide_question = true;
        this.hide_thankyou = false;
        this.totalQuestions = 0;
        this.totalParentAnswers = 0;
        this.text_field_required_msg = "";
        this.text_field_valid_msg = "";
        this.final_Address = [];
        this.shared_data = this.sharedservice.getData();
        this.building_status = false;
        this.landmark_status = false;
        this.area_status = false;
        this.city_status = false;
        this.state_status = false;
        this.country_status = false;
        this.getForm();
        this.latitude = localStorage.getItem('map_lat');
        this.longitude = localStorage.getItem('map_longi');
      }

      _createClass(PrimaryformPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// $(document).ready(function () {
          //   alert("Hello from New to design")
          // });
        }
      }, {
        key: "setProgress",
        value: function setProgress() {
          console.log(this.totalParentAnswers);
          console.log(this.totalQuestions);
          var progressPercent = this.totalParentAnswers / this.totalQuestions * 100;
          console.log(progressPercent);
          console.log(Math.round(progressPercent));
          console.log(this.completed);
          jquery__WEBPACK_IMPORTED_MODULE_8__(".progress-bar").css("width", Math.round(progressPercent) + "%");
          jquery__WEBPACK_IMPORTED_MODULE_8__(".progress-text").text(Math.round(progressPercent) + "% " + this.completed);
        }
      }, {
        key: "calculateTotalQuestions",
        value: function calculateTotalQuestions() {
          this.totalQuestions = 0;

          for (var i = 0; i < this.clientForms.length; i++) {
            if (this.clientForms[i].type == 'primary') {
              console.log('calculate Total Questions:', this.totalQuestions);
              this.totalQuestions += JSON.parse(this.clientForms[i].question_ids_json).length;
            } else if (this.clientForms[i].type == 'logic') {
              console.log('calculate Total Questions:', this.totalQuestions);
              console.log(this.clientForms[i].estimate_question);
              this.totalQuestions += this.clientForms[i].estimate_question || 0;
            }

            if (this.clientForms[i].is_submit == true) break;
          }

          this.setProgress();
        }
      }, {
        key: "getForm",
        value: function getForm() {
          var _this = this;

          var data = new FormData();
          data.append('client_id', localStorage.getItem('Client_id'));
          data.append('lang_id', localStorage.getItem('Lang_id'));
          data.append('platform', localStorage.getItem('platform'));
          data.append('app_version', this.sharedservice['app_version']);
          data.append('country_id', localStorage.getItem('Country_id'));
          data.append('city_id', localStorage.getItem('City_id'));
          this.translate.get('completed').subscribe(function (res) {
            console.log(res);
            _this.completed = res;
          });
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('get-forms', data).subscribe(function (rdata) {
            console.log(rdata);
            _this.clientForms = rdata.forms;
            _this.dynamicQuestionOptionJson = rdata.questions;
            _this.category = rdata.categories;
            console.log("formdata ", JSON.stringify(_this.clientForms));
            console.log("questiondata ", JSON.stringify(_this.dynamicQuestionOptionJson));

            _this.intiateForm();

            _this.calculateTotalQuestions();
          }, function (error) {
            _this.sharedservice.loaderDismiss();
          }, function () {
            _this.sharedservice.loaderDismiss();
          }); // this.sharedservice.presentLoadingDefault()
          //     this.httpClient.post(this.apiUrl, data)
          //       .subscribe((rdata: any) => {
          //         console.log(rdata);
          //         this.clientForms = rdata.forms;
          //         this.dynamicQuestionOptionJson = rdata.questions
          //         this.category = rdata.categories
          //         console.log("formdata ", JSON.stringify(this.clientForms))
          //         console.log("questiondata ", JSON.stringify(this.dynamicQuestionOptionJson));
          //         this.intiateForm()
          //         this.calculateTotalQuestions()
          //       }, error => {
          //         this.sharedservice.loaderDismiss()
          //       },()=>{
          //         console.log('complete')
          //         this.sharedservice.loaderDismiss()
          //       });
        }
      }, {
        key: "next",
        value: function next() {
          var _this2 = this;

          jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
          console.log('clicked ', this.currentTreeOptions); // Set answers

          this.setAnswers(function (answer_id) {
            if (_this2.currentTreeOptions.length == 0) {
              //console.log(currentQuestion);
              // Goto next parent if exists
              _this2.showNextParentQuestion(); //this.p_bar += 10;
              //  $(".progress-bar").css("width", Math.round(this.p_bar) + "%");
              //$(".progress-text").text(Math.round(this.p_bar) + "% Completed");

            } else {
              // Continue parsing the tree
              for (var i = 0; i < _this2.currentTreeOptions.length; i++) {
                var option = _this2.currentTreeOptions[i];

                if (option.id == undefined || option.id == answer_id) {
                  _this2.currentTreeOptions = option["on_option_id"];

                  _this2.getDynamicQuestions(option["question_id"], null);

                  break;
                } // Last loop


                if (i == _this2.currentTreeOptions.length - 1) {
                  // None of the option matches the condition
                  // Continue to next parent if exists.
                  _this2.showNextParentQuestion();
                }
              }
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this3 = this;

          // alert('enter')
          this.subscription = this.platform.backButton.subscribeWithPriority(15, function (processNextHandler) {
            //navigator['app'].exitApp();
            //alert('hit')
            _this3.back();
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          // alert('exit')
          this.subscription.unsubscribe();
        }
      }, {
        key: "back",
        value: function back() {
          var _this4 = this;

          console.log(' back button clicked');
          this.latitude = localStorage.getItem('map_lat');
          this.longitude = localStorage.getItem('map_longi');
          this.building = this.landmark = this.area = this.city = this.state = this.country = "";
          this.building_status = this.landmark_status = this.area_status = this.city_status = this.state_status = this.country_status = false;
          jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled"); // Set progress
          //	this.p_bar -= 10;
          //	$(".progress-bar").css("width", Math.round(this.p_bar) + "%");              
          //$(".progress-text").text(Math.round(this.p_bar) + "% Completed");

          if (this.selectedAnswers.length == 0) {
            // Redirect back to actual previous page
            console.log("consent page");
            this.navController.pop(); //window.location.href = baseURL + "shareIncident";
          } else {
            // Back to previous question
            // Get previous question back
            var lastQuestion = this.selectedAnswers.pop();

            if (this.clientForms[this.currentForm].type == 'primary' || this.currentParentKey != lastQuestion.currentQuestion.currentParentKey) {
              // Update answer
              this.totalParentAnswers--;
              this.setProgress();
            } // Get previous question back
            //	var lastQuestion = this.selectedAnswers.pop();


            this.currentParentKey = lastQuestion.currentQuestion.currentParentKey;
            this.currentTreeOptions = lastQuestion.currentQuestion.currentTreeOptions; // Has form changed to previous form?

            if (this.currentForm != lastQuestion.currentQuestion.currentForm) {
              console.log('form changed!');
              this.currentForm = lastQuestion.currentQuestion.currentForm;
              this.setFormDynamicQuestion(this.clientForms[this.currentForm], function (callb) {
                // Show the previous question
                _this4.getDynamicQuestions(lastQuestion.currentQuestion.id, lastQuestion);
              });
            } else {
              // Show the previous question
              this.getDynamicQuestions(lastQuestion.currentQuestion.id, lastQuestion);
            }
          }

          return false;
        }
      }, {
        key: "GetFormattedDate",
        value: function GetFormattedDate(date) {
          // var todayTime = date.string
          console.log(date);
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [month, day, year].join('/');
        } //someone else alert

      }, {
        key: "verifyAlert",
        value: function verifyAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var please_ensure, ok, alert;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.translate.get('please_ensure').subscribe(function (res) {
                      please_ensure = res;
                    });
                    this.translate.get('ok').subscribe(function (res) {
                      ok = res;
                    });
                    _context.next = 4;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      backdropDismiss: false,
                      message: please_ensure,
                      mode: 'ios',
                      buttons: [{
                        text: ok,
                        handler: function handler(alertData) {}
                      }]
                    });

                  case 4:
                    alert = _context.sent;
                    _context.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setAnswers",
        value: function setAnswers(callback) {
          // Append form type to answer
          //this.answerJson.form_type = this.clientForms[this.currentForm].name;
          console.log('set answer', this.currentQuestion);
          var properties = JSON.parse(this.currentQuestion['properties']);

          if (properties.type == "radio") {
            var answer_id = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").val();
            var answer = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").data('val');
            var other_answers = {};

            if (jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").data('showtextbox') == true) {
              other_answers['answer_id'] = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + answer_id + "textbox").val();
            }

            if (jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + "option" + answer_id + "radio" + "]:checked").data('showtextbox') == true) {
              var radionId = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + "option" + answer_id + "radio" + "]:checked").val();
              other_answers['answer_id'] = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + radionId + "textbox").val();
            }

            var subanswer_ids = ''; // Get suboption answers of type checkbox

            jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "checkbox]:checked").each(function (index, el) {
              subanswer_ids += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__(this).val();
              answer += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('val');
            }); // Get suboption answers of type radio

            var selectedSubOptionRadio = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "radio]:checked");

            if (selectedSubOptionRadio.length > 0) {
              subanswer_ids += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "radio]:checked").val();
              answer += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + answer_id + "radio]:checked").data('val');
            } // Update answer_id by appending subanswer id as well


            answer_id += subanswer_ids;

            if (answer_id == 'undefined') {
              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              return false;
            }

            this.answerJson = {
              "option_id": answer_id,
              "other_answers": other_answers,
              "answer": answer,
              'form_type': this.clientForms[this.currentForm].name
            };
            console.log('RADIO', this.answerJson); // this.p_bar += 10;
          } else if (properties.type == "text") {
            var _answer_id = 0;

            var _answer = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + this.currentQuestion['elementId']).val();

            this.answerJson = {
              "option_id": _answer_id,
              "answer": _answer,
              'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
          } else if (properties.type == "checkbox") {
            var _answer_id2 = '';
            var _answer2 = '';
            var other_answers = {};
            var parent_answer_arr = [];
            var main_answer_arr = [];
            var is_valid = true;
            jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]:checked").each(function (index, el) {
              var this_ans_id = JSON.stringify(jquery__WEBPACK_IMPORTED_MODULE_8__(this).val());
              this_ans_id = JSON.parse(this_ans_id);
              _answer2 += ',' + jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('val');
              _answer_id2 += ',' + this_ans_id; // Has Subtext? Get textbox value

              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) other_answers[this_ans_id] = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + this_ans_id + "textbox").val(); // Is Main? Used for logical questions of categories

              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('ismain')) main_answer_arr.push(this_ans_id); // Has parent id? Used for secondary questions

              var parent_id = jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('parentid');
              parent_id = parent_id == 0 || parent_id == undefined ? parseInt(this_ans_id) : parent_id;
              if (!parent_answer_arr.includes(parent_id)) parent_answer_arr.push(parent_id); // Get answer of suboption of type radio
              // Currently there can only be two types of suboptions i.e. radio and checkbox
              // Checbox suboption answer already gets selected as normal option
              // Below code fetches answer for suboption of type radio.

              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('hassuboptions') == true) {
                //$("#dynamicNext").attr("disabled", "disabled");
                var suboptionElem = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=suboption" + this_ans_id + "]:checked");

                if (suboptionElem.length > 0) {
                  _answer2 += ',' + suboptionElem.data('val');
                  _answer_id2 += ',' + suboptionElem.val();
                }
              }
            });
            _answer_id2 = _answer_id2.replace(',', '');

            if (_answer_id2 == "") {
              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              return false;
            } else {
              var parent_answer_id = parent_answer_arr.sort().join(',');
              var main_answer_id = main_answer_arr.sort().join(',');
              this.answerJson = {
                "option_id": _answer_id2,
                "main_answer_id": main_answer_id,
                "parent_option_id": parent_answer_id,
                "other_answers": other_answers,
                "answer": "",
                'form_type': this.clientForms[this.currentForm].name
              };
              _answer2 = _answer2.replace(',', '');
              var parent_answer_id = parent_answer_arr.sort().join(',');
              var main_answer_id = main_answer_arr.sort().join(',');
              this.answerJson = {
                "option_id": _answer_id2,
                "main_answer_id": main_answer_id,
                "parent_option_id": parent_answer_id,
                "other_answers": other_answers,
                "answer": _answer2,
                'form_type': this.clientForms[this.currentForm].name
              };

              if (this.currentQuestion['has_logic_dependency'] == "1") {
                this.dependedQuestionsAnswers[this.currentQuestion['id']] = {
                  "answers": _answer_id2,
                  "main_answers": main_answer_id,
                  "parent_answers": parent_answer_id
                };
              }
            } // this.p_bar += 10;

          } else if (properties.type == "estimate-datepicker") {
            var _answer_id3 = 0;
            console.log(this.currentQuestion);

            var _answer3 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]").val();

            var isEstimate = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "checked]").is(':checked');
            var date = this.GetFormattedDate(_answer3);
            console.log(date);

            if (_answer3 == "") {
              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              return false;
            }

            this.answerJson = {
              "option_id": _answer_id3,
              "answer": date,
              "isEstimate": isEstimate,
              'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
          } else if (properties.type == "estimate-time-or-rangepicker") {
            var _answer_id4 = 0;
            var answer1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "]").val();
            var isEstimate = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "checked]").is(':checked');
            console.log(isEstimate);

            var _answer4;

            if (answer1) {
              var time = JSON.stringify(answer1);
              console.log(answer1);
              var date1 = time.split('T');
              console.log(date1);
              console.log(date1[0]);
              console.log(date1[1]);
              console.log(date1[1].split('.'));
              var time2 = date1[1].split('.');
              var final_date = time2[0];
              console.log(final_date);
              var time_split = final_date.split(':');
              console.log(time_split);

              if (time_split[0].charAt(0) == '0') {
                var t = time_split[0].slice(1);
                time_split[0] = t;
                console.log(time_split[0]);
              }

              if (time_split[1].charAt(0) == '0') {
                var t = time_split[1].slice(1);
                time_split[1] = t;
                console.log(time_split[1]);
              }

              var hour = JSON.parse(time_split[0]);
              var minute = JSON.parse(time_split[1]);
              console.log(hour);
              console.log(minute);
              var hours = hour > 12 ? hour - 12 : hour;
              var am_pm = hour >= 12 ? "PM" : "AM";
              var minutes = minute < 10 ? "0" + minute : minute;
              _answer4 = hours + ":" + minutes + " " + am_pm;
              console.log(_answer4);
            }

            if (answer1 == "") {
              var timeStart1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "start]").val();
              var timeEnd1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "end]").val();

              if (timeStart1 == "" && timeEnd1 == "") {
                if (!jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').next('.timeRange_valid').length) {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').after('<div class="validdation_time" style="color:red;">' + properties["validations"][0]["startendtime"] + '</div>'); //$('.timeRange').after('<div class="timeRange_valid" style="color:red;">Please select Start Time and End Time Both.</div>');
                }

                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                return false;
              } else {
                //for timestart
                var time = JSON.stringify(timeStart1);
                console.log(timeStart1);
                var date1 = time.split('T');
                console.log(date1);
                console.log(date1[0]);
                console.log(date1[1]);
                console.log(date1[1].split('.'));
                var time2 = date1[1].split('.');
                var final_date = time2[0];
                console.log(final_date);
                var time_split = final_date.split(':');
                console.log(time_split);

                if (time_split[0].charAt(0) == '0') {
                  var t = time_split[0].slice(1);
                  time_split[0] = t;
                  console.log(time_split[0]);
                }

                if (time_split[1].charAt(0) == '0') {
                  var t = time_split[1].slice(1);
                  time_split[1] = t;
                  console.log(time_split[1]);
                }

                var _hour = JSON.parse(time_split[0]);

                var _minute = JSON.parse(time_split[1]);

                console.log(_hour);
                console.log(_minute);
                var hours = _hour > 12 ? _hour - 12 : _hour;
                var am_pm = _hour >= 12 ? "PM" : "AM";
                var minutes = _minute < 10 ? "0" + _minute : _minute;
                var timeStart = hours + ":" + minutes + " " + am_pm; //for timeend

                var timeend = JSON.stringify(timeEnd1);
                console.log(timeEnd1);
                var dateend1 = timeend.split('T');
                console.log(dateend1);
                console.log(dateend1[0]);
                console.log(dateend1[1]);
                console.log(dateend1[1].split('.'));
                var timeend2 = dateend1[1].split('.');
                var final_enddate = timeend2[0];
                console.log(final_enddate);
                var time_split_end = final_enddate.split(':');
                console.log(time_split_end);

                if (time_split_end[0].charAt(0) == '0') {
                  var t = time_split_end[0].slice(1);
                  time_split_end[0] = t;
                  console.log(time_split_end[0]);
                }

                if (time_split_end[1].charAt(0) == '0') {
                  var t = time_split_end[1].slice(1);
                  time_split_end[1] = t;
                  console.log(time_split_end[1]);
                }

                var hourend = JSON.parse(time_split_end[0]);
                var minuteend = JSON.parse(time_split_end[1]);
                console.log(hourend);
                console.log(_minute);
                var hoursend = hourend > 12 ? hourend - 12 : hourend;
                var am_pm_end = hourend >= 12 ? "PM" : "AM";
                var minutesend = minuteend < 10 ? "0" + minuteend : minuteend;
                var timeEnd = hoursend + ":" + minutesend + " " + am_pm_end;
                var day = '1 1 1970 ',
                    // 1st January 1970
                hourDiff = (Date.parse(day + timeEnd) - Date.parse(day + timeStart)) / 1000 / 60;
                console.log(hourDiff + ' min');

                if (hourDiff < 0) {
                  if (!jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').next('.timeRange_valid').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').after('<div class="validdation_time" style="color:red;">' + properties["validations"][0]["timediff"] + '</div>'); //$('.timeRange').after('<div class="timeRange_valid" style="color:red;">End Time is Less Than Start Time.</div>');
                  }

                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                  return false;
                }

                console.log(timeStart);
                console.log(timeEnd);
                _answer4 = timeStart + '-' + timeEnd;
                isEstimate = true;
              }
            }

            this.answerJson = {
              "option_id": _answer_id4,
              "answer": _answer4,
              "isEstimate": isEstimate,
              'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson);
          } else if (properties.type == "incident-address-form") {
            var _answer_id5 = 0; // var building = $("input[name=" + this.currentQuestion['elementId'] + "building]").val();
            // var landmark = $("input[name=" + this.currentQuestion['elementId'] + "landmark]").val();
            // var area = $("input[name=" + this.currentQuestion['elementId'] + "area]").val();
            // var city = $("input[name=" + this.currentQuestion['elementId'] + "city]").val();
            // var state = $("input[name=" + this.currentQuestion['elementId'] + "state]").val();
            // var country = $("input[name=" + this.currentQuestion['elementId'] + "country]").val();
            // var latitude = $("input[name=" + this.currentQuestion['elementId'] + "latitude]").val();
            // var longitude = $("input[name=" + this.currentQuestion['elementId'] + "longitude]").val();
            // if (area == "" || city == "" || state == "" || country == "") {
            //   if (area == "") {
            //     if (!$('.suburb').next('.validdation_suburb').length) {
            //       $('.suburb').after('<div class="validdation_suburb" style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   if (city == "") {
            //     if (!$('.city').next('.validdation_city').length) {
            //       $('.city').after('<div class="validdation_city"><div style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   if (state == "") {
            //     if (!$('.state').next('.validdation_state').length) {
            //       $('.state').after('<div class="validdation_state" style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   if (country == "") {
            //     if (!$('.country').next('.validdation_country').length) {
            //       $('.country').after('<div class="validdation_country" style="color:red;">' + properties.validations[0]["message"] + '</div>');
            //     }
            //   }
            //   $("#dynamicNext").attr("disabled", "disabled");
            //   return false;
            // }
            // $("#dynamicNext").removeAttr("disabled");

            this.answerJson = {
              "option_id": _answer_id5,
              "answer": "",
              "address": {
                "building": this.building,
                "landmark": this.landmark,
                "area": this.area,
                "city": this.city,
                "state": this.state,
                "country": this.country,
                "latitude": this.latitude,
                "longitude": this.longitude
              },
              'form_type': this.clientForms[this.currentForm].name
            };
            console.log(this.answerJson); // this.p_bar += 10;
          } else if (properties.type == "incident-pin-map") {
            var _answer_id6 = 0;
            var isAccepted = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + this.currentQuestion['elementId'] + "checked]").is(':checked');
            var latitude = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + this.currentQuestion['elementId'] + "latitude").val();
            var longitude = jquery__WEBPACK_IMPORTED_MODULE_8__("#" + this.currentQuestion['elementId'] + "longitude").val();
            this.answerJson = {
              "option_id": 0,
              "answer": "",
              "address": {
                "latitude": latitude,
                "longitude": longitude
              },
              "isAccepted": isAccepted,
              'form_type': this.clientForms[this.currentForm].name
            }; //this.p_bar += 5;

            console.log(this.answerJson);
          } // Save the questions and answers


          if (this.currentTreeOptions.length == 0) {
            this.currentQuestion['currentTreeOptions'] = [];
          } else {
            this.currentQuestion['currentTreeOptions'] = this.currentTreeOptions;
          }

          this.currentQuestion['answerJson'] = this.answerJson;
          this.selectedAnswers.push({
            'currentQuestion': this.currentQuestion
          });
          console.log(this.selectedAnswers); // Return answer id

          callback(answer_id);
        }
      }, {
        key: "diff_hours",
        value: function diff_hours(dt2, dt1) {
          var diff = (dt2.getTime() - dt1.getTime()) / 1000;
          diff /= 60 * 60;
          return Math.abs(diff);
        }
      }, {
        key: "intiateForm",
        value: function intiateForm() {
          var _this5 = this;

          var form = this.clientForms[this.currentForm];
          jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
          this.setFormDynamicQuestion(form, function (call) {
            // Reset counters
            _this5.currentParentKey = 0;

            if (_this5.dynamicQuestionJson.length > 0) {
              _this5.currentTreeOptions = _this5.dynamicQuestionJson[0]["on_option_id"];

              _this5.getDynamicQuestions(_this5.dynamicQuestionJson[0].question_id, null);
            } else {
              _this5.totalParentAnswers--;

              _this5.showNextParentQuestion();
            }
          });
        }
      }, {
        key: "setFormDynamicQuestion",
        value: function setFormDynamicQuestion(form, callback) {
          var _this6 = this;

          if (form.type == "logic") {
            // figure out the actual answer to use to get the logical questions
            var logicDetails = JSON.parse(form.question_ids_json);
            var dependant_question_id = logicDetails.dependant_question_id;
            var answer_type = logicDetails.answer_type;
            var dependent_answers;
            console.log(logicDetails);
            console.log(this.dependedQuestionsAnswers);

            if (answer_type == "main") {
              dependent_answers = this.dependedQuestionsAnswers[dependant_question_id]["main_answers"];
              console.log(dependent_answers);
            } else if (answer_type == "parent") {
              dependent_answers = this.dependedQuestionsAnswers[dependant_question_id]["parent_answers"];
              console.log(dependent_answers);
            } else {
              // answer_type = "actual"
              dependent_answers = this.dependedQuestionsAnswers[dependant_question_id]["answers"];
              console.log(dependent_answers);
            }

            console.log(dependent_answers); // make a ajax call to get combination json data

            var baseURL = this.sharedservice.get_url();
            jquery__WEBPACK_IMPORTED_MODULE_8__["ajax"]({
              url: baseURL + 'get-logical-questions',
              type: 'POST',
              data: {
                form_id: form.id,
                question_id: dependant_question_id,
                ans_ids: dependent_answers,
                'lang_id': localStorage.getItem('Lang_id'),
                'platform': localStorage.getItem('platform'),
                'app_version': this.sharedservice['app_version'],
                'country_id': localStorage.getItem('Country_id'),
                'city_id': localStorage.getItem('City_id')
              }
            }).done(function (data) {
              console.log("success", data);
              var parsedData = data;
              _this6.dynamicQuestionJson = parsedData.comb_json; // Update Progress based on newly added questions
              //totalQuestions += dynamicQuestionJson.length;

              console.log('add ' + _this6.dynamicQuestionJson.length + ' questions');
              _this6.clientForms[_this6.currentForm].estimate_question = _this6.dynamicQuestionJson.length;

              _this6.calculateTotalQuestions();

              var relatedquestions = Object.values(parsedData.questions); // Update questin options

              relatedquestions.forEach(function (questionObj) {
                console.log(questionObj);
                console.log(questionObj['question']);
                console.log(questionObj['question'].id);
                console.log(_this6.dynamicQuestionOptionJson);
                _this6.dynamicQuestionOptionJson[questionObj['question'].id] = questionObj;
              });
              callback();
            }); // }) {
            // .fail(function() {
            //   console.log("error");
            // })
            // .always(function() {
            //   console.log("complete");
            // });
            // When data was already available

            /*var parsedJSON = JSON.parse(form.question_ids_json);
            if(parsedJSON[dependent_answers]!=undefined) {
              dynamicQuestionJson = parsedJSON[dependent_answers];
              console.log(dynamicQuestionJson);
            } else {
              dynamicQuestionJson = [];
            }*/
          } else {
            this.dynamicQuestionJson = JSON.parse(form.question_ids_json);
            callback();
          }
        }
      }, {
        key: "showNextParentQuestion",
        value: function showNextParentQuestion() {
          var _this7 = this;

          // We update progress only for answer to parent questions
          console.log('Set progress for parent question!');
          this.totalParentAnswers++;
          this.setProgress();

          if (this.dynamicQuestionJson[this.currentParentKey + 1] != undefined) {
            var nextParent = this.dynamicQuestionJson[++this.currentParentKey];
            this.currentTreeOptions = nextParent["on_option_id"];
            this.getDynamicQuestions(nextParent["question_id"], null);
          } else {
            // dynamicQuestionJson recursion completed
            // Check if form needs to be submitted
            var thisForm = this.clientForms[this.currentForm];

            if (thisForm.is_submit == true) {
              // Submit the form and get back id
              this.sharedservice.presentLoadingDefault();
              console.log("answer", JSON.stringify(this.selectedAnswers));
              console.log(this.selectedAnswers);
              var baseURL = this.sharedservice.get_url();
              jquery__WEBPACK_IMPORTED_MODULE_8__["ajax"]({
                url: baseURL + 'save-incident',
                type: 'POST',
                data: {
                  answers_json: JSON.stringify(this.selectedAnswers),
                  incident_id: this.incident_id,
                  user_id: localStorage.getItem('userId'),
                  'client_id': '1',
                  'lang_id': localStorage.getItem('Lang_id'),
                  'platform': localStorage.getItem('platform'),
                  'app_version': this.sharedservice['app_version'],
                  'country_id': localStorage.getItem('Country_id'),
                  'city_id': localStorage.getItem('City_id')
                }
              }).done(function (data) {
                _this7.sharedservice.loaderDismiss();

                console.log("success", data);
                var parsedData = data;

                if (parsedData.success == true) {
                  _this7.incident_id = parsedData.incident_id;
                  _this7.shared_data['incident_id'] = _this7.incident_id;

                  _this7.sharedservice.setData(_this7.shared_data);

                  var incident_id = JSON.stringify(_this7.incident_id);
                  localStorage.setItem('incident_id', incident_id);
                  console.log(thisForm);

                  _this7.onFormSaved(thisForm);
                } else {// alert('Something went wrong!');
                }
              });
            } else {
              // continue with the form recursion
              this.showNextForm();
            }
          }
        }
      }, {
        key: "onFormSaved",
        value: function onFormSaved(thisForm) {
          console.log('thisform', thisForm); // Reset the variables to disable back

          this.clientForms.splice(0, this.currentForm + 1);
          this.currentForm = -1;
          this.currentQuestion = "";
          this.currentParentKey = 0;
          this.currentTreeOptions = [];
          this.selectedAnswers = [];
          this.dynamicQuestionJson = [];
          this.totalParentAnswers = 0;

          if (thisForm.thank_you_web != null) {
            var thankyouJson = JSON.parse(thisForm.thank_you_web);
            console.log(thankyouJson);
            console.log(thankyouJson.title);
            console.log(thankyouJson.content);
            var title = thankyouJson.title;
            var content = thankyouJson.content;
            console.log(title);
            console.log(content); // title = JSON.parse(title)
            // content = JSON.parse(content)

            console.log(title);
            console.log(content); // this.title = this.sanitizer.bypassSecurityTrustHtml(thankyouJson.title) ; 
            // this.content = this.sanitizer.bypassSecurityTrustHtml(thankyouJson.content);
            // console.log(title)
            // console.log(content)

            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-title").html(title);
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-content").html(content);
            var links = '';
            var redirect_url = "";
            thankyouJson.links.forEach(function (link) {
              if (link.is_next) links += '<ion-button expand="full" shape="round" class="yesbtn btn w-50 btn_purple mb-4 dynamic-thankyou-next" (click)="help()">' + link.title + '</ion-button>';else {
                //var baseURL = 'http://101.53.143.7/~dataduck/safecity_webapp/'
                //redirect_url = link.redirect_url != undefined ? baseURL + link.redirect_url : '#';
                links += '<ion-button expand="full" shape="round" fill="outline" class="nobtn btn w-50 btn_p_white dynamic-thankyou-end">' + link.title + '</ion-button>';
              }

              if (thankyouJson.links.length == 1) {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-content").addClass('secondthank');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamic-success-content").removeClass('secondthank');
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-success-link").html(links);
            var self = this; // Show thank you div

            jquery__WEBPACK_IMPORTED_MODULE_8__(".questionaire").hide();
            jquery__WEBPACK_IMPORTED_MODULE_8__(".thankyou-section").show();
            this.hide_thankyou = true;
            this.hide_question = false;
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-thankyou-next").click(function (event) {
              event.preventDefault();
              self.calculateTotalQuestions();
              self.showNextForm();
              setTimeout(function () {
                // Hide thank you div
                jquery__WEBPACK_IMPORTED_MODULE_8__(".thankyou-section").hide();
                jquery__WEBPACK_IMPORTED_MODULE_8__(".questionaire").show();
                self.hide_thankyou = false;
                self.hide_question = true;
              }, 1000);
              console.log('next');
            });
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-thankyou-end").click(function (event) {
              event.preventDefault();
              console.log('help');
              self.router.navigate(['/helplines']); //this.resetState();
              //window.location.href = redirect_url;
            });
          } else {
            // continue with the form recursion
            this.showNextForm();
          }
        }
      }, {
        key: "help",
        value: function help() {
          console.log('help'); // let navigationExtras: NavigationExtras = {
          //   state: {
          //     content : content
          //   }
          // };

          this.router.navigate(['/helplines']);
        }
      }, {
        key: "showQuestionAgain",
        value: function showQuestionAgain() {
          //     event.stopPropagation();
          //     event.preventDefault();
          // console.log('question',event)
          jquery__WEBPACK_IMPORTED_MODULE_8__(".thankyou-section").hide();
          jquery__WEBPACK_IMPORTED_MODULE_8__(".questionaire").show();
          this.hide_question = true;
          this.hide_thankyou = false;
          this.showNextForm();
        }
      }, {
        key: "showNextForm",
        value: function showNextForm() {
          if (this.clientForms[this.currentForm + 1] != undefined) {
            this.currentForm++;
            console.log('moving forward to form ' + this.currentForm);
            this.intiateForm();
          } else {
            console.log("The END!");
          }
        }
      }, {
        key: "getDynamicQuestions",
        value: function getDynamicQuestions(questionId, lastQuestion) {
          var parsedData = this.dynamicQuestionOptionJson[questionId];
          this.currentQuestion = parsedData["question"];
          this.currentQuestion['currentParentKey'] = this.currentParentKey;
          this.currentQuestion['currentForm'] = this.currentForm;
          console.log(this.currentQuestion);
          var hide_span_for_datepicker = JSON.parse(this.currentQuestion['properties']);
          console.log(hide_span_for_datepicker);
          console.log(hide_span_for_datepicker.type);
          console.log(this.currentQuestion['properties']['type']); // Set question and subtext

          jquery__WEBPACK_IMPORTED_MODULE_8__("#question_span").html(this.currentQuestion['question']);

          if (hide_span_for_datepicker.type != 'estimate-datepicker' && hide_span_for_datepicker.type != 'estimate-time-or-rangepicker') {
            console.log('in');
            jquery__WEBPACK_IMPORTED_MODULE_8__("#subtext_span").html(this.currentQuestion['subtext']);
          } // if(hide_span_for_datepicker.type !=  'estimate-time-or-rangepicker')
          // {
          //   console.log('in')
          //   $("#subtext_span").html(this.currentQuestion['subtext']);
          // }


          this.createDynamicElement(parsedData, lastQuestion); //this.saveStateLocally();
        }
      }, {
        key: "createDynamicElement",
        value: function createDynamicElement(data, lastQuestion) {
          var properties = JSON.parse(data.question.properties);

          switch (properties.type) {
            case "radio":
              this.componentRadio(data, lastQuestion);
              break;

            case "text":
              this.componentText(data, properties, lastQuestion);
              break;

            case "estimate-datepicker":
              this.componentEstimateDatepicker(data, lastQuestion);
              break;

            case "estimate-time-or-rangepicker":
              this.componentEstimateTimeOrRangepicker(data, lastQuestion);
              break;

            case "checkbox":
              this.componentCheckbox(data, lastQuestion);
              break;

            case "incident-address-form":
              this.componentIncidentAddressForm(data, properties, lastQuestion);
              break;

            case "incident-pin-map":
              this.componentIncidentPinMap(data, lastQuestion);
              break;

            default:
              this.componentRadio(data, lastQuestion);
              break;
          }
        }
      }, {
        key: "componentIncidentAddressForm",
        value: function componentIncidentAddressForm(data, properties, lastQuestion) {
          var self = this;
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          var answerJson = lastQuestion != null ? lastQuestion.currentQuestion.answerJson : ""; // this.building = '';
          // 	this.landmark = '';
          // 	this.area = '';
          // 	this.city = '';
          // 	this.state = '';
          // 	this.country = '';
          // 	this.latitude = '';
          //   this.longitude = '';

          if (answerJson != "") {
            this.isAccepted = answerJson.isAccepted;
            this.building = answerJson.address.building;
            this.landmark = answerJson.address.landmark;
            this.area = answerJson.address.area;
            this.city = answerJson.address.city;
            this.state = answerJson.address.state;
            this.country = answerJson.address.country;
            this.latitude = answerJson.address.latitude;
            this.longitude = answerJson.address.longitude;
          }

          var locate_add_on_map;
          this.translate.get('locate_add_on_map').subscribe(function (res) {
            locate_add_on_map = res;
          });
          var start_typing_select_from_suggestion;
          this.translate.get('start_typing_select_from_suggestion').subscribe(function (res) {
            start_typing_select_from_suggestion = res;
          });
          var start_typing;
          this.translate.get('start_typing').subscribe(function (res) {
            start_typing = res;
          });
          var map_move_pin;
          this.translate.get('map_move_pin').subscribe(function (res) {
            map_move_pin = res;
          });
          var an_exact_location_help_us;
          this.translate.get('an_exact_location_help_us').subscribe(function (res) {
            an_exact_location_help_us = res;
          });
          var address_pinned_on_map;
          this.translate.get('address_pinned_on_map').subscribe(function (res) {
            address_pinned_on_map = res;
          });
          var univercity_of_glocestershire;
          this.translate.get('univercity_of_glocestershire').subscribe(function (res) {
            univercity_of_glocestershire = res;
          });
          var enter_area;
          this.translate.get('enter_area').subscribe(function (res) {
            enter_area = res;
          });
          var please_enter_area;
          this.translate.get('please_enter_area').subscribe(function (res) {
            please_enter_area = res;
          });
          var enter_building;
          this.translate.get('enter_building').subscribe(function (res) {
            enter_building = res;
          });
          var i_confirm;
          this.translate.get('i_confirm').subscribe(function (res) {
            i_confirm = res;
          });
          var example_kurla_road;
          this.translate.get('example_kurla_road').subscribe(function (res) {
            example_kurla_road = res;
          });
          var the_info_shared;
          this.translate.get('the_info_shared').subscribe(function (res) {
            the_info_shared = res;
          });
          var elementHtml = "\n    <div class=\"loctioninput\">\n    <div class=\"form-group  loctioninput mb-4\">\n      <label class=\"themeColorin m-0 p-0 d-block\">".concat(locate_add_on_map, "<span class=\"error red\">*</span></label>\n       <label class=\"mb-2 p-0 sub-label d-block\">").concat(start_typing_select_from_suggestion, "</label>\n      <input type=\"text\" class=\"form-control form-text search_address\" id=\"search_address\" name=\"\" placeholder=\"").concat(start_typing, "\" value=\"\">\n   </div>\n\n   <div class=\"form-group mb-4\">\n      <label class=\"themeColorin m-0 p-0 d-block\">").concat(map_move_pin, "</label>\n       <label class=\"mb-3 p-0 sub-label d-block\">").concat(an_exact_location_help_us, "</label>\n     <div class=\"mapouter\" style=\"height:467px\">\n     </div>\n   </div>\n\n   <div class=\"form-group mb-4\">\n      <label class=\"themeColorin m-0 p-0 d-block\">").concat(address_pinned_on_map, "</label>\n       <p class=\"m-0 pt-0 pinned-add\">").concat(univercity_of_glocestershire, "</p>\n   </div>\n\n   <div class=\"form-group mb-4\">\n\t\t \t  <label class=\"themeColor mb-2 p-0 d-block\">").concat(enter_area, "<span class=\"error\">*</span></label>\n\t\t \t  <input type=\"text\" class=\"form-control form-text\" id=\"area\" placeholder=\"").concat(please_enter_area, "\" value=\"\">\n      </div>\n      \n   <div class=\"form-group loctioninput mb-4\">\n      <label class=\"themeColorin mb-2 p-0 d-block\">").concat(enter_building, "</label>\n      <input type=\"text\" class=\"form-control form-text\" id=\"building_address\" placeholder=\"").concat(example_kurla_road, "\" value=\"\">\n   </div>\n\n   <p class=\"mt-4 pt-2 lignheight20\">\n     ").concat(the_info_shared, "\n   </p>\n\n\n   <div class=\"custom-control custom-checkbox newchekdot estimate mt-1\">\n   <label class=\"custom-control-label eLabel\" for=\"confirm_address\">").concat(i_confirm, "\n     <input type=\"checkbox\" class=\"custom-control-input estimate map_estimate\" id=\"confirm_address\" ").concat(this.isAccepted ? 'checked' : '', ">\n     <span class=\"checkmark\"></span>\n     </label>\n   </div>\n   </div>\n\t\t ");
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml); //$(".locality").focus();

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input:text").eq(0).focus(); // Set Address if any

          if (this.country) {
            self.showAddress();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
          } // On Building Address Changed


          jquery__WEBPACK_IMPORTED_MODULE_8__("#building_address , #area").keyup(function (e) {
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id') == 'building_address') self.building = jquery__WEBPACK_IMPORTED_MODULE_8__(this).val();else if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id') == 'area') self.area = jquery__WEBPACK_IMPORTED_MODULE_8__(this).val();

            if (self.area.length == 0) {
              self.area_status = false;
            } else {
              self.area_status = true;
            }

            self.showAddress(); // self.building = $(this).val();
            // self.showAddress();
          }); // On confirmation change

          jquery__WEBPACK_IMPORTED_MODULE_8__("#confirm_address").change(function (event) {
            self.isAccepted = jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked');
            self.showAddress();
          }); // Initialize Map and Address Search

          self.initMap('search_address');
        }
      }, {
        key: "updateMarker",
        value: function updateMarker() {
          console.log('updating marker');
          console.log(this.latitude, this.longitude);
          var location = new google.maps.LatLng(this.latitude, this.longitude);
          this.mapMarker.setPosition(location);
          this.map.setCenter(location);
        }
      }, {
        key: "initMap",
        value: function initMap(searchFieldId) {
          var _this8 = this;

          var self = this; // Enable autocomplete

          if (google) {
            /////////////
            // Set map //
            /////////////
            // console.log(this.latitude)
            // console.log(this.longitude)
            var location = new google.maps.LatLng(this.latitude, this.longitude);
            var options = {
              center: location,
              zoom: 15,
              animation: 'DROP',
              draggable: true,
              fullscreenControl: false,
              gestureHandling: 'cooperative',
              scaleControl: true
            };
            var map = new google.maps.Map(document.getElementsByClassName("mapouter")[0], options);
            this.map = map; ////////////////
            // Set Marker //
            ////////////////

            var mapMarker = new google.maps.Marker({
              position: location,
              // title: marker.title,
              latitude: this.latitude,
              longitude: this.longitude,
              animation: 'DROP',
              draggable: true
            });
            mapMarker.setMap(map);
            this.mapMarker = mapMarker; // On drag end

            google.maps.event.addListener(mapMarker, 'dragend', function () {
              console.log(this.mapMarker);
              var markerlatlong = mapMarker.getPosition();
              self.latitude = JSON.stringify(mapMarker.getPosition().lat());
              self.longitude = JSON.stringify(mapMarker.getPosition().lng()); // Reverse Geocode to get Address

              self.geocodeLatLng();
            });
            console.log(self.latitude);
            console.log(self.longitude);
            var geocoder = new google.maps.Geocoder();
            this.geocoder = geocoder; ///////////////
            // Searchbox //
            ///////////////
            // Create the search box

            var input = document.getElementById(searchFieldId);
            var searchBox = new google.maps.places.SearchBox(input); // Bias the SearchBox results towards current map's viewport.

            map.addListener("bounds_changed", function () {
              searchBox.setBounds(map.getBounds());
            }); // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.

            searchBox.addListener("places_changed", function () {
              var places = searchBox.getPlaces();
              console.log(places);

              if (places.length == 0) {
                self.resetFields("No results found");
                return;
              }

              var place = places[0]; // Set Coordinates

              _this8.latitude = place.geometry.location.lat();
              _this8.longitude = place.geometry.location.lng();
              self.updateMarker();
              var addcomponent = place.address_components; // Set Address

              self.setAddress(addcomponent);
              /*places.forEach((place) => {
                  if (!place.geometry) {
                      console.log("Returned place contains no geometry");
                      return;
                  }
                   latitude  = place.geometry.location.lat();
                  longitude = place.geometry.location.lng();
              });*/
            });
          }
        } // Reverse Geocode

      }, {
        key: "geocodeLatLng",
        value: function geocodeLatLng() {
          var _this9 = this;

          console.log(this.latitude);
          console.log(this.longitude);
          var latlng = {
            lat: parseFloat(this.latitude),
            lng: parseFloat(this.longitude)
          };
          var geocoder = this.geocoder;
          geocoder.geocode({
            location: latlng
          }, function (results, status) {
            console.log(results);

            if (status === "OK") {
              if (results[0]) {
                // Set Address
                console.log(results[0].address_components);

                _this9.setAddress(results[0].address_components);
              } else {
                _this9.resetFields("No results found");
              }
            } else {
              _this9.resetFields("Geocoder failed due to: " + status);
            }
          });
        }
      }, {
        key: "setAddress",
        value: function setAddress(addcomponent) {
          // Set Address
          this.building = this.landmark = this.area = this.city = this.state = this.country = "";
          this.building_status = this.landmark_status = this.area_status = this.city_status = this.state_status = this.country_status = false;

          if (addcomponent) {
            var street_number = '';
            var route = '';
            var localbuilding = '';
            this.final_Address = [];

            for (var i = 0; i < addcomponent.length; i++) {
              this.final_Address.push(addcomponent[i].long_name);

              if (addcomponent[i].types[0] == 'country') {
                this.country = addcomponent[i].long_name;
                this.country_status = true;
              } else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                this.state = addcomponent[i].long_name;
                this.state_status = true;
              } else if (addcomponent[i].types[0] == 'locality') {
                this.city = addcomponent[i].long_name;
                this.city_status = true;
              } else if (addcomponent[i].types[0] == 'postal_code') {} else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                this.area = addcomponent[i].long_name;
                this.area_status = true;
              } else if (addcomponent[i].types[0] == "sublocality_level_3" || addcomponent[i].types[0] == "sublocality") {
                this.landmark = addcomponent[i].long_name;
                this.landmark_status = true;
              } else if (addcomponent[i].types[0] == 'sublocality_level_2') {
                localbuilding = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'street_number') {
                street_number = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'route') {
                route = addcomponent[i].long_name;
              }
            }

            console.log(this.final_Address);
            var addr = this.final_Address.join(',');
            jquery__WEBPACK_IMPORTED_MODULE_8__(".search_address").val(addr);
            jquery__WEBPACK_IMPORTED_MODULE_8__("#area").val(this.area);
            console.log(addr);
            this.building = street_number + ' ' + route;
            this.building = this.building.trim() == '' ? localbuilding : this.building;
          }

          jquery__WEBPACK_IMPORTED_MODULE_8__("#building_address").val(this.building);
          this.showAddress();
        }
      }, {
        key: "resetFields",
        value: function resetFields(message) {
          this.building = this.landmark = this.area = this.city = this.state = this.country = "";
          this.building_status = this.landmark_status = this.area_status = this.city_status = this.state_status = this.country_status = false;
          jquery__WEBPACK_IMPORTED_MODULE_8__("#building_address").val('');
          jquery__WEBPACK_IMPORTED_MODULE_8__("#area").val('');
          jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(''); // Show message like Select a valid address
          // Disable next

          jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
        }
      }, {
        key: "showAddress",
        value: function showAddress() {
          if (this.latitude != '' && this.longitude != '' && this.country_status == true && this.state_status == true) {
            console.log('else', this.country, this.state);

            if (this.building != '' && this.landmark != '') {
              console.log('else', this.country, this.state); // $(".search_address").text(this.building+', '+this.landmark+', '+this.area+', '+this.city+', '+this.state+', '+this.country);        

              jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.building + ', ' + this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
            } else if (this.building != '') {
              console.log('else', this.country, this.state); /// $(".search_address").text(this.building+','+this.area+', '+this.city+', '+this.state+', '+this.country);        

              jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.building + ',' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
            } else if (this.landmark != '') {
              console.log('else', this.country, this.state);
              jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country); //$(".search_address").text(this.landmark+', '+this.area+', '+this.city+', '+this.state+', '+this.country);  
            } else if (this.area != '' && this.city != '') {
              console.log('else', this.country, this.state);
              jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text(this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country); //$(".search_address").text(this.area+', '+this.city+', '+this.state+', '+this.country);
            } else {
              console.log('else', this.country, this.state);
              jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
            }
          } else {
            console.log('else', this.country, this.state);
            jquery__WEBPACK_IMPORTED_MODULE_8__(".pinned-add").text('');
          }

          if (this.area_status == true && this.isAccepted == true && this.country && this.state) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
          }
        }
      }, {
        key: "initAutoComplete",
        value: function initAutoComplete(elementInitial) {
          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          var autocomplete = new google.maps.places.Autocomplete( // document.getElementById('autocomplete').getElementsByTagName('input')[0],
          document.getElementById(elementInitial + 'building'), {}); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          autocomplete.setFields(["address_component", "geometry"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          autocomplete.addListener("place_changed", function () {
            var place = autocomplete.getPlace();
            var latitude = place.geometry.location.lat();
            var longitude = place.geometry.location.lng();
            document.getElementById(elementInitial + 'latitude')['value'] = latitude;
            document.getElementById(elementInitial + 'longitude')['value'] = longitude;
            var addcomponent = place.address_components;

            for (var i = 0; i < addcomponent.length; i++) {
              if (addcomponent[i].types[0] == 'country') {
                document.getElementById(elementInitial + 'country')['value'] = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'locality') {
                document.getElementById(elementInitial + 'city')['value'] = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                document.getElementById(elementInitial + 'state')['value'] = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                document.getElementById(elementInitial + 'area')['value'] = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'sublocality_level_2') {
                document.getElementById(elementInitial + 'building')['value'] = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'postal_code') {
                document.getElementById(elementInitial + 'landmark')['value'] = addcomponent[i].long_name;
              }

              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            }
          });
        }
      }, {
        key: "componentIncidentPinMap",
        value: function componentIncidentPinMap(data, lastQuestion) {
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          var isAccepted = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isAccepted : false;
          var latitude = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.location.latitude : '';
          var longitude = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.location.longitude : '';

          if (latitude == '' || longitude == '') {
            console.log('map pin', this.selectedAnswers[this.selectedAnswers.length - 1]);
            var prevAnsAdd = this.selectedAnswers[this.selectedAnswers.length - 1].currentQuestion.answerJson.address;
            latitude = prevAnsAdd.latitude;
            longitude = prevAnsAdd.longitude;
          }

          var elementHtml = "\n    <div class=\"text-left\">\n      <div class=\"mapouter\">\n      </div>\n    </div>\n    <div class=\"custom-control custom-checkbox estimate\">\n    <p>The information that you share with us anonymously helps shape policy and decision making. Please confirm that you are submitting information true to your knowledge. You can go back and edit your answers before submitting, if needed. </p>\n      <label class=\"custom-checkbox estimate\">\n\t  \n    I confirm\n      <input type=\"checkbox\" name=\"option".concat(data["question"]["id"], "checked\" class=\"custom-control-input estimate map_estimate\" id=\"estimate\" ").concat(isAccepted ? 'checked' : '', " >\n      <span class=\"checkmark\"></span>\n\t  </label>\n    </div>\n    <input type=\"hidden\" id=\"option").concat(data["question"]["id"], "latitude\" name=\"option").concat(data["question"]["id"], "latitude\" value=\"").concat(latitude, "\">\n    <input type=\"hidden\" id=\"option").concat(data["question"]["id"], "longitude\" name=\"option").concat(data["question"]["id"], "longitude\" value=\"").concat(longitude, "\">\n  ");
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
          jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
          if (isAccepted && latitude != '' && longitude != '') //$("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
          jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + data["question"]["id"] + 'checked]').change(function (event) {
            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");else jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
          });
          var location = new google.maps.LatLng(latitude, longitude);
          var options = {
            center: location,
            zoom: 15,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false,
            // Disable Zoom and pan
            //gestureHandling: 'none',
            minZoom: 17,
            maxZoom: 22 //zoomControl: false

          }; // Set map

          var map = new google.maps.Map(document.getElementsByClassName("mapouter")[0], options); // Set Marker

          var mapMarker = new google.maps.Marker({
            position: location,
            // title: marker.title,
            latitude: latitude,
            longitude: longitude,
            animation: 'DROP',
            draggable: true
          });
          mapMarker.setMap(map); // On drag end

          google.maps.event.addListener(mapMarker, 'dragend', function () {
            var markerlatlong = mapMarker.getPosition();
            var lat = JSON.stringify(mapMarker.getPosition().lat());
            var lng = JSON.stringify(mapMarker.getPosition().lng());
            jquery__WEBPACK_IMPORTED_MODULE_8__("option" + data["question"]["id"] + "latitude").val(lat);
            jquery__WEBPACK_IMPORTED_MODULE_8__("option" + data["question"]["id"] + "longitude").val(lng);
            console.log(lat, lng);
          });
        }
      }, {
        key: "componentCheckbox",
        value: function componentCheckbox(data, lastQuestion) {
          var selectedAnswerId = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
          var selectedAnswerArr = selectedAnswerId == null ? [] : selectedAnswerId.split(',');
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          var elementHtml = "<div class=\"row\">";
          var i = 0;

          if (data["question"].is_category == true) {
            var data_options = [];
            var categories = this.category;
            categories.forEach(function (category) {
              data_options.push({
                'id': category.id,
                'textbox_placeholder': null,
                'title': category.title,
                'parent_id': category.parent_id,
                'is_main': category.is_main
              });
            });
            data["options"] = data_options;
          }

          var thisQuestion = this.dynamicQuestionOptionJson[data["question"]["id"]];
          var hasSuboptions = thisQuestion['suboptions'] == undefined ? false : true;
          data["options"].sort(function (a, b) {
            return a.order_no - b.order_no;
          });
          data["options"].forEach(function (option) {
            if (option.title != null) {
              var showTextbox = option.textbox_placeholder != null;
              var isSelected = selectedAnswerArr.includes(option.id);
              var includesSuboptions = hasSuboptions ? thisQuestion["suboptions"][option.id] != undefined ? true : false : false;
              if (!hasSuboptions) elementHtml += "<div class=\"col-md-6\">";
              elementHtml += "\n\t\t\t\t<div class=\"inputGroup custom-control shareincidentform\">\n\t\t\t\t  <input type=\"checkbox\" id=\"".concat(option.id, "\" data-id=\"1\"  name=\"option").concat(data["question"]["id"], "\" class=\"custom-control-input getAttr dynamic-checkbox\" value=\"").concat(option.id, "\" data-parentid=\"").concat(option.parent_id, "\" data-ismain=\"").concat(option.is_main, "\" data-val=\"").concat(option.title[0].toUpperCase() + option.title.substr(1), "\" data-hasSuboptions=\"").concat(includesSuboptions, "\" data-showtextbox=\"").concat(showTextbox, "\" ").concat(isSelected ? "checked" : "", ">\n\t\t\t\t  <label class=\"custom-control-label label1\" for=\"").concat(option.id, "\">").concat(option.title[0].toUpperCase() + option.title.substr(1), "</label>\n\t\t\t\t</div>\n\t\t\t");

              if (showTextbox) {
                var text_placeholder = option.textbox_placeholder;

                try {
                  console.log('in');
                  var text_properties = JSON.parse(option.textbox_placeholder);
                  console.log(text_properties);
                  text_placeholder = text_properties.placeholder;
                  console.log(text_placeholder);
                  console.log(text_properties.validations[0]); // this.text_field_required_msg = text_properties.validations[0].message;
                  // console.log(this.text_field_required_msg)
                  // this.text_field_valid_msg = text_properties.validations[1].message;
                  // console.log(this.text_field_valid_msg)
                } catch (e) {
                  console.log(e);
                  console.log('out', option);
                  text_placeholder = option.textbox_placeholder;
                  console.log(text_placeholder);
                }

                var otheranswers = selectedAnswerId != null ? lastQuestion.currentQuestion.answerJson.other_answers : null;
                var othertextval = otheranswers != null && otheranswers[option.id] != undefined ? otheranswers[option.id] : "";
                elementHtml += "\n\t\t\t\t<input type=\"text\" class=\"form-control input1 specifyBox1 shareincidentform ".concat(isSelected ? "" : "d-none", "\" name=\"option").concat(option.id, "textbox\" placeholder=\"").concat(text_placeholder, "\" value=\"").concat(othertextval, "\">\n\t\t\t\t");
              } else if (hasSuboptions && includesSuboptions) {
                elementHtml += "<ul id=\"suboption-container-".concat(option.id, "\" style=\"").concat(isSelected ? '' : 'display:none', "\" class=\"custom-radio-inside suboption-container\">");
                var subOptionProperties = JSON.parse(option.suboption_properties);
                thisQuestion['suboptions'][option.id].forEach(function (suboption) {
                  var isSuboptionSelected = selectedAnswerArr.includes(suboption.id);

                  if (subOptionProperties.type == 'checkbox') {
                    elementHtml += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t  <div class=\"inputGroup custom-control shareincidentform\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" id='".concat(suboption.id, "' name=\"option").concat(data["question"]["id"], "\" class=\"custom-control-input\" value=\"").concat(suboption.id, "\" data-parentid=\"").concat(suboption.parent_id, "\" data-ismain=\"").concat(suboption.is_main, "\" data-val=\"").concat(suboption.title, "\" data-hasSuboptions=\"false\" data-showtextbox=\"false\" ").concat(isSuboptionSelected ? "checked" : "", " >\n\t\t\t\t\t\t\t    <label class=\"custom-control-label label1\" for=\"").concat(suboption.id, "\">").concat(suboption.title, "</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</li>");
                  } else {
                    elementHtml += "\n\t\t\t\t\t\t\t<li>\n\t\t                      <div class=\"inputGroup custom-control shareincidentform\">\n\t\t                        <input type=\"radio\" id='".concat(suboption.id, "' name=\"suboption").concat(option.id, "\" class=\"custom-control-input\" value=\"").concat(suboption.id, "\"  data-val=\"").concat(suboption.title, "\" ").concat(isSuboptionSelected ? "checked" : "", ">\n\t\t                        <label class=\"custom-control-label label1\" for=\"").concat(suboption.id, "\">").concat(suboption.title, "</label>\n\t\t                      </div>\n\t\t                    </li>");
                  }
                });
                elementHtml += "</ul>";
              }

              if (!hasSuboptions) elementHtml += "</div>";
            }
          });
          elementHtml += "</div>";
          console.log(elementHtml);
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
          var self = this;
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=checkbox]").click(function (event) {
            // if (($('input:checkbox:checked').length) > 0) {
            //   console.log('in')
            //   $("#dynamicNext").removeAttr("disabled");
            // }
            // else {
            //   $("#dynamicNext").attr("disabled", "disabled");
            // }
            var optionid = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id');
            console.log(optionid);

            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) {
              //var optionid = $(this).attr('id');
              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                console.log('show a textbox F');
                jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").removeClass('d-none');
              } else {
                console.log('hide a textbox F');
                jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").addClass('d-none');
                jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox]+.validdation_text").remove();
              }
            } // Handle suboptions toggle


            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('hassuboptions') == true) {
              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).fadeIn('slow');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).fadeOut('slow'); // Uncheck all suboptions

                jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid + " input[type=checkbox]").prop('checked', false);
                jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid + " input[type=radio]").prop('checked', false);
              }
            } // Run Validation


            console.log(self.text_field_required_msg);
            self.validate(optionid);
          }); // Run Validation on textbox

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").keyup(function (event) {
            self.validate(null);
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").change(function (event) {
            self.validate(null);
          }); // Run validation on suboption radio click

          jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input[type=radio]").click(function (event) {
            self.validate(null);
          }); // Add new event listener
          // $("#dynamicNext").off('click').click(function(event) {
          // 	event.preventDefault();
          // 	var is_valid = self.validate();
          // 	if(is_valid)
          // 		nextClick();
          // });
        }
      }, {
        key: "validate",
        value: function validate(clickedId) {
          var self = this;
          var is_valid = true;
          var total_checked = jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=checkbox]:checked").length;

          if (total_checked == 0) {
            is_valid = false;
          }

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=checkbox]:checked").each(function (index, el) {
            var parentOptionId = jquery__WEBPACK_IMPORTED_MODULE_8__(el).attr('id'); // Check for suboptions validity

            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('hassuboptions') == true) {
              if (jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + parentOptionId + " input:checked").length == 0) is_valid = false;
            } // Check for other textbox validity


            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('showtextbox') == true) {
              var textboxSelector = 'input[name=option' + parentOptionId + 'textbox]';
              console.log(self.ValidateText(jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + parentOptionId + 'textbox]').val()));

              if (!self.ValidateText(jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + parentOptionId + 'textbox]').val())) {
                is_valid = false;

                if (clickedId != parentOptionId || clickedId == null) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').length == 0) jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector).after('<div class="validdation_text" style="color:red;">' + self.text_field_required_msg + '</div>');
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').remove();
              }
            }
          });
          if (!is_valid) jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");else jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
          return is_valid;
        }
      }, {
        key: "ValidateText",
        value: function ValidateText(value) {
          //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
          var regex = /^[\w\s.-]+$/; //Validate TextBox value against the Regex.

          var isValid = regex.test(value);
          /*if (!isValid) {
              alert("Contains Special Characters.");
          } else {
              alert("Does not contain Special Characters.");
          }*/

          return isValid;
        }
      }, {
        key: "componentRadio",
        value: function componentRadio(data, lastQuestion) {
          console.log(data);
          var self = this;
          var selectedAnswerId = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.option_id : null;
          var selectedAnswerArr = selectedAnswerId == null ? [] : selectedAnswerId.split(',');
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          var thisQuestion = this.dynamicQuestionOptionJson[data["question"]["id"]];
          var hasSuboptions = thisQuestion['suboptions'] == undefined ? false : true;
          var optionHtml = "";
          data["options"].sort(function (a, b) {
            return a.order_no - b.order_no;
          });
          data["options"].forEach(function (option) {
            if (option.title != null) {
              var showTextbox = option.textbox_placeholder != null;
              var isSelected = selectedAnswerArr.includes(option.id);
              var includesSuboptions = hasSuboptions ? thisQuestion["suboptions"][option.id] != undefined ? true : false : false;
              optionHtml += "\n\t\t\t\t<div class=\"inputGroup custom-control\">\n\t\t\t\t  <input type=\"radio\" data-option_tag=\"".concat(option.tags, "\" id=\"").concat(option.id, "\" name=\"option").concat(data["question"]["id"], "\" class=\"custom-control-input dynamic-radio\" data-val=\"").concat(option.title[0].toUpperCase() + option.title.substr(1), "\"  data-hasSuboptions=\"").concat(includesSuboptions, "\" value=\"").concat(option.id, "\" \n\t\t\t").concat(isSelected ? "checked" : "", "\n\t\t\tdata-showtextbox=\"").concat(showTextbox, "\">\n\t\t\t\t  <label class=\"custom-control-label label1\" for=\"").concat(option.id, "\">").concat(option.title[0].toUpperCase() + option.title.substr(1), "</label>\n\t\t\t\t</div>\n\t\t\t");

              if (showTextbox) {
                var text_placeholder = option.textbox_placeholder;
                console.log('****', option);
                console.log('****', text_placeholder);

                try {
                  console.log('in');
                  var text_properties = JSON.parse(option.textbox_placeholder);
                  console.log('****', text_properties);
                  text_placeholder = text_properties.placeholder;
                  self.text_field_required_msg = text_properties.validations[0].message;
                  self.text_field_valid_msg = text_properties.validations[1].message;
                } catch (e) {
                  console.log('out');
                  text_placeholder = option.textbox_placeholder;
                }

                var otheranswers = selectedAnswerId != null ? lastQuestion.currentQuestion.answerJson.other_answers : null;
                var othertextval = otheranswers != null && otheranswers['answer_id'] != undefined ? otheranswers['answer_id'] : "";
                optionHtml += "\n\t\t\t\t<input type=\"text\" class=\"form-control input1 specifyBox1 dynamic-radio-textbox ".concat(isSelected ? "" : "d-none", "\" name=\"option").concat(option.id, "textbox\" placeholder=\"").concat(text_placeholder, "\" value=\"").concat(othertextval, "\">\n\t\t\t\t");
              } else if (hasSuboptions && thisQuestion["suboptions"][option.id] != undefined) {
                optionHtml += "<ul id=\"suboption-container-".concat(option.id, "\" class=\"custom-radio-inside specifyBoxradio suboption-container\" style=\"").concat(isSelected ? '' : 'display:none', "\"");
                var subOptionProperties = JSON.parse(option.suboption_properties);
                thisQuestion['suboptions'][option.id].forEach(function (suboption) {
                  var isSuboptionSelected = selectedAnswerArr.includes(suboption.id);

                  if (subOptionProperties.type == 'checkbox') {
                    optionHtml += "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t  <div class=\"inputGroup custom-control shareincidentform\">\n\t\t\t\t\t\t\t    <input type=\"checkbox\" id='".concat(suboption.id, "' name=\"suboption").concat(option.id, "checkbox\" class=\"custom-control-input\" value=\"").concat(suboption.id, "\" data-parentid=\"").concat(suboption.parent_id, "\" data-ismain=\"").concat(suboption.is_main, "\" data-val=\"").concat(suboption.title, "\" data-hasSuboptions=\"false\" data-showtextbox=\"false\" ").concat(isSuboptionSelected ? "checked" : "", " >\n\t\t\t\t\t\t\t    <label class=\"custom-control-label label1\" for=\"").concat(suboption.id, "\">").concat(suboption.title, "</label>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</li>");
                  } else {
                    if (suboption.textbox_placeholder == null) {
                      optionHtml += "\n\t\t\t\t\t\t\t<li>\n\t\t                      <div class=\"inputGroup custom-control shareincidentform\">\n\t\t                        <input type=\"radio\" id='".concat(suboption.id, "' name=\"option").concat(option.id, "radio\" class=\"custom-control-input dynamic-radio-suboption\" value=\"").concat(suboption.id, "\"  data-val=\"").concat(suboption.title, "\" ").concat(isSuboptionSelected ? "checked" : "", ">\n\t\t                        <label class=\"custom-control-label label1\" for=\"").concat(suboption.id, "\">").concat(suboption.title, "</label>\n\t\t                      </div>\n\t\t                    </li>");
                    } else {
                      optionHtml += "\n\t\t\t\t\t\t\t<li>\n\t\t                      <div class=\"inputGroup custom-control shareincidentform\">\n\t\t                        <input type=\"radio\" id='".concat(suboption.id, "' name=\"option").concat(option.id, "radio\" class=\"custom-control-input dynamic-radio-suboption\" value=\"").concat(suboption.id, "\"  data-val=\"").concat(suboption.title, "\" ").concat(isSuboptionSelected ? "checked" : "", " data-showtextbox=\"true\" data-option_tag=\"null\">\n\t\t                        <label class=\"custom-control-label label1\" for=\"").concat(suboption.id, "\" >").concat(suboption.title, "</label>\n\t\t                      </div>\n\t\t                    </li>");
                      optionHtml += "\n\t\t\t\t\t\t\t<input type=\"text\" id=\"dynamic-radio-textbox-suboption_id\" class=\"form-control input1 specifyBox1 dynamic-radio-textbox-suboption ".concat(isSuboptionSelected ? "" : "d-none", "\" name=\"option").concat(suboption.id, "textbox\" placeholder=\"").concat(suboption.textbox_placeholder, "\" value=\"\">\n\t\t\t\t\t\t\t");
                    }
                  }
                });
                optionHtml += "</ul>";
              }
            }
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(optionHtml);
          jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio").click(function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-textbox").addClass('d-none');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove(); // console.log('option'+ data.options[0].id)
            // var answer_id = $("input[name=" + 'option'+ data.options[0].id + "]:checked").val();
            // var answer = $("input[name="+ 'option'+ data.options[0].id+ "]:checked").data('val');
            // console.log(answer)
            //  // Someone Else
            //  if(answer == 'Someone Else')
            //  {
            //      self.verifyAlert()
            //  }

            var optionid = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id'); // Handle other textbox toggle

            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) {
              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").removeClass('d-none');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox").addClass('d-none');
                jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=option" + optionid + "textbox]+.validdation_text").remove();
              }
            } //Pop-up window information if sharing for someone else


            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('option_tag') == 'report_for_someone_else') {
              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) {
                console.log('someone else');
                self.verifyAlert();
              }
            } // Handle suboptions toggle


            if (!jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).is(':visible')) {
              // Hide all sub options first
              jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container").fadeOut('slow');
              jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input[type=checkbox]").prop('checked', false);
              jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input[type=radio]").prop('checked', false); // Show sub option if current selection has one

              if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('hassuboptions') == true && jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(':checked')) jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + optionid).fadeIn('slow');
            } // Run Validation


            self.validate_radio_sub_option(optionid);
          }); //for suboption other radion button
          //ngo selection

          jquery__WEBPACK_IMPORTED_MODULE_8__("body").on('click', '#suboption-container-642 .dynamic-radio-suboption', function () {
            var ngoId = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id');
            jquery__WEBPACK_IMPORTED_MODULE_8__('#options [data-val="An NGO"]').val(ngoId);
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-suboption").click(function (event) {
            var suboptionid = jquery__WEBPACK_IMPORTED_MODULE_8__(this).attr('id'); // Handle other textbox toggle

            if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).data('showtextbox') == true) {
              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-textbox-suboption").removeClass('d-none');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_8__(".dynamic-radio-textbox-suboption").addClass('d-none');
              jquery__WEBPACK_IMPORTED_MODULE_8__('#dynamic-radio-textbox-suboption_id').val('');
            } // Run Validation

          }); // $(".dynamic-radio-suboption").click(function(event) {
          // 	var suboptionid = $(this).attr('id');
          //   console.log('suboption id',suboptionid)
          // 	// Handle other textbox toggle
          // 	if($(this).data('showtextbox')==true) {
          // 		$("#dynamicNext").attr("disabled", "disabled");
          // 		$(".dynamic-radio-textbox-suboption").removeClass('d-none');
          // 	}else{
          // 		$(".dynamic-radio-textbox-suboption").addClass('d-none');
          //     // $("input[name=option"+suboptionid+"textbox]+.dynamic-radio-textbox-suboption").remove();
          // 	}
          // 	// Run Validation
          // });
          // Run validation on suboption click

          jquery__WEBPACK_IMPORTED_MODULE_8__(".suboption-container input").click(function (event) {
            self.validate_radio_sub_option(null);
          }); // Run Validation on textbox

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").keyup(function (event) {
            self.validate_radio_sub_option(null);
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=text]").change(function (event) {
            self.validate_radio_sub_option(null);
          });
        }
      }, {
        key: "validate_radio_sub_option",
        value: function validate_radio_sub_option(clickedId) {
          var is_valid = true;
          var self = this;
          var total_checked = jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=radio]:checked").length;

          if (total_checked == 0) {
            is_valid = false;
          }

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options input[type=radio]:checked").each(function (index, el) {
            var parentOptionId = jquery__WEBPACK_IMPORTED_MODULE_8__(el).attr('id'); // Check for suboptions validity

            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('hassuboptions') == true) {
              if (jquery__WEBPACK_IMPORTED_MODULE_8__("#suboption-container-" + parentOptionId + " input:checked").length == 0) is_valid = false;
            } // Check for other textbox validity


            if (jquery__WEBPACK_IMPORTED_MODULE_8__(el).data('showtextbox') == true) {
              var textboxSelector = 'input[name=option' + parentOptionId + 'textbox]';

              if (!self.ValidateText(jquery__WEBPACK_IMPORTED_MODULE_8__('input[name=option' + parentOptionId + 'textbox]').val())) {
                // Check if textbox is shown just now (not dirty)
                is_valid = false;

                if (clickedId != parentOptionId || clickedId == null) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').length == 0) jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector).after('<div class="validdation_text" style="color:red;">' + self.text_field_required_msg + '</div>');
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__(textboxSelector + '+.validdation_text').remove();
              }
            }
          });
          if (!is_valid) jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");else jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
          return is_valid;
        }
        /** Custom components */

      }, {
        key: "componentText",
        value: function componentText(data, properties, lastQuestion) {
          var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          /*var attr = properties.validations;
          if (typeof attr !== typeof undefined && attr !== false) {
              console.log(attr);
          }*/

          console.log(properties.validations.length);

          if (properties.validations.length == 4) {
            var validation_type = properties.validations[1].type != null ? properties.validations[1].type : "text";
            var number_req_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][0]["message"] + '</div>';
            var number_type_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][1]["message"] + '</div>';
            var number_min_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][2]["message"] + '</div>';
            var number_max_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][3]["message"] + '</div>';
          } else {
            var number_req_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][0]["message"] + '</div>';
            var text_alpha_valid_msg = '<div class="validdation_text" style="color:red;">' + properties["validations"][1]["message"] + '</div>';
          }

          console.log(validation_type);

          if (validation_type == 'number') {
            var elementHtml = "<input type=\"".concat(properties.validations[1].type, "\" id=\"option").concat(data["question"]["id"], "\" class=\"form-control inputBox getAge\" name=\"option").concat(data["question"]["id"], "\" placeholder=\"").concat(properties.placeholder, "\" value=\"").concat(answer, "\" min=\"").concat(properties.validations[2].min, "\" max=\"").concat(properties.validations[3].max, "\" >");
          } else {
            var elementHtml = "<input type=\"text\" id=\"option".concat(data["question"]["id"], "\" class=\"form-control inputBox getAge\" name=\"option").concat(data["question"]["id"], "\" placeholder=\"").concat(properties.placeholder, "\" value=\"").concat(answer, "\" >");
          } //var elementHtml = `<input type="text" id="option${data["question"]["id"]}" class="form-control inputBox getAge" name="option${data["question"]["id"]}" placeholder="${properties.placeholder}" value="${answer}" >`;
          //console.log(elementHtml);


          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml);
          jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').focus();
          jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").change(function (e) {
            console.log('20202020202020202020202020');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();

            if (validation_type == 'number') {
              var input_val = jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val();

              if (input_val) {
                if (input_val < 18) {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_min_msg + '</div>');
                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                } else if (input_val > 120) {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_max_msg + '</div>');
                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;" >' + number_type_msg + '</div>');
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              }
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");

              if (jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val() != "") {
                // let txt_value = JSON.stringify($(".inputBox").val());
                // console.log(JSON.parse(txt_value))
                // var regex = /^[\w\s.-]+$/
                // var value1 = JSON.parse(txt_value)
                // //Validate TextBox value against the Regex.
                // var isValid = regex.test(value1);
                // console.log(isValid)
                // if (isValid) {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled"); // }
                // else {
                //   $('#options').append('<div class="validdation_text" style="color:red;">' + text_alpha_valid_msg + '</div>');
                //   $("#dynamicNext").attr("disabled", "disabled");
                // }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('#options').append('<div class="validdation_text" style="color:red;">' + number_req_msg + '</div>');
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              }
            }
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").keyup(function (e) {
            console.log('20202020202020202020202020');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();

            if (validation_type == 'number') {
              var input_val = jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val();

              if (input_val) {
                if (input_val < 18) {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_min_msg + '</div>');
                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                } else if (input_val > 120) {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;">' + number_max_msg + '</div>');
                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                  jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
                }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.inputBox').after('<div class="validdation_text" style="color:red;" >' + number_type_msg + '</div>');
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              }
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
              jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");

              if (jquery__WEBPACK_IMPORTED_MODULE_8__(".inputBox").val() != "") {
                // let txt_value = JSON.stringify($(".inputBox").val());
                // console.log(JSON.parse(txt_value))
                // var regex = /^[\w\s.-]+$/
                // var value1 = JSON.parse(txt_value)
                // //Validate TextBox value against the Regex.
                // var isValid = regex.test(value1);
                // console.log(isValid)
                // if (isValid) {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_text').remove();
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled"); // }
                // else {
                //   $('#options').append('<div class="validdation_text" style="color:red;">' + text_alpha_valid_msg + '</div>');
                //   $("#dynamicNext").attr("disabled", "disabled");
                // }
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_8__('#options').append('<div class="validdation_text" style="color:red;">' + number_req_msg + '</div>');
                jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
              }
            }
          });
        }
        /** Get Todays date helper */

      }, {
        key: "getTodayDate",
        value: function getTodayDate(format) {
          var date = new Date().toJSON().slice(0, 10);
          console.log(date);

          switch (format) {
            case 'Y-m-d':
              return date;

            case 'd-m-Y':
              return date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);

            case 'm-d-Y':
              return date.slice(5, 7) + '/' + date.slice(8, 10) + '/' + date.slice(0, 4);

            default:
              return date;
          }
        }
      }, {
        key: "componentEstimateDatepicker",
        value: function componentEstimateDatepicker(data, lastQuestion) {
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
          var isEstimate = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isEstimate : false;
          var elementHtml = ""; // var setDate = answer == "" ? this.getTodayDate('Y-m-d') : answer;

          var de = new Date();
          var d = new Date(de),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          var date = [year, month, day].join('-');
          console.log(date);
          var select_date;
          this.translate.get('select_date').subscribe(function (res) {
            select_date = res;
          });
          var this_is_an_estimate;
          this.translate.get('this_is_an_estimate').subscribe(function (res) {
            this_is_an_estimate = res;
          });
          elementHtml = "<ion-list>\n  <ion-item class=\"newtextthree\">\n <ion-label position=\"stacked\">".concat(select_date, "</ion-label>\n   <!-- <ion-img width=\"24\" height=\"24\" src=\"assets/images/icons/calendar.svg\" tappable item-right> </ion-img>  -->\n <div class=\"new\">\n <ion-datetime  displayFormat=\"YYYY-MM-DD\" id=\"datetimepicker\" name=\"option").concat(data["question"]["id"], "\" data-target=\"#datetimepicker\" data-target=\"#datetimepicker\" data-toggle=\"datetimepicker\" [dayShortNames]=\"customDayShortNames\"\n  placeholder=\"").concat(select_date, "\"  max=\"").concat(date, "\"></ion-datetime>\n<ion-icon name=\"\" class=\"newcal\" slot=\"end\"></ion-icon>\n</div>\n\n</ion-item>\n\n</ion-list>\n<label class=\"custom-checkbox estimate\">\n").concat(this_is_an_estimate, "\n  <input type=\"checkbox\"  class=\"custom-control-input estimate\" id=\"estimate\"  name=\"option").concat(data["question"]["id"], "checked\" ").concat(isEstimate ? "checked" : "", ">\n  <span class=\"checkmark\"></span>\n\n                     </label>\n                     "); // `<div class="input-group date selectDate" id="datetimepicker" data-target-input="nearest">
          //                       <input type="text" class="form-control datetimepicker-input getDate"  name="option${data["question"]["id"]}" data-target="#datetimepicker">
          //                       <div class="input-group-append" data-target="#datetimepicker" data-toggle="datetimepicker">
          //                         <div class="input-group-text"> <img src="assets/images/calender.png" class="img-fluid"></div>
          //                       </div>
          //                     </div>
          //                     <div class="custom-control custom-checkbox estimate">
          //                       <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate" id="estimate" ${isEstimate?"checked":""}>
          //                       <label class="custom-control-label eLabel" for="estimate">This is an estimate</label>
          //                     </div>`;

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml); // Initialize Datepicker

          var todaydate = new Date(); // $('#datetimepicker').datetimepicker({
          //      format: 'L', 
          //      todayHighlight: true,
          //      showClose: true,
          //      toolbarplacement: 'bottom',
          //      showClear: true,
          //      //showClose: true,
          //      endDate: todaydate,
          //      maxDate: todaydate,
          //      icons: { 
          //        close: 'OK'
          //      },
          //      // debug: true
          // });
          //$('#datetimepicker').data("datetimepicker").date(setDate);

          jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
          jquery__WEBPACK_IMPORTED_MODULE_8__("#datetimepicker").click(function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
          });
        }
      }, {
        key: "componentEstimateTimeOrRangepicker",
        value: function componentEstimateTimeOrRangepicker(data, lastQuestion) {
          this.currentQuestion['elementId'] = "option" + data["question"]["id"];
          var answer = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.answer : "";
          var selectedTime = answer != "" && !answer.includes("-") ? answer : "";
          var selectedStarTime = answer.includes("-") ? answer.split("-")[0] : "";
          var selectedEndTime = answer.includes("-") ? answer.split("-")[1] : "";
          var isEstimate = lastQuestion != null ? lastQuestion.currentQuestion.answerJson.isEstimate : false;
          var elementHtml = "";
          var select_time;
          this.translate.get('select_time').subscribe(function (res) {
            select_time = res;
          });
          var select_time_range;
          this.translate.get('select_time_range').subscribe(function (res) {
            select_time_range = res;
          });
          var clear_time;
          this.translate.get('clear_time').subscribe(function (res) {
            clear_time = res;
          });
          var clear_time_range;
          this.translate.get('clear_time_range').subscribe(function (res) {
            clear_time_range = res;
          });
          var or;
          this.translate.get('or').subscribe(function (res) {
            or = res;
          });
          var this_is_an_estimate;
          this.translate.get('this_is_an_estimate').subscribe(function (res) {
            this_is_an_estimate = res;
          });
          var to;
          this.translate.get('to').subscribe(function (res) {
            to = res;
          });
          elementHtml = "\n    \n  <ion-row>\n        <ion-col size=\"12\">\n  <div class=\"newtextfour\">\n \n  <ion-row class=\"mainTime\" >\n        <ion-col size=\"12\">\n   <ion-list>\n     <ion-item>\n    <ion-label position=\"stacked\" >".concat(select_time, "</ion-label>\n       <div class=\"new\">\n     <ion-datetime class=\"input-group-append timePick timepicker\" id=\"timepicker\"  picker-format=\"hh : mm A\" display-format=\"hh : mm A\" name=\"option").concat(data["question"]["id"], "\" placeholder=").concat(select_time, " ></ion-datetime>\n     <ion-icon name=\"\" class=\"newtime\" slot=\"end\"></ion-icon>\n     \n     </div>\n       </ion-item>\n    <ion-item class=\"newclearitem\">\n    <p  class=\"clearTime themeColor newclear\" >").concat(clear_time, "</p>\n       </ion-item>\n  <label class=\"custom-checkbox estimate\">\n").concat(this_is_an_estimate, "\n  <input type=\"checkbox\" class=\"estimate1\" id=\"estimate1\" name=\"option").concat(data["question"]["id"], "checked\" ").concat(isEstimate ? "checked" : "", ">\n  <span class=\"checkmark\"></span>\n\n                     </label>\n   \n  </ion-list>\n  </ion-col>\n     </ion-row>\n        <ion-row>\n        <ion-col size=\"12\">\n      <div class=\"newadd\">").concat(or, "</div>\n      </ion-col>\n     </ion-row>\n\n     <ion-row class=\"timeRange\">\n        <ion-col size=\"12\">\n  <ion-list>\n  <ion-list-header >\n    <ion-label class=\"topmargin\" >").concat(select_time_range, "</ion-label>\n  </ion-list-header>\n   <ion-item class=\"timenext\">\n  \n       <div class=\"new\">\n     <ion-datetime id=\"timepicker1\" class=\"input-group-append rangeTime selectTime startTime\"   picker-format=\"hh : mm A\" display-format=\"hh : mm A\" name=\"option").concat(data["question"]["id"], "start\" placeholder=").concat(select_time, " ></ion-datetime>\n     <ion-icon name=\"\" class=\"newtime\" slot=\"end\" ></ion-icon>\n     </div>\n  </ion-item >\n    <ion-item class=\"newarea\">\n    <ion-label position=\"stacked\" >").concat(to, "</ion-label>\n  </ion-item >\n    <ion-item class=\"timenext\">\n    \n    <div class=\"new\">\n     <ion-datetime id=\"timepicker2\" class=\"input-group-append rangeTime selectTime endTime\"   picker-format=\"hh : mm A\" display-format=\"hh : mm A\" name=\"option").concat(data["question"]["id"], "end\" placeholder=").concat(select_time, "  ></ion-datetime>\n     <ion-icon name=\"\" class=\"newtime\" slot=\"end\"></ion-icon>\n     </div>\n  \n  </ion-item>\n  <ion-item class=\"newclear\">\n  <p class=\"clearTimeRange themeColor newclear\"  >").concat(clear_time_range, "</p>\n  </ion-item>\n  </ion-list>\n  \n  </ion-col>\n     </ion-row>\n     </div>\n      </ion-col>\n     </ion-row>"); // `<div class="mainTime">
          //                   <div class="row">
          //                     <div class="col-md-8">
          //                       <div class="input-group date selectTime" id="timepicker" data-target-input="nearest">
          //                         <input type="text" class="form-control datetimepicker-input timepicker" name="option${data["question"]["id"]}" data-target="#timepicker" value=""/>
          //                         <div class="input-group-append timePick" data-target="#timepicker" data-toggle="datetimepicker">
          //                           <div class="input-group-text">
          //                             <img src="assets/images/timer.png" class="img-fluid">
          //                           </div>
          //                         </div>
          //                       </div>
          //                     </div>
          //                     <div class="col-md-4">
          //                       <a class="clearTime btn animated fadeInUp pull-right mt-0 themeColor">Clear Time</a>
          //                     </div>
          //                   </div>
          //                   <div class="custom-control custom-checkbox estimate mb-20">
          //                     <input type="checkbox" name="option${data["question"]["id"]}checked" class="custom-control-input estimate1" id="estimate1" ${isEstimate?"checked":""}>
          //                     <label class="custom-control-label eLabel" for="estimate1">This is an estimate</label>
          //                   </div>
          //                 </div>
          //                 <div class="timeRange">
          //                   <div class="text-center">
          //                     <label class="themeColor">OR</label>
          //                   </div>
          //                   <div class="row">
          //                     <div class="col-md-12">
          //                       <label>
          //                         <h6 class="textColor">Select a Time Range</h6>
          //                       </label>
          //                     </div>
          //                     <div class="col-md-12">
          //                       <div class="row">
          //                         <div class="col-md-12">
          //                           <div class="row">
          //                             <div class="col-md-8">
          //                               <div class="col-md-5 p-0 float-left">
          //                                 <div class="input-group date selectTime" id="timepicker1" data-target-input="nearest">
          //                                   <input type="text" name="option${data["question"]["id"]}start" class="form-control datetimepicker-input startTime" data-target="#timepicker1" value=""/>
          //                                   <div class="input-group-append rangeTime" data-target="#timepicker1" data-toggle="datetimepicker">
          //                                     <div class="input-group-text"><img src="assets/images/timer.png" class="img-fluid"></div>
          //                                   </div>
          //                                 </div>
          //                               </div>
          //                               <div class="col-md-2 text-center p-0 float-left">
          //                                 <span class="themeColor">To</span>
          //                               </div>
          //                               <div class="col-md-5 p-0 float-left">
          //                                 <div class="input-group date selectTime" id="timepicker2" data-target-input="nearest">
          //                                   <input type="text" name="option${data["question"]["id"]}end" class="form-control datetimepicker-input endTime" data-target="#timepicker2" value=""/>
          //                                   <div class="input-group-append rangeTime" data-target="#timepicker2" data-toggle="datetimepicker">
          //                                     <div class="input-group-text"><img src="assets/images/timer.png" class="img-fluid"></div>
          //                                   </div>
          //                                 </div>
          //                               </div>
          //                             </div>
          //                             <div class="col-md-4">
          //                               <a class="clearTimeRange btn animated fadeInUp pull-right mt-0 themeColor">Clear Time Range</a>
          //                             </div>
          //                           </div>
          //                         </div>
          //                       </div>
          //                     </div>
          //                   </div> 
          //                 </div>
          //               `;

          jquery__WEBPACK_IMPORTED_MODULE_8__("#options").html(elementHtml); // Intialize Timepickers
          //   $('#timepicker').datetimepicker({
          //     format: 'LT',
          //   });
          // $('#timepicker').data("datetimepicker").date(selectedTime);
          //   $('#timepicker1').datetimepicker({
          //     format: 'LT',
          //   });
          // $('#timepicker1').data("datetimepicker").date(selectedStarTime);
          //   $('#timepicker2').datetimepicker({
          //     format: 'LT',
          //   });
          // $('#timepicker2').data("datetimepicker").date(selectedEndTime);
          // // Hide a picker if ones value is already selected
          // if (selectedTime != "") {
          //   $('.timeRange').css('opacity', '0.2').css('pointer-events', 'none');
          //   //$("#dynamicNext").removeAttr("disabled");
          // } else if (selectedStarTime != "" && selectedEndTime != "") {
          //   $('.mainTime').css('opacity', '0.2').css('pointer-events', 'none');
          //   //$("#dynamicNext").removeAttr("disabled");
          // }
          // Hide/show other picker based on selections

          var self = this;
          jquery__WEBPACK_IMPORTED_MODULE_8__(".timePick").change(function (e) {
            var answer1 = jquery__WEBPACK_IMPORTED_MODULE_8__("input[name=" + self.currentQuestion['elementId'] + "]").val();
            console.log(answer1);
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__(".timePick").click(function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_8__('.startTime').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.endTime').val('');
            console.log('in');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').css('opacity', '0.2').css('pointer-events', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_8__(".timeRange_valid").remove();
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__(".clearTime").click(function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timepicker').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.estimate1').prop('checked', false);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timeRange').css('opacity', '1').css('pointer-events', 'all');
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__(".rangeTime").click(function (e) {
            console.log(e);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.timepicker').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.estimate1').prop('checked', false);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.mainTime').css('opacity', '0.2').css('pointer-events', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_8__(".timeRange_valid").remove();
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").removeAttr("disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
          });
          jquery__WEBPACK_IMPORTED_MODULE_8__(".clearTimeRange").click(function (e) {
            console.log(e);
            jquery__WEBPACK_IMPORTED_MODULE_8__('.startTime').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.endTime').val('');
            jquery__WEBPACK_IMPORTED_MODULE_8__('.mainTime').css('opacity', '1').css('pointer-events', 'all');
            jquery__WEBPACK_IMPORTED_MODULE_8__("#dynamicNext").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_8__('.validdation_time').remove();
          });
        }
      }]);

      return PrimaryformPage;
    }();

    PrimaryformPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    PrimaryformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-primaryform',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./primaryform.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/primaryform/primaryform.page.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./primaryform.page.scss */
      "./src/app/primaryform/primaryform.page.scss"))["default"]]
    })], PrimaryformPage);
    /***/
  }
}]);
//# sourceMappingURL=primaryform-primaryform-module-es5.js.map
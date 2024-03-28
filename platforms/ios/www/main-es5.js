function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts", "tabs-tabs-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet dir={{dir}} [swipeGesture]=\"false\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | country-country-module */
        "country-country-module").then(__webpack_require__.bind(null,
        /*! ./country/country.module */
        "./src/app/country/country.module.ts")).then(function (m) {
          return m.CountryPageModule;
        });
      }
    }, {
      path: '',
      loadChildren: './tabs/tabs.module#TabsPageModule'
    }, {
      path: 'onboardingone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingone-onboardingone-module */
        "onboardingone-onboardingone-module").then(__webpack_require__.bind(null,
        /*! ./onboardingone/onboardingone.module */
        "./src/app/onboardingone/onboardingone.module.ts")).then(function (m) {
          return m.OnboardingonePageModule;
        });
      }
    }, {
      path: 'nointernet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | nointernet-nointernet-module */
        "nointernet-nointernet-module").then(__webpack_require__.bind(null,
        /*! ./nointernet/nointernet.module */
        "./src/app/nointernet/nointernet.module.ts")).then(function (m) {
          return m.NointernetPageModule;
        });
      }
    }, {
      path: 'onboardingtwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingtwo-onboardingtwo-module */
        "onboardingtwo-onboardingtwo-module").then(__webpack_require__.bind(null,
        /*! ./onboardingtwo/onboardingtwo.module */
        "./src/app/onboardingtwo/onboardingtwo.module.ts")).then(function (m) {
          return m.OnboardingtwoPageModule;
        });
      }
    }, {
      path: 'onboardingthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingthree-onboardingthree-module */
        "onboardingthree-onboardingthree-module").then(__webpack_require__.bind(null,
        /*! ./onboardingthree/onboardingthree.module */
        "./src/app/onboardingthree/onboardingthree.module.ts")).then(function (m) {
          return m.OnboardingthreePageModule;
        });
      }
    }, {
      path: 'onboardingfour',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingfour-onboardingfour-module */
        "onboardingfour-onboardingfour-module").then(__webpack_require__.bind(null,
        /*! ./onboardingfour/onboardingfour.module */
        "./src/app/onboardingfour/onboardingfour.module.ts")).then(function (m) {
          return m.OnboardingfourPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'languageselection',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | languageselection-languageselection-module */
        "languageselection-languageselection-module").then(__webpack_require__.bind(null,
        /*! ./languageselection/languageselection.module */
        "./src/app/languageselection/languageselection.module.ts")).then(function (m) {
          return m.LanguageselectionPageModule;
        });
      }
    }, {
      path: 'onboardingtwono',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboardingtwono-onboardingtwono-module */
        "onboardingtwono-onboardingtwono-module").then(__webpack_require__.bind(null,
        /*! ./onboardingtwono/onboardingtwono.module */
        "./src/app/onboardingtwono/onboardingtwono.module.ts")).then(function (m) {
          return m.OnboardingtwonoPageModule;
        });
      }
    }, {
      path: 'preframing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | preframing-preframing-module */
        "preframing-preframing-module").then(__webpack_require__.bind(null,
        /*! ./preframing/preframing.module */
        "./src/app/preframing/preframing.module.ts")).then(function (m) {
          return m.PreframingPageModule;
        });
      }
    }, {
      path: 'preframingtwo',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | preframingtwo-preframingtwo-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("preframingtwo-preframingtwo-module")]).then(__webpack_require__.bind(null,
        /*! ./preframingtwo/preframingtwo.module */
        "./src/app/preframingtwo/preframingtwo.module.ts")).then(function (m) {
          return m.PreframingtwoPageModule;
        });
      }
    }, {
      path: 'reportfiledone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledone-reportfiledone-module */
        "reportfiledone-reportfiledone-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledone/reportfiledone.module */
        "./src/app/reportfiledone/reportfiledone.module.ts")).then(function (m) {
          return m.ReportfiledonePageModule;
        });
      }
    }, {
      path: 'reportfiledtwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledtwo-reportfiledtwo-module */
        "reportfiledtwo-reportfiledtwo-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledtwo/reportfiledtwo.module */
        "./src/app/reportfiledtwo/reportfiledtwo.module.ts")).then(function (m) {
          return m.ReportfiledtwoPageModule;
        });
      }
    }, {
      path: 'reportfiledthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledthree-reportfiledthree-module */
        "reportfiledthree-reportfiledthree-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledthree/reportfiledthree.module */
        "./src/app/reportfiledthree/reportfiledthree.module.ts")).then(function (m) {
          return m.ReportfiledthreePageModule;
        });
      }
    }, {
      path: 'reportfiledfour',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledfour-reportfiledfour-module */
        "reportfiledfour-reportfiledfour-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledfour/reportfiledfour.module */
        "./src/app/reportfiledfour/reportfiledfour.module.ts")).then(function (m) {
          return m.ReportfiledfourPageModule;
        });
      }
    }, {
      path: 'reportfiledfive',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledfive-reportfiledfive-module */
        "reportfiledfive-reportfiledfive-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledfive/reportfiledfive.module */
        "./src/app/reportfiledfive/reportfiledfive.module.ts")).then(function (m) {
          return m.ReportfiledfivePageModule;
        });
      }
    }, {
      path: 'reportfiledsix',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledsix-reportfiledsix-module */
        "reportfiledsix-reportfiledsix-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledsix/reportfiledsix.module */
        "./src/app/reportfiledsix/reportfiledsix.module.ts")).then(function (m) {
          return m.ReportfiledsixPageModule;
        });
      }
    }, {
      path: 'reportfiledseven',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledseven-reportfiledseven-module */
        "reportfiledseven-reportfiledseven-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledseven/reportfiledseven.module */
        "./src/app/reportfiledseven/reportfiledseven.module.ts")).then(function (m) {
          return m.ReportfiledsevenPageModule;
        });
      }
    }, {
      path: 'reportfiledeight',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledeight-reportfiledeight-module */
        "reportfiledeight-reportfiledeight-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledeight/reportfiledeight.module */
        "./src/app/reportfiledeight/reportfiledeight.module.ts")).then(function (m) {
          return m.ReportfiledeightPageModule;
        });
      }
    }, {
      path: 'reportfilednine',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfilednine-reportfilednine-module */
        "reportfilednine-reportfilednine-module").then(__webpack_require__.bind(null,
        /*! ./reportfilednine/reportfilednine.module */
        "./src/app/reportfilednine/reportfilednine.module.ts")).then(function (m) {
          return m.ReportfiledninePageModule;
        });
      }
    }, {
      path: 'reportfiledten',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledten-reportfiledten-module */
        "reportfiledten-reportfiledten-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledten/reportfiledten.module */
        "./src/app/reportfiledten/reportfiledten.module.ts")).then(function (m) {
          return m.ReportfiledtenPageModule;
        });
      }
    }, {
      path: 'reportfiledeleven',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledeleven-reportfiledeleven-module */
        "reportfiledeleven-reportfiledeleven-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledeleven/reportfiledeleven.module */
        "./src/app/reportfiledeleven/reportfiledeleven.module.ts")).then(function (m) {
          return m.ReportfiledelevenPageModule;
        });
      }
    }, {
      path: 'reportfiledtwelve',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reportfiledtwelve-reportfiledtwelve-module */
        "reportfiledtwelve-reportfiledtwelve-module").then(__webpack_require__.bind(null,
        /*! ./reportfiledtwelve/reportfiledtwelve.module */
        "./src/app/reportfiledtwelve/reportfiledtwelve.module.ts")).then(function (m) {
          return m.ReportfiledtwelvePageModule;
        });
      }
    }, {
      path: 'preframingsecondary',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | preframingsecondary-preframingsecondary-module */
        "preframingsecondary-preframingsecondary-module").then(__webpack_require__.bind(null,
        /*! ./preframingsecondary/preframingsecondary.module */
        "./src/app/preframingsecondary/preframingsecondary.module.ts")).then(function (m) {
          return m.PreframingsecondaryPageModule;
        });
      }
    }, {
      path: 'domesticviolence',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | domesticviolence-domesticviolence-module */
        "domesticviolence-domesticviolence-module").then(__webpack_require__.bind(null,
        /*! ./domesticviolence/domesticviolence.module */
        "./src/app/domesticviolence/domesticviolence.module.ts")).then(function (m) {
          return m.DomesticviolencePageModule;
        });
      }
    }, {
      path: 'safteytipone',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | safteytipone-safteytipone-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("safteytipone-safteytipone-module")]).then(__webpack_require__.bind(null,
        /*! ./safteytipone/safteytipone.module */
        "./src/app/safteytipone/safteytipone.module.ts")).then(function (m) {
          return m.SafteytiponePageModule;
        });
      }
    }, {
      path: 'safteytiptwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytiptwo-safteytiptwo-module */
        "safteytiptwo-safteytiptwo-module").then(__webpack_require__.bind(null,
        /*! ./safteytiptwo/safteytiptwo.module */
        "./src/app/safteytiptwo/safteytiptwo.module.ts")).then(function (m) {
          return m.SafteytiptwoPageModule;
        });
      }
    }, {
      path: 'safteytipthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytipthree-safteytipthree-module */
        "safteytipthree-safteytipthree-module").then(__webpack_require__.bind(null,
        /*! ./safteytipthree/safteytipthree.module */
        "./src/app/safteytipthree/safteytipthree.module.ts")).then(function (m) {
          return m.SafteytipthreePageModule;
        });
      }
    }, {
      path: 'safteytipfour',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytipfour-safteytipfour-module */
        "safteytipfour-safteytipfour-module").then(__webpack_require__.bind(null,
        /*! ./safteytipfour/safteytipfour.module */
        "./src/app/safteytipfour/safteytipfour.module.ts")).then(function (m) {
          return m.SafteytipfourPageModule;
        });
      }
    }, {
      path: 'safteytip-thankyou',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safteytip-thankyou-safteytip-thankyou-module */
        "safteytip-thankyou-safteytip-thankyou-module").then(__webpack_require__.bind(null,
        /*! ./safteytip-thankyou/safteytip-thankyou.module */
        "./src/app/safteytip-thankyou/safteytip-thankyou.module.ts")).then(function (m) {
          return m.SafteytipThankyouPageModule;
        });
      }
    }, {
      path: 'viewsafety',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewsafety-viewsafety-module */
        "viewsafety-viewsafety-module").then(__webpack_require__.bind(null,
        /*! ./viewsafety/viewsafety.module */
        "./src/app/viewsafety/viewsafety.module.ts")).then(function (m) {
          return m.ViewsafetyPageModule;
        });
      }
    }, {
      path: 'viewsafteydetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewsafteydetail-viewsafteydetail-module */
        "viewsafteydetail-viewsafteydetail-module").then(__webpack_require__.bind(null,
        /*! ./viewsafteydetail/viewsafteydetail.module */
        "./src/app/viewsafteydetail/viewsafteydetail.module.ts")).then(function (m) {
          return m.ViewsafteydetailPageModule;
        });
      }
    }, {
      path: 'viewsafteydetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewsafteydetail-viewsafteydetail-module */
        "viewsafteydetail-viewsafteydetail-module").then(__webpack_require__.bind(null,
        /*! ./viewsafteydetail/viewsafteydetail.module */
        "./src/app/viewsafteydetail/viewsafteydetail.module.ts")).then(function (m) {
          return m.ViewsafteydetailPageModule;
        });
      }
    }, {
      path: 'viewreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewreport-viewreport-module */
        "viewreport-viewreport-module").then(__webpack_require__.bind(null,
        /*! ./viewreport/viewreport.module */
        "./src/app/viewreport/viewreport.module.ts")).then(function (m) {
          return m.ViewreportPageModule;
        });
      }
    }, {
      path: 'help',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | help-help-module */
        "help-help-module").then(__webpack_require__.bind(null,
        /*! ./help/help.module */
        "./src/app/help/help.module.ts")).then(function (m) {
          return m.HelpPageModule;
        });
      }
    }, {
      path: 'helplines',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | helplines-helplines-module */
        "helplines-helplines-module").then(__webpack_require__.bind(null,
        /*! ./helplines/helplines.module */
        "./src/app/helplines/helplines.module.ts")).then(function (m) {
          return m.HelplinesPageModule;
        });
      }
    }, {
      path: 'filter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | filter-filter-module */
        "filter-filter-module").then(__webpack_require__.bind(null,
        /*! ./filter/filter.module */
        "./src/app/filter/filter.module.ts")).then(function (m) {
          return m.FilterPageModule;
        });
      }
    }, {
      path: 'form-one',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | SecondaryForm-form-one-form-one-module */
        "SecondaryForm-form-one-form-one-module").then(__webpack_require__.bind(null,
        /*! ./SecondaryForm/form-one/form-one.module */
        "./src/app/SecondaryForm/form-one/form-one.module.ts")).then(function (m) {
          return m.FormOnePageModule;
        });
      }
    }, {
      path: 'form-two',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | SecondaryForm-form-two-form-two-module */
        "SecondaryForm-form-two-form-two-module").then(__webpack_require__.bind(null,
        /*! ./SecondaryForm/form-two/form-two.module */
        "./src/app/SecondaryForm/form-two/form-two.module.ts")).then(function (m) {
          return m.FormTwoPageModule;
        });
      }
    }, {
      path: 'sevensubfieldone',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sevensubfieldone-sevensubfieldone-module */
        "sevensubfieldone-sevensubfieldone-module").then(__webpack_require__.bind(null,
        /*! ./sevensubfieldone/sevensubfieldone.module */
        "./src/app/sevensubfieldone/sevensubfieldone.module.ts")).then(function (m) {
          return m.SevensubfieldonePageModule;
        });
      }
    }, {
      path: 'sevensubfieldtwo',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sevensubfieldtwo-sevensubfieldtwo-module */
        "sevensubfieldtwo-sevensubfieldtwo-module").then(__webpack_require__.bind(null,
        /*! ./sevensubfieldtwo/sevensubfieldtwo.module */
        "./src/app/sevensubfieldtwo/sevensubfieldtwo.module.ts")).then(function (m) {
          return m.SevensubfieldtwoPageModule;
        });
      }
    }, {
      path: 'sevensubfieldthree',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sevensubfieldthree-sevensubfieldthree-module */
        "sevensubfieldthree-sevensubfieldthree-module").then(__webpack_require__.bind(null,
        /*! ./sevensubfieldthree/sevensubfieldthree.module */
        "./src/app/sevensubfieldthree/sevensubfieldthree.module.ts")).then(function (m) {
          return m.SevensubfieldthreePageModule;
        });
      }
    }, {
      path: 'safetyfilter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | safetyfilter-safetyfilter-module */
        "safetyfilter-safetyfilter-module").then(__webpack_require__.bind(null,
        /*! ./safetyfilter/safetyfilter.module */
        "./src/app/safetyfilter/safetyfilter.module.ts")).then(function (m) {
          return m.SafetyfilterPageModule;
        });
      }
    }, {
      path: 'viewreportdetail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewreportdetail-viewreportdetail-module */
        "viewreportdetail-viewreportdetail-module").then(__webpack_require__.bind(null,
        /*! ./viewreportdetail/viewreportdetail.module */
        "./src/app/viewreportdetail/viewreportdetail.module.ts")).then(function (m) {
          return m.ViewreportdetailPageModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | menu-menu-module */
        "menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./menu/menu.module */
        "./src/app/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      }
    }, {
      path: 'volunteer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | volunteer-volunteer-module */
        "volunteer-volunteer-module").then(__webpack_require__.bind(null,
        /*! ./volunteer/volunteer.module */
        "./src/app/volunteer/volunteer.module.ts")).then(function (m) {
          return m.VolunteerPageModule;
        });
      }
    }, {
      path: 'donate',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | donate-donate-module */
        "donate-donate-module").then(__webpack_require__.bind(null,
        /*! ./donate/donate.module */
        "./src/app/donate/donate.module.ts")).then(function (m) {
          return m.DonatePageModule;
        });
      }
    }, {
      path: 'contact',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-contact-module */
        "contact-contact-module").then(__webpack_require__.bind(null,
        /*! ./contact/contact.module */
        "./src/app/contact/contact.module.ts")).then(function (m) {
          return m.ContactPageModule;
        });
      }
    }, {
      path: 'setting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-setting-module */
        "setting-setting-module").then(__webpack_require__.bind(null,
        /*! ./setting/setting.module */
        "./src/app/setting/setting.module.ts")).then(function (m) {
          return m.SettingPageModule;
        });
      }
    }, {
      path: 'privacypolicy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | privacypolicy-privacypolicy-module */
        "privacypolicy-privacypolicy-module").then(__webpack_require__.bind(null,
        /*! ./privacypolicy/privacypolicy.module */
        "./src/app/privacypolicy/privacypolicy.module.ts")).then(function (m) {
          return m.PrivacypolicyPageModule;
        });
      }
    }, {
      path: 'terms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | terms-terms-module */
        "terms-terms-module").then(__webpack_require__.bind(null,
        /*! ./terms/terms.module */
        "./src/app/terms/terms.module.ts")).then(function (m) {
          return m.TermsPageModule;
        });
      }
    }, {
      path: 'faq',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | faq-faq-module */
        "faq-faq-module").then(__webpack_require__.bind(null,
        /*! ./faq/faq.module */
        "./src/app/faq/faq.module.ts")).then(function (m) {
          return m.FaqPageModule;
        });
      }
    }, {
      path: 'myviewreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | myviewreport-myviewreport-module */
        "myviewreport-myviewreport-module").then(__webpack_require__.bind(null,
        /*! ./myviewreport/myviewreport.module */
        "./src/app/myviewreport/myviewreport.module.ts")).then(function (m) {
          return m.MyviewreportPageModule;
        });
      }
    }, {
      path: 'myreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | myreport-myreport-module */
        "myreport-myreport-module").then(__webpack_require__.bind(null,
        /*! ./myreport/myreport.module */
        "./src/app/myreport/myreport.module.ts")).then(function (m) {
          return m.MyreportPageModule;
        });
      }
    }, {
      path: 'editreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editreport-editreport-module */
        "editreport-editreport-module").then(__webpack_require__.bind(null,
        /*! ./editreport/editreport.module */
        "./src/app/editreport/editreport.module.ts")).then(function (m) {
          return m.EditreportPageModule;
        });
      }
    }, {
      path: 'hospital',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | hospital-hospital-module */
        "hospital-hospital-module").then(__webpack_require__.bind(null,
        /*! ./hospital/hospital.module */
        "./src/app/hospital/hospital.module.ts")).then(function (m) {
          return m.HospitalPageModule;
        });
      }
    }, {
      path: 'findhospital',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | findhospital-findhospital-module */
        "findhospital-findhospital-module").then(__webpack_require__.bind(null,
        /*! ./findhospital/findhospital.module */
        "./src/app/findhospital/findhospital.module.ts")).then(function (m) {
          return m.FindhospitalPageModule;
        });
      }
    }, {
      path: 'hospitallisting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | hospitallisting-hospitallisting-module */
        "hospitallisting-hospitallisting-module").then(__webpack_require__.bind(null,
        /*! ./hospitallisting/hospitallisting.module */
        "./src/app/hospitallisting/hospitallisting.module.ts")).then(function (m) {
          return m.HospitallistingPageModule;
        });
      }
    }, {
      path: 'police',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | police-police-module */
        "police-police-module").then(__webpack_require__.bind(null,
        /*! ./police/police.module */
        "./src/app/police/police.module.ts")).then(function (m) {
          return m.PolicePageModule;
        });
      }
    }, {
      path: 'findpolice',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | findpolice-findpolice-module */
        "findpolice-findpolice-module").then(__webpack_require__.bind(null,
        /*! ./findpolice/findpolice.module */
        "./src/app/findpolice/findpolice.module.ts")).then(function (m) {
          return m.FindpolicePageModule;
        });
      }
    }, {
      path: 'policelisting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | policelisting-policelisting-module */
        "policelisting-policelisting-module").then(__webpack_require__.bind(null,
        /*! ./policelisting/policelisting.module */
        "./src/app/policelisting/policelisting.module.ts")).then(function (m) {
          return m.PolicelistingPageModule;
        });
      }
    }, {
      path: 'legalresources',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | legalresources-legalresources-module */
        "legalresources-legalresources-module").then(__webpack_require__.bind(null,
        /*! ./legalresources/legalresources.module */
        "./src/app/legalresources/legalresources.module.ts")).then(function (m) {
          return m.LegalresourcesPageModule;
        });
      }
    }, {
      path: 'ipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ipc-ipc-module */
        "ipc-ipc-module").then(__webpack_require__.bind(null,
        /*! ./ipc/ipc.module */
        "./src/app/ipc/ipc.module.ts")).then(function (m) {
          return m.IpcPageModule;
        });
      }
    }, {
      path: 'onlineipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onlineipc-onlineipc-module */
        "onlineipc-onlineipc-module").then(__webpack_require__.bind(null,
        /*! ./onlineipc/onlineipc.module */
        "./src/app/onlineipc/onlineipc.module.ts")).then(function (m) {
          return m.OnlineipcPageModule;
        });
      }
    }, {
      path: 'sexualassaultipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sexualassaultipc-sexualassaultipc-module */
        "sexualassaultipc-sexualassaultipc-module").then(__webpack_require__.bind(null,
        /*! ./sexualassaultipc/sexualassaultipc.module */
        "./src/app/sexualassaultipc/sexualassaultipc.module.ts")).then(function (m) {
          return m.SexualassaultipcPageModule;
        });
      }
    }, {
      path: 'oglingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | oglingipc-oglingipc-module */
        "oglingipc-oglingipc-module").then(__webpack_require__.bind(null,
        /*! ./oglingipc/oglingipc.module */
        "./src/app/oglingipc/oglingipc.module.ts")).then(function (m) {
          return m.OglingipcPageModule;
        });
      }
    }, {
      path: 'takingphotoipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | takingphotoipc-takingphotoipc-module */
        "takingphotoipc-takingphotoipc-module").then(__webpack_require__.bind(null,
        /*! ./takingphotoipc/takingphotoipc.module */
        "./src/app/takingphotoipc/takingphotoipc.module.ts")).then(function (m) {
          return m.TakingphotoipcPageModule;
        });
      }
    }, {
      path: 'commentingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | commentingipc-commentingipc-module */
        "commentingipc-commentingipc-module").then(__webpack_require__.bind(null,
        /*! ./commentingipc/commentingipc.module */
        "./src/app/commentingipc/commentingipc.module.ts")).then(function (m) {
          return m.CommentingipcPageModule;
        });
      }
    }, {
      path: 'indecentipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | indecentipc-indecentipc-module */
        "indecentipc-indecentipc-module").then(__webpack_require__.bind(null,
        /*! ./indecentipc/indecentipc.module */
        "./src/app/indecentipc/indecentipc.module.ts")).then(function (m) {
          return m.IndecentipcPageModule;
        });
      }
    }, {
      path: 'touchingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | touchingipc-touchingipc-module */
        "touchingipc-touchingipc-module").then(__webpack_require__.bind(null,
        /*! ./touchingipc/touchingipc.module */
        "./src/app/touchingipc/touchingipc.module.ts")).then(function (m) {
          return m.TouchingipcPageModule;
        });
      }
    }, {
      path: 'sexualinvitesipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sexualinvitesipc-sexualinvitesipc-module */
        "sexualinvitesipc-sexualinvitesipc-module").then(__webpack_require__.bind(null,
        /*! ./sexualinvitesipc/sexualinvitesipc.module */
        "./src/app/sexualinvitesipc/sexualinvitesipc.module.ts")).then(function (m) {
          return m.SexualinvitesipcPageModule;
        });
      }
    }, {
      path: 'chainsnachtingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chainsnachtingipc-chainsnachtingipc-module */
        "chainsnachtingipc-chainsnachtingipc-module").then(__webpack_require__.bind(null,
        /*! ./chainsnachtingipc/chainsnachtingipc.module */
        "./src/app/chainsnachtingipc/chainsnachtingipc.module.ts")).then(function (m) {
          return m.ChainsnachtingipcPageModule;
        });
      }
    }, {
      path: 'humanipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | humanipc-humanipc-module */
        "humanipc-humanipc-module").then(__webpack_require__.bind(null,
        /*! ./humanipc/humanipc.module */
        "./src/app/humanipc/humanipc.module.ts")).then(function (m) {
          return m.HumanipcPageModule;
        });
      }
    }, {
      path: 'catcallsipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | catcallsipc-catcallsipc-module */
        "catcallsipc-catcallsipc-module").then(__webpack_require__.bind(null,
        /*! ./catcallsipc/catcallsipc.module */
        "./src/app/catcallsipc/catcallsipc.module.ts")).then(function (m) {
          return m.CatcallsipcPageModule;
        });
      }
    }, {
      path: 'stakingipc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | stakingipc-stakingipc-module */
        "stakingipc-stakingipc-module").then(__webpack_require__.bind(null,
        /*! ./stakingipc/stakingipc.module */
        "./src/app/stakingipc/stakingipc.module.ts")).then(function (m) {
          return m.StakingipcPageModule;
        });
      }
    }, {
      path: 'mysafety',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mysafety-mysafety-module */
        "mysafety-mysafety-module").then(__webpack_require__.bind(null,
        /*! ./mysafety/mysafety.module */
        "./src/app/mysafety/mysafety.module.ts")).then(function (m) {
          return m.MysafetyPageModule;
        });
      }
    }, {
      path: 'mysafetyreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mysafetyreport-mysafetyreport-module */
        "mysafetyreport-mysafetyreport-module").then(__webpack_require__.bind(null,
        /*! ./mysafetyreport/mysafetyreport.module */
        "./src/app/mysafetyreport/mysafetyreport.module.ts")).then(function (m) {
          return m.MysafetyreportPageModule;
        });
      }
    }, {
      path: 'editsafetytip',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | editsafetytip-editsafetytip-module */
        "editsafetytip-editsafetytip-module").then(__webpack_require__.bind(null,
        /*! ./editsafetytip/editsafetytip.module */
        "./src/app/editsafetytip/editsafetytip.module.ts")).then(function (m) {
          return m.EditsafetytipPageModule;
        });
      }
    }, {
      path: 'aboutsafecity',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | aboutsafecity-aboutsafecity-module */
        "aboutsafecity-aboutsafecity-module").then(__webpack_require__.bind(null,
        /*! ./aboutsafecity/aboutsafecity.module */
        "./src/app/aboutsafecity/aboutsafecity.module.ts")).then(function (m) {
          return m.AboutsafecityPageModule;
        });
      }
    }, {
      path: 'filing-fir',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | filing-fir-filing-fir-module */
        "filing-fir-filing-fir-module").then(__webpack_require__.bind(null,
        /*! ./filing-fir/filing-fir.module */
        "./src/app/filing-fir/filing-fir.module.ts")).then(function (m) {
          return m.FilingFIRPageModule;
        });
      }
    }, {
      path: 'countrymenu',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | countrymenu-countrymenu-module */
        [__webpack_require__.e("common"), __webpack_require__.e("countrymenu-countrymenu-module")]).then(__webpack_require__.bind(null,
        /*! ./countrymenu/countrymenu.module */
        "./src/app/countrymenu/countrymenu.module.ts")).then(function (m) {
          return m.CountrymenuPageModule;
        });
      }
    }, {
      path: 'languagemenu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | languagemenu-languagemenu-module */
        "languagemenu-languagemenu-module").then(__webpack_require__.bind(null,
        /*! ./languagemenu/languagemenu.module */
        "./src/app/languagemenu/languagemenu.module.ts")).then(function (m) {
          return m.LanguagemenuPageModule;
        });
      }
    }, {
      path: 'organization',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | organization-organization-module */
        "organization-organization-module").then(__webpack_require__.bind(null,
        /*! ./organization/organization.module */
        "./src/app/organization/organization.module.ts")).then(function (m) {
          return m.OrganizationPageModule;
        });
      }
    }, {
      path: 'verfication',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | verfication-verfication-module */
        "verfication-verfication-module").then(__webpack_require__.bind(null,
        /*! ./verfication/verfication.module */
        "./src/app/verfication/verfication.module.ts")).then(function (m) {
          return m.VerficationPageModule;
        });
      }
    }, {
      path: 'modelreport',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modelreport-modelreport-module */
        "modelreport-modelreport-module").then(__webpack_require__.bind(null,
        /*! ./modelreport/modelreport.module */
        "./src/app/modelreport/modelreport.module.ts")).then(function (m) {
          return m.ModelreportPageModule;
        });
      }
    }, {
      path: 'primaryform',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | primaryform-primaryform-module */
        [__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("primaryform-primaryform-module")]).then(__webpack_require__.bind(null,
        /*! ./primaryform/primaryform.module */
        "./src/app/primaryform/primaryform.module.ts")).then(function (m) {
          return m.PrimaryformPageModule;
        });
      }
    }, {
      path: 'incidentfilter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | incidentfilter-incidentfilter-module */
        "incidentfilter-incidentfilter-module").then(__webpack_require__.bind(null,
        /*! ./incidentfilter/incidentfilter.module */
        "./src/app/incidentfilter/incidentfilter.module.ts")).then(function (m) {
          return m.IncidentfilterPageModule;
        });
      }
    }, {
      path: 'organizationmenu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | organizationmenu-organizationmenu-module */
        "organizationmenu-organizationmenu-module").then(__webpack_require__.bind(null,
        /*! ./organizationmenu/organizationmenu.module */
        "./src/app/organizationmenu/organizationmenu.module.ts")).then(function (m) {
          return m.OrganizationmenuPageModule;
        });
      }
    }, {
      path: 'chat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chat-chat-module */
        "chat-chat-module").then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'detailpopup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | detailpopup-detailpopup-module */
        "detailpopup-detailpopup-module").then(__webpack_require__.bind(null,
        /*! ./detailpopup/detailpopup.module */
        "./src/app/detailpopup/detailpopup.module.ts")).then(function (m) {
          return m.DetailpopupPageModule;
        });
      }
    }, {
      path: 'wellness',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wellness-wellness-module */
        "wellness-wellness-module").then(__webpack_require__.bind(null,
        /*! ./wellness/wellness.module */
        "./src/app/wellness/wellness.module.ts")).then(function (m) {
          return m.WellnessPageModule;
        });
      }
    }, {
      path: 'viewdata',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | viewdata-viewdata-module */
        "viewdata-viewdata-module").then(__webpack_require__.bind(null,
        /*! ./viewdata/viewdata.module */
        "./src/app/viewdata/viewdata.module.ts")).then(function (m) {
          return m.ViewdataPageModule;
        });
      }
    }, {
      path: 'countrymenupopover',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | countrymenupopover-countrymenupopover-module */
        [__webpack_require__.e("common"), __webpack_require__.e("countrymenupopover-countrymenupopover-module")]).then(__webpack_require__.bind(null,
        /*! ./countrymenupopover/countrymenupopover.module */
        "./src/app/countrymenupopover/countrymenupopover.module.ts")).then(function (m) {
          return m.CountrymenupopoverPageModule;
        });
      }
    }, {
      path: 'countrymenupopover',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | countrymenupopover-countrymenupopover-module */
        [__webpack_require__.e("common"), __webpack_require__.e("countrymenupopover-countrymenupopover-module")]).then(__webpack_require__.bind(null,
        /*! ./countrymenupopover/countrymenupopover.module */
        "./src/app/countrymenupopover/countrymenupopover.module.ts")).then(function (m) {
          return m.CountrymenupopoverPageModule;
        });
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Gelion\";\n  src: url(\"/assets/fonts/Gelion-Medium.eot\");\n  src: url(\"/assets/fonts/Gelion-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Gelion-Medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/Gelion-Medium.woff\") format(\"woff\"), url(\"/assets/fonts/Gelion-Medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/Gelion-Medium.svg#Gelion-Medium\") format(\"svg\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gelion\";\n  src: url(\"/assets/fonts/Gelion-Regular.eot\");\n  src: url(\"/assets/fonts/Gelion-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Gelion-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/Gelion-Regular.woff\") format(\"woff\"), url(\"/assets/fonts/Gelion-Regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/Gelion-Regular.svg#Gelion-Regular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Gelion Semi\";\n  src: url(\"/assets/fonts/Gelion-SemiBold.eot\");\n  src: url(\"/assets/fonts/Gelion-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/Gelion-SemiBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/Gelion-SemiBold.woff\") format(\"woff\"), url(\"/assets/fonts/Gelion-SemiBold.ttf\") format(\"truetype\"), url(\"/assets/fonts/Gelion-SemiBold.svg#Gelion-SemiBold\") format(\"svg\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\nbody {\n  font-family: \"Gelion\";\n}\n.alert-head {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSwrVEFBQTtFQUtBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hKO0FES0E7RUFDSSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EscVVBQUE7RUFLQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFVBO0VBQ0ksMEJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJVQUFBO0VBS0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDWko7QURnQkE7RUFFRyxxQkFBQTtBQ2ZIO0FEbUJBO0VBRUEsd0JBQUE7QUNqQkEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2VsaW9uJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0uZW90Jyk7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcclxuICAgICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLU1lZGl1bS5zdmcjR2VsaW9uLU1lZGl1bScpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHZWxpb24nO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIuZW90Jyk7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICB1cmwoJy9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci5zdmcjR2VsaW9uLVJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dlbGlvbiBTZW1pJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC5lb3QnKTtcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgIHVybCgnL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICAgICAgdXJsKCcvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC5zdmcjR2VsaW9uLVNlbWlCb2xkJykgZm9ybWF0KCdzdmcnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbn1cclxuXHJcblxyXG5ib2R5XHJcbntcclxuICAgZm9udC1mYW1pbHk6ICdHZWxpb24nO1xyXG5cclxufVxyXG5cclxuLmFsZXJ0LWhlYWRcclxue1xyXG5kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG4gICBcclxuXHJcblxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VsaW9uXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0uZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1NZWRpdW0uc3ZnI0dlbGlvbi1NZWRpdW1cIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHZWxpb25cIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tUmVndWxhci5zdmcjR2VsaW9uLVJlZ3VsYXJcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHZWxpb24gU2VtaVwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLVNlbWlCb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9HZWxpb24tU2VtaUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL0dlbGlvbi1TZW1pQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi9hc3NldHMvZm9udHMvR2VsaW9uLVNlbWlCb2xkLnN2ZyNHZWxpb24tU2VtaUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJHZWxpb25cIjtcbn1cblxuLmFsZXJ0LWhlYWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, router, translate, network, statusBar, navController, zone) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.router = router;
        this.translate = translate;
        this.network = network;
        this.statusBar = statusBar;
        this.navController = navController;
        this.zone = zone;
        this.dir = 'ltr';
        this.initializeApp();
        this.translate.onLangChange.subscribe(function (ev) {
          console.log(ev);

          if (ev.lang == "ar") {
            _this.dir = 'rtl';
            console.log(_this.dir);
          } else {
            _this.dir = 'ltr';
            console.log(_this.dir);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.hide(); // this.splashScreen.hide();


            setTimeout(function () {
              _this2.splashScreen.hide();

              _this2.initTranslate();

              _this2.zone.run(function () {
                _this2.id = localStorage.getItem('userId');

                if (_this2.id != null) {
                  _this2.navController.navigateForward('home');
                }
              });

              console.log("id", _this2.id);
            }, 1000); // watch network for a disconnection

            var disconnectSubscription = _this2.network.onDisconnect().subscribe(function () {
              console.log('network was disconnected :-(');

              _this2.navController.navigateForward("/nointernet");

              console.log(_this2.navController); // alert('off')
            }); // stop disconnect watch
            //disconnectSubscription.unsubscribe();
            // watch network for a connection


            var connectSubscription = _this2.network.onConnect().subscribe(function () {
              console.log('network connected!', _this2.network.type);
              console.log(_this2.navController);

              if (_this2.router.url == "/nointernet") {
                _this2.navController.pop();
              } // alert('on')
              // We just got a connection but we need to wait briefly
              // before we determine the connection type. Might need to wait.
              // prior to doing any api requests as well.


              setTimeout(function () {
                if (_this2.network.type === 'wifi') {
                  console.log('we got a wifi connection, woohoo!');
                }
              }, 3000);
            }); // stop connect watch
            //connectSubscription.unsubscribe();
            // this.initTranslate()


            console.log("id", _this2.id); // this.zone.run(()=>{
            //   this.id=localStorage.getItem('userId');
            //    if(this.id != null)
            // {
            //   this.navController.navigateForward('home')
            // }
            // })
          });
        }
      }, {
        key: "initTranslate",
        value: function initTranslate() {
          this.language = localStorage.getItem('language');

          if (!this.language) {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            this.language = localStorage.setItem('language', 'en');
          } else {
            this.translate.setDefaultLang(this.language);
            this.translate.use(this.language);

            if (this.language == "ar") {
              this.dir = 'rtl';
              console.log(this.dir);
            }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @awesome-cordova-plugins/social-sharing/ngx */
    "./node_modules/@awesome-cordova-plugins/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }, _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _shared_service__WEBPACK_IMPORTED_MODULE_16__["SharedService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_18__["Keyboard"], _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared.service.ts":
  /*!***********************************!*\
    !*** ./src/app/shared.service.ts ***!
    \***********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SharedService = /*#__PURE__*/function () {
      //http://101.53.143.7/~dataduck/safecity_webapp/api
      function SharedService(httpClient, loadingCtrl) {
        _classCallCheck(this, SharedService);

        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.sharedData = {}; //  apiurl = 'http://139.59.76.55/api/'   //localhttp://101.53.143.7/~dataduck/safecity_webapp/api/http://139.59.76.55/api/
        //  apiurlwebapp = 'http://139.59.76.55/api/' //localhttp://101.53.143.7/~dataduck/safecity_webapp/api/http://139.59.76.55/api/

        this.catArray = [];
        this.categoryArray = [];
        this.catIdArray = [];
        this.all_Array = [];
        this.safetyfiltersdata = '';
        this.apiurl = 'https://webapp.safecity.in/api/'; //production

        this.apiurlwebapp = 'https://webapp.safecity.in/api/'; //production
      }

      _createClass(SharedService, [{
        key: "presentLoadingDefault",
        value: function presentLoadingDefault() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('data');
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...',
                      duration: 2500
                    });

                  case 3:
                    this.loading = _context.sent;
                    _context.next = 6;
                    return this.loading.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "get_url",
        value: function get_url() {
          return this.apiurl;
        }
      }, {
        key: "loaderDismiss",
        value: function loaderDismiss() {
          console.log('data', this.loading);
          this.loading.dismiss();
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.sharedData;
        }
      }, {
        key: "setData",
        value: function setData(data) {
          this.sharedData = data;
        }
      }, {
        key: "setSafetyTipData",
        value: function setSafetyTipData(data) {
          this.sharedSafetyTipData = data;
        }
      }, {
        key: "getSafetyTipData",
        value: function getSafetyTipData() {
          return this.sharedSafetyTipData;
        }
      }, {
        key: "sharedPostRequest",
        value: function sharedPostRequest(api_name, data) {
          return this.httpClient.post(this.apiurl + api_name, data);
        }
      }, {
        key: "sharedPostRequest_webappurl",
        value: function sharedPostRequest_webappurl(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        } // set data for incident filter

      }, {
        key: "timeofArray",
        value: function timeofArray(all_Array) {
          this.all_Array = all_Array;
          console.log("1", this.all_Array);

          if (this.all_Array.length > 0) {
            var timeofArray = this.all_Array[0].length;
            var catId = this.all_Array[2].length;
            var incidentFrom = this.all_Array[1].length;

            if (incidentFrom != "") {
              incidentFrom = 1;
            } else {
              incidentFrom = 0;
            }

            var totalLen = 0;
            totalLen = timeofArray + catId + incidentFrom;
            console.log("totalLen", totalLen);

            if (totalLen >= 1) {
              this.all_Array.push(totalLen);
            }
          }
        }
      }, {
        key: "getCatArray",
        value: function getCatArray() {
          return this.all_Array;
        }
      }, {
        key: "getsafetyfiltersdata",
        value: function getsafetyfiltersdata() {
          return this.safetyfiltersdata;
        }
      }, {
        key: "setsafetyfiltersdata",
        value: function setsafetyfiltersdata(data) {
          this.safetyfiltersdata = data;
        } //Chat Module apis started**************************************************

      }, {
        key: "startChat",
        value: function startChat(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }, {
        key: "chatsync",
        value: function chatsync(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }, {
        key: "insertChat",
        value: function insertChat(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }, {
        key: "unsyncAdminUser",
        value: function unsyncAdminUser(api_name, data) {
          return this.httpClient.post(this.apiurlwebapp + api_name, data);
        }
      }]);

      return SharedService;
    }();

    SharedService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/admin/Downloads/ios src 110722/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
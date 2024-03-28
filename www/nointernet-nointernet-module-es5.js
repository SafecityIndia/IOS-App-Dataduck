function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nointernet-nointernet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNointernetNointernetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n<div class=\"nointernet\">\n<img src=\"assets/images/icons/nointernet.svg\"/>\n<p>Please check your internet connection to return to Safecity.</p>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/nointernet/nointernet-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/nointernet/nointernet-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: NointernetPageRoutingModule */

  /***/
  function srcAppNointernetNointernetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NointernetPageRoutingModule", function () {
      return NointernetPageRoutingModule;
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


    var _nointernet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nointernet.page */
    "./src/app/nointernet/nointernet.page.ts");

    var routes = [{
      path: '',
      component: _nointernet_page__WEBPACK_IMPORTED_MODULE_3__["NointernetPage"]
    }];

    var NointernetPageRoutingModule = /*#__PURE__*/_createClass(function NointernetPageRoutingModule() {
      _classCallCheck(this, NointernetPageRoutingModule);
    });

    NointernetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NointernetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/nointernet/nointernet.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/nointernet/nointernet.module.ts ***!
    \*************************************************/

  /*! exports provided: NointernetPageModule */

  /***/
  function srcAppNointernetNointernetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NointernetPageModule", function () {
      return NointernetPageModule;
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


    var _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nointernet-routing.module */
    "./src/app/nointernet/nointernet-routing.module.ts");
    /* harmony import */


    var _nointernet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nointernet.page */
    "./src/app/nointernet/nointernet.page.ts");

    var NointernetPageModule = /*#__PURE__*/_createClass(function NointernetPageModule() {
      _classCallCheck(this, NointernetPageModule);
    });

    NointernetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nointernet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NointernetPageRoutingModule"]],
      declarations: [_nointernet_page__WEBPACK_IMPORTED_MODULE_6__["NointernetPage"]]
    })], NointernetPageModule);
    /***/
  },

  /***/
  "./src/app/nointernet/nointernet.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/nointernet/nointernet.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNointernetNointernetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nointernet {\n  position: absolute;\n  margin: 0 auto;\n  top: 40%;\n  left: 5%;\n  right: 5%;\n  text-align: center;\n}\n\n.nointernet img {\n  text-align: center;\n  margin: 0 auto 15px;\n}\n\n.nointernet p {\n  width: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  text-align: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9ub2ludGVybmV0L25vaW50ZXJuZXQucGFnZS5zY3NzIiwic3JjL2FwcC9ub2ludGVybmV0L25vaW50ZXJuZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBRUcsa0JBQUE7RUFDQyxjQUFBO0VBQ0QsUUFBQTtFQUNELFFBQUE7RUFDQSxTQUFBO0VBQ0Ysa0JBQUE7QUNERDs7QURLQztFQUVBLGtCQUFBO0VBQ0ssbUJBQUE7QUNITjs7QURNRTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Msa0JBQUE7RUFDRyxjQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9ub2ludGVybmV0L25vaW50ZXJuZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0Lm5vaW50ZXJuZXRcclxuXHR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHQgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDQwJTtcclxuICAgbGVmdDo1JTtcclxuICAgcmlnaHQ6NSU7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5cdH1cclxuXHRcclxuXHQubm9pbnRlcm5ldCBpbWdcclxuXHR7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHQgICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcclxuXHR9XHJcblx0XHJcblx0XHQubm9pbnRlcm5ldCBwe1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdFx0Y29sb3I6IzI5MjAyMDtcclxuXHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHQgICAgbWFyZ2luOiAwIGF1dG87XHJcbiBcclxuXHRcdH0iLCIubm9pbnRlcm5ldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1JTtcbiAgcmlnaHQ6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub2ludGVybmV0IGltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbn1cblxuLm5vaW50ZXJuZXQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nointernet/nointernet.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/nointernet/nointernet.page.ts ***!
    \***********************************************/

  /*! exports provided: NointernetPage */

  /***/
  function srcAppNointernetNointernetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NointernetPage", function () {
      return NointernetPage;
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

    var NointernetPage = /*#__PURE__*/function () {
      function NointernetPage(navController, platform) {
        _classCallCheck(this, NointernetPage);

        this.navController = navController;
        this.platform = platform;
        console.log(this.navController);
      }

      _createClass(NointernetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // alert('enter')
          this.subscription = this.platform.backButton.subscribeWithPriority(20, function (processNextHandler) {//navigator['app'].exitApp();
            //alert('hit')
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          // alert('exit')
          this.subscription.unsubscribe();
        }
      }]);

      return NointernetPage;
    }();

    NointernetPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    NointernetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nointernet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nointernet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nointernet/nointernet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nointernet.page.scss */
      "./src/app/nointernet/nointernet.page.scss"))["default"]]
    })], NointernetPage);
    /***/
  }
}]);
//# sourceMappingURL=nointernet-nointernet-module-es5.js.map
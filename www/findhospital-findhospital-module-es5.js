function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["findhospital-findhospital-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/findhospital/findhospital.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/findhospital/findhospital.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFindhospitalFindhospitalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/hospital' icon=\"undefined\" (click)=back() text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'Hospital' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n \r\n<div class=\"mainhospital\">\r\n <ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"hospitalarea\">\r\n<h5>{{'map_move_pin' | translate}}</h5>\r\n  <div #map id=\"map\"></div>\r\n  </div>\r\n\r\n    </ion-col>\r\n   </ion-row>\r\n   </div>\r\n\r\n   \r\n\r\n\r\n<ion-row>\r\n     <ion-col col-12>\r\n\r\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"listing()\"   >{{'find_hospitals' | translate}}</ion-button>\r\n  </ion-col>\r\n   </ion-row>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/findhospital/findhospital-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/findhospital/findhospital-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FindhospitalPageRoutingModule */

  /***/
  function srcAppFindhospitalFindhospitalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindhospitalPageRoutingModule", function () {
      return FindhospitalPageRoutingModule;
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


    var _findhospital_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./findhospital.page */
    "./src/app/findhospital/findhospital.page.ts");

    var routes = [{
      path: '',
      component: _findhospital_page__WEBPACK_IMPORTED_MODULE_3__["FindhospitalPage"]
    }];

    var FindhospitalPageRoutingModule = /*#__PURE__*/_createClass(function FindhospitalPageRoutingModule() {
      _classCallCheck(this, FindhospitalPageRoutingModule);
    });

    FindhospitalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FindhospitalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/findhospital/findhospital.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/findhospital/findhospital.module.ts ***!
    \*****************************************************/

  /*! exports provided: FindhospitalPageModule */

  /***/
  function srcAppFindhospitalFindhospitalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindhospitalPageModule", function () {
      return FindhospitalPageModule;
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


    var _findhospital_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./findhospital-routing.module */
    "./src/app/findhospital/findhospital-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _findhospital_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./findhospital.page */
    "./src/app/findhospital/findhospital.page.ts");

    var FindhospitalPageModule = /*#__PURE__*/_createClass(function FindhospitalPageModule() {
      _classCallCheck(this, FindhospitalPageModule);
    });

    FindhospitalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _findhospital_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindhospitalPageRoutingModule"]],
      declarations: [_findhospital_page__WEBPACK_IMPORTED_MODULE_7__["FindhospitalPage"]]
    })], FindhospitalPageModule);
    /***/
  },

  /***/
  "./src/app/findhospital/findhospital.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/findhospital/findhospital.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFindhospitalFindhospitalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainhospital {\n  width: 100%;\n  height: auto;\n  margin-top: 5px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.hospitalarea {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 0px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.hospitalarea p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.hospitalarea h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 38px;\n}\n\n.hospitalarea h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #2F1153;\n  float: left;\n  margin-bottom: 30px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #ffffff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  --box-shadow:none;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 35px auto 35px;\n  text-align: center;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 35px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9maW5kaG9zcGl0YWwvZmluZGhvc3BpdGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmluZGhvc3BpdGFsL2ZpbmRob3NwaXRhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRixrQkFBQTtBQ0ZBOztBREtBO0VBSUEsOENBQUE7QUNIQTs7QURPQTtFQUVBLHVCQUFBO0FDTEE7O0FEUUE7RUFFQSxxQkFBQTtBQ05BOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURTQTtFQUNBLGdCQUFBO0FDTkE7O0FEU0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQQTs7QURVQTtFQUVBLGNBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNWQTs7QURhQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0MsbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1pBOztBRGVBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0UsbUJBQUE7RUFDQyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0FDWko7O0FEY0E7RUFHQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7QUNkQTs7QURrQkE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2ZBOztBRGtCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaEJBIiwiZmlsZSI6InNyYy9hcHAvZmluZGhvc3BpdGFsL2ZpbmRob3NwaXRhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICAuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cclxuLm1haW5ob3NwaXRhbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjVweDtcclxufVxyXG5cclxuLnJlZFxyXG57XHJcbmNvbG9yOiNGNzEzMTM7XHJcbn1cclxuXHJcbi5ob3NwaXRhbGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIzcHg7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5ob3NwaXRhbGFyZWEgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoxOXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4uaG9zcGl0YWxhcmVhIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmxpbmUtaGVpZ2h0OjI4cHg7XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMzhweDtcclxufVxyXG5cclxuLmhvc3BpdGFsYXJlYSBoNVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdCAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcblx0LS1ib3gtc2hhZG93Om5vbmU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG5tYXJnaW46MzVweCBhdXRvIDM1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuI21hcHtcclxud2lkdGg6MTAwJTtcclxubWluLWhlaWdodDogNDE1cHg7XHJcbmhlaWdodDo2MCU7XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG59XHJcblxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjM1cHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn0iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5ob3NwaXRhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRjcxMzEzO1xufVxuXG4uaG9zcGl0YWxhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaG9zcGl0YWxhcmVhIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmhvc3BpdGFsYXJlYSBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cblxuLmhvc3BpdGFsYXJlYSBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDM1cHggYXV0byAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDE1cHg7XG4gIGhlaWdodDogNjAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAzNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/findhospital/findhospital.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/findhospital/findhospital.page.ts ***!
    \***************************************************/

  /*! exports provided: FindhospitalPage */

  /***/
  function srcAppFindhospitalFindhospitalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindhospitalPage", function () {
      return FindhospitalPage;
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

    var FindhospitalPage = /*#__PURE__*/function () {
      function FindhospitalPage(navController, route, router, httpClient) {
        var _this = this;

        _classCallCheck(this, FindhospitalPage);

        this.navController = navController;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.infoWindows = [];
        this.radius = 3000;
        this.markers = [{
          'latitude': '',
          'longitude': '',
          'title': '',
          'rating': '',
          'address': ''
        }];
        this.markers1 = [{
          'latitude': '',
          'longitude': '',
          'title': '',
          'rating': '',
          'address': ''
        }];
        console.log(google);
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            console.log(_this.router.getCurrentNavigation().extras.state);
            _this.location = _this.router.getCurrentNavigation().extras.state.location;
            _this.lat = _this.router.getCurrentNavigation().extras.state.lat;
            _this.longi = _this.router.getCurrentNavigation().extras.state.longi;
            _this.address = _this.router.getCurrentNavigation().extras.state.address;
            var data = {
              'latitude': _this.lat,
              'longitude': _this.longi,
              'title': _this.address
            };

            _this.markers1.push(data);

            console.log(_this.markers);
            console.log(_this.location);
            console.log(_this.lat);
            console.log(_this.longi);
            console.log(_this.address);
          }
        });
      }

      _createClass(FindhospitalPage, [{
        key: "back",
        value: function back() {
          localStorage.setItem('lat', this.lat);
          localStorage.setItem('longi', this.longi);
          localStorage.setItem('address', this.address);
          console.log(this.lat);
          console.log(this.longi);
          console.log(this.address);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.showMap();
        }
      }, {
        key: "addMarkersToMap",
        value: function addMarkersToMap(markers) {
          var _this2 = this;

          var _iterator = _createForOfIteratorHelper(markers),
              _step;

          try {
            var _loop = function _loop() {
              var marker = _step.value;
              var position = new google.maps.LatLng(marker.latitude, marker.longitude);
              var mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                draggable: true
              });
              mapMarker.setMap(_this2.map);
              google.maps.event.addListener(mapMarker, 'dragend', function () {
                var _this3 = this;

                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong   " + markerlatlong);
                console.log("lat    " + mapMarker.getPosition().lat());
                console.log("long   " + mapMarker.getPosition().lng()); //this.placeMarkerAndPanTo(e.latLng, this.map);

                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng());
                localStorage.setItem('lat', lat);
                localStorage.setItem('longi', longi); //code for getting formatted address from the selected latitude and longitude 

                var geocoder = new google.maps.Geocoder();
                var latlng = {
                  lat: parseFloat(lat),
                  lng: parseFloat(longi)
                };
                geocoder.geocode({
                  location: latlng
                }, function (results, status) {
                  if (status === "OK") {
                    if (results[0]) {
                      _this3.title = results[0].formatted_address;
                      localStorage.setItem('address', _this3.title);
                      console.log(_this3.title); //this.markers = [];

                      var title = localStorage.getItem('address');
                      var lat1 = localStorage.getItem('lat');
                      var longi1 = localStorage.getItem('longi');
                      console.log(title);

                      var _position = new google.maps.LatLng(lat1, longi1);

                      mapMarker.position = _position, mapMarker.title = title, mapMarker.latitude = lat1, mapMarker.longitude = longi1, mapMarker.animation = 'DROP', mapMarker.draggable = true, mapMarker.setMap(_this3.map); //var self = this;

                      _this3.addInfoWindowToMarker(mapMarker);

                      var data = {
                        'latitude': lat1,
                        'longitude': longi1,
                        'title': title
                      };
                      _this3.markers = data;
                      console.log('3', _this3.markers);
                    } else {
                      window.alert("No results found");
                    }
                  } else {
                    window.alert("Geocoder failed due to: " + status);
                  }
                });
              }.bind(_this2));

              _this2.addInfoWindowToMarker(mapMarker);
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "addInfoWindowToMarker",
        value: function addInfoWindowToMarker(marker) {
          var _this4 = this;

          var infoWindowContent = '<div id="content">' + '<h5 id="firstHeading" class"firstHeading">' + marker.title + '</h5>' + '<p>Latitude: ' + marker.latitude + '</p>' + '<p>Longitude: ' + marker.longitude + '</p>' + '</div>';
          var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
          });
          marker.addListener('click', function () {
            _this4.closeAllInfoWindows();

            infoWindow.open(_this4.map, marker);
          });
          this.infoWindows.push(infoWindow);
        }
      }, {
        key: "closeAllInfoWindows",
        value: function closeAllInfoWindows() {
          var _iterator2 = _createForOfIteratorHelper(this.infoWindows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _window = _step2.value;

              _window.close();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "placeMarkerAndPanTo",
        value: function placeMarkerAndPanTo(latLng, map) {
          new google.maps.Marker({
            position: latLng,
            map: map
          });
          map.panTo(latLng);
        }
      }, {
        key: "showMap",
        value: function showMap() {
          console.log('hi');
          console.log(this.lat);
          console.log(this.longi);
          var location = new google.maps.LatLng(this.lat, this.longi);
          var options = {
            center: location,
            zoom: 10,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            gestureHandling: 'cooperative',
            fullscreenControl: false
          };
          console.log(options);
          this.map = new google.maps.Map(this.mapRef.nativeElement, options); // this.map.addListener('click', (e) => {
          //   console.log('clicked',e)
          //   this.placeMarkerAndPanTo(e.latLng, this.map);
          //   var lat= JSON.stringify(e.latLng.lat());
          //   var longi = JSON.stringify(e.latLng.lng());
          //   //code for getting formatted address from the selected latitude and longitude 
          //   var geocoder = new google.maps.Geocoder();
          //   const latlng = {
          //     lat: parseFloat(lat),
          //     lng: parseFloat(longi)
          //   };
          //   geocoder.geocode(
          //     { location: latlng },
          //     (
          //       results,
          //       status
          //     ) => {
          //       if (status === "OK") {
          //         if (results[0]) {
          //          this.title =  results[0].formatted_address;
          //          localStorage.setItem('title',this.title)
          //          console.log(this.title)
          //         } else {
          //           window.alert("No results found");
          //         }
          //       } else {
          //         window.alert("Geocoder failed due to: " + status);
          //       }
          //     }
          //   );
          //   //this.markers = [];
          //   var title = localStorage.getItem('title')
          //   console.log(title)
          //   var data = {'latitude' : lat, 'longitude' : longi, 'title' : title}
          //   this.markers.push(data);
          //   console.log('3',this.markers)
          // this.addMarkersToMap(this.markers);
          // });

          console.log('3', this.markers1);
          this.addMarkersToMap(this.markers1);
        }
      }, {
        key: "listing",
        value: function listing() {
          var _this5 = this;

          console.log('4', this.markers);
          var title = localStorage.getItem('address');
          var lat1 = localStorage.getItem('lat');
          var longi1 = localStorage.getItem('longi');
          console.log(this.radius);
          var pyrmont = new google.maps.LatLng(lat1, longi1);
          var request = {
            location: pyrmont,
            radius: this.radius,
            type: ['hospital'],
            rankby: 'distance',
            keyword: 'hospital'
          };
          console.log(request);
          var service = new google.maps.places.PlacesService(this.map);
          service.nearbySearch(request, function (callback) {
            _this5.markers = callback;

            if (_this5.markers.length < 3) {
              _this5.radius = _this5.radius + 2000;

              _this5.listing();

              return;
            }

            for (var i = 0; i < _this5.markers.length; i++) {
              var j = i + 1;
              console.log(_this5.markers[i].place_id); // var req = {
              //   placeId:this.markers[i].place_id
              // }
              // service.getDetails(req,callback =>{
              //   console.log(callback)
              //   this.markers[i].
              // },err=>{
              // })

              _this5.markers[i].imgsrc = 'assets/images/icons/numberlisting/number' + j + '.png';
              _this5.markers[i].pinicon = 'assets/images/icons/markericons/number' + j + '.png';
              console.log(_this5.markers); //createMarker(results[i]);
            }

            console.log('3', _this5.markers);

            _this5.pushto();
          }, function (err) {}); //   var pyrmont = new google.maps.LatLng(this.lat,this.longi);
          //   var request = {
          //     location: pyrmont,
          //     radius: '3000',
          //     type: ['hospital']
          //   };
          //  var  service = new google.maps.places.PlacesService(this.map);
          //   service.nearbySearch(request, this.callback);

          console.log('*********************'); // let data = new FormData();
          // data.append( "location" , this.lat+',' +this.longi)
          // data.append("types" , 'hospital')
          // data.append("security_key" , 'e7cc12d418bf4b2ceb8cb8f2496bcb3b8676731c')
          // data.append( "key" , "AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w")
          // data.append("radius" ,'5000')
          // this.httpClient.post("http://101.53.143.7/~dataduck/safecity/api/incident_report/getPlaceByLocation/", data)
          //   .subscribe((rdata : any) => {
          //     console.log(rdata);
          //     console.log(rdata.data);
          //     console.log(rdata.status);
          //     console.log(rdata);
          //     console.log(rdata.data.next_page_token);
          //     this.listing_data = rdata.data.results;
          //     console.log(this.listing_data)
          //  }, error => {
          //   console.log(error);
          // });
        }
      }, {
        key: "pushto",
        value: function pushto() {
          var title = localStorage.getItem('address');
          var lat1 = localStorage.getItem('lat');
          var longi1 = localStorage.getItem('longi');
          var navigationExtras = {
            state: {
              data: JSON.stringify(this.markers),
              lat: lat1,
              longi: longi1,
              address: title
            }
          };
          this.router.navigate(['/hospitallisting'], navigationExtras);
        }
      }, {
        key: "callback",
        value: function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results); //this.listing_data = results;

            for (var i = 0; i < results.length; i++) {
              results[i].imgsrc = 'assets/images/icons/numberlisting/number' + i + 1;
              console.log(results); //createMarker(results[i]);
            }

            var title = localStorage.getItem('address');
            var lat1 = localStorage.getItem('lat');
            var longi1 = localStorage.getItem('longi'); //  console.log(this.markers)

            var navigationExtras = {
              state: {
                data: results,
                lat: lat1,
                longi: longi1,
                address: title
              }
            }; // this.navController.navigateForward(['/hospitallisting'],navigationExtras);
          }
        }
      }]);

      return FindhospitalPage;
    }();

    FindhospitalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], FindhospitalPage.prototype, "mapRef", void 0);
    FindhospitalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-findhospital',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./findhospital.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/findhospital/findhospital.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./findhospital.page.scss */
      "./src/app/findhospital/findhospital.page.scss"))["default"]]
    })], FindhospitalPage);
    /***/
  }
}]);
//# sourceMappingURL=findhospital-findhospital-module-es5.js.map
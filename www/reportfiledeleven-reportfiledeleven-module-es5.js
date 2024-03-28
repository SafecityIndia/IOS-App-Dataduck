function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledeleven-reportfiledeleven-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeleven/reportfiledeleven.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeleven/reportfiledeleven.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportfiledelevenReportfiledelevenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent>\r\n  <div class=\"header-background\"></div>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref='/reportfiledten' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"newbg\">\r\n  <div class=\"mainareain\">\r\n    <form [formGroup]=\"addressForm\" (ngSubmit)=\"safetytip()\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"newtext\">\r\n          <h4>You’re doing great. Just one more step to go!</h4>\r\n          <h5>Please enter the location where the incident took place<span class=\"red\">*</span></h5>\r\n\r\n          <ion-list>\r\n            \r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Building, Locality, Street name, Area</ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Write here\" id=\"autocomplete\" (ionChange)=\"getlatlong()\" formControlName=\"locality\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Landmark</ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{landmark_disable}}\"  (ionChange)=\"getlatlong()\" formControlName=\"landmark\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Area/Suburb</ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{area_disable}}\"  (ionChange)=\"getlatlong()\" formControlName=\"area\"></ion-input>\r\n              </ion-item>\r\n\r\n              <p class=\"error\"\r\n                *ngIf=\"!addressForm.controls.area.valid  && (addressForm.controls.area.dirty || addressForm.get('area').touched)\">\r\n                Field is required</p>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">City</ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{city_disable}}\"  (ionChange)=\"getlatlong()\" formControlName=\"city\"></ion-input>\r\n              </ion-item>\r\n\r\n              <p class=\"error\"\r\n                *ngIf=\"!addressForm.controls.city.valid  && (addressForm.controls.city.dirty || addressForm.get('city').touched)\">\r\n                Field is required</p>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">State</ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{state_disable}}\"  (ionChange)=\"getlatlong()\" formControlName=\"state\"></ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Country</ion-label>\r\n                <ion-input type=\"text\" placeholder=\"Write here\" disabled=\"{{country_disable}}\"  (ionChange)=\"getlatlong()\" formControlName=\"country\"></ion-input>\r\n              </ion-item>\r\n\r\n              <p class=\"error\"\r\n                *ngIf=\"!addressForm.controls.country.valid  && (addressForm.controls.country.dirty || addressForm.get('country').touched)\">\r\n                Field is required</p>\r\n            \r\n          </ion-list>\r\n\r\n          <p>An exact location will help us identify patterns of violence across the city</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div class=\"bottom\">\r\n      <ion-row>\r\n        <ion-col col-12>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"goToFieldTwelve()\"\r\n            [disabled]=\"!addressForm.valid\">NEXT</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/reportfiledeleven/reportfiledeleven-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/reportfiledeleven/reportfiledeleven-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ReportfiledelevenPageRoutingModule */

  /***/
  function srcAppReportfiledelevenReportfiledelevenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledelevenPageRoutingModule", function () {
      return ReportfiledelevenPageRoutingModule;
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


    var _reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reportfiledeleven.page */
    "./src/app/reportfiledeleven/reportfiledeleven.page.ts");

    var routes = [{
      path: '',
      component: _reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledelevenPage"]
    }];

    var ReportfiledelevenPageRoutingModule = /*#__PURE__*/_createClass(function ReportfiledelevenPageRoutingModule() {
      _classCallCheck(this, ReportfiledelevenPageRoutingModule);
    });

    ReportfiledelevenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportfiledelevenPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reportfiledeleven/reportfiledeleven.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/reportfiledeleven/reportfiledeleven.module.ts ***!
    \***************************************************************/

  /*! exports provided: ReportfiledelevenPageModule */

  /***/
  function srcAppReportfiledelevenReportfiledelevenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledelevenPageModule", function () {
      return ReportfiledelevenPageModule;
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


    var _reportfiledeleven_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reportfiledeleven-routing.module */
    "./src/app/reportfiledeleven/reportfiledeleven-routing.module.ts");
    /* harmony import */


    var _reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reportfiledeleven.page */
    "./src/app/reportfiledeleven/reportfiledeleven.page.ts");

    var ReportfiledelevenPageModule = /*#__PURE__*/_createClass(function ReportfiledelevenPageModule() {
      _classCallCheck(this, ReportfiledelevenPageModule);
    });

    ReportfiledelevenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reportfiledeleven_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledelevenPageRoutingModule"]],
      declarations: [_reportfiledeleven_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledelevenPage"]]
    })], ReportfiledelevenPageModule);
    /***/
  },

  /***/
  "./src/app/reportfiledeleven/reportfiledeleven.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/reportfiledeleven/reportfiledeleven.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportfiledelevenReportfiledelevenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#locationField,\n#controls {\n  position: relative;\n  width: 480px;\n}\n\n#autocomplete {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 99%;\n}\n\n.label {\n  text-align: right;\n  font-weight: bold;\n  width: 100px;\n  color: #303030;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n}\n\n#address {\n  border: 1px solid #000090;\n  background-color: #f0f9ff;\n  width: 480px;\n  padding-right: 2px;\n}\n\n#address td {\n  font-size: 10pt;\n}\n\n.field {\n  width: 99%;\n}\n\n.slimField {\n  width: 80px;\n}\n\n.wideField {\n  width: 200px;\n}\n\n#locationField {\n  height: 20px;\n  margin-bottom: 2px;\n}\n\n.newbg {\n  --background: -moz-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(239,253,255,1)), color-stop(42%, rgba(239,253,255,1)), color-stop(64%, rgba(244,232,253,1)), color-stop(100%, rgba(238,221,252,1)));\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.error {\n  font-size: 0.8em;\n  color: red !important;\n  margin-bottom: 15px !important;\n  margin-top: 6px !important;\n}\n\n.newtext ion-label {\n  white-space: inherit;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: #592D8D;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 60px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 125px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0 0;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9yZXBvcnRmaWxlZGVsZXZlbi9yZXBvcnRmaWxlZGVsZXZlbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlcG9ydGZpbGVkZWxldmVuL3JlcG9ydGZpbGVkZWxldmVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FESUE7RUFFQSw4SUFBQTtFQUNBLDhNQUFBO0VBQ0EsaUpBQUE7RUFDQSw0SUFBQTtFQUNBLDZJQUFBO0VBQ0EseUlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZBOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNGLDhCQUFBO0VBQ0QsMEJBQUE7QUNGRDs7QURLQTtFQUVBLG9CQUFBO0FDSEE7O0FETUE7RUFFQSx3QkFBQTtBQ0pBOztBRE9BO0VBRUUsb0NBQUE7QUNMRjs7QURRQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEU0E7RUFFQSwrQkFBQTtBQ1BBOztBRFVBO0VBRUUsa0JBQUE7QUNSRjs7QURXQTtFQUNBLGNBQUE7QUNSQTs7QURXQTtFQUNBLGdCQUFBO0FDUkE7O0FEV0U7RUFHRSx3QkFBQTtBQ1ZKOztBRFlBO0VBQ0ksd0JBQUE7RUFDSCxVQUFBO0VBQ0csV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURXQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDUko7O0FEWUE7RUFFQSxnQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDWkE7O0FEZUE7RUFFQSxjQUFBO0FDYkE7O0FEZ0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDZEE7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNmQTs7QURrQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2hCQTs7QURtQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2pCQTs7QURvQkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNqQko7O0FEbUJBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURvQkE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNGLCtDQUFBO0VBQ0UsMENBQUE7QUNqQko7O0FEbUJBO0VBRUEsdUJBQUE7QUNqQkE7O0FEb0JBO0VBRUEsaUVBQUE7VUFBQSxnRUFBQTtBQ2xCQTs7QURxQkE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQyxzQkFBQTtFQUNELHdCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtBQ25CQTs7QUR1QkE7RUFDQyxzQkFBQTtBQ3BCRDs7QUR1QkE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDckJBOztBRHdCQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUN0QkE7O0FEeUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3ZCQSIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGZpbGVkZWxldmVuL3JlcG9ydGZpbGVkZWxldmVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2NhdGlvbkZpZWxkLFxyXG4jY29udHJvbHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDgwcHg7XHJcbn1cclxuXHJcbiNhdXRvY29tcGxldGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDk5JTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgY29sb3I6ICMzMDMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNhZGRyZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDkwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxufVxyXG5cclxuI2FkZHJlc3MgdGQge1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICB3aWR0aDogOTklO1xyXG59XHJcblxyXG4uc2xpbUZpZWxkIHtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLndpZGVGaWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jbG9jYXRpb25GaWVsZCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3Ymdcclxue1xyXG4tLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSksIGNvbG9yLXN0b3AoNDIlLCByZ2JhKDIzOSwyNTMsMjU1LDEpKSwgY29sb3Itc3RvcCg2NCUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkpKTtcclxuLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbmhlaWdodDoxMDAlO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuXHJcbn1cclxuLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiBcdG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tdG9wOjZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3dGV4dCBpb24tbGFiZWxcclxue1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJcclxue1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbn1cclxuXHJcbi5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZFxyXG57XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbn1cclxuXHJcbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oXHJcbiAge1xyXG4gIHRyYW5zZm9ybTppbmhlcml0O1xyXG4gIH1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuICBpb24tcmFkaW9cclxuICB7XHJcbiBcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcclxuICB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0d2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDppbmhlcml0O1xyXG59XHJcblxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NjBweDtcclxufVxyXG5cclxuLnJlZFxyXG57XHJcbmNvbG9yOiNGNzEzMTM7XHJcbn1cclxuXHJcbi5uZXd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyM3B4O1xyXG5tYXJnaW4tYm90dG9tOiAxMjVweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MTlweDtcclxuZm9udC1zaXplOjE0cHg7XHJcbmNvbG9yOiM1RDU2NTY7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzU5MkQ4RDtcclxubGluZS1oZWlnaHQ6MjhweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIycHg7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0Zm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG5cdCAtbW9zLWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxufVxyXG5pb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcclxufVxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6MDtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyOm5vbmU7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0gLml0ZW0taW5uZXJ7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG59XHJcblxyXG5pb24taW5wdXRcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5oZWlnaHQ6NDBweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWRcclxue1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuXHJcblxyXG4iLCIjbG9jYXRpb25GaWVsZCxcbiNjb250cm9scyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ4MHB4O1xufVxuXG4jYXV0b2NvbXBsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogOTklO1xufVxuXG4ubGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4jYWRkcmVzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwOTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XG4gIHdpZHRoOiA0ODBweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG4jYWRkcmVzcyB0ZCB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmZpZWxkIHtcbiAgd2lkdGg6IDk5JTtcbn1cblxuLnNsaW1GaWVsZCB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ud2lkZUZpZWxkIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jbG9jYXRpb25GaWVsZCB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ubmV3Ymcge1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSksIGNvbG9yLXN0b3AoNDIlLCByZ2JhKDIzOSwyNTMsMjU1LDEpKSwgY29sb3Itc3RvcCg2NCUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkpKTtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXd0ZXh0IGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICM1OTJEOEQ7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbmhlcml0O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0Y3MTMxMztcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm5ld3RleHQgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xufVxuXG5pb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1zdGFja2VkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/reportfiledeleven/reportfiledeleven.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/reportfiledeleven/reportfiledeleven.page.ts ***!
    \*************************************************************/

  /*! exports provided: ReportfiledelevenPage */

  /***/
  function srcAppReportfiledelevenReportfiledelevenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportfiledelevenPage", function () {
      return ReportfiledelevenPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ReportfiledelevenPage = /*#__PURE__*/function () {
      function ReportfiledelevenPage(navController, router, route, formBuilder) {
        _classCallCheck(this, ReportfiledelevenPage);

        this.navController = navController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.autoaddress = [];
        this.autoadd1 = [];
        this.locality_disable = false;
        this.landmark_disable = false;
        this.city_disable = false;
        this.state_disable = false;
        this.country_disable = false;
        this.area_disable = false;
        this.addressForm = this.formBuilder.group({
          area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
          city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
          country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
          locality: '',
          landmark: '',
          state: ''
        }); //   this.route.queryParams.subscribe(params => {
        //     this.forWho = params["forWho"];
        //     this.age = params["age"];
        //     this.pronoun = params["pronoun"];
        //     this.experience = params["experience"];
        //     this.date1 = params["date1"];
        //     this.dateEstimate = params["dateEstimate"];
        //     this.time = params["time"];
        //     this.timeEstimate = params["timeEstimate"];
        //     this.timeRange = params["timeRange"];
        //     this.violenceType = params["violenceType"];
        //     this.anythingElse = params["anythingElse"];
        //     this.policeRepo =params["policeRepo"];
        //     this.led =params["led"];
        //     console.log("for Who",this.forWho);
        //     console.log("Age",this.age);
        //     console.log("pronoun",this.pronoun);
        //     console.log("experience",this.experience);
        //     console.log("date1",this.date1);
        //     console.log("time",this.time);
        //     console.log("dateEstimate",this.dateEstimate);
        //     console.log("timeEstimate",this.timeEstimate);
        //     console.log("timeRange",this.timeRange);
        //     console.log("violenceType",this.violenceType);
        //  })
      }

      _createClass(ReportfiledelevenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.initAutocomplete();
        } //autocomplete code

      }, {
        key: "initAutocomplete",
        value: function initAutocomplete() {
          var _this = this;

          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete').getElementsByTagName('input')[0], {
            types: ["geocode"],
            componentRestrictions: {
              country: 'in'
            }
          }); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          this.autocomplete.setFields(["address_component"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          this.autocomplete.addListener("place_changed", function (fillInAddress) {
            console.log(_this.addressForm.value.locality);

            var autoadd = _this.autocomplete.getPlace();

            _this.autoadd1 = autoadd.address_components;
            console.log(_this.autoadd1);

            for (var i = 0; i < _this.autoadd1.length; i++) {
              //this.autoaddress.push(this.autoadd1[i].long_name)
              if (_this.autoadd1[i].types[0] == 'country') {
                _this.addressForm.controls['country'].setValue(_this.autoadd1[i].long_name);

                _this.country_disable = true;
              } else if (_this.autoadd1[i].types[0] == 'locality') {
                _this.addressForm.controls['city'].setValue(_this.autoadd1[i].long_name);

                _this.city_disable = true;
              } else if (_this.autoadd1[i].types[0] == 'administrative_area_level_1') {
                _this.addressForm.controls['state'].setValue(_this.autoadd1[i].long_name);

                _this.state_disable = true;
              } else if (_this.autoadd1[i].types[0] == 'sublocality_level_1') {
                _this.addressForm.controls['locality'].setValue(_this.autoadd1[i].long_name);

                _this.locality_disable = true;
              } else if (_this.autoadd1[i].types[0] == 'sublocality_level_2') {
                _this.addressForm.controls['landmark'].setValue(_this.autoadd1[i].long_name);

                _this.landmark_disable = true;
              } else if (_this.autoadd1[i].types[0] == 'postal_code') {
                _this.addressForm.controls['area'].setValue(_this.autoadd1[i].long_name);

                _this.area_disable = true;
              }
            } // this.autoaddress = autoadd.long_name.join(',')
            //  console.log(this.autoaddress)
            //  var final_result = this.autoaddress.join(',')
            //   console.log(final_result)
            //   console.log(this.autoaddress)

          });
        }
      }, {
        key: "goToFieldTwelve",
        value: function goToFieldTwelve() {
          this.lat1 = localStorage.getItem('lat_report');
          this.longi1 = localStorage.getItem('longi_report');
          this.address1 = localStorage.getItem('address_report');
          var navigationExtras = {
            state: {
              area: this.addressForm.value.area,
              locality: this.addressForm.value.locality,
              landmark: this.addressForm.value.landmark,
              city: this.addressForm.value.city,
              state: this.addressForm.value.state,
              country: this.addressForm.value.country,
              lat: this.lat1,
              longi: this.longi1,
              address: this.address1
            }
          };
          this.router.navigate(['/reportfiledtwelve'], navigationExtras);
        }
      }, {
        key: "getlatlong",
        value: function getlatlong() {
          localStorage.setItem('area', this.addressForm.value.area);
          localStorage.setItem('city', this.addressForm.value.city);
          localStorage.setItem('country', this.addressForm.value.country);
          localStorage.setItem('locality', this.addressForm.value.locality);
          localStorage.setItem('landmark', this.addressForm.value.landmark);
          localStorage.setItem('state', this.addressForm.value.state); // console.log(this.locality);  
          // console.log(this.landmark);
          // console.log(this.city);
          // console.log(this.state);
          // console.log(this.country);

          this.address2 = this.addressForm.value.area + ',' + this.addressForm.value.locality + ',' + this.addressForm.value.landmark + ',' + this.addressForm.value.city + ',' + this.addressForm.value.state + ',' + this.addressForm.value.country;
          console.log(this.address);
          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = this.address2;
          geocoder.geocode({
            'address': address
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log(results);
              this.address = JSON.stringify(results[0].formatted_address);
              this.lat = JSON.stringify(results[0].geometry.location.lat());
              this.longi = JSON.stringify(results[0].geometry.location.lng()); //this.locations = new google.maps.LatLng(this.lat, this.longi);

              console.log(this.lat);
              console.log(this.longi);
              console.log(this.address);
              localStorage.setItem('lat_report', this.lat);
              localStorage.setItem('longi_report', this.longi);
              localStorage.setItem('address_report', this.address);
            }
          }); // this.navController.navigateForward(`/reportfiledten`);
        }
      }]);

      return ReportfiledelevenPage;
    }();

    ReportfiledelevenPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ReportfiledelevenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reportfiledeleven',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reportfiledeleven.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledeleven/reportfiledeleven.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reportfiledeleven.page.scss */
      "./src/app/reportfiledeleven/reportfiledeleven.page.scss"))["default"]]
    })], ReportfiledelevenPage);
    /***/
  }
}]);
//# sourceMappingURL=reportfiledeleven-reportfiledeleven-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safteytipone-safteytipone-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytipone/safteytipone.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/safteytipone/safteytipone.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSafteytiponeSafteytiponePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">{{'submit_a_safety_tip' |\r\n        translate }}</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"tiponenewclass\">\r\n  <div class=\"loctioninput\">\r\n    <div class=\"form-group  loctioninput mb-4\">\r\n      <label class=\"themeColorin m-0 p-0 d-block\">{{'locate_add_on_map' | translate}}<span class=\"error red\">*</span></label>\r\n      <label class=\"mb-2 p-0 sub-label d-block\">{{'start_typing_select_from_suggestion' | translate}}</label>\r\n      <input type=\"text\" class=\"form-control form-text search_address\" id=\"search_address\" name=\"\"\r\n        placeholder=\"{{'start_typing' | translate}}\" value=\"\">\r\n    </div>\r\n\r\n    <div class=\"form-group mb-4\">\r\n      <label class=\"themeColorin m-0 p-0 d-block\">{{'map_move_pin' | translate}}</label>\r\n      <label class=\"mb-3 p-0 sub-label d-block\">{{'an_exact_location_help_us' | translate}}</label>\r\n      <div class=\"mapouter\" style=\"height:467px\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group mb-4\">\r\n      <label class=\"themeColorin m-0 p-0 d-block\">{{'address_pinned_on_map' | translate}}</label>\r\n      <p class=\"m-0 pt-0 pinned-add\">{{'univercity_of_glocestershire' | translate}}</p>\r\n    </div>\r\n\r\n    <div class=\"form-group mb-4\">\r\n      <label class=\"themeColor mb-2 p-0 d-block\">{{'enter_area' | translate}}<span class=\"error\">*</span></label>\r\n      <input type=\"text\" class=\"form-control form-text\" id=\"area\" placeholder=\"{{'please_enter_area' | translate}}\" value=\"\">\r\n    </div>\r\n\r\n    <div class=\"form-group loctioninput mb-4\">\r\n      <label class=\"themeColorin mb-2 p-0 d-block\">{{'enter_building' | translate}}</label>\r\n      <input type=\"text\" class=\"form-control form-text\" id=\"building_address\"\r\n        placeholder=\"{{'example_kurla_road' | translate}}\" value=\"\">\r\n    </div>\r\n\r\n    \r\n\r\n  </div>\r\n</div>\r\n\r\n<ion-row>\r\n  <ion-col col-12>\r\n    <ion-button expand=\"full\" shape=\"round\" class=\"safebtn\" (click)=\"safetytip()\" type=\"submit\"\r\n      [disabled]=\"buttondisabled\">{{'next' |\r\n      translate }}</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n  <!-- <div class=\"custom-control custom-checkbox newchekdot estimate mt-1\">\r\n   <label class=\"custom-control-label eLabel\" for=\"confirm_address\">I confirm\r\n     <input type=\"checkbox\" class=\"custom-control-input estimate map_estimate\" id=\"confirm_address\" ${this.isAccepted?'checked':''}>\r\n     <span class=\"checkmark\"></span>\r\n     </label>\r\n   </div> -->\r\n\r\n\r\n  <!-- <div class=\"mainasafe\">\r\n  <form [formGroup]=\"safetyForm\" (ngSubmit)=\"safetytip()\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"newsafe\">\r\n<h5>{{'safety_tips_info' | translate }}:</h5>\r\n\r\n<ion-list>\r\n<ion-item class=\"mainput\">\r\n  <ion-label position=\"stacked\">{{'safety_locality' | translate }}</ion-label>\r\n  <ion-input formControlName=\"locality\" id=\"auto\" (ionChange)=\"getlatlong()\"  type=\"text\" placeholder=\"Write here\"></ion-input>\r\n</ion-item>\r\n<ion-item class=\"mainput\">\r\n  <ion-label position=\"stacked\">{{'safety_landmark' | translate }}</ion-label>\r\n  <ion-input type=\"text\" placeholder=\"Write here\" formControlName=\"landmark\"   (ionChange)=\"getlatlong()\" ></ion-input>\r\n</ion-item>\r\n<ion-item class=\"mainput\">\r\n  <ion-label position=\"stacked\">{{'area/suburb' | translate}}</ion-label>\r\n  <ion-input type=\"text\" placeholder=\"Write here\" formControlName=\"suburb\"  (ionChange)=\"getlatlong()\" ></ion-input>\r\n</ion-item>\r\n<ion-item class=\"mainput\">\r\n  <ion-label position=\"stacked\">{{'safety_city' | translate }}</ion-label>\r\n  <ion-input type=\"text\" placeholder=\"Write here\" formControlName=\"city\"  [disabled]=\"city_disable\" (ionChange)=\"getlatlong()\" ></ion-input>\r\n</ion-item>\r\n<ion-item class=\"mainput\">\r\n  <ion-label position=\"stacked\">{{'safety_state'  | translate }}</ion-label>\r\n  <ion-input type=\"text\" placeholder=\"Write here\" formControlName=\"state\" disabled  (ionChange)=\"getlatlong()\" ></ion-input>\r\n</ion-item>\r\n<ion-item class=\"mainput\">\r\n  <ion-label position=\"stacked\">{{'safety_country' | translate }}</ion-label>\r\n  <ion-input type=\"text\" placeholder=\"Write here\" formControlName=\"country\" disabled (ionChange)=\"getlatlong()\" ></ion-input>\r\n</ion-item>\r\n\t </ion-list>\r\n\r\n   </div>\r\n    </ion-col>\r\n   </ion-row>\r\n   <ion-row>\r\n   \r\n</ion-row>\r\n    <ion-row>\r\n         <ion-col col-12>\r\n    \r\n    <ion-button expand=\"full\" shape=\"round\"  class=\"safebtn\" type=\"submit\"  [disabled] =\"!safetyForm.valid\" >{{'next' | translate }}</ion-button>\r\n      </ion-col>\r\n       </ion-row>\r\n \r\n  </form>\r\n   </div> -->\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/safteytipone/safteytipone-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/safteytipone/safteytipone-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: SafteytiponePageRoutingModule */

  /***/
  function srcAppSafteytiponeSafteytiponeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytiponePageRoutingModule", function () {
      return SafteytiponePageRoutingModule;
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


    var _safteytipone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./safteytipone.page */
    "./src/app/safteytipone/safteytipone.page.ts");

    var routes = [{
      path: '',
      component: _safteytipone_page__WEBPACK_IMPORTED_MODULE_3__["SafteytiponePage"]
    }];

    var SafteytiponePageRoutingModule = /*#__PURE__*/_createClass(function SafteytiponePageRoutingModule() {
      _classCallCheck(this, SafteytiponePageRoutingModule);
    });

    SafteytiponePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SafteytiponePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/safteytipone/safteytipone.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/safteytipone/safteytipone.module.ts ***!
    \*****************************************************/

  /*! exports provided: SafteytiponePageModule */

  /***/
  function srcAppSafteytiponeSafteytiponeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytiponePageModule", function () {
      return SafteytiponePageModule;
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


    var _safteytipone_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./safteytipone-routing.module */
    "./src/app/safteytipone/safteytipone-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _safteytipone_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./safteytipone.page */
    "./src/app/safteytipone/safteytipone.page.ts");

    var SafteytiponePageModule = /*#__PURE__*/_createClass(function SafteytiponePageModule() {
      _classCallCheck(this, SafteytiponePageModule);
    });

    SafteytiponePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _safteytipone_routing_module__WEBPACK_IMPORTED_MODULE_5__["SafteytiponePageRoutingModule"]],
      declarations: [_safteytipone_page__WEBPACK_IMPORTED_MODULE_7__["SafteytiponePage"]]
    })], SafteytiponePageModule);
    /***/
  },

  /***/
  "./src/app/safteytipone/safteytipone.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/safteytipone/safteytipone.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSafteytiponeSafteytiponePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: #592D8D;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainasafe {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 20px;\n  margin-bottom: 210px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newsafe {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 0px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newsafe p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newsafe h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.newsafe h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #2F1153;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\n.mainput {\n  --padding-start:0;\n  margin-bottom: 14px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --border-width: 0 0 0 0;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\n.mainput ion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n}\n\n.sc-ion-input-ios-h {\n  --placeholder-opacity: 1;\n  --padding-top: 11px;\n  --placeholder-color: #cccccc;\n  --padding-bottom: 11px;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-opacity: .3;\n}\n\n.label-stacked {\n  margin-bottom: 15px;\n  color: #292020;\n  font-size: 14px;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.safebtn {\n  color: #ffffff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 0 auto 120px;\n  --box-shadow:none;\n  text-align: center;\n}\n\n.loctioninput .form-group {\n  margin-bottom: 20px;\n}\n\n.loctioninput .estimate {\n  margin-left: 0;\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n.loctioninput .form-group label {\n  font-size: 16px;\n  margin-bottom: 0px !important;\n  padding-bottom: 2px !important;\n  display: inline-block;\n  padding: 0 !important;\n  margin-top: 0px;\n}\n\n.loctioninput .form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-top: 10px;\n}\n\n.tiponenewclass {\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 15px;\n}\n\n.themeColorin {\n  color: #592D8D !important;\n}\n\n.sub-label {\n  font-size: 16px !important;\n  color: #5D5656 !important;\n}\n\n.loctioninput .form-group {\n  margin-bottom: 20px;\n}\n\n.mapouter {\n  min-height: 467px;\n  height: 60%;\n  position: relative;\n  width: 100%;\n  margin-bottom: 30px;\n  margin-top: 15px;\n}\n\n.loctioninput .estimate {\n  margin-left: 0;\n  margin-top: 20px;\n}\n\n.error {\n  color: red;\n}\n\n.loctioninput .form-group label {\n  font-size: 16px;\n  margin-bottom: 0px !important;\n  padding-bottom: 2px !important;\n  display: inline-block;\n  padding: 0 !important;\n  margin-top: 0px;\n}\n\n.pinned-add {\n  font-size: 16px !important;\n  margin: 0;\n}\n\n.loctioninput .form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-top: 10px;\n}\n\n.form-text {\n  background: #fff !important;\n  color: #220E0E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zYWZ0ZXl0aXBvbmUvc2FmdGV5dGlwb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2FmdGV5dGlwb25lL3NhZnRleXRpcG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBSUEsOENBQUE7QUNIQTs7QURPQTtFQUVBLHVCQUFBO0FDTEE7O0FEUUE7RUFFQSxxQkFBQTtBQ05BOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEVUE7RUFFQSwrQkFBQTtBQ1JBOztBRFdBO0VBQ0EsY0FBQTtBQ1JBOztBRFdBO0VBQ0EsZ0JBQUE7QUNSQTs7QURZQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNWQTs7QURhQTtFQUVBLGNBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNmQTs7QURrQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDaEJBOztBRG1CQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUVHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNqQko7O0FEcUJBO0VBRUEsdUJBQUE7QUNuQkE7O0FEc0JBO0VBRUEsaUVBQUE7VUFBQSxnRUFBQTtBQ3BCQTs7QUR1QkE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQyxzQkFBQTtFQUNELHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQ3JCQTs7QUR3QkE7RUFDQyxzQkFBQTtBQ3JCRDs7QUR3QkM7RUFFRCxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUN0QkE7O0FEMkJBO0VBRUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0ksc0JBQUE7QUN6Qko7O0FENEJBO0VBRUEsZ0JBQUE7QUMxQkE7O0FENkJBO0VBRUEseUJBQUE7QUMzQkE7O0FEOEJBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzVCQTs7QUQrQkE7RUFFRSxrQkFBQTtBQzdCRjs7QURpQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hDQTs7QURtQ0E7RUFHQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQ0E7O0FEdUNBO0VBRUEsbUJBQUE7QUNyQ0E7O0FENENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDekNKOztBRDZDQztFQUNHLFVBQUE7QUMxQ0o7O0FENkNBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDSCxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQzFDRDs7QUQ2Q0E7RUFDQSxjQUFBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0VBQ0gsZ0JBQUE7QUMxQ0Q7O0FENkNJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzFDUjs7QUQ4Q0k7RUFFSix5QkFBQTtBQzVDQTs7QUQrQ0E7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FDNUNKOztBRCtDQTtFQUVBLG1CQUFBO0FDN0NBOztBRGlEQTtFQUFXLGlCQUFBO0VBQWtCLFdBQUE7RUFBWSxrQkFBQTtFQUFvQixXQUFBO0VBQVksbUJBQUE7RUFBb0IsZ0JBQUE7QUN4QzdGOztBRDJDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ3hDSjs7QUQ0Q0M7RUFDRyxVQUFBO0FDekNKOztBRDRDQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0gscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUN6Q0Q7O0FENkNDO0VBQ0csMEJBQUE7RUFDSCxTQUFBO0FDMUNEOztBRDZDQTtFQUNBLGNBQUE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7RUFDSCxnQkFBQTtBQzFDRDs7QUQ2Q0E7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0FDMUNKIiwiZmlsZSI6InNyYy9hcHAvc2FmdGV5dGlwb25lL3NhZnRleXRpcG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWRcclxue1xyXG4tLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubWFpbmFzYWZlXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbi10b3A6MjBweDtcclxubWFyZ2luLWJvdHRvbToyMTBweDtcclxufVxyXG5cclxuLnJlZFxyXG57XHJcbmNvbG9yOiNGNzEzMTM7XHJcbn1cclxuXHJcbi5uZXdzYWZlXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyM3B4O1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3c2FmZSBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjE5cHg7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXdzYWZlIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmxpbmUtaGVpZ2h0OjI4cHg7XHJcblxyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToyMnB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm5ld3NhZmUgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjJweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MThweDtcclxuY29sb3I6IzJGMTE1MztcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcblxyXG5pb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcclxufVxyXG5cclxuLm1haW5wdXRcclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6MDtcclxubWFyZ2luLWJvdHRvbToxNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyOm5vbmU7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSAuaXRlbS1pbm5lcntcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbiAubWFpbnB1dCBpb24taW5wdXRcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbi0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaFxyXG57XHJcbi0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuLS1wYWRkaW5nLXRvcDogMTFweDtcclxuLS1wbGFjZWhvbGRlci1jb2xvcjogI2NjY2NjYztcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDExcHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uXHJcbntcclxubWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oXHJcbntcclxuLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuMztcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWRcclxue1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaFxyXG4gIHtcclxuICB0cmFuc2Zvcm06aW5oZXJpdDtcclxuICB9XHJcblxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5cclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxufVxyXG5cclxuLnNhZmVidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5tYXJnaW46MCBhdXRvIDEyMHB4O1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cFxyXG57XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5sb2N0aW9uaW5wdXQgLmVzdGltYXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbiAuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOjAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbi10b3A6IDBweDtcclxuXHR9XHJcblx0XHJcbi5sb2N0aW9uaW5wdXQgLmZvcm0tY29udHJvbHtcclxuZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcblx0bWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGlwb25lbmV3Y2xhc3N7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudGhlbWVDb2xvcmluXHJcbntcclxuY29sb3I6IzU5MkQ4RCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5zdWItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVENTY1NiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9jdGlvbmlucHV0IC5mb3JtLWdyb3VwXHJcbntcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG5cclxuLm1hcG91dGVyeyBtaW4taGVpZ2h0OjQ2N3B4OyBoZWlnaHQ6NjAlOyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOjEwMCU7IG1hcmdpbi1ib3R0b206MzBweDsgbWFyZ2luLXRvcDoxNXB4OyB9XHJcblxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZXN0aW1hdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuIC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubG9jdGlvbmlucHV0IC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6MCFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQucGlubmVkLWFkZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuXHRtYXJnaW46MDtcclxufVxyXG5cclxuLmxvY3Rpb25pbnB1dCAuZm9ybS1jb250cm9se1xyXG5kaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuXHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0fVxyXG5cclxuLmZvcm0tdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzIyMEUwRSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXNhZmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjEwcHg7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0Y3MTMxMztcbn1cblxuLm5ld3NhZmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdzYWZlIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5ld3NhZmUgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubmV3c2FmZSBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xufVxuXG4ubWFpbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDowO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuaW9uLWl0ZW0gLml0ZW0taW5uZXIge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG4ubWFpbnB1dCBpb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24taW5wdXQtaW9zLWgge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy10b3A6IDExcHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNjY2NjY2M7XG4gIC0tcGFkZGluZy1ib3R0b206IDExcHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuMztcbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnNhZmVidG4ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG8gMTIwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2N0aW9uaW5wdXQgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubG9jdGlvbmlucHV0IC5lc3RpbWF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9jdGlvbmlucHV0IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubG9jdGlvbmlucHV0IC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpcG9uZW5ld2NsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRoZW1lQ29sb3JpbiB7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItbGFiZWwge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM1RDU2NTYgIWltcG9ydGFudDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYXBvdXRlciB7XG4gIG1pbi1oZWlnaHQ6IDQ2N3B4O1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZXN0aW1hdGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmxvY3Rpb25pbnB1dCAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnBpbm5lZC1hZGQge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9jdGlvbmlucHV0IC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZvcm0tdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/safteytipone/safteytipone.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/safteytipone/safteytipone.page.ts ***!
    \***************************************************/

  /*! exports provided: SafteytiponePage */

  /***/
  function srcAppSafteytiponeSafteytiponePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytiponePage", function () {
      return SafteytiponePage;
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
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);

    var SafteytiponePage = /*#__PURE__*/function () {
      function SafteytiponePage(navController, router, formBuilder) {
        _classCallCheck(this, SafteytiponePage);

        // this.safetyForm = formBuilder.group({
        //   locality: ['', Validators.required],
        //   landmark: ['', Validators.required],
        //   suburb: ['', Validators.required],
        //   city: ['', Validators.required],
        //   state: ['', Validators.required],
        //   country: ['', Validators.required]
        this.navController = navController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.locality_disable = false;
        this.landmark_disable = false;
        this.city_disable = false;
        this.state_disable = false;
        this.country_disable = false;
        this.suburb_disable = false;
        this.autoaddress = [];
        this.autoadd1 = [];
        this.final_Address = [];
        this.buttondisabled = true; // });

        this.latitude = localStorage.getItem('map_lat');
        this.longitude = localStorage.getItem('map_longi');
      }

      _createClass(SafteytiponePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          // this.initAutocomplete()
          this.initMap('search_address');
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
          var _this = this;

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
              self.longitude = JSON.stringify(mapMarker.getPosition().lng());
              localStorage.setItem('lat_safety', self.latitude);
              localStorage.setItem('longi_safety', self.longitude); // Reverse Geocode to get Address

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
            });
            var self = this;
            jquery__WEBPACK_IMPORTED_MODULE_5__("#options input:text").eq(0).focus(); // Set Address if any

            if (this.country) {
              this.showAddress();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text('');
            } // On Building Address Changed


            jquery__WEBPACK_IMPORTED_MODULE_5__("#building_address , #area").keyup(function (e) {
              if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('id') == 'building_address') self.building = jquery__WEBPACK_IMPORTED_MODULE_5__(this).val();else if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('id') == 'area') self.area = jquery__WEBPACK_IMPORTED_MODULE_5__(this).val();
              self.showAddress();
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

              _this.latitude = place.geometry.location.lat();
              _this.longitude = place.geometry.location.lng();
              localStorage.setItem('lat_safety', _this.latitude);
              localStorage.setItem('longi_safety', _this.longitude);
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
          var _this2 = this;

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

                _this2.setAddress(results[0].address_components);
              } else {
                _this2.resetFields("No results found");
              }
            } else {
              _this2.resetFields("Geocoder failed due to: " + status);
            }
          });
        }
      }, {
        key: "setAddress",
        value: function setAddress(addcomponent) {
          // Set Address
          this.building = this.landmark = this.area = this.city = this.state = this.country = "";

          if (addcomponent) {
            var street_number = '';
            var route = '';
            var localbuilding = '';
            this.final_Address = [];

            for (var i = 0; i < addcomponent.length; i++) {
              this.final_Address.push(addcomponent[i].long_name);

              if (addcomponent[i].types[0] == 'country') {
                this.country = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                this.state = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'locality') {
                this.city = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == 'postal_code') {} else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                this.area = addcomponent[i].long_name;
              } else if (addcomponent[i].types[0] == "sublocality_level_3" || addcomponent[i].types[0] == "sublocality") {
                this.landmark = addcomponent[i].long_name;
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
            jquery__WEBPACK_IMPORTED_MODULE_5__(".search_address").val(addr);
            jquery__WEBPACK_IMPORTED_MODULE_5__("#area").val(this.area);
            console.log(addr);
            this.building = street_number + ' ' + route;
            this.building = this.building.trim() == '' ? localbuilding : this.building;
          }

          jquery__WEBPACK_IMPORTED_MODULE_5__("#building_address").val(this.building);
          this.showAddress();
        }
      }, {
        key: "resetFields",
        value: function resetFields(message) {
          this.building = this.landmark = this.area = this.city = this.state = this.country = "";
          jquery__WEBPACK_IMPORTED_MODULE_5__("#building_address").val('');
          jquery__WEBPACK_IMPORTED_MODULE_5__("#area").val('');
          jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text(''); // Show message like Select a valid address
          // Disable next

          this.buttondisabled = true; //$("#dynamicNext").attr("disabled", "disabled");
        }
      }, {
        key: "showAddress",
        value: function showAddress() {
          if (this.latitude != '' && this.longitude != '' && (this.country != '' || this.country != undefined) && (this.state != '' || this.state != undefined)) {
            console.log('else', this.country, this.state);

            if (this.building != '' && this.landmark != '') {
              console.log('else', this.country, this.state); // $(".search_address").text(this.building+', '+this.landmark+', '+this.area+', '+this.city+', '+this.state+', '+this.country);        

              this.address1 = this.building + ', ' + this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country;
              jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text(this.building + ', ' + this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
              localStorage.setItem('address_safety', this.address1);
            } else if (this.building != '') {
              console.log('else', this.country, this.state); /// $(".search_address").text(this.building+','+this.area+', '+this.city+', '+this.state+', '+this.country);    

              this.address1 = this.building + ',' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country;
              jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text(this.building + ',' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
              localStorage.setItem('address_safety', this.address1);
            } else if (this.landmark != '') {
              console.log('else', this.country, this.state);
              this.address1 = this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country;
              jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text(this.landmark + ', ' + this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
              localStorage.setItem('address_safety', this.address1); //$(".search_address").text(this.landmark+', '+this.area+', '+this.city+', '+this.state+', '+this.country);  
            } else if (this.area != '' && this.city != '') {
              console.log('else', this.country, this.state);
              this.address1 = this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country;
              jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text(this.area + ', ' + this.city + ', ' + this.state + ', ' + this.country);
              localStorage.setItem('address_safety', this.address1); //$(".search_address").text(this.area+', '+this.city+', '+this.state+', '+this.country);
            } else {
              console.log('else', this.country, this.state);
              this.address1 = this.city + ', ' + this.country;
              jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text('');
              localStorage.setItem('address_safety', this.address1);
            }
          } else {
            console.log('else', this.country, this.state);
            jquery__WEBPACK_IMPORTED_MODULE_5__(".pinned-add").text('');
          }

          if (this.latitude != '' && this.longitude != '' && this.area != '' && this.country != '') {
            // $("#dynamicNext").removeAttr("disabled");
            this.buttondisabled = false;
          } else {
            // $("#dynamicNext").attr("disabled", "disabled");
            this.buttondisabled = true;
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
              } //  $("#dynamicNext").removeAttr("disabled");
              //this.buttondisabled = false

            }
          });
        } //  getlatlong() {
        //   this.address2 = this.safetyForm.value.locality +','+ this.safetyForm.value.landmark +','+ this.safetyForm.value.suburb +','+ this.safetyForm.value.city +','+ this.safetyForm.value.state +','+ this.safetyForm.value.country
        //     console.log(this.address2)
        //     var geocoder = new google.maps.Geocoder();
        //                                           var city,hascity,address = this.address2
        //                                           geocoder.geocode({ 'address': address }, function (results, status) {
        //                                          if (status == google.maps.GeocoderStatus.OK)
        //                                          {
        //                                            console.log(results)
        //                                            this.address = results[0].formatted_address;
        //                                            this.lat= JSON.stringify(results[0].geometry.location.lat());
        //                                            this.longi = JSON.stringify(results[0].geometry.location.lng()); 
        //                                            //this.locations = new google.maps.LatLng(this.lat, this.longi);
        //                                            console.log(this.lat)
        //                                            console.log(this.longi)       
        //                                            console.log(this.address);
        //                                            localStorage.setItem('lat_safety',this.lat)                                 
        //                                            localStorage.setItem('longi_safety',this.longi) 
        //                                            localStorage.setItem('address_safety',this.address)                                 
        //                                         }
        //                                       });
        //    }

      }, {
        key: "safetytip",
        value: function safetytip() {
          this.lat1 = localStorage.getItem('lat_safety');
          this.longi1 = localStorage.getItem('longi_safety');
          this.address1 = localStorage.getItem('address_safety');
          console.log("locality", this.area);
          console.log("landmark", this.building);
          console.log("city", this.city);
          console.log("state", this.state);
          console.log("country", this.country);
          console.log("lat1", this.lat1);
          console.log("longi1", this.longi1);
          console.log("address1", this.address1);
          var navigationExtras = {
            queryParams: {
              locality: this.area,
              landmark: this.building,
              city: this.city,
              state: this.state,
              country: this.country,
              lat: this.latitude,
              longi: this.longitude,
              address: this.address1
            }
          };
          console.log(navigationExtras);
          this.navController.navigateForward(["safteytipthree"], navigationExtras);
        } //autocomplete code

      }, {
        key: "initAutocomplete",
        value: function initAutocomplete() {
          var _this3 = this;

          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('auto').getElementsByTagName('input')[0], {
            types: ["geocode"]
          }); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          this.autocomplete.setFields(["address_component"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          this.autocomplete.addListener("place_changed", function (fillInAddress) {
            console.log(_this3.safetyForm.value.locality);

            var autoadd = _this3.autocomplete.getPlace();

            _this3.autoadd1 = autoadd.address_components;
            console.log(_this3.autoadd1);

            for (var i = 0; i < _this3.autoadd1.length; i++) {
              //this.autoaddress.push(this.autoadd1[i].long_name)
              if (_this3.autoadd1[i].types[0] == 'country') {
                _this3.safetyForm.controls['country'].setValue(_this3.autoadd1[i].long_name);

                _this3.country_disable = true;
              } else if (_this3.autoadd1[i].types[0] == 'locality') {
                _this3.safetyForm.controls['city'].setValue(_this3.autoadd1[i].long_name);

                _this3.city_disable = true;
              } else if (_this3.autoadd1[i].types[0] == 'administrative_area_level_1') {
                _this3.safetyForm.controls['state'].setValue(_this3.autoadd1[i].long_name);

                _this3.state_disable = true;
              } else if (_this3.autoadd1[i].types[0] == 'sublocality_level_1') {
                _this3.safetyForm.controls['locality'].setValue(_this3.autoadd1[i].long_name);

                _this3.locality_disable = true;
              } else if (_this3.autoadd1[i].types[0] == 'sublocality_level_2') {
                _this3.safetyForm.controls['landmark'].setValue(_this3.autoadd1[i].long_name);

                _this3.landmark_disable = true;
              } else if (_this3.autoadd1[i].types[0] == 'postal_code') {
                _this3.safetyForm.controls['suberb'].setValue(_this3.autoadd1[i].long_name);

                _this3.suburb_disable = true;
              }
            } // this.autoaddress = autoadd.long_name.join(',')
            //  console.log(this.autoaddress)
            //  var final_result = this.autoaddress.join(',')
            //   console.log(final_result)
            //   console.log(this.autoaddress)

          });
        }
      }]);

      return SafteytiponePage;
    }();

    SafteytiponePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    SafteytiponePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-safteytipone',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./safteytipone.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytipone/safteytipone.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./safteytipone.page.scss */
      "./src/app/safteytipone/safteytipone.page.scss"))["default"]]
    })], SafteytiponePage);
    /***/
  }
}]);
//# sourceMappingURL=safteytipone-safteytipone-module-es5.js.map
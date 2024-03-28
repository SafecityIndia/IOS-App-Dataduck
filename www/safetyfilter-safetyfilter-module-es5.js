function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safetyfilter-safetyfilter-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/safetyfilter/safetyfilter.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/safetyfilter/safetyfilter.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSafetyfilterSafetyfilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n <ion-toolbar>\n   <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/modelreport' icon=\"undefined\" text=\"\" (click)=\"dismiss()\"  class=\"backbutton\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>{{'home_all_filters' | translate}}</ion-title>\n  <div  class=\"newsidetext\" slot=\"end\" tappable (click)=\"deselect()\">\n   <p>{{'button_clear' | translate }} {{'home_all_filters' | translate}}</p>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div class=\"newlist\">\n   <ion-card class=\"newcard\">\n        <ion-row>\n          <ion-col size=\"12\">\n <h5 class=\"newhead\">{{'home_show_incident_from' | translate }}</h5>\n\t\t  <div class=\"newfilter\">\n  <ion-list>\n  <ion-radio-group  mode=\"md\" (ionChange)=\"getValue($event)\" [(ngModel)] = 'safetyFrom'>\n   <ion-item>\n      <ion-label>{{'home_all_time' | translate }}</ion-label>\n      <ion-radio slot=\"end\" value=\"all\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{'home_today' | translate}}</ion-label>\n      <ion-radio slot=\"end\" value=\"today\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{'home_this_week' | translate}}</ion-label>\n      <ion-radio slot=\"end\" value=\"week\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{'home_this_month' | translate }}</ion-label>\n      <ion-radio slot=\"end\" value=\"month\"></ion-radio>\n    </ion-item>\n\t\n    <ion-item>\n      <ion-label>{{'home_this_year' | translate }}</ion-label>\n      <ion-radio slot=\"end\" value=\"year\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n  \n</ion-list>\n        \n   </div>\n     </ion-col>\n        </ion-row>\n </ion-card>\n </div>\n\n</ion-content>\n <div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\" goToSafetyTipViewPage()\" [disabled]=\"buttondisable\">{{'button_apply' | translate }}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>";
    /***/
  },

  /***/
  "./src/app/safetyfilter/safetyfilter-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/safetyfilter/safetyfilter-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: SafetyfilterPageRoutingModule */

  /***/
  function srcAppSafetyfilterSafetyfilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafetyfilterPageRoutingModule", function () {
      return SafetyfilterPageRoutingModule;
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


    var _safetyfilter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./safetyfilter.page */
    "./src/app/safetyfilter/safetyfilter.page.ts");

    var routes = [{
      path: '',
      component: _safetyfilter_page__WEBPACK_IMPORTED_MODULE_3__["SafetyfilterPage"]
    }];

    var SafetyfilterPageRoutingModule = /*#__PURE__*/_createClass(function SafetyfilterPageRoutingModule() {
      _classCallCheck(this, SafetyfilterPageRoutingModule);
    });

    SafetyfilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SafetyfilterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/safetyfilter/safetyfilter.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/safetyfilter/safetyfilter.module.ts ***!
    \*****************************************************/

  /*! exports provided: SafetyfilterPageModule */

  /***/
  function srcAppSafetyfilterSafetyfilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafetyfilterPageModule", function () {
      return SafetyfilterPageModule;
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


    var _safetyfilter_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./safetyfilter-routing.module */
    "./src/app/safetyfilter/safetyfilter-routing.module.ts");
    /* harmony import */


    var _safetyfilter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./safetyfilter.page */
    "./src/app/safetyfilter/safetyfilter.page.ts");

    var SafetyfilterPageModule = /*#__PURE__*/_createClass(function SafetyfilterPageModule() {
      _classCallCheck(this, SafetyfilterPageModule);
    });

    SafetyfilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _safetyfilter_routing_module__WEBPACK_IMPORTED_MODULE_6__["SafetyfilterPageRoutingModule"]],
      declarations: [_safetyfilter_page__WEBPACK_IMPORTED_MODULE_7__["SafetyfilterPage"]]
    })], SafetyfilterPageModule);
    /***/
  },

  /***/
  "./src/app/safetyfilter/safetyfilter.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/safetyfilter/safetyfilter.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSafetyfilterSafetyfilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-checkbox {\n  --background-checked: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: #2ED35A;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-width: 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, transparent));\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.newcard {\n  box-shadow: none;\n  border-bottom: none;\n  border-radius: 0;\n  -webkit-margin-start: 6px;\n          margin-inline-start: 6px;\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n}\n\n.newhead {\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  margin-bottom: 16px;\n}\n\nion-input {\n  --background: #ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n}\n\n.newfilter {\n  width: 100%;\n  height: auto;\n}\n\n.newfilter ion-icon {\n  margin-top: 18px;\n}\n\n.newfilter {\n  text-align: right;\n}\n\n.item-interactive.item-has-focus {\n  --highlight-background: transparent;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.newcontentin {\n  margin-bottom: 125px;\n}\n\n.newcontentin ion-list {\n  padding-top: 0;\n}\n\n.newcontentin p {\n  color: #909090;\n  font-size: 16px;\n  margin-top: 0;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 24px;\n  margin-top: 1px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\nion-radio {\n  --color-checked: #592D8D;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\nion-radio.ios.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 15px;\n  margin-top: 18px;\n  padding-right: 11px;\n}\n\n.newfilter ion-item {\n  --padding-start: 14px;\n  margin-bottom: 8px;\n  --inner-padding-end: 10px;\n  font-size: 15px;\n  border: 1px solid #E1D8EB;\n  --min-height:38px;\n  border-radius: 3px;\n  color: #292020;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newhead {\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  margin-bottom: 16px;\n}\n\n.newfilter ion-label {\n  margin-top: 10px;\n  margin-bottom: 8px;\n  white-space: inherit;\n}\n\n.item-radio-checked {\n  --background:#D6C6EA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zYWZldHlmaWx0ZXIvc2FmZXR5ZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2FmZXR5ZmlsdGVyL3NhZmV0eWZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBRElBO0VBRUEsaUNBQUE7RUFDSSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0gsZUFBQTtFQUNHLGtCQUFBO0VBQ0gsbUJBQUE7RUFDQSxrRkFBQTtBQ0ZEOztBRElBO0VBSUEsOENBQUE7QUNGQTs7QURNQTtFQUVBLHVCQUFBO0FDSkE7O0FET0E7RUFFQSxxQkFBQTtBQ0xBOztBRE9BO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURPQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTEE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFNBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNDO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNHLHVCQUFBO1VBQUEsc0JBQUE7QUNQSjs7QURVQztFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1JEOztBRFdBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDUko7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ1RBOztBRGFBO0VBRUEsZ0JBQUE7QUNYQTs7QURlQTtFQUVBLGlCQUFBO0FDYkE7O0FEZ0JBO0VBQ0EsbUNBQUE7QUNiQTs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ2ZBOztBRGtCQTtFQUVBLG9CQUFBO0FDaEJBOztBRG1CQTtFQUVBLGNBQUE7QUNqQkE7O0FEbUJBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDaEJBOztBRHFCQTtFQUVJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ2xCSjs7QURxQkE7RUFFQSw0QkFBQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNuQko7O0FEc0JBO0VBR0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDcEJKOztBRDBCQztFQUVHLHdCQUFBO0FDeEJKOztBRDBCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDeEJBOztBRDJCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMxQkE7O0FENkJFO0VBR0Usd0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUM1Qko7O0FEOEJBO0VBRUksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDM0JKOztBRDhCQTtFQUVBLDRCQUFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQzVCSjs7QUQrQkE7RUFHSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDRSxVQUFBO0VBQ0YsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzdCSjs7QURnQ0E7RUFHSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDRCxVQUFBO0VBQ0csVUFBQTtFQUNGLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5Qko7O0FEbUNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDakNBOztBRG1DQTtFQUVBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQyx5QkFBQTtFQUNELGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUNqQ0E7O0FEb0NBO0VBRUMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbENEOztBRHFDQTtFQUdJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDSixvQkFBQTtBQ3BDQTs7QURzQ0E7RUFFQSxvQkFBQTtBQ3BDQSIsImZpbGUiOiJzcmMvYXBwL3NhZmV0eWZpbHRlci9zYWZldHlmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuaW9uLWNoZWNrYm94XHJcbntcclxuLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCkpO1xyXG59XHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubmV3Y2FyZFxyXG5cdHtcclxuXHRib3gtc2hhZG93Om5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTpub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6MDtcclxuXHRtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3aGVhZFxyXG5cdHtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRtYXJnaW4tYm90dG9tOjE2cHg7XHJcblx0fVxyXG5cdFxyXG5pb24taW5wdXQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdmaWx0ZXJcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuXHJcbn1cclxuXHJcbi5uZXdmaWx0ZXIgaW9uLWljb25cclxue1xyXG5tYXJnaW4tdG9wOjE4cHg7XHJcblxyXG59XHJcblxyXG4ubmV3ZmlsdGVyXHJcbntcclxudGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXN7XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLm5ld2xpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpblxyXG57XHJcbm1hcmdpbi1ib3R0b206MTI1cHg7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW4gaW9uLWxpc3Rcclxue1xyXG5wYWRkaW5nLXRvcDowO1xyXG59XHJcbi5uZXdjb250ZW50aW4gcHtcclxuY29sb3I6IzkwOTA5MDtcclxuZm9udC1zaXplOjE2cHg7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuXHJcblxyXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZFxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MDtcclxufVxyXG5cclxuaW9uLXJhZGlvLm1kLnJhZGlvLWNoZWNrZWQgXHJcbntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiBpb24tcmFkaW9cclxuICB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XHJcbiAgfVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93Om5vbmU7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuIFxyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjNTkyRDhEO1xyXG4gIH1cclxuXHJcbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxufVxyXG5cclxuaW9uLXJhZGlvLm1kXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tcmFkaW8uaW9zLnJhZGlvLWNoZWNrZWQgXHJcbntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxuICAgd2lkdGg6IDdweDtcclxuICAgICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3c2lkZXRleHQgcFxyXG57XHJcbmNvbG9yOiNEOTBEMEQ7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5tYXJnaW4tdG9wOjE4cHg7XHJcbnBhZGRpbmctcmlnaHQ6MTFweDtcclxufVxyXG4ubmV3ZmlsdGVyIGlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG5tYXJnaW4tYm90dG9tOjhweDtcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDEwcHg7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbi0tbWluLWhlaWdodDozOHB4O1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuY29sb3I6IzI5MjAyMDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLm5ld2hlYWRcclxuXHR7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0bWFyZ2luLWJvdHRvbToxNnB4O1xyXG5cdH1cclxuXHJcbi5uZXdmaWx0ZXIgaW9uLWxhYmVsXHJcbntcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcbi5pdGVtLXJhZGlvLWNoZWNrZWRcclxue1xyXG4tLWJhY2tncm91bmQ6I0Q2QzZFQTtcclxufVxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KSk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5uZXdjYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNnB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xufVxuXG4ubmV3aGVhZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdmaWx0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3ZmlsdGVyIGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLm5ld2ZpbHRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWhhcy1mb2N1cyB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubmV3bGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5uZXdjb250ZW50aW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMjVweDtcbn1cblxuLm5ld2NvbnRlbnRpbiBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubmV3Y29udGVudGluIHAge1xuICBjb2xvcjogIzkwOTA5MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubWQucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG59XG5cbmlvbi1yYWRpby5tZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG59XG5cbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjNTkyRDhEO1xufVxuXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbn1cblxuaW9uLXJhZGlvLm1kIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1yYWRpdXM6MDtcbn1cblxuaW9uLXJhZGlvLm1kLnJhZGlvLWNoZWNrZWQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1yYWRpby5pb3MucmFkaW8tY2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgd2lkdGg6IDdweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm5ld3NpZGV0ZXh0IHAge1xuICBjb2xvcjogI0Q5MEQwRDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xufVxuXG4ubmV3ZmlsdGVyIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1taW4taGVpZ2h0OjM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXdoZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm5ld2ZpbHRlciBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1iYWNrZ3JvdW5kOiNENkM2RUE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/safetyfilter/safetyfilter.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/safetyfilter/safetyfilter.page.ts ***!
    \***************************************************/

  /*! exports provided: SafetyfilterPage */

  /***/
  function srcAppSafetyfilterSafetyfilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafetyfilterPage", function () {
      return SafetyfilterPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var SafetyfilterPage = /*#__PURE__*/function () {
      function SafetyfilterPage(httpClient, navController, sharedservice) {
        _classCallCheck(this, SafetyfilterPage);

        this.httpClient = httpClient;
        this.navController = navController;
        this.sharedservice = sharedservice;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.address = '';
        this.pagename = 'safetyFilterPage';
        this.buttondisable = true;
        this.safetyFrom = this.sharedservice.getsafetyfiltersdata();
        console.log(this.safetyFrom);
      }

      _createClass(SafetyfilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deselect",
        value: function deselect() {
          this.safetyFrom = '';
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var navigationExtras = {
            queryParams: {
              segmentModel: 'two',
              pagename: this.pagename
            }
          };
          this.navController.navigateForward(["modelreport"], navigationExtras);
        }
      }, {
        key: "getValue",
        value: function getValue(e) {
          console.log(e);
          this.buttondisable = false;
          this.safetyFrom = e.detail.value;
        } // filterSafetyTip() {
        //   console.log(this.safetyFrom)
        //   let data = new FormData();
        //   data.append('lang_id','1');
        //   data.append('client_id','1');
        //   // data.append('area',this.address);
        //   data.append('city','mumbai');
        //   data.append('reported_on',this.safetyFrom);
        //   // let loader = this.loadingCtrl.create({
        //   //   });  
        //   // loader.present();
        //   this.httpClient.post(this.apiUrl+'get-safety-tips',data)
        //     .subscribe((rdata: any) => {
        //       if(rdata != '')
        //       {
        //         console.log(rdata)
        //         this.SafetyTipList = rdata
        //         this.SafetyTipList = JSON.stringify(this.SafetyTipList)
        //         this.goToSafetyTipViewPage(this.SafetyTipList);
        //       }
        //      }, error => {
        //     });
        // }

      }, {
        key: "goToSafetyTipViewPage",
        value: function goToSafetyTipViewPage() {
          this.sharedservice.setsafetyfiltersdata(this.safetyFrom);
          var navigationExtras = {
            queryParams: {
              safetyFrom: this.safetyFrom,
              pagename: this.pagename,
              segmentModel: 'two'
            }
          };
          this.navController.navigateForward(["modelreport"], navigationExtras);
        }
      }]);

      return SafetyfilterPage;
    }();

    SafetyfilterPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    SafetyfilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-safetyfilter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./safetyfilter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/safetyfilter/safetyfilter.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./safetyfilter.page.scss */
      "./src/app/safetyfilter/safetyfilter.page.scss"))["default"]]
    })], SafetyfilterPage);
    /***/
  }
}]);
//# sourceMappingURL=safetyfilter-safetyfilter-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preframingtwo-preframingtwo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingtwo/preframingtwo.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preframingtwo/preframingtwo.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreframingtwoPreframingtwoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"mainframing\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <!-- <div class=\"newframing dynamic-success-link1\" > -->\n                <div class=\"newframing \">\n                    <!-- <p>We understand it is difficult to recall one’s traumatic experiences. If you feel uncomfortable at any time, know that you can exit. If you have not hit the submit button, your data will not be saved.<br><br> Even though you are sharing your experience anonymously, we need your consent to include your experience in our database of crowdsourced data.</p>\n<ion-list>\n<p *ngIf= \"error\" class=\"red\">Please check this box to proceed</p>\n \n<ion-item >\n    <ion-label>I Consent \n</ion-label>\n\t     <ion-checkbox  slot=\"start\" (ionChange)=\"ButtonEnableDisable($event)\"></ion-checkbox>\n  </ion-item>\n  \n</ion-list>\n<h5 (click)=\"policy()\">View Privacy Policy </h5>\n</div>\n<div class=\"bottomframing\">\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtnframing\" [disabled]=\"buttonDisabled\" (click)= \"addReport1()\">START</ion-button> -->\n                    <div class=\"topbordingin dynamic-success-link1\">\n\n                    </div>\n                    <!-- <div *ngIf=\"hide_for_jordan\"> -->\n                    <ion-list *ngIf=\"hide\">\n                        <p *ngIf=\"error\" class=\"red\">{{'consent_error' | translate}}</p>\n\n                        <ion-item>\n                            <ion-label>{{'i_consent' | translate}}\n                            </ion-label>\n                            <ion-checkbox class=\"newcheckbottomin\" slot=\"start\" (ionChange)=\"ButtonEnableDisable($event)\">\n                            </ion-checkbox>\n                        </ion-item>\n\n                    </ion-list>\n                    <!-- </div> -->\n                    <!-- <div *ngIf=\"hide_for_jordan\"> -->\n                    <h5 (click)=\"policy()\" *ngIf=\"hide\">{{'view_privacy_policy' | translate}}</h5>\n                    <!-- <h5 (click)=\"policy()\" *ngIf=\"hide_for_jordan_p\">{{'view_privacyprotection_policy' | translate}}</h5> -->\n                    <!-- </div> -->\n\n                </div>\n\n            </ion-col>\n        </ion-row>\n\n        <!-- <div *ngIf=\"hide_for_jordan\"> -->\n        <div class=\"bottomframing\" *ngIf=\"hide\">\n            <ion-button expand=\"full\" shape=\"round\" class=\"newbtnframing\" [disabled]=\"buttonDisabled\" (click)=\"addReport1()\">\n                {{'Start' | translate}}</ion-button>\n        </div>\n        <!-- </div> -->\n\n        <div class=\"bottomframing\" *ngIf=\"hide_for_jordan\">\n            <ion-button expand=\"full\" shape=\"round\" class=\"newbtnframing\" (click)=\"experiance()\">\n                {{'next' | translate}}</ion-button>\n        </div>\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/preframingtwo/preframingtwo-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/preframingtwo/preframingtwo-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PreframingtwoPageRoutingModule */

  /***/
  function srcAppPreframingtwoPreframingtwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreframingtwoPageRoutingModule", function () {
      return PreframingtwoPageRoutingModule;
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


    var _preframingtwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preframingtwo.page */
    "./src/app/preframingtwo/preframingtwo.page.ts");

    var routes = [{
      path: '',
      component: _preframingtwo_page__WEBPACK_IMPORTED_MODULE_3__["PreframingtwoPage"]
    }];

    var PreframingtwoPageRoutingModule = /*#__PURE__*/_createClass(function PreframingtwoPageRoutingModule() {
      _classCallCheck(this, PreframingtwoPageRoutingModule);
    });

    PreframingtwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreframingtwoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/preframingtwo/preframingtwo.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/preframingtwo/preframingtwo.module.ts ***!
    \*******************************************************/

  /*! exports provided: PreframingtwoPageModule */

  /***/
  function srcAppPreframingtwoPreframingtwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreframingtwoPageModule", function () {
      return PreframingtwoPageModule;
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


    var _preframingtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./preframingtwo-routing.module */
    "./src/app/preframingtwo/preframingtwo-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _preframingtwo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./preframingtwo.page */
    "./src/app/preframingtwo/preframingtwo.page.ts");

    var PreframingtwoPageModule = /*#__PURE__*/_createClass(function PreframingtwoPageModule() {
      _classCallCheck(this, PreframingtwoPageModule);
    });

    PreframingtwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _preframingtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreframingtwoPageRoutingModule"]],
      declarations: [_preframingtwo_page__WEBPACK_IMPORTED_MODULE_7__["PreframingtwoPage"]]
    })], PreframingtwoPageModule);
    /***/
  },

  /***/
  "./src/app/preframingtwo/preframingtwo.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/preframingtwo/preframingtwo.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreframingtwoPreframingtwoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 196px;\n  padding: 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainframing {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 20px;\n}\n\n.newframing h5 {\n  width: 100%;\n  height: auto;\n  line-height: 25px;\n  font-size: 20px;\n  text-align: center;\n  margin: 22px auto 0;\n  color: #592D8D;\n  margin-bottom: 50px;\n  font-size: 15px;\n  text-decoration: underline;\n  margin-top: 0;\n}\n\n.newframing {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.checkbox-icon {\n  --border-radius: none;\n}\n\n.custom-control-input:checked ~ .label1::before {\n  color: #220E0E !important;\n  border-color: #E1D8EB;\n  background: #fff;\n}\n\n.inputGroup input:checked ~ label:after {\n  width: 25px;\n  height: 26px;\n  content: \"\";\n  background: url(/assets/images/icons/tick.svg);\n  background-repeat: no-repeat;\n  background-position: 5px 8px;\n  z-index: 2;\n  position: relative;\n  float: right;\n  margin-top: -5px;\n  background-size: 19px;\n}\n\n.inputGroup input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n\n.custom-checkbox {\n  display: block;\n  position: relative;\n  padding-left: 35px !important;\n  margin-bottom: 12px;\n  cursor: pointer;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  font-size: 16px !important;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  margin-top: 8px !important;\n}\n\n/* Hide the browser's default checkbox */\n\n.custom-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.custom-checkbox:hover input ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.custom-checkbox input:checked ~ .checkmark {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.custom-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.custom-checkbox .checkmark:after {\n  left: 7px;\n  top: 2px;\n  width: 4px;\n  height: 9px;\n  border: solid #2ED35A;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.newbtnframing {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #572691;\n  --background-activated: #572691;\n  --background-focused: #572691;\n  --background-hover: #572691;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.bottomframing {\n  width: 80%;\n  margin: 50px auto 0;\n  text-align: center;\n}\n\n.newframing ion-item {\n  --padding-start: 0;\n  margin-bottom: 20px;\n  --inner-border-width: 0 0 0px 0;\n  border: none !important;\n}\n\n.newframing .red {\n  color: #BA0B0B;\n  font-size: 13px !important;\n  margin-bottom: 0 !important;\n}\n\n.newframing.item .sc-ion-label-ios-h {\n  font-size: 16px;\n}\n\n.newframing.item .sc-ion-label-md-h {\n  font-size: 16px;\n}\n\n.newframing.in-item[slot=start] {\n  -webkit-margin-end: 15px !important;\n          margin-inline-end: 15px !important;\n}\n\n.newcheckbottomin {\n  --border-radius:0 !important;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainframing {\n    bottom: inherit;\n    top: 5px;\n    margin-bottom: 25px;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainframing {\n    bottom: inherit;\n    top: 5px;\n    margin-bottom: 25px;\n  }\n}\n\n@media all and (max-width: 550px) and (min-width: 320px) {\n  .md .mainframing {\n    top: 11%;\n    bottom: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9wcmVmcmFtaW5ndHdvL3ByZWZyYW1pbmd0d28ucGFnZS5zY3NzIiwic3JjL2FwcC9wcmVmcmFtaW5ndHdvL3ByZWZyYW1pbmd0d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURTQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDUEE7O0FEV0E7RUFDQSxjQUFBO0FDUkE7O0FEV0E7RUFDQSxnQkFBQTtBQ1JBOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDVEE7O0FEWUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZBOztBRFlDO0VBRUEsV0FBQTtFQUFXLFlBQUE7RUFDWCxpQkFBQTtFQUFpQixlQUFBO0VBQWUsa0JBQUE7RUFDaEMsbUJBQUE7RUFBbUIsY0FBQTtFQUFjLG1CQUFBO0VBQ2pDLGVBQUE7RUFBZ0IsMEJBQUE7RUFBMkIsYUFBQTtBQ0g1Qzs7QURLQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNMQTs7QURVQTtFQUNBLHFCQUFBO0FDUEE7O0FEWUE7RUFDRSx5QkFBQTtFQUNELHFCQUFBO0VBQ0MsZ0JBQUE7QUNURjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EsNEJBQUE7RUFDRiw0QkFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUko7O0FEVUE7RUFFRSxtREFBQTtFQUNBLFVBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0ksMEJBQUE7QUNQTjs7QURVQSx3Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ1BGOztBRFVBLDZCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0csZ0JBQUE7RUFDRCxzQkFBQTtBQ1BGOztBRFVBLHdEQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBLDZEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1BGOztBRFVBLG9DQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsU0FBQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ1BKOztBRFVBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVEE7O0FEWUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1ZBOztBRGNDO0VBRUEsa0JBQUE7RUFDRCxtQkFBQTtFQUNBLCtCQUFBO0VBQ0ksdUJBQUE7QUNaSjs7QURlQztFQUVBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDYkQ7O0FEbUJBO0VBRUEsZUFBQTtBQ2pCQTs7QURvQkE7RUFFQSxlQUFBO0FDbEJBOztBRHFCQztFQUVBLG1DQUFBO1VBQUEsa0NBQUE7QUNuQkQ7O0FEdUJDO0VBRUEsNEJBQUE7QUNyQkQ7O0FEd0JDO0VBSUQ7SUFFQyxlQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0VDekJDO0FBQ0Y7O0FENkJDO0VBSUQ7SUFFQyxlQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0VDL0JDO0FBQ0Y7O0FEbUNBO0VBQ0E7SUFFQSxRQUFBO0lBQ0MsZUFBQTtFQ2xDQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJlZnJhbWluZ3R3by9wcmVmcmFtaW5ndHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4ubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjE5NnB4O1xyXG5wYWRkaW5nOjA7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG4ubWFpbmZyYW1pbmdcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToyMHB4O1xyXG59XHJcbiAubmV3ZnJhbWluZyBoNVxyXG4ge1xyXG4gd2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztcclxuIGxpbmUtaGVpZ2h0OjI1cHg7Zm9udC1zaXplOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XHJcbiBtYXJnaW46MjJweCBhdXRvIDA7Y29sb3I6IzU5MkQ4RDttYXJnaW4tYm90dG9tOjUwcHg7XHJcbiBmb250LXNpemU6IDE1cHg7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7bWFyZ2luLXRvcDowO1xyXG4gfVxyXG4ubmV3ZnJhbWluZ1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuXHJcblxyXG4uY2hlY2tib3gtaWNvbiB7XHJcbi0tYm9yZGVyLXJhZGl1czogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4ubGFiZWwxOjpiZWZvcmUge1xyXG4gIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XHJcbiBib3JkZXItY29sb3I6ICNFMUQ4RUI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGljay5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDVweCA4cHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTlweDtcclxufVxyXG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOjAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTowICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogN3B4O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiA5cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkICMyRUQzNUE7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ubmV3YnRuZnJhbWluZ1xyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU3MjY5MTtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU3MjY5MTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTcyNjkxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTcyNjkxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDoxMDAlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tZnJhbWluZ1xyXG57XHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjUwcHggYXV0byAwO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiAubmV3ZnJhbWluZyBpb24taXRlbVxyXG4ge1xyXG4gLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLm5ld2ZyYW1pbmcgLnJlZFxyXG4ge1xyXG4gY29sb3I6I0JBMEIwQjtcclxuIGZvbnQtc2l6ZToxM3B4ICFpbXBvcnRhbnQ7XHJcbiBtYXJnaW4tYm90dG9tOjAgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG5cclxuICBcclxuXHJcbi5uZXdmcmFtaW5nLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5cclxufVxyXG4ubmV3ZnJhbWluZy5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5cclxufVxyXG4gLm5ld2ZyYW1pbmcuaW4taXRlbVtzbG90PVwic3RhcnRcIl1cclxuIHtcclxuIG1hcmdpbi1pbmxpbmUtZW5kOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gfVxyXG4gXHJcbiAubmV3Y2hlY2tib3R0b21pblxyXG4ge1xyXG4gLS1ib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluZnJhbWluZ1xyXG4ge1xyXG4gYm90dG9tOmluaGVyaXQ7XHJcbiB0b3A6NXB4O1xyXG4gbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gfVxyXG4gXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6NjQwcHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDM2MHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluZnJhbWluZ1xyXG4ge1xyXG4gYm90dG9tOmluaGVyaXQ7XHJcbiB0b3A6NXB4O1xyXG4gbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gfVxyXG4gXHJcbiB9XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NTBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbi5tZCAubWFpbmZyYW1pbmdcclxue1xyXG50b3A6MTElO1xyXG4gYm90dG9tOmluaGVyaXQ7XHJcbn1cclxufSIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTk2cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmZyYW1pbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLm5ld2ZyYW1pbmcgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjJweCBhdXRvIDA7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3ZnJhbWluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jaGVja2JveC1pY29uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiBub25lO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbDE6OmJlZm9yZSB7XG4gIGNvbG9yOiAjMjIwRTBFICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI0UxRDhFQjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjZweDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3RpY2suc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDhweDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTlweDtcbn1cblxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCg1NiwgNTYsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jdXN0b20tY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmN1c3RvbS1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXI6IHNvbGlkICMyRUQzNUE7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5ld2J0bmZyYW1pbmcge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU3MjY5MTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU3MjY5MTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1NzI2OTE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU3MjY5MTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3R0b21mcmFtaW5nIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3ZnJhbWluZyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdmcmFtaW5nIC5yZWQge1xuICBjb2xvcjogI0JBMEIwQjtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm5ld2ZyYW1pbmcuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3ZnJhbWluZy5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ld2ZyYW1pbmcuaW4taXRlbVtzbG90PXN0YXJ0XSB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdjaGVja2JvdHRvbWluIHtcbiAgLS1ib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmZyYW1pbmcge1xuICAgIGJvdHRvbTogaW5oZXJpdDtcbiAgICB0b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluZnJhbWluZyB7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICAgIHRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLm1kIC5tYWluZnJhbWluZyB7XG4gICAgdG9wOiAxMSU7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/preframingtwo/preframingtwo.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/preframingtwo/preframingtwo.page.ts ***!
    \*****************************************************/

  /*! exports provided: PreframingtwoPage */

  /***/
  function srcAppPreframingtwoPreframingtwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreframingtwoPage", function () {
      return PreframingtwoPage;
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


    var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);

    var PreframingtwoPage = /*#__PURE__*/function () {
      function PreframingtwoPage(navController, sharedservice, sanitizer, router) {
        var _this = this;

        _classCallCheck(this, PreframingtwoPage);

        this.navController = navController;
        this.sharedservice = sharedservice;
        this.sanitizer = sanitizer;
        this.router = router;
        this.buttonDisabled = true;
        this.error = false;
        this.hide = false;
        this.hide_for_jordan = false;
        this.hide_for_jordan_p = false;
        var self = this; //this.isEstimate = false

        var data = new FormData();
        data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));

        if (localStorage.getItem('Country_id') == '111') {
          data.append('type', 'welcome');
          this.hide_for_jordan = true;
          this.hide = false;
        } else {
          data.append('type', 'consent');
          this.hide_for_jordan = false;
          this.hide = true;
        }

        data.append('content_for', 'mobile');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe(function (rdata) {
          console.log(rdata);
          _this.data = rdata['data'];

          _this.sharedservice.loaderDismiss();

          console.log(_this.data);
          _this.content = _this.data[0].content;
          jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-success-link1").html(_this.content);
          jquery__WEBPACK_IMPORTED_MODULE_6__(".checkerrors").hide();
          jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").attr("disabled", "disabled");
          jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").click(function (event) {
            event.preventDefault();
            self.addReport1();
            console.log('next');
          });
          jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-privacy").click(function (event) {
            event.preventDefault();
            console.log('privacy');
            self.policy();
          });
          jquery__WEBPACK_IMPORTED_MODULE_6__("#estimate").click(function (event) {
            // event.preventDefault();
            //console.log($("input[name='hidechecked]").is(':checked'))
            // var isEstimate = $(this).is(":checked");
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":checked")) {
              console.log("Checkbox is checked.");
              jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").removeAttr("disabled"); // $(".checkerrors").hide()
            } else if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":not(:checked)")) {
              console.log("Checkbox is unchecked."); //$(".checkerrors").show();

              jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").attr("disabled", "disabled");
            } // console.log(isEstimate)


            console.log('next', event);
          });
        }, function (error) {
          _this.sharedservice.loaderDismiss();
        }, function () {
          console.log('complete');

          _this.sharedservice.loaderDismiss();
        });
      }

      _createClass(PreframingtwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // ***********************************Button unable disable***********************************

      }, {
        key: "ButtonEnableDisable",
        value: function ButtonEnableDisable(e) {
          // console.log(e.detail.checked);
          if (e.detail.checked == true) {
            // console.log("in")
            this.buttonDisabled = false;
            this.error = false;
          } else {
            this.buttonDisabled = true;
            this.error = true;
          }
        }
      }, {
        key: "experiance",
        value: function experiance() {
          var _this2 = this;

          var self = this; //this.isEstimate = false

          var data = new FormData();
          data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
          data.append('country_id', localStorage.getItem('Country_id'));
          data.append('client_id', localStorage.getItem('Client_id'));
          data.append('lang_id', localStorage.getItem('Lang_id'));

          if (localStorage.getItem('Country_id') == '111') {
            data.append('type', 'experience');
            this.hide_for_jordan = false;
            this.hide_for_jordan_p = true;
            this.hide = true;
            console.log(this.hide, this.hide_for_jordan, this.hide_for_jordan_p);
          } else {
            data.append('type', 'consent');
            this.hide = true;
          }

          data.append('content_for', 'mobile');
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this2.data = rdata['data'];

            _this2.sharedservice.loaderDismiss();

            console.log(_this2.data);
            _this2.content = _this2.data[0].content;
            _this2.hide = true;
            jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-success-link1").html(_this2.content);
            jquery__WEBPACK_IMPORTED_MODULE_6__(".checkerrors").hide();
            jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").attr("disabled", "disabled");
            jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").click(function (event) {
              event.preventDefault();
              self.addReport1();
              console.log('next');
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-privacy").click(function (event) {
              event.preventDefault();
              console.log('privacy');
              self.policy();
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("#estimate").click(function (event) {
              // event.preventDefault();
              //console.log($("input[name='hidechecked]").is(':checked'))
              // var isEstimate = $(this).is(":checked");
              if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":checked")) {
                console.log("Checkbox is checked.");
                jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").removeAttr("disabled"); // $(".checkerrors").hide()
              } else if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":not(:checked)")) {
                console.log("Checkbox is unchecked."); //$(".checkerrors").show();

                jquery__WEBPACK_IMPORTED_MODULE_6__(".dynamic-click").attr("disabled", "disabled");
              } // console.log(isEstimate)


              console.log('next', event);
            });
          }, function (error) {
            _this2.sharedservice.loaderDismiss();
          }, function () {
            console.log('complete');

            _this2.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "addReport1",
        value: function addReport1() {
          this.navController.navigateForward("primaryform");
        }
      }, {
        key: "policy",
        value: function policy() {
          this.navController.navigateForward("privacypolicy");
        }
      }]);

      return PreframingtwoPage;
    }();

    PreframingtwoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PreframingtwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-preframingtwo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./preframingtwo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingtwo/preframingtwo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./preframingtwo.page.scss */
      "./src/app/preframingtwo/preframingtwo.page.scss"))["default"]]
    })], PreframingtwoPage);
    /***/
  }
}]);
//# sourceMappingURL=preframingtwo-preframingtwo-module-es5.js.map
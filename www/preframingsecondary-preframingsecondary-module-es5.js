function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preframingsecondary-preframingsecondary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingsecondary/preframingsecondary.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preframingsecondary/preframingsecondary.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreframingsecondaryPreframingsecondaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent>\n  <ion-toolbar>\n   <!-- <ion-buttons slot=\"start\" > -->\n   <!-- <ion-back-button defaultHref='/reportfiledeleven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button> -->\n   <!-- </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<h4>Thank you for submitting<br> your report!</h4>\n<div class=\"newicon\">\n <ion-fab-button >\n    <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n</div>\n<p>By sharing your experience with us, you are helping prevent 3 others from experiencing something similar.<br><br> If you have 5-7 minutes, we would like to know more about the incident to understand other factors that play a role in sexual violence. By answering a few questions, you will help us build safer cities.</p>\n  </div>\n    </ion-col>\n   </ion-row>\n     <div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\t <ion-button expand=\"full\" shape=\"round\"  class=\"newbtnyes\" >YES, I WANT TO HELP</ion-button>\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"help()\">NO, I WOULD LIKE TO EXIT</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n   </div>\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/preframingsecondary/preframingsecondary-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/preframingsecondary/preframingsecondary-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: PreframingsecondaryPageRoutingModule */

  /***/
  function srcAppPreframingsecondaryPreframingsecondaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreframingsecondaryPageRoutingModule", function () {
      return PreframingsecondaryPageRoutingModule;
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


    var _preframingsecondary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preframingsecondary.page */
    "./src/app/preframingsecondary/preframingsecondary.page.ts");

    var routes = [{
      path: '',
      component: _preframingsecondary_page__WEBPACK_IMPORTED_MODULE_3__["PreframingsecondaryPage"]
    }];

    var PreframingsecondaryPageRoutingModule = /*#__PURE__*/_createClass(function PreframingsecondaryPageRoutingModule() {
      _classCallCheck(this, PreframingsecondaryPageRoutingModule);
    });

    PreframingsecondaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreframingsecondaryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/preframingsecondary/preframingsecondary.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/preframingsecondary/preframingsecondary.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PreframingsecondaryPageModule */

  /***/
  function srcAppPreframingsecondaryPreframingsecondaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreframingsecondaryPageModule", function () {
      return PreframingsecondaryPageModule;
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


    var _preframingsecondary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./preframingsecondary-routing.module */
    "./src/app/preframingsecondary/preframingsecondary-routing.module.ts");
    /* harmony import */


    var _preframingsecondary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./preframingsecondary.page */
    "./src/app/preframingsecondary/preframingsecondary.page.ts");

    var PreframingsecondaryPageModule = /*#__PURE__*/_createClass(function PreframingsecondaryPageModule() {
      _classCallCheck(this, PreframingsecondaryPageModule);
    });

    PreframingsecondaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _preframingsecondary_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreframingsecondaryPageRoutingModule"]],
      declarations: [_preframingsecondary_page__WEBPACK_IMPORTED_MODULE_6__["PreframingsecondaryPage"]]
    })], PreframingsecondaryPageModule);
    /***/
  },

  /***/
  "./src/app/preframingsecondary/preframingsecondary.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/preframingsecondary/preframingsecondary.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreframingsecondaryPreframingsecondaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.newtext ion-label {\n  white-space: inherit;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 20px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 20px;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 27px;\n  font-size: 18px;\n  color: #220E0E;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  color: #292020;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.newicon {\n  width: 100%;\n  height: auto;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n\n.newicon ion-fab-button {\n  margin: 0 auto;\n  text-align: center;\n  --background: #fff;\n  --color: #2ED35A;\n  --color-activated: #2ED35A;\n  --color-focused: #2ED35A;\n  --color-hover: #2ED35A;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  --box-shadow:none;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 55px;\n  text-align: center;\n}\n\n.newbtnyes {\n  color: #592D8D !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  --box-shadow:none;\n  font-weight: 500;\n  border: 1px solid #592D8D;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 20px;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9wcmVmcmFtaW5nc2Vjb25kYXJ5L3ByZWZyYW1pbmdzZWNvbmRhcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wcmVmcmFtaW5nc2Vjb25kYXJ5L3ByZWZyYW1pbmdzZWNvbmRhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBSUEsOENBQUE7QUNEQTs7QURLQTtFQUVBLG9CQUFBO0FDSEE7O0FETUE7RUFFQSx3QkFBQTtBQ0pBOztBRE9BO0VBRUUsb0NBQUE7QUNMRjs7QURRQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFNFO0VBR0Usd0JBQUE7QUNSSjs7QURVQTtFQUNJLHdCQUFBO0VBQ0gsVUFBQTtFQUNHLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEU0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFVBO0VBRUEsZ0JBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVEE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ1hBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2JBOztBRGdCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZEE7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQyxtQkFBQTtFQUNELGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNmQTs7QURrQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNoQkE7O0FEbUJBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtBQ2pCSjs7QURvQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0MsbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2xCQTs7QURxQkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRSxtQkFBQTtFQUNDLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNsQko7O0FEb0JBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbkJBOztBRHNCQTtFQUdBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNBLGlCQUFBO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUVELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDdEJBOztBRHlCQTtFQUVBLHVCQUFBO0FDdkJBOztBRDBCQTtFQUVBLGlFQUFBO1VBQUEsZ0VBQUE7QUN4QkE7O0FEMkJBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Msc0JBQUE7RUFDRCx3QkFBQTtFQUNBLHFDQUFBO0FDekJBOztBRDRCQTtFQUNDLHNCQUFBO0FDekJEOztBRDRCQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUMxQkE7O0FENkJBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzNCQTs7QUQ4QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzVCQSIsImZpbGUiOiJzcmMvYXBwL3ByZWZyYW1pbmdzZWNvbmRhcnkvcHJlZnJhbWluZ3NlY29uZGFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLm5ld3RleHQgaW9uLWxhYmVsXHJcbntcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyXHJcbntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbiAgaW9uLXJhZGlvXHJcbiAge1xyXG4gXHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XHJcbiAgfVxyXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6aW5oZXJpdDtcclxufVxyXG5cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcblxyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjdweDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzI5MjAyMDtcclxubGluZS1oZWlnaHQ6MjhweDtcclxuIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ubmV3aWNvblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvIDMwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubmV3aWNvbiBpb24tZmFiLWJ1dHRvblxyXG57XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG4tLWJhY2tncm91bmQ6ICNmZmY7XHJcbi0tY29sb3I6ICMyRUQzNUE7XHJcbi0tY29sb3ItYWN0aXZhdGVkOiAjMkVEMzVBO1xyXG4gICAgLS1jb2xvci1mb2N1c2VkOiAjMkVEMzVBO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogIzJFRDM1QTtcclxufVxyXG5cclxuLm5ld3RleHQgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjJweDtcclxuIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0ICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuLS1ib3gtc2hhZG93Om5vbmU7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvIDU1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubmV3YnRueWVzXHJcbntcclxuXHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuLS1ib3gtc2hhZG93Om5vbmU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBib3JkZXI6MXB4IHNvbGlkICM1OTJEOEQ7XHJcblxyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0byAyMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3Rcclxue1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OjA7XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlcjpub25lO1xyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSAuaXRlbS1pbm5lcntcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmhlaWdodDo0MHB4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtc3RhY2tlZFxyXG57XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxufVxyXG5cclxuIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuIFxyXG59XHJcbiIsImlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcbn1cblxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyIHtcbiAgY29udGVudDogaW5oZXJpdDtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ubmV3aWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2ljb24gaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMyRUQzNUE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjMkVEMzVBO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICMyRUQzNUE7XG4gIC0tY29sb3ItaG92ZXI6ICMyRUQzNUE7XG59XG5cbi5uZXd0ZXh0IGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gNTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3YnRueWVzIHtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTkyRDhEO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuaW9uLWl0ZW0gLml0ZW0taW5uZXIge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtc3RhY2tlZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/preframingsecondary/preframingsecondary.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/preframingsecondary/preframingsecondary.page.ts ***!
    \*****************************************************************/

  /*! exports provided: PreframingsecondaryPage */

  /***/
  function srcAppPreframingsecondaryPreframingsecondaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreframingsecondaryPage", function () {
      return PreframingsecondaryPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PreframingsecondaryPage = /*#__PURE__*/function () {
      function PreframingsecondaryPage(httpClient, route, navController) {
        var _this = this;

        _classCallCheck(this, PreframingsecondaryPage);

        this.httpClient = httpClient;
        this.route = route;
        this.navController = navController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.user_id = localStorage.getItem('userId');
        this.route.queryParams.subscribe(function (params) {
          _this.forWho = params["forWho"];
          _this.age = params["age"];
          _this.pronoun = params["pronoun"];
          _this.experience = params["experience"];
          _this.date1 = params["date1"];
          _this.dateEstimate = params["dateEstimate"];
          _this.time = params["time"];
          _this.timeEstimate = params["timeEstimate"];
          _this.timeRange = params["timeRange"];
          _this.violenceType = params["violenceType"];
          _this.policeRepo = params["policeRepo"];
          _this.anythingElse = params["anythingElse"];
          _this.led = params["led"];
          _this.locality = params["locality"];
          _this.landmark = params["landmark"];
          _this.city = params["city"];
          _this.state = params["state"];
          _this.country = params["country"];
          console.log("for Who", _this.forWho);
          console.log("Age", _this.age);
          console.log("pronoun", _this.pronoun);
          console.log("experience", _this.experience);
          console.log("date1", _this.date1);
          console.log("time", _this.time);
          console.log("dateEstimate", _this.dateEstimate);
          console.log("timeEstimate", _this.timeEstimate);
          console.log("timeRange", _this.timeRange);
          console.log("policeRepo", _this.policeRepo);
          console.log("violenceType", _this.violenceType);
          console.log("led", _this.led);
          console.log("locality", _this.locality);
          console.log("landmark", _this.landmark);
          console.log("city", _this.city);
          console.log("state", _this.state);
          console.log("country", _this.country);
        });
      }

      _createClass(PreframingsecondaryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "PostInctdentReport",
        value: function PostInctdentReport() {
          var data = new FormData();
          data.append('security_key', 'd152ed16bedaf0e594319efad64e39ff0b14c2ff');
          data.append('user_id', this.user_id);
          data.append('reporting_for', this.forWho);
          data.append('age', this.age);
          data.append('preferred_pronoun', this.pronoun);
          data.append('what_happened_desc', this.experience);
          data.append('start_date', this.date1);
          data.append('date_estimate', this.dateEstimate);
          data.append('time', this.time);
          data.append('time_estimate', this.timeEstimate);
          data.append('C', this.timeRange);
          data.append('violence_type', this.violenceType);
          data.append('reported_police', this.policeRepo);
          data.append('experience', this.led);
          data.append('feel_attacked', this.anythingElse);
          data.append('location', this.locality);
          data.append('landmark', this.landmark);
          data.append('city', this.city);
          data.append('state', this.state);
          data.append('country', this.country);
          data.append('exact_location', 'Karanjade Old Panvel Navi Mumbai');
          data.append('report_type', '1');
          data.append('is_consent', '1'); //   security_key:d152ed16bedaf0e594319efad64e39ff0b14c2ff
          //   user_id:1
          //   is_consent:1
          //   reporting_for:Myselft
          //   age:35
          //   preferred_pronoun:He/Him
          //   what_happened_desc:Testsss
          //   start_date:2020-01-29
          //   time:23:30
          //   C:23:30-24:00
          //   violence_type:I Don't Know
          //   reported_police:Yes I Have / I Intend To
          //   feel_attacked:Other Please specify
          //   experience:Test Experince
          //   location:Navi Mumbai
          //   landmark:Karanjade
          //   city:Panvel
          //   state:Maharashtra
          //   country:India
          //   exact_location:Karanjade Old Panvel Navi Mumbai
          //   report_type:1
          //   date_estimate:Yes
          //   time_estimate:No

          this.httpClient.post(this.apiUrl + 'addIncidentReport', data).subscribe(function (rdata) {
            console.log(rdata); // this.countryList = rdata.data;
          }, function (error) {});
        }
      }, {
        key: "help",
        value: function help() {
          this.navController.navigateRoot("/helplines");
        }
      }]);

      return PreframingsecondaryPage;
    }();

    PreframingsecondaryPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    PreframingsecondaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-preframingsecondary',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./preframingsecondary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/preframingsecondary/preframingsecondary.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./preframingsecondary.page.scss */
      "./src/app/preframingsecondary/preframingsecondary.page.scss"))["default"]]
    })], PreframingsecondaryPage);
    /***/
  }
}]);
//# sourceMappingURL=preframingsecondary-preframingsecondary-module-es5.js.map
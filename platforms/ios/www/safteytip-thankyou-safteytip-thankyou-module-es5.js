function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safteytip-thankyou-safteytip-thankyou-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytip-thankyou/safteytip-thankyou.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/safteytip-thankyou/safteytip-thankyou.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSafteytipThankyouSafteytipThankyouPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header> -->\n  <!-- <ion-toolbar> -->\n    <!-- <ion-title>safteytip_thankyou</ion-title> -->\n  <!-- </ion-toolbar> -->\n<!-- </ion-header> -->\n\n<ion-content>\n  <div class=\"mainthankin\">\n  <ion-row >\n        <ion-col size=\"12\">\n  <div class=\"thankintextin\">\n  \n  <div class=\"newiconsafe\">\n   <ion-fab-button >\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n      </ion-fab-button>\n  </div>\n  <p>{{'safety_thank_you_desc' | translate }}</p>\n    </div>\n      </ion-col>\n     </ion-row>\n    \n     </div>\n  </ion-content>\n     <div class=\"sideline\">\n  <ion-row>\n       <ion-col col-12>\n     <!-- <ion-button expand=\"full\" shape=\"round\" class=\"newbtnyes\" (click)=\"view()\">VIEW SAFETY TIPS</ion-button> -->\n  <ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"home()\">{{'button_go_home' | translate }}</ion-button>\n    </ion-col>\n     </ion-row>\n  </div>";
    /***/
  },

  /***/
  "./src/app/safteytip-thankyou/safteytip-thankyou-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/safteytip-thankyou/safteytip-thankyou-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SafteytipThankyouPageRoutingModule */

  /***/
  function srcAppSafteytipThankyouSafteytipThankyouRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytipThankyouPageRoutingModule", function () {
      return SafteytipThankyouPageRoutingModule;
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


    var _safteytip_thankyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./safteytip-thankyou.page */
    "./src/app/safteytip-thankyou/safteytip-thankyou.page.ts");

    var routes = [{
      path: '',
      component: _safteytip_thankyou_page__WEBPACK_IMPORTED_MODULE_3__["SafteytipThankyouPage"]
    }];

    var SafteytipThankyouPageRoutingModule = /*#__PURE__*/_createClass(function SafteytipThankyouPageRoutingModule() {
      _classCallCheck(this, SafteytipThankyouPageRoutingModule);
    });

    SafteytipThankyouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SafteytipThankyouPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/safteytip-thankyou/safteytip-thankyou.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/safteytip-thankyou/safteytip-thankyou.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SafteytipThankyouPageModule */

  /***/
  function srcAppSafteytipThankyouSafteytipThankyouModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytipThankyouPageModule", function () {
      return SafteytipThankyouPageModule;
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


    var _safteytip_thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./safteytip-thankyou-routing.module */
    "./src/app/safteytip-thankyou/safteytip-thankyou-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _safteytip_thankyou_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./safteytip-thankyou.page */
    "./src/app/safteytip-thankyou/safteytip-thankyou.page.ts");

    var SafteytipThankyouPageModule = /*#__PURE__*/_createClass(function SafteytipThankyouPageModule() {
      _classCallCheck(this, SafteytipThankyouPageModule);
    });

    SafteytipThankyouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _safteytip_thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__["SafteytipThankyouPageRoutingModule"]],
      declarations: [_safteytip_thankyou_page__WEBPACK_IMPORTED_MODULE_7__["SafteytipThankyouPage"]]
    })], SafteytipThankyouPageModule);
    /***/
  },

  /***/
  "./src/app/safteytip-thankyou/safteytip-thankyou.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/safteytip-thankyou/safteytip-thankyou.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSafteytipThankyouSafteytipThankyouPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainthankin {\n  width: 100%;\n  height: auto;\n  margin-top: 50%;\n}\n\nion-icon {\n  font-size: 39px;\n}\n\n.thankintextin {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 20px;\n  text-align: center;\n  color: #220E0E;\n  margin-top: 20px;\n}\n\n.thankintextin p {\n  width: 100%;\n  height: auto;\n  line-height: 27px;\n  font-size: 22px;\n  color: #220E0E;\n  padding: 0 25px;\n  margin-top: 10px;\n}\n\n.thankintextin h4 {\n  width: 100%;\n  height: auto;\n  color: #292020;\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.newiconsafe {\n  width: 100%;\n  height: auto;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n\n.newiconsafe ion-fab-button {\n  margin: 0 auto;\n  text-align: center;\n  --background: #fff;\n  --color: #2ED35A;\n  --color-activated: #2ED35A;\n  --color-focused: #2ED35A;\n  --color-hover: #2ED35A;\n}\n\n.thankintextin h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  --box-shadow:0;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newbtnyes {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #EBE2F5;\n  --background-activated:#EBE2F5;\n  --background-focused:#EBE2F5;\n  --background-hover: #EBE2F5;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  --box-shadow:0;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 20px;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.sideline {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zYWZ0ZXl0aXAtdGhhbmt5b3Uvc2FmdGV5dGlwLXRoYW5reW91LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2FmdGV5dGlwLXRoYW5reW91L3NhZnRleXRpcC10aGFua3lvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBQTs7QURHQTtFQUVBLGVBQUE7QUNEQTs7QURJQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNGQTs7QURLQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hBOztBRE1BO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTEE7O0FEUUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNOQTs7QURTQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7QUNQSjs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUkE7O0FEV0E7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRCxtQkFBQTtFQUNJLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNSSjs7QURVQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0QsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNUQTs7QURZQTtFQUdBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBRUQsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDWkE7O0FEZUE7RUFFQSx1QkFBQTtBQ2JBOztBRGdCQTtFQUVBLGlFQUFBO1VBQUEsZ0VBQUE7QUNkQTs7QURpQkE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQyxzQkFBQTtFQUNELHdCQUFBO0VBQ0EscUNBQUE7QUNmQTs7QURrQkE7RUFDQyxzQkFBQTtBQ2ZEOztBRGtCQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNoQkE7O0FEbUJBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2pCQTs7QURvQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQ25CQTs7QURzQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ3JCQSIsImZpbGUiOiJzcmMvYXBwL3NhZnRleXRpcC10aGFua3lvdS9zYWZ0ZXl0aXAtdGhhbmt5b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW50aGFua2luXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6NTAlO1xyXG59XHJcblxyXG5pb24taWNvblxyXG57XHJcbmZvbnQtc2l6ZTozOXB4O1xyXG59XHJcblxyXG4udGhhbmtpbnRleHRpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MjBweDtcclxufVxyXG5cclxuLnRoYW5raW50ZXh0aW4gcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyN3B4O1xyXG5mb250LXNpemU6MjJweDtcclxuY29sb3I6IzIyMEUwRTtcclxucGFkZGluZzowIDI1cHg7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLnRoYW5raW50ZXh0aW4gaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzI5MjAyMDtcclxubGluZS1oZWlnaHQ6MjhweDtcclxuXHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ubmV3aWNvbnNhZmVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0byAzMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2ljb25zYWZlIGlvbi1mYWItYnV0dG9uXHJcbntcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbi0tYmFja2dyb3VuZDogI2ZmZjtcclxuLS1jb2xvcjogIzJFRDM1QTtcclxuLS1jb2xvci1hY3RpdmF0ZWQ6ICMyRUQzNUE7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICMyRUQzNUE7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiAjMkVEMzVBO1xyXG59XHJcblxyXG4udGhhbmtpbnRleHRpbiBoNVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2J0bnllc1xyXG57XHJcblxyXG5jb2xvcjojMkYxMTUzICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogI0VCRTJGNTtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojRUJFMkY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvIDIwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24tbGlzdFxyXG57XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgXHJcbntcclxucGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcclxufVxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6MDtcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyOm5vbmU7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIC5pdGVtLWlubmVye1xyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxufVxyXG5cclxuaW9uLWlucHV0XHJcbntcclxuLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuaGVpZ2h0OjQwcHg7XHJcbi0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1zdGFja2VkXHJcbntcclxubWFyZ2luLWJvdHRvbToxMHB4O1xyXG5jb2xvcjojMjkyMDIwO1xyXG5mb250LXNpemU6MTRweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIC5uZXdsYWJlbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5cclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxufVxyXG5cclxuLnNpZGVsaW5lXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbiIsIi5tYWludGhhbmtpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDM5cHg7XG59XG5cbi50aGFua2ludGV4dGluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGhhbmtpbnRleHRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRoYW5raW50ZXh0aW4gaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ubmV3aWNvbnNhZmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdpY29uc2FmZSBpb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jb2xvcjogIzJFRDM1QTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyRUQzNUE7XG4gIC0tY29sb3ItZm9jdXNlZDogIzJFRDM1QTtcbiAgLS1jb2xvci1ob3ZlcjogIzJFRDM1QTtcbn1cblxuLnRoYW5raW50ZXh0aW4gaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3YnRueWVzIHtcbiAgY29sb3I6ICMyRjExNTMgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRUJFMkY1O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbmlvbi1pdGVtIC5pdGVtLWlubmVyIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGhlaWdodDogNDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uc2lkZWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/safteytip-thankyou/safteytip-thankyou.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/safteytip-thankyou/safteytip-thankyou.page.ts ***!
    \***************************************************************/

  /*! exports provided: SafteytipThankyouPage */

  /***/
  function srcAppSafteytipThankyouSafteytipThankyouPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytipThankyouPage", function () {
      return SafteytipThankyouPage;
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

    var SafteytipThankyouPage = /*#__PURE__*/function () {
      function SafteytipThankyouPage(navController, router) {
        _classCallCheck(this, SafteytipThankyouPage);

        this.navController = navController;
        this.router = router;
      }

      _createClass(SafteytipThankyouPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "home",
        value: function home() {
          this.navController.navigateRoot("/home");
        }
      }, {
        key: "view",
        value: function view() {
          this.navController.navigateForward("/modelreport");
        }
      }]);

      return SafteytipThankyouPage;
    }();

    SafteytipThankyouPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SafteytipThankyouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-safteytip-thankyou',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./safteytip-thankyou.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytip-thankyou/safteytip-thankyou.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./safteytip-thankyou.page.scss */
      "./src/app/safteytip-thankyou/safteytip-thankyou.page.scss"))["default"]]
    })], SafteytipThankyouPage);
    /***/
  }
}]);
//# sourceMappingURL=safteytip-thankyou-safteytip-thankyou-module-es5.js.map
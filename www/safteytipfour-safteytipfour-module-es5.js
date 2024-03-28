function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safteytipfour-safteytipfour-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytipfour/safteytipfour.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/safteytipfour/safteytipfour.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSafteytipfourSafteytipfourPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/safteytipthree' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <ion-title><div class=\"ion-text-wrap\">{{'submit_a_safety_tip' | translate}}</div></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"safteytipone\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newsafteytipone\">\n<h4>{{'safety_tips_title' | translate}}</h4>\n <ion-list>\n    <ion-item>\n     <ion-input placeholder=\"{{'safety_tips_desc_placeholder' | translate }}\" (ionChange)=\"getdata($event)\" type=\"text\" [(ngModel)] = \"safety_tip_title\"></ion-input>\n    </ion-item>\n</ion-list>\n\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n   <div class=\"bottomsafein\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\" [disabled]=\"buttondisable\"  class=\"safebtnin\" (click)=\"thank()\">{{'button_submit' | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/safteytipfour/safteytipfour-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/safteytipfour/safteytipfour-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SafteytipfourPageRoutingModule */

  /***/
  function srcAppSafteytipfourSafteytipfourRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytipfourPageRoutingModule", function () {
      return SafteytipfourPageRoutingModule;
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


    var _safteytipfour_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./safteytipfour.page */
    "./src/app/safteytipfour/safteytipfour.page.ts");

    var routes = [{
      path: '',
      component: _safteytipfour_page__WEBPACK_IMPORTED_MODULE_3__["SafteytipfourPage"]
    }];

    var SafteytipfourPageRoutingModule = /*#__PURE__*/_createClass(function SafteytipfourPageRoutingModule() {
      _classCallCheck(this, SafteytipfourPageRoutingModule);
    });

    SafteytipfourPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SafteytipfourPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/safteytipfour/safteytipfour.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/safteytipfour/safteytipfour.module.ts ***!
    \*******************************************************/

  /*! exports provided: SafteytipfourPageModule */

  /***/
  function srcAppSafteytipfourSafteytipfourModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytipfourPageModule", function () {
      return SafteytipfourPageModule;
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


    var _safteytipfour_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./safteytipfour-routing.module */
    "./src/app/safteytipfour/safteytipfour-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _safteytipfour_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./safteytipfour.page */
    "./src/app/safteytipfour/safteytipfour.page.ts");

    var SafteytipfourPageModule = /*#__PURE__*/_createClass(function SafteytipfourPageModule() {
      _classCallCheck(this, SafteytipfourPageModule);
    });

    SafteytipfourPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _safteytipfour_routing_module__WEBPACK_IMPORTED_MODULE_5__["SafteytipfourPageRoutingModule"]],
      declarations: [_safteytipfour_page__WEBPACK_IMPORTED_MODULE_7__["SafteytipfourPage"]]
    })], SafteytipfourPageModule);
    /***/
  },

  /***/
  "./src/app/safteytipfour/safteytipfour.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/safteytipfour/safteytipfour.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSafteytipfourSafteytipfourPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.bottomsafein {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.safteytipone {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n}\n\n.newsafteytipone {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newsafteytipone p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.newsafteytipone h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.sc-ion-input-ios-h {\n  --placeholder-opacity: 1;\n  --padding-top: 11px;\n  --placeholder-color: #cccccc;\n  --padding-bottom: 11px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-opacity: 1;\n  --padding-top: 11px;\n  --placeholder-color: #cccccc;\n  --padding-bottom: 11px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.safebtnin {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\n.red {\n  color: #F71313;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #B4A0CB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0 0;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: #592D8D;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zYWZ0ZXl0aXBmb3VyL3NhZnRleXRpcGZvdXIucGFnZS5zY3NzIiwic3JjL2FwcC9zYWZ0ZXl0aXBmb3VyL3NhZnRleXRpcGZvdXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDVEE7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBQ2JBOztBRGdCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNkQTs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDZkE7O0FEa0JBO0VBRUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0ksc0JBQUE7QUNoQko7O0FEa0JBO0VBRUEsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0ksc0JBQUE7QUNoQko7O0FEb0JBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQ2pCSjs7QURtQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJBOztBRHFCQTtFQUVBLHVCQUFBO0FDbkJBOztBRHNCQTtFQUVBLGlFQUFBO1VBQUEsZ0VBQUE7QUNwQkE7O0FEdUJBO0VBRUEsY0FBQTtBQ3JCQTs7QUR3QkE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0FDdEJBOztBRHlCQTtFQUVBLCtCQUFBO0FDdkJBOztBRDBCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FDekJBIiwiZmlsZSI6InNyYy9hcHAvc2FmdGV5dGlwZm91ci9zYWZ0ZXl0aXBmb3VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblxyXG4uYm90dG9tc2FmZWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4uc2FmdGV5dGlwb25lXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjglO1xyXG59XHJcblxyXG4ubmV3c2FmdGV5dGlwb25lXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5cclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5cclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3c2FmdGV5dGlwb25lIHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiM1RDU2NTY7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4ubmV3c2FmdGV5dGlwb25lIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaFxyXG57XHJcbi0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuLS1wYWRkaW5nLXRvcDogMTFweDtcclxuLS1wbGFjZWhvbGRlci1jb2xvcjogI2NjY2NjYztcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDExcHg7XHJcbn1cclxuLnNjLWlvbi1pbnB1dC1tZC1oXHJcbntcclxuLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4tLXBhZGRpbmctdG9wOiAxMXB4O1xyXG4tLXBsYWNlaG9sZGVyLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTFweDtcclxufVxyXG5cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4uc2FmZWJ0bmluXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3Rcclxue1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbi5yZWRcclxue1xyXG5jb2xvcjojRjcxMzEzO1xyXG59XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDogMDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG5mb250LXNpemU6MTZweDtcclxuYm9yZGVyLXRvcDpub25lO1xyXG5ib3JkZXItbGVmdDpub25lO1xyXG5ib3JkZXItcmlnaHQ6bm9uZTtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0I0QTBDQjtcclxuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbn1cclxuXHJcbi5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZFxyXG57XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWxcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuXHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuXHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5ib3R0b21zYWZlaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNhZnRleXRpcG9uZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG59XG5cbi5uZXdzYWZ0ZXl0aXBvbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3c2FmdGV5dGlwb25lIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubmV3c2FmdGV5dGlwb25lIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctdG9wOiAxMXB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjY2NjY2NjO1xuICAtLXBhZGRpbmctYm90dG9tOiAxMXB4O1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy10b3A6IDExcHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNjY2NjY2M7XG4gIC0tcGFkZGluZy1ib3R0b206IDExcHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5zYWZlYnRuaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRjcxMzEzO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0I0QTBDQjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICM1OTJEOEQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/safteytipfour/safteytipfour.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/safteytipfour/safteytipfour.page.ts ***!
    \*****************************************************/

  /*! exports provided: SafteytipfourPage */

  /***/
  function srcAppSafteytipfourSafteytipfourPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafteytipfourPage", function () {
      return SafteytipfourPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var SafteytipfourPage = /*#__PURE__*/function () {
      function SafteytipfourPage(navController, sharedservice, router, route, httpClient) {
        var _this = this;

        _classCallCheck(this, SafteytipfourPage);

        this.navController = navController;
        this.sharedservice = sharedservice;
        this.router = router;
        this.route = route;
        this.httpClient = httpClient;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/safecity_report/';
        this.buttondisable = true;
        this.user_id = localStorage.getItem('userId');
        this.route.queryParams.subscribe(function (params) {
          _this.locality = params["locality"];
          _this.landmark = params["landmark"];
          _this.city = params["city"];
          _this.state = params["state"];
          _this.country = params["country"];
          _this.sefety_tip = params["sefety_tip"];
          console.log("locality", _this.locality);
          console.log("landmark", _this.landmark);
          console.log("city", _this.city);
          console.log("state", _this.state);
          console.log("country", _this.country);
        });
      }

      _createClass(SafteytipfourPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "thank",
        value: function thank() {
          var _this2 = this;

          if (this.safety_tip_title) {
            var client_id = localStorage.getItem('Client_id');
            var country_id = localStorage.getItem('Country_id');
            var lang_id = localStorage.getItem('Lang_id');
            var lat = localStorage.getItem('lat_safety');

            var _long = localStorage.getItem('longi_safety');

            var extlcn = localStorage.getItem('address_safety');
            console.log("safetyTiptitle", this.safety_tip_title);
            console.log("safetydiscription", this.sefety_tip);
            var data = new FormData();
            data.append('security_key', 'd659f8e1043f236a54e442f6b17661e95c2eecb4');
            data.append('user_id', this.user_id);
            data.append('country_id', country_id);
            data.append('language_id', lang_id);
            data.append('client_id', client_id);
            data.append('identification', 'Mobile');
            data.append('is_mobile_visibile', '1');
            data.append('location', this.locality);
            data.append('landmark', this.landmark);
            data.append('city', this.city);
            data.append('state', this.state);
            data.append('country', this.country);
            data.append('map_lat', lat);
            data.append('map_lon', _long);
            data.append('exact_location', extlcn);
            data.append('safety_tip_desc', this.sefety_tip);
            data.append('safety_tip_title', this.safety_tip_title);
            this.sharedservice.presentLoadingDefault();
            this.sharedservice.sharedPostRequest('safecity_report/writeSafetyTips', data).subscribe(function (rdata) {
              console.log(rdata);

              _this2.navController.navigateForward("safteytip-thankyou"); //   this.list = rdata.data;
              //  this.content = this.sanitizer.bypassSecurityTrustHtml(rdata.data[0].content);
              //   this.title =  rdata.title
              //   console.log("list ",this.list)

            }, function (error) {
              _this2.sharedservice.loaderDismiss();
            }, function () {
              _this2.sharedservice.loaderDismiss();
            });
          } // this.httpClient.post(this.apiUrl+'writeSafetyTips',data)
          // .subscribe((rdata: any) => {
          //   console.log(rdata);
          //   // this.countryList = rdata.data;
          // },error => {
          // });

        }
      }, {
        key: "getdata",
        value: function getdata(e) {
          console.log('e', e);

          if (e.detail.value) {
            this.buttondisable = false;
          } else {
            this.buttondisable = true;
          }
        }
      }]);

      return SafteytipfourPage;
    }();

    SafteytipfourPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SafteytipfourPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-safteytipfour',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./safteytipfour.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytipfour/safteytipfour.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./safteytipfour.page.scss */
      "./src/app/safteytipfour/safteytipfour.page.scss"))["default"]]
    })], SafteytipfourPage);
    /***/
  }
}]);
//# sourceMappingURL=safteytipfour-safteytipfour-module-es5.js.map
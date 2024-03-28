function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["languagemenu-languagemenu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/languagemenu/languagemenu.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/languagemenu/languagemenu.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLanguagemenuLanguagemenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n   <ion-back-button  icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <ion-title>{{'language' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"mainarea\">\n\n<ion-row>\n     <ion-col col-12>\n      <!-- <form [formGroup]=\"form\"> -->\n\t <div class=\"newselect\">\n  \n <ion-item>\n  <ion-label class=\"newlabel\" position=\"stacked\">{{'select_lang' | translate}}</ion-label>\n          <ion-select placeholder=\"{{'select_one' | translate}}\" mode=\"ios\" [(ngModel)]=\"val\" (ionChange)=\"changeLanguage($event)\">\n            <ion-select-option   *ngFor=\"let item of language_list\" value = \"{{item.id}}\">{{item.name}}</ion-select-option>\n            \n            \n            <!-- <ion-select-option [(ngModel)]=\"val\" value='en'>{{'select_eng' | translate}}</ion-select-option>\n            <ion-select-option [(ngModel)]=\"val\" value='hi'>{{'select_hin' | translate}}</ion-select-option> -->\n          </ion-select>\n        </ion-item>\n  \n   </div>\n   <!-- </form> -->\n   </ion-col>\n   </ion-row>\n  \n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/languagemenu/languagemenu-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/languagemenu/languagemenu-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LanguagemenuPageRoutingModule */

  /***/
  function srcAppLanguagemenuLanguagemenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagemenuPageRoutingModule", function () {
      return LanguagemenuPageRoutingModule;
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


    var _languagemenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./languagemenu.page */
    "./src/app/languagemenu/languagemenu.page.ts");

    var routes = [{
      path: '',
      component: _languagemenu_page__WEBPACK_IMPORTED_MODULE_3__["LanguagemenuPage"]
    }];

    var LanguagemenuPageRoutingModule = /*#__PURE__*/_createClass(function LanguagemenuPageRoutingModule() {
      _classCallCheck(this, LanguagemenuPageRoutingModule);
    });

    LanguagemenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LanguagemenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/languagemenu/languagemenu.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/languagemenu/languagemenu.module.ts ***!
    \*****************************************************/

  /*! exports provided: LanguagemenuPageModule */

  /***/
  function srcAppLanguagemenuLanguagemenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagemenuPageModule", function () {
      return LanguagemenuPageModule;
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


    var _languagemenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./languagemenu-routing.module */
    "./src/app/languagemenu/languagemenu-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _languagemenu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./languagemenu.page */
    "./src/app/languagemenu/languagemenu.page.ts");

    var LanguagemenuPageModule = /*#__PURE__*/_createClass(function LanguagemenuPageModule() {
      _classCallCheck(this, LanguagemenuPageModule);
    });

    LanguagemenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _languagemenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagemenuPageRoutingModule"]],
      declarations: [_languagemenu_page__WEBPACK_IMPORTED_MODULE_7__["LanguagemenuPage"]]
    })], LanguagemenuPageModule);
    /***/
  },

  /***/
  "./src/app/languagemenu/languagemenu.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/languagemenu/languagemenu.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLanguagemenuLanguagemenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n  top: 33%;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  border: 0;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 0;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 400;\n  margin-bottom: 20px;\n  transform: inherit;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-family: \"Lato\";\n  font-weight: 600;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow:0;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0 !important;\n  }\n\n  .newselect {\n    margin-top: 70px !important;\n  }\n\n  .newselect p {\n    margin-top: 10px !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 40% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 50% auto 0 !important;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n    margin: 20% auto 0 !important;\n  }\n\n  .newselect p {\n    margin-top: 66px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9sYW5ndWFnZW1lbnUvbGFuZ3VhZ2VtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGFuZ3VhZ2VtZW51L2xhbmd1YWdlbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBSUEsOENBQUE7QUNIQTs7QURPQTtFQUVBLHVCQUFBO0FDTEE7O0FEUUE7RUFFQSxxQkFBQTtBQ05BOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFVBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNSQTs7QURjQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ1pBOztBRGVFO0VBRUYsbUNBQUE7RUFDSSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0osMkJBQUE7QUNiQTs7QURnQkE7RUFDQyx5QkFBQTtBQ2JEOztBRGdCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNiRDs7QURnQkM7RUFFQSxxQ0FBQTtFQUNJLHlCQUFBO0VBQ0gsU0FBQTtBQ2RGOztBRGtCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNoQkE7O0FEcUJBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNILGtCQUFBO0FDbEJEOztBRHVCQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDckJBOztBRHVCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDdEJBOztBRHlCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNBLG1CQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDeEJBOztBRDBCQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ3hCQTs7QUQyQkE7RUFDQSxXQUFBO0FDeEJBOztBRDZCQTtFQUVDO0lBRUksNkJBQUE7RUM1Qkg7O0VEK0JEO0lBQ0EsMkJBQUE7RUM1QkM7O0VEK0JEO0lBQ0EsMkJBQUE7RUM1QkM7QUFDRjs7QUQrQkM7RUFJQTtJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUNqQ0M7QUFDRjs7QUR1Q0M7RUFJQztJQUdELDZCQUFBO0VDMUNDO0FBQ0Y7O0FEOENBO0VBSUM7SUFFQSx1QkFBQTtJQUNBLDZCQUFBO0VDaERDOztFRG9ERDtJQUNJLDJCQUFBO0VDakRIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5ndWFnZW1lbnUvbGFuZ3VhZ2VtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcbi5tYWluYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDozMyU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuICBpb24taXRlbVxyXG57XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdCAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG5cdFx0Ym9yZGVyOjA7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbi5uZXdzZWxlY3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0dHJhbnNmb3JtOmluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiBmb250LXdlaWdodDo2MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuLS1ib3gtc2hhZG93OjA7XHJcbn1cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KSBhbmQoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKVxyXG5cdHtcclxuXHQubWFpbmFyZWEgaW1nXHJcblx0e1xyXG5cdCAgICBtYXJnaW46IDI5JSBhdXRvIDAgIWltcG9ydGFudDs7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3R7XHJcblx0bWFyZ2luLXRvcDo3MHB4ICFpbXBvcnRhbnQ7O1xyXG5cdH1cclxuXHRcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0bWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7O1xyXG5cdH1cclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGggOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQgOiA3MzZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMykgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcclxuIG1hcmdpbjogNDAlIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBcclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuXHRcdC5tYWluYXJlYSBpbWdcclxuIHtcclxuXHJcbiBtYXJnaW46IDUwJSBhdXRvIDAgIWltcG9ydGFudDs7XHJcbiB9XHJcblx0XHJcblx0fVxyXG5cdFxyXG5AbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50OztcclxuIG1hcmdpbjogMjAlIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcblxyXG4gLm5ld3NlbGVjdCBwe1xyXG4gICAgIG1hcmdpbi10b3A6IDY2cHggIWltcG9ydGFudDs7XHJcbiB9XHJcbiB9XHJcbiAgICIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzJTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLm5ld3NlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6MDtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiAyOSUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmV3c2VsZWN0IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDQwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDUwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogNjZweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/languagemenu/languagemenu.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/languagemenu/languagemenu.page.ts ***!
    \***************************************************/

  /*! exports provided: LanguagemenuPage */

  /***/
  function srcAppLanguagemenuLanguagemenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagemenuPage", function () {
      return LanguagemenuPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LanguagemenuPage = /*#__PURE__*/function () {
      function LanguagemenuPage(translate, formBuilder, sharedservice) {
        _classCallCheck(this, LanguagemenuPage);

        this.translate = translate;
        this.formBuilder = formBuilder;
        this.sharedservice = sharedservice; //  this.form = formBuilder.group({
        //   lang: [this.val ]      
        // });

        this.getLanguageList();
      }

      _createClass(LanguagemenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.val = localStorage.getItem('Lang_id');
            console.log(_this.val);
          }, 700);
        }
      }, {
        key: "getLanguageList",
        value: function getLanguageList() {
          var _this2 = this;

          var data = new FormData();
          this.sharedservice.presentLoadingDefault();
          data.append('security_key', '07b337e9971f28d49c9c4b0449ea071131f4a3b6');
          this.sharedservice.sharedPostRequest('common_controller/languagesList', data).subscribe(function (rdata) {
            console.log(rdata);
            _this2.language_list = rdata['data'];
          }, function (error) {
            _this2.sharedservice.loaderDismiss();
          }, function () {
            _this2.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "selectLanguage",
        value: function selectLanguage(e) {
          console.log(e.detail.value);
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(e) {
          console.log(e);

          if (e.detail.value == '1') {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            localStorage.setItem('language', 'en');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '42') {
            this.translate.setDefaultLang('hi');
            this.translate.use('hi');
            localStorage.setItem('language', 'hi');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '77') {
            this.translate.setDefaultLang('ml');
            this.translate.use('ml');
            localStorage.setItem('language', 'ml');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '76') {
            this.translate.setDefaultLang('ma');
            this.translate.use('ma');
            localStorage.setItem('language', 'ma');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '43') {
            this.translate.setDefaultLang('cr');
            this.translate.use('cr');
            localStorage.setItem('language', 'cr');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '27') {
            this.translate.setDefaultLang('sp');
            this.translate.use('sp');
            localStorage.setItem('language', 'sp');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '6') {
            this.translate.setDefaultLang('ar');
            this.translate.use('ar');
            localStorage.setItem('language', 'ar');
            localStorage.setItem('Lang_id', e.detail.value);
          } else if (e.detail.value == '89') {
            this.translate.setDefaultLang('po');
            this.translate.use('po');
            localStorage.setItem('language', 'po');
            localStorage.setItem('Lang_id', e.detail.value);
          }
        }
      }]);

      return LanguagemenuPage;
    }();

    LanguagemenuPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }];
    };

    LanguagemenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-languagemenu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./languagemenu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/languagemenu/languagemenu.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./languagemenu.page.scss */
      "./src/app/languagemenu/languagemenu.page.scss"))["default"]]
    })], LanguagemenuPage);
    /***/
  }
}]);
//# sourceMappingURL=languagemenu-languagemenu-module-es5.js.map
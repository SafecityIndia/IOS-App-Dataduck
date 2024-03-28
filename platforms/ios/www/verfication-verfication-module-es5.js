function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verfication-verfication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verfication/verfication.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verfication/verfication.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerficationVerficationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <div class=\"mainarea\">\n    <img src=\"assets/images/icons/logo.svg\" />\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n        \n\t\t<ion-item mode=\"ios\">\n\t\t <ion-label class=\"newlabel\" position=\"stacked\">{{'enter_verifi' | translate }}\n            </ion-label>\n         <ion-input  (ionChange) = \"verification($event)\"></ion-input>\n        </ion-item>\n\t\t    <span >{{'please_enter' | translate }}</span>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n <div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"language()\" [disabled]=\"buttondisable\" >{{'verify' | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n<!-- <div class=\"bottom\"> -->\n\n<!-- </div> -->";
    /***/
  },

  /***/
  "./src/app/verfication/verfication-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/verfication/verfication-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: VerficationPageRoutingModule */

  /***/
  function srcAppVerficationVerficationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerficationPageRoutingModule", function () {
      return VerficationPageRoutingModule;
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


    var _verfication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verfication.page */
    "./src/app/verfication/verfication.page.ts");

    var routes = [{
      path: '',
      component: _verfication_page__WEBPACK_IMPORTED_MODULE_3__["VerficationPage"]
    }];

    var VerficationPageRoutingModule = /*#__PURE__*/_createClass(function VerficationPageRoutingModule() {
      _classCallCheck(this, VerficationPageRoutingModule);
    });

    VerficationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerficationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verfication/verfication.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/verfication/verfication.module.ts ***!
    \***************************************************/

  /*! exports provided: VerficationPageModule */

  /***/
  function srcAppVerficationVerficationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerficationPageModule", function () {
      return VerficationPageModule;
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


    var _verfication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verfication-routing.module */
    "./src/app/verfication/verfication-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _verfication_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verfication.page */
    "./src/app/verfication/verfication.page.ts");

    var VerficationPageModule = /*#__PURE__*/_createClass(function VerficationPageModule() {
      _classCallCheck(this, VerficationPageModule);
    });

    VerficationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _verfication_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerficationPageRoutingModule"]],
      declarations: [_verfication_page__WEBPACK_IMPORTED_MODULE_7__["VerficationPage"]]
    })], VerficationPageModule);
    /***/
  },

  /***/
  "./src/app/verfication/verfication.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/verfication/verfication.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerficationVerficationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 35% auto 0;\n}\n\n.alert-head.sc-ion-alert-ios {\n  display: none !important;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 16px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 11px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-input {\n  border: 1px solid #ddd;\n  height: 40px;\n  --padding-start: 12px !important;\n}\n\n.newselect span {\n  color: #BA0B0B;\n  font-size: 14px;\n  text-align: left;\n  float: left;\n  padding-top: 8px;\n}\n\n.newsidearea {\n  width: 100%;\n  height: auto;\n}\n\n.newsidearea ion-label {\n  width: 100%;\n  height: auto;\n  flex: 1 1 0%;\n}\n\n.newsidearea .in-item {\n  padding-right: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.newsidearea .in-item[slot=start] {\n  margin: 3px 15px 0px 4px;\n}\n\n.newsidearea ion-item {\n  width: 50%;\n  float: left;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 6px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  --min-height: 44px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 28%;\n}\n\n.newselect p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  line-height: 21px;\n  text-align: left;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n\n.newselect.newselect h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  font-family: \"Mangal\";\n  line-height: 24px;\n  font-family: \"Lato\";\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 0;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 20px auto 40px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0;\n  }\n\n  .newselect {\n    margin-top: 70px;\n  }\n\n  .newselect p {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 32% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 40% auto 0;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .newselect p {\n    margin-top: 90px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 81px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 66px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC92ZXJmaWNhdGlvbi92ZXJmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlcmZpY2F0aW9uL3ZlcmZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREdBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUE7O0FERUE7RUFFQSx3QkFBQTtBQ0FBOztBREdBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNKLGtCQUFBO0VBQ0ksb0JBQUE7QUNBSjs7QURFQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQUE7O0FERUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUE7O0FER0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ0RBOztBRElBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRkE7O0FES0E7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0MsZUFBQTtBQ0hMOztBRE1BO0VBRUEsd0JBQUE7QUNKQTs7QURNQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FDSkE7O0FET0U7RUFFQSxrQkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FEUUE7RUFDQyx5QkFBQTtBQ0xEOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtFQUVJLGtCQUFBO0FDTkw7O0FEU0M7RUFFQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0ksa0JBQUE7QUNQTDs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNUQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDVkE7O0FEY0E7RUFFQSxPQUFBO0VBQ0EsV0FBQTtBQ1pBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNiQTs7QURnQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZkE7O0FEaUJBO0VBRUEsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDZkE7O0FEa0JBO0VBQ0EsV0FBQTtBQ2ZBOztBRG9CQTtFQUVDO0lBRUksa0JBQUE7RUNuQkg7O0VEc0JEO0lBQ0EsZ0JBQUE7RUNuQkM7O0VEc0JEO0lBQ0EsZ0JBQUE7RUNuQkM7QUFDRjs7QURzQkM7RUFJQTtJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUN4QkM7QUFDRjs7QUQ4QkM7RUFJQztJQUdELGtCQUFBO0VDakNDO0FBQ0Y7O0FEcUNDO0VBSUE7SUFDSSxnQkFBQTtFQ3RDSDtBQUNGOztBRDBDQztFQUlBO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0VDNUNDOztFRCtDRDtJQUNBLGdCQUFBO0VDNUNDO0FBQ0Y7O0FEaURBO0VBSUM7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUNuREM7O0VEc0REO0lBQ0EsZ0JBQUE7RUNuREM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZlcmZpY2F0aW9uL3ZlcmZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm1haW5hcmVhIGltZ3tcclxud2lkdGg6MjM1cHg7XHJcbm1hcmdpbjozNSUgYXV0byAgMCA7XHJcbn1cclxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc1xyXG57XHJcbmRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuXHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuaGVpZ2h0OjQwcHg7XHJcbi0tcGFkZGluZy1zdGFydDogMTJweCAhaW1wb3J0YW50OyBcclxufVxyXG4ubmV3c2VsZWN0IHNwYW5cclxue1xyXG5jb2xvcjojQkEwQjBCO1xyXG5mb250LXNpemU6MTRweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5mbG9hdDpsZWZ0O1xyXG5wYWRkaW5nLXRvcDo4cHg7XHJcbn1cclxuXHJcbi5uZXdzaWRlYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgaW9uLWxhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsZXg6MSAxIDAlO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1cclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblx0ICAgIHBhZGRpbmctbGVmdDowO1xyXG59XHJcblxyXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1bc2xvdD1cInN0YXJ0XCJdXHJcbntcclxubWFyZ2luOiAzcHggMTVweCAwcHggNHB4O1xyXG59XHJcbi5uZXdzaWRlYXJlYSAgaW9uLWl0ZW1cclxue1xyXG53aWR0aDo1MCU7XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4uc2VsZWN0LXRleHQgYnV0dG9uXHJcbntwYWRkaW5nOjFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdFxyXG5cdCAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcblx0ICAgIC0tbWluLWhlaWdodDogNDRweDtcclxuXHR9XHJcblx0XHJcbi5uZXdzZWxlY3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcbm1hcmdpbi10b3A6MjglO1xyXG59XHJcblxyXG4ubmV3c2VsZWN0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuY29sb3I6IzI5MjAyMDtcclxubGluZS1oZWlnaHQ6MjFweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjhweDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3c2VsZWN0Lm5ld3NlbGVjdCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5jb2xvcjojMjkyMDIwO1xyXG5mb250LWZhbWlseTogJ01hbmdhbCc7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbnRleHQtYWxpZ246bGVmdDtcclxubWFyZ2luLXRvcDowO1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTowO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MjBweCBhdXRvIDQwcHg7XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpIGFuZCgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDIpXHJcblx0e1xyXG5cdC5tYWluYXJlYSBpbWdcclxuXHR7XHJcblx0ICAgIG1hcmdpbjogMjklIGF1dG8gMDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld3NlbGVjdHtcclxuXHRtYXJnaW4tdG9wOjcwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3QgcHtcclxuXHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aCA6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodCA6IDczNnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMzVweCAhaW1wb3J0YW50O1xyXG4gbWFyZ2luOiAzMiUgYXV0byAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIFxyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdFx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG5cclxuIG1hcmdpbjogNDAlIGF1dG8gMDtcclxuIH1cclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0ICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcblx0XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweDtcclxuIG1hcmdpbjogMjAlIGF1dG8gMDtcclxuIH1cclxuIFxyXG4gLm5ld3NlbGVjdHtcclxuIG1hcmdpbi10b3A6IDgxcHg7XHJcbn1cclxuXHJcbiBcclxuXHR9XHJcblx0XHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4O1xyXG4gbWFyZ2luOiAyMCUgYXV0byAwO1xyXG4gfVxyXG4gXHJcbiAubmV3c2VsZWN0e1xyXG4gbWFyZ2luLXRvcDogNjZweDtcclxufVxyXG5cclxuXHJcbiB9XHJcbiAgXHJcblxyXG4iLCIubWFpbmFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW5hcmVhIGltZyB7XG4gIHdpZHRoOiAyMzVweDtcbiAgbWFyZ2luOiAzNSUgYXV0byAwO1xufVxuXG4uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubmV3c2VsZWN0IHNwYW4ge1xuICBjb2xvcjogI0JBMEIwQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLm5ld3NpZGVhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5ld3NpZGVhcmVhIGlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDEgMSAwJTtcbn1cblxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1bc2xvdD1zdGFydF0ge1xuICBtYXJnaW46IDNweCAxNXB4IDBweCA0cHg7XG59XG5cbi5uZXdzaWRlYXJlYSBpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLml0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5uZXdzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cblxuLm5ld3NlbGVjdCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3NlbGVjdC5uZXdzZWxlY3QgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJNYW5nYWxcIjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHg7XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxleDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIG1hcmdpbjogMjklIGF1dG8gMDtcbiAgfVxuXG4gIC5uZXdzZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cblxuICAubmV3c2VsZWN0IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIzNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzMiUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiA0MCUgYXV0byAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHg7XG4gICAgbWFyZ2luOiAyMCUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogODFweDtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHg7XG4gICAgbWFyZ2luOiAyMCUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNjZweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/verfication/verfication.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/verfication/verfication.page.ts ***!
    \*************************************************/

  /*! exports provided: VerficationPage */

  /***/
  function srcAppVerficationVerficationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerficationPage", function () {
      return VerficationPage;
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

    var VerficationPage = /*#__PURE__*/function () {
      function VerficationPage(router, navController, route) {
        var _this = this;

        _classCallCheck(this, VerficationPage);

        this.router = router;
        this.navController = navController;
        this.route = route;
        this.orgArray = [];
        this.showError = false;
        this.buttondisable = true;
        this.route.queryParams.subscribe(function (params) {
          _this.countryId = params["countryId"];
          _this.cityId = params["cityId"];
          _this.orgId = params["orgId"];
          console.log("orgid", _this.orgId);
          _this.orgArray = _this.orgId.split(',');
          localStorage.setItem('ov_code', _this.orgArray[1]);
          console.log("array", _this.orgArray);
          console.log("countryId", _this.countryId);
          console.log("city", _this.cityId);
        });
      }

      _createClass(VerficationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verification",
        value: function verification(e) {
          console.log(e.detail.value);

          if (e.detail.value != this.orgArray[1]) {
            this.showError = true;
            this.buttondisable = true;
          } else {
            this.showError = false;
            this.buttondisable = false;
          }
        }
      }, {
        key: "language",
        value: function language() {
          localStorage.setItem('Client_id', this.orgArray[0]);
          var navigationExtras = {
            queryParams: {
              countryId: this.countryId,
              cityId: this.cityId,
              orgId: this.orgArray[0]
            }
          };
          this.navController.navigateRoot(["/languageselection"], navigationExtras);
        }
      }]);

      return VerficationPage;
    }();

    VerficationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    VerficationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verfication',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verfication.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verfication/verfication.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verfication.page.scss */
      "./src/app/verfication/verfication.page.scss"))["default"]]
    })], VerficationPage);
    /***/
  }
}]);
//# sourceMappingURL=verfication-verfication-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sevensubfieldtwo-sevensubfieldtwo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sevensubfieldtwo/sevensubfieldtwo.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sevensubfieldtwo/sevensubfieldtwo.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSevensubfieldtwoSevensubfieldtwoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n<div class=\"header-background\"></div>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/reportfiledseven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"newbg\">\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n<div class=\"newtext\">\n<h4>Did you seek/receive medical attention after the experience?<span class=\"red\">*</span></h4>\n <ion-list>\n  <ion-radio-group  (ionChange)=getViolence($event)>\n\n    <ion-item>\n      <ion-label>Yes</ion-label>\n      <ion-radio  value=\"Yes\" ></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>No</ion-label>\n      <ion-radio  value=\"No\"></ion-radio>\n    </ion-item>\n\n  </ion-radio-group>\n</ion-list>\n\n   </div>\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToFieldEight()\">NEXT</ion-button>\n  </ion-col>\n   </ion-row>\n</div>";
    /***/
  },

  /***/
  "./src/app/sevensubfieldtwo/sevensubfieldtwo-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/sevensubfieldtwo/sevensubfieldtwo-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SevensubfieldtwoPageRoutingModule */

  /***/
  function srcAppSevensubfieldtwoSevensubfieldtwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SevensubfieldtwoPageRoutingModule", function () {
      return SevensubfieldtwoPageRoutingModule;
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


    var _sevensubfieldtwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sevensubfieldtwo.page */
    "./src/app/sevensubfieldtwo/sevensubfieldtwo.page.ts");

    var routes = [{
      path: '',
      component: _sevensubfieldtwo_page__WEBPACK_IMPORTED_MODULE_3__["SevensubfieldtwoPage"]
    }];

    var SevensubfieldtwoPageRoutingModule = /*#__PURE__*/_createClass(function SevensubfieldtwoPageRoutingModule() {
      _classCallCheck(this, SevensubfieldtwoPageRoutingModule);
    });

    SevensubfieldtwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SevensubfieldtwoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sevensubfieldtwo/sevensubfieldtwo.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/sevensubfieldtwo/sevensubfieldtwo.module.ts ***!
    \*************************************************************/

  /*! exports provided: SevensubfieldtwoPageModule */

  /***/
  function srcAppSevensubfieldtwoSevensubfieldtwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SevensubfieldtwoPageModule", function () {
      return SevensubfieldtwoPageModule;
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


    var _sevensubfieldtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sevensubfieldtwo-routing.module */
    "./src/app/sevensubfieldtwo/sevensubfieldtwo-routing.module.ts");
    /* harmony import */


    var _sevensubfieldtwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sevensubfieldtwo.page */
    "./src/app/sevensubfieldtwo/sevensubfieldtwo.page.ts");

    var SevensubfieldtwoPageModule = /*#__PURE__*/_createClass(function SevensubfieldtwoPageModule() {
      _classCallCheck(this, SevensubfieldtwoPageModule);
    });

    SevensubfieldtwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sevensubfieldtwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SevensubfieldtwoPageRoutingModule"]],
      declarations: [_sevensubfieldtwo_page__WEBPACK_IMPORTED_MODULE_6__["SevensubfieldtwoPage"]]
    })], SevensubfieldtwoPageModule);
    /***/
  },

  /***/
  "./src/app/sevensubfieldtwo/sevensubfieldtwo.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/sevensubfieldtwo/sevensubfieldtwo.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSevensubfieldtwoSevensubfieldtwoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".newbg {\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 32%, rgba(231,246,248,1) 57%, rgba(252,232,242,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newtext ion-label {\n  margin-top: 10px;\n  margin-bottom: 11px;\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 28%;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  margin-bottom: 28px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  font-family: \"Lato\";\n  text-align: center;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start: 20px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --inner-border-width: 0px 0px 0px 0px;\n  --min-height:41px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 24px;\n  margin-top: 1px;\n}\n\n.radio-inner {\n  width: 33%;\n  height: 50%;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    top: 20%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zZXZlbnN1YmZpZWxkdHdvL3NldmVuc3ViZmllbGR0d28ucGFnZS5zY3NzIiwic3JjL2FwcC9zZXZlbnN1YmZpZWxkdHdvL3NldmVuc3ViZmllbGR0d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsaUpBQUE7RUFDQSw0SUFBQTtFQUNBLDZJQUFBO0VBQ0EseUlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FBOztBREtBO0VBRUEsd0JBQUE7QUNIQTs7QURNQTtFQUVFLG9DQUFBO0FDSkY7O0FET0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FET0M7RUFDRyxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNGLCtDQUFBO0VBQ0UsMENBQUE7QUNKSjs7QURPQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTEE7O0FEUUE7RUFDQSxjQUFBO0FDTEE7O0FEUUE7RUFDQSxnQkFBQTtBQ0xBOztBRFFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ05BOztBRFFFO0VBR0Usd0JBQUE7QUNQSjs7QURTQTtFQUNJLHdCQUFBO0VBQ0gsVUFBQTtFQUNHLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEUUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFNBO0VBRUEsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUkE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1RBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNkQTs7QURpQkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRCxtQkFBQTtFQUNJLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNkSjs7QURnQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2ZBOztBRGtCQTtFQUVBLHVCQUFBO0FDaEJBOztBRG1CQTtFQUVBLGlFQUFBO1VBQUEsZ0VBQUE7QUNqQkE7O0FEb0JBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUNsQkE7O0FEcUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ25CQTs7QURxQkE7RUFFSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNsQko7O0FEcUJBO0VBRUEsNEJBQUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDbkJKOztBRHNCQTtFQUdJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QUR3QkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ3JCSjs7QUR3QkE7RUFJQTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VDeEJGO0FBQ0Y7O0FENkJDO0VBSUQ7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQzlCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2V2ZW5zdWJmaWVsZHR3by9zZXZlbnN1YmZpZWxkdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdiZ1xyXG57XHJcbi0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDMyJSwgcmdiYSgyMzEsMjQ2LDI0OCwxKSA1NyUsIHJnYmEoMjUyLDIzMiwyNDIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xyXG5oZWlnaHQ6MTAwJTtcclxucG9zaXRpb246Zml4ZWQ7XHJcblxyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyXHJcbntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuXHQgLW1vcy1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbn1cclxuXHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBpb24tbGFiZWxcclxue1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbm1hcmdpbi1ib3R0b206MTFweDtcclxufVxyXG4gIGlvbi1yYWRpb1xyXG4gIHtcclxuIFxyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xyXG4gIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJcclxue1xyXG5jb250ZW50OmluaGVyaXQ7XHJcbn1cclxuXHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoyOCU7XHJcbn1cclxuXHJcbi5uZXd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5cclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5cclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbm1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzowO1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3Rcclxue1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbi0tbWluLWhlaWdodDo0MXB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuLm1kLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWRcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjA7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIFxyXG57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG5cclxufVxyXG5cclxuLnJhZGlvLWlubmVyIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluYXJlYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbn1cclxuXHJcbiBcclxuIH1cclxuIFxyXG4gQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDo2NDBweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzYwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuLm1haW5hcmVhaW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG59XHJcblxyXG4gXHJcbiB9XHJcblxyXG4iLCIubmV3Ymcge1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSAzMiUsIHJnYmEoMjMxLDI0NiwyNDgsMSkgNTclLCByZ2JhKDI1MiwyMzIsMjQyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgMzIlLCByZ2JhKDIzMSwyNDYsMjQ4LDEpIDU3JSwgcmdiYSgyNTIsMjMyLDI0MiwxKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5idXR0b24tbmF0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm5ld3RleHQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjMkVEMzVBO1xufVxuXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItd2lkdGg6IDBweCAzcHggM3B4IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLXJhZGlvIC5yYWRpby1pbm5lciB7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbmhlcml0O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4JTtcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSArIDBweCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tbWluLWhlaWdodDo0MXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbn1cblxuaW9uLXJhZGlvLm1kIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1yYWRpdXM6MDtcbn1cblxuaW9uLXJhZGlvLm1kLnJhZGlvLWNoZWNrZWQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4ucmFkaW8taW5uZXIge1xuICB3aWR0aDogMzMlO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sevensubfieldtwo/sevensubfieldtwo.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sevensubfieldtwo/sevensubfieldtwo.page.ts ***!
    \***********************************************************/

  /*! exports provided: SevensubfieldtwoPage */

  /***/
  function srcAppSevensubfieldtwoSevensubfieldtwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SevensubfieldtwoPage", function () {
      return SevensubfieldtwoPage;
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

    var SevensubfieldtwoPage = /*#__PURE__*/function () {
      function SevensubfieldtwoPage(navController, route) {
        var _this = this;

        _classCallCheck(this, SevensubfieldtwoPage);

        this.navController = navController;
        this.route = route;
        this.category = '';
        this.route.queryParams.subscribe(function (params) {
          _this.category = params["category"];
          console.log("category", _this.category);
        });
      }

      _createClass(SevensubfieldtwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getViolence",
        value: function getViolence(e) {
          console.log(e.detail.value);
          this.yesOrNo = e.detail.value;
        }
      }, {
        key: "goToFieldEight",
        value: function goToFieldEight() {
          if (this.category == undefined || this.category == 'GoToA1') {
            this.navController.navigateForward("/reportfiledeight");
          } else if (this.category == 'GoToC' || this.category == 'GoToC1') {
            this.navController.navigateForward("/sevensubfieldone");
          }
        }
      }]);

      return SevensubfieldtwoPage;
    }();

    SevensubfieldtwoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SevensubfieldtwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sevensubfieldtwo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sevensubfieldtwo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sevensubfieldtwo/sevensubfieldtwo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sevensubfieldtwo.page.scss */
      "./src/app/sevensubfieldtwo/sevensubfieldtwo.page.scss"))["default"]]
    })], SevensubfieldtwoPage);
    /***/
  }
}]);
//# sourceMappingURL=sevensubfieldtwo-sevensubfieldtwo-module-es5.js.map
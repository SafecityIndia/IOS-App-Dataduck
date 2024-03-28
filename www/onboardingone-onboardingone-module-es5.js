function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardingone-onboardingone-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingone/onboardingone.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingone/onboardingone.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnboardingoneOnboardingonePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header> -->\n  <!-- <ion-toolbar> -->\n    <!-- <ion-title>onboardingone</ion-title> -->\n  <!-- </ion-toolbar> -->\n<!-- </ion-header> -->\n\n<ion-content class=\"bannerfirst\">\n<div class=\"mainarea\">\n<ion-row>\n      <ion-col size=\"12\" >\n<img src=\"assets/images/icons/logo.svg\"/>\n</ion-col>\n   </ion-row>\n  \n</div>\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\" >\n<div class=\"newtext\">\n<p>{{'together_we_can_fight' | translate}}<br><br> {{'this_is_not_sos_service' | translate}}</p>\n<h6 (click)=\"helpPage()\">{{'view_helplines' | translate}}</h6>\n</div>\n\n   </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToNext()\" >{{'accept_and_proceed' | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/onboardingone/onboardingone-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: OnboardingonePageRoutingModule */

  /***/
  function srcAppOnboardingoneOnboardingoneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingonePageRoutingModule", function () {
      return OnboardingonePageRoutingModule;
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


    var _onboardingone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./onboardingone.page */
    "./src/app/onboardingone/onboardingone.page.ts");

    var routes = [{
      path: '',
      component: _onboardingone_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingonePage"]
    }];

    var OnboardingonePageRoutingModule = /*#__PURE__*/_createClass(function OnboardingonePageRoutingModule() {
      _classCallCheck(this, OnboardingonePageRoutingModule);
    });

    OnboardingonePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnboardingonePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/onboardingone/onboardingone.module.ts ***!
    \*******************************************************/

  /*! exports provided: OnboardingonePageModule */

  /***/
  function srcAppOnboardingoneOnboardingoneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingonePageModule", function () {
      return OnboardingonePageModule;
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


    var _onboardingone_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onboardingone-routing.module */
    "./src/app/onboardingone/onboardingone-routing.module.ts");
    /* harmony import */


    var _onboardingone_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./onboardingone.page */
    "./src/app/onboardingone/onboardingone.page.ts");

    var OnboardingonePageModule = /*#__PURE__*/_createClass(function OnboardingonePageModule() {
      _classCallCheck(this, OnboardingonePageModule);
    });

    OnboardingonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _onboardingone_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnboardingonePageRoutingModule"]],
      declarations: [_onboardingone_page__WEBPACK_IMPORTED_MODULE_7__["OnboardingonePage"]]
    })], OnboardingonePageModule);
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/onboardingone/onboardingone.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnboardingoneOnboardingonePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 150px;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.bannerfirst {\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  position: relative;\n  margin-right: 0;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 25% auto 0;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 24px;\n  font-size: 18px;\n  font-weight: 400;\n  font-weight: normal;\n  color: #220E0E;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  color: #BA0B0B;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 25px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n:focus {\n  outline: -webkit-focus-ring-color auto 0px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newbtnin {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #BA0B0B;\n  --background-activated: #BA0B0B;\n  --background-focused: #BA0B0B;\n  --background-hover: #BA0B0B;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --box-shadow:0;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 18px;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n    margin: 10% auto 0 !important;\n  }\n\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: inherit;\n    top: 127px;\n    margin-bottom: 85px;\n  }\n\n  .bottom {\n    bottom: 18px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: inherit;\n    top: 163px;\n    margin-bottom: 85px;\n  }\n\n  .mainarea img {\n    width: 213px !important;\n    margin: 10% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {\n  .mainareain {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: inherit;\n    top: 163px;\n    margin-bottom: 85px;\n  }\n\n  .mainarea img {\n    width: 213px !important;\n    margin: 10% auto 0 !important;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9vbmJvYXJkaW5nb25lL29uYm9hcmRpbmdvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9vbmJvYXJkaW5nb25lL29uYm9hcmRpbmdvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RBOztBRElBO0VBSUEsOENBQUE7QUNGQTs7QURLQTtFQUVDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSEQ7O0FETUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIQTs7QURPQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRFFFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ05GOztBRFNBO0VBQ0MseUJBQUE7QUNORDs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNORDs7QURTQztFQUVBLHFDQUFBO0FDUEQ7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1pBOztBRGVBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQ1pKOztBRGVBO0VBQ0ksMENBQUE7QUNaSjs7QURlQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDYkE7O0FEZUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ2RBOztBRGlCQTtFQUdBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2hCQTs7QURtQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLGNBQUE7RUFDQSxVQUFBO0VBQ0ksZ0JBQUE7RUFDSCxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbEJBOztBRG9CQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURxQkE7RUFDQSxXQUFBO0FDbEJBOztBRHFCQTtFQUlDO0lBRUEsdUJBQUE7SUFDQSw2QkFBQTtFQ3RCQzs7RUR5QkY7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ3RCRjs7RUR5QkQ7SUFFQSxZQUFBO0VDdkJDO0FBQ0Y7O0FEMkJDO0VBSUQ7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQzVCRjs7RURpQ0E7SUFFRCx1QkFBQTtJQUNBLDZCQUFBO0VDL0JDO0FBQ0Y7O0FEb0NDO0VBSUQ7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ3JDRjs7RUQwQ0E7SUFFRCx1QkFBQTtJQUNBLDZCQUFBO0VDeENDO0FBQ0Y7O0FENENDO0VBS0M7SUFFRCxZQUFBO0lBQ0QsWUFBQTtJQUNDLG1CQUFBO0VDL0NDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nb25lL29uYm9hcmRpbmdvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5hcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjE1MHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5iYW5uZXJmaXJzdFxyXG57XHJcblx0d2lkdGg6MTAwJTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdG1hcmdpbi1yaWdodDowO1xyXG5cdH1cclxuXHJcbi5tYWluYXJlYSBpbWd7XHJcbndpZHRoOjI0M3B4O1xyXG5tYXJnaW46MjUlIGF1dG8gIDAgO1xyXG59XHJcblxyXG5cclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5cclxufVxyXG4gIGlvbi1pdGVtXHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIH1cclxuICBcclxuLnNlbGVjdC10ZXh0IGJ1dHRvblxyXG57cGFkZGluZzoxcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW4taXRlbSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDoxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6MTVweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0fVxyXG5cdFxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG5mb250LXNpemU6MThweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXdlaWdodDpub3JtYWw7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg2XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiNCQTBCMEI7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbm1hcmdpbi10b3A6MjVweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMHB4O1xyXG59XHJcbiAgXHJcbmlvbi1sYWJlbFxyXG57XHJcbmZsZXg6MDtcclxud2lkdGg6MTAwJTtcclxufVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2J0bmluXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjQkEwQjBCO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAgI0JBMEIwQjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAgI0JBMEIwQjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogICNCQTBCMEI7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbi0tYm94LXNoYWRvdzowO1xyXG53aWR0aDo4NSU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0byAxOHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50OztcclxuIG1hcmdpbjogMTAlIGF1dG8gMCAhaW1wb3J0YW50OztcclxuIH1cclxuIFxyXG4ubWFpbmFyZWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogaW5oZXJpdDtcclxuICAgIHRvcDogMTI3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjg1cHg7XHJcbiB9XHJcbiBcclxuIC5ib3R0b21cclxuIHtcclxuIGJvdHRvbTogMThweDtcclxuIH1cclxuIFxyXG4gfVxyXG4gXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG4ubWFpbmFyZWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogaW5oZXJpdDtcclxuICAgIHRvcDogMTYzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjg1cHg7XHJcbiB9XHJcbiBcclxuIFxyXG4gXHJcbiAgLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7O1xyXG4gbWFyZ2luOiAxMCUgYXV0byAwICFpbXBvcnRhbnQ7O1xyXG4gfVxyXG4gXHJcblx0fVxyXG5cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogMzYwcHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7IFxyXG4ubWFpbmFyZWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogaW5oZXJpdDtcclxuICAgIHRvcDogMTYzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjg1cHg7XHJcbiB9XHJcbiBcclxuIFxyXG4gXHJcbiAgLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7O1xyXG4gbWFyZ2luOiAxMCUgYXV0byAwICFpbXBvcnRhbnQ7O1xyXG4gfVxyXG4gXHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIFxyXG4gICAgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODEycHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMylcclxuICAgeyBcclxuICAubWFpbmFyZWFpblxyXG4ge1xyXG4gYm90dG9tOjcycHg7XHJcbnRvcDppbmhlcml0O1xyXG4gbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gfVxyXG59XHJcblxyXG4iLCIubWFpbmFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUwcHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJhbm5lcmZpcnN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLm1haW5hcmVhIGltZyB7XG4gIHdpZHRoOiAyNDNweDtcbiAgbWFyZ2luOiAyNSUgYXV0byAwO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyMjBFMEU7XG59XG5cbi5uZXd0ZXh0IGg2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICNCQTBCMEI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdidG5pbiB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjQkEwQjBCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjQkEwQjBCO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0JBMEIwQjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjQkEwQjBCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxleDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMCUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWFpbmFyZWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gICAgdG9wOiAxMjdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4NXB4O1xuICB9XG5cbiAgLmJvdHRvbSB7XG4gICAgYm90dG9tOiAxOHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogaW5oZXJpdDtcbiAgICB0b3A6IDE2M3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDg1cHg7XG4gIH1cblxuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IGluaGVyaXQ7XG4gICAgdG9wOiAxNjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4NXB4O1xuICB9XG5cbiAgLm1haW5hcmVhIGltZyB7XG4gICAgd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMCUgYXV0byAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1pbi1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWFpbiB7XG4gICAgYm90dG9tOiA3MnB4O1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/onboardingone/onboardingone.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/onboardingone/onboardingone.page.ts ***!
    \*****************************************************/

  /*! exports provided: OnboardingonePage */

  /***/
  function srcAppOnboardingoneOnboardingonePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnboardingonePage", function () {
      return OnboardingonePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var OnboardingonePage = /*#__PURE__*/function () {
      function OnboardingonePage(route, navController) {
        var _this = this;

        _classCallCheck(this, OnboardingonePage);

        this.route = route;
        this.navController = navController;
        this.route.queryParams.subscribe(function (params) {
          _this.langaugeId = params["langaugeId"];
          _this.countryId = params["countryId"];
          _this.cityId = params["cityId"];
          _this.orgId = params["orgId"];
          console.log("countryId", _this.countryId);
          console.log("langaugeId", _this.langaugeId);
          console.log("city", _this.langaugeId);
          console.log("orgid", _this.langaugeId);
        });
      }

      _createClass(OnboardingonePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToNext",
        value: function goToNext() {
          console.log("country id", this.countryId);
          console.log("language id", this.langaugeId);
          var navigationExtras = {
            queryParams: {
              langaugeId: this.langaugeId,
              countryId: this.countryId,
              cityId: this.cityId,
              orgId: this.orgId
            }
          };
          this.navController.navigateForward(["onboardingtwo"], navigationExtras);
        }
      }, {
        key: "helpPage",
        value: function helpPage() {
          this.navController.navigateForward("/help");
        }
      }]);

      return OnboardingonePage;
    }();

    OnboardingonePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    OnboardingonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-onboardingone',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./onboardingone.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingone/onboardingone.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./onboardingone.page.scss */
      "./src/app/onboardingone/onboardingone.page.scss"))["default"]]
    })], OnboardingonePage);
    /***/
  }
}]);
//# sourceMappingURL=onboardingone-onboardingone-module-es5.js.map
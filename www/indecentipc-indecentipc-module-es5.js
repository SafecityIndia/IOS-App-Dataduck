function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indecentipc-indecentipc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/indecentipc/indecentipc.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/indecentipc/indecentipc.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndecentipcIndecentipcPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/ipc' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n \n  </ion-buttons>\n    <ion-title><div class=\"ion-text-wrap\">Indecent exposure / Masturbation in public\n</div></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\">\n <div style=\"width:100%;height:auto;padding:0 0px;text-align:left;color:#220E0E;margin-top:0;\">\n<h2 style=\"width:100%;height:auto;font-weight:500;color:#592D8D;font-size:16px;line-height:24px;margin-bottom:2px;\">Which sections of the law address this crime?</h2>\n<h4 style=\"width:100%;height:auto;font-weight:400;color:#292020;font-size:16px;line-height:24px;padding-left:0;margin-bottom:2px;margin-top:10px;\">Sexual Harassment - 354A of the IPC</h4> </div>\n<div style=\"width:100%;height:auto;padding:0 0px;text-align:left;color:#220E0E;margin-top:0;\">\n<h2 style=\"width:100%;height:auto;font-weight:500;color:#592D8D;font-size:16px;line-height:24px;margin-bottom:2px;\">How is sexual harassment defined under the IPC?</h2>\n<p style=\"width:100%;height:auto;line-height:24px;color:#292020;margin-top:5px;margin-bottom:12px;\">Sexual harassment is defined under S. 354A of the IPC as a man committing any of the following acts:</p>\n<h4 style=\"width:100%;height:auto;font-weight:400;color:#292020;font-size:16px;line-height:24px;padding-left:0;margin-bottom:2px;margin-top:10px;\">(i) physical contact and advances involving unwelcome and explicit sexual overtures; or</h4>\n<h4 style=\"width:100%;height:auto;font-weight:400;color:#292020;font-size:16px;line-height:24px;padding-left:0;margin-bottom:2px;margin-top:10px;\">(ii) a demand or request for sexual favours; or</h4>\n<h4 style=\"width:100%;height:auto;font-weight:400;color:#292020;font-size:16px;line-height:24px;padding-left:0;margin-bottom:2px;margin-top:10px;\">(iii) showing pornography against the will of a woman; or</h4> \n<h4 style=\"width:100%;height:auto;font-weight:400;color:#292020;font-size:16px;line-height:24px;padding-left:0;margin-bottom:2px;margin-top:10px;\">(iv) making sexually coloured remarks,</h4> </div>\n<div style=\"width:100%;height:auto;padding:0 0px;text-align:left;color:#220E0E;margin-top:0;\">\n<h2 style=\"width:100%;height:auto;font-weight:500;color:#592D8D;font-size:16px;line-height:24px;margin-bottom:2px;\">What is the punishment under the IPC?</h2>\n<p style=\"width:100%;height:auto;line-height:24px;color:#292020;margin-top:5px;margin-bottom:12px;\">Rigorous imprisonment for a term which may extend to 3 year, or a fine, or both.</p></div>\n<div style=\"width:100%;height:auto;padding:0 0px;text-align:left;color:#220E0E;margin-top:0;\"> \n<h5 style=\"width:100%;height:auto;float:left;font-size:16px;color:#292020;\">information visit : <span style=\"color:#1343C4;font-size:16px;\">https://safecity.in/sexual-violence-laws-under-the-indian-penal-code/</span></h5></div>\n\n    </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/indecentipc/indecentipc-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/indecentipc/indecentipc-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: IndecentipcPageRoutingModule */

  /***/
  function srcAppIndecentipcIndecentipcRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndecentipcPageRoutingModule", function () {
      return IndecentipcPageRoutingModule;
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


    var _indecentipc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./indecentipc.page */
    "./src/app/indecentipc/indecentipc.page.ts");

    var routes = [{
      path: '',
      component: _indecentipc_page__WEBPACK_IMPORTED_MODULE_3__["IndecentipcPage"]
    }];

    var IndecentipcPageRoutingModule = /*#__PURE__*/_createClass(function IndecentipcPageRoutingModule() {
      _classCallCheck(this, IndecentipcPageRoutingModule);
    });

    IndecentipcPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndecentipcPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/indecentipc/indecentipc.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/indecentipc/indecentipc.module.ts ***!
    \***************************************************/

  /*! exports provided: IndecentipcPageModule */

  /***/
  function srcAppIndecentipcIndecentipcModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndecentipcPageModule", function () {
      return IndecentipcPageModule;
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


    var _indecentipc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./indecentipc-routing.module */
    "./src/app/indecentipc/indecentipc-routing.module.ts");
    /* harmony import */


    var _indecentipc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./indecentipc.page */
    "./src/app/indecentipc/indecentipc.page.ts");

    var IndecentipcPageModule = /*#__PURE__*/_createClass(function IndecentipcPageModule() {
      _classCallCheck(this, IndecentipcPageModule);
    });

    IndecentipcPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _indecentipc_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndecentipcPageRoutingModule"]],
      declarations: [_indecentipc_page__WEBPACK_IMPORTED_MODULE_6__["IndecentipcPage"]]
    })], IndecentipcPageModule);
    /***/
  },

  /***/
  "./src/app/indecentipc/indecentipc.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/indecentipc/indecentipc.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndecentipcIndecentipcPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-top: 12px;\n  margin-bottom: 15px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  float: left;\n  font-size: 16px;\n  color: #292020;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 24px;\n  font-size: 16px;\n  color: #292020;\n  margin-top: 5px;\n  margin-bottom: 12px;\n}\n\n.newtext h2 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  color: #592D8D;\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 2px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  color: #292020;\n  font-size: 16px;\n  line-height: 24px;\n  background-image: url(/assets/images/icons/dot.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 4px 7px;\n  padding-left: 20px;\n  margin-bottom: 5px;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  color: #292020;\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 5px;\n}\n\n.newlink {\n  color: #1343C4;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9pbmRlY2VudGlwYy9pbmRlY2VudGlwYy5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZGVjZW50aXBjL2luZGVjZW50aXBjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURTQTtFQUNBLGdCQUFBO0FDTkE7O0FEU0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0FDWEE7O0FEY0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDYkE7O0FEZ0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2RBOztBRGlCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZkE7O0FEa0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2hCQTs7QURrQkE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQ2hCQSIsImZpbGUiOiJzcmMvYXBwL2luZGVjZW50aXBjL2luZGVjZW50aXBjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuLm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLXRvcDoxMnB4O1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG5tYXJnaW4tYm90dG9tOjEycHhcclxufVxyXG5cclxuLm5ld3RleHQgaDJcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5jb2xvcjojNTkyRDhEO1xyXG5mb250LXNpemU6MTZweDtcclxubGluZS1oZWlnaHQ6MjRweDtcclxubWFyZ2luLWJvdHRvbToycHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3Quc3ZnKTtcclxuYmFja2dyb3VuZC1zaXplOjZweDtcclxuYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA0cHggN3B4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxubWFyZ2luLWJvdHRvbTo1cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg2XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6IzI5MjAyMDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbm1hcmdpbi1ib3R0b206NXB4O1xyXG59XHJcbi5uZXdsaW5rXHJcbntcclxuY29sb3I6IzEzNDNDNDtcclxuZm9udC1zaXplOjE2cHg7XHJcbn1cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3dGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXd0ZXh0IGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyOTIwMjA7XG59XG5cbi5uZXd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubmV3dGV4dCBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5uZXd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3Quc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDRweCA3cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubmV3dGV4dCBoNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5uZXdsaW5rIHtcbiAgY29sb3I6ICMxMzQzQzQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/indecentipc/indecentipc.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/indecentipc/indecentipc.page.ts ***!
    \*************************************************/

  /*! exports provided: IndecentipcPage */

  /***/
  function srcAppIndecentipcIndecentipcPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndecentipcPage", function () {
      return IndecentipcPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IndecentipcPage = /*#__PURE__*/function () {
      function IndecentipcPage() {
        _classCallCheck(this, IndecentipcPage);
      }

      _createClass(IndecentipcPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndecentipcPage;
    }();

    IndecentipcPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-indecentipc',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./indecentipc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/indecentipc/indecentipc.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./indecentipc.page.scss */
      "./src/app/indecentipc/indecentipc.page.scss"))["default"]]
    })], IndecentipcPage);
    /***/
  }
}]);
//# sourceMappingURL=indecentipc-indecentipc-module-es5.js.map
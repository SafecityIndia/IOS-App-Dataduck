function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["volunteer-volunteer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVolunteerVolunteerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons>\n    <ion-title>{{'Volunteer'  | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div class=\"mainbg\">\n<ion-row>\n     <ion-col col-12>\n\t <div class=\"volunteer\">\n\t <h2>{{'volunteer_menu' | translate}}</h2>\n\t <p>{{'volunteer_with_us_desc' | translate}}</p>\n   <a style=\"color:#fff;text-decoration:none;\" class=\"newvolunteer\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://safecity.in/volunteer-activities/\">{{'Volunteer'  | translate}}</a>\n   <!-- <h5>Visit our Website to Apply</h5> -->\n\t </div>\n\t </ion-col>\n   </ion-row>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/volunteer/volunteer-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VolunteerPageRoutingModule */

  /***/
  function srcAppVolunteerVolunteerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerPageRoutingModule", function () {
      return VolunteerPageRoutingModule;
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


    var _volunteer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./volunteer.page */
    "./src/app/volunteer/volunteer.page.ts");

    var routes = [{
      path: '',
      component: _volunteer_page__WEBPACK_IMPORTED_MODULE_3__["VolunteerPage"]
    }];

    var VolunteerPageRoutingModule = /*#__PURE__*/_createClass(function VolunteerPageRoutingModule() {
      _classCallCheck(this, VolunteerPageRoutingModule);
    });

    VolunteerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VolunteerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/volunteer/volunteer.module.ts ***!
    \***********************************************/

  /*! exports provided: VolunteerPageModule */

  /***/
  function srcAppVolunteerVolunteerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerPageModule", function () {
      return VolunteerPageModule;
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


    var _volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./volunteer-routing.module */
    "./src/app/volunteer/volunteer-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _volunteer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./volunteer.page */
    "./src/app/volunteer/volunteer.page.ts");

    var VolunteerPageModule = /*#__PURE__*/_createClass(function VolunteerPageModule() {
      _classCallCheck(this, VolunteerPageModule);
    });

    VolunteerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _volunteer_routing_module__WEBPACK_IMPORTED_MODULE_5__["VolunteerPageRoutingModule"]],
      declarations: [_volunteer_page__WEBPACK_IMPORTED_MODULE_7__["VolunteerPage"]]
    })], VolunteerPageModule);
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/volunteer/volunteer.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppVolunteerVolunteerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainbg {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 22%;\n}\n\n.volunteer {\n  width: 100%;\n  height: auto;\n  padding: 0 20px;\n}\n\n.volunteer h2 {\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-weight: 500;\n  color: #220E0E;\n  margin-bottom: 20px;\n}\n\n.volunteer p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  margin-bottom: 40px;\n}\n\n.volunteer h5 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 500;\n  color: #592D8D;\n  text-decoration: underline;\n  line-height: 16px;\n  margin-bottom: 35px;\n}\n\n.volunteer span {\n  color: #592D8D;\n}\n\n.newvolunteer {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 12px;\n  background: #592D8D;\n  width: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  padding: 13px 30px;\n  border-radius: 4px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainbg {\n    top: 20%;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainbg {\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC92b2x1bnRlZXIvdm9sdW50ZWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdm9sdW50ZWVyL3ZvbHVudGVlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQSxrQkFBQTtBQ0RBOztBRElBO0VBRUEsU0FBQTtBQ0ZBOztBRE1BO0VBSUEsOENBQUE7QUNKQTs7QURRQTtFQUVBLHVCQUFBO0FDTkE7O0FEU0E7RUFFQSxxQkFBQTtBQ1BBOztBRFNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURTQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDUEE7O0FEVUE7RUFDQSxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFdBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNUQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNiQTs7QURnQkE7RUFFQSxjQUFBO0FDZEE7O0FEaUJBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQyxnQkFBQTtFQUVELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQko7O0FEdUJBO0VBSUE7SUFFSSxRQUFBO0VDeEJGO0FBQ0Y7O0FENkJDO0VBSUQ7SUFFSSxRQUFBO0VDL0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92b2x1bnRlZXIvdm9sdW50ZWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcbi5tYWluYmdcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoyMiU7XHJcbn1cclxuXHJcbi52b2x1bnRlZXJcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIwcHg7XHJcbn1cclxuXHJcbi52b2x1bnRlZXIgaDJcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE4cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4udm9sdW50ZWVyIHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxubWFyZ2luLWJvdHRvbTo0MHB4O1xyXG59XHJcblxyXG4udm9sdW50ZWVyIGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbnRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbmxpbmUtaGVpZ2h0OjE2cHg7XHJcbm1hcmdpbi1ib3R0b206MzVweDtcclxufVxyXG5cclxuLnZvbHVudGVlciBzcGFuXHJcbntcclxuY29sb3I6IzU5MkQ4RDtcclxufVxyXG5cclxuLm5ld3ZvbHVudGVlclxyXG57XHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5cclxuYmFja2dyb3VuZDogIzU5MkQ4RDtcclxud2lkdGg6YXV0bztcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuXHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6MDtcclxuXHJcbiAgICBwYWRkaW5nOiAxM3B4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDogNTY4cHgpIFxyXG4gICBhbmQgKGRldmljZS13aWR0aCA6IDMyMHB4KSBcclxuICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiB7XHJcbi5tYWluYmcge1xyXG4gICAgXHJcbiAgICB0b3A6IDIwJTtcclxufVxyXG5cclxuIFxyXG4gfVxyXG4gXHJcbiBAbWVkaWEgKGRldmljZS1oZWlnaHQgOjY0MHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzNjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4ubWFpbmJne1xyXG4gICBcclxuICAgIHRvcDogMjAlO1xyXG59XHJcblxyXG4gXHJcbiB9IiwiaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjIlO1xufVxuXG4udm9sdW50ZWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4udm9sdW50ZWVyIGgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnZvbHVudGVlciBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnZvbHVudGVlciBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi52b2x1bnRlZXIgc3BhbiB7XG4gIGNvbG9yOiAjNTkyRDhEO1xufVxuXG4ubmV3dm9sdW50ZWVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICBwYWRkaW5nOiAxM3B4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmJnIHtcbiAgICB0b3A6IDIwJTtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmJnIHtcbiAgICB0b3A6IDIwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/volunteer/volunteer.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/volunteer/volunteer.page.ts ***!
    \*********************************************/

  /*! exports provided: VolunteerPage */

  /***/
  function srcAppVolunteerVolunteerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolunteerPage", function () {
      return VolunteerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VolunteerPage = /*#__PURE__*/function () {
      function VolunteerPage() {
        _classCallCheck(this, VolunteerPage);
      }

      _createClass(VolunteerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VolunteerPage;
    }();

    VolunteerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-volunteer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./volunteer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/volunteer/volunteer.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./volunteer.page.scss */
      "./src/app/volunteer/volunteer.page.scss"))["default"]]
    })], VolunteerPage);
    /***/
  }
}]);
//# sourceMappingURL=volunteer-volunteer-module-es5.js.map
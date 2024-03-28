(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["findpolice-findpolice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/findpolice/findpolice.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/findpolice/findpolice.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button (click)=back() defaultHref='/help' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'police' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\t\t <div class=\"newpolice\">\r\n\t\t <div class=\"segmentarea\">\r\n\t\t <div class=\"btnarea btnareaactive\">\r\n      {{'police' | translate}}\r\n\t\t </div>\r\n\t\t  <div class=\"btnarea\" (click)=\"legal()\">\r\n        {{'legal_menu' | translate}}\r\n\t\t </div>\r\n\t\t </div>\r\n\t\t </div>\r\n    \r\n<div class=\"mainpolice\">\r\n\r\n   <ion-row>\r\n  <ion-col size=\"12\">\r\n<div class=\"policearea\">\r\n<h5>{{'map_move_pin' | translate}}</h5>\r\n<!-- <img src=\"assets/images/googleimg.png\"/>  -->\r\n<div #map id=\"map\"></div>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n      \r\n      </div>\r\n\r\n      \r\n<ion-row>\r\n     <ion-col col-12>\r\n\r\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"listing()\"   >{{'find_polc_stn' | translate}}</ion-button>\r\n  </ion-col>\r\n   </ion-row>\r\n</ion-content>\r\n <!-- <div class=\"bottom\"> -->\r\n\r\n<!-- </div> -->");

/***/ }),

/***/ "./src/app/findpolice/findpolice-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/findpolice/findpolice-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FindpolicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindpolicePageRoutingModule", function() { return FindpolicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _findpolice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findpolice.page */ "./src/app/findpolice/findpolice.page.ts");




const routes = [
    {
        path: '',
        component: _findpolice_page__WEBPACK_IMPORTED_MODULE_3__["FindpolicePage"]
    }
];
let FindpolicePageRoutingModule = class FindpolicePageRoutingModule {
};
FindpolicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FindpolicePageRoutingModule);



/***/ }),

/***/ "./src/app/findpolice/findpolice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/findpolice/findpolice.module.ts ***!
  \*************************************************/
/*! exports provided: FindpolicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindpolicePageModule", function() { return FindpolicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _findpolice_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./findpolice-routing.module */ "./src/app/findpolice/findpolice-routing.module.ts");
/* harmony import */ var _findpolice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./findpolice.page */ "./src/app/findpolice/findpolice.page.ts");








let FindpolicePageModule = class FindpolicePageModule {
};
FindpolicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _findpolice_routing_module__WEBPACK_IMPORTED_MODULE_6__["FindpolicePageRoutingModule"]
        ],
        declarations: [_findpolice_page__WEBPACK_IMPORTED_MODULE_7__["FindpolicePage"]]
    })
], FindpolicePageModule);



/***/ }),

/***/ "./src/app/findpolice/findpolice.page.scss":
/*!*************************************************!*\
  !*** ./src/app/findpolice/findpolice.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 60%;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.policearea {\n  width: 100%;\n  height: auto;\n  padding: 0 5px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 62px;\n}\n\n.policearea p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.policearea h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #2F1153;\n  float: left;\n  margin-bottom: 30px;\n}\n\n.policearea h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 35px auto 35px;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newpolice ion-segment {\n  border-radius: 4px;\n  margin-top: 25px;\n}\n\n.newpolice .segmentarea {\n  width: 100%;\n  background-color: #fcfafd;\n  padding: 1px 2px;\n  float: left;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.mainpolice {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.newpolice {\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  position: fixed;\n  z-index: 9;\n}\n\n.newpolice .btnarea {\n  --background: none;\n  --background-checked: none;\n  --background-hover: none;\n  --background-hover-opacity: 0;\n  --background-focused: none;\n  --background-focused-opacity: 0;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);\n  --border-style: solid;\n  --indicator-box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);\n  --indicator-color: var(--ion-color-step-350, var(--ion-background-color, #fff));\n  --indicator-height: 100%;\n  --indicator-transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --transition: 100ms all linear;\n  --padding-top: 0;\n  --padding-end: 13px;\n  --padding-bottom: 0;\n  --padding-start: 13px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  flex-basis: 0px;\n  flex-direction: row;\n  min-width: 70px;\n  min-height: 28px;\n  transform: translate3d(0px, 0px, 0px);\n  font-size: 13px;\n  font-weight: 450;\n  line-height: 35px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  color: #592D8D;\n}\n\n.newpolice .btnareaactive {\n  background-color: white;\n  border-radius: 4px;\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: auto;\n  color: var(--color);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-kerning: none;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-decoration: none;\n  color: #592D8D;\n  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.17);\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9maW5kcG9saWNlL2ZpbmRwb2xpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9maW5kcG9saWNlL2ZpbmRwb2xpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBRUYsa0JBQUE7QUNBQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBRUEsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDUEo7O0FEU0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUEE7O0FEVUE7RUFDQSxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUkE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNiQTs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURrQkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0FDZko7O0FEaUJBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFFRCx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbEJBOztBRHFCQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FDbkJBOztBRHNCQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNwQkE7O0FEdUJBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDckJBOztBRHdCQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3RCQTs7QUR5QkE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDdkJBOztBRDBCQTtFQUVBLGtCQUFBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4REFBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7RUFDQSwrRUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0VBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQyxVQUFBO0VBQ0QsV0FBQTtFQUNILGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN4QkQ7O0FEMEJBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDSixjQUFBO0VBR0EsZ0RBQUE7QUN4QkE7O0FEMEJBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN2QkEiLCJmaWxlIjoic3JjL2FwcC9maW5kcG9saWNlL2ZpbmRwb2xpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxuXHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLnBvbGljZWFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDVweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6NjJweDtcclxufVxyXG5cclxuLnBvbGljZWFyZWEgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5wb2xpY2VhcmVhIGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIycHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbi1ib3R0b206MzBweDtcclxufVxyXG5cclxuXHJcbi5wb2xpY2VhcmVhIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmxpbmUtaGVpZ2h0OjIycHg7XHJcbm1hcmdpbi1ib3R0b206NnB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcblxyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxubWFyZ2luOjM1cHggYXV0byAzNXB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXItdG9wOm5vbmU7XHJcbmJvcmRlci1sZWZ0Om5vbmU7XHJcbmJvcmRlci1yaWdodDpub25lO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEOEVCO1xyXG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHRcclxuXHJcbi5uZXdwb2xpY2UgaW9uLXNlZ21lbnRcclxue1xyXG5ib3JkZXItcmFkaXVzOjRweDtcclxubWFyZ2luLXRvcDoyNXB4O1xyXG59XHJcblxyXG4ubmV3cG9saWNlIC5zZWdtZW50YXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyNTAsIDI1MywgMSk7XHJcbnBhZGRpbmc6MXB4IDJweDtcclxuZmxvYXQ6bGVmdDtcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbm1hcmdpbi10b3A6OHB4O1xyXG59XHJcblxyXG5cdC5tYWlucG9saWNlXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG59XHJcblxyXG4ubmV3cG9saWNlXHJcbntcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZDojZmZmO1xyXG5wYWRkaW5nOjEwcHggMjBweDtcclxucG9zaXRpb246Zml4ZWQ7XHJcbnotaW5kZXg6OTtcclxufVxyXG5cclxuLm5ld3BvbGljZSAuYnRuYXJlYVxyXG57XHJcbi0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjYwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtYmFzaXM6IDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuXHQgICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjojNTkyRDhEO1xyXG59XHJcbi5uZXdwb2xpY2UgLmJ0bmFyZWFhY3RpdmVcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG5ib3JkZXItcmFkaXVzOjRweDtcclxuLS1jb2xvcjogaW5pdGlhbDtcclxuICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tY29sb3IpO1xyXG4gICAgLS1jb2xvci1kaXNhYmxlZDogdmFyKC0tY29sb3IpO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1rZXJuaW5nOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsMCwwLDAuMTcpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxuYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsMCwwLDAuMTcpO1xyXG59XHJcbiNtYXB7XHJcbndpZHRoOjEwMCU7XHJcbm1pbi1oZWlnaHQ6IDQxNXB4O1xyXG5oZWlnaHQ6NjAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuIiwiI21hcCB7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wb2xpY2VhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiA2MnB4O1xufVxuXG4ucG9saWNlYXJlYSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnBvbGljZWFyZWEgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzJGMTE1MztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5wb2xpY2VhcmVhIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMzVweCBhdXRvIDM1cHg7XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFEOEVCO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubmV3cG9saWNlIGlvbi1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubmV3cG9saWNlIC5zZWdtZW50YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZkO1xuICBwYWRkaW5nOiAxcHggMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYWlucG9saWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3cG9saWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5O1xufVxuXG4ubmV3cG9saWNlIC5idG5hcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogMTAwJTtcbiAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcbiAgLS10cmFuc2l0aW9uOiAxMDBtcyBhbGwgbGluZWFyO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTkyRDhEO1xufVxuXG4ubmV3cG9saWNlIC5idG5hcmVhYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1jb2xvcjogaW5pdGlhbDtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0tY29sb3IpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWNvbG9yKTtcbiAgLS1jb2xvci1kaXNhYmxlZDogdmFyKC0tY29sb3IpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1rZXJuaW5nOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MTVweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/findpolice/findpolice.page.ts":
/*!***********************************************!*\
  !*** ./src/app/findpolice/findpolice.page.ts ***!
  \***********************************************/
/*! exports provided: FindpolicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindpolicePage", function() { return FindpolicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let FindpolicePage = class FindpolicePage {
    constructor(navController, route, router) {
        this.navController = navController;
        this.route = route;
        this.router = router;
        this.infoWindows = [];
        this.radius = 3000;
        this.markers = [
            { 'latitude': '', 'longitude': '', 'title': '', 'rating': '', 'address': '' }
        ];
        this.markers1 = [
            { 'latitude': '', 'longitude': '', 'title': '', 'rating': '', 'address': '' }
        ];
        console.log(google);
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.lat = this.router.getCurrentNavigation().extras.state.lat;
                this.longi = this.router.getCurrentNavigation().extras.state.longi;
                this.address = this.router.getCurrentNavigation().extras.state.address;
                var data = { 'latitude': this.lat, 'longitude': this.longi, 'title': this.address };
                this.markers.push(data);
                console.log(this.markers);
                console.log(this.location);
                console.log(this.lat);
                console.log(this.longi);
                console.log(this.address);
            }
        });
    }
    back() {
        localStorage.setItem('lat_police', this.lat);
        localStorage.setItem('longi_police', this.longi);
        localStorage.setItem('address_police', this.address);
        console.log(this.lat);
        console.log(this.longi);
        console.log(this.address);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.showMap();
    }
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                draggable: true,
            });
            mapMarker.setMap(this.map);
            google.maps.event.addListener(mapMarker, 'dragend', function () {
                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong   " + markerlatlong);
                console.log("lat    " + mapMarker.getPosition().lat());
                console.log("long   " + mapMarker.getPosition().lng());
                //this.placeMarkerAndPanTo(e.latLng, this.map);
                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng());
                localStorage.setItem('lat_police', lat);
                localStorage.setItem('longi_police', longi);
                //code for getting formatted address from the selected latitude and longitude 
                var geocoder = new google.maps.Geocoder();
                const latlng = {
                    lat: parseFloat(lat),
                    lng: parseFloat(longi)
                };
                geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            this.title = results[0].formatted_address;
                            localStorage.setItem('address_police', this.title);
                            console.log(this.title);
                            //this.markers = [];
                            var title = localStorage.getItem('address_police');
                            var lat1 = localStorage.getItem('lat_police');
                            var longi1 = localStorage.getItem('longi_police');
                            console.log(title);
                            let position = new google.maps.LatLng(lat1, longi1);
                            mapMarker.position = position,
                                mapMarker.title = title,
                                mapMarker.latitude = lat1,
                                mapMarker.longitude = longi1,
                                mapMarker.animation = 'DROP',
                                mapMarker.draggable = true,
                                mapMarker.setMap(this.map);
                            //var self = this;
                            this.addInfoWindowToMarker(mapMarker);
                            var data = { 'latitude': lat1, 'longitude': longi1, 'title': title };
                            this.markers = data;
                            console.log('3', this.markers);
                        }
                        else {
                            window.alert("No results found");
                        }
                    }
                    else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });
            }.bind(this));
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        let infoWindowContent = '<div id="content">' +
            '<h5 id="firstHeading" class"firstHeading">' + marker.title + '</h5>' +
            '<p>Latitude: ' + marker.latitude + '</p>' +
            '<p>Longitude: ' + marker.longitude + '</p>' +
            '</div>';
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    placeMarkerAndPanTo(latLng, map) {
        new google.maps.Marker({
            position: latLng,
            map: map
        });
        map.panTo(latLng);
    }
    showMap() {
        console.log('hi');
        console.log(this.lat);
        console.log(this.longi);
        const location = new google.maps.LatLng(this.lat, this.longi);
        const options = {
            center: location,
            zoom: 15,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false,
            gestureHandling: 'cooperative',
        };
        console.log(options);
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        // this.map.addListener('click', (e) => {
        //   console.log('clicked',e)
        //   this.placeMarkerAndPanTo(e.latLng, this.map);
        //   var lat= JSON.stringify(e.latLng.lat());
        //   var longi = JSON.stringify(e.latLng.lng());
        //   //code for getting formatted address from the selected latitude and longitude 
        //   var geocoder = new google.maps.Geocoder();
        //   const latlng = {
        //     lat: parseFloat(lat),
        //     lng: parseFloat(longi)
        //   };
        //   geocoder.geocode(
        //     { location: latlng },
        //     (
        //       results,
        //       status
        //     ) => {
        //       if (status === "OK") {
        //         if (results[0]) {
        //          this.title =  results[0].formatted_address;
        //          localStorage.setItem('title',this.title)
        //          console.log(this.title)
        //         } else {
        //           window.alert("No results found");
        //         }
        //       } else {
        //         window.alert("Geocoder failed due to: " + status);
        //       }
        //     }
        //   );
        //   //this.markers = [];
        //   var title = localStorage.getItem('title')
        //   console.log(title)
        //   var data = {'latitude' : lat, 'longitude' : longi, 'title' : title}
        //   this.markers.push(data);
        //   console.log('3',this.markers)
        // this.addMarkersToMap(this.markers);
        // });
        console.log('3', this.markers);
        this.addMarkersToMap(this.markers);
    }
    listing() {
        console.log('4', this.markers1);
        var title = localStorage.getItem('address_police');
        var lat1 = localStorage.getItem('lat_police');
        var longi1 = localStorage.getItem('longi_police');
        var pyrmont = new google.maps.LatLng(lat1, longi1);
        var request = {
            location: pyrmont,
            radius: this.radius,
            type: ['police'],
            rankby: 'distance',
            keyword: 'police'
        };
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, callback => {
            this.markers1 = callback;
            if (this.markers1.length < 3) {
                this.radius = this.radius + 2000;
                this.listing();
                return;
            }
            for (var i = 0; i < this.markers1.length; i++) {
                var j = i + 1;
                console.log(this.markers1[i].place_id);
                // var req = {
                //   placeId:this.markers[i].place_id
                // }
                // service.getDetails(req,callback =>{
                //   console.log(callback)
                //   this.markers[i].
                // },err=>{
                // })
                this.markers1[i].imgsrc = 'assets/images/icons/numberlisting/number' + j + '.png';
                this.markers1[i].pinicon = 'assets/images/icons/markericons/number' + j + '.png';
                console.log(this.markers1);
                //createMarker(results[i]);
            }
            console.log('3', this.markers1);
            this.pushto();
        }, err => {
        });
        //this.navController.navigateForward(`/policelisting`);
    }
    pushto() {
        var title = localStorage.getItem('address_police');
        var lat1 = localStorage.getItem('lat_police');
        var longi1 = localStorage.getItem('longi_police');
        let navigationExtras = {
            state: {
                data: JSON.stringify(this.markers1),
                lat: lat1,
                longi: longi1,
                address: title
            }
        };
        this.router.navigate(['/policelisting'], navigationExtras);
    }
    legal() {
        this.navController.navigateForward(`/legalresources`);
    }
};
FindpolicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], FindpolicePage.prototype, "mapRef", void 0);
FindpolicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-findpolice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./findpolice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/findpolice/findpolice.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./findpolice.page.scss */ "./src/app/findpolice/findpolice.page.scss")).default]
    })
], FindpolicePage);



/***/ })

}]);
//# sourceMappingURL=findpolice-findpolice-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["police-police-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/police/police.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/police/police.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/help' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'police' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n<ion-content>\r\n <div class=\"newpolice\">\r\n\t <div class=\"segmentarea\">\r\n\t\t <div class=\"btnarea btnareaactive\">\r\n      {{'police' | translate}}\r\n\t\t </div>\r\n\t\t  <div class=\"btnarea\" (click)=\"legal()\">\r\n        {{'legal_menu' | translate}}\r\n\t\t </div>\r\n\t\t </div>\r\n\t\t </div>\r\n<div class=\"mainpolice\">\r\n  <form [formGroup]=\"policeForm\">\r\n   <ion-row >\r\n         <ion-col size=\"12\">\r\n   <div class=\"policearea\">\r\n   <h4>{{'map_police_find_loc' | translate}}</h4>\r\n    <ion-list>\r\n       <ion-item>\r\n        <ion-input formControlName=\"location\" id=\"autocomplete2\"  placeholder=\"{{'Enter_location' | translate}}\" type=\"text\" ></ion-input>\r\n       </ion-item>\r\n       <p class=\"error\" *ngIf=\" errorControl.location.errors?.required && submitAttempt\">{{'map_police_find_loc_error' | translate}}</p>\r\n   </ion-list>\r\n\r\n      </div>\r\n       </ion-col>\r\n      </ion-row>\r\n         <ion-row>\r\n        <ion-col col-12>\r\n   \r\n   <ion-button expand=\"full\" shape=\"round\"  class=\"policebtn\" (click)= \"getlatlong()\" >{{'next' | translate}}</ion-button>\r\n     </ion-col>\r\n      </ion-row>\r\n\r\n    </form>\r\n      </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/police/police-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/police/police-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PolicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicePageRoutingModule", function() { return PolicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _police_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./police.page */ "./src/app/police/police.page.ts");




const routes = [
    {
        path: '',
        component: _police_page__WEBPACK_IMPORTED_MODULE_3__["PolicePage"]
    }
];
let PolicePageRoutingModule = class PolicePageRoutingModule {
};
PolicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicePageRoutingModule);



/***/ }),

/***/ "./src/app/police/police.module.ts":
/*!*****************************************!*\
  !*** ./src/app/police/police.module.ts ***!
  \*****************************************/
/*! exports provided: PolicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicePageModule", function() { return PolicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _police_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./police-routing.module */ "./src/app/police/police-routing.module.ts");
/* harmony import */ var _police_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./police.page */ "./src/app/police/police.page.ts");








let PolicePageModule = class PolicePageModule {
};
PolicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _police_routing_module__WEBPACK_IMPORTED_MODULE_6__["PolicePageRoutingModule"]
        ],
        declarations: [_police_page__WEBPACK_IMPORTED_MODULE_7__["PolicePage"]]
    })
], PolicePageModule);



/***/ }),

/***/ "./src/app/police/police.page.scss":
/*!*****************************************!*\
  !*** ./src/app/police/police.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#locationField,\n#controls {\n  position: relative;\n  width: 480px;\n}\n\n#autocomplete {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 99%;\n}\n\n.label {\n  text-align: right;\n  font-weight: bold;\n  width: 100px;\n  color: #303030;\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n}\n\n#address {\n  border: 1px solid #000090;\n  background-color: #f0f9ff;\n  width: 480px;\n  padding-right: 2px;\n}\n\n#address td {\n  font-size: 10pt;\n}\n\n.field {\n  width: 99%;\n}\n\n.slimField {\n  width: 80px;\n}\n\n.wideField {\n  width: 200px;\n}\n\n#locationField {\n  height: 20px;\n  margin-bottom: 2px;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.newpolice {\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  position: fixed;\n  z-index: 9;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainpolice {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.policearea {\n  width: 100%;\n  height: auto;\n  padding: 0 5px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 55%;\n}\n\n.policearea p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.policearea h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.policebtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 80px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.policearea ion-item {\n  --padding-start: 0;\n  margin-bottom: 15px;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.policearea ion-input {\n  border: none;\n}\n\n.newpolice ion-segment {\n  border-radius: 4px;\n  margin-top: 25px;\n}\n\n.newpolice .segmentarea {\n  width: 100%;\n  background-color: #fcfafd;\n  padding: 1px 2px;\n  float: left;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.newpolice .btnarea {\n  --background: none;\n  --background-checked: none;\n  --background-hover: none;\n  --background-hover-opacity: 0;\n  --background-focused: none;\n  --background-focused-opacity: 0;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);\n  --border-style: solid;\n  --indicator-box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);\n  --indicator-color: var(--ion-color-step-350, var(--ion-background-color, #fff));\n  --indicator-height: 100%;\n  --indicator-transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --transition: 100ms all linear;\n  --padding-top: 0;\n  --padding-end: 13px;\n  --padding-bottom: 0;\n  --padding-start: 13px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  flex-basis: 0px;\n  flex-direction: row;\n  min-width: 70px;\n  min-height: 28px;\n  transform: translate3d(0px, 0px, 0px);\n  font-size: 13px;\n  font-weight: 450;\n  line-height: 35px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  color: #592D8D;\n}\n\n.newpolice .btnareaactive {\n  background-color: white;\n  border-radius: 4px;\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: auto;\n  color: var(--color);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-kerning: none;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-decoration: none;\n  color: #592D8D;\n  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.17);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9wb2xpY2UvcG9saWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9saWNlL3BvbGljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRElBO0VBRUEsa0JBQUE7QUNGQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FES0E7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDSEE7O0FETUE7RUFJQSw4Q0FBQTtBQ0pBOztBRFFBO0VBRUEsdUJBQUE7QUNOQTs7QURTQTtFQUVBLHFCQUFBO0FDUEE7O0FEU0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1BKOztBRFNBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBQ0EsY0FBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1JBOztBRFdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1pBOztBRGVBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDYkE7O0FEZ0JBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQ2JKOztBRGVBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNmQTs7QURrQkE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQ2hCQTs7QURtQkE7RUFFQSxZQUFBO0FDakJBOztBRG9CQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNsQkE7O0FEcUJBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbkJBOztBRHNCQTtFQUVBLGtCQUFBO0VBQ0ksMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4REFBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7RUFDQSwrRUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0VBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQyxVQUFBO0VBQ0QsV0FBQTtFQUNILGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNwQkQ7O0FEc0JBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDSixjQUFBO0VBR0EsZ0RBQUE7QUNwQkEiLCJmaWxlIjoic3JjL2FwcC9wb2xpY2UvcG9saWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2NhdGlvbkZpZWxkLFxyXG4jY29udHJvbHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDgwcHg7XHJcbn1cclxuXHJcbiNhdXRvY29tcGxldGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDk5JTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgY29sb3I6ICMzMDMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNhZGRyZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDkwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxufVxyXG5cclxuI2FkZHJlc3MgdGQge1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICB3aWR0aDogOTklO1xyXG59XHJcblxyXG4uc2xpbUZpZWxkIHtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLndpZGVGaWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jbG9jYXRpb25GaWVsZCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLm5ld3BvbGljZVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQ6I2ZmZjtcclxucGFkZGluZzoxMHB4IDIwcHg7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG56LWluZGV4Ojk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm1haW5wb2xpY2Vcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuXHJcbi5wb2xpY2VhcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCA1cHg7XHJcblxyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcblxyXG5tYXJnaW4tdG9wOjU1JTtcclxufVxyXG5cclxuLnBvbGljZWFyZWEgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5wb2xpY2VhcmVhIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmxpbmUtaGVpZ2h0OjIycHg7XHJcbm1hcmdpbi1ib3R0b206NnB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLnBvbGljZWJ0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDoxMDAlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxubWFyZ2luOjgwcHggYXV0byAyNXB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5wb2xpY2VhcmVhIGlvbi1pdGVtXHJcbntcclxuLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXItdG9wOm5vbmU7XHJcbmJvcmRlci1sZWZ0Om5vbmU7XHJcbmJvcmRlci1yaWdodDpub25lO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRTFEOEVCO1xyXG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHRcclxuXHJcbi5wb2xpY2VhcmVhIGlvbi1pbnB1dFxyXG57XHJcbmJvcmRlcjpub25lO1xyXG59XHJcblxyXG4ubmV3cG9saWNlIGlvbi1zZWdtZW50XHJcbntcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbm1hcmdpbi10b3A6MjVweDtcclxufVxyXG5cclxuLm5ld3BvbGljZSAuc2VnbWVudGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjUwLCAyNTMsIDEpO1xyXG5wYWRkaW5nOjFweCAycHg7XHJcbmZsb2F0OmxlZnQ7XHJcbmJvcmRlci1yYWRpdXM6NHB4O1xyXG5tYXJnaW4tdG9wOjhweDtcclxufVxyXG5cclxuLm5ld3BvbGljZSAuYnRuYXJlYVxyXG57XHJcbi0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjYwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtYmFzaXM6IDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuXHQgICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjojNTkyRDhEO1xyXG59XHJcbi5uZXdwb2xpY2UgLmJ0bmFyZWFhY3RpdmVcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG5ib3JkZXItcmFkaXVzOjRweDtcclxuLS1jb2xvcjogaW5pdGlhbDtcclxuICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tY29sb3IpO1xyXG4gICAgLS1jb2xvci1kaXNhYmxlZDogdmFyKC0tY29sb3IpO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1rZXJuaW5nOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsMCwwLDAuMTcpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxuYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsMCwwLDAuMTcpO1xyXG59IiwiI2xvY2F0aW9uRmllbGQsXG4jY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0ODBweDtcbn1cblxuI2F1dG9jb21wbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDk5JTtcbn1cblxuLmxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI2FkZHJlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDkwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOWZmO1xuICB3aWR0aDogNDgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuI2FkZHJlc3MgdGQge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5maWVsZCB7XG4gIHdpZHRoOiA5OSU7XG59XG5cbi5zbGltRmllbGQge1xuICB3aWR0aDogODBweDtcbn1cblxuLndpZGVGaWVsZCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuI2xvY2F0aW9uRmllbGQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5ld3BvbGljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm1haW5wb2xpY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wb2xpY2VhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiA1NSU7XG59XG5cbi5wb2xpY2VhcmVhIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucG9saWNlYXJlYSBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLnBvbGljZWJ0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gMjVweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvbGljZWFyZWEgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5wb2xpY2VhcmVhIGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5ld3BvbGljZSBpb24tc2VnbWVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5ld3BvbGljZSAuc2VnbWVudGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmZDtcbiAgcGFkZGluZzogMXB4IDJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubmV3cG9saWNlIC5idG5hcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogMTAwJTtcbiAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcbiAgLS10cmFuc2l0aW9uOiAxMDBtcyBhbGwgbGluZWFyO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTkyRDhEO1xufVxuXG4ubmV3cG9saWNlIC5idG5hcmVhYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1jb2xvcjogaW5pdGlhbDtcbiAgLS1jb2xvci1ob3ZlcjogdmFyKC0tY29sb3IpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWNvbG9yKTtcbiAgLS1jb2xvci1kaXNhYmxlZDogdmFyKC0tY29sb3IpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1rZXJuaW5nOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/police/police.page.ts":
/*!***************************************!*\
  !*** ./src/app/police/police.page.ts ***!
  \***************************************/
/*! exports provided: PolicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicePage", function() { return PolicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let PolicePage = class PolicePage {
    constructor(navController, router, formBuilder, httpClient) {
        this.navController = navController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.submitAttempt = false;
        this.autoaddress = [];
        this.autoadd1 = [];
        this.proceed = false;
        this.policeForm = formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.initAutocomplete();
    }
    get errorControl() {
        return this.policeForm.controls;
    }
    getlatlong() {
        console.log(this.policeForm.value.location);
        var geocoder = new google.maps.Geocoder();
        var city, hascity, address = this.policeForm.value.location;
        geocoder.geocode({ 'address': address }, results => {
            console.log(results);
            if (results[0].formatted_address) {
                console.log(results);
                this.address = JSON.stringify(results[0].formatted_address);
                this.lat = JSON.stringify(results[0].geometry.location.lat());
                this.longi = JSON.stringify(results[0].geometry.location.lng());
                this.submitAttempt = true;
                if (!this.policeForm.valid) {
                    localStorage.setItem('lat_police', '');
                    localStorage.setItem('longi_police', '');
                    localStorage.setItem('address_police', '');
                }
                else {
                    let navigationExtras = {
                        state: {
                            lat: this.lat,
                            longi: this.longi,
                            address: this.address
                        }
                    };
                    this.router.navigate(['/findpolice'], navigationExtras);
                }
                //this.locations = new google.maps.LatLng(this.lat, this.longi);
                console.log(this.lat);
                console.log(this.longi);
                localStorage.setItem('lat_police', this.lat);
                localStorage.setItem('longi_police', this.longi);
                localStorage.setItem('address_police', this.address);
            }
        });
    }
    find() {
        this.lat = localStorage.getItem('lat_police');
        this.longi = localStorage.getItem('longi_police');
        this.address = localStorage.getItem('address_police');
        console.log(this.lat);
        console.log(this.longi);
        console.log(this.address);
        this.submitAttempt = true;
        if (!this.policeForm.valid) {
            localStorage.setItem('lat_police', '');
            localStorage.setItem('longi_police', '');
            localStorage.setItem('address_police', '');
        }
        else {
            let navigationExtras = {
                state: {
                    lat: this.lat,
                    longi: this.longi,
                    address: this.address
                }
            };
            this.router.navigate(['/findpolice'], navigationExtras);
        }
    }
    //autocomplete code
    initAutocomplete() {
        // Create the autocomplete object, restricting the search predictions to
        // geographical location types.
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete2').getElementsByTagName('input')[0]);
        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components.
        this.autocomplete.setFields(["address_component"]);
        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        this.autocomplete.addListener("place_changed", fillInAddress => {
            this.autoaddress = [];
            this.autocomplete.getPlace();
            console.log(this.autocomplete.getPlace());
            var autoadd = this.autocomplete.getPlace();
            this.autoadd1 = autoadd.address_components;
            console.log(this.autoadd1);
            for (var i = 0; i < this.autoadd1.length; i++) {
                this.autoaddress.push(this.autoadd1[i].long_name);
            }
            // this.autoaddress = autoadd.long_name.join(',')
            console.log(this.autoaddress);
            var final_result = this.autoaddress.join(',');
            console.log(final_result);
            console.log(this.autoaddress);
            //this.getlatlong(final_result)
            this.policeForm.controls['location'].setValue(final_result);
        });
    }
    legal() {
        this.navController.navigateForward(`/legalresources`);
    }
};
PolicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PolicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-police',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./police.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/police/police.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./police.page.scss */ "./src/app/police/police.page.scss")).default]
    })
], PolicePage);



/***/ })

}]);
//# sourceMappingURL=police-police-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportfiledtwelve-reportfiledtwelve-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwelve/reportfiledtwelve.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwelve/reportfiledtwelve.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" translucent>\r\n<div class=\"header-background\"></div>\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/reportfiledeleven' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n   </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"newbg\">\r\n<div class=\"mainareain\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"newtext\">\r\n<h4>You’re doing great. Just one more step to go!</h4>\r\n<h5>Please move the pin to the exact location:</h5>\r\n<div #map id=\"map\"></div>\r\n   <ion-item>\r\n    <ion-label>This information is true to my knowledge </ion-label>\r\n <ion-checkbox  slot=\"start\" (ionChange) = \"knowledge($event)\"></ion-checkbox>\r\n  </ion-item>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n <div class=\"bottom\">\r\n<ion-row>\r\n     <ion-col col-12>\r\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"preframing()\">SUBMIT</ion-button>\r\n  </ion-col>\r\n   </ion-row>\r\n</div>\r\n   </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/reportfiledtwelve/reportfiledtwelve-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/reportfiledtwelve/reportfiledtwelve-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReportfiledtwelvePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledtwelvePageRoutingModule", function() { return ReportfiledtwelvePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportfiledtwelve.page */ "./src/app/reportfiledtwelve/reportfiledtwelve.page.ts");




const routes = [
    {
        path: '',
        component: _reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_3__["ReportfiledtwelvePage"]
    }
];
let ReportfiledtwelvePageRoutingModule = class ReportfiledtwelvePageRoutingModule {
};
ReportfiledtwelvePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportfiledtwelvePageRoutingModule);



/***/ }),

/***/ "./src/app/reportfiledtwelve/reportfiledtwelve.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/reportfiledtwelve/reportfiledtwelve.module.ts ***!
  \***************************************************************/
/*! exports provided: ReportfiledtwelvePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledtwelvePageModule", function() { return ReportfiledtwelvePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reportfiledtwelve_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportfiledtwelve-routing.module */ "./src/app/reportfiledtwelve/reportfiledtwelve-routing.module.ts");
/* harmony import */ var _reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportfiledtwelve.page */ "./src/app/reportfiledtwelve/reportfiledtwelve.page.ts");







let ReportfiledtwelvePageModule = class ReportfiledtwelvePageModule {
};
ReportfiledtwelvePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reportfiledtwelve_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportfiledtwelvePageRoutingModule"]
        ],
        declarations: [_reportfiledtwelve_page__WEBPACK_IMPORTED_MODULE_6__["ReportfiledtwelvePage"]]
    })
], ReportfiledtwelvePageModule);



/***/ }),

/***/ "./src/app/reportfiledtwelve/reportfiledtwelve.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/reportfiledtwelve/reportfiledtwelve.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 60%;\n}\n\n.newbg {\n  --background: -moz-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(239,253,255,1)), color-stop(42%, rgba(239,253,255,1)), color-stop(64%, rgba(244,232,253,1)), color-stop(100%, rgba(238,221,252,1)));\n  --background: -webkit-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -o-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: -ms-linear-gradient(-45deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  --background: linear-gradient(135deg, rgba(239,253,255,1) 0%, rgba(239,253,255,1) 42%, rgba(244,232,253,1) 64%, rgba(238,221,252,1) 100%);\n  height: 100%;\n  position: fixed;\n}\n\n.newtext ion-label {\n  white-space: inherit;\n}\n\n.button-native::after {\n  content: none !important;\n}\n\nion-toolbar {\n  --background: transparent !important;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  -mos-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\nion-radio {\n  --color-checked: #2ED35A;\n}\n\n.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  width: 43%;\n  height: 60%;\n  border-width: 0px 3px 3px 0px;\n  border-style: solid;\n}\n\nion-radio .radio-inner {\n  width: 43%;\n  height: 60%;\n}\n\n.button-native::after {\n  content: inherit;\n}\n\n.bottom {\n  width: 100%;\n  position: relative;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 50px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 20px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 38px;\n}\n\nion-checkbox {\n  --border-radius:0;\n  --background-checked: #fff;\n  --checkmark-color: #2ED35A;\n  --checkmark-width: 2;\n  --border-color-checked: #ddd;\n  -webkit-margin-end: 12px;\n          margin-inline-end: 12px;\n  margin-top: 15px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 45px;\n  --box-shadow:none;\n  text-align: center;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list-header {\n  -webkit-padding-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n          padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 0px);\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\nion-item .item-inner {\n  --inner-padding-end: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  height: 40px;\n  --padding-start: 8px !important;\n}\n\n.label-stacked {\n  margin-bottom: 10px;\n  color: #292020;\n  font-size: 14px;\n}\n\nion-list-header .newlabel {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.checkbox-icon {\n  --border-radius: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9yZXBvcnRmaWxlZHR3ZWx2ZS9yZXBvcnRmaWxlZHR3ZWx2ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlcG9ydGZpbGVkdHdlbHZlL3JlcG9ydGZpbGVkdHdlbHZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUVBLDhJQUFBO0VBQ0EsOE1BQUE7RUFDQSxpSkFBQTtFQUNBLDRJQUFBO0VBQ0EsNklBQUE7RUFDQSx5SUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUE7O0FES0E7RUFFQSxvQkFBQTtBQ0hBOztBRE1BO0VBRUEsd0JBQUE7QUNKQTs7QURPQTtFQUVFLG9DQUFBO0FDTEY7O0FEUUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEUUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFFBO0VBQ0EsY0FBQTtBQ0xBOztBRFFBO0VBQ0EsZ0JBQUE7QUNMQTs7QURPQTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0YsK0NBQUE7RUFDRSwwQ0FBQTtBQ0pKOztBRE1FO0VBR0Usd0JBQUE7QUNMSjs7QURPQTtFQUNJLHdCQUFBO0VBQ0gsVUFBQTtFQUNHLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDSko7O0FETUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE9BO0VBRUEsZ0JBQUE7QUNMQTs7QURRQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNOQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSQTs7QURXQTtFQUVBLGNBQUE7QUNUQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWkE7O0FEZUU7RUFFQyxpQkFBQTtFQUNBLDBCQUFBO0VBQ0YsMEJBQUE7RUFDQSxvQkFBQTtFQUNHLDRCQUFBO0VBQ0Msd0JBQUE7VUFBQSx1QkFBQTtFQUNILGdCQUFBO0FDYkY7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNmQTs7QURrQkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNmSjs7QURpQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUVELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNqQkE7O0FEbUJBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNoQkE7O0FEa0JBO0VBRUEsdUJBQUE7QUNoQkE7O0FEbUJBO0VBRUEsaUVBQUE7VUFBQSxnRUFBQTtBQ2pCQTs7QURvQkE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQyxzQkFBQTtFQUNELHdCQUFBO0VBQ0EscUNBQUE7QUNsQkE7O0FEcUJBO0VBQ0Msc0JBQUE7QUNsQkQ7O0FEcUJBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ25CQTs7QURzQkE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDcEJBOztBRHVCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNyQkE7O0FEdUJBO0VBQ0EscUJBQUE7QUNwQkEiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRmaWxlZHR3ZWx2ZS9yZXBvcnRmaWxlZHR3ZWx2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLm5ld2JnXHJcbntcclxuLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcclxuLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkpLCBjb2xvci1zdG9wKDQyJSwgcmdiYSgyMzksMjUzLDI1NSwxKSksIGNvbG9yLXN0b3AoNjQlLCByZ2JhKDI0NCwyMzIsMjUzLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDIzOCwyMjEsMjUyLDEpKSk7XHJcbi0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xyXG4tLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XHJcbi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xyXG5oZWlnaHQ6MTAwJTtcclxucG9zaXRpb246Zml4ZWQ7XHJcblxyXG59XHJcblxyXG5cclxuLm5ld3RleHQgaW9uLWxhYmVsXHJcbntcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyXHJcbntcclxuY29udGVudDpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyXHJcbntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG59XHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG4uaGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcblx0IC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG59XHJcbiAgaW9uLXJhZGlvXHJcbiAge1xyXG4gXHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyRUQzNUE7XHJcbiAgfVxyXG4ucmFkaW8tY2hlY2tlZCAucmFkaW8taW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDNweCAzcHggMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5pb24tcmFkaW8gLnJhZGlvLWlubmVyIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbmF0aXZlOjphZnRlclxyXG57XHJcbmNvbnRlbnQ6aW5oZXJpdDtcclxufVxyXG5cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ubWFpbmFyZWFpblxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjUwcHg7XHJcbn1cclxuXHJcbi5yZWRcclxue1xyXG5jb2xvcjojRjcxMzEzO1xyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MTlweDtcclxuZm9udC1zaXplOjE0cHg7XHJcbmNvbG9yOiM1RDU2NTY7XHJcbm1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzU5MkQ4RDtcclxubGluZS1oZWlnaHQ6MjhweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbi1ib3R0b206IDM4cHg7XHJcbn1cclxuXHJcbiAgaW9uLWNoZWNrYm94XHJcbiAge1xyXG4gICAtLWJvcmRlci1yYWRpdXM6MDtcclxuICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XHJcbiAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcclxuIC0tY2hlY2ttYXJrLXdpZHRoOiAyO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2RkZDtcclxuXHQgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEycHg7XHJcblx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLm5ld3RleHQgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjJweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MThweDtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIFxyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0byA0NXB4O1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuI21hcHtcclxud2lkdGg6MTAwJTtcclxubWluLWhlaWdodDogNDE1cHg7XHJcbmhlaWdodDo2MCU7XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG59XHJcbmlvbi1saXN0XHJcbntcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciBcclxue1xyXG5wYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkgKyAwcHgpO1xyXG59XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDowO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6bm9uZTtcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gLml0ZW0taW5uZXJ7XHJcbiAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG59XHJcblxyXG5pb24taW5wdXRcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5oZWlnaHQ6NDBweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWRcclxue1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIgLm5ld2xhYmVsXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbn1cclxuLmNoZWNrYm94LWljb24ge1xyXG4tLWJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iLCIjbWFwIHtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5uZXdiZyB7XG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpIDQyJSwgcmdiYSgyNDQsMjMyLDI1MywxKSA2NCUsIHJnYmEoMjM4LDIyMSwyNTIsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDIzOSwyNTMsMjU1LDEpKSwgY29sb3Itc3RvcCg0MiUsIHJnYmEoMjM5LDI1MywyNTUsMSkpLCBjb2xvci1zdG9wKDY0JSwgcmdiYSgyNDQsMjMyLDI1MywxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMzgsMjIxLDI1MiwxKSkpO1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyMzksMjUzLDI1NSwxKSAwJSwgcmdiYSgyMzksMjUzLDI1NSwxKSA0MiUsIHJnYmEoMjQ0LDIzMiwyNTMsMSkgNjQlLCByZ2JhKDIzOCwyMjEsMjUyLDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDI1MywyNTUsMSkgMCUsIHJnYmEoMjM5LDI1MywyNTUsMSkgNDIlLCByZ2JhKDI0NCwyMzIsMjUzLDEpIDY0JSwgcmdiYSgyMzgsMjIxLDI1MiwxKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5uZXd0ZXh0IGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIC1tb3MtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogIzJFRDM1QTtcbn1cblxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYm9yZGVyLXdpZHRoOiAwcHggM3B4IDNweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmlvbi1yYWRpbyAucmFkaW8taW5uZXIge1xuICB3aWR0aDogNDMlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmJ1dHRvbi1uYXRpdmU6OmFmdGVyIHtcbiAgY29udGVudDogaW5oZXJpdDtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGNzEzMTM7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNUQ1NjU2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1ib3JkZXItcmFkaXVzOjA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzJFRDM1QTtcbiAgLS1jaGVja21hcmstd2lkdGg6IDI7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNkZGQ7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubmV3dGV4dCBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gNDVweDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MTVweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMHB4KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuaW9uLWl0ZW0gLml0ZW0taW5uZXIge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtc3RhY2tlZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciAubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmNoZWNrYm94LWljb24ge1xuICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/reportfiledtwelve/reportfiledtwelve.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/reportfiledtwelve/reportfiledtwelve.page.ts ***!
  \*************************************************************/
/*! exports provided: ReportfiledtwelvePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfiledtwelvePage", function() { return ReportfiledtwelvePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







let ReportfiledtwelvePage = class ReportfiledtwelvePage {
    constructor(httpClient, navController, router, route) {
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.infoWindows = [];
        this.markers = [];
        // this.user_id = localStorage.getItem('userId');
        // this.route.queryParams.subscribe(params => {
        //   this.forWho = localStorage.getItem('forwho')
        //   this.age = localStorage.getItem('age')
        //   this.pronoun = localStorage.getItem('pronoun')
        //   this.experience = localStorage.getItem('whatHappend')
        //   this.date1 = localStorage.getItem('date')
        //   this.dateEstimate = localStorage.getItem('dateEstimate')
        //   this.time = localStorage.getItem('time')
        //   this.timeEstimate = localStorage.getItem('timeEstimate')
        //   this.timeRange = localStorage.getItem('timeRange')
        //   this.violenceType = localStorage.getItem('categories')
        //   this.policeRepo = localStorage.getItem('policeReport')
        //   this.otherData_policeRepo = localStorage.getItem('otherData_Police')
        //   this.led = localStorage.getItem('led')
        //   this.otherData = localStorage.getItem('otherData')
        //   this.otherRelationData = localStorage.getItem('RelationData')
        //   this.anythingElse =localStorage.getItem('anythingelse')
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.locality = this.router.getCurrentNavigation().extras.state.locality;
                this.landmark = this.router.getCurrentNavigation().extras.state.landmark;
                this.city = this.router.getCurrentNavigation().extras.state.city;
                this.state = this.router.getCurrentNavigation().extras.state.state;
                this.country = this.router.getCurrentNavigation().extras.state.country;
                this.area = this.router.getCurrentNavigation().extras.state.area;
                this.lat = this.router.getCurrentNavigation().extras.state.lat;
                this.longi = this.router.getCurrentNavigation().extras.state.longi;
                this.address = this.router.getCurrentNavigation().extras.state.address;
            }
            this.address2 = this.area, +',' + this.locality + ',' + this.landmark + ',' + this.city + ',' + this.state + ',' + this.country;
            console.log(this.address2);
            var data = { 'latitude': this.lat, 'longitude': this.longi, 'title': this.address };
            this.markers.push(data);
        });
    }
    knowledge(e) {
        this.kwlg = e.detail.value;
        console.log("estimate", e);
        let value = e.detail.checked;
        if (value == true) {
            this.kwlg = '1';
        }
        else {
            this.kwlg = '0';
        }
    }
    back() {
        localStorage.setItem('lat_report', this.lat);
        localStorage.setItem('longi_report', this.longi);
        localStorage.setItem('address_report', this.address);
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
                localStorage.setItem('lat_report', lat);
                localStorage.setItem('longi_report', longi);
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
                            localStorage.setItem('address_report', this.title);
                            console.log(this.title);
                            //this.markers = [];
                            var title = localStorage.getItem('address_report');
                            var lat1 = localStorage.getItem('lat_report');
                            var longi1 = localStorage.getItem('longi_report');
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
            fullscreenControl: false
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
    preframing() {
        let data = new FormData();
        data.append('security_key', 'd152ed16bedaf0e594319efad64e39ff0b14c2ff');
        data.append('user_id', this.user_id);
        data.append('country_id', '102');
        data.append('language_id', '1');
        data.append('is_consent', '1');
        data.append('reporting_for', this.forWho);
        data.append('age', this.age);
        data.append('preferred_pronoun', this.pronoun);
        data.append('what_happened_desc', this.experience);
        data.append('start_date', this.date1);
        data.append('date_estimate', this.dateEstimate);
        data.append('time', this.time);
        data.append('time_estimate', this.timeEstimate);
        data.append('time_range', this.timeRange);
        data.append('violence_type', this.violenceType);
        data.append('reported_police', this.policeRepo);
        data.append('reported_police_tried', this.otherData_policeRepo);
        data.append('feel_attacked', this.led);
        data.append('feel_attacked_other', this.otherData);
        data.append('feel_attacked_relation', this.otherRelationData);
        data.append('experience', this.anythingElse);
        data.append('locality', this.locality);
        data.append('landmark', this.landmark);
        data.append('suburb', this.area);
        data.append('city', this.city);
        data.append('state', this.state);
        data.append('country', this.country);
        data.append('map_lat', '19.0856');
        data.append('map_lon', '72.9082');
        data.append('map_knowledge', this.kwlg);
        data.append('medical_attention', '1');
        data.append('physically_hurt', '0');
        data.append('perpetrator', '0');
        data.append('exact_location', 'Karanjade Old Panvel Navi Mumbai');
        data.append('report_type', '1');
        data.append('gender', 'male');
        this.httpClient.post(this.apiUrl + 'addIncidentReport', data)
            .subscribe((rdata) => {
            console.log(rdata);
            // this.countryList = rdata.data;
        }, error => {
        });
        // this.navController.navigateForward([`preframingsecondary`]);
        //  this.navController.navigateRoot(`/preframingsecondary`);
    }
};
ReportfiledtwelvePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], ReportfiledtwelvePage.prototype, "mapRef", void 0);
ReportfiledtwelvePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reportfiledtwelve',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reportfiledtwelve.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reportfiledtwelve/reportfiledtwelve.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reportfiledtwelve.page.scss */ "./src/app/reportfiledtwelve/reportfiledtwelve.page.scss")).default]
    })
], ReportfiledtwelvePage);



/***/ })

}]);
//# sourceMappingURL=reportfiledtwelve-reportfiledtwelve-module-es2015.js.map
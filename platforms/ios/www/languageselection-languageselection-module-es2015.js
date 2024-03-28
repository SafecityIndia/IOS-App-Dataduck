(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["languageselection-languageselection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/languageselection/languageselection.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/languageselection/languageselection.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"mainarea\">\n    <img src=\"assets/images/icons/logo.svg\" />\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n         <ion-item mode=\"ios\">\n\t\t   <ion-label  class=\"newlabel\"  position=\"stacked\">{{'select_lang' | translate}}\n            </ion-label>\n            <ion-select placeholder=\"{{'select_one' | translate}}\" mode=\"ios\" (ionChange) = \"selectLanguage($event)\">\n              <ion-select-option *ngFor=\"let item of languageList\" value = \"{{item.id}}\">{{item.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\t\n\t\n        </div>\n\n      </ion-col>\n    </ion-row>\n\t\n  </div>\n  <div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"onboarding()\" [disabled]=\"buttondisable\">{{'procees' | translate}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/languageselection/languageselection-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/languageselection/languageselection-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LanguageselectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageselectionPageRoutingModule", function() { return LanguageselectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _languageselection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languageselection.page */ "./src/app/languageselection/languageselection.page.ts");




const routes = [
    {
        path: '',
        component: _languageselection_page__WEBPACK_IMPORTED_MODULE_3__["LanguageselectionPage"]
    }
];
let LanguageselectionPageRoutingModule = class LanguageselectionPageRoutingModule {
};
LanguageselectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguageselectionPageRoutingModule);



/***/ }),

/***/ "./src/app/languageselection/languageselection.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/languageselection/languageselection.module.ts ***!
  \***************************************************************/
/*! exports provided: LanguageselectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageselectionPageModule", function() { return LanguageselectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _languageselection_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languageselection-routing.module */ "./src/app/languageselection/languageselection-routing.module.ts");
/* harmony import */ var _languageselection_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./languageselection.page */ "./src/app/languageselection/languageselection.page.ts");









let LanguageselectionPageModule = class LanguageselectionPageModule {
};
LanguageselectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _languageselection_routing_module__WEBPACK_IMPORTED_MODULE_6__["LanguageselectionPageRoutingModule"]
        ],
        declarations: [_languageselection_page__WEBPACK_IMPORTED_MODULE_7__["LanguageselectionPage"]]
    })
], LanguageselectionPageModule);



/***/ }),

/***/ "./src/app/languageselection/languageselection.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/languageselection/languageselection.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.mainarea img {\n  width: 235px;\n  margin: 35% auto 0;\n}\n\n.alert-head.sc-ion-alert-ios {\n  display: none !important;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 16px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 11px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.newsidearea {\n  width: 100%;\n  height: auto;\n}\n\n.newsidearea ion-label {\n  width: 100%;\n  height: auto;\n  flex: 1 1 0%;\n}\n\n.newsidearea .in-item {\n  padding-right: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n}\n\n.newsidearea .in-item[slot=start] {\n  margin: 3px 15px 0px 4px;\n}\n\n.newsidearea ion-item {\n  width: 50%;\n  float: left;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 6px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  --min-height: 44px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 104px;\n}\n\n.newselect p {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  line-height: 21px;\n  text-align: left;\n  margin-bottom: 12px;\n  margin-top: 0;\n}\n\n.newselect.newselect h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  font-family: \"Mangal\";\n  line-height: 24px;\n  font-family: \"Lato\";\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 20px auto 0px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0;\n  }\n\n  .newselect {\n    margin-top: 70px;\n  }\n\n  .newselect p {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 32% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 40% auto 0;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {\n  .newselect p {\n    margin-top: 90px;\n  }\n}\n\n@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 66px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px;\n    margin: 20% auto 0;\n  }\n\n  .newselect {\n    margin-top: 66px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9sYW5ndWFnZXNlbGVjdGlvbi9sYW5ndWFnZXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhbmd1YWdlc2VsZWN0aW9uL2xhbmd1YWdlc2VsZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FBOztBREdBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUE7O0FERUE7RUFFQSx3QkFBQTtBQ0FBOztBREdBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNKLGtCQUFBO0VBQ0ksb0JBQUE7QUNBSjs7QURFQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FBOztBREtBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNIQTs7QURNQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0pBOztBRE9BO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNDLGVBQUE7QUNMTDs7QURRQTtFQUVBLHdCQUFBO0FDTkE7O0FEUUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQ05BOztBRFNFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQ1BKOztBRFVBO0VBQ0MseUJBQUE7QUNQRDs7QURVQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7RUFFSSxrQkFBQTtBQ1JMOztBRFdDO0VBRUEscUNBQUE7RUFDQSx5QkFBQTtFQUNJLGtCQUFBO0FDVEw7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNaQTs7QURnQkE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtBQ2RBOztBRGdCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDZkE7O0FEa0JBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2pCQTs7QURtQkE7RUFFQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNqQkE7O0FEb0JBO0VBQ0EsV0FBQTtBQ2pCQTs7QURzQkE7RUFFQztJQUVJLGtCQUFBO0VDckJIOztFRHdCRDtJQUNBLGdCQUFBO0VDckJDOztFRHdCRDtJQUNBLGdCQUFBO0VDckJDO0FBQ0Y7O0FEd0JDO0VBSUE7SUFFQSx1QkFBQTtJQUNBLDZCQUFBO0VDMUJDO0FBQ0Y7O0FEZ0NDO0VBSUM7SUFHRCxrQkFBQTtFQ25DQztBQUNGOztBRHVDQztFQUlBO0lBQ0ksZ0JBQUE7RUN4Q0g7QUFDRjs7QUQ0Q0M7RUFJQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQzlDQzs7RURpREQ7SUFDQSxnQkFBQTtFQzlDQztBQUNGOztBRG1EQTtFQUlDO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0VDckRDOztFRHdERDtJQUNBLGdCQUFBO0VDckRDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5ndWFnZXNlbGVjdGlvbi9sYW5ndWFnZXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluYXJlYSBpbWd7XHJcbndpZHRoOjIzNXB4O1xyXG5tYXJnaW46MzUlIGF1dG8gIDAgO1xyXG59XHJcbi5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Ncclxue1xyXG5kaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG50cmFuc2Zvcm06aW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuXHJcblxyXG4ubmV3c2lkZWFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhIGlvbi1sYWJlbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbGV4OjEgMSAwJTtcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cdCAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5cclxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtW3Nsb3Q9XCJzdGFydFwiXVxyXG57XHJcbm1hcmdpbjogM3B4IDE1cHggMHB4IDRweDtcclxufVxyXG4ubmV3c2lkZWFyZWEgIGlvbi1pdGVtXHJcbntcclxud2lkdGg6NTAlO1xyXG5mbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4gIGlvbi1pdGVtXHJcbiAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0XHJcblx0ICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuXHQgICAgLS1taW4taGVpZ2h0OiA0NHB4O1xyXG5cdH1cclxuXHRcclxuLm5ld3NlbGVjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxubWFyZ2luLXRvcDoxMDRweDtcclxufVxyXG5cclxuLm5ld3NlbGVjdCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmxpbmUtaGVpZ2h0OjIxcHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxubWFyZ2luLWJvdHRvbToxMnB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXdzZWxlY3QubmV3c2VsZWN0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmZvbnQtZmFtaWx5OiAnTWFuZ2FsJztcclxubGluZS1oZWlnaHQ6MjRweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5tYXJnaW4tdG9wOjA7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuXHJcbmlvbi1sYWJlbFxyXG57XHJcbmZsZXg6MDtcclxud2lkdGg6MTAwJTtcclxufVxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjoyMHB4IGF1dG8gMHB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnNlbGVjdC1wbGFjZWhvbGRlciBcclxue1xyXG5taW4td2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbmZsZXg6MCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KSBhbmQoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAyKVxyXG5cdHtcclxuXHQubWFpbmFyZWEgaW1nXHJcblx0e1xyXG5cdCAgICBtYXJnaW46IDI5JSBhdXRvIDA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3R7XHJcblx0bWFyZ2luLXRvcDo3MHB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3c2VsZWN0IHB7XHJcblx0bWFyZ2luLXRvcDoxMHB4O1xyXG5cdH1cclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGggOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQgOiA3MzZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMykgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcclxuIG1hcmdpbjogMzIlIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBcclxuXHRcclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuXHRcdC5tYWluYXJlYSBpbWdcclxuIHtcclxuXHJcbiBtYXJnaW46IDQwJSBhdXRvIDA7XHJcbiB9XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgXHJcbiAgICBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHsgXHJcblx0Lm5ld3NlbGVjdCBwe1xyXG5cdCAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG5cdFxyXG5cdH1cclxuXHR9XHJcblx0XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIFxyXG4gICAgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodDogNjQwcHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgeyBcclxuXHQubWFpbmFyZWEgaW1nXHJcbiB7XHJcbiB3aWR0aDogMjEzcHg7XHJcbiBtYXJnaW46IDIwJSBhdXRvIDA7XHJcbiB9XHJcbiBcclxuIC5uZXdzZWxlY3R7XHJcbiBtYXJnaW4tdG9wOiA2NnB4O1xyXG59XHJcblxyXG5cclxuXHR9XHJcblx0XHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4O1xyXG4gbWFyZ2luOiAyMCUgYXV0byAwO1xyXG4gfVxyXG4gXHJcbiAubmV3c2VsZWN0e1xyXG4gbWFyZ2luLXRvcDogNjZweDtcclxufVxyXG5cclxuIFxyXG4gfVxyXG4gIFxyXG5cclxuIiwiLm1haW5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjM1cHg7XG4gIG1hcmdpbjogMzUlIGF1dG8gMDtcbn1cblxuLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5ld3NpZGVhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5ld3NpZGVhcmVhIGlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDEgMSAwJTtcbn1cblxuLm5ld3NpZGVhcmVhIC5pbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubmV3c2lkZWFyZWEgLmluLWl0ZW1bc2xvdD1zdGFydF0ge1xuICBtYXJnaW46IDNweCAxNXB4IDBweCA0cHg7XG59XG5cbi5uZXdzaWRlYXJlYSBpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLml0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XG59XG5cbi5uZXdzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwNHB4O1xufVxuXG4ubmV3c2VsZWN0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3NlbGVjdC5uZXdzZWxlY3QgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJNYW5nYWxcIjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLm1haW5hcmVhIGltZyB7XG4gICAgbWFyZ2luOiAyOSUgYXV0byAwO1xuICB9XG5cbiAgLm5ld3NlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDMyJSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDQwJSBhdXRvIDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweDtcbiAgICBtYXJnaW46IDIwJSBhdXRvIDA7XG4gIH1cblxuICAubmV3c2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/languageselection/languageselection.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/languageselection/languageselection.page.ts ***!
  \*************************************************************/
/*! exports provided: LanguageselectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageselectionPage", function() { return LanguageselectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







let LanguageselectionPage = class LanguageselectionPage {
    constructor(httpClient, loadingCtrl, router, sharedservice, navController, loadingController, route, translate) {
        this.httpClient = httpClient;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.sharedservice = sharedservice;
        this.navController = navController;
        this.loadingController = loadingController;
        this.route = route;
        this.translate = translate;
        this.langaugeId = '';
        this.buttondisable = true;
        this.route.queryParams.subscribe(params => {
            this.countryId = params["countryId"];
            this.cityId = params["cityId"];
            this.orgId = params["orgId"];
            console.log("con", this.countryId);
            console.log("city", this.cityId);
            console.log("org", this.orgId);
        });
    }
    ngOnInit() {
        this.getLanguageList();
    }
    // *********************Getting language List for select Language**************************
    getLanguageList() {
        let data = new FormData();
        data.append('security_key', '07b337e9971f28d49c9c4b0449ea071131f4a3b6');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('common_controller/languagesList', data).subscribe((rdata) => {
            console.log(rdata);
            this.languageList = rdata.data;
            console.log(this.languageList[1]);
            console.log("language", this.languageList);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl+'languagesList',data)
        // .subscribe((rdata: any) => {
        //   console.log(rdata);
        //   this.languageList = rdata.data;
        //   console.log(this.languageList[1]);
        //   console.log("language",this.languageList)
        // },error => {
        // });
    }
    selectLanguage(e) {
        this.langaugeId = e.detail.value;
        localStorage.setItem('Lang_id', this.langaugeId);
        if (e.detail.value == '1') {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            localStorage.setItem('language', 'en');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '42') {
            this.translate.setDefaultLang('hi');
            this.translate.use('hi');
            localStorage.setItem('language', 'hi');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '77') {
            this.translate.setDefaultLang('ml');
            this.translate.use('ml');
            localStorage.setItem('language', 'ml');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '76') {
            this.translate.setDefaultLang('ma');
            this.translate.use('ma');
            localStorage.setItem('language', 'ma');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '43') {
            this.translate.setDefaultLang('cr');
            this.translate.use('cr');
            localStorage.setItem('language', 'cr');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '27') {
            this.translate.setDefaultLang('sp');
            this.translate.use('sp');
            localStorage.setItem('language', 'sp');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '6') {
            this.translate.setDefaultLang('ar');
            this.translate.use('ar');
            localStorage.setItem('language', 'ar');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        else if (e.detail.value == '89') {
            this.translate.setDefaultLang('po');
            this.translate.use('po');
            localStorage.setItem('language', 'po');
            localStorage.setItem('Lang_id', e.detail.value);
        }
        if (this.langaugeId != "") {
            this.buttondisable = false;
        }
        else {
            this.buttondisable = true;
        }
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
        });
    }
    // *********************Pass language id to Next page***********************************
    onboarding() {
        console.log(this.langaugeId);
        let navigationExtras = {
            queryParams: {
                countryId: this.countryId,
                cityId: this.cityId,
                orgId: this.orgId,
                langaugeId: this.langaugeId
            }
        };
        this.navController.navigateRoot([`/onboardingone`], navigationExtras);
    }
};
LanguageselectionPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
LanguageselectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-languageselection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./languageselection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/languageselection/languageselection.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./languageselection.page.scss */ "./src/app/languageselection/languageselection.page.scss")).default]
    })
], LanguageselectionPage);



/***/ })

}]);
//# sourceMappingURL=languageselection-languageselection-module-es2015.js.map
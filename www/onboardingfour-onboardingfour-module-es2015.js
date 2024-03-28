(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardingfour-onboardingfour-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingfour/onboardingfour.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingfour/onboardingfour.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-content>\n<div class=\"mainarea\">\n<ion-row>\n      <ion-col size=\"12\" >\n<img src=\"assets/images/icons/logo.svg\"/>\n</ion-col>\n   </ion-row>\n  \n</div>\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\" >\n<div class=\"newtexton\">\n<!-- <h4>You can help by sharing your story!</h4> -->\n<p>{{'together_we_can_fight' | translate}}<br><br> {{'this_is_not_sos_service' | translate}}</p>\n\n\t  <ion-list>\n  <ion-item >\n {{'increase_public_accountability' | translate}}\n  </ion-item>\n   <ion-item >\n{{'increase_resource_allocated' | translate}}\n  </ion-item>\n  <ion-item >\n{{'push_for_policy_change' | translate}}\n  </ion-item>\n\n</ion-list>\n<p class=\"lastline\">{{'do_it_for_you' | translate}}</p>\n</div>\n\n   </ion-col>\n   </ion-row>\n   </div>\n \n</ion-content>\n\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\"  (click)=\"home()\">{{'button_done'  | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n ");

/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OnboardingfourPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingfourPageRoutingModule", function() { return OnboardingfourPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboardingfour_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboardingfour.page */ "./src/app/onboardingfour/onboardingfour.page.ts");




const routes = [
    {
        path: '',
        component: _onboardingfour_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingfourPage"]
    }
];
let OnboardingfourPageRoutingModule = class OnboardingfourPageRoutingModule {
};
OnboardingfourPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingfourPageRoutingModule);



/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingfourPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingfourPageModule", function() { return OnboardingfourPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _onboardingfour_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboardingfour-routing.module */ "./src/app/onboardingfour/onboardingfour-routing.module.ts");
/* harmony import */ var _onboardingfour_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboardingfour.page */ "./src/app/onboardingfour/onboardingfour.page.ts");








let OnboardingfourPageModule = class OnboardingfourPageModule {
};
OnboardingfourPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _onboardingfour_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnboardingfourPageRoutingModule"]
        ],
        declarations: [_onboardingfour_page__WEBPACK_IMPORTED_MODULE_7__["OnboardingfourPage"]]
    })
], OnboardingfourPageModule);



/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  background-color: transparent;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title img {\n  width: 158px;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 25% auto 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:100px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newdot {\n  width: auto;\n  float: left;\n}\n\n.newdot {\n  width: auto;\n  margin: 0 auto;\n}\n\n.newdotin {\n  width: 40px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newdotin ion-list {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  text-align: center;\n}\n\n.newdot {\n  width: auto;\n  float: left;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 180px;\n}\n\n.bannerfirst {\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  position: relative;\n  margin-right: 0;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 12% auto 0;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtexton {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-bottom: 125px;\n  margin-top: 0;\n}\n\n.newtexton p {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  margin-bottom: 0px;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n.newtexton p.lastline {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.newtexton .item {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  background-image: url(/assets/images/icons/dot.svg);\n  font-size: 18px !important;\n  background-size: 6px;\n  padding-left: 15px;\n  align-items: self-start;\n  background-position: left 6px;\n  background-repeat: no-repeat;\n  margin: 12px 0;\n  --min-height:inherit;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 250px;\n  background-color: #CCCCCC;\n}\n\n.dotin {\n  width: 6px;\n  height: 6px;\n  border-radius: 250px;\n  background-color: #5F5E5E;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    bottom: inherit;\n    top: 180px;\n    margin-bottom: 25px;\n  }\n}\n\n@media (device-height: 640px) and (device-width: 360px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainareain {\n    bottom: inherit;\n    top: 180px;\n    margin-bottom: 25px;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (min-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (min-device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (min-device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {\n  .mainareain {\n    bottom: 72px;\n    top: inherit;\n    margin-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9vbmJvYXJkaW5nZm91ci9vbmJvYXJkaW5nZm91ci5wYWdlLnNjc3MiLCJzcmMvYXBwL29uYm9hcmRpbmdmb3VyL29uYm9hcmRpbmdmb3VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLDZCQUFBO0FDQUE7O0FER0E7RUFFQSxrQkFBQTtBQ0RBOztBRElBO0VBRUEsU0FBQTtBQ0ZBOztBREtBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBREtDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBRUEsdUJBQUE7QUNKQTs7QURPQTtFQUVBLHFCQUFBO0FDTEE7O0FEUUE7RUFFQSxZQUFBO0FDTkE7O0FEUUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMQTs7QURRQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURRQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05BOztBRFNBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUNQQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0FDUkE7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVEE7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDWkE7O0FEZUE7RUFFQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2JEOztBRGdCQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2JBOztBRGlCQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ2ZBOztBRGtCRTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0MseUJBQUE7QUNoQkQ7O0FEbUJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtBQ2hCRDs7QURtQkM7RUFFQSxxQ0FBQTtBQ2pCRDs7QURvQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNsQkE7O0FEcUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDbkJBOztBRHFCQTtFQUVHLGVBQUE7RUFDSCxnQkFBQTtBQ25CQTs7QUR1QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDSSxrQkFBQTtFQUNKLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNJLGNBQUE7RUFDSCxvQkFBQTtBQ3JCRDs7QUR3QkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0FDckJKOztBRDBCQTtFQUVBLE9BQUE7RUFDQSxXQUFBO0FDeEJBOztBRDBCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDekJBOztBRDhCQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQzVCQTs7QUQrQkE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUM3QkE7O0FEa0NBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakNBOztBRG9DQztFQUlEO0lBRUMsZUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ3JDQztBQUNGOztBRHlDQztFQUlEO0lBRUMsZUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQzNDQztBQUNGOztBRCtDQztFQUlBO0lBRUEsdUJBQUE7RUNqREM7QUFDRjs7QUR5REU7RUFLQTtJQUVELFlBQUE7SUFDRCxZQUFBO0lBQ0MsbUJBQUE7RUM1REM7QUFDRjs7QUQ4REE7RUFLRztJQUVGLFlBQUE7SUFDRCxZQUFBO0lBQ0MsbUJBQUE7RUNqRUM7QUFDRjs7QURvRUE7RUFLRztJQUVGLFlBQUE7SUFDRCxZQUFBO0lBQ0MsbUJBQUE7RUN2RUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmdmb3VyL29uYm9hcmRpbmdmb3VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJhY2tncm91bmRcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG59XHJcbiAgXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG4gXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuaW9uLXRpdGxlIGltZ1xyXG57XHJcbndpZHRoOjE1OHB4O1xyXG59XHJcbi5tYWluYXJlYSBpbWd7XHJcbndpZHRoOjI0M3B4O1xyXG5tYXJnaW46MjUlIGF1dG8gIDAgO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OjEwMHB4O31cclxuXHRcclxuLm1haW5hcmVhXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubmV3ZG90XHJcbntcclxud2lkdGg6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLm5ld2RvdFxyXG57XHJcbndpZHRoOmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5uZXdkb3RpblxyXG57XHJcbndpZHRoOjQwcHg7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubmV3ZG90aW4gaW9uLWxpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46MCBhdXRvO1xyXG5kaXNwbGF5OmZsZXg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubmV3ZG90XHJcbntcclxud2lkdGg6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDoxODBweDtcclxufVxyXG5cclxuLmJhbm5lcmZpcnN0XHJcbntcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0bWFyZ2luLXJpZ2h0OjA7XHJcblx0fVxyXG5cclxuLm1haW5hcmVhIGltZ3tcclxud2lkdGg6MjQzcHg7XHJcbm1hcmdpbjoxMiUgYXV0byAgMCA7XHJcbn1cclxuXHJcblxyXG5pb24tc2VsZWN0IHtcclxuXHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuaGVpZ2h0OjQwcHg7XHJcblxyXG59XHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4uc2VsZWN0LXRleHQgYnV0dG9uXHJcbntwYWRkaW5nOjFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHR9XHJcblx0XHJcbi5uZXd0ZXh0b25cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLWJvdHRvbToxMjVweDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dG9uIHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzIyMEUwRTtcclxubWFyZ2luLWJvdHRvbTowcHg7XHJcbmxpbmUtaGVpZ2h0OjI1cHg7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuLm5ld3RleHRvbiBwLmxhc3RsaW5lXHJcbntcclxuICAgZm9udC1zaXplOjE4cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuXHRcclxuXHR9XHJcblxyXG4ubmV3dGV4dG9uIC5pdGVtXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyMjBFMEU7XHJcbmJhY2tncm91bmQtaW1hZ2U6dXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2RvdC5zdmcpO1xyXG5mb250LXNpemU6MThweCAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kLXNpemU6IDZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgNnB4O1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuXHQtLW1pbi1oZWlnaHQ6aW5oZXJpdDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuICBcclxuaW9uLWxhYmVsXHJcbntcclxuZmxleDowO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmRvdFxyXG57XHJcbndpZHRoOjZweDtcclxuaGVpZ2h0OjZweDtcclxuYm9yZGVyLXJhZGl1czoyNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojQ0NDQ0NDO1xyXG59XHJcblxyXG4uZG90aW5cclxue1xyXG53aWR0aDo2cHg7XHJcbmhlaWdodDo2cHg7XHJcbmJvcmRlci1yYWRpdXM6MjUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IzVGNUU1RTtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuIEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4ubWFpbmFyZWFpblxyXG4ge1xyXG4gYm90dG9tOmluaGVyaXQ7XHJcbiB0b3A6MTgwcHg7XHJcbiBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiB9XHJcbiBcclxuIH1cclxuIFxyXG4gQG1lZGlhIChkZXZpY2UtaGVpZ2h0IDo2NDBweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzYwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuLm1haW5hcmVhaW5cclxuIHtcclxuIGJvdHRvbTppbmhlcml0O1xyXG4gdG9wOjE4MHB4O1xyXG4gbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gfVxyXG4gXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7O1xyXG4gXHJcbiB9XHJcbiBcclxuXHJcbiBcclxuXHJcbiB9XHJcbiBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBcclxuICAgIGFuZCAobWluLWRldmljZS1oZWlnaHQ6IDgxMnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXHJcbiAgIHsgXHJcbiAgLm1haW5hcmVhaW5cclxuIHtcclxuIGJvdHRvbTo3MnB4O1xyXG50b3A6aW5oZXJpdDtcclxuIG1hcmdpbi1ib3R0b206MjVweDtcclxuIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICAgIGFuZCAobWluLWRldmljZS1oZWlnaHQ6IDg5NnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIFxyXG4gICAgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHsgXHJcbiAgIC5tYWluYXJlYWluXHJcbiB7XHJcbiBib3R0b206NzJweDtcclxudG9wOmluaGVyaXQ7XHJcbiBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICAgIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChtaW4tZGV2aWNlLWhlaWdodDogODk2cHgpIFxyXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgXHJcbiAgICBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgeyBcclxuICAgLm1haW5hcmVhaW5cclxuIHtcclxuIGJvdHRvbTo3MnB4O1xyXG50b3A6aW5oZXJpdDtcclxuIG1hcmdpbi1ib3R0b206MjVweDtcclxuIH1cclxufSIsIi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDE1OHB4O1xufVxuXG4ubWFpbmFyZWEgaW1nIHtcbiAgd2lkdGg6IDI0M3B4O1xuICBtYXJnaW46IDI1JSBhdXRvIDA7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDoxMDBweDtcbn1cblxuLm1haW5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdkb3Qge1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uZXdkb3Qge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uZXdkb3RpbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3ZG90aW4gaW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2RvdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG59XG5cbi5iYW5uZXJmaXJzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjQzcHg7XG4gIG1hcmdpbjogMTIlIGF1dG8gMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tYm90dG9tOiAxMjVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHRvbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHRvbiBwLmxhc3RsaW5lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubmV3dGV4dG9uIC5pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3Quc3ZnKTtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDZweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIC0tbWluLWhlaWdodDppbmhlcml0O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmbGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xufVxuXG4uZG90aW4ge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RjVFNUU7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWFpbiB7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICAgIHRvcDogMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChkZXZpY2Utd2lkdGg6IDM2MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWFpbiB7XG4gICAgYm90dG9tOiBpbmhlcml0O1xuICAgIHRvcDogMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICB3aWR0aDogMjEzcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWluLWRldmljZS1oZWlnaHQ6IDgxMnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tYWluYXJlYWluIHtcbiAgICBib3R0b206IDcycHg7XG4gICAgdG9wOiBpbmhlcml0O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1pbi1kZXZpY2UtaGVpZ2h0OiA4OTZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm1haW5hcmVhaW4ge1xuICAgIGJvdHRvbTogNzJweDtcbiAgICB0b3A6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWluLWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubWFpbmFyZWFpbiB7XG4gICAgYm90dG9tOiA3MnB4O1xuICAgIHRvcDogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/onboardingfour/onboardingfour.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/onboardingfour/onboardingfour.page.ts ***!
  \*******************************************************/
/*! exports provided: OnboardingfourPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingfourPage", function() { return OnboardingfourPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");







let OnboardingfourPage = class OnboardingfourPage {
    constructor(navController, route, sharedservice, httpClient, router, loadingController) {
        this.navController = navController;
        this.route = route;
        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.router = router;
        this.loadingController = loadingController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/user/';
        this.route.queryParams.subscribe(params => {
            this.langaugeId = params["langaugeId"];
            this.countryId = params["countryId"];
            this.cityId = params["cityId"];
            this.orgId = params["orgId"];
            console.log("countryId", this.countryId);
            console.log("langaugeId", this.langaugeId);
            console.log("city", this.cityId);
            console.log("orgid", this.orgId);
        });
    }
    ngOnInit() {
    }
    home() {
        let data = new FormData();
        data.append('security_key', '80b9d8f6dc4beeebd22ba44af9f247eadf13170b');
        data.append('country_id', this.countryId);
        data.append('language_id', this.langaugeId);
        data.append('city_id', this.cityId);
        data.append('organisation_id', this.orgId);
        data.append('age', '1');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('user/userRegistration', data).subscribe((rdata) => {
            console.log(rdata);
            console.log(rdata);
            // this.presentLoading()
            if (rdata.status == true) {
                localStorage.setItem('userId', rdata.data.id);
                this.navController.navigateForward('/home');
            }
            else {
                this.router.navigate(['languageselection']);
                //  this.navController.(`/languageselection`);
                // this.navController.navigateForward('languageselection')
            }
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl+'userRegistration',data)
        // .subscribe((rdata: any) => {
        //   console.log(rdata);
        //   this.presentLoading()
        //   if(rdata.status == true)
        //   {
        //     localStorage.setItem('userId', rdata.data.id)
        //     this.navController.navigateForward('/home')
        //   }
        //   else{
        //     this.router.navigate(['languageselection'])
        //     //  this.navController.(`/languageselection`);
        //     // this.navController.navigateForward('languageselection')
        //   }
        //   },error => {
        // });
    }
    //  home() 
    //  {
    //      this.navController.navigateForward('home')
    //  }
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
};
OnboardingfourPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
OnboardingfourPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboardingfour',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboardingfour.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingfour/onboardingfour.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboardingfour.page.scss */ "./src/app/onboardingfour/onboardingfour.page.scss")).default]
    })
], OnboardingfourPage);



/***/ })

}]);
//# sourceMappingURL=onboardingfour-onboardingfour-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardingthree-onboardingthree-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingthree/onboardingthree.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingthree/onboardingthree.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><img src=\"assets/images/icons/logo.svg\"/></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n\n<div class=\"mainareain\">\n<ion-row >\n      <ion-col size=\"12\" >\n<div class=\"newtext\">\n<h4>Welcome to Safecity.in</h4>\n\t<p>The purpose of this app is to build safer cities by understanding where incidents take place and also understanding other variables that may be a factor in gender-based sexual violence.</p>\n</div>\n   </ion-col>\n   </ion-row>\n   </div>\n</ion-content>\n   <div class=\"mainarea\">\n<ion-row >\n      <ion-col size=\"12\" >\n\t  <div class=\"newdotin\">\n\t  <ion-list>\n  <ion-item class=\"newdot\">\n  <div class=\"dotin\"></div>\n  </ion-item>\n  <ion-item class=\"newdot\">\n     <div class=\"dot\"></div>\n  </ion-item>\n\n</ion-list>\n\t  </div>\n   </ion-col>\n   </ion-row>\n\t    </div>\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"goToNext()\">{{'next' | translate }}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n");

/***/ }),

/***/ "./src/app/onboardingthree/onboardingthree-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/onboardingthree/onboardingthree-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OnboardingthreePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingthreePageRoutingModule", function() { return OnboardingthreePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboardingthree_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboardingthree.page */ "./src/app/onboardingthree/onboardingthree.page.ts");




const routes = [
    {
        path: '',
        component: _onboardingthree_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingthreePage"]
    }
];
let OnboardingthreePageRoutingModule = class OnboardingthreePageRoutingModule {
};
OnboardingthreePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingthreePageRoutingModule);



/***/ }),

/***/ "./src/app/onboardingthree/onboardingthree.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/onboardingthree/onboardingthree.module.ts ***!
  \***********************************************************/
/*! exports provided: OnboardingthreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingthreePageModule", function() { return OnboardingthreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _onboardingthree_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboardingthree-routing.module */ "./src/app/onboardingthree/onboardingthree-routing.module.ts");
/* harmony import */ var _onboardingthree_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboardingthree.page */ "./src/app/onboardingthree/onboardingthree.page.ts");








let OnboardingthreePageModule = class OnboardingthreePageModule {
};
OnboardingthreePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboardingthree_routing_module__WEBPACK_IMPORTED_MODULE_6__["OnboardingthreePageRoutingModule"]
        ],
        declarations: [_onboardingthree_page__WEBPACK_IMPORTED_MODULE_7__["OnboardingthreePage"]]
    })
], OnboardingthreePageModule);



/***/ }),

/***/ "./src/app/onboardingthree/onboardingthree.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/onboardingthree/onboardingthree.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  background-color: transparent;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-navbar.toolbar {\n  min-height: 94px !important;\n}\n\nion-navbar.toolbar-md {\n  min-height: 94px !important;\n}\n\nion-navbar.toolbar.toolbar-ios {\n  min-height: 94px !important;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title img {\n  width: 158px;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:100px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 121px;\n}\n\n.newdot {\n  width: auto;\n  float: left;\n}\n\n.newdot {\n  width: auto;\n  margin: 0 auto;\n}\n\n.newdotin {\n  width: 40px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newdotin ion-list {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  text-align: center;\n}\n\n.newdot {\n  width: auto;\n  float: left;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  /* float: left; */\n  position: absolute;\n  bottom: 167px;\n}\n\n.bannerfirst {\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  position: relative;\n  margin-right: 0;\n}\n\n.mainarea img {\n  width: 243px;\n  margin: 50% auto 0;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  padding: 0 0;\n  font-size: 20px;\n  line-height: 23px;\n  font-weight: 500;\n  margin-bottom: 18px;\n  font-family: \"latomedium\";\n  text-align: left;\n  color: #292020;\n  margin-top: 0;\n}\n\n.heading {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.heading h2 {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 10px;\n  text-align: left !important;\n  font-size: 20px !important;\n  color: #592D8D !important;\n}\n\n.heading p {\n  width: 100%;\n  height: auto;\n  margin-top: 0;\n  text-align: left !important;\n  font-size: 16px !important;\n  line-height: 20px;\n  color: #292020 !important;\n  float: left;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 25px;\n  font-size: 18px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"latomedium\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 250px;\n  background-color: #CCCCCC;\n}\n\n.dotin {\n  width: 6px;\n  height: 6px;\n  border-radius: 250px;\n  background-color: #5F5E5E;\n}\n\n.newbtn {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 18px;\n  height: 50px;\n  --background: #D6C6E8;\n  --background-activated: #D6C6E8;\n  --background-focused: #D6C6E8;\n  --background-hover: #D6C6E8;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9vbmJvYXJkaW5ndGhyZWUvb25ib2FyZGluZ3RocmVlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb25ib2FyZGluZ3RocmVlL29uYm9hcmRpbmd0aHJlZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSw2QkFBQTtBQ0FBOztBRElBO0VBRUEsU0FBQTtBQ0ZBOztBREtBO0VBQ0ksMkJBQUE7QUNGSjs7QURLQTtFQUNJLDJCQUFBO0FDRko7O0FES0E7RUFDSSwyQkFBQTtBQ0ZKOztBRE1BO0VBRUEsdUJBQUE7QUNKQTs7QURPQTtFQUVBLHFCQUFBO0FDTEE7O0FEUUE7RUFFQSxZQUFBO0FDTkE7O0FEU0E7RUFFQSxrQkFBQTtBQ1BBOztBRFVBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1JKOztBRFVDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDVEE7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1hBOztBRGNBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNaQTs7QURlQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDYkE7O0FEZ0JBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2RKOztBRGtCQTtFQUVDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDaEJEOztBRG1CQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2hCQTs7QURvQkE7RUFFQSxzQkFBQTtFQUNBLFlBQUE7QUNsQkE7O0FEcUJFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ25CRjs7QURzQkE7RUFDQyx5QkFBQTtBQ25CRDs7QURzQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDSCxrQkFBQTtFQUNBLG1CQUFBO0FDbkJEOztBRHNCQztFQUVBLHFDQUFBO0FDcEJEOztBRHVCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUN2QkE7O0FEMEJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtBQ3pCQTs7QUQ0QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMxQkE7O0FENkJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUMzQkE7O0FEOEJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDNUJBOztBRGdDQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDOUJBOztBRGtDQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNDLHlCQUFBO0VBQ0UsaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtBQy9CSjs7QURvQ0E7RUFFQSxPQUFBO0VBQ0EsV0FBQTtBQ2xDQTs7QURvQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ25DQTs7QUR3Q0E7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUN0Q0E7O0FEeUNBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDdkNBOztBRDRDQTtFQUdBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDM0NBIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZGluZ3RocmVlL29uYm9hcmRpbmd0aHJlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1iYWNrZ3JvdW5kXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcbn1cclxuICBcclxuaW9uLW5hdmJhci50b29sYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDk0cHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbmlvbi1uYXZiYXIudG9vbGJhci1tZCB7XHJcbiAgICBtaW4taGVpZ2h0OiA5NHB4IWltcG9ydGFudDtcclxuICB9XHJcblxyXG5pb24tbmF2YmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xyXG4gICAgbWluLWhlaWdodDogOTRweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuaW9uLXRpdGxlIGltZ1xyXG57XHJcbndpZHRoOjE1OHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OjEwMHB4O31cclxuXHRcclxuXHQubWFpbmFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmJvdHRvbToxMjFweDtcclxufVxyXG5cclxuLm5ld2RvdFxyXG57XHJcbndpZHRoOmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5uZXdkb3Rcclxue1xyXG53aWR0aDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4ubmV3ZG90aW5cclxue1xyXG53aWR0aDo0MHB4O1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2RvdGluIGlvbi1saXN0XHJcbntcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOjAgYXV0bztcclxuZGlzcGxheTpmbGV4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm5ld2RvdFxyXG57XHJcbndpZHRoOmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE2N3B4O1xyXG59XHJcblxyXG5cclxuLmJhbm5lcmZpcnN0XHJcbntcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0bWFyZ2luLXJpZ2h0OjA7XHJcblx0fVxyXG5cclxuLm1haW5hcmVhIGltZ3tcclxud2lkdGg6MjQzcHg7XHJcbm1hcmdpbjo1MCUgYXV0byAgMCA7XHJcbn1cclxuXHJcblxyXG5pb24tc2VsZWN0IHtcclxuXHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuaGVpZ2h0OjQwcHg7XHJcblxyXG59XHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4uc2VsZWN0LXRleHQgYnV0dG9uXHJcbntwYWRkaW5nOjFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdH1cclxuXHRcclxuXHQuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHR9XHJcblx0XHJcbi5uZXd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5cclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5cclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMDtcclxuZm9udC1zaXplOjIwcHg7XHJcbmxpbmUtaGVpZ2h0OjIzcHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxubWFyZ2luLWJvdHRvbToxOHB4O1xyXG5mb250LWZhbWlseTogJ2xhdG9tZWRpdW0nO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyOTIwMjA7XHJcblxyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5oZWFkaW5nXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5oZWFkaW5nIGgyXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbm1hcmdpbi1ib3R0b206MTBweDtcclxudGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudDtcclxuZm9udC1zaXplOjIwcHggIWltcG9ydGFudDtcclxuY29sb3I6IzU5MkQ4RCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGluZyBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6MDtcclxudGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmNvbG9yOiMyOTIwMjAgIWltcG9ydGFudDtcclxuZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjVweDtcclxuZm9udC1zaXplOjE4cHg7XHJcblxyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHQgZm9udC1mYW1pbHk6ICdsYXRvbWVkaXVtJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4gIFxyXG5pb24tbGFiZWxcclxue1xyXG5mbGV4OjA7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcblxyXG4uZG90XHJcbntcclxud2lkdGg6NnB4O1xyXG5oZWlnaHQ6NnB4O1xyXG5ib3JkZXItcmFkaXVzOjI1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNDQ0NDQ0M7XHJcbn1cclxuXHJcbi5kb3RpblxyXG57XHJcbndpZHRoOjZweDtcclxuaGVpZ2h0OjZweDtcclxuYm9yZGVyLXJhZGl1czoyNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojNUY1RTVFO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6IzJGMTE1MyAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICNENkM2RTg7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNENkM2RTg7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Q2QzZFODtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0Q2QzZFODtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn0iLCIudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24tbmF2YmFyLnRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiA5NHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1uYXZiYXIudG9vbGJhci1tZCB7XG4gIG1pbi1oZWlnaHQ6IDk0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLW5hdmJhci50b29sYmFyLnRvb2xiYXItaW9zIHtcbiAgbWluLWhlaWdodDogOTRweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogMTU4cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6MTAwcHg7XG59XG5cbi5tYWluYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMjFweDtcbn1cblxuLm5ld2RvdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm5ld2RvdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5ld2RvdGluIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdkb3RpbiBpb24tbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3ZG90IHtcbiAgd2lkdGg6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTY3cHg7XG59XG5cbi5iYW5uZXJmaXJzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5tYWluYXJlYSBpbWcge1xuICB3aWR0aDogMjQzcHg7XG4gIG1hcmdpbjogNTAlIGF1dG8gMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5zZWxlY3QtdGV4dCBidXR0b24ge1xuICBwYWRkaW5nOiAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcImxhdG9tZWRpdW1cIjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWFkaW5nIGgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkaW5nIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMyOTIwMjAgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uZXd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1mYW1pbHk6IFwibGF0b21lZGl1bVwiO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZsZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XG59XG5cbi5kb3RpbiB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVGNUU1RTtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjMkYxMTUzICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZDNkU4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRDZDNkU4O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Q2QzZFODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRDZDNkU4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/onboardingthree/onboardingthree.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboardingthree/onboardingthree.page.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingthreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingthreePage", function() { return OnboardingthreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let OnboardingthreePage = class OnboardingthreePage {
    constructor(route, navController) {
        this.route = route;
        this.navController = navController;
        this.route.queryParams.subscribe(params => {
            this.langaugeId = params["langaugeId"];
            this.countryId = params["countryId"];
            console.log("countryId", this.countryId);
            console.log("langaugeId", this.langaugeId);
        });
    }
    ngOnInit() {
    }
    goToNext() {
        console.log("country id", this.countryId);
        console.log("language id", this.langaugeId);
        let navigationExtras = {
            queryParams: {
                langaugeId: this.langaugeId,
                countryId: this.countryId
            }
        };
        this.navController.navigateForward([`onboardingfour`], navigationExtras);
    }
};
OnboardingthreePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
OnboardingthreePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboardingthree',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboardingthree.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboardingthree/onboardingthree.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboardingthree.page.scss */ "./src/app/onboardingthree/onboardingthree.page.scss")).default]
    })
], OnboardingthreePage);



/***/ })

}]);
//# sourceMappingURL=onboardingthree-onboardingthree-module-es2015.js.map
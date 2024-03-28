(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospitallisting-hospitallisting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hospitallisting/hospitallisting.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hospitallisting/hospitallisting.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button  icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title><div class=\"ion-text-wrap\">{{'hos_near_you_loc' | translate}}</div></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"mainhospital\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n\t  <ion-item>\r\n <p slot=\"start\">\r\n  {{'map_location' | translate}}\r\n  </p>\r\n  <ion-label>{{address}}</ion-label>\r\n  <ion-button slot=\"end\" class=\"newedit\"(click)=\"hospital()\">\r\n    {{'map_edit_option' | translate}}\r\n  </ion-button>\r\n</ion-item>\r\n\t   </ion-col>\r\n   </ion-row>\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"hospitalarea\">\r\n  <div #map id=\"map\"></div>\r\n<!-- <h5>Please move the pin to the exact location:</h5> -->\r\n <ion-card class=\"cardarea\" *ngFor=\"let item of markers\">\r\n<h2><span><img [src]=item.imgsrc/></span>{{item.name}}</h2>\r\n <div class=\"sidearea\">\r\n<img (click)=\"call(item.place_id)\" src=\"assets/images/icons/call.svg\"/>\r\n<img (click)=\"direction(item)\" id=\"navigate\" src=\"assets/images/icons/direction.svg\"/>\r\n</div> \r\n<div class=\"rating\">\r\n<h6>{{item.rating}}</h6>\r\n<ng-template [ngIf]=\"item.rating > '1'\" [ngIfElse]=\"star1\">\r\n  <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n</ng-template>\r\n<ng-template #star1>\r\n  <ion-icon name=\"star\"  ></ion-icon>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"item.rating > '1.5'\" [ngIfElse]=\"star2\">\r\n  <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n</ng-template>\r\n<ng-template #star2>\r\n  <ion-icon name=\"star\" ></ion-icon>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"item.rating > '2.5'\" [ngIfElse]=\"star2\">\r\n  <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n</ng-template>\r\n<ng-template #star2>\r\n  <ion-icon name=\"star\"  ></ion-icon>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"item.rating > '3.5'\" [ngIfElse]=\"star2\">\r\n  <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n</ng-template>\r\n<ng-template #star2>\r\n  <ion-icon name=\"star\"  ></ion-icon>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"item.rating > '4.5'\" [ngIfElse]=\"star2\">\r\n  <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n</ng-template>\r\n<ng-template #star2>\r\n  <ion-icon name=\"star\"  ></ion-icon>\r\n</ng-template>\r\n\r\n\r\n\r\n</div>\r\n<p>{{item.vicinity}}</p>\r\n<h4>Open 24 hours</h4>\r\n</ion-card>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n   </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/hospitallisting/hospitallisting-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/hospitallisting/hospitallisting-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HospitallistingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitallistingPageRoutingModule", function() { return HospitallistingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hospitallisting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospitallisting.page */ "./src/app/hospitallisting/hospitallisting.page.ts");




const routes = [
    {
        path: '',
        component: _hospitallisting_page__WEBPACK_IMPORTED_MODULE_3__["HospitallistingPage"]
    }
];
let HospitallistingPageRoutingModule = class HospitallistingPageRoutingModule {
};
HospitallistingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HospitallistingPageRoutingModule);



/***/ }),

/***/ "./src/app/hospitallisting/hospitallisting.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/hospitallisting/hospitallisting.module.ts ***!
  \***********************************************************/
/*! exports provided: HospitallistingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitallistingPageModule", function() { return HospitallistingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hospitallisting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hospitallisting-routing.module */ "./src/app/hospitallisting/hospitallisting-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _hospitallisting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hospitallisting.page */ "./src/app/hospitallisting/hospitallisting.page.ts");








let HospitallistingPageModule = class HospitallistingPageModule {
};
HospitallistingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _hospitallisting_routing_module__WEBPACK_IMPORTED_MODULE_5__["HospitallistingPageRoutingModule"]
        ],
        declarations: [_hospitallisting_page__WEBPACK_IMPORTED_MODULE_7__["HospitallistingPage"]]
    })
], HospitallistingPageModule);



/***/ }),

/***/ "./src/app/hospitallisting/hospitallisting.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/hospitallisting/hospitallisting.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 60%;\n}\n\n.header-md ion-title {\n  text-align: center;\n  white-space: inherit !important;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n  white-space: inherit !important;\n}\n\n.mainhospital ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0;\n  border: none;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 55px;\n  padding-right: 55px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainhospital {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n  margin-top: 12px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.hospitalarea {\n  width: 100%;\n  height: auto;\n  padding: 0 0px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.toolbar-title {\n  white-space: inherit !important;\n}\n\n.title-default {\n  white-space: inherit !important;\n}\n\nion-label {\n  white-space: inherit !important;\n}\n\n.hospitalarea p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.hospitalarea h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 38px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #2F1153;\n  float: left;\n  margin-bottom: 30px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #592D8D !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  --box-shadow:none;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 35px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newedit {\n  --background: transparent;\n  color: #592D8D;\n  --background-hover: #ffffff;\n  --background-focused: #ffffff;\n  --background-activated-opacity: 0;\n  --background-focused-opacity: 0.24;\n  --background-hover-opacity: 0.08;\n  --box-shadow: none;\n  font-size: 14px;\n  text-transform: inherit;\n}\n\n.cardarea {\n  width: 100%;\n  height: auto;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  padding: 10px;\n  border-radius: 6px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 11px;\n}\n\n.cardarea h2 {\n  width: 75%;\n  height: auto;\n  float: left;\n  font-size: 15px;\n  font-weight: 500;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.sidearea {\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n  margin-top: 6px;\n}\n\n.sidearea img {\n  margin-left: 12px;\n  width: 18px;\n}\n\n.rating {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.rating ion-icon {\n  color: #D6D5D8;\n  margin-right: 5px;\n}\n\n.rating ion-icon.newicon {\n  color: #F5D937;\n}\n\n.rating h6 {\n  height: auto;\n  float: left;\n  font-size: 12px;\n  margin: 0 8px 0 0;\n  color: #5D5656;\n}\n\n.cardarea p {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 0;\n  font-size: 12px;\n  margin-top: 0;\n  color: #5D5656;\n}\n\n.cardarea h4 {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0;\n  text-align: left !important;\n  font-size: 12px;\n  color: #5D5656;\n}\n\n.cardarea span {\n  background: #592d8d;\n  color: #fff;\n  font-size: 9px;\n  border-radius: 2px;\n  padding: 0;\n  margin-bottom: 5;\n  margin-right: 5px;\n  float: left;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9ob3NwaXRhbGxpc3RpbmcvaG9zcGl0YWxsaXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9zcGl0YWxsaXN0aW5nL2hvc3BpdGFsbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFFQSxrQkFBQTtFQUNBLCtCQUFBO0FDQ0E7O0FERUE7RUFFQSxTQUFBO0VBQ0EsK0JBQUE7QUNBQTs7QURHQTtFQUVJLCtCQUFBO0VBQ0osb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNEQTs7QURJQTtFQUlBLDhDQUFBO0FDRkE7O0FETUE7RUFFQSx1QkFBQTtBQ0pBOztBRE9BO0VBRUEscUJBQUE7QUNMQTs7QURPQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTEo7O0FET0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTEE7O0FEUUE7RUFDQSxjQUFBO0FDTEE7O0FEUUE7RUFDQSxnQkFBQTtBQ0xBOztBRFFBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGNBQUE7QUNQQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUNWQTs7QURhQTtFQUVBLCtCQUFBO0FDWEE7O0FEY0E7RUFFQSwrQkFBQTtBQ1pBOztBRGVBO0VBRUEsK0JBQUE7QUNiQTs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2RBOztBRGlCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2ZBOztBRGtCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDaEJBOztBRG1CQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUNHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUNoQko7O0FEa0JBO0VBR0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2pCQTs7QURvQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xCQTs7QURvQkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDSCxlQUFBO0VBQ0EsdUJBQUE7QUNqQkQ7O0FEb0JDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNsQkE7O0FEcUJBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDbkJBOztBRHNCQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ3BCQTs7QUR1QkE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7QUNyQkE7O0FEd0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdEJBOztBRHlCQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQ3ZCQTs7QUQwQkE7RUFFQSxjQUFBO0FDeEJBOztBRDJCQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3pCQTs7QUQ0QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQzFCQTs7QUQ2QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzNCQTs7QUQ4QkE7RUFFQSxtQkFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUM1Qko7O0FEK0JBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzVCQSIsImZpbGUiOiJzcmMvYXBwL2hvc3BpdGFsbGlzdGluZy9ob3NwaXRhbGxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICB9XHJcbi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbndoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcbndoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluaG9zcGl0YWwgaW9uLWl0ZW1cclxue1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbi0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbmJvcmRlcjpub25lO1xyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cclxuLm1haW5ob3NwaXRhbFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMTVweDtcclxubWFyZ2luLXRvcDoxMnB4O1xyXG59XHJcblxyXG4ucmVkXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxufVxyXG5cclxuLmhvc3BpdGFsYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMHB4O1xyXG5cclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5cclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4udG9vbGJhci10aXRsZSBcclxue1xyXG53aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUtZGVmYXVsdFxyXG57XHJcbndoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob3NwaXRhbGFyZWEgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoxOXB4O1xyXG5mb250LXNpemU6MTRweDtcclxuY29sb3I6IzVENTY1NjtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4uaG9zcGl0YWxhcmVhIGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmxpbmUtaGVpZ2h0OjI4cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxuZm9udC1zaXplOjIycHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOiAzOHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mbG9hdDpsZWZ0O1xyXG5tYXJnaW4tYm90dG9tOjMwcHg7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjg1JTtcclxuXHQtLWJveC1zaGFkb3c6bm9uZTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjM1cHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuLm5ld2VkaXR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDAuMjQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4wODtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTppbmhlcml0O1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbm1hcmdpbi1yaWdodDowO1xyXG5tYXJnaW4tYm90dG9tOjExcHg7XHJcbn1cclxuXHJcbi5jYXJkYXJlYSBoMlxyXG57XHJcbndpZHRoOjc1JTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlYXJlYVxyXG57XHJcbndpZHRoOjI1JTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxubWFyZ2luLXRvcDo2cHg7XHJcbn1cclxuXHJcbi5zaWRlYXJlYSBpbWdcclxue1xyXG5tYXJnaW4tbGVmdDoxMnB4O1xyXG53aWR0aDoxOHB4O1xyXG59XHJcblxyXG4ucmF0aW5nXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5yYXRpbmcgaW9uLWljb25cclxue1xyXG5jb2xvcjojRDZENUQ4O1xyXG5tYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcblxyXG4ucmF0aW5nIGlvbi1pY29uLm5ld2ljb25cclxue1xyXG5jb2xvcjojRjVEOTM3O1xyXG59XHJcblxyXG4ucmF0aW5nIGg2XHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5tYXJnaW46MCA4cHggMCAwOyBcclxuY29sb3I6IzVENTY1NjtcclxufVxyXG5cclxuLmNhcmRhcmVhIHB7XHJcblxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLWJvdHRvbTowO1xyXG5mb250LXNpemU6MTJweDtcclxubWFyZ2luLXRvcDowO1xyXG5jb2xvcjojNUQ1NjU2O1xyXG59XHJcblxyXG4uY2FyZGFyZWEgaDR7XHJcblxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luOjA7XHJcbnRleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50O1xyXG5mb250LXNpemU6MTJweDtcclxuY29sb3I6IzVENTY1NjtcclxufVxyXG5cclxuLmNhcmRhcmVhIHNwYW5cclxue1xyXG5iYWNrZ3JvdW5kOiAjNTkyZDhkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiNtYXB7XHJcbndpZHRoOjEwMCU7XHJcbm1pbi1oZWlnaHQ6IDQxNXB4O1xyXG5oZWlnaHQ6NjAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxubWFyZ2luLWJvdHRvbToxNnB4O1xyXG59IiwiI21hcCB7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluaG9zcGl0YWwgaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmhvc3BpdGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGNzEzMTM7XG59XG5cbi5ob3NwaXRhbGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWRlZmF1bHQge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uaG9zcGl0YWxhcmVhIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmhvc3BpdGFsYXJlYSBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDM4cHg7XG59XG5cbi5uZXd0ZXh0IGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAzNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ld2VkaXQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwLjI0O1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4wODtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xufVxuXG4uY2FyZGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG4uY2FyZGFyZWEgaDIge1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2lkZWFyZWEge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnNpZGVhcmVhIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLnJhdGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmF0aW5nIGlvbi1pY29uIHtcbiAgY29sb3I6ICNENkQ1RDg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucmF0aW5nIGlvbi1pY29uLm5ld2ljb24ge1xuICBjb2xvcjogI0Y1RDkzNztcbn1cblxuLnJhdGluZyBoNiB7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwIDhweCAwIDA7XG4gIGNvbG9yOiAjNUQ1NjU2O1xufVxuXG4uY2FyZGFyZWEgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNUQ1NjU2O1xufVxuXG4uY2FyZGFyZWEgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1RDU2NTY7XG59XG5cbi5jYXJkYXJlYSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzU5MmQ4ZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MTVweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/hospitallisting/hospitallisting.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/hospitallisting/hospitallisting.page.ts ***!
  \*********************************************************/
/*! exports provided: HospitallistingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitallistingPage", function() { return HospitallistingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let HospitallistingPage = class HospitallistingPage {
    constructor(navController, translate, alertController, iab, callNumber, platform, route, router, httpClient) {
        this.navController = navController;
        this.translate = translate;
        this.alertController = alertController;
        this.iab = iab;
        this.callNumber = callNumber;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.infoWindows = [];
        this.options = {
            location: 'no',
            hidden: 'no',
            zoom: 'no',
            hideurlbar: 'yes',
            toolbar: 'no',
            beforeload: 'yes'
        };
        this.markers = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.markers = JSON.parse(this.router.getCurrentNavigation().extras.state.data);
                this.lat = this.router.getCurrentNavigation().extras.state.lat;
                this.longi = this.router.getCurrentNavigation().extras.state.longi;
                this.address = this.router.getCurrentNavigation().extras.state.address;
                // var data1 = {'latitude' : this.lat , 'longitude' : this.longi, 'title' : this.address}
                //this.markers.push(data1)
                console.log(this.markers);
                // console.log(this.location)
                // console.log(this.lat)
                // console.log(this.longi)
                // console.log(this.address)
            }
        });
    }
    callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);
            //this.listing_data = results;
            for (var i = 0; i < results.length; i++) {
                results[i].imgsrc = 'assets/images/icons/numberlisting/number' + i + 1;
                console.log(results);
                //createMarker(results[i]);
            }
            this.markers = results;
            // var title = localStorage.getItem('address')
            // var lat1 = localStorage.getItem('lat') ;                                
            // var longi1 = localStorage.getItem('longi') 
            console.log(this.markers);
            // let navigationExtras: NavigationExtras = {
            //   state: {
            //     data: results,
            //     lat: lat1,
            // longi: longi1,
            // address: title
            //   }
            // };
            // this.navController.navigateForward(['/hospitallisting'],navigationExtras);
        }
    }
    ngOnInit() {
    }
    direction(item) {
        // if(this.platform.is('android'))
        // {
        var lat1 = localStorage.getItem('lat');
        var longi1 = localStorage.getItem('longi');
        let destination = item.geometry.location.lat + ',' + item.geometry.location.lng;
        //let source = lat1 + ',' + longi1;
        //  let source = '51.8642112' + ',' + '-2.2380335';
        // console.log(source)
        let label = encodeURI('My');
        //  console.log('geo:'+source+'?q=' + destination + '(' + label + ')', '_system')
        //window.open('geo:'+source+'?q=' + destination + '(' + label + ')', '_system');
        // this.iab.create('http://maps.google.com/maps?saddr='+source + '&daddr='+destination, '_system');
        this.iab.create('http://maps.google.com/maps?daddr=' + destination, '_system');
        //    let ref =   this.iab.create('http://101.53.143.7/~dataduck/safecity_webapp/shareIncident-form', '_self ',this.options);
        //    console.log(ref)
        //    ref.on('loadstart').subscribe(event => { 
        //    // alert(event.type + ' - ' + event.url); 
        //    // ref.close();
        // });
        //alert(JSON.stringify(ref))
        //ref.addEventListener('loadstart',mycallback)
        //  
        //this.iab.create('http://maps.google.com/maps?daddr='+destination, '_system')
        //    var  app = this.launchNavigator.APP.GOOGLE_MAPS;
        //    this.launchNavigator.navigate([item.geometry.location.lat,item.geometry.location.lng], {
        //     start: lat1 +',' +longi1,app
        // });
        //}
        //  google.maps.event.addListenerOnce('domready',() =>{
        //   document.getElementById('navigate').addEventListener('click',() =>{
        //     console.log('direcetion clicked')
        //     window.open('https://www.google.com/maps/dir?api=AIzaSyA-RG4hM7qRh3jHfOwSuUOBexPTn0CZf6w&destination=' +this.lat +',' + this.longi);
        //   })
        // })
    }
    call(place_id) {
        console.log('call clicked', place_id);
        var service = new google.maps.places.PlacesService(this.map);
        var req = { placeId: place_id };
        service.getDetails(req, callback => {
            console.log(callback);
            var data = callback;
            console.log(data);
            if (data.formatted_phone_number) {
                this.callNumber.callNumber(data.formatted_phone_number, true)
                    .then(res => console.log('Launched dialer!', res))
                    .catch(err => console.log('Error launching dialer', err));
                console.log(data.formatted_phone_number);
            }
            else {
                this.presentAlert();
            }
        }, err => {
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var message;
            var btn_msg;
            this.translate.get('contact_number_not_found').subscribe((res) => {
                message = res;
            });
            this.translate.get('Okay').subscribe((res) => {
                btn_msg = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                message: message,
                mode: 'ios',
                buttons: [btn_msg]
            });
            yield alert.present();
        });
    }
    ionViewDidEnter() {
        this.showMap();
    }
    addMarkersToMap(markers) {
        console.log('------------', markers);
        for (let marker of markers) {
            console.log(marker.geometry.location.lat);
            console.log(JSON.stringify(marker.geometry.location.lat));
            let position = new google.maps.LatLng(marker.geometry.location.lat, marker.geometry.location.lng);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.name,
                latitude: marker.geometry.location.lat,
                longitude: marker.geometry.location.lng,
                animation: 'DROP',
                icon: marker.pinicon,
            });
            mapMarker.setMap(this.map);
            // google.maps.event.addListener(mapMarker, 'dragend', function()
            // {
            //   console.log(mapMarker)
            //     var markerlatlong = mapMarker.getPosition();
            //     console.log("latlong   "+markerlatlong);
            //     console.log("lat    "+mapMarker.getPosition().lat());
            //     console.log("long   "+mapMarker.getPosition().lng());
            //     //this.placeMarkerAndPanTo(e.latLng, this.map); commented
            // var lat= JSON.stringify(mapMarker.getPosition().lat());
            // var longi = JSON.stringify(mapMarker.getPosition().lng());
            // localStorage.setItem('lat',lat)                                 
            // localStorage.setItem('longi',longi) 
            // //code for getting formatted address from the selected latitude and longitude 
            // var geocoder = new google.maps.Geocoder();
            // const latlng = {
            //   lat: parseFloat(lat),
            //   lng: parseFloat(longi)
            // };
            // geocoder.geocode(
            //   { location: latlng },
            //   (
            //     results,
            //     status
            //   ) => {
            //     if (status === "OK") {
            //       if (results[0]) {
            //        this.title =  results[0].formatted_address;
            //        localStorage.setItem('address',this.title)
            //        console.log(this.title)
            //        //this.markers = [];
            // var title = localStorage.getItem('address')
            // var lat1 = localStorage.getItem('lat') ;                                
            // var longi1 = localStorage.getItem('longi') 
            // console.log(title)
            // let position = new google.maps.LatLng(lat1, longi1);
            // mapMarker.position = position,
            // mapMarker.title = title,
            // mapMarker.latitude = lat1,
            // mapMarker.longitude = longi1,
            // mapMarker.animation = 'DROP',
            // mapMarker.draggable =true, 
            // mapMarker.setMap(this.map);
            // //var self = this;
            // this.addInfoWindowToMarker(mapMarker);
            // var data = {'latitude' : lat1, 'longitude' : longi1, 'title' : title}
            // this.markers = data;
            // console.log('3',this.markers)
            //       } else {
            //         window.alert("No results found");
            //       }
            //     } else {
            //       window.alert("Geocoder failed due to: " + status);
            //     }
            //   }
            // );
            // }.bind(this));
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        console.log(marker);
        console.log(marker.latitude);
        console.log(marker.longitude);
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
            gestureHandling: 'cooperative',
            fullscreenControl: false
        };
        console.log(options);
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        let position = new google.maps.LatLng(this.lat, this.longi);
        let mapMarker1 = new google.maps.Marker({
            position: position,
            title: this.address,
            latitude: this.lat,
            longitude: this.longi,
            animation: 'DROP',
        });
        mapMarker1.setMap(this.map);
        //var  service = new google.maps.places.PlacesService(this.map);
        // for (var i = 0; i < this.markers.length; i++) {
        // var req = {
        //           placeId:this.markers[i].place_id
        //         }
        //         service.getDetails(req,callback =>{
        //           console.log(callback)
        //           var data = callback
        //           console.log(data)
        //           this.markers[i].formatted_address = JSON.stringify(data[i].formatted_address)
        //           this.markers[i].formatted_phone_number = JSON.stringify(data[i].formatted_phone_number)
        //         },err=>{
        //         })
        //       }
        let infoWindowContent1 = '<div id="content">' +
            '<h5 id="firstHeading" class"firstHeading">' + mapMarker1.title + '</h5>' +
            '<p>Latitude: ' + mapMarker1.latitude + '</p>' +
            '<p>Longitude: ' + mapMarker1.longitude + '</p>' +
            '</div>';
        let infoWindow1 = new google.maps.InfoWindow({
            content: infoWindowContent1
        });
        console.log(this.markers);
        this.addMarkersToMap(this.markers);
    }
    hospital() {
        this.navController.navigateForward(`/hospital`);
    }
};
HospitallistingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], HospitallistingPage.prototype, "mapRef", void 0);
HospitallistingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hospitallisting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hospitallisting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hospitallisting/hospitallisting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hospitallisting.page.scss */ "./src/app/hospitallisting/hospitallisting.page.scss")).default]
    })
], HospitallistingPage);



/***/ })

}]);
//# sourceMappingURL=hospitallisting-hospitallisting-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policelisting-policelisting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/policelisting/policelisting.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policelisting/policelisting.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/help' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title ><div class=\"ion-text-wrap\">{{'police_near_your_location' | translate}}</div></ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n <div class=\"newtop\">\r\n<div class=\"segmentarea\">\r\n\t\t <div class=\"btnarea btnareaactive\">\r\n      {{'police' | translate}}\r\n\t\t </div>\r\n\t\t  <div class=\"btnarea\" (click)=\"legal()\">\r\n        {{'legal_menu' | translate}}\r\n\t\t </div>\r\n\t\t </div>\r\n\t\t </div>\r\n<div class=\"policelist\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n\t  <ion-item>\r\n <p slot=\"start\">\r\n   {{'map_location' | translate}}\r\n  </p>\r\n  <ion-label>{{address}}</ion-label>\r\n  <ion-button slot=\"end\" class=\"newedit\" (click)=\"police()\">\r\n    {{'map_edit_option' | translate}}\r\n  </ion-button>\r\n</ion-item>\r\n\t   </ion-col>\r\n   </ion-row>\r\n      <ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"mainlistingtext\">\r\n<!-- <h5>Please move the pin to the exact location:</h5> -->\r\n<div #map id=\"map\"></div>\r\n<ion-card class=\"cardarea\" *ngFor=\"let item of markers\">\r\n  <h2><span><img [src]=item.imgsrc/></span>{{item.name}}</h2>\r\n   <div class=\"sidearea\">\r\n  <img  (click)=\"call(item.place_id)\" src=\"assets/images/icons/call.svg\"/>\r\n  <img (click)=\"direction(item)\" src=\"assets/images/icons/direction.svg\"/>\r\n  </div> \r\n  <div class=\"rating\">\r\n  <h6>{{item.rating}}</h6>\r\n  <ng-template [ngIf]=\"item.rating > '1'\" [ngIfElse]=\"star1\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star1>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '1.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\" ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '2.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '3.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  <ng-template [ngIf]=\"item.rating > '4.5'\" [ngIfElse]=\"star2\">\r\n    <ion-icon name=\"star\"  class=\"newicon\"></ion-icon>\r\n  </ng-template>\r\n  <ng-template #star2>\r\n    <ion-icon name=\"star\"  ></ion-icon>\r\n  </ng-template>\r\n  \r\n  \r\n  \r\n  </div>\r\n  <p>{{item.vicinity}}</p>\r\n  <h4>Open 24 hours</h4>\r\n  </ion-card>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n      </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/policelisting/policelisting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/policelisting/policelisting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PolicelistingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicelistingPageRoutingModule", function() { return PolicelistingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _policelisting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policelisting.page */ "./src/app/policelisting/policelisting.page.ts");




const routes = [
    {
        path: '',
        component: _policelisting_page__WEBPACK_IMPORTED_MODULE_3__["PolicelistingPage"]
    }
];
let PolicelistingPageRoutingModule = class PolicelistingPageRoutingModule {
};
PolicelistingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicelistingPageRoutingModule);



/***/ }),

/***/ "./src/app/policelisting/policelisting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/policelisting/policelisting.module.ts ***!
  \*******************************************************/
/*! exports provided: PolicelistingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicelistingPageModule", function() { return PolicelistingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _policelisting_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policelisting-routing.module */ "./src/app/policelisting/policelisting-routing.module.ts");
/* harmony import */ var _policelisting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./policelisting.page */ "./src/app/policelisting/policelisting.page.ts");








let PolicelistingPageModule = class PolicelistingPageModule {
};
PolicelistingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _policelisting_routing_module__WEBPACK_IMPORTED_MODULE_6__["PolicelistingPageRoutingModule"]
        ],
        declarations: [_policelisting_page__WEBPACK_IMPORTED_MODULE_7__["PolicelistingPage"]]
    })
], PolicelistingPageModule);



/***/ }),

/***/ "./src/app/policelisting/policelisting.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/policelisting/policelisting.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.policelist {\n  width: 100%;\n  height: auto;\n  padding: 0 15px;\n}\n\n.mainlistingtext {\n  width: 100%;\n  height: auto;\n  padding: 0 0px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\nion-title .toolbar-title {\n  white-space: normal !important;\n}\n\n.mainlistingtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #5D5656;\n  margin-top: 5px;\n}\n\n.mainlistingtext h4 {\n  width: 100%;\n  height: auto;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 6px;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  font-family: \"Lato\";\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 28px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 15px auto 25px;\n  --box-shadow:0;\n  text-align: center;\n}\n\nion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0;\n  margin-top: 65px;\n  border: none;\n}\n\nion-segment {\n  border-radius: 4px;\n  margin-top: 25px;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.segmentarea {\n  width: 100%;\n  background-color: #fcfafd;\n  padding: 1px 2px;\n  float: left;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.btnarea {\n  --background: none;\n  --background-checked: none;\n  --background-hover: none;\n  --background-hover-opacity: 0;\n  --background-focused: none;\n  --background-focused-opacity: 0;\n  --border-radius: 7px;\n  --border-width: 1px;\n  --border-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);\n  --border-style: solid;\n  --indicator-box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);\n  --indicator-color: var(--ion-color-step-350, var(--ion-background-color, #fff));\n  --indicator-height: 100%;\n  --indicator-transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --transition: 100ms all linear;\n  --padding-top: 0;\n  --padding-end: 13px;\n  --padding-bottom: 0;\n  --padding-start: 13px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  position: relative;\n  flex-basis: 0px;\n  flex-direction: row;\n  min-width: 70px;\n  min-height: 28px;\n  transform: translate3d(0px, 0px, 0px);\n  font-size: 13px;\n  font-weight: 450;\n  line-height: 35px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  color: #592D8D;\n}\n\n.btnareaactive {\n  background-color: white;\n  border-radius: 4px;\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: auto;\n  color: var(--color);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-kerning: none;\n  cursor: pointer;\n  flex: 1 1 auto;\n  text-decoration: none;\n  color: #592D8D;\n  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.17);\n}\n\n.newedit {\n  --background: transparent;\n  color: #592D8D;\n  --background-hover: #ffffff;\n  --background-focused: #ffffff;\n  --background-activated-opacity: 0;\n  --background-focused-opacity: 0.24;\n  --background-hover-opacity: 0.08;\n  --box-shadow: none;\n  font-size: 14px;\n  text-transform: inherit;\n}\n\nion-label {\n  white-space: inherit !important;\n}\n\n.newtop {\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  position: fixed;\n  z-index: 9;\n}\n\n.cardarea {\n  width: 100%;\n  height: auto;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  padding: 10px;\n  border-radius: 6px;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 11px;\n}\n\n.cardarea h2 {\n  width: 75%;\n  height: auto;\n  float: left;\n  font-size: 15px;\n  font-weight: 500;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.sidearea {\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n  margin-top: 6px;\n}\n\n.sidearea img {\n  margin-left: 12px;\n  width: 18px;\n}\n\n.rating {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.rating ion-icon {\n  color: #D6D5D8;\n  margin-right: 5px;\n}\n\n.rating ion-icon.newicon {\n  color: #F5D937;\n}\n\n.rating h6 {\n  height: auto;\n  float: left;\n  font-size: 12px;\n  margin: 0 8px 0 0;\n  color: #5D5656;\n}\n\n.cardarea p {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 0;\n  font-size: 12px;\n  margin-top: 0;\n  color: #5D5656;\n}\n\n.cardarea h4 {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0;\n  font-size: 12px;\n  color: #5D5656;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n  padding: 0 15px;\n  margin-bottom: 16px;\n}\n\n.cardarea span {\n  background: #592d8d;\n  color: #fff;\n  font-size: 9px;\n  border-radius: 2px;\n  padding: 0;\n  margin-bottom: 5;\n  margin-right: 5px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9wb2xpY2VsaXN0aW5nL3BvbGljZWxpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wb2xpY2VsaXN0aW5nL3BvbGljZWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0MsU0FBQTtFQUNHLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTkE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFNBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNDO0VBRUQsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUEE7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0FDVkE7O0FEYUE7RUFDSSw4QkFBQTtBQ1ZKOztBRGNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVB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O0FENkJBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDM0JBOztBRDhCQTtFQUVBLGNBQUE7QUM1QkE7O0FEK0JBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDN0JBOztBRGdDQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDOUJBOztBRGlDQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQy9CQTs7QURrQ0E7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDL0JBOztBRGlDQTtFQUVBLG1CQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQy9CSiIsImZpbGUiOiJzcmMvYXBwL3BvbGljZWxpc3RpbmcvcG9saWNlbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbiBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LnBvbGljZWxpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDE1cHg7XHJcbn1cclxuXHJcbi5tYWlubGlzdGluZ3RleHRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDBweDtcclxuXHJcbnRleHQtYWxpZ246bGVmdDtcclxuY29sb3I6IzIyMEUwRTtcclxuXHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuaW9uLXRpdGxlIC50b29sYmFyLXRpdGxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBcclxufVxyXG5cclxuLm1haW5saXN0aW5ndGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjIwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjVweDtcclxufVxyXG5cclxuLm1haW5saXN0aW5ndGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjZweDtcclxufVxyXG5cclxuLm5ld2xhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZToxOHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0Zm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG5cdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcblxyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxubWFyZ2luOjE1cHggYXV0byAyNXB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4tLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxubWFyZ2luLXRvcDo2NXB4O1xyXG5ib3JkZXI6bm9uZTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnRcclxue1xyXG5ib3JkZXItcmFkaXVzOjRweDtcclxubWFyZ2luLXRvcDoyNXB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5zZWdtZW50YXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyNTAsIDI1MywgMSk7XHJcbnBhZGRpbmc6MXB4IDJweDtcclxuZmxvYXQ6bGVmdDtcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbm1hcmdpbi10b3A6OHB4O1xyXG59XHJcblxyXG4uYnRuYXJlYVxyXG57XHJcbi0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtLWluZGljYXRvci10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjYwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtYmFzaXM6IDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuXHQgICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjojNTkyRDhEO1xyXG59XHJcbi5idG5hcmVhYWN0aXZlXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuYm9yZGVyLXJhZGl1czo0cHg7XHJcbi0tY29sb3I6IGluaXRpYWw7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1jb2xvcik7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tY29sb3ItZGlzYWJsZWQ6IHZhcigtLWNvbG9yKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQta2VybmluZzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjojNTkyRDhEO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwwLDAsMC4xNyk7XHJcbmJveC1zaGFkb3c6IDBweCAxcHggMTFweCAxcHggcmdiYSgwLDAsMCwwLjE3KTtcclxufVxyXG4ubmV3ZWRpdHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMC4yNDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjA4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOmluaGVyaXQ7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXd0b3Bcclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kOiNmZmY7XHJcbnBhZGRpbmc6MTBweCAyMHB4O1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuei1pbmRleDo5O1xyXG59XHJcblxyXG4uY2FyZGFyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbnBhZGRpbmc6MTBweDtcclxuYm9yZGVyLXJhZGl1czo2cHg7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbm1hcmdpbi1yaWdodDowO1xyXG5tYXJnaW4tYm90dG9tOjExcHg7XHJcbn1cclxuXHJcbi5jYXJkYXJlYSBoMlxyXG57XHJcbndpZHRoOjc1JTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbm1hcmdpbi10b3A6NXB4O1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlYXJlYVxyXG57XHJcbndpZHRoOjI1JTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OnJpZ2h0O1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxubWFyZ2luLXRvcDo2cHg7XHJcbn1cclxuXHJcbi5zaWRlYXJlYSBpbWdcclxue1xyXG5tYXJnaW4tbGVmdDoxMnB4O1xyXG53aWR0aDoxOHB4O1xyXG59XHJcblxyXG4ucmF0aW5nXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5yYXRpbmcgaW9uLWljb25cclxue1xyXG5jb2xvcjojRDZENUQ4O1xyXG5tYXJnaW4tcmlnaHQ6NXB4O1xyXG59XHJcblxyXG4ucmF0aW5nIGlvbi1pY29uLm5ld2ljb25cclxue1xyXG5jb2xvcjojRjVEOTM3O1xyXG59XHJcblxyXG4ucmF0aW5nIGg2XHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5tYXJnaW46MCA4cHggMCAwOyBcclxuY29sb3I6IzVENTY1NjtcclxufVxyXG5cclxuLmNhcmRhcmVhIHB7XHJcblxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLWJvdHRvbTowO1xyXG5mb250LXNpemU6MTJweDtcclxubWFyZ2luLXRvcDowO1xyXG5jb2xvcjojNUQ1NjU2O1xyXG59XHJcblxyXG4uY2FyZGFyZWEgaDR7XHJcblxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luOjA7XHJcbmZvbnQtc2l6ZToxMnB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG59XHJcblxyXG4jbWFwe1xyXG53aWR0aDoxMDAlO1xyXG5taW4taGVpZ2h0OiA0MTVweDtcclxuaGVpZ2h0OjYwJTtcclxucGFkZGluZzowIDE1cHg7XHJcbm1hcmdpbi1ib3R0b206MTZweDtcclxufVxyXG4uY2FyZGFyZWEgc3BhblxyXG57XHJcbmJhY2tncm91bmQ6ICM1OTJkOGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ucG9saWNlbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm1haW5saXN0aW5ndGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLXRpdGxlIC50b29sYmFyLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbmxpc3Rpbmd0ZXh0IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVENTY1NjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWFpbmxpc3Rpbmd0ZXh0IGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDE1cHggYXV0byAyNXB4O1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBtYXJnaW4tdG9wOiA2NXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zZWdtZW50YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZkO1xuICBwYWRkaW5nOiAxcHggMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5idG5hcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWluZGljYXRvci1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogMTAwJTtcbiAgLS1pbmRpY2F0b3ItdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI2MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC0taW5kaWNhdG9yLXRyYW5zZm9ybTogbm9uZTtcbiAgLS10cmFuc2l0aW9uOiAxMDBtcyBhbGwgbGluZWFyO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTkyRDhEO1xufVxuXG4uYnRuYXJlYWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tY29sb3I6IGluaXRpYWw7XG4gIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yKTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1jb2xvcik7XG4gIC0tY29sb3ItZGlzYWJsZWQ6IHZhcigtLWNvbG9yKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQta2VybmluZzogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG59XG5cbi5uZXdlZGl0IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMC4yNDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDAuMDg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLm5ld3RvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbn1cblxuLmNhcmRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuLmNhcmRhcmVhIGgyIHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGVhcmVhIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5zaWRlYXJlYSBpbWcge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5yYXRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJhdGluZyBpb24taWNvbiB7XG4gIGNvbG9yOiAjRDZENUQ4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJhdGluZyBpb24taWNvbi5uZXdpY29uIHtcbiAgY29sb3I6ICNGNUQ5Mzc7XG59XG5cbi5yYXRpbmcgaDYge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMCA4cHggMCAwO1xuICBjb2xvcjogIzVENTY1Njtcbn1cblxuLmNhcmRhcmVhIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzVENTY1Njtcbn1cblxuLmNhcmRhcmVhIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzVENTY1Njtcbn1cblxuI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MTVweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNhcmRhcmVhIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjNTkyZDhkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogNTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/policelisting/policelisting.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/policelisting/policelisting.page.ts ***!
  \*****************************************************/
/*! exports provided: PolicelistingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicelistingPage", function() { return PolicelistingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let PolicelistingPage = class PolicelistingPage {
    constructor(navController, translate, alertController, iab, callNumber, route, router, httpClient) {
        this.navController = navController;
        this.translate = translate;
        this.alertController = alertController;
        this.iab = iab;
        this.callNumber = callNumber;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.infoWindows = [];
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
    ngOnInit() {
    }
    back() {
        localStorage.setItem('lat_police', this.lat);
        localStorage.setItem('longi_police', this.longi);
        localStorage.setItem('address_police', this.address);
        console.log(this.lat);
        console.log(this.longi);
        console.log(this.address);
    }
    ionViewDidEnter() {
        this.showMap();
    }
    direction(item) {
        // if(this.platform.is('android'))
        // {
        var lat1 = localStorage.getItem('lat_police');
        var longi1 = localStorage.getItem('longi_police');
        let destination = item.geometry.location.lat + ',' + item.geometry.location.lng;
        //  let source = lat1 + ',' + longi1;
        // let source = '51.8642112' + ',' + '-2.2380335';
        // console.log(source)
        let label = encodeURI('My');
        //console.log('geo:'+source+'?q=' + destination + '(' + label + ')', '_system')
        //window.open('geo:'+source+'?q=' + destination + '(' + label + ')', '_system');
        //this.iab.create('http://maps.google.com/maps?saddr='+source + '&daddr='+destination, '_system')
        this.iab.create('http://maps.google.com/maps?daddr=' + destination, '_system');
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
            gestureHandling: 'cooperative',
            // disableDefaultUI: true,
            scaleControl: true,
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
        var service = new google.maps.places.PlacesService(this.map);
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
    police() {
        this.navController.navigateForward(`/police`);
    }
    legal() {
        this.navController.navigateForward(`/legalresources`);
    }
};
PolicelistingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], PolicelistingPage.prototype, "mapRef", void 0);
PolicelistingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policelisting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./policelisting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/policelisting/policelisting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./policelisting.page.scss */ "./src/app/policelisting/policelisting.page.scss")).default]
    })
], PolicelistingPage);



/***/ })

}]);
//# sourceMappingURL=policelisting-policelisting-module-es2015.js.map
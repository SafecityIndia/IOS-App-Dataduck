(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helplines-helplines-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/helplines/helplines.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helplines/helplines.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n   <!-- <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n  </ion-buttons> -->\n  <ion-title>{{'userful_information' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"helpline\">\n<ion-row>\n <ion-col size=\"12\">\n <div class=\"helplinetext\">\n <p>{{'help_desc' | translate}} {{final_userful_info}}</p>\n </div>\n </ion-col>\n    </ion-row>\n\t<ion-row>\n <ion-col size=\"12\">\n  <ion-card *ngIf=\"response\">\n  <div class=\"helpipc\" *ngIf=\"category_val_hide\" >\n <h5>{{'ipc_code' | translate}}</h5>\n   <ion-item *ngFor=\"let item of category_val\">\n    <ion-label>{{item.title}}:<h4 class=\"heading\" >{{item.ipc_sections}}</h4></ion-label>\n  </ion-item>\n   <!-- <ion-item >\n    <ion-label>Domestic Violence:<h4 class=\"heading\" >498A</h4></ion-label>\n  </ion-item>\n  -->\n\n </div>\n \n   <div class=\"helpipc\" *ngIf=\"helpline_data_hide\" >\n <h5>{{'helpline' | translate}}</h5>\n   <ion-item *ngFor=\"let item of helpline_data\">\n    <ion-label>{{item.emergency_title}}:<h4 class=\"headingin\" >{{item.emergency_no}}</h4></ion-label>\n  </ion-item>\n   <!-- <ion-item >\n    <ion-label>Women Helpline:<h4 class=\"heading\" > 1091</h4></ion-label>\n  </ion-item>\n   <ion-item >\n    <ion-label>Women Helpline - Domestic Abuse:<h4 class=\"heading\" >181</h4></ion-label>\n  </ion-item>\n<ion-item >\n    <ion-label>Pan-India Emergency Number:<h4 class=\"heading\" >112</h4></ion-label>\n  </ion-item> -->\n </div>\n\n</ion-card>\n    </ion-col>\n    </ion-row>\n<ion-row>\n <ion-col size=\"12\">\n\n<ion-item lines=\"none\" class=\"newcardline\" (click)= \"hospital()\">\n  <ion-label>{{'view_hospital' | translate}}</ion-label>\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\n</ion-item>\n<ion-item lines=\"none\" class=\"newcardline\" (click)= \"policein()\">\n  <ion-label>{{'view_police_station' | translate}}</ion-label>\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\n</ion-item>\n<ion-item lines=\"none\" class=\"newcardline\" (click)= \"legal()\">\n  <ion-label>{{'more_legal_resources' | translate}}</ion-label>\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\n</ion-item>\n<h4 class=\"bottomline\">{{'help_chat_desc' | translate}}</h4>\n </ion-col>\n    </ion-row>\n\t\n\t  <div class=\"helplinebottom\">\n<ion-row>\n     <ion-col col-12>\n\t <ion-button expand=\"full\" shape=\"round\" fill=\"outline\"  class=\"newbtnyes\" (click)=\"report()\">{{'Share_app_with_friend' | translate}}</ion-button>\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"home()\">{{'button_go_home' | translate}}</ion-button>\n  </ion-col>\n   </ion-row>\n</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialpop/socialpop.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialpop/socialpop.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-title>\n            Share\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"newsocialin\">\n        <ion-row>\n            <ion-col size=\"4\">\n                <div (click)=\"whatsapp()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialwhat.svg\" />\n                    <p>WhatsApp</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"insta()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialinsat.svg\" />\n                    <p>Instagram</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"facebook()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialimg.svg\" />\n                    <p>Facebook</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"twitter()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialtwitter.svg\" />\n                    <p>Twitter</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"email()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialmail.svg\" />\n                    <p>Mail</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div (click)=\"sms()\" class=\"socialimgin\">\n                    <img src=\"assets/images/icons/socialmessage.svg\" />\n                    <p>Message</p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"socialbtnin\">\n        <ion-button (click)=\"pop()\" class=\"socbtn\" fill=\"clear\">Cancel</ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/helplines/helplines-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/helplines/helplines-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HelplinesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelplinesPageRoutingModule", function() { return HelplinesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _helplines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helplines.page */ "./src/app/helplines/helplines.page.ts");




const routes = [
    {
        path: '',
        component: _helplines_page__WEBPACK_IMPORTED_MODULE_3__["HelplinesPage"]
    }
];
let HelplinesPageRoutingModule = class HelplinesPageRoutingModule {
};
HelplinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelplinesPageRoutingModule);



/***/ }),

/***/ "./src/app/helplines/helplines.module.ts":
/*!***********************************************!*\
  !*** ./src/app/helplines/helplines.module.ts ***!
  \***********************************************/
/*! exports provided: HelplinesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelplinesPageModule", function() { return HelplinesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _helplines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helplines-routing.module */ "./src/app/helplines/helplines-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _helplines_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helplines.page */ "./src/app/helplines/helplines.page.ts");








let HelplinesPageModule = class HelplinesPageModule {
};
HelplinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _helplines_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelplinesPageRoutingModule"]
        ],
        declarations: [_helplines_page__WEBPACK_IMPORTED_MODULE_7__["HelplinesPage"]]
    })
], HelplinesPageModule);



/***/ }),

/***/ "./src/app/helplines/helplines.page.scss":
/*!***********************************************!*\
  !*** ./src/app/helplines/helplines.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.helpline {\n  width: 100%;\n  height: auto;\n  margin-top: 30px;\n  padding: 0 12px;\n  margin-bottom: 100px;\n}\n\n.newcardline {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n  font-size: 17px;\n  font-weight: 400;\n  --min-height: 60px;\n  background-color: #fff;\n  border: none;\n  --inner-padding-end: 15px;\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start: 20px!important;\n}\n\n.newcard ion-label {\n  white-space: inherit;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 80px;\n}\n\nion-card {\n  -webkit-margin-start: 4px;\n          margin-inline-start: 4px;\n  -webkit-margin-end: 4px;\n          margin-inline-end: 4px;\n  border-radius: 6px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n}\n\nion-card .item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start:20px;\n}\n\nion-card .sc-ion-label-ios-h {\n  white-space: inherit;\n  font-size: 17px;\n  font-weight: 400;\n  padding-right: 5px;\n}\n\nion-card .sc-ion-label-md-h {\n  white-space: inherit;\n  font-size: 17px;\n  font-weight: 400;\n  padding-right: 5px;\n}\n\n.heading {\n  color: #292020;\n  display: inline-flex;\n  font-size: 17px;\n  font-weight: 400;\n  padding-left: 0;\n  text-decoration: underline;\n}\n\n.headingin {\n  color: #592D8D;\n  display: inline-flex;\n  font-size: 17px;\n  font-weight: 500;\n  padding-left: 0;\n  text-decoration: underline;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.help h4 {\n  width: 100%;\n  height: auto;\n  float: left;\n  font-size: 14px;\n  color: #5F5E5E;\n  line-height: 21px;\n}\n\n.helplinetext {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 0 10px;\n  line-height: 25px;\n}\n\n.helplinetext p {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 400;\n  color: #292020;\n  margin-bottom: 0;\n  height: auto;\n  float: left;\n  margin-top: 0;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  --box-shadow:none;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newbtnyes {\n  color: #592D8D !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  --border-width: 1px;\n  --box-shadow:none;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto 20px;\n  text-align: center;\n}\n\n.helplinebottom {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.helpipc {\n  width: 100%;\n  height: auto;\n  margin-bottom: 25px;\n}\n\n.helpipc ion-item {\n  --min-height:28px;\n  border: none;\n  margin-bottom: 0;\n}\n\n.helpipc ion-label {\n  margin: 3px 8px 3px 0px;\n}\n\n.helpipc h5 {\n  width: 100%;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 0 15px;\n  color: #000;\n}\n\n.bottomline {\n  width: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5F5E5E;\n  line-height: 19px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9oZWxwbGluZXMvaGVscGxpbmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaGVscGxpbmVzL2hlbHBsaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBSUEsOENBQUE7QUNIQTs7QURPQTtFQUVBLHVCQUFBO0FDTEE7O0FEUUE7RUFFQSxxQkFBQTtBQ05BOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNQRDs7QURVQztFQUVBLGtCQUFBO0VBR0Qsa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDSSxrQkFBQTtFQUNKLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFDQywrQkFBQTtBQ1JEOztBRFdDO0VBQ0Esb0JBQUE7QUNSRDs7QURZQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ1ZBOztBRGFBO0VBQ0MseUJBQUE7QUNWRDs7QURhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNWRDs7QURnQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2RBOztBRGlCQTtFQUVBLHlCQUFBO1VBQUEsd0JBQUE7RUFDSSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0gsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBR0Qsa0RBQUE7QUNmQTs7QURrQkE7RUFFQyxxQ0FBQTtFQUNBLG9CQUFBO0FDaEJEOztBRG9CQztFQUVBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNsQkQ7O0FEb0JDO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xCRDs7QURxQkE7RUFFQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNuQkE7O0FEdUJBO0VBRUEsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDckJBOztBRHdCQTtFQUNJLFdBQUE7RUFDSCxlQUFBO0VBQ0EsY0FBQTtFQUVHLGlCQUFBO0VBQ0MsV0FBQTtFQUNILGdCQUFBO0VBQ0UsbUJBQUE7QUN0Qko7O0FEeUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3ZCQTs7QUQwQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN4QkE7O0FEMkJBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ3pCQTs7QUQ0QkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFdBQUE7RUFDQyxnQkFBQTtFQUNELGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzNCQTs7QUQ4QkE7RUFHQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFdBQUE7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0QsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzdCQTs7QUQrQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzdCQTs7QURpQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDL0JBOztBRGtDQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDL0JBOztBRGtDQTtFQUVBLHVCQUFBO0FDaENBOztBRG1DQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2pDQTs7QURxQ0E7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNuQ0EiLCJmaWxlIjoic3JjL2FwcC9oZWxwbGluZXMvaGVscGxpbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVscGxpbmVcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6YXV0bztcclxuXHRtYXJnaW4tdG9wOjMwcHg7XHJcblx0cGFkZGluZzowIDEycHg7XHJcblx0bWFyZ2luLWJvdHRvbToxMDBweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhcmRsaW5lXHJcblx0e1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxubWFyZ2luLXRvcDowO1xyXG5mb250LXNpemU6MTdweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgLS1taW4taGVpZ2h0OiA2MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbmJvcmRlcjpub25lO1xyXG4tLWlubmVyLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdC0tcGFkZGluZy1zdGFydDogMjBweCFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYXJkIGlvbi1sYWJlbHtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5cdH1cclxuXHRcclxuXHRcclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5cclxufVxyXG4uc2VsZWN0LXRleHQgYnV0dG9uXHJcbntwYWRkaW5nOjFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdH1cclxuXHRcclxuXHJcblx0XHJcblx0XHJcbi5uZXdzZWxlY3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDI1cHg7XHJcbm1hcmdpbi10b3A6ODBweDtcclxufVxyXG5cclxuaW9uLWNhcmRcclxue1xyXG5tYXJnaW4taW5saW5lLXN0YXJ0OiA0cHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NnB4O1xyXG5cdHBhZGRpbmctdG9wOjE1cHg7XHJcblx0cGFkZGluZy1ib3R0b206MTVweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4tbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxufVxyXG5cclxuaW9uLWNhcmQgLml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OjIwcHg7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1jYXJkIC5zYy1pb24tbGFiZWwtaW9zLWhcclxuXHR7XHJcblx0d2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0cGFkZGluZy1yaWdodDo1cHg7XHJcblx0fVxyXG5cdGlvbi1jYXJkIC5zYy1pb24tbGFiZWwtbWQtaFxyXG5cdHtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5cdGZvbnQtc2l6ZToxN3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRwYWRkaW5nLXJpZ2h0OjVweDtcclxuXHR9XHJcblxyXG4uaGVhZGluZ1xyXG57XHJcbmNvbG9yOiMyOTIwMjA7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbmZvbnQtc2l6ZToxN3B4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbnBhZGRpbmctbGVmdDowO1xyXG50ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblxyXG5cclxuLmhlYWRpbmdpblxyXG57XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbmZvbnQtc2l6ZToxN3B4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbnBhZGRpbmctbGVmdDowO1xyXG50ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmV3bGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOjE4cHg7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuXHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRmb250LXdlaWdodDo1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGVscCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5mb250LXNpemU6MTRweDtcclxuY29sb3I6IzVGNUU1RTtcclxubGluZS1oZWlnaHQ6MjFweDtcclxufVxyXG5cclxuLmhlbHBsaW5ldGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5wYWRkaW5nOjAgMTBweDtcclxubGluZS1oZWlnaHQ6MjVweDtcclxufVxyXG5cclxuLmhlbHBsaW5ldGV4dCBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuZm9udC1zaXplOjE4cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6IzI5MjAyMDtcclxubWFyZ2luLWJvdHRvbTowO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjEwMCU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdidG55ZXNcclxue1xyXG5cclxuY29sb3I6IzU5MkQ4RCAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6MTAwJTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbi0tYm94LXNoYWRvdzpub25lO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0byAyMHB4O1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uaGVscGxpbmVib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uaGVscGlwY1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tYm90dG9tOjI1cHg7XHJcbn1cclxuXHJcbi5oZWxwaXBjIGlvbi1pdGVte1xyXG4tLW1pbi1oZWlnaHQ6MjhweDtcclxuYm9yZGVyOm5vbmU7XHJcbm1hcmdpbi1ib3R0b206MDtcclxufVxyXG5cclxuLmhlbHBpcGMgaW9uLWxhYmVsXHJcbntcclxubWFyZ2luOjNweCA4cHggM3B4IDBweDtcclxufVxyXG5cclxuLmhlbHBpcGMgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5mb250LXNpemU6MTdweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5wYWRkaW5nOjAgMTVweDtcclxuY29sb3I6IzAwMDtcclxuXHJcbn1cclxuXHJcbi5ib3R0b21saW5lXHJcbntcclxud2lkdGg6MTAwJTtcclxuZm9udC1zaXplOjE0cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6IzVGNUU1RTtcclxubGluZS1oZWlnaHQ6MTlweDtcclxubWFyZ2luLXRvcDozMHB4O1xyXG59XHJcblx0XHJcblx0IiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWxwbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5uZXdjYXJkbGluZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1taW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE1cHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweCFpbXBvcnRhbnQ7XG59XG5cbi5uZXdjYXJkIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc2VsZWN0LXRleHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmluLWl0ZW0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm5ld3NlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA0cHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLWNhcmQgLml0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MjBweDtcbn1cblxuaW9uLWNhcmQgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuaW9uLWNhcmQgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGluZ2luIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uZXdsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5oZWxwIGg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1RjVFNUU7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4uaGVscGxpbmV0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5oZWxwbGluZXRleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3YnRueWVzIHtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWxwbGluZWJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWxwaXBjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmhlbHBpcGMgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6MjhweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaGVscGlwYyBpb24tbGFiZWwge1xuICBtYXJnaW46IDNweCA4cHggM3B4IDBweDtcbn1cblxuLmhlbHBpcGMgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYm90dG9tbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNUY1RTVFO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/helplines/helplines.page.ts":
/*!*********************************************!*\
  !*** ./src/app/helplines/helplines.page.ts ***!
  \*********************************************/
/*! exports provided: HelplinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelplinesPage", function() { return HelplinesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ "./node_modules/@awesome-cordova-plugins/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _socialpop_socialpop_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../socialpop/socialpop.page */ "./src/app/socialpop/socialpop.page.ts");










let HelplinesPage = class HelplinesPage {
    constructor(navController, socialSharing, popoverController, router, httpClient, translate, sharedservice, platform) {
        this.navController = navController;
        this.socialSharing = socialSharing;
        this.popoverController = popoverController;
        this.router = router;
        this.httpClient = httpClient;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.platform = platform;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/getHelplines/';
        this.some_useful_info = [];
        this.some_useful_info_final = [];
        this.shared_data = this.sharedservice.getData();
        this.helpline_data_hide = false;
        this.category_val_hide = false;
        this.response = false;
        this.incident_id = this.shared_data['incident_id'];
        console.log(this.incident_id);
        this.gethelplineinfo();
    }
    ngOnInit() {
    }
    //  ionViewDidEnter() {
    //   this.initAutocomplete()
    //     this.subscription = this.platform.backButton.subscribe(() => {
    //       navigator['app'].exitApp();
    //     });
    // }
    //  ionViewWillLeave() {
    //     this.subscription.unsubscribe();
    //   }
    ionViewDidEnter() {
        // alert('enter')
        this.subscription = this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            //navigator['app'].exitApp();
            //alert('hit')
        });
    }
    ionViewWillLeave() {
        // alert('exit')
        this.subscription.unsubscribe();
    }
    gethelplineinfo() {
        let data = new FormData();
        data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        data.append('city_id', localStorage.getItem('City_id'));
        data.append('inc_id', this.incident_id);
        // let loader = this.loadingCtrl.create({
        //   });  
        // loader.present();
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('getHelplines/', data).subscribe((rdata) => {
            console.log(rdata);
            console.log(rdata);
            this.response = true;
            this.helpline_data = rdata.helpline;
            this.category_val = rdata.CategoryVal;
            if (this.helpline_data.length > 0) {
                this.helpline_data_hide = true;
            }
            if (this.category_val.length > 0) {
                this.category_val_hide = true;
            }
            console.log("list ", this.helpline_data);
            console.log("list ", this.category_val);
            var t_msg = { 'text': '' };
            var len = this.category_val.length;
            for (var i = 0; i < this.category_val.length; i++) {
                if (i == this.category_val.length - 1) {
                    if (this.category_val.length == 1) {
                        t_msg = { text: this.category_val[i].title + ':' };
                        this.some_useful_info.push(t_msg);
                    }
                    else {
                        t_msg = { text: ' and ' + this.category_val[i].title + ':' };
                        this.some_useful_info.push(t_msg);
                    }
                }
                else if (i == this.category_val.length - 2) {
                    t_msg = { text: this.category_val[i].title };
                    this.some_useful_info.push(t_msg);
                }
                else {
                    t_msg = { text: this.category_val[i].title + ', ' };
                    this.some_useful_info.push(t_msg);
                }
            }
            for (var j = 0; j < this.some_useful_info.length; j++) {
                this.some_useful_info_final.push(this.some_useful_info[j].text);
            }
            console.log(this.some_useful_info_final);
            this.translate.get('some_useful_info_regarding').subscribe((res) => {
                console.log(res);
                this.some_useful_info_regarding = res;
            });
            this.final_userful_info = this.some_useful_info_regarding + this.some_useful_info_final.join('');
            console.log(this.final_userful_info);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        //     this.httpClient.post(this.apiUrl,data)
        //     .subscribe((rdata: any) => {
        //       console.log(rdata);
        //       this.helpline_data = rdata.helpline;
        //       this.category_val = rdata.CategoryVal;
        //        console.log("list ",this.helpline_data)
        //        console.log("list ",this.category_val)
        // var t_msg = {'text' : ''}
        // var len = this.category_val.length
        //        for(var i =0;i < this.category_val.length;i++)
        //        {
        //         if(i == this.category_val.length -1)
        //         {
        //           if(this.category_val.length == 1)
        //           {
        //             t_msg = { text : this.category_val[i].title +':'}
        //             this.some_useful_info.push(t_msg)
        //           }
        //           else
        //           {
        //             t_msg = { text : ' and '+ this.category_val[i].title +':'}
        //             this.some_useful_info.push(t_msg)
        //           }
        //         }
        //         else if(i   == this.category_val.length -2)
        //         {
        //           t_msg = { text : this.category_val[i].title}
        //           this.some_useful_info.push(t_msg)
        //         }
        //         else{
        //           t_msg = { text : this.category_val[i].title + ', '}
        //           this.some_useful_info.push(t_msg)
        //         }
        //        }
        //        for(var j =0;j < this.some_useful_info.length;j++)
        //        {
        //         this.some_useful_info_final.push(this.some_useful_info[j].text)
        //        }
        //        console.log(this.some_useful_info_final)
        //       this.final_userful_info = 'Here’s some useful information regarding ' + this.some_useful_info_final.join('')
        //        console.log(this.final_userful_info)
        //     },error => {
        //     });
    }
    home() {
        this.navController.navigateForward(`/home`);
    }
    hospital() {
        this.navController.navigateForward(`/hospital`);
    }
    policein() {
        this.navController.navigateForward(`/police`);
    }
    legal() {
        this.navController.navigateForward(`/legalresources`);
    }
    report() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        if (this.platform.is('android')) {
            this.socialSharing.share(share_msg, null, null, 'webapp.safecity.in');
        }
        else {
            console.log('else not android ');
            this.presentPopover('ev');
        }
        this.navController.navigateForward(`/chat`);
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _socialpop_socialpop_page__WEBPACK_IMPORTED_MODULE_8__["SocialpopPage"],
                cssClass: 'popover_setting',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    email() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaEmail(share_msg + 'webapp.safecity.in', null, null);
    }
    facebook() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaFacebook(share_msg + 'webapp.safecity.in', null, null);
    }
    insta() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaInstagram(share_msg + 'webapp.safecity.in', null);
    }
    sms() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaSMS(share_msg + 'webapp.safecity.in', null);
    }
    twitter() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaTwitter(share_msg + 'webapp.safecity.in', null);
    }
    whatsapp() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaWhatsApp(share_msg + 'webapp.safecity.in', null);
    }
};
HelplinesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
HelplinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helplines',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helplines.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/helplines/helplines.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helplines.page.scss */ "./src/app/helplines/helplines.page.scss")).default]
    })
], HelplinesPage);



/***/ }),

/***/ "./src/app/socialpop/socialpop.page.scss":
/*!***********************************************!*\
  !*** ./src/app/socialpop/socialpop.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 45px;\n}\n\n.socialimgin {\n  width: 100%;\n  margin: 0 auto 15px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.newsocialin {\n  padding: 0 15px;\n}\n\n.socialimgin p {\n  width: 100%;\n  color: #292020;\n  font-size: 10px;\n  margin: 0;\n}\n\n.socialbtnin {\n  border-top: 1px solid #E1D8EB;\n  width: 100%;\n  margin: 5px auto 0;\n  text-align: center;\n}\n\n.socbtn {\n  color: #592D8D;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: inherit;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\nion-title {\n  color: #292020;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zb2NpYWxwb3Avc29jaWFscG9wLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc29jaWFscG9wL3NvY2lhbHBvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc29jaWFscG9wL3NvY2lhbHBvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uc29jaWFsaW1naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV3c29jaWFsaW4ge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uc29jaWFsaW1naW4gcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc29jaWFsYnRuaW4ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUQ4RUI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG8gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2J0biB7XHJcbiAgICBjb2xvcjogIzU5MkQ4RDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufSIsIi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA0NXB4O1xufVxuXG4uc29jaWFsaW1naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdzb2NpYWxpbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnNvY2lhbGltZ2luIHAge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc29jaWFsYnRuaW4ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRDhFQjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4IGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc29jYnRuIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/socialpop/socialpop.page.ts":
/*!*********************************************!*\
  !*** ./src/app/socialpop/socialpop.page.ts ***!
  \*********************************************/
/*! exports provided: SocialpopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialpopPage", function() { return SocialpopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ "./node_modules/@awesome-cordova-plugins/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





let SocialpopPage = class SocialpopPage {
    constructor(nav, popoverController, socialSharing, translate) {
        this.nav = nav;
        this.popoverController = popoverController;
        this.socialSharing = socialSharing;
        this.translate = translate;
    }
    ngOnInit() { }
    eventFromPopover() {
        this.popoverController.dismiss('edupala.com');
    }
    email() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaEmail(share_msg + 'webapp.safecity.in', null, null);
        this.pop();
    }
    facebook() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaFacebook(share_msg + 'webapp.safecity.in', null, null);
        this.pop();
    }
    insta() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaInstagram(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    sms() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaSMS(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    twitter() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaTwitter(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    whatsapp() {
        var share_msg;
        this.translate.get('share_msg').subscribe((res) => {
            console.log(res);
            share_msg = res;
        });
        this.socialSharing.shareViaWhatsApp(share_msg + 'webapp.safecity.in', null);
        this.pop();
    }
    pop() {
        this.nav.pop();
    }
};
SocialpopPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
SocialpopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-socialpop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./socialpop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialpop/socialpop.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./socialpop.page.scss */ "./src/app/socialpop/socialpop.page.scss")).default]
    })
], SocialpopPage);



/***/ })

}]);
//# sourceMappingURL=helplines-helplines-module-es2015.js.map
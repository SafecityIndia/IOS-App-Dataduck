(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>{{'help_menu' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"help\">\r\n   \r\n<ion-row>\r\n <ion-col size=\"12\">\r\n  <!-- <form [formGroup]=\"form\"> -->\r\n <ion-item>\r\n    <ion-label class=\"newlabel\" position=\"stacked\">{{'emergency_number_in' | translate}}</ion-label>\r\n    <ion-select placeholder=\"{{'select_one' | translate}}\" (ionChange)=\"onOptChange($event)\"  [(ngModel)]=\"country\">\r\n      <ion-select-option  *ngFor=\"let item of country_list\" value=\"{{item.country_id}}\">{{item.country_name}}</ion-select-option>\r\n    </ion-select>\r\n\t\r\n  </ion-item>\r\n  <!-- </form> -->\r\n  <ion-card  *ngIf=\"heliplinelist.length > 0\">\r\n  <ion-item *ngFor=\"let item of heliplinelist\">\r\n    <ion-label>{{item.emergency_title}}:<h4 class=\"heading\" (click)=\"call(item.emergency_no)\">{{item.emergency_no}}</h4></ion-label>\r\n  </ion-item>\r\n  <!-- <ion-item >\r\n\r\n    <ion-label>Domestic Violence Helpline: <h4 class=\"heading\">100</h4></ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label>Women’s Safety Hotline: <h4 class=\"heading\">100</h4></ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n     <ion-label>Police Emergency Number: <h4 class=\"heading\">100</h4></ion-label>\r\n  </ion-item> -->\r\n</ion-card>\r\n   </ion-col>\r\n    </ion-row>\r\n<ion-row>\r\n <ion-col size=\"12\">\r\n<ion-item lines=\"none\" class=\"newcardhelp\" (click)= \"hospital()\">\r\n  <ion-label>{{'view_hospital' | translate}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcardhelp\" (click)= \"policein()\">\r\n  <ion-label>{{'view_police_station' | translate}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcardhelp\" (click)= \"legal()\">\r\n  <ion-label>{{'more_legal_resources' | translate}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n </ion-col>\r\n    </ion-row>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/help/help-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function() { return HelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-routing.module */ "./src/app/help/help-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help.page */ "./src/app/help/help.page.ts");








let HelpPageModule = class HelpPageModule {
};
HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_7__["HelpPage"]]
    })
], HelpPageModule);



/***/ }),

/***/ "./src/app/help/help.page.scss":
/*!*************************************!*\
  !*** ./src/app/help/help.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.help {\n  width: 100%;\n  height: auto;\n  margin-top: 30px;\n  padding: 0 12px;\n  margin-bottom: 100px;\n}\n\n.newcardhelp {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n  font-size: 17px;\n  font-weight: 400;\n  --min-height: 60px;\n  background-color: #fff;\n  padding-right: 10px;\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start: 20px!important;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n  margin-bottom: 10px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\nion-item {\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0 0;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  margin-bottom: 10px;\n  border: none;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 80px;\n}\n\nion-card {\n  -webkit-margin-start: 4px;\n          margin-inline-start: 4px;\n  -webkit-margin-end: 4px;\n          margin-inline-end: 4px;\n  border-radius: 6px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin: 0;\n}\n\nion-card .item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --padding-start:20px;\n}\n\nion-card .sc-ion-label-ios-h {\n  white-space: inherit;\n  font-size: 17px;\n  font-weight: 400;\n  padding-right: 5px;\n  white-space: inherit;\n  margin: 0;\n}\n\nion-card .sc-ion-label-md-h {\n  white-space: inherit;\n  font-size: 17px;\n  font-weight: 400;\n  padding-right: 5px;\n  margin: 0;\n}\n\n.item .sc-ion-label-ios-h {\n  white-space: inherit;\n}\n\n.item .sc-ion-label-md-h {\n  white-space: inherit;\n}\n\n.newcardhelp.md {\n  --inner-padding-end: 12px;\n}\n\n.heading {\n  color: #592D8D;\n  display: inline-flex;\n  font-size: 17px;\n  font-weight: bold;\n  font-weight: 500;\n  padding-left: 0;\n  text-decoration: underline;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 17px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 500;\n  margin-bottom: 20px;\n  transform: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIiwic3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTkE7O0FEU0E7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDQSxnQkFBQTtBQ05BOztBRFNBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNDO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ1BEOztBRFVDO0VBRUEsa0JBQUE7RUFHRCxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNJLGtCQUFBO0VBQ0osc0JBQUE7RUFDSSxtQkFBQTtFQUNKLHFDQUFBO0VBQ0MsK0JBQUE7QUNSRDs7QURZQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVkE7O0FEWUE7RUFDQyx5QkFBQTtBQ1REOztBRFdBO0VBRUEsbUNBQUE7RUFDSSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0osMkJBQUE7QUNUQTs7QURhQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNWRDs7QURjRTtFQUVELHFDQUFBO0VBQ0EsdUJBQUE7RUFDSSx3QkFBQTtFQUNDLG9CQUFBO0VBQ0gsbUJBQUE7RUFDQSxZQUFBO0FDWkg7O0FEZ0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNkQTs7QURpQkE7RUFFQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0ksdUJBQUE7VUFBQSxzQkFBQTtFQUNILGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUdELGtEQUFBO0VBQ0EsU0FBQTtBQ2ZBOztBRGtCQTtFQUVDLHFDQUFBO0VBQ0Esb0JBQUE7QUNoQkQ7O0FEbUJDO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQ2pCRDs7QURvQkM7RUFFQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2xCRDs7QURzQkM7RUFFQSxvQkFBQTtBQ3BCRDs7QUR1QkM7RUFFQSxvQkFBQTtBQ3JCRDs7QUR1QkM7RUFDQSx5QkFBQTtBQ3BCRDs7QUR1QkE7RUFFQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ3JCQTs7QUR3QkE7RUFDSSxXQUFBO0VBQ0gsZUFBQTtFQUNBLGNBQUE7RUFDRyxpQkFBQTtFQUNDLFdBQUE7RUFDSCxnQkFBQTtFQUNFLG1CQUFBO0VBQ0gsa0JBQUE7QUNyQkQiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWxwXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OmF1dG87XHJcblx0bWFyZ2luLXRvcDozMHB4O1xyXG5cdHBhZGRpbmc6MCAxMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206MTAwcHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYXJkaGVscFxyXG5cdHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbi1tb3otYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbmJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5tYXJnaW4tYm90dG9tOjE1cHg7XHJcbm1hcmdpbi10b3A6MDtcclxuZm9udC1zaXplOjE3cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIC0tbWluLWhlaWdodDogNjBweDtcclxuYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHQtLXBhZGRpbmctc3RhcnQ6IDIwcHghaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHRcclxuaW9uLXNlbGVjdCB7XHJcblxyXG5ib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbmhlaWdodDo0MHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zZWxlY3QtdGV4dCBidXR0b25cclxue3BhZGRpbmc6MXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbVxyXG57XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cclxuXHQgLml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcblx0ICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdCAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdFx0XHRib3JkZXI6bm9uZTtcclxuXHRcdFx0XHJcblx0fVxyXG5cdFxyXG4ubmV3c2VsZWN0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5tYXJnaW4tdG9wOjgwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkXHJcbntcclxubWFyZ2luLWlubGluZS1zdGFydDogNHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOjZweDtcclxuXHRwYWRkaW5nLXRvcDoxNXB4O1xyXG5cdHBhZGRpbmctYm90dG9tOjE1cHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbm1hcmdpbjowO1xyXG59XHJcblxyXG5pb24tY2FyZCAuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHQtLXBhZGRpbmctc3RhcnQ6MjBweDtcclxuXHR9XHJcblx0XHJcblx0aW9uLWNhcmQgLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG5cdHtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5cdGZvbnQtc2l6ZToxN3B4O1xyXG5cdGZvbnQtd2VpZ2h0OjQwMDtcclxuXHRwYWRkaW5nLXJpZ2h0OjVweDtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5cdG1hcmdpbjowO1xyXG5cdH1cclxuXHRcclxuXHRpb24tY2FyZCAuc2MtaW9uLWxhYmVsLW1kLWhcclxuXHR7XHJcblx0d2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0cGFkZGluZy1yaWdodDo1cHg7XHJcblx0bWFyZ2luOjA7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWhcclxuXHR7XHJcblx0d2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oXHJcblx0e1xyXG5cdHdoaXRlLXNwYWNlOmluaGVyaXQ7XHJcblx0fVxyXG5cdC5uZXdjYXJkaGVscC5tZHtcclxuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xyXG59XHRcclxuXHJcbi5oZWFkaW5nXHJcbntcclxuY29sb3I6IzU5MkQ4RDtcclxuZGlzcGxheTppbmxpbmUtZmxleDtcclxuZm9udC1zaXplOjE3cHg7XHJcbmZvbnQtd2VpZ2h0OmJvbGQ7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxucGFkZGluZy1sZWZ0OjA7XHJcbnRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR0cmFuc2Zvcm06aW5oZXJpdDtcclxufVxyXG5cclxuXHRcclxuXHQiLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlbHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4ubmV3Y2FyZGhlbHAge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4IWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW4taXRlbSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5uZXdzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQgLml0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MjBweDtcbn1cblxuaW9uLWNhcmQgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5uZXdjYXJkaGVscC5tZCB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDEycHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmV3bGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/help/help.page.ts":
/*!***********************************!*\
  !*** ./src/app/help/help.page.ts ***!
  \***********************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let HelpPage = class HelpPage {
    constructor(navController, formBuilder, sharedservice, router, httpClient, callNumber) {
        //   this.form = formBuilder.group({      
        //     country: [localStorage.getItem('Country_id')]
        // });
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.sharedservice = sharedservice;
        this.router = router;
        this.httpClient = httpClient;
        this.callNumber = callNumber;
        this.heliplinelist = [];
        this.sharedData = this.sharedservice.getData();
        this.apiurl = 'http://101.53.143.7/~dataduck/safecity/api/common_controller/';
        let data = new FormData();
        data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe((rdata) => {
            console.log(rdata);
            this.country_list = rdata['data'];
            console.log(this.country_list);
            //this.sharedData['country_id']
            this.getEmergencyhelplinelist(localStorage.getItem('Country_id'));
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.sharedData['roll'] = '22'
        // this.sharedservice.setData(this.sharedData)
    }
    onOptChange(e) {
        console.log(e);
        console.log(e.detail.value);
        // this.sharedData['country_id'] =e.detail.value;
        // this.sharedservice.setData(this.sharedData)
        // console.log(this.sharedData)
        this.getEmergencyhelplinelist(e.detail.value);
    }
    getEmergencyhelplinelist(country_id) {
        let data1 = new FormData();
        data1.append("security_key", '99402b5fff8f2a45890fb8bf6de094ee00a210ce');
        data1.append("country_id", country_id);
        data1.append('city_id', localStorage.getItem('City_id'));
        data1.append("lang_id", localStorage.getItem('Lang_id'));
        // console.log(this.sharedData)
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('common_controller/emergencyHelpList', data1).subscribe((rdata) => {
            console.log(rdata);
            if (rdata['status'] == true) {
                this.heliplinelist = rdata['data'];
                console.log(this.heliplinelist);
            }
            else {
                this.heliplinelist = [];
            }
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    call(no) {
        console.log('call clicked', no);
        this.callNumber.callNumber(no, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    ngOnInit() {
        setTimeout(() => {
            this.country = localStorage.getItem('Country_id');
        }, 700);
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
};
HelpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }
];
HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./help.page.scss */ "./src/app/help/help.page.scss")).default]
    })
], HelpPage);



/***/ })

}]);
//# sourceMappingURL=help-help-module-es2015.js.map
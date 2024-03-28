(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editreport-editreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editreport/editreport.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editreport/editreport.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons> \n<ion-title><div class=\"ion-text-wrap\">{{'edit_incident' | translate}}</div></ion-title>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"newbgin\">\n<ion-row>\n      <ion-col col-12>\n<ion-list>\n\n  <div id=\"edit_div\" class=\"forminci\" >\n                                        \n  </div>\n\n <!-- <ion-item>\n    <ion-label position=\"stacked\">Who are you reporting for?</ion-label>\n    <ion-select  >\n      <ion-select-option value=\"my\">Myself</ion-select-option>\n      <ion-select-option value=\"someone\">Someone else</ion-select-option>\n    </ion-select>\n  </ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Can you help us categorize the incident?</ion-label>\n  <ion-select >\n      <ion-select-option value=\"my\">Catcalling | Staring</ion-select-option>\n      <ion-select-option value=\"someone\">Someone else</ion-select-option>\n    </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">How old are you?</ion-label>\n  <ion-input type=\"text\"  ></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Please tell us your gender</ion-label>\n  <ion-select >\n      <ion-select-option value=\"male\">Male</ion-select-option>\n      <ion-select-option value=\"female\">Female</ion-select-option>\n\t  <ion-select-option value=\"others\">Others</ion-select-option>\n\t  <ion-select-option value=\"not\">Prefer not to say</ion-select-option>\n    </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Can you tell us what happened?</ion-label>\n  <ion-textarea rows=\"4\" cols=\"15\" placeholder=\"Enter any notes here...\"></ion-textarea>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">What do you think led to the attack?</ion-label>\n<ion-select >\n      <ion-select-option value=\"gender\">My gender</ion-select-option>\n      <ion-select-option value=\"sexuality\">My sexuality/perceived sexuality</ion-select-option>\n\t  <ion-select-option value=\"religion\">My ethnicity,religion, or caste</ion-select-option>\n\t  <ion-select-option value=\"harasser\">Because the harasser wanted to intimidate me</ion-select-option>\n\t    <ion-select-option value=\"relationship\">Because of my relationship status</ion-select-option>\n\t\t  <ion-select-option value=\"know\">Because the harasser wanted to sexually assault me</ion-select-option>\n\t\t  \t  <ion-select-option value=\"know\">Don’t know</ion-select-option>\n\t\t\t  \t  <ion-select-option value=\"Other\">Other </ion-select-option>\n    </ion-select>\n</ion-item>\n\n<ion-item >\n  <ion-label position=\"stacked\">Have you reported the incident to the police?</ion-label>\n  <ion-input type=\"text\"  ></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">Did you receive medical help?</ion-label>\n  <ion-input type=\"text\"  ></ion-input>\n</ion-item>\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">Location where the incident took place</ion-label>\n   <div class=\"newarea\">\n  <ion-input type=\"text\"  ></ion-input>\n   <img  src=\"assets/images/icons/location.svg\"/>\n   </div>\n</ion-item>\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">When did the incident take place?</ion-label>\n  <div class=\"newarea\">\n  <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n  <img  src=\"assets/images/icons/calendar.svg\"/>\n  </div>\n</ion-item>\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">What time did the incident take place?</ion-label>\n  <div class=\"newarea\">\n  <ion-datetime displayFormat=\"HH:mm\" placeholder=\"Select Date\"></ion-datetime>\n   <img src=\"assets/images/icons/time.svg\"/>\n   </div> \n</ion-item>-->\n\t </ion-list>\n\t \n\t  <ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" id=\"saveChanges\" shape=\"round\"  class=\"newbtn\"  (click)=\"final_Submit()\"  >{{\"button_done\"|translate}}</ion-button> \n  </ion-col>\n  </ion-row> \n\t </ion-col>\n    </ion-row>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/editreport/editreport-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/editreport/editreport-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreportPageRoutingModule", function() { return EditreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editreport.page */ "./src/app/editreport/editreport.page.ts");




const routes = [
    {
        path: '',
        component: _editreport_page__WEBPACK_IMPORTED_MODULE_3__["EditreportPage"]
    }
];
let EditreportPageRoutingModule = class EditreportPageRoutingModule {
};
EditreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditreportPageRoutingModule);



/***/ }),

/***/ "./src/app/editreport/editreport.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editreport/editreport.module.ts ***!
  \*************************************************/
/*! exports provided: EditreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreportPageModule", function() { return EditreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editreport-routing.module */ "./src/app/editreport/editreport-routing.module.ts");
/* harmony import */ var _editreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editreport.page */ "./src/app/editreport/editreport.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let EditreportPageModule = class EditreportPageModule {
};
EditreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _editreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditreportPageRoutingModule"]
        ],
        declarations: [_editreport_page__WEBPACK_IMPORTED_MODULE_6__["EditreportPage"]]
    })
], EditreportPageModule);



/***/ }),

/***/ "./src/app/editreport/editreport.page.scss":
/*!*************************************************!*\
  !*** ./src/app/editreport/editreport.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\n.newbg ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 15px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.newbg .in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.newbg.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n}\n\n.newbg ion-select {\n  width: 100%;\n  margin-top: 0;\n  white-space: inherit;\n}\n\n.newbg.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\n.newbgin {\n  width: 100%;\n  height: auto;\n  padding: 0 20px;\n  margin-top: 25px;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.newbg .item .sc-ion-label-ios-h {\n  margin-bottom: 8px;\n}\n\n.newbg .item .sc-ion-label-md-h {\n  margin-bottom: 8px;\n}\n\n.newbg ion-textarea {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.newbg .alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.newbg .alert-radio-label.sc-ion-alert-ios {\n  white-space: inherit;\n}\n\nion-alert.alert-radio-button {\n  white-space: inherit !important;\n}\n\n.my-custom-class .alert-radio-button {\n  border-bottom: 1px solid #ddd;\n}\n\n.newbgin .newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 35px auto 120px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newinput img {\n  margin-top: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  border: 1px solid #ddd;\n  padding: 8px;\n  margin-bottom: 0;\n  border-left: 0;\n  border-radius: 0 3px 3px 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.newarea {\n  display: inline-flex;\n  width: 100%;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n  white-space: inherit;\n  font-size: 15px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.alert-radio-group.alert-radio-label {\n  white-space: inherit;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  transform: inherit;\n  white-space: inherit;\n}\n\n.newinput ion-input {\n  border-radius: 3px 0px 0px 3px;\n}\n\n.newinput ion-datetime {\n  border-radius: 3px 0px 0px 3px;\n}\n\n.newbg ion-datetime {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  width: 100%;\n  --min-height: 40px;\n  --padding-top: 12px;\n}\n\n.newquestion {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9lZGl0cmVwb3J0L2VkaXRyZXBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0cmVwb3J0L2VkaXRyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFVBO0VBQ0EsY0FBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURTQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtBQ1BBOztBRFVFO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEV0E7RUFDQyx5QkFBQTtBQ1JEOztBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtBQ1JEOztBRFdDO0VBRUEscUNBQUE7RUFDQSx5QkFBQTtBQ1REOztBRFlBO0VBQ0EsV0FBQTtFQUNJLGFBQUE7RUFDSCxvQkFBQTtBQ1REOztBRFlBO0VBRUEsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDVkE7O0FEYUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hBOztBRGNBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNHLGdCQUFBO0FDWkg7O0FEZUE7RUFDQSxrQkFBQTtBQ1pBOztBRGNBO0VBQ0Esa0JBQUE7QUNYQTs7QURjQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDRyxnQkFBQTtBQ1pIOztBRGVBO0VBRUEsb0JBQUE7QUNiQTs7QURnQkE7RUFFQSxvQkFBQTtBQ2RBOztBRGlCQTtFQUVBLCtCQUFBO0FDZkE7O0FEa0JBO0VBRUEsNkJBQUE7QUNoQkE7O0FEbUJBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixXQUFBO0VBQ0MsZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNsQkE7O0FEc0JBO0VBQ0csYUFBQTtFQUNDLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNILHFCQUFBO1VBQUEsb0JBQUE7QUNuQkQ7O0FEc0JBO0VBRUEsb0JBQUE7RUFDQSxXQUFBO0FDcEJBOztBRHVCQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDckJBOztBRHVCQTtFQUlBLG9CQUFBO0FDdkJBOztBRDBCQTtFQUNJLG9CQUFBO0FDdkJKOztBRDBCQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUN4QkE7O0FEMkJBO0VBRUcsOEJBQUE7QUN6Qkg7O0FENEJBO0VBRUcsOEJBQUE7QUMxQkg7O0FENkJBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDRyxrQkFBQTtFQUNBLG1CQUFBO0FDM0JIOztBRDZCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDMUJKIiwiZmlsZSI6InNyYy9hcHAvZWRpdHJlcG9ydC9lZGl0cmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcbmlvbi1zZWxlY3Qge1xyXG5cclxuYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5oZWlnaHQ6NDBweDtcclxuXHJcbn1cclxuICAubmV3YmcgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gIH1cclxuICBcclxuLnNlbGVjdC10ZXh0IGJ1dHRvblxyXG57cGFkZGluZzoxcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3YmcgLmluLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6MTVweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdiZy5pdGVtIFxyXG5cdHtcclxuXHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG5cdC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcblx0fVxyXG5cclxuLm5ld2JnIGlvbi1zZWxlY3R7XHJcbndpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG5cdHdoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZXdiZy5zZWxlY3QtcGxhY2Vob2xkZXIgXHJcbntcclxubWluLXdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxud2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5mbGV4OjAgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdiZ2luXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyMHB4O1xyXG5tYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxubWFyZ2luLXRvcDowO1xyXG4gICBtaW4taGVpZ2h0OiA0MHB4XHJcbn1cclxuXHJcbi5uZXdiZyAuaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG5tYXJnaW4tYm90dG9tOjhweDtcclxufVxyXG4ubmV3YmcgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG5tYXJnaW4tYm90dG9tOjhweDtcclxufVxyXG5cclxuLm5ld2JnIGlvbi10ZXh0YXJlYVxyXG57XHJcbi0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG5ib3JkZXI6MXB4IHNvbGlkICNFMUQ4RUI7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5ib3JkZXItcmFkaXVzOjNweDtcclxuLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcclxubWFyZ2luLXRvcDowO1xyXG4gICBtaW4taGVpZ2h0OiA0MHB4XHJcbn1cclxuXHJcbi5uZXdiZyAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kXHJcbntcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuLm5ld2JnIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9zXHJcbntcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuaW9uLWFsZXJ0LmFsZXJ0LXJhZGlvLWJ1dHRvblxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC1yYWRpby1idXR0b25cclxue1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubmV3YmdpbiAubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjEwMCU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MzVweCBhdXRvIDEyMHB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubmV3aW5wdXQgaW1ne1xyXG4gICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuXHRtYXJnaW4taW5saW5lLWVuZDogMDtcclxufVxyXG5cclxuLm5ld2FyZWFcclxue1xyXG5kaXNwbGF5OmlubGluZS1mbGV4O1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5mb250LXNpemU6MTVweDtcclxufVxyXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kXHJcbntcclxuXHJcblxyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59IFxyXG5cclxuLmFsZXJ0LXJhZGlvLWdyb3VwLmFsZXJ0LXJhZGlvLWxhYmVse1xyXG4gICAgd2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oXHJcbntcclxudHJhbnNmb3JtOmluaGVyaXQ7XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZXdpbnB1dCBpb24taW5wdXRcclxue1xyXG4gICBib3JkZXItcmFkaXVzOjNweCAwcHggMHB4IDNweDtcclxufVxyXG5cclxuLm5ld2lucHV0IGlvbi1kYXRldGltZVxyXG57XHJcbiAgIGJvcmRlci1yYWRpdXM6M3B4IDBweCAwcHggM3B4O1xyXG59XHJcblxyXG4ubmV3YmcgaW9uLWRhdGV0aW1lXHJcbntcclxuLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tdG9wOjA7XHJcbndpZHRoOjEwMCU7XHJcbiAgIC0tbWluLWhlaWdodDogNDBweDtcclxuICAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG4ubmV3cXVlc3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5ld2JnIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2VsZWN0LXRleHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLm5ld2JnIC5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5uZXdiZy5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLm5ld2JnIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5uZXdiZy5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxleDogMCAhaW1wb3J0YW50O1xufVxuXG4ubmV3YmdpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubmV3YmcgLml0ZW0gLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm5ld2JnIC5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm5ld2JnIGlvbi10ZXh0YXJlYSB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLm5ld2JnIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLm5ld2JnIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbmlvbi1hbGVydC5hbGVydC1yYWRpby1idXR0b24ge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC1yYWRpby1idXR0b24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLm5ld2JnaW4gLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDM1cHggYXV0byAxMjBweDtcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2lucHV0IGltZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbn1cblxuLm5ld2FyZWEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5hbGVydC1yYWRpby1ncm91cC5hbGVydC1yYWRpby1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4ubmV3aW5wdXQgaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xufVxuXG4ubmV3aW5wdXQgaW9uLWRhdGV0aW1lIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xufVxuXG4ubmV3YmcgaW9uLWRhdGV0aW1lIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAtLXBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4ubmV3cXVlc3Rpb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/editreport/editreport.page.ts":
/*!***********************************************!*\
  !*** ./src/app/editreport/editreport.page.ts ***!
  \***********************************************/
/*! exports provided: EditreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditreportPage", function() { return EditreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let EditreportPage = class EditreportPage {
    constructor(route, navController, sharedservice, router, httpClient) {
        this.route = route;
        this.navController = navController;
        this.sharedservice = sharedservice;
        this.router = router;
        this.httpClient = httpClient;
        this.self = this;
        this.latitude = 19.076090;
        this.longitude = 72.877426;
        this.building = "";
        this.landmark = "";
        this.area = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.street_number = "";
        this.routes = "";
        this.localbuilding = '';
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/get-forms/';
        this.baseURL = this.sharedservice.get_url();
        console.log(incidentEditForm);
        // incidentEditForm.init()
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.data = this.router.getCurrentNavigation().extras.state.data;
                this.selected_inc_id = this.data[0].id;
                this.fetch_categories();
                console.log(this.data);
            }
        });
        // $(document).on('click', '#saveChanges', function(event) {
        //   event.preventDefault();
        //   if(!incidentEditForm.valid())
        //       return false;
        //   console.log('form is valid! Yeah!');
        //   var answersArr = incidentEditForm.getAnswers();
        //   console.log(answersArr);
        // });
    }
    ngOnInit() {
    }
    fetch_categories() {
        let data = new FormData();
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('get-forms', data).subscribe((rdata) => {
            console.log(rdata);
            this.category = rdata.categories;
            this.fetchIncidentDetail(this.data[0].id, this.category);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
        // this.httpClient.post(this.apiUrl, data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.category = rdata.categories
        //     this.fetchIncidentDetail(this.data[0].id,this.category)
        //   }, error => {
        //     this.sharedservice.loaderDismiss()
        //   },()=>{
        //     this.sharedservice.loaderDismiss()
        //   });
    }
    final_Submit() {
        if (!incidentEditForm.valid())
            return false;
        console.log('form is valid! Yeah!');
        var answersArr = incidentEditForm.getAnswers();
        console.log(answersArr);
        var self = this;
        // Send Update Request
        let data = new FormData();
        data.append('incident_id', this.selected_inc_id);
        data.append('incident_data', JSON.stringify(answersArr));
        this.sharedservice.sharedPostRequest('reported-incident/update', data).subscribe((rdata) => {
            console.log(rdata);
            if (rdata.status == true) {
                // self.navController.navigateForward(`/myreport`);
                self.navController.navigateRoot(`/home`);
            }
            else {
            }
        }, error => {
        }, () => {
        });
        // $.ajax({
        //     url: this.baseURL+'api/reported-incident/update/',
        //     type: 'POST',
        //     data: {incident_id: this.selected_inc_id, incident_data: JSON.stringify(answersArr)},
        // })
        // .done(function(data) {
        //     console.log("success");
        //     console.log(data);
        //     if(data.status==true) {
        //      self.navController.navigateForward(`/myreport`);
        //     } else {
        //     }
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     console.log("complete");
        // });
    }
    fetchIncidentDetail(incidentId, category) {
        var self = this;
        var selectedIncidentId = incidentId;
        $.ajax({
            url: this.sharedservice.get_url() + 'reported-incident/details',
            type: 'POST',
            data: { incident_id: selectedIncidentId },
        })
            .done(function (data) {
            console.log("success");
            console.log(data);
            if (data.status) {
                this.incidentData = data.data;
                console.log(this.incidentData);
                console.log(this.incidentData.answers);
                var primary_data = { 'primary': this.incidentData.answers.primary };
                console.log(primary_data);
                this.incidentData.answers = primary_data;
                console.log(this.incidentData);
                console.log(this.incidentData.answers);
                //var baseURL = 'http://101.53.143.7/~dataduck/safecity_webapp/';
                incidentEditForm.init(this.incidentData, self.baseURL, category);
                // Set Details
            }
            else {
                // things went wrong!
            }
        })
            .fail(function () {
            console.log("error");
        })
            .always(function () {
            console.log("complete");
        });
    }
    inits(incidentData) {
        // Get all question ids
        var allForms = Object.values(incidentData.answers);
        var question_id_arr = [];
        for (var i = 0; i < allForms.length; i++) {
            var formAnswers = Object.values(allForms[i]);
            for (var j = 0; j < formAnswers.length; j++) {
                question_id_arr.push(formAnswers[j].question_id);
            }
        }
        // Fetch questions with options for answered questions
        $.ajax({
            url: this.sharedservice.get_url() + "api/questions/getQuestionOptions",
            type: "POST",
            data: { ques_id: question_id_arr },
        })
            .done(function (data) {
            console.log("success");
            console.log(data);
            if (data.status == true) {
                console.log("in edit!");
                $("#edit_div").html("");
                this.questionsObj = data.data;
                // Iterate through all forms
                for (var i = 0; i < allForms.length; i++) {
                    var formAnswers = Object.values(allForms[i]);
                    // Iterate through answers in current form
                    for (var j = 0; j < formAnswers.length; j++) {
                        this.answerObj = formAnswers[j];
                        // Create appropriate Question element for current answer
                        var questionHTML = this.renderQuestion(this.questionsObj, this.answerObj, incidentData);
                        $("#edit_div").append(questionHTML);
                    }
                }
                // Reorder questions
                this.divList = $(".question-listing-item");
                this.divList.sort(function (a, b) {
                    return ($(a).data("questionid") - $(b).data("questionid"));
                });
                $("#edit_div").html(this.divList);
                // Initialize Events
                this.initializeEvents();
            }
        })
            .fail(function () {
            console.log("error");
        })
            .always(function () {
            console.log("complete");
        });
    }
    initializeEvents() {
        /////////////////////////////
        // Set Incident Datepicker //
        /////////////////////////////
        var self = this;
        var todaydate = new Date();
        var datePicker = $("#datepicker .parent-option-field").val();
        console.log(datePicker);
        // $('#datepicker').datetimepicker({
        //      format: 'YYYY-MM-DD', 
        //      todayHighlight: true,
        //      toolbarplacement: 'bottom',
        //      showClose: true,
        //      endDate: todaydate,
        //      maxDate: todaydate,
        //      icons: { 
        //        close: 'OK'
        //      },
        //      ignoreReadonly: true,
        // });
        //		$('#datepicker').data("datetimepicker").date(moment(datePicker));
        ///////////////////////////////////////////////
        // Set Incident Timepicker / TimeRangePicker //
        ///////////////////////////////////////////////
        var timePicker = $("#timepicker .parent-option-field").val();
        var timePickerStart = $("#timerangepickerstart .parent-rangestart-field").val();
        var timePickerEnd = $("#timerangepickerend .parent-rangeend-field").val();
        // $("#timepicker, #timerangepickerstart, #timerangepickerend").datetimepicker({
        //         format: 'LT',
        //         ignoreReadonly: true,
        //         useCurrent: false
        //         /*buttons: {
        //         	showClear: true
        //         },
        //         icons: { 
        //         	clear: 'fa fa-trash'
        //         },
        //         showClear: true*/
        //     });
        // Set Initial Time
        // $('#timepicker').data("datetimepicker").date(moment(timePicker));
        // $('#timerangepickerstart').data("datetimepicker").date(moment(timePickerStart));
        // $('#timerangepickerend').data("datetimepicker").date(moment(timePickerEnd));
        // Set timepicker event
        $("#timepicker").on("change.datetimepicker", function (e) {
            // Disable Rangepicker
            $(".timerangepicker-container").addClass('nonactive');
            self.validateAnswers();
        });
        // Add dependency on timerangepickers
        $("#timerangepickerstart").on("change.datetimepicker", function (e) {
            // Disable single timepicker
            $(".timepicker-container").addClass('nonactive');
            // Restrict time selection
            // $('#timerangepickerend').datetimepicker('minDate', e.date);
            // $('#timerangepickerend').datetimepicker('maxDate', moment(e.date).set({"hour": 23, "minute": 59}));
            self.validateAnswers();
        });
        $("#timerangepickerend").on("change.datetimepicker", function (e) {
            // Disable single timepicker
            $(".timepicker-container").addClass('nonactive');
            // Restrict time selection
            // $('#timerangepickerstart').datetimepicker('minDate', moment(e.date).set({"hour": 00, "minute": 00}));
            // $('#timerangepickerstart').datetimepicker('maxDate', e.date);
            self.validateAnswers();
        });
        // Clear Time/TimeRange values
        $(".clearTime, .clearTimeRange").click(function (event) {
            event.preventDefault();
            $("#timepicker .parent-option-field").val('');
            $("#timerangepickerstart .parent-rangestart-field").val('');
            $("#timerangepickerend .parent-rangeend-field").val('');
            /*$("#timepicker").data("datetimepicker").clear();
            $("#timerangepickerstart").data("datetimepicker").clear();
            $("#timerangepickerend").data("datetimepicker").clear();*/
            // Enable Timepicker/Timerange picker
            $(".timepicker-container, .timerangepicker-container").removeClass('nonactive');
        });
        /////////////////////////////////
        // Check validations on events //
        /////////////////////////////////
        $(".parent-option-field[type=text]").keydown(function (event) {
            var questionId = $(this).parent('.question-listing-item').data('questionid');
            var validation_type;
            if (questionId != undefined && self.questionsObj[questionId] != undefined) {
                var validationArr = JSON.parse(self.questionsObj[questionId].question.properties).validations;
                validation_type = validationArr[1].type != null ? validationArr[1].type : "text";
            }
            else {
                validation_type = 'text';
            }
            if (validation_type == 'number') {
                var key = event.charCode || event.keyCode || 0;
                // allow backspace, tab, enter, delete, arrows, numbers and keypad numbers ONLY
                // home, end
                var isValidInput = key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105);
                if (!isValidInput) {
                    return false;
                }
            }
        });
        $(".parent-option-field[type=text]").keyup(function (event) {
            self.validateAnswers();
        });
        // Run validation for suboptions
        $(".suboption-field[type=text]").keyup(function (event) {
            self.validateAnswers();
        });
        $(".suboption-field[type=checkbox], .suboption-field[type=radio]").click(function (event) {
            self.validateAnswers();
        });
        // On Radio options click
        // Toggle visibility of subtext and suboptions fields
        $(document).on("click", ".parent-option-field[type=radio]", function (event) {
            // Hide all textboxes for selected question
            $(this)
                .closest(".question-listing-item")
                .find("input[type=text].suboption-field")
                .addClass("d-none");
            // Show texbox if selected option has one
            if ($(this).data("hassubtext") && $(this).is(":checked"))
                $(this).siblings(".suboption-field").removeClass("d-none");
            // Hide all suboptions for selected question
            $(this)
                .closest(".question-listing-item")
                .find(".suboption-container")
                .addClass("d-none");
            $(this)
                .closest(".question-listing-item")
                .find(".suboption-container .suboption-field")
                .prop("checked", false);
            // Show Suboption if selected option has one
            if ($(this).data("hassuboption") != false)
                $(this).siblings(".suboption-container").removeClass("d-none");
            // Run validation
            this.validateAnswers();
        });
        // On Checkbox options click
        // Toggle visibility of subtext and suboptions fields
        $(document).on("click", ".parent-option-field[type=checkbox]", function (event) {
            if ($(this).data("hassubtext")) {
                if ($(this).is(":checked")) {
                    $(this)
                        .siblings(".suboption-field")
                        .removeClass("d-none");
                }
                else {
                    $(this).siblings(".suboption-field").addClass("d-none");
                }
            }
            else if ($(this).data("hassuboption") != false) {
                if ($(this).is(":checked")) {
                    $(this)
                        .siblings(".suboption-container")
                        .removeClass("d-none");
                }
                else {
                    $(this)
                        .siblings(".suboption-container")
                        .find(".suboption-field")
                        .prop("checked", false);
                    $(this)
                        .siblings(".suboption-container")
                        .addClass("d-none");
                }
            }
            // Run validation
            this.validateAnswers();
        });
    }
    validateAnswers() {
        // Reset validations
        $(".is-invalid").removeClass("is-invalid");
        $(".invalid-msg").text("");
        var isValid = true;
        $(".question-listing-item").each(function (index, el) {
            var type = $(el).data("questiontype");
            var questionId = $(el).data("questionid");
            var answerId = $(el).data("answerdetailid");
            var tags = $(el).data("questiontag");
            if (type == "text" || type == "incident-address-form" || type == "estimate-datepicker") {
                var textInvalid = false;
                var $textElement = $(el).find(".parent-option-field[data-required=true]");
                $textElement.each(function (subIndex, subEl) {
                    if ($(subEl).val() == "") {
                        console.log('setting invalid for type', type);
                        console.log($(el).data('questiontag'));
                        isValid = false;
                        textInvalid = true;
                        $(subEl).addClass("is-invalid");
                    }
                    else {
                        $(subEl).removeClass("is-invalid");
                    }
                });
                if (textInvalid) {
                    $(el).children(".invalid-msg").text("This Field is Required");
                }
                else {
                    $(el).children(".invalid-msg").text("");
                }
            }
            else if (type == "estimate-time-or-rangepicker") {
                var timePicker = $("#timepicker .parent-option-field").val();
                var timePickerStart = $("#timerangepickerstart .parent-rangestart-field").val();
                var timePickerEnd = $("#timerangepickerend .parent-rangeend-field").val();
                if (timePicker == '' && (timePickerStart == '' || timePickerEnd == '')) {
                    console.log('setting invalid for type', type);
                    isValid = false;
                    $(el).children(".invalid-msg").text("This Field is Required");
                }
                else {
                    $(el).children(".invalid-msg").text("");
                }
            }
            else if (type == "checkbox" || type == "radio") {
                // Validate Parent Fields
                if ($(el).find(".parent-option-field:checked").length == 0) {
                    console.log('setting invalid for type', type);
                    isValid = false;
                    $(el).find(".parent-option-field").addClass("is-invalid");
                    $(el).children(".invalid-msg").text("This Field is Required");
                }
                else {
                    // Remove validation
                    $(el).find(".parent-option-field").removeClass("is-invalid");
                    $(el).children(".invalid-msg").text("");
                }
                // Validate Subtext fields
                $(el)
                    .find(".parent-option-field:checked")
                    .each(function (subIndex, subEl) {
                    // Validate subtext
                    var $textElement = $(subEl).siblings(".suboption-field[type=text]");
                    if ($textElement.length > 0) {
                        if ($textElement.val() == "") {
                            console.log('setting invalid for type', type);
                            isValid = false;
                            $textElement.addClass("is-invalid");
                            $textElement
                                .siblings(".invalid-msg")
                                .text("This Field is Required");
                        }
                        else {
                            // Remove validation
                            $textElement.removeClass("is-invalid");
                            $textElement.siblings(".invalid-msg").text("");
                        }
                    }
                    else {
                        // Validate suboptions
                        var $suboptionContainer = $(subEl).siblings(".suboption-container");
                        if ($suboptionContainer.length > 0) {
                            var $suboptions = $suboptionContainer.find(".suboption-field:checked");
                            if ($suboptions.length == 0) {
                                console.log('setting invalid for type', type);
                                isValid = false;
                                $suboptions.addClass("is-invalid");
                                $suboptionContainer
                                    .children(".invalid-msg")
                                    .text("This Field is Required");
                            }
                            else {
                                // Remove validation
                                $suboptions.removeClass("is-invalid");
                                $suboptionContainer
                                    .children(".invalid-msg")
                                    .text("");
                            }
                        }
                    }
                });
            }
        });
        console.log(isValid);
        return isValid;
    }
    renderQuestion(questionsObj, answerObj, incidentData) {
        var _a;
        var question_id = answerObj.question_id;
        var question = questionsObj[question_id].question;
        var question_properties = JSON.parse(question.properties);
        var suboptions = questionsObj[question_id].suboptions || {};
        var options = questionsObj[question_id].options;
        var questionHtml = "";
        questionHtml += `
        <div class="question-listing-item col-12" 
          data-answerdetailid="${answerObj.detail_id}" 
          data-questiontype="${question_properties.type}" 
          data-questionid="${question.id}" 
          data-questiontag="${question.tags}"
        >
            <div class="label fs-15">${question.question}</div>
    `;
        var optionHtml = "";
        switch (question_properties.type) {
            case "radio":
                options.forEach(function (option) {
                    var answerIdArr = answerObj.answer_id.split(",");
                    var isSelected = answerIdArr.includes(option.id);
                    var hassuboption = option.suboption_properties != null
                        ? JSON.parse(option.suboption_properties).type
                        : false;
                    optionHtml += `
                    <div class="custom-control custom-radio">
                      <input type="radio" id="option${option.id}" name="option${question_id}" class="custom-control-input parent-option-field" ${isSelected ? "checked" : ""} value="${option.id}" data-hassubtext="${option.textbox_placeholder != null}" data-hassuboption="${hassuboption}">
                      <label class="custom-control-label" for="option${option.id}">${option.title}</label>
                `;
                    // Suboption text field
                    if (option.textbox_placeholder != null)
                        optionHtml += this.renderSubText(answerObj, option, isSelected);
                    else if (hassuboption != false) {
                        var elemsuboptions = suboptions[option.id];
                        optionHtml += this.renderSubOptions(question_id, answerIdArr, hassuboption, elemsuboptions, isSelected);
                    }
                    optionHtml += "</div>";
                });
                break;
            case "checkbox":
                if (question.is_category == true) {
                    var options;
                    this.categories.forEach(function (category) {
                        options.push({
                            id: category.id,
                            textbox_placeholder: null,
                            title: category.title,
                            parent_id: category.parent_id,
                            is_main: category.is_main,
                        });
                    });
                }
                options.forEach(function (option) {
                    var answerIdArr = answerObj.answer_id.split(",");
                    var isSelected = answerIdArr.includes(option.id);
                    var hassuboption = option.suboption_properties != null
                        ? JSON.parse(option.suboption_properties).type
                        : false;
                    var fieldId = question.is_category == true
                        ? "catoption" + option.id
                        : "option" + option.id;
                    optionHtml += `
                    <div class="form-check">
                      <input class="form-check-input parent-option-field" type="checkbox" id="${fieldId}" name="${question_id}" ${isSelected ? "checked" : ""}  value="${option.id}" data-hassubtext="${option.textbox_placeholder != null}" data-hassuboption="${hassuboption != null}">
                      <label class="form-check-label" for="${fieldId}">
                        ${option.title}
                      </label>
                `;
                    // Suboption text field
                    if (option.textbox_placeholder != null)
                        optionHtml += this.renderSubText(answerObj, option, isSelected);
                    else if (hassuboption != false) {
                        var elemsuboptions = suboptions[option.id];
                        optionHtml += this.renderSubOptions(question_id, answerIdArr, hassuboption, elemsuboptions, isSelected);
                    }
                    optionHtml += "</div>";
                });
                break;
            case "text":
                var isRequired = ((_a = question_properties.validations) === null || _a === void 0 ? void 0 : _a[0].required) != undefined;
                optionHtml += `
                <input type="text" id="option${question_id}text" class="form-control parent-option-field" value="${answerObj.answer}" data-required="${isRequired}" />
            `;
                break;
            case "estimate-datepicker":
                var isEstimate = incidentData.is_date_estimate == 0 ? true : false;
                optionHtml += `
        <div class="input-group date" id="datepicker" data-target-input="nearest">
          <input type="text" id="option${question_id}text" class="form-control parent-option-field datetimepicker-input" value="${incidentData.incident_date}" data-target="#datepicker" readonly="true" />
          <div class="input-group-append" data-target="#datepicker" data-toggle="datetimepicker">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                    </div>
        </div>

                <div class="form-check">
                    <input class="form-check-input parent-estimate-field" type="checkbox" id="option${question_id}checked" name="option${question_id}" ${isEstimate ? "checked" : ""} >
                    <label class="form-check-label" for="option${question_id}checked">This is an estimate</label>
                </div>
          `;
                break;
            // <input type="text" id="option${question_id}" class="form-control estimate-datepicker parent-option-field" value="${incidentData.incident_date}" />
            case "estimate-time-or-rangepicker":
                var isEstimate = incidentData.is_time_estimate == 0 ? true : false;
                var isRange = incidentData.time_to != null;
                optionHtml += `
        <div class="row timepicker-container ${isRange ? 'nonactive' : ''}">
          <div class="col-md-9 col-sm-8 col-xs-12 col-12">
            <div class="input-group date" id="timepicker" data-target-input="nearest">
                        <input type="text" id="option${question_id}text" class="form-control parent-option-field datetimepicker-input" value="${!isRange ? incidentData.time_from : ""}" data-target="#timepicker" readonly="true" />
                        <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-clock"></i></div>
                        </div>
                    </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12 col-12">
            <a class="clearTime btn animated fadeInUp pull-right mt-0 themeColor">Clear Time</a>
                  </div>
        </div>
                <div class="form-check">
                    <input class="form-check-input parent-estimate-field" type="checkbox" id="option${question_id}checked" name="option${question_id}" ${isEstimate ? "checked" : ""} >
                    <label class="form-check-label" for="option${question_id}checked">This is an estimate</label>
                </div>
        <div class="row timerangepicker-container ${!isRange ? 'nonactive' : ''}">
          <div class="col-md-12 col-sm-12 col-xs-12 col-12">
            <label>Select Time Range</label>
          </div>
          <div class="col-md-8 col-sm-8 col-xs-12 col-12">
            <div class="col-md-5 col-5 p-0 float-left">
                <div class="input-group date" id="timerangepickerstart" data-target-input="nearest">
                            <input type="text" class="form-control parent-rangestart-field datetimepicker-input" value="${isRange ? incidentData.time_from : ''}" data-target="#timerangepickerstart" readonly="true" />
                            <div class="input-group-append" data-target="#timerangepickerstart" data-toggle="datetimepicker">
                                <div class="input-group-text"><i class="fa fa-clock"></i></div>
                            </div>
              </div>
                      </div>
            <div class="col-md-2 col-2 text-center p-0 float-left">
                          <span class="themeColor">To</span>
                        </div>
            <div class="col-md-5 col-5 p-0 float-left">
                        <div class="input-group date" id="timerangepickerend" data-target-input="nearest">
                          <input type="text" class="form-control parent-rangeend-field datetimepicker-input" value="${isRange ? incidentData.time_to : ''}" data-target="#timerangepickerend" readonly="true" />
                          <div class="input-group-append" data-target="#timerangepickerend" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="fa fa-clock"></i></div>
                          </div>
              </div>
                  </div>
          </div>
          <div class="col-md-4">
                        <a class="clearTimeRange btn animated fadeInUp pull-right mt-0 themeColor">Clear Time Range</a>
                      </div>
        </div>
          `;
                //<input type="time" id="option${question_id}" class="form-control parent-option-field" value="${incidentData.time_to == null ? incidentData.time_from : ""}" />
                //<input type="time" class="form-control parent-rangestart-field" value="${incidentData.time_to != null? incidentData.time_from: ''}" />
                //<input type="time" class="form-control parent-rangeend-field" value="${incidentData.time_to != null ? incidentData.time_to : ''}" />
                break;
            case "incident-address-form":
                optionHtml += this.init(incidentData.latitude, incidentData.longitude, incidentData.building, incidentData.landmark, incidentData.area, incidentData.city, incidentData.state, incidentData.country);
                break;
            default:
                break;
        }
        optionHtml += '<div class="invalid-msg text-danger"></div>';
        questionHtml += optionHtml + "</div>";
        return questionHtml;
    }
    getAnswers() {
        var answersArr = [];
        var self = this;
        $(".question-listing-item").each(function (index, el) {
            var type = $(el).data("questiontype");
            var questionId = $(el).data("questionid");
            var answerId = $(el).data("answerdetailid");
            var tags = $(el).data("questiontag");
            console.log($(el).data("answerjson"));
            self.answerObj = {
                id: answerId,
                question_id: questionId,
                question_type: type,
                question_tag: tags,
                answer_id: "",
                answer: "",
            };
            switch (type) {
                case "text":
                    self.answerObj.answer = $(el).find(".parent-option-field").val();
                    break;
                case "radio":
                    var radio_other_answers = {};
                    var selectedOptionElem = $(el).find(".parent-option-field:checked");
                    self.checkbox_answers = selectedOptionElem.val();
                    // Set Subtext value if any
                    if ($(selectedOptionElem).data("hassubtext"))
                        radio_other_answers[self.answerObj.answer_id] = $(selectedOptionElem)
                            .siblings(".suboption-field")
                            .val();
                    // Set Suboption value if any
                    $(el)
                        .find(".parent-option-field:checked")
                        .siblings(".suboption-container")
                        .find(".suboption-field:checked")
                        .each(function (checkedInder, checkedEl) {
                        self.checkbox_answers += "," + $(checkedEl).val();
                    });
                    self.answerObj.answer_id = self.checkbox_answers;
                    self.answerObj.other_answers = JSON.stringify(radio_other_answers);
                    break;
                case "checkbox":
                    self.checkbox_answers = "";
                    var checkbox_other_answers = {};
                    $(el)
                        .find(".parent-option-field:checked")
                        .each(function (checkedIndex, checkedEl) {
                        self.checkbox_answers += "," + $(checkedEl).val();
                        // Set Subtext value if any
                        if ($(checkedEl).data("hassubtext"))
                            checkbox_other_answers[JSON.stringify($(checkedEl).val())] = $(checkedEl)
                                .siblings(".suboption-field")
                                .val();
                        // Set Suboption value if any
                        if ($(checkedEl).data("hassuboption") != false) {
                            $(checkedEl)
                                .siblings(".suboption-container")
                                .find(".suboption-field:checked")
                                .each(function (checkedInder, checkedEl) {
                                self.checkbox_answers +=
                                    "," + $(checkedEl).val();
                            });
                        }
                    });
                    self.answerObj.answer_id = self.checkbox_answers.replace(/^,/, "");
                    self.answerObj.other_answers = JSON.stringify(checkbox_other_answers);
                    break;
                case "estimate-datepicker":
                    self.answerObj.answer_id = 0;
                    self.answerObj.answer = $(el).find(".parent-option-field").val();
                    //answerObj.isEstimate = $(el).find('.parent-estimate-field').is(':checked');
                    var isEstimate = $(el)
                        .find(".parent-estimate-field")
                        .is(":checked");
                    // Set AnswerJson
                    self.answerObj.answer_json = {};
                    self.answerObj.answer_json.option_id = 0;
                    self.answerObj.answer_json.answer = self.answerObj.answer;
                    self.answerObj.answer_json.isEstimate = isEstimate;
                    self.answerObj.answer_json = JSON.stringify(self.answerObj.answer_json);
                    break;
                case "estimate-time-or-rangepicker":
                    var time = $(el).find(".parent-option-field").val();
                    var start_time = $(el).find(".parent-rangestart-field").val();
                    var end_time = $(el).find(".parent-rangeend-field").val();
                    self.answerObj.answer_id = 0;
                    self.answerObj.answer =
                        start_time == "" || end_time == ""
                            ? time
                            : start_time + "-" + end_time;
                    //answerObj.isEstimate = start_time!='' && end_time!='' ? true:$(el).find('.parent-estimate-field').is(':checked');
                    var isEstimate = start_time != "" && end_time != ""
                        ? true
                        : $(el)
                            .find(".parent-estimate-field")
                            .is(":checked");
                    // Set AnswerJson
                    self.answerObj.answer_json = {};
                    self.answerObj.answer_json.option_id = 0;
                    self.answerObj.answer_json.answer = self.answerObj.answer;
                    self.answerObj.answer_json.isEstimate = isEstimate;
                    self.answerObj.answer_json = JSON.stringify(self.answerObj.answer_json);
                    break;
                case "incident-address-form":
                    self.answerObj.answer_id = 0;
                    // Set AnswerJson
                    self.answerObj.answer_json = {};
                    //answerObj.address = editaddressForm.getAddress();
                    self.answerObj.answer_json.address = self.getAddress();
                    self.answerObj.answer_json = JSON.stringify(self.answerObj.answer_json);
                    break;
                default:
                    break;
            }
            answersArr.push(self.answerObj);
        });
        return answersArr;
    }
    renderSubText(answerObj, option, isSelected) {
        var optionHtml;
        var otherAnswer = JSON.parse(answerObj.other_answers);
        console.log(otherAnswer);
        try {
            var placeholder = JSON.parse(option.textbox_placeholder)
                .placeholder;
        }
        catch (_a) {
            var placeholder = option.textbox_placeholder;
        }
        optionHtml = `
        <input type="text" class="form-control ${isSelected ? "" : "d-none"} suboption-field" value="${otherAnswer[option.id] != undefined ? otherAnswer[option.id] : ""}" placeholder="${placeholder}" />
    `;
        optionHtml += '<div class="invalid-msg text-danger"></div>';
        return optionHtml;
    }
    renderSubOptions(question_id, answerIdArr, hassuboption, elemsuboptions, isSelected) {
        var optionHtml = `<div class="suboption-container ${isSelected ? "" : "d-none"}">`;
        elemsuboptions.forEach(function (elemsuboption) {
            var isSubOptionSelected = answerIdArr.includes(elemsuboption.id);
            if (hassuboption == "checkbox") {
                optionHtml += `
                <div class="form-check">
                    <input class="form-check-input suboption-field" type="checkbox" id="suboption${elemsuboption.id}" name="suboption${question_id}" value="${elemsuboption.id}" data-hassubtext="${elemsuboption.textbox_placeholder != null}" ${isSubOptionSelected ? "checked" : ""}>
                    <label class="form-check-label" for="suboption${elemsuboption.id}">
                      ${elemsuboption.title}
                    </label>
                </div>
            `;
            }
            else if (hassuboption == "radio") {
                optionHtml += `
                <div class="custom-control custom-radio">
                    <input type="radio" id="suboption${elemsuboption.id}" name="suboption${question_id}" class="custom-control-input suboption-field" ${isSelected ? "checked" : ""} value="${elemsuboption.id}" data-hassubtext="${elemsuboption.textbox_placeholder != null}" ${isSubOptionSelected ? "checked" : ""}>
                    <label class="custom-control-label" for="suboption${elemsuboption.id}">${elemsuboption.title}</label>
                </div>
            `;
            }
        });
        optionHtml += '<div class="invalid-msg text-danger"></div>';
        optionHtml += "</div>";
        return optionHtml;
    }
    //edit address 
    init(newLatitude, newLongitude, newBuilding, newLandmark, newArea, newCity, newState, newCountry) {
        this.building = newBuilding;
        this.landmark = newLandmark;
        this.area = newArea;
        this.city = newCity;
        this.state = newState;
        this.country = newCountry;
        this.latitude = newLatitude;
        this.longitude = newLongitude;
        var elementHtml = `
    <div class="newedit">
      <label>Locate address on map</label>
            <input type="text" id="search_address" placeholder="Start Typing" class="form-control parent-option-field" value="" />
          </div>
          <div class="mapouter" id="editMap" style="height:467px">
    </div>
    <div class="newedit">
              <label>Building</label>
            <input type="text" id="editbuilding" class="form-control parent-option-field" value="${this.building}" />
    </div>
    <div class="newedit">
              <label>Landmark</label>
            <input type="text" id="editlandmark" class="form-control parent-option-field" value="${this.landmark}" />
          </div>
          <div class="newedit">
              <label>Area</label>
            <input type="text" id="editarea" class="form-control parent-option-field" value="${this.area}" data-required="true" />
          </div>
          <div class="newedit">
              <label>City</label>
            <input type="text" id="editcity" class="form-control parent-option-field" value="${this.city}" data-required="true" />
          </div>
          <div class="newedit">
              <label>State</label>
            <input type="text" id="editstate" class="form-control parent-option-field" value="${this.state}" data-required="true" />
          </div>
          <div class="newedit">
              <label>Country</label>
            <input type="text" id="editcountry" class="form-control parent-option-field" value="${this.country}" data-required="true" />
      </div>
   `;
        return elementHtml;
    }
    getAddress() {
        // Update values
        this.updateValues();
        var answerJson = {
            "building": this.building,
            "landmark": this.landmark,
            "area": this.area,
            "city": this.city,
            "state": this.state,
            "country": this.country,
            "latitude": this.latitude,
            "longitude": this.longitude
        };
        return answerJson;
    }
    updateMarker() {
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        this.mapMarker.setPosition(location);
        this.map.setCenter(location);
    }
    initMap(searchFieldId) {
        if (google) {
            /////////////
            // Set map //
            /////////////
            var location = new google.maps.LatLng(this.latitude, this.longitude);
            var options = {
                center: location,
                zoom: 15,
                animation: 'DROP',
                draggable: true,
                fullscreenControl: false,
                scaleControl: true,
            };
            this.map = new google.maps.Map(document.getElementById("editMap"), options);
            ////////////////
            // Set Marker //
            ////////////////
            this.mapMarker = new google.maps.Marker({
                position: location,
                // title: marker.title,
                // latitude: this.latitude,
                // longitude: this.longitude,
                animation: google.maps.Animation.DROP,
                draggable: true,
            });
            this.mapMarker.setMap(this.map);
            // On drag end
            google.maps.event.addListener(this.mapMarker, 'dragend', function () {
                var markerlatlong = this.mapMarker.getPosition();
                this.latitude = JSON.stringify(this.mapMarker.getPosition().lat());
                this.longitude = JSON.stringify(this.mapMarker.getPosition().lng());
                // Reverse Geocode to get Address
                this.geocodeLatLng();
            });
            this.geocoder = new google.maps.Geocoder();
            ///////////////
            // Searchbox //
            ///////////////
            // Create the search box
            this.input = document.getElementById(searchFieldId);
            const searchBox = new google.maps.places.SearchBox(this.input);
            // Bias the SearchBox results towards current map's viewport.
            this.map.addListener("bounds_changed", () => {
                searchBox.setBounds(this.map.getBounds());
            });
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();
                if (places.length == 0) {
                    this.resetFields("No results found");
                    return;
                }
                this.place = places[0];
                // Set Coordinates
                this.latitude = this.place.geometry.location.lat();
                this.longitude = this.place.geometry.location.lng();
                this.updateMarker();
                var addcomponent = this.place.address_components;
                // Set Address
                this.setAddress(addcomponent);
            });
        }
    }
    // Reverse Geocode
    geocodeLatLng() {
        const latlng = {
            lat: parseFloat(JSON.stringify(this.latitude)),
            lng: parseFloat(JSON.stringify(this.longitude)),
        };
        this.geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    // Set Address
                    this.setAddress(results[0].address_components);
                }
                else {
                    this.resetFields("No results found");
                }
            }
            else {
                this.resetFields("Geocoder failed due to: " + status);
            }
        });
    }
    setAddress(addcomponent) {
        // Set Address
        this.building = "";
        this.landmark = "";
        this.area = "";
        this.city = "";
        this.state = "";
        this.country = "";
        if (addcomponent) {
            this.street_number = "";
            this.routes = "";
            this.localbuilding = '';
            for (var i = 0; i < addcomponent.length; i++) {
                if (addcomponent[i].types[0] == 'country') {
                    this.country = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'administrative_area_level_1') {
                    this.state = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'locality') {
                    this.city = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'postal_code') {
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_1') {
                    this.area = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == "sublocality_level_3" || addcomponent[i].types[0] == "sublocality") {
                    this.landmark = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'sublocality_level_2') {
                    this.localbuilding = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'street_number') {
                    this.street_number = addcomponent[i].long_name;
                }
                else if (addcomponent[i].types[0] == 'route') {
                    this.routes = addcomponent[i].long_name;
                }
            }
            this.building = this.street_number + ' ' + this.routes;
            this.building = this.building.trim() == '' ? this.localbuilding : this.building;
        }
        $("#building_address").val(this.building);
        this.showAddress();
    }
    resetFields(message) {
        this.building = "";
        this.landmark = "";
        this.area = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.showAddress();
    }
    showAddress() {
        $("#editbuilding").val(this.building);
        $("#editlandmark").val(this.landmark);
        $("#editarea").val(this.area);
        $("#editcity").val(this.city);
        $("#editstate").val(this.state);
        $("#editcountry").val(this.country);
    }
    updateValues() {
        this.building = JSON.stringify($(".newedit #editbuilding").val());
        this.landmark = JSON.stringify($(".newedit #editlandmark").val());
        this.area = JSON.stringify($(".newedit #editarea").val());
        this.city = JSON.stringify($(".newedit #editcity").val());
        this.state = JSON.stringify($(".newedit #editstate").val());
        this.country = JSON.stringify($(".newedit #editcountry").val());
    }
};
EditreportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EditreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editreport/editreport.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editreport.page.scss */ "./src/app/editreport/editreport.page.scss")).default]
    })
], EditreportPage);



/***/ })

}]);
//# sourceMappingURL=editreport-editreport-module-es2015.js.map
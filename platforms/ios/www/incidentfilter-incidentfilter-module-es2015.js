(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incidentfilter-incidentfilter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/incidentfilter/incidentfilter.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/incidentfilter/incidentfilter.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'home_all_filters' | translate}}</ion-title>\n    <div class=\"newsidetext\" slot=\"end\" tappable (click)='deselectAll()'>\n      <p>{{'button_clear' | translate }} {{'home_all_filters' | translate}}</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"newcontentin\">\n    <div class=\"newlist\">\n      <ion-card class=\"newcard\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"newhead\">{{'home_type_assault' | translate }}</h5>\n            <ion-list (ionChange)=\"getCategory($event)\">\n              <ion-item>\n                <ion-label>Domestic Violence</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Domestic Violence,1\" [(ngModel)] = \"BV1\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Online Harassment</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Online Harassment,2\" [(ngModel)] = \"BV2\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Rape/Sexual Assault</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Rape/Sexual Assault,3\" [(ngModel)] = \"BV3\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Physical Assault</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Physical Assault,4\" [(ngModel)] = \"BV4\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Stalking</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Stalking,5\" [(ngModel)] = \"BV5\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Ogling/Facial Expressions/Staring</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Ogling/Facial Expressions/Staring,6\" [(ngModel)] = \"BV6\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Taking photos without permission</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Taking photos without permission,7\" [(ngModel)] = \"BV7\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Indecent exposure/Masturbation in public</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Indecent exposure/Masturbation in public,8\" [(ngModel)] = \"BV8\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Touching /Groping</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Touching /Groping,9\" [(ngModel)] = \"BV9\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Showing Pornography without consent</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Showing Pornography without consent,10\" [(ngModel)] = \"BV10\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Commenting/Sexual Invites</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Commenting/Sexual Invites,11\" [(ngModel)] = \"BV11\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Chain Snatching/Robbery</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Chain Snatching/Robbery,12\" [(ngModel)] = \"BV12\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Human Trafficking</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Human Trafficking,13\" [(ngModel)] = \"BV13\"></ion-checkbox>\n              </ion-item>\n              <ion-item>\n                <ion-label>Other</ion-label>\n                <ion-checkbox slot=\"end\" value=\"Other,14\" [(ngModel)] = \"BV14\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n<div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"filter()\" [disabled] = 'buttonDisable'>{{'button_apply' | translate }}</ion-button>\n    </ion-col>\n  </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/incidentfilter/incidentfilter-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/incidentfilter/incidentfilter-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: IncidentfilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentfilterPageRoutingModule", function() { return IncidentfilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _incidentfilter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incidentfilter.page */ "./src/app/incidentfilter/incidentfilter.page.ts");




const routes = [
    {
        path: '',
        component: _incidentfilter_page__WEBPACK_IMPORTED_MODULE_3__["IncidentfilterPage"]
    }
];
let IncidentfilterPageRoutingModule = class IncidentfilterPageRoutingModule {
};
IncidentfilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IncidentfilterPageRoutingModule);



/***/ }),

/***/ "./src/app/incidentfilter/incidentfilter.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/incidentfilter/incidentfilter.module.ts ***!
  \*********************************************************/
/*! exports provided: IncidentfilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentfilterPageModule", function() { return IncidentfilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _incidentfilter_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incidentfilter-routing.module */ "./src/app/incidentfilter/incidentfilter-routing.module.ts");
/* harmony import */ var _incidentfilter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./incidentfilter.page */ "./src/app/incidentfilter/incidentfilter.page.ts");








let IncidentfilterPageModule = class IncidentfilterPageModule {
};
IncidentfilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _incidentfilter_routing_module__WEBPACK_IMPORTED_MODULE_6__["IncidentfilterPageRoutingModule"]
        ],
        declarations: [_incidentfilter_page__WEBPACK_IMPORTED_MODULE_7__["IncidentfilterPage"]]
    })
], IncidentfilterPageModule);



/***/ }),

/***/ "./src/app/incidentfilter/incidentfilter.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/incidentfilter/incidentfilter.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.item-checkbox-checked {\n  --background: #D6C6EA;\n}\n\nion-checkbox {\n  --background-checked: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: #592D8D;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-width: 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, transparent));\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 15px;\n  margin-top: 18px;\n  padding-right: 11px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.newcard {\n  box-shadow: none;\n  border-bottom: none;\n  border-radius: 0;\n  -webkit-margin-start: 6px;\n          margin-inline-start: 6px;\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n  margin-bottom: 10px;\n  margin-top: 8px;\n}\n\n.newhead {\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  margin-bottom: 16px;\n}\n\n.newcard ion-item {\n  --padding-start: 14px;\n  margin-bottom: 8px;\n  --inner-padding-end: 10px;\n  font-size: 15px;\n  border: 1px solid #E1D8EB;\n  --min-height:38px;\n  border-radius: 3px;\n  color: #292020;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newcard ion-label {\n  margin-top: 10px;\n  margin-bottom: 8px;\n  white-space: inherit;\n}\n\n.item-radio-checked {\n  --background:#D6C6EA;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\nion-radio.ios.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\n.newcard {\n  box-shadow: none;\n  border-bottom: none;\n  border-radius: 0;\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newcontentin {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 185px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9pbmNpZGVudGZpbHRlci9pbmNpZGVudGZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2luY2lkZW50ZmlsdGVyL2luY2lkZW50ZmlsdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FESUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZBOztBRElBO0VBRUEscUJBQUE7QUNGQTs7QURJQTtFQUVBLGlDQUFBO0VBQ0ksbUNBQUE7RUFDQSwwQkFBQTtFQUNILGVBQUE7RUFDRyxrQkFBQTtFQUNILG1CQUFBO0VBQ0Esa0ZBQUE7QUNGRDs7QURJQTtFQUlBLDhDQUFBO0FDRkE7O0FETUE7RUFFQSx1QkFBQTtBQ0pBOztBRE9BO0VBRUEscUJBQUE7QUNMQTs7QURPQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTEo7O0FET0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0xBOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0MsZ0JBQUE7RUFDRCxtQkFBQTtBQ1BBOztBRFVBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNHLHVCQUFBO1VBQUEsc0JBQUE7RUFDSCxtQkFBQTtFQUNBLGVBQUE7QUNSRDs7QURXQztFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1REOztBRFlDO0VBRUQscUJBQUE7RUFDQSxrQkFBQTtFQUNDLHlCQUFBO0VBQ0QsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtBQ1ZBOztBRGFBO0VBR0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNKLG9CQUFBO0FDWkE7O0FEY0E7RUFFQSxvQkFBQTtBQ1pBOztBRGVBO0VBR0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0UsVUFBQTtFQUNGLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiSjs7QURnQkE7RUFHSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDRCxVQUFBO0VBQ0csVUFBQTtFQUNGLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURpQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJBOztBRG1CQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDRyx3QkFBQTtVQUFBLHVCQUFBO0FDakJKOztBRG9CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEJBOztBRHFCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkJBIiwiZmlsZSI6InNyYy9hcHAvaW5jaWRlbnRmaWx0ZXIvaW5jaWRlbnRmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuLm5ld2xpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG4uaXRlbS1jaGVja2JveC1jaGVja2VkXHJcbntcclxuLS1iYWNrZ3JvdW5kOiAjRDZDNkVBO1xyXG59XHJcbmlvbi1jaGVja2JveFxyXG57XHJcbi0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jaGVja21hcmstY29sb3I6ICM1OTJEOEQ7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpKTtcclxufVxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLm5ld3NpZGV0ZXh0IHBcclxue1xyXG5jb2xvcjojRDkwRDBEO1xyXG5mb250LXNpemU6MTVweDtcclxuIG1hcmdpbi10b3A6IDE4cHg7XHJcbnBhZGRpbmctcmlnaHQ6MTFweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm5ld2NhcmRcclxuXHR7XHJcblx0Ym94LXNoYWRvdzpub25lO1xyXG5cdGJvcmRlci1ib3R0b206bm9uZTtcclxuXHRib3JkZXItcmFkaXVzOjA7XHJcblx0bWFyZ2luLWlubGluZS1zdGFydDogNnB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcclxuXHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0bWFyZ2luLXRvcDo4cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdoZWFkXHJcblx0e1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdG1hcmdpbi1ib3R0b206MTZweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhcmQgaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDE0cHg7XHJcbm1hcmdpbi1ib3R0b206OHB4O1xyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcclxuZm9udC1zaXplOjE1cHg7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuLS1taW4taGVpZ2h0OjM4cHg7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG5jb2xvcjojMjkyMDIwO1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZCBpb24tbGFiZWxcclxue1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuLml0ZW0tcmFkaW8tY2hlY2tlZFxyXG57XHJcbi0tYmFja2dyb3VuZDojRDZDNkVBO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tcmFkaW8uaW9zLnJhZGlvLWNoZWNrZWQgXHJcbntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcclxuICAgd2lkdGg6IDdweDtcclxuICAgICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdjYXJkXHJcblx0e1xyXG5cdGJveC1zaGFkb3c6bm9uZTtcclxuXHRib3JkZXItYm90dG9tOm5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czowO1xyXG5cdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuXHR9XHJcblxyXG4uYm90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuYm90dG9tOjUwcHg7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLWJvdHRvbToxODVweDtcclxufSIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLm5ld2xpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZDNkVBO1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzU5MkQ4RDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KSk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm5ld3NpZGV0ZXh0IHAge1xuICBjb2xvcjogI0Q5MEQwRDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm5ld2NhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm5ld2hlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubmV3Y2FyZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIC0tbWluLWhlaWdodDozOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubmV3Y2FyZCBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1iYWNrZ3JvdW5kOiNENkM2RUE7XG59XG5cbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tcmFkaW8uaW9zLnJhZGlvLWNoZWNrZWQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG4gIHdpZHRoOiA3cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld2NhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmV3Y29udGVudGluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDE4NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/incidentfilter/incidentfilter.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/incidentfilter/incidentfilter.page.ts ***!
  \*******************************************************/
/*! exports provided: IncidentfilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentfilterPage", function() { return IncidentfilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




let IncidentfilterPage = class IncidentfilterPage {
    constructor(sharedService, navController) {
        this.sharedService = sharedService;
        this.navController = navController;
        this.catArray = [];
        this.buttonDisable = true;
    }
    ngOnInit() {
    }
    deselectAll() {
        this.BV1 = false;
        this.BV2 = false;
        this.BV3 = false;
        this.BV4 = false,
            this.BV5 = false, this.BV6 = false, this.BV7 = false, this.BV8 = false,
            this.BV9 = false, this.BV10 = false, this.BV11 = false, this.BV12 = false,
            this.BV13 = false, this.BV14 = false;
        // this.sharedService.setCatArray(this.catArray)
    }
    ionViewWillEnter() {
        this.categoryData = this.sharedService.getCatArray();
        console.log("categoryData", this.categoryData);
        for (let j = 0; j < this.categoryData.length; j++) {
            var catData = this.categoryData[2];
            for (let i = 0; i < catData.length; i++) {
                if (catData[i] == "Domestic Violence") {
                    this.BV1 = true;
                }
                else if (catData[i] == "Online Harassment") {
                    this.BV2 = true;
                }
                else if (catData[i] == "Rape/Sexual Assault") {
                    this.BV3 = true;
                }
                else if (catData[i] == "Physical Assault") {
                    this.BV4 = true;
                }
                else if (catData[i] == "Stalking") {
                    this.BV5 = true;
                }
                else if (catData[i] == "Ogling/Facial Expressions/Staring") {
                    this.BV6 = true;
                }
                else if (catData[i] == "Touching /Groping") {
                    this.BV7 = true;
                }
                else if (catData[i] == "Showing Pornography without consent") {
                    this.BV8 = true;
                }
                else if (catData[i] == "Commenting/Sexual Invites") {
                    this.BV9 = true;
                }
                else if (catData[i] == "Chain Snatching/Robbery") {
                    this.BV10 = true;
                }
                else if (catData[i] == "Human Trafficking") {
                    this.BV11 = true;
                }
                else if (catData[i] == "Other") {
                    this.BV12 = true;
                }
            }
        }
    }
    getCategory(e) {
        console.log(e);
        this.checked = e.detail.checked;
        if (this.checked == true) {
            this.catArray.push(e.detail.value);
            console.log(this.catArray);
            if (this.catArray != []) {
                this.buttonDisable = false;
            }
        }
        else if (this.checked == false) {
            var index = this.catArray.indexOf(e.detail.value);
            console.log(index);
            this.catArray.splice(index, 1);
            console.log(this.catArray);
        }
    }
    filter() {
        //  this.categoryArray = []
        //  this.catIdArray = []
        // for(let i =0; i<this.catArray.length; i++)
        // {
        //   console.log(this.catArray[i])
        //   var splitValue = this.catArray[i].split(',')
        //   console.log(splitValue)
        //   this.categoryArray.push(splitValue[0])
        //   this.catIdArray.push(splitValue[1])
        // }
        // this.sharedService.setCatArray(this.catArray)
        var catArray = JSON.stringify(this.catArray);
        // var catId = JSON.stringify(this.catIdArray)
        // console.log("catArray",cat)
        // console.log("catIDs",catId)
        let navigationExtras = {
            queryParams: {
                catData: catArray,
                // catIDs:catId,
                pagename: 'incidentFilter'
            }
        };
        this.navController.navigateRoot([`/filter`], navigationExtras);
    }
};
IncidentfilterPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
IncidentfilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incidentfilter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./incidentfilter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/incidentfilter/incidentfilter.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./incidentfilter.page.scss */ "./src/app/incidentfilter/incidentfilter.page.scss")).default]
    })
], IncidentfilterPage);



/***/ })

}]);
//# sourceMappingURL=incidentfilter-incidentfilter-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailpopup-detailpopup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailpopup/detailpopup.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailpopup/detailpopup.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"newheader\">\n     <ion-toolbar>\n          <ion-buttons slot=\"end\">\n               <button (click)=\"dismiss()\" ion-button class=\"newclose\">\n                    <ion-icon name=\"close\"></ion-icon>\n               </button>\n          </ion-buttons>\n     </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <div class=\"mainareain\" *ngIf='type == \"incident\"'>\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newtext\">\n                         <h4>{{violence_type}}</h4>\n                         <h3>{{age}} Yrs\n                              <span *ngIf=\"gender != 'Prefer not to say'\"> | {{gender}}</span></h3>\n                         <p>{{what_happened_desc}}</p>\n                         <h5 *ngIf='showPerpetrator'>{{\"showPerpetrator\" | translate}}: {{showPerpetrator}}</h5>\n                         <h5 *ngIf='showAttacked'>{{\"showAttacked\" | translate}}: {{feel_attacked}}</h5>\n                         <h5 *ngIf=\"additional_detail != ''\">{{\"additional_detail\"| translate}}: {{additional_detail}}</h5>\n\n                         <ion-item *ngIf='show1'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"police_report_filed\" | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show2'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"police_report_not_filed\"| translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show3'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"tried_to_file_police_report\" | translate}} {{other_ans}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show4'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"intend_to_file_police_report\" | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show5'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"not_sure_about_filing_police_report\"|translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"medical_help_received\"|translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_not_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{\"medical_hlp_noy_rcvd\" |translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"suburb\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/location.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{suburb}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item *ngIf=\"incidents_date_est\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/calendar.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_date_est}} {{date_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item *ngIf=\"incidents_time_est\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/time.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_time_est}} {{time_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                    </div>\n               </ion-col>\n          </ion-row>\n     </div>\n\n     <div class=\"mainareain\" *ngIf='type == \"safetyTip\"'>\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newtext\">\n                         <h4>{{safety_tip_title}}</h4>\n                         <div class=\"newcalendar\" *ngIf=\"getDaysAgo\">\n                              <img src=\"assets/images/icons/calendar.svg\" />\n                              <p>{{getDaysAgo}} | {{time}}</p>\n                         </div>\n                         <div class=\"newcalendar\" *ngIf=\"exact_location\">\n                              <img src=\"assets/images/icons/location.svg\" />\n                              <p>{{exact_location}}</p>\n                         </div>\n                         <p>{{safety_tip_desc}}</p>\n                    </div>\n               </ion-col>\n          </ion-row>\n     </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/detailpopup/detailpopup-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/detailpopup/detailpopup-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailpopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpopupPageRoutingModule", function() { return DetailpopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailpopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailpopup.page */ "./src/app/detailpopup/detailpopup.page.ts");




const routes = [
    {
        path: '',
        component: _detailpopup_page__WEBPACK_IMPORTED_MODULE_3__["DetailpopupPage"]
    }
];
let DetailpopupPageRoutingModule = class DetailpopupPageRoutingModule {
};
DetailpopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailpopupPageRoutingModule);



/***/ }),

/***/ "./src/app/detailpopup/detailpopup.module.ts":
/*!***************************************************!*\
  !*** ./src/app/detailpopup/detailpopup.module.ts ***!
  \***************************************************/
/*! exports provided: DetailpopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpopupPageModule", function() { return DetailpopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detailpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailpopup-routing.module */ "./src/app/detailpopup/detailpopup-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _detailpopup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detailpopup.page */ "./src/app/detailpopup/detailpopup.page.ts");








let DetailpopupPageModule = class DetailpopupPageModule {
};
DetailpopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _detailpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailpopupPageRoutingModule"]
        ],
        declarations: [_detailpopup_page__WEBPACK_IMPORTED_MODULE_7__["DetailpopupPage"]]
    })
], DetailpopupPageModule);



/***/ }),

/***/ "./src/app/detailpopup/detailpopup.page.scss":
/*!***************************************************!*\
  !*** ./src/app/detailpopup/detailpopup.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 12px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.newtext h3 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 2px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n:focus {\n  outline: none;\n}\n\n.newclose {\n  background-color: transparent;\n  font-size: 32px;\n  float: right;\n}\n\n.newheader {\n  box-shadow: none !important;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\nion-item {\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --min-height: 38px;\n  font-size: 14px;\n  border: none;\n  margin-bottom: 5px;\n}\n\nion-thumbnail {\n  width: 20px;\n  height: 20px;\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 18px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 10px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 18px;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9kZXRhaWxwb3B1cC9kZXRhaWxwb3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFpbHBvcHVwL2RldGFpbHBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFVBO0VBQ0EsY0FBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0ksbUJBQUE7QUNUSjs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNWQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWEE7O0FEYUE7RUFFQyxXQUFBO0VBQ0Qsb0JBQUE7QUNYQTs7QURhQztFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWRDs7QURhQztFQUVELGFBQUE7QUNYQTs7QURjQztFQUVELDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNaQTs7QURnQkM7RUFFRCwyQkFBQTtBQ2RBOztBRGlCQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ2ZEOztBRGtCQztFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDSSxZQUFBO0VBQ0Msa0JBQUE7QUNoQlA7O0FEbUJDO0VBRUEsV0FBQTtFQUNHLFlBQUE7RUFDSCx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDakJEOztBRG9CQztFQUVDLGVBQUE7RUFDRSxrQkFBQTtBQ2xCSjs7QURzQkM7RUFJQTtJQUVFLGtCQUFBO0lBQ0MsbUJBQUE7RUN2QkY7QUFDRjs7QUQwQkE7RUFFQSxrQkFBQTtBQ3pCQTs7QUQ0QkE7RUFFQSxTQUFBO0FDMUJBOztBRDhCQTtFQUlBLDhDQUFBO0FDNUJBOztBRGdDQTtFQUVBLHVCQUFBO0FDOUJBOztBRGlDQTtFQUVBLHFCQUFBO0FDL0JBOztBRGlDQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDL0JKOztBRGlDQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDL0JBOztBRG1DQTtFQUNBLGNBQUE7QUNoQ0E7O0FEbUNBO0VBQ0EsZ0JBQUE7QUNoQ0E7O0FEbUNBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pDSjs7QURtQ0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDakNKOztBRG1DQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNqQ0E7O0FEbUNBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ2pDQTs7QURvQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2xDQTs7QURxQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ25DQTs7QURzQ0E7RUFFQyxXQUFBO0VBQ0Qsb0JBQUE7RUFDQSxtQkFBQTtBQ3BDQTs7QURzQ0M7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbkNEOztBRHdDQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ3RDRDs7QUR5Q0M7RUFJQTtJQUVFLGtCQUFBO0lBQ0MsbUJBQUE7RUMxQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHBvcHVwL2RldGFpbHBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luLXRvcDoxMnB4O1xyXG59XHJcbi5uZXd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyM3B4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzE4MTcxOTtcclxubWFyZ2luLXRvcDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGgzXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjE2cHg7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm5ld3RleHQgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MjVweDtcclxuY29sb3I6IzU5MkQ4RDtcclxubWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbi5uZXd0ZXh0IGg1XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjE0cHg7XHJcbm1hcmdpbi10b3A6MThweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm5ld3RleHQgaDZcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6MTRweDtcclxubWFyZ2luLXRvcDoxOHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5uZXdjYWxlbmRhclxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmlubGluZS1mbGV4O1xyXG5cdH1cclxuXHQubmV3Y2FsZW5kYXIgcHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRtYXJnaW4tYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdDpmb2N1cyBcclxue1xyXG5vdXRsaW5lOm5vbmU7XHJcbn1cclxuXHRcclxuXHQubmV3Y2xvc2Vcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG5mb250LXNpemU6MzJweDtcclxuZmxvYXQ6cmlnaHQ7XHJcblxyXG59XHJcblx0XHJcblx0Lm5ld2hlYWRlclxyXG57XHJcbmJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblx0XHJcblx0Lm5ld2NhbGVuZGFyIGltZ1xyXG5cdHtcclxuXHR3aWR0aDoxN3B4O1xyXG5cdG1hcmdpbi1yaWdodDoycHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1pdGVtXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG5cdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0tbWluLWhlaWdodDogMzhweDtcclxuXHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0ICAgIGJvcmRlcjpub25lO1xyXG5cdFx0XHQgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdH1cclxuXHRcclxuXHRpb24tdGh1bWJuYWlsXHJcblx0e1xyXG5cdHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XHJcblx0bWFyZ2luLXRvcDoycHg7XHJcblx0bWFyZ2luLWJvdHRvbToycHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1sYWJlbFxyXG5cdHtcclxuXHQgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIGlvbi10aXRsZVxyXG57XHJcbiAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbn0gXHJcbn1cclxuXHJcbi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0Lm1haW5hcmVhaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luLXRvcDoxOHB4O1xyXG59XHJcbi5uZXd0ZXh0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyM3B4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3RleHQgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5saW5lLWhlaWdodDoyMHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzE4MTcxOTtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToyNXB4O1xyXG5jb2xvcjojNTkyRDhEO1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubmV3Y2FsZW5kYXJcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuZGlzcGxheTppbmxpbmUtZmxleDtcclxubWFyZ2luLWJvdHRvbToxOHB4O1xyXG5cdH1cclxuXHQubmV3Y2FsZW5kYXIgcHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxuXHRtYXJnaW4tYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC5uZXdjYWxlbmRhciBpbWdcclxuXHR7XHJcblx0d2lkdGg6MTdweDtcclxuXHRtYXJnaW4tcmlnaHQ6MnB4O1xyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgKGRldmljZS1oZWlnaHQgOiA1NjhweCkgXHJcbiAgIGFuZCAoZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxyXG4gICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuIHtcclxuIGlvbi10aXRsZVxyXG57XHJcbiAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbn0gXHJcbn1cclxuXHJcblxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxODE3MTk7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5uZXd0ZXh0IGgzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLm5ld3RleHQgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXd0ZXh0IGg2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3Y2FsZW5kYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXdjYWxlbmRhciBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXdjbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDMycHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5ld2hlYWRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5ld2NhbGVuZGFyIGltZyB7XG4gIHdpZHRoOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgfVxufVxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3RleHQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTgxNzE5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXdjYWxlbmRhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLm5ld2NhbGVuZGFyIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5ld2NhbGVuZGFyIGltZyB7XG4gIHdpZHRoOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuQG1lZGlhIChkZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChkZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICBpb24tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/detailpopup/detailpopup.page.ts":
/*!*************************************************!*\
  !*** ./src/app/detailpopup/detailpopup.page.ts ***!
  \*************************************************/
/*! exports provided: DetailpopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpopupPage", function() { return DetailpopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let DetailpopupPage = class DetailpopupPage {
    constructor(route, httpClient, navController, router, modalCtrl) {
        this.route = route;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/reported-incident/';
        this.showAttacked = false;
        this.showPerpetrator = false;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.rece_medi_not_attn = false;
        this.rece_medi_attn = false;
        this.showincident = false;
        this.showSafetyTip = false;
        this.route.queryParams.subscribe(params => {
            this.type = params['type'];
            if (this.type == 'incident') {
                this.showincident = true;
                this.showincident = false;
                var detail = params['marker'];
                console.log("stringdetail", detail);
                this.itemDetail = JSON.parse(detail);
                console.log("item array", this.itemDetail);
                this.violence_type = this.itemDetail.categories;
                this.age = this.itemDetail.age;
                this.gender = this.itemDetail.gender;
                this.what_happened_desc = this.itemDetail.description;
                console.log("discription", this.what_happened_desc);
                this.suburb = this.itemDetail.building;
                this.incidents_date_est = this.itemDetail.is_date_estimate != "0" ? "Around " : "On";
                this.incidents_time_est = this.itemDetail.is_time_estimate != "0" ? "Around " : "At";
                this.incidents_time_est = this.itemDetail.time_to != null ? "Between " : this.incidents_time_est;
                this.time_estimate_name = this.itemDetail.time_to != null ? this.timeConvert(this.itemDetail.time_from) + " - " + this.timeConvert(this.itemDetail.time_to) : this.itemDetail.time_from;
                this.time_estimate_name = this.timeConvert(this.itemDetail.time_from);
                this.date_estimate_name = this.ChangeDateFormat(this.itemDetail.created_on, 1);
                console.log("date_estimate", this.date_estimate_name);
                console.log("time_estimate", this.time_estimate_name);
                // this.date_estimate_name = this.itemDetail.show_date
                // this.time_estimate_name = this.itemDetail.show_time
                this.additional_detail = this.itemDetail.additional_detail;
                for (let i = 0; i < this.itemDetail.answers.length; i++) {
                    console.log(this.itemDetail.answers[i]);
                    if (this.itemDetail.answers[i].question_tag == "attack_reason") {
                        this.showAttacked = true;
                        this.feel_attacked = this.itemDetail.answers[i].answer;
                    }
                    else if (this.itemDetail.answers[i].question_tag == "who_was_perpetrator") {
                        this.showPerpetrator = true;
                        this.perpetrator = this.itemDetail.answers[i].answer;
                    }
                    else if (this.itemDetail.answers[i].question_tag == "reported_to_police") {
                        if (this.itemDetail.answers[i].answer_id == '38') {
                            this.show1 = true;
                        }
                        else if (this.itemDetail.answers[i].answer_id == '41') {
                            this.show2 = true;
                        }
                        else if (this.itemDetail.answers[i].answer_id == '42') {
                            this.show3 = true;
                            this.other_ans = JSON.parse(this.itemDetail.answers[i].other_answers);
                            this.other_ans = this.other_ans[42];
                            console.log(this.other_ans);
                        }
                        else if (this.itemDetail.answers[i].answer_id == '39') {
                            this.show4 = true;
                        }
                        else if (this.itemDetail.answers[i].answer_id == '40') {
                            this.show5 = true;
                        }
                    }
                    else if (this.itemDetail.answers[i].question_tag == "medical_help") {
                        if (this.itemDetail.answers[i].answer_id == "28") {
                            this.rece_medi_attn = true;
                        }
                        else {
                            this.rece_medi_not_attn = true;
                        }
                    }
                }
            }
            else {
                this.showSafetyTip = true;
                this.showincident = false;
                this.safetyTipDesc = params['marker'];
                this.safetyTipDesc = JSON.parse(this.safetyTipDesc);
                this.safety_tip_title = this.safetyTipDesc.safety_tip_title;
                this.exact_location = this.safetyTipDesc.exact_location;
                this.added_date = this.safetyTipDesc.added_date;
                this.safety_tip_desc = this.safetyTipDesc.safety_tip_desc;
                console.log("data", this.safetyTipDesc);
                var dayBetween = this.days_between(this.added_date);
                this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(this.added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
                console.log(this.getDaysAgo);
                var time1 = this.added_date.substring(11, 19);
                console.log("time", time1);
                this.time = this.timeConvert(time1);
                console.log("Time", this.time);
            }
        });
    }
    ngOnInit() {
    }
    ChangeDateFormat(date, val) {
        var dayDate = new Date(date.replace(/ /g, "T"));
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[dayDate.getMonth()];
        var monthVal = (val == 1 ? monthName.substr(0, 3) : monthName);
        var getDate = dayDate.getDate();
        var getYear = dayDate.getFullYear();
        var format_date = getDate + " " + monthVal + " " + getYear;
        return format_date;
    }
    days_between(date) {
        // The number of milliseconds in one day
        var date1;
        date1 = new Date(date.replace(/ /g, "T"));
        var todays_date;
        todays_date = new Date();
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(todays_date - date1);
        var daydiff = Math.round(differenceMs / ONE_DAY);
        return daydiff;
    }
    timeConvert(time) {
        // console.log("Time in convert ", time)
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
            console.log("time1", time[0]);
            console.log("time", time);
            var time_array = [];
            time_array.push(time[0]);
            time_array.push(time[1]);
            time_array.push(time[2]);
            time_array.push(time[5]);
        }
        return time_array.join('');
        // return adjusted time or original string
    }
    dismiss() {
        this.navController.navigateForward("/home");
    }
};
DetailpopupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DetailpopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailpopup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detailpopup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailpopup/detailpopup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detailpopup.page.scss */ "./src/app/detailpopup/detailpopup.page.scss")).default]
    })
], DetailpopupPage);



/***/ })

}]);
//# sourceMappingURL=detailpopup-detailpopup-module-es2015.js.map
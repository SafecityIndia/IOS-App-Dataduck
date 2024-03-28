(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewreportdetail-viewreportdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreportdetail/viewreportdetail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewreportdetail/viewreportdetail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n     <ion-toolbar>\n          <ion-buttons slot=\"start\">\n               <ion-back-button   defaultHref='/modelreport' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n          </ion-buttons>\n     </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n     <ion-toolbar>\n     <ion-buttons slot=\"start\" (click)=\"dismiss()\" >\n      <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\"/>\n      </ion-buttons>  \n     </ion-toolbar>\n</ion-header>\n\n<ion-content>\n     <div class=\"mainareain\">\n          <ion-row>\n               <ion-col size=\"12\">\n                    <div class=\"newtext\">\n                         <h4>{{violence_type}}</h4>\n                         <h3>{{age}} {{'yrs' | translate }}\n                         <span *ngIf=\"gender != 'Prefer not to say'\"> | {{gender}}</span></h3>\n                         <p>{{what_happened_desc}}</p>\n                         <h5 *ngIf='showPerpetrator'>{{'showPerpetrator' | translate }}: {{perpetrator}}</h5>\n                         <h5 *ngIf='showAttacked'>{{'showAttacked' | translate }}: {{feel_attacked}}</h5>\n                         <h5 *ngIf=\"additional_detail != ''\">{{'additional_detail' | translate }}: {{additional_detail}}</h5>\n\n                         <ion-item *ngIf='show1'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'police_Report_filed' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show2'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'police_reprt_not_filed' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show3'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'tried_to_filed' | translate }} {{other_ans}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show4'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                  {{'intent_to_filed' | translate }}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf='show5'>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/policereport.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'not_sure' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'medical_help_received' | translate }}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item *ngIf=\"rece_medi_not_attn\">\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/medical.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{'medical_hlp_noy_rcvd' | translate}}\n                              </ion-label>\n                         </ion-item>\n\n                         <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/location.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{suburb}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/calendar.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_date_est}} {{date_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                         <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                   <img src=\"assets/images/icons/time.svg\" />\n                              </ion-thumbnail>\n                              <ion-label>\n                                   {{incidents_time_est}} {{time_estimate_name}}\n                              </ion-label>\n                         </ion-item>\n                    </div>\n               </ion-col>\n          </ion-row>\n     </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/viewreportdetail/viewreportdetail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/viewreportdetail/viewreportdetail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewreportdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreportdetailPageRoutingModule", function() { return ViewreportdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _viewreportdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewreportdetail.page */ "./src/app/viewreportdetail/viewreportdetail.page.ts");




const routes = [
    {
        path: '',
        component: _viewreportdetail_page__WEBPACK_IMPORTED_MODULE_3__["ViewreportdetailPage"]
    }
];
let ViewreportdetailPageRoutingModule = class ViewreportdetailPageRoutingModule {
};
ViewreportdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewreportdetailPageRoutingModule);



/***/ }),

/***/ "./src/app/viewreportdetail/viewreportdetail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/viewreportdetail/viewreportdetail.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewreportdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreportdetailPageModule", function() { return ViewreportdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _viewreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewreportdetail-routing.module */ "./src/app/viewreportdetail/viewreportdetail-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _viewreportdetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewreportdetail.page */ "./src/app/viewreportdetail/viewreportdetail.page.ts");








let ViewreportdetailPageModule = class ViewreportdetailPageModule {
};
ViewreportdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewreportdetailPageRoutingModule"]
        ],
        declarations: [_viewreportdetail_page__WEBPACK_IMPORTED_MODULE_7__["ViewreportdetailPage"]]
    })
], ViewreportdetailPageModule);



/***/ }),

/***/ "./src/app/viewreportdetail/viewreportdetail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/viewreportdetail/viewreportdetail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-ios-s .newback {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 12px;\n}\n\n.newtext {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newtext p {\n  width: 100%;\n  height: auto;\n  line-height: 20px;\n  font-size: 16px;\n  color: #181719;\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n\n.newtext h3 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.newtext h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 25px;\n  color: #592D8D;\n  margin-bottom: 2px;\n}\n\n.newtext h5 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newtext h6 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 18px;\n  margin-bottom: 15px;\n}\n\n.newcalendar {\n  width: 100%;\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.newcalendar img {\n  width: 17px;\n  margin-right: 2px;\n}\n\nion-item {\n  --inner-border-width: 0 0 0 0;\n  --padding-start: 0;\n  --min-height: 38px;\n  font-size: 14px;\n}\n\nion-thumbnail {\n  width: 20px;\n  height: 20px;\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\nion-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  ion-title {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC92aWV3cmVwb3J0ZGV0YWlsL3ZpZXdyZXBvcnRkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3cmVwb3J0ZGV0YWlsL3ZpZXdyZXBvcnRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDTkE7O0FEVUE7RUFDQSxjQUFBO0FDUEE7O0FEVUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNSQTs7QURXQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0ksbUJBQUE7QUNUSjs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRFlBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNWQTs7QURZQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWEE7O0FEYUE7RUFFQyxXQUFBO0VBQ0Qsb0JBQUE7QUNYQTs7QURhQztFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWRDs7QURhQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ1hEOztBRGNDO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGVDO0VBRUEsV0FBQTtFQUNHLFlBQUE7RUFDSCx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDYkQ7O0FEZ0JDO0VBRUMsZUFBQTtFQUNFLGtCQUFBO0FDZEo7O0FEa0JDO0VBSUE7SUFFRSxrQkFBQTtJQUNDLG1CQUFBO0VDbkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cmVwb3J0ZGV0YWlsL3ZpZXdyZXBvcnRkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5mb250LWZhbWlseTogJ0xhdG8nO1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5cclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLm5ld2JhY2sge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6MTJweDtcclxufVxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjNweDtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG5jb2xvcjojMjIwRTBFO1xyXG5tYXJnaW4tdG9wOjA7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMxODE3MTk7XHJcbm1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBoM1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5uZXd0ZXh0IGg0XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjI1cHg7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbm1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4ubmV3dGV4dCBoNVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5tYXJnaW4tdG9wOjE4cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5uZXd0ZXh0IGg2XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOjE0cHg7XHJcbm1hcmdpbi10b3A6MThweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubmV3Y2FsZW5kYXJcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuZGlzcGxheTppbmxpbmUtZmxleDtcclxuXHR9XHJcblx0Lm5ld2NhbGVuZGFyIHB7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0bWFyZ2luLXRvcDo1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FsZW5kYXIgaW1nXHJcblx0e1xyXG5cdHdpZHRoOjE3cHg7XHJcblx0bWFyZ2luLXJpZ2h0OjJweDtcclxuXHR9XHJcblx0XHJcblx0aW9uLWl0ZW1cclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1taW4taGVpZ2h0OiAzOHB4O1xyXG5cdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0fVxyXG5cdFxyXG5cdGlvbi10aHVtYm5haWxcclxuXHR7XHJcblx0d2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luLWlubGluZS1lbmQ6IDhweDtcclxuXHRtYXJnaW4tdG9wOjJweDtcclxuXHRtYXJnaW4tYm90dG9tOjJweDtcclxuXHR9XHJcblx0XHJcblx0aW9uLWxhYmVsXHJcblx0e1xyXG5cdCBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcblx0fVxyXG5cdFxyXG5cdEBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gaW9uLXRpdGxlXHJcbntcclxuICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxufSBcclxufVxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5uZXdiYWNrIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXJlYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm5ld3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwIDIzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3dGV4dCBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxODE3MTk7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5uZXd0ZXh0IGgzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3dGV4dCBoNCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLm5ld3RleHQgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXd0ZXh0IGg2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3Y2FsZW5kYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXdjYWxlbmRhciBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uZXdjYWxlbmRhciBpbWcge1xuICB3aWR0aDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1taW4taGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbkBtZWRpYSAoZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAoZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/viewreportdetail/viewreportdetail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/viewreportdetail/viewreportdetail.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewreportdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreportdetailPage", function() { return ViewreportdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let ViewreportdetailPage = class ViewreportdetailPage {
    constructor(modalCtrl, route, httpClient, navController) {
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.httpClient = httpClient;
        this.navController = navController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.pagename = 'from_detail';
        this.showAttacked = false;
        this.showPerpetrator = false;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.rece_medi_not_attn = false;
        this.rece_medi_attn = false;
        this.route.queryParams.subscribe(params => {
            this.itemDetail = params["itemDetail"];
            this.itemDetail = JSON.parse(this.itemDetail);
            console.log("for Who", this.itemDetail);
            this.violence_type = this.itemDetail.categories;
            this.age = this.itemDetail.age;
            this.gender = this.itemDetail.gender;
            this.what_happened_desc = this.itemDetail.description;
            console.log("discription", this.what_happened_desc);
            this.suburb = this.itemDetail.building;
            // this.city = this.itemDetail.city
            this.incidents_date_est = this.itemDetail.is_date_estimate != "0" ? "Around " : "On";
            this.incidents_time_est = this.itemDetail.is_time_estimate != "0" ? "Around " : "At";
            this.incidents_time_est = this.itemDetail.time_to != null ? "Between " : this.incidents_time_est;
            this.time_estimate_name = this.itemDetail.time_to != null ? this.timeConvert(this.itemDetail.time_from) + " - " + this.timeConvert(this.itemDetail.time_to) : this.itemDetail.time_from;
            this.date_estimate_name = this.itemDetail.show_date;
            this.time_estimate_name = this.itemDetail.show_time;
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
        });
    }
    timeConvert(time) {
        console.log("Time in convert ", time);
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    back() {
        this.navController.navigateBack('/modelreport');
    }
    ngOnInit() {
        // this.viewReportDetail()
    }
    dismiss() {
        let navigationExtras = {
            queryParams: {
                // incidentList: this.incidentList,
                // safetyTipList: this.safetyTipList,
                segmentModel: 'one',
                pagename: this.pagename
            }
        };
        this.navController.navigateBack([`modelreport`], navigationExtras);
    }
};
ViewreportdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ViewreportdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewreportdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewreportdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreportdetail/viewreportdetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewreportdetail.page.scss */ "./src/app/viewreportdetail/viewreportdetail.page.scss")).default]
    })
], ViewreportdetailPage);



/***/ })

}]);
//# sourceMappingURL=viewreportdetail-viewreportdetail-module-es2015.js.map
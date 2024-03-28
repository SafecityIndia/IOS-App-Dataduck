(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modelreport-modelreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modelreport/modelreport.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modelreport/modelreport.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home' icon=\"undefined\" text=\"\" class=\"backbutton\">\n      </ion-back-button>\n    </ion-buttons> -->\n\n        <ion-buttons slot=\"start\" (click)=\"dismiss()\">\n            <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\" />\n        </ion-buttons>\n\n        <div class=\"newsidetext\" slot=\"end\" (click)=\"help()\">\n            <p>{{'help_menu' | translate}}</p>\n        </div>\n\n        <ion-buttons slot=\"end\" class=\"newmenu\" (click)=\"menu()\">\n            <img src=\"assets/images/icons/menunew.svg\" />\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!-- <div class=\"toparrow\" *ngIf = \"showFull != 'true'\" (click)=\"newmodalin()\">\n<ion-icon name=\"chevron-up-outline\"></ion-icon>\n</div> -->\n    <div class=\"mainseg\">\n        <div class=\"segmentin\">\n            <ion-segment mode=\"ios\" value=\"one\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"one\">\n                    <ion-label>{{'incidents'| translate}}</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"two\">\n                    <ion-label>{{'safety_tips' | translate }}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <div *ngIf=\"segmentModel === 'one'\">\n            <ion-card class=\"newcard\" (click)=\"preframing()\">\n                <ion-card-content>\n                    <p>{{'incident_detail_msg' | translate}}</p>\n                    <h5>{{'incident_button' | translate}}</h5>\n                </ion-card-content>\n            </ion-card>\n            <div class=\"newitemone\">\n                <h2>{{'incident_shared_community' | translate}}</h2>\n                <ion-chip fill=\"outline\" (click)=\"filter()\">\n                    <ion-label>{{'home_all_filters' | translate}} <span *ngIf=\"incidentNumber\">{{filterCount}}</span></ion-label>\n                </ion-chip>\n\n                <div class=\"clear\" (click)=\"clearList('incident')\">\n                    {{'button_clear' | translate }}\n                </div>\n\n\n\n                <ion-card *ngFor=\"let item of incidentList\" class=\"newcardin\" tappable (click)=\"viewreport(item)\">\n                    <ion-card-header *ngIf=\"incidentList.length > 0\">\n\n                        <ion-card-title>\n                            <ion-row>\n                                <ion-col size=\"12\">{{item.categories}}</ion-col>\n                            </ion-row>\n                        </ion-card-title>\n\n                    </ion-card-header>\n                    <ion-card-content *ngIf=\"incidentList.length > 0\">\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <div class=\"subheading\">\n                                    <h3>{{'At' | translate}} {{item.area}}</h3>\n\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"7\">\n                                <div class=\"subheading\">\n                                    <h4>{{item.show_date}} {{item.show_time}}</h4>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <p>{{item.show_disc}}...<span>{{'read_more' | translate}}</span></p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n\n                </ion-card>\n                <div class=\"notfoundin\" *ngIf=\"incidentList.length == 0 && segmentModel === 'one'\">\n                    <p>{{'incident_no_data' | translate}} </p>\n                </div>\n                <!-- <div class=\"notviewincidents\" >\n          <p>To view incidents reported before 01 Dec 2020, <a href=\"https://public.tableau.com/profile/mehul.sharma3900#!/vizhome/Safecity_Dashboard_Delhi_final/MumbaiStory\" target=\"_blank\">click here</a></p>\n        </div> -->\n                <ion-fab (click)=\"preframing()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n                    <ion-fab-button>\n                        <ion-icon name=\"add\"></ion-icon>\n                    </ion-fab-button>\n                </ion-fab>\n                <div class=\"pagination\" *ngIf=\"incidentList.length > 0\">\n                    <div class=\"textpage\">\n                        <p>{{showing}}</p>\n                        <!-- <p>Showing</p><p>1</p><p>-</p><p>20</p><p>0f</p><p>300</p> -->\n                    </div>\n                    <div class=\"textpage\">\n                        <ion-button class=\"arrowbtn\" (click)=\"previousforward('previous')\" [disabled]=\"hide_back\">\n                            <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                        </ion-button>\n                        <ion-button class=\"arrowbtn\" [disabled]=\"forwardincidentdisabled\" (click)=\"previousforward('forward')\">\n                            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- <ion-button class=\"newsafe\" shape=\"round\" expand=\"full\" (click)=\"preframing()\">Share Incident anonymously\n      </ion-button> -->\n        </div>\n\n        <div *ngIf=\"segmentModel === 'two'\">\n            <ion-card class=\"newcard\" (click)=\"safetytip()\">\n                <ion-card-content>\n                    <p>{{'short_safety_msg' | translate}}</p>\n                    <h5>{{'safety_button' | translate}}</h5>\n                </ion-card-content>\n            </ion-card>\n            <div class=\"newitemone\">\n                <h2>{{'safety_shared_community' | translate}}</h2>\n                <ion-chip fill=\"outline\" (click)=\"safteyfilter()\">\n                    <ion-label>{{'home_all_filters' | translate}}<span *ngIf=\"number\">1</span></ion-label>\n                </ion-chip>\n                <div class=\"clear\" (click)='clearList(safetytip)'>\n                    {{'button_clear' | translate }}\n                </div>\n                <ion-card class=\"newcardin\" *ngFor=\"let item of safetyTipList\" tappable (click)=\"viewsafety(item)\">\n                    <ion-card-header *ngIf=\"safetyTipList.length > 0\">\n                        <ion-card-title>\n                            <ion-row>\n                                <ion-col size=\"12\">{{item.safety_tip_title}}</ion-col>\n                            </ion-row>\n                        </ion-card-title>\n\n                    </ion-card-header>\n                    <ion-card-content *ngIf=\"safetyTipList.length > 0\">\n                        <ion-row>\n                            <ion-col size=\"5\">\n                                <div class=\"subheading\">\n                                    <h3>{{'At' | translate}} {{item.city}}</h3>\n\n                                </div>\n                            </ion-col>\n                            <ion-col size=\"7\">\n                                <div class=\"subheading\">\n                                    <h4>{{item.show_date}} {{item.show_time}}</h4>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <p>{{item.show_disc}}…<span>{{'read_more' | translate}}</span></p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-content>\n\n                </ion-card>\n                <div class=\"notfoundin\" *ngIf=\"safetyTipList.length == 0 && segmentModel === 'two'\">\n                    <p>{{'safety_tip_no_data' | translate}}</p>\n                </div>\n\n            </div>\n            <ion-fab vertical=\"bottom\" class=\"newfab\" (click)=\"safetytip()\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button>\n                    <ion-icon name=\"add\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n            <div class=\"pagination\" *ngIf=\"safetyTipList.length > 0\">\n                <div class=\"textpage\">\n                    <p>{{safetyShowing}}</p>\n                    <!-- <p>Showing</p><p>1</p><p>-</p><p>20</p><p>0f</p><p>300</p> -->\n                </div>\n                <div class=\"textpage\">\n                    <ion-button class=\"arrowbtn\" [disabled]=\"hide_safety_back\" (click)=\"previousforwardsafety('previous')\">\n                        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button class=\"arrowbtn\" [disabled]=\"forwardsafetydisabled\" (click)=\"previousforwardsafety('forward')\">\n                        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                    </ion-button>\n                </div>\n            </div>\n            <!-- <ion-button class=\"newsafein\" shape=\"round\" expand=\"full\" (click)=\"safetytip()\">Share safety tipy anonymously\n      </ion-button> -->\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/modelreport/modelreport-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modelreport/modelreport-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ModelreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelreportPageRoutingModule", function() { return ModelreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modelreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modelreport.page */ "./src/app/modelreport/modelreport.page.ts");




const routes = [
    {
        path: '',
        component: _modelreport_page__WEBPACK_IMPORTED_MODULE_3__["ModelreportPage"]
    }
];
let ModelreportPageRoutingModule = class ModelreportPageRoutingModule {
};
ModelreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModelreportPageRoutingModule);



/***/ }),

/***/ "./src/app/modelreport/modelreport.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modelreport/modelreport.module.ts ***!
  \***************************************************/
/*! exports provided: ModelreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelreportPageModule", function() { return ModelreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modelreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modelreport-routing.module */ "./src/app/modelreport/modelreport-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _modelreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modelreport.page */ "./src/app/modelreport/modelreport.page.ts");








let ModelreportPageModule = class ModelreportPageModule {
};
ModelreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _modelreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModelreportPageRoutingModule"]
        ],
        declarations: [_modelreport_page__WEBPACK_IMPORTED_MODULE_7__["ModelreportPage"]]
    })
], ModelreportPageModule);



/***/ }),

/***/ "./src/app/modelreport/modelreport.page.scss":
/*!***************************************************!*\
  !*** ./src/app/modelreport/modelreport.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".segment-button-checked {\n  --indicator-color: #592D8D;\n  color: #fff;\n  --border-radius: 4px;\n  background: #592D8D;\n}\n\n.pagination {\n  height: auto;\n  z-index: 999;\n  float: right;\n  text-align: right;\n  margin-bottom: 25px;\n}\n\n.textpage {\n  height: auto;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.arrowbtn {\n  --background:#fff;\n  --background-activated: #fff;\n  --background-focused: #fff;\n  --background-hover:#fff;\n  --padding-start:0.4em;\n  height: 25px;\n  --border-radius: 0;\n  --padding-end:0.6em;\n  color: rgba(152, 145, 145, 0.97);\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.notviewincidents {\n  width: 100%;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notviewincidents p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.notviewincidents a {\n  font-size: 16px;\n  color: #592D8D;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.notfoundin {\n  width: 100%;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notfoundin p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.textpage p {\n  display: flex;\n  margin: 0;\n  color: rgba(152, 145, 145, 0.97);\n  padding-right: 8px;\n}\n\nion-segment-button {\n  background: #EBE2F5;\n  min-height: 35px;\n  font-size: 16px;\n  --border-radius: 5px;\n  font-weight: 400;\n  margin-top: 0;\n}\n\n.mainseg {\n  width: 100%;\n  height: auto;\n  padding: 10px 16px;\n  margin-top: 0px;\n}\n\n.toparrow {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #C5C5C5;\n  font-size: 28px;\n  position: fixed;\n  z-index: 999;\n  background: #fff;\n  padding: 0px 0 0 0;\n}\n\n.toparrow ion-icon {\n  margin-top: 5px;\n}\n\n.newcard {\n  width: 100%;\n  height: auto;\n  background: #F8F4FD;\n  --border-radius:4px;\n  box-shadow: none;\n  margin-top: 78px;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.newcard p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: #220E0E;\n  line-height: 18px;\n}\n\n.newcard h5 {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 500;\n  color: #592D8D !important;\n  margin-top: 10px;\n  line-height: 18px;\n}\n\n.newitemone {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.newitemone h2 {\n  width: 100%;\n  height: auto;\n  color: #2F1153;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.newcardin {\n  border-radius: 0;\n  box-shadow: none;\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  border-bottom: 1px solid #ddd;\n  margin-top: 22px;\n}\n\n.newcardin ion-card-title {\n  font-size: 16px;\n  color: #592D8D !important;\n  width: 100%;\n  height: auto;\n}\n\n.newcardin ion-card-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  font-size: 16px;\n  color: #592D8D !important;\n  padding: 0 0;\n}\n\n.segmentin {\n  width: auto;\n  position: fixed;\n  background: #fff;\n  z-index: 99;\n  padding: 20px;\n  left: 0;\n  right: 0;\n}\n\n.newcardin ion-card-content {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.newcardin p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(152, 145, 145, 0.97);\n  line-height: 18px;\n}\n\n.newcardin span {\n  height: auto;\n  font-size: 14px;\n  color: #000000;\n}\n\n.newcard p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n  line-height: 18px;\n}\n\n.newitemone ion-chip {\n  background: transparent;\n  border: 1px solid #592D8D;\n  height: 35px;\n  color: #592D8D;\n  font-size: 16px;\n  line-height: 35px;\n  padding: 0 19px;\n  border-radius: 18px;\n}\n\n.newitemone ion-chip span {\n  width: 18px;\n  height: 18px;\n  border-radius: 250px;\n  background: #592D8D;\n  color: #fff;\n  font-size: 11px;\n  display: inline-block;\n  line-height: 18px;\n  text-align: center;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n\n.clear {\n  display: inline-block;\n  color: #D90D0D;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-left: 15px;\n  padding: 18px;\n}\n\n.subheading {\n  width: 100%;\n  height: auto;\n}\n\n.subheading h3 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.subheading h4 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  background-image: url(/assets/images/icons/dotlight.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 5px 4px;\n  padding-left: 28px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nion-segment-button {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 16px;\n  padding-right: 25px;\n}\n\n.newmenu {\n  padding-right: 12px;\n}\n\nheader-md ion-title {\n  text-align: left;\n}\n\n.header-ios ion-title {\n  text-align: left;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n  z-index: 9999;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 16px;\n  padding-right: 25px;\n}\n\nion-title {\n  padding: 0px 20px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.subheading img {\n  width: 8px;\n}\n\n.newsafe {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  top: 67%;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 75%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  right: 0;\n}\n\n.newsafein {\n  color: #000 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #F5DE5B;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 75%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  top: 67%;\n}\n\nion-fab-button {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n}\n\n.newfab ion-fab-button {\n  --background:#F5DE5B;\n  --color:#000;\n  --color-activated:#000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n}\n\nion-fab-button ion-icon {\n  width: 1.2em;\n  height: 1.2em;\n  font-weight: 600;\n}\n\n.fab-vertical-bottom {\n  bottom: 115px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9tb2RlbHJlcG9ydC9tb2RlbHJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGVscmVwb3J0L21vZGVscmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVBLDBCQUFBO0VBQ0ksV0FBQTtFQUNKLG9CQUFBO0VBQ0MsbUJBQUE7QUNERDs7QURLQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNIQTs7QURPQTtFQUdBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDTkE7O0FEU0E7RUFFQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtFQUNKLHFCQUFBO0VBQ0EsWUFBQTtFQUNJLGtCQUFBO0VBQ0osbUJBQUE7RUFDQSxnQ0FBQTtFQUNDLGlIQUFBO0FDUEQ7O0FEV0E7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDVEE7O0FEWUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWQTs7QURhQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1ZBOztBRGFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1hBOztBRGNBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWEE7O0FEZUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNaQTs7QURlQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNiQTs7QURtQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2pCQTs7QURvQkE7RUFFQSxXQUFBO0VBQ0Es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QUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDbkRBOztBRHNEQztFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQywrQkFBQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUNuREo7O0FEc0RDO0VBRUEsb0JBQUE7RUFDQSxZQUFBO0VBQ0ksc0JBQUE7RUFDRCxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDcERKOztBRHVEQTtFQUVDLFlBQUE7RUFDRyxhQUFBO0VBQ0gsZ0JBQUE7QUNyREQ7O0FEd0RDO0VBQ0csYUFBQTtBQ3JESiIsImZpbGUiOiJzcmMvYXBwL21vZGVscmVwb3J0L21vZGVscmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZFxyXG57XHJcbi0taW5kaWNhdG9yLWNvbG9yOiAjNTkyRDhEO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gYmFja2dyb3VuZDojNTkyRDhEOyAgXHJcblxyXG59XHJcblxyXG4ucGFnaW5hdGlvblxyXG57XHJcbmhlaWdodDphdXRvO1xyXG56LWluZGV4Ojk5OTtcclxuZmxvYXQ6cmlnaHQ7XHJcbnRleHQtYWxpZ246cmlnaHQ7XHJcbm1hcmdpbi1ib3R0b206MjVweDtcclxufVxyXG5cclxuXHJcbi50ZXh0cGFnZVxyXG57XHJcblxyXG5oZWlnaHQ6YXV0bztcclxuZGlzcGxheTppbmxpbmUtZmxleDtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFycm93YnRuXHJcbntcclxuLS1iYWNrZ3JvdW5kOiNmZmY7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojZmZmO1xyXG4tLXBhZGRpbmctc3RhcnQ6MC40ZW07XHJcbmhlaWdodDoyNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4tLXBhZGRpbmctZW5kOjAuNmVtO1xyXG5jb2xvcjpyZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xyXG4gLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG59XHJcblxyXG4ubm90dmlld2luY2lkZW50c1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQ6cmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuY29sb3I6cmdiYSg0MSwgMzIsIDMyLCAxKTtcclxufVxyXG5cclxuLm5vdHZpZXdpbmNpZGVudHMgcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MTRweCAxOHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG59XHJcblxyXG4ubm90dmlld2luY2lkZW50cyBhe1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzU5MkQ4RDtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuLm5vdGZvdW5kaW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kOnJnYmEoMjQ0LCAyNDAsIDI0OCwgMSk7XHJcbmNvbG9yOnJnYmEoNDEsIDMyLCAzMiwgMSk7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZGluIHB7XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MTRweCAxOHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG59XHJcblxyXG5cclxuLnRleHRwYWdlIHB7XHJcbmRpc3BsYXk6ZmxleDtcclxubWFyZ2luOjA7XHJcbmNvbG9yOnJnYmEoMTUyLCAxNDUsIDE0NSwgMC45Nyk7XHJcbnBhZGRpbmctcmlnaHQ6OHB4O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG5iYWNrZ3JvdW5kOiNFQkUyRjU7XHJcbm1pbi1oZWlnaHQ6IDM1cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG4tLWJvcmRlci1yYWRpdXM6IDVweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5tYXJnaW4tdG9wOiAwO1xyXG5cdFxyXG59XHJcblxyXG5cclxuXHJcbi5tYWluc2VnXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MTBweCAxNnB4O1xyXG5tYXJnaW4tdG9wOjBweDtcclxufVxyXG5cclxuLnRvcGFycm93XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW46MHB4IGF1dG8gMDtcclxuY29sb3I6I0M1QzVDNTtcclxuZm9udC1zaXplOjI4cHg7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG56LWluZGV4Ojk5OTtcclxuYmFja2dyb3VuZDojZmZmO1xyXG5wYWRkaW5nOjBweCAwIDAgMDtcclxufVxyXG5cclxuLnRvcGFycm93IGlvbi1pY29uXHJcbntcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5uZXdjYXJkXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmJhY2tncm91bmQ6I0Y4RjRGRDtcclxuLS1ib3JkZXItcmFkaXVzOjRweDtcclxuYm94LXNoYWRvdzpub25lO1xyXG5tYXJnaW4tdG9wOjc4cHg7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkIHB7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTRweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5jb2xvcjojMjIwRTBFO1xyXG5saW5lLWhlaWdodDoxOHB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZCBoNXtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxubWFyZ2luLXRvcDoxMHB4O1xyXG5saW5lLWhlaWdodDoxOHB4O1xyXG59XHJcbi5uZXdpdGVtb25lXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5uZXdpdGVtb25lIGgyXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbn1cclxuLm5ld2NhcmRpblxyXG57XHJcbmJvcmRlci1yYWRpdXM6MDtcclxuYm94LXNoYWRvdzpub25lO1xyXG53aWR0aDoxMDAlO1xyXG4gbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG5tYXJnaW4tdG9wOjIycHg7XHJcbn1cclxuLm5ld2NhcmRpbiBpb24tY2FyZC10aXRsZVxyXG57XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5jb2xvcjojNTkyRDhEICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcbi5uZXdjYXJkaW4gaW9uLWNhcmQtaGVhZGVyXHJcbntcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOjAgMDtcclxufVxyXG4uc2VnbWVudGluXHJcbntcclxud2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cdFxyXG59XHJcblxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWNvbnRlbnRcclxue1xyXG4gcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbnBhZGRpbmctaW5saW5lLWVuZDogMDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBwe1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE0cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6cmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcclxubGluZS1oZWlnaHQ6MThweDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBzcGFuXHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5jb2xvcjojMDAwMDAwO1xyXG5cclxufVxyXG5cclxuLm5ld2NhcmQgcHtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbmNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcbmxpbmUtaGVpZ2h0OjE4cHg7XHJcbn1cclxuXHJcbiAubmV3aXRlbW9uZSBpb24tY2hpcFxyXG57XHJcblxyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5ib3JkZXI6MXB4IHNvbGlkICM1OTJEOEQ7XHJcbmhlaWdodDozNXB4O1xyXG5jb2xvcjojNTkyRDhEO1xyXG5mb250LXNpemU6MTZweDtcclxubGluZS1oZWlnaHQ6MzVweDtcclxucGFkZGluZzowIDE5cHg7XHJcbmJvcmRlci1yYWRpdXM6IDE4cHg7XHJcblxyXG59XHJcblxyXG4ubmV3aXRlbW9uZSBpb24tY2hpcCBzcGFue1xyXG53aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tbGVmdDo2cHg7XHJcblx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG4uY2xlYXJcclxue1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxuY29sb3I6I0Q5MEQwRDtcclxuZm9udC1zaXplOjE2cHg7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbm1hcmdpbi1sZWZ0OjE1cHg7XHJcbnBhZGRpbmc6IDE4cHg7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGgzXHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbndpZHRoOmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGg0XHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbndpZHRoOmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcclxuYmFja2dyb3VuZC1zaXplOjZweDtcclxuYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggNHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjhweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4tLXBhZGRpbmctdG9wOiAwO1xyXG4tLXBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4ubmV3c2lkZXRleHQgcFxyXG57XHJcbmNvbG9yOiNEOTBEMEQ7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5wYWRkaW5nLXJpZ2h0OjI1cHg7XHJcbn1cclxuXHJcbi5uZXdtZW51XHJcbntcclxucGFkZGluZy1yaWdodDoxMnB4O1xyXG59XHJcblxyXG5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbnotaW5kZXg6OTk5OTtcclxufVxyXG4gIFxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuXHJcbi5uZXdzaWRldGV4dCBwXHJcbntcclxuY29sb3I6I0Q5MEQwRDtcclxuZm9udC1zaXplOjE2cHg7XHJcbnBhZGRpbmctcmlnaHQ6MjVweDtcclxufVxyXG5cclxuXHJcbmlvbi10aXRsZVxyXG57XHJcbnBhZGRpbmc6IDBweCAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuLnN1YmhlYWRpbmcgaW1nXHJcbntcclxud2lkdGg6OHB4O1xyXG59XHJcblxyXG4ubmV3c2FmZVxyXG57XHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NDBweDtcclxudG9wOjY3JTtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjc1JTtcclxuIGZvbnQtd2VpZ2h0OjQwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG56LWluZGV4Ojk5OTtcclxubGVmdDogMDtcclxucmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5uZXdzYWZlaW5cclxue1xyXG5jb2xvcjojMDAwICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjQwcHg7XHJcbi0tYmFja2dyb3VuZDogI0Y1REU1QjtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo3NSU7XHJcbiBmb250LXdlaWdodDo0MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuei1pbmRleDo5OTk7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG50b3A6NjclO1xyXG59XHJcblxyXG4gaW9uLWZhYi1idXR0b257XHJcbiB3aWR0aDo1MHB4O1xyXG4gaGVpZ2h0OjUwcHg7XHJcbiBwb3NpdGlvbjpmaXhlZDtcclxuIHJpZ2h0OjE1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gfVxyXG4gXHJcbiAubmV3ZmFiIGlvbi1mYWItYnV0dG9uXHJcbiB7XHJcbiAtLWJhY2tncm91bmQ6I0Y1REU1QjtcclxuIC0tY29sb3I6IzAwMDtcclxuICAgICAtLWNvbG9yLWFjdGl2YXRlZDojMDAwO1xyXG4gICAgLS1jb2xvci1mb2N1c2VkOiAjMDAwO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogIzAwMDtcclxuXHQgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNURFNUI7XHJcbiB9XHJcbiBcclxuaW9uLWZhYi1idXR0b24gaW9uLWljb25cclxuIHtcclxuIHdpZHRoOiAxLjJlbTtcclxuICAgIGhlaWdodDogMS4yZW07XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG4gfVxyXG4gXHJcbiAuZmFiLXZlcnRpY2FsLWJvdHRvbXtcclxuICAgIGJvdHRvbTogMTE1cHg7XHJcbn0iLCIuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiAjNTkyRDhEO1xuICBjb2xvcjogI2ZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICM1OTJEOEQ7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiA5OTk7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi50ZXh0cGFnZSB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hcnJvd2J0biB7XG4gIC0tYmFja2dyb3VuZDojZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNmZmY7XG4gIC0tcGFkZGluZy1zdGFydDowLjRlbTtcbiAgaGVpZ2h0OiAyNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIC0tcGFkZGluZy1lbmQ6MC42ZW07XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTQ1LCAxNDUsIDAuOTcpO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm5vdHZpZXdpbmNpZGVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Y0ZjBmODtcbiAgY29sb3I6ICMyOTIwMjA7XG59XG5cbi5ub3R2aWV3aW5jaWRlbnRzIHAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ub3R2aWV3aW5jaWRlbnRzIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ub3Rmb3VuZGluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmNGYwZjg7XG4gIGNvbG9yOiAjMjkyMDIwO1xufVxuXG4ubm90Zm91bmRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dHBhZ2UgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNDUsIDE0NSwgMC45Nyk7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0VCRTJGNTtcbiAgbWluLWhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1haW5zZWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRvcGFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvIDA7XG4gIGNvbG9yOiAjQzVDNUM1O1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwcHggMCAwIDA7XG59XG5cbi50b3BhcnJvdyBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5ld2NhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjRjhGNEZEO1xuICAtLWJvcmRlci1yYWRpdXM6NHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiA3OHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbn1cblxuLm5ld2NhcmQgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3Y2FyZCBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdpdGVtb25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uZXdpdGVtb25lIGgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5ld2NhcmRpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbi5uZXdjYXJkaW4gaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5uZXdjYXJkaW4gaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDA7XG59XG5cbi5zZWdtZW50aW4ge1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZzogMjBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5uZXdjYXJkaW4gaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG59XG5cbi5uZXdjYXJkaW4gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNDUsIDE0NSwgMC45Nyk7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3Y2FyZGluIHNwYW4ge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5uZXdjYXJkIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdpdGVtb25lIGlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTJEOEQ7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDAgMTlweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cblxuLm5ld2l0ZW1vbmUgaW9uLWNoaXAgc3BhbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jbGVhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNEOTBEMEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnN1YmhlYWRpbmcgaDMge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3ViaGVhZGluZyBoNCB7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyOTIwMjA7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3RsaWdodC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDZweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm5ld3NpZGV0ZXh0IHAge1xuICBjb2xvcjogI0Q5MEQwRDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ubmV3bWVudSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbi5uZXdzaWRldGV4dCBwIHtcbiAgY29sb3I6ICNEOTBEMEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uc3ViaGVhZGluZyBpbWcge1xuICB3aWR0aDogOHB4O1xufVxuXG4ubmV3c2FmZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiA2NyU7XG4gIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5ld3NhZmVpbiB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogNzUlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDY3JTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xufVxuXG4ubmV3ZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGNURFNUI7XG4gIC0tY29sb3I6IzAwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IzAwMDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMDAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xufVxuXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZhYi12ZXJ0aWNhbC1ib3R0b20ge1xuICBib3R0b206IDExNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modelreport/modelreport.page.ts":
/*!*************************************************!*\
  !*** ./src/app/modelreport/modelreport.page.ts ***!
  \*************************************************/
/*! exports provided: ModelreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelreportPage", function() { return ModelreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ModelreportPage = class ModelreportPage {
    constructor(loadingController, translate, shareddata, httpClient, route, navController, router, modalController) {
        this.loadingController = loadingController;
        this.translate = translate;
        this.shareddata = shareddata;
        this.httpClient = httpClient;
        this.route = route;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.apiUrl1 = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.showFull = '';
        this.toparrow = true;
        this.incidentList = [];
        this.safetyTipList = [];
        this.number = false;
        this.filterCount = 0;
        this.incidentNumber = false;
        this.pagename1 = 'modelpage';
        this.offset = 0;
        this.total_offset = 0;
        this.safetytotaloffset = 0;
        this.safecity_offset = 0;
        this.forwardincidentdisabled = false;
        this.forwardsafetydisabled = false;
        this.shared_data = this.shareddata.getData();
        this.hide_back = false;
        this.hide_safety_back = false;
        this.route.queryParams.subscribe(params => {
            console.log(this.pagename);
            this.pagename = params['pagename'];
            this.segmentModel = params['segmentModel'];
            var clear_filter = params['clear_filter'];
            console.log("segment model", this.segmentModel);
            // this.incidentFrom = params['incidentFrom'];
            // this.catId = params['catId'];
            // this.timeOfString = params['timeOfString'];
            this.safetyFrom = params['safetyFrom'];
            console.log("safetyFrom", this.safetyFrom);
            console.log("pagename", this.pagename);
            if (this.pagename == 'from_detail') {
                this.all_array = this.shareddata.getCatArray();
                console.log('all arraay', this.all_array);
                for (let i = 0; i < this.all_array.length; i++) {
                    this.filterCount = this.all_array[4];
                }
                if (this.filterCount != 0) {
                    console.log("hellow");
                    this.incidentNumber = true;
                }
                else {
                    console.log("hellow");
                    this.incidentNumber = false;
                }
                this.getReportedIncident();
            }
            if (this.pagename == 'IncidentFilterPage') {
                this.all_array = this.shareddata.getCatArray();
                console.log('all arraay', this.all_array);
                for (let i = 0; i < this.all_array.length; i++) {
                    this.filterCount = this.all_array[4];
                }
                if (this.filterCount != 0) {
                    console.log("hellow");
                    this.getReportedIncident();
                    this.incidentNumber = true;
                }
                else {
                    console.log("hellow");
                    this.incidentNumber = false;
                }
            }
            // if(clear_filter == 'true')
            // {
            //   this.incidentNumber = false;
            //   var empty1 = {}
            //   this.shareddata.setData(empty1)
            //   var empty = []
            // this.shareddata.timeofArray(empty)  
            // }
            if (this.pagename == 'safetyFilterPage') {
                this.number = true;
                this.getSafetyTipsList();
            }
            var safety_tip_filter = this.shareddata.getsafetyfiltersdata();
            if (safety_tip_filter.length == 0) {
                this.number = false;
            }
            else {
                this.number = true;
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // this.getReportedIncident()
        //this.getSafetyTipsList()
        console.log('in ngoninit');
        // this.presentLoading() 
        this.all_array = this.shareddata.getCatArray();
        console.log(this.all_array);
        console.log(this.shared_data);
        this.mapBound = localStorage.getItem('mapBound');
        this.mapZoom = localStorage.getItem('map_zoom');
        if (this.all_array.length) {
            this.getReportedIncident();
        }
        else {
            this.getReportedIncident();
        }
        if (this.shareddata.getsafetyfiltersdata()) {
            this.getSafetyTipsList();
        }
        else {
            this.getSafetyTipsList();
        }
    }
    previousforward(key) {
        if (key == 'previous') {
            this.offset -= this.incidentData['limit'];
        }
        else {
        }
        if (this.all_array.length > 0) {
            this.getReportedIncident();
        }
        else {
            this.getincident_list();
        }
    }
    previousforwardsafety(key) {
        if (key == 'previous') {
            this.safecity_offset -= this.safetyTipData['limit'];
        }
        else {
        }
        if (this.shareddata.getsafetyfiltersdata()) {
            this.getSafetyTipsList();
        }
        else {
            this.getSafetyTip();
        }
    }
    getincident_list() {
        console.log(this.offset);
        console.log(JSON.stringify(this.offset));
        // this.shareddata.presentLoadingDefault()
        var address = localStorage.getItem('City_name');
        var client_id = localStorage.getItem('Client_id');
        var lang_id = localStorage.getItem('Lang_id');
        let data = new FormData();
        data.append('lang_id', lang_id);
        data.append('client_id', client_id);
        data.append('city', address);
        data.append('offset', JSON.stringify(this.offset));
        data.append('map_bound', localStorage.getItem('mapBound'));
        data.append('map_zoom', localStorage.getItem('map_zoom'));
        if (this.all_array.length > 0) {
            for (let i = 0; i < this.all_array.length; i++) {
                var timeOfArray = this.all_array[0];
                var incidentFrom = this.all_array[1];
                var catIdFrom = this.all_array[3];
            }
            if (this.catId == undefined) {
                this.catId = '';
            }
            this.incidentFrom = incidentFrom;
            console.log("****", this.all_array.length);
            var all_array_status = this.all_array.length;
            if (all_array_status > 0) {
                this.catId = catIdFrom.join(',');
                this.timeOfString = timeOfArray.join(',');
            }
            data.append('reported_on', this.incidentFrom);
            data.append('categories_ids', this.catId);
            data.append('reported_time', this.timeOfString);
        }
        //   this.shareddata.presentLoadingDefault()
        this.shareddata.sharedPostRequest('reported-incidents', data).subscribe((rdata) => {
            //console.log(rdata);
            //console.log("incidents", rdata);
            this.incidentList = rdata.data;
            this.incidentData = rdata;
            if (rdata.data.length > 0) {
                this.showing = this.incidentData.showing;
                this.forwardincidentdisabled = false;
                this.total_offset = this.incidentData.total;
                console.log(this.offset);
                if (this.offset == 0) {
                    this.hide_back = true;
                    this.offset += this.incidentData['limit'];
                }
                else {
                    this.offset += this.incidentData['limit'];
                    this.hide_back = false;
                }
                console.log(this.offset);
                if (this.offset >= this.total_offset) {
                    console.log(this.offset);
                    this.forwardincidentdisabled = true;
                    this.offset -= this.incidentData['limit'];
                }
                console.log(this.offset);
                this.shareddata.setData(this.incidentList);
                for (let i = 0; i < this.incidentList.length; i++) {
                    var added_date = this.incidentList[i].created_on != null ? this.incidentList[i].created_on : "";
                    var dayBetween = this.days_between(added_date);
                    var Today;
                    this.translate.get('Today').subscribe((res) => {
                        Today = res;
                    });
                    var day_ago;
                    this.translate.get('day_ago').subscribe((res) => {
                        day_ago = res;
                    });
                    var days_ago;
                    this.translate.get('days_ago').subscribe((res) => {
                        days_ago = res;
                    });
                    this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? Today : (dayBetween == 1) ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago);
                    // console.log(this.getDaysAgo)
                    this.incidentList[i].show_date = this.getDaysAgo;
                    let time = this.timeConvert(this.incidentList[i].time_from);
                    // console.log("Time", time)
                    this.incidentList[i].show_time = time;
                    var disc = this.incidentList[i].description.substring(0, 97);
                    // console.log("disc", disc)
                    this.incidentList[i].show_disc = disc;
                }
            }
            else {
                this.forwardincidentdisabled = true;
            }
            // this.shared_data['incidentdata'] = this.incidentList
            // this.shareddata.setData(this.shared_data)
            //  this.shareddata.loaderDismiss()
        }, error => {
            // this.shareddata.loaderDismiss()
        }, () => {
        });
    }
    getReportedIncident() {
        var address = localStorage.getItem('City_name');
        var client_id = localStorage.getItem('Client_id');
        var lang_id = localStorage.getItem('Lang_id');
        if (this.pagename == 'Incit_safety_fr_Home') 
        //  || this.pagename == 'from_detail' || this.pagename == 'safetyFilterPage' || this.pagename == 'safetyDetail') 
        {
            // this.incidentData = this.shareddata.getData()
            // console.log("incident from shared",this.incidentData)
            // this.incidentList = this.incidentData.data
            // console.log("incidentList",this.incidentList)
            // this.showing = this.incidentData.showing
            this.mapZoom = localStorage.getItem('map_zoom');
            if (this.incidentList.length == 0 && this.mapZoom < 15) {
                this.getincident_list();
            }
            else if (this.mapZoom >= 15) {
                this.getincident_list();
            }
        }
        else if (this.pagename == 'safetyFilterPage') {
            this.getSafetyTipsList();
        }
        else if (this.pagename == 'IncidentFilterPage' || this.pagename == 'from_detail') {
            // this.timeOfString
            // this.incidentFrom =''
            // this.catId =''
            console.log("all_array", this.all_array);
            console.log("all_array", this.all_array.length);
            if (this.all_array.length > 0) {
                let data = new FormData();
                data.append('lang_id', lang_id);
                data.append('client_id', client_id);
                data.append('city', address);
                data.append('reported_on', this.incidentFrom);
                data.append('map_bound', localStorage.getItem('mapBound'));
                data.append('map_zoom', localStorage.getItem('map_zoom'));
                if (this.all_array.length > 0) {
                    for (let i = 0; i < this.all_array.length; i++) {
                        var timeOfArray = this.all_array[0];
                        var incidentFrom = this.all_array[1];
                        var catIdFrom = this.all_array[3];
                    }
                    if (this.catId == undefined) {
                        this.catId = '';
                    }
                    this.incidentFrom = incidentFrom;
                    console.log("****", this.all_array.length);
                    var all_array_status = this.all_array.length;
                    if (all_array_status > 0) {
                        this.catId = catIdFrom.join(',');
                        this.timeOfString = timeOfArray.join(',');
                    }
                    data.append('categories_ids', this.catId);
                    data.append('reported_time', this.timeOfString);
                    data.append('offset', JSON.stringify(this.offset));
                }
                this.shareddata.presentLoadingDefault();
                this.shareddata.sharedPostRequest('reported-incidents', data).subscribe((rdata) => {
                    console.log(rdata);
                    console.log("incidents", rdata);
                    this.incidentData = rdata;
                    this.incidentList = rdata.data;
                    if (rdata.data.length > 0) {
                        this.total_offset = this.incidentData.total;
                        this.showing = this.incidentData.showing;
                        this.forwardincidentdisabled = false;
                        if (this.offset == 0) {
                            this.hide_back = true;
                            this.offset += this.incidentData['limit'];
                        }
                        else {
                            this.offset += this.incidentData['limit'];
                            this.hide_back = false;
                        }
                        if (this.offset >= this.total_offset) {
                            this.forwardincidentdisabled = true;
                            this.offset -= this.incidentData['limit'];
                        }
                        this.shareddata.setData(this.incidentList);
                        for (let i = 0; i < this.incidentList.length; i++) {
                            var added_date = this.incidentList[i].created_on != null ? this.incidentList[i].created_on : "";
                            var dayBetween = this.days_between(added_date);
                            var Today;
                            this.translate.get('Today').subscribe((res) => {
                                Today = res;
                            });
                            var day_ago;
                            this.translate.get('day_ago').subscribe((res) => {
                                day_ago = res;
                            });
                            var days_ago;
                            this.translate.get('days_ago').subscribe((res) => {
                                days_ago = res;
                            });
                            this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? Today : (dayBetween == 1) ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago);
                            // console.log(this.getDaysAgo)
                            this.incidentList[i].show_date = this.getDaysAgo;
                            let time = this.timeConvert(this.incidentList[i].time_from);
                            // console.log("Time", time)
                            this.incidentList[i].show_time = time;
                            var disc = this.incidentList[i].description.substring(0, 97);
                            // console.log("disc", disc)
                            this.incidentList[i].show_disc = disc;
                        }
                        this.shared_data['incidentdata'] = this.incidentList;
                    }
                    else {
                        this.forwardincidentdisabled = true;
                    }
                    // this.shareddata.setData(this.shared_data)
                    // this.shareddata.loaderDismiss()
                }, error => {
                    this.shareddata.loaderDismiss();
                }, () => {
                });
                // this.httpClient.post(this.apiUrl1 + 'reported-incidents', data)
                //   .subscribe((rdata: any) => {
                //     console.log("incidents", rdata);
                //     this.incidentData = rdata
                //     // this.showing = this.incidentData.showing
                //     this.incidentList = rdata.data
                //     this.shareddata.setData(this.incidentData)
                //     for (let i = 0; i < this.incidentList.length; i++) {
                //       var added_date = this.incidentList[i].created_on != null ? this.incidentList[i].created_on : "";
                //       var dayBetween = this.days_between(added_date);
                //       this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
                //       // console.log(this.getDaysAgo)
                //       this.incidentList[i].show_date = this.getDaysAgo
                //       let time = this.timeConvert(this.incidentList[i].time_from)
                //       // console.log("Time", time)
                //       this.incidentList[i].show_time = time
                //       var disc = this.incidentList[i].description.substring(0, 97)
                //       // console.log("disc", disc)
                //       this.incidentList[i].show_disc = disc
                //     }
                //     // this.showMap();
                //   }, error => {
                //   });
            }
            else {
                this.filterCount = 0;
                if (this.incidentList.length == 0 && this.mapZoom < 15) {
                    this.getincident_list();
                }
                else if (this.mapZoom >= 15) {
                    this.getincident_list();
                }
            }
        }
    }
    getSafetyTip() {
        var address = localStorage.getItem('City_name');
        var client_id = localStorage.getItem('Client_id');
        var lang_id = localStorage.getItem('Lang_id');
        let data = new FormData();
        data.append('lang_id', lang_id);
        data.append('client_id', client_id);
        data.append('city', address);
        data.append('map_bound', localStorage.getItem('mapBound'));
        data.append('map_zoom', localStorage.getItem('map_zoom'));
        data.append('offset', JSON.stringify(this.safecity_offset));
        if (this.shareddata.getsafetyfiltersdata()) {
            data.append('reported_on', this.shareddata.getsafetyfiltersdata());
        }
        // this.shareddata.presentLoadingDefault()
        this.shareddata.sharedPostRequest('get-safety-tips', data).subscribe((rdata) => {
            //  console.log(rdata);
            this.safetyTipData = rdata;
            this.safetyTipList = rdata.data;
            if (rdata.data.length > 0) {
                this.safetytotaloffset = this.safetyTipData.total;
                this.shareddata.setSafetyTipData(this.safetyTipData);
                this.safetyShowing = this.safetyTipData.showing;
                this.forwardsafetydisabled = false;
                this.shareddata.setSafetyTipData(this.safetyTipList);
                if (this.safecity_offset == 0) {
                    this.hide_safety_back = true;
                    this.safecity_offset += this.safetyTipData['limit'];
                }
                else {
                    this.safecity_offset += this.safetyTipData['limit'];
                    this.hide_safety_back = false;
                }
                if (this.safecity_offset >= this.safetytotaloffset) {
                    //this.safecity_offset = 0
                    this.forwardsafetydisabled = true;
                    this.safecity_offset -= this.safetyTipData['limit'];
                }
                for (let i = 0; i < this.safetyTipList.length; i++) {
                    var added_date = this.safetyTipList[i].added_date != null ? this.safetyTipList[i].added_date : "";
                    var dayBetween = this.days_between(added_date);
                    var Today;
                    this.translate.get('Today').subscribe((res) => {
                        Today = res;
                    });
                    var day_ago;
                    this.translate.get('day_ago').subscribe((res) => {
                        day_ago = res;
                    });
                    var days_ago;
                    this.translate.get('days_ago').subscribe((res) => {
                        days_ago = res;
                    });
                    var getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? Today : (dayBetween == 1) ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago);
                    // console.log(getDaysAgo)
                    this.safetyTipList[i].show_date = getDaysAgo;
                    var time1 = this.safetyTipList[i].added_date.substring(11, 19);
                    // console.log("time", time1)
                    let time2 = this.timeConvert(time1);
                    // console.log("Time", time2)
                    this.safetyTipList[i].show_time = time2;
                    var disc = this.safetyTipList[i].safety_tip_desc.substring(0, 97);
                    // console.log("disc", disc)
                    this.safetyTipList[i].show_disc = disc;
                }
            }
            else {
                this.forwardsafetydisabled = true;
            }
            // this.shared_data['safetytipdata'] = this.safetyTipList
            // this.shareddata.setData(this.shared_data)
            // this.safetyTipData.rdata
        }, error => {
            // this.shareddata.loaderDismiss()
        }, () => {
            //this.shareddata.loaderDismiss()
        });
    }
    getSafetyTipsList() {
        var address = localStorage.getItem('City_name');
        var client_id = localStorage.getItem('Client_id');
        var lang_id = localStorage.getItem('Lang_id');
        if (this.pagename == 'from_detail' || this.pagename == 'safetyDetail' || this.pagename == 'IncidentFilterPage' || this.pagename == 'safetyFilterPage') {
            //  this.safetyTipData = this.shareddata.getSafetyTipData()
            // this.safetyShowing = this.safetyTipData.showing
            //this.safetyTipList = this.safetyTipData
            console.log("pagename in safety else", this.pagename);
            let data = new FormData();
            data.append('lang_id', lang_id);
            data.append('client_id', client_id);
            data.append('city', address);
            data.append('map_bound', localStorage.getItem('mapBound'));
            data.append('map_zoom', localStorage.getItem('map_zoom'));
            if (this.shareddata.getsafetyfiltersdata()) {
                data.append('reported_on', this.shareddata.getsafetyfiltersdata());
            }
            // data.append('reported_time', this.timeOfString);
            data.append('offset', JSON.stringify(this.safecity_offset));
            //  this.shareddata.presentLoadingDefault()
            this.shareddata.sharedPostRequest('get-safety-tips', data).subscribe((rdata) => {
                console.log(rdata);
                this.safetyTipData = rdata;
                this.safetyTipList = rdata.data;
                if (rdata.data.length > 0) {
                    this.safetytotaloffset = this.safetyTipData.total;
                    this.safetyShowing = this.safetyTipData.showing;
                    this.forwardsafetydisabled = false;
                    this.shareddata.setSafetyTipData(this.safetyTipList);
                    if (this.safecity_offset == 0) {
                        this.hide_safety_back = true;
                        this.safecity_offset += this.safetyTipData['limit'];
                    }
                    else {
                        this.safecity_offset += this.safetyTipData['limit'];
                        this.hide_safety_back = false;
                    }
                    if (this.safecity_offset >= this.safetytotaloffset) {
                        this.forwardsafetydisabled = true;
                        this.safecity_offset -= this.safetyTipData['limit'];
                    }
                    for (let i = 0; i < this.safetyTipList.length; i++) {
                        var added_date = this.safetyTipList[i].added_date != null ? this.safetyTipList[i].added_date : "";
                        var dayBetween = this.days_between(added_date);
                        var Today;
                        this.translate.get('Today').subscribe((res) => {
                            Today = res;
                        });
                        var day_ago;
                        this.translate.get('day_ago').subscribe((res) => {
                            day_ago = res;
                        });
                        var days_ago;
                        this.translate.get('days_ago').subscribe((res) => {
                            days_ago = res;
                        });
                        var getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? Today : (dayBetween == 1) ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago);
                        // console.log(getDaysAgo)
                        this.safetyTipList[i].show_date = getDaysAgo;
                        var time1 = this.safetyTipList[i].added_date.substring(11, 19);
                        // console.log("time", time1)
                        let time2 = this.timeConvert(time1);
                        // console.log("Time", time2)
                        this.safetyTipList[i].show_time = time2;
                        var disc = this.safetyTipList[i].safety_tip_desc.substring(0, 97);
                        // console.log("disc", disc)
                        this.safetyTipList[i].show_disc = disc;
                    }
                }
                else {
                    this.forwardsafetydisabled = true;
                }
                // this.shared_data['safetytipdata'] = this.safetyTipList
                // this.shareddata.setData(this.shared_data)
                // this.safetyTipData.rdata
            }, error => {
                //  this.shareddata.loaderDismiss()
            }, () => {
                // this.shareddata.loaderDismiss()
            });
        }
        else {
            if (this.safetyTipList.length == 0 && this.mapZoom < 15) {
                this.getSafetyTip();
            }
            else if (this.mapZoom >= 15) {
                this.getSafetyTip();
            }
            // this.httpClient.post(this.apiUrl1 + 'get-safety-tips', data)
            //   .subscribe((rdata: any) => {
            //     this.safetyTipData =rdata
            //     this.shareddata.setSafetyTipData(this.safetyTipData)
            //     // this.safetyShowing = this.safetyTipData.showing
            //     this.safetyTipList = rdata.data
            //     for (let i = 0; i < this.safetyTipList.length; i++) 
            //     {
            //       var added_date = this.safetyTipList[i].added_date != null ? this.safetyTipList[i].added_date : "";
            //       var dayBetween = this.days_between(added_date);
            //       var getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
            //       // console.log(getDaysAgo)
            //       this.safetyTipList[i].show_date = getDaysAgo
            //       var time1 = this.safetyTipList[i].added_date.substring(11, 19);
            //       // console.log("time", time1)
            //       let time2 = this.timeConvert(time1)
            //       // console.log("Time", time2)
            //       this.safetyTipList[i].show_time = time2
            //       var disc = this.safetyTipList[i].safety_tip_desc.substring(0, 97)
            //       // console.log("disc", disc)
            //       this.safetyTipList[i].show_disc = disc
            //     }
            //     // this.safetyTipData.rdata
            //   }, error => {
            //   });
        }
    }
    ionViewDidLoad() {
    }
    clearList(e) {
        console.log(e);
        if (e == 'incident') {
            this.all_array = [];
            this.shareddata.timeofArray(this.all_array);
            this.timeOfString = '';
            this.incidentFrom = '';
            this.catId = '';
            this.pagename = '';
            console.log("name", this.incidentFrom);
            console.log("name", this.timeOfString);
            console.log("name", this.catId);
            console.log("name", this.pagename);
            this.incidentNumber = false;
            this.pagename = null;
            this.offset = 0;
            this.getincident_list();
        }
        else {
            this.number = false;
            this.safetyFrom = '';
            this.pagename = null;
            this.getSafetyTip();
            this.safecity_offset = 0;
            this.shareddata.safetyfiltersdata = '';
        }
    }
    segmentChanged(event) {
        console.log(this.segmentModel);
        console.log(event);
        if (this.segmentModel == "two") {
            this.getSafetyTipsList();
        }
        else {
            this.getReportedIncident();
        }
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navController.navigateBack('/home');
        });
    }
    preframing() {
        this.navController.navigateForward(`/preframingtwo`);
    }
    help() {
        this.navController.navigateForward(`/help`);
    }
    menu() {
        this.navController.navigateForward(`/menu`);
    }
    safetytip() {
        this.navController.navigateForward(`/safteytipone`);
    }
    viewreport(item) {
        console.log(item);
        var itemDetail = JSON.stringify(item);
        let navigationExtras = {
            queryParams: {
                itemDetail: itemDetail,
            }
        };
        this.navController.navigateForward([`/viewreportdetail`], navigationExtras);
    }
    viewsafety(item) {
        console.log(item);
        var itemDetail = JSON.stringify(item);
        let navigationExtras = {
            queryParams: {
                safetyitemDetail: itemDetail,
            }
        };
        this.navController.navigateForward([`/viewsafteydetail`], navigationExtras);
    }
    filter() {
        this.offset = 0;
        console.log('-+-+-+-+', this.pagename);
        let navigationExtras = {
            queryParams: {
                catData: [],
                // catIDs:catId,
                pagename: this.pagename
            }
        };
        this.navController.navigateForward([`/filter`], navigationExtras);
        //this.navController.navigateForward(`/filter`);
    }
    safteyfilter() {
        this.safecity_offset = 0;
        this.navController.navigateForward(`/safetyfilter`);
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
    timeConvert(time) {
        //  console.log("Time in convert ", time)
        var time_split = time.split(':');
        //  console.log(time_split)
        if (time_split[0].charAt(0) == '0') {
            var t = time_split[0].slice(1);
            time_split[0] = t;
            //console.log(time_split[0])
        }
        if (time_split[1].charAt(0) == '0') {
            var t = time_split[1].slice(1);
            time_split[1] = t;
            // console.log(time_split[1])
        }
        let hour = JSON.parse(time_split[0]);
        let minute = JSON.parse(time_split[1]);
        //  console.log(hour)
        //  console.log(minute)
        var hours = hour > 12 ? hour - 12 : hour;
        var am_pm = hour >= 12 ? "PM" : "AM";
        var minutes = minute < 10 ? "0" + minute : minute;
        let timeStart = hours + ":" + minutes + " " + am_pm;
        // Check correct time format and split into components
        // time = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        // if (time.length > 1) { // If time format correct
        //   time = time.slice(1);  // Remove full string match value
        //   time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        //   time[0] = +time[0] % 12 || 12; // Adjust hours
        // }
        return timeStart; // return adjusted time or original string
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
    dismiss() {
        let navigationExtras = {
            queryParams: {
                pagename: this.pagename1,
                safetyFrom: this.safetyFrom
            }
        };
        this.navController.navigateForward([`/home`], navigationExtras);
    }
};
ModelreportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModelreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modelreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modelreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modelreport/modelreport.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modelreport.page.scss */ "./src/app/modelreport/modelreport.page.scss")).default]
    })
], ModelreportPage);



/***/ })

}]);
//# sourceMappingURL=modelreport-modelreport-module-es2015.js.map
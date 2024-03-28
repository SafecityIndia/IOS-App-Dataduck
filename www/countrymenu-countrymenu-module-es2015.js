(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["countrymenu-countrymenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenu/countrymenu.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenu/countrymenu.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'country' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainselect\">\n\n    <ion-row>\n      <ion-col col-12>\n\n        <div class=\"newselect\">\n\n          <!-- <ion-label class=\"newlabel\" position=\"stacked\">{{'home_country_your_country' | translate }}</ion-label> -->\n          <!-- <ion-searchbar placeholder=\"Filter Schedules\"></ion-searchbar> -->\n\n\n          <!-- <form [formGroup]=\"form\"> -->\n          <!-- <ion-item >    \n    <ion-label class=\"newlabel\" position=\"stacked\">{{'home_country_your_country' | translate }}</ion-label>\n    <ion-select placeholder=\"{{'select_one' | translate}}\" [(ngModel)]=\"country\" (ionChange) = \"getCountry($event)\">\n      <ion-select-option *ngFor=\"let item of country_list\"  value=\"{{item.country_id}}\">{{item.country_name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item> -->\n          <ion-item>\n            <ion-label class=\"newlabel\"   position=\"stacked\">\n              {{'home_country_your_country' | translate }}\n            </ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCountry($event)\"\n              [(ngModel)]=\"countryName\" placeholder=\"Search for Location\" disabled=\"false\" debounce=\"500\">\n            </ion-searchbar>\n            <div class=\"newserchlist\" *ngIf=\"isItemAvailable && showCountrylist\">\n              <ion-item (click)=\"selectedLocation(item)\" *ngFor=\"let item of countryList\">{{item.country_name}}\n              </ion-item>\n            </div>\n          </ion-item>\n          <!-- </form> -->\n\n          <ion-item>\n            <ion-label class=\"newlabel\" position=\"stacked\">{{'select_city' | translate}}</ion-label>\n            <ion-searchbar no-padding showCancelButton=\"never\" mode=\"ios\" (ionChange)=\"getCity($event)\"\n              [(ngModel)]=\"searchTerm\" placeholder=\"Search for city\" disabled=\"false\" debounce=\"500\"></ion-searchbar>\n\n            <!-- <ion-item> -->\n\n            <!-- <ion-select placeholder=\"{{'select_one' | translate}}\"  > -->\n\n            <div class=\"newserchlist\" *ngIf=\"hide_city_search\">\n              <ion-item (click)=\"selectedcity(item)\" *ngFor=\"let item of city_list\">{{item.city_name}}</ion-item>\n            </div>\n          </ion-item>\n          <!-- \n\t  \n      </ion-select-option>\n    </ion-select> -->\n          <!-- </ion-item> -->\n        </div>\n        <!-- </form> -->\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/countrymenu/countrymenu-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/countrymenu/countrymenu-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CountrymenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenuPageRoutingModule", function() { return CountrymenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _countrymenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countrymenu.page */ "./src/app/countrymenu/countrymenu.page.ts");




const routes = [
    {
        path: '',
        component: _countrymenu_page__WEBPACK_IMPORTED_MODULE_3__["CountrymenuPage"]
    }
];
let CountrymenuPageRoutingModule = class CountrymenuPageRoutingModule {
};
CountrymenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CountrymenuPageRoutingModule);



/***/ }),

/***/ "./src/app/countrymenu/countrymenu.module.ts":
/*!***************************************************!*\
  !*** ./src/app/countrymenu/countrymenu.module.ts ***!
  \***************************************************/
/*! exports provided: CountrymenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenuPageModule", function() { return CountrymenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _countrymenu_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countrymenu-routing.module */ "./src/app/countrymenu/countrymenu-routing.module.ts");
/* harmony import */ var _countrymenu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countrymenu.page */ "./src/app/countrymenu/countrymenu.page.ts");








let CountrymenuPageModule = class CountrymenuPageModule {
};
CountrymenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _countrymenu_routing_module__WEBPACK_IMPORTED_MODULE_6__["CountrymenuPageRoutingModule"]
        ],
        declarations: [_countrymenu_page__WEBPACK_IMPORTED_MODULE_7__["CountrymenuPage"]]
    })
], CountrymenuPageModule);



/***/ }),

/***/ "./src/app/countrymenu/countrymenu.page.scss":
/*!***************************************************!*\
  !*** ./src/app/countrymenu/countrymenu.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainselect {\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 70px;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nion-item {\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\n\n.newserchlist {\n  height: 200px;\n  width: 1px solid #ddd;\n  overflow: scroll;\n  width: 100%;\n  padding: 0 10px;\n  border-bottom: 2px solid #ddd;\n  border: 1px solid #ddd;\n}\n\n.newserchlist ion-item {\n  margin-bottom: 0;\n  --min-height: 38px;\n}\n\nion-searchbar .searchbar-input {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.mainselect ion-searchbar {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  --background:transparent;\n  padding: 0;\n}\n\n.mainselect .sc-ion-searchbar-ios-h {\n  --background:transparent;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: 1px solid #ddd;\n  height: 42px;\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n  padding: 0;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  margin-bottom: 28px;\n  border: 0;\n}\n\n.newselect {\n  width: 100%;\n  height: auto;\n  padding: 0 25px;\n  margin-top: 0;\n}\n\n.newlabel {\n  width: 100%;\n  font-size: 18px;\n  color: #292020;\n  overflow: inherit;\n  float: left;\n  font-weight: 400;\n  margin-bottom: 15px;\n  transform: inherit;\n  white-space: inherit;\n}\n\nion-label {\n  flex: 0;\n  width: 100%;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 600;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow:0;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\nion-select {\n  width: 100%;\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 29% auto 0 !important;\n  }\n\n  .newselect {\n    margin-top: 70px !important;\n  }\n\n  .newselect p {\n    margin-top: 10px !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {\n  .mainarea img {\n    width: 235px !important;\n    margin: 40% auto 0 !important;\n  }\n}\n\n@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {\n  .mainarea img {\n    margin: 50% auto 0 !important;\n  }\n}\n\n@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {\n  .mainarea img {\n    width: 213px !important;\n    margin: 20% auto 0 !important;\n  }\n\n  .newselect p {\n    margin-top: 66px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9jb3VudHJ5bWVudS9jb3VudHJ5bWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvdW50cnltZW51L2NvdW50cnltZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNOQTs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURTQTtFQUNBLGdCQUFBO0FDTkE7O0FEVUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUkE7O0FEY0E7RUFFQSxzQkFBQTtFQUNBLFlBQUE7QUNaQTs7QURlRTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUNiRjs7QURnQkE7RUFDQyx5QkFBQTtBQ2JEOztBRGdCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNiRDs7QURlQTtFQUVBLG1DQUFBO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtFQUNKLDJCQUFBO0FDYkE7O0FEZ0JBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNkQTs7QURpQkE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FDZkE7O0FEaUJFO0VBRUYsd0JBQUE7VUFBQSx1QkFBQTtBQ2ZBOztBRGlCQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDSSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0gsd0JBQUE7RUFDQSxVQUFBO0FDZkQ7O0FEa0JBO0VBRUEsd0JBQUE7RUFDQSxjQUFBO0VBQ0ksaUJBQUE7RUFDSCxzQkFBQTtFQUNBLFlBQUE7RUFDSSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0gsVUFBQTtBQ2hCRjs7QURvQkM7RUFFQSxxQ0FBQTtFQUNJLHlCQUFBO0VBQ0gsbUJBQUE7RUFDQSxTQUFBO0FDbEJGOztBRHFCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNuQkE7O0FEd0JBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0csaUJBQUE7RUFDQyxXQUFBO0VBQ0gsZ0JBQUE7RUFDRSxtQkFBQTtFQUNILGtCQUFBO0VBQ0Esb0JBQUE7QUNyQkQ7O0FEMEJBO0VBRUEsT0FBQTtFQUNBLFdBQUE7QUN4QkE7O0FEMEJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUN6QkE7O0FENEJBO0VBR0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBRUMsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDNUJBOztBRDhCQTtFQUVBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQzVCQTs7QUQrQkE7RUFDQSxXQUFBO0FDNUJBOztBRGlDQTtFQUVDO0lBRUksNkJBQUE7RUNoQ0g7O0VEbUNEO0lBQ0EsMkJBQUE7RUNoQ0M7O0VEbUNEO0lBQ0EsMkJBQUE7RUNoQ0M7QUFDRjs7QURtQ0M7RUFJQTtJQUVBLHVCQUFBO0lBQ0EsNkJBQUE7RUNyQ0M7QUFDRjs7QUQyQ0M7RUFJQztJQUdELDZCQUFBO0VDOUNDO0FBQ0Y7O0FEa0RBO0VBSUM7SUFFQSx1QkFBQTtJQUNBLDZCQUFBO0VDcERDOztFRHdERDtJQUNJLDJCQUFBO0VDckRIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3VudHJ5bWVudS9jb3VudHJ5bWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG4ubWFpbnNlbGVjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW46MCBhdXRvO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5pb24tc2VsZWN0IHtcclxuXHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuaGVpZ2h0OjQwcHg7XHJcblxyXG59XHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4uc2VsZWN0LXRleHQgYnV0dG9uXHJcbntwYWRkaW5nOjFweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OjE1cHg7XHJcblx0cGFkZGluZy1yaWdodDoxNXB4O1xyXG5cdH1cclxuaW9uLWl0ZW1cclxue1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbi0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5ld3NlcmNobGlzdFxyXG57XHJcbmhlaWdodDoyMDBweDtcclxud2lkdGg6MXB4IHNvbGlkICNkZGQ7XHJcbm92ZXJmbG93OnNjcm9sbDtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzowIDEwcHg7XHJcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZGQ7XHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLm5ld3NlcmNobGlzdCBpb24taXRlbSBcclxue1xyXG5tYXJnaW4tYm90dG9tOjA7XHJcbi0tbWluLWhlaWdodDogMzhweDtcclxufVxyXG4gIGlvbi1zZWFyY2hiYXIgLnNlYXJjaGJhci1pbnB1dFxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbn1cclxuLm1haW5zZWxlY3QgaW9uLXNlYXJjaGJhclxyXG57XHJcbnBhZGRpbmctaW5saW5lLXN0YXJ0OjA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcblx0LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdHBhZGRpbmc6MDtcclxufVxyXG5cclxuLm1haW5zZWxlY3QgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWhcclxue1xyXG4tLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbnBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5cdGhlaWdodDo0MnB4O1xyXG5cdCAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xyXG5cdFx0cGFkZGluZzowO1xyXG59XHJcblxyXG5cclxuXHQuaXRlbSBcclxuXHR7XHJcblx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuXHQgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuXHRcdG1hcmdpbi1ib3R0b206MjhweDtcclxuXHRcdGJvcmRlcjowO1xyXG5cdH1cclxuXHRcclxuLm5ld3NlbGVjdFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wYWRkaW5nOjAgMjVweDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdsYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6MThweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcblx0ICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR0cmFuc2Zvcm06aW5oZXJpdDtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG5cclxuICBcclxuaW9uLWxhYmVsXHJcbntcclxuZmxleDowO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxucG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5uZXdidG5cclxue1xyXG5cclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo1MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6ODUlO1xyXG5cclxuIGZvbnQtd2VpZ2h0OjYwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG4tLWJveC1zaGFkb3c6MDtcclxufVxyXG4uc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpIGFuZCgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDIpXHJcblx0e1xyXG5cdC5tYWluYXJlYSBpbWdcclxuXHR7XHJcblx0ICAgIG1hcmdpbjogMjklIGF1dG8gMCAhaW1wb3J0YW50OztcclxuXHR9XHJcblx0XHJcblx0Lm5ld3NlbGVjdHtcclxuXHRtYXJnaW4tdG9wOjcwcHggIWltcG9ydGFudDs7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdzZWxlY3QgcHtcclxuXHRtYXJnaW4tdG9wOjEwcHggIWltcG9ydGFudDs7XHJcblx0fVxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aCA6IDQxNHB4KSBcclxuICAgIGFuZCAoZGV2aWNlLWhlaWdodCA6IDczNnB4KSBcclxuICAgIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7IFxyXG5cdC5tYWluYXJlYSBpbWdcclxuIHtcclxuIHdpZHRoOiAyMzVweCAhaW1wb3J0YW50O1xyXG4gbWFyZ2luOiA0MCUgYXV0byAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIFxyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA4OTZweCkgXHJcbiAgICBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7IFxyXG5cdFx0Lm1haW5hcmVhIGltZ1xyXG4ge1xyXG5cclxuIG1hcmdpbjogNTAlIGF1dG8gMCAhaW1wb3J0YW50OztcclxuIH1cclxuXHRcclxuXHR9XHJcblx0XHJcbkBtZWRpYSAoZGV2aWNlLWhlaWdodCA6IDU2OHB4KSBcclxuICAgYW5kIChkZXZpY2Utd2lkdGggOiAzMjBweCkgXHJcbiAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4ge1xyXG4gLm1haW5hcmVhIGltZ1xyXG4ge1xyXG4gd2lkdGg6IDIxM3B4ICFpbXBvcnRhbnQ7O1xyXG4gbWFyZ2luOiAyMCUgYXV0byAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuXHJcbiAubmV3c2VsZWN0IHB7XHJcbiAgICAgbWFyZ2luLXRvcDogNjZweCAhaW1wb3J0YW50OztcclxuIH1cclxuXHJcbiBcclxuIH1cclxuICAgIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4ubWFpbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG4uc2VsZWN0LXRleHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmluLWl0ZW0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uZXdzZXJjaGxpc3Qge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMXB4IHNvbGlkICNkZGQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ubmV3c2VyY2hsaXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLS1taW4taGVpZ2h0OiAzOHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cblxuLm1haW5zZWxlY3QgaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1haW5zZWxlY3QgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGJvcmRlcjogMDtcbn1cblxuLm5ld3NlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld2xhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZmxleDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYm94LXNoYWRvdzowO1xufVxuXG4uc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAubWFpbmFyZWEgaW1nIHtcbiAgICBtYXJnaW46IDI5JSBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uZXdzZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IDcwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uZXdzZWxlY3QgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMzVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNDAlIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIG1hcmdpbjogNTAlIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKGRldmljZS1oZWlnaHQ6IDU2OHB4KSBhbmQgKGRldmljZS13aWR0aDogMzIwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5tYWluYXJlYSBpbWcge1xuICAgIHdpZHRoOiAyMTNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMjAlIGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5ld3NlbGVjdCBwIHtcbiAgICBtYXJnaW4tdG9wOiA2NnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/countrymenu/countrymenu.page.ts":
/*!*************************************************!*\
  !*** ./src/app/countrymenu/countrymenu.page.ts ***!
  \*************************************************/
/*! exports provided: CountrymenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrymenuPage", function() { return CountrymenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _countrymenupopover_countrymenupopover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../countrymenupopover/countrymenupopover.page */ "./src/app/countrymenupopover/countrymenupopover.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let CountrymenuPage = class CountrymenuPage {
    constructor(sharedservice, zone, popoverCtrl, translate, formBuilder, alertController) {
        this.sharedservice = sharedservice;
        this.zone = zone;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.country_selct_flag = false;
        this.hide_city = false;
        this.hide_city_search = false;
        this.hide_city_search_back = false;
        this.countrySelectedFlag = false;
        console.log(this.city);
        console.log(this.countryId);
        // this.form = formBuilder.group({
        //   'country': [this.country]
        // });
        this.getcountryList();
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.city = localStorage.getItem('City_id')
        //   this.countryId = localStorage.getItem('Country_id')
        // }, 1000);
        // this.selected_country = localStorage.getItem('Country_id')
        // this.searchTerm = localStorage.getItem('City_name')
        // this.city_name = localStorage.getItem('City_name');
        // this.countryName=localStorage.getItem('countryName')
        // this.temp_country = this.countryName
    }
    ionViewWillEnter() {
        this.zone.run(() => {
            this.city = localStorage.getItem('City_id');
            this.countryId = localStorage.getItem('Country_id');
            this.selected_country = localStorage.getItem('Country_id');
            this.searchTerm = localStorage.getItem('City_name');
            this.city_name = localStorage.getItem('City_name');
            this.countryName = localStorage.getItem('countryName');
            this.temp_country = this.countryName;
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _countrymenupopover_countrymenupopover_page__WEBPACK_IMPORTED_MODULE_5__["CountrymenupopoverPage"],
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
                backdropDismiss: false,
                componentProps: { 'countryList': this.countryList }
            });
            return yield popover.present();
        });
    }
    getCityByCountry(value, id) {
        let data = new FormData();
        data.append('security_key', 'b0e886281185cfc68a2c119f04c5b7b105f632dd');
        data.append('country_id', id);
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('user/getCities', data).subscribe((rdata) => {
            console.log(rdata);
            this.city_list = rdata['data'];
            if (value == '2') {
                //this.form.controls['city'].setValue(this.city)
            }
            else {
                // this.form.controls['city'].setValue('')
            }
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    //********************************Getting Country List for select Country**************************
    getcountryList() {
        let data = new FormData();
        data.append('security_key', '2be6704a76b7a502e2e56dd371228f2ad1d8afcc');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('common_controller/countryList', data).subscribe((rdata) => {
            console.log(rdata);
            this.countryList = rdata['data'];
            this.tempArr = this.countryList;
            console.log(this.countryList);
            this.ionViewDidLoad();
            //this.getCityByCountry('2',this.country)     
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    ionViewDidLoad() {
        this.countryId = localStorage.getItem('Country_id');
        console.log('view loaded  ', this.countryId);
    }
    // getCountry(e) {
    //   console.log(e.detail.value)
    //   this.country_selct_flag = true
    //   this.selected_country = e.detail.value;
    //   this.hide_city = true
    //   if (e.detail.value != "") {
    //     // this.getCityByCountry('1',this.selected_country)     
    //   }
    // }
    getCountry(ev) {
        if (this.temp_country == ev.target.value.trim()) {
        }
        else {
            this.showCountrylist = true;
            const val = ev.target.value;
            this.countryList = this.tempArr;
            this.countrySelectedFlag = false;
            this.hide_city_search = false;
            this.hide_city_search_back = true;
            this.city = '';
            this.city_name = '';
            this.searchTerm = '';
            if (val && val.trim() !== '') {
                this.isItemAvailable = true;
                this.countryList = this.countryList.filter((item) => {
                    console.log(item);
                    return (item.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
            else {
                this.isItemAvailable = false;
                this.countryList = this.tempArr;
            }
        }
    }
    selectedLocation(item) {
        console.log(item);
        this.countryName = item.country_name;
        localStorage.setItem('ngo_id', item.ngo_id);
        this.isItemAvailable = false;
        this.showCountrylist = false;
        this.countrySelectedFlag = true;
        this.temp_country = item.country_name;
        // this.hide_Country_search_back = true
        //localStorage.setItem('countryName',this.countryName)
        console.log(item.country_id);
        this.countryId = item.country_id;
        localStorage.setItem('tempcountry_id', item.country_id);
        // this.city_name = item.name
        // this.buttondisable = false;
        // localStorage.setItem('City_id', this.city)
        //localStorage.setItem('Country_id', this.countryId)
        // localStorage.setItem('City_name', this.city_name)
        // Reset items back to all of the items
    }
    getCity(e1) {
        console.log(this.selected_country);
        console.log(localStorage.getItem('tempcountry_id'));
        this.country;
        if (localStorage.getItem('tempcountry_id') == null || localStorage.getItem('tempcountry_id') === "null") {
            this.country = this.selected_country;
        }
        else {
            this.country = localStorage.getItem('tempcountry_id');
        }
        console.log(this.country, ' country passed to the api');
        if (this.searchTerm.length == 0) {
            this.hide_city_search = false;
            return false;
        }
        console.log(this.searchTerm);
        if (localStorage.getItem('City_name') == this.searchTerm) {
            this.hide_city_search = false;
        }
        else {
            if (this.searchTerm.length >= 2) {
                if (this.hide_city_search_back == true) {
                    let data = new FormData();
                    console.log(this.countryId);
                    data.append('query', this.searchTerm);
                    data.append('country_id', this.country);
                    this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', data).subscribe((rdata) => {
                        console.log(rdata);
                        this.hide_city_search = true;
                        this.hide_city_search_back = false;
                        this.city_list = rdata['data'];
                        if (this.city_list.length == 0) {
                            this.hide_city_search = false;
                        }
                    }, error => {
                        //  this.sharedservice.loaderDismiss()
                    }, () => {
                        // this.sharedservice.loaderDismiss()
                    });
                    console.log(this.searchTerm.length);
                }
                else if (this.searchTerm.length >= 2) {
                    let data = new FormData();
                    data.append('query', this.searchTerm);
                    data.append('country_id', this.country);
                    //  this.sharedservice.presentLoadingDefault()
                    this.sharedservice.sharedPostRequest_webappurl('get-cities-autocomplete', data).subscribe((rdata) => {
                        console.log(rdata);
                        this.hide_city_search = true;
                        this.hide_city_search_back = false;
                        this.city_list = rdata['data'];
                        if (this.city_list.length == 0) {
                            this.hide_city_search = false;
                        }
                    }, error => {
                        //  this.sharedservice.loaderDismiss()
                    }, () => {
                        // this.sharedservice.loaderDismiss()
                    });
                    console.log(this.searchTerm.length);
                    // }
                }
                else {
                    this.hide_city_search = false;
                }
            }
        }
    }
    selectedcity(item) {
        console.log(item);
        this.searchTerm = item.name;
        this.hide_city_search = false;
        this.hide_city_search_back = true;
        this.city = item.id;
        this.city_name = item.name;
        // localStorage.setItem('ngo_id',item.ngo_id)
        localStorage.setItem('City_id', this.city);
        localStorage.setItem('Country_id', this.country);
        localStorage.setItem('City_name', this.city_name);
        localStorage.setItem('city_latitude', item.latitude);
        localStorage.setItem('city_longitude', item.longitude);
        localStorage.setItem('countryName', this.countryName);
        var geocoder = new google.maps.Geocoder();
        var city, hascity, address = localStorage.getItem('City_name') + ' , ' + localStorage.getItem('countryName');
        geocoder.geocode({ 'address': address }, results => {
            console.log(results);
            if (results[0].formatted_address) {
                console.log(results);
                var lat = JSON.stringify(results[0].geometry.location.lat());
                var longi = JSON.stringify(results[0].geometry.location.lng());
                localStorage.setItem('map_lat', lat);
                localStorage.setItem('map_longi', longi);
            }
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var message;
            var btn_msg;
            this.translate.get('country_first').subscribe((res) => {
                message = res;
            });
            this.translate.get('done').subscribe((res) => {
                btn_msg = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: message,
                mode: 'ios',
                buttons: [{
                        text: btn_msg,
                        handler: (alertData) => {
                            console.log('in');
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
CountrymenuPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
CountrymenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countrymenu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./countrymenu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/countrymenu/countrymenu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./countrymenu.page.scss */ "./src/app/countrymenu/countrymenu.page.scss")).default]
    })
], CountrymenuPage);



/***/ })

}]);
//# sourceMappingURL=countrymenu-countrymenu-module-es2015.js.map
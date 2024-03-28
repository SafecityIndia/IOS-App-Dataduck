(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-filter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"dismiss()\">\n      <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\" />\n    </ion-buttons>\n\n    <ion-title>{{'home_all_filters' | translate}}</ion-title>\n    <div class=\"newsidetext\" slot=\"end\" tappable (click)=\"deSelectAll()\">\n      <p> {{'button_clear' | translate }} {{'home_all_filters' | translate}}</p>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"mainside\">\n    <div class=\"newlist\">\n      <ion-card class=\"newcard\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"newheadone\">{{'home_type_assault' | translate }}<ion-icon name=\"chevron-forward-outline\" (click)=\"filter()\"\n                slot=\"end\"></ion-icon>\n            </h5>\n            <div class=\"newtopfilter\">\n              <ion-list *ngFor='let item of catData2'>\n                <ion-item>\n                  <ion-label>{{item}}</ion-label>\n                </ion-item>\n              </ion-list>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n    <div class=\"newlist\">\n      <ion-card class=\"newcard\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"newhead\">{{'home_show_incident_from' | translate }}</h5>\n            <div class=\"newfilter\">\n              <ion-list>\n                <ion-radio-group mode=\"md\" [(ngModel)]='incidentFrom' (ionChange)=\"incedents()\">\n                  <ion-item>\n                    <ion-label>{{'home_all_time' | translate }}</ion-label>\n                    <ion-radio slot=\"end\" value=\"all\"></ion-radio>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>{{'home_today' | translate}}</ion-label>\n                    <ion-radio slot=\"end\" value=\"today\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>{{'home_this_week' | translate}}</ion-label>\n                    <ion-radio slot=\"end\" value=\"week\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>{{'home_this_month' | translate }}</ion-label>\n                    <ion-radio slot=\"end\" value=\"month\"></ion-radio>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>{{'home_this_year' | translate }}</ion-label>\n                    <ion-radio slot=\"end\" value=\"year\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n\n              </ion-list>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n\n    <div class=\"newlist lastbottom\">\n      <ion-card class=\"newcard\">\n        <ion-row (ionChange)=\"timeOfDay($event)\">\n          <ion-col size=\"12\">\n            <h5 class=\"newhead\">{{'home_time_of_day' | translate}}</h5>\n            <div class=\"newfilter\">\n              <ion-list>\n                <ion-item>\n                  <ion-label>{{'home_morning' | translate }}</ion-label>\n                  <ion-checkbox slot=\"end\" value=\"morning\" [(ngModel)]='morning'></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                  <ion-label>{{'home_afternoon' | translate }}</ion-label>\n                  <ion-checkbox slot=\"end\" value=\"afternoon\" [(ngModel)]='afternoon'></ion-checkbox>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label>{{'home_evening' | translate }}</ion-label>\n                  <ion-checkbox slot=\"end\" value=\"evening\" [(ngModel)]='evening'></ion-checkbox>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label>{{'home_night' | translate}}</ion-label>\n                  <ion-checkbox slot=\"end\" value=\"night\" [(ngModel)]='night'></ion-checkbox>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label>{{'home_post_night' | translate}}</ion-label>\n                  <ion-checkbox slot=\"end\" value=\"post_midnight\" [(ngModel)]='post_midnight'></ion-checkbox>\n                </ion-item>\n\n              </ion-list>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n    </div>\n  </div>\n</ion-content>\n<div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"getFilterdIncident()\">{{'button_apply' | translate }}</ion-button>\n    </ion-col>\n  </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/filter/filter-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/filter/filter-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function() { return FilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.page */ "./src/app/filter/filter.page.ts");




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ "./src/app/filter/filter.module.ts":
/*!*****************************************!*\
  !*** ./src/app/filter/filter.module.ts ***!
  \*****************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-routing.module */ "./src/app/filter/filter-routing.module.ts");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter.page */ "./src/app/filter/filter.page.ts");








let FilterPageModule = class FilterPageModule {
};
FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_6__["FilterPageRoutingModule"]
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_7__["FilterPage"]]
    })
], FilterPageModule);



/***/ }),

/***/ "./src/app/filter/filter.page.scss":
/*!*****************************************!*\
  !*** ./src/app/filter/filter.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.item-checkbox-checked {\n  --background: #D6C6EA;\n}\n\nion-checkbox {\n  --background-checked: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: #592D8D;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-width: 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, transparent));\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 15px;\n  margin-top: 4px;\n  padding-right: 11px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.newcard {\n  box-shadow: none;\n  border-bottom: none;\n  border-radius: 0;\n  -webkit-margin-start: 6px;\n          margin-inline-start: 6px;\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n  margin-bottom: 10px;\n  margin-top: 8px;\n}\n\n.newhead {\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  margin-bottom: 15px;\n}\n\n.newheadone {\n  font-size: 16px;\n  font-weight: 500;\n  color: #292020;\n  margin-bottom: 0;\n}\n\n.newtopfilter {\n  width: 100%;\n  height: auto;\n}\n\n.newtopfilter ion-item {\n  --inner-border-width: 0 0 0 0;\n  --min-height: 25px;\n  --padding-start: 18px;\n  font-size: 15px;\n}\n\n.newtopfilter ion-label {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  white-space: inherit;\n}\n\n.newtopfilter ion-list {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nion-radio {\n  --color-checked: #592D8D;\n}\n\n.newcontent {\n  width: 100%;\n  height: auto;\n}\n\n.newicon ion-icon {\n  margin-top: 18px;\n}\n\n.newicon {\n  text-align: right;\n}\n\n.item-interactive.item-has-focus {\n  --highlight-background: transparent;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n  border-bottom: 1px solid #ddd;\n}\n\n.newheadone ion-icon {\n  float: right;\n}\n\n.newcontentin {\n  margin-bottom: 125px;\n}\n\n.newcontentin ion-list {\n  padding-top: 0;\n}\n\n.newcontentin p {\n  color: #909090;\n  font-size: 16px;\n  margin-top: 0;\n}\n\n.newcontentin ion-item {\n  --padding-start: 10px;\n  margin-bottom: 8px;\n  --inner-padding-end: 10px;\n  font-size: 16px;\n  border: 1px solid #E1D8EB;\n  --min-height:38px;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newcontentin ion-label {\n  margin-top: 6px;\n  margin-bottom: 8px;\n  white-space: inherit;\n}\n\n.md.radio-checked .radio-inner {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n}\n\nion-radio.md {\n  --border-width: 0 !important;\n  --border-style: solid;\n  --border-radius:0;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 24px;\n  margin-top: 1px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.mainside {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin-bottom: 150px;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:none;\n  text-align: center;\n}\n\nion-radio.md.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\nion-radio.ios.radio-checked {\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked);\n  width: 7px;\n  width: 7px;\n  height: 16px;\n  margin-top: 4px;\n  margin-right: 10px;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 15px;\n  margin-top: 18px;\n  padding-right: 11px;\n}\n\n.newfilter ion-item {\n  --padding-start: 14px;\n  margin-bottom: 8px;\n  --inner-padding-end: 10px;\n  font-size: 15px;\n  border: 1px solid #E1D8EB;\n  --min-height:38px;\n  border-radius: 3px;\n  color: #292020;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newfilter ion-label {\n  margin-top: 10px;\n  margin-bottom: 8px;\n  white-space: inherit;\n}\n\n.item-radio-checked {\n  --background:#D6C6EA;\n}\n\n.newfilter {\n  width: 100%;\n  height: auto;\n}\n\n.newfilter ion-icon {\n  margin-top: 18px;\n}\n\n.newfilter {\n  text-align: right;\n}\n\n.lastbottom {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9maWx0ZXIvZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBRUEscUJBQUE7QUNIQTs7QURLQTtFQUVBLGlDQUFBO0VBQ0ksbUNBQUE7RUFDQSwwQkFBQTtFQUNILGVBQUE7RUFDRyxrQkFBQTtFQUNILG1CQUFBO0VBQ0Esa0ZBQUE7QUNIRDs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFVBO0VBQ0EsY0FBQTtBQ1BBOztBRFVBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUkE7O0FEV0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0M7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLHdC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OztBRHNDQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDcENBOztBRHdDQTtFQUVBLGdCQUFBO0FDdENBOztBRDBDQTtFQUVBLGlCQUFBO0FDeENBOztBRDBDQTtFQUVBLG1CQUFBO0FDeENBIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuLml0ZW0tY2hlY2tib3gtY2hlY2tlZFxyXG57XHJcbi0tYmFja2dyb3VuZDogI0Q2QzZFQTtcclxufVxyXG5pb24tY2hlY2tib3hcclxue1xyXG4tLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjNTkyRDhEO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHQtLWJvcmRlci13aWR0aDogMHB4O1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KSk7XHJcbn1cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5uZXdzaWRldGV4dCBwXHJcbntcclxuY29sb3I6I0Q5MEQwRDtcclxuZm9udC1zaXplOjE1cHg7XHJcbm1hcmdpbi10b3A6NHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjExcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5uZXdjYXJkXHJcblx0e1xyXG5cdGJveC1zaGFkb3c6bm9uZTtcclxuXHRib3JkZXItYm90dG9tOm5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czowO1xyXG5cdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDZweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XHJcblx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdG1hcmdpbi10b3A6OHB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3aGVhZFxyXG5cdHtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRtYXJnaW4tYm90dG9tOjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdoZWFkb25lXHJcblx0e1xyXG5cdFx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdH1cclxuXHQubmV3dG9wZmlsdGVyXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5cdH1cclxuXHRcclxuXHQubmV3dG9wZmlsdGVyIGlvbi1pdGVte1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDAgMDtcclxuICAgIC0tbWluLWhlaWdodDogMjVweDtcclxuXHQgICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xyXG5cdFx0Zm9udC1zaXplOjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdFx0Lm5ld3RvcGZpbHRlciBpb24tbGFiZWx7XHJcbm1hcmdpbi10b3A6OHB4O1xyXG5tYXJnaW4tYm90dG9tOjhweDtcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld3RvcGZpbHRlciBpb24tbGlzdFxyXG5cdHtcclxuXHRwYWRkaW5nLXRvcDowO1xyXG5cdHBhZGRpbmctYm90dG9tOjA7XHJcblx0fVxyXG5cclxuaW9uLXJhZGlvXHJcbiAge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjNTkyRDhEO1xyXG4gIH1cclxuXHJcbi5uZXdjb250ZW50XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcblxyXG59XHJcblxyXG4ubmV3aWNvbiBpb24taWNvblxyXG57XHJcbm1hcmdpbi10b3A6MThweDtcclxuXHJcbn1cclxuXHJcbi5uZXdpY29uXHJcbntcclxudGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXN7XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLm5ld2xpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxuYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLm5ld2hlYWRvbmUgaW9uLWljb257XHJcbmZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4ubmV3Y29udGVudGluXHJcbntcclxubWFyZ2luLWJvdHRvbToxMjVweDtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpbiBpb24tbGlzdFxyXG57XHJcbnBhZGRpbmctdG9wOjA7XHJcbn1cclxuLm5ld2NvbnRlbnRpbiBwe1xyXG5jb2xvcjojOTA5MDkwO1xyXG5mb250LXNpemU6MTZweDtcclxubWFyZ2luLXRvcDowO1xyXG59XHJcbi5uZXdjb250ZW50aW4gaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbm1hcmdpbi1ib3R0b206OHB4O1xyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuLS1taW4taGVpZ2h0OjM4cHg7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW4gaW9uLWxhYmVsXHJcbntcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuLm1kLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG59XHJcblxyXG5pb24tcmFkaW8ubWRcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjA7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIFxyXG57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG5cclxufVxyXG5cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4ubWFpbnNpZGVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLWJvdHRvbToxNTBweDtcclxufVxyXG5cclxuLm5ld2J0blxyXG57XHJcblxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5tZC5yYWRpby1jaGVja2VkIFxyXG57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XHJcbiAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1yYWRpby5pb3MucmFkaW8tY2hlY2tlZCBcclxue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xyXG4gICB3aWR0aDogN3B4O1xyXG4gICAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdzaWRldGV4dCBwXHJcbntcclxuY29sb3I6I0Q5MEQwRDtcclxuZm9udC1zaXplOjE1cHg7XHJcbm1hcmdpbi10b3A6MThweDtcclxucGFkZGluZy1yaWdodDoxMXB4O1xyXG59XHJcbi5uZXdmaWx0ZXIgaW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDE0cHg7XHJcbm1hcmdpbi1ib3R0b206OHB4O1xyXG4gLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcclxuZm9udC1zaXplOjE1cHg7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuLS1taW4taGVpZ2h0OjM4cHg7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG5jb2xvcjojMjkyMDIwO1xyXG4tLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubmV3ZmlsdGVyIGlvbi1sYWJlbFxyXG57XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG4uaXRlbS1yYWRpby1jaGVja2VkXHJcbntcclxuLS1iYWNrZ3JvdW5kOiNENkM2RUE7XHJcbn1cclxuLm5ld2ZpbHRlclxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5cclxufVxyXG5cclxuLm5ld2ZpbHRlciBpb24taWNvblxyXG57XHJcbm1hcmdpbi10b3A6MThweDtcclxuXHJcbn1cclxuXHJcbi5uZXdmaWx0ZXJcclxue1xyXG50ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcbi5sYXN0Ym90dG9tXHJcbntcclxuYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0tYmFja2dyb3VuZDogI0Q2QzZFQTtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6ICM1OTJEOEQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCkpO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5uZXdzaWRldGV4dCBwIHtcbiAgY29sb3I6ICNEOTBEMEQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLm5ld2NhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm5ld2hlYWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3aGVhZG9uZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uZXd0b3BmaWx0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3dG9wZmlsdGVyIGlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gIC0tbWluLWhlaWdodDogMjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5uZXd0b3BmaWx0ZXIgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4ubmV3dG9wZmlsdGVyIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM1OTJEOEQ7XG59XG5cbi5uZXdjb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5ld2ljb24gaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4ubmV3aWNvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWhhcy1mb2N1cyB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubmV3bGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ubmV3aGVhZG9uZSBpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5ld2NvbnRlbnRpbiB7XG4gIG1hcmdpbi1ib3R0b206IDEyNXB4O1xufVxuXG4ubmV3Y29udGVudGluIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5uZXdjb250ZW50aW4gcCB7XG4gIGNvbG9yOiAjOTA5MDkwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdjb250ZW50aW4gaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICAtLW1pbi1oZWlnaHQ6MzhweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld2NvbnRlbnRpbiBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5tZC5yYWRpby1jaGVja2VkIC5yYWRpby1pbm5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbn1cblxuaW9uLXJhZGlvLm1kIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1yYWRpdXM6MDtcbn1cblxuaW9uLXJhZGlvLm1kLnJhZGlvLWNoZWNrZWQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY2hlY2tlZCk7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cblxuLm5ld2J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogODUlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tcmFkaW8ubWQucmFkaW8tY2hlY2tlZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLXJhZGlvLmlvcy5yYWRpby1jaGVja2VkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICB3aWR0aDogN3B4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmV3c2lkZXRleHQgcCB7XG4gIGNvbG9yOiAjRDkwRDBEO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDExcHg7XG59XG5cbi5uZXdmaWx0ZXIgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTFEOEVCO1xuICAtLW1pbi1oZWlnaHQ6MzhweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld2ZpbHRlciBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1iYWNrZ3JvdW5kOiNENkM2RUE7XG59XG5cbi5uZXdmaWx0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3ZmlsdGVyIGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLm5ld2ZpbHRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubGFzdGJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/filter/filter.page.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.page.ts ***!
  \***************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");






let FilterPage = class FilterPage {
    constructor(sharedService, httpClient, navController, router, route) {
        this.sharedService = sharedService;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.shownGroup = false;
        this.address = '';
        this.pagename = 'IncidentFilterPage';
        this.buttonDisabled = true;
        this.violenceTypeArray = [];
        this.addressArray = [];
        this.incidentFrom = '';
        this.timeOfDayArray = [];
        this.catData2 = [];
        this.catDatalen = 0;
        this.catIdArray = [];
        this.shared_data = this.sharedService.getData();
        // this.categoryData = this.sharedService.getCatArray()
        // console.log("categoryData",this.categoryData)
        console.log(this.shared_data);
        console.log(this.shared_data['safetytipdata']);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.categoryData = this.sharedService.getCatArray();
        console.log("categoryData", this.categoryData);
        if (this.categoryData.length > 0) {
            this.incidentFrom = this.categoryData[1];
            for (var i = 0; i < this.categoryData[0].length; i++) {
                if (this.categoryData[0][i] == 'morning') {
                    this.morning = true;
                }
                else if (this.categoryData[0][i] == 'afternoon') {
                    this.afternoon = true;
                }
                else if (this.categoryData[0][i] == 'evening') {
                    this.evening = true;
                }
                else if (this.categoryData[0][i] == 'night') {
                    this.night = true;
                }
                else if (this.categoryData[0][i] == 'post_midnight') {
                    this.post_midnight = true;
                }
            }
            console.log(this.morning);
            console.log(this.afternoon);
            console.log(this.morning);
            console.log(this.morning);
            console.log(this.morning);
            console.log(this.sharedService.getCatArray());
            var data = this.sharedService.getCatArray();
            this.catData2 = data[2];
            this.catIdArray = data[3];
        }
        //this.catData2 =[]
        this.route.queryParams.subscribe(params => {
            this.catData1 = params["catData"];
            console.log(this.catData1, "++++++++");
            // this.catIds = params["catIDs"]
            this.pagename1 = params["pagename"];
            this.segmentmodel = params["segmentModel"];
            console.log("pagename", this.pagename1);
            if (this.pagename1 == 'incidentFilter') {
                this.catData2 = [];
                this.catIdArray = [];
                console.log("if condition");
                this.parseData();
            }
            if (this.pagename1 == null || this.pagename1 == undefined) {
                this.deSelectAll();
            }
        });
        console.log(this.incidentFrom);
        // for(let i=0;i<this.categoryData.length;i++)
        // {
        // }
        // this.catData = this.categoryData[0]
        // this.catIds = this.categoryData[1]
        // console.log("categoryid",this.catIds)
        // this.catIds = this.catIds.join(',')
        // console.log("categoryid after join",this.catIds)
    }
    parseData() {
        this.catData = JSON.parse(this.catData1);
        console.log("+++", this.catData);
        for (let i = 0; i < this.catData.length; i++) {
            console.log(this.catData[i]);
            var splitValue = this.catData[i].split(',');
            console.log(splitValue);
            this.catData2.push(splitValue[0]);
            this.catIdArray.push(splitValue[1]);
        }
        console.log("con", this.catData2);
        console.log("con", this.catIdArray);
        // this.catDatalen = this.catData.length;
        // console.log("datalegth", this.catDatalen)
        // console.log("ids", this.catIds)
    }
    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    }
    ;
    isGroupShown(group) {
        return this.shownGroup === group;
    }
    ;
    timeOfDay(e) {
        console.log(e);
        this.checked = e.detail.checked;
        console.log(this.checked);
        if (this.checked == true) {
            this.timeOfDayArray.push(e.detail.value);
            console.log(this.timeOfDayArray);
        }
        else if (this.checked == false) {
            var index = this.timeOfDayArray.indexOf(e.detail.value);
            console.log(index);
            this.timeOfDayArray.splice(index, 1);
            console.log(this.timeOfDayArray);
        }
    }
    filter() {
        let navigationExtras = {
            queryParams: {
                //incidentList:this.incidentList,
                pagename: this.pagename,
            }
        };
        this.navController.navigateForward([`/incidentfilter`], navigationExtras);
    }
    // ionViewWillEnter()
    // {
    //   this. deSelectAll() 
    // }
    deSelectAll() {
        // this.sharedService.timeofArray(null)
        this.incidentFrom = '';
        console.log(this.incidentFrom);
        console.log(this.catData);
        this.timeOfDayArray = [];
        this.catData2 = [];
        this.catIdArray = [];
        this.morning = false,
            this.afternoon = false,
            this.evening = false,
            this.night = false,
            this.post_midnight = false;
    }
    getFilterdIncident() {
        var all_Array = [];
        all_Array.push(this.timeOfDayArray, this.incidentFrom, this.catData2, this.catIdArray);
        console.log("allArray from filterd page", all_Array);
        this.sharedService.timeofArray(all_Array);
        this.timeOfDayArray.length;
        //   console.log('timelenggth=>',this.timeOfDayArray.length," catDatalen==>",( this.categoryData.length),);
        // if(this.incidentFrom.length>=1)
        // {
        //   var totalFilterLen = ( this.categoryData.length) + this.timeOfDayArray.length + 1;
        // }
        // else
        // {
        //   var totalFilterLen =( this.categoryData.length) + this.timeOfDayArray.length;
        // }
        // console.log("totallen", totalFilterLen)
        this.timeOfString = this.timeOfDayArray.join(',');
        let navigationExtras = {
            queryParams: {
                pagename: this.pagename,
                // totalFilterLen: totalFilterLen,
                // incidentFrom: this.incidentFrom,
                // catId: this.catIds,
                // timeOfString: this.timeOfString,
                segmentModel: 'one'
            }
        };
        this.navController.navigateForward([`modelreport`], navigationExtras);
    }
    dismiss() {
        let navigationExtras = {
            queryParams: {
                segmentModel: 'one',
                pagename: this.pagename
            }
        };
        this.navController.navigateForward([`modelreport`], navigationExtras);
    }
    incedents() {
        console.log(this.incidentFrom);
    }
};
FilterPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter.page.scss */ "./src/app/filter/filter.page.scss")).default]
    })
], FilterPage);



/***/ })

}]);
//# sourceMappingURL=filter-filter-module-es2015.js.map
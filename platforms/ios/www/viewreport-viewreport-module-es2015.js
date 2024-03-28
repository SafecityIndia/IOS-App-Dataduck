(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewreport-viewreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreport/viewreport.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewreport/viewreport.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Incidents Shared by Others</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- content of all records -->\n<ion-content *ngIf = \"showAllList\">\n  <div class=\"tips\">\n    <!-- <ion-row>\n      <ion-col size=\"12\">\n\t  <div class=\"newtext\">\n\t  <p>Filters :</p>\n\t  <ion-chip fill=\"outline\">\n  <ion-label>Thane</ion-label>\n  <ion-icon name=\"close\"></ion-icon>\n</ion-chip>\n\n</div>\n  </ion-col>\n    </ion-row> -->\n\n    <ion-row *ngFor=\"let item of reportList\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcard\" tappable (click)=\"reportdetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.violence_type}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.what_happened_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.location}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf = \"resultNotFound\">\n      <ion-col size=\"12\">\n      <div class=\"notfound\">\n      <p>No Data Found</p>\n      </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>\n\n<!-- // content of filter -->\n<ion-content *ngIf=\"showList\">\n  <div class=\"tips\">\n    <ion-row>\n   <ion-col size=\"12\">\n        <div class=\"newtext\">   \n          <p>Filters:</p>\n          <ion-chip fill=\"outline\"  *ngFor=\"let item of violenceType;index as i\">\n            <ion-label *ngIf= 'violenceType != []' >{{item}}</ion-label>\n            <ion-icon name=\"close\" (click)=\"close(i,'violence_type')\"></ion-icon>\n          </ion-chip>\n          <ion-chip fill=\"outline\"  *ngFor=\"let item of address;index as i\">\n            <ion-label *ngIf= 'address != []' >{{item}}</ion-label>\n            <ion-icon name=\"close\" (click)=\"close(i,'address')\"></ion-icon>\n          </ion-chip>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"12\" *ngFor=\"let item of reportList\">\n        <ion-card class=\"newcard\" tappable (click)=\"reportdetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.violence_type}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.what_happened_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.locality}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<div class=\"bottom\">\n  <ion-row>\n    <ion-col col-12>\n      <ion-button expand=\"full\" shape=\"round\" class=\"newbtn\" (click)=\"filterin()\">Filter</ion-button>\n    </ion-col>\n  </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/viewreport/viewreport-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/viewreport/viewreport-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreportPageRoutingModule", function() { return ViewreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _viewreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewreport.page */ "./src/app/viewreport/viewreport.page.ts");




const routes = [
    {
        path: '',
        component: _viewreport_page__WEBPACK_IMPORTED_MODULE_3__["ViewreportPage"]
    }
];
let ViewreportPageRoutingModule = class ViewreportPageRoutingModule {
};
ViewreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewreportPageRoutingModule);



/***/ }),

/***/ "./src/app/viewreport/viewreport.module.ts":
/*!*************************************************!*\
  !*** ./src/app/viewreport/viewreport.module.ts ***!
  \*************************************************/
/*! exports provided: ViewreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreportPageModule", function() { return ViewreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _viewreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewreport-routing.module */ "./src/app/viewreport/viewreport-routing.module.ts");
/* harmony import */ var _viewreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewreport.page */ "./src/app/viewreport/viewreport.page.ts");







let ViewreportPageModule = class ViewreportPageModule {
};
ViewreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewreportPageRoutingModule"]
        ],
        declarations: [_viewreport_page__WEBPACK_IMPORTED_MODULE_6__["ViewreportPage"]]
    })
], ViewreportPageModule);



/***/ }),

/***/ "./src/app/viewreport/viewreport.page.scss":
/*!*************************************************!*\
  !*** ./src/app/viewreport/viewreport.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n\nion-card-header {\n  padding-bottom: 10px;\n}\n\n.newcard ion-card-content {\n  font-size: 14px;\n  color: #292020;\n  padding-bottom: 0;\n}\n\n.newcard {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n}\n\n.newcalendar {\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 12px;\n  margin: 10px 0 10px 0;\n}\n\n.newcalendar img {\n  width: 15px;\n  margin-right: 2px;\n}\n\n.bottomcard {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 32px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.newtext {\n  width: 100%;\n  padding: 0 10px;\n  margin-bottom: 6px;\n}\n\n.newtext ion-icon {\n  font-size: 14px;\n  margin-top: -2px;\n}\n\n.newtext ion-chip {\n  font-size: 15px;\n  background: #EBE2F5;\n  border: 1px solid #D7BAF8;\n  height: 28px;\n  line-height: 28px;\n}\n\n.newtext p {\n  margin: 8px 0;\n  float: left;\n  font-size: 16px;\n}\n\n.newbtn {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #EBE2F5;\n  --background-activated: #EBE2F5;\n  --background-focused: #EBE2F5;\n  --background-hover: #EBE2F5;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 46%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC92aWV3cmVwb3J0L3ZpZXdyZXBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3cmVwb3J0L3ZpZXdyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURTQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQQTs7QURVQTtFQUNBLGNBQUE7QUNQQTs7QURVQTtFQUNBLGdCQUFBO0FDUEE7O0FEV0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0M7RUFFQSxlQUFBO0FDVEQ7O0FEYUM7RUFFQSxvQkFBQTtBQ1hEOztBRGNDO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1pEOztBRGVDO0VBRUEsa0JBQUE7RUFHRCxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2JBOztBRGdCQztFQUVBLG9CQUFBO0FDZEQ7O0FEZ0JDO0VBQ0EsZUFBQTtFQUNDLHFCQUFBO0FDYkY7O0FEZ0JDO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDZEQ7O0FEaUJDO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUNmRDs7QURrQkM7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2hCRDs7QURtQkM7RUFFRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2pCQTs7QURvQkE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbEJBOztBRHFCQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQ25CQTs7QURzQkE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3BCQTs7QURzQkE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNwQkE7O0FEdUJBO0VBRUEseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDckJBIiwiZmlsZSI6InNyYy9hcHAvdmlld3JlcG9ydC92aWV3cmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxuZm9udC1mYW1pbHk6ICdMYXRvJztcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHRpb24tY2FyZC10aXRsZVxyXG5cdHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdGlvbi1jYXJkLWhlYWRlclxyXG5cdHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhcmQgaW9uLWNhcmQtY29udGVudFxyXG5cdHtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRjb2xvcjojMjkyMDIwO1xyXG5cdHBhZGRpbmctYm90dG9tOjA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYXJkXHJcblx0e1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxubWFyZ2luLXRvcDowO1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FsZW5kYXJcclxuXHR7XHJcblx0ZGlzcGxheTppbmxpbmUtZmxleDtcclxuXHR9XHJcblx0Lm5ld2NhbGVuZGFyIHB7XHJcblx0Zm9udC1zaXplOjEycHg7XHJcblx0IG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhbGVuZGFyIGltZ1xyXG5cdHtcclxuXHR3aWR0aDoxNXB4O1xyXG5cdG1hcmdpbi1yaWdodDoycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5ib3R0b21jYXJkXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0cGFkZGluZzowIDE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC50aXBzXHJcblx0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdG1hcmdpbi10b3A6MzJweDtcclxuXHR9XHJcblx0XHJcblx0LmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4ubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MCAxMHB4O1xyXG5tYXJnaW4tYm90dG9tOjZweDtcclxufVxyXG5cclxuLm5ld3RleHQgaW9uLWljb25cclxue1xyXG5mb250LXNpemU6MTRweDtcclxubWFyZ2luLXRvcDotMnB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBpb24tY2hpcFxyXG57XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5iYWNrZ3JvdW5kOiNFQkUyRjU7XHJcbmJvcmRlcjoxcHggc29saWQgI0Q3QkFGODtcclxuaGVpZ2h0OjI4cHg7XHJcbmxpbmUtaGVpZ2h0OjI4cHg7XHJcbn1cclxuLm5ld3RleHQgcFxyXG57XHJcbm1hcmdpbjo4cHggMDtcclxuZmxvYXQ6bGVmdDtcclxuZm9udC1zaXplOjE2cHg7XHJcbn1cclxuXHJcbi5uZXdidG5cclxue1xyXG5jb2xvcjojMkYxMTUzICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjQwcHg7XHJcbi0tYmFja2dyb3VuZDogI0VCRTJGNTtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRUJFMkY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRUJFMkY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo0NiU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uZXdjYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLm5ld2NhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogLTFweCA3cHggMTNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3Y2FsZW5kYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5ld2NhbGVuZGFyIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn1cblxuLm5ld2NhbGVuZGFyIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmJvdHRvbWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4udGlwcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubmV3dGV4dCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLm5ld3RleHQgaW9uLWNoaXAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFQkUyRjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEN0JBRjg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5uZXd0ZXh0IHAge1xuICBtYXJnaW46IDhweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICMyRjExNTMgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRUJFMkY1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA0NiU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/viewreport/viewreport.page.ts":
/*!***********************************************!*\
  !*** ./src/app/viewreport/viewreport.page.ts ***!
  \***********************************************/
/*! exports provided: ViewreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewreportPage", function() { return ViewreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");








let ViewreportPage = class ViewreportPage {
    constructor(toastController, sharedservice, navController, router, httpClient, route) {
        this.toastController = toastController;
        this.sharedservice = sharedservice;
        this.navController = navController;
        this.router = router;
        this.httpClient = httpClient;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/incident_report/';
        this.showList = false;
        this.showAllList = false;
        this.addressArray = [];
        this.violenceTypeArray = [];
        this.allCategoryArray = [];
        this.resultNotFound = false;
        this.route.queryParams.subscribe(params => {
            this.violenceType = params["violenceType"];
            this.address = params["address"];
            this.pagename = params["pagename"];
            this.callFirst();
            console.log("address", this.address);
            console.log("violenceType", this.violenceType);
            console.log("pagename", this.pagename);
        });
    }
    ngOnInit() {
    }
    callFirst() {
        if (this.pagename == 'reportFilterPage') {
            this.showList = true;
            this.showAllList = false;
            console.log('pagein');
            this.getFilteredReportList();
        }
        else if (this.pagename == undefined) {
            this.showList = false;
            this.showAllList = true;
            console.log('pageout');
            this.getAllReportList();
        }
    }
    getAllReportList() {
        let data = new FormData();
        data.append('security_key', '4b89b2831f1aae8067eb87a2d042e0fc4d8dd432');
        this.sharedservice.sharedPostRequest('incident_report/getAllIncidentReport', data).subscribe((rdata) => {
            console.log(rdata);
            this.reportList = rdata.data;
            console.log(this.reportList);
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'getAllIncidentReport', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.reportList = rdata.data;
        //     console.log(this.reportList);
        //   }, error => {
        //   });
    }
    getFilteredReportList() {
        let addstring = this.address.join(',');
        let violenceString = this.violenceType.join(',');
        let data = new FormData();
        data.append('security_key', '14a077af215a19bcf0c3c9a28a1ae27b1260df7d');
        data.append('incloc', addstring);
        data.append('inctype', violenceString);
        this.sharedservice.sharedPostRequest('incident_report/searchIncidentReport', data).subscribe((rdata) => {
            console.log(rdata);
            this.reportList = rdata.data;
            if (this.reportList == '') {
                this.showList = false;
                this.resultNotFound = true;
                // this.showAllList = true
                //  this.presentToast()
                console.log('pageout');
                // this.getAllReportList()
            }
            console.log(this.reportList);
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'searchIncidentReport', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.reportList = rdata.data;
        //     if (this.reportList == '') {
        //       this.showList = false
        //       this.resultNotFound = true
        //       // this.showAllList = true
        //       //  this.presentToast()
        //       console.log('pageout')
        //       // this.getAllReportList()
        //     }
        //     console.log(this.reportList);
        //   }, error => {
        //   });
    }
    reportdetail(item) {
        console.log(item);
        let navigationExtras = {
            queryParams: {
                item: item.id,
            }
        };
        this.navController.navigateForward([`viewreportdetail`], navigationExtras);
        // this.navController.navigateForward(`/viewreportdetail`);
    }
    filterin() {
        this.navController.navigateForward(`/filter`);
    }
    close(i, type) {
        this.item = i;
        console.log(i);
        console.log(type);
        if (type == 'violence_type') {
            if (this.violenceType == []) {
            }
            else {
                this.violenceType.pop(this.item);
                this.getFilteredReportList();
                console.log(this.violenceType);
            }
        }
        else {
            if (this.address == []) {
            }
            else {
                this.address.pop(this.item);
                this.getFilteredReportList();
                console.log(this.addressArray);
            }
        }
    }
};
ViewreportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewreport',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewreport/viewreport.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewreport.page.scss */ "./src/app/viewreport/viewreport.page.scss")).default]
    })
], ViewreportPage);



/***/ })

}]);
//# sourceMappingURL=viewreport-viewreport-module-es2015.js.map
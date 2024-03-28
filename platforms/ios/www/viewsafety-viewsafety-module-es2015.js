(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewsafety-viewsafety-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafety/viewsafety.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafety/viewsafety.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Safety Tips</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf = \"showAllList\">\n  <div class=\"tips\">\n  \n    <ion-row *ngFor=\"let item of SaftyTipList\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcard\" tappable (click)=\"safteydetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.safety_tip_title}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.safety_tip_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.city}}, {{item.location}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"showList\">\n  <div class=\"tips\">  \n  <ion-row >\n      <ion-col size=\"12\">\n\t  <div class=\"newtext\">\n\t  <p>Filters :</p>\n\t  <ion-chip fill=\"outline\" (click)='close()'>\n  <ion-label>{{address}}</ion-label>\n  <ion-icon name=\"close\"></ion-icon>\n</ion-chip>\n\t \n</div>\n  </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of SaftyTipSearchList\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcard\" tappable (click)=\"safteydetail(item)\">\n          <ion-card-header>\n            <ion-card-title>{{item.safety_tip_title}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.safety_tip_desc}}\n          </ion-card-content>\n          <div class=\"bottomcard\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/calendar.svg\" />\n                  <p>{{item.added_date}}</p>\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"newcalendar\">\n                  <img src=\"assets/images/icons/location.svg\" />\n                  <p>{{item.city}}, {{item.location}}</p>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<div class=\"bottom\">\n<ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" (click)=\"safteyfilter()\" >Filter</ion-button>\n  </ion-col>\n   </ion-row>\n</div>");

/***/ }),

/***/ "./src/app/viewsafety/viewsafety-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/viewsafety/viewsafety-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewsafetyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafetyPageRoutingModule", function() { return ViewsafetyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _viewsafety_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewsafety.page */ "./src/app/viewsafety/viewsafety.page.ts");




const routes = [
    {
        path: '',
        component: _viewsafety_page__WEBPACK_IMPORTED_MODULE_3__["ViewsafetyPage"]
    }
];
let ViewsafetyPageRoutingModule = class ViewsafetyPageRoutingModule {
};
ViewsafetyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewsafetyPageRoutingModule);



/***/ }),

/***/ "./src/app/viewsafety/viewsafety.module.ts":
/*!*************************************************!*\
  !*** ./src/app/viewsafety/viewsafety.module.ts ***!
  \*************************************************/
/*! exports provided: ViewsafetyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafetyPageModule", function() { return ViewsafetyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _viewsafety_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewsafety-routing.module */ "./src/app/viewsafety/viewsafety-routing.module.ts");
/* harmony import */ var _viewsafety_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewsafety.page */ "./src/app/viewsafety/viewsafety.page.ts");







let ViewsafetyPageModule = class ViewsafetyPageModule {
};
ViewsafetyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewsafety_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewsafetyPageRoutingModule"]
        ],
        declarations: [_viewsafety_page__WEBPACK_IMPORTED_MODULE_6__["ViewsafetyPage"]]
    })
], ViewsafetyPageModule);



/***/ }),

/***/ "./src/app/viewsafety/viewsafety.page.scss":
/*!*************************************************!*\
  !*** ./src/app/viewsafety/viewsafety.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  font-family: \"Lato\";\n  left: 0px;\n  top: 0px;\n  padding-left: 90px;\n  padding-right: 90px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-card-title {\n  font-size: 16px;\n}\n\nion-card-header {\n  padding-bottom: 10px;\n}\n\n.newcard ion-card-content {\n  font-size: 14px;\n  color: #292020;\n  padding-bottom: 0;\n}\n\n.newcard {\n  border-radius: 5px;\n  box-shadow: -1px 7px 13px -1px rgba(0, 0, 0, 0.16);\n  margin-bottom: 15px;\n  margin-top: 0;\n}\n\n.newcalendar {\n  display: inline-flex;\n}\n\n.newcalendar p {\n  font-size: 12px;\n  margin: 10px 0 10px 0;\n}\n\n.newtext {\n  width: 100%;\n  padding: 0 10px;\n  margin-bottom: 6px;\n}\n\n.newtext ion-icon {\n  font-size: 14px;\n  margin-top: -2px;\n}\n\n.newtext ion-chip {\n  font-size: 15px;\n  background: #EBE2F5;\n  border: 1px solid #D7BAF8;\n  height: 28px;\n  line-height: 28px;\n}\n\n.newtext p {\n  margin: 8px 0;\n  float: left;\n  font-size: 16px;\n}\n\n.newcalendar img {\n  width: 15px;\n  margin-right: 2px;\n}\n\n.bottomcard {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 32px;\n}\n\n.newbtn {\n  color: #2F1153 !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #EBE2F5;\n  --background-activated: #EBE2F5;\n  --background-focused: #EBE2F5;\n  --background-hover: #EBE2F5;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 46%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC92aWV3c2FmZXR5L3ZpZXdzYWZldHkucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3c2FmZXR5L3ZpZXdzYWZldHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFVBO0VBRUEscUJBQUE7QUNSQTs7QURVQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNSSjs7QURVQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDUkE7O0FEWUE7RUFDQSxjQUFBO0FDVEE7O0FEWUE7RUFDQSxnQkFBQTtBQ1RBOztBRFlBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRFlDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRFlDO0VBRUEsZUFBQTtBQ1ZEOztBRGNDO0VBRUEsb0JBQUE7QUNaRDs7QURlQztFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNiRDs7QURnQkM7RUFFQSxrQkFBQTtFQUdELGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDZEE7O0FEaUJDO0VBRUEsb0JBQUE7QUNmRDs7QURpQkM7RUFDQSxlQUFBO0VBQ0MscUJBQUE7QUNkRjs7QURnQkM7RUFFRCxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZEE7O0FEaUJBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDZkE7O0FEa0JBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNoQkE7O0FEa0JBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDaEJBOztBRGtCQztFQUVBLFdBQUE7RUFDQSxpQkFBQTtBQ2hCRDs7QURtQkM7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ2pCRDs7QURvQkM7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2xCRDs7QURvQkM7RUFFRCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNsQkE7O0FEb0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQkEiLCJmaWxlIjoic3JjL2FwcC92aWV3c2FmZXR5L3ZpZXdzYWZldHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdGlvbi1jYXJkLXRpdGxlXHJcblx0e1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0aW9uLWNhcmQtaGVhZGVyXHJcblx0e1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHRcclxuXHQubmV3Y2FyZCBpb24tY2FyZC1jb250ZW50XHJcblx0e1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0cGFkZGluZy1ib3R0b206MDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2NhcmRcclxuXHR7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4td2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4tbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG5ib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLDAsMCwwLjE2KTtcclxubWFyZ2luLWJvdHRvbToxNXB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcblx0fVxyXG5cdFxyXG5cdC5uZXdjYWxlbmRhclxyXG5cdHtcclxuXHRkaXNwbGF5OmlubGluZS1mbGV4O1xyXG5cdH1cclxuXHQubmV3Y2FsZW5kYXIgcHtcclxuXHRmb250LXNpemU6MTJweDtcclxuXHQgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG5cdH1cclxuXHQubmV3dGV4dFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbnBhZGRpbmc6MCAxMHB4O1xyXG5tYXJnaW4tYm90dG9tOjZweDtcclxufVxyXG5cclxuLm5ld3RleHQgaW9uLWljb25cclxue1xyXG5mb250LXNpemU6MTRweDtcclxubWFyZ2luLXRvcDotMnB4O1xyXG59XHJcblxyXG4ubmV3dGV4dCBpb24tY2hpcFxyXG57XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5iYWNrZ3JvdW5kOiNFQkUyRjU7XHJcbmJvcmRlcjoxcHggc29saWQgI0Q3QkFGODtcclxuaGVpZ2h0OjI4cHg7XHJcbmxpbmUtaGVpZ2h0OjI4cHg7XHJcbn1cclxuLm5ld3RleHQgcFxyXG57XHJcbm1hcmdpbjo4cHggMDtcclxuZmxvYXQ6bGVmdDtcclxuZm9udC1zaXplOjE2cHg7XHJcbn1cclxuXHQubmV3Y2FsZW5kYXIgaW1nXHJcblx0e1xyXG5cdHdpZHRoOjE1cHg7XHJcblx0bWFyZ2luLXJpZ2h0OjJweDtcclxuXHR9XHJcblx0XHJcblx0LmJvdHRvbWNhcmRcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRwYWRkaW5nOjAgMTVweDtcclxuXHR9XHJcblx0XHJcblx0LnRpcHNcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0bWFyZ2luLXRvcDozMnB4O1xyXG5cdH1cclxuXHQubmV3YnRuXHJcbntcclxuY29sb3I6IzJGMTE1MyAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo0MHB4O1xyXG4tLWJhY2tncm91bmQ6ICNFQkUyRjU7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNFQkUyRjU7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0VCRTJGNTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6NDYlO1xyXG4gZm9udC13ZWlnaHQ6NTAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5ib3R0b21cclxue1xyXG53aWR0aDoxMDAlO1xyXG5ib3R0b206NTBweDtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmV3Y2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5uZXdjYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtbW96LWJveC1zaGFkb3c6IC0xcHggN3B4IDEzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAtMXB4IDdweCAxM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld2NhbGVuZGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5uZXdjYWxlbmRhciBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG59XG5cbi5uZXd0ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubmV3dGV4dCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLm5ld3RleHQgaW9uLWNoaXAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFQkUyRjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEN0JBRjg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5uZXd0ZXh0IHAge1xuICBtYXJnaW46IDhweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3Y2FsZW5kYXIgaW1nIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uYm90dG9tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi50aXBzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5uZXdidG4ge1xuICBjb2xvcjogIzJGMTE1MyAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNFQkUyRjU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0VCRTJGNTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDQ2JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/viewsafety/viewsafety.page.ts":
/*!***********************************************!*\
  !*** ./src/app/viewsafety/viewsafety.page.ts ***!
  \***********************************************/
/*! exports provided: ViewsafetyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsafetyPage", function() { return ViewsafetyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");







let ViewsafetyPage = class ViewsafetyPage {
    constructor(platform, sharedservice, toastController, navController, router, httpClient, route) {
        this.platform = platform;
        this.sharedservice = sharedservice;
        this.toastController = toastController;
        this.navController = navController;
        this.router = router;
        this.httpClient = httpClient;
        this.route = route;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/safecity_report/';
        this.showList = false;
        this.showAllList = false;
        // this.platform.registerBackButtonAction(this.backButtonAction.bind(this), 500);
        this.route.queryParams.subscribe(params => {
            this.address = params["address"];
            this.pagename = params["pagename"];
            this.callFirst();
            console.log("address", this.address);
            console.log("pronoun", this.pagename);
        });
    }
    ngOnInit() {
    }
    callFirst() {
        if (this.pagename == 'safetyFilterPage') {
            this.showList = true;
            this.showAllList = false;
            console.log('pagein');
            this.getFilteredSafetyList();
        }
        else if (this.pagename == undefined) {
            this.showList = false;
            this.showAllList = true;
            console.log('pageout');
            this.getAllSafetyTipList();
        }
    }
    getAllSafetyTipList() {
        let data = new FormData();
        data.append('security_key', 'c86c38648cf225ad895f634c3dc922d09e1ca27a');
        this.sharedservice.sharedPostRequest('safecity_report/getAllSafetyTips', data).subscribe((rdata) => {
            console.log(rdata);
            this.SaftyTipList = rdata.data;
            console.log(this.SaftyTipList);
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'getAllSafetyTips', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.SaftyTipList = rdata.data;
        //     console.log(this.SaftyTipList);
        //   }, error => {
        //   });
    }
    getFilteredSafetyList() {
        let data = new FormData();
        data.append('security_key', '5c93e42352c3f75b5eb7d0b0441bb79612aa4004');
        data.append('inc_loc', this.address);
        this.sharedservice.sharedPostRequest('safecity_report/searchSafetyTips', data).subscribe((rdata) => {
            console.log(rdata);
            this.SaftyTipSearchList = rdata.data;
            if (this.SaftyTipSearchList == '') {
                this.showList = false;
                this.showAllList = true;
                this.presentToast();
                console.log('pageout');
                this.getAllSafetyTipList();
            }
            console.log(this.SaftyTipList);
        }, error => {
        }, () => {
        });
        // this.httpClient.post(this.apiUrl + 'searchSafetyTips', data)
        //   .subscribe((rdata: any) => {
        //     console.log(rdata);
        //     this.SaftyTipSearchList = rdata.data;
        //     if(this.SaftyTipSearchList == '')
        //     {
        //       this.showList = false
        //        this.showAllList = true
        //        this.presentToast()
        //       console.log('pageout')
        //       this.getAllSafetyTipList()
        //     }
        //     console.log(this.SaftyTipList);
        //   }, error => {
        //   });
    }
    safteydetail(item) {
        console.log(item);
        let navigationExtras = {
            queryParams: {
                item: item.id,
            }
        };
        this.navController.navigateForward([`viewsafteydetail`], navigationExtras);
        // this.navController.navigateForward(`/viewsafteydetail`);
    }
    safteyfilter() {
        this.navController.navigateForward(`/safetyfilter`);
    }
    close() {
        this.showList = false;
        this.showAllList = true;
        console.log('pageout');
        this.getAllSafetyTipList();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Record Not Found.',
                duration: 3000
            });
            toast.present();
        });
    }
};
ViewsafetyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewsafetyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewsafety',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewsafety.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewsafety/viewsafety.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewsafety.page.scss */ "./src/app/viewsafety/viewsafety.page.scss")).default]
    })
], ViewsafetyPage);



/***/ })

}]);
//# sourceMappingURL=viewsafety-viewsafety-module-es2015.js.map
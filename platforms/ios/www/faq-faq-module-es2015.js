(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n   <ion-back-button  icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n   </ion-buttons>\r\n    <ion-title><div class=\"ion-text-wrap\">{{title}}</div></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"faq\">\r\n    <ion-card class=\"newfaq\" *ngFor=\"let item of faqList;let i=index\">\r\n        <ion-row (click)=\"toggleGroup(i)\">\r\n          <ion-col size=\"11\" text-left >\r\n            <h5 class=\"newhead\">{{item.title}}</h5>\r\n          </ion-col>\r\n          <ion-col size=\"1\" >\r\n\t\t  <div class=\"newicon\">\r\n            <ion-icon tappable class=\"cent\" [ngClass]=\"{active: isGroupShown(i)}\" item-right [name]=\"isGroupShown(i) ? 'chevron-up-outline' : 'chevron-down-outline'\"></ion-icon>\r\n\t\t\t</div>\r\n          </ion-col>\r\n        </ion-row>\r\n     \r\n\r\n      <div *ngIf=\"isGroupShown(i)\" >\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n\t\t  <div class=\"newcontentin\" [innerHTML]= \"item.content\">\r\n<!-- <p>{{item.content}}</p> -->\r\n\r\n   </div>\r\n          </ion-col>\r\n        </ion-row>\r\n   </div>\r\n </ion-card>\r\n    </div>\r\n\t<div class=\"newbottom\">\r\n\t<ion-row>\r\n          <ion-col size=\"12\">\r\n\t<p>{{'for_more_info' | translate}} <span><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://safecity.in/\">safecity.in</a></span></p>\r\n\t </ion-col>\r\n        </ion-row>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/faq/faq-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/faq/faq.page.ts");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "./src/app/faq/faq.module.ts":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq.page */ "./src/app/faq/faq.page.ts");








let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_6__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_7__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/faq/faq.page.scss":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\na {\n  color: #592D8D;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 80px;\n  padding-right: 80px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newfaq {\n  box-shadow: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  padding: 12px 20px 12px 20px;\n  margin-top: 0;\n}\n\n.newhead {\n  font-size: 17px;\n  font-weight: 400;\n  color: #292020;\n  margin-top: 0;\n}\n\n.newhead h5 {\n  font-size: 17px;\n  font-weight: 500;\n  color: #292020;\n}\n\n.faq {\n  width: 100%;\n  margin-top: 25px;\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --border-width: 0 0 0 0;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newcontent {\n  width: 100%;\n  height: auto;\n}\n\n.newicon ion-icon {\n  margin-top: 2px;\n  font-size: 18px;\n}\n\n.newicon {\n  text-align: right;\n  color: #292020;\n}\n\n.item-interactive.item-has-focus {\n  --highlight-background: transparent;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.newcontentin {\n  margin-bottom: 26px;\n  width: 100%;\n}\n\n.newfaq h4 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  color: #220E0E;\n  line-height: 24px;\n  margin-top: 0;\n  font-weight: 400;\n  margin-bottom: 1px;\n}\n\n.newfaq {\n  width: 100%;\n  height: auto;\n  margin-bottom: 12px;\n}\n\n.newcontentin p {\n  height: auto;\n  font-size: 16px;\n  color: #220E0E;\n  line-height: 24px;\n  margin-top: 0;\n  padding-left: 8px;\n}\n\n.newbottom {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 0 15px;\n}\n\n.newbottom p {\n  width: 100%;\n  height: auto;\n  float: left;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 500;\n  margin-bottom: 45px;\n}\n\n.newbottom span {\n  color: #592D8D;\n  font-size: 16px;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9mYXEvZmFxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBRUEsY0FBQTtBQ0hBOztBRE9BO0VBSUEsOENBQUE7QUNMQTs7QURTQTtFQUVBLHVCQUFBO0FDUEE7O0FEVUE7RUFFQSxxQkFBQTtBQ1JBOztBRFVBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNSSjs7QURVQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDUkE7O0FEV0E7RUFDQSxjQUFBO0FDUkE7O0FEV0E7RUFDQSxnQkFBQTtBQ1JBOztBRFlBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRFlDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRFlDO0VBQ0QsY0FBQTtBQ1RBOztBRFlBO0VBQ0EsZ0JBQUE7QUNUQTs7QURZQTtFQUVDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDRyxxQkFBQTtVQUFBLG9CQUFBO0VBQ0gsNEJBQUE7RUFDQSxhQUFBO0FDVkQ7O0FEY0M7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1pEOztBRGVDO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2JEOztBRGlCQztFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ2ZEOztBRG1CQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLHNCQUFBO0VBQ0Qsd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0FDakJBOztBRG9CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDbEJBOztBRHVCQTtFQUVBLGVBQUE7RUFDQSxlQUFBO0FDckJBOztBRHdCQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQ3RCQTs7QUR5QkE7RUFDQSxtQ0FBQTtBQ3RCQTs7QUQwQkE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ3hCQTs7QUQyQkE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7QUN6QkE7O0FENEJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMxQkE7O0FENkJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQzNCQTs7QUQ4QkE7RUFHQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQzdCQTs7QURnQ0E7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDOUJBOztBRGlDQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUMvQkE7O0FEa0NBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ2hDQSIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuYVxyXG57XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbn1cclxuXHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4ubmV3ZmFxXHJcblx0e1xyXG5cdGJveC1zaGFkb3c6bm9uZTtcclxuXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci1yYWRpdXM6MDtcclxuXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcblx0cGFkZGluZzoxMnB4IDIwcHggMTJweCAyMHB4O1xyXG5cdG1hcmdpbi10b3A6MDtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0Lm5ld2hlYWRcclxuXHR7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0bWFyZ2luLXRvcDowO1xyXG5cdH1cclxuXHRcclxuXHQubmV3aGVhZCBoNVxyXG5cdHtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0LmZhcVxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdG1hcmdpbi10b3A6MjVweDtcclxuXHR9XHJcblx0XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDowO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6bm9uZTtcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcblxyXG59XHJcblxyXG5cclxuLm5ld2ljb24gaW9uLWljb25cclxue1xyXG5tYXJnaW4tdG9wOjJweDtcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcbi5uZXdpY29uXHJcbntcclxudGV4dC1hbGlnbjpyaWdodDtcclxuY29sb3I6IzI5MjAyMDtcclxufVxyXG5cclxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXN7XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLm5ld2xpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpblxyXG57XHJcbm1hcmdpbi1ib3R0b206MjZweDtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuLm5ld2ZhcSBoNFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzIyMEUwRTtcclxubGluZS1oZWlnaHQ6MjRweDtcclxubWFyZ2luLXRvcDowO1xyXG5mb250LXdlaWdodDo0MDA7XHJcbm1hcmdpbi1ib3R0b206MXB4O1xyXG59XHJcblxyXG4ubmV3ZmFxXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi1ib3R0b206MTJweDtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpbiBwXHJcbntcclxuXHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzIyMEUwRTtcclxubGluZS1oZWlnaHQ6MjRweDtcclxubWFyZ2luLXRvcDowO1xyXG5wYWRkaW5nLWxlZnQ6OHB4O1xyXG59XHJcblxyXG4ubmV3Ym90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG59XHJcblxyXG4ubmV3Ym90dG9tIHBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxuZm9udC1zaXplOjE4cHg7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxubWFyZ2luLWJvdHRvbTo0NXB4O1xyXG59XHJcblxyXG4ubmV3Ym90dG9tIHNwYW5cclxue1xyXG5jb2xvcjojNTkyRDhEO1xyXG5mb250LXNpemU6MTZweDtcclxudGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxufVxyXG5cdCIsImhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubmV3ZmFxIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubmV3aGVhZCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdoZWFkIGg1IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI5MjAyMDtcbn1cblxuLmZhcSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDowO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3aWNvbiBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3aWNvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzI5MjAyMDtcbn1cblxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXMge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm5ld2xpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3Y29udGVudGluIHtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdmYXEgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4ubmV3ZmFxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm5ld2NvbnRlbnRpbiBwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5uZXdib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3Ym90dG9tIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuLm5ld2JvdHRvbSBzcGFuIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/faq/faq.page.ts":
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





let FaqPage = class FaqPage {
    constructor(httpClient, sharedservice, sanitizer) {
        this.httpClient = httpClient;
        this.sharedservice = sharedservice;
        this.sanitizer = sanitizer;
        this.shownGroup = false;
    }
    ngOnInit() {
        this.getFAQList();
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
    getFAQList() {
        let data = new FormData();
        data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        data.append('type', 'faq');
        data.append('content_for', 'mobile');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe((rdata) => {
            console.log(rdata);
            this.faqList = rdata.data;
            for (var i = 0; i < this.faqList.length; i++) {
                this.faqList[i].content = this.sanitizer.bypassSecurityTrustHtml(this.faqList[i].content);
            }
            this.title = rdata.title;
            console.log("Faq list", this.faqList);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
};
FaqPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.page.scss */ "./src/app/faq/faq.page.scss")).default]
    })
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=faq-faq-module-es2015.js.map
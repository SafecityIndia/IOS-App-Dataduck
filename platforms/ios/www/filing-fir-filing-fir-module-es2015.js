(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filing-fir-filing-fir-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filing-fir/filing-fir.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filing-fir/filing-fir.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n   <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n  </ion-buttons>\n  <ion-title><div class=\"ion-text-wrap\">{{title}}</div></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"faq\">\n    <ion-card class=\"newfirin\"   *ngFor=\"let item of firList;let i=index\">\n        <ion-row (click)=\"toggleGroup(i)\">\n          <ion-col size=\"11\" text-left >\n            <h5 class=\"newhead\">{{item.title}}</h5>\n          </ion-col>\n          <ion-col size=\"1\" >\n\t\t  <div class=\"newicon\">\n            <ion-icon tappable class=\"cent\" [ngClass]=\"{active: isGroupShown(i)}\" item-right [name]=\"isGroupShown(i) ? 'chevron-up-outline' : 'chevron-down-outline'\"></ion-icon>\n\t\t\t</div>\n          </ion-col>\n        </ion-row>\n     \n\n      <div *ngIf=\"isGroupShown(i)\" >\n        <ion-row>\n          <ion-col size=\"12\" >\n\t\t  <!--  -->\n\t\t  <!-- <p>{{item.content}}</p> -->\n\t\t  <div class=\"newcontentin\" [innerHTML]= \"item.content\">\n\n   </div>\n          </ion-col>\n        </ion-row>\n   </div>\n </ion-card>\n    </div>\n\t\t<div class=\"newbottom\">\n\t<ion-row>\n          <ion-col size=\"12\">\n\t<p>{{'for_more_info' | translate}} <span><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://safecity.in/\">safecity.in</a></span></p>\n\t </ion-col>\n        </ion-row>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/filing-fir/filing-fir-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/filing-fir/filing-fir-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FilingFIRPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilingFIRPageRoutingModule", function() { return FilingFIRPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filing_fir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filing-fir.page */ "./src/app/filing-fir/filing-fir.page.ts");




const routes = [
    {
        path: '',
        component: _filing_fir_page__WEBPACK_IMPORTED_MODULE_3__["FilingFIRPage"]
    }
];
let FilingFIRPageRoutingModule = class FilingFIRPageRoutingModule {
};
FilingFIRPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilingFIRPageRoutingModule);



/***/ }),

/***/ "./src/app/filing-fir/filing-fir.module.ts":
/*!*************************************************!*\
  !*** ./src/app/filing-fir/filing-fir.module.ts ***!
  \*************************************************/
/*! exports provided: FilingFIRPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilingFIRPageModule", function() { return FilingFIRPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filing_fir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filing-fir-routing.module */ "./src/app/filing-fir/filing-fir-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _filing_fir_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filing-fir.page */ "./src/app/filing-fir/filing-fir.page.ts");








let FilingFIRPageModule = class FilingFIRPageModule {
};
FilingFIRPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filing_fir_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilingFIRPageRoutingModule"]
        ],
        declarations: [_filing_fir_page__WEBPACK_IMPORTED_MODULE_7__["FilingFIRPage"]]
    })
], FilingFIRPageModule);



/***/ }),

/***/ "./src/app/filing-fir/filing-fir.page.scss":
/*!*************************************************!*\
  !*** ./src/app/filing-fir/filing-fir.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #592D8D;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.newfirin {\n  box-shadow: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  padding: 20px 20px 10px 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newhead {\n  font-size: 17px;\n  font-weight: 400;\n  color: #292020;\n  margin-top: 0;\n}\n\n.newhead h5 {\n  font-size: 17px;\n  font-weight: 500;\n  color: #292020;\n}\n\n.faq {\n  width: 100%;\n  margin-top: 25px;\n}\n\nion-item {\n  --padding-start:0;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: none;\n  --inner-padding-end: 0;\n  --background:transparent;\n  --border-width: 0 0 0 0;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newcontent {\n  width: 100%;\n  height: auto;\n}\n\n.newicon ion-icon {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n.newicon {\n  text-align: right;\n  color: #292020;\n}\n\n.item-interactive.item-has-focus {\n  --highlight-background: transparent;\n}\n\n.newlist {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.newcontentin {\n  margin-bottom: 26px;\n  width: 100%;\n}\n\n.newcontentin p {\n  height: auto;\n  font-size: 16px;\n  color: #220E0E;\n  line-height: 24px;\n  margin-top: 0;\n  padding-left: 8px;\n}\n\n.newcontentin a {\n  text-decoration: none;\n}\n\n.newcontentin h5 {\n  width: 100%;\n  height: auto;\n  font-size: 16px;\n  color: #220E0E;\n  line-height: 24px;\n  margin-top: 0;\n  font-weight: 400;\n  margin-bottom: 0;\n  text-decoration: underline;\n}\n\n.newbottom {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 0 15px;\n}\n\n.newbottom p {\n  width: 100%;\n  height: auto;\n  float: left;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 500;\n  margin-bottom: 45px;\n}\n\n.newbottom span {\n  color: #592D8D;\n  font-size: 16px;\n  text-decoration: underline;\n}\n\n.newcontentin h4 {\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n  color: #292020;\n  font-size: 16px;\n  line-height: 24px;\n  background-image: url(/assets/images/icons/dot.svg);\n  background-size: 5px;\n  background-repeat: no-repeat;\n  background-position: 4px 7px;\n  padding-left: 20px;\n  margin-bottom: 8px;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9maWxpbmctZmlyL2ZpbGluZy1maXIucGFnZS5zY3NzIiwic3JjL2FwcC9maWxpbmctZmlyL2ZpbGluZy1maXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURLQTtFQUlBLDhDQUFBO0FDSEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURRQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDTko7O0FEUUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ05BOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURVQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVQztFQUNELGNBQUE7QUNQQTs7QURVQTtFQUNBLGdCQUFBO0FDUEE7O0FEVUE7RUFFQyxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0cscUJBQUE7VUFBQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0gsYUFBQTtFQUNBLGdCQUFBO0FDUkQ7O0FEV0M7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1REOztBRFlDO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1ZEOztBRGNDO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FDWkQ7O0FEZ0JBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Msc0JBQUE7RUFDRCx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUNkQTs7QURpQkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQ2ZBOztBRG9CQTtFQUVBLGVBQUE7RUFDQSxlQUFBO0FDbEJBOztBRHFCQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQ25CQTs7QURzQkE7RUFDQSxtQ0FBQTtBQ25CQTs7QUR1QkE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBQ3JCQTs7QUR3QkE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7QUN0QkE7O0FEeUJBO0VBR0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUN4QkE7O0FEMkJBO0VBR0EscUJBQUE7QUMxQkE7O0FENkJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQzNCQTs7QUQ2QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDM0JBOztBRDhCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM1QkE7O0FEaUNBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQy9CQTs7QURrQ0E7RUFFQSxXQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNoQ0oiLCJmaWxlIjoic3JjL2FwcC9maWxpbmctZmlyL2ZpbGluZy1maXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzU5MkQ4RDtcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxuXHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG4ubmV3ZmlyaW5cclxuXHR7XHJcblx0Ym94LXNoYWRvdzpub25lO1xyXG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcblx0Ym9yZGVyLXJhZGl1czowO1xyXG5cdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XHJcblx0bWFyZ2luLXRvcDowO1xyXG5cdG1hcmdpbi1ib3R0b206MDtcclxuXHR9XHJcblx0XHJcblx0Lm5ld2hlYWRcclxuXHR7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdGNvbG9yOiMyOTIwMjA7XHJcblx0bWFyZ2luLXRvcDowO1xyXG5cdH1cclxuXHRcclxuXHQubmV3aGVhZCBoNVxyXG5cdHtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRmb250LXdlaWdodDo1MDA7XHJcblx0Y29sb3I6IzI5MjAyMDtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0LmZhcVxyXG5cdHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdG1hcmdpbi10b3A6MjVweDtcclxuXHR9XHJcblx0XHJcblxyXG5pb24taXRlbVxyXG57XHJcbi0tcGFkZGluZy1zdGFydDowO1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5ib3JkZXI6bm9uZTtcclxuIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcblxyXG59XHJcblxyXG5cclxuLm5ld2ljb24gaW9uLWljb25cclxue1xyXG5tYXJnaW4tdG9wOjNweDtcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcbi5uZXdpY29uXHJcbntcclxudGV4dC1hbGlnbjpyaWdodDtcclxuY29sb3I6IzI5MjAyMDtcclxufVxyXG5cclxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXN7XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLm5ld2xpc3Rcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpblxyXG57XHJcbm1hcmdpbi1ib3R0b206MjZweDtcclxud2lkdGg6MTAwJTtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpbiBwXHJcbntcclxuXHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzIyMEUwRTtcclxubGluZS1oZWlnaHQ6MjRweDtcclxubWFyZ2luLXRvcDowO1xyXG5wYWRkaW5nLWxlZnQ6OHB4O1xyXG59XHJcblxyXG4ubmV3Y29udGVudGluIGFcclxue1xyXG5cclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi5uZXdjb250ZW50aW4gaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbmxpbmUtaGVpZ2h0OjI0cHg7XHJcbm1hcmdpbi10b3A6MDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5tYXJnaW4tYm90dG9tOjA7XHJcbnRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuLm5ld2JvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5wYWRkaW5nOjAgMTVweDtcclxufVxyXG5cclxuLm5ld2JvdHRvbSBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyNHB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbm1hcmdpbi1ib3R0b206NDVweDtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3Ym90dG9tIHNwYW5cclxue1xyXG5jb2xvcjojNTkyRDhEO1xyXG5mb250LXNpemU6MTZweDtcclxudGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxufVxyXG5cclxuLm5ld2NvbnRlbnRpbiBoNFxyXG57XHJcbndpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMjkyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDVweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0cHggN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cdCIsImhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm5ld2ZpcmluIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3aGVhZCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uZXdoZWFkIGg1IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI5MjAyMDtcbn1cblxuLmZhcSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDowO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmV3aWNvbiBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmV3aWNvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzI5MjAyMDtcbn1cblxuLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXMge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm5ld2xpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3Y29udGVudGluIHtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdjb250ZW50aW4gcCB7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ubmV3Y29udGVudGluIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uZXdjb250ZW50aW4gaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uZXdib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubmV3Ym90dG9tIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuLm5ld2JvdHRvbSBzcGFuIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uZXdjb250ZW50aW4gaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2RvdC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNHB4IDdweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/filing-fir/filing-fir.page.ts":
/*!***********************************************!*\
  !*** ./src/app/filing-fir/filing-fir.page.ts ***!
  \***********************************************/
/*! exports provided: FilingFIRPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilingFIRPage", function() { return FilingFIRPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





let FilingFIRPage = class FilingFIRPage {
    constructor(httpClient, sharedservice, sanitizer) {
        this.httpClient = httpClient;
        this.sharedservice = sharedservice;
        this.sanitizer = sanitizer;
        this.shownGroup = false;
    }
    ngOnInit() {
        this.getIPCList();
    }
    getIPCList() {
        let data = new FormData();
        data.append('security_key', '8140c7e293aaa1c933b29b53a2a9140cf176dcfd');
        data.append('country_id', localStorage.getItem('Country_id'));
        data.append('client_id', localStorage.getItem('Client_id'));
        data.append('lang_id', localStorage.getItem('Lang_id'));
        data.append('type', 'fir');
        data.append('content_for', 'mobile');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe((rdata) => {
            console.log(rdata);
            this.firList = rdata.data;
            for (var i = 0; i < this.firList.length; i++) {
                this.firList[i].content = this.sanitizer.bypassSecurityTrustHtml(this.firList[i].content);
            }
            this.title = rdata.title;
            console.log("fir list", this.firList);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
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
};
FilingFIRPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
FilingFIRPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filing-fir',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filing-fir.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filing-fir/filing-fir.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filing-fir.page.scss */ "./src/app/filing-fir/filing-fir.page.scss")).default]
    })
], FilingFIRPage);



/***/ })

}]);
//# sourceMappingURL=filing-fir-filing-fir-module-es2015.js.map
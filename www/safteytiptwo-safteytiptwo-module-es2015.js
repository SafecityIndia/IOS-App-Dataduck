(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safteytiptwo-safteytiptwo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytiptwo/safteytiptwo.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/safteytiptwo/safteytiptwo.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n  <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/safteytipone' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n   </ion-buttons>\r\n    <ion-title><div class=\"ion-text-wrap\">Submit a Safety Tip</div></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"safteytipone\">\r\n<ion-row >\r\n      <ion-col size=\"12\">\r\n<div class=\"newsafteytipone\">\r\n<h5>{{'map_move_pin' | translate }}:</h5>\r\n<div #map id=\"map\"></div>\r\n  </div>\r\n    </ion-col>\r\n   </ion-row>\r\n   </div>\r\n   <ion-row>\r\n     <ion-col col-12>\r\n\r\n<ion-button expand=\"full\" shape=\"round\"  class=\"safebtnin\" (click)=\"safetytip()\">{{'next' | translate }}</ion-button>\r\n  </ion-col>\r\n   </ion-row>\r\n</ion-content>\r\n <!-- <div class=\"bottom\"> -->\r\n\r\n<!-- </div> -->");

/***/ }),

/***/ "./src/app/safteytiptwo/safteytiptwo-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/safteytiptwo/safteytiptwo-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SafteytiptwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafteytiptwoPageRoutingModule", function() { return SafteytiptwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _safteytiptwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safteytiptwo.page */ "./src/app/safteytiptwo/safteytiptwo.page.ts");




const routes = [
    {
        path: '',
        component: _safteytiptwo_page__WEBPACK_IMPORTED_MODULE_3__["SafteytiptwoPage"]
    }
];
let SafteytiptwoPageRoutingModule = class SafteytiptwoPageRoutingModule {
};
SafteytiptwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SafteytiptwoPageRoutingModule);



/***/ }),

/***/ "./src/app/safteytiptwo/safteytiptwo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/safteytiptwo/safteytiptwo.module.ts ***!
  \*****************************************************/
/*! exports provided: SafteytiptwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafteytiptwoPageModule", function() { return SafteytiptwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _safteytiptwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safteytiptwo-routing.module */ "./src/app/safteytiptwo/safteytiptwo-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _safteytiptwo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./safteytiptwo.page */ "./src/app/safteytiptwo/safteytiptwo.page.ts");








let SafteytiptwoPageModule = class SafteytiptwoPageModule {
};
SafteytiptwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _safteytiptwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SafteytiptwoPageRoutingModule"]
        ],
        declarations: [_safteytiptwo_page__WEBPACK_IMPORTED_MODULE_7__["SafteytiptwoPage"]]
    })
], SafteytiptwoPageModule);



/***/ }),

/***/ "./src/app/safteytiptwo/safteytiptwo.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/safteytiptwo/safteytiptwo.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\nion-content #map {\n  height: 60%;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.bottom {\n  width: 100%;\n  bottom: 50px;\n  height: auto;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n}\n\n.safteytipone {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n}\n\n.red {\n  color: #F71313;\n}\n\n.newsafteytipone {\n  width: 100%;\n  height: auto;\n  padding: 0 23px;\n  margin-bottom: 10px;\n  text-align: left;\n  color: #220E0E;\n  margin-top: 0;\n}\n\n.newsafteytipone p {\n  width: 100%;\n  height: auto;\n  line-height: 19px;\n  font-size: 14px;\n  color: #5D5656;\n  margin-top: 10px;\n}\n\n.newsafteytipone h4 {\n  width: 100%;\n  height: auto;\n  color: #592D8D;\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 38px;\n}\n\n.newsafteytipone h5 {\n  width: 100%;\n  height: auto;\n  line-height: 22px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #2F1153;\n  float: left;\n  margin-bottom: 30px;\n}\n\n.safebtnin {\n  color: #ffffff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 85%;\n  --box-shadow:none;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: uppercase;\n  margin: 35px auto 35px;\n  text-align: center;\n}\n\n#map {\n  width: 100%;\n  min-height: 415px;\n  height: 60%;\n}\n\n.red {\n  color: #F71313;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9zYWZ0ZXl0aXB0d28vc2FmdGV5dGlwdHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2FmdGV5dGlwdHdvL3NhZnRleXRpcHR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRixrQkFBQTtBQ0ZBOztBREtBO0VBRUEsU0FBQTtBQ0hBOztBRE9BO0VBSUEsOENBQUE7QUNMQTs7QURRSTtFQUNJLFdBQUE7QUNMUjs7QURTQTtFQUVBLHVCQUFBO0FDUEE7O0FEVUE7RUFFQSxxQkFBQTtBQ1JBOztBRFVBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsb0JBQUE7QUNUSjs7QURXQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDVEE7O0FEYUE7RUFDQSxjQUFBO0FDVkE7O0FEYUE7RUFDQSxnQkFBQTtBQ1ZBOztBRGNBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1pKOztBRGNDO0VBRUQsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1pKOztBRGFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNaQTs7QURlQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNiQTs7QURnQkE7RUFFQSxjQUFBO0FDZEE7O0FEaUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDZkE7O0FEa0JBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNoQkE7O0FEbUJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDakJBOztBRG9CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDbEJBOztBRHNCQTtFQUdBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtBQ3RCQTs7QUR5QkE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDdEJBOztBRDJCQTtFQUVBLGNBQUE7QUN6QkEiLCJmaWxlIjoic3JjL2FwcC9zYWZ0ZXl0aXB0d28vc2FmdGV5dGlwdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIC5oZWFkZXItbWQgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAjbWFwIHtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5pb24tdGl0bGVcclxue1xyXG5jb2xvcjojMkYxMTUzO1xyXG5mb250LXNpemU6MjBweDtcclxubGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuLmJvdHRvbVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmJvdHRvbTo1MHB4O1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLnNhZnRleXRpcG9uZVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5yZWRcclxue1xyXG5jb2xvcjojRjcxMzEzO1xyXG59XHJcblxyXG4ubmV3c2FmdGV5dGlwb25lXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnBhZGRpbmc6MCAyM3B4O1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiMyMjBFMEU7XHJcbm1hcmdpbi10b3A6MDtcclxufVxyXG5cclxuLm5ld3NhZnRleXRpcG9uZSBwXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmxpbmUtaGVpZ2h0OjE5cHg7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5jb2xvcjojNUQ1NjU2O1xyXG5tYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5uZXdzYWZ0ZXl0aXBvbmUgaDRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzU5MkQ4RDtcclxubGluZS1oZWlnaHQ6MjhweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MjJweDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbi1ib3R0b206IDM4cHg7XHJcbn1cclxuXHJcbi5uZXdzYWZ0ZXl0aXBvbmUgaDVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubGluZS1oZWlnaHQ6MjJweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5mb250LXNpemU6MThweDtcclxuY29sb3I6IzJGMTE1MztcclxuZmxvYXQ6bGVmdDtcclxubWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG5cclxuLnNhZmVidG5pblxyXG57XHJcblxyXG5jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XHJcbi0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG5mb250LXNpemU6MTZweDtcclxuaGVpZ2h0OjUwcHg7XHJcbi0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG53aWR0aDo4NSU7XHJcblx0LS1ib3gtc2hhZG93Om5vbmU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjYwcHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG5tYXJnaW46MzVweCBhdXRvIDM1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4jbWFwe1xyXG53aWR0aDoxMDAlO1xyXG5taW4taGVpZ2h0OiA0MTVweDtcclxuaGVpZ2h0OjYwJTtcclxuXHJcbn1cclxuXHJcblxyXG4ucmVkXHJcbntcclxuY29sb3I6I0Y3MTMxMztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW9uLWNvbnRlbnQgI21hcCB7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2FmdGV5dGlwb25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjRjcxMzEzO1xufVxuXG4ubmV3c2FmdGV5dGlwb25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5ld3NhZnRleXRpcG9uZSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1RDU2NTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXdzYWZ0ZXl0aXBvbmUgaDQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xufVxuXG4ubmV3c2FmdGV5dGlwb25lIGg1IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2FmZWJ0bmluIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA4NSU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDM1cHggYXV0byAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDE1cHg7XG4gIGhlaWdodDogNjAlO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNGNzEzMTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/safteytiptwo/safteytiptwo.page.ts":
/*!***************************************************!*\
  !*** ./src/app/safteytiptwo/safteytiptwo.page.ts ***!
  \***************************************************/
/*! exports provided: SafteytiptwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafteytiptwoPage", function() { return SafteytiptwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let SafteytiptwoPage = class SafteytiptwoPage {
    constructor(navController, router, route) {
        this.navController = navController;
        this.router = router;
        this.route = route;
        this.infoWindows = [];
        this.markers = [];
        console.log(google);
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                console.log(this.router.getCurrentNavigation().extras.state);
                this.locality = this.router.getCurrentNavigation().extras.state.locality;
                ;
                this.landmark = this.router.getCurrentNavigation().extras.state.landmark;
                ;
                this.city = this.router.getCurrentNavigation().extras.state.city;
                ;
                this.state = this.router.getCurrentNavigation().extras.state.state;
                ;
                this.country = this.router.getCurrentNavigation().extras.state.country;
                ;
                this.lat = this.router.getCurrentNavigation().extras.state.lat;
                this.longi = this.router.getCurrentNavigation().extras.state.longi;
                this.address = this.router.getCurrentNavigation().extras.state.address;
                var data = { 'latitude': this.lat, 'longitude': this.longi, 'title': this.address };
                this.markers.push(data);
                console.log("locality", this.locality);
                console.log("landmark", this.landmark);
                console.log("city", this.city);
                console.log("state", this.state);
                console.log("country", this.country);
                console.log(this.markers);
                console.log(this.location);
                console.log(this.lat);
                console.log(this.longi);
                console.log(this.address);
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.showMap();
    }
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                draggable: true,
            });
            mapMarker.setMap(this.map);
            google.maps.event.addListener(mapMarker, 'dragend', function () {
                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong   " + markerlatlong);
                console.log("lat    " + mapMarker.getPosition().lat());
                console.log("long   " + mapMarker.getPosition().lng());
                //this.placeMarkerAndPanTo(e.latLng, this.map);
                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng());
                localStorage.setItem('lat_safety', lat);
                localStorage.setItem('longi_safety', longi);
                //code for getting formatted address from the selected latitude and longitude 
                var geocoder = new google.maps.Geocoder();
                const latlng = {
                    lat: parseFloat(lat),
                    lng: parseFloat(longi)
                };
                geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            this.title = results[0].formatted_address;
                            localStorage.setItem('address_safety', this.title);
                            console.log(this.title);
                            //this.markers = [];
                            var title = localStorage.getItem('address_safety');
                            var lat1 = localStorage.getItem('lat_safety');
                            var longi1 = localStorage.getItem('longi_safety');
                            console.log(title);
                            let position = new google.maps.LatLng(lat1, longi1);
                            mapMarker.position = position,
                                mapMarker.title = title,
                                mapMarker.latitude = lat1,
                                mapMarker.longitude = longi1,
                                mapMarker.animation = 'DROP',
                                mapMarker.draggable = true,
                                mapMarker.setMap(this.map);
                            //var self = this;
                            this.addInfoWindowToMarker(mapMarker);
                            var data = { 'latitude': lat1, 'longitude': longi1, 'title': title };
                            this.markers = data;
                            console.log('3', this.markers);
                        }
                        else {
                            window.alert("No results found");
                        }
                    }
                    else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });
            }.bind(this));
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        let infoWindowContent = '<div id="content">' +
            '<h5 id="firstHeading" class"firstHeading">' + marker.title + '</h5>' +
            '<p>Latitude: ' + marker.latitude + '</p>' +
            '<p>Longitude: ' + marker.longitude + '</p>' +
            '</div>';
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    placeMarkerAndPanTo(latLng, map) {
        new google.maps.Marker({
            position: latLng,
            map: map
        });
        map.panTo(latLng);
    }
    showMap() {
        console.log('hi');
        console.log(this.lat);
        console.log(this.longi);
        const location = new google.maps.LatLng(this.lat, this.longi);
        const options = {
            center: location,
            zoom: 15,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            gestureHandling: 'cooperative',
            fullscreenControl: false
        };
        console.log(options);
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        // this.map.addListener('click', (e) => {
        //   console.log('clicked',e)
        //   this.placeMarkerAndPanTo(e.latLng, this.map);
        //   var lat= JSON.stringify(e.latLng.lat());
        //   var longi = JSON.stringify(e.latLng.lng());
        //   //code for getting formatted address from the selected latitude and longitude 
        //   var geocoder = new google.maps.Geocoder();
        //   const latlng = {
        //     lat: parseFloat(lat),
        //     lng: parseFloat(longi)
        //   };
        //   geocoder.geocode(
        //     { location: latlng },
        //     (
        //       results,
        //       status
        //     ) => {
        //       if (status === "OK") {
        //         if (results[0]) {
        //          this.title =  results[0].formatted_address;
        //          localStorage.setItem('title',this.title)
        //          console.log(this.title)
        //         } else {
        //           window.alert("No results found");
        //         }
        //       } else {
        //         window.alert("Geocoder failed due to: " + status);
        //       }
        //     }
        //   );
        //   //this.markers = [];
        //   var title = localStorage.getItem('title')
        //   console.log(title)
        //   var data = {'latitude' : lat, 'longitude' : longi, 'title' : title}
        //   this.markers.push(data);
        //   console.log('3',this.markers)
        // this.addMarkersToMap(this.markers);
        // });
        console.log('3', this.markers);
        this.addMarkersToMap(this.markers);
    }
    safetytip() {
        let navigationExtras = {
            queryParams: {
                locality: this.locality,
                landmark: this.landmark,
                city: this.city,
                state: this.state,
                country: this.country,
            }
        };
        this.navController.navigateForward([`safteytipthree`], navigationExtras);
        // this.navController.navigateForward(`/safteytipthree`);
    }
};
SafteytiptwoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], SafteytiptwoPage.prototype, "mapRef", void 0);
SafteytiptwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-safteytiptwo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./safteytiptwo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/safteytiptwo/safteytiptwo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./safteytiptwo.page.scss */ "./src/app/safteytiptwo/safteytiptwo.page.scss")).default]
    })
], SafteytiptwoPage);



/***/ })

}]);
//# sourceMappingURL=safteytiptwo-safteytiptwo-module-es2015.js.map
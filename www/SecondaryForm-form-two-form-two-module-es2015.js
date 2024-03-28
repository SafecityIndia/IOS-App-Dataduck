(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SecondaryForm-form-two-form-two-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/SecondaryForm/form-two/form-two.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SecondaryForm/form-two/form-two.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>formTwo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/SecondaryForm/form-two/form-two-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/SecondaryForm/form-two/form-two-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FormTwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTwoPageRoutingModule", function() { return FormTwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-two.page */ "./src/app/SecondaryForm/form-two/form-two.page.ts");




const routes = [
    {
        path: '',
        component: _form_two_page__WEBPACK_IMPORTED_MODULE_3__["FormTwoPage"]
    }
];
let FormTwoPageRoutingModule = class FormTwoPageRoutingModule {
};
FormTwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormTwoPageRoutingModule);



/***/ }),

/***/ "./src/app/SecondaryForm/form-two/form-two.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/SecondaryForm/form-two/form-two.module.ts ***!
  \***********************************************************/
/*! exports provided: FormTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTwoPageModule", function() { return FormTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-two-routing.module */ "./src/app/SecondaryForm/form-two/form-two-routing.module.ts");
/* harmony import */ var _form_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-two.page */ "./src/app/SecondaryForm/form-two/form-two.page.ts");







let FormTwoPageModule = class FormTwoPageModule {
};
FormTwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormTwoPageRoutingModule"]
        ],
        declarations: [_form_two_page__WEBPACK_IMPORTED_MODULE_6__["FormTwoPage"]]
    })
], FormTwoPageModule);



/***/ }),

/***/ "./src/app/SecondaryForm/form-two/form-two.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/SecondaryForm/form-two/form-two.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NlY29uZGFyeUZvcm0vZm9ybS10d28vZm9ybS10d28ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/SecondaryForm/form-two/form-two.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/SecondaryForm/form-two/form-two.page.ts ***!
  \*********************************************************/
/*! exports provided: FormTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTwoPage", function() { return FormTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FormTwoPage = class FormTwoPage {
    constructor() { }
    ngOnInit() {
    }
};
FormTwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-two',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-two.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/SecondaryForm/form-two/form-two.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-two.page.scss */ "./src/app/SecondaryForm/form-two/form-two.page.scss")).default]
    })
], FormTwoPage);



/***/ })

}]);
//# sourceMappingURL=SecondaryForm-form-two-form-two-module-es2015.js.map
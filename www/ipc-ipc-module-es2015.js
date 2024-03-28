(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ipc-ipc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ipc/ipc.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ipc/ipc.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n   <ion-buttons slot=\"start\" >\r\n   <ion-back-button defaultHref='/tabs/home' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title><div class=\"ion-text-wrap\">{{title}}</div></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t  <div class=\"newipc\">\r\n<ion-item lines=\"none\" *ngFor=\"let item of ipcList;let i=index\" class=\"boxarea\" (click)= \"domestic(item.content,item.title)\">\r\n  <ion-label>{{item.title}}</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<!-- <ion-item lines=\"none\" class=\"newcard\" (click)= \"online()\">\r\n  <ion-label>Online Harassment</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"sexualassault()\">\r\n  <ion-label>Rape/Sexual Assault</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"catcalls()\">\r\n  <ion-label>Catcalls / Whistles \r\n</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"staking()\">\r\n  <ion-label>Stalking</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"ogling()\">\r\n  <ion-label>Ogling/Facial Expressions/Staring</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"taking()\">\r\n  <ion-label>Taking photos without permission</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"indecent()\">\r\n  <ion-label>Indecent exposure/Masturbation in public</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"touching()\">\r\n  <ion-label>Touching/Groping</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"commenting()\">\r\n  <ion-label>Commenting</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"sexualinvite()\">\r\n  <ion-label>Sexual Invites</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"chain()\">\r\n  <ion-label>Chain Snatching/Robbery</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" (click)= \"human()\">\r\n  <ion-label>Human Trafficking</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item>\r\n<ion-item lines=\"none\" class=\"newcard\" >\r\n  <ion-label>Others</ion-label>\r\n<img slot=\"end\" src=\"assets/images/icons/rightarrow.svg\"/>\r\n</ion-item> -->\r\n\t<ion-row>\r\n          <ion-col size=\"12\">\r\n\t\t  <div class=\"newbottom\">\r\n\t<p>{{'for_more_info' | translate}} <span><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://safecity.in/\">safecity.in</a></span></p>\r\n\t</div>\r\n\t </ion-col>\r\n        </ion-row>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/ipc/ipc-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ipc/ipc-routing.module.ts ***!
  \*******************************************/
/*! exports provided: IpcPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcPageRoutingModule", function() { return IpcPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ipc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ipc.page */ "./src/app/ipc/ipc.page.ts");




const routes = [
    {
        path: '',
        component: _ipc_page__WEBPACK_IMPORTED_MODULE_3__["IpcPage"]
    }
];
let IpcPageRoutingModule = class IpcPageRoutingModule {
};
IpcPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IpcPageRoutingModule);



/***/ }),

/***/ "./src/app/ipc/ipc.module.ts":
/*!***********************************!*\
  !*** ./src/app/ipc/ipc.module.ts ***!
  \***********************************/
/*! exports provided: IpcPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcPageModule", function() { return IpcPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ipc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ipc-routing.module */ "./src/app/ipc/ipc-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ipc_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ipc.page */ "./src/app/ipc/ipc.page.ts");








let IpcPageModule = class IpcPageModule {
};
IpcPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _ipc_routing_module__WEBPACK_IMPORTED_MODULE_5__["IpcPageRoutingModule"]
        ],
        declarations: [_ipc_page__WEBPACK_IMPORTED_MODULE_7__["IpcPage"]]
    })
], IpcPageModule);



/***/ }),

/***/ "./src/app/ipc/ipc.page.scss":
/*!***********************************!*\
  !*** ./src/app/ipc/ipc.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-item {\n  --padding-start: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #E1D8EB;\n  --background: transparent;\n  --inner-border-width: 0px 0px 0px 0px;\n}\n\n.newtext ion-item {\n  border-bottom: none;\n  --inner-padding-end: 0;\n  --border-width: 0 0 0px 0;\n}\n\n.newipc {\n  margin-top: 15px;\n}\n\n.boxarea {\n  --padding-start: 15px;\n  margin-bottom: 0;\n  --min-height: 66px;\n  font-size: 17px;\n  font-weight: 400;\n  padding: 0 10px;\n}\n\n.boxarea ion-label {\n  white-space: inherit;\n  margin-top: 22px;\n  margin-bottom: 22px;\n}\n\n.newbottom {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 0 15px;\n  margin-top: 20px;\n}\n\n.newbottom p {\n  width: 100%;\n  height: auto;\n  float: left;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 500;\n  margin-bottom: 45px;\n}\n\n.newbottom span {\n  color: #592D8D;\n  font-size: 16px;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9pcGMvaXBjLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaXBjL2lwYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtBQ0FBOztBREdBO0VBRUEsU0FBQTtBQ0RBOztBREtBO0VBSUEsOENBQUE7QUNIQTs7QURPQTtFQUVBLHVCQUFBO0FDTEE7O0FEUUE7RUFFQSxxQkFBQTtBQ05BOztBRFFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0osZ0JBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURRQTtFQUVBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUNBLGNBQUE7QUNOQTs7QURTQTtFQUNBLGdCQUFBO0FDTkE7O0FEU0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEUUM7RUFFRCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQ05BOztBRFFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDTkE7O0FEU0E7RUFHRSxnQkFBQTtBQ1JGOztBRFdFO0VBRUUscUJBQUE7RUFDQyxnQkFBQTtFQUNILGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0ksZUFBQTtBQ1ROOztBRFdFO0VBRUYsb0JBQUE7RUFDQSxnQkFBQTtFQUNJLG1CQUFBO0FDVEo7O0FEWUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWQTs7QURhQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNYQTs7QURjQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNaQSIsImZpbGUiOiJzcmMvYXBwL2lwYy9pcGMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuXHJcbmlvbi1oZWFkZXJcclxue1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbmNvbG9yOiMyRjExNTM7XHJcbmZvbnQtc2l6ZToyMHB4O1xyXG5sZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmJhY2tidXR0b25cclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XHJcbndpZHRoOjI1cHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmhlaWdodDoyNXB4O1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDowO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0aW9uLWl0ZW1cclxue1xyXG4tLXBhZGRpbmctc3RhcnQ6IDA7XHJcbm1hcmdpbi1ib3R0b206MDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmJvcmRlci10b3A6bm9uZTtcclxuYm9yZGVyLWxlZnQ6bm9uZTtcclxuYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNFMUQ4RUI7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cdFxyXG4ubmV3dGV4dCBpb24taXRlbVxyXG57XHJcbmJvcmRlci1ib3R0b206bm9uZTtcclxuLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxufVxyXG5cclxuLm5ld2lwY1xyXG5cdFx0e1xyXG5cdFx0XHJcblx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5ib3hhcmVhXHJcbntcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuXHQgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdC0tbWluLWhlaWdodDogNjZweDtcclxuXHRcdGZvbnQtc2l6ZToxN3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdFx0ICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdH1cclxuXHRcdC5ib3hhcmVhIGlvbi1sYWJlbFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbm1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4ubmV3Ym90dG9tXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZsb2F0OmxlZnQ7XHJcbnBhZGRpbmc6MCAxNXB4O1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5uZXdib3R0b20gcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mbG9hdDpsZWZ0O1xyXG5mb250LXNpemU6MThweDtcclxubGluZS1oZWlnaHQ6MjRweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5tYXJnaW4tYm90dG9tOjQ1cHg7XHJcbn1cclxuXHJcbi5uZXdib3R0b20gc3BhblxyXG57XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG50ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblx0IiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRDhFQjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLm5ld3RleHQgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuXG4ubmV3aXBjIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJveGFyZWEge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC0tbWluLWhlaWdodDogNjZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5ib3hhcmVhIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4ubmV3Ym90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm5ld2JvdHRvbSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbi5uZXdib3R0b20gc3BhbiB7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ipc/ipc.page.ts":
/*!*********************************!*\
  !*** ./src/app/ipc/ipc.page.ts ***!
  \*********************************/
/*! exports provided: IpcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcPage", function() { return IpcPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");






let IpcPage = class IpcPage {
    constructor(navController, sharedservice, router, httpClient) {
        this.navController = navController;
        this.sharedservice = sharedservice;
        this.router = router;
        this.httpClient = httpClient;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/faq/getClientResourceList/';
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
        data.append('type', 'legal');
        data.append('content_for', 'mobile');
        this.sharedservice.presentLoadingDefault();
        this.sharedservice.sharedPostRequest('faq/getClientResourceList', data).subscribe((rdata) => {
            console.log(rdata);
            this.ipcList = rdata.data;
            this.title = rdata.title;
            console.log("ipc list", this.ipcList);
        }, error => {
            this.sharedservice.loaderDismiss();
        }, () => {
            this.sharedservice.loaderDismiss();
        });
    }
    domestic(content, title) {
        console.log(content);
        let navigationExtras = {
            state: {
                content: content,
                title: title
            }
        };
        this.router.navigate(['/domesticviolence'], navigationExtras);
        //this.navController.navigateForward(`/domesticviolence`);
    }
    online() {
        this.navController.navigateForward(`/onlineipc`);
    }
    sexualassault() {
        this.navController.navigateForward(`/sexualassaultipc`);
    }
    ogling() {
        this.navController.navigateForward(`/oglingipc`);
    }
    taking() {
        this.navController.navigateForward(`/takingphotoipc`);
    }
    commenting() {
        this.navController.navigateForward(`/commentingipc`);
    }
    indecent() {
        this.navController.navigateForward(`/indecentipc`);
    }
    touching() {
        this.navController.navigateForward(`/touchingipc`);
    }
    sexualinvite() {
        this.navController.navigateForward(`/sexualinvitesipc`);
    }
    chain() {
        this.navController.navigateForward(`/chainsnachtingipc`);
    }
    human() {
        this.navController.navigateForward(`/humanipc`);
    }
    catcalls() {
        this.navController.navigateForward(`/catcallsipc`);
    }
    staking() {
        this.navController.navigateForward(`/stakingipc`);
    }
};
IpcPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
IpcPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ipc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ipc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ipc/ipc.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ipc.page.scss */ "./src/app/ipc/ipc.page.scss")).default]
    })
], IpcPage);



/***/ })

}]);
//# sourceMappingURL=ipc-ipc-module-es2015.js.map
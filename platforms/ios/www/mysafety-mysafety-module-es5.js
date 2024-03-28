function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysafety-mysafety-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafety/mysafety.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mysafety/mysafety.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMysafetyMysafetyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">{{'safety_shared_by_me' | translate }}</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"notfoundin\" *ngIf = \"safetyTipList == ''\">\n    <p>{{'No_safety_tips_found' | translate}}</p>\n   </div>\n\n  <div class=\"tips\">\n    <ion-row *ngIf = \"safetyTipList !=''\">\n      <ion-col size=\"12\">\n        <ion-card class=\"newcardin\" tappable (click)=\"detail(item.id)\" *ngFor=\"let item of safetyTipList\">\n          <ion-card-header>\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">{{item.safety_tip_title}}</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3 *ngIf = \"showCity\">{{'home_at' | translate}} {{item.city}}</h3>\n                  <h3 *ngIf = \"showDiv\">{{'home_at' | translate}} {{item.exct_lcn}}</h3>\n                </div>\n                </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>{{item.show_date}} {{item.show_time}}</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p>{{item.show_disc}}… <span>{{'read_more' | translate }}</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-fab vertical=\"bottom\" class=\"newfab\" (click)=\"mysafety()\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/mysafety/mysafety-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/mysafety/mysafety-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MysafetyPageRoutingModule */

  /***/
  function srcAppMysafetyMysafetyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysafetyPageRoutingModule", function () {
      return MysafetyPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mysafety_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mysafety.page */
    "./src/app/mysafety/mysafety.page.ts");

    var routes = [{
      path: '',
      component: _mysafety_page__WEBPACK_IMPORTED_MODULE_3__["MysafetyPage"]
    }];

    var MysafetyPageRoutingModule = /*#__PURE__*/_createClass(function MysafetyPageRoutingModule() {
      _classCallCheck(this, MysafetyPageRoutingModule);
    });

    MysafetyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MysafetyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/mysafety/mysafety.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/mysafety/mysafety.module.ts ***!
    \*********************************************/

  /*! exports provided: MysafetyPageModule */

  /***/
  function srcAppMysafetyMysafetyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysafetyPageModule", function () {
      return MysafetyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _mysafety_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mysafety-routing.module */
    "./src/app/mysafety/mysafety-routing.module.ts");
    /* harmony import */


    var _mysafety_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mysafety.page */
    "./src/app/mysafety/mysafety.page.ts");

    var MysafetyPageModule = /*#__PURE__*/_createClass(function MysafetyPageModule() {
      _classCallCheck(this, MysafetyPageModule);
    });

    MysafetyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mysafety_routing_module__WEBPACK_IMPORTED_MODULE_6__["MysafetyPageRoutingModule"]],
      declarations: [_mysafety_page__WEBPACK_IMPORTED_MODULE_7__["MysafetyPage"]]
    })], MysafetyPageModule);
    /***/
  },

  /***/
  "./src/app/mysafety/mysafety.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/mysafety/mysafety.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMysafetyMysafetyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.notfoundin {\n  width: 80%;\n  margin: 0 auto;\n  border-radius: 4px;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notfoundin p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 58%;\n  text-align: center;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 0;\n  padding: 10px 16px;\n}\n\n.subheading {\n  width: 100%;\n  height: auto;\n}\n\n.subheading h3 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.subheading h4 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  background-image: url(/assets/images/icons/dotlight.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 5px 4px;\n  padding-left: 28px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newfab ion-fab-button {\n  --background:#F5DE5B;\n  --color:#000;\n  --color-activated:#000;\n  --color-focused: #000;\n  --color-hover: #000;\n}\n\n.fab-vertical-bottom {\n  bottom: 94px;\n}\n\nion-fab-button ion-icon {\n  width: 1.2em;\n  height: 1.2em;\n  font-weight: 600;\n}\n\n.newarea {\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 45px;\n}\n\n.newcardin {\n  border-radius: 0;\n  box-shadow: none;\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  border-bottom: 1px solid #ddd;\n  margin-top: 22px;\n}\n\n.newcardin ion-card-title {\n  font-size: 16px;\n  color: #592D8D !important;\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n}\n\n.newcardin ion-card-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  font-size: 16px;\n  color: #592D8D !important;\n  padding: 0 0;\n}\n\n.newcardin ion-card-content {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.newcardin p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(152, 145, 145, 0.97);\n  line-height: 18px;\n}\n\n.newcardin span {\n  height: auto;\n  font-size: 14px;\n  color: #000000;\n}\n\nion-fab-button {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n}\n\n.newfab ion-fab-button {\n  --background:#F5DE5B;\n  --color:#000;\n  --color-activated:#000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n}\n\n.fab-vertical-center {\n  bottom: 105px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9teXNhZmV0eS9teXNhZmV0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL215c2FmZXR5L215c2FmZXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FESUE7RUFFSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0osbUJBQUE7RUFDQSxjQUFBO0FDRkE7O0FES0E7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7QUNIQTs7QURPQTtFQUlBLDhDQUFBO0FDTEE7O0FEU0E7RUFFQSx1QkFBQTtBQ1BBOztBRFVBO0VBRUEscUJBQUE7QUNSQTs7QURVQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0FDVEo7O0FEV0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVEE7O0FEWUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEYUM7RUFFSSxXQUFBO0VBQ0QsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURlQztFQUVELFdBQUE7RUFDQSxZQUFBO0FDYkE7O0FEaUJDO0VBRUQsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGtCQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDaEJKOztBRHFCQTtFQUVDLG9CQUFBO0VBQ0EsWUFBQTtFQUNJLHNCQUFBO0VBQ0QscUJBQUE7RUFDQSxtQkFBQTtBQ25CSjs7QURxQkU7RUFDRSxZQUFBO0FDbEJKOztBRHNCQTtFQUVDLFlBQUE7RUFDRyxhQUFBO0VBQ0gsZ0JBQUE7QUNwQkQ7O0FEc0JBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCQTs7QUR1QkE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNDLHVCQUFBO1VBQUEsc0JBQUE7RUFDRyxxQkFBQTtVQUFBLG9CQUFBO0VBQ0osNkJBQUE7RUFDQSxnQkFBQTtBQ3JCQTs7QUR1QkE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDckJBOztBRHVCQTtFQUVJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0gsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ3JCRDs7QUR3QkE7RUFFQyx3QkFBQTtVQUFBLHVCQUFBO0VBQ0csc0JBQUE7VUFBQSxxQkFBQTtBQ3RCSjs7QUR5QkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUN0QkE7O0FEeUJBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDdkJBOztBRDJCQztFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUN4QkQ7O0FEMEJDO0VBRUEsb0JBQUE7RUFDQSxZQUFBO0VBQ0ksc0JBQUE7RUFDRCxxQkFBQTtFQUNBLG1CQUFBO0VBQ0MsK0JBQUE7RUFDRCw2QkFBQTtFQUNBLDJCQUFBO0FDeEJKOztBRDJCQTtFQUVJLGFBQUE7QUN6QkoiLCJmaWxlIjoic3JjL2FwcC9teXNhZmV0eS9teXNhZmV0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG4ubm90Zm91bmRpblxyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbmJhY2tncm91bmQ6cmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuY29sb3I6cmdiYSg0MSwgMzIsIDMyLCAxKTtcclxufVxyXG5cclxuLm5vdGZvdW5kaW4gcHtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoxNHB4IDE4cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbm1hcmdpbi10b3A6IDU4JTtcclxuLy8gbWFyZ2luLWxlZnQ6IDIwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0XHJcblx0LnRpcHNcclxuXHR7XHJcblx0ICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcblx0fVxyXG5cdFxyXG5cclxuXHQuc3ViaGVhZGluZ1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcblxyXG5cdFxyXG5cdC5zdWJoZWFkaW5nIGgzXHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbndpZHRoOmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGg0XHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbndpZHRoOmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcclxuYmFja2dyb3VuZC1zaXplOjZweDtcclxuYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggNHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjhweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdmYWIgaW9uLWZhYi1idXR0b25cclxuIHtcclxuIC0tYmFja2dyb3VuZDojRjVERTVCO1xyXG4gLS1jb2xvcjojMDAwO1xyXG4gICAgIC0tY29sb3ItYWN0aXZhdGVkOiMwMDA7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xyXG5cdH1cclxuICAuZmFiLXZlcnRpY2FsLWJvdHRvbSB7XHJcbiAgICBib3R0b206IDk0cHg7XHJcbn1cclxuIFxyXG4gXHJcbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uXHJcbiB7XHJcbiB3aWR0aDogMS4yZW07XHJcbiAgICBoZWlnaHQ6IDEuMmVtO1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuIH1cclxuLm5ld2FyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMjBweDtcclxubWFyZ2luLXRvcDo0NXB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZGluXHJcbntcclxuYm9yZGVyLXJhZGl1czowO1xyXG5ib3gtc2hhZG93Om5vbmU7XHJcbndpZHRoOjEwMCU7XHJcbiBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcbm1hcmdpbi10b3A6MjJweDtcclxufVxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLXRpdGxlXHJcbntcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWhlYWRlclxyXG57XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRjb2xvcjojNTkyRDhEICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzowIDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gaW9uLWNhcmQtY29udGVudFxyXG57XHJcbiBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBwe1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE0cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6cmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcclxubGluZS1oZWlnaHQ6MThweDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBzcGFuXHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5jb2xvcjojMDAwMDAwO1xyXG5cclxufVxyXG5cclxuIGlvbi1mYWItYnV0dG9ue1xyXG4gd2lkdGg6NTBweDtcclxuIGhlaWdodDo1MHB4O1xyXG4gcG9zaXRpb246Zml4ZWQ7XHJcbiByaWdodDoxNXB4O1xyXG4gfVxyXG4gLm5ld2ZhYiBpb24tZmFiLWJ1dHRvblxyXG4ge1xyXG4gLS1iYWNrZ3JvdW5kOiNGNURFNUI7XHJcbiAtLWNvbG9yOiMwMDA7XHJcbiAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6IzAwMDtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcclxuICAgIC0tY29sb3ItaG92ZXI6ICMwMDA7XHJcblx0ICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0Y1REU1QjtcclxuIH1cclxuXHJcbi5mYWItdmVydGljYWwtY2VudGVyXHJcbntcclxuICAgIGJvdHRvbTogMTA1cHg7XHJcbn1cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubm90Zm91bmRpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmNGYwZjg7XG4gIGNvbG9yOiAjMjkyMDIwO1xufVxuXG4ubm90Zm91bmRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA1OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4udGlwcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnN1YmhlYWRpbmcgaDMge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3ViaGVhZGluZyBoNCB7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyOTIwMjA7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9kb3RsaWdodC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDZweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3ZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGNURFNUI7XG4gIC0tY29sb3I6IzAwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IzAwMDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMDAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xufVxuXG4uZmFiLXZlcnRpY2FsLWJvdHRvbSB7XG4gIGJvdHRvbTogOTRweDtcbn1cblxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uZXdhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLm5ld2NhcmRpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbi5uZXdjYXJkaW4gaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZXdjYXJkaW4gaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDA7XG59XG5cbi5uZXdjYXJkaW4gaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG59XG5cbi5uZXdjYXJkaW4gcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNDUsIDE0NSwgMC45Nyk7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3Y2FyZGluIHNwYW4ge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTVweDtcbn1cblxuLm5ld2ZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDojRjVERTVCO1xuICAtLWNvbG9yOiMwMDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiMwMDA7XG4gIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcbiAgLS1jb2xvci1ob3ZlcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0Y1REU1Qjtcbn1cblxuLmZhYi12ZXJ0aWNhbC1jZW50ZXIge1xuICBib3R0b206IDEwNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mysafety/mysafety.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/mysafety/mysafety.page.ts ***!
    \*******************************************/

  /*! exports provided: MysafetyPage */

  /***/
  function srcAppMysafetyMysafetyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MysafetyPage", function () {
      return MysafetyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var MysafetyPage = /*#__PURE__*/function () {
      function MysafetyPage(sharedservice, httpClient, navController, router) {
        _classCallCheck(this, MysafetyPage);

        this.sharedservice = sharedservice;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.showDiv = false;
        this.showCity = false;
      }

      _createClass(MysafetyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mysafety",
        value: function mysafety() {
          this.navController.navigateForward("/safteytipone");
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getSafetyTipsList();
        }
      }, {
        key: "detail",
        value: function detail(safety_Tip_id) {
          console.log("safety_tip", safety_Tip_id);
          var navigationExtras = {
            queryParams: {
              safety_tip_id: safety_Tip_id,
              pagename: 'safetyTip'
            }
          };
          this.navController.navigateForward(["/mysafetyreport"], navigationExtras);
        }
      }, {
        key: "getSafetyTipsList",
        value: function getSafetyTipsList() {
          var _this = this;

          var user_id = localStorage.getItem('userId');
          var data = new FormData();
          data.append('user_id', user_id);
          data.append('is_mobile_visibile', '1');
          this.sharedservice.sharedPostRequest_webappurl('user-safety-tips', data).subscribe(function (rdata) {
            console.log('safetyTips', rdata);
            _this.safetyTipList = rdata.data;

            for (var i = 0; i < _this.safetyTipList.length; i++) {
              var discription = _this.safetyTipList[i].safety_tip_desc;
              console.log("discription", discription);
              console.log("city", _this.safetyTipList[i].city);
              var city = _this.safetyTipList[i].city;
              console.log(city);

              if (discription.length > 50) {
                var disc = discription.substring(0, 97);
                console.log("disc", _this.disc);
                _this.safetyTipList[i].show_disc = disc;
              }

              var safety_tip_added_date = _this.safetyTipList[i].added_date != null ? _this.safetyTipList[i].added_date : "";

              var dayBetween = _this.days_between(safety_tip_added_date);

              var getDaysAgo = dayBetween > 7 ? _this.ChangeDateFormat(safety_tip_added_date, 1) : dayBetween == 0 ? 'Today' : dayBetween == 1 ? dayBetween + " day ago" : dayBetween + " days ago";
              console.log(_this.getDaysAgo);

              var time1 = _this.safetyTipList[i].added_date.substr(11, 19); // console.log("time", time1)


              var time2 = _this.timeConvert(time1);

              _this.safetyTipList[i].show_date = getDaysAgo;
              _this.safetyTipList[i].show_time = time2;

              if (city == 'undefined') {
                console.log("hiiii");
                var locationArray = [];
                locationArray = _this.safetyTipList[i].exact_location.split(',');
                _this.safetyTipList[i].exct_lcn = locationArray[1];
                _this.showDiv = true;
                _this.showCity = false;
              } else {
                _this.showCity = true;
                _this.showDiv = false;
              }
            }
          }, function (error) {});
        }
      }, {
        key: "timeConvert",
        value: function timeConvert(time) {
          // console.log("Time in convert ", time)
          // Check correct time format and split into components
          time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) {
            // If time format correct
            time = time.slice(1); // Remove full string match value

            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM

            time[0] = +time[0] % 12 || 12; // Adjust hours

            console.log("time1", time[0]);
            console.log("time", time);
            var time_array = [];
            time_array.push(time[0]);
            time_array.push(time[1]);
            time_array.push(time[2]);
            time_array.push(time[5]);
          }

          return time_array.join(''); // return adjusted time or original string
        }
      }, {
        key: "days_between",
        value: function days_between(date) {
          // The number of milliseconds in one day
          var date1;
          date1 = new Date(date.replace(/ /g, "T"));
          var todays_date;
          todays_date = new Date();
          var ONE_DAY = 1000 * 60 * 60 * 24;
          var differenceMs = Math.abs(todays_date - date1);
          var daydiff = Math.round(differenceMs / ONE_DAY);
          return daydiff;
        }
      }, {
        key: "ChangeDateFormat",
        value: function ChangeDateFormat(date, val) {
          var dayDate = new Date(date.replace(/ /g, "T"));
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = monthNames[dayDate.getMonth()];
          var monthVal = val == 1 ? monthName.substr(0, 3) : monthName;
          var getDate = dayDate.getDate();
          var getYear = dayDate.getFullYear();
          var format_date = getDate + " " + monthVal + " " + getYear;
          return format_date;
        }
      }, {
        key: "formatAMPM",
        value: function formatAMPM(date) {
          var hours = date[0];
          var minutes = date[1];
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12;
          minutes = minutes < 10 ? '0' + minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
      }]);

      return MysafetyPage;
    }();

    MysafetyPage.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MysafetyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mysafety',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mysafety.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mysafety/mysafety.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mysafety.page.scss */
      "./src/app/mysafety/mysafety.page.scss"))["default"]]
    })], MysafetyPage);
    /***/
  }
}]);
//# sourceMappingURL=mysafety-mysafety-module-es5.js.map
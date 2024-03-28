function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myreport-myreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myreport/myreport.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myreport/myreport.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyreportMyreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"undefined\" text=\"\" class=\"backbutton\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-wrap\">{{'incident_shared_by_me' | translate}}</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"notfoundin\" *ngIf = \"incident_list.length == 0\">\n    <p>{{'no_incidents_found' | translate}}</p>\n   </div>\n   \n   <div class=\"tips\" *ngIf = \"incident_list.length > 0\">\n\n\n    <ion-row >\n      <ion-col size=\"12\">\n        <ion-card *ngFor=\"let item of incident_list\" class=\"newcardin\" tappable (click)=\"report(item)\">\n          <ion-card-header>\n\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">{{item.incidents_categories_show}}</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content >\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3>{{item.incidents_area_show}}</h3>\n\n                </div>\n              </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>{{item.getDaysAgo_show}}  {{item.show_time}}</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p>{{item.incident_desc_show}} <span>{{'read_more' | translate}}</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card>\n\n        <!-- <ion-card class=\"newcardin\" tappable (click)=\"report()\">\n          <ion-card-header>\n\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">Groping</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3>at Area name</h3>\n\n                </div>\n              </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>1 days ago</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor… <span>Read\n                    more</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card class=\"newcardin\" tappable (click)=\"report()\">\n          <ion-card-header>\n\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"12\">Domestic Violence</ion-col>\n              </ion-row>\n            </ion-card-title>\n\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col size=\"5\">\n                <div class=\"subheading\">\n                  <h3>at Area name</h3>\n\n                </div>\n              </ion-col>\n              <ion-col size=\"7\">\n                <div class=\"subheading\">\n                  <h4>20 Feb 2022 10:09AM</h4>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor… <span>Read\n                    more</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n\n        </ion-card> -->\n      </ion-col>\n    </ion-row>    \n  </div>\n  <ion-fab (click)=\"share()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/myreport/myreport-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/myreport/myreport-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyreportPageRoutingModule */

  /***/
  function srcAppMyreportMyreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyreportPageRoutingModule", function () {
      return MyreportPageRoutingModule;
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


    var _myreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myreport.page */
    "./src/app/myreport/myreport.page.ts");

    var routes = [{
      path: '',
      component: _myreport_page__WEBPACK_IMPORTED_MODULE_3__["MyreportPage"]
    }];

    var MyreportPageRoutingModule = /*#__PURE__*/_createClass(function MyreportPageRoutingModule() {
      _classCallCheck(this, MyreportPageRoutingModule);
    });

    MyreportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/myreport/myreport.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/myreport/myreport.module.ts ***!
    \*********************************************/

  /*! exports provided: MyreportPageModule */

  /***/
  function srcAppMyreportMyreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyreportPageModule", function () {
      return MyreportPageModule;
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


    var _myreport_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myreport-routing.module */
    "./src/app/myreport/myreport-routing.module.ts");
    /* harmony import */


    var _myreport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./myreport.page */
    "./src/app/myreport/myreport.page.ts");

    var MyreportPageModule = /*#__PURE__*/_createClass(function MyreportPageModule() {
      _classCallCheck(this, MyreportPageModule);
    });

    MyreportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _myreport_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyreportPageRoutingModule"]],
      declarations: [_myreport_page__WEBPACK_IMPORTED_MODULE_7__["MyreportPage"]]
    })], MyreportPageModule);
    /***/
  },

  /***/
  "./src/app/myreport/myreport.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/myreport/myreport.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyreportMyreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.notfoundin {\n  width: 80%;\n  margin: 0 auto;\n  border-radius: 4px;\n  background: #f4f0f8;\n  color: #292020;\n}\n\n.notfoundin p {\n  width: 100%;\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 58%;\n  text-align: center;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 45px;\n  padding-right: 45px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.tips {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 0;\n  padding: 10px 16px;\n}\n\n.subheading {\n  width: 100%;\n  height: auto;\n}\n\n.subheading h3 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.subheading h4 {\n  height: auto;\n  color: #292020;\n  width: auto;\n  font-size: 16px;\n  background-image: url(/assets/images/icons/dotlight.svg);\n  background-size: 6px;\n  background-repeat: no-repeat;\n  background-position: 5px 4px;\n  padding-left: 28px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nion-fab-button {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 15px;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n}\n\n.newfab ion-fab-button {\n  --background:#F5DE5B;\n  --color:#000;\n  --color-activated:#000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n}\n\nion-fab-button ion-icon {\n  width: 1.2em;\n  height: 1.2em;\n  font-weight: 600;\n}\n\n.newarea {\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 45px;\n}\n\n.newcardin {\n  border-radius: 0;\n  box-shadow: none;\n  width: 100%;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  border-bottom: 1px solid #ddd;\n  margin-top: 22px;\n}\n\n.newcardin ion-card-title {\n  font-size: 16px;\n  color: #592D8D !important;\n  width: 100%;\n  height: auto;\n  font-weight: 400;\n}\n\n.newcardin ion-card-header {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  font-size: 16px;\n  color: #592D8D !important;\n  padding: 0 0;\n}\n\n.newcardin ion-card-content {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.newcardin p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(152, 145, 145, 0.97);\n  line-height: 18px;\n}\n\n.newcardin span {\n  height: auto;\n  font-size: 14px;\n  color: #000000;\n}\n\n.fab-vertical-bottom {\n  bottom: 105px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9teXJlcG9ydC9teXJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL215cmVwb3J0L215cmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0FDQUE7O0FER0E7RUFFQSxTQUFBO0FDREE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE1BO0VBRUksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNKLG1CQUFBO0VBQ0EsY0FBQTtBQ0pBOztBRE9BO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0FDTEE7O0FEU0E7RUFFQSx1QkFBQTtBQ1BBOztBRFVBO0VBRUEscUJBQUE7QUNSQTs7QURVQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNJLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNKLGdCQUFBO0VBQ0ksa0JBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0FDVEo7O0FEV0E7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVEE7O0FEWUE7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVko7O0FEY0M7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNaRDs7QURlQztFQUVELFdBQUE7RUFDQSxZQUFBO0FDYkE7O0FEaUJDO0VBRUQsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGtCQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDaEJKOztBRG1CQztFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNHLDZCQUFBO0VBQ0EsMkJBQUE7QUNoQko7O0FEb0JBO0VBRUMsb0JBQUE7RUFDQSxZQUFBO0VBQ0ksc0JBQUE7RUFDRCxxQkFBQTtFQUNBLG1CQUFBO0VBQ0gsK0JBQUE7RUFDRyw2QkFBQTtFQUNBLDJCQUFBO0FDbEJKOztBRHNCQTtFQUVDLFlBQUE7RUFDRyxhQUFBO0VBQ0gsZ0JBQUE7QUNwQkQ7O0FEc0JBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCQTs7QUR1QkE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNDLHVCQUFBO1VBQUEsc0JBQUE7RUFDRyxxQkFBQTtVQUFBLG9CQUFBO0VBQ0osNkJBQUE7RUFDQSxnQkFBQTtBQ3JCQTs7QUR1QkE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDckJBOztBRHVCQTtFQUVJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0gsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ3JCRDs7QUR3QkE7RUFFQyx3QkFBQTtVQUFBLHVCQUFBO0VBQ0csc0JBQUE7VUFBQSxxQkFBQTtBQ3RCSjs7QUR5QkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUN0QkE7O0FEeUJBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDdkJBOztBRDJCQTtFQUVBLGFBQUE7QUN6QkEiLCJmaWxlIjoic3JjL2FwcC9teXJlcG9ydC9teXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4ubm90Zm91bmRpblxyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbmJhY2tncm91bmQ6cmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuY29sb3I6cmdiYSg0MSwgMzIsIDMyLCAxKTtcclxufVxyXG5cclxuLm5vdGZvdW5kaW4gcHtcclxud2lkdGg6MTAwJTtcclxucGFkZGluZzoxNHB4IDE4cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo0MDA7XHJcbm1hcmdpbi10b3A6IDU4JTtcclxuLy8gbWFyZ2luLWxlZnQ6IDIwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaGVhZGVyLW1kIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0XHJcblx0XHJcblx0LnRpcHNcclxuXHR7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0bWFyZ2luLXRvcDowO1xyXG5cdHBhZGRpbmc6MTBweCAxNnB4O1xyXG5cdH1cclxuXHRcclxuXHQuc3ViaGVhZGluZ1xyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcblxyXG5cdFxyXG5cdC5zdWJoZWFkaW5nIGgzXHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbndpZHRoOmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIGg0XHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyOTIwMjA7XHJcbndpZHRoOmF1dG87XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcclxuYmFja2dyb3VuZC1zaXplOjZweDtcclxuYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggNHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjhweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4gaW9uLWZhYi1idXR0b257XHJcbiB3aWR0aDo1MHB4O1xyXG4gaGVpZ2h0OjUwcHg7XHJcbiBwb3NpdGlvbjpmaXhlZDtcclxuIHJpZ2h0OjE1cHg7XHJcbiAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiBcclxuIH1cclxuXHJcbi5uZXdmYWIgaW9uLWZhYi1idXR0b25cclxuIHtcclxuIC0tYmFja2dyb3VuZDojRjVERTVCO1xyXG4gLS1jb2xvcjojMDAwO1xyXG4gICAgIC0tY29sb3ItYWN0aXZhdGVkOiMwMDA7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICMwMDA7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiAjMDAwOyAgXHJcblx0LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xyXG5cdFxyXG4gfVxyXG4gXHJcbmlvbi1mYWItYnV0dG9uIGlvbi1pY29uXHJcbiB7XHJcbiB3aWR0aDogMS4yZW07XHJcbiAgICBoZWlnaHQ6IDEuMmVtO1xyXG5cdGZvbnQtd2VpZ2h0OjYwMDtcclxuIH1cclxuLm5ld2FyZWFcclxue1xyXG53aWR0aDoxMDAlO1xyXG5wYWRkaW5nOjAgMjBweDtcclxubWFyZ2luLXRvcDo0NXB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZGluXHJcbntcclxuYm9yZGVyLXJhZGl1czowO1xyXG5ib3gtc2hhZG93Om5vbmU7XHJcbndpZHRoOjEwMCU7XHJcbiBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcbm1hcmdpbi10b3A6MjJweDtcclxufVxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLXRpdGxlXHJcbntcclxuZm9udC1zaXplOjE2cHg7XHJcbmNvbG9yOiM1OTJEOEQgIWltcG9ydGFudDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG4ubmV3Y2FyZGluIGlvbi1jYXJkLWhlYWRlclxyXG57XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRjb2xvcjojNTkyRDhEICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzowIDA7XHJcbn1cclxuXHJcbi5uZXdjYXJkaW4gaW9uLWNhcmQtY29udGVudFxyXG57XHJcbiBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBwe1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZm9udC1zaXplOjE0cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuY29sb3I6cmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcclxubGluZS1oZWlnaHQ6MThweDtcclxufVxyXG5cclxuLm5ld2NhcmRpbiBzcGFuXHJcbntcclxuaGVpZ2h0OmF1dG87XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5jb2xvcjojMDAwMDAwO1xyXG5cclxufVxyXG5cclxuLmZhYi12ZXJ0aWNhbC1ib3R0b21cclxue1xyXG5ib3R0b206MTA1cHg7XHJcbn1cclxuXHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubm90Zm91bmRpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmNGYwZjg7XG4gIGNvbG9yOiAjMjkyMDIwO1xufVxuXG4ubm90Zm91bmRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA1OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzJGMTE1MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6NzVweDtcbn1cblxuLnRpcHMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zdWJoZWFkaW5nIGgzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzI5MjAyMDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1YmhlYWRpbmcgaDQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjkyMDIwO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG90bGlnaHQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xufVxuXG4ubmV3ZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiNGNURFNUI7XG4gIC0tY29sb3I6IzAwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IzAwMDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMDAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xufVxuXG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5ld2FyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4ubmV3Y2FyZGluIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLm5ld2NhcmRpbiBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5ld2NhcmRpbiBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMDtcbn1cblxuLm5ld2NhcmRpbiBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbn1cblxuLm5ld2NhcmRpbiBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgxNTIsIDE0NSwgMTQ1LCAwLjk3KTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdjYXJkaW4gc3BhbiB7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZhYi12ZXJ0aWNhbC1ib3R0b20ge1xuICBib3R0b206IDEwNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/myreport/myreport.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/myreport/myreport.page.ts ***!
    \*******************************************/

  /*! exports provided: MyreportPage */

  /***/
  function srcAppMyreportMyreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyreportPage", function () {
      return MyreportPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var MyreportPage = /*#__PURE__*/function () {
      function MyreportPage(navController, translate, sharedservice, router) {
        _classCallCheck(this, MyreportPage);

        this.navController = navController;
        this.translate = translate;
        this.sharedservice = sharedservice;
        this.router = router;
        this.incident_list = [];
      }

      _createClass(MyreportPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getreport();
        }
      }, {
        key: "getreport",
        value: function getreport() {
          var _this = this;

          var data = new FormData(); // data.append('security_key','96df706ef2643e000fe98cc406d1071c04dd8dfa');

          data.append('user_id', localStorage.getItem('userId'));
          this.sharedservice.presentLoadingDefault();
          this.sharedservice.sharedPostRequest_webappurl('user-reported-incidents', data).subscribe(function (rdata) {
            console.log(rdata);
            _this.incident_list = rdata.data;
            console.log(_this.incident_list);

            for (var i = 0; i < _this.incident_list.length; i++) {
              var incidentdata = data['data'] != null ? data['data'][i] : "";
              console.log(incidentdata);
              var incident_desc = _this.incident_list[i].description != null ? _this.incident_list[i].description : "";
              _this.incident_list[i].incident_desc_show = incident_desc;
              var additional_info = _this.incident_list[i].additional_detail != null ? 'Additional Details : ' + _this.incident_list[i].additional_detail : "";
              _this.incident_list[i].additional_info_show = additional_info; // code changed by sonam - 16-10-2020 start

              var yrs;

              _this.translate.get('yrs').subscribe(function (res) {
                yrs = res;
              });

              var person_age = _this.incident_list[i].age != null ? _this.incident_list[i].age + yrs : "";
              console.log(person_age);
              _this.incident_list[i].person_age_show = person_age; // code changed by sonam - 16-10-2020 end

              var prefer_not_to_say;

              _this.translate.get('prefer_not_to_say').subscribe(function (res) {
                prefer_not_to_say = res;
              });

              var person_gender = _this.incident_list[i].gender != null && _this.incident_list[i].gender != prefer_not_to_say ? _this.incident_list[i].gender : "";
              console.log(person_gender);
              _this.incident_list[i].person_gender_show = person_gender; // code changed by sonam - 16-10-2020 start

              var around;

              _this.translate.get('around').subscribe(function (res) {
                around = res;
              });

              var On;

              _this.translate.get('On').subscribe(function (res) {
                On = res;
              });

              var At;

              _this.translate.get('At').subscribe(function (res) {
                At = res;
              });

              var Between;

              _this.translate.get('Between').subscribe(function (res) {
                Between = res;
              });

              var incidents_date_est = _this.incident_list[i].is_date_estimate != "0" ? around : On;
              _this.incident_list[i].incidents_date_est_show = incidents_date_est;
              var incidents_time_est = _this.incident_list[i].is_time_estimate != "0" ? around : At;
              _this.incident_list[i].incidents_time_est_show = incidents_time_est;
              var incidents_time_est = _this.incident_list[i].time_to != null ? Between : incidents_time_est;
              _this.incident_list[i].incidents_time_est_show = incidents_time_est; // code changed by sonam - 16-10-2020 end
              // code changed by sonam - 20-10-2020 start

              var incidents_date = _this.incident_list[i].created_on != null ? _this.incident_list[i].created_on : "";
              console.log('incidents_date', incidents_date); // var incidents_time_range = this.incident_list[i].time_to != null ? this.timeConvert(this.incident_list[i].time_from) + " - " + this.timeConvert(this.incident_list[i].time_to) : this.timeConvert(this.incident_list[i].time_from);

              var dayBetween = _this.days_between(incidents_date);

              var Today;

              _this.translate.get('Today').subscribe(function (res) {
                Today = res;
              });

              var day_ago;

              _this.translate.get('day_ago').subscribe(function (res) {
                day_ago = res;
              });

              var days_ago;

              _this.translate.get('days_ago').subscribe(function (res) {
                days_ago = res;
              });

              _this.incident_list[i].converttolongdate_show = _this.ConverttoLongDate(incidents_date);
              var incidents_time_range = _this.incident_list[i].time_to != null ? _this.timeConvert(_this.incident_list[i].time_from) + " - " + _this.timeConvert(_this.incident_list[i].time_to) : _this.timeConvert(_this.incident_list[i].time_from);
              console.log(',.,.,.,', incidents_time_range);
              console.log(',.,.,.,', dayBetween);
              var getDaysAgo = dayBetween > 7 ? _this.ChangeDateFormat(incidents_date, 1) + ' ' + incidents_time_range : dayBetween == 0 ? Today : dayBetween == 1 ? dayBetween + ' ' + day_ago : dayBetween + ' ' + days_ago;
              _this.incident_list[i].getDaysAgo_show = getDaysAgo;
              var incidents_time = _this.incident_list[i].time_to != null ? _this.incident_list[i].time_from + " " + to + " " + _this.incident_list[i].time_to : _this.incident_list[i].time_from;

              if (incidents_time) {
                _this.incident_list[i].timeconvert_show = _this.timeConvert(incidents_time);
              }

              _this.incident_list[i].show_time = _this.incident_list[i].timeconvert_show; // code changed by sonam - 20-10-2020 end
              //var incidents_time = incidentdata.time_from != null ? incidentdata.time_from : "";

              var to;

              _this.translate.get('to').subscribe(function (res) {
                to = res;
              });

              var incidents_area = _this.incident_list[i].area != null ? _this.incident_list[i].area : "";
              _this.incident_list[i].incidents_area_show = incidents_area;
              var incidents_city = _this.incident_list[i].city != null ? _this.incident_list[i].city : "";
              _this.incident_list[i].incidents_city_show = incidents_city;
              var incidents_state = _this.incident_list[i].state != null ? _this.incident_list[i].state : "";
              _this.incident_list[i].incidents_state_show = incidents_state;
              var incidents_categories = _this.incident_list[i].categories != null ? _this.incident_list[i].categories : "";
              _this.incident_list[i].incidents_categories_show = incidents_categories;
              var incidentdata_answers = _this.incident_list[i].answers != null ? _this.incident_list[i].answers : "";
              var incidentdata_answers_length = incidentdata_answers.length;

              for (var j = 0; j < incidentdata_answers_length; j++) {
                //console.log("incidentdata_answers");
                var incident_question_tag = incidentdata_answers[j].question_tag != null ? incidentdata_answers[j].question_tag : "";
                var incident_question_answer = incidentdata_answers[j].answer != null ? incidentdata_answers[j].answer : "";
                var incident_question_answer_id = incidentdata_answers[j].answer_id != null ? incidentdata_answers[j].answer_id : "";
                var police_tag = incidentdata_answers[j].answer;
                console.log(police_tag);

                if (incident_question_tag == "attack_reason") {
                  var what_let_to_attck;

                  _this.translate.get('what_let_to_attck').subscribe(function (res) {
                    what_let_to_attck = res;
                  });

                  var attack_reason = what_let_to_attck + incident_question_answer;
                  _this.incident_list[i].attack_reason_show = attack_reason;
                } else if (incident_question_tag == "who_was_perpetrator") {
                  var perpetrator_info = incident_question_answer;
                  console.log('perpetrator_info', perpetrator_info);
                  _this.incident_list[i].perpetrator_info_show = perpetrator_info;
                } else if (incident_question_tag == "medical_help") {
                  var medical_help_received;

                  _this.translate.get('medical_help_received').subscribe(function (res) {
                    medical_help_received = res;
                  });

                  var medical_hlp_noy_rcvd;

                  _this.translate.get('medical_hlp_noy_rcvd').subscribe(function (res) {
                    medical_hlp_noy_rcvd = res;
                  });

                  var medical_help_desc = incident_question_answer_id == 28 ? medical_help_received : medical_hlp_noy_rcvd;
                  console.log('*******', medical_help_desc);
                  console.log('*******', incident_question_answer_id);
                  console.log('*******', medical_help_received);
                  console.log('*******', medical_hlp_noy_rcvd);
                  var medical_help = medical_help_desc;
                  _this.incident_list[i].medical_help_show = medical_help;
                } else if (incident_question_tag == "reported_to_police") {
                  // code change by sonam - 16-10-2020 start
                  var incident_other_answer;

                  if (incidentdata_answers[j].other_answers.length != 2) {
                    incident_other_answer = JSON.parse(incidentdata_answers[j].other_answers)['incident_question_answer_id'] != null ? JSON.parse(incidentdata_answers[j].other_answers)['incident_question_answer_id'] : "";
                  }

                  var policeHtml = '<img src="assets/images/map-police.svg" class="img-fluid"> ';
                  var reported_to_police = '';
                  console.log(police_tag);

                  if (police_tag == "Yes I did") {
                    reported_to_police = ' Police report filed.';
                    var police_Report_filed;

                    _this.translate.get('police_Report_filed').subscribe(function (res) {
                      police_Report_filed = res;
                    });

                    _this.incident_list[i].reported_to_police_show = police_Report_filed;
                  } else if (police_tag == "No") {
                    reported_to_police = ' Police report not filed.';
                    var police_reprt_not_filed;

                    _this.translate.get('police_reprt_not_filed').subscribe(function (res) {
                      police_reprt_not_filed = res;
                    });

                    _this.incident_list[i].reported_to_police_show = police_reprt_not_filed;
                  } else if (police_tag == "I tried") {
                    var tried_to_filed;

                    _this.translate.get('tried_to_filed').subscribe(function (res) {
                      tried_to_filed = res;
                    });

                    reported_to_police = tried_to_filed + ' ' + incident_other_answer;
                    _this.incident_list[i].reported_to_police_show = reported_to_police;
                  } else if (police_tag == "I will, in the future") {
                    reported_to_police = ' Intend to file police report.';
                    var intent_to_filed;

                    _this.translate.get('intent_to_filed').subscribe(function (res) {
                      intent_to_filed = res;
                    });

                    _this.incident_list[i].reported_to_police_show = intent_to_filed;
                  } else if (police_tag == "I’m not sure if I want to") {
                    reported_to_police = ' Not sure about filing police report.';
                    var not_sure;

                    _this.translate.get('not_sure').subscribe(function (res) {
                      not_sure = res;
                    });

                    _this.incident_list[i].reported_to_police_show = not_sure;
                  } else {
                    reported_to_police = '';
                    _this.incident_list[i].reported_to_police_show = reported_to_police;
                  } // code change by sonam - 16-10-2020 end

                }
              } // latlong[i] = {"city":incidents_city, "area":incidents_area, "latitude":incidentdata.latitude, "longitude":incidentdata.longitude, "categories":incidents_categories, "dateTime":incidents_time};
              // elementHtml += `
              //     <!-- Short Desc Start -->
              //     <div class="text shortDesc " data-id="${i}">
              //       <div class="incident-title">${incidents_categories}</div>
              //       <div class="place-time">
              //         at ${incidents_area} <span class="sepration">.</span> ${getDaysAgo}
              //       </div>
              //       <div class="text1">
              //         <span class="ellipsis">${incident_desc}</span>
              //         <span>
              //           <button class="themeColor toggleThis readbtn mb-3 ml-1" id="readbtn_${i}" data-id="${i}">Read More</button>
              //         </span>
              //       </div>
              //     </div>
              //     <!-- Short Desc End -->
              //     <!-- Long Desc Start -->
              //     <div class="longDesc" id="longDesc_${i}" data-id="${i}">
              //       <button class="toggleUp shwobtn" id="toggleUp_${i}" data-id="${i}">
              //         <img src="assets/images/icon-feather-arrow-left.svg" class="img-fluid leftIcon">
              //       </button>
              //       <div class="incident-title">${incidents_categories}</div>
              //       <label>
              //         <span class="age">${person_age}</span>
              //         ${person_gender}
              //       </label>
              //       <p>${incident_desc}</p><br>
              //       ${perpetrator_info}<br>
              //       ${attack_reason}<br>
              //       ${additional_info}<br>
              //       <div class="otherDetails">
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="location">
              //                 ${reported_to_police}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="location">
              //                 ${medical_help}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="location">
              //               <img src="assets/images/location.svg" class="img-fluid">
              //               ${incidents_area},${incidents_city}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="iDate">
              //               <img src="assets/images/calendar-date-of-incident.svg" class="img-fluid">
              //               ${incidents_date_est} ${ConverttoLongDate(incidents_date)}
              //             </div>
              //           </div>
              //         </div>
              //         <div class="row mb-3">
              //           <div class="col-md-12">
              //             <div class="iTime">
              //               <img src="assets/images/time-of-incident.svg" class="img-fluid"> ${incidents_time_est} ${timeConvert(incidents_time)}
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //     <!-- Long Desc End -->
              // `;

            }

            console.log(_this.incident_list);
          }, function (error) {
            _this.sharedservice.loaderDismiss();
          }, function () {
            _this.sharedservice.loaderDismiss();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "share",
        value: function share() {
          this.navController.navigateForward("/preframingtwo");
        } //   report() {
        // this.navController.navigateForward(`/myviewreport`);
        //   }

      }, {
        key: "report",
        value: function report(item) {
          console.log(item);
          var navigationExtras = {
            state: {
              data: item
            }
          };
          this.router.navigate(['/myviewreport'], navigationExtras); //this.navController.navigateForward(`/myviewreport`);
        }
      }, {
        key: "ChangeDateFormat",
        value: function ChangeDateFormat(date, val) {
          // var dayDate = new Date(date);
          // var date1: any
          var dayDate = new Date(date.replace(/ /g, "T"));
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = monthNames[dayDate.getMonth()];
          var monthVal = val == 1 ? monthName.substr(0, 3) : monthName;
          var getDate = dayDate.getDate();
          var getYear = dayDate.getFullYear();
          var format_date = getDate + " " + monthVal + " " + getYear;
          console.log('****', format_date);
          return format_date;
        }
      }, {
        key: "ConverttoLongDate",
        value: function ConverttoLongDate(date) {
          // var dayDate = new Date(date);
          var dayDate = new Date(date.replace(/ /g, "T"));
          var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var mainDate = weekday[dayDate.getDay()];
          var dateFormat = this.ChangeDateFormat(date, 0);
          var format_date = mainDate + ", " + dateFormat;
          return format_date;
        }
      }, {
        key: "days_between",
        value: function days_between(date) {
          // The number of milliseconds in one day
          console.log(date);
          var date1; //  date1 = new Date(date);

          date1 = new Date(date.replace(/ /g, "T"));
          console.log(date1);
          var todays_date;
          todays_date = new Date();
          console.log(todays_date);
          var ONE_DAY = 1000 * 60 * 60 * 24; // Calculate the difference in milliseconds

          var differenceMs = Math.abs(todays_date - date1);
          console.log(differenceMs);
          var daydiff = Math.round(differenceMs / ONE_DAY);
          console.log(daydiff);
          return daydiff; // return 0
          // Convert back to days and return

          /*if (daydiff >= 0 && daydiff <= 30) {
            // return daydiff + " Days ago";
            return daydiff;
          }
          else {
            return date;
          }*/
        }
      }, {
        key: "timeConvert",
        value: function timeConvert(time) {
          // Check correct time format and split into components
          // time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
          // if (time.length > 1) { // If time format correct
          //   time = time.slice(1);  // Remove full string match value
          //   time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          //   time[0] = +time[0] % 12 || 12; // Adjust hours
          //   var time_array =[]
          //   time_array.push(time[0])
          //   time_array.push(time[1])
          //   time_array.push(time[2])
          //   time_array.push(time[5])
          //  }
          var time_split = time.split(':');
          console.log(time_split);

          if (time_split[0].charAt(0) == '0') {
            var t = time_split[0].slice(1);
            time_split[0] = t;
            console.log(time_split[0]);
          }

          if (time_split[1].charAt(0) == '0') {
            var t = time_split[1].slice(1);
            time_split[1] = t;
            console.log(time_split[1]);
          }

          var hour = JSON.parse(time_split[0]);
          var minute = JSON.parse(time_split[1]);
          console.log(hour);
          console.log(minute);
          var hours = hour > 12 ? hour - 12 : hour;
          var am_pm = hour >= 12 ? "PM" : "AM";
          var minutes = minute < 10 ? "0" + minute : minute;
          var timeStart = hours + ":" + minutes + " " + am_pm;
          return timeStart; // return adjusted time or original string
        }
      }]);

      return MyreportPage;
    }();

    MyreportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MyreportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myreport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./myreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myreport/myreport.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./myreport.page.scss */
      "./src/app/myreport/myreport.page.scss"))["default"]]
    })], MyreportPage);
    /***/
  }
}]);
//# sourceMappingURL=myreport-myreport-module-es5.js.map
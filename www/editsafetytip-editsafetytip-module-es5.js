function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editsafetytip-editsafetytip-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editsafetytip/editsafetytip.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editsafetytip/editsafetytip.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditsafetytipEditsafetytipPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" >\n   <ion-back-button defaultHref='/viewreport' icon=\"undefined\" text=\"\"  class=\"backbutton\"></ion-back-button>\n   </ion-buttons> \n  <ion-title><div class=\"ion-text-wrap\">{{'edit_safety_tip' | translate }}</div></ion-title>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"newbg\">\n  <form [formGroup]=\"editsafetyForm\" (ngSubmit)=\"editSafetyTip()\">\n<ion-row>\n      <ion-col col-12>\n<ion-item>\n  <ion-label position=\"stacked\">{{'location_for_which_you_want_to_submit_safety_tip' | translate }}</ion-label>\n  <ion-input type=\"text\" formControlName=\"location\" (ionChange)=\"getlatlong(editsafetyForm.value.location)\" id=\"autocomplete3\"></ion-input>\n</ion-item>\n\n<ion-item class=\"newinput\" mode=\"ios\">\n  <ion-label position=\"stacked\">{{'map_move_pin' | translate }}:</ion-label>\n  <!-- <div class=\"newarea\"> -->\n  <!-- <ion-input type=\"text\"></ion-input> -->\n   <!-- <img  src=\"assets/images/icons/location.svg\"/> -->\n   <!-- </div> -->\n   <div #map id=\"map\" ></div>\n    <!-- <img class=\"newloc\" src=\"assets/images/googleimg.png\"/> -->\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\">{{'safety_tips' | translate }}</ion-label>\n  <ion-textarea rows=\"4\" cols=\"15\" placeholder=\"{{'enter_any_notes_here' | translate}}\" formControlName=\"safety_desc\"></ion-textarea>\n</ion-item>\n<ion-item >\n  <ion-label position=\"stacked\" >{{'please_enter_title_for_safety_tips' | translate}}</ion-label>\n  <ion-input type=\"text\" formControlName=\"safety_title\"></ion-input>\n</ion-item>\n\n\t\n\t \n\t <ion-row>\n     <ion-col col-12>\n\n<ion-button expand=\"full\" shape=\"round\"  class=\"newbtn\" type=\"submit\">{{'button_done' | translate }}</ion-button>\n  </ion-col>\n  </ion-row>\n\t </ion-col>\n    </ion-row>\n  </form>\n\t</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EditsafetytipPageRoutingModule */

  /***/
  function srcAppEditsafetytipEditsafetytipRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsafetytipPageRoutingModule", function () {
      return EditsafetytipPageRoutingModule;
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


    var _editsafetytip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editsafetytip.page */
    "./src/app/editsafetytip/editsafetytip.page.ts");

    var routes = [{
      path: '',
      component: _editsafetytip_page__WEBPACK_IMPORTED_MODULE_3__["EditsafetytipPage"]
    }];

    var EditsafetytipPageRoutingModule = /*#__PURE__*/_createClass(function EditsafetytipPageRoutingModule() {
      _classCallCheck(this, EditsafetytipPageRoutingModule);
    });

    EditsafetytipPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditsafetytipPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditsafetytipPageModule */

  /***/
  function srcAppEditsafetytipEditsafetytipModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsafetytipPageModule", function () {
      return EditsafetytipPageModule;
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


    var _editsafetytip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editsafetytip-routing.module */
    "./src/app/editsafetytip/editsafetytip-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _editsafetytip_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./editsafetytip.page */
    "./src/app/editsafetytip/editsafetytip.page.ts");

    var EditsafetytipPageModule = /*#__PURE__*/_createClass(function EditsafetytipPageModule() {
      _classCallCheck(this, EditsafetytipPageModule);
    });

    EditsafetytipPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editsafetytip_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditsafetytipPageRoutingModule"]],
      declarations: [_editsafetytip_page__WEBPACK_IMPORTED_MODULE_7__["EditsafetytipPage"]]
    })], EditsafetytipPageModule);
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditsafetytipEditsafetytipPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: center;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n#map {\n  width: 100%;\n  min-height: 330px;\n  padding: 0 15px;\n}\n\n.newinput .newloc {\n  border: none;\n  padding: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 500;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\nion-select {\n  border: 1px solid #ddd;\n  height: 40px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 18px;\n}\n\n.select-text button {\n  padding: 1px 0 !important;\n}\n\n.in-item {\n  position: static;\n  max-width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.item {\n  --inner-border-width: 0px 0px 0px 0px;\n  --border-width: 0 0 0px 0;\n  border: none;\n}\n\nion-select {\n  width: 100%;\n  margin-top: 0;\n  white-space: inherit;\n}\n\n.select-placeholder {\n  min-width: 100% !important;\n  width: 100% !important;\n  flex: 0 !important;\n}\n\n.newbg {\n  width: 100%;\n  height: auto;\n  padding: 0 20px;\n  margin-top: 25px;\n  margin-bottom: 0;\n}\n\nion-input {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.item .sc-ion-label-ios-h {\n  margin-bottom: 10px;\n}\n\n.item .sc-ion-label-md-h {\n  margin-bottom: 10px;\n}\n\nion-textarea {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  min-height: 40px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.alert-radio-label.sc-ion-alert-ios {\n  white-space: inherit;\n}\n\nion-alert.alert-radio-button {\n  white-space: inherit !important;\n}\n\n.my-custom-class .alert-radio-button {\n  border-bottom: 1px solid #ddd;\n}\n\n.newbtn {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 50px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 0;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 35px auto 140px;\n  --box-shadow:0;\n  text-align: center;\n}\n\n.newinput img {\n  margin-top: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  border: 1px solid #ddd;\n  padding: 8px;\n  margin-bottom: 0;\n  border-left: 0;\n  border-radius: 0 3px 3px 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.newarea {\n  display: inline-flex;\n  width: 100%;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  transform: inherit;\n  white-space: inherit;\n  font-size: 15px;\n}\n\n.label-stacked.sc-ion-label-md-h {\n  transform: inherit;\n  white-space: inherit;\n  font-size: 15px;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  white-space: inherit;\n}\n\n.alert-radio-group.alert-radio-label {\n  white-space: inherit;\n}\n\n.label-stacked.sc-ion-label-ios-h {\n  transform: inherit;\n  white-space: inherit;\n}\n\n.newinput ion-input {\n  border-radius: 3px 0px 0px 3px;\n}\n\n.newinput ion-datetime {\n  border-radius: 3px 0px 0px 3px;\n}\n\nion-datetime {\n  --background:#ffffff;\n  border: 1px solid #E1D8EB;\n  font-size: 14px;\n  border-radius: 3px;\n  --padding-start: 8px !important;\n  margin-top: 0;\n  --min-height: 40px;\n  --padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9lZGl0c2FmZXR5dGlwL2VkaXRzYWZldHl0aXAucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0c2FmZXR5dGlwL2VkaXRzYWZldHl0aXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7QUNBQTs7QURHQTtFQUVBLFNBQUE7QUNEQTs7QURJQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUNGSjs7QURJQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0FDRkE7O0FETUE7RUFJQSw4Q0FBQTtBQ0pBOztBRFFBO0VBRUEsdUJBQUE7QUNOQTs7QURTQTtFQUVBLHFCQUFBO0FDUEE7O0FEU0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1BKOztBRFNBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNQQTs7QURXQTtFQUNBLGNBQUE7QUNSQTs7QURXQTtFQUNBLGdCQUFBO0FDUkE7O0FEV0E7RUFFQSxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEV0M7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEVUE7RUFFQSxzQkFBQTtFQUNBLFlBQUE7QUNSQTs7QURXRTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1RGOztBRFlBO0VBQ0MseUJBQUE7QUNURDs7QURZQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGtCQUFBO0VBQ0EsbUJBQUE7QUNURDs7QURZQztFQUVBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDVkQ7O0FEYUE7RUFDQSxXQUFBO0VBQ0ksYUFBQTtFQUNILG9CQUFBO0FDVkQ7O0FEYUE7RUFFQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNYQTs7QURjQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaQTs7QURjQTtFQUVBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDRyxnQkFBQTtBQ1pIOztBRGVBO0VBQ0EsbUJBQUE7QUNaQTs7QURjQTtFQUNBLG1CQUFBO0FDWEE7O0FEYUE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0csZ0JBQUE7QUNYSDs7QURjQTtFQUVBLG9CQUFBO0FDWkE7O0FEZUE7RUFFQSxvQkFBQTtBQ2JBOztBRGdCQTtFQUVBLCtCQUFBO0FDZEE7O0FEaUJBO0VBRUEsNkJBQUE7QUNmQTs7QURrQkE7RUFHQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNKLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDRCx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNqQkE7O0FEcUJBO0VBQ0csYUFBQTtFQUNDLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNILHFCQUFBO1VBQUEsb0JBQUE7QUNsQkQ7O0FEcUJBO0VBRUEsb0JBQUE7RUFDQSxXQUFBO0FDbkJBOztBRHFCQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDbkJBOztBRHFCQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDbkJBOztBRHFCQTtFQUVBLG9CQUFBO0FDbkJBOztBRHFCQTtFQUVBLG9CQUFBO0FDbkJBOztBRHNCQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUNwQkE7O0FEdUJBO0VBRUcsOEJBQUE7QUNyQkg7O0FEd0JBO0VBRUcsOEJBQUE7QUN0Qkg7O0FEeUJBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNHLGtCQUFBO0VBQ0EsbUJBQUE7QUN2QkgiLCJmaWxlIjoic3JjL2FwcC9lZGl0c2FmZXR5dGlwL2VkaXRzYWZldHl0aXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZCBpb24tdGl0bGVcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Ncclxue1xyXG5ib3JkZXI6MDtcclxuXHJcbn1cclxuI21hcHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjMzMHB4O1xyXG5cclxuICAgIHBhZGRpbmc6MCAxNXB4O1xyXG4gICAgfVxyXG4ubmV3aW5wdXQgLm5ld2xvYyBcclxue1xyXG5ib3JkZXI6bm9uZTtcclxucGFkZGluZzowO1xyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXJcclxue1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGVcclxue1xyXG4tLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcblxyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxubWFyZ2luLWxlZnQ6MDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24ge1xyXG5tYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5pb24tc2VsZWN0IHtcclxuXHJcbmJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuaGVpZ2h0OjQwcHg7XHJcblxyXG59XHJcbiAgaW9uLWl0ZW1cclxuICB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbToxOHB4O1xyXG4gIH1cclxuICBcclxuLnNlbGVjdC10ZXh0IGJ1dHRvblxyXG57cGFkZGluZzoxcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW4taXRlbSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmctbGVmdDoxNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6MTVweDtcclxuXHR9XHJcblx0XHJcblx0Lml0ZW0gXHJcblx0e1xyXG5cdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcblx0LS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuXHRib3JkZXI6bm9uZTtcclxuXHR9XHJcblxyXG5pb24tc2VsZWN0e1xyXG53aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuXHR3aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59XHJcblxyXG4uc2VsZWN0LXBsYWNlaG9sZGVyIFxyXG57XHJcbm1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuZmxleDowICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3Ymdcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzowIDIwcHg7XHJcbm1hcmdpbi10b3A6MjVweDtcclxubWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5pb24taW5wdXRcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbi0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi10b3A6MDtcclxuICAgbWluLWhlaWdodDogNDBweFxyXG59XHJcblxyXG4uaXRlbSAuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuaW9uLXRleHRhcmVhXHJcbntcclxuLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbmJvcmRlcjoxcHggc29saWQgI0UxRDhFQjtcclxuZm9udC1zaXplOjE0cHg7XHJcbmJvcmRlci1yYWRpdXM6M3B4O1xyXG4tLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xyXG5tYXJnaW4tdG9wOjA7XHJcbiAgIG1pbi1oZWlnaHQ6IDQwcHhcclxufVxyXG5cclxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZFxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9zXHJcbntcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG5cclxuaW9uLWFsZXJ0LmFsZXJ0LXJhZGlvLWJ1dHRvblxyXG57XHJcbndoaXRlLXNwYWNlOmluaGVyaXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC1yYWRpby1idXR0b25cclxue1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubmV3YnRuXHJcbntcclxuXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5oZWlnaHQ6NTBweDtcclxuLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xyXG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbndpZHRoOjEwMCU7XHJcbiBmb250LXdlaWdodDo1MDA7XHJcbiBtYXJnaW4tdG9wOjA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5tYXJnaW46MzVweCBhdXRvIDE0MHB4O1xyXG4tLWJveC1zaGFkb3c6MDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubmV3aW5wdXQgaW1ne1xyXG4gICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuXHRtYXJnaW4taW5saW5lLWVuZDogMDtcclxufVxyXG5cclxuLm5ld2FyZWFcclxue1xyXG5kaXNwbGF5OmlubGluZS1mbGV4O1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaFxyXG57XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5mb250LXNpemU6MTVweDtcclxufVxyXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaFxyXG57XHJcbnRyYW5zZm9ybTppbmhlcml0O1xyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG5mb250LXNpemU6MTVweDtcclxufVxyXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kXHJcbntcclxud2hpdGUtc3BhY2U6aW5oZXJpdDtcclxufVxyXG4uYWxlcnQtcmFkaW8tZ3JvdXAuYWxlcnQtcmFkaW8tbGFiZWx7XHJcblxyXG53aGl0ZS1zcGFjZTppbmhlcml0O1xyXG59IFxyXG5cclxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oXHJcbntcclxudHJhbnNmb3JtOmluaGVyaXQ7XHJcbndoaXRlLXNwYWNlOmluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZXdpbnB1dCBpb24taW5wdXRcclxue1xyXG4gICBib3JkZXItcmFkaXVzOjNweCAwcHggMHB4IDNweDtcclxufVxyXG5cclxuLm5ld2lucHV0IGlvbi1kYXRldGltZVxyXG57XHJcbiAgIGJvcmRlci1yYWRpdXM6M3B4IDBweCAwcHggM3B4O1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWVcclxue1xyXG4tLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuYm9yZGVyOjFweCBzb2xpZCAjRTFEOEVCO1xyXG5mb250LXNpemU6MTRweDtcclxuYm9yZGVyLXJhZGl1czozcHg7XHJcbi0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi10b3A6MDtcclxuICAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG4gICAtLXBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcblxyXG5cclxuIiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5uZXdpbnB1dCAubmV3bG9jIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gIC0tbWluLWhlaWdodDo3NXB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnNlbGVjdC10ZXh0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbi1pdGVtIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgIWltcG9ydGFudDtcbn1cblxuLm5ld2JnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRDhFQjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1pb3Mge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuaW9uLWFsZXJ0LmFsZXJ0LXJhZGlvLWJ1dHRvbiB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXJhZGlvLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ubmV3YnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzVweCBhdXRvIDE0MHB4O1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3aW5wdXQgaW1nIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG4ubmV3YXJlYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZCB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4uYWxlcnQtcmFkaW8tZ3JvdXAuYWxlcnQtcmFkaW8tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLm5ld2lucHV0IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcbn1cblxuLm5ld2lucHV0IGlvbi1kYXRldGltZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwcHggMHB4IDNweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUQ4RUI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwO1xuICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gIC0tcGFkZGluZy10b3A6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/editsafetytip/editsafetytip.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/editsafetytip/editsafetytip.page.ts ***!
    \*****************************************************/

  /*! exports provided: EditsafetytipPage */

  /***/
  function srcAppEditsafetytipEditsafetytipPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsafetytipPage", function () {
      return EditsafetytipPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EditsafetytipPage = /*#__PURE__*/function () {
      function EditsafetytipPage(sharedservice, navContrl, route, formBuilder, httpClient) {
        var _this = this;

        _classCallCheck(this, EditsafetytipPage);

        this.sharedservice = sharedservice;
        this.navContrl = navContrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.lat = '';
        this["long"] = '';
        this.location = '';
        this.area = '';
        this.safety_title = '';
        this.safety_desc = '';
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity_webapp/api/safety-tip/';
        this.route.queryParams.subscribe(function (params) {
          _this.location = params["location"];
          _this.city = params["city"];
          _this.state = params["state"];
          _this.country = params["country"];
          _this.landmark = params['landmark'];
          _this.location = params["location"];
          _this.lat = params["lat"];
          _this["long"] = params["long"];
          _this.safety_title = params["safety_title"];
          _this.safety_desc = params["safety_desc"];
          _this.safetip_id = localStorage.getItem('editSafety_id'); // this.safetip_id = params["safety_tip_id"];

          _this.editsafetyForm.controls['location'].setValue(_this.location);

          _this.editsafetyForm.controls['safety_title'].setValue(_this.safety_title);

          _this.editsafetyForm.controls['safety_desc'].setValue(_this.safety_desc);
        });
        this.editsafetyForm = formBuilder.group({
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          safety_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          safety_desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          lat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          "long": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(EditsafetytipPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.showMap();
          this.initAutocomplete();
        }
      }, {
        key: "showMap",
        value: function showMap() {
          console.log('hi');
          console.log(this.lat);
          console.log(this["long"]);
          var location = new google.maps.LatLng(this.lat, this["long"]);
          var options = {
            center: location,
            zoom: 5,
            animation: 'DROP',
            draggable: true,
            // disableDefaultUI: true,
            scaleControl: true,
            gestureHandling: 'cooperative',
            fullscreenControl: false
          };
          console.log(options);
          this.map = new google.maps.Map(this.mapRef.nativeElement, options);
          this.addMarkersToMap(this.lat, this["long"]);
        }
      }, {
        key: "addMarkersToMap",
        value: function addMarkersToMap(lat, _long) {
          var position = new google.maps.LatLng(lat, _long);
          var mapMarker = new google.maps.Marker({
            position: position,
            title: this.safety_title,
            // latitude: marker.latitude,
            // longitude: marker.longitude,
            animation: 'DROP',
            draggable: true
          });
          mapMarker.setMap(this.map);
          google.maps.event.addListener(mapMarker, 'dragend', function () {
            var _this2 = this;

            console.log(mapMarker);
            var markerlatlong = mapMarker.getPosition();
            console.log("latlong" + markerlatlong);
            console.log("lat" + mapMarker.getPosition().lat());
            console.log("long" + mapMarker.getPosition().lng()); //this.placeMarkerAndPanTo(e.latLng, this.map);

            var lat = JSON.stringify(mapMarker.getPosition().lat());
            var longi = JSON.stringify(mapMarker.getPosition().lng()); //code for getting formatted address from the selected latitude and longitude 

            var geocoder = new google.maps.Geocoder();
            var latlng = {
              lat: parseFloat(lat),
              lng: parseFloat(longi)
            };
            geocoder.geocode({
              location: latlng
            }, function (results, status) {
              if (status === "OK") {
                if (results[0]) {
                  console.log(results[0]);
                  _this2.title = results[0].formatted_address; // localStorage.setItem('address_police', this.title)

                  console.log(_this2.title);

                  _this2.editsafetyForm.controls['location'].setValue(_this2.title);

                  _this2.autoaddress = [];
                  var street_number = '';
                  var route = '';
                  var localbuilding = '';
                  _this2.country = undefined;
                  _this2.state = undefined;
                  _this2.city = undefined;
                  _this2.landmark = undefined;

                  _this2.autocomplete.getPlace();

                  var autoadd = results[0];
                  _this2.autoadd1 = autoadd.address_components;

                  for (var i = 0; i < _this2.autoadd1.length; i++) {
                    if (_this2.autoadd1[i].types[0] == 'country') {
                      _this2.country = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'administrative_area_level_1') {
                      _this2.state = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'locality') {
                      _this2.city = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'postal_code') {} else if (_this2.autoadd1[i].types[0] == 'sublocality_level_1') {
                      if (_this2.landmark == undefined || _this2.landmark == null || _this2.landmark == '') {
                        _this2.landmark = _this2.autoadd1[i].long_name;
                      }
                    } else if (_this2.autoadd1[i].types[0] == "sublocality_level_3" || _this2.autoadd1[i].types[0] == "sublocality") {
                      if (_this2.landmark == undefined || _this2.landmark == null || _this2.landmark == '') {
                        _this2.landmark = _this2.autoadd1[i].long_name;
                      }
                    } else if (_this2.autoadd1[i].types[0] == 'sublocality_level_2') {
                      localbuilding = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'street_number') {
                      street_number = _this2.autoadd1[i].long_name;
                    } else if (_this2.autoadd1[i].types[0] == 'route') {
                      route = _this2.autoadd1[i].long_name;
                    }

                    _this2.area = street_number + ' ' + route;
                    _this2.area = _this2.area.trim() == '' ? localbuilding : _this2.area;
                  }

                  for (var i = 0; i < _this2.autoadd1.length; i++) {
                    _this2.autoaddress.push(_this2.autoadd1[i].long_name);
                  } // this.autoaddress = autoadd.long_name.join(',')


                  console.log(_this2.autoaddress);

                  var final_result = _this2.autoaddress.join(',');

                  console.log(final_result);
                  console.log(_this2.autoaddress); // this.searchForm.value.location = '';

                  _this2.editsafetyForm.controls['location'].setValue(final_result);
                } else {}
              } else {}
            });
          }.bind(this));
        }
      }, {
        key: "initAutocomplete",
        value: function initAutocomplete() {
          var _this3 = this;

          console.log("hiiiiiiiiii");
          this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete3').getElementsByTagName('input')[0], {
            types: ["geocode"]
          }); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          this.autocomplete.setFields(["address_component"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          this.autocomplete.addListener("place_changed", function () {
            console.log("autocomplete", _this3.autocomplete.getPlace());
            _this3.autoaddress = [];
            var street_number = '';
            var route = '';
            var localbuilding = '';

            _this3.autocomplete.getPlace();

            var autoadd = _this3.autocomplete.getPlace();

            _this3.autoadd1 = autoadd.address_components;

            for (var i = 0; i < _this3.autoadd1.length; i++) {
              if (_this3.autoadd1[i].types[0] == 'country') {
                _this3.country = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'administrative_area_level_1') {
                _this3.state = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'locality') {
                _this3.city = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'postal_code') {} else if (_this3.autoadd1[i].types[0] == 'sublocality_level_1') {
                _this3.area = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == "sublocality_level_3" || _this3.autoadd1[i].types[0] == "sublocality") {
                _this3.landmark = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'sublocality_level_2') {
                localbuilding = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'street_number') {
                street_number = _this3.autoadd1[i].long_name;
              } else if (_this3.autoadd1[i].types[0] == 'route') {
                route = _this3.autoadd1[i].long_name;
              }

              _this3.area = street_number + ' ' + route;
              _this3.area = _this3.area.trim() == '' ? localbuilding : _this3.area;
              console.log(_this3.country);
              console.log(_this3.state);
              console.log(_this3.city);
              console.log(_this3.area);
              console.log(_this3.location);
            }

            for (var i = 0; i < _this3.autoadd1.length; i++) {
              _this3.autoaddress.push(_this3.autoadd1[i].long_name);
            } // this.autoaddress = autoadd.long_name.join(',')


            console.log(_this3.autoaddress);

            var final_result = _this3.autoaddress.join(',');

            console.log(final_result);
            console.log(_this3.autoaddress); // this.searchForm.value.location = '';

            _this3.editsafetyForm.controls['location'].setValue(final_result); // this.address = this.autoadd1[0].long_name


            console.log("autocomplt", _this3.address1); // localStorage.setItem('City_name', this.address)
          });
        }
      }, {
        key: "getlatlong",
        value: function getlatlong(value) {
          var _this4 = this;

          console.log(value);
          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = value;
          geocoder.geocode({
            'address': address
          }, function (results) {
            if (results[0].formatted_address) {
              console.log(results);
              _this4.address = JSON.stringify(results[0].formatted_address);
              _this4.lat = JSON.stringify(results[0].geometry.location.lat());
              _this4["long"] = JSON.stringify(results[0].geometry.location.lng());
              console.log(_this4.lat);
              console.log(_this4["long"]);

              if (_this4.lat != undefined && _this4["long"] != undefined) {
                _this4.editsafetyForm.controls['lat'].setValue(_this4.lat);

                _this4.editsafetyForm.controls['long'].setValue(_this4["long"]);

                _this4.showMap();
              }
            }
          }); // this.showMap()
        }
      }, {
        key: "editSafetyTip",
        value: function editSafetyTip() {
          var _this5 = this;

          // safety_tip_id:4
          // user_id:0
          // location_city_state:Ghatkopar East, Mumbai, Maharashtra, India Mumbai Maharashtra
          // location:Ghatkopar East, Mumbai, Maharashtra, India
          // landmark:near bus stop
          // city:Mumbai
          // state:Maharashtra
          // country:India
          // exact_location:"Ghatkopar, Near Ghatkopar Station East, Link Rd, Best Colony, Mankur, Mumbai, Maharashtra 400075, India"
          // map_lat:19.0876229
          // map_lon:72.9177548
          // safety_tip_title:testing title updated
          // safety_tip_desc:testing description
          console.log("location", this.editsafetyForm); // if(this.editsafetyForm)

          this.address = localStorage.getItem('City_name');
          var user_id = localStorage.getItem('userId');
          var data = new FormData();

          if (this.editsafetyForm.value.lat && this.editsafetyForm.value["long"] != '') {
            data.append('map_lat', this.editsafetyForm.value.lat);
            data.append('map_lon', this.editsafetyForm.value["long"]);
          } else {
            data.append('map_lat', this.lat);
            data.append('map_lon', this["long"]);
          }

          data.append('safety_tip_id', this.safetip_id);
          data.append('user_id', user_id);
          data.append('location_city_state', this.editsafetyForm.value.location);
          data.append('location', this.editsafetyForm.value.location);
          data.append('landmark', this.landmark);
          data.append('city', this.city);
          data.append('state', this.state);
          data.append('country', this.country);
          data.append('exact_location', this.editsafetyForm.value.location);
          data.append('safety_tip_title', this.editsafetyForm.value.safety_title);
          data.append('safety_tip_desc', this.editsafetyForm.value.safety_desc);
          this.sharedservice.sharedPostRequest('safety-tip/update', data).subscribe(function (rdata) {
            console.log(rdata);

            if (rdata.status == true) {
              _this5.navContrl.navigateForward('/mysafety');
            }
          }, function (error) {}, function () {}); // this.httpClient.post(this.apiUrl +'update', data)
          //   .subscribe((rdata: any) => {
          //     console.log("rdata", rdata)
          //   if(rdata.message ==  "Safety Tip updated successfully")
          //   {
          //     this.navContrl.navigateForward('/mysafetyreport')
          //   }
          //   }, error => {
          //   });
        }
      }]);

      return EditsafetytipPage;
    }();

    EditsafetytipPage.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], EditsafetytipPage.prototype, "mapRef", void 0);
    EditsafetytipPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editsafetytip',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editsafetytip.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editsafetytip/editsafetytip.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editsafetytip.page.scss */
      "./src/app/editsafetytip/editsafetytip.page.scss"))["default"]]
    })], EditsafetytipPage);
    /***/
  }
}]);
//# sourceMappingURL=editsafetytip-editsafetytip-module-es5.js.map
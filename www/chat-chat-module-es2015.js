(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/home' (click)=\"back()\" icon=\"undefined\" text=\"\" class=\"backbutton\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'chat_with_us' | translate}}</ion-title>\n    <div class=\"homeside\" (click)=\"backtoHome()\" slot=\"end\">\n      <p>{{'home_menu' | translate}}</p>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"chatmain\">\n    <!-- <div class=\"chatday\">TODAY</div> -->\n    <div *ngIf=\"to_User_Id=='0'\">\n          <div *ngIf=\"is_admin_online==false\">\n            <p>{{'chat_default_msg' | translate}}</p>\n            <p class=\"idmsg\">\n              {{'you_can_connect_with_us' | translate}}\n            </p>\n            <p (click)=\"callnumber()\">{{'give_missed_call' | translate}} +91 90155 10510</p> \n            <!-- <p> {{'whatsapp_our_team' | translate}}</p> -->\n            <p>{{'Leave_number' | translate}}</p>\n          </div>\n          <div *ngIf=\"is_admin_online==true\">\n            <p class=\"idmsg1\">{{'is_admin_online' | translate}}</p>\n          </div>\n    </div>\n    <div *ngIf=\"to_User_Id!='0'\">\n      <div *ngFor=\"let item of msgArr\" >\n        <div class=\"messagein\" *ngIf=\"item.sent_by!= 'web'\">\n          <div class=\"message\">\n            <p>{{item.chat_message}}</p>\n            <span class=\"time-right\">{{item.ampmTime}}</span>\n          </div>\n        </div>\n        <div class=\"messageinright\" *ngIf=\"item.sent_by =='web'\">\n          <div class=\"otherright\">\n            <p>{{item.chat_message}}</p>\n            <span class=\"time-right\">{{item.ampmTime}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"messagein\">\n      <div class=\"message\">\n        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n          dolore magna aliquyam erat</p>\n        <span class=\"time-right\">11:00 AM</span>\n      </div>\n\n    </div>\n    <div class=\"messagein\">\n      <div class=\"message\">\n        <p>Sure!</p>\n        <span class=\"time-right\">11:01 AM</span>\n      </div>\n\n    </div>\n    <div class=\"messageinright\">\n      <div class=\"otherright\">\n        <p>Can you tell me about ABC?</p>\n        <span class=\"time-right\">2:00 PM</span>\n\n      </div>\n\n    </div>\n    <div class=\"messageinright\">\n      <div class=\"otherright\">\n        <p>Hi</p>\n        <span class=\"time-right\">4:33 PM</span>\n      </div>\n\n    </div>\n    <div class=\"messagein\">\n      <div class=\"message\">\n        <p>What can we assist you with?!</p>\n        <span class=\"time-right\">4:35 PM</span>\n      </div>\n\n    </div>\n    <div class=\"messagein\">\n      <div class=\"message\">\n        <p>Hi</p>\n        <span class=\"time-right\">4:39 PM</span>\n      </div>\n\n    </div> -->\n  </div>\n  <div class=\"bottomchat\" [ngClass]=\"{'keyboardBottomchat' : bottomClass}\">\n    <ion-item class=\"chatinput\">\n      <ion-textarea rows=\"1\" placeholder=\"{{'type_a_message' | translate}}\" [disabled]=\"to_User_Id=='0'\" [(ngModel)]=\"chat_message\"></ion-textarea>\n      <!-- <ion-input></ion-input> -->\n      <div class=\"sendin\" slot=\"end\">\n        <img src=\"assets/images/icons/plainarrow.svg\" (click)=\"sendmsg()\" />\n      </div>\n    </ion-item>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");








let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n  z-index: 9999;\n}\n\nion-title {\n  color: #2F1153;\n  font-size: 20px;\n  left: 0px;\n  top: 0px;\n  padding-left: 65px;\n  padding-right: 65px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n  font-weight: 400;\n  text-align: center;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.sc-ion-buttons-md-s .button {\n  margin-left: 0;\n}\n\n.idmsg1 {\n  font-size: 18pt;\n}\n\n.sc-ion-buttons-ios-s .button {\n  margin-left: 4px;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.homeside p {\n  color: #592D8D;\n  font-size: 17px;\n  padding-right: 25px;\n  font-weight: 400;\n}\n\n.bottomchat {\n  width: 100%;\n  background: #fff;\n  padding: 20px 10PX;\n  position: fixed;\n  bottom: 28px;\n}\n\n.keyboardBottomchat {\n  width: 100%;\n  background: #fff;\n  padding: 20px 10PX;\n  position: fixed;\n  bottom: 0;\n}\n\n.header-md ion-title {\n  text-align: center;\n}\n\n.chatmain {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  padding: 0 15px;\n  margin-bottom: 120px;\n}\n\n.chatinput {\n  border: 1px solid #592D8D;\n  border-radius: 26px;\n  --highlight-color-focused: transparent;\n  --highlight-color-valid: transparent;\n  --highlight-color-invalid: transparent;\n  --highlight-height:0;\n}\n\n.messagein {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  margin-bottom: 20px !important;\n}\n\n.messageinright {\n  display: flex !important;\n  justify-content: flex-end !important;\n  align-content: center !important;\n  align-items: center !important;\n  margin-bottom: 20px !important;\n}\n\n.messagein .message {\n  padding: 10px !important;\n  transition: all 250ms ease-in-out !important;\n  overflow: hidden !important;\n  background: #F4F5FC !important;\n  display: inline-flex !important;\n  padding: 10px 18px !important;\n  border-radius: 26px !important;\n  text-align: left !important;\n  max-width: 260px !important;\n  word-break: break-all;\n}\n\n.message p {\n  color: #220E0E !important;\n  float: left;\n  margin: 0;\n  font-size: 15px;\n  display: flex;\n  font-weight: 400;\n  word-wrap: break-word;\n}\n\n.message span {\n  color: #aaa;\n  padding-left: 8px;\n  font-size: 11px;\n  align-items: flex-end;\n  display: flex;\n  flex: none;\n}\n\n.time-right {\n  float: right;\n}\n\n.chatday {\n  font-size: 15px;\n  color: #828282;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.otherright {\n  transition: all 250ms ease-in-out !important;\n  overflow: hidden !important;\n  padding: 8px 18px !important;\n  background: #592D8D !important;\n  display: inline-flex !important;\n  max-width: 260px !important;\n  border-radius: 26px !important;\n}\n\n.otherright p {\n  color: #fff;\n  float: left;\n  margin: 0;\n  display: flex;\n  font-size: 15px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.otherright span {\n  color: #fff;\n  padding-left: 8px;\n  font-size: 11px;\n  align-items: flex-end;\n  display: flex;\n  flex: none;\n  word-break: break-all;\n}\n\n.bottomchat ion-textarea {\n  margin-top: 0;\n  align-items: center;\n  align-self: center;\n  --padding-top: 11px;\n  --highlight-background:transparent;\n  --highlight-color-focused: transparent;\n  --highlight-color-valid: transparent;\n  --highlight-color-invalid: transparent;\n  --highlight-height:0;\n}\n\n.sendin {\n  width: 10%;\n  vertical-align: middle;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEseURBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FBOztBREtBO0VBRUEsU0FBQTtBQ0hBOztBRE9BO0VBSUEsOENBQUE7RUFDQSxhQUFBO0FDTEE7O0FEUUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDSixnQkFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFNBO0VBQ0EsY0FBQTtBQ05BOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRE9BO0VBQ0EsZ0JBQUE7QUNKQTs7QURPQTtFQUVBLGtCQUFBO0FDTEE7O0FET0E7RUFFQSx1QkFBQTtBQ0xBOztBRFFBO0VBRUEscUJBQUE7QUNOQTs7QURTQTtFQUVBLGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELGtCQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURTQztFQUVELGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1BBOztBRFVBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1JBOztBRFVBO0VBQ0ksV0FBQTtFQUNKLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ1BBOztBRFNBO0VBRUEsa0JBQUE7QUNQQTs7QURVQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNSQTs7QURXQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDRSxzQ0FBQTtFQUNELG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtBQ1REOztBRFlBO0VBRUksd0JBQUE7RUFDQyxnQ0FBQTtFQUVBLDhCQUFBO0VBQ0QsOEJBQUE7QUNWSjs7QURhQTtFQUVJLHdCQUFBO0VBQ0gsb0NBQUE7RUFDSSxnQ0FBQTtFQUVBLDhCQUFBO0VBQ0QsOEJBQUE7QUNYSjs7QURhQTtFQUVJLHdCQUFBO0VBQ0gsNENBQUE7RUFDRywyQkFBQTtFQUNGLDhCQUFBO0VBQ0UsK0JBQUE7RUFDRCw2QkFBQTtFQUNDLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDWEo7O0FEZUM7RUFFQyx5QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDYkY7O0FEZ0JBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0QsYUFBQTtFQUNBLFVBQUE7QUNiQTs7QURnQkE7RUFDRSxZQUFBO0FDYkY7O0FEaUJBO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNmQTs7QURtQkE7RUFHSyw0Q0FBQTtFQUNELDJCQUFBO0VBQ0MsNEJBQUE7RUFDRiw4QkFBQTtFQUNLLCtCQUFBO0VBQ0osMkJBQUE7RUFDRCw4QkFBQTtBQ2xCSDs7QURxQkE7RUFDQSxXQUFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDRixhQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0kscUJBQUE7QUNsQk47O0FEc0JBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ3BCQTs7QUR1QkE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDSSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDSCxvQkFBQTtBQ3JCRDs7QUR3QkE7RUFFQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDdEJBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnV0dG9uXHJcbntcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG53aWR0aDoyNXB4O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5oZWlnaHQ6MjVweDtcclxubWFyZ2luLWxlZnQ6NHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWlvczpsYXN0LWNoaWxkIC50b29sYmFyLWJhY2tncm91bmQtaW9zXHJcbntcclxuYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5pb24taGVhZGVyXHJcbntcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbmJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbnotaW5kZXg6OTk5OTtcclxufVxyXG5cclxuaW9uLXRpdGxlXHJcbntcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuLmlkbXNnMXtcclxuICAgIGZvbnQtc2l6ZTogMThwdDtcclxufVxyXG4uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbiB7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG4gIFxyXG4uaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyXHJcbntcclxuYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlXHJcbntcclxuLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xyXG5cclxufVxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5oZWFkZXItbWQgaW9uLXRvb2xiYXJcclxue1xyXG4tLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcclxuICAgIC0tbWluLWhlaWdodDo3NXB4O31cclxuXHRcclxuXHQuaG9tZXNpZGUgcFxyXG57XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbmZvbnQtc2l6ZToxN3B4O1xyXG5wYWRkaW5nLXJpZ2h0OjI1cHg7XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxufVxyXG5cclxuLmJvdHRvbWNoYXRcclxue1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kOiNmZmY7XHJcbnBhZGRpbmc6MjBweCAxMFBYO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuYm90dG9tOjI4cHg7XHJcbn1cclxuLmtleWJvYXJkQm90dG9tY2hhdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQ6I2ZmZjtcclxucGFkZGluZzoyMHB4IDEwUFg7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5ib3R0b206MDtcclxufVxyXG4uaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uY2hhdG1haW5cclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luLXRvcDoyMHB4O1xyXG5wYWRkaW5nOjAgMTVweDtcclxubWFyZ2luLWJvdHRvbToxMjBweDtcclxufVxyXG5cclxuLmNoYXRpbnB1dFxyXG57XHJcbmJvcmRlcjoxcHggc29saWQgIzU5MkQ4RDtcclxuYm9yZGVyLXJhZGl1czoyNnB4O1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHRyYW5zcGFyZW50O1xyXG4gLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogdHJhbnNwYXJlbnQ7XHJcbiAtLWhpZ2hsaWdodC1oZWlnaHQ6MDtcclxufVxyXG5cclxuLm1lc3NhZ2VpblxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuXHQgICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2VpbnJpZ2h0XHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQhaW1wb3J0YW50O1xyXG5cdCAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tZXNzYWdlaW4gLm1lc3NhZ2Vcclxue1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG5cdHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG5cdCBiYWNrZ3JvdW5kOiAjRjRGNUZDICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG5cdCAgcGFkZGluZzogMTBweCAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsXHJcbiAgICBcclxuXHR9XHJcblx0XHJcblx0Lm1lc3NhZ2UgcFxyXG57XHJcbiAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbjowO1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubWVzc2FnZSBzcGFue1xyXG4gY29sb3I6ICNhYWE7XHJcbiBwYWRkaW5nLWxlZnQ6OHB4O1xyXG4gZm9udC1zaXplOjExcHg7XHJcbiBhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4OiBub25lO1xyXG59XHJcblxyXG4udGltZS1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gXHJcbn1cclxuXHJcbi5jaGF0ZGF5XHJcbntcclxuZm9udC1zaXplOjE1cHg7XHJcbmNvbG9yOiM4MjgyODI7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tdG9wOjE1cHg7XHJcbm1hcmdpbi1ib3R0b206MTVweDtcclxuXHJcbn1cclxuXHJcbi5vdGhlcnJpZ2h0XHJcbntcclxuXHJcblx0ICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG5cdCAgICBwYWRkaW5nOiA4cHggMThweCAhaW1wb3J0YW50O1xyXG5cdFx0IGJhY2tncm91bmQ6ICM1OTJEOEQgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAyNjBweCAhaW1wb3J0YW50OyBcclxuXHQgIGJvcmRlci1yYWRpdXM6IDI2cHggIWltcG9ydGFudDsgIFxyXG59XHJcblxyXG4ub3RoZXJyaWdodCBwe1xyXG5jb2xvcjojZmZmO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgbWFyZ2luOjA7XHJcbmRpc3BsYXk6ZmxleDtcclxuICBmb250LXNpemU6MTVweDtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxyXG5cclxufVxyXG5cclxuLm90aGVycmlnaHQgc3BhblxyXG57XHJcbmNvbG9yOiNmZmY7XHJcbnBhZGRpbmctbGVmdDo4cHg7XHJcbmZvbnQtc2l6ZToxMXB4O1xyXG5hbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4OiBub25lO1xyXG53b3JkLWJyZWFrOiBicmVhay1hbGxcclxufVxyXG5cclxuLmJvdHRvbWNoYXQgaW9uLXRleHRhcmVhXHJcbntcclxubWFyZ2luLXRvcDowO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5hbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi0tcGFkZGluZy10b3A6IDExcHg7XHJcbi0taGlnaGxpZ2h0LWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB0cmFuc3BhcmVudDtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHRyYW5zcGFyZW50O1xyXG5cdC0taGlnaGxpZ2h0LWhlaWdodDowO1xyXG59XHJcblxyXG4uc2VuZGluXHJcbntcclxud2lkdGg6MTAlO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5kaXNwbGF5OmZsZXg7XHJcbn1cclxuXHQiLCIuYmFja2J1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5pZG1zZzEge1xuICBmb250LXNpemU6IDE4cHQ7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5ob21lc2lkZSBwIHtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJvdHRvbWNoYXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAxMFBYO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjhweDtcbn1cblxuLmtleWJvYXJkQm90dG9tY2hhdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDEwUFg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuXG4uaGVhZGVyLW1kIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNoYXRtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbn1cblxuLmNoYXRpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTJEOEQ7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogdHJhbnNwYXJlbnQ7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6MDtcbn1cblxuLm1lc3NhZ2VpbiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlaW5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2VpbiAubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI0Y0RjVGQyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDE4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjZweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjYwcHggIWltcG9ydGFudDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubWVzc2FnZSBwIHtcbiAgY29sb3I6ICMyMjBFMEUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tZXNzYWdlIHNwYW4ge1xuICBjb2xvcjogI2FhYTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiBub25lO1xufVxuXG4udGltZS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNoYXRkYXkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5vdGhlcnJpZ2h0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDE4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzU5MkQ4RCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHggIWltcG9ydGFudDtcbn1cblxuLm90aGVycmlnaHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm90aGVycmlnaHQgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IG5vbmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmJvdHRvbWNoYXQgaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAtLXBhZGRpbmctdG9wOiAxMXB4O1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OjA7XG59XG5cbi5zZW5kaW4ge1xuICB3aWR0aDogMTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








// import { setInterval } from 'timers';
let ChatPage = class ChatPage {
    constructor(navController, translate, callNumber, apiProvider, keyboard, alertController) {
        this.navController = navController;
        this.translate = translate;
        this.callNumber = callNumber;
        this.apiProvider = apiProvider;
        this.keyboard = keyboard;
        this.alertController = alertController;
        this.msgArr = [];
        this.chat_message = "";
        this.admin_sync = false;
        this.bottomClass = false;
        this.is_admin_online = true;
        this.to_User_Id = '0';
        this.prevChatLen = 0;
        //Testing variables 
        this.msgcounter = 0;
        this.isUser = 'false';
    }
    ngOnInit() {
        this.client_id = localStorage.getItem('Client_id');
        this.from_User_Id = localStorage.getItem('incident_id');
        this.initMessages();
    }
    callnumber() {
        this.callNumber.callNumber('+91 90155 10510', true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    initMessages() {
        // console.log(this.formatAmPm(new Date(date)))
        this.startChat();
        this.chatInterval = setInterval(() => {
            this.chat_Login_Update();
            console.log('calling update api');
        }, 4000);
    }
    ionViewWillEnter() {
        this.keyboard.onKeyboardWillShow().subscribe((res) => {
            this.bottomClass = true;
        });
        this.keyboard.onKeyboardHide().subscribe((res) => {
            this.bottomClass = false;
        });
    }
    startChat() {
        console.log(this.from_User_Id, this.to_User_Id);
        this.apiProvider.presentLoadingDefault();
        let data = new FormData();
        data.append('client_id', this.client_id);
        data.append('incident_id', this.from_User_Id);
        this.apiProvider.startChat('chat-start', data).subscribe((res) => {
            console.log(res);
            this.guest_login_details_id = res.data.guest_login_details_id;
            console.log(this.guest_login_details_id);
        }, error => {
            console.log(error);
        });
    }
    chat_Login_Update() {
        // clearInterval(this.chatInterval)
        console.log(this.to_User_Id);
        let chatlogData = new FormData();
        chatlogData.append('client_id', this.client_id);
        chatlogData.append('from_user_id', this.from_User_Id);
        chatlogData.append('to_user_id', this.to_User_Id.toString());
        chatlogData.append('guest_login_details_id', this.guest_login_details_id);
        this.apiProvider.chatsync('chat-login-update', chatlogData).subscribe((res) => {
            console.log(res);
            this.admin_sync = res.admin_sync;
            this.to_User_Id = res.to_user_id;
            this.is_admin_online = res.is_admin_online;
            this.msgArr = res.chat_history;
            this.newChatLen = this.msgArr.length;
            if (this.newChatLen > this.prevChatLen) {
                this.contentArea.scrollToBottom();
                this.prevChatLen = this.newChatLen;
            }
            else { }
            for (let i = 0; i < this.msgArr.length; i++) {
                this.msgArr[i].ampmTime = this.formatAmPm(this.msgArr[i].timestamp);
                this.msgArr[i].chat_message + " ";
            }
            console.log(this.guest_login_details_id);
        }, error => {
            console.log(error);
        });
    }
    formatAmPm(dates) {
        dates = dates + 'Z';
        //console.log('Date Passed to datefunction', dates);
        var date1;
        date1 = new Date(dates.replace(/ /g, "T"));
        var hours = date1.getHours();
        var minutes;
        minutes = date1.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    sendmsg() {
        if (this.to_User_Id != '0') {
            let myStaticChat = {
                'chat_message': this.chat_message,
                'chat_message_id': "31",
                'client_id': this.client_id,
                'from_user_id': this.from_User_Id,
                'status': "1",
                'timestamp': '',
                'sent_by': 'web',
                'to_user_id': this.to_User_Id,
            };
            if (this.chat_message.length > 0) {
                let chat = new FormData();
                chat.append('chat_message', this.chat_message);
                chat.append('to_user_id', this.to_User_Id.toString());
                chat.append('from_user_id', this.from_User_Id);
                chat.append('client_id', this.client_id);
                chat.append('sent_by', 'web');
                this.apiProvider.insertChat('chat-insert', chat).subscribe((res) => {
                    console.log(res);
                    this.msgArr.push(myStaticChat);
                    this.chat_message = '';
                    this.contentArea.scrollToBottom();
                }, error => {
                    console.log(error);
                });
            }
        }
    }
    ionViewWillLeave() {
        this.unsyncAdminUser();
    }
    unsyncAdminUser() {
        let unsyncData = new FormData();
        unsyncData.append('client_id', this.client_id);
        unsyncData.append('from_user_id', this.from_User_Id);
        this.apiProvider.unsyncAdminUser('chat-unsync-user-guest', unsyncData).subscribe((res) => {
            console.log(res);
            if (res.status == false) {
                clearInterval(this.chatInterval);
            }
        }, error => {
            console.log(error);
        });
    }
    backtoHome() {
        this.presentAlert();
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var message;
            var no;
            var yes;
            this.translate.get('do_you_want_to_leave_the_chat').subscribe((res) => {
                message = res;
            });
            this.translate.get('no').subscribe((res) => {
                no = res;
            });
            this.translate.get('yes').subscribe((res) => {
                yes = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                message: message,
                mode: 'ios',
                buttons: [{
                        text: no,
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: yes,
                        handler: () => {
                            console.log('Buy clicked');
                            this.navController.navigateForward('/home');
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ChatPage.prototype, "contentArea", void 0);
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")).default]
    })
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map
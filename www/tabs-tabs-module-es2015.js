(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\" >\n      <ion-icon class=\"home\" ></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"tab2\"> -->\n      <!-- <ion-icon class=\"hospital\" ></ion-icon> -->\n      <!-- <ion-label>Hospitals</ion-label> -->\n    <!-- </ion-tab-button> -->\n    <ion-tab-button tab=\"help\">\n   \n    </ion-tab-button>\n    <!-- <ion-tab-button tab=\"tab3\"> -->\n      <!-- <ion-icon  class=\"policestation\"></ion-icon> -->\n      <!-- <ion-label>Police Stations</ion-label> -->\n    <!-- </ion-tab-button> -->\n\t <ion-tab-button tab=\"menu\">\n      <ion-icon class=\"menu\"></ion-icon>\n      <ion-label>Menu</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n  \n</ion-tabs>\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\"  (click)=\"help()\">\n    <ion-fab-button>\n        <img src=\"assets/images/icons/help.svg\"/>\n    </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~preframingtwo-preframingtwo-module~primaryform-primaryform-module~safteytip~fdc2700d"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'help',
                loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ../help/help.module */ "./src/app/help/help.module.ts")).then(m => m.HelpPageModule)
            },
            {
                path: 'menu',
                loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ../menu/menu.module */ "./src/app/menu/menu.module.ts")).then(m => m.MenuPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs-ios a[aria-selected=false] span {\n  color: #778391;\n}\n.tabs-ios a[aria-selected=false] .tab-button-icon[aria-label=home] {\n  background-image: url(/assets/images/icons/home.svg);\n}\n.tabs-ios a[aria-selected=true] span {\n  color: #ed4046;\n}\n.tabs-ios a[aria-selected=true] .tab-button-icon[aria-label=home] {\n  background-image: url(/assets/images/icons/homeactive.svg);\n}\nion-tab-button .home {\n  background-image: url(/assets/images/icons/home.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .home {\n  background-image: url(/assets/images/icons/home_active.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .home {\n  background-image: url(/assets/images/icons/home.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .home {\n  background-image: url(/assets/images/icons/home_active.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .hospital {\n  background-image: url(/assets/images/icons/hospital.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .help {\n  background-image: url(/assets/images/icons/help.svg);\n  width: 51px;\n  height: 51px;\n  background-size: contain;\n  margin-top: 5px;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .hospital {\n  background-image: url(/assets/images/icons/hospital_active.svg);\n  width: 25px;\n  height: 25px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n:focus {\n  outline: -webkit-focus-ring-color auto 0;\n}\nion-tab-button .policestation {\n  background-image: url(/assets/images/icons/police.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .policestation {\n  background-image: url(/assets/images/icons/police_active.svg);\n  width: 31px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button .menu {\n  background-image: url(/assets/images/icons/menu.svg);\n  width: 35px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nion-tab-button.tab-selected .menu {\n  background-image: url(/assets/images/icons/menu_active.svg);\n  width: 35px;\n  height: 35px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.fab-vertical-bottom {\n  bottom: 5px;\n}\nion-fab-button {\n  width: 60px;\n  height: 60px;\n  border: none;\n  --background: transparent;\n  --color: #D90D0D;\n  font-weight: 600;\n  border-radius: 250px;\n  --box-shadow:none;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-fab-button img {\n  width: 100%;\n  --box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  margin-top: 10px;\n}\nion-tab-bar {\n  height: 65px;\n  padding: 0 10px;\n  --border:none;\n  box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n.tab-has-label ion-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ08sY0FBQTtBQ0FUO0FEQ1E7RUFDRSxvREFBQTtBQ0NWO0FET1E7RUFDRSxjQUFBO0FDTFY7QURPTTtFQUNJLDBEQUFBO0FDTFY7QURZRTtFQUVBLG9EQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDVko7QURhRTtFQUVBLDJEQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDWEo7QURjRTtFQUVBLG9EQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDWko7QURlRTtFQUVBLDJEQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDYko7QURnQkc7RUFFRCx3REFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ2RKO0FEa0JHO0VBRUQsb0RBQUE7RUFDRCxXQUFBO0VBQ0csWUFBQTtFQUNBLHdCQUFBO0VBQ0osZUFBQTtFQUNJLDRCQUFBO0FDaEJKO0FEbUJFO0VBRUEsK0RBQUE7RUFDRCxXQUFBO0VBQ0csWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNqQko7QURxQkE7RUFDSSx3Q0FBQTtBQ2xCSjtBRHFCQztFQUVDLHNEQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDbkJKO0FEc0JFO0VBRUEsNkRBQUE7RUFDRCxXQUFBO0VBQ0csWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNwQko7QUR1QkM7RUFFQyxvREFBQTtFQUNELFdBQUE7RUFDRyxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ3JCSjtBRHdCRTtFQUVBLDJEQUFBO0VBQ0QsV0FBQTtFQUNHLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDdEJKO0FEeUJDO0VBRUEsV0FBQTtBQ3ZCRDtBRDBCQztFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNHLHlCQUFBO0VBQ0gsZ0JBQUE7RUFDQSxnQkFBQTtFQUNHLG9CQUFBO0VBQ0gsaUJBQUE7RUFDSSxtQ0FBQTtFQUNELGlDQUFBO0VBQ0EsK0JBQUE7QUN4Qko7QUQ0QkM7RUFFQSxXQUFBO0VBQ0EsbUhBQUE7RUFDQSxnQkFBQTtBQzFCRDtBRDZCRTtFQUVBLFlBQUE7RUFDRixlQUFBO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0FDM0JGO0FEOEJDO0VBRUQsZUFBQTtFQUNBLGdCQUFBO0FDNUJBIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAudGFicy1pb3Mge2FbYXJpYS1zZWxlY3RlZD1mYWxzZV17XG5cdFx0c3BhbiB7XG4gICAgICAgICBjb2xvcjogIzc3ODM5MTt9XG4gICAgICAgIC50YWItYnV0dG9uLWljb25bYXJpYS1sYWJlbD1cImhvbWVcIl0ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBcblx0XHRcbiAgICAgIH1cbiAgICAgYVthcmlhLXNlbGVjdGVkPXRydWVdIHtcbiAgICAgICAvL2bDvGhyIGV2ZW50dWVsbGVuIHRleHRcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICNlZDQwNDY7IC8vd2hhdGV2ZXIgY29sb3VyIHlvdSB3YW50IHRvIHVzZSBmb3IgdGhlIHRleHRcbiAgICAgICAgfVxuICAgICAgLnRhYi1idXR0b24taWNvblthcmlhLWxhYmVsPWhvbWVdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZWFjdGl2ZS5zdmcpO1xuICAgICAgICB9XG4gICAgICBcblx0XHRcbiAgICAgIH1cbiAgICB9XG5cdFxuXHQgaW9uLXRhYi1idXR0b24gLmhvbWVcblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lLnN2Zyk7XG5cdHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblx0IFxuXHQgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5ob21lXG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZV9hY3RpdmUuc3ZnKTtcblx0d2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgfVxuXHQgXG5cdCBpb24tdGFiLWJ1dHRvbiAuaG9tZVxuXHQge1xuXHQgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWUuc3ZnKTtcblx0d2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgfVxuXHQgXG5cdCBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLmhvbWVcblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lX2FjdGl2ZS5zdmcpO1xuXHR3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdCB9XG5cdCBcblx0ICBpb24tdGFiLWJ1dHRvbiAuaG9zcGl0YWxcblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob3NwaXRhbC5zdmcpO1xuXHR3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFxuXHQgfVxuXHQgXG5cdCAgaW9uLXRhYi1idXR0b24gLmhlbHBcblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9oZWxwLnN2Zyk7XG5cdHdpZHRoOiA1MXB4O1xuICAgIGhlaWdodDogNTFweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5tYXJnaW4tdG9wOjVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgfVxuXHQgXG5cdCBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLmhvc3BpdGFsXG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9zcGl0YWxfYWN0aXZlLnN2Zyk7XG5cdHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblxuXG46Zm9jdXMge1xuICAgIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDA7XG59XG5cbiBpb24tdGFiLWJ1dHRvbiAucG9saWNlc3RhdGlvblxuXHQge1xuXHQgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3BvbGljZS5zdmcpO1xuXHR3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdCB9XG5cdCBcblx0IGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCAucG9saWNlc3RhdGlvblxuXHQge1xuXHQgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL3BvbGljZV9hY3RpdmUuc3ZnKTtcblx0d2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O31cblxuXG4gaW9uLXRhYi1idXR0b24gLm1lbnVcblx0IHtcblx0IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LnN2Zyk7XG5cdHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0IH1cblx0IFxuXHQgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5tZW51XG5cdCB7XG5cdCBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudV9hY3RpdmUuc3ZnKTtcblx0d2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQgfVxuXHQgXG5cdC5mYWItdmVydGljYWwtYm90dG9tXG5cdHtcblx0Ym90dG9tOjVweDtcblx0fVxuXHRcblx0aW9uLWZhYi1idXR0b25cblx0e1xuXHR3aWR0aDo2MHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0Ym9yZGVyOm5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0LS1jb2xvcjogI0Q5MEQwRDtcblx0Zm9udC13ZWlnaHQ6NjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1MHB4O1xuXHQtLWJveC1zaGFkb3c6bm9uZTtcblx0ICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuXG5cdH1cblx0XG5cdGlvbi1mYWItYnV0dG9uIGltZ1xuXHR7XG5cdHdpZHRoOjEwMCU7XG5cdC0tYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdG1hcmdpbi10b3A6MTBweDtcblx0fVxuXHQgXG5cdCBpb24tdGFiLWJhclxuXHQge1xuXHQgaGVpZ2h0OjY1cHg7XG5wYWRkaW5nOjAgMTBweDtcblx0IC0tYm9yZGVyOm5vbmU7XG5cdCBib3gtc2hhZG93OiAwcHggLTVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcblx0IH1cblxuIC50YWItaGFzLWxhYmVsIGlvbi1sYWJlbFxue1xuZm9udC1zaXplOjEycHg7XG5mb250LXdlaWdodDo1MDA7XG59XG4iLCIudGFicy1pb3MgYVthcmlhLXNlbGVjdGVkPWZhbHNlXSBzcGFuIHtcbiAgY29sb3I6ICM3NzgzOTE7XG59XG4udGFicy1pb3MgYVthcmlhLXNlbGVjdGVkPWZhbHNlXSAudGFiLWJ1dHRvbi1pY29uW2FyaWEtbGFiZWw9aG9tZV0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZS5zdmcpO1xufVxuLnRhYnMtaW9zIGFbYXJpYS1zZWxlY3RlZD10cnVlXSBzcGFuIHtcbiAgY29sb3I6ICNlZDQwNDY7XG59XG4udGFicy1pb3MgYVthcmlhLXNlbGVjdGVkPXRydWVdIC50YWItYnV0dG9uLWljb25bYXJpYS1sYWJlbD1ob21lXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lYWN0aXZlLnN2Zyk7XG59XG5cbmlvbi10YWItYnV0dG9uIC5ob21lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWUuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLmhvbWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaG9tZV9hY3RpdmUuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tdGFiLWJ1dHRvbiAuaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob21lLnN2Zyk7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5ob21lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvbWVfYWN0aXZlLnN2Zyk7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24gLmhvc3BpdGFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2hvc3BpdGFsLnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24gLmhlbHAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaGVscC5zdmcpO1xuICB3aWR0aDogNTFweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC5ob3NwaXRhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9ob3NwaXRhbF9hY3RpdmUuc3ZnKTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAwO1xufVxuXG5pb24tdGFiLWJ1dHRvbiAucG9saWNlc3RhdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9wb2xpY2Uuc3ZnKTtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLnBvbGljZXN0YXRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcG9saWNlX2FjdGl2ZS5zdmcpO1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmlvbi10YWItYnV0dG9uIC5tZW51IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnUuc3ZnKTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLm1lbnUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudV9hY3RpdmUuc3ZnKTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZmFiLXZlcnRpY2FsLWJvdHRvbSB7XG4gIGJvdHRvbTogNXB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI0Q5MEQwRDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMjUwcHg7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZmFiLWJ1dHRvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgLS1ib3JkZXI6bm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50YWItaGFzLWxhYmVsIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let TabsPage = class TabsPage {
    constructor(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    help() {
        this.navController.navigateForward(`/help`);
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
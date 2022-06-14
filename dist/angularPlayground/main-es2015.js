(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/decimalPipe/decimal-pipe.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/decimalPipe/decimal-pipe.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Decimal Pipe</h3>\r\n<form [formGroup]=\"myForm\">\r\n  <div class=\"grid p-1\">Value: {{ myForm.value | json }}</div>\r\n  <hr />\r\n  <div class=\"grid\">\r\n    <div class=\"col\">\r\n      <span class=\"p-float-label mr-6\">\r\n        <input\r\n          id=\"someNumber\"\r\n          type=\"number\"\r\n          pInputText\r\n          placeholder=\"someNumber\"\r\n          formControlName=\"someNumber\"\r\n          class=\"mr-3\"\r\n          (change)=\"transformDecimal(getControl('someNumber'))\"\r\n        />\r\n        <label for=\"someNumber\" class=\"pr-1\">Number</label>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Dialog</h3>\r\n<p-button\r\n  (click)=\"displayModalDialog()\"\r\n  icon=\"pi pi-external-link\"\r\n  label=\"View\"\r\n>\r\n</p-button>\r\n\r\n<p-dialog\r\n  header=\"About GeeksforGeeks\"\r\n  [(visible)]=\"displayModal\"\r\n  [modal]=\"true\"\r\n  [draggable]=\"true\"\r\n  [resizable]=\"true\"\r\n>\r\n  <p class=\"p-m-0\">\r\n    A Computer Science portal for geeks. It contains well written, well thought\r\n    and well-explained computer science and programming articles. With the idea\r\n    of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus\r\n    started a dream, GeeksforGeeks. Whether programming excites you or you feel\r\n    stifled, wondering how to prepare for interview questions or how to ace data\r\n    structures and algorithms, GeeksforGeeks is a one-stop solution.\r\n  </p>\r\n\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button\r\n      icon=\"pi pi-check\"\r\n      (click)=\"displayModal = false\"\r\n      label=\"OK\"\r\n      class=\"p-button-text\"\r\n    >\r\n    </p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dynamic-form/dynamic-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dynamic-form/dynamic-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Dynamic Form</h3>\r\n<form [formGroup]=\"myForm\">\r\n  <div class=\"grid p-1\">Value: {{ myForm.value | json }}</div>\r\n  <hr />\r\n  <div class=\"grid\">\r\n    <div class=\"col\">\r\n      <span class=\"p-float-label mr-6\">\r\n        <input\r\n          id=\"email\"\r\n          type=\"text\"\r\n          pInputText\r\n          placeholder=\"email\"\r\n          formControlName=\"email\"\r\n          class=\"mr-3\"\r\n        />\r\n        <label for=\"email\" class=\"pr-1\">Email</label>\r\n      </span>\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col\">\r\n      <p-button\r\n        label=\"Add Phone Number\"\r\n        (onClick)=\"addPhone()\"\r\n        icon=\"pi pi-phone\"\r\n        iconPos=\"left\"\r\n        class=\"pl-2\"\r\n      ></p-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"grid p-1\">\r\n    <div class=\"col\">\r\n      <div formArrayName=\"phones\">\r\n        <div\r\n          class=\"grid col p-1\"\r\n          *ngFor=\"let phone of phoneForms.controls; let i = index\"\r\n          [formGroupName]=\"i\"\r\n        >\r\n          <span class=\"p-float-label mr-6\">\r\n            <input\r\n              id=\"area\"\r\n              type=\"text\"\r\n              pInputText\r\n              placeholder=\"area\"\r\n              formControlName=\"area\"\r\n              class=\"mr-3\"\r\n            />\r\n            <label for=\"area\" class=\"pr-1\">Area</label>\r\n          </span>\r\n\r\n          <span class=\"p-float-label mr-6\">\r\n            <input\r\n              id=\"prefix\"\r\n              type=\"text\"\r\n              pInputText\r\n              placeholder=\"prefix\"\r\n              formControlName=\"prefix\"\r\n              class=\"mr-3\"\r\n            />\r\n            <label for=\"prefix\" class=\"pr-1\">Prefix</label>\r\n          </span>\r\n\r\n          <span class=\"p-float-label mr-6\">\r\n            <input\r\n              id=\"line\"\r\n              type=\"text\"\r\n              pInputText\r\n              placeholder=\"line\"\r\n              formControlName=\"line\"\r\n              class=\"mr-3\"\r\n            />\r\n            <label for=\"line\" class=\"pr-1\">Line</label>\r\n          </span>\r\n\r\n          <p-button\r\n            label=\"Delete\"\r\n            (onClick)=\"deletePhone(i)\"\r\n            icon=\"pi pi-trash\"\r\n            iconPos=\"right\"\r\n          ></p-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-button\r\n    label=\"Submit\"\r\n    (onClick)=\"onSubmit()\"\r\n    icon=\"pi pi-send\"\r\n    iconPos=\"left\"\r\n  ></p-button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>My Angular Playground!</h1>\r\n\r\n<section>\r\n  <app-dialog></app-dialog>\r\n</section>\r\n\r\n<section>\r\n  <app-dynamic-form></app-dynamic-form>\r\n</section>\r\n\r\n<section>\r\n  <app-decimal-pipe-form></app-decimal-pipe-form>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{ path: "", component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "angularPlayground";
    }
    ngOnInit() { }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ "./src/app/components/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _components_decimalPipe_decimal_pipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/decimalPipe/decimal-pipe.component */ "./src/app/components/decimalPipe/decimal-pipe.component.ts");
/* harmony import */ var _primeNG_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./primeNG.module */ "./src/app/primeNG.module.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








// Components




// PrimeNG Imports



let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"],
            _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormComponent"],
            _components_decimalPipe_decimal_pipe_component__WEBPACK_IMPORTED_MODULE_11__["DecimalPipeFormComponent"],
            _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _primeNG_module__WEBPACK_IMPORTED_MODULE_12__["PrimeNGModule"],
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/decimalPipe/decimal-pipe.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/decimalPipe/decimal-pipe.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVjaW1hbFBpcGUvZGVjaW1hbC1waXBlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/decimalPipe/decimal-pipe.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/decimalPipe/decimal-pipe.component.ts ***!
  \******************************************************************/
/*! exports provided: DecimalPipeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalPipeFormComponent", function() { return DecimalPipeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let DecimalPipeFormComponent = class DecimalPipeFormComponent {
    constructor(fb, decimalPipe) {
        this.fb = fb;
        this.decimalPipe = decimalPipe;
        this.decimalPipeLimit = '1.2-2';
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            someNumber: this.decimalPipe.transform(3.145926, this.decimalPipeLimit),
        });
    }
    /**
     * Limit number to specific number of decimal places
     * @param {FormControl} control
     */
    transformDecimal(control) {
        control.patchValue(this.decimalPipe.transform(control.value, this.decimalPipeLimit));
        this.myForm.updateValueAndValidity();
    }
    /**
     * Get Control from Control Name
     * @param {string} controlName
     * @returns {FormControl}
     */
    getControl(controlName) {
        return this.myForm.get(controlName);
    }
};
DecimalPipeFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"] }
];
DecimalPipeFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-decimal-pipe-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./decimal-pipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/decimalPipe/decimal-pipe.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./decimal-pipe.component.scss */ "./src/app/components/decimalPipe/decimal-pipe.component.scss")).default]
    })
], DecimalPipeFormComponent);



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DialogComponent = class DialogComponent {
    constructor() { }
    ngOnInit() { }
    displayModalDialog() {
        this.displayModal = true;
    }
};
DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dialog",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog.component.scss */ "./src/app/components/dialog/dialog.component.scss")).default]
    })
], DialogComponent);



/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let DynamicFormComponent = class DynamicFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            email: "",
            phones: this.fb.array([]),
        });
    }
    get phoneForms() {
        return this.myForm.get("phones");
    }
    addPhone() {
        const phone = this.fb.group({
            area: [],
            prefix: [],
            line: [],
        });
        this.phoneForms.push(phone);
    }
    deletePhone(i) {
        this.phoneForms.removeAt(i);
    }
    onSubmit() {
        alert("Submitted!");
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DynamicFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dynamic-form",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dynamic-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dynamic-form/dynamic-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dynamic-form.component.scss */ "./src/app/components/dynamic-form/dynamic-form.component.scss")).default]
    })
], DynamicFormComponent);



/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n}\n\nsection {\n  margin: 5px;\n  padding: 20px;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL0M6XFxVc2Vyc1xcamthZ2l3YWRhXFxET0NVTUVOVFNcXEdJVC1SRVBPU1xcQW5ndWxhci1QbGF5Z3JvdW5kL3NyY1xcYXBwXFxwYWdlc1xcbWFpbi1wYWdlXFxtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/primeNG.module.ts":
/*!***********************************!*\
  !*** ./src/app/primeNG.module.ts ***!
  \***********************************/
/*! exports provided: PrimeNGModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNGModule", function() { return PrimeNGModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-panel.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressspinner.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");



// PrimeNG












let PrimeNGModule = class PrimeNGModule {
};
PrimeNGModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_10__["PaginatorModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__["InputTextareaModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__["ToolbarModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__["SplitButtonModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__["ProgressSpinnerModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogModule"],
        ],
    })
], PrimeNGModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jkagiwada\DOCUMENTS\GIT-REPOS\Angular-Playground\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
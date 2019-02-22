(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");















// define the routings
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--main page-->\n\n<!--make all the routing before writing everything-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--CS 5610 initial angular project!-->\n  <!--</h1>-->\n  <!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n<!--</div>-->\n\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\n  <!--</li>-->\n<!--</ul>-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _website_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./website.service */ "./src/app/website.service.ts");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./page.service */ "./src/app/page.service.ts");
/* harmony import */ var _widget_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./widget.service */ "./src/app/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profilebar_profilebar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/profilebar/profilebar.component */ "./src/app/components/profilebar/profilebar.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__["PageEditComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_7__["PageNewComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _components_profilebar_profilebar_component__WEBPACK_IMPORTED_MODULE_26__["ProfilebarComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _website_service__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _page_service__WEBPACK_IMPORTED_MODULE_23__["PageService"], _widget_service__WEBPACK_IMPORTED_MODULE_24__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"]],
            declarations: [_components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Edit Page</span>\n\n  <a class=\"ml-auto\" (click)=\"updatePage()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"pagename\" class=\"font-weight-bold\">Name</label>\n      <input id=\"pagename\"\n             name=\"pageName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             [ngModel]=\"displayOldName()\"\n             ngModel\n             #pageName=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"pagetitle\" class=\"font-weight-bold\">Title</label>\n      <input id=\"pagetitle\"\n             name=\"pageTitle\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             [ngModel]=\"displayOldTitle()\"\n             ngModel\n             #pageTitle=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Page */ "./src/app/model/Page.ts");
/* harmony import */ var src_app_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/page.service */ "./src/app/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.oldPage = _this.pageService.findPageById(_this.pageId);
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var newName = this.pageForm.value.pageName;
        var newTitle = this.pageForm.value.pageTitle;
        var page = new src_app_model_Page__WEBPACK_IMPORTED_MODULE_3__["Page"](this.pageId, newName, this.websiteId, newTitle);
        this.pageService.updatePage(this.pageId, page);
        this.goBack();
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageId);
        this.goBack();
    };
    PageEditComponent.prototype.goBack = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.displayOldName = function () {
        return this.oldPage.name;
    };
    PageEditComponent.prototype.displayOldTitle = function () {
        return this.oldPage.title;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyayB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <!--Go back to website-list-->\n  <a (click)=\"goBack()\" >\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Pages</span>\n\n  <a (click)=\"createNewPage()\" class=\"ml-auto\">\n    <span>\n      <i class=\"fas fa-plus dark\"></i>\n    </span>\n  </a>\n</nav>\n\n<div class=\"container-fluid scrollable-body\"\n     *ngFor=\"let page of pages\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div (click)=\"goToWidgetList(page._id)\">{{page.name}}</div>\n      </td>\n      <td align=\"right\">\n        <a (click)=\"goToEditPage(page._id)\" ><i class=\"fas fa-cog\"></i></a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div> <!-- container-fluid.// -->\n\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page.service */ "./src/app/page.service.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(activatedRoute, router, pageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageService = pageService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.websiteId);
        });
        console.log(this.pages);
    };
    PageListComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website']);
    };
    PageListComponent.prototype.createNewPage = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageListComponent.prototype.goToEditPage = function (pageId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pageId]);
    };
    PageListComponent.prototype.goToWidgetList = function (pageId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pageId, 'widget']);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">New Page</span>\n\n  <a class=\"ml-auto\" (click)=\"savePage()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"pagename\" class=\"font-weight-bold\">Name</label>\n      <input id=\"pagename\"\n             name=\"pageName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             ngModel\n             #pageName=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"pagetitle\" class=\"font-weight-bold\">Title</label>\n      <input id=\"pagetitle\"\n             name=\"pageTitle\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             ngModel\n             #pageTitle=\"ngModel\">\n    </div> <!-- form-group// -->\n  </form>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page.service */ "./src/app/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Page */ "./src/app/model/Page.ts");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.savePage = function () {
        var name = this.pageForm.value.pageName;
        var title = this.pageForm.value.pageTitle;
        var page = new src_app_model_Page__WEBPACK_IMPORTED_MODULE_5__["Page"]("", name, this.websiteId, title);
        this.pageService.createPage(this.websiteId, page);
        this.goBack();
    };
    PageNewComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/profilebar/profilebar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/profilebar/profilebar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZWJhci9wcm9maWxlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profilebar/profilebar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/profilebar/profilebar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\n\n  <a class=\"ml-auto\" (click)=\"goToProfile(curUserId)\">\n  <span>\n    <i class=\"fas fa-user fa-inverse\"></i>\n  </span>\n  </a>\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/profilebar/profilebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/profilebar/profilebar.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfilebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilebarComponent", function() { return ProfilebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfilebarComponent = /** @class */ (function () {
    function ProfilebarComponent(router) {
        this.router = router;
    }
    ProfilebarComponent.prototype.ngOnInit = function () {
    };
    ProfilebarComponent.prototype.goToProfile = function (userId) {
        this.router.navigate(['/user', userId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfilebarComponent.prototype, "curUserId", void 0);
    ProfilebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profilebar',
            template: __webpack_require__(/*! ./profilebar.component.html */ "./src/app/components/profilebar/profilebar.component.html"),
            styles: [__webpack_require__(/*! ./profilebar.component.css */ "./src/app/components/profilebar/profilebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfilebarComponent);
    return ProfilebarComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}}</div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div> <!-- form-group// -->\n    <div class =\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a username</div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-success btn-block\" routerLink=\"/register\" role=\"button\">Register</a>\n    </div>\n  </form>\n\n</div> <!-- container-fluid.// -->\n\n\n<!--{{username}}}-->\n<!--<input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"Alice\"/>-->\n<!--<button class=\"btn btn-primary btn-block\" (click)=\"login()\">Login</button>-->\n<!--<a class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</a>-->\n\n\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.login = function () {
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(username, password);
        if (user) {
            this.router.navigate(['/user', user._id]);
        }
        else {
            this.errorFlag = true;
            this.errorMsg = "Login Failed.";
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-dark bg-primary\">\n    <a class=\"navbar-brand font-weight-bold\" href=\"#\">Profile</a>\n  </nav>\n</div>\n\n<div class=\"container-fluid pt-2\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\" class=\"font-weight-bold\">Username</label>\n      <input [ngModel]=\"user.username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             ngModel\n             #username=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"font-weight-bold\">Email</label>\n      <input id=\"email\" type=\"email\" class=\"form-control\" value=\"{{user.email}}\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"firstname\" class=\"font-weight-bold\">First Name</label>\n      <input [ngModel]=\"user.firstName\"\n             name=\"firstname\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"firstname\"\n             ngModel\n             #firstname=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"lastname\" class=\"font-weight-bold\">Last Name</label>\n      <input [ngModel]=\"user.lastName\"\n             name=\"lastname\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"lastname\"\n             ngModel\n             #lastname=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\"\n              (click)=\"saveAndDisplayWebsites()\">Websites</button>\n      <!--<a class=\"btn btn-primary btn-block\" type=\"submit\" role=\"button\">Websites</a>-->\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" routerLink=\"/login\" role=\"button\">Logout</a>\n    </div>\n  </form>\n\n</div> <!-- container-fluid.// -->\n\n\n\n\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom p-3\">\n  <a class=\"navbar-brand font-weight-bold\" href=\"#\"></a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, outRouter) {
        this.userService = userService;
        this.router = router;
        this.outRouter = outRouter;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.user = _this.userService.findUserById(params['uid']);
        });
    };
    ProfileComponent.prototype.saveAndDisplayWebsites = function () {
        this.saveUser();
        this.displayWebsites();
    };
    ProfileComponent.prototype.saveUser = function () {
        var username = this.profileForm.value.username;
        var firstname = this.profileForm.value.firstname;
        var lastname = this.profileForm.value.lastname;
        var newUser = new src_app_model_User__WEBPACK_IMPORTED_MODULE_4__["User"](this.user._id, username, this.user.password, firstname, lastname);
        this.userService.updateUser(this.user._id, newUser);
    };
    ProfileComponent.prototype.displayWebsites = function () {
        if (this.user) {
            var userId = this.user._id;
            this.outRouter.navigate(['/user', userId, 'website']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n  <h1>Register</h1>\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <input placeholder=\"verify password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\">Register</button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" routerLink=\"/login\" role=\"button\">Cancel</a>\n    </div>\n  </form>\n\n</div> <!-- container-fluid.// -->\n\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function () {
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        var user = new src_app_model_User__WEBPACK_IMPORTED_MODULE_5__["User"]("", username, password, "", "");
        var userId = this.userService.createUser(user);
        this.router.navigate(['user', userId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 d-none d-md-block border-right pr-0\">\n    <app-website-list></app-website-list>\n  </div>\n  <div class=\"col-md-8 pl-0\">\n    <nav class=\"navbar navbar-dark bg-primary\">\n      <div class=\"navbar-brand font-weight-bold\">Edit Website</div>\n      <a class=\"ml-auto\" (click)=\"updateWebsite()\" >\n            <span>\n              <i class=\"fas fa-check fa-inverse\"></i>\n            </span>\n      </a>\n    </nav>\n    <div class=\"container-fluid pt-2\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"font-weight-bold\">Website Name</label>\n          <input name=\"newName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 [ngModel]=\"displayOldName()\"\n                 ngModel\n                 #newName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n          <label for=\"description\" class=\"font-weight-bold\">Website Description</label>\n          <textarea name=\"newDescription\"\n                    class=\"form-control\"\n                    id=\"description\"\n                    rows=\"5\"\n                    [ngModel]=\"displayOldDescription()\"\n                    ngModel\n                    #newDescription=\"ngModel\"></textarea>\n        </div> <!-- form-group// -->\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\" (click)=\"deleteWebsite()\" role=\"button\">Delete</a>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_website_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/website.service */ "./src/app/website.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Website__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Website */ "./src/app/model/Website.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.oldWebsite = _this.websiteService.findWebsiteById(_this.websiteId);
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var website = new src_app_model_Website__WEBPACK_IMPORTED_MODULE_4__["Website"](this.websiteId, this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
        this.websiteService.updateWebsite(this.websiteId, website);
        this.router.navigate(['/user', this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['/user', this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.displayOldName = function () {
        return this.oldWebsite.name;
    };
    WebsiteEditComponent.prototype.displayOldDescription = function () {
        return this.oldWebsite.description;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable-body{\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.body {\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbGlzdC93ZWJzaXRlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZS1ib2R5e1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\n\n  <a (click)=\"goBack()\" >\n    <span>\n      <i class=\"fas fa-chevron-left fa-inverse\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3\">Websites</span>\n\n  <a (click)=\"createNewWebsite()\" class=\"ml-auto\">\n    <span>\n      <i class=\"fas fa-plus fa-inverse\"></i>\n    </span>\n  </a>\n</nav>\n\n<div class=\"container-fluid scrollable-body\"\n     *ngFor=\"let website of websites\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div (click)=\"goToPageList(website._id)\">{{website.name}}</div>\n      </td>\n      <td align=\"right\">\n        <a (click)=\"goToEditWebsite(website._id)\" ><i class=\"fas fa-cog\"></i></a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div> <!-- container-fluid.// -->\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_website_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/website.service */ "./src/app/website.service.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { _this.userId = params['uid']; });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        console.log(this.websites);
    };
    WebsiteListComponent.prototype.goBack = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteListComponent.prototype.createNewWebsite = function () {
        this.router.navigate(['/user', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.goToEditWebsite = function (websiteId) {
        this.router.navigate(['/user', this.userId, 'website', websiteId]);
    };
    WebsiteListComponent.prototype.goToPageList = function (websiteId) {
        this.router.navigate(['/user', this.userId, 'website', websiteId, 'page']);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_website_service__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 d-none d-md-block border-right pr-0\">\n    <app-website-list></app-website-list>\n  </div>\n  <div class=\"col-md-8 pl-0\">\n    <nav class=\"navbar navbar-dark bg-primary\">\n      <div class=\"navbar-brand font-weight-bold\">New Website</div>\n        <a class=\"ml-auto\" (click)=\"saveWebsite()\" >\n            <span>\n              <i class=\"fas fa-check fa-inverse\"></i>\n            </span>\n        </a>\n    </nav>\n    <div class=\"container-fluid pt-2\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"font-weight-bold\">Name</label>\n          <input name=\"newName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 placeholder=\"Name\"\n                 ngModel\n                 #newName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n          <label for=\"description\" class=\"font-weight-bold\">Description</label>\n          <textarea name=\"newDescription\"\n                    class=\"form-control\"\n                    id=\"description\"\n                    placeholder=\"Description\"\n                    rows=\"5\"\n                    ngModel\n                    #newDescription=\"ngModel\"></textarea>\n        </div> <!-- form-group// -->\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_website_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/website.service */ "./src/app/website.service.ts");
/* harmony import */ var src_app_model_Website__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Website */ "./src/app/model/Website.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { _this.userId = params['uid']; });
    };
    WebsiteNewComponent.prototype.saveWebsite = function () {
        var website = new src_app_model_Website__WEBPACK_IMPORTED_MODULE_3__["Website"]("", this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
        this.websiteService.createWebsite(website);
        this.router.navigate(['/user', this.userId, 'website']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Choose Widget</span>\n\n</nav>\n\n<div class=\"container-fluid pt-2\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div><a (click)=\"goToHeader()\">Header</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Label</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">HTML</a></div>\n      </td>\n    </tr>\n\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Text Input</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Link</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Button</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a (click)=\"goToImage()\">Image</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a (click)=\"goToYoutube()\">YouTube</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Data Table</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Repeater</a></div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div> <!-- container-fluid.// -->\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_widget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widget.service */ "./src/app/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetChooserComponent.prototype.goToWidgetEdit = function (widgetId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widgetId]);
    };
    WidgetChooserComponent.prototype.goToHeader = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]("", "HEADER", this.pageId, 0, "", "", "");
        var widgetId = this.widgetService.createWidget(this.pageId, widget);
        this.goToWidgetEdit(widgetId);
    };
    WidgetChooserComponent.prototype.goToImage = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]("", "IMAGE", this.pageId, 0, "", "", "");
        var widgetId = this.widgetService.createWidget(this.pageId, widget);
        this.goToWidgetEdit(widgetId);
    };
    WidgetChooserComponent.prototype.goToYoutube = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]("", "YOUTUBE", this.pageId, 0, "", "", "");
        var widgetId = this.widgetService.createWidget(this.pageId, widget);
        this.goToWidgetEdit(widgetId);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_widget_service__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-youtube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/widget.service */ "./src/app/widget.service.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
            console.log("In widget Edit page");
            console.log(_this.widget);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWhlYWRlci93aWRnZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check fa-inverse\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"headername\" class=\"font-weight-bold\">Name</label>\n      <input id=\"headername\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"headertext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"headertext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Text\"\n             name=\"newText\"\n             [ngModel]=\"displayWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"headersize\" class=\"font-weight-bold\">Size</label>\n      <input id=\"headersize\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Size\"\n             name=\"newSize\"\n             [ngModel]=\"displayWidgetSize()\"\n             ngModel\n             #newSize=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/widget.service */ "./src/app/widget.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    WidgetHeaderComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var text = this.widgetForm.value.newText;
        var size = +(this.widgetForm.value.newSize);
        this.widget.text = text;
        this.widget.size = size;
        this.widgetService.updateWidget(this.widget._id, this.widget);
        this.goBack();
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widget._id);
        this.goBack();
    };
    WidgetHeaderComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetHeaderComponent.prototype.displayWidgetSize = function () {
        return this.widget.size.toString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], WidgetHeaderComponent.prototype, "widget", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check fa-inverse\"></i>\n    </span>\n  </a>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"imagename\" class=\"font-weight-bold\">Name</label>\n      <input id=\"imagename\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"imagetext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"imagetext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Image Text\"\n             name=\"newText\"\n             [ngModel]=\"displayWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"imageurl\" class=\"font-weight-bold\">URL</label>\n      <input id=\"imageurl\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Image URL\"\n             name=\"newUrl\"\n             [ngModel]=\"displayWidgetUrl()\"\n             ngModel\n             #newUrl=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"imagewidth\" class=\"font-weight-bold\">Width</label>\n      <input id=\"imagewidth\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Image Width\"\n             name=\"newWidth\"\n             [ngModel]=\"displayWidgetWidth()\"\n             ngModel\n             #newWidth=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"fileToUpload\" class=\"font-weight-bold\">Upload</label>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"file\"\n             name=\"fileToUpload\"\n             id=\"fileToUpload\">\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary btn-block\" role=\"button\">Upload Image</a>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/widget.service */ "./src/app/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var text = this.widgetForm.value.newText;
        var url = this.widgetForm.value.newUrl;
        var width = this.widgetForm.value.newWidth;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        this.widgetService.updateWidget(this.widget._id, this.widget);
        this.goBack();
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widget._id);
        this.goBack();
    };
    WidgetImageComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetImageComponent.prototype.displayWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetImageComponent.prototype.displayWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], WidgetImageComponent.prototype, "widget", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check fa-inverse\"></i>\n    </span>\n  </a>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"videoname\" class=\"font-weight-bold\">Name</label>\n      <input id=\"videoname\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"videotext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"videotext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Youtube Text\"\n             name=\"newText\"\n             [ngModel]=\"displayWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"videourl\" class=\"font-weight-bold\">URL</label>\n      <input id=\"videourl\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Youtube URL\"\n             name=\"newUrl\"\n             [ngModel]=\"displayWidgetUrl()\"\n             ngModel\n             #newUrl=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"videowidth\" class=\"font-weight-bold\">Width</label>\n      <input id=\"videowidth\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Video Width\"\n             name=\"newWidth\"\n             [ngModel]=\"displayWidgetWidth()\"\n             ngModel\n             #newWidth=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var src_app_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/widget.service */ "./src/app/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var text = this.widgetForm.value.newText;
        var url = this.widgetForm.value.newUrl;
        var width = this.widgetForm.value.newWidth;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        this.widgetService.updateWidget(this.widget._id, this.widget);
        this.goBack();
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widget._id);
        this.goBack();
    };
    WidgetYoutubeComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetYoutubeComponent.prototype.displayWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetYoutubeComponent.prototype.displayWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Widget__WEBPACK_IMPORTED_MODULE_3__["Widget"])
    ], WidgetYoutubeComponent.prototype, "widget", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widgets</span>\n\n  <!--to widget choose-->\n  <a class=\"ml-auto\" (click)=\"goToWidgetChoose()\" >\n    <span>\n      <i class=\"fas fa-plus dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--list and switch-->\n<div class=\"container-fluid pt-0\"\n     *ngFor=\"let widget of widgets\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div [ngSwitch]=\"widget.widgetType\">\n\n          <div *ngSwitchCase=\"'HEADING'\">\n            <!--display the header-->\n            <p [ngStyle]=\"{'font-size': widget.size+'00%'}\">{{widget.text}}</p>\n          </div>\n\n          <div *ngSwitchCase=\"'YOUTUBE'\">\n            <iframe width=\"640\" height=\"360\" [src]=\"convertToSafeYoutubeUrl(widget.url)\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n\n          <div *ngSwitchCase=\"'IMAGE'\">\n            <!--display the image-->\n            <img [src]=\"widget.url\"/>\n          </div>\n\n          <div *ngSwitchCase=\"'HTML'\">\n            <!--display the html-->\n            Here should be html embedded page.\n          </div>\n        </div>\n      </td>\n      <td align=\"right\">\n        <a (click)=\"goToWidgetEdit(widget._id)\" ><i class=\"fas fa-cog\"></i></a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"p-3\">\n\n</div>\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_widget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widget.service */ "./src/app/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, router, _sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._sanitizer = _sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pageId);
            console.log(_this.widgets);
        });
    };
    WidgetListComponent.prototype.goToWidgetEdit = function (widgetId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widgetId]);
    };
    WidgetListComponent.prototype.convertToSafeYoutubeUrl = function (url) {
        // first get the id of url
        // the url must have /embed endpoint so that youtube server will allow this connection
        var res = url.split('\/');
        console.log(res);
        var id = res[res.length - 1];
        if (id.indexOf('watch?v=') !== -1) {
            id = id.substring(8);
        }
        url = "https://www.youtube.com/embed/" + id;
        console.log(url);
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetListComponent.prototype.goToWidgetChoose = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_widget_service__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/model/Page.ts":
/*!*******************************!*\
  !*** ./src/app/model/Page.ts ***!
  \*******************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, username, password, firstName, lastName) {
        this._id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/Website.ts":
/*!**********************************!*\
  !*** ./src/app/model/Website.ts ***!
  \**********************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/model/Widget.ts":
/*!*********************************!*\
  !*** ./src/app/model/Widget.ts ***!
  \*********************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, widgetType, pageId, size, text, width, url) {
        if (size === void 0) { size = 1; }
        if (text === void 0) { text = "text"; }
        if (width === void 0) { width = "100%"; }
        if (url === void 0) { url = "url"; }
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.text = text;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/page.service.ts":
/*!*********************************!*\
  !*** ./src/app/page.service.ts ***!
  \*********************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var lastId = this.pages[this.pages.length - 1]._id;
        page._id = (+(lastId) + 1).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var res = [];
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.websiteId === websiteId) {
                res.push(page);
            }
        }
        return res;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page._id === pageId) {
                return page;
            }
        }
        return null;
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                this.pages[i] = page;
                return;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                this.pages.splice(i, 1);
                return;
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
            { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
            { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
            { _id: "456", username: "jan", password: "jan", firstName: "Jose", lastName: "Annunzi" }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
    }
    UserService.prototype.createUser = function (user) {
        var lastId = this.users[this.users.length - 1]._id;
        user._id = (+(lastId) + 1).toString();
        this.users.push(user);
        return user._id;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user._id === userId) {
                return user;
            }
        }
        return null;
    };
    UserService.prototype.findUserByUserName = function (userName) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === userName) {
                return user;
            }
        }
        return null;
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === username && user.password === password) {
                return user;
            }
        }
        return null;
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
                this.users[i] = user;
                return;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
                this.users.splice(i, 1);
                return;
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/website.service.ts":
/*!************************************!*\
  !*** ./src/app/website.service.ts ***!
  \************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
        ];
    }
    WebsiteService.prototype.createWebsite = function (website) {
        var lastId = this.websites[this.websites.length - 1]._id;
        website._id = (+(lastId) + 1).toString();
        this.websites.push(website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var res = [];
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
            var website = _a[_i];
            if (website.developerId === userId) {
                res.push(website);
            }
        }
        return res;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
            var website = _a[_i];
            if (website._id === websiteId) {
                return website;
            }
        }
        return null;
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i] = website;
                return;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites.splice(i, 1);
                return;
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/widget.service.ts":
/*!***********************************!*\
  !*** ./src/app/widget.service.ts ***!
  \***********************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Widget */ "./src/app/model/Widget.ts");



var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO" },
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum" },
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/" },
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>" },
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum" },
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>" }
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var lastId = this.widgets[this.widgets.length - 1]._id;
        widget._id = (+(lastId) + 1).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget._id;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var res = [];
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.pageId === pageId) {
                res.push(widget);
            }
        }
        return res;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var w = _a[_i];
            if (w._id === widgetId) {
                var size = (w.size === undefined) ? 1 : w.size;
                var text = (w.text === undefined) ? "text" : w.text;
                var width = (w.width === undefined) ? "100%" : w.width;
                var url = (w.url === undefined) ? "" : w.url;
                return new _model_Widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](w._id, w.widgetType, w.pageId, size, text, width, url);
            }
        }
        return null;
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                this.widgets[i] = widget;
                return;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                this.widgets.splice(i, 1);
                return;
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetService);
    return WidgetService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lion/cs5610-2019/webmaker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-text/widget-text.component */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-html/widget-html.component */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");




















var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_14__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__["WidgetHeaderComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__["WidgetImageComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__["WidgetYoutubeComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHtmlComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_18__["WidgetTextComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_13__["WidgetEditComponent"] },
];
// const routes: Routes = [{path: '/login', component: LoginComponent},
//   {path: '/profile', component: ProfileComponent},
//   {path: '/register', component: RegisterComponent}];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
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

module.exports = "\ninput.form-control {\n  margin-bottom: 5px;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\na:hover{\n  text-decoration: none;\n}\n\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n  color: #fff;\n}\n\n.navbar-custom .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-custom {\n  background-color: #337ab7;\n}\n\n.cl-container-padding {\n  padding-top: 1%;\n  padding-bottom: 10%;\n}\n\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.custom-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.cl-text-blue{\n  color: #337ab7;\n}\n\n.cl-icon-blue {\n  color: #337ab7;\n}\n\n.cl-container-padding-more {\n  padding-top: 7%;\n  padding-bottom: 10%;\n}\n\n.special-btn {\n  position: relative;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLWJyYW5kLFxuLm5hdmJhci1jdXN0b20gLm5hdmJhci10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC1jb250YWluZXItcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmN1c3RvbS1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY2wtdGV4dC1ibHVle1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLWljb24tYmx1ZSB7XG4gIGNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmctbW9yZSB7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLnNwZWNpYWwtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to my page!-->\n  <!--</h1>-->\n\n<!--</div>-->\n\n<!--<div class=\"container\">-->\n\n  <!--<ul><a routerLink=\"/login\"> login</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/:pid\"> page-edit</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid/website/:wid/page\"> page-list</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/new\"> page-new</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid\"> profile </a></ul>-->\n\n  <!--<ul><a routerLink=\"/register\"> register</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid/website/:wid\"> website-edit</a></ul>-->\n\n  <!--<ul><a routerLink=\"user/:uid/website\"> website-list</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid/website/new\"> website-new</a></ul>-->\n\n  <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/new\"> widget-choose</a></ul>-->\n\n  <!--<ul><a routerLink=\"profile/:uid/website/:wid/page/:pid/widget/new/header\"> widget-heading</a></ul>-->\n\n  <!--<ul><a routerLink=\"profile/:uid/website/:wid/page/:pid/widget/new/image\"> widget-image</a></ul>-->\n\n  <!--<ul><a routerLink=\"user/:uid/website/:wid/page/:pid/widget\"> widget-list</a></ul>-->\n\n  <!--<ul><a routerLink=\"profile/:uid/website/:wid/page/:pid/widget/new/youtube\"> widget-youtube</a></ul>-->\n\n<!--</div>-->\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-html/widget-html.component */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-text/widget-text.component */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _components_widget_widget_list_oder_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/widget/widget-list/oder-by-pipe.pipe */ "./src/app/components/widget/widget-list/oder-by-pipe.pipe.ts");
/* harmony import */ var _components_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/widget/widget-list/sortable.directive */ "./src/app/components/widget/widget-list/sortable.directive.ts");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_15__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_16__["WebsiteEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_17__["WebsiteListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_18__["PageNewComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_19__["PageEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_20__["PageListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_21__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_23__["WidgetListComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_24__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_25__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_26__["WidgetYoutubeComponent"],
                _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_27__["WidgetHtmlComponent"],
                _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_28__["WidgetTextComponent"],
                _components_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_33__["SortableDirective"],
                _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_29__["FlickrImageSearchComponent"],
                _components_widget_widget_list_oder_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_32__["OrderByPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_11__["QuillEditorModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_8__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_30__["FlickrService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_31__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Edit Page</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <button class=\"nav-link cl-icon-padding\"\n         (click)=\"updatePage()\"\n         routerLink=\"..\"><i class=\"fa fa-check\"></i></button>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n\n  <form>\n\n    <div class=\"form-group\" *ngIf=\"page\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\"\n             [(ngModel)]=\"page.name\"\n             ngModel\n             required\n             #name=\"ngModel\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"page\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\"\n             [(ngModel)]=\"page.title\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n  </form>\n  <button class=\"btn btn-danger btn-block\"\n     (click)=\"deletePage()\"\n     routerLink=\"..\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"../../../..\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.pageService.updatePage(this.page._id, this.page).subscribe(function (page) {
            _this.page = page;
            console.log('update page: ' + page._id + ' ' + page.name);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.page._id).subscribe(function (data) {
            console.log('delete page: ' + _this.page._id);
        }, function (error) { return console.log(error); });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params['pid']).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"../..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand brand cl-icon-padding\" routerLink=\".\">Pages</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"./new\"><i class=\"fa fa-plus\"></i></a>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding-more\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let page of pages\" class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./{{page._id}}/widget\">\n        {{page.name}}\n      </a>\n      <a routerLink=\"./{{page._id}}\">\n        <span class=\"fa fa-cog pull-right icon-padding\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"../../..\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activateRoute) {
        this.pageService = pageService;
        this.activateRoute = activateRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.pageService.findPageByWebsiteId(params['wid']).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">New Page</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <button class=\"nav-link cl-icon-padding\"\n         routerLink=\"..\"\n         (click)=\"createPage()\"\n         [disabled]=\"!f.valid\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n\n  <!--<div *ngIf=\"errorFlag\" class=\"alert alert-danger\">-->\n    <!--{{errorMsg}}-->\n  <!--</div>-->\n\n  <form (ngSubmit)=\"createPage()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"page-name\"\n             placeholder=\"Page Name\"\n             name=\"name\"\n             ngModel required\n             #name=\"ngModel\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n          Please enter a page name!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"page-title\"\n             placeholder=\"Page Title\"\n             name=\"title\"/>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"../../../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.webId = params['wid'];
        });
        this.page = _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"].getNewPage();
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.page.name = this.pageForm.value.name;
        this.pageService.createPage(this.webId, this.page).subscribe(function (page) {
            console.log('create page: ' + page._id + ' ' + page.name);
            _this.page = page;
        }, function (error) {
            console.log(error);
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
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

module.exports = "<div class=\"container custom-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input   placeholder=\"username\"\n               name=\"username\"\n               type=\"text\"\n               class=\"form-control\"\n               ngModel\n               required\n               #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n          Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input   placeholder=\"password\"\n               name=\"password\"\n               type=\"password\"\n               class=\"form-control\"\n               ngModel\n               required\n               #password=\"ngModel\"/>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"register()\"\n            type=\"button\">Register</button>\n  </form>\n\n</div>\n\n"

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
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user != null) {
                console.log(user);
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-custom\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"navbar-brand\" routerLink=\"/user/{{user?._id}}\">\n        Profile\n      </a>\n      <!--<a (click)=\"updateUser()\"-->\n         <!--routerLink=\"/user/{{user?._id}}\"-->\n         <!--class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">-->\n        <!--<span class=\"fa fa-ok\"></span>-->\n      <!--</a>-->\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"container cl-container-padding\">\n\n  <div *ngIf=\"updateFlag\" class=\"alert alert-success\">\n    {{updateMsg}}\n  </div>\n\n  <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n    {{userErrorMsg}}\n  </div>\n\n  <form>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"Username\"\n             [(ngModel)]=\"username\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"email\">Email address</label>\n      <input [ngModelOptions]=\"{standalone: true}\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder=\"alice@wonderland.com\"\n             [(ngModel)]=\"user.email\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"first-name\">First Name</label>\n      <input [ngModelOptions]=\"{standalone: true}\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"Alice\"\n             [(ngModel)]=\"user.firstName\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Wonderland\"\n             [ngModelOptions]=\"{standalone: true}\"\n             [(ngModel)]=\"user.lastName\"/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"./website\">Websites</a>\n\n  <a class=\"btn btn-danger  btn-block\"\n     routerLink=\"/login\">Logout</a>\n\n  <button class=\"btn btn-danger btn-block\"\n          (click)=\"delete()\"\n          type=\"button\">Delete User</button>\n\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light navbar-custom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"/user/:uid\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n\n"

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
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, activatedRoute) {
        this.userService = userService;
        this.route = route;
        this.activatedRoute = activatedRoute;
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.updateFlag = false;
        this.userErrorFlag = false;
        if (this.username !== this.user.username) {
            this.userService.findUserByUsername(this.username).subscribe(function (user) {
                if (typeof user._id !== 'undefined') {
                    _this.userErrorFlag = true;
                }
                else {
                    _this.user.username = _this.username;
                    _this.update();
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.update();
        }
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.user._id, this.user).subscribe(function (user) {
            _this.user = user;
            _this.updateFlag = true;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.route.navigate(['/login']);
    };
    ProfileComponent.prototype.delete = function () {
        var _this = this;
        this.userService.deleteUser(this.user._id).subscribe(function (user) {
            console.log('delete user: ' + _this.user._id);
            _this.route.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateFlag = false;
        this.userErrorFlag = false;
        this.updateMsg = 'Profile updated!';
        this.userErrorMsg = 'The username already exists! Please use a different name.';
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.findUserById(params['uid']).subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user.username;
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "\n<div class=\"container custom-padding\">\n\n  <h1>Register</h1>\n\n  <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n    {{userErrorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input id=\"username\"\n             name=\"username\"\n             placeholder=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <input id=\"password\"\n             name=\"password\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <input id=\"v_password\"\n             name=\"v_password\"\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #v_password=\"ngModel\"/>\n    </div>\n\n    <div *ngIf=\"pwErrorFlag\" class=\"alert alert-danger\">\n      {{pwErrorMsg}}\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            type=\"button\"\n            (click)=\"cancel()\">Cancel</button>\n  </form>\n\n</div>\n"

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
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user.username = this.registerForm.value.username;
        this.user.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        this.userErrorFlag = false;
        this.pwErrorFlag = false;
        this.userService.findUserByUsername(this.user.username).subscribe(function (user) {
            if (user != null) {
                _this.userErrorFlag = true;
            }
            else if (_this.v_password !== _this.user.password) {
                _this.pwErrorFlag = true;
            }
            else {
                return _this.userService.createUser(_this.user).subscribe(function (newUser) {
                    _this.router.navigate(['/user', newUser._id]);
                });
            }
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.userErrorMsg = 'The username already exists! Please use a different name.';
        this.pwErrorMsg = 'Password mis-matching!';
        this.user = _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"].getNewUser();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-light navbar-custom\">\n\n  <div class=\"container-fluid\">\n    <div class=\"col-1\">\n      <a class=\"navbar-text pull-left\" routerLink=\"..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n    </div>\n\n    <div class=\"col-3 d-none d-sm-block\">\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\"../new\">Websites</a>\n      <a class=\"navbar-text pull-right\" routerLink=\"/profile/{{userId}}/website/new\">\n        <i class=\"fa fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"col-8\">\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Edit Website</a>\n      <button (click)=\"updateWebsite()\" routerLink=\"..\" >\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li *ngFor=\"let website_li of websites\" class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink=\"../{{website_li._id}}\">\n            <i class=\"fa fa-cog pull-right cl-icon-padding\"></i>\n          </a>\n\n          <a routerLink=\"../{{website_li._id}}/page\">\n            {{website_li.name}}\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <form>\n\n        <div class=\"form-group\" *ngIf=\"website\">\n          <label for=\"website-name\">Website Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 placeholder=\"Name\"\n                 [ngModelOptions]=\"{standalone: true}\"\n                 [(ngModel)]=\"website.name\"/>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"website\">\n          <label for=\"website-description\">Website Description</label>\n          <textarea id=\"website-description\"\n                    class=\"form-control\" rows=\"5\"\n                    placeholder=\"Description\"\n                    [(ngModel)]=\"website.description\"\n                    [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n\n        <button class=\"btn btn-danger  btn-block\"\n           (click)=\"deleteWebsite()\"\n           routerLink=\"..\">Delete</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light navbar-custom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.updateWebsite = function () {
        this.websiteService.updateWebsite(this.website._id, this.website).subscribe(function (website) {
            console.log(website);
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.website._id).subscribe(function (data) {
            console.log('deleted website: ' + data._id);
        }, function (error) {
            console.log(error);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                console.log(error);
            });
            _this.websiteService.findWebsitesById(params['wid']).subscribe(function (website) {
                _this.website = website;
            }, function (error) {
                console.log(error);
            });
        });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-custom\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Websites</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"./new\">\n        <i class=\"fa fa-plus\"></i>\n      </a>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./{{website._id}}\">\n        <i class=\"fa fa-cog pull-right icon-padding\"></i>\n      </a>\n      <a routerLink=\"./{{website._id}}/page\">\n        {{website.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light navbar-custom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"..\" class=\"navbar-link navbar-text pull-right cl-text-white\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                console.log(error);
            });
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-custom\">\n  <div class=\"col-1\">\n    <a class=\"navbar-text pull-left\" routerLink=\"..\"><i class=\"fa fa-chevron-left\"></i></a>\n  </div>\n\n  <div class=\"col-3 d-none d-sm-block\">\n    <a class=\"navbar-brand cl-icon-padding\" routerLink=\"..\">Websites</a>\n    <a class=\"navbar-text pull-right\" routerLink=\"../new\"><i class=\"fa fa-plus\"></i></a>\n  </div>\n\n  <div class=\"col-8\">\n    <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">New Website</a>\n    <button class=\"navbar-text pull-right\"\n       routerLink=\"..\"\n       (click)=\"f.ngSubmit.emit()\"\n        [disabled]=\"!f.valid\">\n      <i class=\"fa fa-check\"></i>\n    </button>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink=\"../{{website._id}}\" class=\"cl-text-blue\"><i class=\"fa fa-cog float-right\"></i></a>\n          <a routerLink=\"../{{website._id}}\" class=\"cl-text-blue\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8\">\n      <form (ngSubmit)=\"createWebsite()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\">Name</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 placeholder=\"Name\"\n                 name=\"name\"\n                 ngModel required\n                 #name=\"ngModel\">\n        </div>\n\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n          Please enter a website name!\n        </span>\n\n        <div class=\"form-group\">\n          <label for=\"website-description\">Description</label>\n          <textarea [(ngModel)]=\"website.description\"\n                    id=\"website-description\"\n                    class=\"form-control\" rows=\"5\"\n                    placeholder=\"Description\"\n                    name=\"description\"></textarea>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light navbar-custom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right cl-text-white\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (websites) {
            _this.websites = websites;
        }, function (error) {
            console.log(error);
        });
        this.website = _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"].getNewWebsite();
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.website.name = this.webForm.value.name;
        this.websiteService.createWebsite(this.userId, this.website).subscribe(function (website) {
            _this.website = website;
            console.log('created website: ' + _this.website._id + ' ' + _this.website.name);
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "<nav class=\"navbar navbar-expand-md bg-light navbar-light\">\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\"..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Choose Widget</a>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding-more\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./header\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./text\">Text</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./image\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./youtube\">Youtube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./html\">Html</a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar fixed-bottom navbar-light navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a routerLink=\"../../../../../..\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['pid']);
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<div *ngIf=\"widget\" [ngSwitch]=\"widget.type\" >\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

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
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand brand cl-icon-padding\" routerLink=\".\">Widgets Edit</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <button class=\"nav-link cl-icon-padding\"\n              (click)=\"updateWidget()\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             placeholder=\"name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"text\">Text</label>\n      <input type=\"text\"\n             name=\"text\"\n             class=\"form-control\"\n             id=\"text\"\n             placeholder=\"{{widget.text}}\"\n             [(ngModel)]=\"widget.text\"\n             ngModel required\n             #text=\"ngModel\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <!--<span class=\"help-block\" *ngIf=\"!text.valid && text.touched\">-->\n          <!--Please enter text!-->\n    <!--</span>-->\n\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\"\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-size\"\n             placeholder=\"3\"\n             ngModel required\n             #size=\"ngModel\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"deleteWidget()\">Delete</button>\n\n  </form>\n\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, route) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.route = route;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMsg = 'Please enter text!';
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        if (this.widget.text === undefined) {
            this.errorFlag = true;
            return;
        }
        if (this.widgetId === undefined) {
            this.widget.type = 'HEADER';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget header: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', size: ' + widget.size);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget header: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', size: ' + widget.size);
            }, function (error) { return console.log(error); });
        }
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget header');
            }, function (error) { return console.log(error); });
        }
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "headerForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand brand cl-icon-padding\" routerLink=\".\">Widgets Edit</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <button class=\"nav-link cl-icon-padding\"\n              (click)=\"update()\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"heading-name\"\n             placeholder=\"name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"delete()\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMsg = 'Please enter text!';
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetHtmlComponent.prototype.delete = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget html');
            }, function (error) { return console.log(error); });
        }
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHtmlComponent.prototype.update = function () {
        if (this.widget.text === undefined) {
            this.errorFlag = true;
            return;
        }
        if (this.widgetId === undefined) {
            this.widget.type = 'HTML';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget html: ' + widget._id + ', name: ' + widget.name + ', text: ' + widget.text);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget html: ' + widget._id + ', name: ' + widget.name + ', text: ' + widget.text);
            }, function (error) { return console.log(error); });
        }
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS9mbGlja3ItaW1hZ2Utc2VhcmNoL2ZsaWNrci1pbWFnZS1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n         class=\"cl-text-white cl-icon-padding\">\n        <span class=\"fa fa-left\"></span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" routerLink=\".\">\n      Search Flickr\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Search Images\"\n           onkeydown = \"if (event.keyCode === 13)\n                      document.getElementById('btnSearch').click()\" >\n    <span class=\"input-group-btn\">\n          <a (click)=\"searchPhotos()\"\n             class=\"btn btn-default\"\n             id = \"btnSearch\"\n             type=\"button\">\n              <span class=\"fa fa-search\"></span>\n          </a>\n      </span>\n  </div>\n\n  <div class=\"row\" *ngIf=\"photos\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <p></p>\n      <img (click)=\"selectPhoto(pic)\"\n           width=\"100%\"\n           [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a [routerLink]=\"['/user', userId]\"\n       class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/shared.service */ "./src/app/services/shared.service.ts");






var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId from shared service
        this.userId = this.sharedService.user['_id'];
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
            if (_this.widgetId === '') {
                _this.widget = _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"].getNewWidget();
            }
            else {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                }, function (error) { return console.log(error); });
            }
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        if (this.widgetId === '') {
            this.widget.type = 'Image';
            this.widget.pageId = this.pageId;
            this.create(this.widget);
        }
        else {
            this.update(this.widget);
        }
    };
    FlickrImageSearchComponent.prototype.create = function (widget) {
        var _this = this;
        this.widgetService.createWidget(this.pageId, widget).subscribe(function (widgets) {
            _this.widgetId = widgets[widgets.length - 1]._id;
            console.log('create new widget Image');
            _this.route();
        }, function (error) { return console.log(error); });
    };
    FlickrImageSearchComponent.prototype.update = function (widget) {
        var _this = this;
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (response) {
            console.log('updated Image url using Flickr');
            _this.route();
        }, function (error) {
            console.log(error);
        });
    };
    FlickrImageSearchComponent.prototype.route = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Widgets Edit</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <button class=\"nav-link cl-icon-padding\" (click)=\"updateImage()\">\n          <i class=\"fa fa-check\"></i>\n          </button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <!--<div *ngIf=\"errorFlag\" class=\"alert alert-danger\">-->\n    <!--{{errorMsg}}-->\n  <!--</div>-->\n\n  <form>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             name=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-name\"\n             placeholder=\"name\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             name=\"text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-text\"\n             placeholder=\"Text\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\"\n             name=\"url\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             placeholder=\"url\"/>\n    </div>\n\n    <!--<span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">-->\n          <!--Please enter URL!-->\n    <!--</span>-->\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\"\n             name=\"width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"image-width\"\n             placeholder=\"100%\"/>\n    </div>\n\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"exampleInputFile\">Upload</label>-->\n      <!--<input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">-->\n    <!--</div>-->\n\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <input  name=\"width\" value=\"{{widget?.width}}\"   style=\"display: none\"/>\n      <input  name=\"name\" value=\"{{widget?.name}}\"   style=\"display: none\"/>\n      <input  name=\"text\" value=\"{{widget?.text}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n  </form>\n\n  <button class=\"btn btn-primary btn-block\"\n          (click)=\"chooseFromFlickr()\">Choose From Flickr</button>\n\n  <button class=\"btn btn-danger  btn-block\" (click)=\"deleteImage()\"\n     routerLink=\"..\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, route) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMsg = 'Please enter URL!';
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget image');
            }, function (error) { return console.log(error); });
        }
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.updateImage = function () {
        // if (this.widget.url === undefined) {
        //   this.errorFlag = true;
        //   return;
        // }
        if (this.widgetId === undefined) {
            this.widget.type = 'IMAGE';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget image: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget image: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);
            }, function (error) { return console.log(error); });
        }
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.chooseFromFlickr = function () {
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId, 'flickr']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetImageComponent.prototype, "imageForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC10ZXh0L3dpZGdldC10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse mr-auto\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand brand cl-icon-padding\" routerLink=\".\">Widgets Edit</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <button class=\"nav-link cl-icon-padding\"\n              (click)=\"update()\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"text-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"text-name\"\n             placeholder=\"name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"text-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"text-text\"\n             placeholder=\"text\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"text-rows\">Rows</label>\n      <input [(ngModel)]=\"widget.rows\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"text-rows\"\n             placeholder=\"3\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"text-placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"text-placeholder\"\n             placeholder=\"placeholder\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"input-group\" *ngIf=\"widget\">\n      <input type=\"text\"\n             readonly\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\"\n               type=\"checkbox\"\n               [ngModelOptions]=\"{standalone: true}\"/>\n      </span>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"delete()\">Delete</button>\n\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMsg = 'Please enter name!';
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetTextComponent.prototype.delete = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget text');
            }, function (error) { return console.log(error); });
        }
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetTextComponent.prototype.update = function () {
        if (this.widget.name === undefined) {
            this.errorFlag = true;
            return;
        }
        if (this.widgetId === undefined) {
            this.widget.type = 'TEXT';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget text: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', rows: ' + widget.rows + ', placeholder: '
                    + widget.placeholder + ', formatted: ' + widget.formatted);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget text: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', rows: ' + widget.rows + ', placeholder: '
                    + widget.placeholder + ', formatted: ' + widget.formatted);
            }, function (error) { return console.log(error); });
        }
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput.form-control {\n  margin-bottom: 5px;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\na:hover{\n  text-decoration: none;\n}\n\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n  color: #fff;\n}\n\n.navbar-custom .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-custom {\n  background-color: #337ab7;\n}\n\n.cl-container-padding {\n  padding-top: 1%;\n  padding-bottom: 10%;\n}\n\n.cl-icon-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.custom-padding {\n  padding-top: 5%;\n  padding-bottom: 10%;\n}\n\n.cl-text-blue{\n  color: #337ab7;\n}\n\n.cl-icon-blue {\n  color: #337ab7;\n}\n\n.cl-container-padding-more {\n  padding-top: 7%;\n  padding-bottom: 10%;\n}\n\n.special-btn {\n  position: relative;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LXlvdXR1YmUvd2lkZ2V0LXlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LXlvdXR1YmUvd2lkZ2V0LXlvdXR1YmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtbGlzdC1pdGVtLWJvcmRlcmxlc3Mge1xuICBib3JkZXItdG9wOiAwIG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XG59XG5cbmE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdmJhci1jdXN0b20gLm5hdmJhci1icmFuZCxcbi5uYXZiYXItY3VzdG9tIC5uYXZiYXItdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5jbC1pY29uLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jdXN0b20tcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLXRleHQtYmx1ZXtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC1pY29uLWJsdWUge1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLWNvbnRhaW5lci1wYWRkaW5nLW1vcmUge1xuICBwYWRkaW5nLXRvcDogNyU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5zcGVjaWFsLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <li>\n        <a class=\"nav-link cl-icon-padding\" [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n          <i class=\"fa fa-chevron-left\"></i>\n        </a>\n      </li>\n      <li>\n        <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Widgets Edit</a>\n      </li>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <button class=\"nav-link cl-icon-padding\" (click)=\"updateYoutube()\">\n          <i class=\"fa fa-check\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-name\"\n             placeholder=\"Name\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-text\"\n             placeholder=\"Text\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-URL\"\n             placeholder=\"URL\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n    <!--<span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">-->\n          <!--Please enter URL!-->\n    <!--</span>-->\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"youtube-width\"\n             placeholder=\"100%\"\n             [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n\n  </form>\n  <button class=\"btn btn-danger btn-block\" (click)=\"deleteYoutube()\"\n     routerLink=\"..\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a [routerLink]=\"['/user', userId]\" class=\"navbar-link navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n</nav>\n\n\n"

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
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, route) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.route = route;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMsg = 'Please enter URL!';
        this.activatedRoute.params.subscribe(function (params) {
            console.log('widget._id: ' + params['wgid']);
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        if (this.widgetId === undefined) {
            this.widget = _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"].getNewWidget();
        }
        else {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        if (this.widgetId !== undefined) {
            this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
                console.log('delete widget youtube');
            }, function (error) { return console.log(error); });
        }
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        if (this.widget.url === undefined) {
            this.errorFlag = true;
            return;
        }
        if (this.widgetId === undefined) {
            this.widget.type = 'YOUTUBE';
            this.widget.pageId = this.pageId;
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                console.log('create widget youtube: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);
            }, function (error) { return console.log(error); });
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget youtube: ' + widget._id + ', name: ' + widget.name
                    + ', text: ' + widget.text + ', url: ' + widget.url + ', width: ' + widget.width);
            }, function (error) { return console.log(error); });
        }
        this.route.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "youtubeForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/oder-by-pipe.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/widget/widget-list/oder-by-pipe.pipe.ts ***!
  \********************************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/sortable.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/widget/widget-list/sortable.directive.ts ***!
  \*********************************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
                // console.log("start at: " + refe.initialIndex);
            },
            stop: function (event, ui) {
                // console.log("stop at: " + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBRSxTQUFTO0VBQ2pDLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgaGVpZ2h0OiAwO1xufVxuLnlvdXR1YmUtd2lkZ2V0IGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\n    <ul class=\"navbar-nav\">\n      <a class=\"nav-link cl-icon-padding\" routerLink=\"../..\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-icon-padding\" routerLink=\".\">Widgets Edit</a>\n    </ul>\n  </div>\n\n  <div>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link cl-icon-padding\" routerLink=\"./new\"><i class=\"fa fa-plus\"></i></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<div id=\"sortable\" class=\"container-fluid cl-container-padding\" appSortable (newIndexes)=\"reorderItems($event)\" *ngIf=\"widgets\">\n\n  <div *ngFor=\"let widget of widgets | orderBy\">\n    <div [ngSwitch]=\"widget.type\">\n\n      <div class=\"jga-widget-tool\">\n        <a class=\"pull-right\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n        <a routerLink=\"./{{widget._id}}\" class=\"pull-right\">\n          <span class=\"fa fa-cog\"></span>\n        </a>\n      </div>\n\n      <div *ngSwitchCase=\"'HEADER'\">\n        <div [ngSwitch]=\"widget.size\">\n          <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n          <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n          <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n          <h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>\n          <h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>\n          <h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>\n          <h1 *ngSwitchDefault>{{widget.text}}</h1>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'TEXT'\">\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n        </div>\n\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows <= 1)\"\n               placeholder=\"{{widget.placeholder}}\"\n               class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\"\n                  placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}</textarea>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\"></div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe [src]=getUrl(widget.url)\n                  width=\"560\" height=\"315\"\n                  frameborder=\"0\"\n                  allowfullscreen></iframe>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <img class=\"img-responsive img-rounded cl-widget-images\"\n             [src]=\"widget.url\"\n             width=\"{{widget.width}}\">\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul>\n    <a routerLink=\".\" class=\"navbar-link navbar-text cl-icon-padding\">\n      <i class=\"fa fa-play\"></i>\n    </a>\n    <a routerLink=\".\" class=\"navbar-link navbar-text cl-icon-padding\">\n      <i class=\"fa fa-eye\"></i>\n    </a>\n  </ul>\n  <ul>\n    <a routerLink=\"../../../../..\" class=\"navbar-brand navbar-text pull-right cl-icon-padding\">\n      <i class=\"fa fa-user\"></i>\n    </a>\n  </ul>\n\n</nav>\n"

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
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, domSanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            console.log('loading widgets for pageId: ' + _this.pageId);
            return _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
            }, function (error) {
                console.log(error);
            });
        });
    };
    WidgetListComponent.prototype.getUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
    };
    WidgetListComponent.prototype.reorderItems = function (indexes) {
        this.widgetService.reorderWidgets(this.pageId, indexes.startIndex, indexes.endIndex, this.widgets)
            .subscribe(function (data) {
            console.log('start: ' + indexes.startIndex);
            console.log('stop: ' + indexes.endIndex);
            window.location.reload();
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
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

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, email, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
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

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url, name, formatted, rows, placeholder) {
        if (formatted === void 0) { formatted = false; }
        if (rows === void 0) { rows = 1; }
        if (placeholder === void 0) { placeholder = 'placeholder'; }
        this._id = _id;
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.name = name;
        this.text = text;
        this.formatted = formatted;
        this.rows = rows;
        this.placeholder = placeholder;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by mayankrd on 8/16/17.
 */


var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '78bb6902bcde78319e867c796eb9f5d6';
        this.secret = '2435fa6c2be5be28';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PageService.getNewPage = function () {
        return new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"](undefined, undefined, undefined, undefined);
    };
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
        // .pipe(map(
        // (res: any) => res.json()));
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    // findPageByWebsiteId2(websiteId: String) {
    //   return this.pages.filter(function (page) {
    //     return page.websiteId === websiteId;
    //   });
    // }
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Created by mayankrd on 8/10/17.
 */


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.getNewUser = function () {
        return new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"](undefined, undefined, undefined, undefined, undefined, undefined);
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    WebsiteService.getNewWebsite = function () {
        return new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"](undefined, undefined, undefined, undefined);
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    WidgetService.getNewWidget = function () {
        return new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"](undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WidgetService.prototype.reorderWidgets = function (pageId, startIndex, endIndex, widgets) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId
            + '/widget?initial=' + startIndex + '&final=' + endIndex, widgets);
        // .pipe(map(
        //   (res: any) => res.json()));
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
    production: false,
    baseUrl: 'http://localhost:3200'
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

module.exports = __webpack_require__(/*! /Users/alexisliu/Documents/GitHub/cs5610-2018/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
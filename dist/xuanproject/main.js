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
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_auth_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service.client */ "./src/app/services/auth.service.client.ts");

















var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_services_auth_service_client__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
    { path: 'website/:wid/page/:pid/widget/:wgid/flickr', component: _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__["FlickrImageSearchComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

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
        this.title = 'xuanproject';
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
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/sortable.directive */ "./src/app/directives/sortable.directive.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _views_widget_widget_list_order_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/widget/widget-list/order.pipe */ "./src/app/views/widget/widget-list/order.pipe.ts");
/* harmony import */ var _services_auth_service_client__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/auth.service.client */ "./src/app/services/auth.service.client.ts");


































// import {HashLocationStrategy, LocationStrategy} from '@angular/common';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_15__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_16__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_17__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_18__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_19__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_20__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_21__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_22__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_23__["WidgetYoutubeComponent"],
                _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_5__["SortableDirective"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_28__["WidgetHtmlComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_29__["WidgetTextComponent"],
                _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_31__["FlickrImageSearchComponent"],
                _views_widget_widget_list_order_pipe__WEBPACK_IMPORTED_MODULE_33__["OrderByPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_24__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_25__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_26__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_27__["WidgetService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_30__["SharedService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_32__["FlickrService"], _services_auth_service_client__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/sortable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/sortable.directive.ts ***!
  \**************************************************/
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
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent component or the directive calling component
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
            },
            stop: function (event, ui) {
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

/***/ "./src/app/services/auth.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/auth.service.client.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('auth guard checking');
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = 'cce8ef707ea5e569babd7cdb9b31d183';
        this.secret = '1115a7df37ac28a4';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url, { responseType: 'text' });
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this._http.get(url);
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.get(url);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.put(url, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.delete(url);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared.service.client.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserService = /** @class */ (function () {
    function UserService(_http, sharedService, _router) {
        this._http = _http;
        this.sharedService = sharedService;
        this._router = _router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user/', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.updateUser = function (user) {
        console.log('user client update');
        return this._http.put(this.baseUrl + '/api/user/' + user._id, user);
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        console.log(url);
        return this._http.get(url);
    };
    UserService.prototype.deleteUserById = function (userId) {
        var req_url = this.baseUrl + '/api/user/' + userId;
        return this._http.delete(req_url);
    };
    UserService.prototype.login = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, { headers: this.options, withCredentials: true });
        // .pipe(map(
        //         (res: Response) => {
        //             const data = res.json();
        //             return data;
        //         }
        //     ));
    };
    UserService.prototype.logout = function () {
        return this._http.post(this.baseUrl + '/api/logout', '', { headers: this.options, withCredentials: true });
        // .pipe(map(
        //         (res: Response) => {
        //             const data = res.json();
        //             return data;
        //         }
        //     ));
    };
    UserService.prototype.register = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/register', user, { withCredentials: true });
        // .pipe(map(
        //     async (res: Response) => {
        //         const data = await res.json();
        //         console.log('user client: ' + data);
        //         return data;
        //     }
        // ));
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this._http.get(this.baseUrl + '/api/loggedIn', { headers: this.options, withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            // const user = JSON.stringify(res);
            var user = res;
            console.log('user client loggedIn: ' + user);
            if (user !== '0') {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this._router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this._http.post(url, website);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        var body = website;
        return this._http.put(url, body);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this._http.delete(url);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this._http.post(url, widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this._http.get(url);
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this._http.get(url);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this._http.put(url, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this._http.delete(url);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this._http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updatePage()\" #f=\"ngForm\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page\">\n    <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\" [routerLink]=\"\">Edit Page</a>\n  <a class=\"nav-item nav-link ml-auto\" (click)=\"updatePage()\"\n     routerLink=\"/website/{{websiteId}}/page\"><i class=\"fas fa-check black-icons\"></i></a>\n</nav>\n\n<div class=\"container move-up\" *ngIf=\"page\">\n    <div class=\"form-group\">\n        <label for=\"page-name\">Name</label>\n        <input type=\"text\" id=\"page-name\" placeholder=\"Page Name\" class=\"form-control\" name=\"pagename\"\n               ngModel required #pagename=\"ngModel\" [(ngModel)]=\"page.name\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!pagename.valid && pagename.touched\">\n      Please enter pagename!\n    </span>\n\n    <div class=\"form-group\">\n        <label for=\"page-title\">Title</label>\n        <input type=\"text\" id=\"page-title\" placeholder=\"Page Title\" class=\"form-control\" name=\"pagetitle\"\n               ngModel required #pagetitle=\"ngModel\" [(ngModel)]=\"page.title\">\n    </div>\n    <a class=\"btn btn-danger  btn-block move-up\" (click)=\"deletePage()\"\n       routerLink=\"/website/{{websiteId}}/page\">Delete</a>\n</div>\n<nav class=\"navbar fixed-bottom bg-light navbar-light justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right\">\n      <i class=\"fas fa-user blue\"></i></a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.updatePage = function () {
        this.page.name = this.myPageForm.value.pagename;
        this.page.title = this.myPageForm.value.pagetitle;
        this.pageService.updatePage(this.pageId, this.page).subscribe(function (page) {
            console.log('update page: ' + page._id + ' ' + page.name);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function (data) {
            console.log('delete page: ' + _this.page._id);
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.pageService.findPageById(this.pageId).subscribe(function (page) {
            _this.page = page;
            console.log(_this.page);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageEditComponent.prototype, "myPageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website\"><i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\" [routerLink]=\"\">Pages</a>\n  <a class=\"nav-item nav-link ml-auto\" routerLink=\"./new\">\n    <i class=\"fas fa-plus black-icons\"></i></a>\n</nav>\n\n  <div class=\"container move-up\" *ngIf=\"pages\">\n    <ul class=\"list-group border-0\">\n      <li class=\"list-group-item border-0 \" *ngFor=\"let page of pages\">\n        <a routerLink=\"/website/{{websiteId}}/page/{{page._id}}\"><span>\n        <i class=\"fas fa-cog float-right setting\"></i></span></a>\n        <a routerLink=\"/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      </li>\n    </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light navbar-light justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right\">\n      <i class=\"fas fa-user blue\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
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
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
        this.pageService.findPagesByWebsiteId(this.websiteId).subscribe(function (data) {
            _this.pages = data;
            console.log(data);
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createPage()\" #f=\"ngForm\">\n    <nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n      <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page\">\n        <i class=\"fas fa-chevron-left black-icons\"></i></a>\n      <a class=\"navbar-brand  white-icons\" [routerLink]=\"\">New Page</a>\n      <a class=\"nav-item nav-link ml-auto\" routerLink=\"..\" (click)=\"createPage()\" >\n        <i class=\"fas fa-check black-icons\"></i></a>\n    </nav>\n\n    <div class=\"container move-up\">\n\n        <div class=\"form-group\">\n            <label for=\"page-name\">Name</label>\n            <input type=\"text\" id=\"page-name\" placeholder=\"Page Name\" class=\"form-control\" name=\"pagename\" ngModel required #pagename=\"ngModel\">\n        </div>\n        <span class=\"help-block\" *ngIf=\"!pagename.valid\">\n            Please enter pagename!\n        </span>\n\n        <div class=\"form-group\">\n            <label for=\"page-title\">Title</label>\n            <input type=\"text\" id=\"page-title\" placeholder=\"Page Title\" class=\"form-control\" name=\"pagetitle\" ngModel required #pagetitle=\"ngModel\">\n        </div>\n    </div>\n    <nav class=\"navbar fixed-bottom bg-light navbar-light justify-content-end\">\n      <div class=\"container-fuild\">\n        <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right\">\n          <i class=\"fas fa-user blue\"></i>\n        </a>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.createPage = function () {
        var page = {
            name: this.myPageForm.value.pagename,
            title: this.myPageForm.value.pagetitle,
            _website: this.websiteId,
        };
        this.pageService.createPage(this.websiteId, page).subscribe(function (data) {
            console.log('create page: ' + data._id + ' ' + data.name);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageNewComponent.prototype, "myPageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n\n    <div class=\"form-group\">\n      <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">\n        <span class=\"fab fa-facebook-f\"></span>\n        Facebook\n      </a>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
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
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _userService, sharedService) {
        this.router = router;
        this._userService = _userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.myLoginForm.value.username;
        this.password = this.myLoginForm.value.password;
        this._userService.login(this.username, this.password)
            .subscribe(function (user) {
            console.log(user);
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log(error);
            _this.errorFlag = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "myLoginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-primary\">\n  <span class=\"navbar-brand\">Profile</span>\n  <a class=\"nav-item nav-link ml-auto\" [routerLink]=\"\" (click)=\"updateUser()\">\n      <i class=\"fas fa-check white-icons\"></i></a>\n</nav>\n\n<div class=\"container\">\n    <div class=\"form-group move-down\" *ngIf=\"user\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"user.username\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\" [(ngModel)]=\"user.email\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\" [(ngModel)]=\"user.firstName\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"user\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\" [(ngModel)]=\"user.lastName\">\n    </div>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/website\">Websites</a>\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteUser()\" routerLink=\"/login\">Delete User</a>\n  <a class=\"btn btn-danger  btn-block\"\n     (click)=\"logout()\" routerLink=\"/login\">Logout</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-dark bg-primary\">\n  <a class = \"navbar-brand\" id=\"hidden\">hidden bottom</a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    ProfileComponent.prototype.updateUser = function () {
        this.sharedService.user = this.user;
        console.log(this.user);
        return this.userService.updateUser(this.user).subscribe(function (data) { return console.log('updated' + data); });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        return this.userService.deleteUserById(this.user._id).subscribe(function (user) {
            _this.sharedService.user = '';
            console.log('user deleted' + user);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        console.log('user from sharedService: ' + this.user._id);
        this.userService.findUserById(this.user._id).subscribe(function (user) {
            _this.user = user;
            console.log('user from db: ' + _this.user);
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.userService.logout()
            .subscribe();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n\n  </div>\n\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" name=\"username\" placeholder=\"alice\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" name=\"password\" placeholder=\"######\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <label>Verify Password</label>\n      <input type=\"password\" name=\"v_password\" placeholder=\"######\" class=\"form-control\" ngModel required #v_password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!v_password.valid && v_password.touched\">\n      Please re-enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Register</button>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Cancel</button>\n    </div>\n\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
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
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = { username: '', password: '' };
        this.errorMsg = 'Password mis-matching!';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user.username = this.myRegisterForm.value.username;
        this.user.password = this.myRegisterForm.value.password;
        this.v_password = this.myRegisterForm.value.v_password;
        if (this.v_password === this.user.password) {
            this.errorFlag = false;
            this.userService.register(this.user.username, this.user.password)
                .subscribe(function (data) {
                _this.sharedService.user = data;
                console.log(data.name);
                _this.router.navigate(['/profile']);
            }, function (error) {
                _this.errorMsg = error._body;
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "myRegisterForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWebsite()\" #f=\"ngForm\">\n<div class=\"container-fluid m-0 p-0\">\n  <div class=\"row\">\n    <div class=\"col-4 p-0 d-none d-sm-block\">\n      <nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-primary justify-content-start\">\n        <a class=\"nav-item nav-link navblack\" routerLink=\"/website\">\n          <i class=\"fas fa-chevron-left white-icons move-left\"></i></a>\n        <a class=\"navbar-brand\" [routerLink]=\"\">Websites</a>\n        <a class=\"nav-item nav-link ml-auto\" routerLink=\"/website/new\">\n          <i class=\" navblack fas fa-plus white-icons\"></i></a>\n      </nav>\n    </div>\n    <div class=\"col-12 col-sm-8 p-0\">\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary justify-content-start\">\n        <a class=\"nav-item nav-link navblack d-sm-none\" routerLink=\"/website\">\n          <i class=\"fas fa-chevron-left white-icons move-left\"></i></a>\n        <a class=\"navbar-brand pl-4 \" [routerLink]=\"\">Edit Website</a>\n        <a class=\"nav-item nav-link ml-auto\" (click)=\"updateWebsite()\"  routerLink=\"/website\">\n          <i class=\" navblack fas fa-check white-icons move-right\"></i></a>\n      </nav>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\"><div class=\"container col-4 d-none d-sm-block move-up\">\n    <ul class=\"list-group border-0\" *ngIf=\"websites\">\n      <!--<div -->\n        <div *ngFor=\"let website of websites\">\n          <li class=\"list-group-item border-0 \">\n            <a routerLink=\"/website/{{website._id}}\"><span><i class=\"fas fa-cog float-right setting\"></i></span></a>\n            <a routerLink=\"./page\">{{website.name}}</a>\n          </li>\n        </div>\n      <!--</div>-->\n    </ul>\n  </div>\n\n<div class=\"col-12 col-sm-8 move-up\">\n  <div class=\"form-group\" *ngIf=\"website\">\n    <div class=\"form-group\">\n      <label for=\"website-name\">Website Name</label>\n      <input type=\"text\" id=\"website-name\" placeholder=\"Name\" class=\"form-control\" name=\"websitename\"\n             ngModel required #websitename=\"ngModel\" [(ngModel)]=\"website.name\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!websitename.valid && websitename.touched\">\n      Please enter website name!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"website-description\">Website Description</label>\n      <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" name=\"description\"\n                ngModel required #description=\"ngModel\" [(ngModel)]=\"website.description\"></textarea>\n    </div>\n  </div>\n    <a class=\"btn btn-danger  btn-block move-up\" routerLink=\"/website\"\n       (click)=\"deleteWebsite()\">Delete</a>\n  </div>\n</div>\n  </div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right \">\n      <i class=\"fas fa-user white-icons\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    WebsiteEditComponent.prototype.updateWebsite = function () {
        this.website._id = this.websiteId;
        this.website.name = this.myWebForm.value.websitename;
        this.website.description = this.myWebForm.value.description;
        this.websiteService.updateWebsite(this.websiteId, this.website).subscribe();
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId).subscribe();
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
        this.websiteService.findWebsiteById(this.websiteId).subscribe(function (website) {
            _this.website = website;
            console.log(_this.website);
            _this.websiteService.findWebsitesByUser(_this.website._user)
                .subscribe(function (data) {
                _this.websites = data;
                console.log(_this.websites);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteEditComponent.prototype, "myWebForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-primary justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/profile\"><i class=\"fas fa-chevron-left white-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\" [routerLink]=\"\">Websites</a>\n  <a class=\"nav-item nav-link ml-auto\" routerLink=\"./new\"><i class=\"fas fa-plus white-icons\"></i></a>\n</nav>\n\n<div class=\"container move-up\" *ngIf=\"websites\">\n    <ul class=\"list-group border-0\">\n      <li class=\"list-group-item border-0 \" *ngFor=\"let website of websites\">\n        <a routerLink=\"./{{website._id}}\"><span><i class=\"fas fa-cog float-right setting\"></i></span></a>\n        <a routerLink=\"./{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right\">\n      <i class=\"fas fa-user white-icons\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");





var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userId = this.user._id;
        console.log('userId: ' + this.userId);
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
            console.log(data);
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createWebsite()\" #f=\"ngForm\">\n<div class=\"container-fluid m-0 p-0\">\n  <div class=\"row\">\n    <div class=\"col-4 p-0 d-none d-sm-block\">\n      <nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-primary justify-content-start\">\n        <a class=\"nav-item nav-link navblack\" routerLink=\"/website\">\n          <i class=\"fas fa-chevron-left white-icons move-left\"></i></a>\n        <a class=\"navbar-brand  \" [routerLink]=\"\">Websites</a>\n        <a class=\"nav-item nav-link ml-auto\" routerLink=\"/website/new\">\n          <i class=\" navblack fas fa-plus white-icons\"></i></a>\n      </nav>\n    </div>\n    <div class=\"col-12 col-sm-8 p-0\">\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary justify-content-start\">\n        <a class=\"nav-item nav-link navblack d-sm-none\" routerLink=\"/website\">\n          <i class=\"fas fa-chevron-left white-icons move-left\"></i></a>\n        <a class=\"navbar-brand pl-4 \" [routerLink]=\"\">New Website</a>\n        <a class=\"nav-item nav-link ml-auto\" routerLink=\"/website\" (click)=\"createWebsite()\">\n          <i class=\" navblack fas fa-check white-icons move-right\" ></i></a>\n      </nav>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\"><div class=\"container col-4 d-none d-sm-block move-up\">\n    <ul class=\"list-group border-0\" *ngIf=\"websites\">\n        <div *ngFor=\"let web of websites\">\n          <li class=\"list-group-item border-0 \" *ngIf=\"web\">\n            <a routerLink=\"/website/{{web._id}}\">\n              <span><i class=\"fas fa-cog float-right setting\"></i></span></a>\n            <a routerLink=\"/website/{{web._id}}/page\">{{web.name}}</a>\n          </li>\n        </div>\n    </ul>\n  </div>\n\n    <div class=\"col-12 col-sm-8 move-up\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\" id=\"website-name\" name=\"websitename\" placeholder=\"Name\" class=\"form-control\" ngModel required #websitename=\"ngModel\">\n      </div>\n      <span class=\"help-block\" *ngIf=\"!websitename.valid\">\n      Please enter website name!\n    </span>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" name=\"description\"\n                  ngModel required #description=\"ngModel\"></textarea>\n      </div>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar fixed-bottom bg-primary navbar-dark justify-content-end\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right \">\n      <i class=\"fas fa-user white-icons\"></i>\n    </a>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.website = {
            name: this.myWebForm.value.websitename,
            description: this.myWebForm.value.description,
            _user: this.userId,
        };
        this.websiteService.createWebsite(this.userId, this.website).subscribe(function (website) {
            _this.website = website;
            _this.websiteId = website._id;
        });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.sharedService.user;
        this.userId = user._id;
        console.log(this.userId);
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
        console.log(this.websites);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteNewComponent.prototype, "myWebForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\" [routerLink]=\"\">Choose Widget</a>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\" (click)=\"createWidget('HEADER')\" >Header</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\" >Label</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\" (click)=\"createWidget('HTML')\">HTML</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\" (click)=\"createWidget('TEXT')\">Text Input</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\">Link</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\">Button</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\" (click)=\"createWidget('IMAGE')\">Image</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\" (click)=\"createWidget('YOUTUBE')\">YouTube</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\">Data Table</a>\n    </li>\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"\">Repeater</a>\n    </li>\n  </ul>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
        this.defaultWidgetValues = {
            'HEADER': { name: '', widgetType: 'HEADER', 'size': 1 },
            'IMAGE': { name: '', widgetType: 'IMAGE', width: '100%' },
            'YOUTUBE': { name: '', widgetType: 'YOUTUBE', width: '100%' },
            'HTML': { name: '', widgetType: 'HTML' },
            'TEXT': { name: '', widgetType: 'TEXT', placeholder: '' }
        };
    }
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var _this = this;
        this.widget = this.defaultWidgetValues[widgetType];
        console.log('new widget: ' + this.widget);
        this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
            _this.widget = data;
            console.log(data);
            _this.router.navigate(['/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/' + data._id]);
        });
        console.log(this.widget);
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget\" [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\">Widget Edit</a>\n  <a class=\"nav-item nav-link ml-auto\" (click)=\"updateWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-check black-icons\"></i></a>\n</nav>\n\n<div class=\"container move-up\" *ngIf=\"widget\">\n    <div class=\"form-group\" >\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\" name=\"widgetname\"\n             ngModel required #widgetname=\"ngModel\" [(ngModel)]=\"widget.name\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!widgetname.valid\">\n      Please enter widget name!\n    </span>\n\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\" name=\"size\" [(ngModel)]=\"widget.size\">\n    </div>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.flag = false; // setting error flag as false by default
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
                console.log(_this.widget);
            });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        this.widget.name = this.myWidgetForm.value.widgetname;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget header: ');
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            console.log('widget deleted' + data._id);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "myWidgetForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\">Widget Edit</a>\n  <a class=\"nav-item nav-link ml-auto\" (click)=\"updateWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-check black-icons\"></i></a>\n</nav>\n\n<div class=\"container move-up\">\n  <div *ngIf=\"flag\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"Name\">Name</label>\n      <input ngModel required #widgetname=\"ngModel\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"widgetname\"\n             placeholder=\"Name\"\n             [(ngModel)]=\"widget.name\"\n             required>\n      <span class=\"help-block\" *ngIf=\"!widgetname.valid\">\n      Please enter widget name!\n    </span>\n    </div>\n    <div *ngIf=\"widget\">\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </div>\n  <p></p>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.flag = false; // setting error flag as false by default
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        this.widget.name = this.myWidgetForm.value.widgetname;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget header: ');
            });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            console.log('widget deleted' + data._id);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHtmlComponent.prototype, "myWidgetForm", void 0);
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2UvZmxpY2tyLWltYWdlLXNlYXJjaC9mbGlja3ItaW1hZ2Utc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n    <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\">\n        <i class=\"fas fa-chevron-left black-icons\"></i></a>\n    <a class=\"navbar-brand  white-icons\">Search Flickr</a>\n</nav>\n\n<!--!!Material on the page!!-->\n<div class = \"container\">\n    <div class=\"input-group\">\n        <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n        <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"fas fa-search fontawsome_icon\"></span>\n            </a>\n        </span>\n    </div>\n\n    <div class=\"row\">\n        <!--<div *ngFor = \"let pic of photos['photo']\" class=\"col-xs-4\">-->\n        <div *ngFor = \"let pic of photos\" class=\"col-xs-4\">\n            <img    (click)=\"selectPhoto(pic)\"\n                    width=\"100%\"\n                    [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n            <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n            <p></p>\n        </div>\n    </div>\n</div>\n<!-- Footer -->\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n    <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \************************************************************************************************************/
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





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos.photo;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        console.log('flickr: ' + url);
        var widget = {
            websiteId: this.websiteId,
            pageId: this.pageId,
            url: url
        };
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/website/' + _this.websiteId + '/page/' +
                        _this.pageId + '/widget/' + _this.widgetId]);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\">Widget Edit</a>\n  <a class=\"nav-item nav-link ml-auto\" (click)=\"updateWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-check black-icons\"></i></a>\n</nav>\n\n<div class=\"container cl-container-padding move-up\" *ngIf=\"widget\">\n\n        <div class=\"form-group\" >\n            <label for=\"image-name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\" name=\"widgetname\"\n                   ngModel required #widgetname=\"ngModel\" [(ngModel)]=\"widget.name\">\n        </div>\n        <span class=\"help-block\" *ngIf=\"!widgetname.valid\">\n          Please enter widget name!\n        </span>\n\n        <div class=\"form-group\" *ngIf=\"widget\">\n            <label for=\"image-text\">Text</label>\n            <input [(ngModel)]=\"widget.text\"\n                   name=\"text\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   id=\"image-text\"\n                   placeholder=\"Text\"/>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"widget\">\n            <label for=\"image-URL\">URL</label>\n            <input [(ngModel)]=\"widget.url\"\n                    type=\"text\"\n                   name=\"url\"\n                   class=\"form-control\"\n                   id=\"image-URL\"\n                   placeholder=\"url\"/>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"widget\">\n            <label for=\"image-width\">Width</label>\n            <input [(ngModel)]=\"widget.width\"\n                   name=\"width\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   id=\"image-width\"\n                   placeholder=\"100%\"/>\n        </div>\n\n        <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n            <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n            <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n            <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n            <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n            <input  name=\"width\" value=\"{{widget?.width}}\"   style=\"display: none\"/>\n            <input  name=\"name\" value=\"{{widget?.name}}\"   style=\"display: none\"/>\n            <input  name=\"text\" value=\"{{widget?.text}}\"   style=\"display: none\"/>\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n            <br/>\n        </form>\n    <a class=\"btn btn-primary btn-block \"\n       [routerLink]=\"['/website/'+websiteId+'/page/'+pageId+'/widget/'+widgetId+'/flickr']\" >Choose From Flickr</a>\n    <a class=\"btn btn-danger  btn-block\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\"\n        (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flag = false; // setting error flag as false by default
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        this.widget.name = this.myWidgetForm.value.widgetname;
        console.log('start update widget image: ');
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            console.log('fail update widget image: ');
            this.flag = true;
        }
        else {
            console.log('trying update widget image: ');
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget image: ');
            });
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            console.log('widget deleted: ' + data._id);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetImageComponent.prototype, "myWidgetForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtdGV4dC93aWRnZXQtdGV4dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\">Widget Edit</a>\n  <a class=\"nav-item nav-link ml-auto\" (click)=\"updateWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-check black-icons\"></i></a>\n</nav>\n\n<div class=\"container move-up\" *ngIf=\"widget\">\n  <div class=\"form-group\">\n    <label for=\"heading-name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\" name=\"widgetname\"\n           ngModel required #widgetname=\"ngModel\" [(ngModel)]=\"widget.name\">\n  </div>\n  <span class=\"help-block\" *ngIf=\"!widgetname.valid\">\n      Please enter widget name!\n    </span>\n\n  <div class=\"form-group\" *ngIf=\"widget\">\n    <label for=\"heading-rows\">Rows</label>\n    <input type=\"number\" class=\"form-control\" id=\"heading-rows\" placeholder=\"1\" name=\"rows\" [(ngModel)]=\"widget.rows\">\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"widget\">\n    <label for=\"heading-text\">Text</label>\n    <input type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\">\n  </div>\n\n  <div class=\"input-group\" *ngIf=\"widget\">\n    <input type=\"text\"\n           readonly\n           value=\"Formatted\"\n           name=\"text\"\n           class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" name=\"formatted\" type=\"checkbox\"/>\n    </span>\n  </div>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.flag = false; // setting error flag as false by default
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) { return _this.widget = data; }, function (error) { return console.log(error); });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        this.widget.name = this.myWidgetForm.value.widgetname;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget text: ' + widget);
            });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            console.log('widget deleted: ' + data._id);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetTextComponent.prototype, "myWidgetForm", void 0);
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateWidget()\" #f=\"ngForm\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\">Widget Edit</a>\n  <a class=\"nav-item nav-link ml-auto\" (click)=\"updateWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-check black-icons\"></i></a>\n</nav>\n\n<div class=\"container move-up\" *ngIf=\"widget\">\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\" name=\"widgetname\"\n             ngModel required #widgetname=\"ngModel\" [(ngModel)]=\"widget.name\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!widgetname.valid\">\n      Please enter widget name!\n    </span>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\" name=\"text\" [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"widget\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\" name=\"url\" [(ngModel)]=\"widget.url\">\n    </div>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\"\n     routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
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
    function WidgetYoutubeComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.flag = false; // setting error flag as false by default
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
            console.log('youtube: ' + _this.widget);
        }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        this.widget.name = this.myWidgetForm.value.widgetname;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        console.log('update youtube: ' + this.widget.url);
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = this.widget.url.match(regExp);
        this.widget.url = 'https://www.youtube.com/embed/' + match[2];
        console.log('safe youtube url: ' + this.widget.url);
        if (this.widget['name'] === undefined) {
            this.flag = true;
        }
        else {
            this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
                console.log('update widget header: ');
            });
        }
    };
    //  https://www.youtube.com/embed/mFkli0wD4-w
    //        https://www.youtube.com/embed/vw2SaHkGfss
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "myWidgetForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/order.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/views/widget/widget-list/order.pipe.ts ***!
  \********************************************************/
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

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 */\n    height: 0;\n}\n.youtube-widget iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS13aWRnZXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiAxNjo5ICovXG4gICAgaGVpZ2h0OiAwO1xufVxuLnlvdXR1YmUtd2lkZ2V0IGlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-start\">\n  <a class=\"nav-item nav-link\" routerLink=\"/website/{{websiteId}}/page\">\n    <i class=\"fas fa-chevron-left black-icons\"></i></a>\n  <a class=\"navbar-brand  white-icons\" >Widgets</a>\n  <a class=\"nav-item nav-link ml-auto\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n    <i class=\"fas fa-plus black-icons\"></i></a>\n</nav>\n\n<div class=\"content container cl-container-padding mt-5\" *ngIf=\"widgets\">\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n      <div *ngFor=\"let widget of widgets | orderBy\">\n        <table class=\"table table-borderless\">\n          <tbody>\n          <tr>\n            <td>\n              <div [ngSwitch]=\"widget.widgetType\">\n\n                <div *ngSwitchCase=\"'HEADER'\">\n                  <div class=\"float-right\">\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"float-right\">\n                      <i class=\"fas fa-bars\"></i></a>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n                      <i class=\"fas fa-cog\"></i></a>\n                  </div>\n                  <p [ngStyle]=\"{'font-size': widget.size+'00%', 'text-align': 'center'}\">{{widget.text}}</p>\n                </div>\n                <div *ngSwitchCase=\"'TEXT'\">\n                  <div class=\"float-right\">\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"float-right\">\n                      <i class=\"fas fa-bars\"></i></a>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n                      <i class=\"fas fa-cog\"></i></a>\n                  </div>\n                  <div *ngIf=\"widget.formatted\">\n                    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n                  </div>\n\n                  <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                         placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n                  <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                            rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                            class=\"form-control\">{{widget.text}}</textarea>\n                </div>\n\n                <div *ngSwitchCase=\"'IMAGE'\">\n                  <div class=\"float-right\">\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"float-right\">\n                      <i class=\"fas fa-bars\"></i></a>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n                      <i class=\"fas fa-cog\"></i></a>\n                  </div>\n                  <img class=\"img-responsive img-rounded cl-widget-images\" [src]=\"widget.url\" [width]=\"toNumber(widget.width) * 640\">\n                </div>\n\n\n                <div *ngSwitchCase=\"'YOUTUBE'\"  class=\"youtube-widget\">\n                  <div class=\"float-right\">\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"float-right\">\n                      <i class=\"fas fa-bars\"></i></a>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n                      <i class=\"fas fa-cog\"></i></a>\n                  </div>\n                  <div class=\"embed-responsive embed-responsive-16by9\" >\n                    <iframe [width]=\"toNumber(widget.width) * 640\" [height]=\"toNumber(widget.width) * 360\"\n                            [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\" frameborder=\"0\" allowfullscreen></iframe>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"pull-right\">\n                      <span class=\"glyphicon glyphicon-menu-hamburger\"></span></a>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n                      <span class=\"glyphicon glyphicon-cog\"></span></a>\n                  </div>\n                </div>\n\n                <div *ngSwitchCase=\"'HTML'\">\n                  <div class=\"float-right\">\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"float-right\">\n                      <i class=\"fas fa-bars\"></i></a>\n                    <a routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n                      <i class=\"fas fa-cog\"></i></a>\n                  </div>\n                  <div [innerHTML]=\"widget.text\"></div>\n                </div>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-expand-lg navbar-primary bg-light justify-content-start fixed-bottom\">\n  <a class=\"nav-item nav-link navblack \" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-play\"></i></a>\n  <a class=\"nav-item nav-link navblack\" routerLink=\"/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <i class=\"fas fa-eye\"></i></a>\n  <a class=\"nav-item nav-link ml-auto navblack\" routerLink=\"/profile\"><i class=\"  fas fa-user\"></i></a>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId).subscribe(function (data) {
            _this.widgets = data;
            console.log(_this.widgets);
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe();
    };
    WidgetListComponent.prototype.toNumber = function (string) {
        return parseInt(string, 10) / 100;
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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

module.exports = __webpack_require__(/*! /Users/zhexuansong/Desktop/Github/cs5610-zhexuansong-assign1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
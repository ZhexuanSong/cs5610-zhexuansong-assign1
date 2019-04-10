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
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_website_website_footer_website_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/website/website-footer/website-footer.component */ "./src/app/views/website/website-footer/website-footer.component.ts");
/* harmony import */ var _views_page_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/page/page-footer/page-footer.component */ "./src/app/views/page/page-footer/page-footer.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _services_auth_guard_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth-guard.service.client */ "./src/app/services/auth-guard.service.client.ts");
























var routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_services_auth_guard_service_client__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteListComponent"] },
    { path: 'profile/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"] },
    { path: 'profile/website/:websiteId/edit', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteEditComponent"] },
    { path: 'profile/website/:websiteId/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_8__["PageListComponent"] },
    { path: 'profile/website/:websiteId/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_11__["PageNewComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/edit', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_12__["PageEditComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__["WidgetChooserComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/new/header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__["WidgetHeaderComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/new/image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__["WidgetImageComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/new/html', component: _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_21__["WidgetHtmlComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/new/text', component: _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_22__["WidgetTextComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/new/youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__["WidgetYoutubeComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_15__["WidgetHeaderComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_16__["WidgetImageComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/html', component: _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_21__["WidgetHtmlComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/text', component: _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_22__["WidgetTextComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/flickr', component: _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_20__["FlickrImageSearchComponent"] },
    { path: 'profile/website/:websiteId/page/:pageId/widget/:widgetId/edit/youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_17__["WidgetYoutubeComponent"] },
    { path: 'website/footer', component: _views_website_website_footer_website_footer_component__WEBPACK_IMPORTED_MODULE_18__["WebsiteFooterComponent"] },
    { path: 'page/footer', component: _views_page_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_19__["PageFooterComponent"] }
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

module.exports = "body {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\ninput.form-control {\n    margin-bottom: 10px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n    color: white;\n}\n\nmain {\n    height: 100%;\n}\n\n/*profile*/\n\n#hideone {\n    color: #337ab7;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n/*websites*/\n\n.navbar-text {\n    padding-top: 0;\n}\n\n.text-bold{\n    font-weight: bold;\n    font-size: 20px;\n}\n\np.float-left {\n    height: 20px;\n    margin-top: 6px;\n}\n\n.top-left{\n    font-size: 20px;\n    margin-top: 5px;\n    margin-right: 20px;\n}\n\n.top-right{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\n.main-icon{\n    font-size: 20px;\n}\n\n.bottom-right{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nli.list-group-item {\n    border:none;\n    line-height: 20px;\n}\n\n/*website-new*/\n\nmain > div.container-fluid {\n    height:100%;\n}\n\n.colrow {\n    width: 100%;\n    height: 100%;\n}\n\n.right-form {\n    border-left: #808080 2px solid;\n}\n\na:hover {\n    text-decoration: none;\n}\n\na.top-left {\n    margin-top:10px;\n}\n\n/*widget-list*/\n\n.widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBLFdBQVc7O0FBQ1g7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsY0FBYzs7QUFDZDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbm1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLypwcm9maWxlKi9cbiNoaWRlb25lIHtcbiAgICBjb2xvcjogIzMzN2FiNztcbn1cblxuI2hpZGVvbmU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4vKndlYnNpdGVzKi9cbi5uYXZiYXItdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50ZXh0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5wLmZsb2F0LWxlZnQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi50b3AtbGVmdHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRvcC1yaWdodHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1haW4taWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3R0b20tcmlnaHR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi8qd2Vic2l0ZS1uZXcqL1xuXG5tYWluID4gZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi5jb2xyb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LWZvcm0ge1xuICAgIGJvcmRlci1sZWZ0OiAjODA4MDgwIDJweCBzb2xpZDtcbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hLnRvcC1sZWZ0IHtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cbi8qd2lkZ2V0LWxpc3QqL1xuLndpZGdldC1kaXYge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLndpZGdldC1pY29uLXNwZWNpYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ud2lkZ2V0LWRpdiA+IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cblxuLmJvdHRvbS1sZWZ0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_website_website_footer_website_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/website/website-footer/website-footer.component */ "./src/app/views/website/website-footer/website-footer.component.ts");
/* harmony import */ var _views_page_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/page/page-footer/page-footer.component */ "./src/app/views/page/page-footer/page-footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/sortable.directive */ "./src/app/directives/sortable.directive.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_guard_service_client__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/auth-guard.service.client */ "./src/app/services/auth-guard.service.client.ts");





































// import {provide} from '@angular/core';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_10__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_11__["PageListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_17__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_18__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_19__["WidgetYoutubeComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _views_website_website_footer_website_footer_component__WEBPACK_IMPORTED_MODULE_25__["WebsiteFooterComponent"],
                _views_page_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_26__["PageFooterComponent"],
                _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["SortableDirective"],
                _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_29__["FlickrImageSearchComponent"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_31__["WidgetHtmlComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_32__["WidgetTextComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_33__["QuillEditorModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_20__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_21__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_22__["PageService"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_30__["FlickrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_34__["SharedService"], _services_auth_guard_service_client__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_35__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_35__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
    function Page(pageId, name, websiteId, description) {
        this.pageId = pageId;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
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
    function User(uid, username, password, firstName, lastName, email) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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
    function Website(websiteId, name, developerId, description) {
        this.websiteId = websiteId;
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
    function Widget(widgetId, type, pageId, size, text, width, url, name, formatted, rows, placeholder) {
        if (size === void 0) { size = '20'; }
        if (width === void 0) { width = '80%'; }
        this.widgetId = widgetId;
        this.type = type;
        this.pageId = pageId;
        this.text = text;
        this.size = size;
        this.url = url;
        this.width = width;
        this.name = name;
        this.formatted = formatted;
        this.rows = rows;
        this.placeholder = placeholder;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth-guard.service.client.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
        this.key = '1fab6d3a919c5368c0ec62b7fc824374';
        this.secret = '1663901c454cb014';
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
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('001', 'Post 1', '001', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('12', 'Post 2', '123', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('123', 'Post 3', '001', 'Lorem')
        ];
        this.api = {
            'createWebsite': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
        this.user = null;
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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserService = /** @class */ (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.options = {
            headers: this.headers,
            withCredentials: true
        };
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('001', 'alice', 'alice', 'Alice', 'Wonder', '123@gmail.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('002', 'bob', 'bob', 'Bob', 'Carley', '456@neu.edu')
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUserName,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUserName = function (username) {
        return this._http.get(this.baseUrl + '/api/user?' + 'username=' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?' + 'username=' + username + '&' + 'password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = { username: username, password: password };
        return this._http.post(this.baseUrl + '/api/login', body, this.options);
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options);
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/register', user, this.options);
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user !== '0') {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _shared_service_client__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
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
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('001', 'Facebook', '001', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('123', 'Google', '001', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('321', 'Youtube', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Reddit', '222', 'Lorem')
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteByUser': this.findWebsiteByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('001', 'HEADING', '001', '30', 'Oldham to learn Scholes decision on Thursday', '100%', '', '', true, 1, ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('234', 'IMAGE', '001', '2', 'GIZMODO', '100%', 'https://thesefootballtimes.co/wp-content/uploads/2016/02/scholes.jpg', '', true, 1, ''),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'YOUTUBE', '001', '1', '', '80%', 'https://www.youtube.com/embed/APexI9Zb6iE', '', true, 1, '')
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
    };
    WidgetService.prototype.reorderWidget = function (pageId, index1, index2) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget/reorder?' + 'index1=' + index1 + '&' + 'index2=' + index2);
    };
    WidgetService.prototype.uploadImage = function (info) {
        return this._http.post(this.baseUrl + '/api/uploads', info);
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    margin: 0 auto;\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <a routerLink=\"/login\">This is Yue Wang's Assignment 6 for CS5610</a>\n</main>\n\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNThweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxudWwubGlzdC1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJpZ2h0LWZvcm0gPiBmb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jaGlkZW9uZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuI2hpZGVvbmU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNoZWNrLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page\" class=\"navbar-link text-white\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page\">\n            Pages\n          </a>\n        </p>\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/new\" class=\"navbar-link navbar-text float-right text-white\">\n          <span class=\"fas fa-plus fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n      <div class=\"col-sm-8 container-fluid\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{currPage.pageId}}/edit\">\n            Edit Page\n          </a>\n        </p>\n        <a (click)=\"updatePage()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n          <span class=\"fas fa-check fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 d-none d-sm-block\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">{{page.name}}\n            </a>\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/edit\">\n          <span class=\"fas fa-cog fontawsome_icon main-icon float-right\">\n          </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8 right-form\">\n        <div class=\"form-group\">\n          <label for=\"page-name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"{{currPage.name}}\" [(ngModel)]=\"currPage.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"page-title\">Title</label>\n          <textarea id=\"page-title\" class=\"form-control\" rows=\"5\" placeholder=\"{{currPage.description}}\" [(ngModel)]=\"currPage.description\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger  btn-block\" (click)=\"deletePage()\">Delete</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");










var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(webService, userService, pageService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.pages = [];
        this.currPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.errorMsg = '';
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageByWebsiteId(params['websiteId']).subscribe(function (pages) {
                for (var i = 0; i < pages.length; i++) {
                    var page = pages[i];
                    var newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                    _this.pages.push(newPage);
                }
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.currPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
            });
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        if (this.currPage.name) {
            this.pageService.updatePage(this.currPage.pageId, this.currPage).subscribe(function (page) {
                _this.router.navigate(['/profile/website/' + _this.website.websiteId + '/page']);
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter page name!';
        }
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.currPage.pageId).subscribe(function (data) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId + '/page']);
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-footer/page-footer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/page/page-footer/page-footer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-white{\n    color: black !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtd2hpdGV7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/page/page-footer/page-footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/page/page-footer/page-footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right text-white\">\n        <span class=\"fas fa-user fontawsome_icon bottom-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/page/page-footer/page-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/page/page-footer/page-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageFooterComponent = /** @class */ (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageFooterComponent.prototype, "uid", void 0);
    PageFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-footer',
            template: __webpack_require__(/*! ./page-footer.component.html */ "./src/app/views/page/page-footer/page-footer.component.html"),
            styles: [__webpack_require__(/*! ./page-footer.component.css */ "./src/app/views/page/page-footer/page-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageFooterComponent);
    return PageFooterComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDU4cHg7XG59XG5cbnVsLmxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yaWdodC1mb3JtID4gZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQtd2hpdGV7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2hpZGVvbmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNoaWRlb25lOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page\">\n          Pages\n        </a>\n      </p>\n      <a routerLink=\"/profile/website/{{website.websiteId}}/page/new\"\n         class=\"navbar-link navbar-text float-right text-white\">\n        <span class=\"fas fa-plus fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">{{page.name}}\n        </a>\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/edit\">\n          <span class=\"fas fa-cog fontawsome_icon main-icon float-right\">\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");










var PageListComponent = /** @class */ (function () {
    function PageListComponent(webService, userService, pageService, route, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.pageService = pageService;
        this.route = route;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageByWebsiteId(params['websiteId']).subscribe(function (pages) {
                for (var i = 0; i < pages.length; i++) {
                    var page = pages[i];
                    var newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_7__["Page"](page._id, page.name, page.websiteId, page.description);
                    _this.pages.push(newPage);
                }
            });
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_8__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
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

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDU4cHg7XG59XG5cbm5hdiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbnVsLmxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yaWdodC1mb3JtID4gZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQtd2hpdGV7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2hpZGVvbmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNoaWRlb25lOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jaGVjay1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page\" class=\"navbar-link text-white\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/{{user.uid}}/website/{{website.websiteId}}/page\">\n            Pages\n          </a>\n        </p>\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/new\" class=\"navbar-link navbar-text float-right text-white\">\n          <span class=\"fas fa-plus fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n      <div class=\"col-sm-8 container-fluid\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/new\">\n            New Page\n          </a>\n        </p>\n        <a (click)=\"addPage()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n          <span class=\"fas fa-check fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 d-none d-sm-block\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">{{page.name}}\n            </a>\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/edit\">\n          <span class=\"fas fa-cog fontawsome_icon main-icon float-right\">\n          </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8 right-form\">\n        <div class=\"form-group\">\n          <label for=\"page-name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" [(ngModel)]=\"newPage.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"page-title\">Title</label>\n          <textarea id=\"page-title\" class=\"form-control\" rows=\"5\" placeholder=\"Page Title\"[(ngModel)]=\"newPage.description\"></textarea>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");










var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(webService, userService, pageService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.pages = [];
        this.newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.errorMsg = '';
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageByWebsiteId(params['websiteId']).subscribe(function (pages) {
                for (var i = 0; i < pages.length; i++) {
                    var page = pages[i];
                    var newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                    _this.pages.push(newPage);
                }
            });
        });
        this.newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', this.website.websiteId, '');
    };
    PageNewComponent.prototype.addPage = function () {
        var _this = this;
        if (this.newPage.name) {
            this.pageService.createPage(this.website.websiteId, this.newPage).subscribe(function (page) {
                _this.newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                _this.router.navigate(['/profile/website/' + _this.website.websiteId + '/page']);
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter page name!';
        }
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
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

module.exports = "<div class=\"container\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n    </div>\n    <h1>Login</h1>\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n        </div>\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n            Please Enter Username!\n        </span>\n        <div class=\"form-group\">\n            <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n        </div>\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n            Please Enter Password!\n        </span>\n        <div class=\"form-group\">\n            <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Login</button>\n        </div>\n        <div class=\"form-group\">\n            <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\"> <span class=\"fa fa-facebook\"></span> Facebook </a>\n        </div>\n        <div class=\"form-group\">\n            <a routerLink=\"/register\" class=\"btn btn-block btn-success\">Register</a>\n        </div>\n    </form>\n\n</div>\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password).subscribe(function (user) {
            if (user === null || user.message === 'User not found or Wrong password!') {
                _this.errorFlag = true;
                _this.errorMsg = 'User does not exist or Wrong Password';
            }
            else {
                _this.router.navigate(['/profile/']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login page!' + this.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "nav {\n    background: #337ab7 !important;\n}\n\n.text-white{\n    color: #fff !important;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    text-decoration: none;\n    color: #fff !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVjay1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar fixed-top\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand\" routerLink=\"/profile\">Profile</a>\n            <a (click)=\"updateUser()\"  class=\"navbar-link navbar-text float-right text-white check-icon\">\n                <span class=\"fas fa-check fontawsome_icon top-right\">\n                </span>\n            </a>\n        </div>\n    </nav>\n</header>\n<main>\n    <div class=\"container\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\" placeholder=\"{{user.username}}\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" placeholder=\"{{user.password}}\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.firstName\" id=\"firstName\" placeholder=\"{{user.firstName}}\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastName\" id=\"lastName\" placeholder=\"{{user.lastName}}\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" id=\"email\" placeholder=\"{{user.email}}\"/>\n        </div>\n        <div class=\"form-group\">\n            <a routerLink=\"/profile/website\" class=\"btn btn-block btn-primary\">Websites</a>\n        </div>\n        <div class=\"form-group\">\n            <a (click)=\"logout()\" class=\"btn btn-block btn-danger\">Logout</a>\n        </div>\n    </div>\n</main>\n<footer>\n    <nav class=\"navbar fixed-bottom\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand\" id=\"hideone\" href=\"#\">Profile</a>\n        </div>\n    </nav>\n</footer>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '', '', '');
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.user.uid, this.user).subscribe(function (user) {
            _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            _this.router.navigate(['/profile/']);
        });
        alert('Update successfully!');
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                // this.user = user;
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
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

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please Enter Username!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please Enter Password!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"v_password\" class=\"form-control\" placeholder=\"verify password\" ngModel required #v_password=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!v_password.valid && v_password.touched\">\n      Please verify your password!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"firstName\" ngModel required #firstName=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please Enter First Name!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"lastName\" ngModel required #lastName=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please Enter Last Name!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\" ngModel required #email=\"ngModel\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please Enter Email!\n    </span>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-block btn-primary\" type=\"submit\">Register</button>\n    </div>\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-block btn-success\">Cancel</a>\n    </div>\n  </form>\n\n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = '';
        this.errorFlag = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.v_password = this.registerForm.value.v_password;
        this.firstName = this.registerForm.value.firstName;
        this.lastName = this.registerForm.value.lastName;
        this.email = this.registerForm.value.email;
        if (this.v_password === this.password) {
            var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"](Math.random() + '', this.username, this.password, this.firstName, this.lastName, this.email);
            this.userService.register(user).subscribe(function (data) {
                if (data.message === 'User is already exist!') {
                    _this.errorFlag = true;
                    _this.errorMsg = 'User is already exist! Please use a new username!';
                }
                else {
                    // this.user = new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email);
                    _this.router.navigate(['/profile']);
                }
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Password needs to be verified!';
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\nnav {\n    background: #337ab7;\n}\n\n.text-white{\n    color: #fff;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDU4cHg7XG59XG5cbnVsLmxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yaWdodC1mb3JtID4gZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website\" class=\"navbar-link text-white\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website\">\n            Websites\n          </a>\n        </p>\n        <a routerLink=\"/profile/website/new\" class=\"navbar-link navbar-text float-right text-white\">\n          <span class=\"fas fa-plus fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n      <div class=\"col-sm-8 container-fluid\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{currWebsite.websiteId}}/edit\">\n            Edit Website\n          </a>\n        </p>\n        <a (click)=\"updateWebsite()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n          <span class=\"fas fa-check fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 d-none d-sm-block\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page\">{{website.name}}</a>\n            <a routerLink=\"/profile/website/{{website.websiteId}}/edit\">\n              <span class=\"fas fa-cog fontawsome_icon main-icon float-right\">\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8 right-form\">\n          <div class=\"form-group\">\n            <label for=\"website-name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"website-name\" [(ngModel)]=\"currWebsite.name\" placeholder=\"{{currWebsite.name}}\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"website-description\">Website Description</label>\n            <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" [(ngModel)]=\"currWebsite.description\" placeholder=\"{{currWebsite.description}}\"></textarea>\n          </div>\n          <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWebsite()\">Delete</a>\n      </div>\n    </div>\n\n  </div>\n</main>\n<app-website-footer [uid]=\"user.uid\"></app-website-footer>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");








var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(webService, userService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.websites = [];
        this.currWebsite = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.errorMsg = '';
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteByUser(_this.sharedService.user._id).subscribe(function (websites) {
                var website;
                for (var i = 0; i < websites.length; i++) {
                    website = websites[i];
                    var newWeb = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
                    _this.websites.push(newWeb);
                }
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.currWebsite = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        if (this.currWebsite.name) {
            this.webService.updateWebsite(this.currWebsite.websiteId, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](this.currWebsite.websiteId, this.currWebsite.name, this.user.uid, this.currWebsite.description)).subscribe(function (data) {
                _this.router.navigate(['/profile/website']);
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter name!';
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.webService.deleteWebsite(this.currWebsite.websiteId).subscribe(function (data) {
            _this.router.navigate(['/profile/website']);
        });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-footer/website-footer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/website/website-footer/website-footer.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n    background: #337ab7;\n}\n\n.text-white{\n    color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWZvb3Rlci93ZWJzaXRlLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWZvb3Rlci93ZWJzaXRlLWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/website/website-footer/website-footer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/website/website-footer/website-footer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right text-white\">\n          <span class=\"fas fa-user fontawsome_icon bottom-right\">\n          </span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/website/website-footer/website-footer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/website/website-footer/website-footer.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebsiteFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteFooterComponent", function() { return WebsiteFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteFooterComponent = /** @class */ (function () {
    function WebsiteFooterComponent() {
    }
    WebsiteFooterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WebsiteFooterComponent.prototype, "uid", void 0);
    WebsiteFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-footer',
            template: __webpack_require__(/*! ./website-footer.component.html */ "./src/app/views/website/website-footer/website-footer.component.html"),
            styles: [__webpack_require__(/*! ./website-footer.component.css */ "./src/app/views/website/website-footer/website-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteFooterComponent);
    return WebsiteFooterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\nnav {\n    background: #337ab7;\n}\n\n.text-white{\n    color: #fff;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNThweDtcbn1cblxudWwubGlzdC1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJpZ2h0LWZvcm0gPiBmb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQ6ICMzMzdhYjc7XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website\">\n          Websites\n        </a>\n      </p>\n      <a routerLink=\"/profile/website/new\" class=\"navbar-link navbar-text float-right text-white\">\n        <span class=\"fas fa-plus fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page\">{{website.name}}</a>\n        <a routerLink=\"/profile/website/{{website.websiteId}}/edit\">\n          <span class=\"fas fa-cog fontawsome_icon main-icon float-right\">\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</main>\n<app-website-footer [uid]=\"user.uid\"></app-website-footer>\n"

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
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");








var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(webService, userService, route, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.route = route;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '', '', '');
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user.id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteByUser(_this.sharedService.user._id).subscribe(function (websites) {
                for (var i = 0; i < websites.length; i++) {
                    var website = websites[i];
                    var newWeb = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
                    _this.websites.push(newWeb);
                }
            });
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
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

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\nnav {\n    background: #337ab7;\n}\n\n.text-white{\n    color: #fff;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbm1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1OHB4O1xufVxuXG51bC5saXN0LWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmlnaHQtZm9ybSA+IGZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbm5hdiB7XG4gICAgYmFja2dyb3VuZDogIzMzN2FiNztcbn1cblxuLnRleHQtd2hpdGV7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jaGVjay1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website\" class=\"navbar-link text-white\">\n            <span class=\"glyphicon\">\n              <i class=\"fas fa-chevron-left fontawsome_icon top-left\"></i>\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website\">\n            Websites\n          </a>\n        </p>\n        <a routerLink=\"/profile/website/new\" class=\"navbar-link navbar-text float-right text-white\">\n          <span class=\"glyphicon\">\n            <i class=\"fas fa-plus fontawsome_icon top-right\"></i>\n          </span>\n        </a>\n      </div>\n      <div class=\"col-sm-8 container-fluid\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/profile/website\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\">\n            </span>\n          </a>\n          <a class=\"text-white text-bold\" routerLink=\"/profile/website/new\">\n            New Website\n          </a>\n        </p>\n        <a (click)=\"newWeb()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n          <span class=\"fas fa-check fontawsome_icon top-right\">\n          </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row colrow\">\n      <div class=\"col-sm-4 d-none d-sm-block\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page\">{{website.name}}</a>\n            <a routerLink=\"/profile/website/{{website.websiteId}}/edit\">\n              <span class=\"fas fa-cog fontawsome_icon main-icon float-right\">\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8 right-form\">\n          <div class=\"form-group\">\n            <label for=\"website-name\">Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWebsite.name\" id=\"website-name\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"website-description\">Description</label>\n            <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" [(ngModel)]=\"newWebsite.description\" placeholder=\"Description\"></textarea>\n          </div>\n      </div>\n    </div>\n  </div>\n</main>\n<app-website-footer [uid]=\"user.uid\"></app-website-footer>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");








var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(webService, userService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.websites = [];
        this.errorMsg = '';
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteByUser(_this.sharedService.user._id).subscribe(function (websites) {
                var website;
                for (var i = 0; i < websites.length; i++) {
                    website = websites[i];
                    var newWeb = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
                    _this.websites.push(newWeb);
                }
            });
            _this.newWebsite = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', _this.user.uid, '');
        });
    };
    WebsiteNewComponent.prototype.newWeb = function () {
        var _this = this;
        if (this.newWebsite.name) {
            this.webService.createWebsite(this.user.uid, this.newWebsite).subscribe(function (data) {
                _this.router.navigate(['/profile/website']);
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter name!';
        }
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
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

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWNob29zZXIvd2lkZ2V0LWNob29zZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi53aWRnZXQtaWNvbi1zcGVjaWFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvdHRvbS1sZWZ0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLnRleHQtd2hpdGV7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2hpZGVvbmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNoaWRlb25lOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53aWRnZXQtZGl2ID4gaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNjAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\">\n          Choose Widget\n        </a>\n      </p>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new/header\">Header</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\">Label</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new/html\">HTML</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new/text\">Text Input</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\">Link</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\">Button</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new/image\">Image</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new/youtube\">Youtube</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\">Data Table</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\">Repeater</a>\n      </li>\n    </ul>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");













var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(webService, userService, sanitizer, pageService, widgetService, route, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.widgets = [];
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_7__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXQtZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi53aWRnZXQtaWNvbi1zcGVjaWFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvdHRvbS1sZWZ0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLnRleHQtd2hpdGV7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2hpZGVvbmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNoaWRlb25lOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53aWRnZXQtZGl2ID4gaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNjAlO1xufVxuXG4uY2hlY2staWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">\n          Widget Edit\n        </a>\n      </p>\n      <a (click)=\"updateWidget()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container\">\n      <div class=\"form-group\">\n        <label for=\"heading-text\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"heading-text\" [(ngModel)]=\"newWidget.text\" placeholder=\"{{newWidget.text}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"heading-size\">Size</label>\n        <input type=\"text\" class=\"form-control\" id=\"heading-size\" [(ngModel)]=\"newWidget.size\" placeholder=\"{{newWidget.size}}\">\n      </div>\n    <a class=\"btn btn-danger  btn-block\" *ngIf=\"currWidget.text!==''\" (click)=\"deleteWidget()\">Delete</a>\n    <a class=\"btn btn-danger  btn-block\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">Cancel</a>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");













var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(webService, userService, sanitizer, pageService, widgetService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.widgets = [];
        this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.errorMsg = '';
    }
    ;
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                _this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', 'HEADING', _this.page.pageId, '', '', '', '', '', true, 1, '');
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
            _this.widgetService.findWidgetById(params['widgetId']).subscribe(function (widget) {
                if (widget.message !== 'Widget not found!') {
                    _this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.newWidget.text = _this.currWidget.text;
                    _this.newWidget.size = _this.currWidget.size;
                }
            });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.currWidget.text !== '') {
            this.currWidget.text = this.newWidget.text;
            this.currWidget.size = this.newWidget.size;
            if (this.currWidget.text !== '') {
                this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Text cannot be empty!';
            }
        }
        else {
            if (this.newWidget.text !== '') {
                this.widgetService.createWidget(this.page.pageId, this.newWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/'
                            + _this.website.websiteId + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Text cannot be empty!';
            }
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(function (data) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId
                    + '/page/' + _this.page.pageId + '/widget']);
        });
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_7__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
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

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ud2lkZ2V0LWljb24tc3BlY2lhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib3R0b20tbGVmdHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNoaWRlb25lIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4jaGlkZW9uZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ud2lkZ2V0LWRpdiA+IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cblxuLmNoZWNrLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">\n          Widget Edit\n        </a>\n      </p>\n      <a (click)=\"updateWidget()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"newWidget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"widname\"\n             placeholder=\"{{newWidget.name}}\"\n             required>\n      </div>\n      <quill-editor [(ngModel)]=\"newWidget.text\" name=\"text\"></quill-editor>\n    <p></p>\n    <a class=\"btn btn-danger btn-block \"\n       (click)=\"deleteWidget()\">Delete</a>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n"

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
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");













var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(webService, userService, sanitizer, pageService, widgetService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_8__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_9__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_10__["Page"]('', '', '', '');
        this.widgets = [];
        this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_11__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_11__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.errorMsg = '';
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_8__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_9__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_10__["Page"](page._id, page.name, page.websiteId, page.description);
                _this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_11__["Widget"]('', 'HTML', _this.page.pageId, '', '', '', '', '', true, 1, '');
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_11__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
            _this.widgetService.findWidgetById(params['widgetId']).subscribe(function (widget) {
                if (widget.message !== 'Widget not found!') {
                    _this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_11__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.newWidget.name = _this.currWidget.name;
                    _this.newWidget.text = _this.currWidget.text;
                }
            });
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.currWidget.text !== '') {
            this.currWidget.name = this.newWidget.name;
            this.currWidget.text = this.newWidget.text;
            if (this.currWidget.name !== '') {
                this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Name and Text cannot be empty!';
            }
        }
        else {
            if (this.newWidget.name !== '') {
                this.widgetService.createWidget(this.page.pageId, this.newWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Name and Text cannot be empty!';
            }
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(function (data) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId
                    + '/page/' + _this.page.pageId + '/widget']);
        });
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
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

module.exports = "html {\n    width:100%;\n    height:100%;\n    min-height: 100%;\n}\n\nbody {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\nmain {\n    height: 100%;\n    margin-top: 58px;\n}\n\nul.list-group {\n    margin-top: 20px;\n}\n\n.right-form > form {\n    margin-top: 20px;\n}\n\nnav {\n    background: #337ab7;\n}\n\n.text-white{\n    color: #fff;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS9mbGlja3ItaW1hZ2Utc2VhcmNoL2ZsaWNrci1pbWFnZS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWltYWdlL2ZsaWNrci1pbWFnZS1zZWFyY2gvZmxpY2tyLWltYWdlLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDU4cHg7XG59XG5cbnVsLmxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yaWdodC1mb3JtID4gZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoZWNrLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\">\n          Search Flickr\n        </a>\n      </p>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class = \"container\">\n    <div class=\"input-group\">\n      <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n      <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"fas fa-search fontawsome_icon\"></span>\n            </a>\n        </span>\n    </div>\n\n    <div *ngIf=\"searched\" class=\"row\">\n      <div  *ngFor = \"let pic of photos['photo']\"\n           class=\"col-xs-4\">\n        <img (click)=\"selectPhoto(pic)\"\n             width = \"100%\"\n             [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n      </div>\n    </div>\n\n  </div>\n</main>\n<app-page-footer [uid]=\"uid\"></app-page-footer>\n\n\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");







var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.searched = false;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
            _this.uid = _this.sharedService.user._id;
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
            _this.photos = val.photos;
            _this.searched = true;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](this.widgetId, 'IMAGE', this.pageId, '', '', '', url, '', true, 1, '');
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            _this.router.navigate(['/profile/website/'
                    + _this.websiteId + '/page/' + _this.pageId + '/widget/' + _this.widgetId + '/edit/image']);
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
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

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWltYWdlL3dpZGdldC1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGdldC1kaXYge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLndpZGdldC1pY29uLXNwZWNpYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tLWxlZnR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbm5hdiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jaGlkZW9uZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuI2hpZGVvbmU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLndpZGdldC1kaXYgPiBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG59XG5cbi5jaGVjay1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">\n          Widget Edit\n        </a>\n      </p>\n      <a (click)=\"updateWidget()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n    </div>\n  <div class=\"container\">\n      <div class=\"form-group\">\n        <label for=\"image-text\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-text\" [(ngModel)]=\"newWidget.text\" placeholder=\"{{newWidget.text}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"image-URL\">URL</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"newWidget.url\" placeholder=\"{{newWidget.url}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"image-width\">Width</label>\n        <input type=\"text\" class=\"form-control\" id=\"image-width\" [(ngModel)]=\"newWidget.width\" placeholder=\"{{newWidget.width}}\">\n      </div>\n    <!--<form ngNoForm action=\"{{baseUrl}}/api/uploads\" method=\"post\" enctype=\"multipart/form-data\">-->\n    <!--&lt;!&ndash;<form ngNoForm (ngSubmit)=\"uploads()\" enctype=\"multipart/form-data\">&ndash;&gt;-->\n      <!--<input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>-->\n      <!--<input  name=\"widgetId\" value=\"{{currWidget.widgetId}}\"   style=\"display: none\"/>-->\n      <!--<input  name=\"websiteId\" value=\"{{website.websiteId}}\"   style=\"display: none\"/>-->\n      <!--<input  name=\"pageId\" value=\"{{page.pageId}}\"   style=\"display: none\"/>-->\n      <!--<input  name=\"userId\" value=\"{{user.uid}}\"   style=\"display: none\"/>-->\n      <!--<button type=\"submit\" class=\"btn btn-block btn-primary\">-->\n        <!--Upload Image-->\n      <!--</button>-->\n      <!--<br/>-->\n    <!--</form>-->\n    <!--<form (ngSubmit)=\"uploads()\" #f=\"ngForm\" *ngIf=\"judge()\" enctype=\"multipart/form-data\">-->\n      <div class=\"form-group\">\n        <input style=\"display: none\" type=\"file\" class=\"form-control\" (change)=\"onFileChanged($event)\" #fileInput/>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"fileInput.click()\" class=\"btn btn-block btn-primary\">Select Image</button>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"onUpload()\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      </div>\n    <!--</form>-->\n      <a *ngIf=\"currWidget.widgetId\" class=\"btn btn-primary btn-block\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/{{currWidget.widgetId}}/flickr\">Choose From Flickr</a>\n    <a class=\"btn btn-danger  btn-block\" *ngIf=\"currWidget.url!==''\" (click)=\"deleteWidget()\">Delete</a>\n    <a class=\"btn btn-danger  btn-block\"\n       routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">Cancel</a>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");















var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(webService, userService, sanitizer, pageService, widgetService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.widgets = [];
        this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.errorMsg = '';
    }
    ;
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseUrl;
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                _this.newWidget.pageId = _this.page.pageId;
                _this.newWidget.type = 'IMAGE';
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
            _this.widgetService.findWidgetById(params['widgetId']).subscribe(function (widget) {
                if (widget.message !== 'Widget not found!') {
                    _this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.newWidget.text = _this.currWidget.text;
                    _this.newWidget.url = _this.currWidget.url;
                    _this.newWidget.width = _this.currWidget.width;
                }
            });
        });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.currWidget.url !== '') {
            this.currWidget.text = this.newWidget.text;
            this.currWidget.url = this.newWidget.url;
            this.currWidget.width = this.newWidget.width;
            if (this.currWidget.url !== '') {
                this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Url cannot be empty!';
            }
        }
        else {
            if (this.newWidget.url !== '') {
                this.widgetService.createWidget(this.newWidget.pageId, this.newWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Url cannot be empty!';
            }
        }
    };
    WidgetImageComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    WidgetImageComponent.prototype.onUpload = function () {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile);
        uploadData.append('widgetId', this.currWidget.widgetId);
        uploadData.append('newWidgetId', this.newWidget.widgetId);
        uploadData.append('websiteId', this.website.websiteId);
        uploadData.append('pageId', this.page.pageId);
        this.widgetService.uploadImage(uploadData).subscribe(function (data) {
            if (data.message === 'File uploaded' && data.url !== '') {
                _this.newWidget.url = data.url;
            }
            else {
                _this.router.navigate(['/profile/website/'
                        + _this.website.websiteId + '/page/' + _this.page.pageId + '/widget']);
                if (data.message === 'File uploaded') {
                    alert('File uploaded');
                }
                else if (data.message === 'No file uploaded') {
                    alert('No file uploaded');
                }
            }
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(function (data) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId
                    + '/page/' + _this.page.pageId + '/widget']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"])
    ], WidgetImageComponent.prototype, "uploadForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_6__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_14__["SharedService"]])
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

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC10ZXh0L3dpZGdldC10ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC10ZXh0L3dpZGdldC10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ud2lkZ2V0LWljb24tc3BlY2lhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib3R0b20tbGVmdHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNoaWRlb25lIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4jaGlkZW9uZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ud2lkZ2V0LWRpdiA+IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cblxuLmNoZWNrLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">\n          Widget Edit\n        </a>\n      </p>\n      <a (click)=\"updateWidget()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container\">\n    <input [(ngModel)]=\"newWidget.text\" class=\"form-control\"/>\n    <input [(ngModel)]=\"newWidget.rows\" class=\"form-control\" type=\"number\"/>\n    <label for=\"Name\">Name</label>\n    <div>\n      <input [(ngModel)]=\"newWidget.name\" type=\"text\" class=\"form-control\" id=\"Name\" name=\"name\" placeholder=\"Name\">\n    </div>\n    <input [(ngModel)]=\"newWidget.placeholder\" class=\"form-control\" required/>\n    <p></p>\n    <div class=\"input-group\">\n      <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n      <span class=\"input-group-addon\"> <input [(ngModel)]=\"newWidget.formatted\" type=\"checkbox\"/> </span>\n    </div>\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteWidget()\">Delete</a>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");













var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(webService, userService, sanitizer, pageService, widgetService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.widgets = [];
        this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.errorMsg = '';
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                _this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', 'TEXT', _this.page.pageId, '', '', '', '', '', true, 1, '');
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
            _this.widgetService.findWidgetById(params['widgetId']).subscribe(function (widget) {
                if (widget.message !== 'Widget not found!') {
                    _this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.newWidget.formatted = _this.currWidget.formatted;
                    _this.newWidget.rows = _this.currWidget.rows;
                    _this.newWidget.placeholder = _this.currWidget.placeholder;
                    _this.newWidget.text = _this.currWidget.text;
                }
            });
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.currWidget.placeholder !== '') {
            this.currWidget.formatted = this.newWidget.formatted;
            this.currWidget.rows = this.newWidget.rows;
            this.currWidget.placeholder = this.newWidget.placeholder;
            this.currWidget.text = this.newWidget.text;
            if (this.currWidget.placeholder !== '') {
                this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Placeholder cannot be empty!';
            }
        }
        else {
            if (this.newWidget.placeholder !== '') {
                this.widgetService.createWidget(this.page.pageId, this.newWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Placeholder cannot be empty!';
            }
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(function (data) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId
                    + '/page/' + _this.page.pageId + '/widget']);
        });
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_6__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
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

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.check-icon {\n    cursor: pointer !important;\n}\n\na:not([href]):not([tabindex]) {\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ud2lkZ2V0LWljb24tc3BlY2lhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib3R0b20tbGVmdHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNoaWRlb25lIHtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4jaGlkZW9uZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ud2lkZ2V0LWRpdiA+IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cblxuLmNoZWNrLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">\n          Widget Edit\n        </a>\n      </p>\n      <a (click)=\"updateWidget()\" class=\"navbar-link navbar-text float-right text-white check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-text\" [(ngModel)]=\"newWidget.text\" placeholder=\"{{newWidget.text}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" [(ngModel)]=\"newWidget.url\" placeholder=\"{{newWidget.url}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-width\" [(ngModel)]=\"newWidget.width\" placeholder=\"{{newWidget.width}}\">\n    </div>\n    <a class=\"btn btn-danger  btn-block\" *ngIf=\"currWidget.url!==''\" (click)=\"deleteWidget()\">Delete</a>\n    <a class=\"btn btn-danger  btn-block\"\n       routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">Cancel</a>\n  </div>\n</main>\n<app-page-footer [uid]=\"user.uid\"></app-page-footer>\n\n\n\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");













var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(webService, userService, sanitizer, pageService, widgetService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.widgets = [];
        this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', true, 1, '');
        this.errorMsg = '';
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
                _this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', 'YOUTUBE', _this.page.pageId, '', '', '', '', '', true, 1, '');
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
            _this.widgetService.findWidgetById(params['widgetId']).subscribe(function (widget) {
                if (widget.message !== 'Widget not found!') {
                    _this.currWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.newWidget.text = _this.currWidget.text;
                    _this.newWidget.url = _this.currWidget.url;
                    _this.newWidget.width = _this.currWidget.width;
                }
            });
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.currWidget.url !== '') {
            this.currWidget.text = this.newWidget.text;
            this.currWidget.url = this.newWidget.url;
            this.currWidget.width = this.newWidget.width;
            if (this.currWidget.url !== '') {
                this.widgetService.updateWidget(this.currWidget.widgetId, this.currWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Url cannot be empty!';
            }
        }
        else {
            if (this.newWidget.url !== '') {
                this.widgetService.createWidget(this.page.pageId, this.newWidget).subscribe(function (data) {
                    _this.router.navigate(['/profile/website/' + _this.website.websiteId
                            + '/page/' + _this.page.pageId + '/widget']);
                });
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Url cannot be empty!';
            }
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.currWidget.widgetId).subscribe(function (data) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId
                    + '/page/' + _this.page.pageId + '/widget']);
        });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_6__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_9__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".widget-div {\n    margin-top: 15px;\n    min-height: 20px;\n    line-height: 20px;\n}\n\n.widget-icon-special {\n    background-color: white;\n}\n\n.bottom-left{\n    margin-top: 10px;\n    font-size: 20px;\n}\n\nnav {\n    background: lightgray;\n}\n\n.text-white{\n    color: black !important;\n}\n\n.navbar-brand {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n}\n\n.navbar-brand:hover {\n    font-size: 20px;\n}\n\n#hideone {\n    color: lightgray;\n}\n\n#hideone:hover {\n    text-decoration: none;\n}\n\n.widget-div > img {\n    width: 80%;\n    height: 60%;\n}\n\n.youtube-widget {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 */\n    height: 0;\n}\n\n.youtube-widget iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/*.widget-icon {*/\n\n/*margin-top: 20px;*/\n\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQSxpQkFBaUI7O0FBQ2Isb0JBQW9COztBQUN4QixJQUFJIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ud2lkZ2V0LWljb24tc3BlY2lhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib3R0b20tbGVmdHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbm5hdiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jaGlkZW9uZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuI2hpZGVvbmU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLndpZGdldC1kaXYgPiBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG59XG5cbi55b3V0dWJlLXdpZGdldCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgICBoZWlnaHQ6IDA7XG59XG5cbi55b3V0dWJlLXdpZGdldCBpZnJhbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4vKi53aWRnZXQtaWNvbiB7Ki9cbiAgICAvKm1hcmdpbi10b3A6IDIwcHg7Ki9cbi8qfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/profile/website/{{website.websiteId}}/page\" class=\"navbar-link text-white\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget\">\n          Widgets\n        </a>\n      </p>\n      <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/new\" class=\"navbar-link navbar-text float-right text-white\">\n        <span class=\"fas fa-plus fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container\">\n    <div appSortable (newIndexes)=\"reorderItems($event)\">\n    <div  *ngFor=\"let widget of widgets\" >\n      <div [ngSwitch]=\"widget.type\">\n        <div class=\"widget-div\" *ngSwitchCase=\"'HEADING'\" >\n          <h1 [style.font-size]=\"checkStyle(widget.size + 'px')\">\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/{{widget.widgetId}}/edit/header\" class=\"float-right\">\n              <span class=\"fas fa-cog fontawsome_icon main-icon\"></span>\n            </a>\n            {{widget.text}}\n          </h1>\n        </div>\n        <div class=\"widget-div\" *ngSwitchCase=\"'HTML'\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/{{widget.widgetId}}/edit/html\" class=\"float-right\">\n            <span class=\"fas fa-cog fontawsome_icon main-icon\">\n            </span>\n          </a>\n          {{widget.text}}\n        </div>\n        <div class=\"widget-div\" *ngSwitchCase=\"'TEXT'\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/{{widget.widgetId}}/edit/text\" class=\"float-right\">\n            <span class=\"fas fa-cog fontawsome_icon main-icon\">\n            </span>\n          </a>\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n          </div>\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\" rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\">\n            {{widget.text}}</textarea>\n        </div>\n        <div class=\"widget-div\" *ngSwitchCase=\"'IMAGE'\">\n          <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/{{widget.widgetId}}/edit/image\" class=\"float-right\">\n            <span class=\"fas fa-cog fontawsome_icon main-icon\">\n            </span>\n          </a>\n          <img class=\"img-responsive img-rounded\" [src]=\"checkVideoUrl(widget.url)\" [style.width]=\"checkStyle(widget.width)\">\n        </div>\n        <div class=\"widget-div embed-responsive embed-responsive-16by9 youtube-widget\" *ngSwitchCase=\"'YOUTUBE'\">\n            <iframe width=\"560\" height=\"315\" [src]=\"checkVideoUrl(widget.url)\" frameborder=\"0\" allowfullscreen [style.width]=\"checkStyle(widget.width)\">\n            </iframe>\n            <a routerLink=\"/profile/website/{{website.websiteId}}/page/{{page.pageId}}/widget/{{widget.widgetId}}/edit/youtube\" class=\"float-right widget-icon-special\">\n              <span class=\"fas fa-cog fontawsome_icon main-icon\">\n              </span>\n            </a>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n</main>\n<footer>\n  <nav class=\"navbar navbar-default fixed-bottom\">\n    <div class=\"container-fluid float-left\">\n      <div class=\"float-left\">\n        <a href=\"#\" class=\"navbar-link navbar-text text-white\">\n          <span class=\"fas fa-play fontawsome_icon bottom-left\">\n          </span>\n        </a>\n        <a href=\"#\" class=\"navbar-link navbar-text text-white\">\n          <span class=\"fas fa-eye fontawsome_icon bottom-left\">\n          </span>\n        </a>\n      </div>\n      <div class=\"float-right\">\n        <a routerLink=\"/profile\" class=\"navbar-link navbar-text text-white\">\n          <span class=\"fas fa-user fontawsome_icon bottom-right\">\n          </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</footer>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");













var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(webService, userService, sanitizer, pageService, widgetService, route, router, sharedService) {
        this.webService = webService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('', '', '', '');
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userService.findUserById(_this.sharedService.user._id).subscribe(function (user) {
                _this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](user._id, user.username, user.password, user.firstName, user.lastName, user.email);
            });
            _this.webService.findWebsiteById(params['websiteId']).subscribe(function (website) {
                _this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](website._id, website.name, website.developerId, website.description);
            });
            _this.pageService.findPageById(params['pageId']).subscribe(function (page) {
                _this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"](page._id, page.name, page.websiteId, page.description);
            });
            _this.widgetService.findWidgetsByPageId(params['pageId']).subscribe(function (widgets) {
                for (var i = 0; i < widgets.length; i++) {
                    var widget = widgets[i];
                    var newWid = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_9__["Widget"](widget._id, widget.type, widget.pageId, widget.size, widget.text, widget.width, widget.url, widget.name, widget.formatted, widget.rows, widget.placeholder);
                    _this.widgets.push(newWid);
                }
            });
        });
    };
    WidgetListComponent.prototype.checkStyle = function (value) {
        this.styleValue = this.sanitizer.bypassSecurityTrustStyle(value);
        return this.styleValue;
    };
    WidgetListComponent.prototype.checkVideoUrl = function (url) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data so
        // that it's easier to check if the value is safe.
        this.videoUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(url);
        return this.videoUrl;
    };
    WidgetListComponent.prototype.reorderItems = function (indexes) {
        var _this = this;
        this.widgetService.reorderWidget(this.page.pageId, indexes.startIndex, indexes.endIndex).subscribe(function (widgets) {
            _this.router.navigate(['/profile/website/' + _this.website.websiteId
                    + '/page/' + _this.page.pageId + '/widget']);
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_10__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
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

module.exports = __webpack_require__(/*! /Users/yuewang/Documents/webdev-Yue-Wang/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
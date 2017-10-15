webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_view_header_view_header_view_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-view/header-view/header-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_view_youtube_view_youtube_view_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-view/youtube-view/youtube-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_view_image_view_image_view_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-view/image-view/image-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_view_html_view_html_view_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-view/html-view/html-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_view_header_view_header_view_component__["a" /* HeaderViewComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_view_youtube_view_youtube_view_component__["a" /* YoutubeViewComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_view_image_view_image_view_component__["a" /* ImageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_view_html_view_html_view_component__["a" /* HtmlViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userID', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userID/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userID/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userID/website/:websiteID', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userID/website/:websiteID/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userID/website/:websiteID/page/new', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userID/website/:websiteID/page/:pageID', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userID/website/:websiteID/page/:pageID/widget', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userID/website/:websiteID/page/:pageID/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userID/website/:websiteID/page/:pageID/widget/:widgetID', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <!-- Left pane header-->\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWebsiteList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToPageNew()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Pages\n        </a>\n      </div>\n\n    </div>\n\n    <!-- Right pane header-->\n    <div class=\"col-sm-8 col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToPageList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updatePage()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Edit Page\n        </a>\n      </div>\n\n    </div>\n\n\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <!-- Left Pane - Website List -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\"\n          *ngFor=\"let page of pages\">\n        <a (click)=\"navigateToWidgetList(page)\" class=\"no-underline-hover\">{{page.name}}</a>\n        <a (click)=\"navigateToPageEdit(page)\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <!-- Right pane - edit page -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"pageName\">Name</label>\n        <input type=\"text\"\n               id=\"pageName\"\n               name=\"pageName\"\n               class=\"form-control\"\n               placeholder=\"Name\"\n               value=\"{{pageName}}\"\n               required\n               [(ngModel)]=\"pageName\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"pageTitle\">Title</label>\n        <input  type=\"text\"\n                id=\"pageTitle\"\n                name=\"pageTitle\"\n                class=\"form-control span6\"\n                rows=\"5\"\n                placeholder=\"Title\"\n                value=\"{{pageTitle}}\"\n                required\n                [(ngModel)]=\"pageTitle\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"deletePage()\"\n           class=\"btn btn-block btn-danger\">\n          Delete\n        </a>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click) = \"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, router, route) {
        this.pageService = pageService;
        this.router = router;
        this.route = route;
        this.errorMsg = 'Page Name is required!';
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteID);
        var page = this.pageService.findPageById(this.pageID);
        this.pageName = page.name;
        this.pageTitle = page.title;
    };
    PageEditComponent.prototype.updatePage = function () {
        if (this.isEmptyOrSpaces(this.pageName)) {
            this.errorMsg = 'Page Name is required!';
            this.errorFlag = true;
        }
        else {
            var success = this.pageService.updatePage(this.websiteID, this.pageID, this.pageName, this.pageTitle);
            if (!success) {
                this.errorMsg = 'This Page already exists!';
                this.errorFlag = true;
            }
            else {
                this.navigateToPageList();
            }
        }
    };
    PageEditComponent.prototype.isEmptyOrSpaces = function (str) {
        return !str || str.trim() === '';
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageID);
        this.navigateToPageList();
    };
    PageEditComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    PageEditComponent.prototype.navigateToWebsiteList = function () {
        this.router.navigate(['/user', this.userID, 'website']);
    };
    PageEditComponent.prototype.navigateToPageNew = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', 'new']);
    };
    PageEditComponent.prototype.navigateToPageList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page']);
    };
    PageEditComponent.prototype.navigateToPageEdit = function (page) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id]);
    };
    PageEditComponent.prototype.navigateToWidgetList = function (page) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id, 'widget']);
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWebsiteList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToPageNew()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Pages\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- Page List -->\n<div class=\"row container-fluid\">\n  <div class=\"col-xs-12 my-left-pane\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\"\n          *ngFor=\"let page of pages\">\n        <a (click)=\"navigateToWidgetList(page)\" class=\"no-underline-hover\">{{page.name}}</a>\n        <a (click)=\"navigateToPageEdit(page)\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(pageService, router, route) {
        this.pageService = pageService;
        this.router = router;
        this.route = route;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteID);
    };
    PageListComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    PageListComponent.prototype.navigateToWebsiteList = function () {
        this.router.navigate(['/user', this.userID, 'website']);
    };
    PageListComponent.prototype.navigateToPageNew = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', 'new']);
    };
    PageListComponent.prototype.navigateToPageEdit = function (page) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id]);
    };
    PageListComponent.prototype.navigateToWidgetList = function (page) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id, 'widget']);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <!-- Header - Left Pane -->\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWebsiteList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToPageNew()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Pages\n        </a>\n      </div>\n\n    </div>\n\n    <!-- Header - Right Pane -->\n    <div class=\"col-sm-8 col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToPageList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"createPage()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          New Page\n        </a>\n      </div>\n\n    </div>\n\n\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <!-- Left Pane - Website List -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\"\n          *ngFor=\"let page of pages\">\n        <a (click)=\"navigateToWidgetList(page)\" class=\"no-underline-hover\">{{page.name}}</a>\n        <a (click)=\"navigateToPageEdit(page)\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <!-- Right pane - new page edit -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"pageName\">Name</label>\n        <input type=\"text\"\n               id=\"pageName\"\n               name=\"pageName\"\n               class=\"form-control\"\n               placeholder=\"Name\"\n               required\n               [(ngModel)] = \"pageName\"\n               ngModel\n               #o_pageName = \"ngModel\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"pageTitle\">Title</label>\n        <input type=\"text\"\n               id=\"pageTitle\"\n               name=\"pageTitle\"\n               class=\"form-control\"\n               placeholder=\"Title\"\n               required\n               [(ngModel)] = \"pageTitle\"\n               ngModel\n               #o_pageTitle= \"ngModel\"/>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, router, route) {
        this.pageService = pageService;
        this.router = router;
        this.route = route;
        this.errorMsg = 'Page Name is required!';
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteID);
    };
    PageNewComponent.prototype.createPage = function () {
        if (!this.pageName) {
            this.errorMsg = 'page Name is required!';
            this.errorFlag = true;
        }
        else {
            var success = this.pageService.createPage(this.websiteID, this.pageName, this.pageTitle);
            if (!success) {
                this.errorMsg = 'This page already exists!';
                this.errorFlag = true;
            }
            else {
                this.navigateToPageList();
            }
        }
    };
    PageNewComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    PageNewComponent.prototype.navigateToWebsiteList = function () {
        this.router.navigate(['/user', this.userID, 'website']);
    };
    PageNewComponent.prototype.navigateToPageNew = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', 'new']);
    };
    PageNewComponent.prototype.navigateToPageList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page']);
    };
    PageNewComponent.prototype.navigateToPageEdit = function (page) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id]);
    };
    PageNewComponent.prototype.navigateToWidgetList = function (page) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id, 'widget']);
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(_id, name, websiteID, title) {
        this._id = _id;
        this.name = name;
        this.websiteID = websiteID;
        this.title = title;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<h1>Login</h1>\n\n<form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n  <input placeholder=\"username\"\n         type=\"text\"\n         name=\"username\"\n         class=\"form-control\"\n         required\n         [(ngModel)]=\"username\"\n         ngModel\n         #o_username = \"ngModel\"/>\n\n  <span class=\"help-block\" *ngIf=\"o_username.touched && o_username.invalid\">\n      Please enter username!\n  </span>\n\n  <input placeholder=\"password\"\n         name=\"password\"\n         type=\"password\"\n         class=\"form-control input-margin-top\"\n         required\n         [(ngModel)]=\"password\"\n         ngModel\n         #o_password=\"ngModel\"/>\n\n  <span class=\"help-block\" *ngIf=\"o_password.touched && o_password.invalid\">\n      Please enter password!\n   </span>\n\n  <button class=\"btn btn-primary btn-block input-margin-top\"\n          type=\"submit\"\n          (click)=\"login()\"\n          [disabled]=\"f.invalid\">Login</button>\n\n  <button class=\"btn btn-success btn-block\"\n          routerLink='/register'>Register</button>\n\n</form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
    };
    LoginComponent.prototype.login = function () {
        var user = this.userService.findUserByUsername(this.username);
        if (user && user.password === this.password) {
            this.router.navigate(['/user', user.userID]);
        }
        else {
            this.errorFlag = true;
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateProfile()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Profile\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- Form for Profile -->\n<div class=\"container custom-padding-top-10\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form (ngSubmit) = \"updateProfile()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             class=\"form-control\"\n             value=\"{{user.username}}\"\n             required\n             [(ngModel)] = \"user.username\"\n             placeholder=\"alice\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             name=\"email\"\n             value=\"{{user.email}}\"\n             placeholder=\"alice.wonderland@unicorn.com\"\n             required\n             [(ngModel)] = \"user.email\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             name=\"firstname\"\n             value=\"{{user.firstname}}\"\n             required\n             placeholder=\"Alice\"\n             [(ngModel)] = \"user.firstname\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             name=\"lastname\"\n             value=\"{{user.lastname}}\"\n             required\n             placeholder=\"Wonderland\"\n             [(ngModel)] = \"user.lastname\"/>\n    </div>\n\n  </form>\n\n  <button class=\"btn btn-primary btn-block\"\n     (click)=\"navigateToWebsites()\">Websites</button>\n  <button class=\"btn btn-danger btn-block \"\n     routerLink=\"/login\" >Logout</button>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a>\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.errorMsg = 'All values are required to update the form!';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
        });
        this.user = this.userService.findUserById(this.userID);
    };
    ProfileComponent.prototype.updateProfile = function () {
        if (this.user) {
            this.user.username = this.loginForm.value.username;
            this.user.firstname = this.loginForm.value.firstname;
            this.user.lastname = this.loginForm.value.lastname;
            this.user.email = this.loginForm.value.email;
            if (!this.errorFlag) {
                this.userService.updateUser(this.userID, this.user);
                this.router.navigate(['/user', this.user.userID]);
            }
        }
        else {
            this.errorFlag = true;
        }
    };
    ProfileComponent.prototype.navigateToWebsites = function () {
        this.router.navigate(['/user', this.userID, 'website']);
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "loginForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           required\n           [(ngModel)]=\"username\"\n           ngModel\n           #o_username = \"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"o_username.touched && o_username.invalid\">\n      Please enter username!\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control input-margin-top\"\n           required\n           [(ngModel)]=\"password\"\n           ngModel\n           #o_password = \"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"o_password.touched && o_password.invalid\">\n      Please enter password!\n    </span>\n\n    <input placeholder=\"verify password\"\n           name=\"verifyPassword\"\n           type=\"password\"\n           class=\"form-control input-margin-top\"\n           required\n           [(ngModel)]=\"verifyPassword\"\n           ngModel\n           #o_verifyPassword = \"ngModel\"/>\n\n    <span class=\"help-block\" *ngIf=\"o_verifyPassword.touched && o_verifyPassword.invalid\">\n      Please verify password!\n    </span>\n\n    <span class=\"help-block\" *ngIf=\"o_verifyPassword.valid && verifyPassword != password\">\n      Passwords doesn't match!\n    </span>\n\n    <button class=\"btn btn-primary btn-block input-margin-top\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\"\n            (click)=\"register()\">Register</button>\n\n    <button class=\"btn btn-danger btn-block\"\n       routerLink=\"/login\" >Cancel</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Username already exists! Choose a different one!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.verifyPassword = this.loginForm.value.verifyPassword;
    };
    RegisterComponent.prototype.register = function () {
        var user = this.userService.findUserByUsername(this.username);
        if (!user && this.password === this.verifyPassword) {
            var newUser = this.userService.createUser(this.username, this.password);
            this.router.navigate(['/user', newUser.userID]);
        }
        else {
            this.errorFlag = true;
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "loginForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userID, username, password, firstname, lastname, email) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <!-- Header - Left Pane -->\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToProfile()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToWebsiteNew()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Websites\n        </a>\n      </div>\n\n    </div>\n\n    <!-- Header - Right Pane -->\n    <div class=\"col-sm-8 col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWebsiteList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateWebsite()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Website Edit\n        </a>\n      </div>\n\n    </div>\n\n\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - Website List -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\"\n          *ngFor=\"let website of websites\">\n        <a (click)=\"navigateToPages(website)\" class=\"no-underline-hover\">{{website.name}}</a>\n        <a (click)=\"navigateToWebsiteEdit(website)\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <!-- Right Pane - Form -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div *ngIf=\"errorFlag\"\n          class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"websiteName\">Website Name</label>\n        <input type=\"text\"\n               id=\"websiteName\"\n               name=\"websiteName\"\n               class=\"form-control\"\n               placeholder=\"Website Name\"\n               value=\"{{websiteName}}\"\n               required\n               [(ngModel)]=\"websiteName\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"websiteDescription\">Description</label>\n        <textarea id=\"websiteDescription\"\n                  name=\"websiteDescription\"\n                  class=\"form-control span6\"\n                  rows=\"5\"\n                  placeholder=\"Description\"\n                  value=\"{{websiteDescription}}\"\n                  required\n                  [(ngModel)]=\"websiteDescription\">\n        </textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"deleteWebsite()\"\n           class=\"btn btn-block btn-danger\">\n          Delete\n        </a>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click) = \"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, router, route) {
        this.websiteService = websiteService;
        this.router = router;
        this.route = route;
        this.errorMsg = '';
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userID);
        var website = this.websiteService.findWebsiteById(this.websiteID);
        this.websiteName = website.name;
        this.websiteDescription = website.description;
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        if (this.isEmptyOrSpaces(this.websiteName)) {
            this.errorMsg = 'Website Name is required!';
            this.errorFlag = true;
        }
        else {
            var success = this.websiteService.updateWebsite(this.userID, this.websiteID, this.websiteName, this.websiteDescription);
            if (!success) {
                this.errorMsg = 'This Website already exists!';
                this.errorFlag = true;
            }
            else {
                this.navigateToWebsiteList();
            }
        }
    };
    WebsiteEditComponent.prototype.isEmptyOrSpaces = function (str) {
        return !str || str.trim() === '';
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteID);
        this.navigateToWebsiteList();
    };
    WebsiteEditComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    WebsiteEditComponent.prototype.navigateToPages = function (website) {
        this.router.navigate(['/user', this.userID, 'website', website._id, 'page']);
    };
    WebsiteEditComponent.prototype.navigateToWebsiteList = function () {
        this.router.navigate(['/user', this.userID, 'website']);
    };
    WebsiteEditComponent.prototype.navigateToWebsiteEdit = function (website) {
        this.router.navigate(['/user', this.userID, 'website', website._id]);
    };
    WebsiteEditComponent.prototype.navigateToWebsiteNew = function () {
        this.router.navigate(['/user', this.userID, 'website', 'new']);
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToProfile()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToWebsiteNew()\" >\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"[]\">\n          Websites\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- Website List -->\n<div class=\"row container-fluid\">\n  <div class=\"col-xs-12 my-left-pane\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\"\n          *ngFor=\"let website of websites\">\n        <a (click)=\"navigateToPages(website)\" class=\"no-underline-hover\">{{website.name}}</a>\n        <a (click)=\"navigateToWebsiteEdit(website)\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click) = \"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, router, route) {
        this.websiteService = websiteService;
        this.router = router;
        this.route = route;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userID);
    };
    WebsiteListComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    WebsiteListComponent.prototype.navigateToWebsiteNew = function () {
        this.router.navigate(['/user', this.userID, 'website', 'new']);
    };
    WebsiteListComponent.prototype.navigateToPages = function (website) {
        this.router.navigate(['/user', this.userID, 'website', website._id, 'page']);
    };
    WebsiteListComponent.prototype.navigateToWebsiteEdit = function (website) {
        this.router.navigate(['/user', this.userID, 'website', website._id]);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <!-- Header - Left Pane -->\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToProfile()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"reloadPage()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Websites\n        </a>\n      </div>\n\n    </div>\n\n    <!-- Header - Right Pane -->\n    <div class=\"col-sm-8 col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWebsiteList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"createWebsite()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          New Website\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n\n  <!-- Left Pane - Website List -->\n  <div class=\"col-sm-4 hidden-xs my-left-pane my-right-border\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\"\n          *ngFor=\"let website of websites\">\n        <a (click)=\"navigateToPages(website)\" class=\"no-underline-hover\">{{website.name}}</a>\n        <a (click)=\"navigateToWebsiteEdit(website)\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog my-right-margin\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <!-- Right Pane - Forms -->\n  <div class=\"col-sm-8 col-xs-12 my-right-pane\">\n\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <form (submit)=\"createWebsite()\"  #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"websiteName\">Name</label>\n        <input type=\"text\"\n               id=\"websiteName\"\n               name=\"websiteName\"\n               class=\"form-control\"\n               placeholder=\"Name\"\n               required\n               [(ngModel)] = \"websiteName\"\n               ngModel\n               #o_websiteName = \"ngModel\"/>\n      </div>\n\n      <span class=\"help-block\"\n            *ngIf=\"o_websiteName.touched && o_websiteName.invalid\">\n      Please enter website name!\n      </span>\n\n      <div class=\"form-group\">\n        <label for=\"websiteDescription\">Description</label>\n        <textarea id=\"websiteDescription\"\n                  name = \"websiteDescription\"\n                  class=\"form-control span6\"\n                  rows=\"5\"\n                  placeholder=\"Description\"\n                  [(ngModel)] = \"websiteDescription\"\n                  ngModel\n                  #o_websiteDescription = \"ngModel\"></textarea>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, router, route) {
        this.websiteService = websiteService;
        this.router = router;
        this.route = route;
        this.errorMsg = 'Website Name is required!';
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userID);
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        if (!this.websiteName) {
            this.errorMsg = 'Website Name is required!';
            this.errorFlag = true;
        }
        else {
            var success = this.websiteService.createWebsite(this.userID, this.websiteName, this.websiteDescription);
            if (!success) {
                this.errorMsg = 'This Website already exists!';
                this.errorFlag = true;
            }
            else {
                this.navigateToWebsiteList();
            }
        }
    };
    WebsiteNewComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    WebsiteNewComponent.prototype.navigateToPages = function (website) {
        this.router.navigate(['/user', this.userID, 'website', website._id, 'page']);
    };
    WebsiteNewComponent.prototype.navigateToWebsiteList = function () {
        this.router.navigate(['/user', this.userID, 'website']);
    };
    WebsiteNewComponent.prototype.navigateToWebsiteEdit = function (website) {
        this.router.navigate(['/user', this.userID, 'website', website._id]);
    };
    WebsiteNewComponent.prototype.reloadPage = function () {
        this.router.navigate(['/user', this.userID, 'website', 'new']);
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerID, description) {
        this._id = _id;
        this.name = name;
        this.developerID = developerID;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWidgetList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Choose Widget\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- Widget List -->\n<div class=\"row container-fluid\">\n  <div class=\"col-xs-12 my-left-pane\">\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item my-no-border\">\n        <a (click)=\"createHeaderWidget()\" class=\"no-underline-hover\">Header</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">Label</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">HTML</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">Text Input</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">Link</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">Button</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a (click)=\"createImageWidget()\" class=\"no-underline-hover\">Image</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a (click)=\"createYoutubeWidget()\" class=\"no-underline-hover\">Youtube</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">Data Table</a>\n      </li>\n\n      <li class=\"list-group-item my-no-border\">\n        <a class=\"no-underline-hover\">Repeater</a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
        });
    };
    WidgetChooserComponent.prototype.createHeaderWidget = function () {
        var newWidget = { '_id': '', 'widgetType': 'HEADING', 'pageId': '', 'size': 4, 'text': '' };
        this.createWidget(newWidget);
    };
    WidgetChooserComponent.prototype.createImageWidget = function () {
        var newWidget = { '_id': '', 'widgetType': 'IMAGE', 'pageId': '', 'width': '100%', 'url': 'URL' };
        this.createWidget(newWidget);
    };
    WidgetChooserComponent.prototype.createYoutubeWidget = function () {
        var newWidget = { '_id': '', 'widgetType': 'YOUTUBE', 'pageId': '', 'width': '100%', 'url': 'URL' };
        this.createWidget(newWidget);
    };
    WidgetChooserComponent.prototype.createWidget = function (newWidget) {
        var widget = this.widgetService.createWidget(this.pageID, newWidget);
        this.navigateToWidgetEdit(widget._id, widget.widgetType);
    };
    WidgetChooserComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    WidgetChooserComponent.prototype.navigateToWidgetList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
    };
    WidgetChooserComponent.prototype.navigateToWidgetEdit = function (widgetID, type) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget',
            widgetID], { queryParams: { type: type } });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"type\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header widgetID=\"{{widgetID}}\"></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image widgetID=\"{{widgetID}}\"></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube widgetID=\"{{widgetID}}\"></app-widget-youtube>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
            _this.widgetID = params['widgetID'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.type = params['type'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetID);
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWidgetList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateWidget()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widget Edit\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n</nav>\n\n<!-- Widget Edit Form -->\n<div class=\"row container-fluid\">\n  <div class=\"col-xs-12 custom-padding-top-10\">\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"headerText\">Text</label>\n        <input type=\"text\"\n               id=\"headerText\"\n               name=\"headerText\"\n               class=\"form-control\"\n               required\n               value=\"{{headerText}}\"\n               [(ngModel)]=\"headerText\"\n               placeholder=\"Header Text\"/>\n      </div>\n\n      <div class=\"form-group\">\n      <label for=\"headerSize\">Text Size</label>\n      <input type=\"text\"\n             id=\"headerSize\"\n             name=\"headerSize\"\n             class=\"form-control\"\n             required\n             value=\"{{headerSize}}\"\n             [(ngModel)]=\"headerSize\"\n             placeholder=\"Header Size\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"deleteWidget()\"\n           class=\"btn btn-block btn-danger\">\n          Delete\n        </a>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetID);
        this.headerText = this.widget.text;
        this.headerSize = this.widget.size;
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        this.widget.text = this.headerText;
        this.widget.size = this.headerSize;
        this.widgetService.updateWidget(this.widgetID, this.widget);
        this.navigateToWidgetList();
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetID);
        this.navigateToWidgetList();
    };
    WidgetHeaderComponent.prototype.navigateToWidgetList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
    };
    WidgetHeaderComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], WidgetHeaderComponent.prototype, "widgetID", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWidgetList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateWidget()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widget Edit\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n</nav>\n\n<!-- Widget Edit Form -->\n<div class=\"row container-fluid\">\n  <div class=\"col-xs-12 custom-padding-top-10\">\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image URL</label>\n        <input type=\"text\"\n               id=\"imageUrl\"\n               name=\"imageUrl\"\n               class=\"form-control\"\n               required\n               value=\"{{imageUrl}}\"\n               [(ngModel)]=\"imageUrl\"\n               placeholder=\"URL\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"width\">Image width</label>\n        <input type=\"text\"\n               id=\"width\"\n               name=\"width\"\n               class=\"form-control\"\n               required\n               value=\"{{width}}\"\n               [(ngModel)]=\"width\"\n               placeholder=\"100%\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"deleteWidget()\"\n           class=\"btn btn-block btn-danger\">\n          Delete\n        </a>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetID);
        this.imageUrl = this.widget.url;
        this.width = this.widget.width;
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        this.widget.url = this.imageUrl;
        this.widget.width = this.width;
        this.widgetService.updateWidget(this.widgetID, this.widget);
        this.navigateToWidgetList();
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetID);
        this.navigateToWidgetList();
    };
    WidgetImageComponent.prototype.navigateToWidgetList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
    };
    WidgetImageComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], WidgetImageComponent.prototype, "widgetID", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToWidgetList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"updateWidget()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widget Edit\n        </a>\n      </div>\n\n    </div>\n\n  </div>\n</nav>\n\n<!-- Widget Edit Form -->\n<div class=\"row container-fluid\">\n  <div class=\"col-xs-12 custom-padding-top-10\">\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"youtubeUrl\">Youtube URL</label>\n        <input type=\"text\"\n               id=\"youtubeUrl\"\n               name=\"youtubeUrl\"\n               class=\"form-control\"\n               required\n               value=\"{{youtubeUrl}}\"\n               [(ngModel)]=\"youtubeUrl\"\n               placeholder=\"URL\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"width\">Video width</label>\n        <input type=\"text\"\n               id=\"width\"\n               name=\"width\"\n               class=\"form-control\"\n               required\n               [(ngModel)]=\"width\"\n               value=\"{{width}}\"\n               placeholder=\"100%\"/>\n      </div>\n\n      <div class=\"form-group\">\n        <a (click)=\"deleteWidget()\"\n           class=\"btn btn-block btn-danger\">\n          Delete\n        </a>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetID);
        this.youtubeUrl = this.widget.url;
        this.width = this.widget.width;
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        this.widget.url = this.youtubeUrl;
        this.widget.width = this.width;
        this.widgetService.updateWidget(this.widgetID, this.widget);
        this.navigateToWidgetList();
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetID);
        this.navigateToWidgetList();
    };
    WidgetYoutubeComponent.prototype.navigateToWidgetList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
    };
    WidgetYoutubeComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], WidgetYoutubeComponent.prototype, "widgetID", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"navbar-text pull-left my-header-left-margin\">\n        <a (click)=\"navigateToPageList()\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-text pull-right my-header-right-margin\">\n        <a (click)=\"navigateToWidgetChooser()\" >\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          Widgets\n        </a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- Widget List -->\n<div class=\"container-fluid\">\n\n  <div *ngFor=\"let widget of widgets\">\n\n    <div>\n      <div class=\"my-widget-settings-bar list-group pull-right\">\n        <a (click)=\"navigateToWidgetEdit(widget._id, widget.widgetType)\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n        <a>\n          <span class=\"glyphicon glyphicon-align-justify\"></span>\n        </a>\n      </div>\n\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <app-header-view size=\"{{widget.size}}\"\n                            text=\"{{widget.text}}\"></app-header-view>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <app-html-view htmlSnippet=\"{{widget.text}}\"></app-html-view>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <app-youtube-view url=\"{{widget.url}}\"\n                            width=\"{{widget.width}}\"></app-youtube-view>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <app-image-view url=\"{{widget.url}}\" width=\"{{widget.width}}\"></app-image-view>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-footer navbar-text pull-left my-header-right-margin\">\n      <a>\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-footer navbar-text pull-left my-header-left-margin\">\n      <a>\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </div>\n\n    <div class=\"navbar-footer navbar-text pull-right\">\n      <a (click)=\"navigateToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.websiteID = params['websiteID'];
            _this.pageID = params['pageID'];
        });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageID);
    };
    WidgetListComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/user', this.userID]);
    };
    WidgetListComponent.prototype.navigateToPageList = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page']);
    };
    WidgetListComponent.prototype.navigateToWidgetChooser = function () {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget', 'new']);
    };
    WidgetListComponent.prototype.navigateToWidgetEdit = function (widgetID, type) {
        this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget',
            widgetID], { queryParams: { type: type } });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/header-view/header-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/header-view/header-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"size\">\n  <h1 *ngSwitchCase=\"'1'\">{{text}}</h1>\n  <h2 *ngSwitchCase=\"'2'\">{{text}}</h2>\n  <h3 *ngSwitchCase=\"'3'\">{{text}}</h3>\n  <h4 *ngSwitchCase=\"'4'\">{{text}}</h4>\n  <h5 *ngSwitchCase=\"'5'\">{{text}}</h5>\n  <h6 *ngSwitchCase=\"'6'\">{{text}}</h6>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/header-view/header-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderViewComponent = (function () {
    function HeaderViewComponent() {
    }
    HeaderViewComponent.prototype.ngOnInit = function () {
    };
    return HeaderViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HeaderViewComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HeaderViewComponent.prototype, "text", void 0);
HeaderViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header-view',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-view/header-view/header-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-view/header-view/header-view.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderViewComponent);

//# sourceMappingURL=header-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/html-view/html-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/html-view/html-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"e2e-inner-html-bound\" [innerHTML]=\"htmlSnippet\"></p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/html-view/html-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlViewComponent = (function () {
    function HtmlViewComponent() {
    }
    HtmlViewComponent.prototype.ngOnInit = function () {
    };
    return HtmlViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HtmlViewComponent.prototype, "htmlSnippet", void 0);
HtmlViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-html-view',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-view/html-view/html-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-view/html-view/html-view.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HtmlViewComponent);

//# sourceMappingURL=html-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/image-view/image-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/image-view/image-view.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"sanitizedURL\" width=\"{{width}}\" height=\"300px\"/>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/image-view/image-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageViewComponent = (function () {
    function ImageViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ImageViewComponent.prototype.ngOnInit = function () {
        this.sanitizedURL = this.photoURL();
        console.log(this.sanitizedURL);
    };
    ImageViewComponent.prototype.photoURL = function () {
        return this.sanitizer.bypassSecurityTrustUrl(this.url);
    };
    return ImageViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ImageViewComponent.prototype, "url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ImageViewComponent.prototype, "width", void 0);
ImageViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-view',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-view/image-view/image-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-view/image-view/image-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], ImageViewComponent);

var _a;
//# sourceMappingURL=image-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/youtube-view/youtube-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/youtube-view/youtube-view.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe width={{width}}\n        height=\"300 px\"\n        [src]=\"sanitizedURL\"\n        e2e-iframe-trusted-src\n        frameborder=\"0\"\n        allowfullscreen>\n</iframe>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-view/youtube-view/youtube-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeViewComponent = (function () {
    function YoutubeViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeViewComponent.prototype.ngOnInit = function () {
        this.sanitizedURL = this.getEmbededUrl();
    };
    YoutubeViewComponent.prototype.getEmbededUrl = function () {
        var urlParts = this.url.split('/');
        var videoId = urlParts[urlParts.length - 1];
        var embededUrl = 'https://www.youtube.com/embed/' + videoId;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embededUrl);
    };
    return YoutubeViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], YoutubeViewComponent.prototype, "url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], YoutubeViewComponent.prototype, "width", void 0);
YoutubeViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-youtube-view',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-view/youtube-view/youtube-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-view/youtube-view/youtube-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], YoutubeViewComponent);

var _a;
//# sourceMappingURL=youtube-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_page_model_client__ = __webpack_require__("../../../../../src/app/components/page/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var PageService = (function () {
    function PageService() {
        this.pages = [
            new __WEBPACK_IMPORTED_MODULE_2__components_page_page_model_client__["a" /* Page */]('321', 'Post 1', '890', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_page_page_model_client__["a" /* Page */]('432', 'Post 2', '890', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_page_page_model_client__["a" /* Page */]('543', 'Post 3', '890', 'Lorem')
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteID, name, title) {
        var _id = '' + (new Date()).getTime();
        // check if page name exists
        if (!this.validatePageName(websiteID, name)) {
            return false;
        }
        var newPage = new __WEBPACK_IMPORTED_MODULE_2__components_page_page_model_client__["a" /* Page */](_id, name, websiteID, title);
        this.pages.push(newPage);
        return true;
    };
    PageService.prototype.validatePageName = function (websiteID, name) {
        var websitePages = this.findPagesByWebsiteId(websiteID);
        for (var i = 0; i < websitePages.length; i++) {
            if (websitePages[i].name === name) {
                return false;
            }
        }
        return true;
    };
    PageService.prototype.validatePage = function (websiteID, pageID, name) {
        var websitePages = this.findPagesByWebsiteId(websiteID);
        for (var i = 0; i < websitePages.length; i++) {
            if (websitePages[i]._id !== pageID && websitePages[i].name === name) {
                return false;
            }
        }
        return true;
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteID) {
        var websitePages = [];
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteID === websiteID) {
                websitePages.push(this.pages[i]);
            }
        }
        return websitePages;
    };
    PageService.prototype.findPageById = function (pageID) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageID) {
                return this.pages[i];
            }
        }
        return null;
    };
    PageService.prototype.updatePage = function (websiteID, pageID, name, title) {
        // check if page name exists
        if (!this.validatePage(websiteID, pageID, name)) {
            return false;
        }
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageID) {
                this.pages[i].name = name;
                this.pages[i].title = title;
                return true;
            }
        }
    };
    PageService.prototype.deletePage = function (pageID) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageID) {
                this.pages.splice(i, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_user_model_client__ = __webpack_require__("../../../../../src/app/components/user/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_2__components_user_user_model_client__["a" /* User */]('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_2__components_user_user_model_client__["a" /* User */]('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_2__components_user_user_model_client__["a" /* User */]('345', 'charly', 'charly', 'Charly', 'Garcia', 'chaly@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_2__components_user_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jose@gmail.com')
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (username, password) {
        var userID = '' + (new Date()).getTime();
        var user = new __WEBPACK_IMPORTED_MODULE_2__components_user_user_model_client__["a" /* User */](userID, username, password, '', '', '');
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].userID === userId) {
                return this.users[x];
            }
        }
        return null;
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
        return null;
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].userID === userId) {
                this.users[x].username = user.username;
                this.users[x].password = user.password;
                this.users[x].firstname = user.firstname;
                this.users[x].lastname = user.lastname;
                this.users[x].email = user.email;
                return this.users[x];
            }
        }
        return null;
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].userID === userId) {
                this.users.splice(x, 1);
            }
        }
        return null;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__ = __webpack_require__("../../../../../src/app/components/website/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('123', 'Facebook', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('234', 'Tweeter', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('456', 'Gizmodo', '456', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('890', 'Go', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('678', 'Checkers', '123', 'Lorem'),
            new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */]('789', 'Chess', '234', 'Lorem')
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userID, name, description) {
        var _id = '' + (new Date()).getTime();
        // check if website exists
        if (!this.validateWebsiteName(userID, name)) {
            return false;
        }
        var website = new __WEBPACK_IMPORTED_MODULE_2__components_website_website_model_client__["a" /* Website */](_id, name, userID, description);
        this.websites.push(website);
        return true;
    };
    WebsiteService.prototype.validateWebsiteName = function (userID, name) {
        var userWebsites = this.findWebsitesByUser(userID);
        for (var i = 0; i < userWebsites.length; i++) {
            if (userWebsites[i].name === name) {
                return false;
            }
        }
        return true;
    };
    WebsiteService.prototype.validateWebsite = function (userID, webisteID, name) {
        var userWebsites = this.findWebsitesByUser(userID);
        for (var i = 0; i < userWebsites.length; i++) {
            if (userWebsites[i]._id !== webisteID && userWebsites[i].name === name) {
                return false;
            }
        }
        return true;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userID) {
        var userWebsites = [];
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerID === userID) {
                userWebsites.push(this.websites[i]);
            }
        }
        return userWebsites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteID) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteID) {
                return this.websites[i];
            }
        }
        return null;
    };
    WebsiteService.prototype.updateWebsite = function (userID, websiteID, name, description) {
        // check if website exists
        if (!this.validateWebsite(userID, websiteID, name)) {
            return false;
        }
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteID) {
                this.websites[i].name = name;
                this.websites[i].description = description;
                return true;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteID) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteID) {
                this.websites.splice(i, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': '2', 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': '4', 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': '4', 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://youtu.be/AM2Ivdi9c4E' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageID, widget) {
        var _id = '' + (new Date()).getTime();
        widget._id = _id;
        widget.pageId = pageID;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageID) {
        var pageWidgets = [];
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageID) {
                pageWidgets.push(this.widgets[i]);
            }
        }
        return pageWidgets;
    };
    WidgetService.prototype.findWidgetById = function (widgetID) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetID) {
                return this.widgets[i];
            }
        }
        return null;
    };
    WidgetService.prototype.updateWidget = function (widgetID, newWidget) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetID) {
                if (this.widgets[i].widgetType === 'IMAGE' || this.widgets[i].widgetType === 'YOUTUBE') {
                    this.widgets[i].width = newWidget.width;
                    this.widgets[i].url = newWidget.url;
                    return this.widgets[i];
                }
                else if (this.widgets[i].widgetType === 'HEADING') {
                    this.widgets[i].text = newWidget.text;
                    this.widgets[i].size = newWidget.size;
                    return this.widgets[i];
                }
                else if (this.widgets[i].widgetType === 'HTML') {
                    this.widgets[i].text = newWidget.text;
                    return this.widgets[i];
                }
            }
        }
        return null;
    };
    WidgetService.prototype.deleteWidget = function (widgetID) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetID) {
                this.widgets.splice(i, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
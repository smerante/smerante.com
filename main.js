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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code/code.component */ "./src/app/code/code.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forum_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forum/authenticated/authenticated.component */ "./src/app/forum/authenticated/authenticated.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lotto/lotto.component */ "./src/app/lotto/lotto.component.ts");















var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'lotto', component: _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_14__["LottoComponent"] },
    { path: 'components', component: _components_components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"] },
    { path: 'forum', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_12__["ForumComponent"], children: [
            { path: 'authenticated', component: _forum_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_10__["AuthenticatedComponents"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] }
        ] },
    { path: 'code', component: _code_code_component__WEBPACK_IMPORTED_MODULE_6__["CodeComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CVComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', redirectTo: '/home' },
    { path: '404', redirectTo: '/home' },
    { path: '**', redirectTo: '/home' }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"body\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyBv7rMr86OmhTlT7q8Gj4a59lXutxFdAyE",
            authDomain: "sam-merante.firebaseapp.com",
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./code/code.component */ "./src/app/code/code.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forum_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forum/authenticated/authenticated.component */ "./src/app/forum/authenticated/authenticated.component.ts");
/* harmony import */ var _components_documentation_documentation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/documentation/documentation.module */ "./src/app/components/documentation/documentation.module.ts");
/* harmony import */ var _components_cta_cta_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cta/cta.component */ "./src/app/components/cta/cta.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/app/components/checkbox/checkbox.component.ts");
/* harmony import */ var _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/toggle/toggle.component */ "./src/app/components/toggle/toggle.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_radios_radios_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/radios/radios.component */ "./src/app/components/radios/radios.component.ts");
/* harmony import */ var _components_cards_cards_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cards/cards.module */ "./src/app/components/cards/cards.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/modal/modal.module */ "./src/app/components/modal/modal.module.ts");
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/datepicker/datepicker.component */ "./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var _components_datepicker_datepicker_range_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/datepicker/datepicker-range.component */ "./src/app/components/datepicker/datepicker-range.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _game_screen_screen_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./game/screen/screen.component */ "./src/app/game/screen/screen.component.ts");
/* harmony import */ var _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lotto/lotto.component */ "./src/app/lotto/lotto.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _cv_cv_component__WEBPACK_IMPORTED_MODULE_8__["CVComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_10__["CodeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_13__["ComponentsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _forum_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_15__["AuthenticatedComponents"],
                _components_cta_cta_component__WEBPACK_IMPORTED_MODULE_17__["CtaComponent"],
                _components_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"],
                _components_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputWrapperComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponent"],
                _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponentWrapper"],
                _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_20__["ToggleComponent"],
                _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_20__["ToggleComponentWrapper"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_21__["ForumComponent"],
                _components_radios_radios_component__WEBPACK_IMPORTED_MODULE_23__["RadiosComponent"],
                _components_radios_radios_component__WEBPACK_IMPORTED_MODULE_23__["RadioGroupComponent"],
                _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_27__["TooltipComponent"],
                _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_28__["DatePickerComponent"],
                _components_datepicker_datepicker_range_component__WEBPACK_IMPORTED_MODULE_29__["DatePickerRangeComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_30__["GameComponent"],
                _game_screen_screen_component__WEBPACK_IMPORTED_MODULE_31__["ScreenComponent"],
                _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_32__["LottoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _components_documentation_documentation_module__WEBPACK_IMPORTED_MODULE_16__["DocumentationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_26__["ModalModule"],
                _components_cards_cards_module__WEBPACK_IMPORTED_MODULE_24__["CardsModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_25__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_25__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var authorized = this.auth.isVerified();
        if (!authorized) {
            this.router.navigate(['/home']);
        }
        return authorized;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password, name) {
        var _this = this;
        //this is a promise so you can listen with .then
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (data) {
            console.log('create user: ', data);
            return data.user.updateProfile({ displayName: name }).then(function () {
                _this.verifyEmail();
            });
        });
    };
    AuthService.prototype.verifyEmail = function () {
        var _this = this;
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.sendEmailVerification().then(function (verified) {
            _this.email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
            });
            console.log('Sending verifcation email :', _this.email);
            return verified;
        });
    };
    AuthService.prototype.isVerified = function () {
        var _this = this;
        var verified = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.emailVerified : false;
        if (verified) {
            this.email = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email;
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
            });
        }
        console.log('logged in: ', verified ? firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser : '');
        return verified;
    };
    AuthService.prototype.signInUser = function (email, password) {
        var _this = this;
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function () {
            console.log('user email verified ', _this.isVerified());
            _this.isSignedIn = true;
        });
    };
    AuthService.prototype.logout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/code/code.component.html":
/*!******************************************!*\
  !*** ./src/app/code/code.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sam-title\">Sample Code Snippets</h1>\n<div class=\"card card__show card__show--come-in\"  #card8>\n  <h4 style=\"margin: 16px auto; width: 95%;\">Sorting</h4>\n  <div class=\"card-header\">\n    Bubble Sort\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Sorting algorithm - O(n^2)\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/BubbleSort.java\">BubbleSort.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card card__show card__show--come-in\" #card9>\n  <div class=\"card-header\">\n    Insertion Sort\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Sorting algorithm - O(n^2)\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/InsertionSort.java\">InsertionSort.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card10>\n  <div class=\"card-header\">\n    Selection Sort\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Sorting algorithm - O(n^2)\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/SelectionSort.java\">SelectionSort.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card11>\n  <div class=\"card-header\">\n    Merge Sort\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Sorting algorithm - O(n*log(n))\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MergeSort.java\">MergeSort.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card12>\n  <div class=\"card-header\">\n    QuickSort Sort\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Sorting algorithm - O(n*log(n))\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Quicksort.java\">QuickSort.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card13>\n  <h4 style=\"margin: 16px auto; width: 95%;\">Data Structures</h4>\n  <div class=\"card-header\">\n    ArrayList\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A dynamically sizable array\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyArrayList.java\">ArrayList.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card14>\n  <div class=\"card-header\">\n    LinkedList\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A linked list of nodes with references to each node from the previous\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyLinkedList.java\">LinkedList.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card15>\n  <div class=\"card-header\">\n    Stack\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A 'FILO' (first in last out) list, like a stack of paper\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyStack.java\">Stack.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card16>\n  <div class=\"card-header\">\n    Queue\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A 'FIFO' (first in first out) list, like a line of people\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyQueue.java\">Queue.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card17>\n  <div class=\"card-header\">\n    Priority Queue\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A Queue sorted based on given priorities of each node, like in an emergency triage center at a hosiptal.\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyPQ.java\">PriorityQueue.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card18>\n  <div class=\"card-header\">\n    Hash Map\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A dynamically sizable and quick lookup array based on hashed indecies of each element.\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyHashMap.java\">HashMap.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card19>\n  <div class=\"card-header\">\n    Graph\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A datastructure with Lists of vertices, along with lists of edges. Each vertex can have connections to other verticies through neighbouring edges.\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/MyGraph.java\">Graph.java</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card20>\n  <h4 style=\"margin: 16px auto; width: 95%;\">Other</h4>\n  <div class=\"card-header\">\n    Simple Encryption\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A simple encryption written in C for text files.\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Encryption.c\">Encryption.c</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card21>\n  <div class=\"card-header\">\n    Factorial Recursion and memoization \n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        A simple example of factorial recursion and memoization\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/FactorialExample/index.html\">FactorialExample.index</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card1>\n  <h4 style=\"margin: 16px auto; width: 95%;\">Games</h4>\n  <div class=\"card-header\">\n    Pong\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <a target=\"_blank\" href=\"assets/src/Pong.txt\">Pong.txt</a>\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Pong.jar\" download>Pong.jar</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card2>\n  <div class=\"card-header\">\n    Air Hockey\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <a target=\"_blank\" href=\"assets/src/AirHockey.txt\">AirHockey.txt</a>\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Airhockey.jar\" download>AirHockey.jar</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card3>\n  <div class=\"card-header\">\n    Snake\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <a target=\"_blank\" href=\"assets/src/SnakeHead.java\">Snake.java</a>\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Snake.jar\" download>Snake.jar</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card4>\n  <div class=\"card-header\">\n    Robocalypse\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Top Down shooter/Survival game\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Robocalypse.jar\" download>Robocalypse.jar</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card5>\n  <div class=\"card-header\">\n    Snowball Fight\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Top Down multiplayer snowball fight game\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/SnowBallFight.zip\" download>SnowBallFight.zip</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card6>\n  <div class=\"card-header\">\n    Ghost Survival\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Top Down shooter/horror game\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/Ghosts.zip\" download>Ghosts.zip</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" #card7>\n  <div class=\"card-header\">\n    Circle Collider\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        Simple algorithm to check for collision between two circles : <a target=\"_blank\" href=\"assets/src/Window.java\">Collider.java</a>\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <a target=\"_blank\" href=\"assets/src/CircleCollider.jar\" download>Collider.Jar</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/code/code.component.scss":
/*!******************************************!*\
  !*** ./src/app/code/code.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 95%;\n  margin: 32px auto;\n  visibility: hidden;\n  color: black;\n  border: 0;\n  box-shadow: 1px 1px 10px 1px #8888886e;\n  -webkit-transform: translateX(-100vw);\n          transform: translateX(-100vw); }\n  .card-header {\n    background-color: white;\n    border-bottom: 1px solid lightgrey;\n    border-top: 1px solid lightgrey; }\n  .card__show {\n    visibility: visible;\n    transition: all 1s ease;\n    -webkit-transition: all 1s ease;\n    -moz-transition: all 1s ease;\n    -o-transition: all 1s ease; }\n  .card__show--come-in {\n      background-color: white;\n      visibility: visible;\n      -webkit-transform: translateX(0px);\n              transform: translateX(0px); }\n  .break {\n  width: 100%;\n  height: 100vh;\n  background-color: white; }\n  a {\n  color: darkblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29kZS9jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFVBQVM7RUFDVCx1Q0FBc0M7RUFDdEMsc0NBQTZCO1VBQTdCLDhCQUE2QixFQWtCOUI7RUFqQkM7SUFDRSx3QkFBdUI7SUFDdkIsbUNBQWtDO0lBQ2xDLGdDQUErQixFQUNoQztFQUNEO0lBQ0Usb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixnQ0FBK0I7SUFDL0IsNkJBQTRCO0lBQzVCLDJCQUEwQixFQU0zQjtFQUxDO01BQ0Usd0JBQXVCO01BQ3ZCLG9CQUFtQjtNQUNuQixtQ0FBMEI7Y0FBMUIsMkJBQTBCLEVBQzNCO0VBR0w7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLHdCQUF1QixFQUN4QjtFQUNEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb2RlL2NvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4ICM4ODg4ODg2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XG4gICYtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIH1cbiAgJl9fc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgJi0tY29tZS1pbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG4gIH1cbn1cbi5icmVhayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmEge1xuICBjb2xvcjogZGFya2JsdWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/code/code.component.ts":
/*!****************************************!*\
  !*** ./src/app/code/code.component.ts ***!
  \****************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodeComponent = /** @class */ (function () {
    function CodeComponent(renderer) {
        this.renderer = renderer;
    }
    CodeComponent.prototype.ngOnInit = function () {
        this.scrollCardsIntoView();
    };
    CodeComponent.prototype.onScroll = function () {
        this.scrollCardsIntoView();
    };
    CodeComponent.prototype.scrollCardsIntoView = function () {
        var _this = this;
        if ((this.card1.nativeElement.getBoundingClientRect().top + this.card1.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card1.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card1.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card2.nativeElement.getBoundingClientRect().top + this.card2.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card2.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card2.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card3.nativeElement.getBoundingClientRect().top + this.card3.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card3.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card3.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card4.nativeElement.getBoundingClientRect().top + this.card4.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card4.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card4.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card5.nativeElement.getBoundingClientRect().top + this.card5.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card5.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card5.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card6.nativeElement.getBoundingClientRect().top + this.card6.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card6.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card6.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card7.nativeElement.getBoundingClientRect().top + this.card7.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card7.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card7.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card8.nativeElement.getBoundingClientRect().top + this.card8.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card8.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card8.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card9.nativeElement.getBoundingClientRect().top + this.card9.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card9.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card9.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card10.nativeElement.getBoundingClientRect().top + this.card10.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card10.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card10.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card11.nativeElement.getBoundingClientRect().top + this.card11.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card11.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card11.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card12.nativeElement.getBoundingClientRect().top + this.card12.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card12.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card12.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card13.nativeElement.getBoundingClientRect().top + this.card13.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card13.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card13.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card14.nativeElement.getBoundingClientRect().top + this.card14.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card14.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card14.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card15.nativeElement.getBoundingClientRect().top + this.card15.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card15.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card15.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card16.nativeElement.getBoundingClientRect().top + this.card16.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card16.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card16.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card17.nativeElement.getBoundingClientRect().top + this.card17.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card17.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card17.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card18.nativeElement.getBoundingClientRect().top + this.card18.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card18.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card18.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card19.nativeElement.getBoundingClientRect().top + this.card19.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card19.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card19.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card20.nativeElement.getBoundingClientRect().top + this.card20.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card20.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card20.nativeElement, 'card__show--come-in');
            }, 100);
        }
        if ((this.card21.nativeElement.getBoundingClientRect().top + this.card21.nativeElement.getBoundingClientRect().height / 2) <= window.innerHeight) {
            this.renderer.addClass(this.card21.nativeElement, 'card__show');
            setTimeout(function () {
                _this.renderer.addClass(_this.card21.nativeElement, 'card__show--come-in');
            }, 100);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card5'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card6'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card6", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card7'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card7", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card8'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card8", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card9'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card9", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card10'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card10", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card11'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card11", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card12'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card12", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card13'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card13", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card14'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card14", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card15'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card15", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card16'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card16", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card17'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card17", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card18'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card18", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card19'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card19", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card20'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card20", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card21'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "card21", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CodeComponent.prototype, "onScroll", null);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! ./code.component.html */ "./src/app/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.scss */ "./src/app/code/code.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/cards.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/cards/cards.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sam-card--wrapper\" [attr.imgSrc]=\"imgSrc ? true : false\" [attr.placement]=\"placement\">\n  <div *ngIf=\"imgSrc\" class=\"sam-card--img\" [attr.placement]=\"placement\">\n    <img class=\"\" [src]=\"imgSrc\" />\n  </div>\n  <ng-content select=\"card-header\"></ng-content>\n  <ng-content select=\"card-body\"></ng-content>\n  <ng-content select=\"card-footer\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/components/cards/cards.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/cards/cards.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-card {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  position: relative;\n  margin: 16px auto;\n  padding: 32px;\n  text-align: center;\n  display: block; }\n\n.sam-card--wrapper {\n    position: relative;\n    box-shadow: 1px 1px 10px 1px #8888886e;\n    background: white;\n    min-width: 250px;\n    max-width: 350px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-areas: 'header header header header header header' 'body body body body body body' 'footer footer footer footer footer footer'; }\n\n.sam-card--wrapper[imgsrc=\"true\"] {\n      grid-template-areas: 'img img img img img img' 'header header header header header header' 'body body body body body body' 'footer footer footer footer footer footer'; }\n\n.sam-card--wrapper[placement=\"left\"] {\n      grid-template-areas: 'img img header header header header' 'img img body body body body' 'img img footer footer footer footer';\n      max-width: -webkit-min-content;\n      max-width: -moz-min-content;\n      max-width: min-content; }\n\n@media screen and (max-width: 575px) {\n        .sam-card--wrapper[placement=\"left\"] {\n          grid-template-areas: 'img img img img img img' 'header header header header header header' 'body body body body body body' 'footer footer footer footer footer footer'; } }\n\n.sam-card--wrapper[placement=\"right\"] {\n      grid-template-areas: 'header header header header img img ' 'body body body body img img' 'footer footer footer footer img img';\n      max-width: -webkit-min-content;\n      max-width: -moz-min-content;\n      max-width: min-content; }\n\n@media screen and (max-width: 575px) {\n        .sam-card--wrapper[placement=\"right\"] {\n          grid-template-areas: 'img img img img img img' 'header header header header header header' 'body body body body body body' 'footer footer footer footer footer footer'; } }\n\n.sam-card--wrapper[placement=\"bottom\"] {\n      grid-template-areas: 'header header header header header header' 'body body body body body body' 'footer footer footer footer footer footer' 'img img img img img img'; }\n\n.sam-card--img {\n    grid-area: img;\n    position: relative;\n    top: 0px;\n    left: 0px;\n    height: 200px;\n    width: 100%; }\n\n.sam-card--img img {\n      display: block;\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      left: 0px;\n      top: 0px; }\n\n.sam-card--img[placement=\"left\"], .sam-card--img[placement=\"right\"] {\n      height: 100%;\n      width: 200px;\n      display: inline-block; }\n\n@media screen and (max-width: 575px) {\n        .sam-card--img[placement=\"left\"], .sam-card--img[placement=\"right\"] {\n          height: 200px;\n          width: 100%;\n          grid-area: img; } }\n\n.sam-card--header {\n    grid-area: header;\n    top: 0px;\n    left: 0px;\n    text-align: center;\n    font-size: 1.6rem;\n    padding: 8px;\n    font-weight: 500; }\n\n.sam-card--body {\n    grid-area: body;\n    display: block;\n    text-align: left;\n    top: 0px;\n    left: 0px;\n    padding: 0px 16px; }\n\n.sam-card--footer {\n    grid-area: footer;\n    border-top: 1px solid #8888886e;\n    display: block;\n    top: 0px;\n    left: 0px;\n    padding: 8px;\n    text-align: center;\n    font-size: 0.85rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSwyQkNaa0IsRURhbkI7O0FBRUQ7RUVmRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VGYWhCLGVDbEJrQjtFRG1CbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FHVUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUMvQ0Q7RUZERSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VFRGhCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixlQUFjLEVBc0hmOztBQW5IQztJQUNFLG1CQUFrQjtJQUNsQix1Q0FBc0M7SUFDdEMsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLGNBQWE7SUFDYiw2SUFHNkMsRUFpRDlDOztBQTVEQTtNQWFHLHVLQUk2QyxFQUM5Qzs7QUFsQkY7TUFvQkcsK0hBR3VDO01BQ3JDLCtCQUE4QjtNQUM5Qiw0QkFBMkI7TUFDM0IsdUJBQXNCLEVBUXpCOztBQVBHO1FBM0JMO1VBNEJPLHVLQUk2QyxFQUVsRCxFQUFBOztBQWxDRjtNQXFDRyxnSUFHdUM7TUFDckMsK0JBQThCO01BQzlCLDRCQUEyQjtNQUMzQix1QkFBc0IsRUFRekI7O0FBUEc7UUE1Q0w7VUE2Q08sdUtBSTZDLEVBRWxELEVBQUE7O0FBbkRGO01Bc0RHLHVLQUkyQixFQUM1Qjs7QUFHSDtJQUNFLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCxjQUFhO0lBQ2IsWUFBVyxFQW1CWjs7QUF6QkE7TUFRRyxlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixZQUFXO01BQ1gsVUFBUztNQUNULFNBQVEsRUFDVDs7QUFkRjtNQWdCRyxhQUFZO01BQ1osYUFBWTtNQUNaLHNCQUFxQixFQU10Qjs7QUFMQztRQW5CSDtVQW9CSyxjQUFhO1VBQ2IsWUFBVztVQUNYLGVBQWMsRUFFakIsRUFBQTs7QUFFSDtJQUNFLGtCQUFpQjtJQUNqQixTQUFRO0lBQ1IsVUFBUztJQUNULG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLGlCQUFnQixFQUNqQjs7QUFDRDtJQUNFLGdCQUFlO0lBQ2YsZUFBYztJQUNkLGlCQUFnQjtJQUNoQixTQUFRO0lBQ1IsVUFBUztJQUNULGtCQUFpQixFQUNsQjs7QUFDRDtJQUNFLGtCQUFpQjtJQUNqQixnQ0FBK0I7SUFDL0IsZUFBYztJQUNkLFNBQVE7SUFDUixVQUFTO0lBQ1QsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwgPiAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21peGlucy5zY3NzXCI7XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgJG1haW4tY29sb3I7XG59XG5cbi5zYW0tdGl0bGUge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiR0ZXh0LWNvbG9yOiAjNDk1MDU3O1xuJG1haW4tY29sb3I6ICMwMjdmZTY7XG4kYm9yZGVyLWNvbG9yOiAjYWFhOWE5O1xuJHNoYWRvdy1jb2xvcjogIzg4ODg4ODZlO1xuJGJsYWNrOiAjMDAwMDAwOyBcbiR3aGl0ZTogI2ZmZmZmZjtcbiRyZWQ6ICNmYzAzMDM7IFxuIiwiQG1peGluIGJhc2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbkBtaXhpbiBwc2V1ZG8tYm9yZGVyIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxufVxuXG4uY29sLXNtLTYge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2FyZC1saW5rIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uZGF0ZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vY29tcG9uZW50cy5jb21wb25lbnQuc2Nzcyc7XG5cbi5zYW0tY2FyZCB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcblxuICAmLS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCAjODg4ODg4NmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlcidcbiAgICAgICdib2R5IGJvZHkgYm9keSBib2R5IGJvZHkgYm9keSdcbiAgICAgICdmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3Rlcic7XG4gICAgJltpbWdzcmM9XCJ0cnVlXCJde1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2ltZyBpbWcgaW1nIGltZyBpbWcgaW1nJ1xuICAgICAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXInXG4gICAgICAgICdib2R5IGJvZHkgYm9keSBib2R5IGJvZHkgYm9keSdcbiAgICAgICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyJztcbiAgICB9XG4gICAgJltwbGFjZW1lbnQ9XCJsZWZ0XCJde1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2ltZyBpbWcgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJ1xuICAgICAgICAnaW1nIGltZyBib2R5IGJvZHkgYm9keSBib2R5J1xuICAgICAgICAnaW1nIGltZyBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXInO1xuICAgICAgICBtYXgtd2lkdGg6IC13ZWJraXQtbWluLWNvbnRlbnQ7XG4gICAgICAgIG1heC13aWR0aDogLW1vei1taW4tY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDU3NXB4KXtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgJ2ltZyBpbWcgaW1nIGltZyBpbWcgaW1nJ1xuICAgICAgICAgICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJ1xuICAgICAgICAgICAgJ2JvZHkgYm9keSBib2R5IGJvZHkgYm9keSBib2R5J1xuICAgICAgICAgICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZbcGxhY2VtZW50PVwicmlnaHRcIl17XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGltZyBpbWcgJ1xuICAgICAgICAnYm9keSBib2R5IGJvZHkgYm9keSBpbWcgaW1nJ1xuICAgICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGltZyBpbWcnO1xuICAgICAgICBtYXgtd2lkdGg6IC13ZWJraXQtbWluLWNvbnRlbnQ7XG4gICAgICAgIG1heC13aWR0aDogLW1vei1taW4tY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDU3NXB4KXtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgJ2ltZyBpbWcgaW1nIGltZyBpbWcgaW1nJ1xuICAgICAgICAgICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJ1xuICAgICAgICAgICAgJ2JvZHkgYm9keSBib2R5IGJvZHkgYm9keSBib2R5J1xuICAgICAgICAgICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZbcGxhY2VtZW50PVwiYm90dG9tXCJde1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJ1xuICAgICAgICAnYm9keSBib2R5IGJvZHkgYm9keSBib2R5IGJvZHknXG4gICAgICAgICdmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlcidcbiAgICAgICAgJ2ltZyBpbWcgaW1nIGltZyBpbWcgaW1nJztcbiAgICB9XG4gIH1cblxuICAmLS1pbWcge1xuICAgIGdyaWQtYXJlYTogaW1nO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpbWd7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICAgICZbcGxhY2VtZW50PVwibGVmdFwiXSwgJltwbGFjZW1lbnQ9XCJyaWdodFwiXXtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA1NzVweCl7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBncmlkLWFyZWE6IGltZztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi0taGVhZGVye1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgJi0tYm9keXtcbiAgICBncmlkLWFyZWE6IGJvZHk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDE2cHg7XG4gIH1cbiAgJi0tZm9vdGVye1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODg4ODg4NmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent, CardsHeaderComponent, CardsBodyComponent, CardsFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsHeaderComponent", function() { return CardsHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsBodyComponent", function() { return CardsBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsFooterComponent", function() { return CardsFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('imgSrc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardsComponent.prototype, "imgSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('placement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardsComponent.prototype, "placement", void 0);
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-card',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/components/cards/cards.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-card]': 'true' },
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/components/cards/cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());

var CardsHeaderComponent = /** @class */ (function () {
    function CardsHeaderComponent() {
    }
    CardsHeaderComponent.prototype.ngOnInit = function () {
    };
    CardsHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-header',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-card--header]': 'true' },
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/components/cards/cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsHeaderComponent);
    return CardsHeaderComponent;
}());

var CardsBodyComponent = /** @class */ (function () {
    function CardsBodyComponent() {
    }
    CardsBodyComponent.prototype.ngOnInit = function () {
    };
    CardsBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-body',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-card--body]': 'true' },
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/components/cards/cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsBodyComponent);
    return CardsBodyComponent;
}());

var CardsFooterComponent = /** @class */ (function () {
    function CardsFooterComponent() {
    }
    CardsFooterComponent.prototype.ngOnInit = function () {
    };
    CardsFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-footer',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-card--footer]': 'true' },
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/components/cards/cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsFooterComponent);
    return CardsFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/cards.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/cards/cards.module.ts ***!
  \**************************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.component */ "./src/app/components/cards/cards.component.ts");




var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsHeaderComponent"],
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsBodyComponent"],
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsFooterComponent"]
            ],
            exports: [
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsHeaderComponent"],
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsBodyComponent"],
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsFooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<label class=\"sam-checkbox--label\" [for]=\"field_id\">{{label}}</label>"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-checkbox-wrapper {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  min-height: 32px; }\n\n.sam-checkbox--field {\n  cursor: pointer;\n  position: absolute;\n  position: absolute;\n  opacity: 0; }\n\n.sam-checkbox--field:focus + .sam-checkbox--label::before {\n    outline: 2px solid #027fe66b; }\n\n.sam-checkbox--field:disabled + .sam-checkbox--label {\n    color: #aaa9a9;\n    cursor: not-allowed; }\n\n.sam-checkbox--field:disabled + .sam-checkbox--label::before {\n      background: #aaa9a9; }\n\n.sam-checkbox--field[checked=\"true\"] + .sam-checkbox--label::before {\n    border: 2px solid #027fe6; }\n\n.sam-checkbox--field[checked=\"true\"] + .sam-checkbox--label::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: calc(50% - 16px - 3px);\n    left: -16px;\n    width: 64px;\n    height: 32px;\n    border-bottom: 6px solid #027fe6;\n    border-left: 6px solid #027fe6;\n    -webkit-transform: rotate(-45deg) scale(0.4, 0.4);\n    transform: rotate(-45deg) scale(0.4, 0.4); }\n\n.sam-checkbox--label {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  left: 0px;\n  margin: 0px;\n  line-height: 2;\n  padding-left: 40px;\n  transition: all ease-in-out 0.25s; }\n\n.sam-checkbox--label::before {\n    transition: all ease-in-out 0.25s;\n    content: '';\n    display: block;\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    top: calc(50% - 16px);\n    left: 0px;\n    margin-bottom: 0px;\n    border: 1px solid #aaa9a9;\n    background: white; }\n\n.sam-checkbox--label::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: calc(50% - 16px - 3px);\n    left: -16px;\n    width: 64px;\n    height: 32px;\n    -webkit-transform: rotate(-45deg) scale(0.4, 0.4);\n    transform: rotate(-45deg) scale(0.4, 0.4);\n    transition: all ease-in-out 0.25s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSwyQkNaa0IsRURhbkI7O0FBRUQ7RUVmRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VGYWhCLGVDbEJrQjtFRG1CbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FHVUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUM5Q0M7RUFDRSxnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFdBQVUsRUFnQ1g7O0FBcENBO0lBT0ssNkJBQTRCLEVBQzdCOztBQVJKO0lBV0csZUFBYztJQUNkLG9CQUFtQixFQUlwQjs7QUFoQkY7TUFjSyxvQkFBbUIsRUFDcEI7O0FBZko7SUFvQkssMEJBQXlCLEVBQzFCOztBQXJCSjtJQXVCSyxZQUFXO0lBQ1gsZUFBYztJQUNkLG1CQUFrQjtJQUNsQiw0QkFBMkI7SUFDM0IsWUFBVztJQUNYLFlBQVc7SUFDWCxhQUFZO0lBQ1osaUNBQWdDO0lBQ2hDLCtCQUE4QjtJQUM5QixrREFBZ0Q7SUFDaEQsMENBQXdDLEVBQ3pDOztBQUdMO0VGN0NBLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUUyQ2QsZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxZQUFXO0VBQ1gsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixrQ0FBaUMsRUEwQmxDOztBQW5DQTtJQVdHLGtDQUFpQztJQUNqQyxZQUFXO0lBQ1gsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsYUFBWTtJQUNaLHNCQUFxQjtJQUNyQixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLDBCQUF5QjtJQUN6QixrQkFBaUIsRUFDbEI7O0FBdEJGO0lBd0JHLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLDRCQUEyQjtJQUMzQixZQUFXO0lBQ1gsWUFBVztJQUNYLGFBQVk7SUFDWixrREFBZ0Q7SUFDaEQsMENBQXdDO0lBQ3hDLGtDQUFpQyxFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLnNhbS1jaGVja2JveCB7XG4gICYtd3JhcHBlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICB9XG4gICYtLWZpZWxkeyAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgICY6Zm9jdXMgKyAuc2FtLWNoZWNrYm94LS1sYWJlbHtcbiAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICMwMjdmZTY2YjtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpkaXNhYmxlZCArIC5zYW0tY2hlY2tib3gtLWxhYmVse1xuICAgICAgY29sb3I6ICNhYWE5YTk7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgJjo6YmVmb3Jle1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhOWE5O1xuICAgICAgfVxuICAgIH1cblxuICAgICZbY2hlY2tlZD1cInRydWVcIl0gKyAuc2FtLWNoZWNrYm94LS1sYWJlbHtcbiAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAyN2ZlNjtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE2cHggLSAzcHgpO1xuICAgICAgICBsZWZ0OiAtMTZweDtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICMwMjdmZTY7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAyN2ZlNjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNCwwLjQpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNCwwLjQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLS1sYWJlbHtcbiAgICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjI1cztcbiAgICAmOjpiZWZvcmV7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4yNXM7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTZweCk7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhOWE5O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgICY6OmFmdGVye1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAxNnB4IC0gM3B4KTtcbiAgICAgIGxlZnQ6IC0xNnB4O1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMC40LDAuNCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNCwwLjQpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMjVzO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxComponentWrapper, CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponentWrapper", function() { return CheckboxComponentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxComponentWrapper = /** @class */ (function () {
    function CheckboxComponentWrapper() {
    }
    CheckboxComponentWrapper.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponentWrapper.prototype, "field_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxComponentWrapper.prototype, "label", void 0);
    CheckboxComponentWrapper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/components/checkbox/checkbox.component.html"),
            host: { '[class.sam-checkbox-wrapper]': 'true' },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/components/checkbox/checkbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponentWrapper);
    return CheckboxComponentWrapper;
}());

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.default = true;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-checkbox--field'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "default", void 0);
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sam-checkbox]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1 class=\"sam-title\">Custom Components</h1>\n  <p class=\"lead\">These are all custom components, styled and built myself.</p>\n  <p class=\"lead\">Feel free to checkout my github page in the footer below to use any components or styles</p>\n</div>\n<sam-documentation>\n  <documentation-header>CTA'S</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row  p-4\">\n        <div class=\"col-sm-4 p-1 text-center\">\n          <button sam-cta>Primary</button>\n        </div>\n        <div class=\"col-sm-4 p-1 text-center\">\n          <button sam-cta type=\"secondary\">Secondary</button>\n        </div>\n        <div class=\"col-sm-4 p-1 text-center\">\n          <button sam-cta type=\"tertiary\">Tertiary</button>\n        </div>\n      </div>\n      <div class=\"row  p-4\">\n        <div class=\"col-sm-4 p-1 text-center\">\n          <button sam-cta small=\"true\">Primary small</button>\n        </div>\n        <div class=\"col-sm-4 p-1 text-center\">\n          <button sam-cta small=\"true\" type=\"secondary\">Secondary small</button>\n        </div>\n        <div class=\"col-sm-4 p-1 text-center\">\n          <button sam-cta small=\"true\" type=\"tertiary\">Tertiary small</button>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n<sam-documentation>\n  <documentation-header>Inputs</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <sam-input-wrapper field_id=\"userName\" label=\"User name\">\n            <input sam-input id=\"userName\" aria-label=\"Please enter your user name to register\" />\n          </sam-input-wrapper>\n        </div>\n        <div class=\"col-sm-4\">\n          <sam-input-wrapper field_id=\"password\" label=\"Password\">\n            <input sam-input id=\"password\" type=\"password\" aria-label=\"Please enter your password to register\" />\n          </sam-input-wrapper>\n        </div>\n        <div class=\"col-sm-4\">\n          <sam-input-wrapper field_id=\"disabled\" label=\"Disabled\">\n            <input sam-input id=\"disabled\" [disabled]=\"disabled\" aria-label=\"Please enter your password to register\" />\n          </sam-input-wrapper>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n        </div>\n        <div class=\"col-sm-4\">\n        </div>\n        <div class=\"col-sm-4 pb-2\">\n          <button sam-cta (click)=\"disabled=!disabled\">Toggle</button>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n<sam-documentation>\n  <documentation-header>Checkbox</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"pb-1 pt-1 col-sm-4\" style=\"margin: auto 0;\">\n          <sam-checkbox label=\"Agree to terms and conditions\" field_id=\"checkbox\">\n            <input sam-checkbox id=\"checkbox\" [attr.checked]=\"checkVal1 === true ? true : null\" type=\"checkbox\"\n              (click)=\"checkVal1 = !checkVal1\" (keydown.enter)=\"checkVal1 = !checkVal1\"\n              aria-label=\"Please check here to agree to terms and conditions\" />\n          </sam-checkbox>\n        </div>\n        <div class=\"pb-1 pt-1 col-sm-4\" style=\"margin: auto 0;\">\n          <sam-checkbox\n            label=\"This is a super long wrapping label to show placement of checkbox and label when text wraps\"\n            field_id=\"checkbox2\">\n            <input sam-checkbox id=\"checkbox2\" [attr.checked]=\"checkVal2 === true ? true : null\" type=\"checkbox\"\n              (click)=\"checkVal2 = !checkVal2\" (keydown.enter)=\"checkVal2 = !checkVal2\"\n              aria-label=\"Please check here to agree to terms and conditions\" />\n          </sam-checkbox>\n        </div>\n        <div class=\"pb-1 pt-1 col-sm-4\" style=\"margin: auto 0;\">\n          <sam-checkbox label=\"I am a disabled checkbox\" field_id=\"checkbox3\">\n            <input sam-checkbox id=\"checkbox3\" [attr.checked]=\"checkVal3 === true ? true : null\" disabled=\"true\"\n              type=\"checkbox\" (click)=\"checkVal3 = !checkVal3\" (keydown.enter)=\"checkVal3 = !checkVal3\"\n              aria-label=\"Please check here to agree to terms and conditions\" />\n          </sam-checkbox>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n\n<sam-documentation>\n  <documentation-header>Toggle</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"pb-1 pt-1 col-sm-4\" style=\"margin: auto 0;\">\n          <sam-toggle label=\"Lock Credit Card\" field_id=\"toggle1\">\n            <input sam-toggle id=\"toggle1\" [attr.checked]=\"toggleVal1 === true ? true : null\" type=\"checkbox\"\n              role=\"switch\" (click)=\"toggleVal1 = !toggleVal1\" aria-label=\"Lock credit card toggle switch\" />\n          </sam-toggle>\n        </div>\n        <div class=\"pb-1 pt-1 col-sm-4\" style=\"margin: auto 0;\">\n          <sam-toggle label=\"Long wrapping label to show placement of toggle and label\" field_id=\"toggle2\">\n            <input sam-toggle id=\"toggle2\" [attr.checked]=\"toggleVal2 === true ? true : null\" type=\"checkbox\"\n              role=\"switch\" (click)=\"toggleVal2 = !toggleVal2\" aria-label=\"Lock credit card toggle switch\" />\n          </sam-toggle>\n        </div>\n        <div class=\"pb-1 pt-1 col-sm-4\" style=\"margin: auto 0;\">\n          <sam-toggle label=\"Disabled toggle\" field_id=\"toggle3\">\n            <input sam-toggle disabled=\"true\" id=\"toggle3\" [attr.checked]=\"toggleVal3 === true ? true : null\"\n              type=\"checkbox\" role=\"switch\" (click)=\"toggleVal3 = !toggleVal3\"\n              aria-label=\"Lock credit card toggle switch\" />\n          </sam-toggle>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n\n<sam-documentation>\n  <documentation-header>Radio Buttons</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"pb-1 pt-1 col-sm-6\">\n          <sam-radio-group #r1 groupLabel=\"Please select a gender\">\n            <sam-radio-btn id=\"male\" label=\"Male\">\n              <input type=\"radio\" id=\"male\" name=\"gender\" (click)=\"r1.check('male');\" value=\"male\" />\n            </sam-radio-btn>\n            <sam-radio-btn id=\"female\" label=\"Female\">\n              <input type=\"radio\" id=\"female\" name=\"gender\" (click)=\"r1.check('female');\" value=\"female\" />\n            </sam-radio-btn>\n            <sam-radio-btn id=\"other\" label=\"Other\">\n              <input type=\"radio\" id=\"other\" name=\"gender\" (click)=\"r1.check('other');\" value=\"other\" />\n            </sam-radio-btn>\n          </sam-radio-group>\n        </div>\n        <div class=\"pb-1 pt-1 col-sm-6\">\n          <sam-radio-group #r2 groupLabel=\"Please select the type of label you like\">\n            <sam-radio-btn id=\"short\" label=\"Short\">\n              <input type=\"radio\" id=\"short\" name=\"gender\" (click)=\"r2.check('short');\" value=\"short\" />\n            </sam-radio-btn>\n            <sam-radio-btn id=\"long\"\n              label=\"I like super super super super super super super super super super super super long labels\">\n              <input type=\"radio\" id=\"long\" name=\"gender\" (click)=\"r2.check('long');\" value=\"long\" />\n            </sam-radio-btn>\n            <sam-radio-btn id=\"disabled\" label=\"Disabled labels\" [disabled]=\"true\">\n              <input type=\"radio\" id=\"disabled\" name=\"gender\" disabled (click)=\"r2.check('disabled');\"\n                value=\"disabled\" />\n            </sam-radio-btn>\n          </sam-radio-group>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n<sam-documentation>\n  <documentation-header>Tooltips</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 text-center\">\n          <sam-tooltip tooltipLabel=\"Default tooltip\" tooltipAriaLabel=\"This is a default tooltip\">\n            Lorem ipsum dolor sit amet\n          </sam-tooltip>\n        </div>\n        <div class=\"col-sm-6 text-center\">\n          <sam-tooltip tooltipAriaLabel=\"This is a tooltip with a long wrapping label\"\n            tooltipLabel=\"Super long long long long long long wrapping label\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n            dolore\n          </sam-tooltip>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n<sam-documentation>\n  <documentation-header>Modal Windows</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"p-5 col-sm-12 text-center\">\n          <button (click)=\"modal.open();\" sam-cta>Open Modal</button>\n          <sam-modal #modal>\n            <sam-modal-header>Sign Up Modal Example</sam-modal-header>\n            <sam-modal-body>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <sam-input-wrapper field_id=\"modalName\" label=\"User name\">\n                      <input sam-input id=\"modalName\" aria-label=\"Please enter your user name to register\" />\n                    </sam-input-wrapper>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <sam-input-wrapper field_id=\"modalPW\" label=\"Password\">\n                      <input sam-input id=\"modalPW\" type=\"password\"\n                        aria-label=\"Please enter your password to register\" />\n                    </sam-input-wrapper>\n                  </div>\n                </div>\n\n                <sam-radio-group #r3 groupLabel=\"Please select a gender\">\n                  <sam-radio-btn id=\"male\" label=\"Male\">\n                    <input type=\"radio\" id=\"male\" name=\"gender\" (click)=\"r3.check('male');\" value=\"male\" />\n                  </sam-radio-btn>\n                  <sam-radio-btn id=\"female\" label=\"Female\">\n                    <input type=\"radio\" id=\"female\" name=\"gender\" (click)=\"r3.check('female');\" value=\"female\" />\n                  </sam-radio-btn>\n                  <sam-radio-btn id=\"other\" label=\"Other\">\n                    <input type=\"radio\" id=\"other\" name=\"gender\" (click)=\"r3.check('other');\" value=\"other\" />\n                  </sam-radio-btn>\n                </sam-radio-group>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-12 pt-3 pb-3\">\n                    <sam-checkbox label=\"Agree to terms and conditions\" field_id=\"modalCheckbox\">\n                      <input sam-checkbox id=\"modalCheckbox\" [attr.checked]=\"toggleVal4 === true ? true : null\"\n                        type=\"checkbox\" (click)=\"toggleVal4 = !toggleVal4\" (keydown.enter)=\"toggleVal4 = !toggleVal4\"\n                        aria-label=\"Please check here to agree to terms and conditions\" />\n                    </sam-checkbox>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"></div>\n                  <div class=\"col-sm-3\">\n                    <button (click)=\"modal.close();\" sam-cta>Save</button>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <button (click)=\"modal.close();\" sam-cta>Cancel</button>\n                  </div>\n                  <div class=\"col-sm-3\"></div>\n                </div>\n              </div>\n            </sam-modal-body>\n            <sam-modal-footer>\n              <div class=\"card-footer text-muted\">\n                <div class=\"row\">\n                  <div class=\"col-sm-10\">\n                    <a class=\"card-link\" target=\"_blank\"\n                      href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n                    <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n                    <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n                  </div>\n                  <div class=\"col-sm-2\">\n                    <span class=\"date\">{{date | date:'MM-dd-yyyy'}}</span>\n                  </div>\n                </div>\n              </div>\n            </sam-modal-footer>\n          </sam-modal>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n<sam-documentation>\n  <documentation-header>Cards</documentation-header>\n  <documentation-body>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <sam-card>\n          <card-header>\n            Default Card\n          </card-header>\n          <card-body>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore\n              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n              commodo\n              consequat.\n            </p>\n            <p>\n              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n              id\n              est\n              laborum.\n            </p>\n          </card-body>\n          <card-footer>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n          </card-footer>\n        </sam-card>\n      </div>\n      <div class=\"col-sm-6\">\n        <sam-card imgSrc=\"http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg\">\n          <card-header>\n            With Image\n          </card-header>\n          <card-body>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore\n              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n              commodo\n              consequat.\n            </p>\n          </card-body>\n          <card-footer>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n          </card-footer>\n        </sam-card>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <sam-card placement=\"left\" imgSrc=\"http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg\">\n          <card-header>\n            Placement Left\n          </card-header>\n          <card-body>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore\n              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n              commodo\n              consequat.\n            </p>\n          </card-body>\n          <card-footer>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n          </card-footer>\n        </sam-card>\n      </div>\n      <div class=\"col-sm-12\">\n        <sam-card placement=\"right\" imgSrc=\"http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg\">\n          <card-header>\n            Placement Right\n          </card-header>\n          <card-body>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore\n              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n              commodo\n              consequat.\n            </p>\n          </card-body>\n          <card-footer>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n          </card-footer>\n        </sam-card>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <sam-card placement=\"bottom\" imgSrc=\"http://robertwimer.com/wp-content/uploads/2018/06/Matrix-Code.jpg\">\n          <card-header>\n            Placement Bottom\n          </card-header>\n          <card-body>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore\n              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n              commodo\n              consequat.\n            </p>\n          </card-body>\n          <card-footer>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n            <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n          </card-footer>\n        </sam-card>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>\n\n<sam-documentation>\n  <documentation-header>Date Picker</documentation-header>\n  <documentation-body>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h2>Standard datepicker</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <sam-datepicker [(date)]=\"selectedDate\"></sam-datepicker>\n        </div>\n        <div class=\"col-sm-6\">\n          <pre>\n    Model: &#123;\t\n      Year: {{selectedDate | date: 'yyyy'}}\n      Month: {{selectedDate | date: 'MM'}}\n      Day: {{selectedDate | date: 'dd'}}\n      Date: {{selectedDate | date: 'fullDate'}}\n    &#125;\t\n            </pre>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h2>Range datepicker</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <pre>\n      Model: &#123;\t\n      From:\n        Year: {{selectedFromDate | date: 'yyyy'}}\n        Month: {{selectedFromDate | date: 'MM'}}\n        Day: {{selectedFromDate | date: 'dd'}}\n        Date: {{selectedFromDate | date: 'fullDate'}}\n\n      To:\n        Year: {{selectedToDate | date: 'yyyy'}}\n        Month: {{selectedToDate | date: 'MM'}}\n        Day: {{selectedToDate | date: 'dd'}}\n        Date: {{selectedToDate | date: 'fullDate'}}\n      &#125;\t\n              </pre>\n        </div>\n        <div class=\"col-sm-6\">\n          <sam-datepicker-range [(fromDate)]=\"selectedFromDate\" [(toDate)]=\"selectedToDate\"></sam-datepicker-range>\n        </div>\n      </div>\n    </div>\n  </documentation-body>\n</sam-documentation>"

/***/ }),

/***/ "./src/app/components/components.component.scss":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSwyQkNaa0IsRURhbkI7O0FBRUQ7RUVmRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VGYWhCLGVDbEJrQjtFRG1CbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FHVUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsID4gKiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xufVxuXG4uc2FtLXRpdGxlIHtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkdGV4dC1jb2xvcjogIzQ5NTA1NztcbiRtYWluLWNvbG9yOiAjMDI3ZmU2O1xuJGJvcmRlci1jb2xvcjogI2FhYTlhOTtcbiRzaGFkb3ctY29sb3I6ICM4ODg4ODg2ZTtcbiRibGFjazogIzAwMDAwMDsgXG4kd2hpdGU6ICNmZmZmZmY7XG4kcmVkOiAjZmMwMzAzOyBcbiIsIkBtaXhpbiBiYXNlLWZvbnQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG5AbWl4aW4gcHNldWRvLWJvcmRlciB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbn1cblxuLmNvbC1zbS02IHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhcmQtbGluayB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmRhdGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
        this.disabled = true;
        this.checkVal1 = false;
        this.checkVal2 = false;
        this.checkVal3 = false;
        this.toggleVal1 = false;
        this.toggleVal2 = false;
        this.toggleVal3 = false;
        this.toggleVal4 = false;
        this.maleChecked = false;
        this.selectedDate = new Date();
        this.selectedToDate = new Date();
        this.selectedFromDate = new Date();
        this.date = new Date();
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.scss */ "./src/app/components/components.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/cta/cta.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/cta/cta.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-btn {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  position: relative;\n  min-height: 52px;\n  min-width: 132px;\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #027fe65d;\n  border-radius: .25rem;\n  cursor: pointer; }\n\n.sam-btn:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 100%;\n    bottom: 0px;\n    left: 50%;\n    border-bottom: 2px solid #027fe6;\n    border-top: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.sam-btn:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 0;\n    top: 50%;\n    left: 0px;\n    border-left: 2px solid #027fe6;\n    border-right: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.sam-btn:focus {\n    outline: none;\n    box-shadow: 4px 4px 15px 0px #00000079; }\n\n.sam-btn:focus:before {\n      left: 0;\n      width: 100%;\n      border-radius: .25rem; }\n\n.sam-btn:focus:after {\n      top: 0px;\n      height: 100%;\n      border-radius: .25rem; }\n\n.sam-btn:hover {\n    outline: none;\n    box-shadow: 4px 4px 15px 0px #00000079; }\n\n.sam-btn:hover:before {\n      left: 0;\n      width: 100%;\n      border-radius: .25rem; }\n\n.sam-btn:hover:after {\n      top: 0px;\n      height: 100%;\n      border-radius: .25rem; }\n\n.sam-btn:active {\n    background: #027fe6;\n    color: white; }\n\n.sam-btn:disabled {\n    background: #f1f1f1;\n    cursor: not-allowed;\n    border: black; }\n\n.sam-btn--secondary {\n    background: #027fe6;\n    border: 0px;\n    color: #ffffff; }\n\n.sam-btn--secondary:before {\n      border-top: 2px solid #ffffff;\n      border-bottom: 2px solid #ffffff; }\n\n.sam-btn--secondary:after {\n      border-left: 2px solid #ffffff;\n      border-right: 2px solid #ffffff; }\n\n.sam-btn--secondary:active {\n      background: white;\n      color: #027fe6; }\n\n.sam-btn--small {\n    min-height: 21px;\n    padding: 4px 8px;\n    font-size: 0.75rem;\n    margin-left: 0; }\n\n.sam-btn--tertiary {\n    border: 0px;\n    line-height: 1;\n    padding: 4px 4px;\n    min-height: 0;\n    margin: 8px 12px;\n    margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9jdGEvY3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFLRDtFQUNFLDJCQ1prQixFRGFuQjs7QUFFRDtFRWZFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUZhaEIsZUNsQmtCO0VEbUJsQixnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUdVRDtFQUNFLGFBQVksRUFDYjs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQy9DRDtFRkRFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUVBaEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQiw0QkFBMkI7RUFDM0Isc0JBQXFCO0VBQ3JCLGdCQUFlLEVBcUVoQjs7QUEvRUQ7SURFSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixhQUFZO0lBQ1osWUFBVztJQUNYLFVBQVM7SUFDVCxpQ0ZUZ0I7SUVVaEIsOEJGVmdCO0lFV2hCLGlCQUFnQjtJQUVoQixpQ0FBZ0MsRUFDakM7O0FDYkg7SURlSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxVQUFTO0lBQ1QsU0FBUTtJQUNSLFVBQVM7SUFDVCwrQkZ0QmdCO0lFdUJoQixnQ0Z2QmdCO0lFd0JoQixpQkFBZ0I7SUFFaEIsaUNBQWdDLEVBQ2pDOztBQzFCSDtJQVlJLGNBQWE7SUFDYix1Q0FBc0MsRUFXdkM7O0FBeEJIO01BZU0sUUFBTTtNQUNOLFlBQVU7TUFDVixzQkFBcUIsRUFDdEI7O0FBbEJMO01Bb0JNLFNBQVE7TUFDUixhQUFXO01BQ1gsc0JBQXFCLEVBQ3RCOztBQXZCTDtJQTBCSSxjQUFhO0lBQ2IsdUNBQXNDLEVBV3ZDOztBQXRDSDtNQTZCTSxRQUFNO01BQ04sWUFBVTtNQUNWLHNCQUFxQixFQUN0Qjs7QUFoQ0w7TUFrQ00sU0FBUTtNQUNSLGFBQVc7TUFDWCxzQkFBcUIsRUFDdEI7O0FBckNMO0lBd0NJLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2I7O0FBMUNIO0lBNENJLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIsY0FBYSxFQUNkOztBQUNEO0lBQ0Usb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxlQUFjLEVBYWY7O0FBaEJBO01BS0csOEJBQTZCO01BQzdCLGlDQUFnQyxFQUNqQzs7QUFQRjtNQVNHLCtCQUE4QjtNQUM5QixnQ0FBK0IsRUFDaEM7O0FBWEY7TUFhRyxrQkFBaUI7TUFDakIsZUFBYyxFQUNmOztBQUVIO0lBQ0UsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsZUFBYyxFQUNmOztBQUNEO0lBQ0UsWUFBVztJQUNYLGVBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N0YS9jdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLnNhbS1idG4ge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQ7XG4gIEBpbmNsdWRlIHBzZXVkby1ib3JkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTJweDtcbiAgbWluLXdpZHRoOiAxMzJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI3ZmU2NWQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxNXB4IDBweCAjMDAwMDAwNzk7XG4gICAgJjpiZWZvcmV7XG4gICAgICBsZWZ0OjA7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB9XG4gIH1cbiAgJjpob3ZlcntcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTVweCAwcHggIzAwMDAwMDc5O1xuICAgICY6YmVmb3Jle1xuICAgICAgbGVmdDowO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgIHRvcDogMHB4O1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgfVxuICB9XG4gICY6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwMjdmZTY7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJvcmRlcjogYmxhY2s7XG4gIH1cbiAgJi0tc2Vjb25kYXJ5e1xuICAgIGJhY2tncm91bmQ6ICMwMjdmZTY7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgJjpiZWZvcmV7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZmZmZjtcbiAgICB9XG4gICAgJjphY3RpdmV7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiAjMDI3ZmU2O1xuICAgIH1cbiAgfVxuICAmLS1zbWFsbHsgICAgXG4gICAgbWluLWhlaWdodDogMjFweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAmLS10ZXJ0aWFyeXtcbiAgICBib3JkZXI6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwYWRkaW5nOiA0cHggNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiA4cHggMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/cta/cta.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/cta/cta.component.ts ***!
  \*************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CtaComponent = /** @class */ (function () {
    function CtaComponent(elRef, render) {
        this.elRef = elRef;
        this.render = render;
        this.type = 'primary';
        this.small = false;
    }
    CtaComponent.prototype.ngOnInit = function () {
        if (this.type === 'secondary') {
            this.render.addClass(this.elRef.nativeElement, 'sam-btn--secondary');
        }
        else if (this.type === 'tertiary') {
            this.render.addClass(this.elRef.nativeElement, 'sam-btn--tertiary');
        }
    };
    CtaComponent.prototype.onHover = function () {
        var ua = navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
            this.elRef.nativeElement.click();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-btn'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CtaComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-btn--small'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CtaComponent.prototype, "small", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CtaComponent.prototype, "onHover", null);
    CtaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[sam-cta]',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./cta.component.scss */ "./src/app/components/cta/cta.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CtaComponent);
    return CtaComponent;
}());



/***/ }),

/***/ "./src/app/components/datepicker/datepicker-range.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker-range.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"sam-date-wrapper\">\n    <input type=\"string\" class=\"sam-date-input\" [value]=\"selectedDate | date : 'EEE, MMM dd, yyyy'\" (change)=\"onChange();\"\n      (click)=\"clicked();\" />\n    <img class=\"datepicker-icon\" src=\"assets/calendar.png\" tabindex=\"0\" role=\"button\" (keydown.enter)=\"clicked();\"\n      (keydown.space)=\"clicked();\" (click)=\"clicked();\"\n      aria-label=\"Open datepicker\"\n      role=\"checkbox\"\n      [attr.aria-checked]=\"open\" />\n  </span>\n  <div class=\"sam-datepicker\" [attr.open]=\"open\">\n    <div class=\"sam-datepicker--header\">\n      <button id=\"navigateLeft\" class=\"sam-datepicker--header__left\" tabindex=\"0\" aria-describedby=\"navigateLeft dateView\" (click)=\"selectLeft();\" >\n          <span class=\"sr-only\">Navigate left button</span>\n        &lt;\n      </button>\n      <button id=\"datePickerView\" aria-describedby=\"dateView datePickerView\" class=\"sam-datepicker--header__date\" (click)=\"changeView();\">\n        <span class=\"sr-only\">Click to change the datepicker view</span>\n        <span id=\"dateView\" *ngIf=\"view == 0\">{{ date | date: 'MMM' }}</span>\n        <span id=\"dateView\" *ngIf=\"view == 1\">{{ date | date: 'yyyy' }}</span>\n        <span id=\"dateView\" *ngIf=\"view == 2\">{{years[0] | date: 'yyyy'}} - {{years[11] | date: 'yyyy'}}</span>\n      </button>\n      <button id=\"navigateRight\" class=\"sam-datepicker--header__right\" aria-describedby=\"dateView navigateRight\" tabindex=\"0\" (click)=\"selectRight();\" >\n          <span class=\"sr-only\">Navigate right button</span>\n        &gt;\n      </button>\n    </div>\n    <div *ngIf=\"view == 0\" class=\"sam-datepicker--header\">\n      <span class=\"sam-datepicker--header__day\">Sun</span>\n      <span class=\"sam-datepicker--header__day\">Mon</span>\n      <span class=\"sam-datepicker--header__day\">Tue</span>\n      <span class=\"sam-datepicker--header__day\">Wed</span>\n      <span class=\"sam-datepicker--header__day\">Thu</span>\n      <span class=\"sam-datepicker--header__day\">Fri</span>\n      <span class=\"sam-datepicker--header__day\">Sat</span>\n    </div>\n    <div *ngIf=\"view == 0\" class=\"sam-datepicker--body\">\n      <div *ngFor=\"let w of weeks; let i = index;\" class=\"sam-datepicker--week\">\n        <button *ngFor=\"let d of getDaysFromWeek(i);\" class=\"sam-datepicker--week__d\" (click)=\"selectDate(d);\"\n          [id]=\"d\"\n          (keydown)=\"onKeyDown($event, d)\"\n          [tabindex]=\"wasLastSelected(d) ? 0 : -1\"\n          [attr.aria-checked]=\"dSelected(d)\"\n          role=\"checkbox\"\n          [attr.selectedDate]=\"dSelected(d)\"\n          [attr.inRange]=\"inRange(d)\"\n          [attr.aria-label]=\"d | date: 'fullDate'\"\n          [attr.notInMonth]=\"d.getMonth() !== date.getMonth()\">{{d | date: 'dd'}}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"view == 1\" class=\"sam-datepicker--body\">\n      <button [id]=\"d\" *ngFor=\"let d of months\" class=\"sam-datepicker--week__m\" (click)=\"selectDate(d);\"\n        [attr.aria-checked]=\"d.getMonth() === selectedDate.getMonth() && d.getFullYear() === selectedDate.getFullYear()\"\n        [attr.selectedDate]=\"d.getMonth() === selectedDate.getMonth() && d.getFullYear() === selectedDate.getFullYear()\"\n        [attr.aria-label]=\"d | date: 'fullDate'\">{{d | date: 'MMM'}}\n      </button>\n    </div>\n    <div *ngIf=\"view == 2\" class=\"sam-datepicker--body\">\n      <button *ngFor=\"let d of years\" class=\"sam-datepicker--week__y\" (click)=\"selectDate(d);\"\n        [attr.selectedDate]=\"d.getFullYear() === selectedDate.getFullYear()\"\n        [attr.aria-label]=\"d | date: 'fullDate'\">{{d | date: 'yyyy'}}\n      </button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker-range.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker-range.component.ts ***!
  \*********************************************************************/
/*! exports provided: DatePickerRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerRangeComponent", function() { return DatePickerRangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateView;
(function (DateView) {
    DateView[DateView["days"] = 0] = "days";
    DateView[DateView["months"] = 1] = "months";
    DateView[DateView["years"] = 2] = "years";
})(DateView || (DateView = {}));
var DatePickerRangeComponent = /** @class */ (function () {
    function DatePickerRangeComponent() {
        this.selectedFromDate = new Date();
        this.fromDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedToDate = new Date();
        this.toDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.date = new Date();
        this.open = false;
        this.weeks = [];
        this.weekDays = [];
        this.years = [];
        this.months = [];
        this.view = DateView.days;
    }
    DatePickerRangeComponent.prototype.ngOnInit = function () {
        this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
        this.initYears(this.date);
        this.initMonths(this.date);
        this.lastSelectedDate = this.date;
        this.selectingDate = 0;
    };
    DatePickerRangeComponent.prototype.initYears = function (start) {
        this.years = [];
        var year = -6;
        for (var i = 0; i < 12; i++) {
            this.years.push(new Date(start.getFullYear() + year, 0, 1));
            year++;
        }
    };
    DatePickerRangeComponent.prototype.initMonths = function (year) {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            this.months.push(new Date(year.getFullYear(), i, 1));
        }
    };
    DatePickerRangeComponent.prototype.getWeeksInMonth = function (month, year) {
        this.weeks = [];
        var firstDate = new Date(year, month, 1), lastDate = new Date(year, month + 1, 0), numDays = lastDate.getDate();
        var weekNum = 0;
        var start = 0;
        var end = 7 - firstDate.getDay();
        while (start <= numDays) {
            var week = [];
            for (var i = 0; i < 7; i++) {
                var day = new Date(this.date.getFullYear(), this.date.getMonth(), (start + i));
                if (weekNum == 0) {
                    day = new Date(this.date.getFullYear(), this.date.getMonth(), (start + i) - (firstDate.getDay() - 1));
                }
                week.push(day);
            }
            this.weeks.push(week);
            start = end + 1;
            end = end + 7;
            if (end > numDays)
                end = numDays;
            weekNum++;
        }
        return this.weeks;
    };
    DatePickerRangeComponent.prototype.clicked = function () {
        this.open = !this.open;
    };
    DatePickerRangeComponent.prototype.onChange = function () {
        if (this.selectingDate === 0) {
            this.selectingDate = 1;
            this.fromDateChange.emit(this.selectedFromDate);
        }
        else if (this.selectingDate === 1) {
            this.selectingDate = 0;
            this.toDateChange.emit(this.selectedToDate);
        }
    };
    DatePickerRangeComponent.prototype.selectLeft = function () {
        if (this.view === DateView.days) {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, this.date.getDate());
            this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
            this.onChange();
        }
        else if (this.view === DateView.months) {
            this.date = new Date(this.date.getFullYear() - 1, 0, 1);
            this.initMonths(this.date);
        }
        else if (this.view === DateView.years) {
            this.date = new Date(this.date.getFullYear() - 7, 0, 1);
            this.initYears(this.date);
        }
    };
    DatePickerRangeComponent.prototype.selectRight = function () {
        if (this.view === DateView.days) {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate());
            this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
            this.onChange();
        }
        else if (this.view === DateView.months) {
            this.date = new Date(this.date.getFullYear() + 1, 0, 1);
            this.onChange();
        }
        else if (this.view === DateView.years) {
            this.date = new Date(this.date.getFullYear() + 7, 0, 1);
            this.initYears(this.date);
        }
    };
    DatePickerRangeComponent.prototype.selectDate = function (d) {
        var _this = this;
        this.date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
        this.initYears(this.date);
        this.initMonths(this.date);
        if (this.view === DateView.months) {
            this.view = DateView.days;
        }
        else if (this.view === DateView.years) {
            this.view = DateView.months;
        }
        else {
            if (this.selectingDate == 0) {
                this.selectedFromDate = this.date;
            }
            else {
                this.selectedToDate = this.date;
            }
            this.onChange();
            this.open = false;
        }
        this.lastSelectedDate = this.date;
        setTimeout(function () {
            document.getElementById('' + _this.lastSelectedDate).focus();
        }, 0);
    };
    DatePickerRangeComponent.prototype.getDaysFromWeek = function (week) {
        return this.weekDays[week];
    };
    DatePickerRangeComponent.prototype.changeView = function () {
        if (this.view === DateView.days) {
            this.view = DateView.months;
        }
        else if (this.view === DateView.months) {
            this.view = DateView.years;
        }
    };
    DatePickerRangeComponent.prototype.wasLastSelected = function (d) {
        return d.getDate() === this.lastSelectedDate.getDate() && d.getMonth() === this.lastSelectedDate.getMonth();
    };
    DatePickerRangeComponent.prototype.onKeyDown = function ($event, date) {
        var _this = this;
        var newFocusedId;
        switch ($event.key) {
            case 'ArrowDown':
            case 'Down':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
                break;
            case 'ArrowUp':
            case 'Up':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
                break;
            case 'ArrowLeft':
            case 'Left':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
                break;
            case 'ArrowRight':
            case 'Right':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                break;
        }
        if (newFocusedId && document.getElementById('' + newFocusedId)) {
            document.getElementById('' + newFocusedId).focus();
            this.lastSelectedDate = newFocusedId;
        }
        else if (newFocusedId) {
            if (newFocusedId < this.date) {
                this.selectLeft();
            }
            else {
                this.selectRight();
            }
            setTimeout(function () {
                _this.lastSelectedDate = newFocusedId;
                document.getElementById('' + newFocusedId).focus();
            }, 0);
        }
    };
    DatePickerRangeComponent.prototype.dSelected = function (d) {
        return (d.getDate() === this.selectedFromDate.getDate() && d.getMonth() === this.selectedFromDate.getMonth()) ||
            (d.getDate() === this.selectedToDate.getDate() && d.getMonth() === this.selectedToDate.getMonth());
    };
    DatePickerRangeComponent.prototype.inRange = function (d) {
        return (this.selectedFromDate <= d && d <= this.selectedToDate);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fromDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerRangeComponent.prototype, "selectedFromDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DatePickerRangeComponent.prototype, "fromDateChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('toDate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerRangeComponent.prototype, "selectedToDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DatePickerRangeComponent.prototype, "toDateChange", void 0);
    DatePickerRangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-datepicker-range',
            template: __webpack_require__(/*! ./datepicker-range.component.html */ "./src/app/components/datepicker/datepicker-range.component.html"),
            host: { 'class': 'sam-datepicker-component' },
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/components/datepicker/datepicker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatePickerRangeComponent);
    return DatePickerRangeComponent;
}());



/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"sam-date-wrapper\">\n  <input type=\"string\" class=\"sam-date-input\" [value]=\"selectedDate | date : 'EEE, MMM dd, yyyy'\" (change)=\"onChange();\"\n    (click)=\"clicked();\" />\n  <img class=\"datepicker-icon\" src=\"assets/calendar.png\" tabindex=\"0\" role=\"button\" (keydown.enter)=\"clicked();\"\n    (keydown.space)=\"clicked();\" (click)=\"clicked();\"\n    aria-label=\"Open datepicker\"\n    role=\"checkbox\"\n    [attr.aria-checked]=\"open\" />\n</span>\n<div class=\"sam-datepicker\" [attr.open]=\"open\">\n  <div class=\"sam-datepicker--header\">\n    <button id=\"navigateLeft\" class=\"sam-datepicker--header__left\" tabindex=\"0\" aria-describedby=\"navigateLeft dateView\" (click)=\"selectLeft();\" >\n        <span class=\"sr-only\">Navigate left button</span>\n      &lt;\n    </button>\n    <button id=\"datePickerView\" aria-describedby=\"dateView datePickerView\" class=\"sam-datepicker--header__date\" (click)=\"changeView();\">\n      <span class=\"sr-only\">Click to change the datepicker view</span>\n      <span id=\"dateView\" *ngIf=\"view == 0\">{{ date | date: 'MMM' }}</span>\n      <span id=\"dateView\" *ngIf=\"view == 1\">{{ date | date: 'yyyy' }}</span>\n      <span id=\"dateView\" *ngIf=\"view == 2\">{{years[0] | date: 'yyyy'}} - {{years[11] | date: 'yyyy'}}</span>\n    </button>\n    <button id=\"navigateRight\" class=\"sam-datepicker--header__right\" aria-describedby=\"dateView navigateRight\" tabindex=\"0\" (click)=\"selectRight();\" >\n        <span class=\"sr-only\">Navigate right button</span>\n      &gt;\n    </button>\n  </div>\n  <div *ngIf=\"view == 0\" class=\"sam-datepicker--header\">\n    <span class=\"sam-datepicker--header__day\">Sun</span>\n    <span class=\"sam-datepicker--header__day\">Mon</span>\n    <span class=\"sam-datepicker--header__day\">Tue</span>\n    <span class=\"sam-datepicker--header__day\">Wed</span>\n    <span class=\"sam-datepicker--header__day\">Thu</span>\n    <span class=\"sam-datepicker--header__day\">Fri</span>\n    <span class=\"sam-datepicker--header__day\">Sat</span>\n  </div>\n  <div *ngIf=\"view == 0\" class=\"sam-datepicker--body\">\n    <div *ngFor=\"let w of weeks; let i = index;\" class=\"sam-datepicker--week\">\n      <button *ngFor=\"let d of getDaysFromWeek(i);\" class=\"sam-datepicker--week__d\" (click)=\"selectDate(d);\"\n        [id]=\"d\"\n        (keydown)=\"onKeyDown($event, d)\"\n        [tabindex]=\"wasLastSelected(d) ? 0 : -1\"\n        [attr.aria-checked]=\"d.getDate() === selectedDate.getDate() && d.getMonth() === selectedDate.getMonth()\"\n        role=\"checkbox\"\n        [attr.selectedDate]=\"d.getDate() === selectedDate.getDate() && d.getMonth() === selectedDate.getMonth()\"\n        [attr.aria-label]=\"d | date: 'fullDate'\"\n        [attr.notInMonth]=\"d.getMonth() !== date.getMonth()\">{{d | date: 'dd'}}\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"view == 1\" class=\"sam-datepicker--body\">\n    <button [id]=\"d\" *ngFor=\"let d of months\" class=\"sam-datepicker--week__m\" (click)=\"selectDate(d);\"\n      [attr.aria-checked]=\"d.getMonth() === selectedDate.getMonth() && d.getFullYear() === selectedDate.getFullYear()\"\n      [attr.selectedDate]=\"d.getMonth() === selectedDate.getMonth() && d.getFullYear() === selectedDate.getFullYear()\"\n      [attr.aria-label]=\"d | date: 'fullDate'\">{{d | date: 'MMM'}}\n    </button>\n  </div>\n  <div *ngIf=\"view == 2\" class=\"sam-datepicker--body\">\n    <button *ngFor=\"let d of years\" class=\"sam-datepicker--week__y\" (click)=\"selectDate(d);\"\n      [attr.selectedDate]=\"d.getFullYear() === selectedDate.getFullYear()\"\n      [attr.aria-label]=\"d | date: 'fullDate'\">{{d | date: 'yyyy'}}\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-datepicker-component {\n  position: relative; }\n\n.sam-date-input::-webkit-datetime-edit, .sam-date-input::-webkit-datetime-edit-fields-wrapper, .sam-date-input::-webkit-datetime-edit-text, .sam-date-input::-webkit-datetime-edit-month-field, .sam-date-input::-webkit-datetime-edit-day-field, .sam-date-input::-webkit-datetime-edit-year-field, .sam-date-input::-webkit-inner-spin-button, .sam-date-input::-webkit-datepicker-picker-indicator {\n  display: none; }\n\ninput.sam-date-input {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  width: calc(100% - 50px);\n  height: 100%;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n  z-index: 2;\n  position: absolute; }\n\n.sam-date-wrapper {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  width: 280px;\n  height: 48px;\n  display: inline-block;\n  border: 1px solid #7a7a7a;\n  border-radius: 10px;\n  position: relative; }\n\n.sam-date-wrapper:active, .sam-date-wrapper :focus {\n    outline: none;\n    background-color: #e6e3e3; }\n\n.datepicker-icon {\n  display: inline-block;\n  box-sizing: content-box;\n  position: relative;\n  width: 46px;\n  height: 44px;\n  cursor: pointer;\n  border-left: 0px;\n  cursor: pointer;\n  z-index: 2;\n  background: white;\n  border-radius: 10px;\n  float: right; }\n\n.datepicker-icon:hover, .datepicker-icon:focus {\n    background-color: #e6e3e3;\n    border-radius: 10px; }\n\n.sam-datepicker {\n  position: absolute;\n  visibility: hidden;\n  width: 280px;\n  max-height: 0px;\n  border: 1px solid #7a7a7a;\n  border-radius: 10px;\n  padding-top: 48px;\n  top: 8px;\n  background-color: #ffffff;\n  z-index: 1;\n  transition: all ease-in-out 0.25s;\n  transition: all ease-in-out 0.25s; }\n\n.sam-datepicker * {\n    visibility: hidden; }\n\n.sam-datepicker--header {\n    width: 100%;\n    height: 32px;\n    background: #fcfafa;\n    border-radius: 10px; }\n\n.sam-datepicker--header__day {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    display: inline-block;\n    text-align: center;\n    width: 14.285%; }\n\n.sam-datepicker--header__left {\n    border: 0px;\n    outline: 0px;\n    padding: 0px;\n    background-color: transparent;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    text-align: center;\n    line-height: 2;\n    height: 32px;\n    display: inline-block;\n    color: #027fe6;\n    width: 28%;\n    cursor: pointer;\n    transition: background-color ease-in-out 0.25s; }\n\n.sam-datepicker--header__left:hover, .sam-datepicker--header__left:focus {\n      background-color: #e6e3e3; }\n\n.sam-datepicker--header__right {\n    border: 0px;\n    outline: 0px;\n    padding: 0px;\n    background-color: transparent;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    text-align: center;\n    line-height: 2;\n    height: 32px;\n    display: inline-block;\n    width: 28%;\n    color: #027fe6;\n    cursor: pointer;\n    transition: background-color ease-in-out 0.25s; }\n\n.sam-datepicker--header__right:hover, .sam-datepicker--header__right:focus {\n      background-color: #e6e3e3; }\n\n.sam-datepicker--header__date {\n    border: 0px;\n    outline: 0px;\n    padding: 0px;\n    background-color: transparent;\n    display: inline-block;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    text-align: center;\n    line-height: 2;\n    width: 44%;\n    height: 32px;\n    cursor: pointer;\n    color: #027fe6;\n    transition: background-color ease-in-out 0.25s; }\n\n.sam-datepicker--header__date:hover, .sam-datepicker--header__date:focus {\n      background-color: #e6e3e3; }\n\n.sam-datepicker--body {\n    display: block;\n    width: 100%; }\n\n.sam-datepicker--week {\n    display: block;\n    width: 100%;\n    height: 42px; }\n\n.sam-datepicker--week__y {\n      border: 0px;\n      outline: 0px;\n      padding: 0;\n      background-color: transparent;\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      color: #495057;\n      font-weight: 300;\n      line-height: 3.5;\n      height: 84px;\n      width: 25%;\n      cursor: pointer; }\n\n.sam-datepicker--week__y:hover, .sam-datepicker--week__y:focus {\n        background-color: #e6e3e3;\n        border-radius: 8px; }\n\n.sam-datepicker--week__y[selectedDate=\"true\"] {\n        background-color: #027fe6;\n        color: #ffffff;\n        border-radius: 8px; }\n\n.sam-datepicker--week__y[selectedDate=\"true\"]:focus {\n        background-color: #024175; }\n\n.sam-datepicker--week__y:focus {\n        border: 1px solid #001b31; }\n\n.sam-datepicker--week__m {\n      border: 0px;\n      outline: 0px;\n      padding: 0;\n      background-color: transparent;\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      color: #495057;\n      font-weight: 300;\n      line-height: 3.5;\n      height: 84px;\n      width: 25%;\n      cursor: pointer; }\n\n.sam-datepicker--week__m:hover, .sam-datepicker--week__m:focus {\n        background-color: #e6e3e3;\n        border-radius: 8px; }\n\n.sam-datepicker--week__m[selectedDate=\"true\"] {\n        background-color: #027fe6;\n        color: #ffffff;\n        border-radius: 8px; }\n\n.sam-datepicker--week__m[selectedDate=\"true\"]:focus {\n        background-color: #024175; }\n\n.sam-datepicker--week__m:focus {\n        border: 1px solid #001b31; }\n\n.sam-datepicker--week__d {\n      border: 0px;\n      outline: 0px;\n      padding: 0;\n      background-color: transparent;\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      color: #495057;\n      font-weight: 300;\n      line-height: 2.5;\n      display: inline-block;\n      width: 14.28%;\n      height: 100%;\n      text-align: center;\n      cursor: pointer;\n      border-radius: 8px;\n      transition: background-color ease-in-out 0.25s; }\n\n.sam-datepicker--week__d:hover, .sam-datepicker--week__d:focus {\n        background-color: #e6e3e3; }\n\n.sam-datepicker--week__d[inRange=\"true\"] {\n        background-color: #6dbdff;\n        color: #ffffff;\n        border-radius: 0px; }\n\n.sam-datepicker--week__d[selectedDate=\"true\"] {\n        background-color: #027fe6;\n        color: #ffffff; }\n\n.sam-datepicker--week__d[selectedDate=\"true\"]:focus {\n        background-color: #024175; }\n\n.sam-datepicker--week__d:focus {\n        border: 1px solid #001b31; }\n\n.sam-datepicker--week__d[notInMonth=\"true\"] {\n        color: #e6e3e3; }\n\n.sam-datepicker--week__d[notInMonth=\"true\"]:hover, .sam-datepicker--week__d[notInMonth=\"true\"]:focus {\n          background-color: #e6e3e3;\n          color: #ffffff; }\n\n.sam-datepicker--week__d[notInMonth=\"true\"][selectedDate=\"true\"] {\n        background-color: #027fe66c;\n        color: #ffffff;\n        border-radius: 8px; }\n\n.sam-datepicker[open=\"true\"] {\n  visibility: visible;\n  display: block;\n  max-height: 364px; }\n\n.sam-datepicker[open=\"true\"] * {\n    visibility: visible; }\n\n.sam-datepicker[open=\"true\"] * * {\n      visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUtEO0VBQ0UsMkJDWmtCLEVEYW5COztBQUVEO0VFZkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRmFoQixlQ2xCa0I7RURtQmxCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBR1VEO0VBQ0UsYUFBWSxFQUNiOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FDL0NEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBU0ksY0FBYSxFQUNkOztBQUdIO0VGakJFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUVlaEIseUJBQXdCO0VBQ3hCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLFdBQVU7RUFDVixtQkFBa0IsRUFDbkI7O0FBRUQ7RUY3QkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRTJCaEIsYUFBWTtFQUNaLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFLbkI7O0FBWkQ7SUFTSSxjQUFhO0lBQ2IsMEJBQXlCLEVBQzFCOztBQUdIO0VBQ0Usc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGFBQVksRUFNYjs7QUFsQkQ7SUFlSSwwQkFBeUI7SUFDekIsb0JBQW1CLEVBQ3BCOztBQUVIO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsMEJBQXlCO0VBQ3pCLFdBQVU7RUFDVixrQ0FBaUM7RUFJakMsa0NBQWlDLEVBNktsQzs7QUE1TEQ7SUFhSSxtQkFBa0IsRUFDbkI7O0FBRUQ7SUFDRSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixvQkFBbUIsRUFDcEI7O0FBQ0Q7SUZwRkEsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGVESmtCO0lDS2xCLGlCQUFnQjtJRWtGZCxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLGVBQWMsRUFDZjs7QUFDRDtJQUNFLFlBQVc7SUFDWCxhQUFZO0lBQ1osYUFBWTtJQUNaLDhCQUE2QjtJRjlGL0IsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGVESmtCO0lDS2xCLGlCQUFnQjtJRTRGZCxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGFBQVk7SUFDWixzQkFBcUI7SUFDckIsZUFBYztJQUNkLFdBQVU7SUFDVixnQkFBZTtJQUNmLCtDQUE4QyxFQUkvQzs7QUFqQkE7TUFlRywwQkFBeUIsRUFDMUI7O0FBRUg7SUFDRSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGFBQVk7SUFDWiw4QkFBNkI7SUZoSC9CLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixlREprQjtJQ0tsQixpQkFBZ0I7SUU4R2QsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxhQUFZO0lBQ1osc0JBQXFCO0lBQ3JCLFdBQVU7SUFDVixlQUFjO0lBQ2QsZ0JBQWU7SUFDZiwrQ0FBOEMsRUFJL0M7O0FBakJBO01BZUcsMEJBQXlCLEVBQzFCOztBQUVIO0lBQ0UsWUFBVztJQUNYLGFBQVk7SUFDWixhQUFZO0lBQ1osOEJBQTZCO0lBQzdCLHNCQUFxQjtJRm5JdkIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGVESmtCO0lDS2xCLGlCQUFnQjtJRWlJZCxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLFdBQVU7SUFDVixhQUFZO0lBQ1osZ0JBQWU7SUFDZixlQUFjO0lBQ2QsK0NBQThDLEVBSS9DOztBQWpCQTtNQWVHLDBCQUF5QixFQUMxQjs7QUFFSDtJQUNFLGVBQWM7SUFDZCxZQUFXLEVBQ1o7O0FBQ0Q7SUFDRSxlQUFjO0lBQ2QsWUFBVztJQUNYLGFBQVksRUFrR2I7O0FBakdDO01BQ0UsWUFBVztNQUNYLGFBQVk7TUFDWixXQUFVO01BQ1YsOEJBQTZCO01GNUpqQyxnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsZURKa0I7TUNLbEIsaUJBQWdCO01FMEpaLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osV0FBVTtNQUNWLGdCQUFlLEVBZ0JoQjs7QUF6QkE7UUFXRywwQkFBeUI7UUFDekIsbUJBQWtCLEVBQ25COztBQWJGO1FBZUcsMEJBQXlCO1FBQ3pCLGVBQWM7UUFDZCxtQkFBa0IsRUFDbkI7O0FBbEJGO1FBb0JHLDBCQUF5QixFQUMxQjs7QUFyQkY7UUF1QkcsMEJBQXlCLEVBQzFCOztBQUVIO01BQ0UsWUFBVztNQUNYLGFBQVk7TUFDWixXQUFVO01BQ1YsOEJBQTZCO01GdExqQyxnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsZURKa0I7TUNLbEIsaUJBQWdCO01Fb0xaLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osV0FBVTtNQUNWLGdCQUFlLEVBZ0JoQjs7QUF6QkE7UUFXRywwQkFBeUI7UUFDekIsbUJBQWtCLEVBQ25COztBQWJGO1FBZUcsMEJBQXlCO1FBQ3pCLGVBQWM7UUFDZCxtQkFBa0IsRUFDbkI7O0FBbEJGO1FBb0JHLDBCQUF5QixFQUMxQjs7QUFyQkY7UUF1QkcsMEJBQXlCLEVBQzFCOztBQUVIO01BQ0UsWUFBVztNQUNYLGFBQVk7TUFDWixXQUFVO01BQ1YsOEJBQTZCO01GaE5qQyxnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsZURKa0I7TUNLbEIsaUJBQWdCO01FOE1aLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsY0FBYTtNQUNiLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsZ0JBQWU7TUFDZixtQkFBa0I7TUFDbEIsK0NBQThDLEVBK0IvQzs7QUE1Q0E7UUFlRywwQkFBeUIsRUFDMUI7O0FBaEJGO1FBa0JHLDBCQUF5QjtRQUN6QixlQUFjO1FBQ2QsbUJBQWtCLEVBQ25COztBQXJCRjtRQXVCRywwQkFBeUI7UUFDekIsZUFBYyxFQUNmOztBQXpCRjtRQTJCRywwQkFBeUIsRUFDMUI7O0FBNUJGO1FBOEJHLDBCQUF5QixFQUMxQjs7QUEvQkY7UUFpQ0csZUFBYyxFQUtmOztBQXRDRjtVQW1DSywwQkFBeUI7VUFDekIsZUFBYyxFQUNmOztBQXJDSjtRQXdDRyw0QkFBMkI7UUFDM0IsZUFBYztRQUNkLG1CQUFrQixFQUNuQjs7QUFLUDtFQUNFLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2Qsa0JBQWlCLEVBT2xCOztBQVZEO0lBS0ksb0JBQW1CLEVBSXBCOztBQVRIO01BT00sb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLnNhbS1kYXRlcGlja2VyLWNvbXBvbmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zYW0tZGF0ZS1pbnB1dHtcbiAgJjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LFxuICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIsXG4gICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0LFxuICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGQsXG4gICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQsXG4gICY6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkLFxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAmOjotd2Via2l0LWRhdGVwaWNrZXItcGlja2VyLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pbnB1dC5zYW0tZGF0ZS1pbnB1dCB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNhbS1kYXRlLXdyYXBwZXIge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhN2E3YTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmFjdGl2ZSwgOmZvY3VzeyBcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XG4gIH1cbn1cblxuLmRhdGVwaWNrZXItaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItbGVmdDogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuLnNhbS1kYXRlcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAyODBweDtcbiAgbWF4LWhlaWdodDogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjI1cztcbiAgKiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjI1cztcbiAgJi0taGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZDogI2ZjZmFmYTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gICYtLWhlYWRlcl9fZGF5e1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE0LjI4NSU7XG4gIH1cbiAgJi0taGVhZGVyX19sZWZ0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBvdXRsaW5lOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjMDI3ZmU2O1xuICAgIHdpZHRoOiAyOCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgMC4yNXM7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlM2UzO1xuICAgIH1cbiAgfVxuICAmLS1oZWFkZXJfX3JpZ2h0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBvdXRsaW5lOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyOCU7XG4gICAgY29sb3I6ICMwMjdmZTY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQgMC4yNXM7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlM2UzO1xuICAgIH1cbiAgfVxuICAmLS1oZWFkZXJfX2RhdGUge1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG91dGxpbmU6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICB3aWR0aDogNDQlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMjdmZTY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLWluLW91dCAwLjI1cztcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XG4gICAgfVxuICB9XG4gICYtLWJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICYtLXdlZWsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDJweDtcbiAgICAmX195IHtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgb3V0bGluZTogMHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gICAgICBsaW5lLWhlaWdodDogMy41O1xuICAgICAgaGVpZ2h0OiA4NHB4O1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIsICY6Zm9jdXN7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICAgICZbc2VsZWN0ZWREYXRlPVwidHJ1ZVwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjdmZTY7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgICAmW3NlbGVjdGVkRGF0ZT1cInRydWVcIl06Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0MTc1O1xuICAgICAgfVxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDFiMzE7XG4gICAgICB9XG4gICAgfVxuICAgICZfX20ge1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICBvdXRsaW5lOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzLjU7XG4gICAgICBoZWlnaHQ6IDg0cHg7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlciwgJjpmb2N1c3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTNlMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgfVxuICAgICAgJltzZWxlY3RlZERhdGU9XCJ0cnVlXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2ZlNjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICAgICZbc2VsZWN0ZWREYXRlPVwidHJ1ZVwiXTpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjQxNzU7XG4gICAgICB9XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMWIzMTtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fZCB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIG91dGxpbmU6IDBweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNC4yOCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4tb3V0IDAuMjVzO1xuICAgICAgJjpob3ZlciwgJjpmb2N1c3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTNlMztcbiAgICAgIH1cbiAgICAgICZbaW5SYW5nZT1cInRydWVcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRiZGZmO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgfVxuICAgICAgJltzZWxlY3RlZERhdGU9XCJ0cnVlXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2ZlNjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgICAmW3NlbGVjdGVkRGF0ZT1cInRydWVcIl06Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0MTc1O1xuICAgICAgfVxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDFiMzE7XG4gICAgICB9XG4gICAgICAmW25vdEluTW9udGg9XCJ0cnVlXCJdIHtcbiAgICAgICAgY29sb3I6ICNlNmUzZTM7XG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICZbbm90SW5Nb250aD1cInRydWVcIl1bc2VsZWN0ZWREYXRlPVwidHJ1ZVwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjdmZTY2YztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNhbS1kYXRlcGlja2VyW29wZW49XCJ0cnVlXCJdIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDM2NHB4O1xuICAqIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICoge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker.component.ts ***!
  \***************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateView;
(function (DateView) {
    DateView[DateView["days"] = 0] = "days";
    DateView[DateView["months"] = 1] = "months";
    DateView[DateView["years"] = 2] = "years";
})(DateView || (DateView = {}));
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.selectedDate = new Date();
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.date = new Date();
        this.open = false;
        this.weeks = [];
        this.weekDays = [];
        this.years = [];
        this.months = [];
        this.view = DateView.days;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
        this.initYears(this.date);
        this.initMonths(this.date);
        this.lastSelectedDate = this.date;
    };
    DatePickerComponent.prototype.initYears = function (start) {
        this.years = [];
        var year = -6;
        for (var i = 0; i < 12; i++) {
            this.years.push(new Date(start.getFullYear() + year, 0, 1));
            year++;
        }
    };
    DatePickerComponent.prototype.initMonths = function (year) {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            this.months.push(new Date(year.getFullYear(), i, 1));
        }
    };
    DatePickerComponent.prototype.getWeeksInMonth = function (month, year) {
        this.weeks = [];
        var firstDate = new Date(year, month, 1), lastDate = new Date(year, month + 1, 0), numDays = lastDate.getDate();
        var weekNum = 0;
        var start = 0;
        var end = 7 - firstDate.getDay();
        while (start <= numDays) {
            var week = [];
            for (var i = 0; i < 7; i++) {
                var day = new Date(this.date.getFullYear(), this.date.getMonth(), (start + i));
                if (weekNum == 0) {
                    day = new Date(this.date.getFullYear(), this.date.getMonth(), (start + i) - (firstDate.getDay() - 1));
                }
                week.push(day);
            }
            this.weeks.push(week);
            start = end + 1;
            end = end + 7;
            if (end > numDays)
                end = numDays;
            weekNum++;
        }
        return this.weeks;
    };
    DatePickerComponent.prototype.clicked = function () {
        this.open = !this.open;
    };
    DatePickerComponent.prototype.onChange = function () {
        this.dateChange.emit(this.selectedDate);
    };
    DatePickerComponent.prototype.selectLeft = function () {
        if (this.view === DateView.days) {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, this.date.getDate());
            this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
            this.onChange();
        }
        else if (this.view === DateView.months) {
            this.date = new Date(this.date.getFullYear() - 1, 0, 1);
            this.initMonths(this.date);
        }
        else if (this.view === DateView.years) {
            this.date = new Date(this.date.getFullYear() - 7, 0, 1);
            this.initYears(this.date);
        }
    };
    DatePickerComponent.prototype.selectRight = function () {
        if (this.view === DateView.days) {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate());
            this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
            this.onChange();
        }
        else if (this.view === DateView.months) {
            this.date = new Date(this.date.getFullYear() + 1, 0, 1);
            this.onChange();
        }
        else if (this.view === DateView.years) {
            this.date = new Date(this.date.getFullYear() + 7, 0, 1);
            this.initYears(this.date);
        }
    };
    DatePickerComponent.prototype.selectDate = function (d) {
        var _this = this;
        this.date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
        this.initYears(this.date);
        this.initMonths(this.date);
        if (this.view === DateView.months) {
            this.view = DateView.days;
        }
        else if (this.view === DateView.years) {
            this.view = DateView.months;
        }
        else {
            this.selectedDate = this.date;
            this.onChange();
            this.open = false;
        }
        this.lastSelectedDate = this.date;
        setTimeout(function () {
            document.getElementById('' + _this.lastSelectedDate).focus();
        }, 0);
    };
    DatePickerComponent.prototype.getDaysFromWeek = function (week) {
        return this.weekDays[week];
    };
    DatePickerComponent.prototype.changeView = function () {
        if (this.view === DateView.days) {
            this.view = DateView.months;
        }
        else if (this.view === DateView.months) {
            this.view = DateView.years;
        }
    };
    DatePickerComponent.prototype.wasLastSelected = function (d) {
        return d.getDate() === this.lastSelectedDate.getDate() && d.getMonth() === this.lastSelectedDate.getMonth();
    };
    DatePickerComponent.prototype.onKeyDown = function ($event, date) {
        var _this = this;
        var newFocusedId;
        switch ($event.key) {
            case 'ArrowDown':
            case 'Down':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
                break;
            case 'ArrowUp':
            case 'Up':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
                break;
            case 'ArrowLeft':
            case 'Left':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
                break;
            case 'ArrowRight':
            case 'Right':
                $event.preventDefault();
                newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                break;
        }
        if (newFocusedId && document.getElementById('' + newFocusedId)) {
            document.getElementById('' + newFocusedId).focus();
            this.lastSelectedDate = newFocusedId;
        }
        else if (newFocusedId) {
            if (newFocusedId < this.date) {
                this.selectLeft();
            }
            else {
                this.selectRight();
            }
            setTimeout(function () {
                _this.lastSelectedDate = newFocusedId;
                document.getElementById('' + newFocusedId).focus();
            }, 0);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('date'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], DatePickerComponent.prototype, "selectedDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DatePickerComponent.prototype, "dateChange", void 0);
    DatePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/components/datepicker/datepicker.component.html"),
            host: { 'class': 'sam-datepicker-component' },
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/components/datepicker/datepicker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./src/app/components/documentation/documentation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/documentation/documentation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"documentation\">\n  <div class=\"documentation--header\">\n    <ng-content select=\"documentation-header\">\n    </ng-content>\n  </div>\n  <div class=\"documentation--body\">\n      <ng-content select=\"documentation-body\">\n      </ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/documentation/documentation.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/documentation/documentation.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".documentation {\n  display: block;\n  position: relative;\n  margin: 24px auto;\n  width: 95%;\n  color: black;\n  border: 0;\n  box-shadow: 1px 1px 10px 1px #8888886e; }\n  .documentation--header {\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: center;\n    font-size: 2rem;\n    color: #495057;\n    padding: 8px;\n    background-color: white;\n    border-bottom: 1px solid lightgrey;\n    border-top: 1px solid lightgrey; }\n  .documentation--body {\n    position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsYUFBWTtFQUNaLFVBQVM7RUFDVCx1Q0FBc0MsRUFldkM7RUFkQztJQUNFLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsZUFBYztJQUNkLGFBQVk7SUFDWix3QkFBdUI7SUFDdkIsbUNBQWtDO0lBQ2xDLGdDQUErQixFQUNoQztFQUNEO0lBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnRhdGlvbnsgICAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjRweCBhdXRvO1xuICB3aWR0aDogOTUlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCAjODg4ODg4NmU7XG4gICYtLWhlYWRlcntcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgIFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgfVxuICAmLS1ib2R5e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/documentation/documentation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/documentation/documentation.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentationComponent, DocumentationHeaderComponent, DocumentationBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationHeaderComponent", function() { return DocumentationHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationBodyComponent", function() { return DocumentationBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/components/documentation/documentation.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/components/documentation/documentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());

var DocumentationHeaderComponent = /** @class */ (function () {
    function DocumentationHeaderComponent() {
    }
    DocumentationHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'documentation-header',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        })
    ], DocumentationHeaderComponent);
    return DocumentationHeaderComponent;
}());

var DocumentationBodyComponent = /** @class */ (function () {
    function DocumentationBodyComponent() {
    }
    DocumentationBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'documentation-body',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        })
    ], DocumentationBodyComponent);
    return DocumentationBodyComponent;
}());



/***/ }),

/***/ "./src/app/components/documentation/documentation.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/documentation/documentation.module.ts ***!
  \******************************************************************/
/*! exports provided: DocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentation.component */ "./src/app/components/documentation/documentation.component.ts");



var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"],
                _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationHeaderComponent"],
                _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationBodyComponent"]
            ],
            imports: [],
            exports: [
                _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"],
                _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationHeaderComponent"],
                _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationBodyComponent"]
            ]
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ }),

/***/ "./src/app/components/input/input.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"sam-input-wrapper\">\n  <ng-content></ng-content>\n  <label \n    class=\"sam-input-wrapper--label\" \n    [for]=\"field_id\"\n    [attr.hasVal]=\"hasValue()\">{{label}}</label>\n</span>"

/***/ }),

/***/ "./src/app/components/input/input.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-input-wrapper {\n  display: block;\n  position: relative;\n  margin: 24px;\n  margin-left: 0px;\n  width: 100%; }\n\n.sam-input-wrapper:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 100%;\n    bottom: 0px;\n    left: 50%;\n    border-bottom: 2px solid #027fe6;\n    border-top: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.sam-input-wrapper:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 0;\n    top: 50%;\n    left: 0px;\n    border-left: 2px solid #027fe6;\n    border-right: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.sam-input-wrapper:focus-within {\n    outline: none; }\n\n.sam-input-wrapper:focus-within:before {\n      left: 0;\n      width: 100%;\n      border-radius: .25rem; }\n\n.sam-input-wrapper:focus-within:after {\n      top: 0px;\n      height: 100%;\n      border-radius: .25rem; }\n\n.sam-input-wrapper--field {\n    display: inline-block;\n    width: 100%;\n    height: calc(2.25rem + 2px);\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    background-color: #fff;\n    border: 0;\n    border-bottom: 2px solid #027fe65d;\n    transition: all ease-in-out 0.5s;\n    color: #5e6770; }\n\n.sam-input-wrapper--field:focus {\n      -webkit-appearance: none;\n      outline: none; }\n\n.sam-input-wrapper--field[invalid=\"true\"] {\n      border: 2px solid red; }\n\n.sam-input-wrapper--field:focus + .sam-input-wrapper--label {\n      top: -28px;\n      left: -15px;\n      -webkit-transform: scale(0.75);\n              transform: scale(0.75);\n      color: #027fe6; }\n\n.sam-input-wrapper--field:focus + .sam-input-wrapper--label[invalid=\"true\"] {\n        color: red; }\n\n.sam-input-wrapper--field:disabled {\n      background: #f1f1f1;\n      cursor: not-allowed;\n      border-bottom: 2px solid #7a7a7a; }\n\n.sam-input-wrapper--field:disabled + .sam-input-wrapper--label {\n        cursor: not-allowed;\n        color: black; }\n\n.sam-input-wrapper--label {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    transition: all ease-in-out 0.25s; }\n\n.sam-input-wrapper--label[invalid=\"true\"] {\n      color: red; }\n\n.sam-input-wrapper--label[hasVal=\"true\"] {\n    top: -28px;\n    left: -15px;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    color: #5e6770; }\n\ntextarea {\n  min-height: calc(2.25rem + 2px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSwyQkNaa0IsRURhbkI7O0FBRUQ7RUVmRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VGYWhCLGVDbEJrQjtFRG1CbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FHVUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUMvQ0Q7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsWUFBVyxFQXNFWjs7QUEzRUQ7SURFSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixhQUFZO0lBQ1osWUFBVztJQUNYLFVBQVM7SUFDVCxpQ0ZUZ0I7SUVVaEIsOEJGVmdCO0lFV2hCLGlCQUFnQjtJQUVoQixpQ0FBZ0MsRUFDakM7O0FDYkg7SURlSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxVQUFTO0lBQ1QsU0FBUTtJQUNSLFVBQVM7SUFDVCwrQkZ0QmdCO0lFdUJoQixnQ0Z2QmdCO0lFd0JoQixpQkFBZ0I7SUFFaEIsaUNBQWdDLEVBQ2pDOztBQzFCSDtJQVFJLGNBQWEsRUFXZDs7QUFuQkg7TUFVTSxRQUFNO01BQ04sWUFBVTtNQUNWLHNCQUFxQixFQUN0Qjs7QUFiTDtNQWVNLFNBQVE7TUFDUixhQUFXO01BQ1gsc0JBQXFCLEVBQ3RCOztBQUVIO0lBQ0Usc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCw0QkFBMkI7SUFDM0Isd0JBQXVCO0lGekJ6QixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsZURKa0I7SUNLbEIsaUJBQWdCO0lFdUJkLHVCQUFzQjtJQUN0QixVQUFTO0lBQ1QsbUNBQWtDO0lBQ2xDLGlDQUFnQztJQUNoQyxlQUFjLEVBMEJmOztBQXBDQTtNQVlHLHlCQUF3QjtNQUN4QixjQUFhLEVBQ2Q7O0FBZEY7TUFnQkcsc0JBQXFCLEVBQ3RCOztBQWpCRjtNQW1CRyxXQUFVO01BQ1YsWUFBVztNQUNYLCtCQUFzQjtjQUF0Qix1QkFBc0I7TUFDdEIsZUFBYyxFQUlmOztBQTFCRjtRQXdCSSxXQUFVLEVBQ1Y7O0FBekJKO01BNEJHLG9CQUFtQjtNQUNuQixvQkFBbUI7TUFDbkIsaUNBQWdDLEVBS2pDOztBQW5DRjtRQWdDSyxvQkFBbUI7UUFDbkIsYUFBWSxFQUNiOztBQUdMO0lBQ0UsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixVQUFTO0lBQ1Qsd0JBQXVCO0lGOUR6QixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsZURKa0I7SUNLbEIsaUJBQWdCO0lFNERkLGtDQUFpQyxFQUlsQzs7QUFWQTtNQVFFLFdBQVUsRUFDVjs7QUFHSDtJQUNFLFdBQVU7SUFDVixZQUFXO0lBQ1gsK0JBQXNCO1lBQXRCLHVCQUFzQjtJQUN0QixlQUFjLEVBQ2Y7O0FBRUg7RUFDRSxnQ0FBK0IsRUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwgPiAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21peGlucy5zY3NzXCI7XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgJG1haW4tY29sb3I7XG59XG5cbi5zYW0tdGl0bGUge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiR0ZXh0LWNvbG9yOiAjNDk1MDU3O1xuJG1haW4tY29sb3I6ICMwMjdmZTY7XG4kYm9yZGVyLWNvbG9yOiAjYWFhOWE5O1xuJHNoYWRvdy1jb2xvcjogIzg4ODg4ODZlO1xuJGJsYWNrOiAjMDAwMDAwOyBcbiR3aGl0ZTogI2ZmZmZmZjtcbiRyZWQ6ICNmYzAzMDM7IFxuIiwiQG1peGluIGJhc2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbkBtaXhpbiBwc2V1ZG8tYm9yZGVyIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxufVxuXG4uY29sLXNtLTYge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2FyZC1saW5rIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uZGF0ZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vY29tcG9uZW50cy5jb21wb25lbnQuc2Nzcyc7XG5cbi5zYW0taW5wdXQtd3JhcHBlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgcHNldWRvLWJvcmRlcjtcbiAgJjpmb2N1cy13aXRoaW57XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOmJlZm9yZXtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIH1cbiAgfVxuICAmLS1maWVsZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyN2ZlNjVkO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIGNvbG9yOiAjNWU2NzcwO1xuICAgICY6Zm9jdXN7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAmW2ludmFsaWQ9XCJ0cnVlXCJde1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIH1cbiAgICAmOmZvY3VzICsgLnNhbS1pbnB1dC13cmFwcGVyLS1sYWJlbHtcbiAgICAgIHRvcDogLTI4cHg7XG4gICAgICBsZWZ0OiAtMTVweDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgICBjb2xvcjogIzAyN2ZlNjtcbiAgICAgICZbaW52YWxpZD1cInRydWVcIl17XG4gICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpkaXNhYmxlZHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3YTdhN2E7XG4gICAgICAmKyAuc2FtLWlucHV0LXdyYXBwZXItLWxhYmVse1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtLWxhYmVse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMjVzO1xuICAgICZbaW52YWxpZD1cInRydWVcIl17XG4gICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG4gIFxuICAmLS1sYWJlbFtoYXNWYWw9XCJ0cnVlXCJde1xuICAgIHRvcDogLTI4cHg7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICBjb2xvcjogIzVlNjc3MDtcbiAgfVxufVxudGV4dGFyZWF7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDJweCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputWrapperComponent, InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapperComponent", function() { return InputWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputWrapperComponent = /** @class */ (function () {
    function InputWrapperComponent() {
    }
    InputWrapperComponent.prototype.ngOnInit = function () {
    };
    InputWrapperComponent.prototype.hasValue = function () {
        var input = document.getElementById(this.field_id);
        return input && input['value'] && input['value'].match(/[^\s*$]/g) ? input['value'].match(/[^\s*$]/g).length > 0 : false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputWrapperComponent.prototype, "field_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputWrapperComponent.prototype, "label", void 0);
    InputWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-input-wrapper',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/components/input/input.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/components/input/input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputWrapperComponent);
    return InputWrapperComponent;
}());

var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.default = true;
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-input-wrapper--field'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "default", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sam-input]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"overlay\" (click)=\"close();\"></span>\n<div class=\"sam-modal-container\">\n  <span class=\"sam-modal-container\"></span>\n  <ng-content select=\"sam-modal-header\"></ng-content>\n  <ng-content select=\"sam-modal-body\"></ng-content>\n  <ng-content select=\"sam-modal-footer\"></ng-content>\n  <span tabindex=\"0\" role=\"button\" aria-label=\"close modal window\" (click)=\"close();\" (keyup.enter)=\"close();\" (keyup.space)=\"close();\"class=\"sam-modal-close\"></span>\n</div>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-modal-wrapper {\n  position: fixed;\n  opacity: 0;\n  width: 0px;\n  height: 0px;\n  left: -9999px;\n  top: -9999px;\n  transition: opacity ease-in-out 0.5s; }\n\n.modal-open {\n  overflow: hidden; }\n\n.overlay {\n  background-color: #000000b4;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute; }\n\n.sam-modal-wrapper-open {\n  opacity: 1;\n  display: flex;\n  position: fixed;\n  z-index: 9999;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%; }\n\n.sam-modal-wrapper-open .sam-modal-container {\n    display: block;\n    position: relative;\n    max-height: 75vh;\n    width: 50vw;\n    margin: auto;\n    background: #ffffff;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    border: 1px solid #7a7a7a;\n    border-radius: 10px;\n    text-align: left; }\n\n@media screen and (max-width: 768px) {\n      .sam-modal-wrapper-open .sam-modal-container {\n        width: 80vw; } }\n\n.sam-modal-wrapper-open .sam-modal-header {\n    display: block;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    text-align: center;\n    border-bottom: 1px solid #7a7a7a;\n    padding: 16px 32px 16px 32px;\n    font-size: 24px;\n    line-height: 1.5;\n    background-color: rgba(0, 0, 0, 0.03); }\n\n@media screen and (max-width: 575px) {\n      .sam-modal-wrapper-open .sam-modal-header {\n        padding-top: 32px; } }\n\n.sam-modal-wrapper-open .sam-modal-body {\n    display: block;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    border-bottom: 1px solid #7a7a7a;\n    padding: 16px; }\n\n.sam-modal-wrapper-open .sam-modal-footer {\n    display: block;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300; }\n\n.sam-modal-close {\n  position: absolute;\n  display: block;\n  width: 32px;\n  height: 32px;\n  top: 6px;\n  right: 6px;\n  border-radius: 10px;\n  cursor: pointer; }\n\n.sam-modal-close::before {\n    content: \"\";\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border-right: 2px solid #7a7a7a;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.sam-modal-close::after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: -10px;\n    left: 11px;\n    width: 32px;\n    height: 32px;\n    border-left: 2px solid #7a7a7a;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n\n.sam-modal-close:focus {\n    border: none;\n    outline: 2px solid #027fe6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSwyQkNaa0IsRURhbkI7O0FBRUQ7RUVmRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VGYWhCLGVDbEJrQjtFRG1CbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FHVUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUMvQ0Q7RUFDRSxnQkFBZTtFQUNmLFdBQVU7RUFDVixXQUFVO0VBQ1YsWUFBVztFQUNYLGNBQWE7RUFDYixhQUFZO0VBQ1oscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsNEJBQTJCO0VBQzNCLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2QsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsV0FBVTtFQUNWLGNBQWE7RUFDYixnQkFBZTtFQUNmLGNBQWE7RUFDYixTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZLEVBeUNiOztBQWpERDtJQVdJLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsMEJBQXlCO0lBQ3pCLG9CQUFtQjtJQUNuQixpQkFBZ0IsRUFJakI7O0FBSEM7TUF0Qko7UUF1Qk0sWUFBVyxFQUVkLEVBQUE7O0FBekJIO0lBMkJJLGVBQWM7SUZwRGhCLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixlREprQjtJQ0tsQixpQkFBZ0I7SUVrRGQsbUJBQWtCO0lBQ2xCLGlDQUFnQztJQUNoQyw2QkFBNEI7SUFJNUIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsc0NBQXFDLEVBQ3RDOztBQU5DO01BaENKO1FBaUNNLGtCQUFpQixFQUtwQixFQUFBOztBQXRDSDtJQXdDSSxlQUFjO0lGakVoQixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsZURKa0I7SUNLbEIsaUJBQWdCO0lFK0RkLGlDQUFnQztJQUNoQyxjQUFhLEVBQ2Q7O0FBNUNIO0lBOENJLGVBQWM7SUZ2RWhCLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixlREprQjtJQ0tsQixpQkFBZ0IsRUVxRWY7O0FBRUg7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLFlBQVc7RUFDWCxhQUFZO0VBQ1osU0FBUTtFQUNSLFdBQVU7RUFDVixvQkFBbUI7RUFDbkIsZ0JBQWUsRUEyQmhCOztBQW5DRDtJQVVJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFlBQVc7SUFDWCxzQkFBcUI7SUFDckIsWUFBVztJQUNYLGFBQVk7SUFDWixnQ0FBK0I7SUFDL0IsaUNBQXdCO1lBQXhCLHlCQUF3QixFQUN6Qjs7QUFuQkg7SUFxQkksWUFBVztJQUNYLHNCQUFxQjtJQUNyQixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFdBQVU7SUFDVixZQUFXO0lBQ1gsYUFBWTtJQUNaLCtCQUE4QjtJQUM5QixrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQzFCOztBQTlCSDtJQWdDSSxhQUFZO0lBQ1osMkJBQTBCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsID4gKiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xufVxuXG4uc2FtLXRpdGxlIHtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkdGV4dC1jb2xvcjogIzQ5NTA1NztcbiRtYWluLWNvbG9yOiAjMDI3ZmU2O1xuJGJvcmRlci1jb2xvcjogI2FhYTlhOTtcbiRzaGFkb3ctY29sb3I6ICM4ODg4ODg2ZTtcbiRibGFjazogIzAwMDAwMDsgXG4kd2hpdGU6ICNmZmZmZmY7XG4kcmVkOiAjZmMwMzAzOyBcbiIsIkBtaXhpbiBiYXNlLWZvbnQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG5AbWl4aW4gcHNldWRvLWJvcmRlciB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbn1cblxuLmNvbC1zbS02IHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhcmQtbGluayB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmRhdGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzXCI7XG5cbi5zYW0tbW9kYWwtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGxlZnQ6IC05OTk5cHg7XG4gIHRvcDogLTk5OTlweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluLW91dCAwLjVzO1xufVxuXG4ubW9kYWwtb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGI0O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2FtLW1vZGFsLXdyYXBwZXItb3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAuc2FtLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN2E3YTdhO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDgwdnc7XG4gICAgfVxuICB9XG4gIC5zYW0tbW9kYWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3YTdhN2E7XG4gICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgfVxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIH1cbiAgLnNhbS1tb2RhbC1ib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdhN2E3YTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIC5zYW0tbW9kYWwtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgfVxufVxuLnNhbS1tb2RhbC1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHRvcDogNnB4O1xuICByaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM3YTdhN2E7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAxMXB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3YTdhN2E7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICMwMjdmZTY7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeaderComponent", function() { return ModalHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBodyComponent", function() { return ModalBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooterComponent", function() { return ModalFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent(renderer) {
        this.renderer = renderer;
        this.opened = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.open = function () {
        var _this = this;
        setTimeout(function () {
            _this.opened = true;
            _this.renderer.addClass(document.querySelector('body'), 'modal-open');
        });
    };
    ModalComponent.prototype.close = function () {
        this.opened = false;
        this.renderer.removeClass(document.querySelector('body'), 'modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-modal-wrapper-open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "imgURL", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-modal-wrapper]': 'true' },
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ModalComponent);
    return ModalComponent;
}());

var ModalHeaderComponent = /** @class */ (function () {
    function ModalHeaderComponent() {
    }
    ModalHeaderComponent.prototype.ngOnInit = function () {
    };
    ModalHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-modal-header',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-modal-header]': 'true' },
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalHeaderComponent);
    return ModalHeaderComponent;
}());

var ModalBodyComponent = /** @class */ (function () {
    function ModalBodyComponent() {
    }
    ModalBodyComponent.prototype.ngOnInit = function () {
    };
    ModalBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-modal-body',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-modal-body]': 'true' },
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalBodyComponent);
    return ModalBodyComponent;
}());

var ModalFooterComponent = /** @class */ (function () {
    function ModalFooterComponent() {
    }
    ModalFooterComponent.prototype.ngOnInit = function () {
    };
    ModalFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-modal-footer',
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: { '[class.sam-modal-footer]': 'true' },
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalFooterComponent);
    return ModalFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/modal/modal.module.ts ***!
  \**************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/components/modal/modal.component.ts");




var comps = [
    _modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
    _modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalHeaderComponent"],
    _modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalBodyComponent"],
    _modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalFooterComponent"]
];
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: comps,
            exports: comps,
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [],
            bootstrap: []
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/components/radios/radios.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/radios/radios.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"sam-radio-container\">\n  <span class=\"radio-btn\" [attr.checked]=\"checked\"></span>\n  <ng-content></ng-content> \n  <span class=\"sam-radio-label\"><span class=\"sr-only\">{{groupLabel}}</span>{{label}}</span>\n</label>"

/***/ }),

/***/ "./src/app/components/radios/radios.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/radios/radios.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-radio-btn {\n  display: inline-block;\n  padding: 0 16px 16px 0; }\n\n@media screen and (max-width: 425px) {\n    .sam-radio-btn {\n      display: block; } }\n\n.sam-radio-group {\n  display: block;\n  width: 100%; }\n\n.sam-radio-container {\n  cursor: pointer;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  width: 100%; }\n\n.sam-radio-container input {\n    position: absolute;\n    opacity: 0;\n    display: inline; }\n\n.sam-radio-container .sam-radio-label {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    display: inline;\n    margin-left: 40px;\n    cursor: pointer;\n    display: inline-block; }\n\n.sam-group-label {\n  display: block;\n  padding-bottom: 8px;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  line-height: 1.5;\n  font-weight: 500; }\n\n.radio-btn {\n  position: absolute;\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  top: calc(50%  - 16px);\n  border: 1px solid #929191;\n  border-radius: 50px;\n  vertical-align: middle;\n  transition: all ease-in-out 0.25s; }\n\n.radio-btn:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    background: #027fe6;\n    border-radius: 50px;\n    top: calc(50%);\n    left: calc(50%);\n    transition: all ease-in-out 0.25s; }\n\n.radio-btn:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    background: #027fe6;\n    border-radius: 50px;\n    top: calc(50%);\n    left: calc(50%);\n    transition: all ease-in-out 0.25s; }\n\n.radio-btn[checked=\"true\"] {\n  border: 2px solid #027fe6; }\n\n.radio-btn[checked=\"true\"]:before {\n    width: 12px;\n    height: 12px;\n    border: 2px solid #027fe6;\n    top: calc(50% - 6px);\n    left: calc(50% - 6px); }\n\n.radio-btn[checked=\"true\"]:before {\n    width: 14px;\n    height: 14px;\n    border: 1px solid #929191;\n    top: calc(50% - 7px);\n    left: calc(50% - 7px); }\n\n.sam-radio-btn-disabled {\n  cursor: not-allowed; }\n\n.sam-radio-btn-disabled .sam-radio-container {\n    cursor: not-allowed; }\n\n.sam-radio-btn-disabled .sam-radio-label {\n    color: #929191; }\n\n.sam-radio-btn-disabled .radio-btn {\n    background: #9291917e;\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpb3MvcmFkaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFLRDtFQUNFLDJCQ1prQixFRGFuQjs7QUFFRDtFRWZFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUZhaEIsZUNsQmtCO0VEbUJsQixnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUdVRDtFQUNFLGFBQVksRUFDYjs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQy9DRDtFQUNFLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFJdkI7O0FBSEM7SUFIRjtNQUlJLGVBQWMsRUFFakIsRUFBQTs7QUFFRDtFQUNFLGVBQWM7RUFDZCxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLHNCQUFxQjtFQUNyQixZQUFXLEVBYVo7O0FBbkJEO0lBUUksbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixnQkFBZSxFQUNoQjs7QUFYSDtJRmRFLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixlREprQjtJQ0tsQixpQkFBZ0I7SUV3QmQsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixzQkFBcUIsRUFDdEI7O0FBR0g7RUFDRSxlQUFjO0VBQ2Qsb0JBQW1CO0VGckNuQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VFbUNoQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixrQ0FBaUMsRUF5QmxDOztBQWxDRDtJQVdJLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2QsZ0JBQWU7SUFDZixrQ0FBaUMsRUFDbEM7O0FBckJIO0lBdUJJLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2QsZ0JBQWU7SUFDZixrQ0FBaUMsRUFDbEM7O0FBRUg7RUFDRSwwQkFBeUIsRUFlMUI7O0FBaEJEO0lBR0ksWUFBVztJQUNYLGFBQVk7SUFDWiwwQkFBeUI7SUFDekIscUJBQW9CO0lBQ3BCLHNCQUFxQixFQUN0Qjs7QUFSSDtJQVVJLFlBQVc7SUFDWCxhQUFZO0lBQ1osMEJBQXlCO0lBQ3pCLHFCQUFvQjtJQUNwQixzQkFBcUIsRUFDdEI7O0FBRUg7RUFDRSxvQkFBbUIsRUFXcEI7O0FBWkQ7SUFHSSxvQkFBbUIsRUFDcEI7O0FBSkg7SUFNSSxlQUFjLEVBQ2Y7O0FBUEg7SUFTSSxzQkFBcUI7SUFDckIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yYWRpb3MvcmFkaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwgPiAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21peGlucy5zY3NzXCI7XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgJG1haW4tY29sb3I7XG59XG5cbi5zYW0tdGl0bGUge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiR0ZXh0LWNvbG9yOiAjNDk1MDU3O1xuJG1haW4tY29sb3I6ICMwMjdmZTY7XG4kYm9yZGVyLWNvbG9yOiAjYWFhOWE5O1xuJHNoYWRvdy1jb2xvcjogIzg4ODg4ODZlO1xuJGJsYWNrOiAjMDAwMDAwOyBcbiR3aGl0ZTogI2ZmZmZmZjtcbiRyZWQ6ICNmYzAzMDM7IFxuIiwiQG1peGluIGJhc2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbkBtaXhpbiBwc2V1ZG8tYm9yZGVyIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxufVxuXG4uY29sLXNtLTYge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2FyZC1saW5rIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uZGF0ZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vY29tcG9uZW50cy5jb21wb25lbnQuc2Nzcyc7XG5cbi5zYW0tcmFkaW8tYnRue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTZweCAxNnB4IDA7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0MjVweCl7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5zYW0tcmFkaW8tZ3JvdXB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNhbS1yYWRpby1jb250YWluZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGlucHV0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuc2FtLXJhZGlvLWxhYmVse1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cbi5zYW0tZ3JvdXAtbGFiZWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJhZGlvLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0b3A6IGNhbGMoNTAlICAtIDE2cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTI5MTkxO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4yNXM7XG4gICY6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMjdmZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0b3A6IGNhbGMoNTAlKTtcbiAgICBsZWZ0OiBjYWxjKDUwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMjVzO1xuICB9XG4gICY6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzAyN2ZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRvcDogY2FsYyg1MCUpO1xuICAgIGxlZnQ6IGNhbGMoNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4yNXM7XG4gIH1cbn1cbi5yYWRpby1idG5bY2hlY2tlZD1cInRydWVcIl17XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjdmZTY7XG4gICY6YmVmb3Jle1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI3ZmU2O1xuICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNnB4KTtcbiAgfVxuICAmOmJlZm9yZXtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkyOTE5MTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gN3B4KTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDdweCk7XG4gIH1cbn1cbi5zYW0tcmFkaW8tYnRuLWRpc2FibGVke1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAuc2FtLXJhZGlvLWNvbnRhaW5lcntcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG4gIC5zYW0tcmFkaW8tbGFiZWx7XG4gICAgY29sb3I6ICM5MjkxOTE7XG4gIH1cbiAgLnJhZGlvLWJ0biB7XG4gICAgYmFja2dyb3VuZDogIzkyOTE5MTdlO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/radios/radios.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/radios/radios.component.ts ***!
  \*******************************************************/
/*! exports provided: RadiosComponent, RadioGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiosComponent", function() { return RadiosComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return RadioGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadiosComponent = /** @class */ (function () {
    function RadiosComponent() {
        this.disabled = false;
    }
    RadiosComponent.prototype.ngOnInit = function () {
    };
    RadiosComponent.prototype.click = function () {
        this.checked = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadiosComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RadiosComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-radio-btn-disabled'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadiosComponent.prototype, "disabled", void 0);
    RadiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-radio-btn',
            template: __webpack_require__(/*! ./radios.component.html */ "./src/app/components/radios/radios.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: {
                '[class.sam-radio-btn]': 'true'
            },
            styles: [__webpack_require__(/*! ./radios.component.scss */ "./src/app/components/radios/radios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadiosComponent);
    return RadiosComponent;
}());

var RadioGroupComponent = /** @class */ (function () {
    function RadioGroupComponent() {
    }
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.comps.forEach(function (comp) {
            comp.groupLabel = _this.groupLabel;
        });
    };
    RadioGroupComponent.prototype.check = function (id) {
        this.comps.forEach(function (comp) {
            comp.checked = false;
            if (comp.id === id) {
                comp.checked = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioGroupComponent.prototype, "groupLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(RadiosComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], RadioGroupComponent.prototype, "comps", void 0);
    RadioGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-radio-group',
            template: "\n    <span class=\"sam-group-label\">{{groupLabel}}</span>\n    <ng-content></ng-content>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: {
                '[class.sam-radio-group]': 'true'
            },
            styles: [__webpack_require__(/*! ./radios.component.scss */ "./src/app/components/radios/radios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());



/***/ }),

/***/ "./src/app/components/toggle/toggle.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/toggle/toggle.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<label class=\"sam-toggle--label\" [for]=\"field_id\">\n  <span class=\"sam-toggle--label__icon\"></span>\n  {{label}}\n</label>"

/***/ }),

/***/ "./src/app/components/toggle/toggle.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/toggle/toggle.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-toggle-wrapper {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  min-height: 42px; }\n\n.sam-toggle--field {\n  cursor: pointer;\n  position: absolute;\n  position: absolute;\n  opacity: 0; }\n\n.sam-toggle--field:focus + .sam-toggle--label::before {\n    border: 2px solid #027fe6; }\n\n.sam-toggle--field:disabled + .sam-toggle--label {\n    color: #aaa9a9;\n    cursor: not-allowed; }\n\n.sam-toggle--field:disabled + .sam-toggle--label::before {\n      background: #aaa9a9; }\n\n.sam-toggle--field[checked=\"true\"] + .sam-toggle--label::before {\n    background: #ffffff; }\n\n.sam-toggle--field[checked=\"true\"] + .sam-toggle--label::after {\n    top: calc(50% - 17.5px);\n    width: 34px;\n    height: 34px;\n    left: calc(80px - 36px - 4px);\n    border: 0;\n    background: #027fe6;\n    box-shadow: 0px 0px 5px 2px #027fe65d; }\n\n.sam-toggle--field[checked=\"true\"] + .sam-toggle--label .sam-toggle--label__icon {\n    top: calc(50% - 16.5px);\n    width: 34px;\n    height: 34px;\n    left: calc(80px - 36px - 4px); }\n\n.sam-toggle--field[checked=\"true\"] + .sam-toggle--label .sam-toggle--label__icon::before {\n      left: 18px;\n      top: 7px;\n      border-right: 2px solid #ffffff;\n      -webkit-transform: rotate(30deg);\n              transform: rotate(30deg); }\n\n.sam-toggle--field[checked=\"true\"] + .sam-toggle--label .sam-toggle--label__icon::after {\n      height: 10px;\n      top: 17px;\n      left: 10px;\n      border-left: 2px solid #ffffff; }\n\n.sam-toggle--label {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  left: 0px;\n  margin: 0px;\n  line-height: 2.5;\n  padding-left: 88px; }\n\n.sam-toggle--label::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 80px;\n    height: 42px;\n    top: calc(50% - 21px);\n    left: 0px;\n    margin-bottom: 0px;\n    border: 1px solid #aaa9a9;\n    background: #fcfafa;\n    border-radius: 50px;\n    transition: all ease-in-out 0.25s; }\n\n.sam-toggle--label::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: calc(50% - 12px);\n    left: 4px;\n    width: 24px;\n    height: 24px;\n    border-radius: 50px;\n    border: 1px solid #aaa9a9;\n    background: #fcfafa;\n    box-shadow: 0px 0px 5px 2px #aaa9a9;\n    transition: all ease-in-out 0.25s; }\n\n.sam-toggle--label__icon {\n    display: block;\n    position: absolute;\n    top: calc(50% - 13px);\n    left: 4px;\n    width: 24px;\n    height: 24px;\n    transition: all ease-in-out 0.25s; }\n\n.sam-toggle--label__icon::before {\n      content: '';\n      display: block;\n      position: absolute;\n      height: 20px;\n      top: calc(50% - 9px);\n      left: calc(50% - 1px);\n      border-right: 2px solid #aaa9a9;\n      z-index: 1;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      transition: all ease-in-out 0.25s;\n      border-radius: 50px; }\n\n.sam-toggle--label__icon::after {\n      content: '';\n      display: block;\n      position: absolute;\n      height: 20px;\n      top: calc(50% - 9px);\n      left: calc(50% - 1px);\n      z-index: 1;\n      border-left: 2px solid #aaa9a9;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      transition: all ease-in-out 0.25s;\n      border-radius: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFLRDtFQUNFLDJCQ1prQixFRGFuQjs7QUFFRDtFRWZFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUZhaEIsZUNsQmtCO0VEbUJsQixnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUdVRDtFQUNFLGFBQVksRUFDYjs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQzlDQztFQUNFLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsV0FBVSxFQThDWDs7QUFsREE7SUFPSywwQkFBeUIsRUFDMUI7O0FBUko7SUFXRyxlQUFjO0lBQ2Qsb0JBQW1CLEVBSXBCOztBQWhCRjtNQWNLLG9CQUFtQixFQUNwQjs7QUFmSjtJQW9CSyxvQkFBbUIsRUFDcEI7O0FBckJKO0lBdUJLLHdCQUF1QjtJQUN2QixZQUFXO0lBQ1gsYUFBWTtJQUNaLDhCQUE2QjtJQUM3QixVQUFTO0lBQ1Qsb0JBQW1CO0lBQ25CLHNDQUFxQyxFQUN0Qzs7QUE5Qko7SUFnQ0ssd0JBQXVCO0lBQ3ZCLFlBQVc7SUFDWCxhQUFZO0lBQ1osOEJBQTZCLEVBYTlCOztBQWhESjtNQXFDTyxXQUFVO01BQ1YsU0FBUTtNQUNSLGdDQUErQjtNQUMvQixpQ0FBd0I7Y0FBeEIseUJBQXdCLEVBQ3pCOztBQXpDTjtNQTJDTyxhQUFZO01BQ1osVUFBUztNQUNULFdBQVU7TUFDViwrQkFBOEIsRUFDL0I7O0FBSVA7RUYzREEsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRXlEZCxnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBZ0VuQjs7QUF4RUE7SUFVRyxZQUFXO0lBQ1gsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsYUFBWTtJQUNaLHNCQUFxQjtJQUNyQixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsb0JBQW1CO0lBQ25CLGtDQUFpQyxFQUNsQzs7QUF0QkY7SUF3QkcsWUFBVztJQUNYLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLFVBQVM7SUFDVCxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQiwwQkFBeUI7SUFDekIsb0JBQW1CO0lBQ25CLG9DQUFtQztJQUNuQyxrQ0FBaUMsRUFDbEM7O0FBQ0Q7SUFDRSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixVQUFTO0lBQ1QsWUFBVztJQUNYLGFBQVk7SUFDWixrQ0FBaUMsRUEyQmxDOztBQWxDQTtNQVNHLFlBQVc7TUFDWCxlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixxQkFBb0I7TUFDcEIsc0JBQXFCO01BQ3JCLGdDQUErQjtNQUMvQixXQUFVO01BQ1YsaUNBQXdCO2NBQXhCLHlCQUF3QjtNQUN4QixrQ0FBaUM7TUFDakMsb0JBQW1CLEVBQ3BCOztBQXBCRjtNQXNCRyxZQUFXO01BQ1gsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixhQUFZO01BQ1oscUJBQW9CO01BQ3BCLHNCQUFxQjtNQUNyQixXQUFVO01BQ1YsK0JBQThCO01BQzlCLGtDQUF5QjtjQUF6QiwwQkFBeUI7TUFDekIsa0NBQWlDO01BQ2pDLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsID4gKiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xufVxuXG4uc2FtLXRpdGxlIHtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkdGV4dC1jb2xvcjogIzQ5NTA1NztcbiRtYWluLWNvbG9yOiAjMDI3ZmU2O1xuJGJvcmRlci1jb2xvcjogI2FhYTlhOTtcbiRzaGFkb3ctY29sb3I6ICM4ODg4ODg2ZTtcbiRibGFjazogIzAwMDAwMDsgXG4kd2hpdGU6ICNmZmZmZmY7XG4kcmVkOiAjZmMwMzAzOyBcbiIsIkBtaXhpbiBiYXNlLWZvbnQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG5AbWl4aW4gcHNldWRvLWJvcmRlciB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbn1cblxuLmNvbC1zbS02IHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhcmQtbGluayB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmRhdGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uL2NvbXBvbmVudHMuY29tcG9uZW50LnNjc3MnO1xuXG4uc2FtLXRvZ2dsZSB7XG4gICYtd3JhcHBlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICB9XG4gICYtLWZpZWxkeyAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgICY6Zm9jdXMgKyAuc2FtLXRvZ2dsZS0tbGFiZWx7XG4gICAgICAmOjpiZWZvcmV7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMjdmZTY7XG4gICAgICB9XG4gICAgfVxuICAgICY6ZGlzYWJsZWQgKyAuc2FtLXRvZ2dsZS0tbGFiZWx7XG4gICAgICBjb2xvcjogI2FhYTlhOTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAmOjpiZWZvcmV7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhYWE5YTk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJltjaGVja2VkPVwidHJ1ZVwiXSArIC5zYW0tdG9nZ2xlLS1sYWJlbHtcbiAgICAgICY6OmJlZm9yZXsgXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgICAmOjphZnRlcntcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE3LjVweCk7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoODBweCAtIDM2cHggLSA0cHgpO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMjdmZTY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjMDI3ZmU2NWQ7XG4gICAgICB9XG4gICAgICAmIC5zYW0tdG9nZ2xlLS1sYWJlbF9faWNvbntcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE2LjVweCk7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoODBweCAtIDM2cHggLSA0cHgpO1xuICAgICAgICAmOjpiZWZvcmV7XG4gICAgICAgICAgbGVmdDogMThweDtcbiAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlcntcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgdG9wOiAxN3B4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtLWxhYmVse1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBsaW5lLWhlaWdodDogMi41O1xuICAgIHBhZGRpbmctbGVmdDogODhweDtcbiAgICAmOjpiZWZvcmV7ICAgIFxuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIxcHgpO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTlhOTtcbiAgICAgIGJhY2tncm91bmQ6ICNmY2ZhZmE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMjVzO1xuICAgIH1cbiAgICAmOjphZnRlcntcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTJweCk7XG4gICAgICBsZWZ0OiA0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhOWE5O1xuICAgICAgYmFja2dyb3VuZDogI2ZjZmFmYTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjYWFhOWE5O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMjVzO1xuICAgIH1cbiAgICAmX19pY29ue1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTNweCk7XG4gICAgICBsZWZ0OiA0cHg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjI1cztcbiAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDlweCk7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMXB4KTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2FhYTlhOTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4yNXM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICB9XG4gICAgICAmOjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDlweCk7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMXB4KTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWFhOWE5O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4yNXM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/toggle/toggle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/toggle/toggle.component.ts ***!
  \*******************************************************/
/*! exports provided: ToggleComponentWrapper, ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponentWrapper", function() { return ToggleComponentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleComponentWrapper = /** @class */ (function () {
    function ToggleComponentWrapper() {
    }
    ToggleComponentWrapper.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleComponentWrapper.prototype, "field_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleComponentWrapper.prototype, "label", void 0);
    ToggleComponentWrapper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "./src/app/components/toggle/toggle.component.html"),
            host: { '[class.sam-toggle-wrapper]': 'true' },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./toggle.component.scss */ "./src/app/components/toggle/toggle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleComponentWrapper);
    return ToggleComponentWrapper;
}());

var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
        this.default = true;
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sam-toggle--field'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleComponent.prototype, "default", void 0);
    ToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sam-toggle]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label [for]=\"tooltipId\" class=\"sam-tooltip--label\" [innerHtml]=\"tooltipLabel\"></label>\n<button [id]=\"tooltipId\" class=\"sam-tooltip--btn\" (click)=\"toggleTooltip();\" [attr.aria-label]=\"tooltipAriaLabel\">\n  <span *ngIf=\"contentOpen\" class=\"sam-tooltip--chevron\"></span>\n</button>\n<div #tooltipContainer [hidden]=\"!contentOpen\" role=\"tooltip\" aria-live=\"assertive\" class=\"sam-tooltip--container\">\n  <span class=\"sr-only\">Tooltip popup</span>\n  <ng-content></ng-content>\n  <button aria-hidden=\"true\" class=\"sam-tooltip--container__close\" (click)=\"toggleTooltip();\"></button>\n</div>"

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-tooltip {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 8px 4px;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300; }\n\n.sam-tooltip--label {\n    display: inline;\n    cursor: pointer; }\n\n.sam-tooltip--btn {\n    display: inline-block;\n    position: relative;\n    transition: all ease-in-out 0.15s;\n    cursor: pointer;\n    width: 32px;\n    height: 32px;\n    outline: 0;\n    color: #027fe6;\n    background: #ffffff;\n    border: 1px solid #027fe6;\n    border-radius: 50%;\n    margin-left: 8px; }\n\n.sam-tooltip--btn:hover, .sam-tooltip--btn:active {\n      color: #ffffff;\n      border: 1px solid #ffffff;\n      background: #027fe6; }\n\n.sam-tooltip--btn:focus {\n      outline: none; }\n\n.sam-tooltip--btn::before {\n    transition: all ease-in-out 0.15s;\n    content: '';\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border: 0px solid #027fe6;\n    border-radius: 50%; }\n\n.sam-tooltip--btn::before:hover, .sam-tooltip--btn::before:active {\n      border: 1px solid #ffffff; }\n\n.sam-tooltip--btn:focus::before {\n    border: 1px solid #027fe6;\n    width: calc(100% + 8px);\n    height: calc(100% + 8px);\n    top: -4px;\n    left: -4px; }\n\n.sam-tooltip--btn::after {\n    content: '?'; }\n\n.sam-tooltip--container {\n    display: block;\n    position: fixed;\n    min-width: 128px;\n    min-height: 56px;\n    background: #ffffff;\n    border-radius: 10px;\n    bottom: calc(100% + 8px);\n    box-shadow: 1px 1px 10px 1px #8888886e;\n    padding: 16px;\n    padding-right: 24px;\n    margin: 0px 16px;\n    z-index: 9999; }\n\n.sam-tooltip--container__close {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    color: #027fe6;\n    background: transparent;\n    outline: 0;\n    border: 0;\n    width: 32px;\n    height: 32px;\n    cursor: pointer; }\n\n.sam-tooltip--container__close::after {\n      content: 'x';\n      padding: 0 4px; }\n\n.sam-tooltip--container__close:focus {\n      outline: 0; }\n\n.sam-tooltip--container__close:focus::after {\n        border: 1px solid #027fe6; }\n\n.sam-tooltip--chevron {\n    display: inline-block;\n    position: absolute;\n    background: #ffffff;\n    box-shadow: 1px 1px 10px 1px #8888886e;\n    width: 16px;\n    height: 16px;\n    left: calc(50% - 8px);\n    bottom: calc(100% + 9px);\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n    z-index: 9998; }\n\n.sam-tooltip--chevron::before {\n      content: '';\n      position: relative;\n      display: block;\n      background: #ffffff;\n      border-radius: 10px;\n      width: 16px;\n      height: 35px;\n      top: -4px;\n      left: -6px;\n      -webkit-transform: rotate(135deg);\n      transform: rotate(135deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUtEO0VBQ0UsMkJDWmtCLEVEYW5COztBQUVEO0VFZkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRmFoQixlQ2xCa0I7RURtQmxCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBR1VEO0VBQ0UsYUFBWSxFQUNiOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FDL0NEO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQjtFRk5oQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCLEVFcUhqQjs7QUFqSEM7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCOztBQUNEO0lBQ0Usc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixrQ0FBaUM7SUFDakMsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsYUFBWTtJQUNaLFdBQVU7SUFDVixlQUFjO0lBQ2Qsb0JBQW1CO0lBQ25CLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsaUJBQWdCLEVBU2pCOztBQXJCQTtNQWNHLGVBQWM7TUFDZCwwQkFBeUI7TUFDekIsb0JBQW1CLEVBQ3BCOztBQWpCRjtNQW1CRyxjQUFhLEVBQ2Q7O0FBRUg7SUFDRSxrQ0FBaUM7SUFDakMsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsVUFBUztJQUNULFlBQVc7SUFDWCxhQUFZO0lBQ1osMEJBQXlCO0lBQ3pCLG1CQUFrQixFQUluQjs7QUFiQTtNQVdHLDBCQUF5QixFQUMxQjs7QUFFSDtJQUNFLDBCQUF5QjtJQUN6Qix3QkFBdUI7SUFDdkIseUJBQXdCO0lBQ3hCLFVBQVM7SUFDVCxXQUFVLEVBQ1g7O0FBRUQ7SUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7SUFDRSxlQUFjO0lBQ2QsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIseUJBQXdCO0lBQ3hCLHVDQUFzQztJQUN0QyxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFhLEVBQ2Q7O0FBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFdBQVU7SUFDVixlQUFjO0lBQ2Qsd0JBQXVCO0lBQ3ZCLFdBQVU7SUFDVixVQUFTO0lBQ1QsWUFBVztJQUNYLGFBQVk7SUFDWixnQkFBZSxFQVdoQjs7QUFyQkE7TUFZRyxhQUFZO01BQ1osZUFBYyxFQUNmOztBQWRGO01BbUJHLFdBQVUsRUFDWDs7QUFwQkY7UUFpQkssMEJBQXlCLEVBQzFCOztBQUlMO0lBQ0Usc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsdUNBQXNDO0lBQ3RDLFlBQVc7SUFDWCxhQUFZO0lBQ1osc0JBQXFCO0lBQ3JCLHlCQUF3QjtJQUN4QixrQ0FBaUM7SUFDakMsMEJBQXlCO0lBQ3pCLGNBQWEsRUFjZDs7QUF6QkE7TUFhRyxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCxvQkFBbUI7TUFDbkIsb0JBQW1CO01BQ25CLFlBQVc7TUFDWCxhQUFZO01BQ1osVUFBUztNQUNULFdBQVU7TUFDVixrQ0FBaUM7TUFDakMsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLnNhbS10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDRweDtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gICYtLWxhYmVse1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJi0tYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMTVzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBjb2xvcjogIzAyN2ZlNjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjdmZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgJjpob3ZlciwgJjphY3RpdmV7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDI3ZmU2O1xuICAgIH1cbiAgICAmOmZvY3Vze1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJi0tYnRuOjpiZWZvcmV7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMTVzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMjdmZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICY6aG92ZXIsICY6YWN0aXZle1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICB9XG4gIH1cbiAgJi0tYnRuOmZvY3VzOjpiZWZvcmV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyN2ZlNjtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgOHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDhweCk7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IC00cHg7XG4gIH1cblxuICAmLS1idG46OmFmdGVye1xuICAgIGNvbnRlbnQ6ICc/JztcbiAgfVxuICAmLS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1pbi13aWR0aDogMTI4cHg7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm90dG9tOiBjYWxjKDEwMCUgKyA4cHgpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxcHggIzg4ODg4ODZlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICBtYXJnaW46ICAwcHggMTZweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gICYtLWNvbnRhaW5lcl9fY2xvc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgY29sb3I6ICMwMjdmZTY7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAneCc7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjdmZTY7XG4gICAgICB9XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxuICAmLS1jaGV2cm9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4ICM4ODg4ODg2ZTtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA4cHgpO1xuICAgIGJvdHRvbTogY2FsYygxMDAlICsgOXB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB6LWluZGV4OiA5OTk4O1xuICAgICY6OmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgbGVmdDogLTZweDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var uniqueId = 0;
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(renderer) {
        this.renderer = renderer;
        this.tooltipId = 'sam-tooltip-' + (++uniqueId);
        this.tooltipLabel = 'Label ' + uniqueId;
        this.tooltipAriaLabel = this.tooltipLabel + '. Open tooltip';
        this.contentOpen = false;
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent.prototype.closeTooltip = function () {
        this.contentOpen = false;
    };
    TooltipComponent.prototype.onScroll = function () {
        this.updateContainerPos();
    };
    TooltipComponent.prototype.updateContainerPos = function () {
        var top = document.getElementById(this.tooltipId).getBoundingClientRect().top;
        var height = window.innerHeight;
        this.renderer.setStyle(this.tooltipContainer.nativeElement, 'bottom', (height - top) + 16 + 'px');
        var left = document.getElementById(this.tooltipId).getBoundingClientRect().left;
        var width = this.tooltipContainer.nativeElement.getBoundingClientRect().width;
        this.renderer.setStyle(this.tooltipContainer.nativeElement, 'left', left - (width / 2) + 'px');
    };
    TooltipComponent.prototype.toggleTooltip = function () {
        var _this = this;
        this.contentOpen = !this.contentOpen;
        if (!this.contentOpen) {
            document.getElementById(this.tooltipId).focus();
        }
        else {
            setTimeout(function () {
                _this.updateContainerPos();
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "tooltipId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipLabel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "tooltipLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipAriaLabel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "tooltipAriaLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tooltipContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TooltipComponent.prototype, "tooltipContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TooltipComponent.prototype, "onScroll", null);
    TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/components/tooltip/tooltip.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            host: {
                class: 'sam-tooltip'
            },
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/components/tooltip/tooltip.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/cv/cv.component.html":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sam-title\">Sam Merante's Curriculum Vitae</h1>\n\n<div class=\"card mb-3\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs\">\n      <li class=\"nav-item\">\n        <a [ngClass]=\"toggleCards[0] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(0);\">Developer Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [ngClass]=\"toggleCards[1] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(1);\">Employment\n          Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [ngClass]=\"toggleCards[2] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(2);\">Education</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [ngClass]=\"toggleCards[3] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(3);\">Interests</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [ngClass]=\"toggleCards[4] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(4);\">Honours &amp;\n          Achievements</a>\n      </li>\n    </ul>\n  </div>\n  <div [hidden]=\"!toggleCards[0]\" class=\"card-body\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item list-title\">Languages</li>\n      <li class=\"list-group-item\">AngularJS/Angular2-7</li>\n      <li class=\"list-group-item\">JavaScript/HTML5</li>\n      <li class=\"list-group-item\">Java</li>\n      <li class=\"list-group-item\">Java for Android</li>\n      <li class=\"list-group-item\">C#</li>\n      <li class=\"list-group-item\">C++</li>\n      <li class=\"list-group-item\">Python</li>\n      <li class=\"list-group-item\">C</li>\n      <li class=\"list-group-item\">Eiffel</li>\n      <li class=\"list-group-item\">Prolog</li>\n    </ul>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item list-title\">Tech Stack</li>\n      <li class=\"list-group-item\">Front end: JS, AngularJs, Angular </li>\n      <li class=\"list-group-item\">Back end: Java EE, C#</li>\n      <li class=\"list-group-item\">Databases: SQL, Oracle</li>\n      <li class=\"list-group-item\">Machine Learning, AI, Natural Language Processing (NLP)</li>\n      <li class=\"list-group-item\">BDD (Behavior Driven Development), TDD (Test Driven Development) in Java and Angular\n      </li>\n      <li class=\"list-group-item\">Source Control: GIT (Bitbucket, Github)</li>\n      <li class=\"list-group-item\">Project Management: Confluence, JIRA</li>\n      <li class=\"list-group-item\">Agile methodologies</li>\n      <li class=\"list-group-item\">Dev Ops: Jenkins </li>\n      <li class=\"list-group-item\">Source Control: GIT (Bitbucket, Github)</li>\n    </ul>\n  </div>\n  <div [hidden]=\"!toggleCards[1]\" class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        CAPCO - Software Consultant\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        June 2018 - Present\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Worked at a NA bank creating a design system built for front end with angular.</li>\n      <li class=\"list-group-item\">Created\n        reusable and scalable software including common components to be used throughout the online space</li>\n    </ul>\n    <div class=\"row\" style=\"margin-top: 32px;\">\n      <div class=\"col-sm-6 list-bold\">\n        Toronto-Dominion Bank (TD Canada Trust)\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        May 2017 - June 2018\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Worked on a large project involving many different teams on web applications, in Java\n        HTML, and Java script\n        using\n        the angular framework to provide the best user experience.</li>\n      <li class=\"list-group-item\">Created and won second place in a hackathon challenge for TD where I programmed an\n        application from scratch\n        in\n        Java Spring Boot and Angular 6, to innovate the onboarding process.</li>\n      <li class=\"list-group-item\">Developed project and time management skills by working with the agile framework in a\n        fast paced\n        environment\n        meeting critical timeframes given.</li>\n      <li class=\"list-group-item\">Led a group of software developers when given the task of delivering defects and\n        error fixes in a timely\n        manner\n        while ensuring that deadlines were met while producing quality code.</li>\n      <li class=\"list-group-item\">Experienced in delivering quality assurance; wrote Gherkin feature files and\n        behaviour driven development\n        (BDD)\n        test cases using the selenium framework in Java.</li>\n      <li class=\"list-group-item\">Took initiative by training and mentoring new developers; running weekly check in\n        meetings to discuss\n        achievements, events, and news within the technology community.</li>\n      <li class=\"list-group-item\">Managed deployments of the applications to servers using Jenkins to ensure builds are\n        meeting test,\n        security, and\n        automation script completion in preparation for production.</li>\n    </ul>\n    <div class=\"row\" style=\"margin-top: 32px;\">\n      <div class=\"col-sm-6 list-bold\">\n        Real Programming for Kids\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        April 2015 – June 2017\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Managed a class of 4 students from grades 1 – 12 to develop computer science skills\n        which led them be critical\n        problem solvers and analytical thinkers.</li>\n      <li class=\"list-group-item\">Demonstrated leadership skills, and teamwork skills, when faced with problems such as\n        fixing bugs. I supported my\n        team members by communicating my ideas with them to find errors, fix them, and inform management to prevent for\n        future errors.</li>\n      <li class=\"list-group-item\">Developed project and time management skills by working with the agile framework in a\n        fast paced\n        environment\n        meeting critical timeframes given.</li>\n      <li class=\"list-group-item\">Innovated the way classes are taught by allowing students to create their own games\n        from scratch rather than\n        following a set plan, which allowed for more development of programming skills in addition to facilitating\n        creativity.</li>\n      <li class=\"list-group-item\">Showed initiative by creating a program for my team that automates the process of\n        creating report cards, which\n        significantly reduced the time required to complete them</li>\n    </ul>\n  </div>\n  <div [hidden]=\"!toggleCards[2]\" class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"list-title\">\n        E-Health Project, Software Design Course\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item list-bold\">\n        Final Grade: B\n      </li>\n      <li class=\"list-group-item\">\n        Designed an E-Health System to keep track of Doctors, Patients, Medicine, and Prescriptions with a Design by\n        Contract approach using Eiffel. Implemented the system using maps and set data structures along with sorting\n        algorithms. As a result the system prevented dangerous prescription/interactions and ensured safe practices in\n        hospitals.\n      </li>\n    </ul>\n    <div style=\"margin-top:32px\" class=\"row\">\n      <div class=\"list-title\">\n        Data Structure Designs\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item list-bold\">\n        Final Grade: A\n      </li>\n      <li class=\"list-group-item\">\n        Implemented a variety of data structure techniques to solve real world problems such as a Priority Queue to\n        organize patients waiting in an emergency triage.\n      </li>\n    </ul>\n\n    <div style=\"margin-top:32px\" class=\"row\">\n      <div class=\"list-title\">\n        Asymptotic Analysis\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item list-bold\">\n        Final Grade: B+\n      </li>\n      <li class=\"list-group-item\">\n        Analyzed problems based on time/space complexity and determined which data structures will be best suited to\n        solve the problem most efficiently. Problems involved the use of programming techniques such as dynamic\n        programming, greedy algorithms, and memoization.\n      </li>\n    </ul>\n\n    <div style=\"margin-top:32px\" class=\"row\">\n      <div class=\"list-title\">\n        Software Courses\n      </div>\n    </div>\n    <ul class=\"list-group list-group\">\n      <li class=\"list-group-item\">\n        Software Tools\n      </li>\n      <li class=\"list-group-item\">\n        AI and Logic Programming\n      </li>\n      <li class=\"list-group-item\">\n        Computer Organization\n      </li>\n      <li class=\"list-group-item\">\n        Computer Security\n      </li>\n      <li class=\"list-group-item\">\n        Computers, Information and Society\n      </li>\n      <li class=\"list-group-item\">\n        Design and Analysis of Algorithms\n      </li>\n      <li class=\"list-group-item\">\n        Differential Calculus with Applications\n      </li>\n      <li class=\"list-group-item\">\n        Digital Media\n      </li>\n      <li class=\"list-group-item\">\n        Discrete Math\n      </li>\n      <li class=\"list-group-item\">\n        Fundamentals of Data Structures\n      </li>\n      <li class=\"list-group-item\">\n        Integral Calculus with Applications\n      </li>\n      <li class=\"list-group-item\">\n        Mathematical Logic for Computer Science\n      </li>\n      <li class=\"list-group-item\">\n        Net-centric Computing\n      </li>\n      <li class=\"list-group-item\">\n        Operating System Fundamentals\n      </li>\n      <li class=\"list-group-item\">\n        Probability\n      </li>\n      <li class=\"list-group-item\">\n        Professional Practice in Computing\n      </li>\n      <li class=\"list-group-item\">\n        Research Directions in Computing\n      </li>\n      <li class=\"list-group-item\">\n        Software Design\n      </li>\n      <li class=\"list-group-item\">\n        Software Tools\n      </li>\n      <li class=\"list-group-item\">\n        Theory of Computation\n      </li>\n    </ul>\n  </div>\n  <div [hidden]=\"!toggleCards[3]\" class=\"card-body\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">Self improvement</li>\n      <li class=\"list-group-item\">Web development &amp; design</li>\n      <li class=\"list-group-item\">Learning new frameworks and programming languages</li>\n      <li class=\"list-group-item\">Reading books</li>\n      <li class=\"list-group-item\">Playing and creating video games</li>\n      <li class=\"list-group-item\">Keeping active and healthy</li>\n    </ul>\n    <div style=\"margin-top: 32px\" class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        Application Development - Android\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        I enjoy developing mobile games and apps for the android platform, check out my\n        <a class=\"card-link\" target=\"_blank\"\n          href=\"https://play.google.com/store/apps/developer?id=0110+Studios&hl=en\">Google\n          Play developer account.</a>\n      </li>\n    </ul>\n    <div style=\"margin-top: 32px\" class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        Volunteer Experience\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        Helped mentor youth at risk by teaching social and school skills.\n      </li>\n    </ul>\n  </div>\n  <div [hidden]=\"!toggleCards[4]\" class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        Ontario Scholar\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        Awarded to students who have obtained an average of 80% or above in any six Grade 12 University Courses.\n      </li>\n    </ul>\n\n    <div style=\"margin-top:16px\" class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        York University Entrance Scholarship\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        Awarded to students with an average of 90% or above upon graduating from Grade 12.\n      </li>\n    </ul>\n\n    <div style=\"margin-top:16px\" class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        Spring Boot Expert\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        Award upon completion of spring boot <a class=\"card-link\" target=\"_blank\"\n          href=\"https://www.udemy.com/certificate/UC-03Z43GPF/\">Udemy\n          course</a>.\n      </li>\n    </ul>\n\n    <div style=\"margin-top:16px\" class=\"row\">\n      <div class=\"col-sm-6 list-bold\">\n        React\n      </div>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        Award upon completion of React Basic <a class=\"card-link\" target=\"_blank\"\n          href=\"https://www.udemy.com/certificate/UC-CROAYZBT/\">Udemy\n          course</a>.\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cv/cv.component.scss":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 16px auto; }\n\n.list-group-item {\n  background-color: transparent; }\n\n.small {\n  font-size: 1rem; }\n\n.list-title {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: 700; }\n\n.list-bold {\n  font-weight: 700; }\n\n.nav-link {\n  font-size: 1.25rem; }\n\n.nav-link:hover {\n    cursor: pointer; }\n\n.card-header:first-child {\n  position: relative;\n  padding-left: 0px;\n  left: -1px; }\n\n.card-header .card-header-tabs {\n  margin-left: 0px; }\n\n@media screen and (max-width: 768px) {\n  .nav-item {\n    display: block;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvY3YvY3YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsZUFBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFJbkI7O0FBTEQ7SUFHSSxnQkFBZSxFQUNoQjs7QUFFSDtFQUVJLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsV0FBVSxFQUNYOztBQUxIO0VBT0ksaUJBQWdCLEVBQ2pCOztBQUdEO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVyxFQUVkLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdi9jdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDE2cHggYXV0bztcbn1cbi5saXN0LWdyb3VwLWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNtYWxse1xuICBmb250LXNpemU6IDFyZW07XG59XG4ubGlzdC10aXRsZXtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOjAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxpc3QtYm9sZHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uYXYtbGlua3tcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAmOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmNhcmQtaGVhZGVye1xuICAmOmZpcnN0LWNoaWxke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBsZWZ0OiAtMXB4O1xuICB9XG4gIC5jYXJkLWhlYWRlci10YWJze1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cbi5uYXYtaXRlbXtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVComponent", function() { return CVComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CVComponent = /** @class */ (function () {
    function CVComponent() {
        this.toggleCards = [true, false, false, false, false];
    }
    CVComponent.prototype.ngOnInit = function () {
    };
    CVComponent.prototype.toggleCard = function (i) {
        var _this = this;
        this.toggleCards.forEach(function (val, index) {
            _this.toggleCards[index] = false;
            if (index === i)
                _this.toggleCards[index] = true;
        });
    };
    CVComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.scss */ "./src/app/cv/cv.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CVComponent);
    return CVComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-footer text-muted\">\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/smerante/smerante.github.io\">GitHub</a>\n      <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\n      <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\n    </div>\n    <div class=\"col-sm-2\">\n      <span class=\"date\">{{date | date:'MM-dd-yyyy'}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer {\n  margin-top: 128px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQixFQUNsQjs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlcntcbiAgbWFyZ2luLXRvcDogMTI4cHg7XG59XG4uY2FyZC1saW5re1xuICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNTc1cHgpe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRle1xuICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNTc1cHgpe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forum/authenticated/authenticated.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forum/authenticated/authenticated.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" [formGroup]=\"messageForm\" (submit)=\"submitMessage();\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <sam-input-wrapper field_id=\"messagePost\" label=\"Message\">\n        <textarea \n          sam-input id=\"messagePost\" \n          aria-label=\"Enter a message to post in the forum\"\n          [formControl]=\"messageForm.get('message')\"></textarea>\n      </sam-input-wrapper>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <button sam-cta type=\"submit\">Post</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/forum/authenticated/authenticated.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/forum/authenticated/authenticated.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/forum/authenticated/authenticated.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forum/authenticated/authenticated.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticatedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponents", function() { return AuthenticatedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/forum/message.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthenticatedComponents = /** @class */ (function () {
    function AuthenticatedComponents(messageService, authSerivce, router) {
        this.messageService = messageService;
        this.authSerivce = authSerivce;
        this.router = router;
    }
    AuthenticatedComponents.prototype.ngOnInit = function () {
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    AuthenticatedComponents.prototype.submitMessage = function () {
        if (this.messageForm.valid) {
            var data = {
                message: this.messageForm.get('message').value,
                date: new Date(),
                email: this.authSerivce.email
            };
            this.messageService.postMessage(data, this.authSerivce.token).subscribe(function (res) {
                console.log(res);
            });
            this.messageForm.reset();
        }
    };
    AuthenticatedComponents = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'compnents-authenticated',
            template: __webpack_require__(/*! ./authenticated.component.html */ "./src/app/forum/authenticated/authenticated.component.html"),
            styles: [__webpack_require__(/*! ./authenticated.component.scss */ "./src/app/forum/authenticated/authenticated.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthenticatedComponents);
    return AuthenticatedComponents;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.html":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sam-title\">Forum</h1>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button sam-cta (click)=\"reloadMessages();\">\n        <img src=\"assets/reload.png\" alt=\"reload\" class=\"reload\"/>\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"container messageWrapper\" *ngFor=\"let message of messages; let i = index;\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 date\">\n      {{message.date | date: 'MMM d, yyyy'}} - {{message.date | date: 'shortTime'}}\n    </div>\n    <div class=\"col-sm-6 email\">\n      {{message.email}}\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 message\">\n      {{message.message}}\n    </div>\n  </div>\n</div>\n\n<div [hidden]=\"loggedIn\" class=\"container pt-5\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <p class=\"alert-danger\">Please login/create an account to view forum</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 text-center\">\n      <button sam-cta (click)=\"goTo('login');\">Login</button>\n    </div>\n    <div class=\"col-sm-6 text-center\">\n      <button sam-cta (click)=\"goTo('register');\">Register</button>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center p-5\">\n      <button sam-cta (click)=\"logout(); goTo('home');\">Logout</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forum/forum.component.scss":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.messageWrapper {\n  margin: 16px auto;\n  width: 90%;\n  box-shadow: 1px 1px 10px 1px #8888886e;\n  border: 1px solid #aaa9a9;\n  border-radius: 10px; }\n\n.date {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  font-size: 0.75rem;\n  border-right: 1px solid #aaa9a9; }\n\n.email {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  font-size: 0.75rem; }\n\n.message {\n  border-top: 1px solid #aaa9a9;\n  padding: 8px; }\n\n.reload {\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n  display: block; }\n\n@media screen and (max-width: 575.7px) {\n  .date {\n    border-right: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUtEO0VBQ0UsMkJDWmtCLEVEYW5COztBQUVEO0VFZkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRmFoQixlQ2xCa0I7RURtQmxCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBR1VEO0VBQ0UsYUFBWSxFQUNiOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FDL0NEO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVix1Q0hGc0I7RUdHdEIsMEJISm9CO0VHS3BCLG9CQUFtQixFQUNwQjs7QUFDRDtFRlJFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUVNaEIsbUJBQWtCO0VBQ2xCLGdDSFZvQixFR1dyQjs7QUFFRDtFRmRFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUVZaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsOEJIbEJvQjtFR21CcEIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUVEO0VBQ0U7SUFDRSxnQkFBZSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9ydW0vZm9ydW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21wb25lbnRzL2NvbXBvbmVudHMuY29tcG9uZW50LnNjc3MnO1xuXG4ubWVzc2FnZVdyYXBwZXJ7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4ICRzaGFkb3ctY29sb3I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZGF0ZXtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbn1cblxuLmVtYWlse1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLm1lc3NhZ2V7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBwYWRkaW5nOiA4cHg7XG59XG4ucmVsb2Fke1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NS43cHgpIHtcbiAgLmRhdGV7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/forum/message.service.ts");





var ForumComponent = /** @class */ (function () {
    function ForumComponent(auth, router, route, messageService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.messageService = messageService;
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.auth.isVerified();
        console.log('user verified and logged in :', this.loggedIn);
        if (this.loggedIn) {
            this.router.navigate(['authenticated'], { relativeTo: this.route });
        }
        this.messages = [];
        this.reloadMessages();
    };
    ForumComponent.prototype.goTo = function (page) {
        this.router.navigate(['/' + page]);
    };
    ForumComponent.prototype.logout = function () {
        this.auth.logout();
    };
    ForumComponent.prototype.reloadMessages = function () {
        var _this = this;
        this.messageService.getMessage().subscribe(function (res) {
            if (res) {
                _this.messages = [];
                console.log(res);
                Object.keys(res).forEach(function (k) {
                    _this.messages.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res[k], { key: k }));
                });
                _this.messages.reverse();
            }
        });
    };
    ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.scss */ "./src/app/forum/forum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/forum/message.service.ts":
/*!******************************************!*\
  !*** ./src/app/forum/message.service.ts ***!
  \******************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MessageService = /** @class */ (function () {
    function MessageService(httpClient) {
        this.httpClient = httpClient;
    }
    MessageService.prototype.postMessage = function (data, token) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append('auth', token);
        return this.httpClient.post('https://sam-merante.firebaseio.com/messages.json', data, {
            observe: 'body',
            responseType: 'json',
            params: httpParams
        });
    };
    MessageService.prototype.getMessage = function () {
        return this.httpClient.get('https://sam-merante.firebaseio.com/messages.json', {
            observe: 'body',
            responseType: 'json'
        });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/game/GameSession.interface.ts":
/*!***********************************************!*\
  !*** ./src/app/game/GameSession.interface.ts ***!
  \***********************************************/
/*! exports provided: GameSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSession", function() { return GameSession; });
var GameSession = /** @class */ (function () {
    function GameSession() {
        this.board = [];
    }
    GameSession.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return GameSession;
}());



/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1 class=\"sam-title\">Tic Tac Toe</h1>\n  <p class=\"lead\">Simple online tic tac toe game</p>\n</div>\n\n<div *ngIf=\"!joinedGame\" class=\"container-fluid\">\n  <div class=\"row text-center\">\n    <div class=\"col-sm-3\" style=\"margin: 0 auto;\">\n      <sam-input-wrapper field_id=\"userName\" label=\"User name\">\n        <input [(ngModel)]=\"userName\" sam-input id=\"userName\" aria-label=\"Please enter your user name to play\" />\n      </sam-input-wrapper>\n    </div>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-sm-12\">\n      <button sam-cta (click)=\"joinGame();\">Join game</button>\n    </div>\n  </div>\n</div>\n\n\n<game-screen *ngIf=\"joinedGame\" [hosting]=\"hosting\" [playersName]=\"userName\" [player]=\"player\" [hostSession]=\"hostSession\" (leave)=\"leftGame();\"></game-screen>"

/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.service */ "./src/app/game/game.service.ts");



var GameComponent = /** @class */ (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.joinedGame = false;
        this.userName = '';
        this.player = '';
    }
    GameComponent.prototype.joinGame = function () {
        var _this = this;
        if (this.userName != '') {
            this.gameService.getGames().subscribe(function (res) {
                if (res == null) {
                    console.warn('No Response when trying to join a game, instead will host a game');
                    _this.gameService.hostGame(_this.userName).subscribe(function (res) {
                        _this.hostSession = res['name'];
                        _this.joinedGame = true;
                        _this.player = 'x';
                        _this.hosting = true;
                        console.warn('Creating game as host ' + _this.hostSession);
                        _this.gameService.updateHostSession(_this.hostSession).subscribe(function (res) {
                            console.log('Updated host session: ', res);
                        });
                    });
                }
                else {
                    console.warn('Found sessions: ', res);
                    var foundGame_1 = false;
                    var gameSession_1 = '';
                    Object.keys(res).forEach(function (k) {
                        if (!res[k]['joinName']) {
                            foundGame_1 = true;
                            gameSession_1 = k;
                            _this.hostSession = gameSession_1;
                        }
                    });
                    if (foundGame_1) {
                        _this.gameService.updateGameSession(_this.userName, gameSession_1).subscribe(function (res) {
                            console.log('Updated game session: ', res);
                            _this.joinedGame = true;
                            _this.hosting = false;
                            _this.player = 'o';
                        });
                    }
                    else {
                        console.warn('Cant find empty session, creating game');
                        _this.gameService.hostGame(_this.userName).subscribe(function (res) {
                            _this.hostSession = res['name'];
                            _this.joinedGame = true;
                            _this.hosting = true;
                            console.warn('Creating game as host ' + _this.hostSession);
                            _this.player = 'x';
                            _this.gameService.updateHostSession(_this.hostSession).subscribe(function (res) {
                                console.log('Updated host session: ', res);
                            });
                        });
                    }
                }
            });
        }
    };
    GameComponent.prototype.ngOnDestroy = function () {
    };
    GameComponent.prototype.leftGame = function () {
        this.joinedGame = false;
        this.gameService.leaveGame(!!this.hostSession ? this.hostSession : null).subscribe(function (res) {
            console.warn('leave game');
        });
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sam-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/game/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _GameSession_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameSession.interface */ "./src/app/game/GameSession.interface.ts");





var GameService = /** @class */ (function () {
    function GameService(httpClient) {
        this.httpClient = httpClient;
    }
    GameService.prototype.getGames = function () {
        return this.httpClient.get('https://sam-merante.firebaseio.com/game.json', {
            observe: 'body',
            responseType: 'json'
        });
    };
    GameService.prototype.hostGame = function (userName) {
        var newSession = {
            hostName: userName,
            id: new Date(),
            playersTurn: 'x'
        };
        return this.httpClient.post('https://sam-merante.firebaseio.com/game.json', newSession, {
            observe: 'body',
            responseType: 'json'
        });
    };
    GameService.prototype.updateGameSession = function (userName, sessionId) {
        return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json', { joinName: userName }, {
            observe: 'body',
            responseType: 'json'
        });
    };
    GameService.prototype.updatePlayersTurn = function (sessionId, value) {
        return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json', { playersTurn: value }, {
            observe: 'body',
            responseType: 'json'
        });
    };
    GameService.prototype.updateBoard = function (sessionId, value) {
        return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json', { board: value }, {
            observe: 'body',
            responseType: 'json'
        });
    };
    GameService.prototype.getGameSession = function (sessionId) {
        return this.httpClient.get('https://sam-merante.firebaseio.com/game/' + sessionId + '.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _GameSession_interface__WEBPACK_IMPORTED_MODULE_4__["GameSession"]().deserialize(res); }));
    };
    GameService.prototype.updateHostSession = function (sessionId) {
        return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json', { sessionId: sessionId }, {
            observe: 'body',
            responseType: 'json'
        });
    };
    GameService.prototype.leaveGame = function (hostSession) {
        if (hostSession) {
            return this.httpClient.delete('https://sam-merante.firebaseio.com/game/' + hostSession + '.json');
        }
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/game/screen/screen.component.html":
/*!***************************************************!*\
  !*** ./src/app/game/screen/screen.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span  class=\"playersTurn\">{{name}} vs {{opponentsName}}</span> \n<div class=\"playersTurn\">\n  {{playerXTurn ? xName + '\\'s move' : oName + '\\'s move'}}\n  <br/>\n  {{playerWon ? '' +playersWinMessage : ''}}\n</div>\n<div class=\"board\">\n  <button \n    *ngFor=\"let b of board; let i = index;\" \n    [id]=\"'square-' + i\" \n    class=\"board--button\"\n    (click)=\"pressButton(i)\"\n    [disabled]=\"!yourTurn || playerWon || b == 0 ? true : b == 1 ? true : false\">\n    <span class=\"board--button__label\" [attr.player2]=\"b == 0 ? true : false\">\n      {{(b == 0 ? 'O' : b == 1 ? 'X' : '')}}\n    </span>\n  </button>\n</div>\n<button sam-cta class=\"playersTurn\" (click)=\"leaveGame()\">Leave</button>\n"

/***/ }),

/***/ "./src/app/game/screen/screen.component.scss":
/*!***************************************************!*\
  !*** ./src/app/game/screen/screen.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.board {\n  width: 195px;\n  height: 200px;\n  margin: 0 auto;\n  border: 1px solid #aaa9a9; }\n\n.board--button {\n    position: relative;\n    padding: 3px;\n    margin: 0px;\n    width: 64px;\n    height: 64px;\n    background: transparent;\n    border: 1px solid #aaa9a9;\n    cursor: pointer; }\n\n.board--button:focus {\n      outline: none;\n      box-shadow: 4px 4px 15px 0px #8888886e; }\n\n.board--button:focus:before {\n        left: 0;\n        width: 100%;\n        border-radius: 0.25rem; }\n\n.board--button:focus:after {\n        top: 0px;\n        height: 100%;\n        border-radius: 0.25rem; }\n\n.board--button:hover {\n      outline: none;\n      box-shadow: 4px 4px 15px 0px #8888886e; }\n\n.board--button:hover:before {\n        left: 0;\n        width: 100%;\n        border-radius: 0.25rem; }\n\n.board--button:hover:after {\n        top: 0px;\n        height: 100%;\n        border-radius: 0.25rem; }\n\n.board--button:active {\n      background: #027fe6;\n      color: white; }\n\n.board--button:disabled {\n      background: #f1f1f1;\n      cursor: not-allowed;\n      border: black; }\n\n.board--button__label {\n      color: #495057;\n      font-weight: 300;\n      line-height: 4rem;\n      font-size: 4rem;\n      position: absolute;\n      top: 0px;\n      left: 12px; }\n\n.board--button__label[player2=\"true\"] {\n        left: 9px; }\n\n.playersTurn {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  display: block;\n  margin: 8px auto;\n  width: 194px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvZ2FtZS9zY3JlZW4vc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFLRDtFQUNFLDJCQ1prQixFRGFuQjs7QUFFRDtFRWZFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUZhaEIsZUNsQmtCO0VEbUJsQixnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUdVRDtFQUNFLGFBQVksRUFDYjs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQy9DRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsZUFBYztFQUNkLDBCSEpvQixFR2dFckI7O0FBM0RDO0lBQ0UsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixZQUFXO0lBQ1gsWUFBVztJQUNYLGFBQVk7SUFDWix3QkFBdUI7SUFDdkIsMEJIWmtCO0lHYWxCLGdCQUFlLEVBa0RoQjs7QUExREE7TUFVRyxjQUFhO01BQ2IsdUNIZmtCLEVHMEJuQjs7QUF0QkY7UUFhSyxRQUFPO1FBQ1AsWUFBVztRQUNYLHVCQUFzQixFQUN2Qjs7QUFoQko7UUFrQkssU0FBUTtRQUNSLGFBQVk7UUFDWix1QkFBc0IsRUFDdkI7O0FBckJKO01Bd0JHLGNBQWE7TUFDYix1Q0g3QmtCLEVHd0NuQjs7QUFwQ0Y7UUEyQkssUUFBTztRQUNQLFlBQVc7UUFDWCx1QkFBc0IsRUFDdkI7O0FBOUJKO1FBZ0NLLFNBQVE7UUFDUixhQUFZO1FBQ1osdUJBQXNCLEVBQ3ZCOztBQW5DSjtNQXNDRyxvQkFBbUI7TUFDbkIsYUFBWSxFQUNiOztBQXhDRjtNQTBDRyxvQkFBbUI7TUFDbkIsb0JBQW1CO01BQ25CLGNBQWEsRUFDZDs7QUFDRDtNQUNFLGVIdERjO01HdURkLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZixtQkFBa0I7TUFDbEIsU0FBUTtNQUNSLFdBQVUsRUFJWDs7QUFYQTtRQVNHLFVBQVMsRUFDVjs7QUFJUDtFRmxFRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VFZ0VoQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3NjcmVlbi9zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzXCI7XG5cbi5ib2FyZCB7XG4gIHdpZHRoOiAxOTVweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICYtLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAxNXB4IDBweCAkc2hhZG93LWNvbG9yO1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiA0cHggNHB4IDE1cHggMHB4ICRzaGFkb3ctY29sb3I7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICB9XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMjdmZTY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBib3JkZXI6IGJsYWNrO1xuICAgIH1cbiAgICAmX19sYWJlbCB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAmW3BsYXllcjI9XCJ0cnVlXCJdIHtcbiAgICAgICAgbGVmdDogOXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnBsYXllcnNUdXJuIHtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweCBhdXRvO1xuICB3aWR0aDogMTk0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/screen/screen.component.ts":
/*!*************************************************!*\
  !*** ./src/app/game/screen/screen.component.ts ***!
  \*************************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ScreenComponent = /** @class */ (function () {
    function ScreenComponent(gameService) {
        this.gameService = gameService;
        this.board = [];
        this.yourTurn = false;
        this.xName = 'Unknown';
        this.oName = 'Unknown';
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
    ScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.board = [
            -1, -1, -1,
            -1, -1, -1,
            -1, -1, -1
        ];
        if (this.hosting) {
            this.gameService.updateBoard(this.sessionId, this.board).subscribe(function (res) {
                console.warn('Updated board: ', res);
            });
        }
        this.playerXTurn = false;
        this.playerWon = false;
        this.gameSessionSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(5000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.gameService.getGameSession(_this.sessionId); }))
            .subscribe(function (res) {
            console.warn(res);
            if (res.hostName == undefined &&
                res.id == undefined &&
                res.joinName == undefined &&
                res.playersTurn == undefined &&
                res.sessionId == undefined) {
                _this.leaveGame();
            }
            if (res.board.length > 0) {
                _this.board = res.board;
                console.warn('geting updated board');
                _this.playerWon = _this.checkWinState() == false ? false : true;
                if (_this.playerWon) {
                    _this.playersWinMessage = _this.checkWinState();
                    setTimeout(function () {
                        _this.leaveGame();
                    }, 5000);
                }
            }
            if (_this.hosting) {
                _this.opponentsName = res.joinName;
                _this.oName = _this.opponentsName ? _this.opponentsName : 'Unknown';
                _this.xName = _this.name ? _this.name : 'Unknown';
            }
            else {
                _this.opponentsName = res.hostName;
                _this.xName = _this.opponentsName ? _this.opponentsName : 'Unknown';
                _this.oName = _this.name ? _this.name : 'Unknown';
            }
            if (_this.hosting && res.playersTurn === 'x') {
                _this.yourTurn = true;
                _this.playerXTurn = true;
            }
            else if (_this.hosting && res.playersTurn === 'o') {
                _this.yourTurn = false;
                _this.playerXTurn = false;
            }
            else if (!_this.hosting && res.playersTurn === 'x') {
                _this.yourTurn = false;
                _this.playerXTurn = true;
            }
            else if (!_this.hosting && res.playersTurn === 'o') {
                _this.yourTurn = true;
                _this.playerXTurn = false;
            }
        });
    };
    ScreenComponent.prototype.pressButton = function (index) {
        if (this.hosting) {
            this.yourTurn = false;
            this.gameService.updatePlayersTurn(this.sessionId, 'o').subscribe(function (res) {
                console.warn('Next players turn: ', res);
            });
        }
        else {
            this.yourTurn = false;
            this.gameService.updatePlayersTurn(this.sessionId, 'x').subscribe(function (res) {
                console.warn('Next players turn: ', res);
            });
        }
        var letter = this.playerXTurn ? 1 : 0;
        this.playerXTurn = !this.playerXTurn;
        this.board[index] = letter;
        this.playerWon = this.checkWinState() == false ? false : true;
        if (this.playerWon) {
            this.playersWinMessage = this.checkWinState();
        }
        this.gameService.updateBoard(this.sessionId, this.board).subscribe(function (res) {
            console.warn('Updated board: ', res);
        });
    };
    ScreenComponent.prototype.checkWinState = function () {
        if (this.state(0) == 0 && this.state(1) == 0 && this.state(2) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(3) == 0 && this.state(4) == 0 && this.state(5) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(6) == 0 && this.state(7) == 0 && this.state(8) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(0) == 0 && this.state(4) == 0 && this.state(8) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(2) == 0 && this.state(4) == 0 && this.state(6) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(0) == 0 && this.state(3) == 0 && this.state(6) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(1) == 0 && this.state(4) == 0 && this.state(7) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(2) == 0 && this.state(5) == 0 && this.state(8) == 0) {
            return this.oName + ' is the winner';
        }
        if (this.state(0) == 1 && this.state(1) == 1 && this.state(2) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(3) == 1 && this.state(4) == 1 && this.state(5) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(6) == 1 && this.state(7) == 1 && this.state(8) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(0) == 1 && this.state(4) == 1 && this.state(8) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(2) == 1 && this.state(4) == 1 && this.state(6) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(0) == 1 && this.state(3) == 1 && this.state(6) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(1) == 1 && this.state(4) == 1 && this.state(7) == 1) {
            return this.xName + ' is the winner';
        }
        if (this.state(2) == 1 && this.state(5) == 1 && this.state(8) == 1) {
            return this.xName + ' is the winner';
        }
        return false;
    };
    ScreenComponent.prototype.state = function (index) {
        return this.board[index];
    };
    ScreenComponent.prototype.leaveGame = function () {
        this.gameSessionSub.unsubscribe();
        this.leave.emit();
    };
    ScreenComponent.prototype.ngOnDestroy = function () {
        this.gameSessionSub.unsubscribe();
        this.leave.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostSession'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ScreenComponent.prototype, "sessionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('playersName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ScreenComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('player'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ScreenComponent.prototype, "player", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hosting'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ScreenComponent.prototype, "hosting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ScreenComponent.prototype, "leave", void 0);
    ScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'game-screen',
            template: __webpack_require__(/*! ./screen.component.html */ "./src/app/game/screen/screen.component.html"),
            styles: [__webpack_require__(/*! ./screen.component.scss */ "./src/app/game/screen/screen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], ScreenComponent);
    return ScreenComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sam-navbar\" [ngClass]=\"{'scrolled': scrollDown}\">\n  <div class=\"sam-navbar__brand\">\n    <a routerLink=\"/home\" class=\"sam-navbar__brand--link\">\n      <img class=\"sam-navbar__brand--img\" src=\"assets/profile.png\">\n      <span class=\"sam-navbar__brand--link-label\">Sam Merante</span>\n    </a>\n  </div>\n  <button class=\"sam-navbar__toggle-menu\" [attr.toggle]=\"toggle\" (click)=\"openNav();\" type=\"button\"\n    data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"sam-navbar__toggle-menu--chevron\"></span>\n  </button>\n  <div class=\"sam-navbar__menu\" [ngClass]=\"{'expanded': toggle}\">\n    <ul class=\"sam-navbar__menu--items\">\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/home\" (click)=\"openNav();\" routerLinkActive=\"active\" class=\"sam-navbar--link\">Home</a>\n      </li>\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/cv\" (click)=\"openNav();\" routerLinkActive=\"active\" class=\"sam-navbar--link\">CV</a>\n      </li>\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/projects\" (click)=\"openNav();\" routerLinkActive=\"active\" class=\"sam-navbar--link\">Projects</a>\n      </li>\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/code\" (click)=\"openNav();\" routerLinkActive=\"active\" class=\"sam-navbar--link\">Code</a>\n      </li>\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/components\" (click)=\"openNav();\" routerLinkActive=\"active\"\n          class=\"sam-navbar--link\">Components</a>\n      </li>\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/game\" (click)=\"openNav();\" routerLinkActive=\"active\" class=\"sam-navbar--link\">Game</a>\n      </li>\n      <li class=\"sam-navbar__menu--item\">\n        <a routerLink=\"/forum\" (click)=\"openNav();\" routerLinkActive=\"active\" class=\"sam-navbar--link\">Forum</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-bottom: 16px;\n  width: 100%;\n  height: 72px; }\n\nlabel > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.sam-navbar {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  display: flex;\n  max-width: 100%;\n  padding: 4px 0px;\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 99999;\n  background: white;\n  box-shadow: 1px 1px 10px 1px #8888886e;\n  transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease; }\n\n.sam-navbar.scrolled {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n\n.sam-navbar__brand {\n    display: inline-flex;\n    flex: 1 1 auto;\n    padding: 0px;\n    margin: 0px 0px 0px 128px; }\n\n@media screen and (max-width: 1024px) {\n      .sam-navbar__brand {\n        margin-left: 16px; } }\n\n.sam-navbar__brand--img {\n      display: inline-block;\n      height: 64px;\n      width: 42px; }\n\n.sam-navbar__brand--link {\n      display: inline-table;\n      color: #495057; }\n\n.sam-navbar__brand--link:hover {\n        text-decoration: none;\n        color: #000000; }\n\n.sam-navbar__brand--link-label {\n        font-size: 1.5rem;\n        padding: 0px 16px;\n        display: table-cell;\n        vertical-align: middle; }\n\n.sam-navbar__toggle-menu {\n    display: none; }\n\n@media screen and (max-width: 768px) {\n      .sam-navbar__toggle-menu {\n        display: inline-block;\n        position: fixed;\n        right: 0px;\n        height: 64px;\n        padding: 0px 16px;\n        margin: 0px 12px;\n        background: none;\n        border: none; }\n        .sam-navbar__toggle-menu--chevron {\n          display: block;\n          width: 30px;\n          height: 3px;\n          background-color: #495057;\n          margin: 15px 0;\n          transition: all 0.3s ease;\n          -webkit-transition: all 0.3s ease;\n          -moz-transition: all 0.3s ease;\n          -o-transition: all 0.3s ease; }\n          .sam-navbar__toggle-menu--chevron::before {\n            transition: all 0.3s ease;\n            display: block;\n            content: \"\";\n            display: block;\n            position: relative;\n            top: -8px;\n            width: 30px;\n            height: 3px;\n            background-color: #495057; }\n          .sam-navbar__toggle-menu--chevron::after {\n            transition: all 0.3s ease;\n            -webkit-transition: all 0.3s ease;\n            -moz-transition: all 0.3s ease;\n            -o-transition: all 0.3s ease;\n            display: block;\n            position: relative;\n            top: 6px;\n            content: \"\";\n            width: 30px;\n            height: 3px;\n            background-color: #495057; } }\n\n.sam-navbar__toggle-menu[toggle=\"true\"] .sam-navbar__toggle-menu--chevron {\n      height: 0px; }\n\n.sam-navbar__toggle-menu[toggle=\"true\"] .sam-navbar__toggle-menu--chevron::before {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        top: -2px; }\n\n.sam-navbar__toggle-menu[toggle=\"true\"] .sam-navbar__toggle-menu--chevron::after {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        top: -5px; }\n\n.sam-navbar__menu {\n    display: inline-flex;\n    flex: 0 0 auto;\n    padding: 0px;\n    margin: 0px;\n    position: relative; }\n\n.sam-navbar__menu--items {\n      display: inline-block;\n      padding: 0px;\n      margin: 0px 128px 0px 0px;\n      list-style: none; }\n\n@media screen and (max-width: 1024px) {\n        .sam-navbar__menu--items {\n          margin-right: 16px; } }\n\n.sam-navbar__menu--item {\n      display: inline-table;\n      height: 100%;\n      margin: 0px;\n      width: 108px;\n      text-align: center; }\n\n@media screen and (max-width: 1024px) {\n        .sam-navbar__menu--item {\n          width: 64px; } }\n\n@media screen and (max-width: 768px) {\n      .sam-navbar__menu {\n        visibility: hidden;\n        position: fixed;\n        top: 64px;\n        left: 0px;\n        width: calc(100% - 2px);\n        height: calc(100% - 64px);\n        -webkit-transform: translateY(100vh);\n                transform: translateY(100vh);\n        background-color: #ffffff;\n        overflow: scroll;\n        transition: all 0.3s ease;\n        -webkit-transition: all 0.3s ease;\n        -moz-transition: all 0.3s ease;\n        -o-transition: all 0.3s ease; }\n        .sam-navbar__menu.expanded {\n          visibility: visible;\n          -webkit-transform: translateY(0);\n                  transform: translateY(0); }\n        .sam-navbar__menu--items {\n          width: 100%;\n          margin: 0px; }\n        .sam-navbar__menu--item {\n          display: block;\n          height: auto;\n          width: 100%; }\n        .sam-navbar__menu .sam-navbar--link {\n          display: block;\n          text-align: left;\n          font-size: 1.5rem;\n          padding: 8px 16px; }\n          .sam-navbar__menu .sam-navbar--link.active {\n            border: 2px solid #027fe6; } }\n\n.sam-navbar--link {\n    text-decoration: none;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    padding: 0px 8px;\n    display: table-cell;\n    vertical-align: middle; }\n\n.sam-navbar--link:hover {\n      text-decoration: none;\n      color: #000000; }\n\n.sam-navbar--link.active {\n      border-bottom: 2px solid #027fe6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsWUFBVztFQUNYLGFBQVksRUFDYjs7QUNMRDtFQUNFLGVBQWM7RUFDZCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSwyQkNaa0IsRURhbkI7O0FBRUQ7RUVmRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VGYWhCLGVDbEJrQjtFRG1CbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FHVUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUM7RUFERjtJQUVJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLFVBQVMsRUFFWixFQUFBOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUp6Q0Q7RUdQRSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VIS2hCLGNBQWE7RUFDYixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLFlBQVc7RUFDWCxTQUFRO0VBQ1IsVUFBUztFQUNULGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsdUNBQXNDO0VBQ3RDLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsK0JBQThCO0VBQzlCLDZCQUE0QixFQTJLN0I7O0FBMUxEO0lBaUJJLHFDQUE0QjtZQUE1Qiw2QkFBNEIsRUFDN0I7O0FBQ0Q7SUFDRSxxQkFBb0I7SUFDcEIsZUFBYztJQUNkLGFBQVk7SUFDWiwwQkFBeUIsRUF3QjFCOztBQXRCQztNQU5GO1FBT0ksa0JBQWlCLEVBcUJwQixFQUFBOztBQW5CQztNQUNFLHNCQUFxQjtNQUNyQixhQUFZO01BQ1osWUFBVyxFQUNaOztBQUNEO01BQ0Usc0JBQXFCO01BQ3JCLGVFM0NjLEVGc0RmOztBQWJBO1FBSUcsc0JBQXFCO1FBQ3JCLGVFMUNPLEVGMkNSOztBQUNEO1FBQ0Usa0JBQWlCO1FBQ2pCLGtCQUFpQjtRQUNqQixvQkFBbUI7UUFDbkIsdUJBQXNCLEVBQ3ZCOztBQUdMO0lBQ0UsY0FBYSxFQTJEZDs7QUExREM7TUFGRjtRQUdJLHNCQUFxQjtRQUNyQixnQkFBZTtRQUNmLFdBQVU7UUFDVixhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLGlCQUFnQjtRQUNoQixpQkFBZ0I7UUFDaEIsYUFBWSxFQWtEZjtRQWpERztVQUNFLGVBQWM7VUFDZCxZQUFXO1VBQ1gsWUFBVztVQUNYLDBCRXZFWTtVRndFWixlQUFjO1VBQ2QsMEJBQXlCO1VBQ3pCLGtDQUFpQztVQUNqQywrQkFBOEI7VUFDOUIsNkJBQTRCLEVBeUI3QjtVQWxDQTtZQVdHLDBCQUF5QjtZQUN6QixlQUFjO1lBQ2QsWUFBVztZQUNYLGVBQWM7WUFDZCxtQkFBa0I7WUFDbEIsVUFBUztZQUNULFlBQVc7WUFDWCxZQUFXO1lBQ1gsMEJFdEZVLEVGdUZYO1VBcEJGO1lBc0JHLDBCQUF5QjtZQUN6QixrQ0FBaUM7WUFDakMsK0JBQThCO1lBQzlCLDZCQUE0QjtZQUM1QixlQUFjO1lBQ2QsbUJBQWtCO1lBQ2xCLFNBQVE7WUFDUixZQUFXO1lBQ1gsWUFBVztZQUNYLFlBQVc7WUFDWCwwQkVuR1UsRUZvR1gsRUFBQTs7QUE1Q047TUFpREssWUFBVyxFQVNaOztBQTFESjtRQW1ETyxpQ0FBd0I7Z0JBQXhCLHlCQUF3QjtRQUN4QixVQUFTLEVBQ1Y7O0FBckROO1FBdURPLGtDQUF5QjtnQkFBekIsMEJBQXlCO1FBQ3pCLFVBQVMsRUFDVjs7QUFJUDtJQUNFLHFCQUFvQjtJQUNwQixlQUFjO0lBQ2QsYUFBWTtJQUNaLFlBQVc7SUFDWCxtQkFBa0IsRUF5RG5COztBQXhEQztNQUNFLHNCQUFxQjtNQUNyQixhQUFZO01BQ1osMEJBQXlCO01BQ3pCLGlCQUFnQixFQUlqQjs7QUFIQztRQUxGO1VBTUksbUJBQWtCLEVBRXJCLEVBQUE7O0FBQ0Q7TUFDRSxzQkFBcUI7TUFDckIsYUFBWTtNQUNaLFlBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCLEVBSW5COztBQUhDO1FBTkY7VUFPSSxZQUFXLEVBRWQsRUFBQTs7QUFDRDtNQXpCRjtRQTBCSSxtQkFBa0I7UUFDbEIsZ0JBQWU7UUFDZixVQUFTO1FBQ1QsVUFBUztRQUNULHdCQUF1QjtRQUN2QiwwQkFBeUI7UUFDekIscUNBQTRCO2dCQUE1Qiw2QkFBNEI7UUFDNUIsMEJFakpTO1FGa0pULGlCQUFnQjtRQUNoQiwwQkFBeUI7UUFDekIsa0NBQWlDO1FBQ2pDLCtCQUE4QjtRQUM5Qiw2QkFBNEIsRUF3Qi9CO1FBOURBO1VBd0NLLG9CQUFtQjtVQUNuQixpQ0FBd0I7a0JBQXhCLHlCQUF3QixFQUN6QjtRQUNEO1VBQ0UsWUFBVztVQUNYLFlBQVcsRUFDWjtRQUNEO1VBQ0UsZUFBYztVQUNkLGFBQVk7VUFDWixZQUFXLEVBQ1o7UUFuREo7VUFxREssZUFBYztVQUNkLGlCQUFnQjtVQUNoQixrQkFBaUI7VUFDakIsa0JBQWlCLEVBSWxCO1VBNURKO1lBMERPLDBCRTlLVSxFRitLWCxFQUFBOztBQUlQO0lBQ0Usc0JBQXFCO0lHcEx2QixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsZURKa0I7SUNLbEIsaUJBQWdCO0lIa0xkLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsdUJBQXNCLEVBUXZCOztBQWJBO01BT0csc0JBQXFCO01BQ3JCLGVFeExTLEVGeUxWOztBQVRGO01BV0csaUNFOUxjLEVGK0xmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcycHg7XG59XG5AaW1wb3J0IFwiLi4vY29tcG9uZW50cy9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzXCI7XG5cbi5zYW0tbmF2YmFyIHtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHB4IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4ICM4ODg4ODg2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICYuc2Nyb2xsZWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbiAgJl9fYnJhbmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDEyOHB4O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG4gICAgJi0taW1nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIHdpZHRoOiA0MnB4O1xuICAgIH1cbiAgICAmLS1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICB9XG4gICAgICAmLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX190b2dnbGUtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgbWFyZ2luOiAwcHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAmLS1jaGV2cm9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLThweDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJlt0b2dnbGU9XCJ0cnVlXCJdIHtcbiAgICAgICYgLnNhbS1uYXZiYXJfX3RvZ2dsZS1tZW51LS1jaGV2cm9uIHtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJl9fbWVudSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLS1pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW46IDBweCAxMjhweCAwcHggMHB4O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICAgICYtLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB3aWR0aDogMTA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDY0cHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICAgICYtLWl0ZW1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgICAgJi0taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnNhbS1uYXZiYXItLWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi0tbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwibGFiZWwgPiAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21peGlucy5zY3NzXCI7XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgJG1haW4tY29sb3I7XG59XG5cbi5zYW0tdGl0bGUge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiR0ZXh0LWNvbG9yOiAjNDk1MDU3O1xuJG1haW4tY29sb3I6ICMwMjdmZTY7XG4kYm9yZGVyLWNvbG9yOiAjYWFhOWE5O1xuJHNoYWRvdy1jb2xvcjogIzg4ODg4ODZlO1xuJGJsYWNrOiAjMDAwMDAwOyBcbiR3aGl0ZTogI2ZmZmZmZjtcbiRyZWQ6ICNmYzAzMDM7IFxuIiwiQG1peGluIGJhc2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbkBtaXhpbiBwc2V1ZG8tYm9yZGVyIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxufVxuXG4uY29sLXNtLTYge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2FyZC1saW5rIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uZGF0ZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.breakpointSize = 768;
        this.scrollDown = false;
        this.currentScrollOffset = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.toggle = false;
    };
    HeaderComponent.prototype.openNav = function () {
        if (window.innerWidth < this.breakpointSize) {
            this.toggle = !this.toggle;
        }
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
    };
    HeaderComponent.prototype.onScroll = function () {
        var limit = document.body.offsetHeight - window.innerHeight;
        if (window.pageYOffset > 0 && Math.abs(window.pageYOffset) < Math.abs(limit)) {
            this.scrollDown = !this.toggle && this.currentScrollOffset < window.pageYOffset ? true : false;
            this.currentScrollOffset = window.pageYOffset;
        }
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "onScroll", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img src=\"assets/profile.png\" class=\"card-img-top\" alt=\"Profile picture of sam\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Sam Merante</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Software Developer</h6>\n    <p class=\"card-text\">\n      I am a York University graduate with a bachelor degree in Computer Science from the Lassonde School of Engineering. I have several years of programming\n      experience in languages such as Java, AngularJS/2+, C++, Python, C#, C, among other languages.\n    </p>\n    <p class=\"card-text\">\n      I have experience both in front end and back end at the enterprise level for major North American\n      banks.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 32px auto;\n  margin-top: 0px; }\n\n.card-img-top {\n  width: 80px;\n  margin: 8px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgd2lkdGg6IDkwJTsgXG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uY2FyZC1pbWctdG9we1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h1 class=\"display-5 text-center\">Login</h1>\n      </div>\n      <div class=\"card-body\">\n        <div aria-live=\"assertive\" [attr.invalid]=\"submitted && (loginForm.invalid || errorMessage !=='')\" class=\"invalid-alert\">\n          <span [attr.invalid]=\"submitted && loginForm.get('email').errors &&  loginForm.get('email').errors.required\" class=\"invalid-message\">\n              - Please enter an email\n          </span>\n          <span [attr.invalid]=\"submitted && loginForm.get('email').errors && loginForm.get('email').errors.email\" class=\"invalid-message\">\n              - Please enter a valid email\n          </span>\n          <span [attr.invalid]=\"submitted && loginForm.get('password').errors && loginForm.get('password').errors.required\" class=\"invalid-message\">\n              - Please enter a password\n          </span>\n          <span [attr.invalid]=\"errorMessage !== ''\" class=\"invalid-message\">\n              {{errorMessage}} <span *ngIf=\"errorMessage === 'User not verified yet'\"><a tabindex=\"0\" style=\"cursor: pointer\" (click)=\"resendVerication();\" >Send verification email again</a></span>\n          </span>\n        </div>\n        <form [formGroup]=\"loginForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 input-container\">\n              <span class=\"inputWrapper\">\n                <input \n                id=\"email\"\n                class=\"formInput\"  \n                type=\"email\" \n                aria-label=\"Please enter your email to register\" \n                [formControl]=\"loginForm.get('email')\"\n                [attr.invalid]=\"submitted && loginForm.get('email').invalid\"/>\n                <label [attr.invalid]=\"submitted && loginForm.get('email').invalid\" [attr.hasVal]=\"loginForm.get('email').value !== ''\"class=\"floating-label\" for=\"email\">Email</label>\n              </span>\n            </div>\n            <div class=\"col-sm-6 input-container\">\n              <span class=\"inputWrapper\">\n                <input \n                id=\"password\" \n                class=\"formInput\" \n                type=\"password\"\n                aria-label=\"Please enter your password to register\"  \n                [formControl]=\"loginForm.get('password')\"\n                [attr.invalid]=\"submitted && loginForm.get('password').invalid\"/>\n                <label [attr.invalid]=\"submitted && loginForm.get('password').invalid\" [attr.hasVal]=\"loginForm.get('password').value !== ''\"class=\"floating-label\" for=\"password\">Password</label>\n              </span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <button sam-cta [disabled]=\"submitted && loginForm.invalid\" (click)=\"submit();\">Login</button>\n            </div>\n            <div class=\"col-sm-6\">\n                <button sam-cta (click)=\"goTo('register');\">Register</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.container {\n  padding-top: 16px; }\n\n.floating-label {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  transition: all ease-in-out 0.25s; }\n\n.floating-label[invalid=\"true\"] {\n    color: #fc0303; }\n\n.input-container {\n  padding: 18px; }\n\n.formInput {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  background-color: #fff;\n  border: 0;\n  border-bottom: 2px solid #027fe65d;\n  transition: all ease-in-out 0.5s; }\n\n.formInput:focus {\n    -webkit-appearance: none;\n    outline: none; }\n\n.formInput[invalid=\"true\"] {\n    border: 2px solid #fc0303; }\n\n.formInput:focus + .floating-label {\n  top: -28px;\n  left: -15px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  color: #027fe6; }\n\n.formInput:focus + .floating-label[invalid=\"true\"] {\n    color: #fc0303; }\n\n.floating-label[hasVal=\"true\"] {\n  top: -28px;\n  left: -15px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  color: #495057; }\n\n.inputWrapper {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.inputWrapper:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 100%;\n    bottom: 0px;\n    left: 50%;\n    border-bottom: 2px solid #027fe6;\n    border-top: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.inputWrapper:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 0;\n    top: 50%;\n    left: 0px;\n    border-left: 2px solid #027fe6;\n    border-right: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.inputWrapper:focus-within {\n    outline: none; }\n\n.inputWrapper:focus-within:before {\n      left: 0;\n      width: 100%;\n      border-radius: .25rem; }\n\n.inputWrapper:focus-within:after {\n      top: 0px;\n      height: 100%;\n      border-radius: .25rem; }\n\n.invalid-message {\n  display: none; }\n\n.invalid-message[invalid=\"true\"] {\n    display: block; }\n\n.invalid-alert {\n  display: none; }\n\n.invalid-alert[invalid=\"true\"] {\n    display: block;\n    border: 1px solid #fc0303;\n    padding: 8px 16px;\n    margin-bottom: 32px;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    color: #fc0303; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUtEO0VBQ0UsMkJDWmtCLEVEYW5COztBQUVEO0VFZkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRmFoQixlQ2xCa0I7RURtQmxCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBR1VEO0VBQ0UsYUFBWSxFQUNiOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FDL0NEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1Qsd0JBQXVCO0VGUnZCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUVNaEIsa0NBQWlDLEVBSWxDOztBQVZEO0lBUUcsZUhQVSxFR1FWOztBQUdIO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCw0QkFBMkI7RUFDM0Isd0JBQXVCO0VGeEJ2QixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VFc0JoQix1QkFBc0I7RUFDdEIsVUFBUztFQUNULG1DQUFrQztFQUNsQyxpQ0FBZ0MsRUFRakM7O0FBakJEO0lBV0kseUJBQXdCO0lBQ3hCLGNBQWEsRUFDZDs7QUFiSDtJQWVJLDBCSDlCUyxFRytCVjs7QUFHSDtFQUNFLFdBQVU7RUFDVixZQUFXO0VBQ1gsK0JBQXNCO1VBQXRCLHVCQUFzQjtFQUN0QixlQUFjLEVBSWY7O0FBUkQ7SUFNRyxlSHhDVSxFR3lDVjs7QUFFSDtFQUNFLFdBQVU7RUFDVixZQUFXO0VBQ1gsK0JBQXNCO1VBQXRCLHVCQUFzQjtFQUN0QixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBZWI7O0FBbkJEO0lEcERJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLGFBQVk7SUFDWixZQUFXO0lBQ1gsVUFBUztJQUNULGlDRlRnQjtJRVVoQiw4QkZWZ0I7SUVXaEIsaUJBQWdCO0lBRWhCLGlDQUFnQyxFQUNqQzs7QUN5Q0g7SUR2Q0ksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsVUFBUztJQUNULFNBQVE7SUFDUixVQUFTO0lBQ1QsK0JGdEJnQjtJRXVCaEIsZ0NGdkJnQjtJRXdCaEIsaUJBQWdCO0lBRWhCLGlDQUFnQyxFQUNqQzs7QUM0Qkg7SUFPSSxjQUFhLEVBV2Q7O0FBbEJIO01BU00sUUFBTTtNQUNOLFlBQVU7TUFDVixzQkFBcUIsRUFDdEI7O0FBWkw7TUFjTSxTQUFRO01BQ1IsYUFBVztNQUNYLHNCQUFxQixFQUN0Qjs7QUFJTDtFQUNFLGNBQWEsRUFJZDs7QUFMRDtJQUdJLGVBQWMsRUFDZjs7QUFFSDtFQUNFLGNBQWEsRUFTZDs7QUFWRDtJQUdJLGVBQWM7SUFDZCwwQkhqRlM7SUdrRlQsa0JBQWlCO0lBQ2pCLG9CQUFtQjtJRnhGckIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGVESmtCO0lDS2xCLGlCQUFnQjtJRXNGZCxlSHJGUyxFR3NGVjs7QUFFSDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwgPiAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21peGlucy5zY3NzXCI7XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgJG1haW4tY29sb3I7XG59XG5cbi5zYW0tdGl0bGUge1xuICBAaW5jbHVkZSBiYXNlLWZvbnQoKTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiR0ZXh0LWNvbG9yOiAjNDk1MDU3O1xuJG1haW4tY29sb3I6ICMwMjdmZTY7XG4kYm9yZGVyLWNvbG9yOiAjYWFhOWE5O1xuJHNoYWRvdy1jb2xvcjogIzg4ODg4ODZlO1xuJGJsYWNrOiAjMDAwMDAwOyBcbiR3aGl0ZTogI2ZmZmZmZjtcbiRyZWQ6ICNmYzAzMDM7IFxuIiwiQG1peGluIGJhc2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbkBtaXhpbiBwc2V1ZG8tYm9yZGVyIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxufVxuXG4uY29sLXNtLTYge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2FyZC1saW5rIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uZGF0ZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLmNvbnRhaW5lcntcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uZmxvYXRpbmctbGFiZWx7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gIEBpbmNsdWRlIGJhc2UtZm9udDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMjVzO1xuICAmW2ludmFsaWQ9XCJ0cnVlXCJde1xuICAgY29sb3I6ICRyZWQ7XG4gIH1cbn1cblxuLmlucHV0LWNvbnRhaW5lcntcbiAgcGFkZGluZzogMThweDtcbn1cblxuLmZvcm1JbnB1dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgQGluY2x1ZGUgYmFzZS1mb250O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDI3ZmU2NWQ7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAmOmZvY3Vze1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICZbaW52YWxpZD1cInRydWVcIl17XG4gICAgYm9yZGVyOiAycHggc29saWQgJHJlZDtcbiAgfVxufVxuXG4uZm9ybUlucHV0OmZvY3VzICsgLmZsb2F0aW5nLWxhYmVse1xuICB0b3A6IC0yOHB4O1xuICBsZWZ0OiAtMTVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgY29sb3I6ICMwMjdmZTY7XG4gICZbaW52YWxpZD1cInRydWVcIl17XG4gICBjb2xvcjogJHJlZDtcbiAgfVxufVxuLmZsb2F0aW5nLWxhYmVsW2hhc1ZhbD1cInRydWVcIl17XG4gIHRvcDogLTI4cHg7XG4gIGxlZnQ6IC0xNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmlucHV0V3JhcHBlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgQGluY2x1ZGUgcHNldWRvLWJvcmRlcjtcbiAgJjpmb2N1cy13aXRoaW57XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOmJlZm9yZXtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4uaW52YWxpZC1tZXNzYWdle1xuICBkaXNwbGF5OiBub25lO1xuICAmW2ludmFsaWQ9XCJ0cnVlXCJde1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaW52YWxpZC1hbGVydHtcbiAgZGlzcGxheTogbm9uZTtcbiAgJltpbnZhbGlkPVwidHJ1ZVwiXXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgQGluY2x1ZGUgYmFzZS1mb250O1xuICAgIGNvbG9yOiAkcmVkO1xuICB9XG59XG4uY29sLXNtLTZ7XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.errorMessage = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        this.errorMessage = '';
        if (this.loginForm.invalid) {
            setTimeout(function () {
                var elt = document.querySelector('input[invalid="true"]');
                elt.focus();
            }, 0);
        }
        else {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            console.log('siging in user: ', email);
            this.auth.signInUser(email, password)
                .then(function () {
                if (_this.auth.isVerified()) {
                    _this.router.navigate(['/forum/authenticated']);
                }
                else {
                    _this.errorMessage = 'User not verified yet';
                }
            })
                .catch(function (err) {
                var errorMessage = (err && err.message) ? err.message : 'Unkown error';
                console.log(errorMessage);
                _this.errorMessage = errorMessage;
            });
        }
    };
    LoginComponent.prototype.resendVerication = function () {
        this.auth.verifyEmail();
        this.errorMessage = 'Please check email for verification link';
    };
    LoginComponent.prototype.goTo = function (page) {
        this.router.navigate(['/' + page]);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lotto/lotto.component.html":
/*!********************************************!*\
  !*** ./src/app/lotto/lotto.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lotto-wrapper\">\n  <sam-input-wrapper field_id=\"xlsxFile\" label=\"\">\n    <input sam-input type=\"file\" id=\"xlsxFile\" aria-label=\"Upload file\" (change)=\"incomingfile($event)\"\n      accept=\".xlsx\" />\n  </sam-input-wrapper>\n\n  <button sam-cta type=\"button\" class=\"btn btn-info\" (click)=\"upload()\">Predict numbers</button>\n\n  <div style=\"margin-top:16px;\">\n    output:\n    <div *ngFor=\"let message of messages\">\n      {{message}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/lotto/lotto.component.scss":
/*!********************************************!*\
  !*** ./src/app/lotto/lotto.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lotto-wrapper {\n  display: flex;\n  margin: 0 auto;\n  width: 80%;\n  justify-content: center;\n  flex-wrap: wrap; }\n  .lotto-wrapper * {\n    display: block;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvbG90dG8vbG90dG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsZUFBYztFQUNkLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsZ0JBQWUsRUFLaEI7RUFWRDtJQU9JLGVBQWM7SUFDZCxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9sb3R0by9sb3R0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb3R0by13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gICoge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/lotto/lotto.component.ts":
/*!******************************************!*\
  !*** ./src/app/lotto/lotto.component.ts ***!
  \******************************************/
/*! exports provided: LottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LottoComponent", function() { return LottoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);



var LottoComponent = /** @class */ (function () {
    function LottoComponent() {
        this.messages = [''];
    }
    LottoComponent.prototype.ngOnInit = function () {
    };
    LottoComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
    };
    LottoComponent.prototype.upload = function () {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var winningNumbers = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(worksheet, { raw: true });
            _this.predictNumbers(winningNumbers);
        };
        try {
            fileReader.readAsArrayBuffer(this.file);
        }
        catch (exception) {
            this.messages.push('something went wrong: ', exception);
        }
    };
    LottoComponent.prototype.predictNumbers = function (file) {
        this.messages = [''];
        var winningRows = [];
        var winningNumbers = [];
        try {
            file.forEach(function (row) {
                winningRows.push(row.winningNumbers);
            });
            winningRows.forEach(function (row) {
                winningNumbers.push({ winningNumbers: row.split(' ') });
            });
            for (var i = 0; i < winningNumbers.length; i++) {
                for (var j = 0; j < 7; j++) {
                    winningNumbers[i].winningNumbers[j] = parseInt(winningNumbers[i].winningNumbers[j], 10);
                }
            }
            this.messages.push('predicting possible 5 sequences...');
        }
        catch (exception) {
            this.messages.push('something went wrong: ', exception);
        }
        console.warn("predicting possible 5 sequences...");
        this.predictNextUniqueNumbers(winningNumbers, 3, 49, 1);
        this.predictNextUniqueNumbers(winningNumbers, 3, 49, 1);
        this.predictOffPreviousWinningNum(winningNumbers, 2, 49, 1);
        this.predictOffPreviousWinningNum(winningNumbers, 2, 49, 1);
        this.predictOffPreviousWinningNum(winningNumbers, 3, 49, 1);
    };
    LottoComponent.prototype.predictNextUniqueNumbers = function (winningNumbers, similarities, high, low) {
        var newSequence = [];
        newSequence = this.generateNewSequence(high, low);
        var previouslyDrawn = true;
        while (previouslyDrawn) {
            var maxSimilarNumbers = 0;
            // WeekI
            for (var weekI = 0; weekI < winningNumbers.length; weekI++) {
                var similarNumbersForRow = 0;
                // For each number drawn that week
                for (var numI = 0; numI < winningNumbers[weekI]['winningNumbers'].length; numI++) {
                    // Check every generated number
                    for (var newGI = 0; newGI < 7; newGI++) {
                        var currentNumber = newSequence[newGI];
                        if (currentNumber == winningNumbers[weekI][numI]) {
                            similarNumbersForRow++;
                        }
                    }
                }
                maxSimilarNumbers = similarNumbersForRow > maxSimilarNumbers ? similarNumbersForRow : maxSimilarNumbers;
            }
            if (maxSimilarNumbers <= similarities) {
                previouslyDrawn = false;
                newSequence = newSequence.sort();
                console.warn('\t[', newSequence, '] + [' + Math.round(Math.random() * 49 + 1) + ']');
                this.messages.push('\t [' + newSequence + '] + [' + Math.round(Math.random() * 49 + 1) + ']');
            }
            else {
                newSequence = this.generateNewSequence(high, low);
            }
        }
    };
    LottoComponent.prototype.predictOffPreviousWinningNum = function (winningNumbers, simToPrevWeek, high, low) {
        var newSequence = [];
        newSequence = this.generateNewSequence(high, low);
        var previouslyDrawn = true;
        while (previouslyDrawn) {
            var maxSimilarNumbers = 0;
            var maxSimilarNumbersToPrevWeek = 0;
            var lastDrawnWeek = 0;
            var simToLastDrawn = 0;
            // Check numbers for last drawn winning numbers
            for (var numI = 0; numI < 7; numI++) {
                // Check every generated number
                for (var newGI = 0; newGI < 7; newGI++) {
                    var currentNumber = newSequence[newGI];
                    if (currentNumber == winningNumbers[lastDrawnWeek]['winningNumbers'][numI]) {
                        simToLastDrawn++;
                    }
                }
            }
            maxSimilarNumbersToPrevWeek = simToLastDrawn > maxSimilarNumbersToPrevWeek ? simToLastDrawn
                : maxSimilarNumbersToPrevWeek;
            if (maxSimilarNumbersToPrevWeek == simToPrevWeek) {
                // WeekI
                for (var weekI = 0; weekI < winningNumbers.length; weekI++) {
                    var similarNumbersForRow = 0;
                    // For each number drawn that week
                    for (var numI = 0; numI < winningNumbers[weekI]['winningNumbers'].length; numI++) {
                        // Check every generated number
                        for (var newGI = 0; newGI < 7; newGI++) {
                            var currentNumber = newSequence[newGI];
                            if (currentNumber == winningNumbers[weekI]['winningNumbers'][numI]) {
                                similarNumbersForRow++;
                            }
                        }
                    }
                    maxSimilarNumbers = similarNumbersForRow > maxSimilarNumbers ? similarNumbersForRow
                        : maxSimilarNumbers;
                }
                if (maxSimilarNumbers <= 3) {
                    previouslyDrawn = false;
                    newSequence = newSequence.sort();
                    console.warn('\t [', newSequence, '] + [' + Math.round(Math.random() * 49 + 1) + ']');
                    this.messages.push('\t [' + newSequence + '] + [' + Math.round(Math.random() * 49 + 1) + ']');
                }
                else
                    newSequence = this.generateNewSequence(high, low);
            }
            else
                newSequence = this.generateNewSequence(high, low);
        }
    };
    LottoComponent.prototype.generateNewSequence = function (high, low) {
        var newSequence = [];
        var randomNumber = [];
        for (var i = 0; i < 7; i++) {
            var randomDigit = Math.round(Math.random() * high + low);
            while (randomNumber.includes(randomDigit)) {
                randomDigit = Math.round(Math.random() * high + low);
            }
            randomNumber.push(randomDigit);
            newSequence[i] = randomDigit;
        }
        return newSequence;
    };
    LottoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lotto',
            template: __webpack_require__(/*! ./lotto.component.html */ "./src/app/lotto/lotto.component.html"),
            styles: [__webpack_require__(/*! ./lotto.component.scss */ "./src/app/lotto/lotto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LottoComponent);
    return LottoComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sam-title\">Projects</h1>\n<div class=\"accordion\">\n  <div class=\"card\">\n    <div class=\"card-header\" [attr.expanded]=\"expanded[0]\" (click)=\"expand(0);\">\n      Android Applications <span class=\"chevron\" [attr.expanded]=\"expanded[0]\"></span>\n    </div>\n    <div class=\"collapse show\">\n      <div [attr.expanded]=\"expanded[0]\" class=\"card-body\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">\n            <span class=\"bold\"><img alt=\"PJ.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/PJ.png\" />\n              Portal Jumper</span>\n            <p class=\"card-text\">\n              Free to play side scroller arcade style game\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=runner.android&hl=en\">Portal\n                Jumper</a> for the android platform.\n            </p>\n          </li>\n          <li class=\"list-group-item\">\n            <span class=\"bold\"><img alt=\"CC.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/CC.png\" />\n              Card Counter</span>\n            <p style=\"margin-top:16px;\" class=\"card-text\">\n              Free application to keep track of count in the game blackjack\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios0110.CardCounter.android&hl=en\">Card\n                Counter</a> for the android platform.\n            </p>\n          </li>\n          <li class=\"list-group-item\">\n            <span class=\"bold\"><img alt=\"CJ.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/CJ.png\" />\n              Cliff Jumper</span>\n            <p style=\"margin-top:16px;\" class=\"card-text\">\n              Free platformer game\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios0110.CliffJumper.android&hl=en\">Cliff\n                Jumper</a> for the android platform.\n            </p>\n          </li>\n          <li class=\"list-group-item\">\n            <span class=\"bold\"><img alt=\"DC.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/DC.png\" />\n              Doodle Cannon</span>\n            <p style=\"margin-top:16px;\" class=\"card-text\">\n              Free puzzle game\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios0110.ballin.android&hl=en\">Doodle\n                Cannon</a> for the android platform.\n            </p>\n          </li>\n          <li class=\"list-group-item\">\n            <span class=\"bold\"><img alt=\"S.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/S.png\" />\n              Slithery</span>\n            <p style=\"margin-top:16px;\" class=\"card-text\">\n              Free top down fluid snake game\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios.catAndMouse.android&hl=en\">Slithery</a>\n              for the android platform.\n            </p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" [attr.expanded]=\"expanded[1]\" (click)=\"expand(1);\">\n      Enterprise Applications <span class=\"chevron\" [attr.expanded]=\"expanded[1]\"></span>\n    </div>\n    <div [attr.expanded]=\"expanded[1]\" class=\"card-body\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 bold\">\n              Major North American Bank - Personal Lending Application\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              August 2017 – July 2018\n            </div>\n          </div>\n          <p class=\"card-text\">\n            Worked on an online application allowing a customer to apply for an unsecured loan with auto approval and\n            auto\n            funding. Agile\n            development with Angular JS front end and Java back end. Technology stack: Angular, Java, Jboss, Node,\n            Maven,\n            Bower, SASS, Jenkins, Oracale, Splunk, Jira, confluence, BitBucket.\n          </p>\n        </li>\n      </ul>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 bold\">\n              Major North American Bank - Components Library\n            </div>\n          </div>\n          <p class=\"card-text\">\n            Worked on a reusable, scalable and accessible, common component library including design and functional front end Components.\n          </p>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n  <div class=\"card\">\n    <div class=\"card-header\" [attr.expanded]=\"expanded[2]\" (click)=\"expand(2);\">\n      Personal Applications <span class=\"chevron\" [attr.expanded]=\"expanded[2]\"></span>\n    </div>\n    <div [attr.expanded]=\"expanded[2]\" class=\"card-body\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 bold\">\n              Video Game Programming - PC\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              August 2012 – Current\n            </div>\n          </div>\n          <p class=\"card-text\">\n            Worked on and continue working on game applications for the PC as a personal hobby, including games written\n            in Java, C++, C#, and in the unity game engine.\n          </p>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 bold\">\n              Website Design &amp; Development\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              August 2012 – Current\n            </div>\n          </div>\n          <p class=\"card-text\">\n            I enjoy working on website design and development using Javascript and front end frameworks, and using Java\n            and related framekworks for the backend.\n          </p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.card {\n  width: 95%;\n  margin: 0px auto; }\n\n.bold {\n  font-weight: 700; }\n\n.card-header[expanded=\"true\"] {\n  background: transparent; }\n\n.card-header:hover {\n  cursor: pointer; }\n\n.card-body {\n  transition: all 0.5s ease;\n  -webkit-transition: all  0.3s ease;\n  -moz-transition: all  0.3s ease;\n  -o-transition: all  0.3s ease;\n  visibility: collapse;\n  max-height: 0px;\n  padding: 0; }\n\n.card-body[expanded=\"true\"] {\n    max-height: 500px;\n    overflow-y: scroll;\n    visibility: visible;\n    border-top: 1px solid #aaa9a9; }\n\n.chevron {\n  transition: all 0.5s ease;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-top: 3px solid #aaa9a9;\n  border-right: 3px solid #aaa9a9;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  position: relative;\n  top: 6px;\n  right: -9px; }\n\n.chevron[expanded=\"false\"] {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n    top: -1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUtEO0VBQ0UsMkJDWmtCLEVEYW5COztBQUVEO0VFZkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRmFoQixlQ2xCa0I7RURtQmxCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBR1VEO0VBQ0UsYUFBWSxFQUNiOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FDL0NEO0VBQ0UsV0FBVTtFQUNWLGlCQUFnQixFQUVqQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUVJLHdCQUF1QixFQUN4Qjs7QUFISDtFQUtJLGdCQUFlLEVBQ2hCOztBQUVIO0VBQ0UsMEJBQXlCO0VBQ3pCLG1DQUFrQztFQUNsQyxnQ0FBK0I7RUFDL0IsOEJBQTZCO0VBQzdCLHFCQUFvQjtFQUNwQixnQkFBZTtFQUNmLFdBQVUsRUFPWDs7QUFkRDtJQVNJLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLDhCSDVCa0IsRUc2Qm5COztBQUVIO0VBQ0UsMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQywrQkFBOEI7RUFDOUIsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWTtFQUNaLDhCSHZDb0I7RUd3Q3BCLGdDSHhDb0I7RUd5Q3BCLGtDQUFpQztFQUNqQywwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixZQUFXLEVBS1o7O0FBbkJEO0lBZ0JJLGtDQUF5QjtZQUF6QiwwQkFBeUI7SUFDekIsVUFBUyxFQUNWIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCA+ICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcbn1cblxuLnNhbS10aXRsZSB7XG4gIEBpbmNsdWRlIGJhc2UtZm9udCgpO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiJHRleHQtY29sb3I6ICM0OTUwNTc7XG4kbWFpbi1jb2xvcjogIzAyN2ZlNjtcbiRib3JkZXItY29sb3I6ICNhYWE5YTk7XG4kc2hhZG93LWNvbG9yOiAjODg4ODg4NmU7XG4kYmxhY2s6ICMwMDAwMDA7IFxuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZjMDMwMzsgXG4iLCJAbWl4aW4gYmFzZS1mb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuQG1peGluIHBzZXVkby1ib3JkZXIge1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG59XG5cbi5jb2wtc20tNiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXJkLWxpbmsge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5kYXRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jb21wb25lbnRzL2NvbXBvbmVudHMuY29tcG9uZW50LnNjc3MnO1xuXG4uY2FyZHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDtcbn1cbi5ib2xke1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNhcmQtaGVhZGVye1xuICAmW2V4cGFuZGVkPVwidHJ1ZVwiXXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmNhcmQtYm9keXtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gICZbZXhwYW5kZWQ9XCJ0cnVlXCJde1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICB9XG59XG4uY2hldnJvbntcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IC05cHg7XG4gICZbZXhwYW5kZWQ9XCJmYWxzZVwiXXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIHRvcDogLTFweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.expanded = [true, false, false];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.expand = function (index) {
        var _this = this;
        this.expanded.forEach(function (val, i) {
            if (index === i) {
                _this.expanded[i] = !_this.expanded[i];
            }
        });
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h1 class=\"display-5 text-center\">{{registeredEmail ? 'Thank You' : 'Register'}}</h1>\n    </div>\n    <div [attr.loading]=\"submitted && registerForm.valid && errorMessage === ''\" [hidden]=\"registeredEmail\" class=\"card-body\">\n      <div aria-live=\"assertive\" [attr.invalid]=\"submitted && (registerForm.invalid || errorMessage !== '')\"\n        class=\"invalid-alert\">\n        <span\n          [attr.invalid]=\"submitted && registerForm.get('email').errors &&  registerForm.get('email').errors.required\"\n          class=\"invalid-message\">\n          - Please enter an email\n        </span>\n        <span [attr.invalid]=\"submitted && registerForm.get('email').errors && registerForm.get('email').errors.email\"\n          class=\"invalid-message\">\n          - Please enter a valid email\n        </span>\n        <span\n          [attr.invalid]=\"submitted && registerForm.get('password').errors && registerForm.get('password').errors.required\"\n          class=\"invalid-message\">\n          - Please enter a password\n        </span>\n        <span\n          [attr.invalid]=\"submitted && registerForm.get('password').errors && registerForm.get('password').errors.minlength && registerForm.get('password').errors.minlength.actualLength < registerForm.get('password').errors.minlength.requiredLength\"\n          class=\"invalid-message\">\n          - Please enter a valid password, min length required\n          {{(registerForm.get('password').errors && registerForm.get('password').errors.minlength) ? registerForm.get('password').errors.minlength.requiredLength : ' '}}\n        </span>\n        <span [attr.invalid]=\"submitted && errorMessage !== ''\" class=\"invalid-message\">\n          {{errorMessage}}\n        </span>\n      </div>\n      <form [formGroup]=\"registerForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 input-container\">\n            <span class=\"inputWrapper\">\n              <input id=\"firstName\" class=\"formInput\" type=\"name\"\n                aria-label=\"Optional: Please enter your first name to register\"\n                [formControl]=\"registerForm.get('firstName')\" />\n              <label [attr.hasVal]=\"registerForm.get('firstName').value !== ''\" class=\"floating-label\"\n                for=\"firstName\">First Name: Optional</label>\n            </span>\n          </div>\n          <div class=\"col-sm-6 input-container\">\n            <span class=\"inputWrapper\">\n              <input id=\"lastName\" class=\"formInput\" type=\"name\"\n                aria-label=\"Optional: Please enter your last name to register\"\n                [formControl]=\"registerForm.get('lastName')\" />\n              <label [attr.hasVal]=\"registerForm.get('lastName').value !== ''\" class=\"floating-label\"\n                for=\"lastName\">Last Name: Optional</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 input-container\">\n            <span class=\"inputWrapper\">\n              <input id=\"email\" class=\"formInput\" type=\"email\" aria-label=\"Please enter your email to register\"\n                [formControl]=\"registerForm.get('email')\"\n                [attr.invalid]=\"submitted && registerForm.get('email').invalid\" />\n              <label [attr.invalid]=\"submitted && registerForm.get('email').invalid\"\n                [attr.hasVal]=\"registerForm.get('email').value !== ''\" class=\"floating-label\" for=\"email\">Email</label>\n            </span>\n          </div>\n          <div class=\"col-sm-6 input-container\">\n            <span class=\"inputWrapper\">\n              <input id=\"password\" class=\"formInput\" type=\"password\" aria-label=\"Please enter your password to register\"\n                [formControl]=\"registerForm.get('password')\"\n                [attr.invalid]=\"submitted && registerForm.get('password').invalid\" />\n              <label [attr.invalid]=\"submitted && registerForm.get('password').invalid\"\n                [attr.hasVal]=\"registerForm.get('password').value !== ''\" class=\"floating-label\"\n                for=\"password\">Password</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <button sam-cta [disabled]=\"submitted && registerForm.invalid\"\n              (click)=\"submit();\">Register</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-body\" [hidden]=\"!registeredEmail\">\n      <h1 class=\"card-title text-center\">Thank\n        You{{registerForm.get('name') ? ' ' + registerForm.get('name').value + ',' : ','}}</h1>\n      <p class=\"card-title\">\n        You should recieve a verification link in your email shortly.\n      </p>\n      <p class=\"card-title\">\n        Once your email is verified please login to view components.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label > * {\n  display: block;\n  pointer-events: none; }\n\n.body {\n  min-height: 100vh; }\n\na:focus {\n  outline: 1px solid #027fe6; }\n\n.sam-title {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  color: #495057;\n  font-size: 2rem;\n  text-align: center; }\n\n.col-sm-6 {\n  padding: 8px; }\n\n@media screen and (max-width: 575px) {\n  .card-link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n@media screen and (max-width: 575px) {\n  .date {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin: 0; } }\n\n.container {\n  padding-top: 16px; }\n\n.floating-label {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  transition: all ease-in-out 0.25s; }\n\n.floating-label[invalid=\"true\"] {\n    color: red; }\n\n.input-container {\n  padding: 18px; }\n\n.formInput {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  font-weight: 300;\n  background-color: #fff;\n  border: 0;\n  border-bottom: 2px solid #aaa9a9;\n  transition: all ease-in-out 0.5s; }\n\n.formInput:focus {\n    -webkit-appearance: none;\n    outline: none; }\n\n.formInput[invalid=\"true\"] {\n    border: 2px solid #fc0303; }\n\n.formInput:focus + .floating-label {\n  top: -28px;\n  left: -15px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  color: #027fe6; }\n\n.formInput:focus + .floating-label[invalid=\"true\"] {\n    color: #fc0303; }\n\n.floating-label[hasVal=\"true\"] {\n  top: -28px;\n  left: -15px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  color: #495057; }\n\n.inputWrapper {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.inputWrapper:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 100%;\n    bottom: 0px;\n    left: 50%;\n    border-bottom: 2px solid #027fe6;\n    border-top: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.inputWrapper:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 0;\n    top: 50%;\n    left: 0px;\n    border-left: 2px solid #027fe6;\n    border-right: 2px solid #027fe6;\n    border-radius: 0;\n    transition: all ease-in-out 0.5s; }\n\n.inputWrapper:focus-within {\n    outline: none; }\n\n.inputWrapper:focus-within:before {\n      left: 0;\n      width: 100%;\n      border-radius: .25rem; }\n\n.inputWrapper:focus-within:after {\n      top: 0px;\n      height: 100%;\n      border-radius: .25rem; }\n\n.invalid-message {\n  display: none; }\n\n.invalid-message[invalid=\"true\"] {\n    display: block; }\n\n.invalid-alert {\n  display: none; }\n\n.invalid-alert[invalid=\"true\"] {\n    display: block;\n    border: 1px solid #fc0303;\n    padding: 8px 16px;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    font-weight: 300;\n    color: #fc0303; }\n\n.card-title {\n  font-size: 1.25rem; }\n\n@-webkit-keyframes rotating /* Safari and Chrome */ {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.card-body[loading=\"true\"] {\n  position: relative; }\n\n.card-body[loading=\"true\"]:before {\n    content: 'Loading...';\n    color: #ffffff;\n    text-align: center;\n    position: absolute;\n    padding-top: 43px;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    background: #000000;\n    z-index: 9999;\n    cursor: not-allowed; }\n\n.card-body[loading=\"true\"]:after {\n    content: '';\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    top: 8px;\n    left: calc(50% - 45px);\n    border: 4px solid #027fe6;\n    border-right: 0;\n    border-bottom: 0;\n    border-radius: 50%;\n    z-index: 9999;\n    cursor: not-allowed;\n    -webkit-animation: rotating 1s linear infinite;\n            animation: rotating 1s linear infinite; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL1NNRVIvY29kZS9zbWVyYW50ZS5naXRodWIuaW8vc2FtLW1lcmFudGUvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvU01FUi9jb2RlL3NtZXJhbnRlLmdpdGh1Yi5pby9zYW0tbWVyYW50ZS9zcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9TTUVSL2NvZGUvc21lcmFudGUuZ2l0aHViLmlvL3NhbS1tZXJhbnRlL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUtEO0VBQ0UsMkJDWmtCLEVEYW5COztBQUVEO0VFZkUsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVESmtCO0VDS2xCLGlCQUFnQjtFRmFoQixlQ2xCa0I7RURtQmxCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBR1VEO0VBQ0UsYUFBWSxFQUNiOztBQUVDO0VBREY7SUFFSSxlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixVQUFTLEVBRVosRUFBQTs7QUFFQztFQURGO0lBRUksZUFBYztJQUNkLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUyxFQUVaLEVBQUE7O0FDL0NEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1Qsd0JBQXVCO0VGUnZCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixlREprQjtFQ0tsQixpQkFBZ0I7RUVNaEIsa0NBQWlDLEVBSWxDOztBQVZEO0lBUUcsV0FBVSxFQUNWOztBQUdIO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCw0QkFBMkI7RUFDM0Isd0JBQXVCO0VGeEJ2QixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZURKa0I7RUNLbEIsaUJBQWdCO0VFc0JoQix1QkFBc0I7RUFDdEIsVUFBUztFQUNULGlDSDNCb0I7RUc0QnBCLGlDQUFnQyxFQVFqQzs7QUFqQkQ7SUFXSSx5QkFBd0I7SUFDeEIsY0FBYSxFQUNkOztBQWJIO0lBZUksMEJIOUJTLEVHK0JWOztBQUdIO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCwrQkFBc0I7VUFBdEIsdUJBQXNCO0VBQ3RCLGVBQWMsRUFJZjs7QUFSRDtJQU1HLGVIeENVLEVHeUNWOztBQUVIO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCwrQkFBc0I7VUFBdEIsdUJBQXNCO0VBQ3RCLGVIckRrQixFR3NEbkI7O0FBSUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBZWI7O0FBbkJEO0lEdERJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLGFBQVk7SUFDWixZQUFXO0lBQ1gsVUFBUztJQUNULGlDRlRnQjtJRVVoQiw4QkZWZ0I7SUVXaEIsaUJBQWdCO0lBRWhCLGlDQUFnQyxFQUNqQzs7QUMyQ0g7SUR6Q0ksWUFBVztJQUNYLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsVUFBUztJQUNULFNBQVE7SUFDUixVQUFTO0lBQ1QsK0JGdEJnQjtJRXVCaEIsZ0NGdkJnQjtJRXdCaEIsaUJBQWdCO0lBRWhCLGlDQUFnQyxFQUNqQzs7QUM4Qkg7SUFPSSxjQUFhLEVBV2Q7O0FBbEJIO01BU00sUUFBTTtNQUNOLFlBQVU7TUFDVixzQkFBcUIsRUFDdEI7O0FBWkw7TUFjTSxTQUFRO01BQ1IsYUFBVztNQUNYLHNCQUFxQixFQUN0Qjs7QUFJTDtFQUNFLGNBQWEsRUFJZDs7QUFMRDtJQUdJLGVBQWMsRUFDZjs7QUFFSDtFQUNFLGNBQWEsRUFRZDs7QUFURDtJQUdJLGVBQWM7SUFDZCwwQkhuRlM7SUdvRlQsa0JBQWlCO0lGekZuQixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsZURKa0I7SUNLbEIsaUJBQWdCO0lFdUZkLGVIdEZTLEVHdUZWOztBQUdIO0VBQ0UsbUJBQWtCLEVBQ25COztBQUdEO0VBQ0U7SUFDRSxnQ0FBK0I7SUFFL0Isd0JBQXVCLEVBQUE7RUFFekI7SUFDRSxrQ0FBaUM7SUFFakMsMEJBQXlCLEVBQUEsRUFBQTs7QUFHN0I7RUFDRTtJQUdFLGdDQUErQjtJQUUvQix3QkFBdUIsRUFBQTtFQUV6QjtJQUdFLGtDQUFpQztJQUVqQywwQkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUVJLG1CQUFrQixFQThCbkI7O0FBaENIO0lBSU0sc0JBQXFCO0lBQ3JCLGVIbElTO0lHbUlULG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxhQUFZO0lBQ1osU0FBUTtJQUNSLFVBQVM7SUFDVCxvQkgzSVM7SUc0SVQsY0FBYTtJQUNiLG9CQUFtQixFQUNwQjs7QUFoQkw7SUFrQk0sWUFBVztJQUNYLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsYUFBWTtJQUNaLFNBQVE7SUFDUix1QkFBc0I7SUFDdEIsMEJIekpjO0lHMEpkLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtDQUFzQztZQUF0Qyx1Q0FBc0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsID4gKiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xufVxuXG4uc2FtLXRpdGxlIHtcbiAgQGluY2x1ZGUgYmFzZS1mb250KCk7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkdGV4dC1jb2xvcjogIzQ5NTA1NztcbiRtYWluLWNvbG9yOiAjMDI3ZmU2O1xuJGJvcmRlci1jb2xvcjogI2FhYTlhOTtcbiRzaGFkb3ctY29sb3I6ICM4ODg4ODg2ZTtcbiRibGFjazogIzAwMDAwMDsgXG4kd2hpdGU6ICNmZmZmZmY7XG4kcmVkOiAjZmMwMzAzOyBcbiIsIkBtaXhpbiBiYXNlLWZvbnQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG5AbWl4aW4gcHNldWRvLWJvcmRlciB7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJG1haW4tY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIH1cbn1cblxuLmNvbC1zbS02IHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhcmQtbGluayB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmRhdGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2Nzcyc7XG5cbi5jb250YWluZXJ7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmZsb2F0aW5nLWxhYmVse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICBAaW5jbHVkZSBiYXNlLWZvbnQ7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjI1cztcbiAgJltpbnZhbGlkPVwidHJ1ZVwiXXtcbiAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLmlucHV0LWNvbnRhaW5lcntcbiAgcGFkZGluZzogMThweDtcbn1cblxuLmZvcm1JbnB1dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgQGluY2x1ZGUgYmFzZS1mb250O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgJjpmb2N1c3tcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmW2ludmFsaWQ9XCJ0cnVlXCJde1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRyZWQ7XG4gIH1cbn1cblxuLmZvcm1JbnB1dDpmb2N1cyArIC5mbG9hdGluZy1sYWJlbHtcbiAgdG9wOiAtMjhweDtcbiAgbGVmdDogLTE1cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gIGNvbG9yOiAjMDI3ZmU2O1xuICAmW2ludmFsaWQ9XCJ0cnVlXCJde1xuICAgY29sb3I6ICRyZWQ7XG4gIH1cbn1cbi5mbG9hdGluZy1sYWJlbFtoYXNWYWw9XCJ0cnVlXCJde1xuICB0b3A6IC0yOHB4O1xuICBsZWZ0OiAtMTVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xufVxuXG5cblxuLmlucHV0V3JhcHBlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgQGluY2x1ZGUgcHNldWRvLWJvcmRlcjtcbiAgJjpmb2N1cy13aXRoaW57XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOmJlZm9yZXtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4uaW52YWxpZC1tZXNzYWdle1xuICBkaXNwbGF5OiBub25lO1xuICAmW2ludmFsaWQ9XCJ0cnVlXCJde1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaW52YWxpZC1hbGVydHtcbiAgZGlzcGxheTogbm9uZTtcbiAgJltpbnZhbGlkPVwidHJ1ZVwiXXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIEBpbmNsdWRlIGJhc2UtZm9udDtcbiAgICBjb2xvcjogJHJlZDtcbiAgfVxufVxuXG4uY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGluZyAvKiBTYWZhcmkgYW5kIENocm9tZSAqLyB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uY2FyZC1ib2R5e1xuICAmW2xvYWRpbmc9XCJ0cnVlXCJde1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJztcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwYWRkaW5nLXRvcDogNDNweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDVweCk7XG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAkbWFpbi1jb2xvcjtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.registeredEmail = false;
        this.errorMessage = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),])
        });
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        this.errorMessage = '';
        if (this.registerForm.invalid) {
            setTimeout(function () {
                var elt = document.querySelector('input[invalid="true"]');
                elt.focus();
            }, 0);
        }
        else {
            var email = this.registerForm.value.email;
            var password = this.registerForm.value.password;
            var name_1 = this.registerForm.value.firstName + " " + this.registerForm.value.lastName;
            this.auth.signupUser(email, password, name_1)
                .then(function () {
                _this.registeredEmail = true;
            })
                .catch(function (err) {
                var errorMessage = (err && err.message) ? err.message : 'Unkown error';
                console.log(errorMessage);
                _this.errorMessage = errorMessage;
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register-user',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = __webpack_require__(/*! /Users/SMER/code/smerante.github.io/sam-merante/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
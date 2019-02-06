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







var routes = [
    { path: 'code', component: _code_code_component__WEBPACK_IMPORTED_MODULE_6__["CodeComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CVComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', redirectTo: '/home' }
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

module.exports = "<app-header></app-header>\r\n<div class=\"body\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERldlxcc21lcmFudGUuZ2l0aHViLmlvXFxzYW0tbWVyYW50ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

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
    }
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
                _code_code_component__WEBPACK_IMPORTED_MODULE_10__["CodeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code/code.component.html":
/*!******************************************!*\
  !*** ./src/app/code/code.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 text-center\">Sample Code Snippets</h1>\r\n\r\n<div class=\"card card__show card__show--come-in\" #card1>\r\n  <h4 style=\"margin: 16px auto; width: 95%;\">Games</h4>\r\n  <div class=\"card-header\">\r\n    Pong\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <a target=\"_blank\" href=\"assets/src/Pong.txt\">Pong.txt</a>\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Pong.jar\" download>Pong.jar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card2>\r\n  <div class=\"card-header\">\r\n    Air Hockey\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <a target=\"_blank\" href=\"assets/src/AirHockey.txt\">AirHockey.txt</a>\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Airhockey.jar\" download>AirHockey.jar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card3>\r\n  <div class=\"card-header\">\r\n    Snake\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <a target=\"_blank\" href=\"assets/src/SnakeHead.java\">Snake.java</a>\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Snake.jar\" download>Snake.jar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card4>\r\n  <div class=\"card-header\">\r\n    Robocalypse\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Top Down shooter/Survival game\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Robocalypse.jar\" download>Robocalypse.jar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card5>\r\n  <div class=\"card-header\">\r\n    Snowball Fight\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Top Down multiplayer snowball fight game\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/SnowBallFight.zip\" download>SnowBallFight.zip</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card6>\r\n  <div class=\"card-header\">\r\n    Ghost Survival\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Top Down shooter/horror game\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Ghosts.zip\" download>Ghosts.zip</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card7>\r\n  <div class=\"card-header\">\r\n    Circle Collider\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Simple algorithm to check for collision between two circles : <a target=\"_blank\" href=\"assets/src/Window.java\">Collider.java</a>\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/CircleCollider.jar\" download>Collider.Jar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card8>\r\n  <h4 style=\"margin: 16px auto; width: 95%;\">Sorting</h4>\r\n  <div class=\"card-header\">\r\n    Bubble Sort\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Sorting algorithm - O(n^2)\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/BubbleSort.java\">BubbleSort.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card9>\r\n  <div class=\"card-header\">\r\n    Insertion Sort\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Sorting algorithm - O(n^2)\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/InsertionSort.java\">InsertionSort.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card10>\r\n  <div class=\"card-header\">\r\n    Selection Sort\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Sorting algorithm - O(n^2)\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/SelectionSort.java\">SelectionSort.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card11>\r\n  <div class=\"card-header\">\r\n    Merge Sort\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Sorting algorithm - O(n*log(n))\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MergeSort.java\">MergeSort.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card12>\r\n  <div class=\"card-header\">\r\n    QuickSort Sort\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        Sorting algorithm - O(n*log(n))\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Quicksort.java\">QuickSort.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card13>\r\n  <h4 style=\"margin: 16px auto; width: 95%;\">Data Structures</h4>\r\n  <div class=\"card-header\">\r\n    ArrayList\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A dynamically sizable array\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyArrayList.java\">ArrayList.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card14>\r\n  <div class=\"card-header\">\r\n    LinkedList\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A linked list of nodes with references to each node from the previous\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyLinkedList.java\">LinkedList.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card15>\r\n  <div class=\"card-header\">\r\n    Stack\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A 'FILO' (first in last out) list, like a stack of paper\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyStack.java\">Stack.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card16>\r\n  <div class=\"card-header\">\r\n    Queue\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A 'FIFO' (first in first out) list, like a line of people\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyQueue.java\">Queue.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card17>\r\n  <div class=\"card-header\">\r\n    Priority Queue\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A Queue sorted based on given priorities of each node, like in an emergency triage center at a hosiptal.\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyPQ.java\">PriorityQueue.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card18>\r\n  <div class=\"card-header\">\r\n    Hash Map\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A dynamically sizable and quick lookup array based on hashed indecies of each element.\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyHashMap.java\">HashMap.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card19>\r\n  <div class=\"card-header\">\r\n    Graph\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A datastructure with Lists of vertices, along with lists of edges. Each vertex can have connections to other verticies through neighbouring edges.\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/MyGraph.java\">Graph.java</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card20>\r\n  <h4 style=\"margin: 16px auto; width: 95%;\">Other</h4>\r\n  <div class=\"card-header\">\r\n    Simple Encryption\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A simple encryption written in C for text files.\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/Encryption.c\">Encryption.c</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card\" #card21>\r\n  <div class=\"card-header\">\r\n    Factorial Recursion and memoization \r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        A simple example of factorial recursion and memoization\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        <a target=\"_blank\" href=\"assets/src/FactorialExample/index.html\">FactorialExample.index</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/code/code.component.scss":
/*!******************************************!*\
  !*** ./src/app/code/code.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 95%;\n  margin: 32px auto;\n  visibility: hidden;\n  color: black;\n  border: 0;\n  box-shadow: -2px -1px 17px 2px #888888;\n  -webkit-transform: translateX(-100vw);\n          transform: translateX(-100vw); }\n  .card-header {\n    background-color: white;\n    border-bottom: 1px solid lightgrey;\n    border-top: 1px solid lightgrey; }\n  .card__show {\n    visibility: visible;\n    transition: all  1s ease;\n    -webkit-transition: all  1s ease;\n    -moz-transition: all  1s ease;\n    -o-transition: all  1s ease; }\n  .card__show--come-in {\n      background-color: white;\n      visibility: visible;\n      -webkit-transform: translateX(0px);\n              transform: translateX(0px); }\n  .break {\n  width: 100%;\n  height: 100vh;\n  background-color: white; }\n  a {\n  color: darkblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS9DOlxcRGV2XFxzbWVyYW50ZS5naXRodWIuaW9cXHNhbS1tZXJhbnRlL3NyY1xcYXBwXFxjb2RlXFxjb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWTtFQUVaLFVBQVM7RUFDVCx1Q0FBc0M7RUFDdEMsc0NBQTZCO1VBQTdCLDhCQUE2QixFQWtCOUI7RUFqQkM7SUFDRSx3QkFBdUI7SUFDdkIsbUNBQWtDO0lBQ2xDLGdDQUErQixFQUNoQztFQUNEO0lBQ0Usb0JBQW1CO0lBQ25CLHlCQUF3QjtJQUN4QixpQ0FBZ0M7SUFDaEMsOEJBQTZCO0lBQzdCLDRCQUEyQixFQU01QjtFQUxDO01BQ0Usd0JBQXVCO01BQ3ZCLG9CQUFtQjtNQUNuQixtQ0FBMEI7Y0FBMUIsMkJBQTBCLEVBQzNCO0VBR0w7RUFDRSxZQUFXO0VBQ1gsY0FBWTtFQUNaLHdCQUF1QixFQUN4QjtFQUNEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb2RlL2NvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogLTJweCAtMXB4IDE3cHggMnB4ICM4ODg4ODg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XHJcbiAgJi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB9XHJcbiAgJl9fc2hvd3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgIDFzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAgMXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICAxcyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsICAxcyBlYXNlO1xyXG4gICAgJi0tY29tZS1pbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnJlYWt7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG59Il19 */"

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

/***/ "./src/app/cv/cv.component.html":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Sam Merante's Curriculum Vitae</h1>\r\n\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-header\">\r\n    <ul class=\"nav nav-tabs card-header-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a [ngClass]=\"toggleCards[0] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(0);\">Developer Experience</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [ngClass]=\"toggleCards[1] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(1);\">Employment Experience</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [ngClass]=\"toggleCards[2] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(2);\">Education</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [ngClass]=\"toggleCards[3] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(3);\">Interests</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [ngClass]=\"toggleCards[4] ? 'nav-link active' : 'nav-link'\" (click)=\"toggleCard(4);\">Honours &amp;\r\n          Achievements</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div [hidden]=\"!toggleCards[0]\" class=\"card-body\">\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item list-title\">Languages</li>\r\n      <li class=\"list-group-item\">AngularJS/Angular2-7</li>\r\n      <li class=\"list-group-item\">JavaScript/HTML5</li>\r\n      <li class=\"list-group-item\">Java</li>\r\n      <li class=\"list-group-item\">Java for Android</li>\r\n      <li class=\"list-group-item\">C#</li>\r\n      <li class=\"list-group-item\">C++</li>\r\n      <li class=\"list-group-item\">Python</li>\r\n      <li class=\"list-group-item\">C</li>\r\n      <li class=\"list-group-item\">Eiffel</li>\r\n      <li class=\"list-group-item\">Prolog</li>\r\n    </ul>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item list-title\">Tech Stack</li>\r\n      <li class=\"list-group-item\">Front end: JS, AngularJs, Angular </li>\r\n      <li class=\"list-group-item\">Back end: Java EE, C#</li>\r\n      <li class=\"list-group-item\">Databases: SQL, Oracle</li>\r\n      <li class=\"list-group-item\">Machine Learning, AI, Natural Language Processing (NLP)</li>\r\n      <li class=\"list-group-item\">BDD (Behavior Driven Development), TDD (Test Driven Development) in Java and Angular</li>\r\n      <li class=\"list-group-item\">Source Control: GIT (Bitbucket, Github)</li>\r\n      <li class=\"list-group-item\">Project Management: Confluence, JIRA</li>\r\n      <li class=\"list-group-item\">Agile methodologies</li>\r\n      <li class=\"list-group-item\">Dev Ops: Jenkins </li>\r\n      <li class=\"list-group-item\">Source Control: GIT (Bitbucket, Github)</li>\r\n    </ul>\r\n  </div>\r\n  <div [hidden]=\"!toggleCards[1]\" class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        CAPCO - Software Consultant\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        June 2018 - Present\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Worked at RBC creating an angular library for common components to be used throughout\r\n        the OMNI/OLB.\r\n        The library includes styles, components, and frameworks for creating angular applications.</li>\r\n    </ul>\r\n    <div class=\"row\" style=\"margin-top: 32px;\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        Toronto-Dominion Bank (TD Canada Trust)\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        May 2017 - June 2018\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Worked on a large project involving many different teams on web applications, in Java\r\n        HTML, and Java script\r\n        using\r\n        the angular framework to provide the best user experience.</li>\r\n      <li class=\"list-group-item\">Created and won second place in a hackathon challenge for TD where I programmed an\r\n        application from scratch\r\n        in\r\n        Java Spring Boot and Angular 6, to innovate the onboarding process.</li>\r\n      <li class=\"list-group-item\">Developed project and time management skills by working with the agile framework in a\r\n        fast paced\r\n        environment\r\n        meeting critical timeframes given.</li>\r\n      <li class=\"list-group-item\">Led a group of software developers when given the task of delivering defects and\r\n        error fixes in a timely\r\n        manner\r\n        while ensuring that deadlines were met while producing quality code.</li>\r\n      <li class=\"list-group-item\">Experienced in delivering quality assurance; wrote Gherkin feature files and\r\n        behaviour driven development\r\n        (BDD)\r\n        test cases using the selenium framework in Java.</li>\r\n      <li class=\"list-group-item\">Took initiative by training and mentoring new developers; running weekly check in\r\n        meetings to discuss\r\n        achievements, events, and news within the technology community.</li>\r\n      <li class=\"list-group-item\">Managed deployments of the applications to servers using Jenkins to ensure builds are\r\n        meeting test,\r\n        security, and\r\n        automation script completion in preparation for production.</li>\r\n    </ul>\r\n    <div class=\"row\" style=\"margin-top: 32px;\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        Real Programming for Kids\r\n      </div>\r\n      <div class=\"col-sm-6 text-right\">\r\n        April 2015 – June 2017\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Managed a class of 4 students from grades 1 – 12 to develop computer science skills\r\n        which led them be critical\r\n        problem solvers and analytical thinkers.</li>\r\n      <li class=\"list-group-item\">Demonstrated leadership skills, and teamwork skills, when faced with problems such as\r\n        fixing bugs. I supported my\r\n        team members by communicating my ideas with them to find errors, fix them, and inform management to prevent for\r\n        future errors.</li>\r\n      <li class=\"list-group-item\">Developed project and time management skills by working with the agile framework in a\r\n        fast paced\r\n        environment\r\n        meeting critical timeframes given.</li>\r\n      <li class=\"list-group-item\">Innovated the way classes are taught by allowing students to create their own games\r\n        from scratch rather than\r\n        following a set plan, which allowed for more development of programming skills in addition to facilitating\r\n        creativity.</li>\r\n      <li class=\"list-group-item\">Showed initiative by creating a program for my team that automates the process of\r\n        creating report cards, which\r\n        significantly reduced the time required to complete them</li>\r\n    </ul>\r\n  </div>\r\n  <div [hidden]=\"!toggleCards[2]\" class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"list-title\">\r\n        E-Health Project, Software Design Course\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item list-bold\">\r\n        Final Grade: B\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Designed an E-Health System to keep track of Doctors, Patients, Medicine, and Prescriptions with a Design by\r\n        Contract approach using Eiffel. Implemented the system using maps and set data structures along with sorting\r\n        algorithms. As a result the system prevented dangerous prescription/interactions and ensured safe practices in\r\n        hospitals.\r\n      </li>\r\n    </ul>\r\n    <div style=\"margin-top:32px\" class=\"row\">\r\n      <div class=\"list-title\">\r\n        Data Structure Designs\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item list-bold\">\r\n        Final Grade: A\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Implemented a variety of data structure techniques to solve real world problems such as a Priority Queue to\r\n        organize patients waiting in an emergency triage.\r\n      </li>\r\n    </ul>\r\n\r\n    <div style=\"margin-top:32px\" class=\"row\">\r\n      <div class=\"list-title\">\r\n        Asymptotic Analysis\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item list-bold\">\r\n        Final Grade: B+\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Analyzed problems based on time/space complexity and determined which data structures will be best suited to\r\n        solve the problem most efficiently. Problems involved the use of programming techniques such as dynamic\r\n        programming, greedy algorithms, and memoization.\r\n      </li>\r\n    </ul>\r\n\r\n    <div style=\"margin-top:32px\" class=\"row\">\r\n      <div class=\"list-title\">\r\n        Software Courses\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group\">\r\n      <li class=\"list-group-item\">\r\n        Software Tools\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        AI and Logic Programming\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Computer Organization\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Computer Security\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Computers, Information and Society\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Design and Analysis of Algorithms\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Differential Calculus with Applications\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Digital Media\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Discrete Math\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Fundamentals of Data Structures\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Integral Calculus with Applications\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Mathematical Logic for Computer Science\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Net-centric Computing\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Operating System Fundamentals\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Probability\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Professional Practice in Computing\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Research Directions in Computing\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Software Design\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Software Tools\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        Theory of Computation\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div [hidden]=\"!toggleCards[3]\" class=\"card-body\">\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Self improvement</li>\r\n      <li class=\"list-group-item\">Web development &amp; design</li>\r\n      <li class=\"list-group-item\">Learning new frameworks and programming languages</li>\r\n      <li class=\"list-group-item\">Reading books</li>\r\n      <li class=\"list-group-item\">Playing and creating video games</li>\r\n      <li class=\"list-group-item\">Keeping active and healthy</li>\r\n    </ul>\r\n    <div style=\"margin-top: 32px\" class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        Application Development - Android\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        I enjoy developing mobile games and apps for the android platform, check out my\r\n        <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/developer?id=0110+Studios&hl=en\">Google\r\n          Play developer account.</a>\r\n      </li>\r\n    </ul>\r\n    <div style=\"margin-top: 32px\" class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        Volunteer Experience\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n          Helped mentor youth at risk by teaching social and school skills.\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div [hidden]=\"!toggleCards[4]\" class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        Ontario Scholar\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        Awarded to students who have obtained an average of 80% or above in any six Grade 12 University Courses.\r\n      </li>\r\n    </ul>\r\n\r\n    <div style=\"margin-top:16px\" class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        York University Entrance Scholarship\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        Awarded to students with an average of 90% or above upon graduating from Grade 12.\r\n      </li>\r\n    </ul>\r\n\r\n    <div style=\"margin-top:16px\" class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        Spring Boot Expert\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        Award upon completion of spring boot <a class=\"card-link\" target=\"_blank\" href=\"https://www.udemy.com/certificate/UC-03Z43GPF/\">Udemy\r\n          course</a>.\r\n      </li>\r\n    </ul>\r\n\r\n    <div style=\"margin-top:16px\" class=\"row\">\r\n      <div class=\"col-sm-6 list-bold\">\r\n        React\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        Award upon completion of React Basic <a class=\"card-link\" target=\"_blank\" href=\"https://www.udemy.com/certificate/UC-CROAYZBT/\">Udemy\r\n          course</a>.\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cv/cv.component.scss":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 16px auto; }\n\n.list-group-item {\n  background-color: transparent; }\n\n.small {\n  font-size: 1rem; }\n\n.list-title {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: 700; }\n\n.list-bold {\n  font-weight: 700; }\n\n.nav-link {\n  font-size: 1.25rem; }\n\n.nav-link:hover {\n    cursor: pointer; }\n\n.card-header:first-child {\n  position: relative;\n  padding-left: 0px;\n  left: -1px; }\n\n.card-header .card-header-tabs {\n  margin-left: 0px; }\n\n@media screen and (max-width: 768px) {\n  .nav-item {\n    display: block;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvQzpcXERldlxcc21lcmFudGUuZ2l0aHViLmlvXFxzYW0tbWVyYW50ZS9zcmNcXGFwcFxcY3ZcXGN2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGVBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsbUJBQWtCLEVBSW5COztBQUxEO0lBR0ksZ0JBQWUsRUFDaEI7O0FBRUg7RUFFSSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLFdBQVUsRUFDWDs7QUFMSDtFQU9JLGlCQUFnQixFQUNqQjs7QUFHRDtFQURGO0lBRUksZUFBYztJQUNkLFlBQVcsRUFFZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNtYWxse1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4ubGlzdC10aXRsZXtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmxpc3QtYm9sZHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5uYXYtbGlua3tcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgJjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuLmNhcmQtaGVhZGVye1xyXG4gICY6Zmlyc3QtY2hpbGR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWRlci10YWJze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"

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

module.exports = "<div class=\"card-footer text-muted\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">\r\n      <a class=\"card-link\" target=\"_blank\" href=\"https://github.com/\">GitHub</a>\r\n      <a class=\"card-link\" target=\"_blank\" href=\"https://bitbucket.org/Sammer95/\">Bitbucket</a>\r\n      <a class=\"card-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sam-merante/\">Linked In</a>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n      <span class=\"date\">{{date | date:'MM-dd-yyyy'}}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer {\n  margin-top: 128px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxEZXZcXHNtZXJhbnRlLmdpdGh1Yi5pb1xcc2FtLW1lcmFudGUvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlcntcclxuICBtYXJnaW4tdG9wOiAxMjhweDtcclxufSJdfQ== */"

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

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a routerLink=\"/home\" class=\"navbar-brand\">\r\n      <img class=\"profile\" src=\"assets/profile.png\">\r\n      Sam Merante\r\n    </a>\r\n    <button class=\"navbar-toggler\" [attr.toggle]=\"toggle\" (click)=\"openNav();\" type=\"button\" data-toggle=\"collapse\"\r\n      data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"nav-menu-chevron\"></span>\r\n    </button>\r\n    <div #navMenu id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-link\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/cv\" routerLinkActive=\"active\" class=\"nav-link\">CV</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/projects\" routerLinkActive=\"active\" class=\"nav-link\">Projects</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/code\" routerLinkActive=\"active\" class=\"nav-link\">Code</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expanding {\n  height: 160px; }\n\n.closing {\n  height: 0px; }\n\n.navbar-toggler {\n  border: none; }\n\n.navbar-toggler .nav-menu-chevron {\n    display: block;\n    width: 30px;\n    height: 3px;\n    background-color: black;\n    margin: 15px 0;\n    transition: all  0.3s ease;\n    -webkit-transition: all  0.3s ease;\n    -moz-transition: all  0.3s ease;\n    -o-transition: all  0.3s ease; }\n\n.navbar-toggler .nav-menu-chevron::before {\n      transition: all  0.3s ease;\n      display: block;\n      content: '';\n      display: block;\n      position: relative;\n      top: -8px;\n      width: 30px;\n      height: 3px;\n      background-color: black; }\n\n.navbar-toggler .nav-menu-chevron::after {\n      transition: all  0.3s ease;\n      -webkit-transition: all  0.3s ease;\n      -moz-transition: all  0.3s ease;\n      -o-transition: all  0.3s ease;\n      display: block;\n      position: relative;\n      top: 6px;\n      content: '';\n      width: 30px;\n      height: 3px;\n      background-color: black; }\n\n.navbar-toggler[toggle=\"true\"] .nav-menu-chevron {\n    height: 0px; }\n\n.navbar-toggler[toggle=\"true\"] .nav-menu-chevron::before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      top: -2px; }\n\n.navbar-toggler[toggle=\"true\"] .nav-menu-chevron::after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      top: -5px; }\n\n.profile {\n  display: inline-block;\n  height: 64px;\n  max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxEZXZcXHNtZXJhbnRlLmdpdGh1Yi5pb1xcc2FtLW1lcmFudGUvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsYUFBWSxFQWlEYjs7QUFsREQ7SUFHTSxlQUFjO0lBQ2QsWUFBVztJQUNYLFlBQVc7SUFDWCx3QkFBdUI7SUFDdkIsZUFBYztJQUNkLDJCQUEwQjtJQUMxQixtQ0FBa0M7SUFDbEMsZ0NBQStCO0lBQy9CLDhCQUE2QixFQXlCOUI7O0FBcENMO01BYVEsMkJBQTBCO01BQzFCLGVBQWM7TUFDZCxZQUFXO01BQ1gsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsWUFBVztNQUNYLFlBQVc7TUFDWCx3QkFBdUIsRUFDeEI7O0FBdEJQO01Bd0JRLDJCQUEwQjtNQUMxQixtQ0FBa0M7TUFDbEMsZ0NBQStCO01BQy9CLDhCQUE2QjtNQUM3QixlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLFNBQVE7TUFDUixZQUFXO01BQ1gsWUFBVztNQUNYLFlBQVc7TUFDWCx3QkFBdUIsRUFDeEI7O0FBbkNQO0lBdUNRLFlBQVcsRUFTWjs7QUFoRFA7TUF5Q1UsaUNBQXdCO2NBQXhCLHlCQUF3QjtNQUN4QixVQUFTLEVBQ1Y7O0FBM0NUO01BNkNVLGtDQUF5QjtjQUF6QiwwQkFBeUI7TUFDekIsVUFBUyxFQUNWOztBQUlUO0VBQ0Usc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kaW5ne1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbn1cclxuLmNsb3Npbmd7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuLm5hdmJhci10b2dnbGVye1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAgICYgLm5hdi1tZW51LWNoZXZyb257XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAgMC4zcyBlYXNlO1xyXG4gICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLThweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgICAmOjphZnRlcntcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgIDAuM3MgZWFzZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAgMC4zcyBlYXNlO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsICAwLjNzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmW3RvZ2dsZT1cInRydWVcIl17XHJcbiAgICAgICYgLm5hdi1tZW51LWNoZXZyb257XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnByb2ZpbGV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogNjRweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.toggle = false;
        this.navMenu.nativeElement.className = 'navbar-collapse collapse';
    };
    HeaderComponent.prototype.openNav = function () {
        var _this = this;
        this.toggle = !this.toggle;
        if (this.toggle) {
            this.navMenu.nativeElement.className = 'navbar-collapse collapsing';
            setTimeout(function () {
                _this.navMenu.nativeElement.className = 'navbar-collapse collapsing expanding';
            }, 0);
            setTimeout(function () {
                _this.navMenu.nativeElement.className = 'navbar-collapse collapse show';
            }, 300);
        }
        else {
            this.navMenu.nativeElement.className = 'navbar-collapse collapsing expanding';
            setTimeout(function () {
                _this.navMenu.nativeElement.className = 'navbar-collapse collapsing closing';
            }, 0);
            setTimeout(function () {
                _this.navMenu.nativeElement.className = 'navbar-collapse collapse';
            }, 300);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "navMenu", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
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

module.exports = "<div class=\"card\">\r\n  <img src=\"assets/profile.png\" class=\"card-img-top\" alt=\"Profile picture of sam\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Sam Merante</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Software Developer</h6>\r\n    <p class=\"card-text\">\r\n      I am a York University graduate with a bachelor degree in Computer Science from the Lassonde School of Engineering. I have several years of programming\r\n      experience in languages such as Java, AngularJS/4-6, C++, Python, C#, C, among other languages.\r\n    </p>\r\n    <p class=\"card-text\">\r\n      I have experience in programming both front end and back end at the enterprise level for a major North American\r\n      bank. I have sufficient knowledge of the online banking services platforms.\r\n    </p>\r\n    <p class=\"card-text\">\r\n      I am always motivated to take on new projects, and ready to learn new skills and adapt to new environments.\r\n    </p>\r\n    <p class=\"card-text\">\r\n      I am always seizing the oppurtunity for contionuous self development.\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 90%;\n  margin: 32px auto; }\n\n.card-img-top {\n  width: 80px;\n  margin: 8px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcRGV2XFxzbWVyYW50ZS5naXRodWIuaW9cXHNhbS1tZXJhbnRlL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICB3aWR0aDogOTAlOyBcclxuICBtYXJnaW46IDMycHggYXV0bztcclxufVxyXG4uY2FyZC1pbWctdG9we1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbjogOHB4IGF1dG87XHJcbn0iXX0= */"

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

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Projects</h1>\r\n<div class=\"accordion\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" [attr.expanded]=\"expanded[0]\" (click)=\"expand(0);\">\r\n      Android Applications <span class=\"chevron\" [attr.expanded]=\"expanded[0]\"></span>\r\n    </div>\r\n    <div class=\"collapse show\">\r\n      <div [attr.expanded]=\"expanded[0]\" class=\"card-body\">\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">\r\n            <span class=\"bold\"><img alt=\"PJ.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/PJ.png\" />\r\n              Portal Jumper</span>\r\n            <p class=\"card-text\">\r\n              Free to play side scroller arcade style game\r\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=runner.android&hl=en\">Portal\r\n                Jumper</a> for the android platform.\r\n            </p>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <span class=\"bold\"><img alt=\"CC.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/CC.png\" />\r\n              Card Counter</span>\r\n            <p style=\"margin-top:16px;\" class=\"card-text\">\r\n              Free application to keep track of count in the game blackjack\r\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios0110.CardCounter.android&hl=en\">Card\r\n                Counter</a> for the android platform.\r\n            </p>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <span class=\"bold\"><img alt=\"CJ.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/CJ.png\" />\r\n              Cliff Jumper</span>\r\n            <p style=\"margin-top:16px;\" class=\"card-text\">\r\n              Free platformer game\r\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios0110.CliffJumper.android&hl=en\">Cliff\r\n                Jumper</a> for the android platform.\r\n            </p>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <span class=\"bold\"><img alt=\"DC.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/DC.png\" />\r\n              Doodle Cannon</span>\r\n            <p style=\"margin-top:16px;\" class=\"card-text\">\r\n              Free puzzle game\r\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios0110.ballin.android&hl=en\">Doodle\r\n                Cannon</a> for the android platform.\r\n            </p>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <span class=\"bold\"><img alt=\"S.png\" style=\"width: 64px; margin-right: 8px\" class=\"img-responsive\" src=\"assets/S.png\" />\r\n              Slithery</span>\r\n            <p style=\"margin-top:16px;\" class=\"card-text\">\r\n              Free top down fluid snake game\r\n              <a class=\"card-link\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.studios.catAndMouse.android&hl=en\">Slithery</a>\r\n              for the android platform.\r\n            </p>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" [attr.expanded]=\"expanded[1]\" (click)=\"expand(1);\">\r\n      Enterprise Applications <span class=\"chevron\" [attr.expanded]=\"expanded[1]\"></span>\r\n    </div>\r\n    <div [attr.expanded]=\"expanded[1]\" class=\"card-body\">\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 bold\">\r\n              TD Personal Lending Application\r\n            </div>\r\n            <div class=\"col-sm-6 text-right\">\r\n              August 2017 – July 2018\r\n            </div>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Worked on an online application allowing a customer to apply for an unsecured loan with auto approval and\r\n            auto\r\n            funding. Agile\r\n            development with Angular JS front end and Java back end. Technology stack: Angular, Java, Jboss, Node,\r\n            Maven,\r\n            Bower, SASS, Jenkins, Oracale, Splunk, Jira, confluence, BitBucket.\r\n          </p>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 bold\">\r\n              RBC Common Components Library\r\n            </div>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Worked on a common component library that's online for other developers throughout RBC, accessible,\r\n            functional and\r\n            styled to meet RBC frameworks guidelines.\r\n          </p>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" [attr.expanded]=\"expanded[2]\" (click)=\"expand(2);\">\r\n      Personal Applications <span class=\"chevron\" [attr.expanded]=\"expanded[2]\"></span>\r\n    </div>\r\n    <div [attr.expanded]=\"expanded[2]\" class=\"card-body\">\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 bold\">\r\n              Video Game Programming - PC\r\n            </div>\r\n            <div class=\"col-sm-6 text-right\">\r\n              August 2012 – Current\r\n            </div>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Worked on and continue working on game applications for the PC as a personal hobby, including games written\r\n            in Java, C++, C#, and in the unity game engine.\r\n          </p>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 bold\">\r\n              Website Design &amp; Development\r\n            </div>\r\n            <div class=\"col-sm-6 text-right\">\r\n              August 2012 – Current\r\n            </div>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            I enjoy working on website design and development using Javascript and front end frameworks, and using Java\r\n            and related framekworks for the backend.\r\n          </p>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 95%;\n  margin: 0px auto; }\n\n.bold {\n  font-weight: 700; }\n\n.card-header[expanded=\"true\"] {\n  background: transparent; }\n\n.card-header:hover {\n  cursor: pointer; }\n\n.card-body {\n  transition: all 0.5s ease;\n  -webkit-transition: all  0.3s ease;\n  -moz-transition: all  0.3s ease;\n  -o-transition: all  0.3s ease;\n  visibility: collapse;\n  max-height: 0px;\n  padding: 0; }\n\n.card-body[expanded=\"true\"] {\n    max-height: 500px;\n    overflow-y: scroll;\n    visibility: visible;\n    border-top: 1px solid rgba(0, 0, 0, 0.125); }\n\n.chevron {\n  transition: all 0.5s ease;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-top: 3px solid rgba(0, 0, 0, 0.75);\n  border-right: 3px solid rgba(0, 0, 0, 0.75);\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  position: relative;\n  top: 6px;\n  right: -9px; }\n\n.chevron[expanded=\"false\"] {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n    top: -1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXERldlxcc21lcmFudGUuZ2l0aHViLmlvXFxzYW0tbWVyYW50ZS9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGlCQUFnQixFQUVqQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUVJLHdCQUF1QixFQUN4Qjs7QUFISDtFQUtJLGdCQUFlLEVBQ2hCOztBQUVIO0VBQ0UsMEJBQXlCO0VBQ3pCLG1DQUFrQztFQUNsQyxnQ0FBK0I7RUFDL0IsOEJBQTZCO0VBQzdCLHFCQUFvQjtFQUNwQixnQkFBZTtFQUNmLFdBQVUsRUFPWDs7QUFkRDtJQVNJLGtCQUFpQjtJQUNqQixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLDJDQUFzQyxFQUN2Qzs7QUFFSDtFQUNFLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsK0JBQThCO0VBQzlCLDZCQUE0QjtFQUM1QixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGFBQVk7RUFDWiwwQ0FBeUM7RUFDekMsNENBQTJDO0VBQzNDLGtDQUFpQztFQUNqQywwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixZQUFXLEVBS1o7O0FBbkJEO0lBZ0JJLGtDQUF5QjtZQUF6QiwwQkFBeUI7SUFDekIsVUFBUyxFQUNWIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSkgIWltcG9ydGFudDtcclxufVxyXG4uYm9sZHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICAmW2V4cGFuZGVkPVwidHJ1ZVwiXXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgIDAuM3MgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAgMC4zcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAgMC4zcyBlYXNlO1xyXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xyXG4gIG1heC1oZWlnaHQ6IDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gICZbZXhwYW5kZWQ9XCJ0cnVlXCJde1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgfVxyXG59XHJcbi5jaGV2cm9ue1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgcmlnaHQ6IC05cHg7XHJcbiAgJltleHBhbmRlZD1cImZhbHNlXCJde1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcbn0iXX0= */"

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

module.exports = __webpack_require__(/*! C:\Dev\smerante.github.io\sam-merante\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
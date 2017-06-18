webpackJsonp([1,4],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        // baseUrl: String = 'http://localhost:8080';
        this.baseUrl = '';
    }
    AuthService.prototype.updateUser = function (userInfo) {
        console.log('userInfo:', userInfo);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/api/users/update', userInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/api/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/api/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthService.prototype.getUserProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + '/api/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        if (this.authToken != null || this.authToken != undefined) {
            return !(this.jwtHelper.isTokenExpired(this.authToken));
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 132;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(167);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(237),
        styles: [__webpack_require__(228)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_book_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_googlebook_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_navigation_navigation_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_book_book_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_bookform_bookform_component__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'book/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_book_book_component__["a" /* BookComponent */] },
    { path: 'newbook', component: __WEBPACK_IMPORTED_MODULE_21__components_bookform_bookform_component__["a" /* BookformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_bookform_bookform_component__["a" /* BookformComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__services_book_service__["a" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_13__services_googlebook_service__["a" /* GooglebookService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_googlebook_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookComponent = (function () {
    function BookComponent(titleService, auth, bookService, route, googlebookService, flashMessage, router) {
        this.titleService = titleService;
        this.auth = auth;
        this.bookService = bookService;
        this.route = route;
        this.googlebookService = googlebookService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var book_id = params['id'];
            _this.bookService.getBookById(book_id)
                .subscribe(function (data) {
                if (data) {
                    _this.book = data.book;
                    _this.titleService.setTitle(data.book.title + ' - Book Xchange');
                    _this.googlebookService.getBookById(data.book.volumeId)
                        .subscribe(function (data) {
                        _this.googleBook = data;
                    }, function (err) {
                        console.error(err);
                        return false;
                    });
                }
            }, function (err) {
                console.error(err);
                return false;
            });
        });
        if (this.auth.loggedIn()) {
            var user = JSON.parse(localStorage.getItem('user'));
            this.user_id = user.id;
        }
    };
    BookComponent.prototype.isLoggedIn = function () {
        return this.auth.loggedIn();
    };
    BookComponent.prototype.onRequestClick = function () {
        var _this = this;
        if (!this.isLoggedIn()) {
            this.router.navigate(['/register']);
        }
        else {
            this.bookService.makeRequest(this.book._id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Request made!', { cssClass: 'alert-success' });
                    var currentUrl_1 = _this.router.url;
                    var refreshUrl = currentUrl_1.indexOf('someRoute') > -1 ? '/someOtherRoute' : '/someRoute';
                    _this.router.navigateByUrl(refreshUrl).then(function () {
                        _this.router.navigateByUrl(currentUrl_1);
                    });
                }
                else {
                    _this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failuer' });
                }
            }, function (err) {
                console.error(err);
                return false;
            });
        }
    };
    BookComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this.bookService.deleteBook(this.book._id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Book deleted!', { cssClass: 'alert-success' });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(data.msg + '. Please try again.', { cssClass: 'alert-failure' });
            }
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(238),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_googlebook_service__["a" /* GooglebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_googlebook_service__["a" /* GooglebookService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _g || Object])
], BookComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_googlebook_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_book_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookformComponent = (function () {
    function BookformComponent(fb, titleService, auth, flashMessage, router, googlebookService, bookService) {
        this.fb = fb;
        this.titleService = titleService;
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
        this.googlebookService = googlebookService;
        this.bookService = bookService;
        this.searching = false;
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.formErrors = {
            'search': ''
        };
        this.validationMessages = {
            'search': {
                'required': 'A search city is required.'
            }
        };
    }
    BookformComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Add a Book - Book Xchange');
        this.buildForm();
    };
    BookformComponent.prototype.buildForm = function () {
        var _this = this;
        this.searchForm = this.fb.group({
            'search': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required
                ]]
        });
        this.searchForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    // onValueChanged function taken from the Angular Cookbook's Form Validation section
    // https://angular.io/docs/ts/latest/cookbook/form-validation.html
    BookformComponent.prototype.onValueChanged = function (data) {
        if (!this.searchForm) {
            return;
        }
        var form = this.searchForm;
        for (var field in this.formErrors) {
            // clear previous error message if any
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    BookformComponent.prototype.isFirstPage = function () {
        if (this.currentPage == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    BookformComponent.prototype.isLastPage = function () {
        if (Math.ceil(Number(this.totalResults) / Number(this.itemsPerPage)) == this.currentPage) {
            return true;
        }
        else {
            return false;
        }
    };
    BookformComponent.prototype.nextPage = function () {
        this.currentPage += 1;
        this.updateSearchResults();
    };
    BookformComponent.prototype.prevPage = function () {
        this.currentPage -= 1;
        this.updateSearchResults();
    };
    BookformComponent.prototype.onSearchSubmit = function () {
        // check if search form is valid
        if (this.searchForm.valid) {
            this.currentPage = 1;
            this.searchTerm = this.searchForm.value.search;
            this.updateSearchResults();
        }
    };
    BookformComponent.prototype.updateSearchResults = function () {
        var _this = this;
        this.searching = true;
        this.searchResults = undefined;
        this.googlebookService.getBooks(this.searchTerm, this.itemsPerPage, this.currentPage).subscribe(function (data) {
            _this.searchResults = data.items;
            // console.log('searchResults:', this.searchResults);
            _this.totalResults = data.totalItems;
            _this.searching = false;
        }, function (err) {
            console.error(err);
            _this.searching = false;
            return false;
        });
    };
    BookformComponent.prototype.addBook = function (volumeId) {
        var _this = this;
        this.googlebookService.getBookById(volumeId).subscribe(function (data) {
            var smallUrl, smallThumbnailUrl;
            // console.log('data', data);
            if (data.volumeInfo.imageLinks == undefined) {
                // book has no image, substitute book image from s3
                smallUrl = 'https://s3.amazonaws.com/andydlindsay-book-trading/book-152-191668.png';
                smallThumbnailUrl = 'https://s3.amazonaws.com/andydlindsay-book-trading/book-152-191668.png';
            }
            else {
                smallUrl = data.volumeInfo.imageLinks.small,
                    smallThumbnailUrl = data.volumeInfo.imageLinks.smallThumbnail;
            }
            var newBook = {
                volumeId: volumeId,
                title: data.volumeInfo.title,
                smallUrl: smallUrl,
                smallThumbnailUrl: smallThumbnailUrl
            };
            _this.bookService.addBook(newBook).subscribe(function (data) {
                _this.flashMessage.show('Book added!', { cssClass: 'alert-success' });
                _this.updateSearchResults();
            }, function (err) {
                console.error(err);
                return false;
            });
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    return BookformComponent;
}());
BookformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bookform',
        template: __webpack_require__(239),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_googlebook_service__["a" /* GooglebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_googlebook_service__["a" /* GooglebookService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_book_service__["a" /* BookService */]) === "function" && _g || Object])
], BookformComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=bookform.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(titleService, auth, bookService) {
        this.titleService = titleService;
        this.auth = auth;
        this.bookService = bookService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Home - Book Xchange');
        this.bookService.getBooks().subscribe(function (data) {
            if (data) {
                _this.books = data.books;
                // console.log(this.books);
            }
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    HomeComponent.prototype.isLoggedIn = function () {
        return this.auth.loggedIn();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(240),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(fb, titleService, auth, flashMessage, router) {
        this.fb = fb;
        this.titleService = titleService;
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required.'
            },
            'password': {
                'required': 'Password is required.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Login - Book Xchange');
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            'username': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required
                ]]
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    // onValueChanged function taken from the Angular Cookbook's Form Validation section
    // https://angular.io/docs/ts/latest/cookbook/form-validation.html
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            // clear previous error message if any
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // submit login info to database
        if (this.loginForm.valid) {
            // console.log('GTG');
            var user = this.loginForm.value;
            this.auth.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Logged in!', { cssClass: 'alert-success' });
                    _this.auth.storeUserData(data.token, data.user);
                    _this.router.navigate(['/profile']);
                }
                else {
                    _this.flashMessage.show(data.msg + '. Please try again.', { cssClass: 'alert-failure' });
                }
            });
        }
        else {
            console.log('Errors remain...');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(241),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(auth, flashMessage, router) {
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.isLoggedIn = function () {
        return this.auth.loggedIn();
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.auth.logout();
        this.flashMessage.show('Logged out!', { cssClass: 'alert-success' });
        this.router.navigate(['/']);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(242),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavigationComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent(titleService, fb, auth, bookService, flashMessage, router) {
        this.titleService = titleService;
        this.fb = fb;
        this.auth = auth;
        this.bookService = bookService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.formErrors = {
            'fullname': '',
            'city': '',
            'state': ''
        };
        this.validationMessages = {
            'fullname': {
                'maxlength': 'Name must be 25 characters or less.',
                'minlength': 'Name must be at least 3 characters long.'
            },
            'city': {
                'maxlength': 'City must be 25 characters or less.'
            },
            'state': {
                'maxlength': 'State must be 25 characters or less.'
            }
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Profile - Book Xchange');
        this.auth.getUserProfile().subscribe(function (data) {
            if (data) {
                _this.user = data.user;
                // console.log('user:', this.user);
                _this.bookService.getBooksByOwner(_this.user['id']).subscribe(function (data) {
                    _this.books = data.books;
                    // console.log(this.books);
                }, function (err) {
                    console.error(err);
                    return false;
                });
            }
        }, function (err) {
            console.error(err);
            return false;
        });
        this.bookService.getBooksRequestedByUser().subscribe(function (data) {
            _this.booksRequestedBy = data.books;
            // console.log('requestedby:', this.booksRequestedBy);
        }, function (err) {
            console.error(err);
            return false;
        });
        this.bookService.getBooksRequestedFromUser().subscribe(function (data) {
            _this.booksRequestedFrom = data.books;
            // console.log('requestedfrom:', this.booksRequestedFrom);
        }, function (err) {
            console.error(err);
            return false;
        });
        this.buildForm();
    };
    ProfileComponent.prototype.onCancelClick = function (book_id) {
        var _this = this;
        this.bookService.cancelRequest(book_id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Request cancelled.', { cssClass: 'alert-success' });
                // page refresh hack from Serj Sagan's answer on stackoverflow
                // https://stackoverflow.com/questions/38036498/angular2-router3-cant-reload-refresh-active-route/44580036#44580036
                var currentUrl_1 = _this.router.url;
                var refreshUrl = currentUrl_1.indexOf('someRoute') > -1 ? '/someOtherRoute' : '/someRoute';
                _this.router.navigateByUrl(refreshUrl).then(function () {
                    _this.router.navigateByUrl(currentUrl_1);
                });
            }
            else {
                _this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failure' });
            }
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    ProfileComponent.prototype.onAcceptClick = function (book_id) {
        var _this = this;
        this.bookService.tradeBook(book_id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Trade accepted.', { cssClass: 'alert-success' });
                var currentUrl_2 = _this.router.url;
                var refreshUrl = currentUrl_2.indexOf('someRoute') > -1 ? '/someOtherRoute' : '/someRoute';
                _this.router.navigateByUrl(refreshUrl).then(function () {
                    _this.router.navigateByUrl(currentUrl_2);
                });
            }
            else {
                _this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failure' });
            }
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    ProfileComponent.prototype.buildForm = function () {
        var _this = this;
        this.profileForm = this.fb.group({
            'fullname': ['', [
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(35),
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].minLength(3)
                ]],
            'city': ['', [
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(25)
                ]],
            'state': ['', [
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(25)
                ]]
        });
        this.profileForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    // onValueChanged function taken from the Angular Cookbook's Form Validation section
    // https://angular.io/docs/ts/latest/cookbook/form-validation.html
    ProfileComponent.prototype.onValueChanged = function (data) {
        if (!this.profileForm) {
            return;
        }
        var form = this.profileForm;
        for (var field in this.formErrors) {
            // clear previous error message if any
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ProfileComponent.prototype.onUpdateClick = function () {
        var _this = this;
        if (this.profileForm.valid && this.profileForm.dirty) {
            var userInfo = {
                'fullName': this.profileForm.value.fullname,
                'city': this.profileForm.value.city,
                'state': this.profileForm.value.state
            };
            this.auth.updateUser(userInfo).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Profile information saved.', { cssClass: 'alert-success' });
                    _this.profileForm.markAsPristine();
                }
                else {
                    _this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failure' });
                }
            }, function (err) {
                console.error(err);
                return false;
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(243),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(fb, titleService, auth, flashMessage, router) {
        this.fb = fb;
        this.titleService = titleService;
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required.',
                'minlength': 'Username must be at least 8 characters long.',
                'maxlength': 'Username cannot be more than 25 characters long.',
                'pattern': 'Username cannot contain special characters or spaces.'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password must be at least 8 characters long.',
                'maxlength': 'Password cannot be more than 25 characters long.'
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Register - Book Xchange');
        this.buildForm();
    };
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.registerForm = this.fb.group({
            'username': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(/^[a-zA-Z0-9]+$/)
                ]],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)
                ]]
        });
        this.registerForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    // onValueChanged function taken from the Angular Cookbook's Form Validation section
    // https://angular.io/docs/ts/latest/cookbook/form-validation.html
    RegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.registerForm) {
            return;
        }
        var form = this.registerForm;
        for (var field in this.formErrors) {
            // clear previous error message if any
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.registerForm.valid) {
            // create a user object to hold form values
            var newUser = this.registerForm.value;
            // submit user to database
            this.auth.registerUser(newUser).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('You have successfully registered! Please log in with your username and password.', { cssClass: 'alert-success', timeout: 5000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    if (data.errmsg.includes('E11000')) {
                        _this.flashMessage.show('A user with that username already exists. Please choose a different username.', { cssClass: 'alert-failure', timeout: 5000 });
                    }
                    else {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-failure', timeout: 5000 });
                    }
                }
            });
        }
        else {
            console.log('Errors remain...');
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(244),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"book != undefined && googleBook != undefined\">\n  <md-toolbar class=\"primary-color\">\n    <span class=\"title-font\">{{ book.title }}</span>\n    <span class=\"app-toolbar-filler\"></span>\n    <button *ngIf=\"book.available && book.owner.owner_id != user_id\" md-raised-button color=\"primary\" class=\"title-font\" (click)=\"onRequestClick()\">Request Book</button>\n    <button class=\"title-font\" md-raised-button color=\"accent\" *ngIf=\"book.owner.owner_id == user_id\" (click)=\"onDeleteClick()\">Delete Book</button>\n    <span class=\"title-font\" *ngIf=\"!book.available && book.owner.owner_id != user_id\">Not available for trade</span>\n  </md-toolbar>\n  <md-card-content>\n\n    <div class=\"standard-flex\">\n    \n      <!-- IMAGE AREA -->\n      <div class=\"flex-1 min-width-300 max-width-450 padding-top-24 padding-bottom-24\">\n        <img class=\"margin-auto display-block\" src=\"{{ book.images.smallUrl }}\">\n      </div>\n\n      <!-- INFO AREA -->\n      <div class=\"title-font flex-1 padding-left-16 padding-top-8 padding-right-16 padding-bottom-8 max-width-600\">\n        <h1>Title: {{ book.title }}</h1>\n        <h2>Author: {{ googleBook.volumeInfo.authors.join(', ') }}</h2>\n        <h3><span [innerHTML]=\"googleBook.volumeInfo.description\"></span></h3>\n        <div *ngIf=\"googleBook.volumeInfo.averageRating != undefined\">\n          <h2 class=\"margin-bottom-0\">Rating: {{ googleBook.volumeInfo.averageRating }}</h2>\n          <p class=\"margin-top-0\">Based on {{ googleBook.volumeInfo.ratingsCount }} ratings</p>\n        </div>\n        <h2>Owner: {{ book.owner.username }}</h2>\n      </div>\n    \n    </div>\n\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-toolbar class=\"primary-color\">\n    <span class=\"title-font\">Add a Book</span>\n  </md-toolbar>\n\n  <md-card-content>\n\n    <form [formGroup]=\"searchForm\">\n      <md-input-container>\n        <input type=\"search\" required mdInput placeholder=\"Enter a title or author\" formControlName=\"search\" id=\"search\">\n        <md-hint *ngIf=\"formErrors.search\">{{ formErrors.search }}</md-hint>\n      </md-input-container>\n      <button type=\"submit\" md-raised-button color=\"primary\" (click)=\"onSearchSubmit()\"><md-icon>search</md-icon></button>\n    </form>\n\n    <!-- display if currently searching -->\n    <div *ngIf=\"searching == true\" class=\"padding-left-24 padding-bottom-24\">\n      <md-spinner></md-spinner>\n    </div>\n\n    <!-- display if search has been done -->\n    <div *ngIf=\"searchResults != undefined\" class=\"standard-flex\" id=\"results\">\n\n      <!-- display if results returned is 0 -->\n      <div *ngIf=\"searchResults.length == 0\">\n        <h2>No books found! Sorry.</h2>\n      </div>\n\n      <!-- display search results -->\n      <div class=\"margin-auto standard-flex flex-1 max-width-198\" *ngFor=\"let result of searchResults\">\n\n        <!-- image -->\n        <div class=\"flex-1 padding-top-16 min-width-300\">\n          <img class=\"margin-auto display-block\" *ngIf=\"result.volumeInfo.imageLinks != undefined\" src=\"{{ result.volumeInfo.imageLinks.thumbnail }}\">\n          <img class=\"margin-auto display-block max-width-128\" *ngIf=\"result.volumeInfo.imageLinks == undefined\" src=\"https://s3.amazonaws.com/andydlindsay-book-trading/book-152-191668.png\">\n        </div>\n\n        <!-- info -->\n        <div class=\"flex-1 padding-right-24 padding-bottom-16 text-center\">\n          <h3>{{ result.volumeInfo.title }}</h3>\n          <h3 *ngIf=\"result.volumeInfo.authors != undefined\">by {{ result.volumeInfo.authors.join(', ') }}</h3>\n          <button md-raised-button color=\"primary\" (click)=\"addBook(result.id)\">Add Book</button>\n        </div>\n\n      </div> <!-- search results -->\n\n    </div>\n\n    <!-- display page navigation -->\n    <div *ngIf=\"searchResults != undefined\" class=\"padding-bottom-16\">\n      <div *ngIf=\"totalResults > 10\" class=\"standard-flex\">\n        <span class=\"app-toolbar-filler\"></span>\n        <button md-button [disabled]=\"isFirstPage()\" (click)=\"prevPage()\">\n          <md-icon>navigate_before</md-icon>Prev Page\n        </button>\n        <h2>&nbsp;{{ currentPage }}&nbsp;</h2>\n        <button md-button [disabled]=\"isLastPage()\" (click)=\"nextPage()\">\n          Next Page<md-icon>navigate_next</md-icon>\n        </button>\n        <span class=\"app-toolbar-filler\"></span>\n      </div>\n    </div>\n\n  </md-card-content> \n</md-card>\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-toolbar class=\"primary-color\">\n        <span class=\"title-font\">All Books</span>\n    </md-toolbar>\n    <md-card-content>\n\n        <!-- book cards -->\n        <div class=\"flex-container\">\n            <div *ngFor=\"let book of books\">\n                <div class=\"image-card\">\n                    <a routerLink=\"{{ '/book/' + book._id }}\">\n                        <img class=\"image-card\" md-card-image src=\"{{book.images.smallThumbnailUrl}}\">\n                    </a>\n                </div>\n            </div>\n        </div>\n\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-toolbar class=\"primary-color\"><span class=\"title-font\">Login</span></md-toolbar>\n  <md-card-content>\n    <form [formGroup]=\"loginForm\">\n      <md-input-container>\n        <input type=\"text\" required mdInput placeholder=\"Username\" formControlName=\"username\" id=\"username\">\n        <md-hint *ngIf=\"formErrors.username\">{{ formErrors.username }}</md-hint>\n      </md-input-container>\n      <md-input-container>\n        <input type=\"password\" required mdInput placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n        <md-hint *ngIf=\"formErrors.password\">{{ formErrors.password }}</md-hint>\n      </md-input-container>\n      <button class=\"title-font\" md-raised-button color=\"primary\" (click)=\"onLoginSubmit()\">Login</button>\n    </form>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div id=\"nav\">\n  <md-card>\n    <md-toolbar class=\"title-font primary-color\">\n      <h1 class=\"title-bar\">Book Xchange</h1>\n      <span class=\"app-toolbar-filler\"></span>\n      <a class=\"hover-underline\" routerLink=\"/\">Home</a>\n      <div *ngIf=\"!isLoggedIn()\">\n        <span>&nbsp;&nbsp;&nbsp;</span>\n        <a class=\"hover-underline\" routerLink=\"/register\">Register</a>\n        <span>&nbsp;&nbsp;</span>\n        <a class=\"hover-underline\" routerLink=\"/login\">Login</a>\n      </div>\n      <div *ngIf=\"isLoggedIn()\">\n        <span>&nbsp;&nbsp;&nbsp;</span>\n        <a class=\"hover-underline\" routerLink=\"/profile\">Profile</a>\n        <span>&nbsp;&nbsp;</span>\n        <a class=\"anchor-button hover-underline\" (click)=\"onLogoutClick()\">Logout</a>\n      </div>\n    </md-toolbar>\n    <md-card-content>\n      <div class=\"app-content\">\n        <flash-messages></flash-messages>\n        <router-outlet></router-outlet>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"standard-flex\">\n    \n    <!-- PROFILE INFO AREA-->\n    <div class=\"flex-1\" id=\"info-area\">\n        <md-card>\n            <md-toolbar class=\"primary-color\">\n                <span class=\"title-font\">Your Info</span>\n            </md-toolbar>\n            <md-card-content>\n\n                <form [formGroup]=\"profileForm\" *ngIf=\"user != undefined\">\n                    <md-input-container>\n                        <input [ngModel]=\"user.fullName\" type=\"text\" mdInput placeholder=\"Full name\" formControlName=\"fullname\" id=\"fullname\">\n                        <md-hint *ngIf=\"formErrors.fullname\">{{ formErrors.fullname }}</md-hint>\n                    </md-input-container>\n                    <md-input-container>\n                        <input [ngModel]=\"user.city\" type=\"text\" mdInput placeholder=\"City\" formControlName=\"city\" id=\"city\">\n                        <md-hint *ngIf=\"formErrors.city\">{{ formErrors.city }}</md-hint>\n                    </md-input-container>\n                    <md-input-container>\n                        <input [ngModel]=\"user.state\" type=\"text\" mdInput placeholder=\"State\" formControlName=\"state\" id=\"state\">\n                        <md-hint *ngIf=\"formErrors.state\">{{ formErrors.state }}</md-hint>\n                    </md-input-container>\n                    <button class=\"title-font\" md-raised-button color=\"primary\" (click)=\"onUpdateClick()\">Update</button>\n                </form>\n\n            </md-card-content>\n        </md-card>\n    </div>\n\n\n    <!-- your trade requrests -->\n    <div class=\"flex-1\">\n        <md-card>\n\n            <md-toolbar class=\"primary-color\">\n                <span class=\"title-font\">Your Trade Requests</span>\n            </md-toolbar>\n\n            <md-card-content>\n\n                <div *ngIf=\"booksRequestedBy != undefined\">\n                    <div *ngIf=\"booksRequestedBy.length > 0\">\n                        <div class=\"standard-flex\" *ngFor=\"let bookRequestedBy of booksRequestedBy\">\n                            <h3 class=\"title-font flex-1 padding-left-16\">\n                                you have requested <a routerLink=\"{{ '/book/' + bookRequestedBy._id }}\">{{ bookRequestedBy.title }}</a> from {{ bookRequestedBy.owner.username }}\n                            </h3>\n                            <span class=\"app-toolbar-filler\"></span>\n                            <div class=\"padding-right-16 padding-top-8 padding-bottom-8 padding-left-16 margin-auto\">\n                                <button md-raised-button color=\"accent\" class=\"title-font\" (click)=\"onCancelClick(bookRequestedBy._id)\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"booksRequestedFrom != undefined\">\n                    <div *ngIf=\"booksRequestedFrom.length > 0\">\n                        <div class=\"standard-flex\" *ngFor=\"let bookRequestedFrom of booksRequestedFrom\">\n                            <h3 class=\"title-font flex-1 padding-left-16\">\n                                {{ bookRequestedFrom.requestedBy.username }} has requested <a routerLink=\"{{ '/book/' + bookRequestedFrom._id }}\">{{ bookRequestedFrom.title }}</a> from you\n                            </h3>\n                            <span class=\"app-toolbar-filler\"></span>\n                            <div class=\"padding-right-16 padding-top-8 padding-bottom-8 padding-left-16 margin-auto\">\n                                <button md-raised-button color=\"primary\" class=\"title-font\" (click)=\"onAcceptClick(bookRequestedFrom._id)\">Accept</button>\n                                &nbsp;&nbsp;\n                                <button md-raised-button color=\"accent\" class=\"title-font\" (click)=\"onCancelClick(bookRequestedFrom._id)\">Reject</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"booksRequestedBy != undefined && booksRequestedFrom != undefined\">\n                    <div *ngIf=\"!booksRequestedBy.length > 0 && !booksRequestedFrom.length > 0\">\n                        <h3 class=\"text-center title-font padding-bottom-16\">You have no outstanding trade requests</h3>\n                    </div>\n                </div>\n\n            </md-card-content>\n            \n        </md-card>\n    </div>\n\n    \n</div>\n\n\n\n<!-- BOOK AREA -->\n<md-card>\n    <md-toolbar class=\"primary-color\">\n        <span class=\"title-font\">Your Books</span>\n        <span class=\"app-toolbar-filler\"></span>\n        <button md-raised-button color=\"primary\" routerLink=\"/newbook\" class=\"title-font\">Add Book</button>\n    </md-toolbar>\n    <md-card-content>\n        <!-- book cards -->\n        <div class=\"flex-container\">\n            <div *ngFor=\"let book of books\">\n                <div class=\"image-card\">\n                    <a routerLink=\"{{ '/book/' + book._id }}\">\n                        <img class=\"image-card\" md-card-image src=\"{{book.images.smallThumbnailUrl}}\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-toolbar class=\"primary-color\"><span class=\"title-font\">Register</span></md-toolbar>\n  <md-card-content>\n    <form [formGroup]=\"registerForm\">\n      <md-input-container>\n        <input type=\"text\" required mdInput placeholder=\"Username\" formControlName=\"username\" id=\"username\" dividerColor=\"accent\">\n        <md-hint *ngIf=\"formErrors.username\">{{ formErrors.username }}</md-hint>\n      </md-input-container>\n      <md-input-container>\n        <input required mdInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" id=\"password\" dividerColor=\"accent\">\n        <md-hint *ngIf=\"formErrors.password\">{{ formErrors.password }}</md-hint>\n      </md-input-container>\n      <button class=\"title-font\" md-raised-button color=\"primary\" (click)=\"onRegisterSubmit()\">Register</button>\n    </form>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__googlebook_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookService = (function () {
    function BookService(http, googlebookService) {
        this.http = http;
        this.googlebookService = googlebookService;
        // baseUrl: String = 'http://localhost:8080';
        this.baseUrl = '';
    }
    BookService.prototype.getBooks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + '/api/books/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.getBooksByOwner = function (owner_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + '/api/books/byowner/' + owner_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.getBookById = function (book_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + '/api/books/' + book_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.makeRequest = function (book_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get(this.baseUrl + '/api/books/' + book_id + '/request', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.cancelRequest = function (book_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get(this.baseUrl + '/api/books/' + book_id + '/cancelrequest', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.tradeBook = function (book_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get(this.baseUrl + '/api/books/' + book_id + '/trade', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    BookService.prototype.getBooksRequestedByUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get(this.baseUrl + '/api/books/requestedby', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.getBooksRequestedFromUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get(this.baseUrl + '/api/books/requestedfrom', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.deleteBook = function (book_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.delete(this.baseUrl + '/api/books/' + book_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.addBook = function (newBook) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.post(this.baseUrl + '/api/books/new', newBook, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__googlebook_service__["a" /* GooglebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__googlebook_service__["a" /* GooglebookService */]) === "function" && _b || Object])
], BookService);

var _a, _b;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglebookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GooglebookService = (function () {
    function GooglebookService(http) {
        this.http = http;
    }
    GooglebookService.prototype.getBookById = function (volume_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://www.googleapis.com/books/v1/volumes/' + volume_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GooglebookService.prototype.getBooks = function (searchTerm, itemsPerPage, currentPage) {
        var startIndex = (currentPage - 1) * itemsPerPage < 0 ? 0 : (currentPage - 1) * itemsPerPage;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var queryString = '?q=' + searchTerm + '&printType=books&startIndex=' + startIndex + '&maxResults=' + itemsPerPage;
        return this.http.get('https://www.googleapis.com/books/v1/volumes' + queryString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return GooglebookService;
}());
GooglebookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GooglebookService);

var _a;
//# sourceMappingURL=googlebook.service.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.bundle.js.map
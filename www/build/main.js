webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_detail_movie_detail__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ComingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComingPage = (function () {
    function ComingPage(data, navCtrl, navParams) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieComingOctober = [];
        this.movieComingNovember = [];
        this.movieComingDecember = [];
        this.movieComingOctober = data.getMovieComingOctober();
        this.movieComingNovember = data.getMovieComingNovember();
        this.movieComingDecember = data.getMovieComingDecember();
    }
    ComingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingPage');
    };
    ComingPage.prototype.movieTapped = function (event, movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_detail_movie_detail__["a" /* MovieDetailPage */], movie);
    };
    return ComingPage;
}());
ComingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-coming',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\coming\coming.html"*/'<!--\n\n  Generated template for the ComingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>October</div>\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let mc of movieComingOctober" col-4 (click)="movieTapped($event,mc)">\n\n        <img src="pic/{{mc.pic}}" class="picMovie">\n\n        <div class="date">{{mc.date}}</div> \n\n        <div class="showing">{{mc.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div>November</div>\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let mn of movieComingNovember" col-4 (click)="movieTapped($event,mn)">\n\n        <img src="pic/{{mn.pic}}" class="picMovie">\n\n        <div class="date">{{mn.date}}</div> \n\n        <div class="showing">{{mn.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\coming\coming.html"*/,
=======
        selector: 'page-coming',template:/*ion-inline-start:"D:\sf-cinema\src\pages\coming\coming.html"*/'<!--\n\n  Generated template for the ComingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="dateHead">October</div>\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let mc of movieComingOctober" col-4 >\n\n        <img src="pic/{{mc.pic}}" class="picMovie">\n\n        <div class="date">{{mc.date}}</div> \n\n        <div class="showing">{{mc.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="dateHead">November</div>\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let mn of movieComingNovember" col-4 >\n\n        <img src="pic/{{mn.pic}}" class="picMovie">\n\n        <div class="date">{{mn.date}}</div> \n\n        <div class="showing">{{mn.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="dateHead">December</div>\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let md of movieComingDecember" col-4 >\n\n        <img src="pic/{{md.pic}}" class="picMovie">\n\n        <div class="date">{{md.date}}</div> \n\n        <div class="showing">{{md.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\sf-cinema\src\pages\coming\coming.html"*/,
>>>>>>> dad44141747da7fa4e9029a4934c3593cd3d4c9c
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
], ComingPage);

var _a, _b, _c;
//# sourceMappingURL=coming.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_ticket__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovieDetailPage = (function () {
    function MovieDetailPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        //this.presentLoading() ;
        this.nameTh = navParams.get("nameTh");
        this.nameEn = navParams.get("nameEn");
        this.date = navParams.get("date");
        this.type = navParams.get("type");
        this.rate = navParams.get("rate");
        this.pic = navParams.get("pic");
        this.minutes = navParams.get("minutes");
        this.directed = navParams.get("directed");
        this.starring = navParams.get("starring");
        this.plot = navParams.get("plot");
    }
    MovieDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieDetailPage');
    };
    MovieDetailPage.prototype.byTicket = function (event, nameTh) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ticket_ticket__["a" /* TicketPage */], nameTh);
    };
    MovieDetailPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    };
    return MovieDetailPage;
}());
MovieDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-movie-detail',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\movie-detail\movie-detail.html"*/'<!--\n\n  Generated template for the MovieDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <div >\n\n			<ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n		</div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img class="poster" src="pic/{{pic}}"><br>\n\n	<!-- <div style="text-align: center" (click)="byTicket($event,nameTh)">\n\n		<button ion-button >By Ticket</button>\n\n	</div> -->\n\n	<ion-grid class="gird">\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">ชื่อเรื่อง: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{nameTh}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">ประเภท: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{type}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">วันที่เข้าฉาย: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{date}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">เรท: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{rate}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">เวลา: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{minutes}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">ผู้กำกับ: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{directed}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">นักแสดง: </ion-col>\n\n			<ion-col col-8 class="posterDetail">{{starring}}</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-4 class="posterDetailHeader">เรื่องย่อ: </ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col class="posterDetail">{{plot}}</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	\n\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\movie-detail\movie-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object])
], MovieDetailPage);

var _a, _b, _c;
//# sourceMappingURL=movie-detail.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promotion_detail_promotion_detail__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionPage = (function () {
    function PromotionPage(data, navCtrl, navParams) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.promotions = [];
        this.promotions = data.getPromotion();
    }
    PromotionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromotionPage');
    };
    PromotionPage.prototype.showTheaterDetail = function (promotion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__promotion_detail_promotion_detail__["a" /* PromotionDetailPage */], { 'promotionDetail': promotion });
    };
    return PromotionPage;
}());
PromotionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-promotion',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\promotion\promotion.html"*/'<!--\n\n  Generated template for the MorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid class="grid">\n\n    <ion-row col-12>\n\n      <ion-col *ngFor="let p of promotions" class="promotionList" col-6 (click)="showTheaterDetail(p)">\n\n        <img src="pic/{{p.pic}}" class="picMovie" >\n\n        {{p.subname}} <br>\n\n       \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\promotion\promotion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PromotionPage);

//# sourceMappingURL=promotion.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_detail_movie_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ticket_ticket__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ShowTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowTimePage = (function () {
    function ShowTimePage(navCtrl, navParams, data, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.theater = [];
        this.presentLoading();
        this.movie = navParams.data;
        this.nameTh = navParams.get("nameTh");
        this.nameEn = navParams.get("nameEn");
        this.date = navParams.get("date");
        this.type = navParams.get("type");
        this.rate = navParams.get("rate");
        this.pic = navParams.get("pic");
        this.minutes = navParams.get("minutes");
        this.directed = navParams.get("directed");
        this.starring = navParams.get("starring");
        this.plot = navParams.get("plot");
        this.theater = data.getTheatre();
        console.log(this.movie);
    }
    ShowTimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowTimePage');
    };
    ShowTimePage.prototype.movieTapped = function (event, movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__movie_detail_movie_detail__["a" /* MovieDetailPage */], movie);
    };
    ShowTimePage.prototype.ticketTapped = function ($event, theater, time, showdate) {
        var i = { name: theater.name, date: showdate, t: time };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ticket_ticket__["a" /* TicketPage */], i);
        //this.navCtrl.push(TicketPage,time) ; 
    };
    ShowTimePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Loading",
            duration: 500
        });
        loader.present();
    };
    return ShowTimePage;
}());
ShowTimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show-time',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\show-time\show-time.html"*/'<!--\n\n  Generated template for the ShowTimePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-navbar>\n\n		<ion-title><img src="pic/sf.png" class="logo"></ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-card class="card" >\n\n			<ion-grid>\n\n					<ion-row>\n\n						<ion-col>\n\n							<img class="pic" src="pic/{{pic}}">\n\n						</ion-col>\n\n						<ion-col class="showTimeDetail">\n\n							ชื่อเรื่อง: {{nameTh}} <br> ประเภท: {{type}} <br> Rate: {{rate}} | {{minutes}} นาที <br>\n\n							<button ion-button (click)="movieTapped($event,movie)">Movie Detail</button>\n\n						</ion-col>\n\n					</ion-row>\n\n			\n\n				</ion-grid>\n\n	</ion-card>\n\n	\n\n\n\n	<ion-item>\n\n		<ion-label class="showTimeDetail">Date</ion-label>\n\n		<ion-select [(ngModel)]="showdate" class="showTimeDetail">\n\n			<ion-option value="13">13 Oct</ion-option>\n\n			<ion-option value="14">14 Oct</ion-option>\n\n			<ion-option value="15">15 Oct</ion-option>\n\n			<ion-option value="16">16 Oct</ion-option>\n\n			<ion-option value="17">17 Oct</ion-option>\n\n			<ion-option value="18">18 Oct</ion-option>\n\n		</ion-select>\n\n	</ion-item>\n\n	<ion-item *ngIf="showdate">\n\n		<ion-item *ngFor="let t of theater">\n\n			<div class="theaterList">{{t.name}}</div>\n\n			<div class="theaterList"> \n\n				<button ion-button (click)="ticketTapped($event,t,\'12:30\',showdate)">12:30</button>\n\n				<button ion-button (click)="ticketTapped($event,t,\'15:30\',showdate)">15:30</button>\n\n				<button ion-button (click)="ticketTapped($event,t,\'19:30\',showdate)">19:30</button>\n\n				<button ion-button (click)="ticketTapped($event,t,\'22:00\',showdate)">22:00</button>\n\n			</div>\n\n		</ion-item>\n\n	</ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\show-time\show-time.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
], ShowTimePage);

var _a, _b, _c, _d;
//# sourceMappingURL=show-time.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promotion_detail_promotion_detail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_time_show_time__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MovieDetailPage } from '../movie-detail/movie-detail' ; 




/**
 * Generated class for the ShowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowingPage = (function () {
    function ShowingPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.movies = [];
        this.promotions = [];
        this.movies = data.getMovie();
        this.promotions = data.getPromotion();
    }
    ShowingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowingPage');
    };
    ShowingPage.prototype.movieTapped = function (event, movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__show_time_show_time__["a" /* ShowTimePage */], movie);
    };
    ShowingPage.prototype.promoTapped = function (event, promo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__promotion_detail_promotion_detail__["a" /* PromotionDetailPage */], { 'promotionDetail': promo });
    };
    ShowingPage.prototype.slideChanged = function () {
    };
    return ShowingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], ShowingPage.prototype, "slides", void 0);
ShowingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-showing',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\showing\showing.html"*/'<!--\n\n  Generated template for the ShowingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title class="title" align-title="center"><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="body">\n\n\n\n<ion-slides autoplay="5000" loop="true" class="slide" (ionSlideDidChange)="slideChanged()">\n\n  <ion-slide *ngIf="promotions[0].picc" (click)="promoTapped($event,promotions[0])">\n\n    <img src="pic/{{promotions[0].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[1].picc" (click)="promoTapped($event,promotions[1])">\n\n    <img src="pic/{{promotions[1].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[2].picc" (click)="promoTapped($event,promotions[2])">\n\n    <img src="pic/{{promotions[2].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[3].picc" (click)="promoTapped($event,promotions[3])">\n\n    <img src="pic/{{promotions[3].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[4].picc" (click)="promoTapped($event,promotions[4])">\n\n    <img src="pic/{{promotions[4].picc}}">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let m of movies" col-4 (click)="movieTapped($event,m)">\n\n        <img src="pic/{{m.pic}}" class="picMovie">\n\n        <div class="date">{{m.date}}</div> \n\n        <div class="showing">{{m.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\showing\showing.html"*/,
=======
        selector: 'page-showing',template:/*ion-inline-start:"D:\sf-cinema\src\pages\showing\showing.html"*/'<!--\n\n  Generated template for the ShowingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="body">\n\n\n\n<ion-slides autoplay="5000" loop="true" class="slide" (ionSlideDidChange)="slideChanged()">\n\n  <ion-slide *ngIf="promotions[0].picc" (click)="promoTapped($event,promotions[0])">\n\n    <img src="pic/{{promotions[0].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[1].picc" (click)="promoTapped($event,promotions[1])">\n\n    <img src="pic/{{promotions[1].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[2].picc" (click)="promoTapped($event,promotions[2])">\n\n    <img src="pic/{{promotions[2].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[3].picc" (click)="promoTapped($event,promotions[3])">\n\n    <img src="pic/{{promotions[3].picc}}">\n\n  </ion-slide>\n\n  <ion-slide *ngIf="promotions[4].picc" (click)="promoTapped($event,promotions[4])">\n\n    <img src="pic/{{promotions[4].picc}}">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n  <ion-grid class="grid">\n\n    <ion-row >\n\n      <ion-col *ngFor="let m of movies" col-4 (click)="movieTapped($event,m)">\n\n        <img src="pic/{{m.pic}}" class="picMovie">\n\n        <div class="date">{{m.date}}</div> \n\n        <div class="showing">{{m.nameTh}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\sf-cinema\src\pages\showing\showing.html"*/,
>>>>>>> dad44141747da7fa4e9029a4934c3593cd3d4c9c
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
], ShowingPage);

//# sourceMappingURL=showing.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TheaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TheaterPage = (function () {
    function TheaterPage(data, navCtrl, navParams) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.theaterDetail = [];
        this.theaterDetail = data.getTheatre();
    }
    TheaterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheaterPage');
    };
    return TheaterPage;
}());
TheaterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-theater',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\theater\theater.html"*/'<!--\n\n  Generated template for the TheaterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header class="theaterHeader">All of Theaters</ion-list-header>\n\n    <ion-item *ngFor="let t of theaterDetail" class="theaterList" no-lines>\n\n      <ion-icon name="ios-star-outline" ></ion-icon>\n\n      {{t.name}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\theater\theater.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TheaterPage);

//# sourceMappingURL=theater.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coming/coming.module": [
		273,
		7
	],
	"../pages/movie-detail/movie-detail.module": [
		274,
		6
	],
	"../pages/promotion-detail/promotion-detail.module": [
		275,
		5
	],
	"../pages/promotion/promotion.module": [
		276,
		4
	],
	"../pages/show-time/show-time.module": [
		277,
		3
	],
	"../pages/showing/showing.module": [
		278,
		2
	],
	"../pages/theater/theater.module": [
		279,
		1
	],
	"../pages/ticket/ticket.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showing_showing__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theater_theater__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coming_coming__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__promotion_promotion__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__showing_showing__["a" /* ShowingPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__theater_theater__["a" /* TheaterPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__coming_coming__["a" /* ComingPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__promotion_promotion__["a" /* PromotionPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Now Showing" tabIcon="ios-play-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Theater" tabIcon="ios-compass-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Coming Soon" tabIcon="ios-calendar-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Promotion" tabIcon="ios-more"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_show_time_show_time__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_showing_showing__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_theater_theater__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_coming_coming__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_promotion_promotion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_promotion_detail_promotion_detail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_movie_detail_movie_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ticket_ticket__ = __webpack_require__(51);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_showing_showing__["a" /* ShowingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_theater_theater__["a" /* TheaterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_coming_coming__["a" /* ComingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_promotion_promotion__["a" /* PromotionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_promotion_detail_promotion_detail__["a" /* PromotionDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_movie_detail_movie_detail__["a" /* MovieDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_ticket_ticket__["a" /* TicketPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_show_time_show_time__["a" /* ShowTimePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/coming/coming.module#ComingPageModule', name: 'ComingPage', segment: 'coming', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/movie-detail/movie-detail.module#MovieDetailPageModule', name: 'MovieDetailPage', segment: 'movie-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/promotion-detail/promotion-detail.module#PromotionDetailPageModule', name: 'PromotionDetailPage', segment: 'promotion-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/promotion/promotion.module#MorePageModule', name: 'PromotionPage', segment: 'promotion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/show-time/show-time.module#ShowTimePageModule', name: 'ShowTimePage', segment: 'show-time', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/showing/showing.module#ShowingPageModule', name: 'ShowingPage', segment: 'showing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/theater/theater.module#TheaterPageModule', name: 'TheaterPage', segment: 'theater', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ticket/ticket.module#TicketPageModule', name: 'TicketPage', segment: 'ticket', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_showing_showing__["a" /* ShowingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_theater_theater__["a" /* TheaterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_coming_coming__["a" /* ComingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_promotion_promotion__["a" /* PromotionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_promotion_detail_promotion_detail__["a" /* PromotionDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_movie_detail_movie_detail__["a" /* MovieDetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_ticket_ticket__["a" /* TicketPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_show_time_show_time__["a" /* ShowTimePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_data_data__["a" /* DataProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Project\sf-cinema\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        this.movies = [];
        this.moviesComingOctober = [];
        this.moviesComingNovember = [];
        this.moviesComingDecember = [];
        this.theatres = [];
        this.promotions = [];
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getMovie = function () {
        this.movies =
            [{
                    nameTh: "วันหมาหอนที่ค่ายลูกเสือ", nameEn: "Black Full Moon", date: "12 October 2017", type: "Horror", rate: "15+",
                    pic: "full moon.jpg",
                    minutes: "85", directed: "พิรุณ อนุสุริยา", starring: [],
                    plot: "เรื่องราวการหายตัวไปอย่างลึกลับของกลุ่มวัยรุ่น 5 คน ที่เป็นที่รู้จักในโซเชียลมีเดีย ผู้ทำรายการในยูทูปที่ชื่อ เกรียนท้าผี ทางตำรวจได้เข้าไปพบกล้องที่บันทึกเหตุการณ์ หลังพบศพทั้งห้าเสียชีวิตโดยปริศนาในค่ายลูกเสือร้างจังหวัดระยอง ผู้รอดชีวิตในเหตุการณ์นั้น ได้แก่ ทีมงานเบื้องหลัง 3 คน ได้ให้การว่าพวกตนได้เข้าไปในค่ายลูกเสือตามคำชักชวนของโปรดิวเซอร์ดัง ฟลินท์ ศุภชัย พร้อมด้วย หมีเพื่อนผี นักเล่าเรื่องเจ้าของเรื่องดังอย่าง ผีค่ายลูกเสือ และนั่นเป็นที่มาของการกระทบกระทั่งจนดีเจชื่อดังอย่าง บุ๊คโกะ ขอถอนตัวจากรายการนี้กลางคัน โดยไม่ทราบเลยว่าต่อมาทั้งห้าคนในรายการได้เสียชีวิตลง ในเบื้องต้นยังไม่พบมูลเหตุแห่งการฆาตกรรม แต่ทุกศพต่างมีร่องรอยของการต่อสู้ โดยเรื่องราวที่จะได้ชมคือเหตุการณ์บางส่วนที่ยังคลุมเครือ แต่กล้องบันทึกเอาไว้ได้"
                },
                {
                    nameTh: "เมฆาถล่มโลก", nameEn: "Geostorm", date: "12 October 2017", type: "Action", rate: "ทั่วไป",
                    pic: "geostorm.jpg",
                    minutes: "110", directed: "ดีน เดฟลิน", starring: ["Gerard Butler", "Jim Sturgess", "Abbie Cornish", "Ed Harris", "Andy Garcia"],
                    plot: "ในอนาคตอันอีกไม่ไกล โลกจะมีดาวเทียมเพื่อช่วยควบคุมภูมิอากาศให้ทุกอย่างปกติ แต่วันดีคืนดี เจ้าดาวเทียมตัวนี้เกิดขัดข้องแล้วมันก็ก่อให้เกิดมหาภัยพิบัติทางธรรมชาติขึ้นทั่วโลก ทั้งสึนามิ, พายุลูกเห็บ, ลาวา, ทอร์นาโด, อากาศหนาวจัด และอีกมากมาย แต่โชคยังดีอยู่บ้างที่โลกมีนักวิศวกรด้านวิทยาศาสตร์ที่รับบทโดยเจอราร์ด บัตเลอร์ และเขาคือความหวังเดียวของมนุษยชาติที่จะขึ้นสู่อวกาศไปซ่อมเจ้าดาวเทียมเครื่องนี้ เรื่องราวสุดระทึกใน Geostorm เกิดขึ้นเมื่อดาวเทียมควบคุมภูมิอากาศของโลกเกิดความเสียหาย จนทำให้สภาพอากาศทั่วโลกแปรปรวนถึงขีดสุด แต่เมื่อชายสองพี่น้องเดินทางขึ้นไปซ่อมแซมดาวเทียมในอวกาศ สิ่งที่พวกเขาค้นพบคือแผนการลอบสังหารประธานาธิบดีสหรัฐฯ ที่ซ่อนอยู่เบื้องหลังหายนะครั้งนี้ "
                },
                {
                    nameTh: "คนพันธุ์กูล", nameEn: "Tokyo Ghoul", date: "12 October 2017", type: "Action", rate: "18+",
                    pic: "tokyo.jpg",
                    minutes: "120", directed: "Kentaro Hagiwara", starring: ["Yu Aoi", "Masataka Kubota", "Yo Oizumi"],
                    plot: "เรื่องราวของ คาเนกิ เคน นักศึกษามหาลัยที่ชอบอ่านหนังสือเป็นชีวิตจิตใจ เขาพบกับ ริเสะ สาวในร้านคาเฟ่ที่ชอบไปประจำ เพราะความชอบที่เหมือนกันทำให้ทั้งคู่สนิทกันได้เร็ว แต่แล้วคืนหนึ่งชีวิตของเขาก็ต้องเปลี่ยนไปตลอดกาล เพราะความจริงแล้ว ริเสะ คือ กูล สิ่งมีชีวิตที่กินมนุษย์เป็นอาหาร ถึงแม้ว่า คาเนกิ จะมีชีวิตรอดจากการถูกกิน แต่เขาก็บาดเจ็บหนักจนต้องเปลี่ยนถ่ายอวัยวะ แต่เมื่อฟิ้นเขาก็ค้นพบว่าตัวเองได้กลายเป็นครึ่งมนุษย์ครึ่งกูล และไม่สามารถทานอาหารของมนุษย์ได้อีกต่อไป คาเนกิ ยังค้นพบว่าร้านกาแฟ อันเทย์คุ นั่นคือเป็นแหล่งรวมตัวของเหล่ากูล และมันก็คือจุดเริ่มต้นของเขาในการใช้ชีวิตสายพันธุ์ใหม่ในมหานครโตเกียว"
                },
                {
                    nameTh: "มาย ลิตเติ้ลโพนี่ เดอะมูฟวี่", nameEn: "My Little Pony : The Movie", date: "12 October 2017", type: " Animation", rate: "ทั่วไป",
                    pic: "pony.jpg",
                    minutes: "100", directed: "Jayson Thiessen", starring: ["Uzo Aduba", "Emily blunt", "Zoe Saldana"],
                    plot: "When a dark force threatens Ponyville and the Mane 6, they go on a journey to the end of Equestria to save their beloved home and they meet new friends and dangerous challenges along the way."
                },
                {
                    nameTh: "ราชินีและคนสนิท", nameEn: "Victoria and abdul", date: "12 October 2017", type: " Animation", rate: "13",
                    pic: "victoria.jpg",
                    minutes: "125", directed: "Stephen Frears", starring: ["Judi Dench", "Ali Fazal", "Eddie Izzard"],
                    plot: "เรื่องราวของความสัมพันธ์อันละเอียดอ่อนและค่อนข้างเป็นความลับของ สมเด็จพระราชินีวิคตอเรีย แห่งอังกฤษ กับคุณครูหนุ่มชาวอินเดียผู้ใกล้ชิด มีหน้าที่เป็นเลขานุการอินเดียประจำพระองค์ คอยถวายคำปรึกษาและคำแนะนำต่างๆ เกี่ยวกับกิจการของอินเดีย ทั้งการเมือง เศรษฐกิจ สังคม วัฒนธรรม รวมทั้งยังมีการสอนภาษาฮินดีและอูรดูแก่ราชินีอีกด้วย เด็กหนุ่มมุสลิมผู้นั่นมีนามว่า Abdul Karim"
                },
                {
                    nameTh: "นายไข่เจียวเสี่ยวตอร์ปิโด", nameEn: "", date: "05 October 2017", type: "Comedy", rate: "15+",
                    pic: "KaiJeaw.jpg",
                    minutes: "100", directed: "ปริภัณฑ์ วัชรานนท์", starring: ["ก้อง ห้วยไร่", "สิงโต นำโชค", "เซฟฟานี่ อาวะนิค"],
                    plot: "เมื่อพี่โต๊ะ พันธมิตร เจ้าพ่อเสียงพากย์สุดหล่อพร้อมมุกแพรวพราว คันไม้คันมืออยากจะจัดหนังสนุก เฮฮา อีกซักเรื่องต่อจาก มนต์เลิฟสิบหมื่น ครั้งนี้จับ ก้อง ห้วยไร่ มาลงจอภาพยนตร์ครั้งแรก ปะทะสิงโต นำโชค กับเรื่องไข่ๆ ไอเดียบรรเจิด ที่เอาไข่เจียวอาหารเด็ดของคนไทยไม่แพ้ชาติใดในโลกมาเป็นอีกหนึ่งตัวละคร ถ่ายทอดเรื่องราวฟูฟูไปด้วยเสน่ห์ของรอยยิ้มและเสียงหัวเราะในแบบอารมณ์ดีสุดๆ ของมิตรภาพกลุ่มเพื่อนที่มีไข่เจียวเป็นศูนย์กลางกับภารกินดัน ไข่เจียวไทย ไปเป็น ไข่เจียวโลก เพิ่มรสชาติความสนุก ระเบิดระเบ้อเสียงหัวเราะแบบไม่มีกั๊กด้วย บอล เชิญยิ้ม ระดมเหล่าศิลปิน +ซูเปอร์สตาร์สุดเซอร์ไพรส์อีกเพียบ รับรองว่าดูเรื่องนี้ได้ทั้งความฮา ความหิว และร้องโอ้โห ชัวๆ"
                },
                {
                    nameTh: "The lego ninjago movie", nameEn: "The lego ninjago movie", date: "05 October 2017", type: "Animation", rate: "ทั่วไป",
                    pic: "lego.jpg",
                    minutes: "100", directed: "Charlie Bean", starring: ["Dave Franco", "Olivia Munn", "Justin Theroix"],
                    plot: "การต่อสู้เพื่อเมืองนินจาโกที่ต้องอาศัยลอยด์ผู้เยาว์วัย หรือในชื่อว่านินจาเขียว พร้อมกับเพื่อนๆ ของเขาที่ล้วนเป็นนักรบปริศนาและ LEGO Master Builders ที่นำโดย ปรมาจารย์กังฟูวู ผู้มีความอัจฉริยะปราดเปรื่อง พวกเขาต้องต่อสู้เอาชนะผู้นำที่ชั่วร้ายอย่างการ์มาดอน ผู้ร้ายตลอดกาลที่กลายเป็นพ่อของลอยด์ การเผชิญหน้าระหว่างจักรกลต่อจักรกล พ่อกับลูก การเผชิญหน้าครั้งใหญ่นี้จะเป็นบททดสอบนินจารุ่นใหม่ที่มีความโหดเหี้ยมแต่ไร้ระเบียบวินัย ซึ่งพวกเขาจะได้เรียนรู้วิธีตรวจสอบอีโก้ของตัวเอง และรู้จักควบคุมอารมณ์เพื่อแสดงพลังที่แท้จริงของพวกเขาออกมา"
                },
                {
                    nameTh: "เบลด รันเนอร์ 2049", nameEn: "Blade Runner 2049", date: "05 October 2017", type: "Sci - Fi", rate: "15+",
                    pic: "blade.jpg",
                    minutes: "165", directed: "Denis Villeneuve", starring: ["Ana de Armas", "Harrison Ford", "Ryan Gosling"],
                    plot: "เป็นเรื่องราวใน 30 ปีให้หลังจากภาคแรก เมื่อเจ้าหน้าที่เค (Officer K) ซึ่งนำแสดงโดย Ryan Gosling ที่เป็น เบลดรันเนอร์ (Blade Runner) คนล่าสุดได้เข้ามาประจำการที่เมืองลอสแอนเจลิส  ซึ่งเขาได้พยายามสืบข้อมูลของ ริค เดซคาร์ด(Rick Deckard) ซึ่งนำแสดงโดย Harrison Ford บุคคลหายสาบสูญไปนานถึงสามสิบปีเต็ม"
                },
                {
                    nameTh: "2 โคตรพยัคฆ์ผู้ยิ่งใหญ่", nameEn: "The Foreigner", date: "28 September 2017", type: "Action", rate: "15+",
                    pic: "foreigner.jpg",
                    minutes: "110", directed: "Martin Campbell", starring: ["Charlie Murphy", "Jackie Chan", "Pierce Brosnan"],
                    plot: "ไม่ต้องให้รอนานจนคิดถึง เร็วๆ นี้ เตรียมพบกับมหากาพย์แอ็คชั่นครั้งใหม่ของพระเอกหนังบู๊ผู้เป็นตำนาน แจ๊คกี้ ชาน กลับมาลุยอีกครั้งใน The Foreigner ในครั้งนี้เขารับบทเจ้าของภัตตราคารอาหารจีนในลอนดอนที่เป็นที่รักของลูกค้า จู่ๆ วันหนึ่งลูกและภรรยาของเขาถูกกลุ่มกบฏ IRA ลักพาตัวไป เมื่อไปขอความช่วยเหลือจากตำรวจพวกเขากลับทาเป็นไม่รู้ไม่เห็น เขาต้องลงมือทวงทั้งคู่คืนมาด้วยตัวของเขาเองด้วยวิธีสุดระห่ำที่จะทำให้ทุกคนลืมภาพคุณลุงผู้ใจดีไปหมดสิ้น สร้างจากนิยายขายดีเรื่อง The Chinaman ที่วางจำหน่ายเมื่อปี 2008 จากปลายปากกาของ สตีเฟ่น เลเธอร์ นักเขียนแนวเขย่าขวัญอาชญากรรมชื่อดัง ได้ผู้กำกับมากฝีมืออย่าง มาร์ติน แคมป์เบลล์ ที่ฝากฝีมือไว้ในเฟรนไชส์สายลับตลอดการ เจมส์ บอนด์ มาแล้วใน Casino Royale และ Goldeneye เท่านั้นยังไม่พอยังได้ เพียซ บรอสแนน อดีตสายลับ 007 ตัวจริงมาร่วมสร้างสีสัน เขารับบทเป็นอดีตสมาชิก IRA ที่กลับตัวมาเป็นเจ้าหน้าที่ให้รัฐบาล หนังเรื่องนี้เป็นการโคจรกลับมาร่วมงานกันครั้งแรกของ แคมป์เบลล์ และ บรอสแนน หลังจาก Goldeneye เมื่อปี 1995"
                },
                {
                    nameTh: "คิงส์แมน เดอะ โกลเด้น เซอร์เคิล", nameEn: "Kingsman: The Golden Circle", date: "21 September 2017", type: "Action", rate: "15+",
                    pic: "kingsman.jpg",
                    minutes: "140", directed: "Matthew Vaughn", starring: ["Taron Egerton", "Colin Firth", "Mark Strong"],
                    plot: "Kingsman: The Golden Circle จะเดินเรื่องต่อจากเหตุการณ์การโจมตีทั่วโลกในท้ายภาคแรก โดยที่ เอ็กซ์ซี่ (ทารอน อีเกอร์ตัน) และ เมอร์ลิน (มาร์ค สตรอง) มุ่งหน้าไปยังสหรัฐอเมริกา เพื่อร่วมทีมกับฝั่งสำนักงานใหญ่ในอเมริกาช่วยกันกอบกู้โลก ซึ่งทางฝั่งสหรัฐอเมริกานั้นก็ได้นักแสดงอย่าง ฮัลลี่ เบอร์รี่ มานำทีมด้วย"
                },
                {
                    nameTh: "ก้าวเดินกับฉัน", nameEn: "Walk With Me", date: "21 September 2017", type: "DOCUMENTARY", rate: "ทั่วไป",
                    pic: "walk.jpg",
                    minutes: "90", directed: "Marc J. Francis", starring: ["Benedict", "Thich Nhat"],
                    plot: "เรื่องราวของหลวงปู่ ติช นัท ฮันห์ เป็นพระภิกษุชาวเวียดนาม ผู้นำเสนอความคิด พุทธศาสนาต้องเป็นส่วนหนึ่งของชีวิตประจำวัน และพุทธธรรม เป็นสิ่งที่สามารถประยุกต์ใช้ให้เข้ากับวิธีชีวิตยุคปัจจุบันได้"
                },
                {
                    nameTh: "เพื่อน..ที่ระลึก", nameEn: "The Promise", date: "7 September 2017", type: "Horror", rate: "18+",
                    pic: "friend.jpg",
                    minutes: "115", directed: "โสภณ ศักดาพิศิษฏ์", starring: [],
                    plot: "เมื่อ คำสัญญา และ เพื่อนรัก จะกลับมาทำให้คุณระลึกและระทึกไปพร้อมกันผ่านไป 20 ปี บุ๋ม (บี น้ำทิพย์ จงรัชตวิบูลย์) เติบโตกลายเป็นนักธุรกิจด้านอสังหาริมทรัพย์ และได้กลับไปที่ตึกนั้นอีกครั้ง พร้อมกับ เบล (ลิลลี่ อภิชญา ทองคำ) ลูกสาวผู้เป็นทุกสิ่งทุกอย่างในชีวิตของเธอคืนนั้นหลังกลับจากตึกก็เกิดเรื่องประหลาดขึ้นกับเบล เมื่อบุ๋มตื่นขึ้นมาพบเบลนั่งคุยกับใครบางคน แม้จะอยู่ในความมืด บุ๋มก็รู้ว่าที่นั่งฝั่งตรงข้ามของเบลว่างเปล่า ไม่มีใครเลย แล้วทุกคืนหลังจากนั้นก็กลายเป็นฝันร้ายของบุ๋ม เมื่อทุกครั้งที่หลับตานอน เบลจะตื่นขึ้นมาด้วยอาการละเมอที่หนักขึ้นเรื่อยๆ และที่ร้ายแรงที่สุดก็คือ เบลจะละเมอพูดหรือทำในสิ่งที่ทำให้บุ๋มระลึกถึง อิ๊บ เพื่อนเก่าที่เธอทิ้งให้รออยู่ที่ตึกอย่างโดดเดี่ยวมาเป็นเวลานาน นี่อาจเป็นการกลับมาทวงคำสัญญาสุดท้ายที่อิ๊บเคยขอไว้ก่อนจากโลกนี้ไป...สัญญานะ ว่าแกจะไม่ปล่อยให้ฉันตายคนเดียว"
                }];
        return this.movies;
    };
    DataProvider.prototype.getTheatre = function () {
        this.theatres = [
            { name: "เอส เอฟ เวิลด์ ซีเนม่า เซ็นทรัลเวิลด์", tel: "0-2268-8888", address: "7th FL. CentralWorld", open: "จ - พฤ 10:30 - 21:30 / ศ - อา 10:00 - 22:00", bus: ["2", "15", "16", "25", "40", "54", "73", "76", "79", "204", "511", "33"] },
            { name: "เอส เอฟ ซีเนม่า เดอะมอลล์ ท่าพระ", tel: "0-2268-8888", address: "5th FL. The Mall Thapra", open: "จ - ศ 11:00 - 21:30 / ส - อา และวันหยุดนักขัตฤกษ์ 10:00 - 21:30", bus: ["15", "57", "68", "101", "108", "147", "195", "205", "ปอ.547"] },
            { name: "เอส เอฟ ซีเนม่า โรบินสัน กาญจนบุรี", tel: "034-603-333", address: "2th FL. Robinson Kanchanaburi", open: "09:30 - 22:00 ทุกวัน", bus: ["รถสองแถวสีส้ม", "มอเตอร์ไซค์รับจ้าง"] },
            { name: "เอส เอฟ ซีเนม่า โรบินสัน ตรัง", tel: "075-820-333", address: "2nd FL. Robinson Trang", open: "จ - พฤ 10:00 - 21:00 / ศ - อา 10:00 - 21:30", bus: [] },
            { name: "เอส เอฟ ซีเนม่า เซ็นทรัลมารีนา พัทยา", tel: "038-488-700", address: "3rd FL. CentralMarina Pattaya", open: "07:00 - 22:00 ทุกวัน", bus: ["รถสองแถวสีน้ำเงิน"] },
            { name: "เอส เอฟ ซีเนม่า เทอร์มินอล 21 โคราช", tel: "044-498-999", address: "5th FL. Terminal 21 Korat", open: "10:00 - 22:00 ทุกวัน", bus: ["7", "10", "14", "15", "17"] },
            { name: "เอส เอฟ ซีเนม่า โรบินสัน แม่สอด", tel: "055-530-444", address: "2nd FL. Robinson Maesot", open: "10:00 - 24:00 ทุกวัน", bus: [] },
            { name: "เอส เอฟ ซีเนม่า บิ๊กซี เพชรบุรี", tel: "032-474-355", address: "2nd FL. Big C Phetchaburi", open: "จ - ศ 11:00 - 22:00 / ส - อา และวันหยุดนักขัตฤกษ์ 09:30 - 22:00", bus: ["รถตู้ ", "รถสองแถว", "รถบัส (สีแดง)"] },
            { name: "เอส เอฟ ซีเนม่า จังซีลอน ป่าตอง", tel: "076-600-555", address: "3rd FL. Jungceylon Patong", open: "11:00 - 22:00 ทุกวัน", bus: ["รถโพถ้องสีฟ้า สาย กะตะ-กะรน-ป่าตอง"] },
            { name: "เอส เอฟ ซีเนม่า เสริมไทยคอมเพล็กซ์ มหาสารคาม", tel: "043-970-800", address: "2th FL. Sermthai Complex Mahasarakham", open: "จ - ศ 10:30 - 21:00 / ส - อา และวันหยุดนักขัตฤกษ์ 10:00 - 21:00", bus: ["รถสองแถวสีน้ำเงินสาย 1", "รถสองแถวสีเหลือง"] }
        ];
        return this.theatres;
    };
    DataProvider.prototype.getPromotion = function () {
        this.promotions = [
            { name: "My Little Pony : The Movie Combo Set", subname: "Little Pony Combo Set",
                detail: "ชุดที่ 1 Topper Set ประกอบด้วย Popcorn 85 Oz. + Soft Drink 44 Oz. + Topper My Little Pony : The Movie (มี Topper 4 แบบให้เลือกสะสม) ชุดละ 269 บาท ชุดที่ 2  Pinkie Pie Set ประกอบด้วย Popcorn 85 Oz. + Soft Drink 22 Oz. (Pinkie Pie Cup) ชุดละ 289 บาท",
                date: "ตั้งแต่วันนี้ - 2 พฤศจิกายน 2560",
                condition: [" ไม่สามารถแลก เปลี่ยน หรือทอนเป็นเงินสดได้", " บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
                branches: "โรงภาพยนตร์ในเครือเอส เอฟ ทุกสาขา",
                pic: "Little Pony Pro.jpg", picc: "Little Pony Proc.jpg"
            },
            { name: "Black Full Moon Promotion", subname: "Black Full Moon Promotion",
                detail: "ชมภาพยนตร์เรื่อง วันหมาหอนที่ค่ายลูกเสือ (Black Full Moon) ในราคาพิเศษ 79 บาท , 89 บาท และ 99 บาท (Deluxe Seat) ที่โรงภาพยนตร์ในเครือเอส เอฟ ทุกสาขาที่ร่วมรายการ -  สาขาที่ราคา 79 บาท (Deluxe Seat) , 99 บาท (Premium Seat) : เดอะสแควร์บางใหญ่ , สุนีย์ ทาวเวอร์ อุบลราชธานี , โรบินสัน บุรีรัมย์	-  สาขาที่ราคา 89 บาท (Deluxe Seat) , 109 บาท (Premium Seat) : โรบินสันศรีสมาน , บิ๊กซีบางพลี , แลนด์มาร์คพลาซ่า อุดรธานี , เซ็นทรัลขอนแก่น  , โรบินสัน สุรินทร์ , เสริมไทย คอมเพล็กซ์ มหาสารคาม -  สาขาที่ราคา 99 บาท (Deluxe Seat) , 119 บาท (Premium Seat) : เดอะมอลล์บางกะปิ , เดอะมอลล์งามวงศ์วาน ",
                date: "ตั้งแต่วันที่ 12 ตุลาคม 2560 – ตลอดโปรแกรมฉาย",
                condition: ["สามารถซื้อบัตรชมภาพยนตร์ เรื่อง วันหมาหอนที่ค่ายลูกเสือ (Black Full Moon) ในราคาพิเศษ 79 บาท , 89 บาท , 99 บาท (Deluxe Seat) และ 99 บาท , 109 บาท , 119 บาท (Premium Seat) ที่โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขาที่ภาพยนตร์เข้าฉายทั่วประเทศ",
                    "สามารถรับส่วนลดได้ตั้งแต่วันที่ 12 ตุลาคม 2560 – ตลอดโปรแกรมฉาย", "สามารถซื้อบัตรชมภาพยนตร์ได้เฉพาะที่จุดจำหน่ายบัตรชมภาพยนตร์เท่านั้น", "ไม่สามารถใช้ร่วมกับบัตรส่วนลด หรือกิจกรรมส่งเสริมด้านราคาอื่นๆ",
                    "สามารถใช้ร่วมกับกิจกรรม SF-COKE Movie Plus ดูหนัง 2 เรื่องฟรีเรื่องที่ 3", " ไม่สามารถแลก เปลี่ยน หรือทอนเป็นเงินสดได้", " บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
                branches: "โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขาทั่วประเทศที่เข้าฉาย",
                pic: "Black Full Moon Pro.jpg"
            },
            { name: "SF Coke Movie Plus Promotion", subname: "Coke Movie Plus",
                detail: "สมัครเข้าร่วมกิจกรรมเพียง 10 บาท ดูหนังครบ 2 เรื่อง รับสิทธิ์ดูหนังฟรี เรื่องที่ 3 (สามารถรับสิทธิ์ชมภาพยนตร์ฟรี เรื่องที่ 3 ได้ทุกเรื่อง ทุกรอบในระบบปกติ เฉพาะที่นั่ง Deluxe Seat เท่านั้น) พร้อมรับสิทธิ์รับน้ำอัดลม ขนาด 44 ออนซ์ ฟรี 1 แก้ว",
                date: "ตั้งแต่วันที่ 1 - 31 ตุลาคม 2560",
                condition: ["สมัครเข้าร่วมกิจกรรมเพียง 10 บาท ลูกค้าจะได้รับการ์ดสะสมสิทธิ์ ดูหนัง 2 เรื่อง ฟรีเรื่องที่ 3 พร้อมคูปองแลกรับน้ำอัดลมขนาด 44 ออนซ์ ฟรี 1 แก้ว",
                    "คูปองน้ำอัดลม ฟรี 1 แก้ว สามารถใช้สิทธิ์ได้เมื่อลูกค้าซื้อบัตรชมภาพยนตร์ตั้งแต่ 1 เรื่องขึ้นไปเท่านั้น", "เมื่อลูกค้าสะสมสิทธิ์ชมภาพยนตร์ครบ 2 เรื่อง สามารถนำการ์ดมาแลกรับสิทธิ์ชมภาพยนตร์ เรื่องที่ 3 ฟรี 1 ที่นั่ง ในครั้งถัดไป",
                    "รับสิทธิ์ชมภาพยนตร์ 1 เรื่อง / 1 ที่นั่ง เท่านั้น ไม่สามารถชมภาพยนตร์เรื่องซ้ำกันได้",
                    "สามารถใช้สิทธิ์ชมภาพยนตร์เรื่องที่ 3 ฟรี เฉพาะการ์ดสะสมสิทธิ์ใบเดียวกันเท่านั้น ไม่สามารถนำการ์ดใบอื่นมารวมกันได้", "การ์ดสะสมสิทธิ์นี้ไม่สามารถใช้สิทธิ์ร่วมกับกิจกรรมส่งเสริมการขายด้านอื่นๆ ได้ เช่น Movie Day, Student Card, Senior Price, Late Night, Morning Price เป็นต้น",
                    "การ์ดสะสมสิทธิ์นี้ใช้ได้ที่โรงภาพยนตร์เอส เอฟ ซีเนม่า สาขาที่ลูกค้าสมัครไว้ในการชมภาพยนตร์เท่านั้น",
                    "สามารถรับสิทธิ์ได้ ตั้งแต่วันที่ 1 - 31 ตุลาคม 2560", " บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
                branches: "โรงภาพยนตร์ในเครือเอส เอฟ ทุกสาขา ยกเว้นสาขาบิ๊กซี ปราจีนบุรี และเอ็มพรีเว่ ซีเนคลับ",
                pic: "Coke Movie Pro.jpg", picc: "Coke Movie Proc.jpg"
            },
            { name: "The Lego Ninjago Movie In-Season Promotion", subname: "Movie In-Season Promotion",
                detail: "เพียงซื้อบัตรชมภาพยนตร์ The Lego Ninjago Movie ทุก 2 ที่นั่ง ลุ้นรับ The Lego Ninjago Movie Set จาก DKSH จำนวน 20 รางวัล มูลค่ารวม 305,950 บาท -  รางวัลที่ 1 The Lego Ninjago Movie “ Full Set 7 กล่อง “ มูลค่า 34,900 บาท จำนวน 5 รางวัล -  รางวัลที่ 2 The Lego Ninjago Movie Set “ Big Set 5 กล่อง ” มูลค่า 17,490 บาท จำนวน 5 รางวัล -  รางวัลที่ 3 The Lego Ninjago Movie “ Fire Mech 1 กล่อง ” มูลค่า 4,400 บาท จำนวน 10 รางวัล",
                date: "ตั้งแต่วันที่ 5 – 18 ตุลาคม 2560 ประกาศรายชื่อผู้โชคดี:วันที่ 15 พฤศจิกายน 2560",
                condition: ["เจ้าหน้าที่จากสำนักงานใหญ่จะติดต่อผู้โชคดีที่ได้รับรางวัลหลังจากวันประกาศรายชื่อเพื่อแจ้งรายละเอียดการรับรางวัล", " ผู้โชคดีที่ได้รับรางวัลจะต้องแสดงหางบัตรชมภาพยนตร์เรื่อง The Lego Ninjago Movie จำนวน 2 ที่นั่ง ให้แก่เจ้าหน้าที่เพื่อเป็นหลักฐานประกอบการรับรางวัล",
                    "ผู้โชคดีที่ได้รับของรางวัลมูลค่าเกินกว่า 1,000 บาท จะต้องเสียค่าภาษีของรางวัล 5% ให้กับทางบริษัท ฯ", " ของรางวัลไม่สามารถโอนสิทธิ์หรือแลกเปลี่ยนเป็นเงินสดหรือของรางวัลอื่นได้ ",
                    "ผู้โชคดีมีความยินยอมที่จะให้มีการถ่ายทำเพื่อประชาสัมพันธ์แคมเปญในสื่อต่างๆ ของบริษัท  โดยบริษัทฯ ขอสงวนสิทธิ์ในการเผยแพร่ภาพผู้โชคดีที่ได้รับรางวัลเพื่อการประชาสัมพันธ์ผ่านสื่อต่างๆ ของบริษัท โดยไม่มีการเรียกร้องค่าใช้จ่ายเพิ่มขึ้น",
                    " ในกรณีที่ไม่สามารถติดต่อผู้โชคดีได้ไม่ว่าในกรณีใดก็ตาม ทางบริษัทขอสงวนสิทธิ์ในการมอบรางวัลให้แก่ผู้โชคดีสำรองท่านถัดไป", "พนักงานและบุคคลในครอบครัวของ บริษัท เอส เอฟ คอร์ปอเรชั่น จำกัด (มหาชน), ค่ายภาพยนตร์ และพาร์ทเนอร์ DKSH ไม่มีสิทธิ์เข้าร่วมกิจกรรมดังกล่าว",
                    "บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
                branches: "โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขา และโรงภาพยนตร์เอ็มพริเว่ ซีเน่คลับ",
                pic: "Movie In-Season Pro.jpg", picc: "Movie In-Season Proc.jpg"
            },
            { name: "MX4D Promotion: Blade Runner 2049", subname: "Blade Runner 2049",
                detail: "ซื้อบัตรชมภาพยนตร์เรื่อง “Blade Runner 2049” ในระบบ MX4D ทุกที่นั่ง ลุ้นรับ หมวกลิขสิทธิ์แท้จากภาพยนตร์ มูลค่า 400 บาท ท้ายรอบ! ตั้งแต่วันที่ 5 – 11 ตุลาคม 2560 (ทุกรอบ ทุกวัน จนกว่าสินค้าจะหมด) เฉพาะที่โรงภาพยนตร์ 4 มิติ MX4D เท่านั้น",
                date: "ตั้งแต่วันที่ 5 – 11 ตุลาคม 2560 (หรือจนกว่าของจะหมด)",
                condition: ["ประกาศและมอบรางวัลผู้โชคดีท้ายรอบหลังภาพยนตร์จบ", "ผู้โชคดีต้องแสดงบัตรชมภาพยนตร์เพื่อยืนยันการรับรางวัล",
                    "ของรางวัลไม่สามารถแลกเปลี่ยนเป็นเงินสดหรือของรางวัลอื่นได้", "ผู้โชคดีมีความยินยอมที่จะให้มีการถ่ายทำเพื่อประชาสัมพันธ์กิจกรรมในสื่อต่างๆของบริษัท โดยบริษัทฯ ขอสงวนสิทธิ์ในการเผยแพร่ภาพผู้โชคดีที่ได้รับรางวัลเพื่อการประชาสัมพันธ์ผ่านสื่อต่างๆ ของบริษัท โดยไม่มีการเรียกร้องค่าใช้จ่ายเพิ่มขึ้น",
                    "บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า และการตัดสินของคณะกรรมการถือเป็นเด็ดขาดและสิ้นสุด"],
                branches: "โรงภาพยนตร์ 4 มิติ MX4D สาขาเอส เอฟ เวิลด์ ซีเนม่า",
                pic: "MX4D Pro.jpg", picc: "MX4D Proc.jpg"
            },
            { name: "สิทธิพิเศษสำหรับลูกค้าใหม่ที่ดาวน์โหลด Application SF Cinema รับ Popcorn Size M ฟรี", subname: "โหลด Application SF Cinema...",
                detail: "สิทธิพิเศษสำหรับลูกค้าใหม่ที่ดาวน์โหลด  Application SF Cinema บริเวณหน้าจุดจำหน่ายบัตรชมภาพยนตร์เท่านั้น  รับคูปองแจกฟรี Popcorn Size M จำนวน 1 กล่อง",
                date: "ตั้งแต่วันที่ 16 ตุลาคม – 15 ธันวาคม 2560 (หรือจนกว่าจะครบ 30,000 สิทธิ์)",
                condition: ["สิทธิพิเศษนี้สำหรับลูกค้าใหม่ที่ดาวน์โหลด Application SF Cinema ครั้งแรกเท่านั้น", " ลูกค้าสามารถใช้สิทธิ์โดยแสดงคูปองฟรี Popcorn Size M ที่หน้าจุดจำหน่ายเครื่องดื่มและป๊อปคอร์น",
                    "ไม่สามารถใช้สิทธิ์ร่วมกับกิจกรรมส่งเสริมการขายรายการอื่นๆได้", "ลูกค้าไม่สามารถ Upgrade Size หรือเปลี่ยนเป็นชุดอื่นได้", "ลูกค้าไม่สามารถแลกเปลี่ยน หรือทอนเป็นเงินสดได้", "ลูกค้าสามารถนำคูปองไปแลกรับ Popcorn Size M ฟรีได้ถึงวันที่ 31 ธันวาคม 2560 ",
                    "บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงรายละเอียดโดยไม่ต้องแจ้งให้ทราบล่วงหน้า", "จำกัด 1 ดาวน์โหลด /1คน /1 สิทธิ์", "ลูกค้าสามารถรับคูปองได้ถึงวันที่ 15 ธันวาคม 2560"],
                branches: "โรงภาพยนตร์ในเครือ เอส เอฟ ทุกสาขา ยกเว้นสาขาบิ๊กซี ปราจีนบุรี",
                pic: "Application SF Cinema Pro.jpg"
            },
            { name: "Samsung Pay Promotion", subname: "Samsung Pay Promotion",
                detail: "ลูกค้าใหม่ที่ลงทะเบียน Samsung Pay ด้วยบัตร Mastercard และได้รับโค้ดรับสิทธิ์",
                date: "ตั้งแต่วันที่ 18 กันยายน - 31 ธันวาคม 2560",
                condition: ["ลูกค้า Samsung Galaxy ต้องทำการลงทะเบียน Samsung Pay และ เพิ่มบัตรเครดิต Mastercard ใน Samsung Pay เพื่อรับสิทธิ์ซื้อบัตรชมภาพยนตร์ประเภท Deluxe Seat (2D) จำนวน 1 ที่นั่ง ราคาที่นั่งละ 8 บาท",
                    "ลูกค้าต้องชำระเงินค่าบัตรชมภาพยนตร์ผ่านบัตรเครดิต Mastercard ที่ลงทะเบียน Samsung Pay เท่านั้น", "สามารถรับสิทธิ์ได้เพียง 1 สิทธิ์ ต่อสมาร์ทโฟน 1 เครื่อง ต่อบัตรเครดิต Mastercard 1 ใบ",
                    "จำกัดสิทธิ์เฉพาะลูกค้า 10,000 ท่านแรก ที่ทำการเพิ่มบัตรเครดิต Mastercard ใน Samsung Pay พร้อมใช้ซื้อสินค้าหรือบริการอย่างน้อย 1 ครั้งในระยะเวลากิจกรรม ตั้งแต่วันที่ 18 กันยายน - 31 ธันวาคม 2560",
                    "โค้ดดังกล่าวไม่สามารถแลกเปลี่ยน หรือทอนเป็นเงินสดได้", " บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
                branches: "โรงภาพยนตร์ในเครือ SF ทุกสาขา (ยกเว้น Emprive’ Cineclub และสาขาบิ๊กซี ปราจีนบุรี)",
                pic: "Samsung Pay Pro.jpg"
            },
            { name: "Central The 1 Credit Card Promotion", subname: "The 1 Credit Card Promotion",
                detail: "สิทธิพิเศษ ส่วนลด 50% สำหรับที่นั่งเฟิร์สคลาส ระบบ Digital 2D ทุกเรื่องทุกรอบ พร้อมบริการห้องรับรองพิเศษ ด้วยเครื่องดื่มและอาหารว่าง,ลูกค้าต้องชำระด้วยบัตรเครดิต เซ็นทรัล เดอะวัน เดอะแบล็ค และแบล็ค เท่านั้น",
                date: "ตั้งแต่วันที่ 5 มีนาคม 2560 – 28 กุมภาพันธ์ 2561",
                condition: ["จำกัดส่วนสดสูงสุด 2 ใบ/ บัตร/ วัน", "จำกัดสิทธิ์ทั้งหมด 80 สิทธิ์ต่อเดือน สำหรับบัตรเครดิต เซ็นทรัล เดอะวัน แบล็ค "],
                branches: "โรงภาพยนตร์เอส เอฟ เวิลด์ ซีเนม่า สาขาเซ็นทรัลเวิลด์ เท่านั้น",
                pic: "1 Credit Card Pro.jpg"
            },
            { name: "Emprivé Cineclub Movie Night Promotion", subname: "Emprivé Cineclub Movie Night",
                detail: "วันอาทิตย์ - วันพุธ หลัง 21.00 น ชมภาพยนตร์ในราคาพิเศษ เริ่มต้นเพียง 200 บาท",
                date: "ตั้งแต่วันที่ 9 กุมภาพันธ์ 2559 เป็นต้นไป",
                condition: ["ลูกค้าสามารถรับสิทธิ์ชมภาพยนตร์ ในราคา Movie Night Price คือราคา เริ่มต้น 200 บาท ต่อที่นั่ง", "สามารถมารับสิทธิ์ได้ทุกเรื่อง ในรอบฉายหลัง  เวลา 21.00 น. เฉพาะที่นั่ง Executive Seat เท่านั้น",
                    "โปรโมชั่นดังกล่าวสามารถใช้สิทธิ์ในวันหยุดพิเศษได้ เฉพาะ วันหยุดพิเศษที่ตรงกับกับ วันจันทร์ - อังคาร ชำระค่าบัตรชมภาพยนตร์ในฐานราคา Movie Night Price ของวันอาทิตย์", "บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงโปรโมชั่นดังกล่าว โดยไม่ต้องแจ้งให้ทราบล่วงหน้า"],
                branches: "โรงภาพยนตร์ Emprivé Cineclub",
                pic: "Movie Night Pro.jpg"
            }
        ];
        return this.promotions;
    };
    DataProvider.prototype.getMovieComingOctober = function () {
        this.moviesComingOctober =
            [{
                    nameTh: "ขอตายวูบเดียว", nameEn: "Flatliners", date: "19 October 2017", type: "Drama", rate: "15+",
                    pic: "flatliners.jpg",
                    minutes: "110", directed: "Niels Arden Oplev", starring: ["Nina Dobrev", "Diego Luna", "Ellen Page"],
                    plot: "เรื่องราวของนักศึกษาแพทย์ที่ท้าความตายด้วยการทำการทดลองให้ตัวเองหัวใจหยุดเต้นระยะสั้นๆ หรือให้ตัวเองตายในระยะสั้นๆ เพื่อดูว่าจะเป็นอย่างไร แต่ปรากฏว่าเมื่อพวกเขาฟื้นคืนชีพขึ้นมา พวกเขาได้พาบางอย่างจากโลกแห่งความตายกลับมาด้วย"
                },
                {
                    nameTh: "ใจบันดาลใจ", nameEn: "Breathe", date: "19 October 2017", type: "Biography", rate: "ทั่วไป",
                    pic: "breathe.jpg",
                    minutes: "120", directed: "Andy Serkis", starring: ["claire Foy", "andrew Garfield", "Diana Rigg"],
                    plot: "Breathe ภาพยนตร์รักเรียกน้าตาที่สร้างจากเรื่องจริงของหนุ่มนักผจญภัย ที่อยู่ๆ ก็ป่วยด้วยโรคโปลิโอในวัย 28 จากคนที่แข็งแรง กลายเป็นผู้ชายที่ต้องใช้ชีวิต บนรถเข็นตลอดไป แต่ในช่วงเวลาสุดท้ายของชีวิต เขากลับเลือก ออกเดินทางรอบโลกไปกับ ผู้หญิงคนที่รักเขาที่สุดและไม่เคยทิ้งไปไหน"
                },
                {
                    nameTh: "สิงหาสับ2017", nameEn: "Leatherface", date: "19 October 2017", type: "Horror", rate: "20+",
                    pic: "leatherface.jpg",
                    minutes: "90", directed: "Alexandre Bustillo", starring: ["Nicole Andrews", "Finn Jones", "Lili Taylor"],
                    plot: "Leatherface ว่าด้วยเรื่องราวของเหตุการณ์ที่เกิดขึ้นเพียงไม่กี่ปีก่อนหน้า The Texas Chainsaw Massacre (2003) ลูกชายของครอบครัวซอว์เยอร์ถูกส่งตัวเข้าไปในโรงพยาบาลบำบัดจิต หลังจากการเสียชีวิตของลูกสาวนายอำเภอที่เป็นปริศนา 10 ปีให้หลัง เขาได้ลักพาตัวนางพยาบาลมาคนหนึ่ง และหนีออกจากโรงพยาบาลมาพร้อมกับคนไข้ที่ถูกกักบริเวณอีกสามคน ฝั่งเจ้าหน้าที่บ้านเมืองรวมไปถึงนายอำเภอออกไล่ล่าตามหาเพื่อแก้แค้นให้กับการตายของลูกสาวตัวเอง ทว่าเด็กหนุ่มซอว์เยอร์ได้เดินเข้าสู่เส้นทางแห่งความโหดเหี้ยม และเขาได้ถูกหล่อหลอมให้กลายเป็นปีศาจในสมญานามว่า เลเธอร์เฟซ"
                },
                {
                    nameTh: "กองพันหมาป่า", nameEn: "Wolf Warrior 2", date: "19 October 2017", type: "Action", rate: "18+",
                    pic: "wolf.jpg",
                    minutes: "125", directed: "Jing Wu", starring: ["Frank Grillo", "Celina Jade", "Jing Wu"],
                    plot: "บอกเล่าเรื่องราวของอดีตเจ้าหน้าที่พิเศษแห่งหน่วยฝูงรบหมาป่า เหล่งเฝิง (อู๋จิง) ที่ได้ตัดสินใจเดินทางมายังแอฟริกาเพื่อหาความสงบ แต่ดูเหมือนชะตากรรมจะไม่ให้เขาได้มีเวลาพักเมื่อตัวเขา ต้องเข้าไปพัวพันกับความวุ่นวายของกลุ่มกบฎต่อต้านรัฐบาล รวมถึงภารกิจช่วยชีวิต ราเชล (เซลิน่า เจด) แพทย์จิตอาสาประจำแอฟริกาให้รอดพ้นจากเงื้อมมือของกลุ่มทหารรับจ้างสุดโหดที่นำโดยจอมซาดิสท์อย่าง บิ๊ก แดดดี้ (แฟรงค์ กริลโล) และผู้ที่จะยุติเรื่องราวนี้ได้มีเพียงนักรบหมาป่าผู้นี้เท่านั้น"
                },
                {
                    nameTh: "นิมิตมรณะ", nameEn: "Tell Me How I Die", date: "19 October 2017", type: "Thriller", rate: "15+",
                    pic: "tell.jpg",
                    minutes: "110", directed: "D.J. Viola", starring: ["Mark Furze", "Nathan Kress", "Ryan Higa", "Kirby Bliss Blanton"],
                    plot: "เรื่องราวเกิดขึ้นเมื่อ แอนนา (เวอร์จิเนีย การ์ดเนอร์) สาวเสิร์ฟผู้ที่กำลังตกงาน ได้ตัดสินใจเข้าร่วมโครงการทดลองยาชนิดหนึ่งร่วมกับกลุ่มเด็กนักศึกษามหาวิทยาลัยเพื่อหารายได้พิเศษ การทดลองระบุเอาไว้ว่าพวกเขาครึ่งหนึ่งจะได้รับยาจริง อีกครึ่งหนึ่งจะได้ยาปลอม และมีข้อแม้ว่าพวกเขาห้ามออกไปจากสถานที่ทำการทดลองเป็นอันขาด แต่แล้วเรื่องราวอันไม่คาดฝันก็เกิดขึ้นเมื่อผลข้างเคียงจากยาทำให้พวกเขาเห็นภาพการฆาตกรรมในหมู่ผู้เข้ารับการทดลอง ก่อนที่ภาพเหล่านั้นจะเริ่มเปลี่ยนกลายเป็นความจริงโดยฆาตกรที่อยู่ในหมู่พวกเขาเอง"
                },
                {
                    nameTh: "The Brink", nameEn: "The Brink", date: "26 October 2017", type: "Action", rate: "",
                    pic: "brink.jpg",
                    minutes: "110", directed: "Jonathan Li", starring: ["Yue Wu", "Shawn Yue", "Jin Zhang"],
                    plot: "ติดตามเรื่องย่อได้เร็วๆ นี้"
                },
            ];
        return this.moviesComingOctober;
    };
    DataProvider.prototype.getMovieComingNovember = function () {
        this.moviesComingNovember =
            [{
                    nameTh: "หัวใจไม่แพ้", nameEn: "Stronger", date: "02 November 2017", type: "Drama", rate: "15+",
                    pic: "stronger.jpg",
                    minutes: "120", directed: "David Gordon Green", starring: ["Clancy Brown", "Jake Gyllenhaal", "Tatiana Maslany"],
                    plot: "เรื่องจริงของชายที่ไม่ย่อท้อต่อโชคชะตา เจฟฟ์ เบาว์แมน ชายธรรมดาทั่วไปวัย 27 ปี ที่กำลังวาดอนาคตกับ อีริน แฟนสาวไว้อย่างสวยงาม แต่ทุกอย่างกลับพังทะลายเมื่อ เจฟฟ์ กลายเป็นหนึ่งในเหยื่อที่โดนลูกหลงจากการวางระเบิดที่งานบอสตันมาราธอน เจฟฟ์ ตื่นมาในวันอังคารที่ 16 เมษายน 2013 ที่โรงพยาบาลหลังจากทีมแพทย์ผ่าตัดเพื่อรักษาชีวิตเขาแต่ก็ต้องแลกมาด้วยขาทั้งสองข้าง เมื่อ เจฟฟ์ รู้สึกตัวเขากลายมาเป็นฟันเฟืองสำคัญในการตามล่า 2 ผู้ก่อการร้ายมารับผิด โดยไม่ทันได้รู้เลยว่าภาพถ่ายของเขาที่ขาห้อยต่องแต่งจะกลายมาเป็นภาพที่เป็นตัวแทนของความโหดร้ายในเหตุการณ์ครั้งนี้ แม้ว่า เจฟฟ์ ต้องสูญเสียขาทั้งสองข้างไป แต่คำว่ายอมแพ้ไม่เคยเป็นตัวเลือกของเขา เจฟฟ์ ยิ้มรับกับเรื่องที่เกิด มองโลกในแง่ดี และทำทุกอย่างเพื่อให้กลับมาเดินได้อีกครั้ง เรื่องราวของเขาจะมอบแรงใจให้กับคนที่กำลังท้อถอย"
                },
                {
                    nameTh: "The Killing of a Sacred Deer", nameEn: "The Killing of a Sacred Deer", date: "02 November 2017", type: "Drama", rate: "ทั่วไป",
                    pic: "killing.jpg",
                    minutes: "120", directed: "Yorgos Lanthimos", starring: ["Colin Ferrell", "Nicole Kidman", "Alicia Silverstone"],
                    plot: "ติดตามเรื่องย่อได้เร็วๆ นี้"
                },
                {
                    nameTh: "คอลอสซาน ทั้งจักรวาลเป็นของเธอ", nameEn: "Colossal", date: "09 November 2017", type: "Action", rate: "ทั่วไป",
                    pic: "colossal.jpg",
                    minutes: "", directed: "Nacho Vigalondo", starring: ["Jason Sudeikis", "Anne Hathaway", "Austin Stowell"],
                    plot: "กลอเรีย (Anne Hathaway) เป็นสาวปาร์ตี้ที่ไม่ได้ทำงาน หลังจากถูกแฟนหนุ่มไล่ออกจากอพาร์ตเมนต์ บังคับให้เธอต้องย้ายจากนิวยอร์ก กลับไปบ้านเกิดของเธอ เมื่อข่าวรายงานว่าสิ่งมีชีวิตขนาดยักษ์กำลังทำลายกรุงโซล เกาหลีใต้ กลอเรียก็ค่อยๆ ตระหนักว่าเธอเกี่ยวข้องกับปรากฏการณ์อันไกลโพ้นนี้ เมื่อเหตุการณ์เริ่มควบคุมไม่ได้ กลอเรียต้องตัดสินใจว่า ทำไมการมีชีวิตที่ไม่มีนัยสาคัญของเธอ ดูเหมือนจะมีผลมหาศาลต่อชะตากรรมของโลก"
                },
                {
                    nameTh: "Only the Brave", nameEn: "Only the Brave", date: "09 November 2017", type: "Biography", rate: "ทั่วไป",
                    pic: "only.jpg",
                    minutes: "", directed: "Joseph Kosinski", starring: ["Jennifer Connelly", "Miles Teller", "Taylor Kitsch"],
                    plot: "โจเซฟ โคซินสกี้ จัดเป็นสุดยอดผู้กำกับสายไซไฟ ที่เคยฝากผลงานวิสัยทัศน์ล้าไว้ใน Tron Legacy และ Oblivion ขอผนึกกาลังกับโปรดิวเซอร์มากฝีมือ ลอเรนโซ ดิ โบนาเวนทูรา ที่อยู่เบื้องหลังความสำเร็จของหนังอย่าง Transformers และ Deepwater Horizon หยิบเอาเรื่องจริงของหน่วย แกรนิต เมาท์เท่น ฮอตช็อตส์ กลุ่มนักผจญเพลิงที่ต้องรับมือกับไฟป่าครั้งร้ายแรงที่สุดที่พร้อมจะเปลี่ยนผืนป่าขนาดใหญ่ให้เป็นนรกบนดิน เพื่อปกป้องตัวเมืองอริโซน่าเอาไว้พวกเขาทำงานโดยไม่คำนึงถึงชีวิตตัวเองเพื่อช่วยเหลือคนที่พวกเขารัก เรื่องราวของมิตรภาพ ความเสียสละ และความกล้าหาญ และวีรกรรมที่โลกไม่รู้ลืม"
                },
                {
                    nameTh: "The Big Sick", nameEn: "The Big Sick", date: "09 November 2017", type: "v", rate: "ทั่วไป",
                    pic: "big.jpg",
                    minutes: "120", directed: "Michael Showalter", starring: ["Holly Hunter", "Zoe Kazan", "Kumail Nanjiani"],
                    plot: "ติดตามเรื่องย่อได้เร็วๆ นี้"
                },
                {
                    nameTh: "สุขสันต์วันตาย", nameEn: "Happy Death Day", date: "23 November 2017", type: "Horror", rate: "18+",
                    pic: "happy.jpg",
                    minutes: "", directed: "Christopher Landon", starring: ["Israel Broussard", "Jessica Rothe", "ruby Modine"],
                    plot: "เรื่องราวของนักศึกษามหาวิทยาลัย ที่เล่าย้อนถึงวันที่เธอถูกฆาตกรรมอย่างผิดปกติและน่าสะพรึงกลัว จนกระทั่งเธอค้นพบใครกันแน่ที่ลงมือฆาตกรรม"
                },
                {
                    nameTh: "Jigsaw", nameEn: "Jigsaw", date: "30 November 2017", type: "Horror", rate: "18+",
                    pic: "jigsaw.jpg",
                    minutes: "91", directed: "Peter Spierig", starring: ["Tobin Bell", "Matt Passmore", "Laura Vandervoort"],
                    plot: "การกลับมาอีกครั้งของ Jigsaw ฆาตกรโรคจิตอัจฉริยะที่โหดสุดในประวัติศาสตร์ ปรากฏการณ์เลือดท่วมจอครั้งนี้เกิดขึ้นเมื่อตารวจพบศพที่ล้วนแล้วจบชีวิตด้วยวิธีสุดวิปลาศ ซึ่งทุกหลักฐานและการสืบสวนชี้ไปที่ จอห์น เครเมอร์ Jigsaw ต้นตารับที่ตายไปแล้วหลายปี ปริศนาแห่งการตามล่าจึงอุบัติขึ้นก่อนที่จะมีใครจะตกเป็นเหยื่อการทรมานสุดวิปริตของมัน"
                },
                {
                    nameTh: "เรเนเกดส์ ทีมยุทธการล่าโคตรทองใต้สมุทร", nameEn: "Renegades", date: "30 November 2017", type: "Action", rate: "15+",
                    pic: "renegades.jpg",
                    minutes: "105", directed: "Steven Quale", starring: ["Dimitri Leonidas", "Ewan Bremner", "Sullivan Stapieton"],
                    plot: "เรื่องราวของหน่วยนาวีซีล ที่ต้องต่อสู้เพื่อปกป้องสมบัติมหาศาลในห้วงน้ำลึก เมื่อค้นพบสมบัติใต้น้ำในทะเลสาบบอสเนีย"
                },
                {
                    nameTh: "Wind River", nameEn: "Wind River", date: "30 November 2017", type: "Action", rate: "15+",
                    pic: "wind.jpg",
                    minutes: "107", directed: "Taylor Sheridan", starring: ["Kelsey Asbille", "Elizabeth Olsen", "Jermy Renner"],
                    plot: "(อลิซาเบธ โอลเซ่น) รับบท เป็นเอฟบีไอสาวที่ต้องไปทำคดีตามลำพังในเขตสงวนของชาวพื้นเมืองอเมริกัน หลังจากมีการพบศพหญิงสาวนอนหน้ำคว่ำอยู่กลางหิมะ (เจเรมี เรนเนอร์) รับบทเป็นเจ้าหน้าที่ควบคุมดูแลการล่าสัตว์ของพื้นที่ที่ไปพบศพและถูกเธอขอให้มาช่วยสืบคดี"
                },
            ];
        return this.moviesComingNovember;
    };
    DataProvider.prototype.getMovieComingDecember = function () {
        this.moviesComingDecember =
            [{
                    nameTh: "แฮร์รี่ โฮล กับคดีฆาตกรมนุษย์หิมะ", nameEn: "The Snowman", date: "07 December 2017", type: "Crime", rate: "18+",
                    pic: "snowman.jpg",
                    minutes: "125", directed: "Tomas Alfredson", starring: ["Michael Fassbender", "Rebecca Ferguson", "val Kilmer"],
                    plot: "เมื่อหัวหน้าทีมนักสืบ (ฟาสส์เบนเดอร์) นำทีมสืบสวนคดีอาชญากรรมการหายตัวไปของเหยื่อในวันหิมะตกครั้งแรกในฤดูหนาว เขากลัวว่าฆาตกรต่อเนื่องซึ่งยังหลบหนีอยู่อาจกลับมาอีกครั้ง หากเขาหวังที่จะชิงไหวชิงพริบกับปีศาจร้ายก่อนที่หิมะจะตกอีกครั้ง ตำรวจต้องเชื่อมต่อคดีเก่าหลายสิบปีเข้ากับคดีใหม่สุดโหด ด้วยความช่วยเหลือของสมาชิกใหม่ (เฟอร์กูสัน)"
                },
                {
                    nameTh: "Better Watch Out", nameEn: "Better Watch Out", date: "07 December 2017", type: "Horror", rate: "18+",
                    pic: "watch.jpg",
                    minutes: "85", directed: "Chris Peckover", starring: ["Virginia Madasen", "Dacre Montgomery", "Patrick Warburton"],
                    plot: "เมื่อพ่อกับแม่ของ ลุค เด็กชายวัย 12 ปี (แสดงโดย เลวี มิลเลอร์) พากันออกไปต่างเมืองเพื่อไปฉลองวันคริสต์มากัน โดยทิ้งเขาเอาไว้กับพี่เลี้ยงสาวสวย แอชลี่ย์ (แสดงโดย โอลิเวีย ดีจอนจ์) และ การ์เรต (แสดงโดย เอ็ด ออกเซนบาวน์) เพื่อนที่เป็นเด็กเนิร์ด ตามลำพัง แต่ค่ำคืนอันเงียบสงบของพวกเขาถูกรุกรานจากโจรร้ายหมายจะปล้นชิงทรัพย์ ทำให้ตัวตนอีกด้านหนึ่งของลุคได้เปิดเผยออกมา ลุคได้เริ่มแผนการวางกับดักสารพัดสังหาร เพื่อลงโทษเหล่าโจร และคนรอบข้างที่มารบกวนค่ำคืนอันแสนสุขของเขา"
                },
                {
                    nameTh: "สตาร์ วอร์ส: ปัจฉิมบทแห่งเจได", nameEn: "Star Wars: The Last Jedi", date: "14 December 2017", type: "Action", rate: "ทั่วไป",
                    pic: "star.jpg",
                    minutes: "", directed: "Rian Johnson", starring: ["John boyega", "Mark Hamil", "Daisy Ridley"],
                    plot: "Star Wars: The Last Jedi จะสานต่อเรื่องราวจาก The Force Awakens โดยมีกระแสว่า เรย์ จะฝึกซ้อมการเป็นเจไดกับ ลุค สกายวอล์คเกอร์ ขณะที่ ไคโล เรน จะลักพาตัว ฟินน์ ที่กำลังทำภารกิจร่วมกับเพื่อนใหม่ ส่วนทางด้าน โพ ดาเมรอน ก็กำลังร่วมมือกับนายพลหญิง เลอา ในการล่อให้ เรย์ ออกมาจากที่ซ่อน ยิ่งไปกว่านั้นเราจะได้เห็นการประลองดาบไลท์เซเบอร์ระหว่าง เรย์ กับ ไคโล เรน"
                },
                {
                    nameTh: "Wonder", nameEn: "Wonder", date: "14 December 2017", type: "Drama", rate: "ทั่วไป",
                    pic: "wonder.jpg",
                    minutes: "113", directed: "Stephen Chbosky", starring: ["Jolia Roberts", "Jacob Tremblay", "Owen Wilson"],
                    plot: "เรื่องราวของ ออกัสต์ พูลล์แมน เด็กชายอายุ 10 ขวบที่บ้าสตาร์วอร์ส ชอบกินไอติม ติดเกม และ มีครอบครัวที่อบอุ่น แม่ที่รักเขาที่สุดในโลก แต่ ออกัสต์ ป่วยด้วยโรค Mandibulofacial Dysostosis ( โรคปากแหว่งเพดานโหว่ ) ตั้งแต่แรกเกิด จน อายุ 10 ขวบ ออกัสต์ เข้ารับการผ่าตัดใบหน้ามาแล้วกว่า 27 ครั้ง คนแปลกหน้ามักเบือนหน้าหนีเมื่อเห็นหน้าเขา หลายคนมองว่า ออกัสต์ มีหน้าตาที่น่าเกลียด จนไม่อยากเข้าใกล้ แต่ คนใกล้ตัว และออกัส กลับไม่คิดแบบนั้น เขาเป็นแค่ เด็กชายตัวน้อยที่อยากกินไอติมโดยที่เด็กคนอื่นๆเห็นว่าเขากิน”จริงๆ” เขาอยากแต่งชุดซุปเปอร์ฮีโร่โดยไม่ต้องคอยสวมหน้ากากปิดใบหน้า เขาอยากไปโรงเรียนและเล่นกับเด็กทั่วไปอย่างปกติสุข หนังจะบอกเล่าผ่านมุมมองและความนึกคิดของตัวละครแต่ละตัว เริ่มต้นจากตัวของเด็กชาย แล้วตามด้วยพ่อแม่ พี่สาว เพื่อนคนแรก เพื่อนที่คอยแกล้ง เพื่อนที่คอยช่วยเหลือ ผ่านมุมมองของเด็กชายตัวเล็ก ที่มีหัวใจดวงโต และ น่ารักที่สุดในโลก เด็กชายที่มีชื่อว่า  ออกัสต์ พูลล์แมน"
                },
                {
                    nameTh: "Suburbicon", nameEn: "Suburbicon", date: "14 December 2017", type: "Crime", rate: "ทั่วไป",
                    pic: "suburbicon.jpg",
                    minutes: "104", directed: "George Clooney", starring: ["Matt Damon", "Oscar Isaac", "Julianne Moore"],
                    plot: "Suburbicon เป็นชื่อของหมู่บ้านชานเมืองในปี 1959 ที่สงบ เรียบร้อย น่าอยู่ เหมาะสำหรับการตั้งครอบครัว แต่เบื้องหน้าที่ดูเหมือนร่มรื่นนั้นแฝงไปด้วยเรื่องราวการหลอกลวง หักหลัง มาเฟีย และฆาตกรรมในหนังตลกร้ายแนวอาชญากรรมที่มีตัวละครหญิงร้ายชายเลวรับบทโดยแมต เดมอน, จูลี่แอน มัวร์ และ ออสการ์ ไอแซ็ค"
                },
                {
                    nameTh: "Ferdinand", nameEn: "Ferdinand", date: "21 December 2017", type: "Animation", rate: "ทั่วไป",
                    pic: "ferdinand.jpg",
                    minutes: "", directed: "Carlos Saldanha", starring: ["John Cena", "Daveed Diggs", "Kate McKinnon"],
                    plot: "Ferdinand ถ่ายทอดเรื่องราวของกระทิงยักษ์ที่มีใจกล้าหาญ หลังจากถูกเข้าใจผิดวาเป็นสัตว์อันตราย เขาถูกจับตัวไปและต้องพลัดพรากกับครอบครัว เขาพยายามหาทางกลับไปหาครอบครัว เขารวมตัวทีมสัตว์แปลกๆ เพื่อออกผจญภัย เรื่องราวในภาพยนตร์เกิดขึ้นที่สเปน ภาพยนตร์เรื่อง Ferdinand เป็นบทพิสูจน์ว่าคุณไม่อาจตัดสินกระทิงภายนอกของมันได้"
                },
            ];
        return this.moviesComingDecember;
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketPage = (function () {
    function TicketPage(navCtrl, navParams, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.totalSeat1 = [];
        this.totalSeat2 = [];
        this.totalSeatVip = [];
        this.byTicket = [];
        this.price = 0;
        this.nowSeat = [];
        this.presentLoading();
        for (var i = 1; i <= 84; i++) {
            this.totalSeat1.push({ num: i, pic: "sofa" });
            // console.log(i);
        }
        for (var i = 85; i <= 168; i++) {
            this.totalSeat2.push({ num: i, pic: "sofa" });
            // console.log(i);
        }
        for (var j = 501; j <= 506; j++) {
            this.totalSeatVip.push({ num: j, pic: "vip" });
            // console.log(j);
        }
        this.theater = navParams.data;
        console.log(this.theater);
        //this.time = navParams.get("time");
    }
    TicketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketPage');
    };
    TicketPage.prototype.byTickets = function (t) {
        if (t.pic == "sofa") {
            t.pic = "correct";
            this.price = this.price + 160;
            this.nowSeat.push(t.num);
            var toast = this.toastCtrl.create({
                message: 'You add normal seat (160.-)',
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        }
        else if (t.pic == "vip") {
            t.pic = "correct";
            this.price = this.price + 220;
            this.nowSeat.push(t.num);
            var toast = this.toastCtrl.create({
                message: 'You add normal seat (220.-)',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (t.num < 200) {
            t.pic = "sofa";
            this.price = this.price - 160;
            this.nowSeat.splice(t.num);
        }
        else {
            t.pic = "vip";
            this.price = this.price + 160;
            this.nowSeat.splice(t.num);
        }
    };
    TicketPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 1000
        });
        loader.present();
    };
    return TicketPage;
}());
TicketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-ticket',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\ticket\ticket.html"*/'<!--\n\n  Generated template for the TicketPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ticket</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n  <div class="header"> {{theater.name}} <br> {{theater.date}} October 2017 - {{theater.t}}</div>\n\n  <ion-grid class="grid">\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="screen">S C R E E N</div>\n\n      </ion-col>\n\n    </ion-row><br>\n\n    <ion-row >\n\n      <ion-col col-12>\n\n        <img src="pic/{{t1.pic}}.jpg" *ngFor="let t1 of totalSeat1" class="seat" (click)="byTickets(t1)">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n    </ion-row><br>\n\n    <ion-row >\n\n      <ion-col col-12>\n\n        <img src="pic/{{t2.pic}}.jpg" *ngFor="let t2 of totalSeat2" class="seat" (click)="byTickets(t2)">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row >\n\n        <ion-col style="text-align: center">\n\n          <img src="pic/{{vip.pic}}.jpg" *ngFor="let vip of totalSeatVip" class="vip" (click)="byTickets(vip)">\n\n        </ion-col> \n\n    </ion-row>\n\n\n\n    <ion-card>\n\n        Selected Seats {{nowSeat}}  ราคา : {{price}} บาท  \n\n    </ion-card>\n\n    \n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\ticket\ticket.html"*/,
=======
        selector: 'page-ticket',template:/*ion-inline-start:"D:\sf-cinema\src\pages\ticket\ticket.html"*/'<!--\n\n  Generated template for the TicketPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n  <div class="header"> {{theater.name}} <br> {{theater.date}} October 2017 - {{theater.t}}</div>\n\n  <ion-grid class="grid">\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="screen">S C R E E N</div>\n\n      </ion-col>\n\n    </ion-row><br>\n\n    <ion-row >\n\n      <ion-col col-12>\n\n        <img src="pic/{{t1.pic}}.jpg" *ngFor="let t1 of totalSeat1" class="seat" (click)="byTickets(t1)">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n    </ion-row><br>\n\n    <ion-row >\n\n      <ion-col col-12>\n\n        <img src="pic/{{t2.pic}}.jpg" *ngFor="let t2 of totalSeat2" class="seat" (click)="byTickets(t2)">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row >\n\n        <ion-col style="text-align: center">\n\n          <img src="pic/{{vip.pic}}.jpg" *ngFor="let vip of totalSeatVip" class="vip" (click)="byTickets(vip)">\n\n        </ion-col> \n\n    </ion-row>\n\n\n\n    \n\n    \n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\sf-cinema\src\pages\ticket\ticket.html"*/,
>>>>>>> dad44141747da7fa4e9029a4934c3593cd3d4c9c
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
], TicketPage);

var _a, _b, _c, _d;
//# sourceMappingURL=ticket.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PromotionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionDetailPage = (function () {
    function PromotionDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.promotionDetail = this.navParams.get('promotionDetail');
    }
    PromotionDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromotionDetailPage');
    };
    return PromotionDetailPage;
}());
PromotionDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-promotion-detail',template:/*ion-inline-start:"D:\Project\sf-cinema\src\pages\promotion-detail\promotion-detail.html"*/'<!--\n\n  Generated template for the PromotionDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title ><img src="pic/sf.png" class="logo"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n\n\n<ion-card >\n\n	<ion-card-header>\n\n	    <div class="promotionHeader">{{promotionDetail.name}}</div>\n\n	</ion-card-header>\n\n	<ion-card-content >\n\n    <img src="pic/{{promotionDetail.pic}}" class="picMovie" >\n\n    <br>\n\n    <ion-list-header class="detail" no-lines>รายละเอียดโปรโมชั่น</ion-list-header>\n\n		<div class="promotionDetail">{{promotionDetail.detail}}</div>\n\n  <br>\n\n  <ion-list-header class="detail" no-lines>ระยะเวลาโปรโมชั่น</ion-list-header>\n\n  <div class="promotionDetail">{{promotionDetail.date}}</div>\n\n  <br>\n\n  <ion-list-header class="detail" no-lines>ข้อกำหนดหรือเงื่อนไข</ion-list-header>\n\n  <ion-list *ngFor="let con of promotionDetail.condition">\n\n  <div class="promotionDetail">- {{con}}</div>\n\n  </ion-list>\n\n  <br>\n\n  <ion-list-header class="detail" no-lines>สาขาที่ร่วมรายการ</ion-list-header>\n\n  <div class="promotionDetail">{{promotionDetail.branches}}</div>\n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Project\sf-cinema\src\pages\promotion-detail\promotion-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PromotionDetailPage);

//# sourceMappingURL=promotion-detail.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map
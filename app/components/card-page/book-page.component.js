"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_service_1 = require("../../services/book.service");
var BookPageComponent = (function () {
    function BookPageComponent(bookservice) {
        this.bookservice = bookservice;
        this.editing = false;
        this.currentPage = 0;
        this.maxPages = 0;
        this.searchTerm = "";
    }
    BookPageComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BookPageComponent.prototype.getBooks = function () {
        var _this = this;
        this.books = this.bookservice.getCards({
            page: this.currentPage,
            searchTerm: this.searchTerm
        });
        this.books.subscribe(function (r) {
            _this.maxPages = Math.ceil(r.allResults / 5);
            _this.currentPage = r.page;
        });
    };
    return BookPageComponent;
}());
BookPageComponent = __decorate([
    core_1.Component({
        selector: "book-page",
        templateUrl: "./book-page.component.html"
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookPageComponent);
exports.BookPageComponent = BookPageComponent;
//# sourceMappingURL=book-page.component.js.map
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
var rx_1 = require("rxjs/rx");
var _ = require("lodash");
var BookService = (function () {
    function BookService() {
        this.load();
    }
    BookService.prototype.getCards = function (options) {
        var pageSize = (options && options.pageSize) || 5;
        var page = (options && options.page) || 0;
        var searchTerm = (options && options.searchTerm) || '';
        var allResults = searchTerm.length
            ? _.filter(this.cards, function (c) { return _.find([c.firstName, c.lastName, c.role], function (e) { return e && e.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1; }) !== undefined; })
            : this.cards;
        return rx_1.Observable.of(_.slice(allResults, pageSize * page, pageSize * (page + 1)))
            .map(function (results) { return ({
            allResults: allResults.length, results: results, page: page, pageSize: pageSize, searchTerm: searchTerm
        }); })
            .delay(200);
    };
    BookService.prototype.addOrUpdateCard = function (card) {
        if (card.id) {
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id == card.id) {
                    this.cards[i] = card;
                    break;
                }
            }
        }
        else {
            var maxCard = _.maxBy(this.cards, function (c) { return c.id; });
            card.id = ((maxCard && maxCard.id) || 0) + 1;
            this.cards.push(card);
        }
        return this.save();
    };
    BookService.prototype.deleteCard = function (card) {
        if (typeof card === 'number')
            this.cards = _.filter(this.cards, function (c) { return c.id !== card; });
        else if (typeof card === 'object')
            this.cards = _.filter(this.cards, function (c) { return c.id !== card.id; });
        return this.save();
    };
    BookService.prototype.load = function () {
        this.cards = JSON.parse(localStorage.getItem('cards')) || [
            { companyId: 1, firstName: 'Levi', lastName: 'Ackermann', id: 1, motto: "Humanity's strongest soldier", role: 'Captain', imageUrl: 'http://vignette3.wikia.nocookie.net/shingekinokyojin/images/9/94/Levi_Ackerman_character_image.png/revision/latest?cb\x3d20151125005625' },
            { companyId: 2, firstName: 'Rhonda', lastName: 'Dumas', id: 2, motto: "Accounting for fun", role: 'Accountant', imageUrl: 'http://img2.stockfresh.com/files/k/kurhan/m/64/431783_76810602.jpg' },
            { companyId: 3, firstName: 'Davey', lastName: 'Jones', id: 3, motto: "Analyzing business for the future", role: 'Business Analyst', imageUrl: 'https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_9/picture_2405201614728.jpg' },
            { companyId: 4, firstName: 'Pinocchio', lastName: '', id: 4, motto: "I'm no puppet", role: 'Puppet', imageUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/dvd/disney/pinocchio/Pinocchio2.jpg' },
            { companyId: 5, firstName: 'Solid', lastName: 'Snake', id: 5, motto: "LIQUID!", role: 'Super Soldier', imageUrl: 'https://pbs.twimg.com/profile_images/34087792/Immagine_1_400x400.jpg' }
        ];
        this.save();
    };
    BookService.prototype.save = function () {
        localStorage.setItem('cards', JSON.stringify(this.cards));
        return rx_1.Observable.timer(200);
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map
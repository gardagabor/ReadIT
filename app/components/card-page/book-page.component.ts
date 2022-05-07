import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx";
import { Card } from "../../models/card.type";
import { BookService } from "../../services/book.service";
import { SearchResult } from "../../models/search-result.type";
import * as _ from "lodash";

@Component({
    selector: "book-page",
    templateUrl: "./book-page.component.html"
})
export class BookPageComponent implements OnInit {
    editing: boolean = false;
    books: Observable<SearchResult<Card>>;
    currentPage: number = 0;
    maxPages: number = 0;
    searchTerm: string = "";

    constructor(private bookservice: BookService) { }
    ngOnInit() {
        this.getBooks();
    }
    getBooks() {
        this.books = this.bookservice.getCards({
            page: this.currentPage,
            searchTerm: this.searchTerm
        });
        this.books.subscribe(r => {
            this.maxPages = Math.ceil(r.allResults / 5);
            this.currentPage = r.page;
        });

    }
}

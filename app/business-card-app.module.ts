import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ng2-bootstrap'
import { BookPageComponent } from "./components/card-page/book-page.component";
import { ReadITAppComponent } from "./components/business-card-app/readit-app.component";
import { BookService } from "./services/book.service";

let routes: Route[] = [
    { path: "books", component: BookPageComponent },
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule, CollapseModule.forRoot()],
    declarations: [ReadITAppComponent,  BookPageComponent],
    exports: [],
    providers: [BookService],
    bootstrap: [ReadITAppComponent]
})
export class BusinessCardAppModule { }

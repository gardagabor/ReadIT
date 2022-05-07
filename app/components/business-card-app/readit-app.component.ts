import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from "rxjs/rx";

@Component({
    selector: 'readit-app',
    templateUrl: './readit-app.component.html'
})
export class ReadITAppComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
    }
    
    title = "Read IT";
    isNavbarCollapsed = true;
    currentPageTitle: Observable<string>;
}
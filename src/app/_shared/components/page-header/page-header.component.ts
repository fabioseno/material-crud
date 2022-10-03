import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbPath } from '../breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

    @Input() pageTitle: string;
    @Input() breadcrumb: BreadcrumbPath[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}

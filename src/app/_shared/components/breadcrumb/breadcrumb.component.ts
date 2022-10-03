import { Component, Input, OnInit } from '@angular/core';

export interface BreadcrumbPath {
    label: string;
    disabled?: boolean;
    path?: string
}

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Input() paths: BreadcrumbPath[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}

import { Component, OnInit } from '@angular/core';
import { BreadcrumbPath } from 'src/app/_shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-entity-details',
    templateUrl: './entity-details.component.html',
    styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {

    breadcrumbPaths: BreadcrumbPath[] = [{
        label: 'Dashboard',
        path: '/home'
    },
    {
        label: 'Entity list',
        path: '/entities'
    },
    {
        label: 'Entity details',
        disabled: true
    }];

    constructor() { }

    ngOnInit(): void {
    }

}

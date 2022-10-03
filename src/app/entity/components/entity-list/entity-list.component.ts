import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { formatDistanceToNow } from 'date-fns'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Entity } from '../../model/entity';
import { CATEGORY } from '../../data/entity-category';
import { STATUS } from '../../data/entity-status';
import { BreadcrumbPath } from 'src/app/_shared/components/breadcrumb/breadcrumb.component';
import { LoaderService } from 'src/app/_shared/services/loader.service';

const ELEMENT_DATA: Entity[] = [
    { id: 1, date: new Date(), name: 'Hydrogen', category: 'Category', status: 'Open' },
    { id: 2, date: new Date(), name: 'Helium', category: 'Category', status: 'Open' },
    { id: 3, date: new Date(), name: 'Lithium', category: 'Category', status: 'Open' },
    { id: 4, date: new Date(), name: 'Beryllium', category: 'Category', status: 'Open' },
    { id: 5, date: new Date(), name: 'Boron', category: 'Category', status: 'In Progress' },
    { id: 6, date: new Date(), name: 'Carbon', category: 'Category', status: 'Open' },
    { id: 7, date: new Date(), name: 'Nitrogen', category: 'Category', status: 'In Progress' },
    { id: 8, date: new Date(), name: 'Oxygen', category: 'Category', status: 'Open' },
    { id: 9, date: new Date(), name: 'Fluorine', category: 'Category', status: 'Open' },
    { id: 10, date: new Date(), name: 'Neon', category: 'Category', status: 'Open' },
];

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements AfterViewInit {

    displayedColumns: string[] = ['date', 'name', 'category', 'status'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    breadcrumbPaths: BreadcrumbPath[] = [{
        label: 'Dashboard',
        path: '/home'
    },
    {
        label: 'Entity list',
        disabled: true
    }];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private readonly router: Router, private readonly loaderService: LoaderService) {

    }

    ngOnInit() {
        this.listEntities();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    add() {
        this.router.navigate(['/entities/new']);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    listEntities() {
        let users = Array.from({ length: 100 }, (_, k) => this.createNewEntity(k + 1));

        users = users.sort((a, b) => b.date.getTime() - a.date.getTime())

        this.loaderService.show();
        setTimeout(() => {
            this.dataSource = new MatTableDataSource(users);
            this.loaderService.hide();
        }, 3000);
    }

    getStatusClass(status: string) {
        switch (status) {
            case 'Open':
                return 'chip-open';
            case 'Closed':
                return 'chip-closed';
            case 'In progress':
                return 'chip-in-progress';
            default:
                return 'grey'
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    }

    viewDetails(entity: Entity) {
        this.router.navigate(['/entities', entity.id]);
    }

    timeSince = (date: any) => {
        return formatDistanceToNow(date, { includeSeconds: true }) + ' ago';
    }

    private createNewEntity = (index: number): Entity => {
        return {
            id: index + 1,
            date: this.randomDate(new Date(2022, 9, 1), new Date()),
            name: 'Name ' + index + 1,
            category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
            status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
        };
    }

    private randomDate = (start: Date, end: Date) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }



}

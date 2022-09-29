import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { formatDistanceToNow } from 'date-fns'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


export interface Entity {
    date: Date;
    name: string;
    category: string;
    status: string;
}

const STATUS: string[] = [
    'Open',
    'Closed',
    'In progress'
];

const CATEGORY: string[] = [
    'Red',
    'Blue',
    'Amber',
    'Green',
];

const ELEMENT_DATA: Entity[] = [
    { date: new Date(), name: 'Hydrogen', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Helium', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Lithium', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Beryllium', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Boron', category: 'Category', status: 'In Progress' },
    { date: new Date(), name: 'Carbon', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Nitrogen', category: 'Category', status: 'In Progress' },
    { date: new Date(), name: 'Oxygen', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Fluorine', category: 'Category', status: 'Open' },
    { date: new Date(), name: 'Neon', category: 'Category', status: 'Open' },
];

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements AfterViewInit {

    displayedColumns: string[] = ['date', 'name', 'category', 'status'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        let users = Array.from({ length: 100 }, (_, k) => this.createNewEntity(k + 1));

        users = users.sort((a, b) => b.date.getTime() - a.date.getTime())

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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

    createNewEntity = (index: number): Entity => {
        return {
            date: this.randomDate(new Date(2022, 9, 1), new Date()),
            name: 'Name ' + index + 1,
            category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
            status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
        };
    }


    randomDate = (start: Date, end: Date) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    timeSince = (date: any) => {
        return formatDistanceToNow(date, { includeSeconds: true }) + ' ago';
    }

}

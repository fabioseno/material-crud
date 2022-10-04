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
import { LoaderService } from 'src/app/_shared/services/loader/loader.service';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent {

    displayedColumns: string[] = ['date', 'name', 'category', 'status'];
    dataSource = new MatTableDataSource([]);

    breadcrumbPaths: BreadcrumbPath[] = [{
        label: 'Dashboard',
        path: '/home'
    },
    {
        label: 'Entity list',
        disabled: true
    }];

    private paginator: MatPaginator;
    @ViewChild('entityPaginator') set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    private sort: MatSort;
    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        if (this.paginator && this.sort && !this.datasourceSet) {
            this.datasourceSet = true;
            this.applyFilter('');
        }
    }

    isLoading = false;
    private datasourceSet = false;

    constructor(private readonly router: Router, private readonly loaderService: LoaderService) {
    }

    ngOnInit() {
        this.listEntities();
    }

    add() {
        this.router.navigate(['/entities/new']);
    }

    applyFilter(filterValue: string) {
        // const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    listEntities() {
        let users = Array.from({ length: 20 }, (_, k) => this.createNewEntity(k + 1));

        users = users.sort((a, b) => b.date.getTime() - a.date.getTime())

        this.isLoading = true;
        this.loaderService.show();
        // setTimeout(() => {
            this.dataSource.data = users;
            // this.setDataSourceAttributes();
            this.loaderService.hide();
            this.isLoading = false;
        // }, 3000);
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

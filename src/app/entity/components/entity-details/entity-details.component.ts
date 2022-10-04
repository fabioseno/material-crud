import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbPath } from 'src/app/_shared/components/breadcrumb/breadcrumb.component';
import { DialogService } from 'src/app/_shared/services/dialog/dialog.service';
import { ToasterService } from 'src/app/_shared/services/toaster/toaster.service';

@Component({
    selector: 'app-entity-details',
    templateUrl: './entity-details.component.html',
    styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {

    public buttons = {
        create: { isLoading: false },
        update: { isLoading: false },
        delete: { isLoading: false }
    }

    public breadcrumbPaths: BreadcrumbPath[] = [{
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

    public entityId: string;

    get isNew() {
        return (this.entityId === 'new');
    }

    constructor(private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly dialog: DialogService,
        private readonly toaster: ToasterService) { }


    ngOnInit(): void {
        this.loadEntity();
    }

    private loadEntity() {
        this.entityId = this.route.snapshot.params['entityId'];
    }

    async create() {
        this.buttons.create.isLoading = true;
        setTimeout(() => {
            this.buttons.create.isLoading = false;
            this.toaster.show('Entity successfully created');
            this.goBack();
        }, 2000);
    }

    async update() {
        this.buttons.update.isLoading = true;

        setTimeout(() => {
            this.buttons.update.isLoading = false;
            this.toaster.show('Entity successfully updated');
            this.goBack();
        }, 3000);
    }

    async delete() {
        this.buttons.delete.isLoading = true;

        if (await this.dialog.showConfirm('entity', 'delete')) {
            setTimeout(() => {
                this.buttons.delete.isLoading = false;
                this.toaster.show('Entity successfully deleted');
                this.goBack();
            }, 4000);

        }
    }

    goBack() {
        this.router.navigate(['/entities']);
    }
}

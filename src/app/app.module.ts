import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EntityListComponent } from './entity/components/entity-list/entity-list.component';
import { EntityDetailsComponent } from './entity/components/entity-details/entity-details.component';
import { BreadcrumbComponent } from './_shared/components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './_shared/components/page-header/page-header.component';


// TODO: These imports can be moved to a shared/core module
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from './_shared/services/loader.service';


@NgModule({
    declarations: [
        AppComponent,
        EntityListComponent,
        EntityDetailsComponent,
        BreadcrumbComponent,
        PageHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        DragDropModule,
        MatRippleModule,
        MatChipsModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressBarModule
    ],
    providers: [LoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }

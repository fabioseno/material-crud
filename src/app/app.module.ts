import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';


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

@NgModule({
    declarations: [
        AppComponent,
        EntityListComponent,
        EntityDetailsComponent
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
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        DragDropModule,
        MatRippleModule,
        MatChipsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityListComponent } from './entity-list/entity-list.component';

const routes: Routes = [
    { path: 'entities', component: EntityListComponent },
    { path: 'entities/:entityId', component: EntityDetailsComponent },
    { path: '**', component: EntityListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

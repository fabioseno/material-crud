import { Component } from '@angular/core';
import { LoaderService } from './_shared/services/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public displayLoader: boolean;

    constructor(private readonly loaderService: LoaderService) {
        this.loaderService.changeEmitted.subscribe(visible => this.displayLoader = visible);
    }
    title = 'material-crud';


}

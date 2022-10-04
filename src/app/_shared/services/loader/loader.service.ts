import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private emitChangeSource = new BehaviorSubject<boolean>(false);
    public changeEmitted = this.emitChangeSource.asObservable();

    constructor() { }

    show() {
        this.emitChangeSource.next(true);
    }

    hide() {
        this.emitChangeSource.next(false);
    }
}

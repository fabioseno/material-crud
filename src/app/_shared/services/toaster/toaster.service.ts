import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class ToasterService {

    private seconds = 5 * 1000;

    constructor(private readonly snackBar: MatSnackBar) { }

    show(message: string) {
        this.snackBar.open(message, '', { panelClass: 'snack-success', duration: this.seconds });
    }
}

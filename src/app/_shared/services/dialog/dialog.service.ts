import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { Messages } from '../../data/messages';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) { }

    showConfirm(groupName: string, action: string) {
        const config = Messages[groupName][action];

        config.okButton = config.okButton || {};
        config.cancelButton = config.cancelButton || {};

        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '500px',
            data: {
                title: config.title,
                message: config.message,
                okButton: {
                    text: config.okButton.text || 'Confirm',
                    color: config.okButton.color || 'primary'
                },
                cancelButton: {
                    text: config.cancelButton.text || 'Cancel',
                    color: config.cancelButton.color || 'primary'
                }
            }
        });

        return new Promise((resolve, reject) => {
            dialogRef.afterClosed().subscribe(confirmed => {
                console.log(confirmed);
                return resolve(confirmed);
            })
        });
    }
}

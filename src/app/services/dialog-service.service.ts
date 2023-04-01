import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
    openDialog(message: string): any {
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: {
                message
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.isDialogOpen = false;
          });
        return dialogRef;
    }
}
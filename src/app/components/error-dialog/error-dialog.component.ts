import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {
  message: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ErrorDialogComponent>) {
    if (data) {
      this.message = data.message;
      
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onClose(): void {
    this.dialogRef.close(true);
  }
}

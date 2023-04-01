import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from "rxjs/operators";
import { DialogService } from './dialog-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {


  constructor(private dialogService: DialogService) {
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(!this.dialogService.isDialogOpen)this.dialogService.openDialog(error.error?.message);
        console.log(error);
        
        return throwError(() => error);
      }),
      finalize(() => {
       
      }
      )
    );
  }


}
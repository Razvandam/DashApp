import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBarService: MatSnackBar) {}

  openToast(message: string, action: string = 'Close') {
    this.snackBarService.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}

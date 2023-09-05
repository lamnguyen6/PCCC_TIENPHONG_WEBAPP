import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private readonly snackbar: MatSnackBar,
  ) { }

  copyToClipBoard(text: string) {
    navigator.clipboard.writeText(text);
  }
  snackBar(message: string, status: boolean = true) {
    this.snackbar.open(message, 'Đóng', { panelClass: status ? 'snack-success' : 'snack-error' });
  }
}

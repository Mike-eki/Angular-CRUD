import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShowMessageService {

  constructor(private _snackBar : MatSnackBar) { }

  showAMessage(msg : string) {
    this._snackBar.open(msg, '', {
      duration: 1700,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}

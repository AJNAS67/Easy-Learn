import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { SnackBarService } from 'src/app/snack-bar/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandle implements ErrorHandler {
  constructor(private _zone: NgZone, private _snackBar: SnackBarService) {}
  handleError(error: unknown): void {
    this._zone.run(() => {
      this._snackBar.popUpMessage('Error detected');
    });
    console.warn('Caught by Custom Error Handler', error);
  }
}

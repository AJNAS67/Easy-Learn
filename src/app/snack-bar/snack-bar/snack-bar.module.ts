import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from '../snack-bar.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule],
  providers: [SnackBarService],
})
export class SnackBarModule {}

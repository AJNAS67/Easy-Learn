import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { cartResponse } from 'src/app/interface/user.interface';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems!: cartResponse;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _userService: UserService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this._userService.getCartItems().subscribe((res: cartResponse) => {
      this.cartItems = res;
    });
  }
  removeCart(courseId: string) {
    this._userService.removeFromCart(courseId).subscribe((res) => {
      console.log(res, 'res');
      this.popUpMessage('course removed from cart !!');
    });
  }
  popUpMessage(message: string) {
    this._snackBar.open(`${message}`, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

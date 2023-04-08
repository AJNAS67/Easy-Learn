import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { EnrolledCourse, cartResponse } from 'src/app/interface/user.interface';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems!: cartResponse;
  public payPalConfig?: IPayPalConfig;
  details: any;
  showError!: any;
  showCancel!: any;
  showSuccess!: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _userService: UserService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.initializeCart();
    this.initConfig();
  }
  initializeCart() {
    this._userService.getCartItems().subscribe((res: cartResponse) => {
      this.cartItems = res;
      console.log(this.cartItems, 'items');
    });
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: `${environment.CLIENT_ID}`,
      createOrderOnClient: (data: any) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: `${this.cartItems.totalPrice}`,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: `${this.cartItems.totalPrice}`,
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: `${this.cartItems.totalPrice}`,
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        if (data.status == 'COMPLETED') {
          this._userService
            .checkout(this.cartItems)
            .subscribe((res: EnrolledCourse) => {
              if (res.paymentStatus) {
                this.popUpMessage(
                  'payment successfully complected! check your course on Enrolled Courses'
                );
                this.initializeCart();
              } else {
                this.popUpMessage('Sorry ! something is wrong!!');
                this.initializeCart();
              }
            });
        }
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.popUpMessage('Sorry ! something is wrong!!');

        this.showCancel = true;
      },
      onError: (err) => {
        console.log('OnError', err);
        this.showError = true;
      },
    };
  }

  checkCartLength() {
    if (this.cartItems?.course.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  getAllCartItem() {
    this._userService.getCartItems().subscribe((res: cartResponse) => {
      this.cartItems = res;
    });
  }
  removeCart(courseId: string) {
    this._userService.removeFromCart(courseId).subscribe((res) => {
      this.popUpMessage('course removed from cart !!');
      this.getAllCartItem();
    });
  }
  popUpMessage(message: string) {
    this._snackBar.open(`${message}`, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

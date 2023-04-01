import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { cartResponse } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems!: cartResponse;
  constructor(private _userService: UserService) {}
  ngOnInit(): void {
    this._userService.getCartItems().subscribe((res: cartResponse) => {
      this.cartItems = res;
    });
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItem = [
    { coursename: 'Angular Full course', price: 4000 },
    {
      coursename: 'javascript Advanced',
      price: 5000,
    },
    {
      coursename: 'Machine learning',
      price: 15000,
    },
  ];
}

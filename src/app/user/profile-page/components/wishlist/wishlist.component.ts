import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  cartItem = [
    { coursename: 'Angualar Full course', price: 4000 },
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

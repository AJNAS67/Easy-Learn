import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { wishlistResponse } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlistItems!: wishlistResponse;
  constructor(private _userService: UserService) {}
  ngOnInit(): void {
    this._userService.getWishlistItems().subscribe((res: wishlistResponse) => {
      this.wishlistItems = res;
      {
        console.log(res, 'wishlist res');
      }
    });
  }
 
  removeWishlist(courseId: string) {
    this._userService.removeFromWishlist(courseId).subscribe((res) => {
      console.log(res, 'res');
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { wishlistResponse } from 'src/app/interface/user.interface';

import { SnackBarService } from 'src/app/snack-bar/snack-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlistItems!: wishlistResponse;
  wishlistIemSubscription$!: Subscription;
  constructor(
    private _userService: UserService,
    private _snackBarService: SnackBarService
  ) {}
  ngOnDestroy(): void {
    this.wishlistIemSubscription$.unsubscribe();
  }
  ngOnInit(): void {
    this.getAllWishlistItem();
  }

  getAllWishlistItem() {
    this.wishlistIemSubscription$ = this._userService
      .getWishlistItems()
      .subscribe((res: wishlistResponse) => {
        this.wishlistItems = res;
      });
  }

  removeWishlist(courseId: string) {
    this._userService.removeFromWishlist(courseId).subscribe(() => {
      this._snackBarService.popUpMessage('course removed from your wishlist');
      this.getAllWishlistItem();
    });
  }

  checkCartLength() {
    if (this.wishlistItems?.course.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

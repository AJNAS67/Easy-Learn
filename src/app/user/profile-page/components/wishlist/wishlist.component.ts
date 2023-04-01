import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { wishlistResponse } from 'src/app/interface/user.interface';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  wishlistItems!: wishlistResponse;
  constructor(private _userService: UserService,private _snackBar: MatSnackBar) {}
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
      this._snackBar.open(`course removed from your wishlist`, 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });
  }
}

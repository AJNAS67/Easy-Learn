import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileDetailsComponent } from './add-profile-details/add-profile-details.component';
import { CartComponent } from './cart/cart.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { MentorCoursesComponent } from './mentor-courses/mentor-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,

    children: [
      { path: 'add-profile-details', component: AddProfileDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'enrolled-courses', component: EnrolledCoursesComponent },
      { path: 'mentor-courses', component: MentorCoursesComponent },
      { path: 'wishlist', component: WishlistComponent },
    ],
  },
  // { path: 'add-profile-details', component: AddProfileDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

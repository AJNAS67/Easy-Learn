import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileDetailsComponent } from './components/add-profile-details/add-profile-details.component';
import { CartComponent } from './components/cart/cart.component';
import { EnrolledCoursesComponent } from './components/enrolled-courses/enrolled-courses.component';
import { MentorCoursesComponent } from './components/mentor-courses/mentor-courses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

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

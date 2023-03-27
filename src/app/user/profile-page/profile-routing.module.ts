import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileDetailsComponent } from './add-profile-details/add-profile-details.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,

    children: [
      { path: 'add-profile-details', component: AddProfileDetailsComponent },
      {path:'cart',component:CartComponent}
    ],
  },
  // { path: 'add-profile-details', component: AddProfileDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

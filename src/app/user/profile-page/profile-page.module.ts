import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddProfileDetailsComponent } from './components/add-profile-details/add-profile-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CartComponent } from './components/cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { EnrolledCoursesComponent } from './components/enrolled-courses/enrolled-courses.component';
import { MentorCoursesComponent } from './components/mentor-courses/mentor-courses.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarModule } from 'src/app/snack-bar/snack-bar/snack-bar.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ProfileComponent,
    AddProfileDetailsComponent,
    CartComponent,
    EnrolledCoursesComponent,
    MentorCoursesComponent,
    WishlistComponent,
    AddCourseComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    SnackBarModule,
    MatCheckboxModule,
  ],
})
export class ProfilePageModule {}

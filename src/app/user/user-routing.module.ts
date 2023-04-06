import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { CourseDetailsComponent } from './home-page/course-details/course-details.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile-page/components/profile/profile.component';
import { CategoryFilterComponent } from './home-page/category-filter/category-filter.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'course-details/:courseId', component: CourseDetailsComponent },
      { path: 'filter-category/:categoryId', component: CategoryFilterComponent },
      {
        path: 'profile',
        component: ProfileComponent,

        loadChildren: () =>
          import('./profile-page/profile-page.module').then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,

    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'about-us', component: AboutUsComponent },
      {
        path: 'profile',
        loadChildren: () => import('./profile-page/profile-page.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseRoutingModule {}

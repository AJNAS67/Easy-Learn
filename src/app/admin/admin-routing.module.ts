import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [{ path: 'view-user', component: ViewUserComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

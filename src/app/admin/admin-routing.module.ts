import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-user', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view-user', component: ViewUserComponent },
  { path: 'view-course', component: ViewCourseComponent },
  { path: 'sales-report', component: SalesReportComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

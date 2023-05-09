import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AdminService } from './services/admin.service';
import { UsersDataSource } from './services/users.dataSource';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopWidgetsComponent } from './components/dashboard/top-widgets/top-widgets.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AdminComponent,
    ViewUserComponent,
    ViewCourseComponent,
    DashboardComponent,
    TopWidgetsComponent,
    SalesReportComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AdminService, UsersDataSource],
})
export class AdminModule {}

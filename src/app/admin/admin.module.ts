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

@NgModule({
  declarations: [AdminComponent, ViewUserComponent, ViewCourseComponent],
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
  ],
  providers: [AdminService, UsersDataSource],
})
export class AdminModule {}

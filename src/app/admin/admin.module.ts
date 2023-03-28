import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ViewCourseComponent } from './view-course/view-course.component';

@NgModule({
  declarations: [AdminComponent, ViewUserComponent, ViewCourseComponent, ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class AdminModule {}

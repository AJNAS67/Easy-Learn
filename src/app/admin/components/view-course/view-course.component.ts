import { Component } from '@angular/core';
// import { UsersDataSource } from '../../services/users.dataSource';
import { CourseDataSource } from '../../services/courses.dataSource';
import { AdminService } from '../../services/admin.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent {
  
  displayedColumns: string[] = ['id', 'Course', 'Mentor'];
  dataSource = new CourseDataSource(this._adminService);
  constructor(private _adminService: AdminService) {}

  ngOnInit(): void {
    this.dataSource.loadCourse({ active: '_id', direction: 'asc' });
  }

  sortUsers(sort: Sort): void {
    this.dataSource.loadCourse(sort);
  }
}

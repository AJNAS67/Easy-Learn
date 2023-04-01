import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Element } from 'src/app/interface/admin.interface';
import { Sort } from '@angular/material/sort';
import { UsersDataSource } from '../../services/users.dataSource';
import { AdminService } from '../../services/admin.service';



@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent  implements OnInit {


  displayedColumns: string[] = ['id', 'firstName', 'phoneNumber'];
  dataSource = new UsersDataSource(this._adminService);

  constructor(private _adminService: AdminService) {}

  ngOnInit(): void {
    this.dataSource.loadUsers({ active: '_id', direction: 'asc' });
  }

  sortUsers(sort: Sort): void {
    this.dataSource.loadUsers(sort);
  }

}

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Sort } from '@angular/material/sort';
import { UsersDataSource } from '../../services/users.dataSource';
import { AdminService } from '../../services/admin.service';
import { Subscription } from 'rxjs';
import { getUserDetailsResp } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit, OnDestroy {
  isAdmin: boolean = true;
  changeAdminStatusSubscription$!: Subscription;
  changeBlockStatusSubscription$!: Subscription;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'phoneNumber',
    'isBlock',
    'isAdmin',
  ];
  dataSource = new UsersDataSource(this._adminService);

  constructor(private _adminService: AdminService) {}

  ngOnInit(): void {
    this.dataSource.loadUsers({ active: '_id', direction: 'asc' });
  }
  changed(admin: boolean, user: getUserDetailsResp) {
    this.changeAdminStatusSubscription$ = this._adminService
      .changeAdminStatus(admin, user._id)
      .subscribe((res) => {
        
      });
  }
  blockUser(block: boolean, user: getUserDetailsResp) {
    this.changeBlockStatusSubscription$ = this._adminService
      .changeBlockStatus(block, user._id)
      .subscribe((res) => {
      });
  }
  sortUsers(sort: Sort): void {
    this.dataSource.loadUsers(sort);
  }
  ngOnDestroy(): void {
    this.changeAdminStatusSubscription$?.unsubscribe();
    this.changeAdminStatusSubscription$.unsubscribe();
  }
}

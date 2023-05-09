import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/user/home-page/service/dashboard.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss'],
})
export class TopWidgetsComponent implements OnInit {
  numberOfUser$!: Observable<number>;
  numberOfMentor$!: Observable<number>;
  numberOfCourse$!: Observable<number>;
  totalPrice$!: Observable<number>;
  constructor(private _dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.getNumberOfUser();
    this.getNumberOfStudent();
    this.getNumberOfCourse();
    this.getTotalPrice();
  }
  getNumberOfUser() {
    this.numberOfUser$ = this._dashboardService.getNumberOfUsers();
  }
  getNumberOfStudent() {
    this.numberOfMentor$ = this._dashboardService.getNumberOfMentor();
  }
  getNumberOfCourse() {
    this.numberOfCourse$ = this._dashboardService.numberOfCourse();
  }
  getTotalPrice() {
    this.totalPrice$ = this._dashboardService.getTotalPrice();
  }
}

import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';
import { UserService } from '../../service/user.service';
import { getUserDetailsResp } from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit ,OnDestroy{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  baseUrl = environment.apiUrl;
  profile_pic!: string;
  useName!: string;
  email!: string;
  userDetailsSubscription$!:Subscription

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private _userService: UserService
  ) {}
  

  ngOnInit(): void {
    this.userDetails();
  }
  userDetails() {
    this.userDetailsSubscription$=this._userService.getUserDetails().subscribe((data: getUserDetailsResp) => {
      this.profile_pic = data.profile_pic;
      this.useName = data.firstName;
      this.email = data.email;
    });
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  upload(event: any) {
    console.log(event, 'files');

    const file = event.target?.files[0];
    console.log(file, 'file');
    const form_data = new FormData();
    form_data.append('file', file);
    this._userService.uploadProfilePick(form_data).subscribe(
      (res) => {
        console.log(res, 'image uploaded res');
        this.userDetails()
        this.profile_pic = res.profile_pic;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.userDetailsSubscription$.unsubscribe()
  }
}

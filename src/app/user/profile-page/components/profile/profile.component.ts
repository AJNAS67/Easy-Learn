import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';
import { UserService } from '../../service/user.service';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit{


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  baseUrl = environment.apiUrl;
  profilepic: any = null;


  

  constructor(private observer: BreakpointObserver, private router: Router,private _userService:UserService) {}
  
  ngOnInit(): void {
    this._userService.getUserDetails().subscribe((data: any) => {
      console.log(data, '_pic');
      this.profilepic = data.profile_pic;
    });

    
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res:any) => {
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

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName!: string;
  ngOnInit(): void {}
  userLogened: boolean = true;
  isOpen: boolean = false;
  isNaveOpen: boolean = false;

  clickNav() {
    if (this.isNaveOpen === true) {
      this.isNaveOpen = false;
    } else {
      this.isNaveOpen = true;
    }
  }
  logout() {
    localStorage.removeItem('access_token');
  }
  checkUser() {
    return localStorage.getItem('access_token');
  }
}

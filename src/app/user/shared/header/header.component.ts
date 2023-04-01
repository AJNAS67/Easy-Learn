import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName!: string;
  ngOnInit(): void {
    
  }
  userLogened: boolean = true;
  isOpen: boolean = false;
  isNaveOpen: boolean = false;
  // proclick() {
  //   if (this.isOpen === true) {
  //     this.isOpen = false;
  //     console.log(this.isOpen, 'is');
  //   } else {
  //     this.isOpen = true;
  //     console.log(this.isOpen, 'fghbjnkm,');
  //   }
  // }
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

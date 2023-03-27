import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { UseRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [UserComponent, HeaderComponent],
  imports: [CommonModule, UseRoutingModule, HomePageModule],
})
export class UserModule {}

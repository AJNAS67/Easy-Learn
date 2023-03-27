import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { UseRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomePageModule } from './home-page/home-page.module';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [UserComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, UseRoutingModule, HomePageModule],
})
export class UserModule {}

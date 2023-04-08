import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { UseRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomePageModule } from './home-page/home-page.module';
import { FooterComponent } from './shared/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [UserComponent, HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [CommonModule, UseRoutingModule, MatMenuModule, HomePageModule],
})
export class UserModule {}

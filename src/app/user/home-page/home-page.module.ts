import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterRoutingModule } from './user-register-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './service/snack-bar.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AdminLoginComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [SnackBarService],
})
export class UserRegisterModule {}

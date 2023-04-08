import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SnackBarService } from '../service/snack-bar.service';
import { LoginResponse } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.authService.loginUser(this.myForm.value).subscribe(
      (res:LoginResponse) => {
        if (res.status && res.admin) {
          this._snackBarService.popUpMessage('Login successfully');
          localStorage.setItem('admin_token', res.access_token);
          this.router.navigate(['/admin']);
        }
      },
      (error) => {
        this._snackBarService.popUpMessage('Email or password Incorrect');
      }
    );
  }
  directToRegisterPage() {
    this, this.router.navigate(['user/register']);
  }
  
}

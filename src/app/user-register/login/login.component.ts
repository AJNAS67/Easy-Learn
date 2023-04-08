import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SnackBarService } from '../service/snack-bar.service';
import { LoginResponse } from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  loginDataSubscription!: Subscription;

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
    this.loginDataSubscription = this.authService
      .loginUser(this.myForm.value)
      .subscribe(
        (res: LoginResponse) => {
          if (res.status && res.admin == false) {
            localStorage.setItem('access_token', res.access_token);
            this._snackBarService.popUpMessage('Login successfully !!');
            this.router.navigate(['/']);
          }
        },
        (error) => {
          this._snackBarService.popUpMessage('email or password incorrect');
          console.log(error.message);
        }
      );
  }
  directToRegisterPage() {
    this.router.navigate(['user/register']);
  }
}

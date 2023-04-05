import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SnackBarService } from '../service/snack-bar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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
    console.log(this.myForm.value, 'my form');
    this.authService.loginUser(this.myForm.value).subscribe(
      (res) => {
        console.log(res, 'res');

        if (res.status && res.admin == false) {
          localStorage.setItem('access_token', res.access_token);
          this._snackBarService.popUpMessage("Login successfully !!");
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
    this, this.router.navigate(['user/register']);
  }
  checkValid() {
    this.authService.check().subscribe((res: any) => {
      console.log(res, 'res');
    });
  }
}

import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  myForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.authService.loginUser(this.myForm.value).subscribe(
      (res) => {
        console.log(res, 'response');

        if (res.status && res.admin) {
          localStorage.setItem('admin_token', res.access_token);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        // Swal.fire('Hi', `${error.error.message}`, 'error');
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

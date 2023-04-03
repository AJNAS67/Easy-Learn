import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SnackBarService } from '../service/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myForm!: FormGroup;
  isEmailExist: boolean = false;

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBarService: SnackBarService
  ) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.myForm.value, 'my form');

    this.authService.registerUser(this.myForm.value).subscribe((res: any) => {
      console.log(res, 'resform resister component');
      if (res.isAdded) {
        this._snackBarService.popUpMessage(res.message);
        this.router.navigate(['user/login']);
      } else if (res.isAdded == false) {
        this.isEmailExist = true;
        this._snackBarService.popUpMessage(res.message);
      }
    });
  }
  directToLoginPage() {
    this.router.navigate(['user/login']);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { State, profileUpdate } from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-profile-details',
  templateUrl: './add-profile-details.component.html',
  styleUrls: ['./add-profile-details.component.scss'],
})
export class AddProfileDetailsComponent implements OnInit, OnDestroy {
  selectedValue!: string;
  selectedCar!: string;
  profileDetails!: profileUpdate;
  profileDetail!: profileUpdate;
  profileDetailSubscription$!: Subscription;
  UploadProfileDetailSubscription$!: Subscription;
  myForm!: FormGroup;
  submitForm() {
    throw new Error('Method not implemented.');
  }
  onLogin() {
    throw new Error('Method not implemented.');
  }
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pinCode: ['', [Validators.required]],
      phoneNumber: [, [Validators.required]],
      dateofBirth: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.profileDetailSubscription$ = this.userService
      .getProfileData()
      .subscribe((res: Array<profileUpdate>) => {
        console.log(res[0], 'responce profile detail');
        this.profileDetail = res[0];
      });
  }

  states: State[] = [
    { value: '1', viewValue: 'Andhra Pradesh' },
    { value: '2', viewValue: 'Arunachal Pradesh' },
    { value: '3', viewValue: 'Assam' },
    { value: '4', viewValue: 'Bihar' },
    { value: '5', viewValue: 'Chhattisgarh' },
    { value: '6', viewValue: 'Goa' },
    { value: '7', viewValue: 'Gujarat' },
    { value: '8', viewValue: 'Kerala' },
  ];
  onSubmit() {
    this.UploadProfileDetailSubscription$ = this.userService
      .uploadProfileDetails(this.myForm.value)
      .subscribe(
        (res) => {
          this._route
            .navigateByUrl('/add-user-details', { skipLocationChange: true })
            .then(() => {
              this._route.navigate(['profile']);
            });
        },

        (error) => {
          console.log('Post request failed', error);
        }
      );
  }
  ngOnDestroy(): void {
    this.UploadProfileDetailSubscription$?.unsubscribe();
    this.profileDetailSubscription$?.unsubscribe();
  }
}

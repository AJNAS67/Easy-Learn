import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State, profileUpdate } from 'src/app/interface/user.interface';
import { UserService } from '../../service/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/snack-bar/snack-bar.service';

@Component({
  selector: 'app-edit-profile-details',
  templateUrl: './edit-profile-details.component.html',
  styleUrls: ['./edit-profile-details.component.scss'],
})
export class EditProfileDetailsComponent implements OnInit, OnDestroy {
  myForm!: FormGroup;
  profileDetail!: profileUpdate;
  selectedValue!: string;

  profileDetailSubscription$!: Subscription;
  getProfileDataSubscription$!: Subscription;
  submitSubscription$!: Subscription;
  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _SnackBarService: SnackBarService
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

    this.getProfileDataSubscription$ = this._userService
      .getProfileData()
      .subscribe((res: Array<profileUpdate>) => {
        this.profileDetail = res[0];
        this.LoadEditData(res[0]);
      });
  }
  LoadEditData(profileDetail: profileUpdate) {
    this.myForm.patchValue({
      fullName: profileDetail.fullName,
      email: profileDetail.email,
      pinCode: profileDetail.pinCode,
      phoneNumber: profileDetail.phoneNumber,
      dateofBirth: profileDetail.dateofBirth,
      state: profileDetail.state,
      district: profileDetail.district,
      city: profileDetail.city,
      address: profileDetail.address,
    });
  }
  getProfileData() {
    this.profileDetailSubscription$ = this._userService
      .getProfileData()
      .subscribe((res: Array<profileUpdate>) => {
        this.profileDetail = res[0];
        this.LoadEditData(res[0]);
      });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.submitSubscription$ = this._userService
      .updateProfileDetails(this.myForm.value)
      .subscribe((res) => {
        this._SnackBarService.popUpMessage('profile data updated successfully');
        this._router.navigateByUrl('profile/add-profile-details');
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
  ngOnDestroy(): void {
    this.profileDetailSubscription$?.unsubscribe();
    this.getProfileDataSubscription$?.unsubscribe();
    this.submitSubscription$?.unsubscribe();
  }
}

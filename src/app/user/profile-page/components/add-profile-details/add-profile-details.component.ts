import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-add-profile-details',
  templateUrl: './add-profile-details.component.html',
  styleUrls: ['./add-profile-details.component.scss']
})
export class AddProfileDetailsComponent  implements OnInit{


  selectedValue!: string;
  selectedCar!: string;
  profileDetails: any;
  profileDetail: any = null;

  myForm: any;
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
  ) {
    // this.mainService.getProfileData().subscribe((res) => {
    //   this.profileDetails = res;
    //   console.log(res, 'user_details');
    // });
  }
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

    this.userService.getProfileData().subscribe((res: any) => {
      console.log(res[0], 'responce profile detail');
      this.profileDetail = res[0];
    });
  }

  states: any = [
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
    console.log(this.myForm.value, 'my form');
    console.log(typeof this.myForm.value.dateofBirth, 'type');

    this.userService.uploadProfileDetails(this.myForm.value).subscribe(
      (res) => {
        console.log(res, 'res');
        // Swal.fire('Hi', `user details succesfully added`, 'success');
        this._route
          .navigateByUrl('/add-user-details', { skipLocationChange: true })
          .then(() => {
            this._route.navigate(['profile']);
          });
      },

      (error) => {
        console.log('Post request failed', error);
        // Swal.fire('Hi', `${error.error.message}`, 'error');
      }
    );
  }

}

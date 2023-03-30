import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  myForm!: FormGroup;
  lesForm!: FormGroup;
  selectedValue!: string;
  imageSrc!: string;
  item!: FormArray;
  constructor(private fb: FormBuilder, private _userService: UserService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      CourseName: ['', [Validators.required]],
      MentorName: ['', Validators.required],
      Category: ['', Validators.required],
      TotalHr: ['', Validators.required],
      CourseDescription: ['', Validators.required],
      ThumbnailImage: ['', Validators.required],
      VideoModule: this.fb.array([]),
    });
  }
  onSubmit() {
    console.log(this.myForm.value, 'my form');
    // this._userService.uploadCourse(this.myForm.value).subscribe((res) => {
    //   console.log(res, 'ressssssssssss');
    // });
  }

  get lessons() {
    return this.myForm.controls['VideoModule'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      video: ['test', Validators.required],
    });
    this.lessons.push(lessonForm);
    this.lesForm = lessonForm;
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  uploadvedio(event: any) {
    const videoFile = event.target?.files[0];
    console.log(videoFile, 'file');
    const form_data = new FormData();
    form_data.append('file', videoFile);
    this._userService.uploadCourseVideo(form_data).subscribe(
      (res) => {
        console.log(res, 'image uploaded res');

        this.lesForm.patchValue({ video: res.url });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // upload(event: any) {
  //   console.log(event, 'files');

  //   if (event.target.files && event.target.files.length) {
  //     console.log(event, 'files');

  //     const file = event.target?.files[0];
  //     console.log(file, 'file');
  //     const formdata = new FormData();
  //     formdata.append('file', file);
  //     console.log(formdata, 'formdata');

  //     this.myForm.patchValue({
  //       thumbnailImage: formdata,
  //     });
  //     // const reader = new FileReader();
  //     // const [file] = event.target.files;
  //     //
  //     // reader.readAsDataURL(file);

  //     // reader.onload = () => {
  //     //   this.imageSrc = reader.result as string;

  //     //   this.myForm.patchValue({
  //     //     thumbnailImage: reader.result,
  //     //   });
  //     // };
  //   }

  //   // const file = event.target?.files[0];
  //   // console.log(file, 'file');
  //   // const form_data = new FormData();
  //   // form_data.append('file', file);
  //   // console.log(form_data,'ahndkanj');
  // }
  upload(event: any) {
    const file = event.target?.files[0];
    console.log(file, 'file');
    const formdata = new FormData();
    formdata.append('file', file);
    this._userService.uploadProfilePick(formdata).subscribe(
      (res) => {
        console.log(res, 'image uploaded res');

        this.myForm.patchValue({
          ThumbnailImage: res.url,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  categories: any = [
    { value: 'Data Science & Business Analytics' },
    { value: 'AI & Machine Learning' },
    { value: 'Cyber Security' },
    { value: 'Cloud Computing' },
    { value: 'Software Development' },
    { value: 'Digital Marketing' },
  ];
}

// addNewRow() {
//   this.item = this.myForm.get('videos') as FormArray;
//   this.item.push(this.Genrow());
// }
// get deladdress() {
//   return this.myForm.get('videos') as FormArray;
// }

// Genrow(): FormGroup {
//   return new FormGroup({
//     video: new FormControl('', Validators.required),
//     title: new FormControl('', Validators.required),
//   });
// }

import { Component, Inject } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormArray,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      courseName: ['', [Validators.required]],
      category: ['', Validators.required],
      MentorName: ['', Validators.required],
      totalHr: ['', Validators.required],
      thumbnailImage: ['', Validators.required],
      courseDescription: ['', Validators.required],
      videoModule: this.fb.array([]),
    });
  }
  onSubmit() {
    console.log(this.myForm.value, 'my form');
  }

  get lessons() {
    return this.myForm.controls['videoModule'] as FormArray;
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
  upload(event: any) {
    console.log(event, 'files');

    if (event.target.files && event.target.files.length) {
      console.log(event, 'files');

      const file = event.target?.files[0];
      console.log(file, 'file');
      const formdata = new FormData();
      formdata.append('file', file);
      console.log(formdata, 'formdata');

      this.myForm.patchValue({
        thumbnailImage: formdata,
      });
      // const reader = new FileReader();
      // const [file] = event.target.files;
      // 
      // reader.readAsDataURL(file);

      // reader.onload = () => {
      //   this.imageSrc = reader.result as string;

      //   this.myForm.patchValue({
      //     thumbnailImage: reader.result,
      //   });
      // };
    }

    // const file = event.target?.files[0];
    // console.log(file, 'file');
    // const form_data = new FormData();
    // form_data.append('file', file);
    // console.log(form_data,'ahndkanj');
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

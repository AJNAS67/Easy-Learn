import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  Category,
  Common,
  CourseResponse,
} from 'src/app/interface/user.interface';
import { UserService } from '../../service/user.service';
import { HomePageService } from 'src/app/user/home-page/service/home-page.service';
import { AddCourseComponent } from '../add-course/add-course.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/snack-bar/snack-bar.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent {
  myForm!: FormGroup;
  lesForm!: FormGroup;
  selectedValue!: string;
  imageSrc!: string;
  isLoader!: boolean;
  item!: FormArray;
  Categories!: Array<Category>;
  categorySubscription!: Subscription;
  uploadCourseSubscription!: Subscription;
  uploadVideoSubscription$!: Subscription;
  uploadSubscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private _SnackBarService: SnackBarService,
    private _userService: UserService,
    private _homePageService: HomePageService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddCourseComponent>
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      CourseName: ['', [Validators.required]],
      MentorName: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      TotalHr: ['', [Validators.required, Validators.min(0)]],
      CourseDescription: ['', Validators.required],
      ThumbnailImage: [null],
      VideoModule: this.fb.array([]),
      Level: ['', Validators.required],
      Language: ['', Validators.required],
      Price: ['', [Validators.required, Validators.min(0)]],
      Popularity: [false],
      Trending: [false],
      Featured: [false],
      AI_and_ML: [false],
    });
    this.getCategories();
    if (this.editData) {
      this.myForm.patchValue({
        CourseName: this.editData.CourseName,
        MentorName: this.editData.MentorName,
        Category: this.editData.Category,
        TotalHr: this.editData.TotalHr,
        CourseDescription: this.editData.CourseDescription,
        ThumbnailImage: this.editData.ThumbnailImage,
        Level: this.editData.Level,
        Language: this.editData.Language,
        Price: this.editData.Price,
        Popularity: this.editData.Popularity,
        Trending: this.editData.Trending,
        Featured: this.editData.Featured,
        AI_and_ML: this.editData.AI_and_ML,
      });
    }
  }
  getCategories() {
    this.categorySubscription = this._homePageService
      .getAllCategory()
      .subscribe((res: Array<Category>) => {
        this.Categories = res;
      });
  }


  
onSubmit() {
  this.uploadCourseSubscription = this._userService
    .editCourse(this.myForm.value,this.editData._id)
    .subscribe({
      next: (res) => {
        this._SnackBarService.popUpMessage('Update course successfully');
        this.dialogRef.close('close');
      },
      error: () => {
        this._SnackBarService.popUpMessage('Error while updating course');
      },
    });
}

  get lessons() {
    return this.myForm.controls['VideoModule'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      video: ['99', Validators.required],
    });
    this.lessons.push(lessonForm);
    this.lesForm = lessonForm;
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  uploadVideo(event: any, index: number) {
    const videoFile = event.target?.files[0];
    const form_data = new FormData();
    form_data.append('file', videoFile);
    this.uploadVideoSubscription$ = this._userService
      .uploadCourseVideo(form_data)
      .subscribe(
        (res) => {
          const lessonForm = this.lessons.at(index) as FormGroup;
          lessonForm.patchValue({ video: res.url });
        },
        (error) => {
          console.log(error, 'upload video error');
        }
      );
  }

  upload(event: any) {
    const file = event.target?.files[0];
    const form_data = new FormData();
    form_data.append('file', file);
    this.uploadSubscription = this._userService
      .uploadThumbnail(form_data)
      .subscribe(
        (res) => {
          this.myForm.patchValue({
            ThumbnailImage: res.url,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  categories: Common[] = [
    { value: 'Data Science & Business Analytics' },
    { value: 'AI & Machine Learning' },
    { value: 'Cyber Security' },
    { value: 'Cloud Computing' },
    { value: 'Software Development' },
    { value: 'Digital Marketing' },
  ];
  levels: Common[] = [
    { value: 'Bigener' },
    { value: 'Intermediate' },
    { value: 'Advanced' },
    { value: 'All Levels' },
  ];
  Languages: Common[] = [
    { value: 'English' },
    { value: 'Malayalam' },
    { value: 'Hindi' },
    { value: 'Arabic' },
  ];

  ngOnDestroy(): void {
    this.categorySubscription?.unsubscribe();
    this.uploadCourseSubscription?.unsubscribe();
    this.uploadVideoSubscription$?.unsubscribe();
    this.uploadSubscription?.unsubscribe();
  }
}

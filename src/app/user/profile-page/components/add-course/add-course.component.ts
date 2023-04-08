import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import {
  Category,
  Common,
  CourseResponse,
} from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';
import { HomePageService } from 'src/app/user/home-page/service/home-page.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit, OnDestroy {
  myForm!: FormGroup;
  lesForm!: FormGroup;
  selectedValue!: string;
  imageSrc!: string;
  item!: FormArray;
  Categories!: Array<Category>;
  categorySubscription!: Subscription;
  uploadCourseSubscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private _homePageService: HomePageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      CourseName: ['', [Validators.required]],
      MentorName: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      TotalHr: ['', [Validators.required, Validators.min(0)]],
      CourseDescription: ['', Validators.required],
      ThumbnailImage: ['', Validators.required],
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
      .uploadCourse(this.myForm.value)
      .subscribe((res: CourseResponse) => {});
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

  uploadVideo(event: any, index: number) {
    const videoFile = event.target?.files[0];
    const form_data = new FormData();
    form_data.append('file', videoFile);
    this._userService.uploadCourseVideo(form_data).subscribe(
      (res) => {
        const lessonForm = this.lessons.at(index) as FormGroup;
        lessonForm.patchValue({ video: res.url });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  upload(event: any) {
    const file = event.target?.files[0];
    console.log(file, 'file');
    const formdata = new FormData();
    formdata.append('file', file);
    this._userService.uploadThumbnail(formdata).subscribe(
      (res: any) => {
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
    this.categorySubscription.unsubscribe();
    this.uploadCourseSubscription.unsubscribe();
  }
}

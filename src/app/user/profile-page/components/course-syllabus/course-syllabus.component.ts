import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseResponse } from 'src/app/interface/user.interface';
import { HomePageService } from 'src/app/user/home-page/service/home-page.service';

@Component({
  selector: 'app-course-syllabus',
  templateUrl: './course-syllabus.component.html',
  styleUrls: ['./course-syllabus.component.scss'],
})
export class CourseSyllabusComponent implements OnInit, OnDestroy {
  courseId = '';
  course!: CourseResponse;
  videoTitle: string | undefined;
  videoUrl: string | undefined;
  showFiller = false;
  courseDetailsFetchSubscription$!: Subscription;
  courseIdSubscription$!: Subscription;
  constructor(
    private _homeService: HomePageService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseIdSubscription$ = this._activatedRoute.params.subscribe(
      (params) => {
        this.courseId = params['courseId'];
      }
    );

    this.courseDetailsFetchSubscription$ = this._homeService
      .fetchCourseDetails(this.courseId)
      .subscribe((data) => {
        this.course = data;
        this.videoUrl = data.VideoModule[0].video;
        this.videoTitle = data.VideoModule[0].title;
      });
  }

  passVideo(module: any) {
    this.videoTitle = module.title;
    this.videoUrl = module.video;
  }
  ngOnDestroy(): void {
    this.courseDetailsFetchSubscription$.unsubscribe();
    this.courseIdSubscription$?.unsubscribe();
  }
}

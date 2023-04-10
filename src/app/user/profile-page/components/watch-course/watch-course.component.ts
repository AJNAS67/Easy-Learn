import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-course',
  templateUrl: './watch-course.component.html',
  styleUrls: ['./watch-course.component.scss'],
})
export class WatchCourseComponent implements OnInit {
  @Input() title: any;

  ngOnInit(): void {
    console.log(this.title, 'tile');
  }
}

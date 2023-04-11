import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-watch-course',
  templateUrl: './watch-course.component.html',
  styleUrls: ['./watch-course.component.scss'],
})
export class WatchCourseComponent implements OnInit, OnChanges {
  @Input() title: string | undefined;
  @Input() videoUrl: string | undefined;
  isLoading: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    this.videoUrl = undefined;
    setTimeout(() => {
      this.videoUrl = changes['videoUrl'].currentValue;
      this.isLoading = false;
    }, 3000);
  }

  ngOnInit(): void {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-course-syllabus',
  templateUrl: './course-syllabus.component.html',
  styleUrls: ['./course-syllabus.component.scss'],
})
export class CourseSyllabusComponent {
  videoTitle: string | undefined;
  showFiller = false;
  passVideo() {
    this.videoTitle = 'Ajnas';
  }
}

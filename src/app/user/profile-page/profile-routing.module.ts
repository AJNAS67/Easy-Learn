import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileDetailsComponent } from './components/add-profile-details/add-profile-details.component';
import { CartComponent } from './components/cart/cart.component';
import { EnrolledCoursesComponent } from './components/enrolled-courses/enrolled-courses.component';
import { MentorCoursesComponent } from './components/mentor-courses/mentor-courses.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CourseSyllabusComponent } from './components/course-syllabus/course-syllabus.component';
import { ChatComponent } from './components/chat-application/chat/chat.component';
import { ChatNavComponent } from './components/chat-application/chat-nav/chat-nav.component';
import { MentorChatComponent } from './components/chat-application/mentor-chat/mentor-chat.component';
import { StudentChatComponent } from './components/chat-application/student-chat/student-chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-profile-details', pathMatch: 'full' },
  { path: 'add-profile-details', component: AddProfileDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'enrolled-courses', component: EnrolledCoursesComponent },
  { path: 'mentor-courses', component: MentorCoursesComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'course/:courseId', component: CourseSyllabusComponent },
  { path: 'mentor_chat', component: MentorChatComponent },
  { path: 'student_chat', component: StudentChatComponent },
  { path: 'chat', component: ChatNavComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

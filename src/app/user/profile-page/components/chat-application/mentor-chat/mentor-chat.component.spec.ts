import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorChatComponent } from './mentor-chat.component';

describe('MentorChatComponent', () => {
  let component: MentorChatComponent;
  let fixture: ComponentFixture<MentorChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

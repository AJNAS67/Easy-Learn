import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileDetailsComponent } from './edit-profile-details.component';

describe('EditProfileDetailsComponent', () => {
  let component: EditProfileDetailsComponent;
  let fixture: ComponentFixture<EditProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

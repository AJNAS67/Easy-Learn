import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileDetailsComponent } from './add-profile-details.component';

describe('AddProfileDetailsComponent', () => {
  let component: AddProfileDetailsComponent;
  let fixture: ComponentFixture<AddProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

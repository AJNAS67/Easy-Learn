import { TestBed } from '@angular/core/testing';
import { CustomErrorHandle } from './custom-error-handle.service';


describe('CustomErrorHandleService', () => {
  let service: CustomErrorHandle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomErrorHandle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

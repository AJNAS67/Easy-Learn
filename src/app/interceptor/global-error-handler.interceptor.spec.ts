import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandlerInterceptor } from './global-error-handler.interceptor';

describe('GlobalErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalErrorHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalErrorHandlerInterceptor = TestBed.inject(GlobalErrorHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SpinnerHandlerService } from './spinner-handler.service';

describe('SpinnerHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinnerHandlerService = TestBed.get(SpinnerHandlerService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EsperaService } from './espera.service';

describe('EsperaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsperaService = TestBed.get(EsperaService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SmartAudioService } from './smart-audio.service';

describe('SmartAudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartAudioService = TestBed.get(SmartAudioService);
    expect(service).toBeTruthy();
  });
});

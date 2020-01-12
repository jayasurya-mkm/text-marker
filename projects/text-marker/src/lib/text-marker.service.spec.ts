import { TestBed } from '@angular/core/testing';

import { TextMarkerService } from './text-marker.service';

describe('TextMarkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextMarkerService = TestBed.get(TextMarkerService);
    expect(service).toBeTruthy();
  });
});

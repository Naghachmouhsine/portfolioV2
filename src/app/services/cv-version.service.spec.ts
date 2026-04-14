import { TestBed } from '@angular/core/testing';

import { CvVersionService } from './cv-version.service';

describe('CvVersionService', () => {
  let service: CvVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

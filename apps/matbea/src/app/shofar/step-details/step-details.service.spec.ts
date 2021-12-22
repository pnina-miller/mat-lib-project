import { TestBed } from '@angular/core/testing';

import { StepDetailsService } from './step-details.service';

describe('StepDetailsService', () => {
  let service: StepDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

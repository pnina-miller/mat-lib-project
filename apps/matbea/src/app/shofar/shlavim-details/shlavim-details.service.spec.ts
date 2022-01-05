import { TestBed } from '@angular/core/testing';

import { ShlavimDetailsService } from './shlavim-details.service';

describe('ShlavimDetailsService', () => {
  let service: ShlavimDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShlavimDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

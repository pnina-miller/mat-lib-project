import { TestBed } from '@angular/core/testing';

import { ShlavimService } from './shlavim.service';

describe('ShlavimService', () => {
  let service: ShlavimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShlavimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

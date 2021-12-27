import { TestBed } from '@angular/core/testing';

import { Seb7aService } from './seb7a.service';

describe('Seb7aService', () => {
  let service: Seb7aService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seb7aService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

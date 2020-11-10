import { TestBed } from '@angular/core/testing';

import { CanDeavtivateGuardService } from './can-deavtivate-guard.service';

describe('CanDeavtivateGuardService', () => {
  let service: CanDeavtivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeavtivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PhraseDetailsResolveService } from './phrase-details-resolve.service';

describe('PhraseDetailsResolveService', () => {
  let service: PhraseDetailsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhraseDetailsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

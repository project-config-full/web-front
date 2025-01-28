import { TestBed } from '@angular/core/testing';

import { PredeService } from './prede.service';

describe('PredeService', () => {
  let service: PredeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

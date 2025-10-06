import { TestBed } from '@angular/core/testing';

import { ChangeAnimationsService } from './change-animations-service';

describe('ChangeAnimationsService', () => {
  let service: ChangeAnimationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeAnimationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

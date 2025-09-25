import { TestBed } from '@angular/core/testing';

import { ChangeConfig } from './change-config';

describe('ChangeConfig', () => {
  let service: ChangeConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

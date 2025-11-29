import { TestBed } from '@angular/core/testing';

import { ChangeSideANConfig } from './change-side-anconfig';

describe('ChangeSideANConfig', () => {
  let service: ChangeSideANConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSideANConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

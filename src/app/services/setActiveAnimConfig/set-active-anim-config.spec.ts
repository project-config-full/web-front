import { TestBed } from '@angular/core/testing';

import { SetActiveAnimConfig } from './set-active-anim-config';

describe('SetActiveAnimConfig', () => {
  let service: SetActiveAnimConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetActiveAnimConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

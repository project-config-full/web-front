import { TestBed } from '@angular/core/testing';

import { ChangeActiveSettingSide } from './change-active-setting-side';

describe('ChangeActiveSettingSide', () => {
  let service: ChangeActiveSettingSide;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeActiveSettingSide);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

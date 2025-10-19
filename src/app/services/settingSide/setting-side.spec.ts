import { TestBed } from '@angular/core/testing';

import { SettingSide } from './setting-side';

describe('SettingSide', () => {
  let service: SettingSide;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingSide);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

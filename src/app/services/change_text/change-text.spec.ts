import { TestBed } from '@angular/core/testing';

import { ChangeText } from './change-text';

describe('ChangeText', () => {
  let service: ChangeText;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeText);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

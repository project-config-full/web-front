import { TestBed } from '@angular/core/testing';

import { ChangeColor } from './change-color';

describe('ChangeColor', () => {
  let service: ChangeColor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeColor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

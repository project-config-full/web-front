import { TestBed } from '@angular/core/testing';

import { ChangeAnimationText } from './change-animation-text';

describe('ChangeAnimationText', () => {
  let service: ChangeAnimationText;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeAnimationText);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

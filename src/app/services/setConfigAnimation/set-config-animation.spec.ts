import { TestBed } from '@angular/core/testing';

import { SetConfigAnimation } from './set-config-animation';

describe('SetConfigAnimation', () => {
  let service: SetConfigAnimation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetConfigAnimation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

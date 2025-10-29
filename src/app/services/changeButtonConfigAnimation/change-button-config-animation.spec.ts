import { TestBed } from '@angular/core/testing';

import { ChangeButtonConfigAnimation } from './change-button-config-animation';

describe('ChangeButtonConfigAnimation', () => {
  let service: ChangeButtonConfigAnimation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeButtonConfigAnimation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

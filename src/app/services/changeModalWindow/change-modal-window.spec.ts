import { TestBed } from '@angular/core/testing';

import { ChangeModalWindow } from './change-modal-window';

describe('ChangeModalWindow', () => {
  let service: ChangeModalWindow;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeModalWindow);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

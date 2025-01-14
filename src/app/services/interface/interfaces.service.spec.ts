import { TestBed } from '@angular/core/testing';

import { InterfacesService } from './interfaces.service';

describe('InterfacesService', () => {
  let service: InterfacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

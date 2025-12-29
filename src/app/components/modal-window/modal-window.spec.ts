import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindow } from './modal-window';

describe('ModalWindow', () => {
  let component: ModalWindow;
  let fixture: ComponentFixture<ModalWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

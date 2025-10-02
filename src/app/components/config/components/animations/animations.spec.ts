import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations } from './animations';

describe('Animations', () => {
  let component: Animations;
  let fixture: ComponentFixture<Animations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

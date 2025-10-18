import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSide } from './settings-side';

describe('SettingsSide', () => {
  let component: SettingsSide;
  let fixture: ComponentFixture<SettingsSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsSide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

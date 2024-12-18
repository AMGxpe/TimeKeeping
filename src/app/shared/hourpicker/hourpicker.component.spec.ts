import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourpickerComponent } from './hourpicker.component';

describe('HourpickerComponent', () => {
  let component: HourpickerComponent;
  let fixture: ComponentFixture<HourpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourpickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountpickerComponent } from './countpicker.component';

describe('CountpickerComponent', () => {
  let component: CountpickerComponent;
  let fixture: ComponentFixture<CountpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountpickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

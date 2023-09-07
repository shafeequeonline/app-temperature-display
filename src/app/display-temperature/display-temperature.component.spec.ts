import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTemperatureComponent } from './display-temperature.component';

describe('DisplayTemperatureComponent', () => {
  let component: DisplayTemperatureComponent;
  let fixture: ComponentFixture<DisplayTemperatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTemperatureComponent]
    });
    fixture = TestBed.createComponent(DisplayTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

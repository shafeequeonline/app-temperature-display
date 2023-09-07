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

  it('should correctly calculate rotation for target temperature', () => {
    component.minTemperature = 0;
    component.maxTemperature = 33;
    component.targetTemperature = 25;
  
    const expectedRotation = 'rotate(234.848deg)';
  
    fixture.detectChanges();
    const targetLine = fixture.nativeElement.querySelector('.temperature__line');
    expect(targetLine.style.transform).toBe(expectedRotation);
  });
  
});

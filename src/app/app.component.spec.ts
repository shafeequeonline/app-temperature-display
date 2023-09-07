import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DisplayTemperatureComponent } from './display-temperature/display-temperature.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DisplayTemperatureComponent], // Include your component in declarations
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  
  it('should render the TemperatureDisplayComponent', () => {
    fixture.detectChanges();
    const temperatureDisplay = fixture.nativeElement.querySelector('app-display-temperature');
    expect(temperatureDisplay).toBeTruthy();
  });
  
});



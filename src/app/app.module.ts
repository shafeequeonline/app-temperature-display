import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayTemperatureComponent } from './display-temperature/display-temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTemperatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

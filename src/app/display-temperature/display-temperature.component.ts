import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-display-temperature',
  templateUrl: './display-temperature.component.html',
  styleUrls: ['./display-temperature.component.scss']
})
export class DisplayTemperatureComponent {
  /**
   * @input allow Angular to share data between the parent context and child directives or components 
   */
  @Input() minTemperature: number = 0;
  @Input() maxTemperature: number = 0;
  @Input() targetTemperature: number = 0;


  /**
   * Calculate the rotation of marker
   * usually it would be 360 since the width of the div which have markers is 50px reduce that to have correct position
   */
  calculateRotation(): string {
    const range = this.maxTemperature - this.minTemperature;
    return (
      'rotate(' +
      ((this.targetTemperature - this.minTemperature) / range) * 310 +
      'deg)'
    );
  }
}

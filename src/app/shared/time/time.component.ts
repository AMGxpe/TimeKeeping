import { Component, Input } from '@angular/core';
import { TimeKeep } from '../../dashboard/timekeeping/timekeeping.component';
import { HourpickerComponent } from '../hourpicker/hourpicker.component';

@Component({
  selector: 'app-time',
  imports: [
    HourpickerComponent
  ],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  @Input() time: TimeKeep | undefined

}

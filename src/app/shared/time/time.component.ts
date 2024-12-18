import { Component, Input } from '@angular/core';
import { TimeKeep } from '../../dashboard/timekeeping/timekeeping.component';
import { HourpickerComponent } from '../hourpicker/hourpicker.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-time',
  imports: [
    HourpickerComponent,
    DatePipe
  ],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  @Input() time: TimeKeep | undefined

}

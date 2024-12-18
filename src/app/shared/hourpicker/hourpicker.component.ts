import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountpickerComponent } from '../countpicker/countpicker.component';
import { TimeRecord, TimeRecordType } from '../../dashboard/timekeeping/timekeeping.component';

@Component({
  selector: 'app-hourpicker',
  imports: [
    CountpickerComponent
  ],
  templateUrl: './hourpicker.component.html',
  styleUrl: './hourpicker.component.css'
})
export class HourpickerComponent {
  @Input() timeRecord: TimeRecord = {
    hour: 17,
    minutes: 45,
    seconds: 0,
    type: TimeRecordType.IN_1
  }
  @Output() timeRecordEvent = new EventEmitter<TimeRecord>()


  hourValue(hour: number) {
    this.timeRecord.hour = hour
    this.timeRecordEvent.emit(this.timeRecord)
  }

  minutesChange(minutes: number) {
    this.timeRecord.minutes = minutes
    this.timeRecordEvent.emit(this.timeRecord)
  }

}

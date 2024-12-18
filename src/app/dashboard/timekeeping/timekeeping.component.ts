import { Component } from '@angular/core';
import { TimeComponent } from '../../shared/time/time.component';
import { CalendarComponent } from '../../shared/calendar/calendar.component';
import { ApiService } from '../../api.service';

export enum TimeRecordType {
  IN_1 = 'Entrada 1',
  OUT_1 = 'Salida 1',
  IN_2 = 'Entrada 2',
  OUT_2 = 'Salida 2'
}

export interface TimeRecord {
  hour: number,
  minutes: number,
  seconds: number,
  type: TimeRecordType
}

export interface TimeKeep {
  date: Date,
  hoursWorked: number,
  minutesWorked: number,
  comments: string,
  timeRecords: TimeRecord[]
}

@Component({
  selector: 'app-timekeeping',
  imports: [
    TimeComponent,
    CalendarComponent
  ],
  templateUrl: './timekeeping.component.html',
  styleUrl: './timekeeping.component.css'
})
export class TimekeepingComponent {
  timeKeep: TimeKeep = {
    date: new Date(),
    hoursWorked: 8,
    minutesWorked: 15,
    comments: '',
    timeRecords: [{
      hour: 9,
      minutes: 0,
      seconds: 0,
      type: TimeRecordType.IN_1
    }, {
      hour: 14,
      minutes: 0,
      seconds: 0,
      type: TimeRecordType.OUT_1
    }, {
      hour: 15,
      minutes: 0,
      seconds: 0,
      type: TimeRecordType.IN_2
    }, {
      hour: 18,
      minutes: 0,
      seconds: 0,
      type: TimeRecordType.OUT_2
    }]
  }
constructor(private api: ApiService) {
    this.api.getWorkdays()
}
  showMyData() {
    console.log(JSON.stringify(this.timeKeep))
  }
}



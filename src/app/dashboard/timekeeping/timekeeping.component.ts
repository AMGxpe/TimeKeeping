import { Component } from '@angular/core';
import { TimeComponent } from '../../shared/time/time.component';
import { CalendarComponent, DayState } from '../../shared/calendar/calendar.component';
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
  timeKeeps: TimeKeep[] = []
  daysInMoth: DayState[] = []

  constructor(private api: ApiService) {
  }

  fireTimeKeeps() {
    console.log('lanzamos los misiles')
    console.log(`days: ${JSON.stringify(this.daysInMoth.filter(day => day.selected))}`)

    this.daysInMoth.filter(day => day.selected).map(day => {
    })
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()
    this.daysInMoth.filter(day => day.selected).map(day =>
      this.api.updateTime(day, year, month).subscribe(() => console.log("day ok"))
    )

  }

  showMyData() {
    this.api.getTimeKeeping().subscribe(value => {
      let time: TimeKeep[] = value.horas.map(hora => {
        let timeRecords: TimeRecord[] = []
        timeRecords.push({
          hour: Number(hora.entrada1.split(":")[0]),
          minutes: Number(hora.entrada1.split(":")[1]),
          seconds: 0,
          type: TimeRecordType.IN_1

        });
        timeRecords.push({
          hour: Number(hora.salida1.split(":")[0]),
          minutes: Number(hora.salida1.split(":")[1]),
          seconds: 0,
          type: TimeRecordType.OUT_1

        });
        timeRecords.push({
          hour: Number(hora.entrada2.split(":")[0]),
          minutes: Number(hora.entrada2.split(":")[1]),
          seconds: 0,
          type: TimeRecordType.IN_2

        });
        timeRecords.push({
          hour: Number(hora.salida2.split(":")[0]),
          minutes: Number(hora.salida2.split(":")[1]),
          seconds: 0,
          type: TimeRecordType.OUT_2

        });
        return {
          date: hora.dia,
          hoursWorked: 8,
          minutesWorked: 0,
          comments: "",
          timeRecords: timeRecords,
        }
      })
      console.log(`time parsed: ${JSON.stringify(time)}`)
      this.timeKeeps = time
    })
  }

  updateDaysToLaunch(daysInMonth: DayState[]) {
    this.daysInMoth = daysInMonth.filter(day => day.day > 0 && day.selectable && day.selected)
  }
}



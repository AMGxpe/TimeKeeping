import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  @Output() daysInMonthEvent = new EventEmitter<DayState[]>()
  date = new Date();
  daysInMonth: number[] = [];
  firstDayOfMonth: number = 0;
  daysInMonthState: DayState[] = [];


  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();

    // Obtener el número de días en el mes actual
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Obtener el día de la semana del primer día del mes (0 = domingo, 1 = lunes, ...)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Ajustar el primer día de la semana si no es lunes (1)
    const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Crear un arreglo para almacenar los días del mes, iniciando en el día correcto
    this.daysInMonth = Array.from({ length: daysInMonth + startingDay }, (_, i) => {
      return i >= startingDay ? i - startingDay + 1 : i - startingDay;
    });
    this.daysInMonth.forEach(day => {
      if (day == 0) {
        this.daysInMonthState.push({
          day: 0,
          selectable: false,
          selected: false
        })
      } else {
        const dayOfMonth = new Date(year, month, day).getDay();
        let isSelectable = dayOfMonth != 0 && dayOfMonth != 6
        this.daysInMonthState.push({
          day: day,
          selectable: isSelectable,
          selected: isSelectable
        })
      }
    })
    this.daysInMonthEvent.emit(this.daysInMonthState)
    // console.log(JSON.stringify(this.daysInMonthState))
    this.firstDayOfMonth = firstDayOfMonth;
  }

  changeDay(day: DayState) {
    if(!day.selectable) return;
    this.daysInMonthState.find(value => value.day == day.day)!.selected = !day.selected
  }
}

export interface DayState {
  day: number,
  selected: boolean,
  selectable: boolean
}
